"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./contact.module.css";

const contactItems = [
  {
    label: "Telefon",
    value: "+389 (0) 70 314 249",
    href: "tel:+38970314249",
    icon: Phone,
  },
  {
    label: "E-mail",
    value: "alurol_gv@live.com",
    href: "mailto:alurol_gv@live.com",
    icon: Mail,
  },
  {
    label: "Adresa",
    value: "Rr. Beliçica 113/A, 1230 Gostivar",
    href: "https://www.google.com/maps/search/?api=1&query=Rr.+Beliçica+113%2FA+1230+Gostivar",
    icon: MapPin,
  },
];

export function Contact() {
  return (
    <section className={styles.contact} id="kontakt">
      <div className={styles.backgroundCircle} />
      <div className={styles.gridPattern} />

      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.kicker}>Kontakt</span>

          <h2 className={styles.title}>
            Le ta gjejmë zgjidhjen e duhur për dritaret tuaja.
          </h2>

          <p className={styles.text}>
            Na kontaktoni për matje, këshillim ose ofertë. Ju përgjigjemi
            shpejt dhe ju ndihmojmë të zgjidhni sistemin më të përshtatshëm
            për shtëpinë, zyrën apo lokalin tuaj.
          </p>

          <div className={styles.quickActions}>
            <motion.a
              className={styles.primaryButton}
              href="tel:+38970314249"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Thirr tani
              <span aria-hidden="true">→</span>
            </motion.a>

            <motion.a
              className={styles.secondaryButton}
              href="mailto:alurol_gv@live.com"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Dërgo e-mail
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, x: 34, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          whileHover={{ y: -8 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
        >
          <div className={styles.cardHeader}>
            <div>
              <span>ALUROL</span>
              <strong>Gostivar</strong>
            </div>

            <div className={styles.headerIcon} aria-hidden="true">
              <MapPin size={26} strokeWidth={1.8} />
            </div>
          </div>

          <div className={styles.contactList}>
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={styles.contactItem}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, delay: index * 0.06 }}
                >
                  <span className={styles.itemIcon} aria-hidden="true">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>

                  <span className={styles.itemText}>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </span>
                </motion.a>
              );
            })}
          </div>

          <div className={styles.note}>
            <span className={styles.noteIcon} aria-hidden="true">
              <Clock size={22} strokeWidth={1.8} />
            </span>

            <div>
              <p>Orari</p>
              <strong>E hënë - E shtunë</strong>
              <span>Sipas marrëveshjes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}