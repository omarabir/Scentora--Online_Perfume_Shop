"use client";
import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter, usePathname } from "next/navigation";
import {
  toggleWishlist,
  getWishlistStatus,
} from "@/app/actions/server/wishlist";

const WishListButton = ({ productId }) => {
  const { data: session } = useSession();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkStatus = async () => {
      if (session && productId) {
        const status = await getWishlistStatus(productId);
        setIsWishlisted(status);
      }
    };
    checkStatus();
  }, [session, productId]);

  const handleWishlist = async () => {
    if (!session) {
      toast.error("Please login first to add to wishlist!");
      return;
    }

    if (!productId) {
      console.error("No product ID provided to WishListButton");
      return;
    }

    setLoading(true);
    try {
      const result = await toggleWishlist(productId);
      if (result.error) {
        toast.error(result.error);
      } else {
        setIsWishlisted(result.isWishlisted);
        toast.success(result.message);

        // Refresh page if we are on the wishlist page and removing an item
        if (pathname === "/wishlist" && !result.isWishlisted) {
          router.refresh();
        }
      }
    } catch (error) {
      console.error("Wishlist toggle error", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleWishlist}
      className={`transition-colors flex items-center justify-center ${isWishlisted ? "text-white" : "text-white hover:text-gray-200"}`}
      title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      disabled={loading}
    >
      {isWishlisted ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
    </button>
  );
};

export default WishListButton;
