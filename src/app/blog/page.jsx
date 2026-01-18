import React from "react";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa";

const BlogPage = async () => {
 
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const posts = [
    {
      id: 1,
      title: "The Art of Layering Scents",
      excerpt:
        "Discover the secrets to creating a unique fragrance signature by combining different perfumes effectively.",
      category: "Guides",
      date: "October 12, 2025",
      author: "Sophie Laurent",
      image:
        "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Top 5 Winter Fragrances for 2026",
      excerpt:
        "Embrace the cold season with these warm, spicy, and woody notes that define luxury this winter.",
      category: "Trends",
      date: "December 05, 2025",
      author: "Marc Dubois",
      image:
        "https://i.ibb.co.com/cpF37jk/best-winter-colognes-2023-header.jpg",
    },
    {
      id: 3,
      title: "Understanding Fragrance Concentrations",
      excerpt:
        "From Eau de Toilette to Parfum, learn what makes each concentration unique and how long they last.",
      category: "Education",
      date: "January 03, 2026",
      author: "Sophie Laurent",
      image:
        "https://i.ibb.co.com/j9yZRtjS/image.png",
    },
    {
      id: 4,
      title: "The History of French Perfumery",
      excerpt:
        "A journey through time exploring Grasse, the perfume capital of the world, and its legendary impact.",
      category: "History",
      date: "January 14, 2026",
      author: "Jean-Pierre",
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Choosing a Signature Scent",
      excerpt:
        "How to find a perfume that truly reflects your personality and leaves a lasting impression.",
      category: "Lifestyle",
      date: "January 10, 2026",
      author: "Elena Rossi",
      image:
        "https://i.ibb.co.com/Gf9YdJBL/image.png",
    },
    {
      id: 6,
      title: "Sustainable Perfumery Practices",
      excerpt:
        "How the industry is evolving with eco-friendly ingredients and recyclable packaging.",
      category: "Sustainability",
      date: "January 08, 2026",
      author: "Marc Dubois",
      image:
        "https://i.ibb.co.com/rft4p5Nb/couple-propagating-their-houseplants-as-hobby-together-1.jpg",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-primary selection:text-white">
   
      <div className="bg-gray-50 py-16 md:py-24 text-center border-b border-gray-100">
      
        <h1 className="text-4xl md:text-6xl font-serif font-medium text-slate-900 mb-6">
          Perfume Stories
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto px-4 text-lg font-light">
          Explore the world of fragrances, expert guides, and the latest trends
          in luxury perfumery.
        </p>
      </div>

      <div className="container mx-auto px-6 py-16">
       

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col h-full bg-white"
            >
              <div className="relative overflow-hidden w-full aspect-[4/3] mb-6">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                    {post.category}
                  </span>
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt />
                    <span>{post.date}</span>
                  </div>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <div className="flex items-center gap-1">
                    <FaUser />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3 leading-snug group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>

                <p className="text-gray-500 leading-relaxed mb-6 font-light line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-primary transition-colors group/link"
                  >
                    Read Article
                    <FaArrowRight className="transform transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>


      
      </div>


      <div className="bg-[#f8f8f8] py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl mb-4 text-slate-900">
            Join the Community
          </h2>
          <p className="text-gray-500 mb-8 font-light">
            Subscribe to receive updates on new arrivals, special offers and
            exclusive events.
          </p>
          <div className="flex flex-col  sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white border border-gray-200 px-6 py-4 focus:outline-none focus:border-primary"
            />
            <button className="btn btn-primary text-white px-8 py-7 uppercase tracking-[0.15em] text-xs font-bold hover:bg-primary transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
