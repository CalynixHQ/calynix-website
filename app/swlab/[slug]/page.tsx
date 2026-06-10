import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { swlabProjects, getProject } from "../swlab";

export const dynamicParams = false;

export function generateStaticParams() {
  return swlabProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/swlab/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Calynix SW Lab`,
    description: project.tagline,
  };
}

export default async function SwLabDetail({
  params,
}: PageProps<"/swlab/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="py-8">
      <section className="container-page pt-12 pb-8">
        <Link
          href="/swlab"
          className="text-sm text-foreground/60 hover:text-foreground"
        >
          ← SW Lab
        </Link>
        <div className="mt-6 flex items-center gap-4 sm:gap-5">
          {project.icon && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.icon}
              alt={`${project.name} icon`}
              width={80}
              height={80}
              className="h-16 w-16 flex-none rounded-2xl border border-foreground/10 sm:h-20 sm:w-20"
            />
          )}
          <div className="flex flex-1 items-baseline justify-between gap-3">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              {project.name}
            </h1>
            <span className="text-xs uppercase tracking-wide text-foreground/50">
              {project.platform}
            </span>
          </div>
        </div>
        <p className="mt-4 text-lg sm:text-xl text-foreground/70 max-w-2xl">
          {project.tagline}
        </p>
        <span className="mt-4 inline-block text-xs uppercase tracking-wide text-foreground/50">
          {project.status}
        </span>
        {project.url && (
          <div className="mt-6">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-foreground/20 px-5 py-2 text-sm font-medium hover:border-foreground/40 transition-colors"
            >
              Open {project.name} →
            </a>
          </div>
        )}
      </section>

      <section className="container-page pb-12 space-y-4 text-foreground/80">
        {project.description.map((para, i) => (
          <p key={i} className="max-w-2xl">
            {para}
          </p>
        ))}
      </section>

      {project.screenshots.length > 0 && (
        <section className="container-page pb-16">
          <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {project.screenshots.map((shot) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                width={1280}
                height={800}
                loading="lazy"
                className="h-[360px] w-auto flex-none rounded-xl border border-foreground/10 snap-start"
              />
            ))}
          </div>
        </section>
      )}

      <section className="container-page py-12 border-t border-foreground/10">
        <p className="text-foreground/70">
          Press and partnership enquiries:{" "}
          <a
            href="mailto:info@calynix.com"
            className="underline hover:no-underline"
          >
            info@calynix.com
          </a>
        </p>
      </section>
    </div>
  );
}
