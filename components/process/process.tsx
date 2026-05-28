"use client";

import { ClipboardCheck, Factory, Ruler, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./process.module.css";

const steps = [
  {
    number: "01",
    title: "Konsultim",
    description:
      "E kuptojmë nevojën tuaj dhe ju sugjerojmë zgjidhjen më të përshtatshme.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Matje në vend",
    description:
      "Marrim masat saktë në objekt dhe kontrollojmë detajet e montimit.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Përgatitje",
    description:
      "Produktet përgatiten sipas dimensioneve dhe kërkesave të projektit.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Montim",
    description:
      "Montim i pastër, kontroll final dhe dorëzim i rregullt i punimit.",
    icon: Wrench,
  },
];

export function Process() {
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
          <span className={styles.kicker}>Procesi</span>

          <h2 className={styles.title}>
            Proces i qartë, rezultat i pastër.
          </h2>

          <p className={styles.text}>
            Nga këshillimi deri te montimi, çdo hap është i organizuar që
            produkti të përshtatet saktë me hapësirën tuaj.
          </p>

          <a href="#kontakt" className={styles.button}>
            Fillo projektin
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>

        <div className={styles.timeline}>
          {steps.map((step, index) => {
            const Icon = step.icon;

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