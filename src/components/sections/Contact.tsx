"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
    <section id="kontakt" className="py-24 lg:py-32 bg-[#F0F0F0]">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Column - Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#6A0DAD] text-sm tracking-[0.3em] uppercase mb-4">
              Kontakt
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Ihr Termin bei Ruth-A.
            </h2>

            <div className="w-12 h-[1px] bg-[#6A0DAD] mb-8" />

            <p className="text-[#1A1A1A]/80 font-light leading-relaxed mb-10">
              Ich freue mich auf Sie. Vereinbaren Sie Ihren persönlichen Termin
              telefonisch oder per E-Mail. Für eine optimale Beratung nehme ich
              mir gerne Zeit für ein Vorgespräch.
            </p>

            {/* Contact Details */}
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
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-[#6A0DAD] transition-colors">
                        <item.icon className="w-4 h-4 text-[#6A0DAD] group-hover:text-white transition-colors" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[#999999] text-xs tracking-wider uppercase mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[#1A1A1A] font-light group-hover:text-[#6A0DAD] transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-[#6A0DAD]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[#999999] text-xs tracking-wider uppercase mb-0.5">
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

          {/* Right Column - Real Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            {/* Map Container */}
            <div className="relative aspect-square lg:aspect-[4/3] overflow-hidden bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.5!2d9.9834!3d49.2945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982e7f8f8f8f8f%3A0x0!2sIm%20Pfandwasen%2025%2C%2074572%20Blaufelden!5e0!3m2!1sde!2sde!4v1702468800000!5m2!1sde!2sde"
                className="absolute inset-0 w-full h-full grayscale-hover"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Zeitinsel - Im Pfandwasen 25, 74572 Blaufelden"
              />

              {/* Violet accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#6A0DAD]" />
            </div>

            {/* Address Card below map */}
            <div className="bg-white p-6 flex items-center justify-between">
              <div>
                <p className="text-[#1A1A1A] font-light">
                  Im Pfandwasen 25
                </p>
                <p className="text-[#999999] text-sm font-light">
                  74572 Blaufelden
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Im+Pfandwasen+25+74572+Blaufelden"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6A0DAD] text-sm font-display tracking-[0.1em] hover:text-[#5a0b93] transition-colors"
              >
                Route planen →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
