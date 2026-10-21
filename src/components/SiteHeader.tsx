import { Link } from "@tanstack/react-router";
import { Building2, Lock, Menu, X } from "lucide-react";
import { useState } from "react";

import logoAsset from "@/assets/jps-logo.jpeg";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoAsset}
            alt="JPS Real Estates logo"
            className="h-11 w-11 rounded-md object-cover"
          />
          <div className="leading-tight">
            <p className="font-serif text-lg font-bold tracking-wide">JPS Real Estates</p>
            <p className="text-xs text-muted-foreground">JPS Associate · Lucknow</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium xl:flex">
          <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="text-muted-foreground transition-colors hover:text-primary">
            About
          </Link>
          <a
            href="/#featured-collection"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Featured Collection
          </a>
          <a
            href="/#locations"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Locations
          </a>
          <a
            href="/#services"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Services
          </a>
          <a
            href="/#contact"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Contact
          </a>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <a
            href="/#contact"
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
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground xl:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background px-4 py-4 xl:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-muted-foreground hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-muted-foreground hover:text-primary"
            >
              About
            </Link>
            <a
              href="/#featured-collection"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-muted-foreground hover:text-primary"
            >
              Featured Collection
            </a>
            <a
              href="/#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-muted-foreground hover:text-primary"
            >
              Locations
            </a>
            <a
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-muted-foreground hover:text-primary"
            >
              Services
            </a>
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-muted-foreground hover:text-primary"
            >
              Contact
            </a>
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Book a Visit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
