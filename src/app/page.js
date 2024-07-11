import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import Fragrants from "@/components/fragrants/Fragrants";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Products limit={8} />
      <Fragrants />
      <Testimonials />
      <Products limit={4} />
    </main>
  );
}
