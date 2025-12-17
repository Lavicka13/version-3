"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "0151 708 36 557",
    href: "tel:+4915170836557",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "rasch.kosmetik@gmail.com",
    href: "mailto:rasch.kosmetik@gmail.com",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Im Pfandwasen 25, 74572 Blaufelden",
    href: "https://maps.google.com/?q=Im+Pfandwasen+25+74572+Blaufelden",
  },
  {
    icon: Clock,
    label: "Termine",
    value: "Nach Vereinbarung",
    href: null,
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontakt" className="relative py-24 lg:py-32 bg-gradient-to-b from-[#E9E4F0]/30 via-[#FDF8F3] to-white overflow-hidden">
      {/* Botanical background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <Image src="/illustrations/botanical-pattern.svg" alt="" fill className="object-cover" />
      </div>

      {/* Floating flowers */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[8%] w-18 h-18 opacity-[0.12]"
      >
        <Image src="/illustrations/frangipani.svg" alt="" fill />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-24 left-[6%] w-14 h-14 opacity-[0.10]"
      >
        <Image src="/illustrations/frangipani.svg" alt="" fill />
      </motion.div>

      {/* Leaf decorations */}
      <div className="absolute top-0 left-0 w-56 h-64 opacity-[0.05]">
        <Image src="/illustrations/leaf-1.svg" alt="" fill className="object-contain" />
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-56 opacity-[0.04] scale-x-[-1]">
        <Image src="/illustrations/leaf-1.svg" alt="" fill className="object-contain" />
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Column - Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
                Kontakt
              </p>
            </div>

            <h2 className="font-handwriting text-5xl md:text-6xl lg:text-7xl text-[#6A0DAD] mb-4">
              Ihr Termin
            </h2>
            <p className="font-display text-xl font-light text-[#1A1A1A]/70 mb-8">
              bei Ruth-A.
            </p>

            {/* Vine decoration */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-4 w-32 mb-8 relative origin-left"
            >
              <Image src="/illustrations/vine.svg" alt="" fill className="object-contain" />
            </motion.div>

            <p className="text-[#1A1A1A]/80 font-light leading-relaxed mb-10">
              Ich freue mich auf Sie. Vereinbaren Sie Ihren persönlichen Termin
              telefonisch oder per E-Mail. Für eine optimale Beratung nehme ich
              mir gerne Zeit für ein Vorgespräch.
            </p>

            {/* Contact Details with botanical styling */}
            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 group"
                    >
                      {/* Icon with flower background */}
                      <div className="relative w-12 h-12">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#E9D5FF]/50 to-[#E9E4F0]/40 rounded-full group-hover:from-[#6A0DAD] group-hover:to-[#9D4EDD] transition-all duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-[#6A0DAD] group-hover:text-white transition-colors" strokeWidth={1.5} />
                        </div>
                        {/* Tiny flower accent */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity">
                          <Image src="/illustrations/frangipani-small.svg" alt="" width={16} height={16} />
                        </div>
                      </div>
                      <div>
                        <p className="text-[#9D4EDD]/70 text-xs tracking-wider uppercase mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[#1A1A1A] font-light group-hover:text-[#6A0DAD] transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#E9D5FF]/50 to-[#E9E4F0]/40 rounded-full" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-[#6A0DAD]" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div>
                        <p className="text-[#9D4EDD]/70 text-xs tracking-wider uppercase mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[#1A1A1A] font-light">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Map with organic frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            {/* Map Container with organic shape */}
            <div className="relative">
              {/* Organic blob background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#E9D5FF]/30 to-[#E9E4F0]/40 rounded-[30%_70%_60%_40%_/_40%_30%_70%_60%]" />

              {/* Map with rounded corners */}
              <div className="relative aspect-square lg:aspect-[4/3] overflow-hidden rounded-3xl shadow-botanical">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.5!2d9.9834!3d49.2945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982e7f8f8f8f8f%3A0x0!2sIm%20Pfandwasen%2025%2C%2074572%20Blaufelden!5e0!3m2!1sde!2sde!4v1702468800000!5m2!1sde!2sde"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Zeitinsel - Im Pfandwasen 25, 74572 Blaufelden"
                />
              </div>

              {/* Decorative flower */}
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-6 -right-4 w-14 h-14 opacity-30"
              >
                <Image src="/illustrations/frangipani.svg" alt="" fill />
              </motion.div>
            </div>

            {/* Address Card - Botanical style */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative mt-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-botanical"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-8 h-8 opacity-50"
                  >
                    <Image src="/illustrations/frangipani-small.svg" alt="" width={32} height={32} />
                  </motion.div>
                  <div>
                    <p className="text-[#1A1A1A] font-light">
                      Im Pfandwasen 25
                    </p>
                    <p className="text-[#9D4EDD]/70 text-sm font-light">
                      74572 Blaufelden
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Im+Pfandwasen+25+74572+Blaufelden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#6A0DAD] text-sm font-display tracking-[0.1em] hover:text-[#9D4EDD] transition-colors"
                >
                  <span>Route</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
