import Link from "next/link";
import type { Metadata } from "next";
import { swlabProjects } from "./swlab";

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
          {swlabProjects.map((project) => {
            const card = (
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
                    className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/5 text-xl font-semibold text-foreground/40"
                  >
                    {project.name.charAt(0)}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="text-xl font-semibold group-hover:underline">
                      {project.name} →
                    </h2>
                    <span className="text-xs uppercase tracking-wide text-foreground/50">
                      {project.platform}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-foreground/80">
                    {project.tagline}
                  </p>
                </div>
              </div>
            );

            return project.href ? (
              <Link
                key={project.slug}
                href={project.href}
                className="group p-6 rounded-lg border border-foreground/10 hover:border-foreground/30 transition-colors"
              >
                {card}
                <p className="mt-3 text-sm text-foreground/70">{project.summary}</p>
                <span className="mt-4 inline-block text-xs uppercase tracking-wide text-foreground/50">
                  {project.status}
                </span>
              </Link>
            ) : (
              <div
                key={project.slug}
                className="group p-6 rounded-lg border border-foreground/10"
              >
                {card}
                <p className="mt-3 text-sm text-foreground/70">{project.summary}</p>
                <span className="mt-4 inline-block text-xs uppercase tracking-wide text-foreground/50">
                  {project.status}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
