"use client";
import React from "react";
import { useCart } from "@/provider/CartProvider";
import Image from "next/image";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import CartSkeleton from "./skeleton/CartSkeleton";
import { toast } from "react-toastify";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, removeOneFromCart, isInitialized } =
    useCart();

  if (!isInitialized) {
    return <CartSkeleton />;
  }
const checkout = () => {
  toast.success('Proceeding to checkout!');
}
  const groupedItems = cart.reduce((acc, item) => {
    const existingItem = acc.find((i) => i._id === item._id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const handleIncrease = (item) => {
    const { quantity, ...product } = item;
    addToCart(product);
  };

  const handleDecrease = (item) => {
    removeOneFromCart(item._id);
  };

  const handleDelete = (itemId) => {
    removeFromCart(itemId);
  };

  // Calculate total price
  const calculateTotal = () => {
    return groupedItems.reduce((total, item) => {
      return total + parseFloat(item.price) * item.quantity;
    }, 0);
  };

  const subtotal = calculateTotal();
  const shipping = subtotal > 0 ? 10 : 0;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link href="/shop" className="btn btn-primary text-white">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>{" "}
        <span className="mx-2">»</span>{" "}
        <span className="font-semibold text-gray-900">Shopping Cart</span>
      </div>

      <h1 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-8">
        Shopping Cart
      </h1>

      <div className=" gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-100 rounded-sm">
            {groupedItems.map((item) => (
              <div
                key={item._id}
                className="p-4 md:p-6 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex gap-4 md:gap-6 items-start md:items-center">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gray-50 shrink-0">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover mix-blend-multiply"
                      />
                    )}
                  </div>

                  <div className=" flex flex-col md:flex-row md:items-center justify-between gap-4 w-full ">
                    <div className="">
                      <h3 className="font-medium text-gray-900 mb-1 text-lg md:text-base  pr-4">
                        {item.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500">
                        {item?.brandName}
                      </p>
                    </div>

                    <div className="flex  items-center justify-between md:justify-end gap-2 md:gap-8 w-full md:w-auto mt-2 md:mt-0">
                      <div className="  flex  items-center border border-gray-200 rounded-sm bg-white">
                        <button
                          onClick={() => handleDecrease(item)}
                          className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-gray-500 hover:text-primary transition-colors text-base md:text-lg"
                        >
                          -
                        </button>
                        <span className="w-8 md:w-10 flex items-center justify-center font-medium text-gray-900 text-sm md:text-base">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleIncrease(item)}
                          className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-gray-500 hover:text-primary transition-colors text-base md:text-lg"
                        >
                          +
                        </button>
                      </div>

                      <div className="w-auto md:w-32 text-right md:text-center">
                        <span className="text-base md:text-lg font-bold text-gray-900">
                          ${" "}
                          {(parseFloat(item.price) * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      <button
                        onClick={() => handleDelete(item._id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors ml-2 md:ml-0"
                      >
                        <FaTrash
                          size={16}
                          className="md:w-[18px] md:h-[18px]"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

     
     
      </div>
         <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 rounded-sm p-6 sticky top-24">
            <h2 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({groupedItems.length} items)</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Tax (10%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold text-primary text-xl">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button onClick={checkout} className="w-full bg-primary text-white py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-black transition-colors mb-3">
              Proceed to Checkout
            </button>

            <Link
              href="/shop"
              className="block text-center text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
    </div>
  );
};

export default CartPage;
