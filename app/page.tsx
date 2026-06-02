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
        <Link
          href="/games"
          className="mt-8 inline-block rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-medium hover:border-foreground/40 transition-colors"
        >
          View our games →
        </Link>
      </section>
    </div>
  );
}
