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
