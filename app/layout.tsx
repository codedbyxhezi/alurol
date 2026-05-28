import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alurol.mk"),
  title: "ALUROL | Roleta dhe Venecianë në Gostivar",
  description:
    "ALUROL ofron roleta të jashtme, venecianë, variolight dhe rrjeta kundër insekteve në Gostivar dhe rrethinë. Matje dhe montim profesional.",
  keywords: [
    "ALUROL",
    "roleta Gostivar",
    "venecianë Gostivar",
    "variolight Gostivar",
    "rrjeta kundër insekteve",
    "roleta Maqedoni",
    "sisteme hijezimi",
  ],
  authors: [{ name: "ALUROL" }],
  creator: "ALUROL",
  publisher: "ALUROL",
  applicationName: "ALUROL",
  alternates: {
    canonical: "/",
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
    title: "ALUROL | Roleta dhe Venecianë në Gostivar",
    description:
      "Zgjidhje moderne për hijezim, privatësi dhe rehati. Matje dhe montim profesional në Gostivar dhe rrethinë.",
    url: "https://alurol.mk",
    siteName: "ALUROL",
    locale: "sq_MK",
    type: "website",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "ALUROL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALUROL | Roleta dhe Venecianë në Gostivar",
    description:
      "Roleta, venecianë dhe sisteme moderne hijezimi në Gostivar.",
    images: ["/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
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