"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const FilterSection = ({ title, children, isOpen: defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 bg-gray-50/50 text-left transition-colors hover:bg-gray-100/50"
      >
        <span className="font-semibold text-gray-700 text-sm">{title}</span>
        {isOpen ? (
          <FaChevronUp className="text-[10px] text-gray-400" />
        ) : (
          <FaChevronDown className="text-[10px] text-gray-400" />
        )}
      </button>

      {isOpen && (
        <div className="px-4 py-3 border-t border-gray-100">{children}</div>
      )}
    </div>
  );
};

const ShopSidebar = ({
  brands = [],
  genders = [],
  priceRange = { min: 0, max: 1000 },
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tempFilters, setTempFilters] = useState({
    q: searchParams.get("q") || "",
    sort: searchParams.get("sort") || "newest",
    genders: searchParams.get("genders")
      ? searchParams.get("genders").split(",")
      : [],
    brands: searchParams.get("brands")
      ? searchParams.get("brands").split(",")
      : [],
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
  });

  // Keep state in sync if URL changes externally
  useEffect(() => {
    setTempFilters({
      q: searchParams.get("q") || "",
      sort: searchParams.get("sort") || "newest",
      genders: searchParams.get("genders")
        ? searchParams.get("genders").split(",")
        : [],
      brands: searchParams.get("brands")
        ? searchParams.get("brands").split(",")
        : [],
      minPrice: searchParams.get("minPrice") || "",
      maxPrice: searchParams.get("maxPrice") || "",
    });
  }, [searchParams]);

  const handleTextChange = (e) => {
    setTempFilters({ ...tempFilters, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (group, value) => {
    const current = [...tempFilters[group]];
    const index = current.indexOf(value);

    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(value);
    }

    setTempFilters({ ...tempFilters, [group]: current });
  };

  const removeFilter = (group, value) => {
    const current = [...tempFilters[group]];
    const index = current.indexOf(value);
    if (index > -1) {
      current.splice(index, 1);
      setTempFilters({ ...tempFilters, [group]: current });
    }
  };

  const handleApply = () => {
    const params = new URLSearchParams();

    if (tempFilters.q) params.set("q", tempFilters.q);
    if (tempFilters.sort) params.set("sort", tempFilters.sort);
    if (tempFilters.genders.length > 0)
      params.set("genders", tempFilters.genders.join(","));
    if (tempFilters.brands.length > 0)
      params.set("brands", tempFilters.brands.join(","));
    if (tempFilters.minPrice) params.set("minPrice", tempFilters.minPrice);
    if (tempFilters.maxPrice) params.set("maxPrice", tempFilters.maxPrice);

    router.push(`/shop?${params.toString()}`, { scroll: false });
  };

  const handleReset = () => {
    setTempFilters({
      q: "",
      sort: "newest",
      genders: [],
      brands: [],
      minPrice: "",
      maxPrice: "",
    });
    router.push("/shop");
  };

  const sortOptions = [
    { label: "Newest Arrivals", value: "newest" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Top Rated", value: "rating" },
  ];

  return (
    <div className="bg-[#f4f6f8]  rounded-md h-fit">
      {(tempFilters.genders.length > 0 || tempFilters.brands.length > 0) && (
        <div className="mb-6 flex flex-wrap gap-2">
          {tempFilters.genders.map((g) => (
            <button
              key={g}
              onClick={() => removeFilter("genders", g)}
              className="flex items-center gap-1 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-600 hover:border-red-400 hover:text-red-500 transition-colors"
            >
              {g} <FaTimes className="text-[10px]" />
            </button>
          ))}
          {tempFilters.brands.map((b) => (
            <button
              key={b}
              onClick={() => removeFilter("brands", b)}
              className="flex items-center gap-1 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-600 hover:border-red-400 hover:text-red-500 transition-colors"
            >
              {b} <FaTimes className="text-[10px]" />
            </button>
          ))}
        </div>
      )}

      <div className="mb-2">
        <label className="block text-xs font-bold uppercase text-gray-500 mb-2 tracking-wide">
          Filter by
        </label>
      </div>

      <FilterSection title="Sort Order">
        <div className="space-y-2">
          {sortOptions.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center justify-between cursor-pointer group hover:bg-gray-50 p-1 -mx-1 rounded"
            >
              <span
                className={`text-sm ${tempFilters.sort === opt.value ? "text-primary font-medium" : "text-gray-600 group-hover:text-gray-900"}`}
              >
                {opt.label}
              </span>
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center ${tempFilters.sort === opt.value ? "border-primary" : "border-gray-300"}`}
              >
                {tempFilters.sort === opt.value && (
                  <div className="w-2 h-2 rounded-full bg-primary" />
                )}
              </div>
              <input
                type="radio"
                name="sort"
                value={opt.value}
                checked={tempFilters.sort === opt.value}
                onChange={handleTextChange}
                className="hidden"
              />
            </label>
          ))}
        </div>
      </FilterSection>

      {genders.length > 0 && (
        <FilterSection title="Category">
          <div className="space-y-1">
            {genders.map((g) => (
              <label
                key={g}
                className="flex items-center cursor-pointer group py-1"
              >
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center mr-3 transition-colors ${tempFilters.genders.includes(g) ? "bg-primary border-primary" : "bg-white border-gray-300 group-hover:border-primary"}`}
                >
                  {tempFilters.genders.includes(g) && (
                    <FaCheck className="text-white text-[10px]" />
                  )}
                </div>
                <input
                  type="checkbox"
                  checked={tempFilters.genders.includes(g)}
                  onChange={() => handleCheckboxChange("genders", g)}
                  className="hidden"
                />
                <span className="text-sm text-gray-600 capitalize group-hover:text-gray-900">
                  {g}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>
      )}

      {brands.length > 0 && (
        <FilterSection title="Brands">
          <div className="space-y-1 max-h-48 overflow-y-auto custom-scrollbar pr-1">
            {brands.map((b) => (
              <label
                key={b}
                className="flex items-center cursor-pointer group py-1"
              >
                <div
                  className={`w-4 h-4 min-w-[1rem] rounded border flex items-center justify-center mr-3 transition-colors ${tempFilters.brands.includes(b) ? "bg-primary border-primary" : "bg-white border-gray-300 group-hover:border-primary"}`}
                >
                  {tempFilters.brands.includes(b) && (
                    <FaCheck className="text-white text-[10px]" />
                  )}
                </div>
                <input
                  type="checkbox"
                  checked={tempFilters.brands.includes(b)}
                  onChange={() => handleCheckboxChange("brands", b)}
                  className="hidden"
                />
                <span className="text-sm text-gray-600 group-hover:text-gray-900 truncate">
                  {b}
                </span>
              </label>
            ))}
          </div>
        </FilterSection>
      )}

      {/* Buttons */}
      <div className="my-8 grid grid-cols-2 gap-3 ">
        <button
          onClick={handleApply}
          className="col-span-1 py-3 bg-primary text-white font-bold rounded shadow-sm hover:bg-black transition-colors uppercase tracking-wider text-xs"
        >
          Filter
        </button>

        <button
          onClick={handleReset}
          className="col-span-1 py-3 bg-white border border-gray-200 text-gray-500 font-bold rounded hover:bg-gray-50 transition-colors uppercase tracking-wider text-xs"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ShopSidebar;
