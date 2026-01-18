"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
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

export const getWishlistProducts = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) return [];

    const wishlistCollection = await dbConnect(collections.WISHLIST);
    const userWishlist = await wishlistCollection.findOne({
      email: session.user.email,
    });

    if (
      !userWishlist ||
      !userWishlist.products ||
      userWishlist.products.length === 0
    ) {
      return [];
    }

    const productCollection = await dbConnect(collections.PRODUCTS);
    const products = await productCollection
      .find({ _id: { $in: userWishlist.products } })
      .toArray();

    return products.map((product) => ({
      ...product,
      _id: product._id.toString(),
      image: getFixedImage(product.image),
    }));
  } catch (error) {
    console.error("Get wishlist error:", error);
    return [];
  }
};

export const toggleWishlist = async (productId) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return { error: "Please login first" };
    }

    const userId = session.user.id || session.token?.id || session.user._id; // Adjust based on how authOptions saves ID

    const userEmail = session.user.email;
    if (!userEmail) return { error: "User not identified" };

    const wishlistCollection = await dbConnect(collections.WISHLIST);

    // Find the user's wishlist
    const userWishlist = await wishlistCollection.findOne({ email: userEmail });

    if (!userWishlist) {
      await wishlistCollection.insertOne({
        email: userEmail,
        products: [new ObjectId(productId)],
        createdAt: new Date(),
      });
      return { isWishlisted: true, message: "Added to wishlist" };
    }

    // Check if product exists
    const productObjectId = new ObjectId(productId);
    const productExists = userWishlist.products.some(
      (id) => id.toString() === productId
    );

    if (productExists) {
      // Remove
      await wishlistCollection.updateOne(
        { email: userEmail },
        { $pull: { products: productObjectId } }
      );
      return { isWishlisted: false, message: "Removed from wishlist" };
    } else {
      // Add
      await wishlistCollection.updateOne(
        { email: userEmail },
        { $addToSet: { products: productObjectId } }
      );
      return { isWishlisted: true, message: "Added to wishlist" };
    }
  } catch (error) {
    console.error("Wishlist error:", error);
    return { error: "Something went wrong" };
  }
};

export const getWishlistStatus = async (productId) => {
  // Only works if session exists
  const session = await getServerSession(authOptions);
  if (!session || !session.user) return false;

  const wishlistCollection = await dbConnect(collections.WISHLIST);
  const userWishlist = await wishlistCollection.findOne({
    email: session.user.email,
  });

  if (!userWishlist) return false;
  return userWishlist.products.some((id) => id.toString() === productId);
};
