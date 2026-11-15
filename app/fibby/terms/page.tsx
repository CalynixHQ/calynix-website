export const metadata = {
  title: "Fibby Terms of Use — Calynix",
  description: "Terms of Use for Fibby, published by Calynix Ltd.",
};

export default function FibbyTerms() {
  return (
    <div className="container-page py-16">
      <article className="max-w-3xl prose prose-neutral dark:prose-invert">
        <h1 className="text-4xl font-bold tracking-tight">
          Terms of Use — Fibby
        </h1>
        <p className="text-sm text-foreground/60 mt-2">
          Last updated: 15 November 2026 · Published by Calynix Ltd
        </p>

        <section className="mt-8 space-y-4 text-foreground/80">
          <p>By playing Fibby you agree to these terms.</p>

          <h2 className="text-xl font-semibold mt-8">1. Licence</h2>
          <p>
            Calynix Ltd gives you a personal, non-transferable licence to play
            Fibby on your own Apple devices. All art, code and names belong to
            Calynix Ltd or its licensors. You may not copy, modify,
            reverse-engineer or resell the game.
          </p>

          <h2 className="text-xl font-semibold mt-8">2. Credits and purchases</h2>
          <p>
            Fibby is free to download. Optional in-app purchases, such as
            in-game credits, are handled by Apple through the App Store. Credits
            have no cash value and are kept on your device. Refund requests go
            to Apple under Apple&apos;s rules.
          </p>

          <h2 className="text-xl font-semibold mt-8">3. Game Center</h2>
          <p>
            If you use the leaderboards, your score is submitted to Apple&apos;s
            Game Center and is covered by Apple&apos;s terms and privacy
            policy. Do not try to submit scores that were not earned by playing.
          </p>

          <h2 className="text-xl font-semibold mt-8">4. Fair play</h2>
          <p>
            Do not try to change your credits, scores or saved data. We may stop
            supporting modified copies.
          </p>

          <h2 className="text-xl font-semibold mt-8">5. No warranty</h2>
          <p>
            The game is provided as it is. To the extent the law allows,
            Calynix Ltd is not liable for any loss from using it, including
            loss of progress stored on your device.
          </p>

          <h2 className="text-xl font-semibold mt-8">6. Law</h2>
          <p>These terms follow the laws of England and Wales.</p>

          <h2 className="text-xl font-semibold mt-8">7. Contact</h2>
          <p>
            <a href="mailto:info@calynix.com" className="underline">
              info@calynix.com
            </a>
          </p>
        </section>
      </article>
    </div>
  );
}
