import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Globe,
  Target,
  Lightbulb,
  TrendingUp,
  Star,
} from "lucide-react";
import SectionParallax from "./SectionParallax";

const GROW_CARDS = [
  { icon: Target, title: "Clear strategy", desc: "Purposeful content that drives results." },
  { icon: Lightbulb, title: "Creative excellence", desc: "Ideas that stand out and stay remembered." },
  { icon: TrendingUp, title: "Measurable growth", desc: "Tracking what matters. Delivering what works." },
  { icon: Star, title: "Long-term partner", desc: "Your growth is our priority." },
];

const CTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#faf6e9] px-6 py-16 text-white md:px-12 md:py-24"
    >
      <SectionParallax
        targetRef={ref}
        className="z-0"
        style={{
          background:
            "radial-gradient(ellipse at 90% 15%, rgba(242,201,0,.12), transparent 38%), radial-gradient(ellipse at 8% 90%, rgba(242,201,0,.08), transparent 35%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-black px-6 py-10 shadow-[0_24px_70px_rgba(0,0,0,.16)] sm:px-10 sm:py-12 lg:px-14 lg:py-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,.2) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(ellipse at center, black 15%, transparent 80%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 90% 15%, rgba(245,194,0,.1), transparent 38%), radial-gradient(ellipse at 5% 100%, rgba(245,194,0,.06), transparent 35%)",
          }}
        />
        <div className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_.85fr] lg:gap-16">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#F5C200]">
              <span className="h-px w-8 bg-[#F5C200]" />
              Thank you. Let&apos;s build something great.
            </p>
            <h2 className="max-w-4xl font-heading text-[clamp(3.5rem,8vw,7rem)] uppercase leading-[0.88]">
              Let&apos;s grow
              <br />
              <span className="text-[#F5C200]">together.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
              Ready to grow your brand with content that connects and converts?
              We&apos;re just a message away.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-7 rounded-full bg-[#F5C200] py-2.5 pl-6 pr-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD740]"
            >
              Start a project
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-[#F5C200] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={17} />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {GROW_CARDS.map(({ icon: Icon, title, desc }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.12 + index * 0.07 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-[#F5C200]/30 sm:p-5"
              >
                <Icon size={18} className="mb-4 text-[#F5C200]" strokeWidth={1.6} />
                <h3 className="text-[9px] font-bold uppercase leading-tight tracking-[0.14em] text-white sm:text-[10px]">
                  {title}
                </h3>
                <p className="mt-2 text-[11px] leading-relaxed text-white/40">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-3 border-t border-white/10 pt-6 text-xs md:grid-cols-3">
          <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/70">
            <Phone size={15} className="mt-0.5 shrink-0 text-[#F5C200]" />
            <div className="flex flex-col gap-1">
              <a href="tel:+918887586830" className="transition-colors hover:text-[#F5C200]">
                +91 88875 86830
              </a>
              <a href="tel:+917248848020" className="transition-colors hover:text-[#F5C200]">
                +91 72488 48020
              </a>
            </div>
          </div>
          <a
            href="mailto:brandbros1711@gmail.com"
            className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/70 transition-colors hover:text-[#F5C200]"
          >
            <Mail size={15} className="text-[#F5C200]" />
            brandbros1711@gmail.com
          </a>
          <span className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/45">
            <Globe size={15} className="text-[#F5C200]" />
            DM us to explore our work and more.
          </span>
        </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
