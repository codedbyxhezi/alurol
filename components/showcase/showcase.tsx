"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getDictionary, getLocaleFromPathname } from "../../lib/i18n";
import styles from "./showcase.module.css";

export function Showcase() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getDictionary(locale);

  return (
    <section className={styles.showcase} id="rreth-nesh">
      <div className={styles.decorOne} />
      <div className={styles.decorTwo} />

      <div className={styles.header}>
        <motion.span
          className={styles.kicker}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.45 }}
        >
          {t.showcaseSection.kicker}
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
        >
          {t.showcaseSection.title}
        </motion.h2>
      </div>

      <div className={styles.layout}>
        <motion.div
          className={styles.scene}
          initial={{ opacity: 0, x: -34, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          whileHover={{ y: -8 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 24,
          }}
        >
          <Image
            src="/showcase-interior.png"
            alt={t.showcaseSection.imageAlt}
            width={1280}
            height={960}
            className={styles.sceneImage}
          />

          <div className={styles.imageShade} />

          <div className={styles.sceneBadge}>
            <span>{t.showcaseSection.badgeLabel}</span>
            <strong>{t.showcaseSection.badgeTitle}</strong>
          </div>
        </motion.div>

        <div className={styles.content}>
          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.55 }}
          >
            {t.showcaseSection.text}
          </motion.p>

          <div className={styles.highlights}>
            {t.showcaseSection.highlights.map((item, index) => (
              <motion.article
                className={styles.highlight}
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ x: 8 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 22,
                  delay: index * 0.06,
                }}
              >
                <span>{item.value}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className={styles.technicalBox}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <span>{t.showcaseSection.technicalLabel}</span>
            <p>{t.showcaseSection.technicalText}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}