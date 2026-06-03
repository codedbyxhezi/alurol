import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alurol.mk"),

  title: {
    default:
      "ALUROL | Roleta, Venecianë dhe Sisteme Hijezimi në Maqedoninë e Veriut dhe Evropë",
    template: "%s | ALUROL",
  },

  description:
    "ALUROL është kompani me seli në Gostivar, e specializuar për roleta të jashtme, venecianë, Variolight dhe rrjeta kundër insekteve. Montim profesional në Maqedoninë e Veriut, Gjermani dhe vende të ndryshme të Evropës.",

  keywords: [
    "ALUROL",
    "roleta Gostivar",
    "roleta Maqedoni",
    "roleta të jashtme",
    "venecianë Gostivar",
    "venecianë Maqedoni",
    "Variolight",
    "rrjeta kundër insekteve",
    "sisteme hijezimi",
    "montim roletash",
    "roleta Gjermani",
    "roleta Evropë",
    "rollladen Nordmazedonien",
    "rollladen montage Deutschland",
    "jalousien Nordmazedonien",
    "insektenschutz Fenster",
  ],

  authors: [{ name: "ALUROL" }],
  creator: "ALUROL",
  publisher: "ALUROL",
  applicationName: "ALUROL",

  alternates: {
    canonical: "/sq",
    languages: {
      sq: "/sq",
      mk: "/mk",
      "x-default": "/sq",
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title:
      "ALUROL | Roleta, Venecianë dhe Sisteme Hijezimi në Maqedoninë e Veriut dhe Evropë",
    description:
      "Roleta të jashtme, venecianë, Variolight dhe rrjeta kundër insekteve me montim profesional në Maqedoninë e Veriut, Gjermani dhe vende të ndryshme të Evropës.",
    url: "https://alurol.mk/sq",
    siteName: "ALUROL",
    locale: "sq_MK",
    alternateLocale: ["mk_MK"],
    type: "website",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "ALUROL - Roleta dhe sisteme hijezimi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ALUROL | Roleta, Venecianë dhe Sisteme Hijezimi në Maqedoninë e Veriut dhe Evropë",
    description:
      "Montim profesional për roleta, venecianë, Variolight dhe rrjeta kundër insekteve në Maqedoninë e Veriut, Gjermani dhe Evropë.",
    images: ["/android-chrome-512x512.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0e2748",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}