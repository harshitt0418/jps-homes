import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Globe,
  Home,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import { ProjectCard } from "@/components/ProjectCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getGroupBySlug, getProjectsByGroup } from "@/data/projects";

export const Route = createFileRoute("/projects/$groupSlug/")({
  head: ({ params }) => {
    const group = getGroupBySlug(params.groupSlug);
    const title = group
      ? `${group.name} Projects in Lucknow — JPS Real Estates`
      : "Developer Group";
    const description = group
      ? group.shortDescription
      : "Verified residential and commercial developments in Lucknow.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  loader: ({ params }) => {
    const group = getGroupBySlug(params.groupSlug);
    if (!group) {
      throw notFound();
    }
    const projects = getProjectsByGroup(params.groupSlug);
    return { group, projects };
  },
  component: DeveloperGroupPage,
  notFoundComponent: GroupNotFound,
});

function GroupNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
        <Building2 className="mx-auto h-12 w-12 text-muted-foreground/60" />
        <h1 className="mt-4 font-serif text-3xl font-bold">Developer Group Not Found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The requested developer or township group is not currently in our catalogue.
        </p>
        <div className="mt-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Developers</span>
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

function DeveloperGroupPage() {
  const { group, projects } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Breadcrumb Navigation */}
      <div className="border-b border-border bg-secondary/40 py-2.5">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 text-xs text-muted-foreground sm:px-6">
          <Link to="/" className="flex items-center gap-1 hover:text-primary">
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
          <Link to="/projects" className="hover:text-primary">
            Projects
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
          <span className="font-semibold text-foreground">{group.name}</span>
        </div>
      </div>

      {/* Group Hero Header */}
      <section className="relative border-b border-border bg-card py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            {/* Developer branding and info */}
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-white p-2 shadow-sm">
                  <img
                    src={group.logo}
                    alt={`${group.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {group.name}
                    </h1>
                    <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                      <CheckCircle2 className="h-3 w-3" />
                      Verified Builder
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Lucknow Portfolio · {projects.length}{" "}
                    {projects.length === 1 ? "Documented Project" : "Documented Projects"}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {group.fullOverview}
              </p>

              {/* Developer Metadata */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                {group.established && (
                  <div className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary/50 px-3 py-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    <span>Established: {group.established}</span>
                  </div>
                )}
                {group.headquarters && (
                  <div className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary/50 px-3 py-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    <span className="line-clamp-1">{group.headquarters}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary/50 px-3 py-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  <span>Verified: {group.lastVerified}</span>
                </div>
              </div>
            </div>

            {/* Right Card: Quick Actions & Official Source */}
            <div className="w-full shrink-0 rounded-2xl border border-border bg-secondary/30 p-5 md:max-w-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                JPS Advisory Desk
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Need current floor plans, allotment updates, or site visit scheduling for{" "}
                {group.name}?
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="/#contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                >
                  Request Builder Price Sheet
                </a>
                <Link
                  to="/projects"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-card px-4 py-2 text-xs font-medium text-foreground hover:bg-accent"
                >
                  <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
                  All Developers
                </Link>
              </div>

              {group.officialWebsite && (
                <div className="mt-4 border-t border-border pt-3">
                  <p className="text-[10px] text-muted-foreground">
                    First-party official reference:
                  </p>
                  <a
                    href={group.officialWebsite}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:underline"
                  >
                    <Globe className="h-3 w-3" />
                    <span className="truncate">{group.officialWebsite}</span>
                    <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Portfolio Listings
            </p>
            <h2 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
              {group.name} Developments in Lucknow
            </h2>
          </div>
          <p className="text-xs text-muted-foreground">
            Displaying {projects.length} verified developments
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.projectSlug} project={project} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border p-12 text-center">
            <p className="font-serif text-lg font-semibold text-foreground">
              No projects currently listed for {group.name}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Please check back soon or contact JPS Real Estates directly for upcoming launches.
            </p>
          </div>
        )}
      </section>

      {/* Disclaimer Section */}
      <section className="border-t border-border bg-secondary/20 py-8">
        <div className="mx-auto max-w-7xl px-4 text-xs leading-relaxed text-muted-foreground sm:px-6">
          <p>
            <span className="font-semibold text-foreground">Verification Note:</span> All details,
            including RERA phase numbers, unit configurations, and amenities for {group.name}, are
            transcribed directly from official developer public portals and UP-RERA filings. JPS
            Real Estates does not alter official figures. Unverified pricing is omitted or shown on
            direct request to protect customer integrity.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
