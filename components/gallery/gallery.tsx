"use client";

import { motion } from "framer-motion";
import styles from "./gallery.module.css";

const projects = [
  {
    title: "Roleta për dritare të mëdha",
    category: "Eksterier",
    description:
      "Zgjidhje për privatësi, mbrojtje nga dielli dhe pamje të pastër në fasadë.",
  },
  {
    title: "Venecianë për interier",
    category: "Interier",
    description:
      "Kontroll elegant i dritës për shtëpi, zyra dhe lokale moderne.",
  },
  {
    title: "Variolight premium",
    category: "Premium",
    description:
      "Hijezim modern me pamje të lehtë, të pastër dhe të përshtatshme për çdo hapësirë.",
  },
];

export function Gallery() {
  return (
    <section className={styles.gallery} id="projektet">
      <div className={styles.backgroundShape} />

      <div className={styles.header}>
        <motion.span
          className={styles.kicker}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.45 }}
        >
          Projekte
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
        >
          Pamje moderne për shtëpi, zyra dhe lokale.
        </motion.h2>

        <motion.p
          className={styles.text}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          Këtu mund të vendosen më vonë fotografi reale të punimeve. Për
          momentin, seksioni tregon stilin dhe atmosferën e zgjidhjeve ALUROL.
        </motion.p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.article
            className={styles.card}
            key={project.title}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 22,
              delay: index * 0.06,
            }}
          >
            <div className={styles.visual}>
              <div className={styles.window}>
                <div className={styles.light} />

                <div className={styles.slats}>
                  {Array.from({ length: 10 }).map((_, slatIndex) => (
                    <span key={slatIndex} />
                  ))}
                </div>

                <div className={styles.reflection} />
              </div>

              <div className={styles.floor} />
              <div className={styles.objectOne} />
              <div className={styles.objectTwo} />
            </div>

            <div className={styles.body}>
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}