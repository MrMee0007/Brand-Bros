import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";

/* ── Slide data ──────────────────────────────────── */
const SLIDES = [
  {
    id: 1,
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1783361373/Img23_sfv5n0.jpg",
    category: "Brand Film",
    title: "The Sensory\nUniverse",
    tag: "#BrandStory",
    color: "#D4A034",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1783361360/Img14_ypazc9.jpg",
    category: "Fashion Editorial",
    title: "Modern\nGenre",
    tag: "#FashionFilm",
    color: "#F5C200",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774478219/IMG_1232_njdn3g.webp",
    category: "F&B Campaign",
    title: "Glimpse in\nthe Dark",
    tag: "#FoodPhotography",
    color: "#E8A820",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1783362280/Img6_kvvaw1.jpg",
    category: "Production",
    title: "Behind \nCamera",
    tag: "#StudioLife",
    color: "#F5C200",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774478160/IMG_0110.JPG_tticnz.webp",
    category: "Creator Growth",
    title: "Your Story,\nAmplified",
    tag: "#CreatorEconomy",
    color: "#D4A034",
  },
];

/* ── Animated counter ────────────────────────────── */
function Count({ to, suffix }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const dur = 1400, t0 = performance.now();
      const tick = t => {
        const p = Math.min((t - t0) / dur, 1);
        setN(Math.round((1 - (1 - p) ** 3) * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick); obs.disconnect();
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ── Main Hero ───────────────────────────────────── */
export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState(null);
  const [dir, setDir]         = useState(1);       // 1 = next, -1 = prev
  const [paused, setPaused]   = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progRef     = useRef(null);
  const sectionRef  = useRef(null);

  const DURATION = 5500;

  /* Scroll parallax */
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imgY   = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const fadeUp = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  /* Navigate */
  const goTo = useCallback((idx, direction) => {
    setPrev(current);
    setDir(direction);
    setCurrent(idx);
    setProgress(0);
  }, [current]);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length,  1), [current, goTo]);
  const prev_ = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length, -1), [current, goTo]);

  /* Auto-play with smooth progress */
  useEffect(() => {
    if (paused) { clearInterval(intervalRef.current); return; }
    setProgress(0);
    const start = performance.now();
    const tick  = t => {
      const p = ((t - start) % DURATION) / DURATION * 100;
      setProgress(p);
      progRef.current = requestAnimationFrame(tick);
    };
    progRef.current = requestAnimationFrame(tick);
    intervalRef.current = setInterval(next, DURATION);
    return () => {
      clearInterval(intervalRef.current);
      cancelAnimationFrame(progRef.current);
    };
  }, [current, paused, next]);

  const slide = SLIDES[current];

  /* Slide variants */
  const imgVariants = {
    enter:  (d) => ({ x: d > 0 ? "100%"  : "-100%", scale: 1.08 }),
    center: { x: "0%", scale: 1.04, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
    exit:   (d) => ({ x: d > 0 ? "-12%"  : "12%",  scale: 1, opacity: 0.2, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } }),
  };

  const contentVariants = {
    enter:  { opacity: 0, y: 40 },
    center: { opacity: 1, y: 0,  transition: { duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] } },
    exit:   { opacity: 0, y: -20, transition: { duration: 0.35 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative -mt-0 w-full overflow-hidden bg-black"
      style={{ height: "100dvh", minHeight: "100vh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ══════ SLIDE IMAGES ══════════════════════ */}
      <AnimatePresence custom={dir} initial={false}>
        <motion.div
          key={`img-${current}`}
          custom={dir}
          variants={imgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
          style={{ y: imgY }}
        >
          {/* <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
            draggable={false}
          /> */}

          <img
  src={slide.img}
  alt={slide.title}
  className="w-full h-full object-cover"
  loading="lazy"
/>

          {/* Multi-layer overlay for perfect text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/40" />
          {/* Color tint matching slide */}
          <div
            className="absolute inset-0 mix-blend-multiply opacity-20"
            style={{ background: `radial-gradient(ellipse 60% 60% at 70% 40%, ${slide.color}44, transparent)` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ══════ DIAGONAL CORNER ACCENTS ══════════ */}
      <div className="absolute top-0 right-0 w-40 h-full diag-stripes opacity-5 pointer-events-none" />

      {/* ══════ SLIDE NUMBER (BIG BG) ════════════ */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden xl:block">
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-[10rem] leading-none"
            style={{ color: "transparent", WebkitTextStroke: `3px rgba(245,194,0,1.08)` }}
          >
            {String(current + 1).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ══════ MAIN CONTENT ═════════════════════ */}
      <motion.div
        style={{ opacity: fadeUp }}
        className="absolute inset-0 flex flex-col justify-between z-10"
      >
        {/* ── TOP BAR — category pill only (logo is in Navbar) ─── */}
        <div className="flex items-center justify-end px-8 md:px-14 pt-28 pb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`cat-${current}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 border border-[#F5C200]/20 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2"
            >
              <span className="size-1.5 rounded-full bg-[#F5C200] animate-pulse" />
              <span className="text-[8.5px] uppercase tracking-[0.35em] text-[#F5C200]/80">
                {slide.category}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── SLIDE CONTENT ────────────────────── */}
        <div className="flex-1 flex items-end px-8 md:px-14 pb-8">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={`content-${current}`}
              custom={dir}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full max-w-3xl"
            >
              {/* Tag */}
              <p className="text-[8.5px] uppercase tracking-[0.38em] text-[#F5C200]/60 mb-3">
                {slide.tag}
              </p>

              {/* Main title — HUGE */}
              <h1
                className="font-heading text-white leading-none mb-5 uppercase"
                style={{ fontSize: "clamp(3.2rem, 9vw, 8.5rem)", lineHeight: 0.87 }}
              >
                {slide.title.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {i === 1
                      ? <span className="text-[#F5C200]">{line}</span>
                      : line
                    }
                  </span>
                ))}
              </h1>

              {/* Client + Metric row */}
              <div className="flex flex-wrap items-center gap-5 mb-7">
                <span className="text-white/40 text-xs tracking-wider">{slide.client}</span>
                <span className="w-px h-3 bg-white/20" />
                <span
                  className="font-heading text-sm tracking-[0.12em]"
                  style={{ color: slide.color }}
                >
                  {slide.metric}
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/work"
                  className="group relative inline-flex items-center gap-2 bg-[#F5C200] text-black px-7 py-3.5 text-[9px] font-bold uppercase tracking-[0.35em] overflow-hidden hover:-translate-y-px transition-all duration-300 shadow-[0_0_30px_rgba(245,194,0,0.3)]"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500" />
                  View Our Work
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-white/18 backdrop-blur-sm bg-white/5 px-7 py-3.5 text-[9px] font-bold uppercase tracking-[0.35em] text-white hover:border-[#F5C200]/50 hover:bg-[#F5C200]/8 hover:text-[#F5C200] transition-all duration-300"
                >
                  Start a Project
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── BOTTOM BAR ───────────────────────── */}
        <div className="px-8 md:px-14 py-5 flex items-center gap-6 border-t border-white/8 bg-black/30 backdrop-blur-md">

          {/* Slide counter */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="font-heading text-[#F5C200] text-lg leading-none"
              >
                {String(current + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <span className="text-white/20 font-heading text-sm">/ {String(SLIDES.length).padStart(2, "0")}</span>
          </div>

          {/* Progress bar */}
          <div className="flex-1 flex items-center gap-1.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className="relative flex-1 h-0.5 bg-white/10 overflow-hidden rounded-full cursor-pointer hover:bg-white/20 transition-colors"
                aria-label={`Go to slide ${i + 1}`}
              >
                {i === current && (
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-[#F5C200] rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}
                {i < current && (
                  <div className="absolute left-0 top-0 h-full w-full bg-[#F5C200]/40 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Stats strip (desktop) */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
            {[
              { to: 17, suffix: "+", label: "Brands" },
              { to: 86, suffix: "+", label: "Reels" },
              { to: 3, suffix: "M", label: "Reach" },
            ].map(({ to, suffix, label }) => (
              <div key={label} className="text-center">
                <p className="font-heading text-base leading-none text-[#F5C200]">
                  <Count to={to} suffix={suffix} />
                </p>
                <p className="text-[7px] uppercase tracking-[0.2em] text-white/25 mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={prev_}
              className="group w-10 h-10 border border-white/12 flex items-center justify-center hover:border-[#F5C200] hover:bg-[#F5C200] transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} className="text-white/50 group-hover:text-black transition-colors" />
            </button>
            <button
              onClick={next}
              className="group w-10 h-10 border border-white/12 flex items-center justify-center hover:border-[#F5C200] hover:bg-[#F5C200] transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={16} className="text-white/50 group-hover:text-black transition-colors" />
            </button>
          </div>

          {/* Tagline (desktop) */}
          <span className="hidden xl:block text-[7.5px] uppercase tracking-[0.35em] text-white/18 flex-shrink-0">
            Create. Edit. Inspire.
          </span>
        </div>
      </motion.div>

      {/* ══════ SIDE DOT NAV ═════════════════════ */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-2 hidden md:flex">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            aria-label={`Slide ${i + 1}`}
            className="group flex items-center gap-2"
          >
            <span
              className="transition-all duration-400 rounded-full"
              style={{
                width:  i === current ? "24px" : "6px",
                height: "6px",
                background: i === current ? "#F5C200" : "rgba(255,255,255,0.2)",
              }}
            />
          </button>
        ))}
      </div>

      {/* ══════ VERTICAL SCROLL HINT ═════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute left-8 bottom-24 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <div className="relative h-14 w-px overflow-hidden">
          <div className="absolute inset-0 bg-white/8" />
          <motion.div
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent via-[#F5C200] to-transparent"
          />
        </div>
        <span
          className="text-[7px] uppercase tracking-[0.4em] text-white/20"
          style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
