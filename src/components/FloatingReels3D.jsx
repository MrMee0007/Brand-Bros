import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* 3D-perspective floating reel cards arranged in a fan */
const REELS = [
  {
    tag: "Reels",
    title: "Midnight Run",
    metric: "4.8x ROAS",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1783360879/LLM_nrdbzc.mp4",
    rot: -18,
    x: -310,
    y: 20,
    z: -60,
  },
  {
    tag: "Branding",
    title: "Sensory Universe",
    metric: "1.2M Views",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1783360871/llm4_m2evo6.mp4",
    rot: -8,
    x: -180,
    y: -5,
    z: -20,
  },
  {
    tag: "Product",
    title: "Light on Glass",
    metric: "+87% CVR",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1783360733/v6_rtzug4.mp4",
    rot: 0,
    x: 0,
    y: 0,
    z: 0,
  },
  {
    tag: "Fashion",
    title: "Modern Luxury",
    metric: "+240% Engage",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1783360835/jawa_1_khtbci.mp4",
    rot: 8,
    x: 180,
    y: -5,
    z: -20,
  },
  {
    tag: "Events",
    title: "Three Days",
    metric: "8.4M Reach",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1783360837/llm_female_formal_g2e3fi.mp4",
    rot: 18,
    x: 310,
    y: 20,
    z: -60,
  },
];

export default function FloatingReels3D() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section className="py-20 overflow-hidden relative bg-black" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--brand)]/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center mb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[var(--brand)] uppercase tracking-[0.3em] text-[10px] mb-4">// The Format We Love</p>
          <h2 className="font-heading text-[clamp(2.2rem,5vw,4rem)] leading-none uppercase">
            <span className="text-[#F5C200]">Every Story,<br />Purest Form.</span>
          </h2>
          <p className="text-white/35 text-xl mt-4 max-w-md mx-auto leading-relaxed">
            We produce everything natively in 9:16 — the format designed for how people actually watch content in 2026.
          </p>
        </motion.div>
      </div>

      {/* 3D Fan of cards */}
      <div className="relative h-[460px] md:h-[520px] flex items-center justify-center" style={{ perspective: "3000px" }}>
        {REELS.map((reel, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, rotateY: reel.rot * 2 }}
            animate={inView ? {
              opacity: 1,
              y: reel.y,
              rotateY: reel.rot,
              rotateZ: reel.rot * 0.3,
              x: reel.x,
              z: reel.z,
            } : {}}
            transition={{ duration: 1, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
            whileHover={{ y: reel.y - 20, scale: 1.06, rotateY: 0, rotateZ: 0, zIndex: 50, transition: { duration: 0.4 } }}
            className="absolute cursor-pointer"
            style={{ transformStyle: "preserve-3d", zIndex: i === 2 ? 10 : 5 - Math.abs(i - 2) }}
          >
            {/* 9:16 card */}
            <div className="w-36 md:w-44 aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 relative shadow-[0_20px_60px_rgba(0,0,0,0.6)] group hover:border-[var(--brand)]/50 transition-colors duration-300">
              <video
  src={reel.video}
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  className="absolute inset-0 w-full h-full object-cover"
></video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />

              {/* Reel indicator */}
              <div className="absolute top-3 left-3 flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-red-400" />
                <span className="text-[6px] uppercase tracking-[0.2em] text-white/45">REEL</span>
              </div>

              {/* Tag */}
              <div className="absolute top-3 right-3">
                <span className="text-[6px] bg-black/60 border border-white/10 px-1.5 py-0.5 rounded text-white/40 uppercase tracking-[0.1em]">{reel.tag}</span>
              </div>

              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-[var(--brand)] group-hover:border-[var(--brand)] transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-0.5 text-white group-hover:text-black transition-colors"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-heading text-sm text-[var(--brand)] leading-tight">{reel.metric}</p>
                <p className="text-[8px] text-white/60 mt-0.5 leading-tight">{reel.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-6">
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/18">Hover to preview</p>
      </div>
    </section>
  );
}
