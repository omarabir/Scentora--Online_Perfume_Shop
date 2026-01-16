import Banner from "@/Components/home/Banner";
import Products from "@/Components/home/Products";
import Collections from "@/Components/home/Collections";
import Features from "@/Components/home/Features";
import Newsletter from "@/Components/home/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Banner />
      <Features />
      <section className="py-10">
        <Collections />
      </section>
      <section className="py-0">
        <Products />
      </section>
      <Newsletter />
    </div>
  );
}
