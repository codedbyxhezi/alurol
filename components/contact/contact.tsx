"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getDictionary, getLocaleFromPathname } from "../../lib/i18n";
import styles from "./contact.module.css";

const contactIcons = [Phone, Mail, MapPin];

function isPhoneLabel(label: string) {
  const lower = label.toLowerCase();
  return lower.includes("telefon") || lower.includes("телефон");
}

function toPhoneHref(phone: string) {
  return `tel:${phone.replace(/\(0\)\s*/g, "").replace(/[^\d+]/g, "")}`;
}

export function Contact() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getDictionary(locale);

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
          <span className={styles.kicker}>{t.contactSection.kicker}</span>

          <h2 className={styles.title}>{t.contactSection.title}</h2>

          <p className={styles.text}>{t.contactSection.text}</p>

          <div className={styles.quickActions}>
            <motion.a
              className={styles.primaryButton}
              href="tel:+38970314249"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.contactSection.primaryCta}
              <span aria-hidden="true">→</span>
            </motion.a>

            <motion.a
              className={styles.secondaryButton}
              href="mailto:alurol_gv@live.com"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.contactSection.secondaryCta}
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
          <div className={styles.cardTop}>
            <div>
              <span>{t.contactSection.cardLabel}</span>
              <strong>{t.contactSection.cardTitle}</strong>
            </div>

            <div className={styles.locationIcon} aria-hidden="true">
              <MapPin size={25} strokeWidth={1.9} />
            </div>
          </div>

          <div className={styles.contactList}>
            {t.contactSection.items.map((item, index) => {
              const Icon = contactIcons[index] ?? Phone;
              const isPhone = isPhoneLabel(item.label);
              const lines = item.value.split("\n");

              if (isPhone) {
                return (
                  <motion.div
                    key={item.label}
                    className={styles.contactItem}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ x: 6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.28, delay: index * 0.06 }}
                  >
                    <span className={styles.itemIcon} aria-hidden="true">
                      <Icon size={21} strokeWidth={1.9} />
                    </span>

                    <span className={styles.itemText}>
                      <small>{item.label}</small>

                      <strong className={styles.phoneLinks}>
                        {lines.map((line) => (
                          <a key={line} href={toPhoneHref(line)}>
                            {line}
                          </a>
                        ))}
                      </strong>
                    </span>
                  </motion.div>
                );
              }

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
                    <Icon size={21} strokeWidth={1.9} />
                  </span>

                  <span className={styles.itemText}>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </span>
                </motion.a>
              );
            })}
          </div>

          <div className={styles.hoursCard}>
            <div className={styles.hoursIcon} aria-hidden="true">
              <Clock size={22} strokeWidth={1.9} />
            </div>

            <div className={styles.hoursText}>
              <span>{t.contactSection.hoursLabel}</span>
              <strong>{t.contactSection.hoursTitle}</strong>
              <p>{t.contactSection.hoursValue}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}