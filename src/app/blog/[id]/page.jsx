import React from "react";
import Link from "next/link";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaUser,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "The Art of Layering Scents",
    excerpt:
      "Discover the secrets to creating a unique fragrance signature by combining different perfumes effectively.",
    content: `
      <p class="mb-6 text-lg font-light leading-relaxed">Fragrance layering, also known as "scent mixing" or "cocktailing," is the art of combining two or more perfumes to create a unique scent that is entirely your own. While it might sound complicated, mastering this art is easier than you think and allows for endless creativity.</p>
      
      <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">Why Layer Scents?</h3>
      <p class="mb-6 leading-relaxed">The primary reason to layer scents is personalization. In a world where popular fragrances are worn by millions, layering allows you to tweak a scent to better suit your personality or mood. It can also help increase the longevity of a fragrance; applying a heavier base scent can help anchor a lighter, more volatile top note.</p>

      <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">The Rules of Engagement</h3>
      <p class="mb-6 leading-relaxed">While there are no strict rules, some guidelines can help you avoid clashing notes. Generally, heavier scents should be sprayed first so they don't overpower lighter ones. Combining scents from the same olfactory family (e.g., florals with florals) is a safe bet, but mixing contrasting notes like vanilla (sweet) and vetiver (woody) can result in something surprisingly sophisticated.</p>

      <blockquote class="border-l-4 border-primary pl-4 italic text-gray-600 my-8">
        "Perfume is like a piece of clothing, a message, a way of presenting oneself, a costume that differs according to the woman who wears it." - Paloma Picasso.
      </blockquote>
      
      <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">Getting Started</h3>
      <p class="mb-6 leading-relaxed">Start with simple combinations. Try a single-note body lotion (like rose or vanilla) under your complex eau de parfum. This is a subtle way to introduce a new facet to your favorite scent without overwhelming your senses.</p>
    `,
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
    content: `
        <p class="mb-6 text-lg font-light leading-relaxed">Winter calls for fragrances that wrap you in warmth like a cashmere sweater. As the temperature drops, our olfactory preferences naturally shift towards deeper, richer compositions that can withstand the cold air and provide a sense of comfort.</p>

        <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">1. The Spicy Oriental</h3>
        <p class="mb-6 leading-relaxed">This season, expect to see a resurgence of cardamom and clove. These spices add a vibrant heat to fragrances, perfect for cutting through the crisp winter air. Look for blends that pair these spices with creamy sandalwood for a modern twist on the classic oriental.</p>

        <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">2. Smoky Woods</h3>
        <p class="mb-6 leading-relaxed">Oud remains a staple, but for 2026 it's being reimagined with lighter, smokier facets. Birch tar and guaiac wood are appearing in more niche compositions, offering a sophisticated scent profile that evokes the feeling of a crackling fireplace.</p>

        <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">3. Gourmand Leather</h3>
        <p class="mb-6 leading-relaxed">Leather notes are being softened with hints of cocoa and vanilla. This unexpected pairing creates a scent that is both rugged and incredibly inviting, bridging the gap between masculine and feminine profiles.</p>
    `,
    category: "Trends",
    date: "December 05, 2025",
    author: "Marc Dubois",
    image: "https://i.ibb.co.com/cpF37jk/best-winter-colognes-2023-header.jpg",
  },
  {
    id: 3,
    title: "Understanding Fragrance Concentrations",
    excerpt:
      "From Eau de Toilette to Parfum, learn what makes each concentration unique and how long they last.",
    content: `
        <p class="mb-6 text-lg font-light leading-relaxed">Navigating the world of perfumery can sometimes feel like learning a new language. Terms like "Eau de Parfum" and "Eau de Toilette" are commonly seen but often misunderstood. Understanding these distinctions is key to finding a scent that performs exactly how you want it to.</p>

        <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">Parfum (Extrait de Parfum)</h3>
        <p class="mb-6 leading-relaxed">This is the most concentrated and expensive form of fragrance, containing 20-40% perfume oil. It lasts the longest on the skin—often up to 24 hours—and because it contains less alcohol, it is excellent for sensitive skin. You only need a tiny amount to make a statement.</p>

        <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">Eau de Parfum (EDP)</h3>
        <p class="mb-6 leading-relaxed">Ideally balanced for day-to-day wear, EDPs contain 15-20% perfume oil. They are among the most common concentrations, offering longevity of around 8 hours. They project well without being overwhelming, making them perfect for the office or evening wear.</p>

        <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">Eau de Toilette (EDT)</h3>
        <p class="mb-6 leading-relaxed">With a concentration of 5-15%, EDT is lighter and fresher. It is often the preferred choice for summer or for those who prefer a more intimate scent bubble. While it may require reapplication throughout the day, its effervescent top notes are often more vibrant than in heavier concentrations.</p>
    `,
    category: "Education",
    date: "January 03, 2026",
    author: "Sophie Laurent",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "The History of French Perfumery",
    excerpt:
      "A journey through time exploring Grasse, the perfume capital of the world, and its legendary impact.",
    content: `
        <p class="mb-6 text-lg font-light leading-relaxed">The history of French perfumery is a tale of romance, royalty, and craftsmanship that spans centuries. While perfume was used in antiquity, it was in France, particularly in the town of Grasse, where it evolved into the high art form we know today.</p>

        <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">The Renaissance Roots</h3>
        <p class="mb-6 leading-relaxed">It was Catherine de' Medici who brought her personal perfumer to France in the 16th century, sparking a revolution in fragrance. At the time, Grasse was known for its tanneries, which produced foul-smelling leather. To mask the odor, local artisans began scenting their leather gloves with flowers grown in the region's favorable microclimate.</p>

        <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">Grasse: The Capital of Scent</h3>
        <p class="mb-6 leading-relaxed">By the 18th century, the tanneries had faded, replaced by acres of jasmine, rose, and tuberose. Grasse established itself as the world's perfume capital. The unique techniques of extraction, such as enfleurage, were perfected here, allowing the true essence of delicate flowers to be captured.</p>

        <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">Modern Masterpieces</h3>
        <p class="mb-6 leading-relaxed">Today, French perfumery balances tradition with innovation. The great houses like Guerlain, Chanel, and Dior continue to define luxury, proving that a well-crafted scent is timeless.</p>
      `,
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
    content: `
        <p class="mb-6 text-lg font-light leading-relaxed">Your signature scent is your olfactory business card. It announces your arrival and leaves a lingering memory when you leave. But with thousands of fragrances on the market, finding "the one" can be a daunting quest.</p>
        
        <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">Analyze Your Preferences</h3>
        <p class="mb-6 leading-relaxed">Start by looking at the scents you are naturally drawn to in daily life. Do you love the smell of rain (aquatic), fresh laundry (aldehydes), or baking cookies (gourmand)? These preferences are the first clues to your fragrance family.</p>

        <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">Test on Skin, Not Paper</h3>
        <p class="mb-6 leading-relaxed">Paper strips are useful for a first impression, but perfume relies on body chemistry to come alive. The pH of your skin, your diet, and even your hormone levels can alter how a fragrance smells. Always spray on your wrist and wear it for at least four hours to experience the full dry-down.</p>

        <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">Trust Your Instincts</h3>
        <p class="mb-6 leading-relaxed">Don't buy a perfume just because it's trendy or a classic. A signature scent should make you feel confident and authentic. If a scent doesn't make you smile immediately, it's not the one.</p>
      `,
    category: "Lifestyle",
    date: "January 10, 2026",
    author: "Elena Rossi",
    image:
      "https://i.ibb.co.com/7xyYHdZ6/How-to-find-your-signature-scent-3ecf0712b8a34c0e8f8b70b47b629f1f.jpg",
  },
  {
    id: 6,
    title: "Sustainable Perfumery Practices",
    excerpt:
      "How the industry is evolving with eco-friendly ingredients and recyclable packaging.",
    content: `
        <p class="mb-6 text-lg font-light leading-relaxed">The luxury industry is undergoing a green transformation, and perfumery is no exception. Consumers are increasingly demanding transparency and sustainability, pushing brands to rethink how they source ingredients and package their products.</p>

        <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">Ethical Sourcing</h3>
        <p class="mb-6 leading-relaxed">Sustainability starts in the field. Responsible brands are partnering directly with farmers to ensure fair wages and sustainable farming practices that don't deplete the soil. Ingredients like sandalwood and vetiver, once threatened by over-harvesting, are now often sourced from managed plantations.</p>

        <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">Green Chemistry</h3>
        <p class="mb-6 leading-relaxed">Science is playing a crucial role. "Green chemistry" allows perfumers to create biodegradable synthetic molecules that mimic rare natural scents, reducing the need to harvest endangered flora or fauna (such as musk, which is now almost exclusively synthetic/cruelty-free).</p>

        <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">Refillable Luxury</h3>
        <p class="mb-6 leading-relaxed">The era of the disposable perfume bottle is ending. Many luxury houses now offer refillable stations or recyclable glass bottles with minimalist packaging, reducing waste without compromising on the elegance of the experience.</p>
      `,
    category: "Sustainability",
    date: "January 08, 2026",
    author: "Marc Dubois",
    image:
      "https://images.unsplash.com/photo-1616949755610-8c9732165081?q=80&w=800&auto=format&fit=crop",
  },
];

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return {
      title: "Article Not Found | Sentora Blog",
    };
  }

  return {
    title: `${post.title} | Sentora Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

const BlogPost = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const { id } = await params;
  const post = posts.find((p) => p.id === parseInt(id));

  const defaultContent = `
    <p class="mb-6 text-lg font-light leading-relaxed">Fragrance is more than just a pleasant smell; it is an invisible accessory that shapes how we are perceived by the world. In the realm of luxury perfumery, every bottle tells a story of craftsmanship, heritage, and emotion.</p>
    
    <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">The Power of Scent</h3>
    <p class="mb-6 leading-relaxed">Our sense of smell is directly linked to the limbic system, the part of the brain that processes memory and emotion. This is why a passing whiff of a familiar scent can instantly transport you back to a specific moment in your childhood or remind you of a loved one. Choosing a fragrance is, therefore, an act of curating your own memories.</p>

    <h3 class="text-2xl font-serif font-medium text-slate-900 mb-4 mt-8">A Note on Quality</h3>
    <p class="mb-6 leading-relaxed">What separates a luxury perfume from a common scent? It often comes down to the quality of ingredients. Premium fragrances utilize high concentrations of natural absolutes—jasmine from Grasse, rose from Bulgaria, or iris from Florence. These natural ingredients possess a depth and complexity that synthetic counterparts often struggle to replicate completely.</p>

    <blockquote class="border-l-4 border-primary pl-4 italic text-gray-600 my-8">
        "A woman who doesn't wear perfume has no future." - Coco Chanel
    </blockquote>

    <p class="mb-6 leading-relaxed">As you explore our collection, remember that the best fragrance is the one that speaks to you. There are no wrong choices, only new olfactory adventures waiting to be discovered.</p>
  `;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <h2 className="text-3xl font-serif text-slate-900 mb-4">
          Article Not Found
        </h2>
        <Link
          href="/blog"
          className="text-primary underline underline-offset-4 flex items-center gap-2"
        >
          <FaArrowLeft size={12} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-primary selection:text-white">
      <div className="container mx-auto px-6 py-6 border-b border-gray-100 mb-8">
        <Link
          href="/blog"
          className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
        >
          <FaArrowLeft /> Back to Blog
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-24">
        \
        <header className="text-center mb-12">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-medium text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-6 text-xs text-gray-400 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <span>{post.date}</span>
            </div>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <div className="flex items-center gap-2">
              <FaUser />
              <span>{post.author}</span>
            </div>
          </div>
        </header>
        {/* Featured Image */}
        <div className="mb-16 rounded-sm overflow-hidden aspect-[16/9] shadow-sm">
          <img
            src={post?.image}
            alt={post?.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <div
            className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:font-medium prose-a:text-[#A68A58] prose-img:rounded-lg first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px]"
            dangerouslySetInnerHTML={{ __html: post.content || defaultContent }}
          />

          <div className="border-t border-b border-gray-100 py-8 my-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Share this article
            </span>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#A68A58] hover:text-white transition-all">
                <FaTwitter />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#3b5998] hover:text-white transition-all">
                <FaFacebookF />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#bd081c] hover:text-white transition-all">
                <FaPinterestP />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 bg-gray-50 p-8 rounded-lg">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 shrink-0">
              <img
                src="https://dummyimage.com/200x200/cccccc/ffffff&text=Au"
                alt={post.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-slate-900 mb-1">
                About {post.author}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Senior fragrance editor and scent enthusiast. Passionate about
                uncovering the stories behind the world's most iconic perfumes.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
