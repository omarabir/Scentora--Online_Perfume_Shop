import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaRegHeart } from "react-icons/fa";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import DetailsButton from "../Buttons/DetailsButton";
import CartButton from "../Buttons/CartButton";
import WishListButton from "../Buttons/WishListButton";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const { name, image, price, metrics, year } = product;
  const { rating } = metrics || { rating: 0 };

  const isNew = year >= 2015;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-amber-400 text-sm" />);
      } else if (i > rating && i - 1 < rating) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-amber-400 text-sm" />,
        );
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300 text-sm" />);
      }
    }
    return stars;
  };

  return (
    <div className="group bg-white dark:bg-base-100 dark:text-base-content transition-all duration-300 hover:border-primary border border-gray-200 dark:border-base-300 relative flex flex-col items-center">
      {isNew && (
        <div className="absolute top-4 left-4 z-10 hidden sm:block">
          <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            New
          </span>
        </div>
      )}

      <div className="w-full h-40 sm:h-64 mb-4 flex items-center justify-center overflow-hidden relative bg-[#F2F2F2] dark:bg-gray-800">
        <Link href={`/shop/${product._id}`} className="w-full h-full block">
          <Image
            width={500}
            height={500}
            src={image}
            alt={name}
            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
          <div className="bg-primary rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center justify-center gap-4 px-6 py-3">
              <WishListButton productId={product._id} />
              <Link href={`/shop/${product._id}`} className="flex items-center">
                <DetailsButton />
              </Link>
              <CartButton product={product} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-full px-3 pb-4">
        <Link
          href={`/shop/${product._id}`}
          className="hover:text-primary transition-colors w-full"
        >
          <h3 className="text-sm sm:text-lg font-medium text-center tracking-wide line-clamp-1">
            {name}
          </h3>
        </Link>

        <div className="flex items-center gap-0.5">{renderStars(rating)}</div>

        <div className="flex items-center gap-3 mt-1">
          <span className="text-[#0F172A] dark:text-white font-bold text-base sm:text-lg tracking-tight">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
