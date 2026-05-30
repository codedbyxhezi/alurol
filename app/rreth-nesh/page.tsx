import Image from "next/image";
import type { Metadata } from "next";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { FloatingContact } from "../../components/floating-contact/floating-contact";
import { ScrollToTop } from "../../components/scroll-to-top/scroll-to-top";
import styles from "./rreth-nesh.module.css";

export const metadata: Metadata = {
  title: "Rreth nesh | ALUROL",
  description:
    "Më shumë rreth ALUROL, firmë për roleta, venecianë, variolight dhe sisteme hijezimi në Gostivar.",
};

const values = [
  {
    number: "01",
    title: "Saktësi në matje",
    text: "Çdo punim fillon me matje të kujdesshme, sepse rezultati final varet nga detajet.",
  },
  {
    number: "02",
    title: "Pamje e pastër",
    text: "Produktet duhet të përshtaten me objektin, jo të duken si shtesë e rastësishme.",
  },
  {
    number: "03",
    title: "Komunikim i qartë",
    text: "Klienti duhet ta dijë çfarë po merr, si realizohet dhe kur mund të përfundojë.",
  },
];

const facts = [
  {
    value: "10+",
    label: "vite përvojë",
  },
  {
    value: "500+",
    label: "montime të realizuara",
  },
  {
    value: "Gostivar",
    label: "dhe rrethinë",
  },
];

const principles = [
  "Rekomandojmë produktin sipas nevojës reale, jo vetëm sipas pamjes.",
  "Kontrollojmë hapësirën e montimit para përgatitjes finale.",
  "Punojmë me fokus te përdorimi afatgjatë dhe mirëmbajtja e lehtë.",
  "Synojmë që produkti të përshtatet me stilin e shtëpisë, zyrës ose lokalit.",
];

export default function RrethNeshPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.kicker}>Rreth ALUROL</span>

            <h1>Detajet e vogla janë ato që e bëjnë punën të duket profesionale.</h1>

            <p>
              ALUROL ofron zgjidhje moderne për hijezim, privatësi dhe rehati
              në shtëpi, zyra dhe lokale. Ne fokusohemi te matja e saktë,
              përgatitja sipas masës dhe montimi i pastër.
            </p>

            <div className={styles.heroActions}>
              <a href="/kontakt" className={styles.primaryButton}>
                Na kontaktoni
                <span>→</span>
              </a>

              <a href="/projektet" className={styles.secondaryButton}>
                Shiko projektet
              </a>
            </div>
          </div>

          <div className={styles.heroStats}>
            {facts.map((fact) => (
              <div key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.storySection}>
          <div className={styles.storyImage}>
            <Image
              src="/showcase-interior.png"
              alt="Interier modern me hijezim ALUROL"
              width={1200}
              height={900}
              priority
              className={styles.storyPhoto}
            />

            <div className={styles.storyBadge}>
              <span>ALUROL Gostivar</span>
              <strong>Punë sipas masës për çdo hapësirë</strong>
            </div>
          </div>

          <div className={styles.storyText}>
            <span className={styles.kicker}>Qasja jonë</span>

            <h2>Nuk shesim vetëm roleta. Ndërtojmë zgjidhje që përshtaten me objektin.</h2>

            <p>
              Çdo dritare, fasadë ose interier ka kushte të ndryshme. Prandaj
              nuk ka një zgjidhje të vetme për të gjithë. Para rekomandimit
              shikojmë hapësirën, nevojën për dritë, privatësi, ajrosje dhe
              pamjen finale.
            </p>

            <p>
              Kjo qasje ndihmon që produkti të mos jetë vetëm funksional, por
              edhe estetikisht i përshtatur me ambientin.
            </p>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Vlerat</span>

            <h2>Çfarë na udhëheq në çdo projekt?</h2>

            <p>
              Rezultati i mirë nuk vjen rastësisht. Ai vjen nga matja, zgjedhja
              e materialit, komunikimi dhe montimi i kujdesshëm.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <article className={styles.valueCard} key={value.title}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.principlesSection}>
          <div className={styles.principlesText}>
            <span className={styles.kicker}>Si punojmë</span>

            <h2>Qartësi para prodhimit, kujdes gjatë montimit.</h2>

            <p>
              Një punim profesional duhet të duket i thjeshtë për klientin, por
              pas tij ka kontroll të detajeve dhe organizim të procesit.
            </p>
          </div>

          <ul className={styles.principlesList}>
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.darkSection}>
          <div className={styles.darkInner}>
            <span className={styles.kicker}>Pse ALUROL?</span>

            <h2>Sepse një dritare e mirë kërkon zgjidhje të menduar mirë.</h2>

            <p>
              Zgjedhja e duhur ndikon në rehati, privatësi, temperaturë dhe
              pamjen e përgjithshme të hapësirës.
            </p>

            <div className={styles.darkGrid}>
              <article>
                <strong>01</strong>
                <h3>Këshillim real</h3>
                <p>
                  Ju tregojmë çfarë është e përshtatshme për objektin tuaj, jo
                  vetëm çfarë duket bukur.
                </p>
              </article>

              <article>
                <strong>02</strong>
                <h3>Zgjidhje sipas masës</h3>
                <p>
                  Produkti përshtatet me dimensionet dhe kushtet e montimit.
                </p>
              </article>

              <article>
                <strong>03</strong>
                <h3>Rezultat i pastër</h3>
                <p>
                  Synimi është që çdo punim të duket i integruar dhe i rregullt.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <div>
              <span>Le të fillojmë</span>
              <h2>Keni një hapësirë që ka nevojë për hijezim?</h2>
              <p>
                Na kontaktoni dhe ju ndihmojmë të zgjidhni produktin më të
                përshtatshëm.
              </p>
            </div>

            <a href="/kontakt" className={styles.ctaButton}>
              Kontakto ALUROL
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