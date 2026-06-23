import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marketing Lead / Royal Enfield",
    initials: "RE",
    quote: "Brand Monk treats marketing like a craft. The Himalayan creator campaign moved both the culture and the cash register.",
  },
  {
    name: "Growth Director / Ixigo",
    initials: "IX",
    quote: "Their creator network is unreal. We unlocked 3x install lift in a single quarter without inflating budgets.",
  },
  {
    name: "Brand Manager / Nikon India",
    initials: "NK",
    quote: "They understood photography culture better than most photographers. Every reel felt native, every metric moved up.",
  },
  {
    name: "Dean of Admissions / GLA University",
    initials: "GLA",
    quote: "From positioning to performance funnels, Brand Monk rebuilt our admissions engine. +71% qualified leads, on record.",
  },
  {
    name: "Founder / Brndfy",
    initials: "BR",
    quote: "The clarity they brought to our positioning closed our first $2M of pipeline. Marketing monks is the right phrase.",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const t = testimonials[current];

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 px-6 md:px-12 overflow-hidden bg-black"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c7a450]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c7a450]/10 blur-[140px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#c7a450] uppercase tracking-[0.3em] text-xs mb-4">
            Client Stories
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-none">
            What Clients
            <span className="block text-[#c7a450] italic">
              Say About Us
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-14 overflow-hidden">

          {/* Giant Quote */}
          <Quote
            size={180}
            className="absolute right-6 top-6 text-[#c7a450]/10"
          />

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Avatar */}
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-[#c7a450]/30 flex items-center justify-center bg-gradient-to-br from-[#111] to-[#1a1a1a] flex-shrink-0">
              <span className="text-3xl md:text-4xl font-bold text-[#c7a450]">
                {t.initials}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                >
                  <blockquote className="text-xl md:text-3xl text-white leading-relaxed font-light">
                    "{t.quote}"
                  </blockquote>

                  <div className="mt-8">
                    <h4 className="text-white font-semibold text-lg">
                      {t.name}
                    </h4>

                    <p className="text-[#c7a450] uppercase tracking-[0.2em] text-xs mt-1">
                      {t.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between mt-10">
            <div className="text-white/40 text-sm">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prev}
                className="
                  w-12 h-12
                  rounded-full
                  border
                  border-[#c7a450]/30
                  text-[#c7a450]
                  flex
                  items-center
                  justify-center
                  hover:bg-[#c7a450]
                  hover:text-black
                  transition-all
                "
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={next}
                className="
                  w-12 h-12
                  rounded-full
                  border
                  border-[#c7a450]/30
                  text-[#c7a450]
                  flex
                  items-center
                  justify-center
                  hover:bg-[#c7a450]
                  hover:text-black
                  transition-all
                "
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}