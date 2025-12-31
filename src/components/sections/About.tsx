"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SothysText } from "@/components/common/SothysText";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ueber-mich" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-80 opacity-[0.04]">
        <Image src="/illustrations/leaf-1.svg" alt="" fill className="object-contain" />
      </div>
      <div className="absolute bottom-20 left-0 w-64 h-72 opacity-[0.03] scale-x-[-1]">
        <Image src="/illustrations/leaf-2.svg" alt="" fill className="object-contain" />
      </div>

      {/* Floating flowers */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[15%] w-14 h-14 opacity-[0.10]"
      >
        <Image src="/illustrations/frangipani.svg" alt="" fill />
      </motion.div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image with botanical frame */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Organic blob background */}
            <motion.div
              animate={{ rotate: [0, 2, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-6 bg-gradient-to-br from-[#E9D5FF]/40 to-[#E9E4F0]/30 rounded-[40%_60%_60%_40%_/_50%_40%_60%_50%]"
            />

            {/* Image container with organic shape */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-[30%_5%_30%_5%_/_5%_30%_5%_30%] shadow-botanical">
              <Image
                src="/images/ruth.png"
                alt="Ruth-A. Schwendtner - Ihre Expertin für Kosmetik und Wellness"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Decorative flowers around image */}
            <motion.div
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 w-16 h-16 opacity-30"
            >
              <Image src="/illustrations/frangipani.svg" alt="" fill />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -top-6 -left-2 w-12 h-12 opacity-25"
            >
              <Image src="/illustrations/frangipani.svg" alt="" fill />
            </motion.div>

            {/* Leaf decoration */}
            <div className="absolute -bottom-8 -left-8 w-20 h-24 opacity-20">
              <Image src="/illustrations/leaf-2.svg" alt="" fill className="object-contain" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            {/* Header with flower decoration */}
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-6 h-6 opacity-60"
              >
                <Image src="/illustrations/frangipani-small.svg" alt="" width={24} height={24} />
              </motion.div>
              <p className="text-[#6A0DAD] text-sm tracking-[0.3em] uppercase font-light">
                Ihre Expertin
              </p>
            </div>

            <h2 className="font-handwriting text-5xl md:text-6xl lg:text-7xl text-[#6A0DAD] mb-4">
              Ruth-A.
            </h2>
            <p className="font-display text-2xl md:text-3xl font-light text-[#1A1A1A] mb-8">
              Schwendtner
            </p>

            {/* Vine decoration */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-4 w-32 mb-8 relative origin-left"
            >
              <Image src="/illustrations/vine.svg" alt="" fill className="object-contain" />
            </motion.div>

            <div className="space-y-5 text-[#1A1A1A]/80 font-light leading-relaxed">
              <p>
                Es bereitet mir große Freude, Menschen durch gezielte Schönheits- und
                Wellnessbehandlungen eine entspannende Pause vom Alltag und Momente puren
                Wohlempfindens zu ermöglichen.
              </p>
              <p>
                Die Zeitinsel entstand aus dem Wunsch heraus, einen Ort zu schaffen, an dem die
                hektische Welt draußen bleibt, um genau diese Momente bis zur Tiefenentspanntheit
                genießen zu können.
              </p>
              <p>
                Als Kosmetikerin und Wellness-Massagetherapeutin verbinde ich fachliche Expertise
                mit einem tiefen Verständnis für individuelle Bedürfnisse.
              </p>
              <p>
                <SothysText>Mit exklusiven Hautpflegeprodukten von SOTHYS Paris und wertvollen Bio-Ölen begleite ich Sie auf Ihrer Reise zu persönlichem Wohlbefinden.</SothysText>
              </p>
              <p>
                Mit neuer Energie und trotzdem tiefenentspannt können Sie dem Alltag mit einem
                Lächeln begegnen.
              </p>
            </div>

            {/* Stats as flower petals layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 pt-8 border-t border-[#E9D5FF] flex flex-wrap gap-8"
            >
              {[
                { value: "20+", label: "Jahre Erfahrung" },
                { value: "SOTHYS", label: "Paris Partner" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Small flower above stat */}
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 3 + index, repeat: Infinity }}
                    className="w-5 h-5 mb-2 opacity-40"
                  >
                    <Image src="/illustrations/frangipani-small.svg" alt="" width={20} height={20} />
                  </motion.div>
                  <p className="font-handwriting text-3xl text-[#6A0DAD]"><SothysText iconSize={20}>{stat.value}</SothysText></p>
                  <p className="text-[#9D4EDD]/70 text-xs tracking-wider mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
