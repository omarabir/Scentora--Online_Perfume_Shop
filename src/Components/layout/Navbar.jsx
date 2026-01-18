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
import AuthButton from "../Buttons/AuthButton";
import CartValue from "../home/CartValue";
import SearchButton from "../Buttons/SearchButton";
import ShoppingBagButton from "../Buttons/ShoppingBagButton";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col w-full font-sans relative z-50">
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

      <div className="bg-white py-4 md:py-6 shadow-sm md:shadow-none sticky top-0 z-40 md:static">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="shrink-0">
              <Image
                priority
                src={logo}
                alt="Perfume Store Logo"
                className="h-16 md:h-28 w-auto object-contain"
              />
            </Link>

            <div className="hidden lg:flex flex-1 justify-center px-4">
              <SearchButton />
            </div>

            <div className="flex items-center gap-4 md:gap-6 shrink-0">
              <AuthButton />

              <ShoppingBagButton />

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

            <div className="w-full lg:hidden mt-2">
              <SearchButton />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] border-t border-gray-100 hidden lg:block p-4">
        <div className="container mx-auto px-4 flex items-center">
          <ul className="flex-1 flex justify-center items-center gap-8 text-sm font-bold text-black uppercase tracking-wide">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink href={link.path}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

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
