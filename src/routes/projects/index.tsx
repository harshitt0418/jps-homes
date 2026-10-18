import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Home,
  MapPin,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getAllGroups, getAllProjects, getProjectsByGroup } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Developer Groups & Projects Catalogue — JPS Real Estates" },
      {
        name: "description",
        content:
          "Explore Lucknow's leading developer groups and master townships: Rishita Developers, Omaxe, Pintail, Emaar India, Migsun Group, and Sushant Golf City (Ansal API).",
      },
    ],
  }),
  component: ProjectsCataloguePage,
});

function ProjectsCataloguePage() {
  const groups = getAllGroups();
  const allProjects = getAllProjects();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGroups = useMemo(() => {
    if (!searchTerm.trim()) return groups;
    const term = searchTerm.toLowerCase();
    return groups.filter((g) => {
      const projs = getProjectsByGroup(g.slug);
      const matchesGroup =
        g.name.toLowerCase().includes(term) || g.shortDescription.toLowerCase().includes(term);
      const matchesProj = projs.some(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.location.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term),
      );
      return matchesGroup || matchesProj;
    });
  }, [groups, searchTerm]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Breadcrumb Bar */}
      <div className="border-b border-border bg-secondary/40 py-2.5">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 text-xs text-muted-foreground sm:px-6">
          <Link to="/" className="flex items-center gap-1 hover:text-primary">
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
          <span className="font-semibold text-foreground">Projects Catalogue</span>
        </div>
      </div>

      {/* Catalogue Hero */}
      <section className="border-b border-border bg-gradient-to-b from-secondary/50 via-background to-background py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Building2 className="h-3.5 w-3.5" />
              Verified Developer Catalogue
            </div>
            <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Lucknow Real Estate Groups & Townships
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Browse top property developers and integrated townships across Gomti Nagar Extension,
              Sushant Golf City, Raebareli Road, and Amar Shaheed Path. Every listing is backed by
              first-party public records and UP-RERA registration.
            </p>

            {/* Quick Stats Banner */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold text-primary">{groups.length}</span>
                <span className="text-xs text-muted-foreground">Leading Groups</span>
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold text-primary">
                  {allProjects.length}
                </span>
                <span className="text-xs text-muted-foreground">Documented Projects</span>
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">
                  100% Localized Public Imagery
                </span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-8 max-w-md">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by developer, project or location..."
                className="w-full rounded-xl border border-input bg-card py-2.5 pl-10 pr-4 text-sm text-foreground shadow-sm placeholder:text-muted-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Developer Group Cards Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredGroups.map((group) => {
            const groupProjects = getProjectsByGroup(group.slug);

            return (
              <div
                key={group.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
              >
                {/* Cover Image & Logo */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                  <img
                    src={group.coverImage}
                    alt={`${group.name} cover`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Logo overlay */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/95 p-1 shadow-lg backdrop-blur">
                      <img
                        src={group.logo}
                        alt={`${group.name} logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="font-serif text-lg font-bold text-white drop-shadow">
                        {group.name}
                      </h2>
                      {group.established && (
                        <p className="text-[11px] text-white/80">Est. {group.established}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Count Badge */}
                  <div className="absolute right-3 top-3 rounded-full bg-primary/95 px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md backdrop-blur">
                    {groupProjects.length} {groupProjects.length === 1 ? "Project" : "Projects"}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                      {group.shortDescription}
                    </p>

                    {/* Quick highlights */}
                    <div className="mt-4 border-t border-border/60 pt-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Featured Properties:
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {groupProjects.slice(0, 3).map((p) => (
                          <span
                            key={p.projectSlug}
                            className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground"
                          >
                            {p.name}
                          </span>
                        ))}
                        {groupProjects.length > 3 && (
                          <span className="inline-flex items-center rounded-md bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground">
                            +{groupProjects.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="mt-6 border-t border-border pt-4">
                    <Link
                      to="/projects/$groupSlug"
                      params={{ groupSlug: group.slug }}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                    >
                      <span>View Projects</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredGroups.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border p-12 text-center">
            <p className="font-serif text-lg font-semibold text-foreground">
              No developer groups found matching "{searchTerm}"
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Try searching for "Rishita", "Omaxe", "Pintail", "Emaar", "Migsun", or "Golf City".
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* Advisory Banner */}
      <section className="border-t border-border bg-secondary/30 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left">
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Need Help Choosing the Right Developer?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              JPS Real Estates offers unbiased guidance, private site tours, and verified registry
              checks across Lucknow.
            </p>
          </div>
          <a
            href="/#contact"
            className="shrink-0 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
          >
            Speak with Jitendra Pratap Singh
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
