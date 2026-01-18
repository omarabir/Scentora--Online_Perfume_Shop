"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import {
  getCart,
  addToCartServer,
  removeFromCartServer,
  removeOneFromCartServer,
} from "@/app/actions/server/cart";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const [cart, setCart] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from DB if logged in
  useEffect(() => {
    const loadCart = async () => {
      if (status === "loading") return;

      if (status === "authenticated") {
        try {
          const dbCart = await getCart();
          setCart(dbCart);
        } catch (error) {
          console.error("Error loading cart from DB:", error);
        }
      } else {
        // Guest user - keep empty or implement local storage if desired.
        // User explicitly asked for DB storage and to hide data on logout.
        setCart([]);
      }
      setIsInitialized(true);
    };

    loadCart();
  }, [status, session?.user?.email]);

  const addToCart = async (product) => {
    if (!product || !product._id) {
      console.error("Invalid product passed to addToCart");
      return;
    }

    // Optimistic update
    setCart((prevCart) => [...prevCart, product]);

    if (status === "authenticated") {
      try {
        await addToCartServer(product._id);
      } catch (error) {
        console.error("Failed to add to cart server", error);
      }
    }
  };

  const removeFromCart = async (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));

    if (status === "authenticated") {
      await removeFromCartServer(productId);
    }
  };

  const removeOneFromCart = async (productId) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item._id === productId);
      if (index !== -1) {
        const newCart = [...prevCart];
        newCart.splice(index, 1);
        return newCart;
      }
      return prevCart;
    });

    if (status === "authenticated") {
      await removeOneFromCartServer(productId);
    }
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    removeOneFromCart,
    cartCount: cart.length,
    isInitialized,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
