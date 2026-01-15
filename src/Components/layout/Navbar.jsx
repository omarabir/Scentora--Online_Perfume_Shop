"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/perfume-logo.png";
import NavLink from "../Buttons/Navlinks";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaUser,
  FaShoppingBag,
} from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation Links Data
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col w-full font-sans relative z-50">
      {/* Top Bar - Hidden on mobile for cleaner look, visible on md+ */}
      <div className="bg-primary text-white text-xs md:text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-center md:text-left">
            Welcome to our online store!
          </div>
          <div className="flex items-center gap-4">
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
      <div className="bg-white py-4 md:py-6 shadow-sm md:shadow-none sticky top-0 z-40 md:static">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                priority
                src={logo}
                alt="Perfume Store Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Search */}
            <div className="hidden lg:flex flex-1 max-w-xl items-center border border-gray-200 rounded-full bg-gray-50 focus-within:bg-white focus-within:border-primary transition-colors overflow-hidden h-11">
              <input
                className="flex-1 w-full h-full bg-transparent px-6 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                placeholder="Search for products..."
              />
              <button className="h-full px-8 bg-primary text-white hover:bg-opacity-90 transition-colors flex items-center justify-center">
                <FaSearch className="w-4 h-4" />
              </button>
            </div>

            {/* Icons & Mobile Toggle */}
            <div className="flex items-center gap-4 md:gap-6 shrink-0">
              {/* User Icon (Hidden on mobile small?) or keep */}
              <div className="cursor-pointer group hover:text-primary transition-colors hidden sm:block">
                <FaUser className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-primary" />
              </div>

              {/* Cart Icon */}
              <div className="indicator cursor-pointer group">
                <span className="indicator-item badge badge-primary text-white text-[10px] h-4 w-4 p-0 border-2 border-white">
                  0
                </span>
                <FaShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-primary transition-colors" />
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden text-gray-700 hover:text-primary focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
              </button>
            </div>

            {/* Mobile Search Bar (Full Width on Mobile) */}
            <div className="w-full lg:hidden mt-2">
              <div className="flex items-center border border-gray-200 rounded-full bg-gray-50 focus-within:bg-white focus-within:border-primary overflow-hidden h-10">
                <input
                  className="flex-1 w-full h-full bg-transparent px-4 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                  placeholder="Search..."
                />
                <button className="h-full px-6 bg-primary text-white flex items-center justify-center">
                  <FaSearch className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav (Desktop) */}
      <div className="bg-[#f5f5f5] border-t border-gray-100 hidden lg:block">
        <div className="container mx-auto px-4 flex items-center">
          {/* All Categories Button */}
          <div className="bg-primary text-white px-8 py-4 flex items-center gap-3 font-semibold cursor-pointer tracking-wider text-sm hover:bg-opacity-90 transition-colors">
            <FaBars />
            <span>ALL CATEGORIES</span>
          </div>

          {/* Desktop Nav Links */}
          <ul className="flex-1 flex justify-center items-center gap-8 text-sm font-bold text-black uppercase tracking-wide">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink href={link.path}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute top-0 left-0 w-[80%] max-w-sm h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-5 border-b border-gray-100 flex justify-between items-center">
            <span className="font-bold text-lg text-primary">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-500 hover:text-red-500"
            >
              <FaTimes size={20} />
            </button>
          </div>
          <div className="py-2">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="border-b border-gray-50 last:border-none"
                >
                  <Link
                    href={link.path}
                    className="block px-5 py-4 text-gray-700 font-medium hover:bg-gray-50 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="border-b border-gray-50">
                <Link
                  href="/login"
                  className="block px-5 py-4 text-gray-700 font-medium hover:bg-gray-50 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login / Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Categories or other info */}
          <div className="p-5 mt-auto">
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="text-xs text-gray-500 text-center">
                Need help? Call us at <br />{" "}
                <a href="tel:+1234567890" className="text-primary font-bold">
                  +1-234-567-890
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
