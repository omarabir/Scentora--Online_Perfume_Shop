"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const collection = await dbConnect(collections.PRODUCTS);
  const products = await collection.find().toArray();
  return products;
};

export const getSingleProduct = async (id) => {
  if (id.length !== 24) return {};
  const collection = await dbConnect(collections.PRODUCTS);
  const product = await collection.findOne({
    _id: new ObjectId(id),
  });
  return product || {};
};
