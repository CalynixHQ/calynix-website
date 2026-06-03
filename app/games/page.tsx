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
    <div className="py-10">
      <h1 className="sr-only">Calynix Games</h1>
      <section className="container-page">
        <div className="grid gap-6 sm:grid-cols-2">
          {games.map((game) => (
            <Link
              key={game.slug}
              href={game.href ?? `/games/${game.slug}`}
              className="group p-6 rounded-lg border border-foreground/10 hover:border-foreground/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                {game.icon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={game.icon}
                    alt={`${game.name} app icon`}
                    width={64}
                    height={64}
                    className="h-16 w-16 flex-none rounded-2xl border border-foreground/10"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/5 text-xl font-semibold text-foreground/40"
                  >
                    {game.name.charAt(0)}
                  </div>
                )}
                <div className="min-w-0 flex-1">
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
                </div>
              </div>
              <p className="mt-3 text-sm text-foreground/70">{game.summary}</p>
              <span className="mt-4 inline-block text-xs uppercase tracking-wide text-foreground/50">
                {game.status}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
