import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ALUROL",
    short_name: "ALUROL",
    description:
      "Roleta, venecianë, variolight dhe sisteme moderne hijezimi në Gostivar.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7fbfc",
    theme_color: "#0e2748",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}