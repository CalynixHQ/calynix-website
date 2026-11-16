import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/battlyn/review"] },
    sitemap: "https://calynix.com/sitemap.xml",
  };
}
