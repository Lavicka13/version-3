"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const categories = [
  {
    id: "massage",
    title: "Massage",
    subtitle: "Wellness für Körper & Seele",
    description:
      "Von der klassischen Rückenmassage bis zur ayurvedischen Ganzkörperbehandlung. Ihre persönliche Auszeit vom Alltag.",
    image: "/images/massage.jpg",
    services: ["Wellness-Rückenmassage", "Kopf & Nacken Entspannung", "Ayurveda Ganzkörper"],
  },
  {
    id: "kosmetik",
    title: "Kosmetik",
    subtitle: "SOTHYS Paris Treatments",
    description:
      "Hochwertige Gesichtsbehandlungen mit exklusiven SOTHYS Produkten. Für sichtbar strahlende, gepflegte Haut.",
    image: "/images/sothys-produkte.jpg",
    services: ["DX Glow Behandlung", "Basis Gesichtspflege", "Anti-Aging Premium"],
  },
];

export function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="angebote" className="relative py-24 lg:py-32 bg-gradient-to-b from-[#E9E4F0]/30 via-white to-[#FDF8F3]/50 overflow-hidden">
      {/* Botanical background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top right leaf */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 0.06, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="absolute -top-10 -right-20 w-64 h-72"
        >
          <Image src="/illustrations/leaf-1.svg" alt="" fill className="object-contain" />
        </motion.div>

        {/* Bottom left leaf */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 0.05, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-10 -left-16 w-56 h-64 scale-x-[-1]"
        >
          <Image src="/illustrations/leaf-1.svg" alt="" fill className="object-contain" />
        </motion.div>

        {/* Subtle flower decoration */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[8%] w-12 h-12 opacity-[0.08]"
        >
          <Image src="/illustrations/frangipani.svg" alt="" fill />
        </motion.div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        {/* Section Header - Botanical Style */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Decorative line with flower */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#6A0DAD]/40" />
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-6 h-6 opacity-60"
            >
              <Image src="/illustrations/frangipani-small.svg" alt="" width={24} height={24} />
            </motion.div>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#6A0DAD]/40" />
          </div>

          <p className="text-[#6A0DAD] text-sm tracking-[0.3em] uppercase mb-4 font-light">
            Unsere Leistungen
          </p>
          <h2 className="font-handwriting text-5xl md:text-6xl lg:text-7xl text-[#6A0DAD]">
            Angebote
          </h2>
        </motion.div>

        {/* Categories Grid - Botanical Cards */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              {/* Image Container - Organic Shape */}
              <div className="relative mb-8">
                {/* Blob background */}
                <div className="absolute -inset-3 bg-gradient-to-br from-[#E9D5FF]/30 to-[#E9E4F0]/40 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] transform group-hover:scale-105 transition-transform duration-500" />

                {/* Image with organic border radius */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20%_5%_20%_5%_/_5%_20%_5%_20%] shadow-botanical">
                  <Image
                    src={category.image}
                    alt={`${category.title} - ${category.subtitle}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6A0DAD]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating leaf on hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute -top-4 -right-2 w-10 h-12 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                >
                  <Image src="/illustrations/leaf-2.svg" alt="" fill className="object-contain" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="space-y-4 px-2">
                <div>
                  <h3 className="font-handwriting text-4xl lg:text-5xl text-[#6A0DAD] mb-2">
                    {category.title}
                  </h3>
                  <p className="text-[#9D4EDD] text-sm tracking-[0.15em] font-light">
                    {category.subtitle}
                  </p>
                </div>

                <p className="text-[#1A1A1A]/70 font-light leading-relaxed">
                  {category.description}
                </p>

                {/* Services List - Botanical bullets */}
                <ul className="space-y-3 pt-2">
                  {category.services.map((service, i) => (
                    <motion.li
                      key={service}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="text-[#1A1A1A] font-light text-sm flex items-center gap-3"
                    >
                      {/* Small flower bullet */}
                      <span className="w-4 h-4 opacity-50 flex-shrink-0">
                        <Image src="/illustrations/frangipani-small.svg" alt="" width={16} height={16} />
                      </span>
                      {service}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Link - Botanical style */}
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-3 pt-4 font-display text-sm tracking-[0.1em] text-[#6A0DAD] hover:text-[#9D4EDD] transition-colors group/link"
                >
                  <span className="w-5 h-5 opacity-60 group-hover/link:rotate-12 transition-transform">
                    <Image src="/illustrations/frangipani-small.svg" alt="" width={20} height={20} />
                  </span>
                  Termin anfragen
                  <span className="transform group-hover/link:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom vine decoration */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 0.1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 h-8 max-w-md mx-auto"
        >
          <Image src="/illustrations/vine.svg" alt="" fill className="object-contain" />
        </motion.div>
      </div>
    </section>
  );
}
