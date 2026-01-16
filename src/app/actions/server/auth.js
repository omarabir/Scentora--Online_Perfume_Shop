"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
export const postUser = async (data) => {
  const { email, password, name } = data;
  if (!email || !password) return null;

  const collection = await dbConnect(collections.USERS);
  const isExist = await collection.findOne({ email });
  if (isExist) return null;

  const newUser = {
    provider: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 14),
    role: "user",
  };
  const result = await collection.insertOne(newUser);
  if (result.acknowledged) {
    return {
      acknowledged: true,
      ...newUser,
      _id: result.insertedId.toString(),
    };
  }
  return null;
};

export const loginUser = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) return null;
  const collection = await dbConnect(collections.USERS);
  const user = await collection.findOne({ email });
  if (!user) return null;
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (isPasswordValid) {
    return user
  }else{
    return null
  }
};
