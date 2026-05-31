import { mk } from "../messages/mk";
import { sq } from "../messages/sq";

export const locales = ["sq", "mk"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sq";

export const dictionaries = {
  sq,
  mk,
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/")[1];

  if (isLocale(firstSegment)) {
    return firstSegment;
  }

  return defaultLocale;
}

export function removeLocaleFromPathname(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return "/";
  }

  if (isLocale(segments[0])) {
    const cleanSegments = segments.slice(1);
    return cleanSegments.length > 0 ? `/${cleanSegments.join("/")}` : "/";
  }

  return pathname;
}

export function getLocalizedPath(pathname: string, locale: Locale) {
  const cleanPath = removeLocaleFromPathname(pathname);

  if (cleanPath === "/") {
    return `/${locale}`;
  }

  return `/${locale}${cleanPath}`;
}