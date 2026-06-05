import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "../../../components/navbar/navbar";
import { Footer } from "../../../components/footer/footer";
import { ScrollToTop } from "../../../components/scroll-to-top/scroll-to-top";
import { getDictionary, isLocale, type Locale } from "../../../lib/i18n";
import styles from "./rreth-nesh.module.css";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const t = getDictionary(locale as Locale);

  return {
    title: t.aboutPage.metadata.title,
    description: t.aboutPage.metadata.description,
  };
}

export default async function RrethNeshPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = getDictionary(locale as Locale);

  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.kicker}>{t.aboutPage.hero.kicker}</span>

            <h1>{t.aboutPage.hero.title}</h1>

            <p>{t.aboutPage.hero.text}</p>

            <div className={styles.heroActions}>
              <a href={t.routes.contact} className={styles.primaryButton}>
                {t.aboutPage.hero.primaryCta}
                <span>→</span>
              </a>

              <a href={t.routes.projects} className={styles.secondaryButton}>
                {t.aboutPage.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className={styles.heroStats}>
            {t.aboutPage.hero.facts.map((fact) => (
              <div key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.storySection}>
          <div className={styles.storyImage}>
            <Image
              src="/showcase-interior.png"
              alt={t.aboutPage.story.imageAlt}
              width={1200}
              height={900}
              priority
              className={styles.storyPhoto}
            />

            <div className={styles.storyBadge}>
              <span>{t.aboutPage.story.badgeLabel}</span>
              <strong>{t.aboutPage.story.badgeTitle}</strong>
            </div>
          </div>

          <div className={styles.storyText}>
            <span className={styles.kicker}>{t.aboutPage.story.kicker}</span>

            <h2>{t.aboutPage.story.title}</h2>

            {t.aboutPage.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className={styles.valuesSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>{t.aboutPage.values.kicker}</span>

            <h2>{t.aboutPage.values.title}</h2>

            <p>{t.aboutPage.values.text}</p>
          </div>

          <div className={styles.valuesGrid}>
            {t.aboutPage.values.items.map((value) => (
              <article className={styles.valueCard} key={value.title}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.principlesSection}>
          <div className={styles.principlesText}>
            <span className={styles.kicker}>{t.aboutPage.principles.kicker}</span>

            <h2>{t.aboutPage.principles.title}</h2>

            <p>{t.aboutPage.principles.text}</p>
          </div>

          <ul className={styles.principlesList}>
            {t.aboutPage.principles.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.darkSection}>
          <div className={styles.darkInner}>
            <span className={styles.kicker}>{t.aboutPage.why.kicker}</span>

            <h2>{t.aboutPage.why.title}</h2>

            <p>{t.aboutPage.why.text}</p>

            <div className={styles.darkGrid}>
              {t.aboutPage.why.items.map((item) => (
                <article key={item.title}>
                  <strong>{item.number}</strong>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <div>
              <span>{t.aboutPage.cta.kicker}</span>
              <h2>{t.aboutPage.cta.title}</h2>
              <p>{t.aboutPage.cta.text}</p>
            </div>

            <a href={t.routes.contact} className={styles.ctaButton}>
              {t.aboutPage.cta.button}
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}