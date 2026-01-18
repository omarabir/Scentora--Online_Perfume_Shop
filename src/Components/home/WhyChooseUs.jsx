import React from "react";
import { FaShieldAlt, FaTruck, FaTag, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaShieldAlt,
      title: "100% Authentic",
      description:
        "All our fragrances are sourced directly from authorized distributors and guaranteed to be genuine.",
    },
    {
      icon: FaTruck,
      title: "Fast Delivery",
      description:
        "Quick and secure shipping to your doorstep. Track your order every step of the way.",
    },
    {
      icon: FaTag,
      title: "Best Prices",
      description:
        "Competitive pricing on luxury fragrances with regular deals and exclusive offers.",
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description:
        "Our dedicated customer service team is always ready to assist you with any questions.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">
            Why Choose Sentora?
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We're committed to providing you with the best fragrance shopping
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="text-center transition-transform hover:scale-105 group-hover:bg-200 duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6   transition-colors duration-300">
                  <Icon className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
