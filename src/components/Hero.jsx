import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const taglines = [
"Scale Brands With Soul",
"Move Stories, Move Markets",
"Engineer Creator Worlds",
"Build Brands That Compound",
"Marketing Practiced Like a Discipline",
];

const letterVariants = {
hidden: {
y: 100,
opacity: 0,
},
visible: (i) => ({
y: 0,
opacity: 1,
transition: {
delay: 0.5 + i * 0.03,
duration: 0.7,
ease: [0.22, 1, 0.36, 1],
},
}),
};

const AnimatedWord = ({ text, className = "" }) => (
<span className={`inline-flex overflow-hidden ${className}`}>
{text.split("").map((char, i) => (
<motion.span
key={i}
custom={i}
variants={letterVariants}
initial="hidden"
animate="visible"
className="inline-block"
>
{char === " " ? "\u00A0" : char}
</motion.span>
))} </span>
);

const Hero = () => {
const [mouse, setMouse] = useState({
x: -500,
y: -500,
});

const handleMove = (e) => {
setMouse({
x: e.clientX,
y: e.clientY,
});
};

return ( <section
   onMouseMove={handleMove}
   className="
     hero-grid
     relative
     min-h-screen
     flex
     flex-col
     justify-center
     px-5
     sm:px-6
     md:px-12
     pt-28
     pb-16
     overflow-hidden
     grain
   "
 >
{/* Desktop Mouse Glow */} <div className="hidden md:block">
<motion.div
className="pointer-events-none fixed w-[450px] h-[450px] rounded-full z-0"
animate={{
x: mouse.x - 225,
y: mouse.y - 225,
}}
transition={{
type: "spring",
stiffness: 80,
damping: 20,
}}
style={{
background:
"radial-gradient(circle, rgba(199,164,80,.14), transparent 70%)",
filter: "blur(80px)",
}}
/> </div>

  {/* Floating Orb 1 */}
  <motion.div
    className="
      blur-orb
      w-[300px]
      h-[300px]
      md:w-[700px]
      md:h-[700px]
      top-10
      md:top-1/4
      left-1/2
      -translate-x-1/2
      md:left-1/3
    "
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Floating Orb 2 */}
  <motion.div
    className="
      blur-orb
      w-[220px]
      h-[220px]
      md:w-[420px]
      md:h-[420px]
      bottom-0
      right-0
    "
    animate={{
      y: [15, -15, 15],
      x: [10, -10, 10],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Top Tagline */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="
      flex
      items-center
      justify-center
      md:justify-start
      gap-3
      mb-8
      z-10
    "
  >
    <span className="text-xs uppercase tracking-[0.25em] text-[#9f9584]">
      Brand Monk
    </span>

    <span className="w-2 h-2 rounded-full bg-[#c7a450]" />

    <div className="h-5 overflow-hidden">
      <div className="animate-text-rotate">
        {taglines.map((item, index) => (
          <p
            key={index}
            className="h-5 text-xs uppercase tracking-[0.2em] text-[#9f9584]"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  </motion.div>

  {/* Main Heading */}
  <motion.h1
    className="
      hero-heading
      font-extrabold
      z-10
      text-center
      md:text-left
    "
  >
    <div className="flex flex-wrap justify-center md:justify-start gap-x-4 md:gap-x-6">
      <AnimatedWord
        text="Marketing"
        className="text-[clamp(2.8rem,14vw,13rem)] text-[#f4f0e8]"
      />

      <AnimatedWord
        text="Monks"
        className="text-[clamp(2.8rem,14vw,13rem)] text-gradient-gold italic"
      />
    </div>

    <div className="flex flex-wrap justify-center md:justify-start gap-x-4 md:gap-x-6 mt-2">
      <AnimatedWord
        text="of the"
        className="text-[clamp(1.6rem,8vw,8rem)] text-[#8e8678] font-light"
      />

      <AnimatedWord
        text="new"
        className="text-[clamp(2.8rem,14vw,13rem)] text-[#f4f0e8]"
      />

      <AnimatedWord
        text="era."
        className="text-[clamp(2.8rem,14vw,13rem)] text-gradient-gold"
      />
    </div>
  </motion.h1>

  {/* CTA */}
  <motion.a
    href="#work"
    whileHover={{
      scale: 1.04,
    }}
    whileTap={{
      scale: 0.95,
    }}
    className="
      mt-10
      mx-auto
      md:mx-0
      flex
      items-center
      gap-3
      rounded-full
      border
      border-[#c7a450]
      bg-[#c7a450]/10
      px-5
      py-3
      w-fit
      z-10
      backdrop-blur-md
    "
  >
    <span className="text-[11px] uppercase tracking-[0.2em] text-[#f4f0e8]">
      Latest Campaign
    </span>

    <ArrowRight className="w-4 h-4 text-[#c7a450]" />

    <span className="hidden sm:block text-[11px] uppercase tracking-[0.2em] text-[#c7a450]">
      Royal Enfield × Himalaya
    </span>
  </motion.a>

  {/* Hero Description */}
  <motion.p
    initial={{
      opacity: 0,
      y: 30,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      delay: 2,
      duration: 0.8,
    }}
    className="
      mt-8
      md:absolute
      md:bottom-8
      md:right-12
      max-w-sm
      mx-auto
      md:mx-0
      text-center
      md:text-right
      text-xs
      uppercase
      leading-relaxed
      tracking-wide
      text-[#8e8678]
      z-10
    "
  >
    We engineer brand worlds — social, creators, content & growth —
    for Nikon, Royal Enfield, Ixigo, KTM, GLA University and India's
    top creators.
  </motion.p>
</section>


);
};

export default Hero;
