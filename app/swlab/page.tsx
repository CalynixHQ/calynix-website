import Link from "next/link";
import type { Metadata } from "next";
import { swlabProjects } from "./swlab";
import AppTitle from "../components/AppTitle";

export const metadata: Metadata = {
  title: "SW Lab — Web Tools by Calynix",
  description:
    "Fast, free web tools from Calynix SW Lab. Build email signatures, generate QR codes, create animated charts, design CVs, and more — no account needed.",
  keywords: [
    "web tools",
    "free online tools",
    "email signature maker",
    "QR code generator",
    "animated chart maker",
    "CV builder",
    "invoice generator",
    "Signlyn",
    "Chartlyn",
    "Qrlyn",
    "Calynix SW Lab",
  ],
  alternates: { canonical: "https://calynix.com/swlab" },
};

export default function SwLab() {
  return (
    <div className="py-10">
      <h1 className="sr-only">Calynix SW Lab</h1>
      <section className="container-page">
        <div className="grid gap-6 sm:grid-cols-2">
          {swlabProjects.map((project) => {
            const isLive = project.status.toLowerCase().startsWith("live");
            const isComingSoon = !isLive;

            const cardContent = (
              <>
                <div className="flex items-start gap-4">
                  {project.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.icon}
                      alt={`${project.name} icon`}
                      width={64}
                      height={64}
                      className="h-16 w-16 flex-none rounded-2xl border border-foreground/10"
                    />
                  ) : (
                    <div
                      aria-hidden
                      className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/5"
                      style={project.nameParts ? { backgroundColor: project.nameParts.color + "18" } : {}}
                    >
                      <span
                        className="text-xl font-bold font-mono"
                        style={project.nameParts ? { color: project.nameParts.color } : { color: "rgba(255,255,255,0.3)" }}
                      >
                        {project.nameParts?.prefix.charAt(0) ?? project.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      {project.productHuntUrl && (project.href || project.url) ? (
                        <a href={project.href ?? project.url} target={project.url && !project.href ? "_blank" : undefined} rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                          <AppTitle name={project.name} nameParts={project.nameParts} arrow={isLive} />
                        </a>
                      ) : (
                        <AppTitle name={project.name} nameParts={project.nameParts} arrow={isLive} />
                      )}
                      <span className="text-xs uppercase tracking-wide text-foreground/50 shrink-0">
                        {project.platform}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm font-medium text-foreground/70">
                      {project.tagline}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-foreground/60">{project.summary}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-block text-xs uppercase tracking-wide px-2 py-0.5 rounded-full ${
                      isLive
                        ? "bg-teal-500/10 text-teal-400"
                        : "bg-foreground/5 text-foreground/40"
                    }`}
                  >
                    {project.status}
                  </span>
                  {project.productHuntUrl && (
                    <a
                      href={project.productHuntUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 transition-colors"
                    >
                      ↗ Product Hunt
                    </a>
                  )}
                </div>
              </>
            );

            // Cards with a productHuntUrl use a div wrapper (avoids nested <a>)
            // Cards that are live with only an internal href use a Link wrapper
            return isLive && project.href && !project.productHuntUrl ? (
              <Link
                key={project.slug}
                href={project.href}
                className="group p-6 rounded-lg border border-foreground/10 hover:border-foreground/30 transition-colors"
              >
                {cardContent}
              </Link>
            ) : (
              <div
                key={project.slug}
                className={`p-6 rounded-lg border transition-colors ${
                  isComingSoon
                    ? "border-foreground/5 opacity-70"
                    : "border-foreground/10 hover:border-foreground/30"
                }`}
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
