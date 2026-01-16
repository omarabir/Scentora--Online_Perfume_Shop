"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    subtitle: "Stelina Best Collection",
    title: "A Range Of Perfume",
    price: "$250.00",
    image: "https://i.ibb.co.com/hxVwVppY/p1.png",
    bgColor: "bg-[#f2f2f2]",
  },
  {
    id: 2,
    subtitle: "New Arrivals",
    title: "Luxury Summer Scent",
    price: "$180.00",
    image: "https://i.ibb.co.com/VpBqhbW4/image.png",
    bgColor: "bg-[#f2f2f2]",
  },
  {
    id: 3,
    subtitle: "Exclusive Offer",
    title: "Floral Essence Edition",
    price: "$320.00",
    image: "https://i.ibb.co.com/0jjQJQzd/image.png",
    bgColor: "bg-[#f2f2f2]",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className={`container mx-auto relative overflow-hidden font-sans transition-colors duration-700 ${slides[currentSlide].bgColor}`}
    >
      <div className="container mx-auto p-8 h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-20 lg:py-24 gap-8 md:gap-10 transition-opacity duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 relative"
                : "opacity-0 absolute top-0 left-0 w-full"
            }`}
          >
      
            <div
              className="flex-1 text-center md:text-left space-y-4 z-10 transition-transform duration-700 delay-100 pb-8 md:pb-0"
              style={{
                transform:
                  index === currentSlide ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <h3 className="text-primary font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">
                {slide.subtitle}
              </h3>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 hidden md:block">
                {slide.title.split(" ").slice(0, 3).join(" ")} <br />{" "}
                {slide.title.split(" ").slice(3).join(" ")}
              </h1>
     
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4 md:hidden">
                {slide.title}
              </h1>

              <div className="flex items-baseline gap-2 justify-center md:justify-start text-lg sm:text-xl md:text-2xl mb-6 md:mb-8">
                <span className="text-gray-500 font-medium">New Price:</span>
                <span className="text-primary font-bold text-2xl sm:text-3xl">
                  {slide.price}
                </span>
              </div>

              <Link
                href="/shop"
                className="inline-block text-black font-bold uppercase tracking-wider text-xs sm:text-sm border-b-2 border-black pb-1 hover:text-primary hover:border-primary transition-colors"
              >
                Shop Now
              </Link>
            </div>

     
            <div className="flex-1 flex justify-center md:justify-end relative w-full">
              <div className="relative w-[260px] h-[340px] sm:w-[320px] sm:h-[420px] md:w-[400px] md:h-[500px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

    
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 flex items-center justify-center p-0.5 ${
              currentSlide === index
                ? "border border-primary bg-transparent scale-125"
                : "bg-gray-300 hover:bg-primary"
            }`}
          >
            {currentSlide === index && (
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
