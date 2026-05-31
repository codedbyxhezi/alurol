"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getDictionary, getLocaleFromPathname } from "../../lib/i18n";
import styles from "./gallery.module.css";

const projectImages = [
  "/gallery/roleta-project.png",
  "/gallery/veneciane-project.png",
  "/gallery/variolight-project.png",
];

export function Gallery() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getDictionary(locale);

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
          {t.gallerySection.kicker}
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
        >
          {t.gallerySection.title}
        </motion.h2>

        <motion.p
          className={styles.text}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {t.gallerySection.text}
        </motion.p>
      </div>

      <div className={styles.grid}>
        {t.gallerySection.projects.map((project, index) => (
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
                src={projectImages[index]}
                alt={project.imageAlt}
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