import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { getCollections } from "@/app/actions/server/product";

const Collections = async () => {
  const categories = await getCollections();

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">
          Curated Collections
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-lg cursor-pointer h-96 shadow-lg"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="text-3xl font-serif font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {cat.title}
              </h3>
              <span className="text-sm tracking-widest uppercase mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                {cat.countText}
              </span>

              <Link
                href={`/shop?genders=${cat.gender}`}
                className="flex items-center gap-2 border-b border-white pb-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200 hover:text-primary hover:border-primary"
              >
                Shop Now <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
