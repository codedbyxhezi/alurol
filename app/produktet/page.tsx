import Image from "next/image";
import type { Metadata } from "next";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { FloatingContact } from "../../components/floating-contact/floating-contact";
import { ScrollToTop } from "../../components/scroll-to-top/scroll-to-top";
import styles from "./produktet.module.css";

export const metadata: Metadata = {
  title: "Produktet | ALUROL",
  description:
    "Roleta të jashtme, venecianë, variolight dhe rrjeta kundër insekteve nga ALUROL në Gostivar.",
};

const productSections = [
  {
    eyebrow: "01 / Eksterier",
    title: "Roleta të jashtme",
    description:
      "Roletat e jashtme janë zgjidhje e fortë për mbrojtje nga dielli, privatësi më të madhe dhe pamje të rregullt në fasadë. Ato përshtaten sipas dimensioneve të dritares dhe mënyrës së montimit.",
    image: "/products/roleta.png",
    suitable: ["Shtëpi private", "Dritare të mëdha", "Lokale", "Objekte banimi"],
    benefits: [
      "Mbrojtje nga dielli dhe nxehtësia",
      "Privatësi më e mirë gjatë ditës dhe natës",
      "Pamje e pastër në fasadë",
      "Përgatitje sipas masës",
    ],
  },
  {
    eyebrow: "02 / Interier",
    title: "Venecianë",
    description:
      "Venecianët janë idealë për kontroll të saktë të dritës në interier. Lamellat mundësojnë rregullim të dritës pa e mbyllur plotësisht hapësirën.",
    image: "/products/veneciane.png",
    suitable: ["Zyra", "Banesa", "Lokale moderne", "Dhoma pune"],
    benefits: [
      "Kontroll i lehtë i dritës",
      "Pamje elegante dhe teknike",
      "Praktike për përdorim të përditshëm",
      "Përshtaten me stile të ndryshme interieri",
    ],
  },
  {
    eyebrow: "03 / Premium",
    title: "Variolight",
    description:
      "Variolight është zgjidhje moderne për hapësira ku kërkohet kombinim i hijes, dritës dhe pamjes premium. Sistemi krijon atmosferë të qetë dhe të pastër.",
    image: "/products/variolight.png",
    suitable: ["Interiere premium", "Dhome ndenjeje", "Zyra elegante", "Apartamente moderne"],
    benefits: [
      "Pamje moderne dhe e lehtë",
      "Balancë mes dritës dhe privatësisë",
      "E përshtatshme për hapësira të qeta",
      "Efekt dekorativ pa e rënduar dhomën",
    ],
  },
  {
    eyebrow: "04 / Funksionale",
    title: "Rrjeta kundër insekteve",
    description:
      "Rrjetat kundër insekteve ofrojnë mbrojtje praktike gjatë sezonit të ngrohtë, duke ruajtur ajrosjen natyrale të hapësirës.",
    image: "/products/rrjeta.png",
    suitable: ["Kuzhina", "Dhoma gjumi", "Ballkone", "Shtëpi familjare"],
    benefits: [
      "Mbrojtje nga insektet",
      "Ajrosje natyrale",
      "Zgjidhje diskrete",
      "Përdorim praktik gjatë verës",
    ],
  },
];

const comparison = [
  {
    label: "Për privatësi maksimale",
    value: "Roleta të jashtme",
  },
  {
    label: "Për kontroll të dritës",
    value: "Venecianë",
  },
  {
    label: "Për pamje premium",
    value: "Variolight",
  },
  {
    label: "Për mbrojtje nga insektet",
    value: "Rrjeta",
  },
];

export default function ProduktetPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.kicker}>Produktet ALUROL</span>

            <h1>
              Produkte të zgjedhura për hijezim, privatësi dhe komoditet.
            </h1>

            <p>
              Çdo produkt ka rolin e vet. Ne ju ndihmojmë të zgjidhni sistemin
              e duhur sipas dritares, interierit, fasadës dhe nevojës për
              përdorim të përditshëm.
            </p>

            <div className={styles.heroActions}>
              <a href="/kontakt" className={styles.primaryButton}>
                Kërko ofertë
                <span>→</span>
              </a>

              <a href="#krahasimi" className={styles.secondaryButton}>
                Krahaso produktet
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <Image
              src="/hero-card.png"
              alt="Sistem roletash ALUROL"
              width={1200}
              height={1000}
              priority
              className={styles.heroImage}
            />

            <div className={styles.heroBadge}>
              <span>Sipas masës</span>
              <strong>Matje, përgatitje dhe montim profesional</strong>
            </div>
          </div>
        </section>

        <section className={styles.productList}>
          {productSections.map((product, index) => (
            <article
              className={`${styles.productBlock} ${
                index % 2 === 1 ? styles.reverse : ""
              }`}
              key={product.title}
            >
              <div className={styles.productImageWrap}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={1200}
                  height={900}
                  className={styles.productImage}
                />

                <div className={styles.imageLabel}>
                  <span>{product.eyebrow}</span>
                  <strong>{product.title}</strong>
                </div>
              </div>

              <div className={styles.productContent}>
                <span className={styles.productEyebrow}>{product.eyebrow}</span>

                <h2>{product.title}</h2>

                <p>{product.description}</p>

                <div className={styles.infoGrid}>
                  <div>
                    <h3>Përshtatet për</h3>
                    <ul>
                      {product.suitable.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3>Përfitimet</h3>
                    <ul>
                      {product.benefits.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a href="/kontakt" className={styles.textLink}>
                  Kërko informacion për {product.title}
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.comparison} id="krahasimi">
          <div className={styles.comparisonHeader}>
            <span className={styles.kicker}>Krahasimi</span>
            <h2>Cili produkt është i duhuri për ju?</h2>
            <p>
              Zgjedhja varet nga qëllimi kryesor: privatësi, kontroll drite,
              pamje premium ose mbrojtje praktike.
            </p>
          </div>

          <div className={styles.comparisonGrid}>
            {comparison.map((item, index) => (
              <div className={styles.compareCard} key={item.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <div>
              <span>Ende nuk jeni të sigurt?</span>
              <h2>Na dërgoni një foto të dritares dhe ju sugjerojmë zgjidhjen.</h2>
              <p>
                Për shumë raste, mjafton një foto ose një përshkrim i hapësirës
                për të kuptuar cili produkt është më i përshtatshëm.
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