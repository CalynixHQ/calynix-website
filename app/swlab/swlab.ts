export type Screenshot = { src: string; alt: string };

export type NameParts = { prefix: string; suffix: string; color: string };

export type SwLabProject = {
  slug: string;
  name: string;
  nameParts?: NameParts;
  tagline: string;
  href?: string;
  icon?: string;
  summary: string;
  description: string[];
  platform: string;
  status: string;
  url?: string;
  productHuntUrl?: string;
  screenshots: Screenshot[];
};

// SW Lab color: teal #2DD4BF — prefix is teal, LYN is white
const T = "#2DD4BF";

export const swlabProjects: SwLabProject[] = [
  {
    slug: "signlyn",
    name: "Signlyn",
    nameParts: { prefix: "SIGN", suffix: "LYN", color: T },
    tagline: "Build and export a professional email signature.",
    href: "/swlab/signlyn",
    summary: "Fill in your details, pick a template, and copy the finished HTML straight into Gmail, Outlook, or Apple Mail.",
    description: [
      "Signlyn is a fast, no-account email signature builder. Enter your name, title, company, and contact details, choose a clean template, and get a pixel-perfect HTML signature ready to paste.",
      "Works with every major email client — Gmail, Outlook, Apple Mail, and more. No sign-up required, no data stored on servers. Your signature is built entirely in the browser.",
      "Designed for professionals who want a polished signature in under two minutes.",
    ],
    platform: "Web",
    status: "Live on Product Hunt",
    url: "https://signlyn.vercel.app/?ref=producthunt",
    productHuntUrl: "https://www.producthunt.com/products/signlyn",
    screenshots: [{ src: "/swlab/signlyn/01-editor.webp", alt: "Signlyn signature editor" }],
  },
  {
    slug: "qrlyn",
    name: "Qrlyn",
    nameParts: { prefix: "QR", suffix: "LYN", color: T },
    tagline: "Generate beautiful, branded QR codes instantly.",
    summary: "Paste a URL, pick a style, and download a ready-to-use QR code — no account needed.",
    description: [],
    platform: "Web",
    status: "Coming soon",
    screenshots: [],
  },
  {
    slug: "cvlyn",
    name: "Cvlyn",
    nameParts: { prefix: "CV", suffix: "LYN", color: T },
    tagline: "Build a clean, export-ready CV in minutes.",
    summary: "Fill in your experience, choose a layout, and export a polished PDF resume ready to send.",
    description: [],
    platform: "Web",
    status: "Coming soon",
    screenshots: [],
  },
  {
    slug: "involyn",
    name: "Involyn",
    nameParts: { prefix: "INVO", suffix: "LYN", color: T },
    tagline: "Create and send professional invoices in seconds.",
    summary: "Add your client details, line items, and branding — get a PDF invoice ready to send or download.",
    description: [],
    platform: "Web",
    status: "Coming soon",
    screenshots: [],
  },
  {
    slug: "contractlyn",
    name: "Contractlyn",
    nameParts: { prefix: "CONTRACT", suffix: "LYN", color: T },
    tagline: "Generate simple, legally-aware freelance contracts.",
    summary: "Fill in project scope, payment terms, and both parties — get a ready-to-sign contract PDF in under a minute.",
    description: [],
    platform: "Web",
    status: "Coming soon",
    screenshots: [],
  },
  {
    slug: "coverlyn",
    name: "Coverlyn",
    nameParts: { prefix: "COVER", suffix: "LYN", color: T },
    tagline: "Write a compelling cover letter in minutes.",
    summary: "Paste a job description, add your background, and get a tailored cover letter ready to send — powered by AI.",
    description: [],
    platform: "Web",
    status: "Coming soon",
    screenshots: [],
  },
  {
    slug: "pdflyn",
    name: "Pdflyn",
    nameParts: { prefix: "PDF", suffix: "LYN", color: T },
    tagline: "Edit, merge, and convert PDF files — all in the browser.",
    summary: "Merge, split, compress, or convert PDFs without uploading to a third-party server.",
    description: [],
    platform: "Web · iOS",
    status: "Coming soon",
    screenshots: [],
  },
  {
    slug: "picklyn",
    name: "Picklyn",
    nameParts: { prefix: "PICK", suffix: "LYN", color: T },
    tagline: "Make smarter decisions with weighted scoring.",
    summary: "List your options, set the criteria that matter, and let Picklyn score each choice so the right answer is obvious.",
    description: [],
    platform: "Web · iOS",
    status: "Coming soon",
    screenshots: [],
  },
  {
    slug: "chartlyn",
    name: "Chartlyn",
    nameParts: { prefix: "CHART", suffix: "LYN", color: T },
    tagline: "Animated line race charts — free, instant, no account needed.",
    summary: "Upload a CSV, pick a style, and export a smooth animated line race chart as PNG or GIF — ready for decks, reports, or social.",
    description: [
      "Chartlyn is a free animated line race chart maker. Upload your CSV data, customise fonts, colours, and speed, and get a smooth animated bar chart race in seconds.",
      "Export your animation as a PNG snapshot or an animated GIF ready to drop into presentations, social posts, or reports. No sign-up required — everything runs in your browser, no data stored on servers.",
      "Built for data journalists, analysts, teachers, and anyone who wants to make their numbers move. Supports multiple chart styles and custom colour palettes.",
    ],
    platform: "Web",
    status: "Live on Product Hunt",
    url: "https://chartlyn.vercel.app/?ref=producthunt",
    productHuntUrl: "https://www.producthunt.com/products/chartlyn",
    screenshots: [],
  },
  {
    slug: "finlyn",
    name: "Finlyn",
    nameParts: { prefix: "FIN", suffix: "LYN", color: T },
    tagline: "Personal finance dashboard for freelancers and solopreneurs.",
    summary: "Track income, expenses, and runway at a glance — built for people who work for themselves.",
    description: [],
    platform: "Web",
    status: "Coming soon",
    screenshots: [],
  },
];

export function getProject(slug: string): SwLabProject | undefined {
  return swlabProjects.find((p) => p.slug === slug);
}
