import React from "react";
import { getWishlistProducts } from "@/app/actions/server/wishlist";
import ProductCard from "@/Components/cards/ProductCard";
import Link from "next/link";
import { FaHeartBroken } from "react-icons/fa";

export const metadata = {
  title: "My Wishlist | Sentora",
  description: "Your curated list of favorite fragrances.",
};

const WishlistPage = async () => {
  const wishlistProducts = await getWishlistProducts();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>{" "}
        <span className="mx-2">»</span>{" "}
        <span className="font-semibold text-gray-900">Wishlist</span>
      </div>

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">
          My Wishlist
        </h1>
        <p className="text-gray-500 mt-2">
          {wishlistProducts.length}{" "}
          {wishlistProducts.length === 1 ? "item" : "items"} saved
        </p>
      </header>

      {wishlistProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-lg border border-dashed border-gray-200">
          <FaHeartBroken className="text-gray-300 text-6xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Your wishlist is empty
          </h2>
          <p className="text-gray-500 mb-6 text-center max-w-md">
            Save items you love here to check them out later.
          </p>
          <Link href="/shop" className="btn btn-primary text-white px-8">
            Explore Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
