import type { Metadata } from "next";
import { apps } from "./apps";
import AppTitle from "../components/AppTitle";

export const metadata: Metadata = {
  title: "Apps — Calynix",
  description:
    "iPhone, iPad, and Apple TV apps from Calynix Apps — the mobile apps division of Calynix Ltd.",
};

export default function Apps() {
  return (
    <div className="py-10">
      <h1 className="sr-only">Calynix Apps</h1>
      <section className="container-page">
        <div className="grid gap-6 sm:grid-cols-2">
          {apps.map((app) => (
            <div
              key={app.slug}
              className="p-6 rounded-lg border border-foreground/5 opacity-70"
            >
              <div className="flex items-start gap-4">
                {app.icon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={app.icon}
                    alt={`${app.name} app icon`}
                    width={64}
                    height={64}
                    className="h-16 w-16 flex-none rounded-2xl border border-foreground/10"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl border border-foreground/10"
                    style={app.nameParts ? { backgroundColor: app.nameParts.color + "18" } : { backgroundColor: "rgba(255,255,255,0.03)" }}
                  >
                    <span
                      className="text-xl font-bold font-mono"
                      style={app.nameParts ? { color: app.nameParts.color } : { color: "rgba(255,255,255,0.3)" }}
                    >
                      {app.nameParts?.prefix.charAt(0) ?? app.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <AppTitle name={app.name} nameParts={app.nameParts} />
                    <span className="text-xs uppercase tracking-wide text-foreground/50 shrink-0">
                      {app.platform}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-foreground/70">
                    {app.tagline}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-foreground/60">{app.summary}</p>
              <span className="mt-4 inline-block text-xs uppercase tracking-wide px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/40">
                {app.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
