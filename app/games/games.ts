// Single source of truth for the games shown on calynix.com.
// Both the /games grid and the /games/[slug] detail pages read from here.
// To add a future game: append an entry with a unique `slug`, a `description`
// (full prose for the detail page), and a `screenshots` array of files placed
// under public/games/<slug>/. Keep `tagline` short (one line for the card).

export type Screenshot = {
  src: string; // path under /public, e.g. "/games/fibby/01-intro.webp"
  alt: string;
};

export type Game = {
  slug: string;
  name: string;
  tagline: string;
  /** Short blurb for the /games grid card. */
  summary: string;
  /** Full description for the detail page (array of paragraphs). */
  description: string[];
  platform: string;
  status: string;
  /** Live App Store / store URL once published; omit while unreleased. */
  storeUrl?: string;
  screenshots: Screenshot[];
};

export const games: Game[] = [
  {
    slug: "fibby",
    name: "Fibby",
    tagline: "A single-player Fibonacci number puzzle.",
    summary:
      "Chase high scores across multiple board sizes, with global Game Center leaderboards.",
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
  },
  {
    slug: "reveal",
    name: "Reveal",
    tagline: "A detective game of cases and daily challenges.",
    summary:
      "Work through case files, solve daily challenges, and uncover the story.",
    description: [
      "Reveal is a detective game built around case files and daily challenges. Read the evidence, follow the leads, and crack each case.",
      "Available in English, German, French, Italian, Spanish, and Turkish.",
    ],
    platform: "iPhone & iPad",
    status: "In store-submission prep",
    screenshots: [],
  },
];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}
