import React from "react";

const CartSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="flex gap-2 mb-8">
        <div className="h-4 w-12 bg-gray-200 rounded"></div>
        <div className="h-4 w-4 bg-gray-100 rounded"></div>
        <div className="h-4 w-24 bg-gray-200 rounded"></div>
      </div>

    
      <div className="h-8 w-48 bg-gray-200 rounded mb-8"></div>

      <div className="bg-white border border-gray-100 rounded-sm">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="p-4 md:p-6 border-b border-gray-100 last:border-b-0"
          >
            <div className="flex gap-4 md:gap-6 items-start md:items-center">
              {/* Image */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 shrink-0 rounded-sm"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
                <div className="w-full md:w-1/3">
                  {/* Product Name */}
                  <div className="h-5 md:h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
                  {/* Brand */}
                  <div className="h-3 md:h-4 w-1/2 bg-gray-200 rounded"></div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-2 md:gap-8 w-full md:w-auto mt-2 md:mt-0">
                  {/* Quantity Control */}
                  <div className="w-24 h-8 md:w-32 md:h-10 bg-gray-200 rounded-sm"></div>

                  {/* Price */}
                  <div className="w-16 h-6 md:w-20 md:h-7 bg-gray-200 rounded"></div>

                  {/* Trash Icon */}
                  <div className="w-8 h-8 bg-gray-200 rounded-full ml-2 md:ml-0"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartSkeleton;
