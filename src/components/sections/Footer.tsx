"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white py-16 lg:py-20 border-t border-[#1A1A1A]/10">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Brand */}
          <div>
            <Link href="#" className="inline-flex items-center gap-2 mb-6">
              <svg viewBox="0 0 40 40" className="w-6 h-6" aria-hidden="true">
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  fill="none"
                  stroke="#6A0DAD"
                  strokeWidth="1"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="8"
                  fill="none"
                  stroke="#6A0DAD"
                  strokeWidth="1"
                />
              </svg>
              <span className="font-display text-sm tracking-[0.2em] text-[#6A0DAD]">
                ZEITINSEL
              </span>
            </Link>
            <p className="text-[#999999] text-sm font-light mb-4">
              Kosmetik & Wellness in Blaufelden
            </p>
            <p className="text-[#1A1A1A]/60 text-sm font-light">
              Ihr persönlicher Rückzugsort
              <br />
              für Schönheit und Wohlbefinden.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[#1A1A1A] text-sm tracking-[0.1em] mb-4 font-medium">
              Navigation
            </p>
            <div className="space-y-3">
              {[
                { href: "#", label: "Home" },
                { href: "#angebote", label: "Angebote" },
                { href: "#preise", label: "Preise" },
                { href: "#ueber-mich", label: "Über mich" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-[#1A1A1A]/60 text-sm font-light hover:text-[#6A0DAD] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[#1A1A1A] text-sm tracking-[0.1em] mb-4 font-medium">
              Rechtliches
            </p>
            <div className="space-y-3">
              <Link
                href="/impressum"
                className="block text-[#1A1A1A]/60 text-sm font-light hover:text-[#6A0DAD] transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="block text-[#1A1A1A]/60 text-sm font-light hover:text-[#6A0DAD] transition-colors"
              >
                Datenschutzerklärung
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[#1A1A1A]/10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#999999] text-xs font-light">
              © {new Date().getFullYear()} Zeitinsel. Alle Rechte vorbehalten.
            </p>
            <p className="text-[#999999] text-xs font-light">
              Ruth-A. Schwendtner · Im Pfandwasen 25 · 74572 Blaufelden
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
