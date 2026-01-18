"use client";
import React, { useState, useRef, useEffect } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { useCart } from "@/provider/CartProvider";
import Image from "next/image";
import Link from "next/link";

const ShoppingBagButton = () => {
  const { cart, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const cartCount = cart.length;

  const groupedItems = cart.reduce((acc, item) => {
    const existingItem = acc.find((i) => i._id === item._id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const subtotal = cart.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    return total + price;
  }, 0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative group" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-1 focus:outline-none relative"
      >
        <BsCart3 className="w-5 h-5 md:w-6 md:h-6 text-gray-600 hover:text-primary transition-colors" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1.5 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-primary rounded-full">
            {cartCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-4 w-80 bg-white shadow-xl border border-gray-100 rounded-lg z-50">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Shopping Cart</h3>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {groupedItems.length === 0 ? (
              <div className="p-8 text-center text-gray-500 text-sm">
                Your cart is empty
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {groupedItems.map((item) => (
                  <div key={item._id} className="p-4 flex gap-4 group">
                    <div className="relative w-16 h-16 bg-gray-50 rounded-md overflow-hidden shrink-0">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-800 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.variants || item.brand}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-semibold text-gray-900">
                          ${item.price}{" "}
                          <span className="text-gray-500 font-normal text-xs">
                            (x{item.quantity})
                          </span>
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-gray-400 hover:text-red-500 transition-colors self-center p-2"
                      title="Remove from cart"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-4 text-gray-900 font-bold">
              <span>Subtotal:</span>
              <span className="text-lg">${subtotal.toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/cart"
                onClick={() => setIsOpen(false)}
                className="btn btn-outline btn-sm border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium normal-case"
              >
                VIEW BAG
              </Link>
              <Link
                href="/wishlist"
                onClick={() => setIsOpen(false)}
                className="btn btn-primary btn-sm text-white font-medium normal-case"
              >
                MY WISHLIST
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingBagButton;
