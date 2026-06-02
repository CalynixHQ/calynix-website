export const metadata = {
  title: "Fibby Privacy Policy — Calynix",
  description:
    "Privacy policy for Fibby, a single-player number puzzle game published by Calynix Ltd.",
};

export default function FibbyPrivacy() {
  return (
    <article className="max-w-3xl mx-auto px-6 sm:px-12 py-16 prose prose-neutral dark:prose-invert">
      <h1 className="text-4xl font-bold tracking-tight">
        Privacy Policy — Fibby
      </h1>
      <p className="text-sm text-foreground/60 mt-2">
        Last updated: 2 June 2026 · Published by Calynix Ltd
      </p>

      <section className="mt-8 space-y-4 text-foreground/80">
        <p>
          Fibby (&ldquo;the app&rdquo;) is a single-player number puzzle game
          published by Calynix Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;). This
          policy explains what information the app handles and how.
        </p>

        <h2 className="text-xl font-semibold mt-8">Information we collect</h2>
        <p>
          Fibby is designed to be privacy-friendly. We do <strong>not</strong>{" "}
          require an account, and we do <strong>not</strong> track you across
          other apps or websites.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>On your device only:</strong> your chosen username, game
            progress, scores, statistics, credit balance and settings are
            stored locally on your device. We cannot access this data.
          </li>
          <li>
            <strong>Game Center (optional):</strong> if you use the leaderboard
            feature, your high score and your Game Center player identifier are
            submitted to Apple&rsquo;s Game Center service so your ranking can be
            displayed. This is handled by Apple under Apple&rsquo;s privacy
            policy. We do not receive any other personal information.
          </li>
          <li>
            <strong>In-app purchases:</strong> purchases of in-game credits are
            processed entirely by Apple through the App Store. We do not collect
            or store your payment information.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">
          How the information is used
        </h2>
        <p>
          The limited data above is used solely to provide app functionality
          &mdash; to save your progress, show your scores, and display the Game
          Center leaderboard. We do not use it for advertising, marketing,
          analytics, or tracking.
        </p>

        <h2 className="text-xl font-semibold mt-8">Data sharing</h2>
        <p>
          We do not sell or share your personal data with third parties. The
          only data leaving your device is the Game Center score/identifier,
          which goes to Apple to operate the leaderboard.
        </p>

        <h2 className="text-xl font-semibold mt-8">Children&rsquo;s privacy</h2>
        <p>
          Fibby is suitable for all ages (rated 4+). It does not knowingly
          collect personal information from children, as no personal information
          is collected by us at all.
        </p>

        <h2 className="text-xl font-semibold mt-8">Your choices</h2>
        <p>
          You can stop submitting scores to the leaderboard by signing out of
          Game Center in your device settings. Deleting the app removes all
          locally stored data.
        </p>

        <h2 className="text-xl font-semibold mt-8">Contact</h2>
        <p>
          Questions about this policy? Contact Calynix Ltd at{" "}
          <a href="mailto:info@calynix.com" className="underline">
            info@calynix.com
          </a>
          .
        </p>
      </section>
    </article>
  );
}
