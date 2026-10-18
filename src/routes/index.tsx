import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  Hop as Home,
  Landmark,
  ShieldCheck,
  KeyRound,
  Handshake,
  ArrowRight,
  Lock,
} from "lucide-react";

import logoAsset from "@/assets/jps-logo.jpeg";
import heroImg from "@/assets/hero.jpg";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { useLeads } from "@/hooks/use-leads";
import { getAllGroups, getProjectsByGroup } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JPS Real Estates — Trusted Property Dealer in Gomti Nagar, Lucknow" },
      {
        name: "description",
        content:
          "JPS Real Estates (JPS Associate), led by Jitendra Pratap Singh, helps you buy, sell and invest in premium homes, villas and plots across Lucknow. Office: 3/104 Viram Khand, Gomti Nagar, Lucknow.",
      },
      { property: "og:title", content: "JPS Real Estates — Lucknow Property Experts" },
      {
        property: "og:description",
        content:
          "Premium apartments, villas and plots in Gomti Nagar and across Lucknow. Visit us at 3/104 Viram Khand, Gomti Nagar, Lucknow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const locations = [
  { name: "Gomti Nagar" },
  { name: "Gomti Nagar Extension" },
  { name: "Hazratganj" },
  { name: "Indira Nagar" },
  { name: "Aliganj" },
  { name: "Sushant Golf City" },
  { name: "Shaheed Path" },
  { name: "Faizabad Road" },
];

const services = [
  {
    icon: Home,
    title: "Buy a Home",
    text: "Verified apartments, villas and plots matched to your budget and lifestyle.",
  },
  {
    icon: KeyRound,
    title: "Sell Your Property",
    text: "Right pricing, genuine buyers and complete paperwork support till registry.",
  },
  {
    icon: Landmark,
    title: "Investment Advisory",
    text: "High-growth corridors of Lucknow identified for safe, profitable investment.",
  },
  {
    icon: ShieldCheck,
    title: "Legal & Documentation",
    text: "Title verification, agreement drafting and registration handled end-to-end.",
  },
];

function Index() {
  const { addLead } = useLeads();
  const groups = getAllGroups();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoAsset}
              alt="JPS Real Estates logo"
              className="h-11 w-11 rounded-md object-cover"
            />
            <div className="leading-tight">
              <p className="font-serif text-lg font-bold tracking-wide">JPS Real Estates</p>
              <p className="text-xs text-muted-foreground">JPS Associate · Lucknow</p>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a
              href="#featured-collection"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Featured Collection
            </a>
            <a
              href="#locations"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Locations
            </a>
            <a
              href="#services"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
            >
              Book a Visit
            </a>
            <Link
              to="/admin"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-accent hover:text-primary"
            >
              <Lock className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Admin</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Premium residential community in Lucknow"
            className="animate-ken-burns h-full w-full object-cover"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center gap-12 px-4 py-28 sm:px-6 md:py-36 lg:flex-row lg:items-center">
          {/* Left: headline + CTAs */}
          <div className="flex-1">
            <p className="animate-fade-up mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
              <Building2 className="h-3.5 w-3.5" /> Lucknow's Trusted Property Partner
            </p>
            <h1
              className="animate-fade-up max-w-2xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
              style={{ animationDelay: "150ms" }}
            >
              Find Your Dream Home in the Heart of Lucknow
            </h1>
            <p
              className="animate-fade-up mt-5 max-w-xl text-base text-white/85 sm:text-lg"
              style={{ animationDelay: "300ms" }}
            >
              From premium apartments in Gomti Nagar to gated plots on Faizabad Road — JPS Real
              Estates guides you to the right property with complete transparency.
            </p>
            <div
              className="animate-fade-up mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "450ms" }}
            >
              <a
                href="#featured-collection"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore Featured Collection <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Talk to Us
              </a>
            </div>
          </div>

          {/* Right: lead capture card */}
          <div
            className="animate-fade-up w-full max-w-sm shrink-0 lg:max-w-md"
            style={{ animationDelay: "600ms" }}
          >
            <LeadForm variant="hero" onSubmit={(d) => addLead({ ...d, source: "hero" })} />
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="featured-collection" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <span id="projects" className="sr-only" />
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Featured Collection
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
                Lucknow Developer Collections & Townships
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Browse verified real estate collections by developer groups and master townships
              across Lucknow. Verified against first-party public records and UP-RERA.
            </p>
          </div>
        </Reveal>
        <p className="mb-8 max-w-4xl border-l-2 border-primary pl-4 text-xs leading-relaxed text-muted-foreground">
          Every collection brings together documented developments from that group. Click any
          collection card to explore all associated properties, verified specifications, floor
          plans, and UP-RERA phase registrations.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => {
            const groupProjects = getProjectsByGroup(group.slug);

            return (
              <Reveal key={group.slug} delay={(i % 3) * 100} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                  {/* Cover Image & Logo */}
                  <Link
                    to="/projects/$groupSlug"
                    params={{ groupSlug: group.slug }}
                    className="relative block aspect-[16/9] w-full overflow-hidden bg-muted"
                  >
                    <img
                      src={group.coverImage}
                      alt={`${group.name} collection cover`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Logo & Group Name overlay */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/95 p-1 shadow-lg backdrop-blur">
                        <img
                          src={group.logo}
                          alt={`${group.name} logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-white drop-shadow">
                          {group.name}
                        </h3>
                        {group.established && (
                          <p className="text-[11px] text-white/80">Est. {group.established}</p>
                        )}
                      </div>
                    </div>

                    {/* Project Count Badge */}
                    <div className="absolute right-3 top-3 rounded-full bg-primary/95 px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md backdrop-blur">
                      {groupProjects.length} {groupProjects.length === 1 ? "Project" : "Projects"}
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                        {group.shortDescription}
                      </p>

                      {/* Featured Properties Pills */}
                      <div className="mt-4 border-t border-border/60 pt-4">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Featured Properties:
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {groupProjects.slice(0, 3).map((p) => (
                            <Link
                              key={p.projectSlug}
                              to="/projects/$groupSlug/$projectSlug"
                              params={{ groupSlug: group.slug, projectSlug: p.projectSlug }}
                              className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                            >
                              {p.name}
                            </Link>
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
                        <span>Explore Collection ({groupProjects.length})</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Where We Operate
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
            Popular Locations in Lucknow
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {locations.map((l, i) => (
              <Reveal key={l.name} delay={(i % 4) * 80} className="h-full">
                <a
                  href="#contact"
                  className="group block h-full rounded-xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-md"
                >
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-semibold group-hover:text-primary">{l.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Lucknow</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">What We Do</p>
        <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
          End-to-End Property Services
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 100} className="h-full">
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
                Get in Touch
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
                Visit Our Office in Gomti Nagar
              </h2>
              <p className="mt-4 max-w-md text-sm text-primary-foreground/80">
                Drop by for a cup of chai and an honest conversation about your property goals. We
                are happy to arrange site visits across Lucknow.
              </p>
              <div className="mt-8 space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <Handshake className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Jitendra Pratap Singh</p>
                    <p className="text-primary-foreground/75">
                      Proprietor, JPS Real Estates (JPS Associate)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                  <p>3/104 Viram Khand, Gomti Nagar, Lucknow, Uttar Pradesh</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <p>+91 73552 23299</p>
                    <p>+91 96963 32889</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" />
                  <p>contact@jpsrealestates.in</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <LeadForm variant="contact" onSubmit={(d) => addLead({ ...d, source: "contact" })} />
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset}
              alt="JPS Real Estates logo"
              className="h-9 w-9 rounded-md object-cover"
              loading="lazy"
            />
            <p className="font-serif font-bold text-foreground">JPS Real Estates</p>
          </div>
          <p>
            3/104 Viram Khand, Gomti Nagar, Lucknow · © {new Date().getFullYear()} JPS Real Estates
          </p>
        </div>
      </footer>
    </div>
  );
}
