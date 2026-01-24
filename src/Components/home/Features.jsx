import React from "react";
import { FaShippingFast, FaUndo, FaShieldAlt, FaHeadset } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaShippingFast size={32} />,
      title: "Free Shipping",
      desc: "On all orders over $100",
    },
    {
      icon: <FaUndo size={32} />,
      title: "Easy Returns",
      desc: "30-day money back guarantee",
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: "100% Authentic",
      desc: "Sourced directly from brands",
    },
    {
      icon: <FaHeadset size={32} />,
      title: "Expert Support",
      desc: "24/7 dedicated support",
    },
  ];

  return (
    <div className=" py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-base-200 dark:bg-base-100/50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-700 group"
            >
              <div className="text-gray-400 group-hover:text-primary transition-colors duration-300 mb-4 bg-gray-50 dark:bg-gray-700 group-hover:bg-[#FFF0F0] dark:group-hover:bg-primary/20 p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="font-serif font-bold text-slate-900 dark:text-white text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
