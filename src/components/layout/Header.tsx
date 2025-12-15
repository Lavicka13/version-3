"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <svg
                viewBox="0 0 40 40"
                className="w-7 h-7 lg:w-8 lg:h-8"
                aria-hidden="true"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  fill="none"
                  stroke="#6A0DAD"
                  strokeWidth="1"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="8"
                  fill="none"
                  stroke="#6A0DAD"
                  strokeWidth="1"
                />
              </svg>
              <span className="font-display text-base lg:text-lg tracking-[0.2em] text-[#6A0DAD] font-light">
                ZEITINSEL
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-display text-sm tracking-[0.1em] text-[#1A1A1A] nav-underline"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#kontakt"
                className="font-display text-sm tracking-[0.1em] text-[#6A0DAD] border border-[#6A0DAD] px-5 py-2 hover:bg-[#6A0DAD] hover:text-white transition-all duration-300"
              >
                Termin buchen
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#1A1A1A]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Improved */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F0F0F0]/50" />

            <nav className="relative flex flex-col items-start justify-center h-full px-8 gap-8">
              <p className="text-[#6A0DAD] text-xs tracking-[0.3em] uppercase mb-4">
                Navigation
              </p>

              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-3xl font-light text-[#1A1A1A] hover:text-[#6A0DAD] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#kontakt"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 btn-minimal"
              >
                Termin buchen
              </motion.a>

              {/* Contact info in mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-12 left-8"
              >
                <p className="text-[#999999] text-sm font-light">
                  0151 708 36 557
                </p>
                <p className="text-[#999999] text-sm font-light">
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
