import {
  useState,
  useMemo,
  useCallback,
  useEffect,
  memo,
  useRef,
} from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Play, X } from "lucide-react";

/* ─── Categories ──────────────────────────────────── */
const CATEGORIES = ["All", "Promotion", "Reels", "Product", "Ads", "Events", "Social"];

/* ─── Portfolio data ─────────────────────────────── */
const WORKS = [
  {
    id: 1,
    tag: "Events",
    client: "DETALIENS",
    title: "Beyond Limits",
    metric: "33%+ Engagement",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439355/jawa_1.mp4",
  },
  {
    id: 2,
    tag: "Product",
    client: "RAYMOND",
    title: "Ride Free",
    metric: "28%+ Conversion",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439355/raymond_1_re_1.mp4",
  },
  {
    id: 3,
    tag: "Product",
    client: "JO MOTEL",
    title: "Vision in Motion",
    metric: "33%+ Engagement",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439353/v6_1.mp4",
  },
  {
    id: 4,
    tag: "Ads",
    client: "JO MOTEL",
    title: "Power Redefined",
    metric: "38%+ Engagement",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439351/v12_1.mp4",
  },
  {
    id: 5,
    tag: "Events",
    client: "BERRY BROS",
    title: "Annual Fest 2026",
    metric: "14%+ Engagement",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439350/jujutsu_reel_p3.mp4",
  },
  {
    id: 6,
    tag: "Social",
    client: "PARTY",
    title: "Creative Studio",
    metric: "26%+ Engagement",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439349/EDIT-ICT.mp4",
  },
  {
    id: 7,
    tag: "Reels",
    client: "LLM",
    title: "Luxury Meets Speed",
    metric: "15%+ Conversion",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439346/llm_3_1.mp4",
  },
  {
    id: 8,
    tag: "Reels",
    client: "XTRAFUEL",
    title: "Never Stop",
    metric: "24%+ Engagement",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439332/V4_EXTRAFUEL-1.mp4",
  },
  {
    id: 9,
    tag: "Product",
    client: "BERRY BROS",
    title: "Cinema Experience",
    metric: "17%+ Engagement",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439331/V_Event.mp4",
  },
  {
    id: 10,
    tag: "Ads",
    client: "PARTY",
    title: "Open Happiness",
    metric: "43%+ Engagement",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439313/1785486516433.publer.com.mp4",
  },
  {
    id: 11,
    tag: "Reels",
    client: "DETALIENS",
    title: "Bullet Run",
    metric: "37%+ Conversion",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439326/bullet.mp4",
  },
  {
    id: 12,
    tag: "Reels",
    client: "LLM",
    title: "Formal Edge",
    metric: "51%+ Engagement",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439327/LLM_formal_1.mp4",
  },
  {
    id: 13,
    tag: "Reels",
    client: "BERRY BROS",
    title: "Berry Vibes",
    metric: "22%+ Engagement",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786446285/berrybros_v14_p3_1.mp4",
  },
  {
    id: 14,
    tag: "Reels",
    client: "BERRY BROS",
    title: "Dessert Drop",
    metric: "16%+ Conversion",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786446591/dessert_1.mp4",
  },
  {
    id: 15,
    tag: "Reels",
    client: "LLM",
    title: "Season Six",
    metric: "19%+ Engagement",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786616117/LLM_6_1.mp4",
  },
  {
    id: 16,
    tag: "Reels",
    client: "RAYMOND",
    title: "Raymond II",
    metric: "11% Conversion",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786616212/raymond_2_re_1.mp4",
  },
  {
    id: 17,
    tag: "Reels",
    client: "BERRY BROS",
    title: "Dessert Series",
    metric: "24%+ Engagement",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1785012731/dessert_1_lwlpz3.mp4",
  },
  {
    id: 18,
    tag: "Promotion",
    client: "LLM",
    title: "Beyond Limits",
    metric: "40%+ Engagement",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786616106/llm_female_formal_1.mp4",
  },
];

/* ─── Helper: derive Cloudinary poster from video URL ─── */
function getPoster(videoUrl) {
  // Transform: /video/upload/vXXXX/name.mp4
  //         → /video/upload/so_0,w_400,h_711,c_fill/vXXXX/name.jpg
  return videoUrl
    .replace("/video/upload/", "/video/upload/so_0,w_400,h_711,c_fill/")
    .replace(/\.mp4$/, ".jpg");
}

/* ─── 9:16 Reel Card ──────────────────────────────── */
const WorkCard = memo(({ item, index, inView, onPlay }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null); // lazy: only set when card visible

  /* Set video src only when card enters viewport */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoSrc(item.video);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [item.video]);

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current && videoSrc) {
      videoRef.current.play().catch(() => {});
    }
  }, [videoSrc]);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.045, ease: [0.2, 0, 0, 1] }}
      className="group cursor-pointer"
      onClick={() => onPlay(item)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-[9/16] w-full rounded-2xl overflow-hidden border border-white/10 relative hover:border-[#F5C200]/50 transition-all duration-500">

        {/* Poster shown until video loads */}
        <img
          src={getPoster(item.video)}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Video — src set lazily */}
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

        {/* Tag */}
        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
            {item.tag}
          </span>
        </div>

        {/* Play button (visible on hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <div className="w-14 h-14 rounded-full bg-[#F5C200] flex items-center justify-center shadow-[0_0_30px_rgba(245,194,0,0.5)]">
            <Play size={22} fill="black" stroke="none" className="ml-1" />
          </div>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-[9px] uppercase tracking-[0.15em] text-white/40">
            {item.client}
          </p>
          <h3 className="text-white font-semibold text-sm mt-0.5">{item.title}</h3>
          <p className="text-[#F5C200] text-xs mt-1">{item.metric}</p>
        </div>
      </div>
    </motion.div>
  );
});

WorkCard.displayName = "WorkCard";

/* ─── Page ────────────────────────────────────────── */
export default function Work() {
  const [active, setActive] = useState("All");
  const [modal, setModal] = useState(null);

  const handleFilter = useCallback((cat) => setActive(cat), []);

  const filtered = useMemo(
    () => (active === "All" ? WORKS : WORKS.filter((w) => w.tag === active)),
    [active]
  );

  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: false, margin: "-40px" });

  /* Close modal on Escape key */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setModal(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Lock body scroll while modal open */
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modal]);

  return (
    <>
      <div className="min-h-screen pt-32 pb-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">

          {/* ── Hero ── */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.2, 0, 0, 1] }}
            className="mb-16"
          >
            <p className="text-[#F5C200] uppercase tracking-[0.3em] text-[10px] mb-4">
              [ Selected Works ]
            </p>
            <h1
              className="font-heading text-[#F5C200] leading-[0.87] mb-5"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
            >
              Our
              <br />
              Portfolio
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-px bg-[#F5C200]/50" />
              <p className="text-white/35 text-xs uppercase tracking-[0.2em]">
                9:16 Format · Built for Social
              </p>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-md">
              A curated collection of reels, brand films and digital experiences
              built for ambitious brands across India.
            </p>
          </motion.div>

          {/* ── Filter Pills ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  active === cat
                    ? "bg-[#F5C200] text-black shadow-[0_0_20px_rgba(245,194,0,0.35)]"
                    : "bg-white/5 border border-white/10 text-white/45 hover:bg-[#F5C200]/10 hover:text-[#F5C200] hover:border-[#F5C200]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* ── Portfolio Grid ── */}
          <div
            ref={gridRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <WorkCard
                  key={item.id}
                  item={item}
                  index={index}
                  inView={inView}
                  onPlay={setModal}
                />
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-white/25">
              <p className="text-sm uppercase tracking-[0.2em]">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── Video Modal ── */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] bg-black/96 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setModal(null)}
          >
            {/* Close */}
            <button
              onClick={(e) => { e.stopPropagation(); setModal(null); }}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-[#F5C200] hover:text-black transition-all duration-300"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Video container */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
              className="relative max-h-[90vh] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={modal.video}
                controls
                autoPlay
                playsInline
                controlsList="nodownload"
                className="w-full h-full object-contain bg-black"
              />

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-6 pointer-events-none">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#F5C200] font-bold">
                  {modal.tag}
                </span>
                <h3 className="font-heading text-2xl text-white mt-1">{modal.title}</h3>
                <p className="text-[#F5C200] text-sm mt-0.5">{modal.metric}</p>
                <p className="text-white/40 text-xs mt-1">{modal.client}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
