"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { getDictionary, getLocaleFromPathname } from "../../lib/i18n";
import styles from "./hero.module.css";

export function Hero() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getDictionary(locale);

  return (
    <section className={styles.hero}>
      <Image
        src="/hero-card-alurol.png"
        alt={t.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className={styles.backgroundImage}
      />
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span />
            {t.hero.badge}
          </div>

          <h1 className={styles.title}>{t.hero.title}</h1>

          <p className={styles.description}>{t.hero.description}</p>

          <div className={styles.actions}>
            <a href={t.routes.contact} className={styles.primaryButton}>
              {t.hero.primaryCta}
              <span aria-hidden="true">&rarr;</span>
            </a>

            <a href={t.routes.products} className={styles.secondaryButton}>
              {t.hero.secondaryCta}
            </a>
          </div>

          <div className={styles.featureList}>
            {t.hero.features.map((feature, index) => (
              <span key={feature}>
                <i>{String(index + 1).padStart(2, "0")}</i>
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.trustBar}>
          {t.hero.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
