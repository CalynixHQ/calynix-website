export const metadata = {
  title: "Support — Calynix",
  description: "Get help with Calynix products, games, and services.",
};

export default function Support() {
  return (
    <div className="container-page py-16">
      <article className="max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight">Support</h1>

      <section className="mt-8 space-y-4 text-foreground/80">
        <h2 className="text-xl font-semibold">Contact us</h2>
        <p>
          For any question about our games, apps, the website, billing, or a
          business matter, email{" "}
          <a href="mailto:info@calynix.com" className="underline font-medium">
            info@calynix.com
          </a>
          .
        </p>
        <p>
          We aim to respond within two business days. Please include the name
          of the product and a brief description of the issue (including
          screenshots if relevant).
        </p>

        <h2 className="text-xl font-semibold mt-8">StreamLyn (tvOS)</h2>
        <p>
          Having trouble with StreamLyn on your Apple TV? Email{" "}
          <a href="mailto:info@calynix.com" className="underline font-medium">
            info@calynix.com
          </a>{" "}
          with a description of the issue, your Apple TV model, and the tvOS
          version (Settings → General → About). We&apos;ll get back to you
          within two business days.
        </p>

        <h2 className="text-xl font-semibold mt-8">Common requests</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Bug reports:</strong> include device model, OS version, and
            steps to reproduce.
          </li>
          <li>
            <strong>Refund / billing questions:</strong> include the order ID
            from your app store receipt.
          </li>
          <li>
            <strong>Privacy / data requests:</strong> see our{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>Press &amp; partnerships:</strong> same address, subject
            line &quot;Press&quot; or &quot;Partnership&quot;.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">Mailing address</h2>
        <p>
          Calynix Ltd
          <br />
          71-75 Shelton Street
          <br />
          Covent Garden
          <br />
          London, WC2H 9JQ
          <br />
          United Kingdom
        </p>
      </section>
    </article>
    </div>
  );
}
