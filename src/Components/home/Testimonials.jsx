import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      text: "Sentora has the best collection of luxury fragrances. The quality and authenticity are unmatched. My go-to store for all my perfume needs!",
    },
    {
      name: "Michael Chen",
      role: "Business Executive",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      text: "Fast delivery and genuine products. I've been buying from Sentora for years and have never been disappointed. Highly recommend!",
    },
    {
      name: "Emma Williams",
      role: "Content Creator",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      text: "The variety of fragrances is amazing! From classic to contemporary, Sentora has it all. Customer service is exceptional too.",
    },
  ];

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-200 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 relative"
            >
              <FaQuoteLeft className="text-primary text-3xl opacity-20 absolute top-6 right-6" />

              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-sm" />
                ))}
              </div>

              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
