export const metadata = {
  title: "REVEAL Privacy Policy — Calynix",
  description:
    "Privacy policy for REVEAL: Detective Mysteries, a single-player detective game published by Calynix Ltd. No data collected, no tracking, no ads.",
};

export default function RevealPrivacy() {
  return (
    <div className="container-page py-16">
      <article className="max-w-3xl prose prose-neutral dark:prose-invert">
        <h1 className="text-4xl font-bold tracking-tight">
          Privacy Policy — REVEAL: Detective Mysteries
        </h1>
        <p className="text-sm text-foreground/60 mt-2">
          Last updated: 3 June 2026 · Effective: 3 June 2026 · Published by
          Calynix Ltd
        </p>

        <section className="mt-8 space-y-4 text-foreground/80">
          <h2 className="text-xl font-semibold mt-8">1. Introduction</h2>
          <p>
            REVEAL: Detective Mysteries (&ldquo;the App&rdquo;) is published by{" "}
            <strong>Calynix Ltd</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;). We are committed to protecting your privacy.
            This Privacy Policy explains what information the App handles and
            your rights regarding your data.
          </p>
          <p>
            <strong>
              In short: REVEAL does not collect, transmit, or share any personal
              data.
            </strong>{" "}
            The App has no advertising, no analytics, no accounts, and no
            tracking.
          </p>

          <h2 className="text-xl font-semibold mt-8">
            2. Information We Handle
          </h2>
          <h3 className="text-lg font-semibold mt-4">
            2.1 Game Data (Stored Locally Only)
          </h3>
          <p>The App stores the following on your device only:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Game progress: cases solved, daily challenge history</li>
            <li>
              User preferences: language selection, music/sound-effect settings
            </li>
            <li>
              Profile information: detective avatar selection and optional
              nickname
            </li>
            <li>Credit balance and purchase status</li>
          </ul>
          <p>
            <strong>Where it&rsquo;s stored:</strong> On your device only (local
            storage).
            <br />
            <strong>Shared with:</strong> No one. This data never leaves your
            device.
            <br />
            <strong>How long:</strong> Until you delete it in-app or uninstall
            the App.
          </p>

          <h3 className="text-lg font-semibold mt-4">
            2.2 What We Do NOT Collect
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Your name, email address, or phone number</li>
            <li>Your location</li>
            <li>Your contacts or photos</li>
            <li>Any device identifiers or advertising IDs</li>
            <li>Analytics, usage tracking, or crash data</li>
            <li>Your payment information (handled entirely by Apple)</li>
          </ul>
          <p>
            The App contains <strong>no advertising</strong> and{" "}
            <strong>no third-party tracking or analytics SDKs</strong>.
          </p>

          <h2 className="text-xl font-semibold mt-8">3. In-App Purchases</h2>
          <p>
            The App offers optional in-app purchases (credit packs and a
            &ldquo;Remove Ads&rdquo; option). All purchases are processed by{" "}
            <strong>Apple</strong> through the App Store. We do not receive or
            store your payment details. Apple&rsquo;s handling of purchase data
            is governed by{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Apple&rsquo;s Privacy Policy
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold mt-8">
            4. Children&rsquo;s Privacy (COPPA)
          </h2>
          <p>
            The App is rated suitable for ages 4 and up. Because the App does
            not collect any personal information from anyone, it does not
            knowingly collect personal information from children. It does not
            use persistent identifiers, behavioral advertising, or data sharing
            of any kind.
          </p>

          <h2 className="text-xl font-semibold mt-8">
            5. Your Rights (GDPR / CCPA)
          </h2>
          <p>
            Because all game data is stored only on your device and is never
            transmitted to us, you remain in full control of it at all times.
            You can delete it at any time by clearing your data in the
            App&rsquo;s settings or by uninstalling the App. We hold no personal
            data about you to access, correct, export, or delete on our servers.
          </p>
          <p>
            We do not &ldquo;sell&rdquo; or &ldquo;share&rdquo; personal
            information as defined by the CCPA, because we collect none.
          </p>

          <h2 className="text-xl font-semibold mt-8">6. Security</h2>
          <p>
            Game data is stored in the App&rsquo;s private, sandboxed storage on
            your device, protected by the operating system. As no personal data
            is transmitted off the device, there is no data in transit for us to
            secure.
          </p>

          <h2 className="text-xl font-semibold mt-8">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes
            will be reflected by the &ldquo;Last Updated&rdquo; date above.
            Continued use of the App after an update means you accept the revised
            policy.
          </p>

          <h2 className="text-xl font-semibold mt-8">8. Contact Us</h2>
          <p>
            For any privacy questions, contact <strong>Calynix Ltd</strong> at{" "}
            <a href="mailto:info@calynix.com" className="underline">
              info@calynix.com
            </a>
            .
          </p>

          <p className="mt-8">
            <strong>
              By using REVEAL: Detective Mysteries, you acknowledge that you
              have read and understood this Privacy Policy.
            </strong>
          </p>
          <p className="text-sm text-foreground/60">
            © 2026 Calynix Ltd. All rights reserved.
          </p>
        </section>
      </article>
    </div>
  );
}
