export type NameParts = { prefix: string; suffix: string; color: string };

export type App = {
  slug: string;
  name: string;
  nameParts?: NameParts;
  tagline: string;
  icon?: string;
  summary: string;
  platform: string;
  status: string;
  storeUrl?: string;
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
];
