"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Quote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-[#FDF8F3] to-[#E9E4F0]/30 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.02]">
        <Image src="/illustrations/botanical-pattern.svg" alt="" fill className="object-cover" />
      </div>

      {/* Floating flowers */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[12%] w-16 h-16 opacity-[0.10]"
      >
        <Image src="/illustrations/frangipani.svg" alt="" fill />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-16 right-[10%] w-14 h-14 opacity-[0.08]"
      >
        <Image src="/illustrations/frangipani.svg" alt="" fill />
      </motion.div>

      {/* Leaf decorations */}
      <div className="absolute top-0 right-0 w-40 h-48 opacity-[0.04]">
        <Image src="/illustrations/leaf-1.svg" alt="" fill className="object-contain" />
      </div>
      <div className="absolute bottom-0 left-0 w-36 h-40 opacity-[0.03] scale-x-[-1]">
        <Image src="/illustrations/leaf-2.svg" alt="" fill className="object-contain" />
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Top vine decoration */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 0.15, scaleX: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="h-6 max-w-[180px] mx-auto mb-8 relative"
          >
            <Image src="/illustrations/vine.svg" alt="" fill className="object-contain" />
          </motion.div>

          {/* Flower as quotation mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative w-16 h-16 mx-auto mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Image src="/illustrations/frangipani.svg" alt="" width={64} height={64} className="opacity-50" />
            </motion.div>
          </motion.div>

          {/* Quote in handwriting style */}
          <blockquote className="font-handwriting text-4xl md:text-5xl lg:text-6xl text-[#6A0DAD] leading-[1.2] mb-8">
            In der Stille liegt die Kraft zur Regeneration
          </blockquote>

          {/* Attribution with small flower */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="w-8 h-[1px] bg-[#6A0DAD]/30" />
            <motion.div
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-5 h-5 opacity-50"
            >
              <Image src="/illustrations/frangipani-small.svg" alt="" width={20} height={20} />
            </motion.div>
            <span className="text-[#9D4EDD] text-sm tracking-[0.2em] font-light">
              Ruth-A. Schwendtner
            </span>
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="w-5 h-5 opacity-50"
            >
              <Image src="/illustrations/frangipani-small.svg" alt="" width={20} height={20} />
            </motion.div>
            <div className="w-8 h-[1px] bg-[#6A0DAD]/30" />
          </motion.div>

          {/* Bottom vine decoration */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 0.15, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-6 max-w-[180px] mx-auto mt-8 relative scale-x-[-1]"
          >
            <Image src="/illustrations/vine.svg" alt="" fill className="object-contain" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
