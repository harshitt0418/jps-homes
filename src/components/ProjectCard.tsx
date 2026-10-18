import { Link } from "@tanstack/react-router";
import { ArrowRight, Building, MapPin, ShieldCheck } from "lucide-react";

import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isIllustrative = project.heroImage.isIllustrative;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      {/* Image Banner */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.heroImage.url}
          alt={project.heroImage.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground shadow-sm">
            {project.developer}
          </span>
          <span className="rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
            {project.category}
          </span>
        </div>

        {/* Photo Attribution Badge */}
        <span className="absolute bottom-2.5 right-2.5 rounded bg-background/90 px-2 py-0.5 text-[10px] font-medium text-foreground backdrop-blur">
          {isIllustrative ? "Illustrative image" : "Actual project photo"}
        </span>
      </div>

      {/* Body Details */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex-1">
          <h3 className="font-serif text-lg font-bold text-foreground transition-colors group-hover:text-primary">
            {project.name}
          </h3>

          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="truncate">{project.location}</span>
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.configurations.slice(0, 3).map((config) => (
              <span
                key={config}
                className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground"
              >
                {config}
              </span>
            ))}
            {project.configurations.length > 3 && (
              <span className="inline-flex items-center rounded-md bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground">
                +{project.configurations.length - 3} more
              </span>
            )}
          </div>

          <div className="mt-3 flex items-start gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/80" />
            <span className="line-clamp-1">{project.rera}</span>
          </div>
        </div>

        {/* Card Footer: Price & CTA */}
        <div className="mt-5 flex items-center justify-between gap-2 border-t border-border pt-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Pricing</p>
            <p className="font-serif text-base font-bold text-primary">
              {project.price ?? "Contact JPS for details"}
            </p>
          </div>
          <Link
            to="/projects/$groupSlug/$projectSlug"
            params={{ groupSlug: project.groupSlug, projectSlug: project.projectSlug }}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
          >
            <span>View Details</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
