"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getDictionary, getLocaleFromPathname } from "../../lib/i18n";
import styles from "./hero.module.css";

export function Hero() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getDictionary(locale);

  return (
    <section className={styles.hero}>
      <div className={styles.noise} />
      <div className={styles.orbOne} />
      <div className={styles.orbTwo} />

      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className={styles.badge}>
            <span />
            {t.hero.badge}
          </div>

          <h1 className={styles.title}>{t.hero.title}</h1>

          <p className={styles.description}>{t.hero.description}</p>

          <div className={styles.actions}>
            <a href={t.routes.contact} className={styles.primaryButton}>
              {t.hero.primaryCta}
              <span aria-hidden="true">→</span>
            </a>

            <a href={t.routes.products} className={styles.secondaryButton}>
              {t.hero.secondaryCta}
            </a>
          </div>

          <div className={styles.featureList}>
            {t.hero.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 48, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.12 }}
        >
          <div className={styles.imageCard}>
            <Image
              src="/hero-card.png"
              alt={t.hero.imageAlt}
              width={1280}
              height={1024}
              priority
              className={styles.heroImage}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.trustBar}
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.28 }}
      >
        {t.hero.stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}