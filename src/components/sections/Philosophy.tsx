"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-[#6A0DAD]">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white/60 text-sm tracking-[0.3em] uppercase mb-6"
          >
            Philosophie
          </motion.p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-light leading-[1.2] mb-8">
            Luxus bedeutet Zeit.
            <br />
            <span className="text-white/80">Zeit für Sie.</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "40px" } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="h-[1px] bg-white/40 mx-auto mb-8"
          />

          <p className="text-white/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            In einer Welt, die nie still steht, schenke ich Ihnen einen Ort der Ruhe.
            Hier zählt nur der Moment – Ihre persönliche Zeitinsel, auf der Schönheit
            von innen nach außen strahlt.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
