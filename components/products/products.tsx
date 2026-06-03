"use client";

import Image from "next/image";
import {
  BugOff,
  PanelsTopLeft,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getDictionary, getLocaleFromPathname } from "../../lib/i18n";
import styles from "./products.module.css";

const productAssets = [
  {
    icon: ShieldCheck,
    image: "/products/roleta-alurol.png",
  },
  {
    icon: SlidersHorizontal,
    image: "/products/veneciane-alurol.png",
  },
  {
    icon: PanelsTopLeft,
    image: "/products/variolight-alurol.png",
  },
  {
    icon: BugOff,
    image: "/products/rrjeta-alurol.png",
  },
];

export function Products() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getDictionary(locale);

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
          {t.productsSection.kicker}
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
        >
          {t.productsSection.title}
        </motion.h2>

        <motion.p
          className={styles.text}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {t.productsSection.text}
        </motion.p>
      </div>

      <div className={styles.grid}>
        {t.productsSection.items.map((product, index) => {
          const asset = productAssets[index];
          const Icon = asset.icon;

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
                <Image
                  src={asset.image}
                  alt={product.imageAlt}
                  width={900}
                  height={700}
                  className={styles.productImage}
                />

                <div className={styles.imageOverlay} />

                <motion.div
                  className={styles.iconBox}
                  aria-hidden="true"
                  whileHover={{ rotate: -5, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                >
                  <Icon size={26} strokeWidth={1.8} />
                </motion.div>
              </div>

              <h3>{product.title}</h3>
              <p>{product.description}</p>

              <ul className={styles.specs}>
                {product.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>

              <a href={t.routes.products} className={styles.link}>
                {t.productsSection.linkLabel}
                <span aria-hidden="true">→</span>
              </a>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}