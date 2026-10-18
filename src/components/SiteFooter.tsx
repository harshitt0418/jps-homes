import { Link } from "@tanstack/react-router";
import { Handshake, Mail, MapPin, Phone } from "lucide-react";

import logoAsset from "@/assets/jps-logo.jpeg";
import { getAllGroups } from "@/data/projects";

export function SiteFooter() {
  const groups = getAllGroups();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoAsset}
                alt="JPS Real Estates logo"
                className="h-10 w-10 rounded-md object-cover"
                loading="lazy"
              />
              <div className="leading-tight">
                <p className="font-serif text-lg font-bold text-foreground">JPS Real Estates</p>
                <p className="text-xs text-muted-foreground">JPS Associate · Lucknow</p>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Guiding Lucknow home buyers, plot investors, and commercial property owners with
              verified registrations, fair pricing, and legal documentation.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Handshake className="h-4 w-4 text-primary" />
              <span>Proprietor: Jitendra Pratap Singh</span>
            </div>
          </div>

          {/* Developer Groups */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-foreground">
              Developer Groups
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              {groups.map((group) => (
                <li key={group.slug}>
                  <Link
                    to="/projects/$groupSlug"
                    params={{ groupSlug: group.slug }}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {group.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary">
                  All Developers & Projects
                </Link>
              </li>
              <li>
                <a href="/#locations" className="hover:text-primary">
                  Popular Lucknow Locations
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-primary">
                  Our Services
                </a>
              </li>
              <li>
                <Link to="/admin" className="hover:text-primary">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-foreground">
              Office & Contact
            </h4>
            <div className="mt-3 space-y-2.5 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <span>3/104 Viram Khand, Gomti Nagar, Lucknow, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-primary" />
                <span>+91 73552 23299 / +91 96963 32889</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
                <span>contact@jpsrealestates.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} JPS Real Estates. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Project data and images collected from official public sources. RERA details subject to
            state authority updates.
          </p>
        </div>
      </div>
    </footer>
  );
}
