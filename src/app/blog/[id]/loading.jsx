import React from "react";

const BlogPostSkeleton = () => {
  return (
    <div className="bg-white min-h-screen">
    
      <div className="container mx-auto px-6 py-6 border-b border-gray-100 mb-8 animate-pulse">
        <div className="h-4 w-32 bg-gray-200 rounded"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 animate-pulse">
        
        <div className="flex flex-col items-center mb-12">
          <div className="h-4 w-24 bg-gray-200 mb-6 rounded"></div>{" "}
          
          <div className="h-10 md:h-14 w-3/4 bg-gray-200 mb-6 rounded"></div>{" "}
       
          <div className="h-10 md:h-14 w-1/2 bg-gray-200 mb-8 rounded"></div>{" "}
          
          <div className="flex gap-6">
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>

      
        <div className="w-full aspect-[16/9] bg-gray-200 mb-16 rounded-sm"></div>

   
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-32 w-full bg-gray-50 border-l-4 border-gray-200 my-8 rounded"></div>{" "}
 
   
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
        </div>

        <div className="max-w-2xl mx-auto border-t border-b border-gray-100 py-8 my-12 flex items-center justify-between">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="flex gap-4">
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
          </div>
        </div>

      
        <div className="max-w-2xl mx-auto flex items-center gap-6 bg-gray-50 p-8 rounded-lg">
          <div className="h-20 w-20 bg-gray-200 rounded-full shrink-0"></div>
          <div className="w-full">
            <div className="h-5 w-40 bg-gray-200 mb-3 rounded"></div>
            <div className="h-3 w-full bg-gray-200 mb-2 rounded"></div>
            <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostSkeleton;
