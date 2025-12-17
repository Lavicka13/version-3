"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#6A0DAD] via-[#7B1FA2] to-[#9D4EDD] overflow-hidden">
      {/* Botanical pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <Image src="/illustrations/botanical-pattern.svg" alt="" fill className="object-cover" />
      </div>

      {/* Floating flowers - white/light for contrast */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-[10%] w-20 h-20 opacity-[0.08]"
      >
        <Image src="/illustrations/frangipani.svg" alt="" fill className="brightness-[5]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-[8%] w-16 h-16 opacity-[0.06]"
      >
        <Image src="/illustrations/frangipani.svg" alt="" fill className="brightness-[5]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-[15%] w-14 h-14 opacity-[0.07]"
      >
        <Image src="/illustrations/frangipani.svg" alt="" fill className="brightness-[5]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/4 right-[12%] w-18 h-18 opacity-[0.05]"
      >
        <Image src="/illustrations/frangipani.svg" alt="" fill className="brightness-[5]" />
      </motion.div>

      {/* Leaf decorations */}
      <div className="absolute -top-10 -left-16 w-56 h-64 opacity-[0.04]">
        <Image src="/illustrations/leaf-1.svg" alt="" fill className="object-contain brightness-[5]" />
      </div>
      <div className="absolute -bottom-10 -right-12 w-48 h-56 opacity-[0.04] scale-x-[-1]">
        <Image src="/illustrations/leaf-1.svg" alt="" fill className="object-contain brightness-[5]" />
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Top flower decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 0.7, scale: 1, rotate: [0, 5, 0] } : {}}
            transition={{ duration: 0.8, rotate: { duration: 4, repeat: Infinity } }}
            className="w-12 h-12 mx-auto mb-6"
          >
            <Image src="/illustrations/frangipani-small.svg" alt="" width={48} height={48} className="brightness-[5]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white/50 text-sm tracking-[0.3em] uppercase mb-6 font-light"
          >
            Philosophie
          </motion.p>

          {/* Handwritten title */}
          <h2 className="font-handwriting text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-4">
            Luxus bedeutet Zeit
          </h2>
          <p className="font-handwriting text-3xl md:text-4xl lg:text-5xl text-white/70 mb-10">
            Zeit für Sie
          </p>

          {/* Vine decoration */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 0.3, scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-6 max-w-[200px] mx-auto mb-10 relative"
          >
            <Image src="/illustrations/vine.svg" alt="" fill className="object-contain brightness-[5]" />
          </motion.div>

          <p className="text-white/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            In einer Welt, die nie still steht, schenke ich Ihnen einen Ort der Ruhe.
            Hier zählt nur der Moment – Ihre persönliche Zeitinsel, auf der Schönheit
            von innen nach außen strahlt.
          </p>

          {/* Bottom flower decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.5, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/30" />
            <motion.div
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-6 h-6 opacity-70"
            >
              <Image src="/illustrations/frangipani-small.svg" alt="" width={24} height={24} className="brightness-[5]" />
            </motion.div>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/30" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M0,30 C200,60 400,10 600,40 C800,70 1000,20 1200,50 L1200,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
