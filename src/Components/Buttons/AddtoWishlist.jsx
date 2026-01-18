"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import {
  toggleWishlist,
  getWishlistStatus,
} from "@/app/actions/server/wishlist";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const AddtoWishlist = ({ productId }) => {
  const { data: session } = useSession();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [loading, setLoading] = useState(false);

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
      console.error("No product ID provided to AddtoWishlist");
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
      className={`w-full btn btn-outline ${
        isWishlisted
          ? "btn-error text-primary bg-error hover:bg-red-600 hover:border-red-600"
          : "btn-primary hover:text-white"
      } uppercase tracking-[0.15em] text-xs font-bold transition-colors duration-300 gap-2 items-center`}
      disabled={loading}
    >
      {isWishlisted ? (
        <>
          <FaHeart className="w-4 h-4" /> Remove from Wishlist
        </>
      ) : (
        <>
          <FaRegHeart className="w-4 h-4" /> Add to Wishlist
        </>
      )}
    </button>
  );
};

export default AddtoWishlist;
