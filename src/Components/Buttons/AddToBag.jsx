"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { useCart } from "@/provider/CartProvider";

const AddToBag = ({ product }) => {
  const { status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (status !== "authenticated") {
      toast.info("Please login to add items to cart");
      router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
      return;
    }

    addToCart(product);
    toast.success("Added to cart!");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full btn bg-primary text-white uppercase tracking-[0.15em] text-sm font-bold transition-colors duration-300 hover:bg-opacity-90 border-none"
    >
      Add to Bag
    </button>
  );
};

export default AddToBag;
