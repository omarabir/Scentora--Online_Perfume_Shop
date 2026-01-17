"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiShoppingBag } from "react-icons/fi";
import { toast } from "react-toastify";
import { useCart } from "@/provider/CartProvider";

const CartButton = ({ product }) => {
  const { status } = useSession();
  const router = useRouter();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (status !== "authenticated") {
      toast.info("Please login to add items to cart");
      router.push("/login");
      return;
    }

    addToCart(product);
    toast.success("Added to cart!");
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="text-white hover:text-gray-200 transition-colors"
        title="Add to Cart"
      >
        <FiShoppingBag size={20} />
      </button>
    </div>
  );
};

export default CartButton;
