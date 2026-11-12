import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionParallax from "./SectionParallax";

const TESTIMONIALS = [
  {
    name: "Creative Director",
    org: "LLM",
    initials: "LLM",
    quote:
      "Brand Bros transformed our visual identity with premium storytelling. Every campaign felt cinematic, resulting in stronger audience engagement and memorable brand recall.",
  },
  {
    name: "Marketing Head",
    org: "Raymond",
    initials: "RY",
    quote:
      "The Brand Bros team elevated our luxury positioning across digital platforms. Their production quality, creativity, and execution exceeded every expectation.",
  },
  {
    name: "Founder",
    org: "Berry Bros",
    initials: "BB",
    quote:
      "From strategy to execution, Brand Bros delivered content that truly reflected our vision. Our engagement grew rapidly, and our brand presence became stronger than ever.",
  },
  {
    name: "Operations Manager",
    org: "JO Motel",
    initials: "JM",
    quote:
      "Brand Bros captured the experience of our property beautifully. Their cinematic reels increased our online visibility and helped attract more direct bookings.",
  },
  {
    name: "Brand Manager",
    org: "XTRAFUEL",
    initials: "XF",
    quote:
      "Their high-energy creative perfectly matched our brand personality. Brand Bros consistently delivered content that drove impressive reach and customer engagement.",
  },
  {
    name: "Marketing Manager",
    org: "Nikon India",
    initials: "NK",
    quote:
      "Brand Bros understands visual storytelling at a different level. Every shoot was thoughtfully crafted and delivered exceptional results across our digital campaigns.",
  },
  {
    name: "Dean of Admissions",
    org: "GLA University",
    initials: "GLA",
    quote:
      "Brand Bros modernized our digital communication with impactful campaigns and engaging content. Their work significantly strengthened our outreach to prospective students.",
  },
  {
    name: "Founder & CEO",
    org: "Think And Grow",
    initials: "TG",
    quote:
      "Partnering with Brand Bros gave our brand a premium identity online. Their creativity, strategy, and attention to detail made a measurable difference to our growth.",
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
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#faf6e9] px-6 py-24 text-[#0b0b0b] md:px-12 md:py-32"
    >
      <SectionParallax
        targetRef={ref}
        className="z-0"
        style={{
          background:
            "radial-gradient(ellipse at 90% 15%, rgba(242,201,0,.13), transparent 38%), radial-gradient(ellipse at 5% 90%, rgba(242,201,0,.08), transparent 35%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#514e48]">
            Client stories
          </p>
          <h2 className="text-[clamp(3rem,7vw,6rem)] uppercase leading-[0.9] text-[#0b0b0b]" style={{ fontFamily: "'Anton', sans-serif" }}>
            What clients <span className="text-[#f2c900]">say.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-[#514e48] sm:text-base">
            A few words from the people we&apos;ve had the pleasure of working with.
          </p>
        </motion.div>

        {/* Card */}
        <div className="relative overflow-hidden rounded-[7px] border border-[#ded9ce] bg-[#fffefa] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.055)] sm:p-8 md:p-12">
          <Quote size={120} className="pointer-events-none absolute right-4 top-4 text-[#f2c900]/15 sm:right-8 sm:top-8" />

          <div className="flex flex-col items-start gap-7 md:flex-row md:items-center md:gap-10">
            {/* Avatar */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#f2c900] bg-[#faf6e9] sm:h-20 sm:w-20">
              <span className="text-2xl text-[#0b0b0b] sm:text-3xl" style={{ fontFamily: "'Anton', sans-serif" }}>{t.initials}</span>
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
                  <blockquote className="text-base font-medium leading-relaxed text-[#0b0b0b] sm:text-lg md:text-2xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="mt-6">
                    <p className="text-sm font-bold text-[#0b0b0b] sm:text-base">{t.name}</p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#514e48]">{t.org}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between border-t border-[#ded9ce] pt-5">
            <span className="text-xs font-medium text-[#514e48]">
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
                      ? "w-5 h-1.5 bg-[#f2c900]"
                      : "w-1.5 h-1.5 bg-black/20 hover:bg-black/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2.5">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ded9ce] text-[#0b0b0b] transition-all duration-200 hover:border-[#f2c900] hover:bg-[#f2c900]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ded9ce] text-[#0b0b0b] transition-all duration-200 hover:border-[#f2c900] hover:bg-[#f2c900]"
                aria-label="Next testimonial"
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