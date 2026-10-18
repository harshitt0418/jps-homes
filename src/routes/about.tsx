import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Compass,
  FileCheck,
  Handshake,
  HeartHandshake,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";

import proprietorImg from "@/assets/about/jitendra-pratap-singh.jpg";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useLeads } from "@/hooks/use-leads";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About JPS Real Estates | 18+ Years of Lucknow Real Estate Experience",
      },
      {
        name: "description",
        content:
          "Founded by Jitendra Pratap Singh with over 18 years of hands-on Lucknow real estate experience since 2007. Honest property guidance, end-to-end support, and verified properties across Gomti Nagar and key Lucknow corridors.",
      },
      {
        property: "og:title",
        content: "About JPS Real Estates — 18+ Years of Lucknow Real Estate Experience",
      },
      {
        property: "og:description",
        content:
          "Meet Jitendra Pratap Singh, Proprietor of JPS Real Estates. Straightforward property guidance, trusted developer collections, and long-term client relationships in Lucknow since 2007.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { addLead } = useLeads();

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
          <span className="font-semibold text-foreground">About Us</span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────
       * 1. HERO / INTRODUCTION
       * ───────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/30 via-background to-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Heading, Context & Action */}
            <div className="space-y-6 lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>18+ Years in Real Estate · Since 2007</span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl sm:leading-tight">
                  Experience You Can Trust. <br />
                  <span className="text-primary">Guidance You Can Rely On.</span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Since 2007, Jitendra Pratap Singh has helped homebuyers, investors, and families
                  make confident property decisions across Lucknow. With over 18 years of on-ground
                  real-estate experience, he combines local market knowledge with a straightforward,
                  client-first approach.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  At JPS Real Estates, the goal is not simply to close a deal. It is to understand
                  what each client needs, identify the right opportunity, and stay available through
                  every important step—from the first conversation to possession, registry, and
                  future property decisions.
                </p>
              </Reveal>

              <Reveal delay={400}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#meet-proprietor"
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-accent hover:text-primary"
                  >
                    <span>Meet the Proprietor</span>
                  </a>
                </div>
              </Reveal>

              {/* Quick Highlight Metrics */}
              <Reveal delay={500}>
                <div className="grid grid-cols-3 gap-4 border-t border-border pt-6 text-left">
                  <div>
                    <p className="font-serif text-2xl font-bold text-primary sm:text-3xl">18+</p>
                    <p className="text-xs text-muted-foreground">Years in Real Estate</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-bold text-primary sm:text-3xl">2007</p>
                    <p className="text-xs text-muted-foreground">Journey Inception</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-bold text-primary sm:text-3xl">
                      Lucknow
                    </p>
                    <p className="text-xs text-muted-foreground">Base: Gomti Nagar</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Portrait Photo Visual */}
            <div className="lg:col-span-5">
              <Reveal delay={250}>
                <div className="relative mx-auto max-w-md">
                  {/* Decorative backdrop glow */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-2xl" />

                  <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
                    <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                      <img
                        src={proprietorImg}
                        alt="Jitendra Pratap Singh, Proprietor of JPS Real Estates"
                        className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-102"
                      />
                    </div>

                    {/* Bottom identity tag */}
                    <div className="border-t border-border bg-card/95 p-5 backdrop-blur">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-foreground">
                            Jitendra Pratap Singh
                          </h3>
                          <p className="text-xs font-medium text-primary">
                            Proprietor, JPS Real Estates (JPS Associate)
                          </p>
                        </div>
                        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                          Since 2007
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Office: 3/104 Viram Khand, Gomti Nagar, Lucknow
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
       * 2. MEET THE PROPRIETOR
       * ───────────────────────────────────────────────────────────────── */}
      <section id="meet-proprietor" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Visual Portrait Card */}
            <div className="order-2 lg:order-1 lg:col-span-5">
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-lg sm:p-6">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                    <img
                      src={proprietorImg}
                      alt="Jitendra Pratap Singh, Proprietor of JPS Real Estates"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  {/* Badge */}
                  <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-secondary/70 p-3 text-center text-xs font-semibold text-foreground">
                    <Award className="h-4 w-4 text-primary shrink-0" />
                    <span>18+ Years of Real Estate Experience</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Biography & Philosophy */}
            <div className="order-1 space-y-6 lg:order-2 lg:col-span-7">
              <Reveal>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Meet the Proprietor
                  </p>
                  <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                    Jitendra Pratap Singh
                  </h2>
                  <p className="text-sm font-medium text-muted-foreground">
                    Proprietor, JPS Real Estates (JPS Associate) · Based in Gomti Nagar, Lucknow
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    Jitendra Pratap Singh began his real estate journey in 2007. Over the past 18+
                    years, he has witnessed Lucknow expand from traditional city enclaves into a
                    vibrant, modern metropolis anchored by world-class infrastructure along Amar
                    Shaheed Path, Sultanpur Road, Raebareli Road, and Gomti Nagar Extension.
                  </p>
                  <p>
                    Rather than operating as a high-pressure brokerage, Jitendra established JPS
                    Real Estates with a different ethos: genuine personal availability, honest
                    property matching, and meticulous verification of legality, titles, and
                    developer credibility.
                  </p>
                  <p className="rounded-xl border-l-4 border-primary bg-secondary/40 p-4 font-serif text-base italic text-foreground sm:text-lg">
                    “Whether you are buying your first home, investing in a plot, selling a
                    property, or planning your next move, JPS Real Estates offers practical guidance
                    built on experience, transparency, and long-term relationships.”
                  </p>
                  <p>
                    Every client receives direct consultation from Jitendra Singh himself—ensuring
                    uncompromised attention to family needs, budget constraints, and future capital
                    security.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 font-medium">
                    <UserCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>Direct Proprietor Access</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 font-medium">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    <span>Gomti Nagar Headquartered</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 font-medium">
                    <Calendar className="h-4 w-4 text-primary shrink-0" />
                    <span>Active Since 2007</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 font-medium">
                    <Handshake className="h-4 w-4 text-primary shrink-0" />
                    <span>No Pressure Selling</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
       * 3. EXPERIENCE TIMELINE
       * ───────────────────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-secondary/20 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Milestones & Dedication
              </p>
              <h2 className="mt-1 font-serif text-3xl font-bold sm:text-4xl">
                Experience Timeline
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Nearly two decades of hands-on real estate advisory across Lucknow's property
                landscape.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={100} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-bold text-foreground">Since 2007</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Professional journey commenced in Lucknow, providing foundational insight into
                    LDA master planning, private township developments, and changing city
                    demographics.
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-3">
                  <span className="text-[11px] font-semibold text-primary">
                    18+ Years Established
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-bold text-foreground">
                    18+ Years of Market Experience
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Deep understanding of market cycles, real valuations, zoning compliance, and
                    developer delivery track records, keeping clients protected from unverified
                    speculation.
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-3">
                  <span className="text-[11px] font-semibold text-primary">
                    Market-Tested Insight
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Compass className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-bold text-foreground">
                    Lucknow-Focused Property Guidance
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Hyper-local expertise centered on Gomti Nagar, Gomti Nagar Extension, Sushant
                    Golf City, Shaheed Path, Sultanpur Road, and Raebareli Road.
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-3">
                  <span className="text-[11px] font-semibold text-primary">
                    Hyper-Local Mastery
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-bold text-foreground">
                    Support Beyond the Sale
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Long-term client companionship encompassing documentation review, registry
                    facilitation, builder coordination, mutation guidance, and future resale
                    planning.
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-3">
                  <span className="text-[11px] font-semibold text-primary">
                    Lifelong Relationships
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
       * 4. WHY CLIENTS CHOOSE JPS
       * ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Values & Differentiators
              </p>
              <h2 className="mt-1 font-serif text-3xl font-bold sm:text-4xl">
                Why Clients Choose JPS Real Estates
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                In an industry often characterized by aggressive sales pitches, JPS Real Estates
                stands apart through honesty, precision matching, and genuine local accountability.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1. Local Market Knowledge */}
            <Reveal delay={100}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                  Local Market Knowledge
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Deep familiarity with Lucknow's emerging infrastructure, municipal approvals,
                  developer credentials, arterial road grids, and authentic on-ground market
                  valuations.
                </p>
              </div>
            </Reveal>

            {/* 2. Transparent Advice */}
            <Reveal delay={200}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                  Transparent Advice
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Objective, pressure-free property evaluations. We openly present pros, cons, title
                  realities, and future livability factors so you can make informed decisions.
                </p>
              </div>
            </Reveal>

            {/* 3. Carefully Matched Properties */}
            <Reveal delay={300}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                  Carefully Matched Properties
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Every recommendation is handpicked based on your explicit budget, family size,
                  commute patterns, lifestyle aspirations, and long-term investment horizon.
                </p>
              </div>
            </Reveal>

            {/* 4. End-to-End Support */}
            <Reveal delay={400}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                  End-to-End Support
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Complete accompaniment throughout your entire property acquisition journey:
                  search, site visits, price negotiations, documentation, registry, and possession.
                </p>
              </div>
            </Reveal>

            {/* 5. Investment-Focused Perspective */}
            <Reveal delay={500}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                  Investment-Focused Perspective
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Strategic insights for plot and commercial investors focusing on upcoming growth
                  nodes, planned highway extensions, rental demand catchments, and resale liquidity.
                </p>
              </div>
            </Reveal>

            {/* 6. Long-Term Client Relationships */}
            <Reveal delay={600}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                  Long-Term Client Relationships
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  A relationship-first philosophy where families consistently return for future
                  purchases, secondary sales, family investments, and personal referrals.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
       * 5. OUR PROMISE
       * ───────────────────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Core Principle</span>
            </div>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Our Promise</h2>
            <div className="mt-6 rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
              <p className="font-serif text-lg font-medium leading-relaxed text-foreground sm:text-xl">
                “At JPS Real Estates, we promise to always prioritise the right decision for you
                rather than pushing unsuitable inventory for short-term gains.”
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                If a property does not suit your budget, family needs, or timeline, we will tell you
                openly. Our business is built on trust, transparency, and decades of goodwill across
                Lucknow. We measure our success by the confidence and peace of mind of the families
                we guide.
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Jitendra Pratap Singh</span>
                <span>•</span>
                <span>Proprietor, JPS Real Estates</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
       * 6. FUTURE-READY PROPERTY GUIDANCE
       * ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-6">
              <Reveal>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Comprehensive Perspective
                  </p>
                  <h2 className="font-serif text-3xl font-bold sm:text-4xl">
                    Future-Ready Property Guidance
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Real estate decisions have long-term consequences for your family's financial
                  security and lifestyle. JPS Real Estates supports clients not only for today's
                  immediate requirement but also for future investments, upgrades, sales, family
                  needs, and changing market opportunities.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-3.5 text-xs">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Future Home Upgrades</p>
                      <p className="mt-0.5 text-muted-foreground">
                        Seamlessly transition from apartments to luxury villas or plots as your
                        family and lifestyle evolve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-3.5 text-xs">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Strategic Resale & Liquidity</p>
                      <p className="mt-0.5 text-muted-foreground">
                        Realistic market valuations and trusted buyer matching when you decide to
                        sell or rebalance holdings.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-3.5 text-xs">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Next-Generation Family Advisory
                      </p>
                      <p className="mt-0.5 text-muted-foreground">
                        Helping children and extended family members secure properties with the same
                        dependable, transparent oversight.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={250}>
                <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/40 p-8 shadow-lg sm:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow">
                    <Compass className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-bold">
                    Navigating Lucknow's High-Growth Corridors
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    From Amar Shaheed Path and Kisan Path to the Sultanpur Highway and Raebareli
                    Road, Lucknow is developing rapidly. Having an advisor who has tracked these
                    trends since 2007 ensures you invest where infrastructure, livability, and
                    capital appreciation truly converge.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-6 text-xs font-medium">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Gomti Nagar Extension</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Sushant Golf City</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Amar Shaheed Path</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>Sultanpur Road / IT City</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
       * 7. CALL TO ACTION & ENQUIRY WORKFLOW
       * ───────────────────────────────────────────────────────────────── */}
      <section id="contact" className="border-t border-border bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Column: Heading and Contact Details */}
            <div className="space-y-6 lg:col-span-5">
              <Reveal>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Start a Conversation
                  </p>
                  <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                    Let’s Find the Right Property for Your Next Chapter.
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Whether you are buying your first home, looking for a verified plot, or seeking
                  honest perspective on the Lucknow market, Jitendra Pratap Singh is ready to guide
                  you.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="space-y-4 rounded-2xl border border-border bg-secondary/30 p-6 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Office Address</p>
                      <p className="mt-0.5 text-muted-foreground">
                        3/104 Viram Khand, Gomti Nagar, Lucknow, Uttar Pradesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-border pt-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Phone & WhatsApp</p>
                      <a
                        href="tel:+917355223299"
                        className="mt-0.5 block font-mono font-medium text-primary hover:underline"
                      >
                        +91 73552 23299
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-border pt-3">
                    <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Consultation Hours</p>
                      <p className="mt-0.5 text-muted-foreground">
                        Monday – Sunday · 9:30 AM – 7:30 PM (Site visits by appointment)
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Existing Callback / Lead Capture Form */}
            <div className="lg:col-span-7">
              <Reveal delay={200}>
                <div className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
                  <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold">Request a Call or Site Visit</h3>
                      <p className="text-xs text-muted-foreground">
                        Direct response from Jitendra Pratap Singh
                      </p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Confidential & No Spam
                    </span>
                  </div>

                  <LeadForm
                    variant="contact"
                    onSubmit={(data) => addLead({ ...data, source: "about-page" })}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
