import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/perfume-logo.png";
import NavLink from "../Buttons/Navlinks";
const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/products"}>Shop</NavLink>
      </li>
      <li>
        <NavLink href={"/blog"}>blog</NavLink>
      </li>
      <li>
        <NavLink href={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="flex flex-col w-full ">
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="text-center md:text-left">
            Welcome to our online store!
          </div>
          <div className="flex items-center gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
              English (USD)
            </div>
            <span className="text-white/50">|</span>
            <Link href="/login" className="hover:opacity-80">
              Login or Register
            </Link>
          </div>
        </div>
      </div>

      {/* Middle Bar: Logo, Search, User/Cart */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col items-center lg:items-start shrink-0"
          >
            <Image
              priority
              src={logo}
              alt="Perfume Store Logo"
              className="h-28 w-auto object-contain"
            />
          </Link>

          {/* Search */}
          <div className="flex w-full max-w-xl items-center border border-gray-200 rounded-full bg-gray-50 focus-within:bg-white focus-within:border-primary transition-colors overflow-hidden h-12">
            <input
              className="flex-1 w-full h-full bg-transparent px-6 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
              placeholder="Search for products..."
            />
            <button className="h-full px-8 bg-primary text-white hover:bg-opacity-90 transition-colors flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 shrink-0">
            <div className="indicator cursor-pointer group">
              <span className="indicator-item badge badge-primary text-white text-[10px] h-5 w-5 p-0 border-2 border-white translate-x-[2px] -translate-y-[2px]">
                0
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-gray-600 group-hover:text-primary transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
            <div className="cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-gray-600 group-hover:text-primary transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-[#f5f5f5] border-t border-gray-100/50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* All Categories Button */}
          <div className="bg-primary text-white px-6 py-4 flex items-center gap-3 font-semibold cursor-pointer tracking-wider text-sm w-full md:w-[260px] justify-center md:justify-start hover:bg-opacity-90 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <span>ALL CATEGORIES</span>
          </div>

          {/* Nav Links */}
          <ul className="flex-1 flex justify-center items-center gap-6 lg:gap-10 text-lg uppercase font-bold text-black tracking-wide py-4 md:py-0 overflow-x-auto w-full">
            {nav}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
