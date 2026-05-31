"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getDictionary, getLocaleFromPathname } from "../../lib/i18n";
import { LanguageSwitcher } from "../language-switcher/language-switcher";
import styles from "./navbar.module.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const locale = getLocaleFromPathname(pathname);
  const t = getDictionary(locale);

  const navItems = [
    {
      href: t.routes.products,
      label: t.nav.products,
    },
    {
      href: t.routes.services,
      label: t.nav.services,
    },
    {
      href: t.routes.about,
      label: t.nav.about,
    },
    {
      href: t.routes.projects,
      label: t.nav.projects,
    },
    {
      href: t.routes.contact,
      label: t.nav.contact,
    },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <a href={t.routes.home} className={styles.logoLink} aria-label="ALUROL">
        <Image
          src="/alurol-logo-new.png"
          alt="ALUROL"
          width={220}
          height={78}
          priority
          className={styles.logo}
        />
      </a>

      <nav className={styles.nav} aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={pathname === item.href ? styles.activeLink : ""}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className={styles.rightSide}>
        <LanguageSwitcher />

        <a className={styles.cta} href={t.routes.contact}>
          {t.nav.cta}
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className={styles.mobileControls}>
        <LanguageSwitcher />

        <button
          className={styles.menuButton}
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={pathname === item.href ? styles.activeMobileLink : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className={styles.mobileCta}
            href={t.routes.contact}
            onClick={closeMenu}
          >
            {t.nav.cta}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </header>
  );
}