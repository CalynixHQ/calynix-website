import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SW Lab — Calynix",
  description:
    "Web tools and software from Calynix SW Lab — the web and software division of Calynix Ltd.",
};

export default function SwLab() {
  return (
    <div className="py-10">
      <h1 className="sr-only">Calynix SW Lab</h1>
      <section className="container-page">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="group p-6 rounded-lg border border-foreground/10">
            <div className="flex items-start gap-4">
              <div
                aria-hidden
                className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/5 text-xl font-semibold text-foreground/40"
              >
                S
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="text-xl font-semibold">Coming Soon</h2>
                  <span className="text-xs uppercase tracking-wide text-foreground/50">
                    Web
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-foreground/80">
                  Web tools and software from Calynix SW Lab.
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm text-foreground/70">
              Projects in development. Check back soon.
            </p>
            <span className="mt-4 inline-block text-xs uppercase tracking-wide text-foreground/50">
              In development
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
