import Link from "next/link";
import type { Metadata } from "next";
import { games } from "./games";

export const metadata: Metadata = {
  title: "Games — Calynix",
  description:
    "Mobile games from Calynix Games, the games studio of Calynix Ltd. Fibby and Reveal, coming soon.",
};

export default function Games() {
  return (
    <div className="min-h-screen px-6 py-16 sm:px-12 lg:px-24">
      <section className="max-w-4xl mx-auto pt-12 pb-12">
        <p className="text-sm uppercase tracking-wide text-foreground/50">
          Calynix Games
        </p>
        <h1 className="mt-3 text-4xl sm:text-6xl font-bold tracking-tight">
          Games
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-foreground/70 max-w-2xl">
          Calynix Games is the games studio of Calynix Ltd, building mobile
          games for players who like a challenge. Here&apos;s what we&apos;re
          working on.
        </p>
      </section>

      <section className="max-w-4xl mx-auto pb-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {games.map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="group p-6 rounded-lg border border-foreground/10 hover:border-foreground/30 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-xl font-semibold group-hover:underline">
                  {game.name} →
                </h2>
                <span className="text-xs uppercase tracking-wide text-foreground/50">
                  {game.platform}
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-foreground/80">
                {game.tagline}
              </p>
              <p className="mt-3 text-sm text-foreground/70">{game.summary}</p>
              <span className="mt-4 inline-block text-xs uppercase tracking-wide text-foreground/50">
                {game.status}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 border-t border-foreground/10">
        <p className="text-foreground/70">
          Press and partnership enquiries:{" "}
          <a
            href="mailto:info@calynix.com"
            className="underline hover:no-underline"
          >
            info@calynix.com
          </a>
        </p>
        <Link
          href="/"
          className="mt-6 inline-block text-sm text-foreground/60 hover:text-foreground"
        >
          ← Back home
        </Link>
      </section>
    </div>
  );
}
