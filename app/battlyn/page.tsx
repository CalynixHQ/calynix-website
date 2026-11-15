import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Battlyn — Calynix",
  description:
    "Battlyn — swords & spears strategy for iPhone. Claim lands, plan your formation and win five levels in blind, 7-minute wars across twelve maps. No account, no ads. By Calynix Ltd.",
};

// Set to the App Store URL once the app is approved.
const APP_STORE_URL: string | undefined = undefined;

const features = [
  {
    icon: "⚔️",
    title: "Blind War, Real Battles",
    body: "Fight on five levels, from the far wing to the near wing. Win all five and the land falls at once.",
  },
  {
    icon: "🛡️",
    title: "Six Weapons, One Wheel",
    body: "Spears stop cavalry, cavalry rides down archers, archers shoot axes, axes break shields, shields stand against spears. Swords hold it together.",
  },
  {
    icon: "👑",
    title: "Champion Duels",
    body: "Before every battle your champion faces theirs. Win duels, earn rating and make your champion stronger.",
  },
  {
    icon: "🗺️",
    title: "Twelve Wars",
    body: "Heart of Europe, Balkans and Danube and Japan are open from the start. Win campaigns to open nine more lands.",
  },
  {
    icon: "🚩",
    title: "Make It Yours",
    body: "Choose from ten banners or add your own picture as a flag. Name your empire and rename your three champions.",
  },
  {
    icon: "🌧️",
    title: "Weather, Wind and Landmarks",
    body: "Rain, snow and strong wind change how weapons fight. Every land shows its own landmark.",
  },
  {
    icon: "🔒",
    title: "No Account, No Ads",
    body: "No sign-in. Your progress stays on your device.",
  },
];

const screenshots = [
  { src: "/battlyn/01.webp", alt: "Battlyn main menu" },
  { src: "/battlyn/02.webp", alt: "A Battlyn land card" },
  { src: "/battlyn/03.webp", alt: "Planning a formation in Battlyn" },
  { src: "/battlyn/04.webp", alt: "A Battlyn champion duel" },
  { src: "/battlyn/05.webp", alt: "A Battlyn battle in progress" },
  { src: "/battlyn/06.webp", alt: "The Battlyn world map" },
];

export default function BattlynLanding() {
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
            src="/battlyn/icon.webp"
            alt="Battlyn app icon"
            width={80}
            height={80}
            className="h-16 w-16 flex-none rounded-2xl border border-foreground/10 sm:h-20 sm:w-20"
          />
          <div className="flex flex-1 items-baseline justify-between gap-3">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Battlyn
            </h1>
            <span className="text-xs uppercase tracking-wide text-foreground/50">
              iPhone
            </span>
          </div>
        </div>
        <p
          className="mt-4 text-lg sm:text-xl max-w-2xl font-medium"
          style={{ color: "#C2410C" }}
        >
          Swords &amp; spears strategy
        </p>
        <p className="mt-2 text-foreground/70 max-w-2xl">
          Claim lands. Plan your formation. Take the crown.
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
          Battlyn is a fast single-player strategy war game. Every war lasts 40
          turns or 7 minutes, and the highest score wins. Claim free lands,
          scout your rival, and attack when you are ready. Your army fights on
          five levels: choose the weapon for every rank and send more men to the
          levels that matter. You never see exactly what the enemy brings.
        </p>
        <p className="max-w-2xl">
          Each campaign uses one credit. You start with credits and get a free
          credit every day. Credit packs and the one-time &ldquo;Unlimited&rdquo;
          pass (all maps and every campaign) are optional purchases.
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
              width={1400}
              height={646}
              loading="lazy"
              className="h-[220px] sm:h-[300px] w-auto flex-none rounded-xl border border-foreground/10 snap-start"
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
            <Link href="/support#battlyn" className="underline hover:no-underline">
              Support
            </Link>
          </li>
          <li>
            <Link href="/battlyn/privacy" className="underline hover:no-underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/battlyn/terms" className="underline hover:no-underline">
              Terms of Service
            </Link>
          </li>
        </ul>
      </section>

      <section className="container-page pb-12">
        <p className="text-sm text-foreground/50">
          © 2026 Calynix Ltd. All rights reserved.
        </p>
      </section>
    </div>
  );
}
