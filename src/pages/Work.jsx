// import { useState, useMemo, useCallback, memo, useRef } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import { Play, X } from "lucide-react";

// /* ─── Data ─────────────────────────────────────────── */
 const CATEGORIES = ["All", "Promotion", "Reels", "Product", "Ads", "Events", "Social"];

const WORKS = [
  {
    id: 1,
    tag: "Promotion",
    client: "LLM",
    title: "Beyond Limits",
    metric: "40%+ Engagement",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224243/LLM_1_rueiqj.mp4",
  },
  {
    id: 2,
    tag: "Product",
    client: "LLM",
    title: "Ride Free",
    metric: "28%+ Conversion",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224214/LLM_6_1_gtbngk.mp4",
  },
  {
    id: 3,
    tag: "Product",
    client: "LLM",
    title: "Vision in Motion",
    metric: "33%+ Engagement",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224208/llm4_1_xya95b.mp4",
  },
  {
    id: 4,
    tag: "Ads",
    client: "LLM",
    title: "Power Redefined",
    metric: "38%+ Engagement",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224204/llm_female_formal_1_tmvw62.mp4",
  },
  {
    id: 5,
    tag: "Events",
    client: "LLM",
    title: "Annual Fest 2026",
    metric: "14%+ Engagement",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224199/LLM_formal_1_xalyqf.mp4",
  },
  {
    id: 6,
    tag: "Social",
    client: "LLM",
    title: "Creative Studio",
    metric: "26%+ Engagement",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224194/llm_3_1_rszely.mp4",
  },
  {
    id: 7,
    tag: "Reels",
    client: "Raymond",
    title: "Luxury Meets Speed",
    metric: "15%+ Conversion",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784224025/raymond_2_re_1_pkzjkh.mp4",
  },
  {
    id: 8,
    tag: "Reels",
    client: "jo motel",
    title: "Never Stop",
    metric: "24%+ Engagement",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784223979/v12_1_quwqet.mp4",
  },
  {
    id: 9,
    tag: "Product",
    client: "raymond",
    title: "Cinema Experience",
    metric: "17%+ Engagement",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784223913/raymond_1_re_1_f50kfv.mp4",
  },
  {
    id: 10,
    tag: "Ads",
    client: "jo motel",
    title: "Open Happiness",
    metric: "43%+ Engagement",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784223886/v6_1_ik9n1i.mp4",
  },
  {
    id: 11,
    tag: "Reels",
    client: "detaliens",
    title: "Never Stop",
    metric: "37%+ Conversion",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784663509/bullet_boontq.mp4",
  },
  {
    id: 12,
    tag: "Reels",
    client: "Brand Monk",
    title: "Never Stop",
    metric: "51%+ Engagement",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784663500/Comp_1_rqrgz7.mp4",
  },
  {
    id: 13,
    tag: "Reels",
    client: "Berry Bros",
    title: "Never Stop",
    metric: "22%+ Engagement",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784663274/shop_ugc1_cvctcv.mp4",
  },
  {
    id: 14,
    tag: "Reels",
    client: "DETALIENS",
    title: "Never Stop",
    metric: "16%+ Conversion",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784663505/jawa_1_wrstl2.mp4",
  },
  {
    id: 15,
    tag: "Reels",
    client: "BERRY BROS",
    title: "Never Stop",
    metric: "19%+ Engagement",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1784663112/jujutsu_reel_p3_rmnq4c.mp4",
  },
];



// /* ─── 9:16 Reel Card ───────────────────────────────── */
// const WorkCard = memo(({ item, index, inView, onPlay }) => {
//   const videoRef = useRef(null);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 35 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{
//         duration: 0.55,
//         delay: index * 0.045,
//         ease: [0.2, 0, 0, 1],
//       }}
//       className="group cursor-pointer"
//       onClick={() => onPlay(item)}
//       onMouseEnter={() => {
//         if (videoRef.current) {
//           videoRef.current.play().catch(() => {});
//         }
//       }}
//       onMouseLeave={() => {
//         if (videoRef.current) {
//           videoRef.current.pause();
//           videoRef.current.currentTime = 0;
//         }
//       }}
//     >
//       <div className="aspect-[9/16] w-full rounded-2xl overflow-hidden border border-white/6 relative hover:border-[#F5C200]/45 transition-all duration-500">

//         <video
//           ref={videoRef}
//           src={item.video}
//           muted
//           loop
//           playsInline
//           preload="auto"
//           className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />

//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

//         <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
//           <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
//             {item.tag}
//           </span>

//           <span className="text-[8px] text-red-400 font-bold">
//             ● LIVE
//           </span>
//         </div>

//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
//           <div className="w-14 h-14 rounded-full bg-[#F5C200] flex items-center justify-center">
//             <Play
//               size={22}
//               fill="black"
//               stroke="none"
//               className="ml-1"
//             />
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 p-4">
//           <p className="text-[9px] uppercase tracking-[0.15em] text-white/40">
//             {item.client}
//           </p>

//           <h3 className="text-white font-semibold mt-1">
//             {item.title}
//           </h3>

//           <p className="text-[#F5C200] text-xs mt-1">
//             {item.metric}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// });

// /* ─── Page ────────────────────────────────────────── */
// export default function Work() {
//   const [active, setActive]   = useState("All");
//   const [modal, setModal]     = useState(null);
//   const handleFilter = useCallback((cat) => setActive(cat), []);

//   const filtered = useMemo(
//     () => (active === "All" ? WORKS : WORKS.filter((w) => w.tag === active)),
//     [active]
//   );

//   const ref    = useRef(null);
//   const inView = useInView(ref, { once: false, margin: "-40px" });

//   return (
//     <>
//       <div className="min-h-screen pt-32 pb-24 px-6 bg-black">
//         <div className="max-w-7xl mx-auto">

//           {/* Hero */}
//           <motion.div
//             initial={{ opacity: 0, y: 36 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.85, ease: [0.2, 0, 0, 1] }}
//             className="mb-16"
//           >
//             <p className="text-[var(--brand)] uppercase tracking-[0.3em] text-[10px] mb-4">[ Selected Works ]</p>
//             <h1 className="font-heading text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.87] mb-5">
//               <span className="text-[var(--brand)]">Our<br />Portfolio</span>
//             </h1>
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-4 h-px bg-[var(--brand)]/50" />
//               <p className="text-white/35 text-xs tracking-[0.2em] uppercase">9:16 Format · Built for Social</p>
//             </div>
//             <p className="text-white/40 text-sm leading-relaxed max-w-md">
//               A curated collection of reels, brand films, and digital experiences
//               built for ambitious brands across India.
//             </p>
//           </motion.div>

//           {/* Filter pills */}
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.65, delay: 0.2 }}
//             className="flex flex-wrap gap-2 mb-12"
//           >
//             {CATEGORIES.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => handleFilter(cat)}
//                 className={`px-5 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
//                   active === cat
//                     ? "bg-[#F5C200] text-black shadow-[0_0_20px_rgba(245,194,0,0.35)]"
//                     : "bg-white/4 border border-white/8 text-white/45 hover:bg-[#F5C200]/10 hover:text-[#F5C200] hover:border-[#F5C200]/20"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </motion.div>

//           {/* 9:16 Grid */}
//           <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
//             <AnimatePresence mode="popLayout">
//               {filtered.map((item, i) => (
//                 <WorkCard
//                   key={item.id}
//                   item={item}
//                   index={i}
//                   inView={inView}
//                   onPlay={setModal}
//                 />
//               ))}
//             </AnimatePresence>
//           </div>

//           {filtered.length === 0 && (
//             <div className="text-center py-20 text-white/20 text-sm">No projects in this category yet.</div>
//           )}
//         </div>
//       </div>

//       {/* Modal — 9:16 */}
//       <AnimatePresence>
//         {modal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
//             onClick={() => setModal(null)}
//           >
//             <button
//               onClick={() => setModal(null)}
//               className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/8 flex items-center justify-center hover:bg-[var(--brand)] hover:text-black transition-all"
//             >
//               <X size={16} />
//             </button>
//             <motion.div
//               initial={{ scale: 0.88, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.88, opacity: 0 }}
//               transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
//               className="max-h-[90vh] aspect-[9/16] rounded-2xl overflow-hidden relative border border-white/10"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <video
//   src={modal.video}
//   controls
//   autoPlay
//   playsInline
//   className="absolute inset-0 w-full h-full object-contain bg-black"
// />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/20 flex flex-col justify-end p-8">
//                 <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--brand)] mb-2">{modal.tag}</span>
//                 <p className="font-heading text-3xl text-[var(--brand)] mb-1">{modal.metric}</p>
//                 <h3 className="font-sans font-semibold text-lg text-white">{modal.title}</h3>
//                 <p className="text-sm text-white/40 mt-0.5">{modal.client}</p>
//                 <div className="mt-6 flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-full bg-[var(--brand)] flex items-center justify-center">
//                     <Play size={14} fill="black" stroke="none" className="ml-0.5" />
//                   </div>
//                   {/* <span className="text-[10px] text-white/35 uppercase tracking-[0.15em]"></span> */}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

import {
  useState,
  useMemo,
  useCallback,
  useEffect,
  memo,
  useRef,
} from "react";

import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";

import {
  Play,
  X,
} from "lucide-react";

const WorkCard = memo(({ item, index, inView, onPlay }) => {
  const videoRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: .55,
        delay: index * .05,
        ease: [0.2,0,0,1],
      }}
      className="group cursor-pointer"
      onClick={() => onPlay(item)}
      onMouseEnter={() => {
        if(videoRef.current){
          videoRef.current.play().catch(()=>{});
        }
      }}
      onMouseLeave={()=>{
        if(videoRef.current){
          videoRef.current.pause();
          videoRef.current.currentTime=0;
        }
      }}
    >

      <div className="aspect-[9/16] w-full rounded-2xl overflow-hidden border border-white/10 relative hover:border-[#F5C200]/50 transition-all duration-500">

        <video
          ref={videoRef}
          src={item.video}
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"/>

        <div className="absolute top-3 left-3 right-3 flex justify-between">

          <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
            {item.tag}
          </span>

        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">

          <div className="w-14 h-14 rounded-full bg-[#F5C200] flex items-center justify-center">

            <Play
              size={22}
              fill="black"
              stroke="none"
              className="ml-1"
            />

          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">

          <p className="text-[9px] uppercase tracking-[0.15em] text-white/40">
            {item.client}
          </p>

          <p className="text-[#F5C200] text-xs mt-1">
            {item.metric}
          </p>

        </div>

      </div>

    </motion.div>
  );
});

export default function Work() {

  const [active, setActive] = useState("All");
  const [modal, setModal] = useState(null);

  const videoRef = useRef(null);

  const handleFilter = useCallback((cat) => {
    setActive(cat);
  }, []);

  const filtered = useMemo(() => {
    return active === "All"
      ? WORKS
      : WORKS.filter((item) => item.tag === active);
  }, [active]);

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
    margin: "-40px",
  });

  /* Automatically enter fullscreen */

  useEffect(() => {
    if (!modal || !videoRef.current) return;

    const video = videoRef.current;

    const openFullscreen = async () => {
      try {
        if (video.requestFullscreen) {
          await video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }

        await video.play();

      } catch (err) {
        console.log(err);
      }
    };

    openFullscreen();

  }, [modal]);

  /* Close modal when fullscreen exits */

  useEffect(() => {

    const handleExit = () => {
      if (!document.fullscreenElement) {
        setModal(null);
      }
    };

    document.addEventListener(
      "fullscreenchange",
      handleExit
    );

    return () =>
      document.removeEventListener(
        "fullscreenchange",
        handleExit
      );

  }, []);

  return (
    <>
      <div className="min-h-screen pt-32 pb-24 px-6 bg-black">

        <div className="max-w-7xl mx-auto">

          {/* Hero */}

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.2, 0, 0, 1],
            }}
            className="mb-16"
          >

            <p className="text-[var(--brand)] uppercase tracking-[0.3em] text-[10px] mb-4">
              [ Selected Works ]
            </p>

            <h1 className="font-heading text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.87] mb-5">
              <span className="text-[var(--brand)]">
                Our
                <br />
                Portfolio
              </span>
            </h1>

            <div className="flex items-center gap-3 mb-4">

              <div className="w-4 h-px bg-[var(--brand)]/50" />

              <p className="text-white/35 text-xs uppercase tracking-[0.2em]">
                9:16 Format · Built for Social
              </p>

            </div>

            <p className="text-white/40 text-sm leading-relaxed max-w-md">
              A curated collection of reels,
              brand films and digital experiences
              built for ambitious brands across India.
            </p>

          </motion.div>

                    {/* Filter Pills */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: .65,
              delay: .2,
            }}
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

          {/* Portfolio Grid */}

          <div
            ref={ref}
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
                No projects found.
              </p>

            </div>

          )}

        </div>

      </div>

      {/* Fullscreen Modal */}

      <AnimatePresence>

        {modal && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .25 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setModal(null)}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModal(null);
              }}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-[#F5C200] hover:text-black transition-all duration-300"
            >
              <X size={20} />
            </button>

            {/* Video */}
            <motion.video
              ref={videoRef}
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.2, 0, 0, 1],
              }}
              src={modal.video}
              controls
              autoPlay
              playsInline
              preload="auto"
              controlsList="nodownload"
              className="max-h-screen max-w-screen object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-8 pointer-events-none">

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#F5C200] font-bold">
                {modal.tag}
              </span>

              <h2 className="font-heading text-3xl text-white mt-2">
                {modal.title}
              </h2>

              <p className="text-[#F5C200] text-lg mt-1">
                {modal.metric}
              </p>

              <p className="text-white/50 text-sm mt-2">
                {modal.client}
              </p>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}
