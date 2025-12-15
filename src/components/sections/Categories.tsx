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
    <section id="angebote" className="py-24 lg:py-32 bg-white">
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
            Unsere Leistungen
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
            Angebote im Überblick
          </h2>
        </motion.div>

        {/* Categories Grid - Equal columns */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
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
              {/* Image Container */}
              <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-[#F0F0F0]">
                <Image
                  src={category.image}
                  alt={`${category.title} - ${category.subtitle}`}
                  fill
                  className="object-cover image-hover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Violet accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#6A0DAD] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-light mb-1">
                    {category.title}
                  </h3>
                  <p className="text-[#6A0DAD] text-sm tracking-[0.15em]">
                    {category.subtitle}
                  </p>
                </div>

                <p className="text-[#1A1A1A]/70 font-light leading-relaxed">
                  {category.description}
                </p>

                {/* Services List */}
                <ul className="space-y-2 pt-2">
                  {category.services.map((service) => (
                    <li
                      key={service}
                      className="text-[#1A1A1A] font-light text-sm flex items-center gap-3"
                    >
                      <span className="w-3 h-[1px] bg-[#6A0DAD]" />
                      {service}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className="inline-block pt-4 font-display text-sm tracking-[0.1em] text-[#6A0DAD] hover:text-[#5a0b93] transition-colors group/link"
                >
                  Termin anfragen
                  <span className="inline-block ml-2 transform group-hover/link:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
