// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   BarChart2, ClipboardList, Pen, Send, TrendingUp,
//   Target, Users, Award,
// } from "lucide-react";

// /* ── Pitch-deck style: 5 steps with dotted arrows ── */
// const STEPS = [
//   {
//     num: "01", icon: BarChart2,
//     title: "ANALYZE",
//     desc: "We analyze your business, audience and performance to find growth opportunities.",
//   },
//   {
//     num: "02", icon: ClipboardList,
//     title: "PLAN",
//     desc: "We create a tailored strategy and content roadmap.",
//   },
//   {
//     num: "03", icon: Pen,
//     title: "CREATE",
//     desc: "Our team creates high-quality content that connects.",
//   },
//   {
//     num: "04", icon: Send,
//     title: "PUBLISH",
//     desc: "We schedule and publish content for maximum reach and impact.",
//   },
//   {
//     num: "05", icon: TrendingUp,
//     title: "OPTIMIZE",
//     desc: "We track performance and optimize for better results.",
//   },
// ];

// const BOTTOM = [
//   { icon: Target, label: "GOAL ORIENTED",    desc: "Everything we do has purpose." },
//   { icon: Users,  label: "COLLABORATIVE",    desc: "We work with you, not just for you." },
//   { icon: Award,  label: "RESULTS FOCUSED",  desc: "We measure what truly matters." },
// ];

// /* ── Dotted arrow connector ─────────────────────── */
// function Arrow() {
//   return (
//     <div className="relative -mx-1 hidden w-10 shrink-0 items-center md:flex lg:w-14">
//       <div className="w-full border-t-2 border-dashed border-black/20" />
//       <div className="absolute right-0 -translate-y-px text-base text-[#C5A000]">▶</div>
//     </div>
//   );
// }

// export default function ProcessSection() {
//   const ref    = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });

//   return (
//     <section
//       id="process"
//       className="relative overflow-hidden bg-[#FAFAF7] px-6 py-24 text-black md:py-28"
//       ref={ref}
//     >
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-50"
//         style={{
//           backgroundImage: "radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)",
//           backgroundSize: "24px 24px",
//           maskImage: "radial-gradient(ellipse at center, black 15%, transparent 85%)",
//         }}
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(ellipse at 100% 0%, rgba(245,194,0,.14), transparent 38%), radial-gradient(ellipse at 0% 100%, rgba(245,194,0,.11), transparent 38%)",
//         }}
//       />
//       <div className="relative z-10 mx-auto max-w-7xl">

//         {/* Header — pitch-deck style */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-4"
//         >
//           <h2 className="font-heading text-[clamp(3.5rem,10vw,8rem)] font-black leading-none tracking-tight text-black">
//             OUR <span className="text-[#A88400]">PROCESS</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-xl text-base font-medium text-black/70">
//             A simple, clear and proven process that{" "}
//             <span className="font-bold text-[#A88400]">delivers results.</span>
//           </p>
//         </motion.div>

//         {/* Gold underline */}
//         <div className="flex justify-center mb-14">
//           <div className="h-0.5 w-16 bg-[#F5C200]" />
//         </div>

//         {/* 5-step horizontal layout */}
//         <div className="flex flex-col md:flex-row items-stretch gap-0">
//           {STEPS.map((step, i) => {
//             const Icon = step.icon;
//             return (
//               <div key={step.num} className="flex flex-col md:flex-row items-center flex-1 min-w-0">
//                 {/* Card */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 35 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: i * 0.1 }}
//                   className="group flex w-full flex-1 flex-col items-center gap-4 rounded-2xl border border-black/10 bg-white/80 p-6 text-center shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A000]/50 hover:bg-white hover:shadow-[0_14px_32px_rgba(245,194,0,0.12)]"
//                 >
//                   {/* Gold icon circle */}
//                   <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#C5A000] bg-[#FAFAF7] transition-colors duration-300 group-hover:bg-[#F5C200]/15">
//                     <Icon size={26} className="text-[#A88400]" strokeWidth={1.5} />
//                   </div>

//                   {/* Number */}
//                   <span className="font-heading text-lg tracking-widest text-[#A88400]">{step.num}</span>

//                   {/* Separator */}
//                   <div className="h-0.5 w-8 bg-[#F5C200]" />

//                   {/* Title */}
//                   <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-black/85">{step.title}</h3>

//                   {/* Description */}
//                   <p className="text-[0.8rem] font-medium leading-relaxed text-black/70">{step.desc}</p>
//                 </motion.div>

//                 {/* Arrow between cards */}
//                 {i < STEPS.length - 1 && <Arrow />}
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom strip — pitch-deck style */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="mt-8 flex flex-col items-center gap-6 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white/80 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] md:flex-row md:gap-0 md:divide-x md:divide-y-0"
//         >
//           {/* Left brand statement */}
//           <div className="flex items-center gap-4 flex-1 pr-0 md:pr-8 justify-center md:justify-start">
//             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C5A000]">
//               <Award size={18} className="text-[#A88400]" strokeWidth={1.5} />
//             </div>
//             <div>
//               <p className="text-[0.75rem] font-extrabold uppercase tracking-[0.15em] text-black">Strategy. Creativity. Consistency.</p>
//               <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#A88400]">That's How We Grow Brands.</p>
//             </div>
//           </div>

//           {/* Right 3 pillars */}
//           {BOTTOM.map((b, i) => {
//             const Icon = b.icon;
//             return (
//               <div key={b.label} className="flex flex-1 items-start justify-center gap-3 pt-4 md:justify-start md:pl-8 md:pt-0">
//                 <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C5A000]/50">
//                   <Icon size={15} className="text-[#A88400]" strokeWidth={1.5} />
//                 </div>
//                 <div>
//                   <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-black/85">{b.label}</p>
//                   <p className="mt-0.5 text-[0.75rem] font-medium text-black/65">{b.desc}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }




import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { useRef } from "react";
import SectionParallax from "./SectionParallax";

const steps = [
  {
    number: "01",
    name: "DISCOVER",
    category: "STRATEGY / INSIGHT",
    title: ["Find the thing", "that makes you different."],
    description:
      "We get close to your business, your people and the space you want to own. Then we find the story no one else can tell.",

    type: "video",
    media:
      "https://res.cloudinary.com/qcz4jg2s/video/upload/v1794211898/WhatsApp_Video_2026-11-09_at_1.39.59_PM_1.mp4",

    alt: "Contemporary luxury architecture",
  },
  {
    number: "02",
    name: "DEFINE",
    category: "POSITIONING / IDENTITY",
    title: ["Give your brand", "a point of view."],
    description:
      "We turn the strongest insight into a sharp position, a clear voice and a visual world people recognize instantly.",

    type: "video",
    media:
      "https://res.cloudinary.com/qcz4jg2s/video/upload/v1794221481/IMG_5467_1.mov",

    alt: "Modern architectural residence at dusk",
  },
  {
    number: "03",
    name: "CREATE",
    category: "CREATIVE / CONTENT",
    title: ["Make people", "stop and look."],
    description:
      "From the first big idea to every detail that brings it to life—we make bold, beautiful work built to be remembered.",

    type: "video",
    media:
      "https://res.cloudinary.com/qcz4jg2s/video/upload/v1794211045/WhatsApp_Video_2026-11-09_at_1.12.37_PM.mp4",



    alt: "Modern luxury home and swimming pool",
  },
  {
    number: "04",
    name: "AMPLIFY",
    category: "LAUNCH / GROWTH",
    title: ["Put your brand", "out in the world."],
    description:
      "We launch with intention, learn from every response and keep building your momentum where it matters most.",

    type: "video",
    media:
      "https://res.cloudinary.com/qcz4jg2s/video/upload/v1794211045/WhatsApp_Video_2026-11-09_at_1.15.55_PM.mp4",

    alt: "Contemporary villa surrounded by landscaped gardens",
  },
];

const principles = [
  {
    number: "01",
    title: "GOOD WORK, BUILT TOGETHER",
    detail: "A close-knit team, always on your side.",
  },
  {
    number: "02",
    title: "CREATIVITY WITH INTENT",
    detail: "Every idea has a job to do.",
  },
  {
    number: "03",
    title: "NO DECK-AND-DISAPPEAR",
    detail: "We stick around for what comes next.",
  },
];

export default function OurProcess() {
  const sectionRef = useRef(null);

  return (
    <section className="our-process" id="process" ref={sectionRef}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .our-process {
          --cream: #faf6e9;
          --black: #0b0b0b;
          --yellow: #f2c900;
          --muted: #514e48;
          --border: #ded9ce;

          width: 100%;
          position: relative;
          min-height: 100vh;
          padding: 112px 0 85px;
          background: var(--cream);
          color: var(--black);
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }

        .our-process * {
          box-sizing: border-box;
        }

        .process-container {
          position: relative;
          z-index: 1;
          width: 76.5%;
          max-width: 1450px;
          margin: 0 auto;
        }

        /* HEADER */

        .process-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 48px;
        }

        .process-heading {
          margin: 0;
          font-family: 'Anton', sans-serif;
          font-size: clamp(55px, 5vw, 82px);
          font-weight: 400;
          line-height: .95;
          text-transform: uppercase;
        }

        .process-heading span {
          color: var(--yellow);
        }

        .process-intro {
          margin: 14px 0 0;
          color: #494640;
          text-align: right;
          font-size: 14px;
          line-height: 1.9;
        }

        /* GRID */

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 32px;
        }

        .process-card {
          position: relative;
          min-width: 0;
        }

        /* MEDIA CONTAINER */

        .process-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: .78;
          overflow: hidden;
          border-radius: 7px;
          background: #ded9ce;
          box-shadow: 0 12px 28px rgba(0,0,0,.055);
          isolation: isolate;
        }

        /* IMAGE AND VIDEO */

        .process-image,
        .process-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          transition: transform .8s cubic-bezier(.2,.7,.2,1);
        }

        .process-card:hover .process-image,
        .process-card:hover .process-video {
          transform: scale(1.055);
        }

        /* DARK OVERLAY */

        .process-image-wrap::after {
          content: "";
          position: absolute;
          z-index: 1;
          inset: 35% 0 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0,0,0,.10) 40%,
            rgba(0,0,0,.62) 100%
          );
          pointer-events: none;
        }

        /* NUMBER */

        .process-number {
          position: absolute;
          z-index: 2;
          top: 15px;
          left: 15px;
          width: 43px;
          height: 43px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background: var(--yellow);
          color: var(--black);
          font-family: 'Anton', sans-serif;
          font-size: 17px;
        }

        /* CATEGORY */

        .process-category {
          position: absolute;
          z-index: 2;
          bottom: 19px;
          left: 15px;
          color: var(--yellow);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.3px;
        }

        /* ARROW */

        .process-image-arrow {
          position: absolute;
          z-index: 3;
          right: 13px;
          bottom: 12px;
          width: 35px;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid rgba(255,255,255,.8);
          border-radius: 50%;
          color: white;
          transition: .35s ease;
        }

        .process-image-arrow svg {
          width: 16px;
          height: 16px;
        }

        .process-card:hover .process-image-arrow {
          background: var(--yellow);
          border-color: var(--yellow);
          color: var(--black);
          transform: rotate(45deg);
        }

        .process-card:last-child .process-image-arrow {
          background: var(--yellow);
          border-color: var(--yellow);
          color: var(--black);
        }

        /* CONNECTORS */

        .process-connector {
          position: absolute;
          z-index: 4;
          top: 50%;
          right: -32px;
          transform: translate(50%, -50%);
          width: 34px;
          height: 34px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fffdf7;
          border: 1px solid #ded9ce;
          border-radius: 50%;
          color: var(--yellow);
          pointer-events: none;
        }

        .process-connector svg {
          width: 15px;
          height: 15px;
        }

        /* TEXT */

        .process-copy {
          padding-top: 30px;
        }

        .process-name {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 17px;
          color: #45423c;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .process-name::before {
          content: "";
          width: 18px;
          height: 1.5px;
          background: var(--yellow);
        }

        .process-card-title {
          margin: 0;
          font-family: 'Anton', sans-serif;
          font-size: clamp(21px, 1.65vw, 31px);
          font-weight: 400;
          line-height: 1.17;
          color: var(--black);
        }

        .process-description {
          margin: 13px 0 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.75;
        }

        /* PRINCIPLES */

        .principles-strip {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1fr;
          align-items: center;
          margin-top: 65px;
          padding: 25px 30px;
          min-height: 121px;
          background: #fffefa;
          border: 1px solid var(--border);
          border-radius: 7px;
        }

        .principles-lead {
          padding-right: 25px;
        }

        .principles-lead > span {
          display: block;
          margin-bottom: 15px;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #45423c;
        }

        .principles-lead strong {
          font-family: 'Anton', sans-serif;
          font-size: 21px;
          font-weight: 400;
          white-space: nowrap;
        }

        .principles-lead strong span {
          color: var(--yellow);
        }

        .principle {
          min-height: 69px;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 0 22px 0 28px;
          border-left: 1px solid var(--border);
        }

        .principle-number {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--yellow);
          border-radius: 50%;
          font-family: 'Anton', sans-serif;
          font-size: 13px;
        }

        .principle h3 {
          margin: 0;
          font-size: 8px;
          line-height: 1.6;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .principle p {
          margin: 5px 0 0;
          color: var(--muted);
          font-size: 9px;
          line-height: 1.6;
        }

        /* TABLET */

        @media(max-width: 1100px) {
          .process-container {
            width: 88%;
          }

          .process-grid {
            gap: 22px;
          }

          .process-connector {
            right: -22px;
          }

          .principles-strip {
            padding: 22px 18px;
          }

          .principle {
            padding: 0 12px;
            gap: 9px;
          }

          .principles-lead strong {
            font-size: 17px;
          }
        }

        /* SMALL TABLET */

        @media(max-width: 760px) {
          .process-container {
            width: 90%;
          }

          .process-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 40px 24px;
          }

          .process-connector {
            display: none;
          }

          .process-image-wrap {
            aspect-ratio: .9;
          }

          .process-card-title {
            font-size: 27px;
          }

          .principles-strip {
            grid-template-columns: 1fr 1fr;
            gap: 25px 10px;
          }

          .principle:nth-child(3) {
            border-left: none;
          }
        }

        /* MOBILE */

        @media(max-width: 480px) {
          .our-process {
            padding: 80px 0 50px;
          }

          .process-container {
            width: 88%;
          }

          .process-header {
            flex-direction: column;
            gap: 12px;
            margin-bottom: 30px;
          }

          .process-heading {
            font-size: clamp(48px, 13vw, 65px);
          }

          .process-intro {
            margin: 0;
            text-align: left;
            font-size: 12px;
          }

          .process-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .process-image-wrap {
            aspect-ratio: 1.05;
          }

          .process-copy {
            padding-top: 21px;
          }

          .process-name {
            margin-bottom: 13px;
          }

          .process-card-title {
            font-size: 32px;
          }

          .process-description {
            font-size: 13px;
            line-height: 1.8;
          }

          .principles-strip {
            grid-template-columns: 1fr;
            gap: 22px;
            margin-top: 45px;
            padding: 25px 20px;
          }

          .principles-lead {
            padding: 0 0 15px;
          }

          .principle,
          .principle:nth-child(2),
          .principle:nth-child(3) {
            min-height: 55px;
            padding: 12px 0;
            border-left: none;
            border-top: 1px solid var(--border);
          }
        }

        /* ACCESSIBILITY */

        @media(prefers-reduced-motion: reduce) {
          .process-image,
          .process-video,
          .process-image-arrow {
            transition: none;
          }
        }
      `}</style>

      <SectionParallax
        targetRef={sectionRef}
        className="z-0"
        style={{
          background:
            "radial-gradient(ellipse at 85% 15%, rgba(242,201,0,.12), transparent 38%), radial-gradient(ellipse at 8% 85%, rgba(242,201,0,.09), transparent 35%)",
        }}
      />

      <div className="process-container">

        {/* HEADER */}

        <header className="process-header">
          <h2 className="process-heading">
            OUR <span>PROCESS.</span>
          </h2>

          <p className="process-intro">
            Clear heads. Close collaboration.
            <br />
            Work that gets people talking.
          </p>
        </header>

        {/* PROCESS CARDS */}

        <div className="process-grid">
          {steps.map((step, index) => (
            <article className="process-card" key={step.number}>

              {/* VIDEO / IMAGE */}

              <div className="process-image-wrap">

                {step.type === "video" ? (
                  <video
                    className="process-video"
                    src={step.media}
                    poster={step.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                    aria-label={step.alt}
                  />
                ) : (
                  <img
                    className="process-image"
                    src={step.media}
                    alt={step.alt}
                    loading="lazy"
                  />
                )}

                {/* NUMBER */}

                <span className="process-number">
                  {step.number}
                </span>

                {/* CATEGORY */}

                <span className="process-category">
                  {step.category}
                </span>

                {/* ARROW */}

                <span className="process-image-arrow">
                  <ArrowUpRight />
                </span>

              </div>

              {/* TEXT */}

              <div className="process-copy">

                <div className="process-name">
                  {step.name}
                </div>

                <h3 className="process-card-title">
                  {step.title.map((line, i) => (
                    <React.Fragment key={line}>
                      {i > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </h3>

                <p className="process-description">
                  {step.description}
                </p>

              </div>

              {/* CONNECTOR */}

              {index !== steps.length - 1 && (
                <span className="process-connector">
                  <ArrowRight />
                </span>
              )}

            </article>
          ))}
        </div>

        {/* PRINCIPLES STRIP */}

        <div className="principles-strip" id="approach">

          <div className="principles-lead">
            <span>THE WAY WE SEE IT</span>

            <strong>
              NO EGO. ALL <span>IMPACT.</span>
            </strong>
          </div>

          {principles.map((principle) => (
            <div className="principle" key={principle.number}>

              <span className="principle-number">
                {principle.number}
              </span>

              <div>
                <h3>{principle.title}</h3>
                <p>{principle.detail}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
