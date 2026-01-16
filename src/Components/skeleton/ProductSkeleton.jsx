import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="bg-white p-4 border border-gray-100 rounded-lg flex flex-col items-center animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-64 mb-4 bg-gray-200 rounded-md"></div>

      {/* Product Info Skeleton */}
      <div className="flex flex-col items-center gap-2 w-full">
        {/* Title Skeleton */}
        <div className="h-6 w-3/4 bg-gray-200 rounded"></div>

        {/* Rating Skeleton */}
        <div className="flex items-center gap-1 mt-1">
          <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
        </div>

        {/* Price Skeleton */}
        <div className="h-6 w-1/3 bg-gray-200 rounded mt-1"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
