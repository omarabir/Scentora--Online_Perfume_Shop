import React from "react";
import ProductCard from "../cards/ProductCard";

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="flex mb-5 flex-col items-center justify-center py-20 text-gray-500">
        <p className="text-lg">No products found matching these filters.</p>
        <p className="text-sm mt-2">Try adjusting your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6 w-full">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
