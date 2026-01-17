"use client";
import { useCart } from "@/provider/CartProvider";
import React from "react";

const CartValue = () => {
  const { cartCount } = useCart();
  return (
    <div>
      <span className="indicator-item badge badge-primary text-white text-[10px] h-4 w-4 p-0 border-2 border-white">
        {cartCount}
      </span>
    </div>
  );
};

export default CartValue;
