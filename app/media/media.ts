export type NameParts = { prefix: string; suffix: string; color: string };

export type MediaApp = {
  slug: string;
  name: string;
  nameParts?: NameParts;
  tagline: string;
  icon?: string;
  summary: string;
  platform: string;
  status: string;
  storeUrl?: string;
  href?: string;
  url?: string;
};

// Media color: red #F87171 — prefix is red, LYN is white
const R = "#F87171";

export const mediaApps: MediaApp[] = [
  {
    slug: "amazlyn",
    name: "Amazlyn",
    nameParts: { prefix: "AMAZ", suffix: "LYN", color: R },
    tagline: "Stories, songs, and fun for kids — on YouTube.",
    summary: "Amazlyn is the kids' content channel of Calynix Media. Animated stories, songs, and fun adventures — new videos on YouTube.",
    platform: "YouTube",
    status: "Live",
    icon: "/media/amazlyn/icon.png",
    href: "/media/amazlyn",
    url: "https://amazlyn.com",
  },
  {
    slug: "kidslyn",
    name: "Kidslyn",
    nameParts: { prefix: "KIDS", suffix: "LYN", color: R },
    tagline: "A fun learning world for young minds.",
    summary: "Interactive stories, mini-games, and learning activities designed for kids aged 3–8. Safe, no ads, no data collected.",
    platform: "iPhone & iPad",
    status: "Coming soon",
  },
  {
    slug: "toonlyn",
    name: "Toonlyn",
    nameParts: { prefix: "TOON", suffix: "LYN", color: R },
    tagline: "Turn your photos into cartoons and manga art.",
    summary: "On-device AI transforms your selfies and photos into anime, cartoon, and manga styles — no cloud, no subscriptions.",
    platform: "iPhone & iPad",
    status: "Coming soon",
  },
  {
    slug: "newslyn",
    name: "Newslyn",
    nameParts: { prefix: "NEWS", suffix: "LYN", color: R },
    tagline: "Your daily news, rewritten clearly and calmly.",
    summary: "AI rewrites the day's top headlines in plain language — no clickbait, no noise, just what happened.",
    platform: "iPhone & iPad",
    status: "Coming soon",
  },
  {
    slug: "streamlyn",
    name: "Streamlyn",
    nameParts: { prefix: "STREAM", suffix: "LYN", color: R },
    tagline: "Your own IPTV player, done right.",
    summary: "Bring your own M3U or Xtream playlist and watch on Apple TV, iPhone, or iPad. No bundled channels, no data collection — just a clean player for streams you already have access to.",
    platform: "Apple TV · iPhone & iPad",
    status: "Live",
    storeUrl: "https://apps.apple.com/app/id6793263647",
    href: "/support",
  },
  {
    slug: "songslyn",
    name: "Songslyn",
    nameParts: { prefix: "SONGS", suffix: "LYN", color: R },
    tagline: "Discover and save songs you actually love.",
    summary: "Shazam-style music discovery meets a smart playlist builder — find it, save it, share it.",
    platform: "iPhone & iPad",
    status: "Coming soon",
  },
];
