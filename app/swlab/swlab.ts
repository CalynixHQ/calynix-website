export type SwLabProject = {
  slug: string;
  name: string;
  tagline: string;
  href?: string;
  icon?: string;
  summary: string;
  platform: string;
  status: string;
  url?: string;
};

export const swlabProjects: SwLabProject[] = [
  {
    slug: "signlyn",
    name: "Signlyn",
    tagline: "Build and export a professional email signature.",
    href: "https://signlyn.com",
    summary:
      "Fill in your details, pick a template, and copy the finished HTML straight into Gmail, Outlook, or Apple Mail.",
    platform: "Web",
    status: "Live",
    url: "https://signlyn.com",
  },
];
