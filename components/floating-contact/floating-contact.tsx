"use client";

import { motion } from "framer-motion";
import styles from "./floating-contact.module.css";

export function FloatingContact() {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: 22, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay: 0.8 }}
    >
      <a
        className={styles.main}
        href="https://wa.me/38970314249"
        target="_blank"
        rel="noreferrer"
        aria-label="Shkruaj në WhatsApp"
      >
        <span className={styles.dot} />
        WhatsApp
      </a>
    </motion.div>
  );
}