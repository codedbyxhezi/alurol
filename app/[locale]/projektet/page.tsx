import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "../../../components/navbar/navbar";
import { Footer } from "../../../components/footer/footer";
import { FloatingContact } from "../../../components/floating-contact/floating-contact";
import { ScrollToTop } from "../../../components/scroll-to-top/scroll-to-top";
import { getDictionary, isLocale, type Locale } from "../../../lib/i18n";
import styles from "./projektet.module.css";

const projectImages = [
  "/gallery/roleta-project.png",
  "/gallery/veneciane-project.png",
  "/gallery/variolight-project.png",
];

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
    title: t.projectsPage.metadata.title,
    description: t.projectsPage.metadata.description,
  };
}

export default async function ProjektetPage({ params }: PageProps) {
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
            <span className={styles.kicker}>{t.projectsPage.hero.kicker}</span>

            <h1>{t.projectsPage.hero.title}</h1>

            <p>{t.projectsPage.hero.text}</p>

            <div className={styles.heroActions}>
              <a href={t.routes.contact} className={styles.primaryButton}>
                {t.projectsPage.hero.primaryCta}
                <span>→</span>
              </a>

              <a href="#galeria" className={styles.secondaryButton}>
                {t.projectsPage.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className={styles.heroGallery}>
            <div className={styles.heroImageLarge}>
              <Image
                src="/gallery/roleta-project.png"
                alt={t.projectsPage.hero.images.roletaAlt}
                width={1200}
                height={900}
                priority
                className={styles.heroImage}
              />
            </div>

            <div className={styles.heroStack}>
              <div>
                <Image
                  src="/gallery/veneciane-project.png"
                  alt={t.projectsPage.hero.images.venecianeAlt}
                  width={700}
                  height={500}
                  className={styles.stackImage}
                />
              </div>

              <div>
                <Image
                  src="/gallery/variolight-project.png"
                  alt={t.projectsPage.hero.images.variolightAlt}
                  width={700}
                  height={500}
                  className={styles.stackImage}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.introSection}>
          <div className={styles.introText}>
            <span className={styles.kicker}>{t.projectsPage.intro.kicker}</span>

            <h2>{t.projectsPage.intro.title}</h2>

            <p>{t.projectsPage.intro.text}</p>
          </div>

          <div className={styles.typeGrid}>
            {t.projectsPage.intro.types.map((type) => (
              <article className={styles.typeCard} key={type.title}>
                <span>{type.number}</span>
                <h3>{type.title}</h3>
                <p>{type.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.gallerySection} id="galeria">
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>{t.projectsPage.gallery.kicker}</span>

            <h2>{t.projectsPage.gallery.title}</h2>

            <p>{t.projectsPage.gallery.text}</p>
          </div>

          <div className={styles.projectGrid}>
            {t.projectsPage.gallery.projects.map((project, index) => (
              <article
                className={`${styles.projectCard} ${
                  index === 0 ? styles.featured : ""
                }`}
                key={project.title}
              >
                <Image
                  src={projectImages[index]}
                  alt={project.imageAlt}
                  width={1200}
                  height={900}
                  className={styles.projectImage}
                />

                <div className={styles.projectOverlay} />

                <div className={styles.projectInfo}>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.detailSection}>
          <div className={styles.detailText}>
            <span className={styles.kicker}>{t.projectsPage.detail.kicker}</span>

            <h2>{t.projectsPage.detail.title}</h2>

            <p>{t.projectsPage.detail.text}</p>
          </div>

          <div className={styles.detailList}>
            {t.projectsPage.detail.items.map((item) => (
              <div key={item.title}>
                <strong>{item.number}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <div>
              <span>{t.projectsPage.cta.kicker}</span>
              <h2>{t.projectsPage.cta.title}</h2>
              <p>{t.projectsPage.cta.text}</p>
            </div>

            <a href={t.routes.contact} className={styles.ctaButton}>
              {t.projectsPage.cta.button}
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