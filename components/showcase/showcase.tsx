"use client";

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
    text: "Forma të thjeshta, ngjyra neutrale dhe montim që përshtatet me interierin.",
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
          initial={{ opacity: 0, x: -34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.65 }}
        >
          <div className={styles.room}>
            <div className={styles.wallLight} />
            <div className={styles.windowLarge}>
              <div className={styles.windowFrame}>
                <div className={styles.blinds}>
                  {Array.from({ length: 11 }).map((_, index) => (
                    <span key={index} />
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.floor} />
            <div className={styles.sofa} />
            <div className={styles.table} />
          </div>

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
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
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