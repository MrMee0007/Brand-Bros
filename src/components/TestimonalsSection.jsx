import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Marketing Lead",
    org: "Royal Enfield",
    initials: "RE",
    quote: "MEDIAVERSE treats every project like a craft. The Himalayan campaign moved both the culture and the cash register. Absolutely cinematic.",
  },
  {
    name: "Growth Director",
    org: "Ixigo",
    initials: "IX",
    quote: "Their content network is unreal. We unlocked 3x install lift in a single quarter without inflating the budget by a single rupee.",
  },
  {
    name: "Brand Manager",
    org: "Nikon India",
    initials: "NK",
    quote: "They understood photography culture better than most photographers I've worked with. Every reel felt native — every metric moved up.",
  },
  {
    name: "Dean of Admissions",
    org: "GLA University",
    initials: "GLA",
    quote: "From brand positioning to performance funnels, MEDIAVERSE rebuilt our admissions engine from scratch. Plus 71% qualified leads, on record.",
  },
  {
    name: "Founder",
    org: "Brndfy",
    initials: "BR",
    quote: "The strategic clarity they brought to our positioning closed our first ₹2Cr of pipeline. The best creative decision we've made as a startup.",
  },
];

export default function TestimonialsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % TESTIMONIALS.length), 5200);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((p) => (p + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[current];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-black">

      {/* Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand)]/7 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5C200]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[var(--brand)] uppercase tracking-[0.3em] text-[10px] mb-5">Client Stories</p>
          <h2 className="font-heading text-5xl md:text-7xl leading-none">
          
            <span className="block text-[var(--brand)]">  What Clients Say About Us</span>
          </h2>
        </motion.div>

        {/* Card */}
        <div className="relative rounded-[2.5rem] border border-white/8 bg-white/[0.02] backdrop-blur-xl p-8 md:p-14 overflow-hidden">
          <Quote size={160} className="absolute right-6 top-6 text-[var(--brand)]/8 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Avatar */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[var(--brand)]/28 flex items-center justify-center bg-gradient-to-br from-[#111] to-[#1c1c1c] flex-shrink-0">
              <span className="font-heading text-3xl md:text-4xl text-[var(--brand)]">{t.initials}</span>
            </div>

            {/* Quote */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 35 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -35 }}
                  transition={{ duration: 0.45 }}
                >
                  <blockquote className="text-lg md:text-2xl text-white leading-relaxed font-light">
                    "{t.quote}"
                  </blockquote>

                  <div className="mt-7">
                    <p className="text-white font-semibold text-base">{t.name}</p>
                    <p className="text-[var(--brand)] uppercase tracking-[0.2em] text-[10px] mt-0.5">{t.org}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            <span className="text-white/30 text-xs">
              {String(current + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
            </span>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-5 h-1.5 bg-[var(--brand)]"
                      : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2.5">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-[var(--brand)]/28 text-[var(--brand)] flex items-center justify-center hover:bg-[var(--brand)] hover:text-black transition-all duration-200"
                aria-label="Previous"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-[var(--brand)]/28 text-[var(--brand)] flex items-center justify-center hover:bg-[var(--brand)] hover:text-black transition-all duration-200"
                aria-label="Next"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}