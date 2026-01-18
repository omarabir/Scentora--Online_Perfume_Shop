import React from "react";
import {
  getFilteredProducts,
  getFilterOptions,
} from "@/app/actions/server/product";
import ShopSidebar from "@/Components/shop/ShopSidebar";
import ProductGrid from "@/Components/shop/ProductGrid";
import Pagination from "@/Components/shop/Pagination";
import Link from "next/link";
import { FaFilter } from "react-icons/fa";

export const metadata = {
  title: "Shop | Sentora",
  description: "Browse our extensive collection of fragrances.",
};

const ShopPage = async (props) => {
  const searchParams = await props.searchParams;

  const [result, filterOptions] = await Promise.all([
    getFilteredProducts(searchParams || {}),
    getFilterOptions(),
  ]);

  const { products, pagination } = result;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 overflow-x-hidden">
      <div className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>{" "}
        <span className="mx-2">»</span>{" "}
        <span className="font-semibold text-gray-900">Shop</span>
      </div>

      <div className="flex-none lg:flex gap-4 lg:gap-8 relative">
        <aside className=" lg:w-1/4 shrink-0">
          <div className="lg:sticky lg:top-24">
            <ShopSidebar
              brands={filterOptions.brands}
              genders={filterOptions.genders}
              priceRange={filterOptions.priceRange}
            />
          </div>
        </aside>

        <main className="flex-1  lg:w-3/4 min-w-0">
          <div className="mb-4 text-sm text-gray-600">
            Showing {products.length} of {pagination.totalProducts} products
          </div>

          <ProductGrid products={products} />

        <div className="mt-6">  <Pagination  pagination={pagination} /></div>
        </main>
      </div>
    </div>
  );
};

export default ShopPage;
