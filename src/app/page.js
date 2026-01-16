import Banner from "@/Components/home/Banner";
import Products from "@/Components/home/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Banner />
      </section>
      <section>
        <Products />
      </section>
    </div>
  );
}
