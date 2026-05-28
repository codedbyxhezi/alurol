import { Navbar } from "../components/navbar/navbar";
import { Hero } from "../components/hero/hero";
import { Products } from "../components/products/products";
import { Process } from "../components/process/process";
import { Showcase } from "../components/showcase/showcase";
import { Gallery } from "../components/gallery/gallery";
import { Contact } from "../components/contact/contact";
import { Footer } from "../components/footer/footer";
import { FloatingContact } from "../components/floating-contact/floating-contact";
import { ScrollToTop } from "../components/scroll-to-top/scroll-to-top";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Process />
        <Showcase />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
      <ScrollToTop />
    </>
  );
}