import type { MetadataRoute } from "next";

// PWA manifest. Icons + theme colors sourced from the brand render pack
// (brand/logo/renders/icon/webmanifest/manifest-icons.json). The PNGs live
// in public/icons/ so the manifest references them at /icons/...
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Calynix",
    short_name: "Calynix",
    description:
      "A creative studio building games, software, and online experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#0C1220",
    theme_color: "#0C1220",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
