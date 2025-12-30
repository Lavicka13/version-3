import Header from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { Prices } from "@/components/sections/Prices";
import { Philosophy } from "@/components/sections/Philosophy";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Quote } from "@/components/sections/Quote";
import { FAQ } from "@/components/sections/FAQ";
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
      <Testimonials />
      <Quote />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
