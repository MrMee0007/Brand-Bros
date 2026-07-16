// import { useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";

// /* ================= TEAM DATA ================= */

// const TEAM = [
//   {
//     name: "Yug Gupta",
//     role: "Founder & Creative Director",
//     img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774567144/Story_eh2xik.jpg",
//     color: "from-yellow-400 via-orange-400 to-red-500",
//     bio: "Yug Gupta is the Founder of Brand Bros and a Computer Science Engineering student with a passion for cinematic storytelling, visual branding, and creative innovation. As a cinematographer and creative visionary, he transforms ideas into compelling visual experiences that leave a lasting impact.",
//     quote:
//       "Every frame has a purpose. Every story deserves to be unforgettable.",
//   },
//   {
//     name: "Ansh Garg",
//     role: "Co-Founder & Creative Management Head",
//     img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1783369087/WhatsApp_Image_2026-06-05_at_10.05.03_AM_avbrl2.jpg",
//     color: "from-cyan-400 via-blue-500 to-purple-500",
//     bio: "Ansh Garg is the Co-Founder of Brand Bros, leading creative management and post-production. Renowned for his exceptional editing skills and meticulous attention to detail, he turns raw footage into immersive cinematic experiences.",
//     quote: "Editing is where imagination becomes reality.",
//   },
// ];

// /* ================= CARD ================= */

// function TeamCard({ member, index }) {
//   const [flipped, setFlipped] = useState(false);

//   const ref = useRef(null);

//   const inView = useInView(ref, {
//     once: true,
//     margin: "-60px",
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 40 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{
//         duration: 0.7,
//         delay: index * 0.15,
//       }}
//       className="relative h-[520px] cursor-pointer"
//       style={{ perspective: "1000px" }}
//       onClick={() => setFlipped((prev) => !prev)}
//     >
//       <div
//         className="relative w-full h-full transition-all duration-700"
//         style={{
//           transformStyle: "preserve-3d",
//           transform: flipped
//             ? "rotateY(180deg)"
//             : "rotateY(0deg)",
//         }}
//       >
//         {/* FRONT */}
//         <div
//           className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 group"
//           style={{
//             backfaceVisibility: "hidden",
//             WebkitBackfaceVisibility: "hidden",
//           }}
//         >
//           <img
//             src={member.img}
//             alt={member.name}
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

//           <div
//             className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${member.color}`}
//           />

//           <div className="absolute bottom-0 left-0 right-0 p-7">
//             <span className="text-[9px] uppercase tracking-[0.25em] text-yellow-400 font-bold block mb-2">
//               {member.role}
//             </span>

//             <h3 className="text-3xl font-bold text-white">
//               {member.name}
//             </h3>

//             <p className="text-xs text-white/40 mt-2 uppercase tracking-[0.15em]">
//               Click to read bio →
//             </p>
//           </div>
//         </div>

//         {/* BACK */}
//         <div
//           className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]"
//           style={{
//             transform: "rotateY(180deg)",
//             backfaceVisibility: "hidden",
//             WebkitBackfaceVisibility: "hidden",
//           }}
//         >
//           {/* Background */}
//           <img
//             src={member.img}
//             alt={member.name}
//             className="absolute inset-0 w-full h-full object-cover opacity-15 scale-110"
//           />

//           <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0b0b]/95 to-black" />

//           <div className="relative z-10 h-full flex flex-col p-8">
//             {/* Header */}
//             <div className="flex items-center gap-4 mb-8">
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="w-20 h-20 rounded-full object-cover border border-white/10"
//               />

//               <div>
//                 <span className="text-[10px] uppercase tracking-[0.3em] text-yellow-400 font-semibold">
//                   {member.role}
//                 </span>

//                 <h3 className="text-3xl font-bold text-white mt-1">
//                   {member.name}
//                 </h3>
//               </div>
//             </div>

//             {/* Bio */}
//             <div className="flex-1">
//               <p className="text-[15px] leading-8 text-white/65">
//                 {member.bio}
//               </p>

//               <blockquote className="mt-8 border-l-2 border-yellow-400 pl-5 italic text-white/90 leading-relaxed text-[15px]">
//                 "{member.quote}"
//               </blockquote>
//             </div>

//             {/* Footer */}
//             <div className="pt-6 border-t border-white/10 flex items-center justify-between">
//               <div>
//                 <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
//                   Brand Bros
//                 </p>

//                 <p className="text-sm text-white/60 mt-1">
//                   Building stories that inspire.
//                 </p>
//               </div>

//               <span className="text-[11px] uppercase tracking-[0.25em] text-yellow-400">
//                 Tap to Flip ↺
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* ================= SECTION ================= */

// export default function TeamSection() {
//   return (
//     <section className="py-28 px-6 bg-black text-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-16">
//           <p className="text-yellow-400 uppercase tracking-[0.3em] text-[10px] mb-4">
//             // The Team
//           </p>

//           <h2 className="text-4xl md:text-6xl font-bold leading-tight">
//             The creatives behind
//             <br />
//             every frame we shoot.
//           </h2>

//           <p className="text-white/40 mt-4">
//             Click any card to flip it.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {TEAM.map((member, index) => (
//             <TeamCard
//               key={member.name}
//               member={member}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const TEAM = [
  {
    name: "Yug Gupta",
    role: "Founder & Creative Director",
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774567144/Story_eh2xik.jpg",
    color: "from-yellow-400 via-orange-400 to-red-500",
    bio: "Yug Gupta is the Founder of Brand Bros and a Computer Science Engineering student with a passion for cinematic storytelling, visual branding, and creative innovation. As a cinematographer and creative visionary, he transforms ideas into compelling visual experiences that leave a lasting impact.",
    quote:
      "Every frame has a purpose. Every story deserves to be unforgettable.",
  },
  {
    name: "Ansh Garg",
    role: "Co-Founder & Creative Management Head",
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1783369087/WhatsApp_Image_2026-06-05_at_10.05.03_AM_avbrl2.jpg",
    color: "from-cyan-400 via-blue-500 to-purple-500",
    bio: "Ansh Garg is the Co-Founder of Brand Bros, leading creative management and post-production. Renowned for his exceptional editing skills and meticulous attention to detail, he turns raw footage into immersive cinematic experiences.",
    quote: "Editing is where imagination becomes reality.",
  },
];

function TeamCard({ member, index }) {
  const [flipped, setFlipped] = useState(false);

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      className="relative h-[520px] cursor-pointer [perspective:1000px]"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d]"
        style={{
          transform: flipped
            ? "rotateY(180deg)"
            : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}

        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 [backface-visibility:hidden] group">

          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${member.color}`}
          />

          <div className="absolute bottom-0 left-0 right-0 p-7">

            <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-[var(--brand)] block mb-2">
              {member.role}
            </span>

            <h3 className="font-heading text-3xl text-white">
              {member.name}
            </h3>

            <p className="text-xs uppercase tracking-[0.15em] text-white/40 mt-2">
              Click to read bio →
            </p>

          </div>

        </div>

        {/* BACK */}

        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]
          [transform:rotateY(180deg)]
          [backface-visibility:hidden]"
        >

          <img
            src={member.img}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover opacity-15 scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0b0b]/95 to-black" />

          <div className="relative z-10 h-full flex flex-col p-8">

            <div className="flex items-center gap-4 mb-8">

              <img
                src={member.img}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover border border-white/10"
              />

              <div>

                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[var(--brand)]">
                  {member.role}
                </span>

                <h3 className="font-heading text-3xl text-white mt-1">
                  {member.name}
                </h3>

              </div>

            </div>
                        {/* Bio */}
            <div className="flex-1">

              <p className="text-[15px] leading-8 text-white/65">
                {member.bio}
              </p>

              <blockquote className="mt-8 border-l-2 border-[var(--brand)] pl-5 italic text-white/90 leading-relaxed text-[15px]">
                "{member.quote}"
              </blockquote>

            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">

              <div>

                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Brand Bros
                </p>

                <p className="text-sm text-white/60 mt-1">
                  Building stories that inspire.
                </p>

              </div>

              <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--brand)]">
                Tap to Flip ↺
              </span>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section className="py-28 px-6 bg-black">

      <div className="max-w-7xl mx-auto">

        <div className="mb-16">

          <p className="text-[var(--brand)] uppercase tracking-[0.3em] text-[10px] mb-4">
            // The Team
          </p>

          <h2 className="text-[var(--brand)] font-heading text-4xl md:text-[3.2rem] leading-[0.92] max-w-xl">

            The creatives behind
            <br />
            every frame we shoot.

            <span className="block text-white/30 text-2xl mt-2">
              Click a card to flip it.
            </span>

          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {TEAM.map((member, index) => (

            <TeamCard
              key={member.name}
              member={member}
              index={index}
            />

          ))}

        </div>

      </div>

    </section>
  );
} 