import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { games, getGame } from "../games";

// Only the known game slugs are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/games/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return {};
  return {
    title: `${game.name} — Calynix Games`,
    description: game.tagline,
  };
}

export default async function GameDetail({
  params,
}: PageProps<"/games/[slug]">) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  return (
    <div className="min-h-screen px-6 py-16 sm:px-12 lg:px-24">
      <section className="max-w-4xl mx-auto pt-12 pb-8">
        <Link
          href="/games"
          className="text-sm text-foreground/60 hover:text-foreground"
        >
          ← All games
        </Link>
        <div className="mt-6 flex items-center gap-4 sm:gap-5">
          {game.icon && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={game.icon}
              alt={`${game.name} app icon`}
              width={80}
              height={80}
              className="h-16 w-16 flex-none rounded-2xl border border-foreground/10 sm:h-20 sm:w-20"
            />
          )}
          <div className="flex flex-1 items-baseline justify-between gap-3">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              {game.name}
            </h1>
            <span className="text-xs uppercase tracking-wide text-foreground/50">
              {game.platform}
            </span>
          </div>
        </div>
        <p className="mt-4 text-lg sm:text-xl text-foreground/70 max-w-2xl">
          {game.tagline}
        </p>
        <span className="mt-4 inline-block text-xs uppercase tracking-wide text-foreground/50">
          {game.status}
        </span>
        {game.storeUrl && (
          <div className="mt-6">
            <a
              href={game.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-foreground/20 px-5 py-2 text-sm font-medium hover:border-foreground/40 transition-colors"
            >
              View on the App Store →
            </a>
          </div>
        )}
      </section>

      <section className="max-w-4xl mx-auto pb-12 space-y-4 text-foreground/80">
        {game.description.map((para, i) => (
          <p key={i} className="max-w-2xl">
            {para}
          </p>
        ))}
      </section>

      {game.screenshots.length > 0 && (
        <section className="max-w-4xl mx-auto pb-16">
          <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {game.screenshots.map((shot) => (
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
      )}

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
      </section>
    </div>
  );
}
