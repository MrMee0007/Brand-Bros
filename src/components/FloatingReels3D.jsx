// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// /* 3D-perspective floating reel cards arranged in a fan */
// const REELS = [
//   {
//     tag: "Reels",
//     title: "Midnight Run",
//     metric: "4.8x ROAS",
//     video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1783360733/v6_rtzug4.mp4",
//     rot: -18,
//     x: -310,
//     y: 20,
//     z: -60,
//   },
//   {
//     tag: "Branding",
//     title: "Sensory Universe",
//     metric: "1.2M Views",
//     video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1783360871/llm4_m2evo6.mp4",
//     rot: -8,
//     x: -180,
//     y: -5,
//     z: -20,
//   },
//   {
//     tag: "Product",
//     title: "Light on Glass",
//     metric: "+87% CVR",
//     video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1783360879/LLM_nrdbzc.mp4 ",
//     rot: 0,
//     x: 0,
//     y: 0,
//     z: 0,
//   },
//   {
//     tag: "Fashion",
//     title: "Modern Luxury",
//     metric: "+240% Engage",
//     video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1783360835/jawa_1_khtbci.mp4",
//     rot: 8,
//     x: 180,
//     y: -5,
//     z: -20,
//   },
//   {
//     tag: "Events",
//     title: "Three Days",
//     metric: "8.4M Reach",
//     video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1783360837/llm_female_formal_g2e3fi.mp4",
//     rot: 18,
//     x: 310,
//     y: 20,
//     z: -60,
//   },
// ];

// export default function FloatingReels3D() {
//   const ref    = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-120px" });

//   return (
//     <section className="py-20 overflow-hidden relative bg-black" ref={ref}>
//       {/* Background glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--brand)]/5 blur-[150px]" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 text-center mb-0">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//         >
//           <p className="text-[var(--brand)] uppercase tracking-[0.3em] text-[10px] mb-4">// The Format We Love</p>
//           <h2 className="font-heading text-[clamp(2.2rem,5vw,4rem)] leading-none uppercase">
//             <span className="text-[#F5C200]">Every Story,<br />Purest Form.</span>
//           </h2>
//           <p className="text-white/35 text-xl mt-4 max-w-md mx-auto leading-relaxed">
//             We produce everything natively in 9:16 — the format designed for how people actually watch content in 2026.
//           </p>
//         </motion.div>
//       </div>

//       {/* 3D Fan of cards */}
//       <div className="relative h-[460px] md:h-[520px] flex items-center justify-center" style={{ perspective: "3000px" }}>
//         {REELS.map((reel, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 80, rotateY: reel.rot * 2 }}
//             animate={inView ? {
//               opacity: 1,
//               y: reel.y,
//               rotateY: reel.rot,
//               rotateZ: reel.rot * 0.3,
//               x: reel.x,
//               z: reel.z,
//             } : {}}
//             transition={{ duration: 1, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
//             whileHover={{ y: reel.y - 20, scale: 1.06, rotateY: 0, rotateZ: 0, zIndex: 50, transition: { duration: 0.4 } }}
//             className="absolute cursor-pointer"
//             style={{ transformStyle: "preserve-3d", zIndex: i === 2 ? 10 : 5 - Math.abs(i - 2) }}
//           >
//             {/* 9:16 card */}
//             <div className="w-36 md:w-44 aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 relative shadow-[0_20px_60px_rgba(0,0,0,0.6)] group hover:border-[var(--brand)]/50 transition-colors duration-300">
//               <video
//   src={reel.video}
//   autoPlay
//   muted
//   loop
//   playsInline
//   preload="metadata"
//   className="absolute inset-0 w-full h-full object-cover"
// ></video>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />

//               {/* Reel indicator */}
//               <div className="absolute top-3 left-3 flex items-center gap-1">
//                 <div className="w-1 h-1 rounded-full bg-red-400" />
//                 <span className="text-[6px] uppercase tracking-[0.2em] text-white/45">REEL</span>
//               </div>

//               {/* Tag */}
//               <div className="absolute top-3 right-3">
//                 <span className="text-[6px] bg-black/60 border border-white/10 px-1.5 py-0.5 rounded text-white/40 uppercase tracking-[0.1em]">{reel.tag}</span>
//               </div>

//               {/* Play icon */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-[var(--brand)] group-hover:border-[var(--brand)] transition-all duration-300">
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-0.5 text-white group-hover:text-black transition-colors"><path d="M8 5v14l11-7z"/></svg>
//                 </div>
//               </div>

//               {/* Bottom info */}
//               <div className="absolute bottom-0 left-0 right-0 p-3">
//                 <p className="font-heading text-sm text-[var(--brand)] leading-tight">{reel.metric}</p>
//                 <p className="text-[8px] text-white/60 mt-0.5 leading-tight">{reel.title}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <div className="text-center mt-6">
//         <p className="text-[9px] uppercase tracking-[0.3em] text-white/18">Hover to preview</p>
//       </div>
//     </section>
//   );
// }


import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// const REELS = [
//   {
//     tag: "Reels",
//     title: "Midnight Run",
//     metric: "4.8x ROAS",
//     video:
//       "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784223886/v6_1_ik9n1i.mp4",
//     rot: -18,
//     x: -310,
//     y: 20,
//     z: -60,
//   },
//   {
//     tag: "Branding",
//     title: "Sensory Universe",
//     metric: "1.2M Views",
//     video:
//       "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224214/LLM_6_1_gtbngk.mp4",
//     rot: -8,
//     x: -180,
//     y: -5,
//     z: -20,
//   },
//   {
//     tag: "Product",
//     title: "Light on Glass",
//     metric: "+87% CVR",
//     video:
//       "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224243/LLM_1_rueiqj.mp4",
//     rot: 0,
//     x: 0,
//     y: 0,
//     z: 0,
//   },
//   {
//     tag: "Fashion",
//     title: "Modern Luxury",
//     metric: "+240% Engage",
//     video:
//       "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224194/llm_3_1_rszely.mp4",
//     rot: 8,
//     x: 180,
//     y: -5,
//     z: -20,
//   },
//   {
//     tag: "Events",
//     title: "Three Days",
//     metric: "8.4M Reach",
//     video:
//       "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224025/raymond_2_re_1_pkzjkh.mp4",
//     rot: 18,
//     x: 310,
//     y: 20,
//     z: -60,
//   },
//   {
//     tag: "Events",
//     title: "Three Days",
//     metric: "8.4M Reach",
//     video:
//       "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224025/raymond_2_re_1_pkzjkh.mp4",
//     rot: 18,
//     x: 310,
//     y: 20,
//     z: -60,
//   },
//   {
//     tag: "Events",
//     title: "Three Days",
//     metric: "8.4M Reach",
//     video:
//       "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224025/raymond_2_re_1_pkzjkh.mp4",
//     rot: 18,
//     x: 310,
//     y: 20,
//     z: -60,
//   },
//   {
//     tag: "Events",
//     title: "Three Days",
//     metric: "8.4M Reach",
//     video:
//       "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224025/raymond_2_re_1_pkzjkh.mp4",
//     rot: 18,
//     x: 310,
//     y: 20,
//     z: -60,
//   },
//   {
//     tag: "Events",
//     title: "Three Days",
//     metric: "8.4M Reach",
//     video:
//       "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224025/raymond_2_re_1_pkzjkh.mp4",
//     rot: 18,
//     x: 310,
//     y: 20,
//     z: -60,
//   },
// ];
const REELS = [
  {
    tag: "Reels",
    title: "Midnight Run",
    metric: "4.8x ROAS",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784223886/v6_1_ik9n1i.mp4",
    rot: -32,
    x: -600,
    y: 90,
    z: -180,
  },
  {
    tag: "Branding",
    title: "Sensory Universe",
    metric: "1.2M Views",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224214/LLM_6_1_gtbngk.mp4",
    rot: -24,
    x: -450,
    y: 55,
    z: -120,
  },
  {
    tag: "Product",
    title: "Light on Glass",
    metric: "+87% CVR",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224243/LLM_1_rueiqj.mp4",
    rot: -16,
    x: -300,
    y: 25,
    z: -70,
  },
  {
    tag: "Fashion",
    title: "Modern Luxury",
    metric: "+240% Engage",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224194/llm_3_1_rszely.mp4",
    rot: -8,
    x: -170,
    y: 8,
    z: 25,
  },
  {
    tag: "Events",
    title: "Center",
    metric: "8.4M Reach",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784663500/Comp_1_rqrgz7.mp4",
    rot: 0,
    x: 0,
    y: 0,
    z: 500,
  },
  {
    tag: "Luxury",
    title: "Golden Hour",
    metric: "3.2M Views",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784663274/shop_ugc1_cvctcv.mp4",
    rot: 8,
    x: 170,
    y: 8,
    z: 25,
  },
  {
    tag: "Lifestyle",
    title: "Urban Flow",
    metric: "+195% Reach",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224025/raymond_2_re_1_pkzjkh.mp4",
    rot: 16,
    x: 300,
    y: 25,
    z: -70,
  },
  {
    tag: "Campaign",
    title: "Motion Story",
    metric: "7.1M Views",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784663112/jujutsu_reel_p3_rmnq4c.mp4",
    rot: 24,
    x: 450,
    y: 55,
    z: -120,
  },
  {
    tag: "Creative",
    title: "Final Cut",
    metric: "+420% Engagement",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784663505/jawa_1_wrstl2.mp4",
    rot: 32,
    x: 600,
    y: 90,
    z: -180,
  },
];

export default function FloatingReels3D() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-120px",
  });

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section
      className="py-20 overflow-hidden relative bg-black"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[600px] h-[600px]
        rounded-full
        bg-[var(--brand)]/5
        blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: .7 }}
        >

          <p className="text-[var(--brand)]
          uppercase
          tracking-[0.3em]
          text-[10px]
          mb-4">

            // The Format We Love

          </p>

          <h2 className="font-heading
          uppercase
          leading-none
          text-[clamp(2.2rem,5vw,4rem)]">

            <span className="text-[#F5C200]">

              Every Story,
              <br />
              Purest Form.

            </span>

          </h2>

          <p className="text-white/35
          text-xl
          mt-4
          max-w-md
          mx-auto
          leading-relaxed">

            We produce everything natively in 9:16 —
            the format designed for how people
            actually watch content in 2026.

          </p>

        </motion.div>

      </div>

      <div
        className="relative h-[460px] md:h-[520px]
        flex items-center justify-center"
        style={{ perspective: "3000px" }}
      >

        {REELS.map((reel, i) => (

          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 80,
              rotateY: reel.rot * 2,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: reel.y,
                    rotateY: reel.rot,
                    rotateZ: reel.rot * .3,
                    x: reel.x,
                    z: reel.z,
                  }
                : {}
            }
            transition={{
              duration: 1,
              delay: i * .1,
              ease: [0.2, 0, 0, 1],
            }}
            whileHover={{
              y: reel.y - 20,
              scale: 1.06,
              rotateY: 0,
              rotateZ: 0,
              zIndex: 50,
            }}
            className="absolute cursor-pointer"
            style={{
              transformStyle: "preserve-3d",
              zIndex:
                i === 2
                  ? 10
                  : 5 - Math.abs(i - 2),
            }}
          >
                        <div className="w-36 md:w-44 aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 relative shadow-[0_20px_60px_rgba(0,0,0,0.6)] group hover:border-[var(--brand)]/50 transition-all duration-300">

              {/* Video */}
              <video
  src={reel.video}
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  disablePictureInPicture
  controls={false}
  className="absolute inset-0 w-full h-full object-cover"
/>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />

              {/* Reel Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1">
                {/* <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse" /> */}
                <span className="text-[6px] uppercase tracking-[0.2em] text-white/50">
                  REEL
                </span>
              </div>

              {/* Category */}
              <div className="absolute top-3 right-3">
                {/* <span className="text-[6px] uppercase tracking-[0.15em] px-2 py-1 rounded-full bg-black/50 border border-white/10 text-white/50">
                  {reel.tag}
                </span> */}
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVideo(reel.video);
                  }}
                  className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[var(--brand)] hover:border-[var(--brand)] transition-all duration-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 ml-0.5 text-white hover:text-black transition-colors"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>

              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3">

                 {/* <p className="font-heading text-sm text-[var(--brand)]">
                  {reel.metric}
                </p> */}

                <p className="text-[8px] text-white/60 mt-1">
                  {reel.title}
                </p> 
              </div>

            </div>

          </motion.div>

        ))}

      </div>

      <div className="text-center mt-6">
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
          Click play to watch fullscreen
        </p>
      </div>
      <AnimatePresence>
  {selectedVideo && (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={() => setSelectedVideo(null)}
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedVideo(null)}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl transition z-20"
      >
        ×
      </button>

      {/* Fullscreen Video */}
      <motion.video
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        src={selectedVideo}
        controls
        autoPlay
        playsInline
        className="max-w-[95vw] max-h-[90vh] rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
}

          