import Link from "next/link";
import Wordmark from "./components/Wordmark";

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-16 sm:px-12 lg:px-24">
      <section className="max-w-4xl mx-auto pt-20 pb-24">
        <h1 className="sr-only">Calynix</h1>
        <Wordmark className="h-16 sm:h-24 w-auto" />
        <p className="mt-6 text-xl sm:text-2xl text-foreground/70 max-w-2xl">
          A creative studio building games, software, and online experiences.
        </p>
        <p className="mt-4 text-base text-foreground/60 max-w-2xl">
          Calynix Ltd is the home of Calynix Games and future digital ventures.
          Founded in 2026, registered in England &amp; Wales.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-16 border-t border-foreground/10">
        <h2 className="text-2xl font-semibold mb-8">What we do</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <Link
            href="/games"
            className="p-6 rounded-lg border border-foreground/10 hover:border-foreground/30 transition-colors"
          >
            <h3 className="text-lg font-semibold">Calynix Games →</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Our games studio. Fibby and Reveal, coming soon to mobile.
            </p>
            <span className="mt-3 inline-block text-xs uppercase tracking-wide text-foreground/50">
              In development
            </span>
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-16 border-t border-foreground/10">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-foreground/70">
          For business and general enquiries:{" "}
          <a
            href="mailto:info@calynix.com"
            className="underline hover:no-underline"
          >
            info@calynix.com
          </a>
        </p>
        <div className="mt-6 flex gap-6 text-sm text-foreground/60">
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/support" className="hover:text-foreground">
            Support
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
        </div>
      </section>
    </div>
  );
}
