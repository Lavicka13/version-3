"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Quote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-[#F0F0F0]">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 mx-auto mb-6 text-[#6A0DAD]/30"
            fill="currentColor"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <blockquote className="text-[#1A1A1A] text-2xl md:text-3xl lg:text-4xl font-light leading-[1.4] italic">
            In der Stille liegt die Kraft zur Regeneration.
          </blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8"
          >
            <span className="text-[#6A0DAD] text-sm tracking-[0.15em]">
              — Ruth-A. Schwendtner
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
