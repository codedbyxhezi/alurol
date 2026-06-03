import type { Locale } from "./i18n";

export const siteUrl = "https://www.alurol.com";

export const company = {
  name: "ALUROL",
  phone: "+38970314249",
  email: "alurol_gv@live.com",
  addressSq: "Rr. Beliçica 113/A, 1230 Gostivar, Maqedonia e Veriut",
  addressMk: "ул. Беличица 113/A, 1230 Гостивар, Северна Македонија",
  city: "Gostivar",
  country: "North Macedonia",
  areaServed: [
    "North Macedonia",
    "Germany",
    "Switzerland",
    "Austria",
    "Europe",
  ],
};

export const seo = {
  sq: {
    siteName: "ALUROL",
    defaultTitle:
      "ALUROL | Roleta, venecianë dhe sisteme hijezimi në Maqedoninë e Veriut dhe Evropë",
    defaultDescription:
      "ALUROL me seli në Gostivar ofron roleta të jashtme, venecianë, Variolight dhe rrjeta kundër insekteve me montim në Maqedoninë e Veriut, Gjermani dhe vende të ndryshme të Evropës.",
    keywords: [
      "roleta Gostivar",
      "roleta Maqedoni",
      "roleta të jashtme",
      "venecianë Gostivar",
      "Variolight",
      "rrjeta kundër insekteve",
      "roleta Gjermani",
      "montim roletash Evropë",
      "rollladen Nordmazedonien",
      "rollladen montage Deutschland",
    ],
  },

  mk: {
    siteName: "ALUROL",
    defaultTitle:
      "ALUROL | Ролетни, венецијанери и системи за засенчување во Северна Македонија и Европа",
    defaultDescription:
      "ALUROL со седиште во Гостивар нуди надворешни ролетни, венецијанери, Variolight и мрежи против инсекти со монтажа во Северна Македонија, Германија и различни земји низ Европа.",
    keywords: [
      "ролетни Гостивар",
      "ролетни Македонија",
      "надворешни ролетни",
      "венецијанери Гостивар",
      "Variolight",
      "мрежи против инсекти",
      "ролетни Германија",
      "монтажа ролетни Европа",
      "rollladen Nordmazedonien",
      "rollladen montage Deutschland",
    ],
  },
} as const;

export function getCanonicalPath(locale: Locale, path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  if (cleanPath === "/") {
    return `${siteUrl}/${locale}`;
  }

  return `${siteUrl}/${locale}${cleanPath}`;
}

export function getLanguageAlternates(path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return {
    sq: getCanonicalPath("sq", cleanPath),
    mk: getCanonicalPath("mk", cleanPath),
    "x-default": getCanonicalPath("sq", cleanPath),
  };
}