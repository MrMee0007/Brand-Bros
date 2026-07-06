import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Mail, Globe, Target, Lightbulb, TrendingUp, Star } from "lucide-react";

/* Matches pitch deck "THANK YOU. LET'S BUILD SOMETHING GREAT." slide */

const GROW_CARDS = [
  { icon: Target,     title: "CLEAR STRATEGY",     desc: "Purposeful content that drives results."      },
  { icon: Lightbulb,  title: "CREATIVE EXCELLENCE", desc: "Ideas that stand out and stay remembered."    },
  { icon: TrendingUp, title: "MEASURABLE GROWTH",   desc: "Tracking what matters. Delivering what works."},
  { icon: Star,       title: "LONG TERM PARTNER",   desc: "Your growth is our priority."                 },
];

const CTA = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 px-6 bg-black overflow-hidden">
      {/* Background diagonal stripes (top-right) */}
      <div className="absolute top-0 right-0 w-40 h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 diag-stripes" />
      </div>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5C200]/4 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT: Thank you + contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          >
            <h2 className="font-heading text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.9] uppercase mb-2">
              Thank You.
              <br />
              <span>Let's Build</span>
              <br />
              Something{" "}
              <span className="text-[#F5C200]">Great.</span>
            </h2>

            {/* Gold separator */}
            <div className="w-12 h-0.5 bg-[#F5C200] my-6" />

            <p className="text-white/50 text-sm leading-relaxed mb-2">
              Ready to grow your brand with content that connects and converts?
            </p>
            <p className="text-[#F5C200] font-bold uppercase tracking-[0.12em] text-sm mb-8">
              We're Just a Message Away.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-white/8">
                <div className="w-9 h-9 rounded-full border border-[#F5C200]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={14} className="text-[#F5C200]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">+91 88875 86830</p>
                  <p className="text-white font-semibold text-sm">+91 72488 48020</p>
                  <p className="text-white/35 text-xs mt-1">Let's talk about your goals.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-white/8">
                <div className="w-9 h-9 rounded-full border border-[#F5C200]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={14} className="text-[#F5C200]" strokeWidth={1.5} />
                </div>
                <div>
                  <a href="mailto:anshgarg7640@gmail.com" className="text-white font-semibold text-sm hover:text-[#F5C200] transition-colors">
                    anshgarg7640@gmail.com
                  </a>
                  <p className="text-white/35 text-xs mt-1">Drop us an email anytime.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-[#F5C200]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Globe size={14} className="text-[#F5C200]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">DM us to explore our work and more.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Let's Grow Together ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0, 0, 1] }}
          >
            {/* Rocket + heading */}
            <div className="flex items-center gap-4 mb-2">
              <span className="text-4xl select-none">🚀</span>
              <h3 className="font-heading text-[clamp(1.8rem,4vw,2.8rem)] leading-none uppercase">
                Let's <span className="text-[#F5C200]">Grow</span> Together.
              </h3>
            </div>
            <div className="w-10 h-0.5 bg-[#F5C200] mb-8 ml-16" />

            {/* 4 mini cards */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {GROW_CARDS.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                    className="border border-white/10 bg-[#111] rounded-xl p-4 flex flex-col items-center text-center hover:border-[#F5C200]/40 hover:bg-[#141414] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full border border-[#F5C200]/60 flex items-center justify-center mb-3">
                      <Icon size={16} className="text-[#F5C200]" strokeWidth={1.5} />
                    </div>
                    <p className="font-bold uppercase text-[0.63rem] tracking-[0.12em] text-white mb-1 leading-tight">{c.title}</p>
                    <p className="text-white/35 text-[0.68rem] leading-snug">{c.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Main CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 border border-white/10 bg-[#111] rounded-xl p-4"
            >
              <Link
                to="/contact"
                className="w-11 h-11 rounded-full bg-[#F5C200] flex items-center justify-center flex-shrink-0 hover:bg-[#FFD740] hover:scale-110 transition-all duration-300"
              >
                <ArrowRight size={18} className="text-black" />
              </Link>
              <p className="font-bold uppercase text-[0.72rem] tracking-[0.1em] text-white leading-snug">
                The next chapter of your brand's growth{" "}
                <span className="text-[#F5C200]">starts now.</span>
              </p>
            </motion.div>

            {/* Script tagline */}
            <p
              className="text-center text-white/25 text-sm mt-6 italic"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              See you on the other side of success!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;