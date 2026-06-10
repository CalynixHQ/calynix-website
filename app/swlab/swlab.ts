export type Screenshot = {
  src: string;
  alt: string;
};

export type SwLabProject = {
  slug: string;
  name: string;
  tagline: string;
  href?: string;
  icon?: string;
  summary: string;
  description: string[];
  platform: string;
  status: string;
  url?: string;
  screenshots: Screenshot[];
};

export const swlabProjects: SwLabProject[] = [
  {
    slug: "signlyn",
    name: "Signlyn",
    tagline: "Build and export a professional email signature.",
    href: "/swlab/signlyn",
    summary:
      "Fill in your details, pick a template, and copy the finished HTML straight into Gmail, Outlook, or Apple Mail.",
    description: [
      "Signlyn is a fast, no-account email signature builder. Enter your name, title, company, and contact details, choose a clean template, and get a pixel-perfect HTML signature ready to paste.",
      "Works with every major email client — Gmail, Outlook, Apple Mail, and more. No sign-up required, no data stored on servers. Your signature is built entirely in the browser.",
      "Designed for professionals who want a polished signature in under two minutes.",
    ],
    platform: "Web",
    status: "Live",
    url: "https://signlyn.vercel.app/?ref=producthunt",
    screenshots: [
      { src: "/swlab/signlyn/01-editor.webp", alt: "Signlyn signature editor" },
    ],
  },
];

export function getProject(slug: string): SwLabProject | undefined {
  return swlabProjects.find((p) => p.slug === slug);
}
