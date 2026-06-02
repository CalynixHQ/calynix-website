import Wordmark from "./components/Wordmark";

export default function Home() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <h1 className="sr-only">Calynix</h1>
      <Wordmark className="h-16 sm:h-24 w-auto" />
      <p className="mt-6 text-xl sm:text-2xl text-foreground/70 max-w-2xl">
        A creative studio building games, software, and online experiences.
      </p>
      <p className="mt-4 text-base text-foreground/60 max-w-2xl">
        Calynix Ltd is the home of Calynix Games and future digital ventures.
      </p>
      <p className="mt-2 text-base text-foreground/60 max-w-2xl">
        Founded in 2026, registered in England &amp; Wales.
      </p>
    </section>
  );
}
