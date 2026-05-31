import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { FloatingContact } from "../../components/floating-contact/floating-contact";
import { ScrollToTop } from "../../components/scroll-to-top/scroll-to-top";
import { getDictionary, isLocale, type Locale } from "../../lib/i18n";
import styles from "./legal.module.css";

export type LegalPageKey = "impressum" | "privacy" | "terms";

type Params = Promise<{
  locale: string;
}>;

export async function generateLegalMetadata(
  params: Params,
  pageKey: LegalPageKey
): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const t = getDictionary(locale as Locale);
  const page = t.legalPages[pageKey];

  return {
    title: page.metadata.title,
    description: page.metadata.description,
  };
}

export async function LegalPage({
  params,
  pageKey,
}: {
  params: Params;
  pageKey: LegalPageKey;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = getDictionary(locale as Locale);
  const page = t.legalPages[pageKey];

  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <article className={styles.container}>
          <a href={t.routes.home} className={styles.back}>
            ← {locale === "mk" ? "Назад на почетна" : "Kthehu në faqen kryesore"}
          </a>

          <span className={styles.kicker}>{page.kicker}</span>

          <h1 className={styles.title}>{page.title}</h1>

          <p className={styles.updated}>{page.updated}</p>

          {page.sections.map((section) => (
            <section className={styles.section} key={section.title}>
              <h2>{section.title}</h2>

              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <div className={styles.infoBox}>
            <p>{page.note}</p>
          </div>
        </article>
      </main>

      <Footer />
      <FloatingContact />
      <ScrollToTop />
    </>
  );
}