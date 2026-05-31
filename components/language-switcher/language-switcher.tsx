"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  getLocalizedPath,
  getLocaleFromPathname,
  type Locale,
} from "../../lib/i18n";
import styles from "./language-switcher.module.css";

const languages: {
  locale: Locale;
  title: string;
  image: string;
}[] = [
  {
    locale: "sq",
    title: "Shqip",
    image: "/flags/al.png",
  },
  {
    locale: "mk",
    title: "Македонски",
    image: "/flags/mk.png",
  },
];

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  return (
    <div className={styles.switcher} aria-label="Language switcher">
      {languages.map((language) => (
        <a
          key={language.locale}
          href={getLocalizedPath(pathname, language.locale)}
          className={currentLocale === language.locale ? styles.active : ""}
          aria-current={currentLocale === language.locale ? "page" : undefined}
          title={language.title}
        >
          <Image
            src={language.image}
            alt={language.title}
            width={26}
            height={18}
            className={styles.flag}
          />
        </a>
      ))}
    </div>
  );
}