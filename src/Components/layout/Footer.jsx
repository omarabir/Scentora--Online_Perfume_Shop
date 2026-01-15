import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/perfume-logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="Sentora Logo"
                className="h-28 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Discover your signature scent from our exclusive collection of
              premium fragrances. Luxury perfumes for every occasion.
            </p>
            <div className="grid grid-flow-col gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="btn btn-ghost btn-circle hover:bg-primary hover:text-white"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="btn btn-ghost btn-circle hover:bg-primary hover:text-white"
            >
              <FaXTwitter size={24} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="btn btn-ghost btn-circle hover:bg-primary hover:text-white"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="btn btn-ghost btn-circle hover:bg-primary hover:text-white"
            >
              <FaYoutube size={24} />
            </Link>
          </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors hover:pl-2 duration-300 block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-primary transition-colors hover:pl-2 duration-300 block"
                >
                  Shop Now
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary transition-colors hover:pl-2 duration-300 block"
                >
                  Our Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors hover:pl-2 duration-300 block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">
              Customer Support
            </h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors hover:pl-2 duration-300 block"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-primary transition-colors hover:pl-2 duration-300 block"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors hover:pl-2 duration-300 block"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors hover:pl-2 duration-300 block"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">Newsletter</h3>
            <p className="text-gray-500 text-sm mb-6">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:outline-none focus:border-primary focus:bg-white transition-colors text-sm rounded-none"
              />
              <button className="btn btn-primary w-full text-white rounded-none">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-100 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Sentora. All Rights Reserved.
          </p>
          <div className="flex gap-2 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Payment Icons Placeholders */}
            <div className="h-6 w-10 bg-gray-200 rounded"></div>
            <div className="h-6 w-10 bg-gray-200 rounded"></div>
            <div className="h-6 w-10 bg-gray-200 rounded"></div>
            <div className="h-6 w-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
