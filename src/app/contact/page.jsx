import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-primary selection:text-white">
      
      <div className="bg-gray-50 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto px-4">
          We'd love to hear from you. Whether you have a question about our
          perfumes, pricing, or anything else, our team is ready to answer all
          your questions.
        </p>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
       
          <div>
            <h2 className="text-2xl font-serif mb-8 text-slate-900">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 p-4 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 p-4 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-200 p-4 focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Subject
                </label>
                <select className="w-full border border-gray-200 p-4 focus:outline-none focus:border-primary transition-colors bg-white">
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Wholesale</option>
                  <option>Press</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full border border-gray-200 p-4 h-40 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button className="btn btn-primary text-white px-10 py-4 uppercase tracking-[0.15em] text-sm font-bold hover:bg-primary transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>

          
          <div className="flex flex-col gap-12">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 border border-gray-100">
                <FaMapMarkerAlt className="text-primary text-2xl mb-4" />
                <h3 className="font-serif text-lg font-medium mb-2">
                  Our Boutique
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  123 Perfume Avenue
                  <br />
                  Paris, France 75001
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <FaPhoneAlt className="text-primary text-2xl mb-4" />
                <h3 className="font-serif text-lg font-medium mb-2">
                  Phone Support
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  +1 (555) 123-4567
                  <br />
                  Mon-Fri 9am-6pm
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <FaEnvelope className="text-primary text-2xl mb-4" />
                <h3 className="font-serif text-lg font-medium mb-2">
                  Email Us
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  hello@sentora.com
                  <br />
                  support@sentora.com
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-100">
                <FaClock className="text-primary text-2xl mb-4" />
                <h3 className="font-serif text-lg font-medium mb-2">
                  Opening Hours
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Mon - Fri: 10:00 - 20:00
                  <br />
                  Sat - Sun: 11:00 - 18:00
                </p>
              </div>
            </div>

            
            <div className="w-full h-80 bg-gray-200 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647528886737!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
