"use client";

import { ClipboardCheck, Factory, Ruler, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getDictionary, getLocaleFromPathname } from "../../lib/i18n";
import styles from "./process.module.css";

const stepIcons = [ClipboardCheck, Ruler, Factory, Wrench];

export function Process() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getDictionary(locale);

  return (
    <section className={styles.process} id="sherbimet">
      <div className={styles.inner}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.kicker}>{t.processSection.kicker}</span>

          <h2 className={styles.title}>{t.processSection.title}</h2>

          <p className={styles.text}>{t.processSection.text}</p>

          <a href={t.routes.contact} className={styles.button}>
            {t.processSection.cta}
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>

        <div className={styles.timeline}>
          {t.processSection.steps.map((step, index) => {
            const Icon = stepIcons[index];

            return (
              <motion.article
                className={styles.step}
                key={step.number}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ x: 8, scale: 1.015 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 22,
                  delay: index * 0.06,
                }}
              >
                <div className={styles.marker}>
                  <span>{step.number}</span>
                </div>

                <div className={styles.iconBox} aria-hidden="true">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}