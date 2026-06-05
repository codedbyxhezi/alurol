import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "../../../components/navbar/navbar";
import { Footer } from "../../../components/footer/footer";
import { ScrollToTop } from "../../../components/scroll-to-top/scroll-to-top";
import { getDictionary, isLocale, type Locale } from "../../../lib/i18n";
import styles from "./kontakt.module.css";

const phoneNumbers = [
  {
    label: "+389 (0) 70 314 249",
    href: "tel:+38970314249",
  },
  {
    label: "+389 (0) 71 639 633",
    href: "tel:+38971639633",
  },
  {
    label: "+389 (0) 71 989 777",
    href: "tel:+38971989777",
  },
];

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

          <aside className={styles.contactPanel}>
            <div className={styles.panelHeader}>
              <span>{t.contactPage.hero.cardLabel}</span>
              <h2>{t.contactPage.hero.cardTitle}</h2>
            </div>

            <div className={styles.contactRows}>
              <div className={styles.contactRow}>
                <div className={styles.rowIcon}>
                  <Phone size={22} strokeWidth={1.9} />
                </div>

                <div>
                  <span>{t.contactPage.hero.phoneLabel}</span>

                  <div className={styles.phoneList}>
                    {phoneNumbers.map((phone) => (
                      <a href={phone.href} key={phone.href}>
                        {phone.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a href="mailto:alurol_gv@live.com" className={styles.contactRow}>
                <div className={styles.rowIcon}>
                  <Mail size={22} strokeWidth={1.9} />
                </div>

                <div>
                  <span>{t.contactPage.hero.emailLabel}</span>
                  <strong>alurol_gv@live.com</strong>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Rr.+Beliçica+113%2FA+1230+Gostivar"
                className={styles.contactRow}
              >
                <div className={styles.rowIcon}>
                  <MapPin size={22} strokeWidth={1.9} />
                </div>

                <div>
                  <span>{locale === "mk" ? "Адреса" : "Adresa"}</span>
                  <strong>
                    {locale === "mk"
                      ? "ул. Беличица 113/A, Гостивар"
                      : "Rr. Beliçica 113/A, Gostivar"}
                  </strong>
                </div>
              </a>

              <div className={styles.contactRow}>
                <div className={styles.rowIcon}>
                  <Clock size={22} strokeWidth={1.9} />
                </div>

                <div>
                  <span>{t.contactPage.info.hours.label}</span>
                  <strong>{t.contactPage.info.hours.title}</strong>
                  <small>{t.contactPage.info.hours.value}</small>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className={styles.stepsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>{t.contactPage.steps.kicker}</span>
            <h2>{t.contactPage.steps.title}</h2>
            <p>{t.contactPage.steps.text}</p>
          </div>

          <div className={styles.stepsList}>
            {t.contactPage.steps.items.map((step) => (
              <article className={styles.stepRow} key={step.number}>
                <strong>{step.number}</strong>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}