import React from "react";
import Link from "next/link";
import { getSingleProduct } from "@/app/actions/server/product";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaLeaf,
  FaSnowflake,
  FaSun,
  FaCloudSun,
  FaBriefcase,
  FaGlassCheers,
  FaUserFriends,
  FaShippingFast,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";
import Image from "next/image";
import AddtoWishlist from "@/Components/Buttons/AddtoWishlist";
import AddToBag from "@/Components/Buttons/AddToBag";

const ProductDetails = async (props) => {
  const params = await props.params;
  const { id } = params;
  const product = await getSingleProduct(id);

  if (!product || !product.name) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-gray-900 mb-2">
            Product Not Found
          </h2>
          <Link
            href="/shop"
            className="text-[#A68A58] underline underline-offset-4"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const {
    name,
    brandName,
    country,
    year,
    gender,
    concentration,
    price,
    performance,
    image,
    metrics,
    reviews,
    seasonScores,
    occasionScores,
    notes,
    accords,
  } = product;

  const { rating = 0 } = metrics || {};

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="" />);
      } else if (i > rating && i - 1 < rating) {
        stars.push(<FaStarHalfAlt key={i} className="" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  const getSeasonIcon = (season) => {
    switch (season) {
      case "spring":
        return <FaLeaf />;
      case "summer":
        return <FaSun />;
      case "fall":
        return <FaCloudSun />;
      case "winter":
        return <FaSnowflake />;
      default:
        return null;
    }
  };

  const getOccasionIcon = (occasion) => {
    switch (occasion) {
      case "professional":
        return <FaBriefcase />;
      case "casual":
        return <FaUserFriends />;
      case "night_out":
        return <FaGlassCheers />;
      default:
        return null;
    }
  };

  const maxSeasonScore = seasonScores
    ? Math.max(...Object.values(seasonScores)) || 1
    : 1;
  const maxOccasionScore = occasionScores
    ? Math.max(...Object.values(occasionScores)) || 1
    : 1;

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-primary selection:text-white">
      <div className="container mx-auto px-6 py-6 border-b border-gray-100 mb-8">
        <nav className="flex text-xs uppercase tracking-widest text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="mx-3">/</span>
          <Link href="/shop" className="hover:text-primary transition-colors">
            Shop
          </Link>
          <span className="mx-3 text-gray-300">/</span>
          <span className="text-black font-medium">{name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24">
          <div className="lg:col-span-7">
            <div className="bg-[#f8f8f8] aspect-4/5 md:aspect-1/1 lg:aspect-4/5 w-full relative flex items-center justify-center rounded-sm overflow-hidden group">
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-primary text-white backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-widest border border-gray-100">
                  for {gender}
                </span>
              </div>
              <Image
            
                src={image}
                alt={name}
                className="w-3/4 max-h-[80%] object-contain drop-shadow-2xl opacity-100 transform transition-transform duration-700 ease-out group-hover:scale-105"
                width={800}
                height={925}
              />
            </div>

            <div className="flex gap-4 mt-6">
              <div className="w-24 h-24 border border-primary cursor-pointer p-2 bg-[#f8f8f8]">
                <Image
                  alt={name}
                  width={800}
                  height={800}
                  src={image}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-12">
              <div className="mb-2">
                <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                  {brandName}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-medium text-slate-900 mb-4 leading-tight">
                {name}
              </h1>

              <div className="flex items-center gap-6 mb-8 border-b border-gray-100 pb-8">
                <div className="flex text-primary text-sm gap-0.5">
                  {renderStars(rating)}
                </div>
                <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  {reviews?.length || 0} Customer Reviews
                </div>
              </div>

              <div className="text-3xl font-medium text-slate-900 mb-6 flex items-baseline gap-2">
                ${price}
                <span className="text-sm font-normal text-gray-400 line-through">
                  ${(price * 1.2).toFixed(2)}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed font-light text-lg mb-8">
                Discover the allure of{" "}
                <span className="font-medium text-slate-800">{country}'s</span>{" "}
                finest craftsmanship. Released in{" "}
                <span className="font-medium text-slate-800">{year}</span>, this{" "}
                <span className="font-medium text-slate-800">{gender}</span>{" "}
                fragrance offers a {performance?.longevity?.toLowerCase()}{" "}
                longevity that lingers beautifully.
                {accords && ` Characterized by distinct ${accords.name} notes.`}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 border border-gray-100">
                  <span className="block text-xs uppercase text-gray-400 tracking-wider mb-1">
                    Catergory
                  </span>
                  <span className="font-medium text-slate-800 capitalize">
                    {accords?.category || "N/A"}
                  </span>
                </div>
                <div className="bg-gray-50 p-4 border border-gray-100">
                  <span className="block text-xs uppercase text-gray-400 tracking-wider mb-1">
                    Sillage
                  </span>
                  <span className="font-medium text-slate-800">
                    {performance?.sillage}
                  </span>
                </div>
                <div className="flex  gap-4 mb-8">
                 <AddToBag product={product} />
                  <AddtoWishlist productId={product._id} />
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-gray-500 py-6 border-t border-gray-100">
                <div className="flex flex-col items-center gap-2">
                  <FaShippingFast size={20} className="text-primary" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <FaShieldAlt size={20} className="text-primary" />
                  <span>Authentic</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <FaUndo size={18} className="text-primary" />
                  <span>Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 my-20"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <div>
            <h3 className="font-serif text-2xl mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-slate-400"></span>
              Seasonality
            </h3>
            <div className="space-y-6">
              {seasonScores &&
                Object.entries(seasonScores).map(([season, score]) => (
                  <div key={season} className="flex items-center group">
                    <div
                      className={`w-8 text-lg ${
                        score > maxSeasonScore * 0.7
                          ? "text-primary"
                          : "text-gray-400"
                      }`}
                    >
                      {getSeasonIcon(season)}
                    </div>
                    <span className="w-24 text-sm font-medium uppercase tracking-wider text-gray-600">
                      {season}
                    </span>
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-800 group-hover:bg-primary transition-colors duration-300"
                        style={{ width: `${(score / maxSeasonScore) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-slate-400"></span>
              Occasion
            </h3>
            <div className="space-y-6">
              {occasionScores &&
                Object.entries(occasionScores).map(([occasion, score]) => (
                  <div key={occasion} className="flex items-center group">
                    <div
                      className={`w-8 text-lg ${
                        score > maxOccasionScore * 0.7
                          ? "text-primary"
                          : "text-gray-400"
                      }`}
                    >
                      {getOccasionIcon(occasion)}
                    </div>
                    <span className="w-28 text-sm font-medium uppercase tracking-wider text-gray-600">
                      {occasion.replace("_", " ")}
                    </span>
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-800 group-hover:bg-primary transition-colors duration-300"
                        style={{
                          width: `${(score / maxOccasionScore) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {reviews && reviews.length > 0 && (
          <div className="bg-[#f9f9f9] -mx-6 px-6 py-20">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
                  Voices
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
                  What People Say
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex text-primary text-xs gap-0.5 mb-4">
                      {renderStars(review.rating)}
                    </div>
                    <h4 className="font-serif text-lg text-slate-900 mb-3 line-clamp-1">
                      {review.comment}
                    </h4>
                    <p className="text-gray-500 text-sm italic mb-6 leading-relaxed">
                      {review.comment}
                    </p>
                    <div className="flex items-center border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden mr-3">
                        <img
                          src={
                            review.userImage ||
                            "https://dummyimage.com/100x100/cccccc/ffffff&text=User"
                          }
                          alt={review.username}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                          {review.username}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
