"use client";

import { motion } from "framer-motion";
import styles from "./hero.module.css";

const stats = [
  {
    value: "10+",
    label: "Vite përvojë",
  },
  {
    value: "500+",
    label: "Montime të realizuara",
  },
  {
    value: "24h",
    label: "Përgjigje për ofertë",
  },
];

const features = ["Roleta", "Venecianë", "Variolight", "Rrjeta"];

export function Hero() {
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
            Sisteme hijezimi sipas masës
          </div>

          <h1 className={styles.title}>
            Hije, privatësi dhe rehati — të dizajnuara për hapësirën tuaj.
          </h1>

          <p className={styles.description}>
            ALUROL krijon dhe monton roleta, venecianë dhe sisteme moderne
            hijezimi për shtëpi, zyra dhe lokale në Gostivar dhe rrethinë.
          </p>

          <div className={styles.actions}>
            <a href="#kontakt" className={styles.primaryButton}>
              Kërko ofertë
              <span aria-hidden="true">→</span>
            </a>

            <a href="#produktet" className={styles.secondaryButton}>
              Shiko produktet
            </a>
          </div>

          <div className={styles.featureList}>
            {features.map((feature) => (
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
          <div className={styles.visualFrame}>
            <div className={styles.verticalLabel}>ALUROL</div>

            <div className={styles.windowMockup}>
              <div className={styles.mockupTop}>
                <span />
                <span />
                <span />
              </div>

              <div className={styles.window}>
                <div className={styles.sunGlow} />

                <div className={styles.blindSystem}>
                  {Array.from({ length: 13 }).map((_, index) => (
                    <span key={index} />
                  ))}
                </div>

                <div className={styles.centerLine} />
                <div className={styles.reflection} />
              </div>
            </div>

            <div className={styles.floatingEstimate}>
              <small>Procesi</small>
              <strong>Matje → Prodhim → Montim</strong>
            </div>

            <div className={styles.floatingQuality}>
              <span>✓</span>
              <div>
                <strong>Montim i pastër</strong>
                <small>Sipas masës së dritares</small>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.trustBar}
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.28 }}
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}