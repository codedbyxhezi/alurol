import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Impressum | ALUROL",
  description: "Informacione ligjore për ALUROL.",
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <div className={styles.container}>
          <Link href="/" className={styles.back}>
            ← Kthehu në faqen kryesore
          </Link>

          <span className={styles.kicker}>Informacione ligjore</span>
          <h1 className={styles.title}>Impressum</h1>

          <section className={styles.section}>
            <h2>Operatori i faqes</h2>
            <p>
              <strong>ALUROL</strong>
            </p>
            <p>Rr. Beliçica 113/A</p>
            <p>1230 Gostivar</p>
            <p>Republika e Maqedonisë së Veriut</p>
          </section>

          <section className={styles.section}>
            <h2>Kontakt</h2>
            <p>Telefon: +389 (0) 70 314 249</p>
            <p>E-mail: alurol_gv@live.com</p>
          </section>

          <section className={styles.section}>
            <h2>Përfaqësues përgjegjës</h2>
            <p>Emin ISLAMI</p>
          </section>

          <section className={styles.section}>
            <h2>Përgjegjësia për përmbajtjen</h2>
            <p>
              Ne përpiqemi që informacionet në këtë faqe të jenë të sakta dhe
              të përditësuara. Megjithatë, nuk marrim përgjegjësi për gabime të
              mundshme, ndryshime teknike ose informacion të vjetëruar.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Përgjegjësia për lidhje të jashtme</h2>
            <p>
              Kjo faqe mund të përmbajë lidhje drejt faqeve të jashtme. Për
              përmbajtjen e këtyre faqeve janë përgjegjës vetëm operatorët
              përkatës.
            </p>
          </section>

          <div className={styles.infoBox}>
            <p>
              Shënim: Nëse kompania ka numër regjistrimi, numër tatimor ose
              emër zyrtar të plotë, shtoji këtu.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}