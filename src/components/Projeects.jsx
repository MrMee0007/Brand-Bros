import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const lines1 = [
"A modern marketing",
"monastery built for",
"brands & creators —",
"where strategy is",
"ritual and growth",
"is the practice.",
];

const lines2 = [
"We craft social",
"campaigns, manage",
"creators, design",
"brand systems and",
"engineer growth",
"loops for the",
"boldest brands of",
"the new era.",
];

const AnimatedLine = ({ text, index }) => {
const ref = useRef(null);

const isInView = useInView(ref, {
once: true,
margin: "-50px",
});

return ( <div ref={ref} className="overflow-hidden">
<motion.div
initial={{
y: "100%",
opacity: 0,
}}
animate={
isInView
? {
y: "0%",
opacity: 1,
}
: {}
}
transition={{
delay: index * 0.08,
duration: 0.7,
ease: [0.22, 1, 0.36, 1],
}}
className="uppercase font-body"
>
{text}
</motion.div> </div>
);
};

const AboutSection = () => {
const sectionRef = useRef(null);

const isInView = useInView(sectionRef, {
once: true,
margin: "-100px",
});

return ( <section
   id="about"
   ref={sectionRef}
   className="px-6 md:px-12 py-24 md:py-40"
 > <div className="line-separator mb-16" />


  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
    {/* Section Label */}
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
            }
          : {}
      }
      transition={{
        duration: 0.6,
      }}
      className="md:col-span-2"
    >
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary" />
        <span className="section-label">About</span>
      </div>
    </motion.div>

    {/* Small Text */}
    <div className="md:col-span-3 text-lg md:text-xl leading-relaxed">
      {lines1.map((line, i) => (
        <AnimatedLine
          key={i}
          text={line}
          index={i}
        />
      ))}
    </div>

    {/* Large Text */}
    <div className="md:col-span-7 text-2xl md:text-4xl lg:text-5xl leading-tight font-light">
      {lines2.map((line, i) => (
        <AnimatedLine
          key={i}
          text={line}
          index={i + lines1.length}
        />
      ))}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          delay: 1.2,
          duration: 0.6,
        }}
        className="flex flex-wrap gap-6 mt-12"
      >
        <a
          href="/about"
          className="
            flex items-center gap-2
            text-xs uppercase tracking-[0.2em]
            text-[#8e8678]
            hover:text-[#f4f0e8]
            transition-colors
            group
          "
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          About Us
        </a>

        <a
          href="/services"
          className="
            flex items-center gap-2
            text-xs uppercase tracking-[0.2em]
            text-[#8e8678]
            hover:text-[#f4f0e8]
            transition-colors
            group
          "
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          Services
        </a>
      </motion.div>
    </div>
  </div>
</section>


);
};

export default AboutSection;
