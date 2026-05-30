import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { FloatingContact } from "../../components/floating-contact/floating-contact";
import { ScrollToTop } from "../../components/scroll-to-top/scroll-to-top";
import styles from "./kontakt.module.css";

export const metadata: Metadata = {
  title: "Kontakt | ALUROL",
  description:
    "Kontaktoni ALUROL për matje, ofertë dhe montim të roletave, venecianëve, variolight dhe rrjetave kundër insekteve në Gostivar.",
};

const contactCards = [
  {
    icon: Phone,
    label: "Telefon",
    title: "+389 (0) 70 314 249",
    text: "Për pyetje të shpejta, matje ose termin.",
    href: "tel:+38970314249",
    action: "Thirr tani",
  },
  {
    icon: Mail,
    label: "E-mail",
    title: "alurol_gv@live.com",
    text: "Për kërkesa me detaje, foto ose dimensione.",
    href: "mailto:alurol_gv@live.com",
    action: "Dërgo e-mail",
  },
  {
    icon: MapPin,
    label: "Adresa",
    title: "Rr. Beliçica 113/A",
    text: "1230 Gostivar, Maqedonia e Veriut.",
    href: "https://www.google.com/maps/search/?api=1&query=Rr.+Beliçica+113%2FA+1230+Gostivar",
    action: "Hap hartën",
  },
];

const requestSteps = [
  {
    number: "01",
    title: "Na shkruani ose telefononi",
    text: "Tregoni çfarë produkti ju intereson dhe ku do të bëhet montimi.",
  },
  {
    number: "02",
    title: "Dërgoni foto nëse keni",
    text: "Një foto e dritares ose hapësirës na ndihmon të kuptojmë më shpejt zgjidhjen.",
  },
  {
    number: "03",
    title: "Caktojmë matje",
    text: "Nëse projekti kërkon matje në vend, organizojmë termin sipas mundësisë.",
  },
  {
    number: "04",
    title: "Përgatisim ofertën",
    text: "Pas sqarimit të detajeve, ju japim propozimin dhe çmimin përkatës.",
  },
];

export default function KontaktPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.kicker}>Kontakt</span>

            <h1>Na kontaktoni për matje, ofertë ose këshillim.</h1>

            <p>
              Keni nevojë për roleta, venecianë, variolight ose rrjeta kundër
              insekteve? Na shkruani ose na telefononi dhe ju ndihmojmë të
              zgjidhni sistemin më të përshtatshëm.
            </p>

            <div className={styles.heroActions}>
              <a href="tel:+38970314249" className={styles.primaryButton}>
                Thirr tani
                <span>→</span>
              </a>

              <a href="mailto:alurol_gv@live.com" className={styles.secondaryButton}>
                Dërgo e-mail
              </a>
            </div>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.heroCardTop}>
              <span>ALUROL Gostivar</span>
              <strong>Kontakt direkt</strong>
            </div>

            <div className={styles.bigPhone}>
              <Phone size={34} strokeWidth={1.8} />
              <div>
                <span>Telefon</span>
                <a href="tel:+38970314249">+389 (0) 70 314 249</a>
              </div>
            </div>

            <div className={styles.quickGrid}>
              <a href="mailto:alurol_gv@live.com">
                <Mail size={21} strokeWidth={1.9} />
                <span>E-mail</span>
              </a>

              <a href="https://wa.me/38970314249">
                <MessageCircle size={21} strokeWidth={1.9} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Mënyrat e kontaktit</span>
            <h2>Zgjidhni mënyrën më të lehtë për ju.</h2>
            <p>
              Për përgjigje më të shpejtë, mund të dërgoni foto të dritares,
              dimensione të përafërta ose vetëm një përshkrim të hapësirës.
            </p>
          </div>

          <div className={styles.contactGrid}>
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a href={card.href} className={styles.contactCard} key={card.label}>
                  <div className={styles.cardIcon}>
                    <Icon size={26} strokeWidth={1.9} />
                  </div>

                  <span>{card.label}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>

                  <strong>
                    {card.action}
                    <span>→</span>
                  </strong>
                </a>
              );
            })}
          </div>
        </section>

        <section className={styles.infoSection}>
          <div className={styles.hoursBox}>
            <div className={styles.hoursIcon}>
              <Clock size={28} strokeWidth={1.9} />
            </div>

            <div>
              <span>Orari i punës</span>
              <h2>E hënë - E shtunë</h2>
              <p>07:00 - 17:00</p>
            </div>
          </div>

          <div className={styles.locationBox}>
            <div>
              <span>Lokacioni</span>
              <h2>Gostivar dhe rrethinë</h2>
              <p>
                ALUROL ofron matje dhe montim për klientë në Gostivar dhe zona
                përreth, varësisht nga projekti dhe marrëveshja.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Rr.+Beliçica+113%2FA+1230+Gostivar"
              className={styles.mapButton}
            >
              Shiko në hartë
            </a>
          </div>
        </section>

        <section className={styles.stepsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Pas kontaktit</span>
            <h2>Çfarë ndodh pasi na shkruani?</h2>
            <p>
              Procesi është i thjeshtë dhe i qartë. Sa më shumë informacion të
              kemi në fillim, aq më shpejt mund të japim sugjerim ose ofertë.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {requestSteps.map((step) => (
              <article className={styles.stepCard} key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <div>
              <span>Gati për ofertë?</span>
              <h2>Na kontaktoni sot dhe fillojmë me hapin e parë.</h2>
              <p>
                Për roleta, venecianë, variolight ose rrjeta kundër insekteve,
                ALUROL ju ndihmon me këshillim dhe montim profesional.
              </p>
            </div>

            <a href="tel:+38970314249" className={styles.ctaButton}>
              Thirr ALUROL
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