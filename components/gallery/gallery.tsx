"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./gallery.module.css";

const projects = [
  {
    title: "Roleta për dritare të mëdha",
    category: "Eksterier",
    description:
      "Zgjidhje për privatësi, mbrojtje nga dielli dhe pamje të pastër në fasadë.",
    image: "/gallery/roleta-project.png",
  },
  {
    title: "Venecianë për interier",
    category: "Interier",
    description:
      "Kontroll elegant i dritës për shtëpi, zyra dhe lokale moderne.",
    image: "/gallery/veneciane-project.png",
  },
  {
    title: "Variolight premium",
    category: "Premium",
    description:
      "Hijezim modern me pamje të lehtë, të pastër dhe të përshtatshme për çdo hapësirë.",
    image: "/gallery/variolight-project.png",
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
          Shembuj vizualë të zgjidhjeve moderne për hijezim, privatësi dhe
          rehati në hapësira të ndryshme.
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
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={1200}
                className={styles.projectImage}
              />

              <div className={styles.imageOverlay} />
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