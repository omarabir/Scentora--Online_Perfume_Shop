import React from "react";
import { FiSearch } from "react-icons/fi";

const DetailsButton = () => {
  return (
    <button
      className="text-white hover:text-gray-200 transition-colors flex items-center justify-center"
      title="Quick View"
    >
      <FiSearch size={20} />
    </button>
  );
};

export default DetailsButton;
