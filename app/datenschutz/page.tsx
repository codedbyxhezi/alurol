import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Politika e privatësisë | ALUROL",
  description: "Politika e privatësisë dhe mbrojtjes së të dhënave personale.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <div className={styles.container}>
          <Link href="/" className={styles.back}>
            ← Kthehu në faqen kryesore
          </Link>

          <span className={styles.kicker}>Mbrojtja e të dhënave</span>
          <h1 className={styles.title}>Politika e privatësisë</h1>

          <section className={styles.section}>
            <h2>1. Kontrolluesi i të dhënave</h2>
            <p>Kontrolluesi i të dhënave personale në këtë faqe është:</p>
            <p>
              <strong>ALUROL</strong>
              <br />
              Rr. Beliçica 113/A, 1230 Gostivar
              <br />
              Republika e Maqedonisë së Veriut
              <br />
              E-mail: alurol_gv@live.com
              <br />
              Telefon: +389 (0) 70 314 249
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Të dhënat që mund të përpunohen</h2>
            <p>
              Kur na kontaktoni përmes telefonit, e-mailit ose lidhjeve në
              faqe, mund të përpunohen këto të dhëna:
            </p>
            <ul>
              <li>emri dhe mbiemri, nëse e jepni vetë,</li>
              <li>numri i telefonit,</li>
              <li>adresa e e-mailit,</li>
              <li>adresa ose lokacioni për matje/montim,</li>
              <li>përmbajtja e kërkesës suaj.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Qëllimi i përpunimit</h2>
            <p>
              Të dhënat përdoren vetëm për t’ju kontaktuar, për të përgatitur
              ofertë, për të organizuar matje, montim ose shërbim.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Baza ligjore</h2>
            <p>
              Përpunimi bëhet për komunikim para-kontraktual, për përgatitje të
              ofertës, për realizim të shërbimit ose mbi bazën e interesit tonë
              legjitim për t’iu përgjigjur kërkesave të klientëve.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Cookies dhe analiza</h2>
            <p>
              Kjo faqe aktualisht nuk përdor cookies për marketing ose analiza
              të avancuara. Nëse më vonë shtohen mjete si Google Analytics,
              Meta Pixel ose cookies marketingu, kjo politikë duhet të
              përditësohet.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Ruajtja e të dhënave</h2>
            <p>
              Të dhënat ruhen vetëm për aq kohë sa është e nevojshme për t’iu
              përgjigjur kërkesës, për të përgatitur ofertë ose për të realizuar
              shërbimin.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Ndarja e të dhënave</h2>
            <p>
              Të dhënat personale nuk shiten dhe nuk jepen palëve të treta,
              përveç rasteve kur është e nevojshme për realizimin e shërbimit
              ose kur kërkohet nga ligji.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Të drejtat tuaja</h2>
            <p>
              Ju mund të kërkoni qasje, korrigjim, fshirje ose kufizim të
              përpunimit të të dhënave tuaja personale. Për këtë mund të na
              kontaktoni në: alurol_gv@live.com.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Autoriteti mbikëqyrës</h2>
            <p>
              Për çështje të mbrojtjes së të dhënave personale, autoriteti
              kompetent në Maqedoninë e Veriut është Agjencia për Mbrojtjen e
              të Dhënave Personale.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Përditësime</h2>
            <p>
              Kjo politikë mund të përditësohet nëse ndryshojnë shërbimet tona,
              teknologjitë e përdorura ose kërkesat ligjore.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}