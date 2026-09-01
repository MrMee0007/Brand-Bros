import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ─── Reel data ────────────────────────────────────── */
const REELS = [
  {
    tag: "Reels",
    title: "Midnight Run",
    metric: "4.8x ROAS",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439355/raymond_1_re_1.mp4",
    rot: -32, x: -600, y: 90, z: -180,
  },
  {
    tag: "Branding",
    title: "Sensory Universe",
    metric: "1.2M Views",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439351/v12_1.mp4",
    rot: -24, x: -450, y: 55, z: -120,
  },
  {
    tag: "Product",
    title: "Light on Glass",
    metric: "+87% CVR",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439355/jawa_1.mp4",
    rot: -16, x: -300, y: 25, z: -70,
  },
  {
    tag: "Fashion",
    title: "Modern Luxury",
    metric: "+240% Engage",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439350/jujutsu_reel_p3.mp4",
    rot: -8, x: -170, y: 8, z: 25,
  },
  {
    tag: "Events",
    title: "Center",
    metric: "8.4M Reach",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439353/v6_1.mp4",
    rot: 0, x: 0, y: 0, z: 500,
  },
  {
    tag: "Luxury",
    title: "Golden Hour",
    metric: "3.2M Views",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439349/EDIT-ICT.mp4",
    rot: 8, x: 170, y: 8, z: 25,
  },
  {
    tag: "Lifestyle",
    title: "Urban Flow",
    metric: "+195% Reach",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439346/llm_3_1.mp4",
    rot: 16, x: 300, y: 25, z: -70,
  },
  {
    tag: "Campaign",
    title: "Motion Story",
    metric: "7.1M Views",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439332/V4_EXTRAFUEL-1.mp4",
    rot: 24, x: 450, y: 55, z: -120,
  },
  {
    tag: "Creative",
    title: "Final Cut",
    metric: "+420% Engagement",
    video: "https://res.cloudinary.com/h8jkoa7d/video/upload/v1786439327/LLM_formal_1.mp4",
    rot: 32, x: 600, y: 90, z: -180,
  },
];

/* ─── Helper: Cloudinary poster thumbnail ──────────── */
function getPoster(videoUrl) {
  return videoUrl
    .replace("/video/upload/", "/video/upload/so_0,w_200,h_356,c_fill/")
    .replace(/\.mp4$/, ".jpg");
}

/* ─── Single reel card ─────────────────────────────── */
function ReelCard({ reel, index, inView, onPlay }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const isCentre = index === 4;

  /* Lazy-load video src when section enters view */
  useEffect(() => {
    if (!inView) return;
    // Stagger load so they don't all fetch at once
    const id = setTimeout(() => setVideoSrc(reel.video), index * 200);
    return () => clearTimeout(id);
  }, [inView, reel.video, index]);

  /* Centre card auto-plays; others play on hover */
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;
    if (isCentre) {
      video.play().catch(() => {});
    }
  }, [videoSrc, isCentre]);

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current && !isCentre) {
      videoRef.current.play().catch(() => {});
    }
  }, [isCentre]);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current && !isCentre) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isCentre]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80, rotateY: reel.rot * 2 }}
      animate={
        inView
          ? { opacity: 1, y: reel.y, rotateY: reel.rot, rotateZ: reel.rot * 0.3, x: reel.x, z: reel.z }
          : {}
      }
      transition={{ duration: 1, delay: index * 0.1, ease: [0.2, 0, 0, 1] }}
      whileHover={{ y: reel.y - 20, scale: 1.06, rotateY: 0, rotateZ: 0, zIndex: 50 }}
      className="absolute cursor-pointer"
      style={{ transformStyle: "preserve-3d", zIndex: isCentre ? 10 : 5 - Math.abs(index - 4) }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-36 md:w-44 aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 relative shadow-[0_20px_60px_rgba(0,0,0,0.6)] group hover:border-[#F5C200]/50 transition-colors duration-300">

        {/* Poster */}
        <img
          src={getPoster(reel.video)}
          alt={reel.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Video — lazy src */}
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            preload="none"
            disablePictureInPicture
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />

        {/* REEL badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1">
          <span className="text-[6px] uppercase tracking-[0.2em] text-white/50">REEL</span>
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={(e) => { e.stopPropagation(); onPlay(reel.video); }}
            className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[#F5C200] hover:border-[#F5C200] transition-all duration-300"
            aria-label="Play"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5 text-white hover:text-black transition-colors">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-[8px] text-white/60">{reel.title}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ──────────────────────────────────────── */
export default function FloatingReels3D() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [selectedVideo, setSelectedVideo] = useState(null);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSelectedVideo(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Lock body scroll while modal open */
  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedVideo]);

  return (
    <section className="py-20 overflow-hidden relative bg-black" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F5C200]/5 blur-[150px]" />
      </div>

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#F5C200] uppercase tracking-[0.3em] text-[10px] mb-4">
            // The Format We Love
          </p>
          <h2
            className="font-heading uppercase leading-none text-[#F5C200]"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Every Story,
            <br />
            Purest Form.
          </h2>
          <p className="text-white/35 text-xl mt-4 max-w-md mx-auto leading-relaxed">
            We produce everything natively in 9:16 — the format designed for how
            people actually watch content in 2026.
          </p>
        </motion.div>
      </div>

      {/* 3D fan */}
      <div
        className="relative h-[460px] md:h-[520px] flex items-center justify-center"
        style={{ perspective: "3000px" }}
      >
        {REELS.map((reel, i) => (
          <ReelCard
            key={i}
            reel={reel}
            index={i}
            inView={inView}
            onPlay={setSelectedVideo}
          />
        ))}
      </div>

      <div className="text-center mt-6">
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
          Click play to watch fullscreen
        </p>
      </div>

      {/* ── Video Modal ── */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedVideo(null)}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#F5C200] hover:text-black flex items-center justify-center text-white transition-all duration-300 z-20"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <motion.video
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedVideo}
              controls
              autoPlay
              playsInline
              controlsList="nodownload"
              className="max-w-[95vw] max-h-[90vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}