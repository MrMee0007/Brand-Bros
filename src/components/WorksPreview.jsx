import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const WORKS = [
  { tag: "Brand Film",    client: "Noir Roasters · F&B",          title: "The Sensory Universe",  metric: "1.2M Reel views",   bg: "linear-gradient(180deg,#120600 0%,#5c2500 60%,#2a1000 100%)" },
  { tag: "Fashion Reel",  client: "Luxe Collective · Fashion",     title: "Defining Modern Luxury", metric: "+240% Engagement",  bg: "linear-gradient(180deg,#0a0016 0%,#3a0060 60%,#180030 100%)" },
  { tag: "Product",       client: "Aura Skincare · Beauty",        title: "Light on Glass",         metric: "+87% Conversion",   bg: "linear-gradient(180deg,#001a12 0%,#004535 60%,#001e14 100%)" },
  { tag: "Commercial",    client: "Veloce Motors · Automotive",    title: "Midnight Run",           metric: "4.8x ROAS",         bg: "linear-gradient(180deg,#00080f 0%,#001a35 60%,#000810 100%)" },
  { tag: "Event Reel",    client: "Pulse Festival · Entertainment",title: "Three Days, One Story",  metric: "8.4M Impressions",  bg: "linear-gradient(180deg,#1a0010 0%,#500040 60%,#200020 100%)" },
  { tag: "Social Reel",   client: "Indigo Kitchen · Hospitality",  title: "Dining in the Dark",     metric: "+312% Followers",   bg: "linear-gradient(180deg,#091400 0%,#243500 60%,#0f2000 100%)" },
];

export default function WorksPreview() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="work" className="py-20 overflow-hidden bg-black" ref={ref}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-10 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[var(--brand)] uppercase tracking-[0.3em] text-[10px] mb-2">[ Selected Works ]</p>
          <h2 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase">
           <span className="text-[#F5C200]"> Our Portfolio</span>
          </h2>
          <div className="w-10 h-0.5 bg-[#F5C200] mt-3" />
          <p className="text-white/30 text-xs mt-3 tracking-[0.15em]">9:16 format · Built for social</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Link
            to="/work"
            className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/38 border border-white/8 rounded-full px-5 py-2.5 hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all duration-300"
          >
            View all →
          </Link>
        </motion.div>
      </div>

      {/* Swiper — 9:16 portrait cards */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        freeMode={{ enabled: true, momentum: true }}
        grabCursor
        slidesPerView={1.6}
        spaceBetween={12}
        breakpoints={{
          480:  { slidesPerView: 2.4 },
          768:  { slidesPerView: 3.4 },
          1024: { slidesPerView: 4.4 },
          1280: { slidesPerView: 5.2 },
        }}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
        speed={4000}
        loop
        className="px-6 pb-4"
      >
        {[...WORKS, ...WORKS].map((w, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: Math.min(i * 0.05, 0.35) }}
              className="group cursor-pointer"
            >
              {/* 9:16 aspect ratio */}
              <div className="aspect-[9/16] w-full rounded-2xl overflow-hidden border border-white/6 relative hover:border-[var(--brand)]/40 transition-all duration-400 hover:shadow-[0_0_30px_rgba(199,164,80,0.12)]">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: w.bg }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />

                {/* Top tag */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-red-400" />
                    <span className="text-[7px] uppercase tracking-[0.2em] text-white/45">REEL</span>
                  </div>
                  <span className="text-[7px] bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded border border-white/8 text-white/40 uppercase tracking-[0.1em]">{w.tag}</span>
                </div>

                {/* Metric — shown on hover */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition-all duration-400 -translate-y-2 group-hover:-translate-y-1/2">
                  <div className="inline-block bg-black/70 backdrop-blur-md rounded-lg px-3 py-2">
                    <p className="font-heading text-base text-[var(--brand)]">{w.metric}</p>
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[8px] text-white/30 uppercase tracking-[0.15em] mb-1">{w.client}</p>
                  <h3 className="font-sans font-semibold text-xs text-white leading-snug group-hover:text-[var(--brand)] transition-colors duration-300">{w.title}</h3>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Drag hint */}
      <p className="text-center text-[9px] uppercase tracking-[0.28em] text-white/15 mt-3">
        ← Swipe to explore →
      </p>
    </section>
  );
}
