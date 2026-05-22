export const metadata = {
  title: "Terms of Use — Calynix",
  description: "The terms that govern use of the Calynix website.",
};

export default function Terms() {
  return (
    <article className="max-w-3xl mx-auto px-6 sm:px-12 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Terms of Use</h1>
      <p className="text-sm text-foreground/60 mt-2">
        Last updated: 22 May 2026
      </p>

      <section className="mt-8 space-y-4 text-foreground/80">
        <p>
          These terms govern your use of calynix.com (the &quot;Site&quot;), operated by
          Calynix Ltd, a company registered in England &amp; Wales. By using the
          Site you agree to these terms.
        </p>

        <h2 className="text-xl font-semibold mt-8">1. Use of the Site</h2>
        <p>
          You may browse this Site for personal, non-commercial use. You may
          not scrape, copy, or redistribute material without our written
          permission, except as permitted by law (e.g. quotation, fair use).
        </p>

        <h2 className="text-xl font-semibold mt-8">2. Intellectual property</h2>
        <p>
          The Calynix name, logo, and all content on the Site are owned by
          Calynix Ltd unless stated otherwise. Trademarks of third parties (for
          example, Apple, App Store) belong to their respective owners.
        </p>

        <h2 className="text-xl font-semibold mt-8">3. Products and games</h2>
        <p>
          Our apps and games are governed by their own end-user terms presented
          at install or first launch, and by the terms of the platform on
          which they are distributed (such as the Apple App Store).
        </p>

        <h2 className="text-xl font-semibold mt-8">4. No warranties</h2>
        <p>
          The Site is provided &quot;as is&quot;. We do not guarantee that it will be
          uninterrupted, error-free, or free of harmful components. To the
          extent permitted by law we exclude implied warranties.
        </p>

        <h2 className="text-xl font-semibold mt-8">5. Liability</h2>
        <p>
          To the extent permitted by law, Calynix Ltd is not liable for
          indirect or consequential losses arising from your use of the Site.
          Nothing in these terms limits liability that cannot be limited by
          law (such as for death or personal injury caused by negligence).
        </p>

        <h2 className="text-xl font-semibold mt-8">6. Governing law</h2>
        <p>
          These terms are governed by the laws of England &amp; Wales. Disputes
          are subject to the exclusive jurisdiction of the courts of England
          &amp; Wales.
        </p>

        <h2 className="text-xl font-semibold mt-8">7. Contact</h2>
        <p>
          Calynix Ltd, 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.
          Email{" "}
          <a href="mailto:info@calynix.com" className="underline">
            info@calynix.com
          </a>
          .
        </p>
      </section>
    </article>
  );
}
