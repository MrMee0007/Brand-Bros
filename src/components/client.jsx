import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  "Nikon",
  "Ixigo",
  "Abhibus",
  "GLA University",
  "Oppskills",
  "Brndfy",
  "Royal Enfield",
  "KTM",
];

const creators = [
  "+ 120 YouTubers",
  "+ Top Reels Creators",
  "+ D2C Founders",
  "+ Lifestyle Influencers",
];

const stats = [
  {
    value: "180",
    unit: "M+",
    label: "IMPRESSIONS\nDELIVERED",
    direction: "up",
  },
  {
    value: "120",
    unit: "+",
    label: "CREATORS\nMANAGED",
    direction: "up",
  },
  {
    value: "3.1",
    unit: "x",
    label: "AVG ROAS\nON PAID",
    direction: "up",
  },
  {
    value: "42",
    unit: "%",
    label: "AVG ENGAGEMENT\nLIFT",
    direction: "up",
  },
  {
    value: "60",
    unit: "+",
    label: "BRANDS\nSCALED",
    direction: "up",
  },
  {
    value: "9",
    unit: "M",
    label: "CREATOR\nFOLLOWERS REACHED",
    direction: "up",
  },
  {
    value: "71",
    unit: "%",
    label: "QUALIFIED\nLEAD GROWTH",
    direction: "up",
  },
  {
    value: "38",
    unit: "%",
    label: "CAC\nREDUCTION",
    direction: "down",
  },
];

export default function ClientsSection() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <section
      id="clients"
      ref={ref}
      className="px-6 md:px-12 py-24 md:py-40 relative overflow-hidden"
    >
      <div className="line-separator mb-16" />

      {/* Heading */}
      <div className="flex items-center gap-2 mb-8">
        <span className="w-2 h-2 rounded-full bg-primary" />
        <span className="section-label">Trusted By</span>
      </div>

      {/* Moving Brand Belt */}
      <div className="relative overflow-hidden mb-16 border-y border-border py-8">

        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex whitespace-nowrap animate-marquee">
          {[...clients, ...clients, ...clients].map((client, i) => (
            <span
              key={i}
              className="
                mx-10
                font-bold
                text-4xl
                md:text-6xl
                tracking-tight
                text-white/80
                hover:text-[#c7a450]
                transition-colors
              "
            >
              {client}
              <span className="text-[#c7a450]">.</span>
            </span>
          ))}
        </div>
      </div>

      {/* Client Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mb-24">
        {clients.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: i * 0.06,
              duration: 0.5,
            }}
            className="
              bg-black
              h-28
              md:h-32
              flex
              items-center
              justify-center
              group
              hover:bg-white/5
              transition-colors
            "
          >
            <span
              className="
                font-semibold
                text-xl
                md:text-2xl
                tracking-tight
                text-white/50
                group-hover:text-[#c7a450]
                transition-colors
              "
            >
              {name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Creators */}
      <div className="flex flex-wrap gap-x-8 gap-y-3 mb-20 text-sm tracking-[0.15em] uppercase text-white/50">
        {creators.map((creator) => (
          <span
            key={creator}
            className="hover:text-[#c7a450] transition-colors"
          >
            {creator}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.4 + i * 0.08,
                duration: 0.6,
              }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-white">
                <span className="text-[#c7a450] text-lg mr-1">
                  {stat.direction === "up" ? "↑" : "↓"}
                </span>

                {stat.value}

                <span className="text-xl text-[#c7a450]">
                  {stat.unit}
                </span>
              </p>

              <span className="text-xs tracking-[0.15em] text-white/50 whitespace-pre-line mt-2 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}