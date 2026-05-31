import { notFound } from "next/navigation";
import { Footer } from "../../components/footer/footer";
import { FloatingContact } from "../../components/floating-contact/floating-contact";
import { Gallery } from "../../components/gallery/gallery";
import { Hero } from "../../components/hero/hero";
import { Navbar } from "../../components/navbar/navbar";
import { Process } from "../../components/process/process";
import { Products } from "../../components/products/products";
import { ScrollToTop } from "../../components/scroll-to-top/scroll-to-top";
import { Showcase } from "../../components/showcase/showcase";
import { Contact } from "../../components/contact/contact";
import { getDictionary, isLocale, type Locale } from "../../lib/i18n";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = getDictionary(locale as Locale);

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