import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaRegHeart } from "react-icons/fa";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import DetailsButton from "../Buttons/DetailsButton";
import CartButton from "../Buttons/CartButton";

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
          <FaStarHalfAlt key={i} className="text-amber-400 text-sm" />
        );
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300 text-sm" />);
      }
    }
    return stars;
  };

  return (
    <div className="group bg-white  transition-all duration-300 hover:border-primary border  border-gray-200 relative flex flex-col items-center">

      {isNew && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            New
          </span>
        </div>
      )}

  
      <div className="w-full h-64 mb-4 flex items-center justify-center overflow-hidden relative bg-[#F2F2F2]">
       
        <Image
          width={500}
          height={500}
          src={image}
          alt={name}
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
        />

        
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-4 bg-primary py-3 px-6 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <button
              className="text-white hover:text-gray-200 transition-colors"
              title="Add to Wishlist"
            >
              <FaRegHeart size={20} />
            </button>
            <Link href={`/shop/${product._id}`}>
              <DetailsButton></DetailsButton>
            </Link>
          <CartButton product={product}></CartButton>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-center gap-2 w-full">
        {/* Title */}
        <h3 className=" text-lg font-medium tracking-wide">{name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-0.5">{renderStars(rating)}</div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-1">
          {/* Simulated Original Price for Design Match - Assuming a 20% markup for "original" to match design visual if needed */}
          {/* If we strictly follow data, we only show one price. 
                        Let's render a calculated original price just to match the visual request "design like this",
                        or purely stick to data. I'll stick to data but styled to match the 'current price' look. */}
          {/* <span className="text-gray-400 line-through text-sm">${(price * 1.2).toFixed(2)}</span> */}

          <span className="text-[#0F172A] font-bold text-lg tracking-tight">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
