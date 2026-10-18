import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Compass,
  Download,
  ExternalLink,
  Eye,
  FileCheck,
  FileText,
  Home,
  Info,
  Layers,
  MapPin,
  Phone,
  Printer,
  Ruler,
  Share2,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

import { ProjectCard } from "@/components/ProjectCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getGroupBySlug, getProjectBySlug, getProjectsByGroup } from "@/data/projects";

export const Route = createFileRoute("/projects/$groupSlug/$projectSlug")({
  head: ({ params }) => {
    const project = getProjectBySlug(params.groupSlug, params.projectSlug);
    const title = project
      ? `${project.name} by ${project.developer} — Lucknow | JPS Real Estates`
      : "Project Details";
    const description = project
      ? `${project.name} in ${project.location}. ${project.configurations.join(", ")}. RERA: ${project.rera}. Verified by JPS Real Estates.`
      : "Property details in Lucknow.";
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
    const project = getProjectBySlug(params.groupSlug, params.projectSlug);
    if (!group || !project) {
      throw notFound();
    }
    const relatedProjects = getProjectsByGroup(group.slug)
      .filter((p) => p.projectSlug !== project.projectSlug)
      .slice(0, 3);
    return { group, project, relatedProjects };
  },
  component: ProjectDetailPage,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
        <Building2 className="mx-auto h-12 w-12 text-muted-foreground/60" />
        <h1 className="mt-4 font-serif text-3xl font-bold">Project Not Found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The project you are looking for does not exist or has been relocated.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/"
            hash="featured-collection"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Featured Collection</span>
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

function ProjectDetailPage() {
  const { group, project, relatedProjects } = Route.useLoaderData();

  // Gallery state: active main image
  const allImages = [project.heroImage, ...(project.galleryImages || [])];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const currentImage = allImages[activeImageIndex] || project.heroImage;

  // Selected floor plan preview
  const [activePlanIndex, setActivePlanIndex] = useState(0);

  // Brochure modal state
  const [showBrochure, setShowBrochure] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Breadcrumb Bar */}
      <div className="border-b border-border bg-secondary/40 py-2.5">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 text-xs text-muted-foreground sm:px-6">
          <Link to="/" className="flex shrink-0 items-center gap-1 hover:text-primary">
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
          <Link to="/" hash="featured-collection" className="shrink-0 hover:text-primary">
            Featured Collection
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
          <Link
            to="/projects/$groupSlug"
            params={{ groupSlug: group.slug }}
            className="shrink-0 hover:text-primary"
          >
            {group.name}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
          <span className="shrink-0 font-semibold text-foreground">{project.name}</span>
        </div>
      </div>

      {/* Hero & Gallery Section */}
      <section className="border-b border-border bg-card py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Gallery Column (7 cols) */}
            <div className="lg:col-span-7">
              {/* Main Featured Visual */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-muted shadow-md">
                <img
                  src={currentImage.url}
                  alt={currentImage.alt}
                  className="h-full w-full object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Badges on main image */}
                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow">
                    {project.developer}
                  </span>
                  <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {project.status}
                  </span>
                </div>

                {/* Illustrative vs Actual Badge */}
                <div className="absolute bottom-3 right-3 rounded-lg bg-background/90 px-2.5 py-1 text-[11px] font-medium text-foreground shadow backdrop-blur">
                  {currentImage.isIllustrative ? "Illustrative visual" : "Actual project photo"}
                </div>

                {/* Caption if provided */}
                {currentImage.caption && (
                  <div className="absolute bottom-3 left-3 max-w-[70%] rounded-lg bg-black/70 px-2.5 py-1 text-[11px] text-white backdrop-blur">
                    {currentImage.caption}
                  </div>
                )}
              </div>

              {/* Gallery Thumbnails Strip */}
              {allImages.length > 1 && (
                <div className="mt-3 flex gap-2.5 overflow-x-auto pb-2">
                  {allImages.map((img, idx) => (
                    <button
                      key={img.url}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-[4/3] h-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                        activeImageIndex === idx
                          ? "border-primary ring-2 ring-primary/30"
                          : "border-border opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={img.url} alt={img.alt} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Summary Column (5 cols) */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <div className="flex items-center gap-2">
                  <Link
                    to="/projects/$groupSlug"
                    params={{ groupSlug: group.slug }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
                  >
                    <Building2 className="h-3.5 w-3.5" />
                    <span>{project.developer}</span>
                  </Link>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{project.status}</span>
                </div>

                <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {project.name}
                </h1>

                <p className="mt-2 flex items-start gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{project.address || project.location}</span>
                </p>

                {/* Status & Timeline Overview Block */}
                <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Project Status & Timeline
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-serif text-xl font-bold text-foreground sm:text-2xl">
                      {project.status}
                    </span>
                  </div>
                  {project.possessionDate && (
                    <p className="mt-1 text-[11px] font-medium text-muted-foreground">
                      Possession: {project.possessionDate}
                    </p>
                  )}
                  {project.acreage && (
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      Site Parcel: {project.acreage}
                    </p>
                  )}
                </div>

                {/* Key Spec Grid */}
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl border border-border bg-card p-3">
                    <span className="text-muted-foreground">Category</span>
                    <p className="mt-1 font-semibold text-foreground">{project.category}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-3">
                    <span className="text-muted-foreground">Configurations</span>
                    <p className="mt-1 font-semibold text-foreground">
                      {project.configurations.join(", ")}
                    </p>
                  </div>
                  {project.areaRanges && (
                    <div className="rounded-xl border border-border bg-card p-3">
                      <span className="text-muted-foreground">Sizes / Super Area</span>
                      <p className="mt-1 font-semibold text-foreground">{project.areaRanges}</p>
                    </div>
                  )}
                  <div className="rounded-xl border border-border bg-card p-3">
                    <span className="text-muted-foreground">Possession / Status</span>
                    <p className="mt-1 font-semibold text-foreground">{project.status}</p>
                  </div>
                </div>

                {/* RERA Registration */}
                <div className="mt-4 flex items-start gap-2 rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <span className="font-semibold text-foreground">UP-RERA Registration:</span>
                    <p className="mt-0.5 text-muted-foreground">{project.rera}</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions: Download Brochure CTA Buttons */}
              <div className="mt-6 flex flex-wrap gap-2.5 pt-4">
                <button
                  type="button"
                  onClick={() => setShowBrochure(true)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Brochure</span>
                </button>
                <Link
                  to="/projects/$groupSlug"
                  params={{ groupSlug: group.slug }}
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-4 py-3 text-xs font-medium text-foreground hover:bg-accent"
                >
                  <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
                  <span>Back to {group.name}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main Info Column (8 cols) */}
          <div className="space-y-12 lg:col-span-8">
            {/* Overview */}
            <section>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <h2 className="font-serif text-2xl font-bold">Project Overview</h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.overview}
              </p>
            </section>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h2 className="font-serif text-2xl font-bold">Key Highlights</h2>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2.5 rounded-xl border border-border/70 bg-secondary/40 p-3 text-xs leading-relaxed"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="font-medium text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Connectivity & Location Advantages */}
            {project.connectivity && project.connectivity.length > 0 && (
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h2 className="font-serif text-2xl font-bold">Connectivity & Proximity</h2>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Verified travel times and distance to key Lucknow infrastructure hubs.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.connectivity.map((conn) => (
                    <div
                      key={conn.landmark}
                      className="flex items-center justify-between rounded-xl border border-border/70 bg-secondary/30 p-3.5 text-xs"
                    >
                      <span className="font-medium text-foreground">{conn.landmark}</span>
                      <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary shrink-0">
                        {conn.distanceOrTime}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Technical Specifications */}
            {project.specifications && project.specifications.length > 0 && (
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Ruler className="h-5 w-5 text-primary" />
                  <h2 className="font-serif text-2xl font-bold">Architectural Specifications</h2>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Official engineering and civil specifications verified from developer filings.
                </p>
                <div className="mt-6 space-y-3">
                  {project.specifications.map((spec) => (
                    <div
                      key={spec.category}
                      className="rounded-xl border border-border/70 bg-secondary/20 p-4 text-xs"
                    >
                      <span className="font-semibold text-primary uppercase tracking-wider text-[11px]">
                        {spec.category}
                      </span>
                      <p className="mt-1 leading-relaxed text-muted-foreground">{spec.details}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Location & Layout Map Section */}
            {project.locationMapImage && (
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h2 className="font-serif text-2xl font-bold">Location & Layout Map</h2>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Official geographical location plan and layout map archived from first-party
                  developer filings.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl border border-border bg-muted">
                  <img
                    src={project.locationMapImage.url}
                    alt={project.locationMapImage.alt}
                    className="max-h-[550px] w-full bg-white object-contain"
                    loading="lazy"
                  />
                </div>

                {project.locationMapImage.caption && (
                  <p className="mt-2.5 text-center text-xs font-medium text-muted-foreground">
                    {project.locationMapImage.caption}
                  </p>
                )}
              </section>
            )}

            {/* Amenities Section */}
            {project.amenities && project.amenities.length > 0 && (
              <section>
                <div className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  <h2 className="font-serif text-2xl font-bold">Amenities & Facilities</h2>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                  {project.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 rounded-xl border border-border bg-card p-3 text-xs font-medium text-foreground shadow-sm transition-colors hover:border-primary/50"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        •
                      </span>
                      <span className="line-clamp-2">{amenity}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Floor Plans & Master Plan Section */}
            {((project.floorPlans && project.floorPlans.length > 0) || project.masterPlanImage) && (
              <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Compass className="h-5 w-5 text-primary" />
                  <h2 className="font-serif text-2xl font-bold">Floor Plans & Master Layout</h2>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Official architectural layouts archived locally from developer filings.
                </p>

                {/* Master plan if present */}
                {project.masterPlanImage && (
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-foreground">Master Layout Plan</h3>
                    <div className="mt-2 overflow-hidden rounded-xl border border-border bg-muted">
                      <img
                        src={project.masterPlanImage.url}
                        alt={project.masterPlanImage.alt}
                        className="max-h-[500px] w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}

                {/* Floor Plans tabs / list */}
                {project.floorPlans && project.floorPlans.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold text-foreground">Unit Floor Plans</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.floorPlans.map((fp, idx) => (
                        <button
                          key={fp.title}
                          type="button"
                          onClick={() => setActivePlanIndex(idx)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                            activePlanIndex === idx
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "border border-border bg-secondary/50 text-foreground hover:bg-secondary"
                          }`}
                        >
                          {fp.title}
                        </button>
                      ))}
                    </div>

                    {project.floorPlans[activePlanIndex] && (
                      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-muted p-2">
                        <div className="mb-2 flex items-center justify-between px-2 pt-1 text-xs text-muted-foreground">
                          <span className="font-semibold text-foreground">
                            {project.floorPlans[activePlanIndex].title}
                          </span>
                          {project.floorPlans[activePlanIndex].area && (
                            <span>{project.floorPlans[activePlanIndex].area}</span>
                          )}
                        </div>
                        <img
                          src={project.floorPlans[activePlanIndex].image}
                          alt={project.floorPlans[activePlanIndex].alt}
                          className="max-h-[500px] w-full rounded-lg bg-white object-contain"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Right Column: Download Brochure Dossier Card & Related Projects (4 cols) */}
          <div className="space-y-8 lg:col-span-4">
            {/* Official Project Brochure & Dossier Card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-md">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Download className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold">Project Brochure</h3>
                  <p className="text-xs text-muted-foreground">Official builder dossier</p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Download the complete official project brochure including architectural floor plans,
                master layout, UP-RERA registration documents, and amenities guide.
              </p>

              <div className="mt-5 space-y-2.5">
                <button
                  type="button"
                  onClick={() => setShowBrochure(true)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Project Brochure</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowBrochure(true)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary/50 py-2.5 text-xs font-medium text-foreground hover:bg-secondary"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>View Digital Brochure</span>
                </button>
              </div>

              <div className="mt-5 border-t border-border pt-4">
                <p className="text-[11px] font-semibold text-foreground">Included in Brochure:</p>
                <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>Complete Master Plan & Tower Layouts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>Unit Dimension Floor Plans & Super Area</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>UP-RERA Phase Registration Details</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>Club & Community Amenities Matrix</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-3.5 text-xs">
                <p className="font-semibold text-foreground">Need Personalized Assistance?</p>
                <p className="mt-1 text-muted-foreground">
                  JPS Real Estates provides expert guidance on allotment procedures and verified
                  property documents.
                </p>
                <a
                  href="tel:+917355223299"
                  className="mt-3 inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>+91 73552 23299</span>
                </a>
              </div>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-serif text-lg font-bold">More by {group.name}</h3>
                <p className="text-xs text-muted-foreground">Other projects in Lucknow</p>
                <div className="mt-4 space-y-4">
                  {relatedProjects.map((rel) => (
                    <Link
                      key={rel.projectSlug}
                      to="/projects/$groupSlug/$projectSlug"
                      params={{ groupSlug: group.slug, projectSlug: rel.projectSlug }}
                      className="group flex items-center gap-3 rounded-xl border border-border/70 p-2.5 transition-all hover:border-primary hover:bg-secondary/40"
                    >
                      <img
                        src={rel.heroImage.url}
                        alt={rel.heroImage.alt}
                        className="h-14 w-14 rounded-lg object-cover"
                      />
                      <div className="flex-1 overflow-hidden">
                        <p className="truncate text-xs font-bold text-foreground group-hover:text-primary">
                          {rel.name}
                        </p>
                        <p className="truncate text-[11px] text-muted-foreground">{rel.location}</p>
                        <p className="truncate text-[11px] font-medium text-muted-foreground">
                          {rel.status}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-4 border-t border-border pt-3">
                  <Link
                    to="/projects/$groupSlug"
                    params={{ groupSlug: group.slug }}
                    className="inline-flex w-full items-center justify-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>View all {group.name} projects</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Information Sources & Last Verified Section (Required for Transparency) */}
      <section className="border-t border-border bg-secondary/30 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4 text-primary" />
            <h3 className="font-serif text-base font-bold text-foreground">
              Information Sources & Public Verification
            </h3>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            In accordance with JPS Real Estates transparency guidelines, all data and visuals above
            are mirrored from first-party developer portals and UP-RERA public disclosures.
          </p>

          <div className="mt-4 grid gap-4 rounded-xl border border-border bg-card p-4 text-xs sm:grid-cols-2">
            <div>
              <span className="font-semibold text-foreground">Public Source Reference URLs:</span>
              <ul className="mt-1.5 space-y-1">
                {project.sourceUrls.map((url, i) => (
                  <li key={i} className="truncate">
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3 shrink-0" />
                      <span className="truncate">{url}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Last Verified:</span>
                <span className="rounded bg-secondary px-2 py-0.5 font-medium text-foreground">
                  {project.lastVerified}
                </span>
              </div>
              <p className="mt-2 text-muted-foreground">
                Phase completions and inventory availability are subject to dynamic updates by the
                developer and regulatory bodies. Visitors should confirm exact terms before making
                commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Brochure Modal / Print View */}
      {showBrochure && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm print:relative print:p-0">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8 print:max-h-none print:border-none print:shadow-none">
            {/* Modal Header Actions */}
            <div className="mb-6 flex items-center justify-between border-b border-border pb-4 print:hidden">
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-primary" />
                <h3 className="font-serif text-lg font-bold">Official Project Brochure Dossier</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>Print / Save as PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowBrochure(false)}
                  className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Printable Brochure Document */}
            <div className="space-y-6">
              {/* Document Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    JPS Real Estates · Verified Real Estate Catalogue
                  </p>
                  <h1 className="mt-1 font-serif text-3xl font-bold text-foreground">
                    {project.name}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Developed by {project.developer} · {project.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {project.status}
                  </span>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Verified: {project.lastVerified}
                  </p>
                </div>
              </div>

              {/* Visual Hero */}
              <div className="overflow-hidden rounded-xl border border-border bg-muted">
                <img
                  src={project.heroImage.url}
                  alt={project.heroImage.alt}
                  className="max-h-[350px] w-full object-cover"
                />
              </div>

              {/* RERA and Official Specs Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs sm:grid-cols-4">
                <div className="rounded-xl border border-border bg-secondary/30 p-3">
                  <span className="text-muted-foreground">Category</span>
                  <p className="mt-1 font-semibold text-foreground">{project.category}</p>
                </div>
                <div className="rounded-xl border border-border bg-secondary/30 p-3">
                  <span className="text-muted-foreground">Configurations</span>
                  <p className="mt-1 font-semibold text-foreground">
                    {project.configurations.join(", ")}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-secondary/30 p-3">
                  <span className="text-muted-foreground">Site Parcel</span>
                  <p className="mt-1 font-semibold text-foreground">
                    {project.acreage ?? "Township Master Plan"}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-secondary/30 p-3">
                  <span className="text-muted-foreground">Possession / Status</span>
                  <p className="mt-1 font-semibold text-foreground">{project.status}</p>
                </div>
              </div>

              {/* RERA Compliance Box */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs">
                <p className="font-semibold text-foreground">UP-RERA Registration Certification</p>
                <p className="mt-1 font-mono text-muted-foreground">{project.rera}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  Site Address: {project.address || project.location}
                </p>
              </div>

              {/* Overview */}
              <div>
                <h4 className="font-serif text-base font-bold text-foreground">Project Overview</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {project.overview}
                </p>
              </div>

              {/* Key Connectivity */}
              {project.connectivity && project.connectivity.length > 0 && (
                <div>
                  <h4 className="font-serif text-base font-bold text-foreground">
                    Location Advantages & Connectivity
                  </h4>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                    {project.connectivity.map((c) => (
                      <div
                        key={c.landmark}
                        className="flex items-center justify-between rounded-lg border border-border/70 bg-secondary/20 p-2.5"
                      >
                        <span className="font-medium text-foreground">{c.landmark}</span>
                        <span className="font-semibold text-primary">{c.distanceOrTime}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Amenities */}
              {project.amenities && project.amenities.length > 0 && (
                <div>
                  <h4 className="font-serif text-base font-bold text-foreground">
                    Lifestyle Amenities & Facilities
                  </h4>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs sm:grid-cols-3">
                    {project.amenities.map((a) => (
                      <div
                        key={a}
                        className="flex items-center gap-2 rounded-lg border border-border/70 p-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="truncate">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Location Map Visual in Brochure */}
              {project.locationMapImage && (
                <div>
                  <h4 className="font-serif text-base font-bold text-foreground">
                    Location & Layout Map
                  </h4>
                  <div className="mt-2 overflow-hidden rounded-xl border border-border bg-muted">
                    <img
                      src={project.locationMapImage.url}
                      alt={project.locationMapImage.alt}
                      className="max-h-[350px] w-full bg-white object-contain"
                    />
                  </div>
                  {project.locationMapImage.caption && (
                    <p className="mt-1.5 text-center text-[11px] text-muted-foreground">
                      {project.locationMapImage.caption}
                    </p>
                  )}
                </div>
              )}

              {/* Master Plan Visual in Brochure */}
              {project.masterPlanImage && (
                <div>
                  <h4 className="font-serif text-base font-bold text-foreground">
                    Master Layout Plan
                  </h4>
                  <div className="mt-2 overflow-hidden rounded-xl border border-border bg-muted">
                    <img
                      src={project.masterPlanImage.url}
                      alt={project.masterPlanImage.alt}
                      className="max-h-[350px] w-full bg-white object-contain"
                    />
                  </div>
                </div>
              )}

              {/* Disclaimer / Footer */}
              <div className="border-t border-border pt-4 text-[11px] text-muted-foreground">
                <p>
                  Compiled by JPS Real Estates (Proprietor: Jitendra Singh · Contact: +91 73552
                  23299). Data sourced from official developer public filings and UP-RERA portals.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
