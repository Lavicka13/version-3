"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white to-[#FDF8F3] overflow-hidden">
      {/* Wave transition at top */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full h-12"
        >
          <path
            d="M0,60 C200,20 400,50 600,30 C800,10 1000,40 1200,20 L1200,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Botanical background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <Image src="/illustrations/botanical-pattern.svg" alt="" fill className="object-cover" />
      </div>

      {/* Leaf decorations */}
      <div className="absolute bottom-0 left-0 w-40 h-48 opacity-[0.04]">
        <Image src="/illustrations/leaf-1.svg" alt="" fill className="object-contain" />
      </div>
      <div className="absolute bottom-0 right-0 w-36 h-40 opacity-[0.03] scale-x-[-1]">
        <Image src="/illustrations/leaf-2.svg" alt="" fill className="object-contain" />
      </div>

      {/* Floating flower */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[12%] w-12 h-12 opacity-[0.08]"
      >
        <Image src="/illustrations/frangipani.svg" alt="" fill />
      </motion.div>

      <div className="container mx-auto px-8 lg:px-16 pt-20 pb-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Brand - Botanical style */}
          <div>
            <Link href="#" className="inline-flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-10 h-10 opacity-70"
              >
                <Image src="/illustrations/frangipani.svg" alt="" width={40} height={40} />
              </motion.div>
              <span className="font-handwriting text-3xl text-[#6A0DAD]">
                Zeitinsel
              </span>
            </Link>
            <p className="text-[#9D4EDD]/70 text-sm font-light mb-4">
              Kosmetik & Wellness in Blaufelden
            </p>
            <p className="text-[#1A1A1A]/60 text-sm font-light leading-relaxed">
              Ihr persönlicher Rückzugsort
              <br />
              für Schönheit und Wohlbefinden.
            </p>

            <div className="mt-4">
              <p className="text-[#6A0DAD] text-sm font-normal">
                Ruth-A. Schwendtner
              </p>
              <p className="text-[#1A1A1A]/50 text-xs font-light">
                Kosmetikerin & Wellness-Massagetherapeutin
              </p>
            </div>

            {/* Small vine decoration */}
            <div className="mt-4 h-3 w-24 opacity-15 relative">
              <Image src="/illustrations/vine.svg" alt="" fill className="object-contain" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 opacity-40">
                <Image src="/illustrations/frangipani-small.svg" alt="" width={16} height={16} />
              </div>
              <p className="text-[#6A0DAD] text-xs tracking-[0.2em] uppercase font-light">
                Navigation
              </p>
            </div>
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
                  className="flex items-center gap-2 text-[#1A1A1A]/60 text-sm font-light hover:text-[#6A0DAD] transition-colors group"
                >
                  <span className="w-2 h-2 opacity-0 group-hover:opacity-50 transition-opacity">
                    <Image src="/illustrations/frangipani-small.svg" alt="" width={8} height={8} />
                  </span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 opacity-40">
                <Image src="/illustrations/frangipani-small.svg" alt="" width={16} height={16} />
              </div>
              <p className="text-[#6A0DAD] text-xs tracking-[0.2em] uppercase font-light">
                Rechtliches
              </p>
            </div>
            <div className="space-y-3">
              <Link
                href="/impressum"
                className="flex items-center gap-2 text-[#1A1A1A]/60 text-sm font-light hover:text-[#6A0DAD] transition-colors group"
              >
                <span className="w-2 h-2 opacity-0 group-hover:opacity-50 transition-opacity">
                  <Image src="/illustrations/frangipani-small.svg" alt="" width={8} height={8} />
                </span>
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="flex items-center gap-2 text-[#1A1A1A]/60 text-sm font-light hover:text-[#6A0DAD] transition-colors group"
              >
                <span className="w-2 h-2 opacity-0 group-hover:opacity-50 transition-opacity">
                  <Image src="/illustrations/frangipani-small.svg" alt="" width={8} height={8} />
                </span>
                Datenschutzerklärung
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright - Botanical divider */}
        <div className="mt-16 pt-8 max-w-5xl mx-auto">
          {/* Botanical divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#E9D5FF]/50" />
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-8 h-8 opacity-30"
            >
              <Image src="/illustrations/frangipani.svg" alt="" width={32} height={32} />
            </motion.div>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#E9D5FF]/50" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#9D4EDD]/50 text-xs font-light">
              © {new Date().getFullYear()} Zeitinsel. Alle Rechte vorbehalten.
            </p>
            <p className="text-[#9D4EDD]/50 text-xs font-light">
              Ruth-A. Schwendtner · Im Pfandwasen 25 · 74572 Blaufelden
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
