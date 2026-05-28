"use client";

import {
  BugOff,
  PanelsTopLeft,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./products.module.css";

const products = [
  {
    title: "Roleta të jashtme",
    description:
      "Mbrojtje e fuqishme nga dielli, era dhe shikimet nga jashtë, me pamje të pastër dhe përdorim të përditshëm.",
    meta: "Eksterier",
    number: "01",
    specs: ["Izolim", "Privatësi", "Sipas masës"],
    icon: ShieldCheck,
  },
  {
    title: "Venecianë",
    description:
      "Kontroll elegant i dritës për ambiente të brendshme, zyra, banesa dhe lokale moderne.",
    meta: "Interier",
    number: "02",
    specs: ["Kontroll drite", "Pamje elegante", "Praktike"],
    icon: SlidersHorizontal,
  },
  {
    title: "Variolight",
    description:
      "Sistem modern hijezimi me pamje premium, i përshtatshëm për interiere të pastra dhe bashkëkohore.",
    meta: "Premium",
    number: "03",
    specs: ["Design modern", "Komoditet", "Hijezim"],
    icon: PanelsTopLeft,
  },
  {
    title: "Rrjeta kundër insekteve",
    description:
      "Zgjidhje diskrete për mbrojtje nga insektet, pa e penguar ajrosjen dhe përdorimin e dritares.",
    meta: "Funksionale",
    number: "04",
    specs: ["Diskrete", "Ajrosje", "Mbrojtje"],
    icon: BugOff,
  },
];

export function Products() {
  return (
    <section className={styles.products} id="produktet">
      <div className={styles.decor} />

      <div className={styles.header}>
        <motion.span
          className={styles.kicker}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.45 }}
        >
          Produktet
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
        >
          Zgjidhje të zgjedhura për dritare, fasada dhe interiere moderne.
        </motion.h2>

        <motion.p
          className={styles.text}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          Çdo produkt matet dhe përgatitet sipas objektit tuaj. Qëllimi është
          i thjeshtë: funksion i sigurt, pamje e pastër dhe përdorim afatgjatë.
        </motion.p>
      </div>

      <div className={styles.grid}>
        {products.map((product, index) => {
          const Icon = product.icon;

          return (
            <motion.article
              className={styles.card}
              key={product.title}
              initial={{ opacity: 0, y: 34, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                y: -12,
                rotateX: 2,
                rotateY: index % 2 === 0 ? -2 : 2,
              }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 22,
                delay: index * 0.06,
              }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.number}>{product.number}</span>
                <span className={styles.meta}>{product.meta}</span>
              </div>

              <div className={styles.visual}>
                <motion.div
                  className={styles.iconBox}
                  aria-hidden="true"
                  whileHover={{ rotate: -5, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                >
                  <Icon size={30} strokeWidth={1.8} />
                </motion.div>

                <div className={styles.slats} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <h3>{product.title}</h3>
              <p>{product.description}</p>

              <ul className={styles.specs}>
                {product.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>

              <a href="#kontakt" className={styles.link}>
                Kërko informacion
                <span aria-hidden="true">→</span>
              </a>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}