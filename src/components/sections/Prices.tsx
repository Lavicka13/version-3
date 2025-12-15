"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const priceCategories = [
  {
    id: "gesicht",
    title: "Gesicht",
    subtitle: "SOTHYS Paris Treatments",
    services: [
      { name: "SOTHYS DX Glow Behandlung", price: "79€", duration: "60 Min", highlight: true },
      { name: "Basis Gesichtspflege", price: "59€", duration: "45 Min" },
      { name: "Anti-Aging Premium", price: "99€", duration: "75 Min" },
    ],
  },
  {
    id: "massage",
    title: "Massage",
    subtitle: "Wellness & Entspannung",
    services: [
      { name: "Wellness-Rückenmassage", price: "35€", duration: "30 Min" },
      { name: "Wellness-Rückenmassage", price: "65€", duration: "60 Min", highlight: true },
      { name: "Kopf & Nacken Entspannung", price: "40€", duration: "30 Min" },
    ],
  },
  {
    id: "spezial",
    title: "Spezial",
    subtitle: "Premium Behandlungen",
    services: [
      { name: "Ayurveda Ganzkörpermassage", price: "85€", duration: "75 Min", highlight: true },
      { name: "Hot Stone Massage", price: "75€", duration: "60 Min" },
      { name: "Geschenk-Gutschein", price: "nach Wahl", duration: "" },
    ],
  },
];

export function Prices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="preise" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-[#6A0DAD] text-sm tracking-[0.3em] uppercase mb-4">
            Preise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Unsere Behandlungen
          </h2>
          <p className="text-[#1A1A1A]/60 font-light max-w-xl mx-auto">
            Alle Behandlungen werden mit hochwertigen Bio-Ölen und exklusiven SOTHYS Produkten durchgeführt.
          </p>
        </motion.div>

        {/* Price Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
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
              className="group"
            >
              {/* Category Header */}
              <div className="border-b border-[#6A0DAD] pb-4 mb-6">
                <h3 className="text-2xl font-light mb-1">{category.title}</h3>
                <p className="text-[#6A0DAD] text-sm tracking-[0.1em]">
                  {category.subtitle}
                </p>
              </div>

              {/* Services List */}
              <div className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={`${service.name}-${service.price}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + serviceIndex * 0.05 + 0.2,
                    }}
                    className={`p-4 transition-colors ${
                      service.highlight
                        ? "bg-[#6A0DAD]/5 border-l-2 border-[#6A0DAD]"
                        : "bg-[#F0F0F0]/50 hover:bg-[#F0F0F0]"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <p className={`font-light ${service.highlight ? "text-[#1A1A1A]" : "text-[#1A1A1A]/80"}`}>
                          {service.name}
                        </p>
                        {service.duration && (
                          <p className="text-[#999999] text-sm mt-0.5">
                            {service.duration}
                          </p>
                        )}
                      </div>
                      <p className={`font-display text-lg ${service.highlight ? "text-[#6A0DAD]" : "text-[#1A1A1A]"}`}>
                        {service.price}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gift Card & Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          {/* Gift Card */}
          <div className="text-center p-8 bg-[#F0F0F0]">
            <p className="text-[#6A0DAD] text-sm tracking-[0.2em] uppercase mb-2">
              Geschenk-Idee
            </p>
            <p className="text-[#1A1A1A] text-xl font-light mb-2">
              Gutscheine für alle Behandlungen erhältlich
            </p>
            <p className="text-[#999999] text-sm font-light">
              Verschenken Sie eine Auszeit. Fragen Sie nach unseren Geschenk-Gutscheinen.
            </p>
          </div>

          {/* Disclaimer */}
          <p className="text-[#999999] text-xs text-center mt-6 font-light">
            Wellness-Massagebehandlungen sind keine Heilbehandlungen. Alle Preise inkl. MwSt.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#kontakt" className="btn-minimal inline-block">
            Termin vereinbaren
          </a>
        </motion.div>
      </div>
    </section>
  );
}
