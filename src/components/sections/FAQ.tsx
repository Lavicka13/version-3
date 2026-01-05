"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "Was soll ich mitbringen?",
    answer: "Bitte bringen Sie ein Badetuch mit.",
  },
  {
    question: "Muss ich mich komplett ausziehen?",
    answer: "Nein, Slip und BH bleiben an.",
  },
  {
    question: "Wie lange dauert eine Behandlung?",
    answer: "Massagen: 30-75 Minuten. Kosmetik: 30-90 Minuten.",
  },
  {
    question: "Gibt es Parkplätze?",
    answer: "Ja, Privatparkplätze direkt vor dem Haus.",
  },
  {
    question: "Ist der Salon barrierefrei?",
    answer: "Nein, leider befinden sich die Räumlichkeiten in der 1. Etage (Treppen). Es sind jedoch Hausbesuche möglich.",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#FDF8F3]/50 via-white to-[#E9E4F0]/30 overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-14 h-14 opacity-[0.10]"
      >
        <Image src="/illustrations/frangipani.svg" alt="" fill />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 right-[8%] w-12 h-12 opacity-[0.08]"
      >
        <Image src="/illustrations/frangipani.svg" alt="" fill />
      </motion.div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
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
            Gut zu wissen
          </p>
          <h2 className="font-handwriting text-5xl md:text-6xl lg:text-7xl text-[#6A0DAD]">
            Häufige Fragen
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-5 bg-white/80 backdrop-blur-sm rounded-2xl shadow-botanical hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 opacity-50 flex-shrink-0">
                      <Image src="/illustrations/frangipani-small.svg" alt="" width={16} height={16} />
                    </span>
                    <span className="text-[#1A1A1A] font-light">
                      {faq.question}
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#6A0DAD] text-xl flex-shrink-0"
                  >
                    ↓
                  </motion.span>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 pl-7 text-[#1A1A1A]/70 font-light text-sm">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
