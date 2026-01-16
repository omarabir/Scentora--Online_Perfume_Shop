import React from "react";

const BlogSkeleton = () => {
  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans">
      <div className="bg-gray-50 py-16 md:py-24 text-center border-b border-gray-100 animate-pulse">
        <div className="h-4 w-24 bg-gray-200 mx-auto mb-4 rounded"></div>
        <div className="h-12 w-64 md:w-96 bg-gray-200 mx-auto mb-6 rounded"></div>
        <div className="h-4 w-full max-w-lg bg-gray-200 mx-auto rounded"></div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex justify-center gap-8 mb-16 animate-pulse">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-4 w-16 bg-gray-200 rounded"></div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="flex flex-col h-full bg-white animate-pulse"
            >
              <div className="w-full aspect-[4/3] bg-gray-200 mb-6 rounded-sm"></div>

              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-3 w-20 bg-gray-200 rounded"></div>
                  <div className="h-3 w-3 bg-gray-200 rounded-full"></div>
                  <div className="h-3 w-20 bg-gray-200 rounded"></div>
                </div>

                <div className="h-8 w-full bg-gray-200 mb-3 rounded"></div>
                <div className="h-8 w-2/3 bg-gray-200 mb-3 rounded"></div>

                <div className="space-y-2 mb-6">
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                </div>

                <div className="mt-auto h-4 w-24 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
