"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { getDictionary, getLocaleFromPathname } from "../../lib/i18n";
import styles from "./footer.module.css";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getDictionary(locale);

  const links = [
    { href: t.routes.products, label: t.nav.products },
    { href: t.routes.services, label: t.nav.services },
    { href: t.routes.about, label: t.nav.about },
    { href: t.routes.projects, label: t.nav.projects },
    { href: t.routes.contact, label: t.nav.contact },
  ];

  const products = [
    t.products.roleta,
    t.products.veneciane,
    t.products.variolight,
    t.products.insectScreens,
  ];

  const legalLinks = [
    { href: t.routes.impressum, label: t.footer.legal.impressum },
    { href: t.routes.privacy, label: t.footer.legal.privacy },
    { href: t.routes.terms, label: t.footer.legal.terms },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.ctaBox}>
        <div>
          <span className={styles.ctaLabel}>{t.footer.ready}</span>
          <h2>{t.footer.title}</h2>
        </div>

        <a href={t.routes.contact} className={styles.ctaButton}>
          {t.footer.cta}
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className={styles.top}>
        <div className={styles.brand}>
          <Image
            src="/alurol-logo-new.png"
            alt="ALUROL"
            width={260}
            height={90}
            className={styles.logo}
          />

          <p>{t.footer.description}</p>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>{t.footer.navigation}</h3>

            <nav className={styles.nav} aria-label="Footer navigation">
              {links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.column}>
            <h3>{t.footer.products}</h3>

            <ul className={styles.productList}>
              {products.map((product) => (
                <li key={product}>{product}</li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3>{t.footer.contact}</h3>

            <div className={styles.contact}>
              <a href="tel:+38970314249">+389 (0) 70 314 249</a>
              <a href="mailto:alurol_gv@live.com">alurol_gv@live.com</a>
              <a href="https://www.google.com/maps/search/?api=1&query=Rr.+Beliçica+113%2FA+1230+Gostivar">
                {locale === "mk"
                  ? "ул. Беличица 113/A, Гостивар"
                  : "Rr. Beliçica 113/A, Gostivar"}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>
          © {new Date().getFullYear()} ALUROL. {t.footer.rights}
        </span>

        <span className={styles.legalLinks}>
          {legalLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </span>
      </div>
    </footer>
  );
}