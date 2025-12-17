"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Floating petal component
function FloatingPetal({ delay, duration, startX, size }: {
  delay: number;
  duration: number;
  startX: number;
  size: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${startX}%`, top: -50 }}
      initial={{ y: -50, x: 0, rotate: 0, opacity: 0 }}
      animate={{
        y: ["0vh", "110vh"],
        x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
        rotate: [0, 360],
        opacity: [0, 0.6, 0.6, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <Image
        src="/illustrations/frangipani-small.svg"
        alt=""
        width={size}
        height={size}
        className="opacity-40"
      />
    </motion.div>
  );
}

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations
  const springConfig = { damping: 25, stiffness: 150 };
  const logoX = useSpring(useTransform(mouseX, [-500, 500], [15, -15]), springConfig);
  const logoY = useSpring(useTransform(mouseY, [-500, 500], [10, -10]), springConfig);
  const leafX = useSpring(useTransform(mouseX, [-500, 500], [-20, 20]), springConfig);
  const leafY = useSpring(useTransform(mouseY, [-500, 500], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-warm">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F3] via-white to-[#E9E4F0]/30" />

      {/* Botanical background illustrations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large leaf - top left */}
        <motion.div
          style={{ x: leafX, y: leafY }}
          className="absolute -top-10 -left-20 w-80 h-96 opacity-[0.08]"
        >
          <Image
            src="/illustrations/leaf-1.svg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Large leaf - top right (flipped) */}
        <motion.div
          style={{ x: useTransform(leafX, v => -v), y: leafY }}
          className="absolute -top-5 -right-16 w-72 h-80 opacity-[0.06] scale-x-[-1]"
        >
          <Image
            src="/illustrations/leaf-1.svg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Horizontal leaf - bottom left */}
        <motion.div
          style={{ x: leafX }}
          className="absolute bottom-40 -left-10 w-60 h-40 opacity-[0.07]"
        >
          <Image
            src="/illustrations/leaf-2.svg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Frangipani flowers scattered */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[15%] w-16 h-16 opacity-[0.15]"
        >
          <Image src="/illustrations/frangipani.svg" alt="" fill className="object-contain" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-[12%] w-20 h-20 opacity-[0.12]"
        >
          <Image src="/illustrations/frangipani.svg" alt="" fill className="object-contain" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -6, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-[20%] w-14 h-14 opacity-[0.10]"
        >
          <Image src="/illustrations/frangipani.svg" alt="" fill className="object-contain" />
        </motion.div>

        {/* Vine decoration */}
        <div className="absolute bottom-32 left-0 w-full h-16 opacity-[0.08]">
          <Image
            src="/illustrations/vine.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Floating petals */}
        <FloatingPetal delay={0} duration={15} startX={10} size={24} />
        <FloatingPetal delay={3} duration={18} startX={30} size={20} />
        <FloatingPetal delay={6} duration={20} startX={70} size={28} />
        <FloatingPetal delay={9} duration={16} startX={85} size={22} />
        <FloatingPetal delay={12} duration={22} startX={50} size={26} />
      </div>

      {/* Soft glow behind logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#E9D5FF]/40 via-[#E9D5FF]/10 to-transparent blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 py-24">
        {/* Logo with parallax */}
        <motion.div
          style={{ x: logoX, y: logoY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <Image
            src="/images/logo-full.png"
            alt="Zeitinsel - Für Schönheit, Wellness, Massagen"
            width={420}
            height={500}
            className="mx-auto drop-shadow-lg"
            priority
          />
        </motion.div>

        {/* Tagline with flower decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative inline-block mb-14"
        >
          {/* Small flower left */}
          <motion.div
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 opacity-60"
          >
            <Image src="/illustrations/frangipani-small.svg" alt="" fill />
          </motion.div>

          <p className="font-handwriting text-4xl md:text-5xl lg:text-6xl text-[#6A0DAD]">
            Ihre Auszeit beginnt hier
          </p>

          {/* Small flower right */}
          <motion.div
            animate={{ rotate: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-8 opacity-60"
          >
            <Image src="/illustrations/frangipani-small.svg" alt="" fill />
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a href="#preise" className="btn-botanical">
            Angebote entdecken
          </a>
          <a href="#kontakt" className="btn-minimal">
            Termin vereinbaren
          </a>
        </motion.div>

        {/* Location with leaf accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-20 flex items-center justify-center gap-3"
        >
          <div className="w-8 h-[1px] bg-[#6A0DAD]/30" />
          <p className="text-[#6A0DAD]/60 text-sm tracking-[0.3em] uppercase font-light">
            Blaufelden
          </p>
          <div className="w-8 h-[1px] bg-[#6A0DAD]/30" />
        </motion.div>
      </div>

      {/* Bottom wave with botanical feel */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E9E4F0" />
              <stop offset="50%" stopColor="#F8F6F9" />
              <stop offset="100%" stopColor="#E9E4F0" />
            </linearGradient>
          </defs>
          <path
            d="M0,40 C120,80 240,20 360,50 C480,80 600,30 720,60 C840,90 960,40 1080,60 C1140,70 1170,55 1200,50 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    </section>
  );
}
