import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amazlyn — Calynix Media",
  description: "Amazlyn is the kids' content channel of Calynix Media — animated stories, songs, and fun adventures on YouTube.",
};

export default function Amazlyn() {
  return (
    <div className="py-10">
      <section className="container-page max-w-3xl">
        <div className="mb-8 flex items-center gap-4">
          <Image
            src="/media/amazlyn/icon.png"
            alt="Amazlyn"
            width={64}
            height={64}
            className="h-16 w-16 flex-none rounded-2xl border border-foreground/10"
          />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              <span style={{ color: "#F87171" }}>AMAZ</span>
              <span className="text-foreground">LYN</span>
            </h1>
            <p className="text-sm text-foreground/60">Calynix Media · YouTube</p>
          </div>
        </div>

        <p className="text-foreground/80 text-base leading-relaxed mb-8">
          Stories, songs, and fun adventures for kids — new videos on YouTube every week.
        </p>

        <div className="aspect-video w-full rounded-xl overflow-hidden border border-foreground/10">
          <iframe
            src="https://www.youtube.com/embed/F98dUCvTZQ4"
            title="The Lion Who Needed a Mouse — Amazlyn"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href="https://www.youtube.com/@amazlyn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
          >
            ↗ Watch on YouTube
          </a>
        </div>
      </section>
    </div>
  );
}
