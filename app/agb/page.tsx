import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Kushtet e përdorimit | ALUROL",
  description: "Kushtet e përdorimit për faqen ALUROL.",
};

export default function AgbPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <div className={styles.container}>
          <Link href="/" className={styles.back}>
            ← Kthehu në faqen kryesore
          </Link>

          <span className={styles.kicker}>Kushtet</span>
          <h1 className={styles.title}>Kushtet e përdorimit</h1>

          <section className={styles.section}>
            <h2>1. Fusha e vlefshmërisë</h2>
            <p>
              Këto kushte vlejnë për përdorimin e faqes së internetit të ALUROL
              dhe për kërkesat për informacion, matje ose ofertë.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Informacionet në faqe</h2>
            <p>
              Përmbajtja në këtë faqe shërben për prezantim të produkteve dhe
              shërbimeve. Fotot, përshkrimet dhe shembujt mund të ndryshojnë
              nga produkti final, varësisht nga objekti, dimensionet dhe
              materiali.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Ofertat</h2>
            <p>
              Çdo ofertë përgatitet individualisht pas konsultimit, matjes ose
              sqarimit të kërkesës. Çmimet dhe afatet nuk janë të detyrueshme
              derisa të konfirmohen nga ALUROL.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Matja dhe montimi</h2>
            <p>
              Për prodhime sipas masës, dimensionet dhe kushtet e montimit
              kontrollohen para përgatitjes finale. Klienti duhet të sigurojë
              qasje normale në objekt dhe hapësirë të përshtatshme për montim.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Përgjegjësia</h2>
            <p>
              ALUROL nuk mban përgjegjësi për dëme që shkaktohen nga përdorimi
              i gabuar, ndërhyrjet e paautorizuara ose ndryshimet në objekt pas
              matjes.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Të drejtat e autorit</h2>
            <p>
              Përmbajtja, dizajni, tekstet dhe materialet vizuale të kësaj
              faqeje nuk mund të kopjohen ose përdoren pa leje.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Ndryshime</h2>
            <p>
              ALUROL mund t’i ndryshojë këto kushte në çdo kohë. Versioni
              aktual është gjithmonë ai i publikuar në këtë faqe.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}