import React, { memo } from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

/* ================= DATA ================= */
const stats = [
  { value: "4+", label: "Years Behind the Lens" },
  { value: "32+", label: "Films & Projects" },
  { value: "8+", label: "Awards & Selections" },
];

const socials = [
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/yug-gupta-a65663281/",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/cinematicyug/",
  },
];

/* ================= COMPONENT ================= */
const AboutSection = () => {
  return (
    <section className="relative bg-black text-white py-20 sm:py-24 px-4 md:px-12 lg:px-24 overflow-hidden">

      {/* 🌌 Cinematic Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-lime-400/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-lime-400/10 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto">

        {/* Availability Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md rounded-full px-4 py-1.5">
            <div className="w-5 h-5 rounded-full bg-lime-400 flex items-center justify-center">
              <span className="text-black text-[10px] font-bold">LK</span>
            </div>
            <span className="text-xs text-white/70">
              Available for projects
            </span>
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
          </div>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-[1.2fr_auto] gap-10 md:gap-12 items-center"
        >

          {/* LEFT */}
          <div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] mb-5"
            >
              ABOUT{" "}
              <span className="italic text-lime-400">
                ME
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-white/60 text-sm sm:text-base md:text-lg max-w-lg mb-8 leading-relaxed"
            >
              I'm Lovkush — a cinematographer focused on crafting immersive
              visual stories through light, motion, and composition. My work
              blends cinematic depth with modern aesthetics to create powerful
              visual experiences.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-8 sm:gap-10 mb-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-lime-400">
                    {stat.value}
                  </p>
                  <p className="text-white/40 text-xs sm:text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-6 text-sm"
            >
              <div>
                <p className="text-white/40 text-xs">Representation :</p>
                <p className="text-white font-medium">
                  Pratibha - Cinematography Club
                </p>
              </div>
              <div>
                <p className="text-white/40 text-xs">Email :</p>
                <p className="text-white font-medium">
                  yuggupta9236@gmail.com
                </p>
              </div>
            </motion.div>

            {/* SOCIALS */}
            <motion.div variants={fadeUp} className="flex gap-4 mb-6">
              {socials.map(({ icon: Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0px 0px 15px rgba(132,204,22,0.5)",
                  }}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-lime-400 transition"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.button
              variants={fadeUp}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 20px rgba(132,204,22,0.5)",
              }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-lime-400 text-black text-sm sm:text-lg font-semibold shadow-md hover:bg-lime-300 transition"
            >
              View Page
            </motion.button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center items-center relative mt-8 md:mt-0 group">

            {/* Glow */}
            <div className="absolute w-72 h-72 bg-lime-400/10 blur-[120px] rounded-full" />

            {/* Premium Polaroid */}
            <motion.div
              whileHover={{ scale: 1.08, rotate: 2 }}
              className="relative z-10"
            >
              <div className="bg-white p-3 pb-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <div className="overflow-hidden">
                  <img
                    src={"https://res.cloudinary.com/ds0y1ut9q/image/upload/v1777367409/WhatsApp_Image_2026-04-18_at_3.52.03_PM_1_1_sokik9.jpg"}
                    alt="Yug Gupta"
                    className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Caption */}
                <p className="mt-4 text-center text-xs tracking-[0.3em] text-black/60 uppercase">
                  Behind The Lens
                </p>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default memo(AboutSection);