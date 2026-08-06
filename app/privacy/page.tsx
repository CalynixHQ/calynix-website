export const metadata = {
  title: "Privacy Policy — Calynix",
  description: "How Calynix Ltd collects, uses, and protects your data.",
};

export default function Privacy() {
  return (
    <div className="container-page py-16">
      <article className="max-w-3xl prose prose-neutral dark:prose-invert">
      <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="text-sm text-foreground/60 mt-2">
        Last updated: 22 May 2026
      </p>

      <section className="mt-8 space-y-4 text-foreground/80">
        <p>
          Calynix Ltd (&quot;Calynix&quot;, &quot;we&quot;, &quot;us&quot;) operates this website and the brands
          listed on it, including Calynix Games. We respect
          your privacy and only collect data necessary to provide our services.
        </p>

        <h2 className="text-xl font-semibold mt-8">1. Data we collect</h2>
        <p>
          <strong>Website:</strong> standard server logs (IP address, browser
          type, pages viewed) and any cookies required for the site to
          function. We do not use third-party advertising trackers on this
          marketing site.
        </p>
        <p>
          <strong>Apps and games:</strong> our mobile apps may collect device
          identifiers, gameplay data, and crash reports. Each app has its own
          in-app privacy notice with specifics.
        </p>
        <p>
          <strong>Email:</strong> if you contact us at info@calynix.com, we
          retain your message and email address solely to respond.
        </p>

        <h2 className="text-xl font-semibold mt-8">2. How we use data</h2>
        <p>
          To provide and improve our products, respond to enquiries, comply
          with legal obligations, and protect our services from abuse. We do
          not sell personal data.
        </p>

        <h2 className="text-xl font-semibold mt-8">3. Sharing</h2>
        <p>
          We share data with infrastructure providers (e.g. hosting, analytics
          where applicable, app store operators) only as needed to operate the
          service. We may disclose data when required by law.
        </p>

        <h2 className="text-xl font-semibold mt-8">4. Your rights (UK GDPR)</h2>
        <p>
          If you are located in the UK or EU, you have the right to access,
          correct, delete, or object to the processing of your personal data.
          Contact us at info@calynix.com to exercise any of these rights.
        </p>

        <h2 className="text-xl font-semibold mt-8">5. Data retention</h2>
        <p>
          We retain personal data only for as long as needed for the purposes
          described above or as required by law.
        </p>

        <h2 className="text-xl font-semibold mt-8">6. Children</h2>
        <p>
          Our products are not directed at children under 13. We do not
          knowingly collect personal data from children under 13.
        </p>

        <h2 className="text-xl font-semibold mt-8">7. StreamLyn (tvOS)</h2>
        <p>
          StreamLyn does not collect, transmit, or share any personal data.
          It does not use analytics, advertising, or crash-reporting SDKs,
          and makes no network requests to Calynix or any third party. The
          app stores your preferences and settings only locally on your
          Apple TV, using standard system storage (UserDefaults and, where
          applicable, the Keychain). This data never leaves your device and
          is deleted automatically if you uninstall the app. StreamLyn&apos;s
          declared data collection to Apple (NSPrivacyCollectedDataTypes) is
          empty, reflecting that no data is collected.
        </p>

        <h2 className="text-xl font-semibold mt-8">8. Contact</h2>
        <p>
          Calynix Ltd, 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ,
          United Kingdom. Email:{" "}
          <a href="mailto:info@calynix.com" className="underline">
            info@calynix.com
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mt-8">9. Changes</h2>
        <p>
          We may update this policy from time to time. Material changes will be
          announced on this page with an updated date.
        </p>
      </section>
    </article>
    </div>
  );
}
