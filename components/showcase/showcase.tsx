"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./showcase.module.css";

const highlights = [
  {
    value: "01",
    title: "Dritë e kontrolluar",
    text: "Hijezim i saktë gjatë ditës, pa e rënduar pamjen e hapësirës.",
  },
  {
    value: "02",
    title: "Pamje e pastër",
    text: "Forma moderne, ngjyra të qeta dhe montim që përshtatet me interierin.",
  },
  {
    value: "03",
    title: "Punim sipas masës",
    text: "Çdo element përgatitet sipas dimensioneve reale të dritares.",
  },
];

export function Showcase() {
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
          Hapësira më të qeta
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
        >
          Hijezim që duket mirë, funksionon çdo ditë dhe përshtatet me stilin e objektit.
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
            alt="Interier modern me venecianë ALUROL"
            width={1280}
            height={960}
            className={styles.sceneImage}
          />

          <div className={styles.imageShade} />

          <div className={styles.sceneBadge}>
            <span>ALUROL</span>
            <strong>Interior comfort</strong>
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
            Produktet tona nuk janë vetëm mbrojtje nga dielli. Ato ndikojnë në
            atmosferën e dhomës, privatësinë, temperaturën dhe pamjen e
            përgjithshme të shtëpisë apo lokalit.
          </motion.p>

          <div className={styles.highlights}>
            {highlights.map((item, index) => (
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
            <span>Detaj teknik</span>
            <p>
              Para çdo montimi kontrollohen masat, hapësira e instalimit dhe
              mënyra më e përshtatshme e fiksimit.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}