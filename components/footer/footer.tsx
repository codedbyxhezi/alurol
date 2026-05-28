import Image from "next/image";
import styles from "./footer.module.css";

const links = [
  { href: "#produktet", label: "Produktet" },
  { href: "#sherbimet", label: "Shërbimet" },
  { href: "#rreth-nesh", label: "Rreth nesh" },
  { href: "#projektet", label: "Projektet" },
  { href: "#kontakt", label: "Kontakt" },
];

const products = [
  "Roleta të jashtme",
  "Venecianë",
  "Variolight",
  "Rrjeta kundër insekteve",
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctaBox}>
        <div>
          <span className={styles.ctaLabel}>Gati për projektin tuaj?</span>
          <h2>Na kontaktoni për matje dhe ofertë.</h2>
        </div>

        <a href="#kontakt" className={styles.ctaButton}>
          Kërko ofertë
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

          <p>
            Roleta, venecianë dhe sisteme moderne hijezimi për shtëpi, zyra dhe
            lokale në Gostivar dhe rrethinë.
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>Navigimi</h3>
            <nav className={styles.nav} aria-label="Navigimi në footer">
              {links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.column}>
            <h3>Produktet</h3>
            <ul className={styles.productList}>
              {products.map((product) => (
                <li key={product}>{product}</li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Kontakt</h3>
            <div className={styles.contact}>
              <a href="tel:+38970314249">+389 (0) 70 314 249</a>
              <a href="mailto:alurol_gv@live.com">alurol_gv@live.com</a>
              <a href="https://www.google.com/maps/search/?api=1&query=Rr.+Beliçica+113%2FA+1230+Gostivar">
                Rr. Beliçica 113/A, Gostivar
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>
          © {new Date().getFullYear()} ALUROL. Të gjitha të drejtat e rezervuara.
        </span>
        <span>Roleta • Venecianë • Variolight</span>
      </div>
    </footer>
  );
}