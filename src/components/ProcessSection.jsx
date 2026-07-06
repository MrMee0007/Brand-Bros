import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart2, ClipboardList, Pen, Send, TrendingUp,
  Target, Users, Award,
} from "lucide-react";

/* ── Pitch-deck style: 5 steps with dotted arrows ── */
const STEPS = [
  {
    num: "01", icon: BarChart2,
    title: "ANALYZE",
    desc: "We analyze your business, audience and performance to find growth opportunities.",
  },
  {
    num: "02", icon: ClipboardList,
    title: "PLAN",
    desc: "We create a tailored strategy and content roadmap.",
  },
  {
    num: "03", icon: Pen,
    title: "CREATE",
    desc: "Our team creates high-quality content that connects.",
  },
  {
    num: "04", icon: Send,
    title: "PUBLISH",
    desc: "We schedule and publish content for maximum reach and impact.",
  },
  {
    num: "05", icon: TrendingUp,
    title: "OPTIMIZE",
    desc: "We track performance and optimize for better results.",
  },
];

const BOTTOM = [
  { icon: Target, label: "GOAL ORIENTED",    desc: "Everything we do has purpose." },
  { icon: Users,  label: "COLLABORATIVE",    desc: "We work with you, not just for you." },
  { icon: Award,  label: "RESULTS FOCUSED",  desc: "We measure what truly matters." },
];

/* ── Dotted arrow connector ─────────────────────── */
function Arrow() {
  return (
    <div className="hidden md:flex items-center flex-shrink-0 w-10 lg:w-14 relative -mx-1">
      <div className="w-full border-t-2 border-dashed border-[#F5C200]/40" />
      <div className="absolute right-0 text-[#F5C200]/60 text-base -translate-y-[1px]">▶</div>
    </div>
  );
}

export default function ProcessSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-28 px-6 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Header — pitch-deck style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <h2 className="font-heading text-[clamp(3.5rem,10vw,8rem)] leading-none">
            <span className="text-[#F5C200]"> OUR PROCESS</span>
          </h2>
          <p className="text-white/50 text-base mt-4 max-w-xl mx-auto">
            A simple, clear and proven process that{" "}
            <span className="text-[#F5C200] font-semibold">delivers results.</span>
          </p>
        </motion.div>

        {/* Gold underline */}
        <div className="flex justify-center mb-14">
          <div className="w-16 h-0.5 bg-[#F5C200]" />
        </div>

        {/* 5-step horizontal layout */}
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="flex flex-col md:flex-row items-center flex-1 min-w-0">
                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group flex-1 w-full border border-white/10 bg-[#111] rounded-2xl p-6 text-center hover:border-[#F5C200]/40 hover:bg-[#141414] transition-all duration-400 flex flex-col items-center gap-4"
                >
                  {/* Gold icon circle */}
                  <div className="w-16 h-16 rounded-full border-2 border-[#F5C200] flex items-center justify-center bg-[#111] group-hover:bg-[#F5C200]/10 transition-colors duration-300">
                    <Icon size={26} className="text-[#F5C200]" strokeWidth={1.5} />
                  </div>

                  {/* Number */}
                  <span className="text-[#F5C200] font-heading text-lg tracking-widest">{step.num}</span>

                  {/* Separator */}
                  <div className="w-8 h-0.5 bg-[#F5C200]" />

                  {/* Title */}
                  <h3 className="text-white font-bold uppercase tracking-[0.15em] text-sm">{step.title}</h3>

                  {/* Description */}
                  <p className="text-white/45 text-[0.8rem] leading-relaxed">{step.desc}</p>
                </motion.div>

                {/* Arrow between cards */}
                {i < STEPS.length - 1 && <Arrow />}
              </div>
            );
          })}
        </div>

        {/* Bottom strip — pitch-deck style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 border border-white/10 bg-[#111] rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/8"
        >
          {/* Left brand statement */}
          <div className="flex items-center gap-4 flex-1 pr-0 md:pr-8 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full border border-[#F5C200] flex items-center justify-center flex-shrink-0">
              <Award size={18} className="text-[#F5C200]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-bold uppercase text-[0.75rem] tracking-[0.15em] text-white">Strategy. Creativity. Consistency.</p>
              <p className="text-[#F5C200] font-bold uppercase text-[0.72rem] tracking-[0.12em]">That's How We Grow Brands.</p>
            </div>
          </div>

          {/* Right 3 pillars */}
          {BOTTOM.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={b.label} className="flex items-start gap-3 flex-1 pl-0 md:pl-8 pt-4 md:pt-0 justify-center md:justify-start">
                <div className="w-9 h-9 rounded-full border border-[#F5C200]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={15} className="text-[#F5C200]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-bold uppercase text-[0.72rem] tracking-[0.12em] text-white">{b.label}</p>
                  <p className="text-white/40 text-[0.75rem] mt-0.5">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
