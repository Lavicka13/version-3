"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ueber-mich" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/collage.jpg"
                alt="Ruth-A. Schwendtner - Ihre Expertin für Kosmetik und Wellness"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#6A0DAD] -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#6A0DAD]/10 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <p className="text-[#6A0DAD] text-sm tracking-[0.3em] uppercase mb-4">
              Ihre Expertin
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Ruth-A. Schwendtner
            </h2>

            <div className="w-12 h-[1px] bg-[#6A0DAD] mb-8" />

            <div className="space-y-5 text-[#1A1A1A]/80 font-light leading-relaxed">
              <p>
                Seit über 20 Jahren ist es meine Berufung, Menschen einen Ort
                der Ruhe zu schenken. Die Zeitinsel entstand aus der
                Überzeugung, dass wahre Schönheit von innen kommt – und Zeit
                braucht.
              </p>
              <p>
                Als zertifizierte Kosmetikerin und Wellness-Massagetherapeutin
                verbinde ich fachliche Expertise mit einem tiefen Verständnis
                für individuelle Bedürfnisse.
              </p>
              <p>
                Mit exklusiven SOTHYS Paris Produkten und einem Gespür für das,
                was Sie wirklich brauchen, begleite ich Sie auf Ihrer
                persönlichen Reise zu Wohlbefinden.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row gap-6">
              <div>
                <p className="text-[#6A0DAD] text-2xl font-light">20+</p>
                <p className="text-[#999999] text-sm">Jahre Erfahrung</p>
              </div>
              <div>
                <p className="text-[#6A0DAD] text-2xl font-light">SOTHYS</p>
                <p className="text-[#999999] text-sm">Paris Partner</p>
              </div>
              <div>
                <p className="text-[#6A0DAD] text-2xl font-light">IHK</p>
                <p className="text-[#999999] text-sm">Zertifiziert</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
