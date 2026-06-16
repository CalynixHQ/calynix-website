import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fibby — Calynix",
  description:
    "Fibby — a single-player Fibonacci number puzzle. Chase high scores across three board sizes with global Game Center leaderboards. Free, no ads, by Calynix Ltd.",
};

const APP_STORE_URL: string | undefined =
  "https://apps.apple.com/app/fibby-fibonacci-game/id6775974954";

const features = [
  {
    icon: "🔢",
    title: "Fibonacci Puzzle",
    body: "Place and combine numbers to climb the Fibonacci chain.",
  },
  {
    icon: "📐",
    title: "Three Board Sizes",
    body: "Shorter or longer sessions to fit how much time you have.",
  },
  {
    icon: "🏆",
    title: "Game Center Leaderboards",
    body: "Push for the top of the global high-score rankings.",
  },
  {
    icon: "⚡",
    title: "Quick to Learn",
    body: "Easy to pick up, hard to put down — pure number strategy.",
  },
  {
    icon: "🔒",
    title: "Privacy-Friendly",
    body: "No account required — your progress stays on your device.",
  },
];

const screenshots = [
  { src: "/fibby/01-intro.webp", alt: "Fibby intro screen" },
  { src: "/fibby/02-modes.webp", alt: "Fibby board size selection" },
  { src: "/fibby/03-board.webp", alt: "A Fibby game board" },
  { src: "/fibby/04-gameplay.webp", alt: "Fibby gameplay in progress" },
];

export default function FibbyLanding() {
  return (
    <div className="py-8">
      {/* Hero */}
      <section className="container-page pt-12 pb-8">
        <Link
          href="/games"
          className="text-sm text-foreground/60 hover:text-foreground"
        >
          ← All games
        </Link>
        <div className="mt-6 flex items-center gap-4 sm:gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/fibby/icon.webp"
            alt="Fibby app icon"
            width={80}
            height={80}
            className="h-16 w-16 flex-none rounded-2xl border border-foreground/10 sm:h-20 sm:w-20"
          />
          <div className="flex flex-1 items-baseline justify-between gap-3">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Fibby
            </h1>
            <span className="text-xs uppercase tracking-wide text-foreground/50">
              iPhone &amp; iPad
            </span>
          </div>
        </div>
        <p className="mt-4 text-lg sm:text-xl text-foreground/70 max-w-2xl">
          A single-player Fibonacci number puzzle.
        </p>
        <p className="mt-2 text-foreground/70 max-w-2xl">
          Combine numbers, climb the chain, and chase the high score.
        </p>
        <div className="mt-6">
          {APP_STORE_URL ? (
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-foreground/20 px-5 py-2 text-sm font-medium hover:border-foreground/40 transition-colors"
            >
              Download on the App Store →
            </a>
          ) : (
            <span className="inline-block rounded-lg border border-foreground/20 px-5 py-2 text-sm font-medium text-foreground/70">
              Coming soon to the App Store
            </span>
          )}
          <p className="mt-2 text-xs text-foreground/50">
            Free · No ads · Optional in-app purchases
          </p>
        </div>
      </section>

      {/* About */}
      <section className="container-page pb-12 space-y-4 text-foreground/80">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="max-w-2xl">
          Fibby is a single-player number puzzle built around the Fibonacci
          sequence. Place and combine numbers on the board to climb the chain —
          quick to pick up, hard to put down. Play across three board sizes for
          shorter or longer sessions, and push for the top of the global Game
          Center leaderboards. It&rsquo;s free and needs no account: your
          progress stays on your device.
        </p>
      </section>

      {/* Features */}
      <section className="container-page pb-12">
        <h2 className="text-2xl font-semibold mb-6">Features</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <li
              key={f.title}
              className="flex gap-4 rounded-lg border border-foreground/10 p-5"
            >
              <span aria-hidden className="text-2xl leading-none">
                {f.icon}
              </span>
              <div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-foreground/70">{f.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Screenshots */}
      <section className="container-page pb-16">
        <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
          {screenshots.map((shot) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              width={750}
              height={1626}
              loading="lazy"
              className="h-[480px] w-auto flex-none rounded-xl border border-foreground/10 snap-start"
            />
          ))}
        </div>
      </section>

      {/* Support / Contact */}
      <section className="container-page py-12 border-t border-foreground/10">
        <h2 className="text-2xl font-semibold">Support</h2>
        <p className="mt-4 text-foreground/70">
          Need help? Contact us at{" "}
          <a
            href="mailto:info@calynix.com"
            className="underline hover:no-underline"
          >
            info@calynix.com
          </a>
          .
        </p>
        <ul className="mt-4 space-y-2 text-foreground/70">
          <li>
            <Link href="/fibby/privacy" className="underline hover:no-underline">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <section className="container-page pb-12">
        <p className="text-sm text-foreground/50">
          © 2026 Calynix Ltd. All rights reserved.
        </p>
      </section>
    </div>
  );
}
