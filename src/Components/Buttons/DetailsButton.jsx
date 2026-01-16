import React from "react";
import { FiSearch } from "react-icons/fi";

const DetailsButton = () => {
  return (
    <div>
      <button
        className="text-white hover:text-gray-200 transition-colors"
        title="Quick View"
      >
        <FiSearch size={20} />
      </button>
    </div>
  );
};

export default DetailsButton;
