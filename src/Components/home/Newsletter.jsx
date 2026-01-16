import React from "react";

const Newsletter = () => {
  return (
    <section className="relative py-20 bg-base-200 text-white">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1595166669910-c020556da85f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
          Stay in the Loop
        </span>
        <h2 className="text-3xl md:text-5xl text-black font-serif font-medium mb-6">
          Join Our Exclusive Club
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 font-light">
          Subscribe to our newsletter to receive updates on new arrivals,
          special offers, and expert fragrance tips directly to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-white backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 px-6 py-4 focus:outline-none focus:border-primary focus:bg-white/20 transition-all rounded-sm"
          />
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 uppercase tracking-[0.15em] text-xs font-bold transition-all transform hover:scale-105 rounded-sm">
            Subscribe
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-6 mt-8">
          By subscribing, you agree to our{" "}
          <a href="#" className="underline hover:text-white">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-white">
            Terms of Service
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
