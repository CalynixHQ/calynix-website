import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "REVEAL: Detective Mysteries — Calynix",
  description:
    "REVEAL: Detective Mysteries — a single-player detective puzzle game. Solve daily puzzles & cases. Free, no ads, available in 6 languages. By Calynix Ltd.",
};

const APP_STORE_URL = "https://apps.apple.com/app/id6776199155";

const features = [
  {
    icon: "🔍",
    title: "Daily Mysteries",
    body: "A new case to crack every single day.",
  },
  {
    icon: "🎯",
    title: "Hidden Cases",
    body: "Unlock secrets and new cases as you progress.",
  },
  {
    icon: "🧩",
    title: "Brain-Teasing Puzzles",
    body: "Riddles and deduction challenges that test your wits.",
  },
  {
    icon: "🌍",
    title: "6 Languages",
    body: "English, Spanish, French, German, Italian, and Turkish.",
  },
  {
    icon: "🎵",
    title: "Original Soundtrack",
    body: "An atmospheric score and sound effects to set the scene.",
  },
];

const screenshots = [
  { src: "/reveal/01-home.webp", alt: "REVEAL home screen" },
  { src: "/reveal/02-gameplay.webp", alt: "REVEAL gameplay in progress" },
  { src: "/reveal/03-cards.webp", alt: "REVEAL evidence cards" },
  { src: "/reveal/04-story.webp", alt: "A REVEAL case story" },
  { src: "/reveal/05-daily.webp", alt: "REVEAL daily challenge" },
];

export default function RevealLanding() {
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
            src="/reveal/icon.webp"
            alt="REVEAL: Detective Mysteries app icon"
            width={80}
            height={80}
            className="h-16 w-16 flex-none rounded-2xl border border-foreground/10 sm:h-20 sm:w-20"
          />
          <div className="flex flex-1 items-baseline justify-between gap-3">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              REVEAL
            </h1>
            <span className="text-xs uppercase tracking-wide text-foreground/50">
              iPhone &amp; iPad
            </span>
          </div>
        </div>
        <p className="mt-4 text-lg sm:text-xl text-foreground/70 max-w-2xl">
          Detective Mysteries — solve daily puzzles &amp; cases.
        </p>
        <p className="mt-2 text-foreground/70 max-w-2xl">
          Become a detective — crack a new mystery every day.
        </p>
        <div className="mt-6">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border border-foreground/20 px-5 py-2 text-sm font-medium hover:border-foreground/40 transition-colors"
          >
            Download on the App Store →
          </a>
          <p className="mt-2 text-xs text-foreground/50">
            Free · No ads · Optional in-app purchases
          </p>
        </div>
      </section>

      {/* About */}
      <section className="container-page pb-12 space-y-4 text-foreground/80">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="max-w-2xl">
          REVEAL is a single-player detective puzzle game. Investigate crime
          scenes, examine clues, and piece together the truth across hidden
          cases and a fresh daily mystery. Free to play — just pure deduction.
          Available in six languages: English, Spanish, French, German, Italian,
          and Turkish.
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
              height={1624}
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
            <Link href="/reveal/privacy" className="underline hover:no-underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/reveal/terms" className="underline hover:no-underline">
              Terms of Service
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
