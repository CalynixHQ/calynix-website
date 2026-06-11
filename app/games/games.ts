export type Screenshot = { src: string; alt: string };
export type NameParts = { prefix: string; suffix: string; color: string };

export type Game = {
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
  storeUrl?: string;
  screenshots: Screenshot[];
  privacyUrl?: string;
  termsUrl?: string;
};

// Games color: fuchsia #E879F9 — prefix is fuchsia, LYN is white
const F = "#E879F9";

export const games: Game[] = [
  {
    slug: "fibby",
    name: "Fibby",
    tagline: "A single-player Fibonacci number puzzle.",
    href: "/fibby",
    icon: "/games/fibby/icon.webp",
    summary: "Chase high scores across multiple board sizes, with global Game Center leaderboards.",
    description: [
      "Fibby is a single-player number puzzle built around the Fibonacci sequence. Place and combine numbers on the board to climb the chain — quick to pick up, hard to put down.",
      "Play across three board sizes for shorter or longer sessions, and push for the top of the global Game Center leaderboards. It's free, privacy-friendly, and needs no account: your progress stays on your device.",
    ],
    platform: "iPhone & iPad",
    status: "Submitted to the App Store — coming soon",
    screenshots: [
      { src: "/games/fibby/01-intro.webp", alt: "Fibby intro screen" },
      { src: "/games/fibby/02-modes.webp", alt: "Fibby board size selection" },
      { src: "/games/fibby/03-board.webp", alt: "A Fibby game board" },
      { src: "/games/fibby/04-gameplay.webp", alt: "Fibby gameplay in progress" },
    ],
    privacyUrl: "/fibby/privacy",
  },
  {
    slug: "reveal",
    name: "Reveal",
    tagline: "A detective game of cases and daily challenges.",
    href: "/reveal",
    icon: "/games/reveal/icon.webp",
    summary: "Work through case files, solve daily challenges, and uncover the story.",
    description: [
      "Reveal is a detective game built around case files and daily challenges. Read the evidence, follow the leads, and crack each case.",
      "Pick up a new mystery each day, build your detective profile as you go, and play at your own pace — it's privacy-friendly and needs no account, with your progress kept on your device.",
      "Available in English, German, French, Italian, Spanish, and Turkish.",
    ],
    platform: "iPhone & iPad",
    storeUrl: "https://apps.apple.com/app/id6776199155",
    status: "Available on the App Store",
    screenshots: [
      { src: "/games/reveal/01-home.webp", alt: "Reveal home screen" },
      { src: "/games/reveal/02-gameplay.webp", alt: "Reveal gameplay in progress" },
      { src: "/games/reveal/03-cards.webp", alt: "Reveal evidence cards" },
      { src: "/games/reveal/04-story.webp", alt: "A Reveal case story" },
      { src: "/games/reveal/05-daily.webp", alt: "Reveal daily challenge" },
    ],
    privacyUrl: "/reveal/privacy",
    termsUrl: "/reveal/terms",
  },
  {
    slug: "wordlyn",
    name: "Wordlyn",
    nameParts: { prefix: "WORD", suffix: "LYN", color: F },
    tagline: "A daily word puzzle with a Calynix twist.",
    summary: "Six attempts to guess the hidden word — new puzzle every day, clean design, no account needed.",
    description: [],
    platform: "iPhone & iPad",
    status: "Coming soon",
    screenshots: [],
  },
  {
    slug: "bloclyn",
    name: "Bloclyn",
    nameParts: { prefix: "BLOC", suffix: "LYN", color: F },
    tagline: "A block-stacking puzzle that tests your spatial logic.",
    summary: "Drop and rotate blocks to clear lines and climb the leaderboard — timeless gameplay, fresh look.",
    description: [],
    platform: "iPhone & iPad",
    status: "Coming soon",
    screenshots: [],
  },
  {
    slug: "nowlyn",
    name: "Nowlyn",
    nameParts: { prefix: "NOW", suffix: "LYN", color: F },
    tagline: "A fast-paced reaction and timing game.",
    summary: "Tap at exactly the right moment, build your streak, and beat your best — simple to learn, hard to master.",
    description: [],
    platform: "iPhone & iPad",
    status: "Coming soon",
    screenshots: [],
  },
  {
    slug: "fibbyhex",
    name: "FibbyHex",
    nameParts: { prefix: "FIBBY", suffix: "HEX", color: F },
    tagline: "Fibonacci puzzles on a hexagonal board.",
    summary: "The Fibby sequence, reimagined on a hex grid — more paths, more strategy, more satisfying combos.",
    description: [],
    platform: "iPhone & iPad",
    status: "Coming soon",
    screenshots: [],
  },
];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}
