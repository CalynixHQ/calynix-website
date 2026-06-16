import Link from "next/link";
import type { Metadata } from "next";
import { mediaApps } from "./media";
import AppTitle from "../components/AppTitle";

export const metadata: Metadata = {
  title: "Media — Calynix",
  description: "Kids, entertainment, and media apps from Calynix — streaming, stories, news, and more.",
};

export default function Media() {
  return (
    <div className="py-10">
      <h1 className="sr-only">Calynix Media</h1>
      <section className="container-page">
        <div className="grid gap-6 sm:grid-cols-2">
          {mediaApps.map((app) => {
            const isLive = app.status.toLowerCase() === "live";

            const cardContent = (
              <>
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
                      <AppTitle name={app.name} nameParts={app.nameParts} arrow={isLive} />
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
                <span
                  className={`mt-4 inline-block text-xs uppercase tracking-wide px-2 py-0.5 rounded-full ${
                    isLive
                      ? "bg-red-500/10 text-red-400"
                      : "bg-foreground/5 text-foreground/40"
                  }`}
                >
                  {app.status}
                </span>
              </>
            );

            return isLive && app.href ? (
              <Link
                key={app.slug}
                href={app.href}
                className="group p-6 rounded-lg border border-foreground/10 hover:border-foreground/30 transition-colors"
              >
                {cardContent}
              </Link>
            ) : (
              <div
                key={app.slug}
                className="p-6 rounded-lg border border-foreground/5 opacity-70"
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
