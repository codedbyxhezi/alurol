import Image from "next/image";
import type { Metadata } from "next";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { FloatingContact } from "../../components/floating-contact/floating-contact";
import { ScrollToTop } from "../../components/scroll-to-top/scroll-to-top";
import styles from "./sherbimet.module.css";

export const metadata: Metadata = {
  title: "Shërbimet | ALUROL",
  description:
    "Matje, këshillim, përgatitje dhe montim profesional për roleta, venecianë, variolight dhe rrjeta kundër insekteve.",
};

const timeline = [
  {
    number: "01",
    title: "Konsultim fillestar",
    text: "Bisedojmë për hapësirën, nevojën për hijezim, privatësi, ngjyrën dhe llojin e produktit.",
  },
  {
    number: "02",
    title: "Matje në objekt",
    text: "Vijmë në vend, marrim masat reale dhe kontrollojmë mënyrën më të mirë të montimit.",
  },
  {
    number: "03",
    title: "Përgatitje sipas masës",
    text: "Produkti përgatitet sipas dimensioneve dhe detajeve të dakorduara me klientin.",
  },
  {
    number: "04",
    title: "Montim profesional",
    text: "Montimi bëhet pastër, me kujdes dhe me kontroll final të funksionimit.",
  },
];

const serviceCards = [
  {
    title: "Matje e saktë",
    text: "Matja është baza e një produkti të mirë. Për këtë arsye kontrollohen dimensionet, hapësira e instalimit dhe mënyra e fiksimit.",
  },
  {
    title: "Këshillim për produktin",
    text: "Ju ndihmojmë të zgjidhni mes roletave, venecianëve, variolight ose rrjetave sipas nevojës reale të objektit.",
  },
  {
    title: "Montim i pastër",
    text: "Qëllimi është që produkti të duket i integruar në objekt dhe të funksionojë lehtë në përdorim të përditshëm.",
  },
];

const preparation = [
  "Siguroni qasje normale te dritarja ose hapësira ku do të bëhet montimi.",
  "Nëse ka perde, mobilje ose pengesa pranë dritares, është mirë të largohen para montimit.",
  "Për matje më të saktë, dritarja duhet të jetë e arritshme nga brenda ose jashtë, varësisht nga produkti.",
  "Në rast objekti të ri, rekomandohet të bëhet matja pasi të jenë përfunduar punimet kryesore rreth dritares.",
];

export default function SherbimetPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.kicker}>Shërbimet ALUROL</span>

            <h1>Proces i qartë nga matja deri te montimi final.</h1>

            <p>
              Ne nuk dorëzojmë vetëm produktin. Kujdesemi për të gjithë rrugën:
              këshillim, matje, përgatitje sipas masës dhe montim profesional
              në objekt.
            </p>

            <div className={styles.heroActions}>
              <a href="/kontakt" className={styles.primaryButton}>
                Rezervo matje
                <span>→</span>
              </a>

              <a href="#procesi" className={styles.secondaryButton}>
                Shiko procesin
              </a>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <Image
              src="/hero-card.png"
              alt="Montim profesional ALUROL"
              width={1200}
              height={1000}
              priority
              className={styles.heroImage}
            />

            <div className={styles.panelInfo}>
              <span>Matje → Përgatitje → Montim</span>
              <strong>Shërbim i organizuar dhe rezultat i pastër</strong>
            </div>
          </div>
        </section>

        <section className={styles.timelineSection} id="procesi">
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Procesi</span>
            <h2>Çdo hap ka rëndësi.</h2>
            <p>
              Një montim i mirë fillon shumë më herët se momenti i instalimit.
              Saktësia në fillim kursen kohë dhe siguron rezultat më të mirë në
              fund.
            </p>
          </div>

          <div className={styles.timeline}>
            {timeline.map((item) => (
              <article className={styles.timelineItem} key={item.number}>
                <div className={styles.timelineNumber}>{item.number}</div>

                <div className={styles.timelineContent}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.servicesIntro}>
            <span className={styles.kicker}>Çfarë përfshihet?</span>
            <h2>Shërbime që e bëjnë projektin më të sigurt.</h2>
          </div>

          <div className={styles.serviceGrid}>
            {serviceCards.map((item, index) => (
              <article className={styles.serviceCard} key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.detailSection}>
          <div className={styles.detailImage}>
            <Image
              src="/showcase-interior.png"
              alt="Interier modern me hijezim"
              width={1200}
              height={900}
              className={styles.detailPhoto}
            />

            <div className={styles.detailBadge}>
              <span>Montim i pastër</span>
              <strong>Produkt i përshtatur me hapësirën</strong>
            </div>
          </div>

          <div className={styles.detailText}>
            <span className={styles.kicker}>Para montimit</span>
            <h2>Si të përgatiteni për matje ose montim?</h2>
            <p>
              Për të punuar shpejt dhe saktë, është mirë që hapësira rreth
              dritares të jetë e lirë dhe e arritshme. Kjo ndihmon në matje më
              të saktë dhe montim më të pastër.
            </p>

            <ul className={styles.checkList}>
              {preparation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.qualitySection}>
          <div className={styles.qualityInner}>
            <span className={styles.kicker}>Standardi ynë</span>

            <h2>Çfarë kontrollojmë para dorëzimit?</h2>

            <div className={styles.qualityGrid}>
              <div>
                <strong>01</strong>
                <p>Hapjen, mbylljen dhe funksionimin normal të produktit.</p>
              </div>

              <div>
                <strong>02</strong>
                <p>Pamjen finale dhe përshtatjen me dritaren ose fasadën.</p>
              </div>

              <div>
                <strong>03</strong>
                <p>Qëndrueshmërinë e fiksimit dhe detajet e montimit.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <div>
              <span>Gati për matje?</span>
              <h2>Na kontaktoni dhe caktojmë hapin e parë.</h2>
              <p>
                Dërgoni kërkesën tuaj, na tregoni çfarë produkti ju intereson
                dhe ne ju ndihmojmë me zgjidhjen e duhur.
              </p>
            </div>

            <a href="/kontakt" className={styles.ctaButton}>
              Kontakto tani
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
      <ScrollToTop />
    </>
  );
}