import React from "react";
import ProductCard from "../cards/ProductCard";
import { getProducts } from "@/app/actions/server/product";

const Products = async () => {
  const allProducts = (await getProducts()) || [];
  const products = allProducts.slice(0, 8);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="border-b-2 border-primary pb-1 w-fit mx-auto font-semibold text-3xl">
          Our Products
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
