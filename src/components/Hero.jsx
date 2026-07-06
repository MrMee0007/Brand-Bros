import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import hero1 from "@/assets/Shourya.jpeg";
import hero2 from "@/assets/Shourya.jpeg";
import hero3 from "@/assets/Shourya.jpeg";
import hero4 from "@/assets/Shourya.jpeg";

const SLIDES = [
  {
    src: hero1,
    kicker: "Brand Films",
    title: "Cinematic storytelling",
    meta: "Reels · Brand Films · YouTube",
  },
  {
    src: hero2,
    kicker: "Product Shoots",
    title: "Light, glass & precision",
    meta: "Studio · Lifestyle · D2C",
  },
  {
    src: hero3,
    kicker: "Content Creation",
    title: "Editorial energy",
    meta: "Social · UGC · Campaigns",
  },
  {
    src: hero4,
    kicker: "Drone & Events",
    title: "Above the moment",
    meta: "Aerial · Live · Coverage",
  },
];

const DURATION = 6000;

function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const rafRef = useRef<number | null>(null);
  const startRef = useRef(0);

  const go = (next: number) => {
    setI((next + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    startRef.current = performance.now();
    setProgress(0);

    const tick = (t: number) => {
      if (paused) {
        startRef.current = t - progress * DURATION;
      } else {
        const p = Math.min(1, (t - startRef.current) / DURATION);
        setProgress(p);

        if (p >= 1) {
          setI((prev) => (prev + 1) % SLIDES.length);
          return;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [i, paused]);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={SLIDES[i].src}
          alt={SLIDES[i].title}
          width={1920}
          height={1080}
          className="h-full w-full object-cover animate-ken-burns"
        />

        {/* Color Grade Overlay */}
        <div className="absolute inset-0 mix-blend-multiply opacity-60 bg-[radial-gradient(ellipse_at_30%_40%,transparent,oklch(0.08_0.012_270/0.9))]" />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40 pointer-events-none" />

      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_45%,oklch(0.05_0.01_270/0.7)_100%)] pointer-events-none" />

      {/* Film Grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>")`,
        }}
      />

      {/* Caption */}
      <div className="absolute left-6 md:left-10 bottom-28 md:bottom-32 max-w-md pointer-events-none">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-[oklch(0.68_0.22_25)]" />

            <span className="text-[10px] uppercase tracking-[0.35em] text-[oklch(0.78_0.18_25)]">
              {SLIDES[i].kicker}
            </span>
          </div>

          <p className="font-display text-2xl md:text-3xl text-foreground/95 leading-tight">
            {SLIDES[i].title}
          </p>

          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {SLIDES[i].meta}
          </p>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        {/* Progress Bar */}
        <div className="relative h-px w-full bg-white/10">
          <div
            className="absolute inset-y-0 left-0 bg-[oklch(0.68_0.22_25)]"
            style={{
              width: `${progress * 100}%`,
              transition: paused ? "none" : "width 60ms linear",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-5 flex items-end justify-between gap-6">
          {/* Counter */}
          <div className="flex items-end gap-2 font-display leading-none">
            <span className="text-5xl md:text-6xl text-foreground tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>

            <span className="pb-1.5 text-muted-foreground/60 text-base">
              / {String(SLIDES.length).padStart(2, "0")}
            </span>
          </div>

          {/* Thumbnails */}
          <div className="hidden md:flex items-center gap-3">
            {SLIDES.map((slide, idx) => {
              const active = idx === i;

              return (
                <button
                  key={idx}
                  onClick={() => go(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                  className={`group relative overflow-hidden rounded-md transition-all duration-500 ${
                    active
                      ? "w-28 h-16 ring-1 ring-[oklch(0.68_0.22_25)]"
                      : "w-16 h-12 ring-1 ring-white/10 hover:ring-white/40"
                  }`}
                >
                  <img
                    src={slide.src}
                    alt=""
                    className={`h-full w-full object-cover transition-all duration-500 ${
                      active
                        ? "opacity-100"
                        : "opacity-50 grayscale group-hover:opacity-80 group-hover:grayscale-0"
                    }`}
                  />

                  <span
                    className={`absolute inset-x-0 bottom-0 h-[2px] bg-[oklch(0.68_0.22_25)] origin-left transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => go(i - 1)}
              aria-label="Previous slide"
              className="size-11 inline-flex items-center justify-center rounded-full glass hover:bg-[oklch(0.58_0.22_25)]/30 hover:border-[oklch(0.68_0.22_25)] transition-colors text-foreground"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              onClick={() => go(i + 1)}
              aria-label="Next slide"
              className="size-11 inline-flex items-center justify-center rounded-full glass hover:bg-[oklch(0.58_0.22_25)]/30 hover:border-[oklch(0.68_0.22_25)] transition-colors text-foreground"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HeroCarousel };