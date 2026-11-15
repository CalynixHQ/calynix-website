import Link from "next/link";

export const metadata = {
  title: "Support — Calynix",
  description:
    "Help for Battlyn, Fibby, Reveal, Bloclyn and StreamLyn, and how to contact Calynix Ltd.",
};

const products = [
  {
    id: "battlyn",
    name: "Battlyn",
    privacy: "/battlyn/privacy",
    terms: "/battlyn/terms",
    faqs: [
      {
        q: "How do I get more credits?",
        a: "You get one free credit each day you open the game. You can also buy credit packs from Credits on the main screen.",
      },
      {
        q: "I bought “Unlimited” on a new phone.",
        a: "Open Credits and tap Restore Purchases.",
      },
      {
        q: "Where is my progress saved?",
        a: "On your device only. Deleting the game deletes it.",
      },
      {
        q: "The sound is missing.",
        a: "Check the music, sound and voice buttons on the main screen and the phone’s volume.",
      },
      {
        q: "How do I play?",
        a: "Tap Help on the main screen, or Weapons & powers in Settings.",
      },
    ],
  },
  {
    id: "fibby",
    name: "Fibby",
    privacy: "/fibby/privacy",
    terms: "/fibby/terms",
    faqs: [
      {
        q: "Where is my progress saved?",
        a: "On your device. Deleting the app deletes it. Fibby needs no account.",
      },
      {
        q: "My leaderboard score is not showing.",
        a: "Leaderboards use Apple’s Game Center. Make sure you are signed in to Game Center in your device settings and that you are online.",
      },
      {
        q: "I bought credits and they are missing.",
        a: "Purchases are handled by Apple. Check your Apple purchase history, and if the purchase went through, email us with the date and your Apple receipt.",
      },
    ],
  },
  {
    id: "reveal",
    name: "Reveal",
    privacy: "/reveal/privacy",
    terms: "/reveal/terms",
    faqs: [
      {
        q: "Where is my detective profile saved?",
        a: "On your device only. Reveal needs no account.",
      },
      {
        q: "I bought something and it is missing.",
        a: "Purchases are handled by Apple and can be restored through Apple. If it still does not appear, email us with your Apple receipt.",
      },
      {
        q: "Which languages are supported?",
        a: "English, German, French, Italian, Spanish and Turkish.",
      },
    ],
  },
  {
    id: "bloclyn",
    name: "Bloclyn",
    privacy: "/bloclyn/privacy",
    terms: "/bloclyn/terms",
    faqs: [
      {
        q: "Are levels and the daily challenge free?",
        a: "Yes, levels and the daily challenge are always free to play.",
      },
      {
        q: "I bought credits and they are missing.",
        a: "Purchases are handled by Apple. Check your Apple purchase history, and if the purchase went through, email us with the date and your Apple receipt.",
      },
      {
        q: "Where is my progress saved?",
        a: "On your device. Deleting the app deletes it.",
      },
    ],
  },
];

export default function Support() {
  return (
    <div className="container-page py-16">
      <article className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">Support</h1>
        <p className="text-sm text-foreground/60 mt-2">
          Last updated: 15 November 2026 · Published by Calynix Ltd
        </p>

        <section className="mt-8 space-y-4 text-foreground/80">
          <p>
            Email{" "}
            <a href="mailto:info@calynix.com" className="underline font-medium">
              info@calynix.com
            </a>
            . We aim to respond within two business days. Please tell us which game or app, your
            device and iOS version, and what happened. Do not send passwords.
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {products.map((p) => (
              <li key={p.id}>
                <a href={`#${p.id}`} className="underline hover:no-underline">
                  {p.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#streamlyn" className="underline hover:no-underline">
                StreamLyn
              </a>
            </li>
          </ul>

          {products.map((p) => (
            <div key={p.id} id={p.id} className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mt-10">{p.name}</h2>
              <ul className="mt-4 space-y-3">
                {p.faqs.map((f) => (
                  <li key={f.q}>
                    <strong>{f.q}</strong> {f.a}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm">
                <Link href={p.privacy} className="underline hover:no-underline">
                  Privacy Policy
                </Link>
                {" · "}
                <Link href={p.terms} className="underline hover:no-underline">
                  Terms
                </Link>
              </p>
            </div>
          ))}

          <div id="streamlyn" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold mt-10">StreamLyn</h2>
            <p className="mt-4">
              StreamLyn is a local Apple TV media player that plays your own
              playlist or provider. Calynix does not provide channels or media
              subscriptions. Your playlist URL and credentials stay on your
              Apple TV.
            </p>
            <p className="mt-4">
              Setup steps and troubleshooting are on the{" "}
              <Link href="/streamlyn/support" className="underline">
                StreamLyn support page
              </Link>
              .
            </p>
            <p className="mt-4 text-sm">
              <Link href="/privacy" className="underline hover:no-underline">
                Privacy Policy
              </Link>
            </p>
          </div>

          <h2 className="text-2xl font-semibold mt-10">Other requests</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Refunds and billing:</strong> purchases are made through
              Apple, so refund requests go to Apple. Include the order ID from
              your receipt if you write to us.
            </li>
            <li>
              <strong>Privacy and data requests:</strong> see the privacy
              policy for your game, or the company-wide policy below.
            </li>
            <li>
              <strong>Press and partnerships:</strong> same address, subject
              line &quot;Press&quot; or &quot;Partnership&quot;.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10">Company</h2>
          <p>
            Calynix Ltd
            <br />
            71-75 Shelton Street, Covent Garden
            <br />
            London, WC2H 9JQ, United Kingdom
            <br />
            Company number 17245007
          </p>
          <p className="text-sm">
            Company-wide{" "}
            <Link href="/privacy" className="underline hover:no-underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="underline hover:no-underline">
              Terms of Use
            </Link>
            .
          </p>
        </section>
      </article>
    </div>
  );
}
