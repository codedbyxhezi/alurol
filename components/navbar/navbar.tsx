"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./navbar.module.css";

const navItems = [
  {
    href: "/produktet",
    label: "Produktet",
  },
  {
    href: "/sherbimet",
    label: "Shërbimet",
  },
  {
    href: "/rreth-nesh",
    label: "Rreth nesh",
  },
  {
    href: "/projektet",
    label: "Projektet",
  },
  {
    href: "/kontakt",
    label: "Kontakt",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="ALUROL faqja kryesore">
        <Image
          src="/alurol-logo-new.png"
          alt="ALUROL"
          width={260}
          height={90}
          priority
          className={styles.logoImage}
        />
      </Link>

      <nav className={styles.nav} aria-label="Navigimi kryesor">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className={styles.navLink}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className={styles.cta} href="/kontakt">
        Kërko ofertë
        <span aria-hidden="true">→</span>
      </a>

      <button
        className={styles.menuButton}
        type="button"
        aria-label={isOpen ? "Mbyll menynë" : "Hap menynë"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className={isOpen ? styles.lineOpenTop : ""} />
        <span className={isOpen ? styles.lineOpenMiddle : ""} />
        <span className={isOpen ? styles.lineOpenBottom : ""} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className={styles.mobileTop}>
              <span>Menu</span>
              <strong>ALUROL</strong>
            </div>

            <nav className={styles.mobileNav} aria-label="Navigimi mobil">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: index * 0.04 }}
                >
                  <span>0{index + 1}</span>
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className={styles.mobileContact}>
              <span>Kontakt direkt</span>
              <a href="tel:+38970314249" onClick={closeMenu}>
                +389 (0) 70 314 249
              </a>
            </div>

            <a className={styles.mobileCta} href="/kontakt" onClick={closeMenu}>
              Kërko ofertë
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}