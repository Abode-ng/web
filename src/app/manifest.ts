import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abode — Building a more trusted future for domestic work",
    short_name: "Abode",
    description:
      "Abode is building the infrastructure that helps households, domestic workers, and recruitment agencies work with greater trust, safety, and professionalism.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf6ee",
    theme_color: "#fbf6ee",
    icons: [
      { src: "/favicon.ico", type: "image/x-icon", sizes: "16x16 32x32" },
      { src: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { src: "/icon-512.png", type: "image/png", sizes: "512x512" },
      {
        src: "/icon-192-maskable.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "maskable",
      },
      {
        src: "/icon-512-maskable.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
  };
}
