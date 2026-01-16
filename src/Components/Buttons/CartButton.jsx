"use client";

import { FiShoppingBag } from "react-icons/fi";

const CartButton = ({product}) => {
  return (
    <div>
      <button
        className="text-white hover:text-gray-200 transition-colors"
        title="Add to Cart"
      >
        <FiShoppingBag size={20} />
      </button>
    </div>
  );
};

export default CartButton;
