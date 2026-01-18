import React from "react";

const Loading = () => {
  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans">
      {/* Breadcrumb Skeleton */}
      <div className="container mx-auto px-6 py-6 border-b border-gray-100 mb-8">
        <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24">
          {/* Left Column - Image Section */}
          <div className="lg:col-span-7">
            {/* Main Image Skeleton */}
            <div className="bg-[#f8f8f8] aspect-4/5 md:aspect-1/1 lg:aspect-4/5 w-full rounded-sm animate-pulse"></div>

            {/* Thumbnail Skeleton */}
            <div className="flex gap-4 mt-6">
              <div className="w-24 h-24 border border-gray-100 bg-gray-100 animate-pulse"></div>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-12 space-y-6">
              {/* Brand Name */}
              <div className="h-3 bg-gray-200 rounded w-24 animate-pulse mb-2"></div>

              {/* Product Name */}
              <div className="h-10 bg-gray-200 rounded w-3/4 animate-pulse mb-4"></div>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-6 mb-8 border-b border-gray-100 pb-8">
                <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-32 animate-pulse"></div>
              </div>

              {/* Price */}
              <div className="h-8 bg-gray-200 rounded w-32 animate-pulse mb-6"></div>

              {/* Description */}
              <div className="space-y-3 mb-8">
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
              </div>

              {/* Performance/Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="h-12 bg-gray-100 rounded animate-pulse"></div>
                <div className="h-12 bg-gray-100 rounded animate-pulse"></div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mb-8">
                <div className="flex-1 h-12 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-12 h-12 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Shipping Info */}
              <div className="flex justify-between py-6 border-t border-gray-100">
                <div className="h-10 w-20 bg-gray-100 rounded animate-pulse"></div>
                <div className="h-10 w-20 bg-gray-100 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
