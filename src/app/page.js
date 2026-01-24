import Banner from "@/Components/home/Banner";
import Products from "@/Components/home/Products";
import Collections from "@/Components/home/Collections";
import Features from "@/Components/home/Features";
import Newsletter from "@/Components/home/Newsletter";
import Testimonials from "@/Components/home/Testimonials";
import WhyChooseUs from "@/Components/home/WhyChooseUs";
import { Suspense } from "react";
import ProductSkeleton from "@/Components/skeleton/ProductSkeleton";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
    
      <Banner />
      <Features />
      <section className="py-10">
        <Collections />
      </section>
      <section className="py-0">
        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-8">
              <div className="text-center mb-8">
                <h2 className="border-b-2 border-primary pb-1 w-fit mx-auto font-semibold text-3xl">
                  Our Products
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                  <ProductSkeleton key={index} />
                ))}
              </div>
            </div>
          }
        >
          <Products />
        </Suspense>
      </section>

      {/* Section 5: Why Choose Us */}
      <WhyChooseUs />

      {/* Section 6: Customer Testimonials */}
      <Testimonials />

      {/* Section 7: Newsletter Subscription */}
      <Newsletter />
    </div>
  );
}
