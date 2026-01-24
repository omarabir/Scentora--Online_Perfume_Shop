"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { searchProducts } from "@/app/actions/server/product";

const SearchButton = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length >= 2) {
        try {
          const results = await searchProducts(query);
          setSuggestions(results);
          setShowSuggestions(true);
        } catch (error) {
          console.error("Search error:", error);
          setSuggestions([]);
        }
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    };

    const timeoutId = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div
      ref={wrapperRef}
      className="relative flex flex-1 justify-center w-full max-w-xl"
    >
      <div className="flex w-full items-center border border-gray-200 dark:border-gray-700 rounded-full bg-gray-50 dark:bg-gray-800 focus-within:bg-white dark:focus-within:bg-gray-700 focus-within:border-primary transition-colors overflow-hidden h-11 relative z-10">
        <input
          className="flex-1 w-full h-full bg-transparent px-6 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setShowSuggestions(true)}
        />
        <button className="btn h-full px-8 bg-primary dark:bg-primary text-white hover:bg-opacity-90 transition-colors flex items-center justify-center">
          <FaSearch className="w-4 h-4" />
        </button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-12 left-0 w-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
          {suggestions.map((product) => (
            <Link
              key={product._id}
              href={`/shop/${product._id}`}
              className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b last:border-0 border-gray-100 dark:border-gray-700"
              onClick={() => setShowSuggestions(false)}
            >
              <div className="relative w-12 h-12 shrink-0 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-primary font-medium">
                  {product.brand}
                </span>
                <span className="text-sm text-gray-800 dark:text-gray-200 font-medium truncate">
                  {product.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchButton;
