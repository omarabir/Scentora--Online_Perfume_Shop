import CartPage from "@/Components/CartPage";
import React from "react";

export const metadata = {
  title: "Shopping Cart | Sentora",
  description: "Review your selected items and proceed to checkout.",
};

const page = () => {
  return (
    <div>
      <CartPage />
    </div>
  );
};

export default page;
