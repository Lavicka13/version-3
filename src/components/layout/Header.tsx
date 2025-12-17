"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Angebote", href: "#angebote" },
  { label: "Preise", href: "#preise" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo - Handwriting style */}
            <a
              href="#"
              className="font-handwriting text-3xl lg:text-4xl text-[#6A0DAD] hover:scale-105 transition-transform"
            >
              Zeitinsel
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative font-display text-sm tracking-[0.1em] text-[#1A1A1A] py-2"
                >
                  {item.label}
                  {/* Botanical underline - vine style */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-6 opacity-0 group-hover:w-16 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <Image
                      src="/illustrations/vine.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </span>
                </a>
              ))}

              {/* CTA Button with flower */}
              <a
                href="#kontakt"
                className="btn-botanical text-sm"
              >
                Termin buchen
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#6A0DAD] hover:scale-110 transition-transform"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Botanical Style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Warm gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8F3] via-white to-[#E9E4F0]" />

            {/* Botanical pattern overlay */}
            <div className="absolute inset-0 opacity-[0.04]">
              <Image
                src="/illustrations/botanical-pattern.svg"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative flowers */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-20 right-8 w-24 h-24"
            >
              <Image src="/illustrations/frangipani.svg" alt="" fill />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-32 left-8 w-20 h-20"
            >
              <Image src="/illustrations/frangipani.svg" alt="" fill />
            </motion.div>

            {/* Navigation */}
            <nav className="relative flex flex-col items-center justify-center h-full px-8 gap-6">
              {/* Handwriting title */}
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-handwriting text-5xl text-[#6A0DAD] mb-8"
              >
                Zeitinsel
              </motion.p>

              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-2xl font-light text-[#1A1A1A] hover:text-[#6A0DAD] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#kontakt"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 btn-botanical"
              >
                Termin buchen
              </motion.a>

              {/* Contact info with flower accent */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-16 flex flex-col items-center gap-2"
              >
                <div className="w-6 h-6 opacity-40 mb-2">
                  <Image src="/illustrations/frangipani-small.svg" alt="" width={24} height={24} />
                </div>
                <p className="text-[#6A0DAD]/60 text-sm font-light">
                  0151 708 36 557
                </p>
                <p className="text-[#6A0DAD]/60 text-sm font-light">
                  rasch.kosmetik@gmail.com
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
