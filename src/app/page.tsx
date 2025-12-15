import Header from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { Prices } from "@/components/sections/Prices";
import { Philosophy } from "@/components/sections/Philosophy";
import { About } from "@/components/sections/About";
import { Quote } from "@/components/sections/Quote";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <Prices />
      <Philosophy />
      <About />
      <Quote />
      <Contact />
      <Footer />
    </main>
  );
}
