import Wordmark from "./components/Wordmark";

export default function Home() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <h1 className="sr-only">Calynix</h1>
      <Wordmark className="h-[3.2rem] sm:h-[4.8rem] w-auto" />
      <p className="mt-6 text-[1rem] sm:text-[1.2rem] text-foreground/70 sm:whitespace-nowrap">
        A creative studio building games, software, and online experiences.
      </p>
      <p className="mt-4 text-base text-foreground/60 max-w-2xl">
        Calynix Ltd is the home of Calynix Games and future digital ventures.
      </p>
    </section>
  );
}
