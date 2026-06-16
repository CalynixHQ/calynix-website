import Image from "next/image";

const WORDMARKS = [
  { src: "/logo/yk/calynix-blue-wordmark.png",    alt: "Calynix Blue" },
  { src: "/logo/yk/calynix-gray-wordmark.png",    alt: "Calynix Gray" },
  { src: "/logo/yk/calynix-fuchsia-wordmark.png", alt: "Calynix Fuchsia" },
  { src: "/logo/yk/calynix-green-wordmark.png",   alt: "Calynix Green" },
  { src: "/logo/yk/calynix-orange-wordmark.png",  alt: "Calynix Orange" },
  { src: "/logo/yk/calynix-red-wordmark.png",     alt: "Calynix Red" },
  { src: "/logo/yk/calynix-teal-wordmark.png",    alt: "Calynix Teal" },
];

export default function Home() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <h1 className="sr-only">Calynix</h1>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {WORDMARKS.map((wm) => (
          <Image
            key={wm.src}
            src={wm.src}
            alt={wm.alt}
            height={200}
            width={700}
            className="h-[1.4rem] sm:h-[1.8rem] w-auto"
            unoptimized
            priority
          />
        ))}
      </div>
      <p className="mt-8 text-[1rem] sm:text-[1.2rem] text-foreground/70 max-w-2xl">
        A creative studio building apps, games, software, and media.
      </p>
      <p className="mt-4 text-base text-foreground/60 max-w-2xl">
        <span className="text-foreground/80">SW Lab</span> ships fast web tools —{" "}
        <span className="text-foreground/80">Games</span> brings puzzles and mysteries to iPhone &amp; iPad —{" "}
        <span className="text-foreground/80">Apps</span> covers productivity and lifestyle —{" "}
        and <span className="text-foreground/80">Amazlyn</span> is our kids&apos; content channel on YouTube.
      </p>
    </section>
  );
}
