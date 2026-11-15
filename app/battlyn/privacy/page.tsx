export const metadata = {
  title: "BATTLYN Privacy Policy — Calynix",
  description: "Privacy policy for BATTLYN, published by Calynix Ltd.",
};

export default function BattlynPrivacy() {
  return (
    <div className="container-page py-16">
      <article className="max-w-3xl prose prose-neutral dark:prose-invert">
        <h1 className="text-4xl font-bold tracking-tight">
          Privacy Policy — BATTLYN
        </h1>
        <p className="text-sm text-foreground/60 mt-2">
          Last updated: 15 November 2026 · Published by Calynix Ltd
        </p>

        <section className="mt-8 space-y-4 text-foreground/80">
          <p>
            Calynix Ltd (&quot;we&quot;) makes the game BATTLYN. This page
            explains what the game does with your information. Short version:{" "}
            <strong>it collects nothing about you.</strong>
          </p>

          <h2 className="text-xl font-semibold mt-8">What we collect</h2>
          <p>
            Nothing. BATTLYN has no sign-in, no analytics, no advertising and
            no tracking. We do not know who you are, where you are or how you
            play.
          </p>

          <h2 className="text-xl font-semibold mt-8">
            What stays on your device
          </h2>
          <p>
            Your campaigns, rank, rating, champion names and pictures, flags,
            credit balance and settings are stored only on your device. If you
            delete the game, this data is deleted. If you add your own picture
            as a flag or a champion portrait, it is stored on your device and is
            never uploaded.
          </p>

          <h2 className="text-xl font-semibold mt-8">Purchases</h2>
          <p>
            If you buy credits or the &quot;All maps&quot; unlock, Apple handles
            the payment. We never see your payment details. Apple tells the game
            that a purchase was made so it can add your credits or unlock the
            maps.
          </p>

          <h2 className="text-xl font-semibold mt-8">Network</h2>
          <p>
            The game works offline and does not send data over the internet.
            Links to this website, the privacy policy and terms open in your
            browser.
          </p>

          <h2 className="text-xl font-semibold mt-8">Children</h2>
          <p>
            The game does not ask for or collect personal information from
            anyone, including children.
          </p>

          <h2 className="text-xl font-semibold mt-8">Changes</h2>
          <p>
            If this changes, for example when online play arrives in a later
            version, we will update this page and the App Store privacy details
            before it goes live.
          </p>

          <h2 className="text-xl font-semibold mt-8">Contact</h2>
          <p>
            Calynix Ltd, United Kingdom (company number 17245007).{" "}
            <a href="mailto:info@calynix.com" className="underline">
              info@calynix.com
            </a>
          </p>
        </section>
      </article>
    </div>
  );
}
