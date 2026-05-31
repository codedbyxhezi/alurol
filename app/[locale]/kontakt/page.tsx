import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Navbar } from "../../../components/navbar/navbar";
import { Footer } from "../../../components/footer/footer";
import { FloatingContact } from "../../../components/floating-contact/floating-contact";
import { ScrollToTop } from "../../../components/scroll-to-top/scroll-to-top";
import { getDictionary, isLocale, type Locale } from "../../../lib/i18n";
import styles from "./kontakt.module.css";

const contactIcons = [Phone, Mail, MapPin];

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const t = getDictionary(locale as Locale);

  return {
    title: t.contactPage.metadata.title,
    description: t.contactPage.metadata.description,
  };
}

export default async function KontaktPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = getDictionary(locale as Locale);

  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.kicker}>{t.contactPage.hero.kicker}</span>

            <h1>{t.contactPage.hero.title}</h1>

            <p>{t.contactPage.hero.text}</p>

            <div className={styles.heroActions}>
              <a href="tel:+38970314249" className={styles.primaryButton}>
                {t.contactPage.hero.primaryCta}
                <span>→</span>
              </a>

              <a
                href="mailto:alurol_gv@live.com"
                className={styles.secondaryButton}
              >
                {t.contactPage.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.heroCardTop}>
              <span>{t.contactPage.hero.cardLabel}</span>
              <strong>{t.contactPage.hero.cardTitle}</strong>
            </div>

            <div className={styles.bigPhone}>
              <Phone size={34} strokeWidth={1.8} />
              <div>
                <span>{t.contactPage.hero.phoneLabel}</span>
                <a href="tel:+38970314249">+389 (0) 70 314 249</a>
              </div>
            </div>

            <div className={styles.quickGrid}>
              <a href="mailto:alurol_gv@live.com">
                <Mail size={21} strokeWidth={1.9} />
                <span>{t.contactPage.hero.emailLabel}</span>
              </a>

              <a href="https://wa.me/38970314249">
                <MessageCircle size={21} strokeWidth={1.9} />
                <span>{t.contactPage.hero.whatsappLabel}</span>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>
              {t.contactPage.contactMethods.kicker}
            </span>
            <h2>{t.contactPage.contactMethods.title}</h2>
            <p>{t.contactPage.contactMethods.text}</p>
          </div>

          <div className={styles.contactGrid}>
            {t.contactPage.contactMethods.cards.map((card, index) => {
              const Icon = contactIcons[index];

              return (
                <a
                  href={card.href}
                  className={styles.contactCard}
                  key={card.label}
                >
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
              <span>{t.contactPage.info.hours.label}</span>
              <h2>{t.contactPage.info.hours.title}</h2>
              <p>{t.contactPage.info.hours.value}</p>
            </div>
          </div>

          <div className={styles.locationBox}>
            <div>
              <span>{t.contactPage.info.location.label}</span>
              <h2>{t.contactPage.info.location.title}</h2>
              <p>{t.contactPage.info.location.text}</p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Rr.+Beliçica+113%2FA+1230+Gostivar"
              className={styles.mapButton}
            >
              {t.contactPage.info.location.button}
            </a>
          </div>
        </section>

        <section className={styles.stepsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>{t.contactPage.steps.kicker}</span>
            <h2>{t.contactPage.steps.title}</h2>
            <p>{t.contactPage.steps.text}</p>
          </div>

          <div className={styles.stepsGrid}>
            {t.contactPage.steps.items.map((step) => (
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
              <span>{t.contactPage.cta.kicker}</span>
              <h2>{t.contactPage.cta.title}</h2>
              <p>{t.contactPage.cta.text}</p>
            </div>

            <a href="tel:+38970314249" className={styles.ctaButton}>
              {t.contactPage.cta.button}
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