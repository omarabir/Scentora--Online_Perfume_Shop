"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const IMAGE_MAPPINGS = {
  "ysl-libre":
    "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop",
  "gucci-guilty-men":
    "https://images.unsplash.com/photo-1523293188086-b4699564928e?q=80&w=600&auto=format&fit=crop",
  "ysl-y-men":
    "https://images.unsplash.com/photo-1585675100412-4261eeaafa31?q=80&w=600&auto=format&fit=crop",
  "gucci-bloom":
    "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=600&auto=format&fit=crop",
  "adg-profumo":
    "https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?q=80&w=600&auto=format&fit=crop",
  "armani-si":
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop",
  "stronger-with-you":
    "https://images.unsplash.com/photo-1530630458144-014709e10016?q=80&w=600&auto=format&fit=crop",
};

const getFixedImage = (originalImage) => {
  if (!originalImage)
    return "https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&w=600&auto=format&fit=crop";
  const lowerImg = originalImage.toLowerCase();
  for (const [key, url] of Object.entries(IMAGE_MAPPINGS)) {
    if (lowerImg.includes(key)) return url;
  }
  return originalImage.replace("i.ibb.co.com", "i.ibb.co");
};

export const getProducts = async () => {
  const collection = await dbConnect(collections.PRODUCTS);
  const products = await collection.find().toArray();
  return products.map((product) => ({
    ...product,
    _id: product._id.toString(),
    image: getFixedImage(product.image),
  }));
};

export const getSingleProduct = async (id) => {
  if (id.length !== 24) return {};
  const collection = await dbConnect(collections.PRODUCTS);
  const product = await collection.findOne({
    _id: new ObjectId(id),
  });

  if (!product) return {};

  return {
    ...product,
    _id: product._id.toString(),
    image: getFixedImage(product.image),
  };
};

export const searchProducts = async (query) => {
  if (!query || query.length < 2) return [];
  const collection = await dbConnect(collections.PRODUCTS);
  const regex = new RegExp(query, "i");

  const products = await collection
    .find({
      $or: [{ name: regex }, { brand: regex }, { category: regex }],
    })
    .limit(5)
    .toArray();

  return products.map((product) => ({
    ...product,
    _id: product._id.toString(),
    image: getFixedImage(product.image),
  }));
};

export const getFilterOptions = async () => {
  const collection = await dbConnect(collections.PRODUCTS);

  // Use aggregate instead of distinct for strict API v1 compatibility
  const brandsResult = await collection
    .aggregate([{ $group: { _id: "$brandName" } }, { $sort: { _id: 1 } }])
    .toArray();
  const brands = brandsResult.map((item) => item._id).filter(Boolean);

  const gendersResult = await collection
    .aggregate([{ $group: { _id: "$gender" } }, { $sort: { _id: 1 } }])
    .toArray();
  const genders = gendersResult.map((item) => item._id).filter(Boolean);

  // Get max price for range slider
  const priceResult = await collection
    .aggregate([
      {
        $group: {
          _id: null,
          maxPrice: { $max: "$price" },
          minPrice: { $min: "$price" },
        },
      },
    ])
    .toArray();

  const { maxPrice, minPrice } = priceResult[0] || {
    maxPrice: 1000,
    minPrice: 0,
  };

  return {
    brands: brands.filter(Boolean).sort(),
    genders: genders.filter(Boolean).sort(),
    priceRange: { min: minPrice, max: maxPrice },
  };
};

export const getFilteredProducts = async (filters) => {
  const collection = await dbConnect(collections.PRODUCTS);
  const {
    sort,
    minPrice,
    maxPrice,
    brands,
    genders,
    q,
    page = 1,
    limit = 12,
  } = filters;

  const query = {};

  // Search Query
  if (q) {
    const regex = new RegExp(q, "i");
    query.$or = [{ name: regex }, { brandName: regex }, { gender: regex }];
  }

  // Price Filter
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = parseFloat(minPrice);
    if (maxPrice) query.price.$lte = parseFloat(maxPrice);
  }

  // Brand Filter
  if (brands) {
    const brandList = brands.split(",");
    if (brandList.length > 0) {
      query.brandName = { $in: brandList };
    }
  }

  // Gender Filter
  if (genders) {
    const genderList = genders.split(",");
    if (genderList.length > 0) {
      query.gender = { $in: genderList.map((g) => new RegExp(g, "i")) };
    }
  }

  // Sorting
  let sortOptions = {};
  switch (sort) {
    case "price-asc":
      sortOptions = { price: 1 };
      break;
    case "price-desc":
      sortOptions = { price: -1 };
      break;
    case "newest":
      sortOptions = { year: -1 };
      break;
    case "rating":
      sortOptions = { "metrics.rating": -1 };
      break;
    default:
      sortOptions = { _id: -1 };
  }

  // Get total count for pagination
  const totalProducts = await collection.countDocuments(query);
  const totalPages = Math.ceil(totalProducts / limit);
  const skip = (parseInt(page) - 1) * parseInt(limit);

  const products = await collection
    .find(query)
    .sort(sortOptions)
    .skip(skip)
    .limit(parseInt(limit))
    .toArray();

  return {
    products: products.map((product) => ({
      ...product,
      _id: product._id.toString(),
      image: getFixedImage(product.image),
    })),
    pagination: {
      currentPage: parseInt(page),
      totalPages,
      totalProducts,
      hasNextPage: parseInt(page) < totalPages,
      hasPrevPage: parseInt(page) > 1,
    },
  };
};

export const getCollections = async () => {
  const productsCollection = await dbConnect(collections.PRODUCTS);

  // Get counts for each gender/category
  const genderCounts = await productsCollection
    .aggregate([
      {
        $group: {
          _id: "$gender",
          count: { $sum: 1 },
        },
      },
    ])
    .toArray();

  // Map genders to collection data
  const categoryMap = {
    men: {
      title: "For Him",
      image:
        "https://i.ibb.co.com/PsknsjQ6/image.png",
      gender: "men",
    },
    women: {
      title: "For Her",
      image:
        "https://i.ibb.co.com/FLvVHFsC/image.png",
      gender: "women",
    },
    unisex: {
      title: "Unisex",
      image:
        "https://i.ibb.co.com/6csPDsHT/image.png",
      gender: "unisex",
    },
  };

  const categoryCollections = genderCounts.map((item) => {
    const gender = item._id.toLowerCase();
    const categoryInfo = categoryMap[gender] || {
      title: item._id,
      image:
        "https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&w=800&auto=format&fit=crop",
      gender: gender,
    };

    return {
      ...categoryInfo,
      count: item.count,
      countText: `${item.count} Product${item.count !== 1 ? "s" : ""}`,
    };
  });

  return categoryCollections
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count);
};
