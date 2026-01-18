"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// Helper to fix image URLs just like in products action
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

const getSessionUser = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) return null;
  return session.user;
};

export const getCart = async () => {
  const user = await getSessionUser();
  if (!user) return [];

  const cartCollection = await dbConnect(collections.CART);
  const cart = await cartCollection.findOne({ email: user.email });

  if (!cart || !cart.items || cart.items.length === 0) return [];

  // cart.items is an array of ObjectIds: [id1, id1, id2]

  // Fetch all unique products
  const uniqueIds = [...new Set(cart.items.map((id) => id.toString()))].map(
    (id) => new ObjectId(id)
  );

  const productsCollection = await dbConnect(collections.PRODUCTS);
  const products = await productsCollection
    .find({ _id: { $in: uniqueIds } })
    .toArray();

  // Map back to the flat array structure expected by the frontend
  // If cart.items has [A, A, B], we need to return [ProductA, ProductA, ProductB]

  const productMap = products.reduce((acc, p) => {
    acc[p._id.toString()] = {
      ...p,
      _id: p._id.toString(),
      image: getFixedImage(p.image),
    };
    return acc;
  }, {});

  const fullCart = cart.items
    .map((id) => productMap[id.toString()])
    .filter(Boolean); // Filter out any products that might have been deleted from DB

  return fullCart;
};

export const addToCartServer = async (productId) => {
  const user = await getSessionUser();
  if (!user) return { error: "Login required" };

  const cartCollection = await dbConnect(collections.CART);

  await cartCollection.updateOne(
    { email: user.email },
    {
      $push: { items: new ObjectId(productId) },
      $setOnInsert: { createdAt: new Date() },
    },
    { upsert: true }
  );

  return { success: true };
};

export const removeOneFromCartServer = async (productId) => {
  const user = await getSessionUser();
  if (!user) return { error: "Login required" };

  const cartCollection = await dbConnect(collections.CART);
  const cart = await cartCollection.findOne({ email: user.email });

  if (!cart || !cart.items) return { success: true };

  // Find index of first occurrence
  const index = cart.items.findIndex((id) => id.toString() === productId);

  if (index > -1) {
    // We can't use $pull because it removes ALL instances.
    // We need to essentially set the array to a new one with one item removed,
    // OR use a more complex update if MongoDB version supports it.
    // Easiest reliable way for "remove just one" in a plain array of IDs is to read-modify-write
    // OR use the updated array.

    // However, standard $pull removes all.
    // To remove one, usually people store {id, qty}.
    // Since we store flat array [id, id, id], we have to be careful.

    const newItems = [...cart.items];
    newItems.splice(index, 1);

    await cartCollection.updateOne(
      { email: user.email },
      { $set: { items: newItems } }
    );
  }

  return { success: true };
};

export const removeFromCartServer = async (productId) => {
  const user = await getSessionUser();
  if (!user) return { error: "Login required" };

  const cartCollection = await dbConnect(collections.CART);

  // Remove ALL instances of this product ID
  await cartCollection.updateOne(
    { email: user.email },
    { $pull: { items: new ObjectId(productId) } }
  );

  return { success: true };
};
