"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type Service = {
  name: string;
  price: string;
  duration: string;
  description?: string;
  highlight?: boolean;
};

type PriceCategory = {
  id: string;
  title: string;
  subtitle: string;
  services: Service[];
  note?: string;
};

const priceCategories: PriceCategory[] = [
  {
    id: "gesicht",
    title: "Gesichtsbehandlungen",
    subtitle: "SOTHYS Paris Treatments",
    services: [
      { name: "Basisbehandlung", description: "Auf Sie abgestimmte Pflege", price: "80€", duration: "70 Min" },
      { name: "DX-Glow-Intensivbehandlung", description: "6 Pflegephasen für strahlende Haut", price: "135€", duration: "80 Min", highlight: true },
      { name: "Feuchtigkeitsspendende Intensivbehandlung", description: "Aufpolstern & neuer Glow", price: "135€", duration: "85 Min" },
      { name: "Intensivbehandlung Jeunesse Tri-Complex", description: "Falten ade! Bis zu 6 Jahre jünger", price: "139€", duration: "85 Min", highlight: true },
      { name: "Saisonbehandlung Oxygenant", description: "Mehr Ausstrahlung", price: "75€", duration: "45 Min" },
      { name: "Doppel-Peeling-Behandlung", description: "Klarer, ebenmäßiger Teint", price: "89€", duration: "50 Min" },
    ],
    note: "Intensivbehandlungen auch als 3er-Kur empfohlen",
  },
  {
    id: "massage",
    title: "Wohlfühlmassagen",
    subtitle: "Wellness & Entspannung",
    services: [
      { name: "Gesichtsmassage", price: "35€", duration: "30 Min" },
      { name: "Kopf-/Nackenmassage", price: "35€", duration: "30 Min" },
      { name: "Schultermassage", price: "40€", duration: "30 Min" },
      { name: "Rückenmassage", price: "40€", duration: "30 Min" },
      { name: "Klassische Ganzkörpermassage", price: "70€ / 80€", duration: "60 / 75 Min", highlight: true },
      { name: "Ayurveda Ganzkörpermassage", price: "85€ / 95€", duration: "60 / 75 Min", highlight: true },
    ],
  },
];

export function Prices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="preise" className="relative py-24 lg:py-32 bg-[#FDF8F3] overflow-hidden">
      {/* Botanical background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <Image src="/illustrations/botanical-pattern.svg" alt="" fill className="object-cover" />
      </div>

      {/* Decorative flowers */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-16 h-16 opacity-[0.12]"
      >
        <Image src="/illustrations/frangipani.svg" alt="" fill />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 left-[8%] w-14 h-14 opacity-[0.10]"
      >
        <Image src="/illustrations/frangipani.svg" alt="" fill />
      </motion.div>

      {/* Leaves */}
      <div className="absolute top-0 left-0 w-48 h-56 opacity-[0.05]">
        <Image src="/illustrations/leaf-1.svg" alt="" fill className="object-contain" />
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-48 opacity-[0.04] scale-x-[-1]">
        <Image src="/illustrations/leaf-2.svg" alt="" fill className="object-contain" />
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        {/* Section Header - Botanical */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#6A0DAD]/30" />
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-8 h-8 opacity-50"
            >
              <Image src="/illustrations/frangipani-small.svg" alt="" width={32} height={32} />
            </motion.div>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#6A0DAD]/30" />
          </div>

          <p className="text-[#6A0DAD] text-sm tracking-[0.3em] uppercase mb-4 font-light">
            Preise
          </p>
          <h2 className="font-handwriting text-5xl md:text-6xl lg:text-7xl text-[#6A0DAD] mb-6">
            Die Inselbehandlungen
          </h2>
          <p className="text-[#1A1A1A]/60 font-light max-w-xl mx-auto">
            Alle Behandlungen werden mit hochwertigen Bio-Ölen und exklusiven SOTHYS Produkten durchgeführt.
          </p>
        </motion.div>

        {/* Price Cards Grid - Botanical Style */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          {priceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-botanical hover:shadow-lg transition-shadow duration-500 h-full flex flex-col"
            >
              {/* Category Header with flower icon */}
              <div className="text-center mb-6 pb-4 border-b border-[#E9D5FF]">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: categoryIndex * 0.3 }}
                  className="w-10 h-10 mx-auto mb-3 opacity-60"
                >
                  <Image src="/illustrations/frangipani-small.svg" alt="" width={40} height={40} />
                </motion.div>
                <h3 className="font-handwriting text-3xl text-[#6A0DAD] mb-1">
                  {category.title}
                </h3>
                <p className="text-[#9D4EDD] text-xs tracking-[0.15em] font-light">
                  {category.subtitle}
                </p>
              </div>

              {/* Services List - Botanical bullets */}
              <div className="space-y-3 flex-1">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={`${service.name}-${service.price}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + serviceIndex * 0.05 + 0.2,
                    }}
                    className={`p-4 rounded-2xl transition-all duration-300 md:min-h-[100px] ${
                      service.highlight
                        ? "bg-gradient-to-r from-[#E9D5FF]/40 to-[#E9E4F0]/30 border border-[#6A0DAD]/20"
                        : "bg-[#FDF8F3]/50 hover:bg-[#E9D5FF]/20"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          {service.highlight && (
                            <span className="w-3 h-3 flex-shrink-0 opacity-60">
                              <Image src="/illustrations/frangipani-small.svg" alt="" width={12} height={12} />
                            </span>
                          )}
                          <p className={`text-sm ${service.highlight ? "text-[#1A1A1A] font-normal" : "text-[#1A1A1A]/80 font-light"}`}>
                            {service.name}
                          </p>
                        </div>
                        {service.description && (
                          <p className="text-[#1A1A1A]/50 text-xs mt-1 ml-5 italic">
                            {service.description}
                          </p>
                        )}
                        {service.duration && (
                          <p className="text-[#9D4EDD]/60 text-xs mt-1 ml-5">
                            {service.duration}
                          </p>
                        )}
                      </div>
                      <p className={`font-handwriting text-xl whitespace-nowrap ${service.highlight ? "text-[#6A0DAD]" : "text-[#9D4EDD]"}`}>
                        {service.price}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Category Note */}
              {category.note && (
                <p className="text-[#6A0DAD]/60 text-xs text-center mt-4 italic">
                  {category.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Gift Card - Botanical Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="relative text-center p-10 bg-white/90 backdrop-blur-sm rounded-[30px] shadow-botanical overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-4 left-8 w-12 h-12 opacity-10">
              <Image src="/illustrations/frangipani.svg" alt="" fill />
            </div>
            <div className="absolute bottom-4 right-8 w-10 h-10 opacity-10">
              <Image src="/illustrations/frangipani.svg" alt="" fill />
            </div>

            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-12 h-12 mx-auto mb-4 opacity-60"
            >
              <Image src="/illustrations/frangipani-small.svg" alt="" width={48} height={48} />
            </motion.div>
            <p className="text-[#6A0DAD] text-sm tracking-[0.2em] uppercase mb-2 font-light">
              Geschenk-Idee
            </p>
            <p className="font-handwriting text-3xl text-[#6A0DAD] mb-3">
              Gutscheine
            </p>
            <p className="text-[#1A1A1A]/70 text-sm font-light max-w-md mx-auto">
              Verschenken Sie eine Auszeit. Gutscheine für alle Behandlungen sind nach Wunsch erhältlich.
            </p>
          </div>

          {/* Disclaimer */}
          <p className="text-[#9D4EDD]/50 text-xs text-center mt-8 font-light">
            Wellness-Massagebehandlungen sind keine Heilbehandlungen. Alle Preise inkl. MwSt.
          </p>
        </motion.div>

        {/* CTA - Botanical Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#kontakt" className="btn-botanical inline-block">
            Termin vereinbaren
          </a>
        </motion.div>

        {/* Bottom vine */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 0.08, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 h-6 max-w-xs mx-auto relative"
        >
          <Image src="/illustrations/vine.svg" alt="" fill className="object-contain" />
        </motion.div>
      </div>
    </section>
  );
}
