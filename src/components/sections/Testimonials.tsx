"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Ich war das erste Mal in der Zeitinsel und fühlte mich schon vor den eigentlichen Räumlichkeiten sehr wohl. Die Massage war super entspannend und wohltuend. Auch mit der Gesichtsbehandlung war ich sehr zufrieden. Ich fühlte mich, einfach gesagt, einmal umgedreht, was heißen soll, dass ich den Aufenthalt hier sehr genossen hab. Ich würde die Zeitinsel zu 100% weiterempfehlen!",
    author: "Caro S.",
    date: "November 2025",
  },
  {
    text: "Die Wellness-Zeitinsel ist ein traumhaft schönes Gefühl für mich gewesen. Mit besinnlicher Musik, schönem Duft und den warmen Händen der Masseurin Ruth, konnte ich richtig gut abschalten um die Massage mit allen Sinnen zu genießen. Die Masseurin kennt sich in ihrem Geschäft gut aus. Sie achtet auf Kleinigkeiten und geht fachkundig auf den Behandelnden ein. Selbst in der Nacht, nach der Massage, schläft man wie ein Baby. Ich kann sie nur wärmstens weiterempfehlen!",
    author: "Edeltraud F.",
    date: "November 2025",
  },
  {
    text: "Super tolle Massage – man fühlt sich direkt wohl bei ihr und nach der Massage fühlt man sich auch erholt. Ich komme auf jeden Fall wieder!",
    author: "Vanessa",
    date: "Dezember 2025",
  },
  {
    text: "Zeitinsel für Schönheit, Wellness und Massagen ist sehr empfehlenswert. Ich hatte eine Massage, war sehr angenehm und entspannend. Es wird gefragt was man mag oder nicht mag. Ob man irgendwo aufpassen muss. Werde es auf jeden Fall wiederholen. Frau Schwendtner ist sehr nett und zuvorkommend. Sie macht es mit Herzblut!",
    author: "Sandra",
    date: "Dezember 2025",
  },
  {
    text: "Ein sehr schönes Ambiente im eigenen Haus. Liebevoll eingerichtet. Hier nimmt man sich noch Zeit. Ich hatte eine sehr schöne Ganzkörpermassage. Entspannung pur. Immer wieder gerne!",
    author: "Sarah",
    date: "Dezember 2025",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-[#FDF8F3]/50 to-[#E9E4F0]/30 overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[8%] w-16 h-16 opacity-[0.10]"
      >
        <Image src="/illustrations/frangipani.svg" alt="" fill />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 right-[10%] w-14 h-14 opacity-[0.08]"
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

          <h2 className="font-handwriting text-5xl md:text-6xl lg:text-7xl text-[#6A0DAD] mb-4">
            Stimmen meiner Gäste
          </h2>
          <p className="text-[#1A1A1A]/60 font-light">
            Was meine Gäste über ihre Zeit in der Zeitinsel sagen
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white/80 shadow-botanical flex items-center justify-center text-[#6A0DAD] hover:bg-[#6A0DAD] hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-10 h-10 rounded-full bg-white/80 shadow-botanical flex items-center justify-center text-[#6A0DAD] hover:bg-[#6A0DAD] hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Testimonial Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-[2rem] shadow-botanical p-8 md:p-12 min-h-[320px] flex flex-col justify-center overflow-hidden">
              {/* Large quote mark */}
              <div className="absolute top-6 left-8 opacity-10">
                <span className="font-handwriting text-[120px] text-[#6A0DAD] leading-none">&ldquo;</span>
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10"
                >
                  {/* Quote text */}
                  <p className="text-[#1A1A1A]/80 font-light text-lg md:text-xl leading-relaxed text-center mb-8 italic">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-8 h-8 mb-3 opacity-50"
                    >
                      <Image src="/illustrations/frangipani-small.svg" alt="" width={32} height={32} />
                    </motion.div>
                    <p className="text-[#6A0DAD] font-handwriting text-2xl">
                      {testimonials[current].author}
                    </p>
                    <p className="text-[#9D4EDD]/50 text-sm font-light">
                      {testimonials[current].date}
                    </p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#E9D5FF] text-lg">★</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`transition-all duration-300 ${
                  index === current
                    ? "w-8 h-2 bg-[#6A0DAD] rounded-full"
                    : "w-2 h-2 bg-[#E9D5FF] rounded-full hover:bg-[#9D4EDD]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[#1A1A1A]/50 font-light text-sm">
            Auch Sie möchten Ihre Erfahrung teilen? Ich freue mich über Ihre Bewertung!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
