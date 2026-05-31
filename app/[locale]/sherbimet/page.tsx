import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "../../../components/navbar/navbar";
import { Footer } from "../../../components/footer/footer";
import { FloatingContact } from "../../../components/floating-contact/floating-contact";
import { ScrollToTop } from "../../../components/scroll-to-top/scroll-to-top";
import { getDictionary, isLocale, type Locale } from "../../../lib/i18n";
import styles from "./sherbimet.module.css";

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
    title: t.servicesPage.metadata.title,
    description: t.servicesPage.metadata.description,
  };
}

export default async function SherbimetPage({ params }: PageProps) {
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
          <div className={styles.heroText}>
            <span className={styles.kicker}>{t.servicesPage.hero.kicker}</span>

            <h1>{t.servicesPage.hero.title}</h1>

            <p>{t.servicesPage.hero.text}</p>

            <div className={styles.heroActions}>
              <a href={t.routes.contact} className={styles.primaryButton}>
                {t.servicesPage.hero.primaryCta}
                <span>→</span>
              </a>

              <a href="#procesi" className={styles.secondaryButton}>
                {t.servicesPage.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <Image
              src="/hero-card-alurol.png"
              alt={t.servicesPage.hero.imageAlt}
              width={1200}
              height={1000}
              priority
              className={styles.heroImage}
            />

            <div className={styles.panelInfo}>
              <span>{t.servicesPage.hero.badgeLabel}</span>
              <strong>{t.servicesPage.hero.badgeTitle}</strong>
            </div>
          </div>
        </section>

        <section className={styles.timelineSection} id="procesi">
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>
              {t.servicesPage.timeline.kicker}
            </span>
            <h2>{t.servicesPage.timeline.title}</h2>
            <p>{t.servicesPage.timeline.text}</p>
          </div>

          <div className={styles.timeline}>
            {t.servicesPage.timeline.items.map((item) => (
              <article className={styles.timelineItem} key={item.number}>
                <div className={styles.timelineNumber}>{item.number}</div>

                <div className={styles.timelineContent}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.servicesIntro}>
            <span className={styles.kicker}>
              {t.servicesPage.included.kicker}
            </span>
            <h2>{t.servicesPage.included.title}</h2>
          </div>

          <div className={styles.serviceGrid}>
            {t.servicesPage.included.cards.map((item, index) => (
              <article className={styles.serviceCard} key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.detailSection}>
          <div className={styles.detailImage}>
            <Image
              src="/showcase-interior.png"
              alt={t.servicesPage.preparation.imageAlt}
              width={1200}
              height={900}
              className={styles.detailPhoto}
            />

            <div className={styles.detailBadge}>
              <span>{t.servicesPage.preparation.badgeLabel}</span>
              <strong>{t.servicesPage.preparation.badgeTitle}</strong>
            </div>
          </div>

          <div className={styles.detailText}>
            <span className={styles.kicker}>
              {t.servicesPage.preparation.kicker}
            </span>
            <h2>{t.servicesPage.preparation.title}</h2>
            <p>{t.servicesPage.preparation.text}</p>

            <ul className={styles.checkList}>
              {t.servicesPage.preparation.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.qualitySection}>
          <div className={styles.qualityInner}>
            <span className={styles.kicker}>{t.servicesPage.quality.kicker}</span>

            <h2>{t.servicesPage.quality.title}</h2>

            <div className={styles.qualityGrid}>
              {t.servicesPage.quality.items.map((item, index) => (
                <div key={item}>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <div>
              <span>{t.servicesPage.cta.kicker}</span>
              <h2>{t.servicesPage.cta.title}</h2>
              <p>{t.servicesPage.cta.text}</p>
            </div>

            <a href={t.routes.contact} className={styles.ctaButton}>
              {t.servicesPage.cta.button}
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
      <ScrollToTop />
    </>
  );
}