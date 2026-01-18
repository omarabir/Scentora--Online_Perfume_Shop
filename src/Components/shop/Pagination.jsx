"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ pagination }) => {
  const searchParams = useSearchParams();
  const { currentPage, totalPages, hasNextPage, hasPrevPage } = pagination;

  const createPageUrl = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `/shop?${params.toString()}`;
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {/* Previous Button */}
      {hasPrevPage ? (
        <Link
          href={createPageUrl(currentPage - 1)}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 hover:border-primary hover:text-primary transition-colors"
        >
          <FaChevronLeft className="text-sm" />
        </Link>
      ) : (
        <button
          disabled
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-300 cursor-not-allowed"
        >
          <FaChevronLeft className="text-sm" />
        </button>
      )}

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span
            key={`ellipsis-${index}`}
            className="flex items-center justify-center w-10 h-10 text-gray-400"
          >
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={createPageUrl(page)}
            className={`flex items-center justify-center w-10 h-10 rounded-lg border font-medium transition-colors ${
              currentPage === page
                ? "bg-primary text-white border-primary"
                : "border-gray-300 hover:border-primary hover:text-primary"
            }`}
          >
            {page}
          </Link>
        )
      )}

      {/* Next Button */}
      {hasNextPage ? (
        <Link
          href={createPageUrl(currentPage + 1)}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 hover:border-primary hover:text-primary transition-colors"
        >
          <FaChevronRight className="text-sm" />
        </Link>
      ) : (
        <button
          disabled
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-300 cursor-not-allowed"
        >
          <FaChevronRight className="text-sm" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
