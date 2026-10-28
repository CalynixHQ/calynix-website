export type Screenshot = { src: string; alt: string };
export type NameParts = { prefix: string; suffix: string; color: string };

export type App = {
  slug: string;
  name: string;
  nameParts?: NameParts;
  tagline: string;
  icon?: string;
  summary: string;
  description?: string[];
  platform: string;
  status: string;
  storeUrl?: string;
  href?: string;
  screenshots?: Screenshot[];
  privacyUrl?: string;
  termsUrl?: string;
  supportUrl?: string;
};

// Apps color: gray #9CA3AF — prefix is gray, LYN is white
const G = "#9CA3AF";

export const apps: App[] = [
  {
    slug: "tracklyn",
    name: "Tracklyn",
    nameParts: { prefix: "TRACK", suffix: "LYN", color: G },
    tagline: "Track habits and progress with moving averages.",
    summary: "Log daily goals, visualise trends with moving averages, and build streaks that actually stick.",
    platform: "iPhone & iPad",
    status: "Coming soon",
  },
  {
    slug: "naturelyn",
    name: "Naturelyn",
    nameParts: { prefix: "NATURE", suffix: "LYN", color: "#4ADE80" },
    tagline: "Stunning nature screensavers for your Apple TV.",
    summary: "Beautiful 4K nature scenes that fill your TV when you're not watching — forests, oceans, mountains, and more.",
    platform: "Apple TV",
    status: "Coming soon",
  },
  {
    slug: "readlyn",
    name: "Readlyn",
    nameParts: { prefix: "READ", suffix: "LYN", color: G },
    tagline: "Your reading list, organised and distraction-free.",
    summary: "Save articles, books, and links — read them later in a clean, focused view with progress tracking.",
    platform: "iPhone & iPad",
    status: "Coming soon",
  },
  {
    slug: "movelyn",
    name: "Movelyn",
    nameParts: { prefix: "MOVE", suffix: "LYN", color: G },
    tagline: "Simple movement and workout tracker.",
    summary: "Log workouts, track body metrics, and see your progress over time — no complex setup, just move.",
    platform: "iPhone & iPad",
    status: "Coming soon",
  },
  {
    slug: "studylyn",
    name: "Studylyn",
    nameParts: { prefix: "STUDY", suffix: "LYN", color: G },
    tagline: "Flashcards and spaced-repetition for serious learners.",
    summary: "Build card decks, let spaced repetition schedule your reviews, and retain more with less study time.",
    platform: "iPhone & iPad",
    status: "Coming soon",
  },
  {
    slug: "calclyn",
    name: "Calclyn",
    nameParts: { prefix: "CALC", suffix: "LYN", color: G },
    tagline: "A smart calculator with history and unit conversions.",
    summary: "Full-featured calculator with an editable history tape, currency, and unit conversion — always in your pocket.",
    platform: "iPhone & iPad",
    status: "Coming soon",
  },
  {
    slug: "investlyn",
    name: "Investlyn",
    nameParts: { prefix: "INVEST", suffix: "LYN", color: G },
    tagline: "Track your investments and portfolio performance.",
    summary: "Add your holdings, see real-time valuations, and track gains and losses across stocks, crypto, and more.",
    platform: "iPhone & iPad",
    status: "Coming soon",
  },
  {
    slug: "streamlyn",
    name: "Streamlyn",
    nameParts: { prefix: "STREAM", suffix: "LYN", color: G },
    tagline: "Bring your own playlist, watch it everywhere.",
    icon: "/apps/streamlyn/icon.webp",
    href: "/apps/streamlyn",
    summary: "A pure IPTV player for your own M3U or Xtream playlists — no content included or provided. Group management, favourites, continue watching, and a fast remote-first interface built for the big screen.",
    description: [
      "Streamlyn is a pure IPTV player for Apple TV, iPhone, and iPad — built for people who already have their own M3U playlist or Xtream Codes subscription. No channels or content are bundled or provided by Calynix; you bring the source, Streamlyn plays it.",
      "Organise channels into groups, mark favourites, and pick up exactly where you left off with continue watching. The interface is remote-first and built around the Apple TV focus engine, so navigation stays fast and natural on the big screen.",
      "Free to try for 72 hours, then continues with a monthly or yearly subscription, or a one-time lifetime unlock. No ads, no bundled streams — just a fast, clean player for streams you already have access to.",
    ],
    platform: "Apple TV, iPhone & iPad",
    status: "Live",
    storeUrl: "https://apps.apple.com/app/id6793263647",
    privacyUrl: "/privacy",
    supportUrl: "/streamlyn/support",
  },
];

export function getApp(slug: string): App | undefined {
  return apps.find((a) => a.slug === slug);
}
