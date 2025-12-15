"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Split-Screen Layout */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left: Content */}
        <div className="flex items-center justify-center px-8 lg:px-16 py-32 lg:py-0 bg-white order-2 lg:order-1">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[#6A0DAD] text-sm tracking-[0.3em] uppercase mb-6">
                Kosmetik & Wellness in Blaufelden
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] mb-8 tracking-[0.05em]"
            >
              Stille finden.
              <br />
              <span className="text-[#6A0DAD]">Schönheit</span> spüren.
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-[1px] bg-[#6A0DAD] mb-8"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-[#1A1A1A]/70 text-lg font-light leading-relaxed max-w-md mb-10"
            >
              Exklusive Kosmetik und Wellness-Massagen in einer Atmosphäre
              absoluter Ruhe. Ihr persönlicher Rückzugsort.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#angebote" className="btn-minimal inline-block text-center">
                Angebote entdecken
              </a>
              <a
                href="#kontakt"
                className="px-8 py-3 text-[#1A1A1A] hover:text-[#6A0DAD] transition-colors font-display text-sm tracking-[0.1em] inline-block text-center"
              >
                Termin vereinbaren →
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right: Full-bleed Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[50vh] lg:min-h-screen order-1 lg:order-2"
        >
          <Image
            src="/images/behandlungsraum.jpg"
            alt="Zeitinsel Behandlungsraum - Ihr Rückzugsort für Schönheit und Wellness"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent lg:from-white/30" />

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#6A0DAD]" />
        </motion.div>
      </div>

      {/* Scroll indicator - centered */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-8 z-10 hidden lg:flex items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-[#6A0DAD]/50"
        />
        <span className="text-[#999999] text-xs tracking-[0.2em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
