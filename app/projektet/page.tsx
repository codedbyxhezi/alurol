import Image from "next/image";
import type { Metadata } from "next";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { FloatingContact } from "../../components/floating-contact/floating-contact";
import { ScrollToTop } from "../../components/scroll-to-top/scroll-to-top";
import styles from "./projektet.module.css";

export const metadata: Metadata = {
  title: "Projektet | ALUROL",
  description:
    "Shembuj vizualë të zgjidhjeve ALUROL për roleta, venecianë, variolight dhe sisteme moderne hijezimi.",
};

const featuredProjects = [
  {
    category: "Eksterier",
    title: "Roleta për dritare të mëdha",
    text: "Zgjidhje për fasada moderne, privatësi më të mirë dhe mbrojtje nga dielli.",
    image: "/gallery/roleta-project.png",
  },
  {
    category: "Interier",
    title: "Venecianë për hapësira pune",
    text: "Kontroll i dritës për zyra, lokale dhe ambiente ku kërkohet pamje e rregullt.",
    image: "/gallery/veneciane-project.png",
  },
  {
    category: "Premium",
    title: "Variolight për interier modern",
    text: "Pamje e butë, elegante dhe funksionale për dhoma ndenjeje ose apartamente moderne.",
    image: "/gallery/variolight-project.png",
  },
];

const projectTypes = [
  {
    number: "01",
    title: "Shtëpi private",
    text: "Zgjidhje për privatësi, hijezim dhe komoditet në përdorim të përditshëm.",
  },
  {
    number: "02",
    title: "Zyra dhe lokale",
    text: "Kontroll i dritës, pamje profesionale dhe përshtatje me stilin e hapësirës.",
  },
  {
    number: "03",
    title: "Objekte moderne",
    text: "Produkte që përshtaten me fasada, dritare të mëdha dhe interiere minimaliste.",
  },
];

export default function ProjektetPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.kicker}>Projektet ALUROL</span>

            <h1>Pamje reale për ide më të qarta.</h1>

            <p>
              Kjo faqe prezanton stile dhe shembuj vizualë të zgjidhjeve për
              hijezim. Qëllimi është t’ju ndihmojë të kuptoni se si mund të
              duket produkti në shtëpi, zyrë ose lokal.
            </p>

            <div className={styles.heroActions}>
              <a href="/kontakt" className={styles.primaryButton}>
                Kërko ofertë
                <span>→</span>
              </a>

              <a href="#galeria" className={styles.secondaryButton}>
                Shiko galerinë
              </a>
            </div>
          </div>

          <div className={styles.heroGallery}>
            <div className={styles.heroImageLarge}>
              <Image
                src="/gallery/roleta-project.png"
                alt="Roleta për objekt modern"
                width={1200}
                height={900}
                priority
                className={styles.heroImage}
              />
            </div>

            <div className={styles.heroStack}>
              <div>
                <Image
                  src="/gallery/veneciane-project.png"
                  alt="Venecianë në zyrë"
                  width={700}
                  height={500}
                  className={styles.stackImage}
                />
              </div>

              <div>
                <Image
                  src="/gallery/variolight-project.png"
                  alt="Variolight në interier"
                  width={700}
                  height={500}
                  className={styles.stackImage}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.introSection}>
          <div className={styles.introText}>
            <span className={styles.kicker}>Si ta përdorni galerinë?</span>

            <h2>Zgjidhni sipas hapësirës, jo vetëm sipas produktit.</h2>

            <p>
              Një produkt mund të duket ndryshe në çdo objekt. Dritaret e mëdha,
              orientimi nga dielli, ngjyra e murit dhe stili i interierit
              ndikojnë shumë në zgjedhjen finale.
            </p>
          </div>

          <div className={styles.typeGrid}>
            {projectTypes.map((type) => (
              <article className={styles.typeCard} key={type.title}>
                <span>{type.number}</span>
                <h3>{type.title}</h3>
                <p>{type.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.gallerySection} id="galeria">
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Galeria</span>

            <h2>Tre drejtime të ndryshme për tre nevoja të ndryshme.</h2>

            <p>
              Roletat, venecianët dhe variolight nuk kanë të njëjtin efekt.
              Secili produkt zgjidhet sipas funksionit dhe pamjes që kërkohet.
            </p>
          </div>

          <div className={styles.projectGrid}>
            {featuredProjects.map((project, index) => (
              <article
                className={`${styles.projectCard} ${
                  index === 0 ? styles.featured : ""
                }`}
                key={project.title}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={900}
                  className={styles.projectImage}
                />

                <div className={styles.projectOverlay} />

                <div className={styles.projectInfo}>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.detailSection}>
          <div className={styles.detailText}>
            <span className={styles.kicker}>Detajet</span>

            <h2>Çfarë duhet të shikoni para zgjedhjes?</h2>

            <p>
              Galeria nuk është vetëm për pamje. Ajo ndihmon të kuptoni se si
              kontrollohet drita, sa privatësi ofrohet dhe si përshtatet
              produkti me objektin.
            </p>
          </div>

          <div className={styles.detailList}>
            <div>
              <strong>01</strong>
              <h3>Drejtimi i diellit</h3>
              <p>
                Në hapësirat me shumë diell, produkti duhet të ndihmojë edhe në
                rehati termike.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Privatësia</h3>
              <p>
                Për rrugë, ballkone ose ndërtesa afër, privatësia bëhet faktor
                kryesor.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Stili i objektit</h3>
              <p>
                Ngjyra, forma dhe materiali duhet të përshtaten me fasadën ose
                interierin.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <div>
              <span>Keni një projekt konkret?</span>
              <h2>Dërgoni një foto të hapësirës dhe ju sugjerojmë zgjidhjen.</h2>
              <p>
                Mund të na kontaktoni me foto, dimensione të përafërta ose
                vetëm me përshkrim të hapësirës.
              </p>
            </div>

            <a href="/kontakt" className={styles.ctaButton}>
              Dërgo kërkesë
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