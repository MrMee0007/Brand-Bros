import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Video, TrendingUp, Aperture, Star, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

/* Matches pitch deck "ADD-ON SERVICES" slide */
const ADDONS = [
  { icon: Camera,     title: "PRODUCT SHOOT",   price: "Range ₹10,000 - ₹50,000",     per: "Varies on Product",       available: true },
  { icon: Video,      title: "EVENT COVERAGE",  price: "₹25,000 - ₹50,000",    per: "",       available: true },
  { icon: TrendingUp, title: "META ADS",         price: "Starting ₹8,000",    per: "Per Budget", available: true },
  { icon: Aperture,   title: "DRONE SHOOT",      price: "COMING",     per: "SOON",   available: false },
];

const BOTTOM = [
  { icon: Star,   label: "PREMIUM QUALITY",  desc: "Top-tier results"       },
  { icon: Clock,  label: "ON-TIME DELIVERY", desc: "Always on schedule"     },
  { icon: Shield, label: "TRUSTED BY BRANDS",desc: "Built on relationships" },
];

const PLANS = [
  {
    name: "STARTER",
    desc: "Perfect for startups.",
    features: [
      "10 Reels (7 Std + 3 Premium)",
      "5 Carousel Posts",
      "Caption Writing",
      "Content Calendar",
      "Social Media Management",
      "Story Management",
      "Custom Thumbnails",
      "Monthly Review",
      "Complimentry Outro"
    ],
    featured: false,
  },
  {
    name: "GROWTH",
    desc: "Most popular — scale your brand.",
    features: [
      "15 Reels (10 Std + 5 Premium)",
      "10 Carousel Posts",
      "Caption Writing",
      "Content Calendar",
      "Social Media Management",
      "Story Management",
      "Custom Thumbnails",
      "Monthly Review",
      "Priority Support",
      "Complimentry Outro",
    ],
    featured: true,
  },
  {
    name: "PREMIUM",
    desc: "Full-throttle for market leaders.",
    features: [
      "15 Reels (5 Std + 10 Premium)",
      "15 Carousel Posts",
      "Caption Writing",
      "Content Calendar",
      "Social Media Management",
      "Story Management",
      "Custom Thumbnails",
      "Monthly Review",
      "Priority Support",
      "Advanced Content Strategy",
      "Complimentry Outro",
    ],
    featured: false,
  },
];

export default function PricingSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-28 px-6 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Retainer plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <h2 className="font-heading text-[clamp(3rem,8vw,7rem)] leading-none">
         <span className="text-[#F5C200]">   OUR PLANS</span>
          </h2>
          <p className="text-white/45 mt-4 text-sm">Transparent retainers. Cancel anytime. Scale à la carte.</p>
        </motion.div>
        <div className="flex justify-center mb-12">
          <div className="w-16 h-0.5 bg-[#F5C200]" />
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-20 items-start">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-7 flex flex-col hover:-translate-y-1.5 transition-all duration-400 ${
                plan.featured
                  ? "border-[#F5C200] bg-[#111] shadow-[0_0_60px_rgba(245,194,0,0.1)] md:-mt-4"
                  : "border-white/10 bg-[#111]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F5C200] text-black text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-2xl text-white tracking-widest mb-1">{plan.name}</h3>
              <p className="text-white/35 text-xs mb-5">{plan.desc}</p>
              <div className="w-8 h-0.5 bg-[#F5C200] mb-5" />
              <p className="font-heading text-xl text-[#F5C200] mb-6">Contact Us for Pricing</p>
              <ul className="space-y-2 flex-1 mb-7">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-[0.78rem] text-white/50">
                    <span className="text-white/20 mt-0.5 flex-shrink-0">—</span>{f}
                  </li>
                ))}
                <li className="flex items-start gap-2 text-[0.78rem] text-[#F5C200]">
                  {plan.gold}
                </li>
              </ul>
              <Link
                to="/contact"
                className={`block text-center py-3.5 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  plan.featured
                    ? "bg-[#F5C200] text-black hover:bg-[#FFD740]"
                    : "border border-white/25  hover:border-[#F5C200]/50 hover:text-[#F5C200] text-white"
                }`}
              >
                Get Started →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── ADD-ON SERVICES — pitch deck slide ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-center mb-4"
        >
          <h2 className="font-heading text-[clamp(2.5rem,7vw,5.5rem)] leading-none">
           <span className="text-[#F5C200]"> ADD-ON SERVICES</span>
          </h2>
          <p className="text-white/45 mt-3 text-sm">
            Powerful add-ons to{" "}
            <span className="text-[#F5C200] font-semibold">elevate your brand.</span>
          </p>
        </motion.div>
        <div className="flex justify-center mb-10">
          <div className="w-16 h-0.5 bg-[#F5C200]" />
        </div>

        {/* 4 add-on cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {ADDONS.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.4 + i * 0.08 }}
                className={`border rounded-2xl p-6 text-center flex flex-col items-center gap-4 hover:-translate-y-1.5 transition-all duration-400 ${
                  a.available
                    ? "border-white/10 bg-[#111] hover:border-[#F5C200]/40"
                    : "border-white/6 bg-[#0d0d0d] opacity-60"
                }`}
              >
                {/* Icon circle */}
                <div className="w-14 h-14 rounded-full border-2 border-[#F5C200] flex items-center justify-center">
                  <Icon size={22} className="text-[#F5C200]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-bold uppercase text-[0.72rem] tracking-[0.14em] text-white">{a.title}</h3>

                {/* Gold separator */}
                <div className="w-8 h-0.5 bg-[#F5C200]" />

                {/* Price */}
                {a.available ? (
                  <div>
                    <p className="font-heading text-[2rem] text-[#F5C200] leading-none">{a.price}</p>
                    {a.per && <p className="text-white/35 text-xs mt-1">{a.per}</p>}
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="font-heading text-xl text-[#F5C200] leading-none">{a.price}</p>
                    <p className="text-[#F5C200] font-bold text-sm mt-0.5">{a.per}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.65 }}
          className="border border-white/8 bg-[#111] rounded-2xl px-6 py-4 flex flex-wrap items-center justify-around gap-6"
        >
          {BOTTOM.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#F5C200]/50 flex items-center justify-center flex-shrink-0">
                <Icon size={15} className="text-[#F5C200]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold uppercase text-[0.68rem] tracking-[0.14em] text-white">{label}</p>
                <p className="text-white/35 text-[0.7rem] mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
