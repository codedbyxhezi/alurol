import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "../../../components/navbar/navbar";
import { Footer } from "../../../components/footer/footer";
import { FloatingContact } from "../../../components/floating-contact/floating-contact";
import { ScrollToTop } from "../../../components/scroll-to-top/scroll-to-top";
import { getDictionary, isLocale, type Locale } from "../../../lib/i18n";
import styles from "./produktet.module.css";

const productImages = [
  "/products/roleta-alurol.png",
  "/products/veneciane-alurol.png",
  "/products/variolight-alurol.png",
  "/products/rrjeta-alurol.png",
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
    title: t.productPage.metadata.title,
    description: t.productPage.metadata.description,
  };
}

export default async function ProduktetPage({ params }: PageProps) {
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
            <span className={styles.kicker}>{t.productPage.hero.kicker}</span>

            <h1>{t.productPage.hero.title}</h1>

            <p>{t.productPage.hero.text}</p>

            <div className={styles.heroActions}>
              <a href={t.routes.contact} className={styles.primaryButton}>
                {t.productPage.hero.primaryCta}
                <span>→</span>
              </a>

              <a href="#krahasimi" className={styles.secondaryButton}>
                {t.productPage.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <Image
              src="/hero-card-alurol.png"
              alt={t.productPage.hero.imageAlt}
              width={1200}
              height={1000}
              priority
              className={styles.heroImage}
            />

            <div className={styles.heroBadge}>
              <span>{t.productPage.hero.badgeLabel}</span>
              <strong>{t.productPage.hero.badgeTitle}</strong>
            </div>
          </div>
        </section>

        <section className={styles.productList}>
          {t.productPage.products.map((product, index) => (
            <article
              className={`${styles.productBlock} ${
                index % 2 === 1 ? styles.reverse : ""
              }`}
              key={product.title}
            >
              <div className={styles.productImageWrap}>
                <Image
                  src={productImages[index]}
                  alt={product.imageAlt}
                  width={1200}
                  height={900}
                  className={styles.productImage}
                />

                <div className={styles.imageLabel}>
                  <span>{product.eyebrow}</span>
                  <strong>{product.title}</strong>
                </div>
              </div>

              <div className={styles.productContent}>
                <span className={styles.productEyebrow}>{product.eyebrow}</span>

                <h2>{product.title}</h2>

                <p>{product.description}</p>

                <div className={styles.infoGrid}>
                  <div>
                    <h3>{t.productPage.productLabels.suitable}</h3>
                    <ul>
                      {product.suitable.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3>{t.productPage.productLabels.benefits}</h3>
                    <ul>
                      {product.benefits.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.optionsSection}>
                  <h3>{t.productPage.productLabels.options}</h3>

                  <div className={styles.optionsGrid}>
                    {product.options.map((group) => (
                      <div className={styles.optionCard} key={group.label}>
                        <span>{group.label}</span>

                        <div>
                          {group.values.map((value) => (
                            <small key={value}>{value}</small>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <a href={t.routes.contact} className={styles.textLink}>
                  {t.productPage.productLabels.requestInfo} {product.title}
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.comparison} id="krahasimi">
          <div className={styles.comparisonHeader}>
            <span className={styles.kicker}>
              {t.productPage.comparison.kicker}
            </span>

            <h2>{t.productPage.comparison.title}</h2>

            <p>{t.productPage.comparison.text}</p>
          </div>

          <div className={styles.comparisonGrid}>
            {t.productPage.comparison.items.map((item, index) => (
              <div className={styles.compareCard} key={item.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <div>
              <span>{t.productPage.cta.kicker}</span>
              <h2>{t.productPage.cta.title}</h2>
              <p>{t.productPage.cta.text}</p>
            </div>

            <a href={t.routes.contact} className={styles.ctaButton}>
              {t.productPage.cta.button}
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