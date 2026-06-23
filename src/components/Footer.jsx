import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpeg"; // Change path if needed

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const socials = [
  {
    icon: Instagram,
    link: "https://instagram.com/brandmonk",
  },
  {
    icon: Linkedin,
    link: "https://linkedin.com/company/brandmonk",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-[#F5F1E8] px-6 md:px-16 py-20 overflow-hidden border-t border-[#CDA349]/10">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#CDA349]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#CDA349]/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP */}
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* BRAND */}
          <div className="md:col-span-2">

            <div className="flex items-center gap-4 mb-6">

              {/* Logo */}
              <div
  className="
    w-16
    h-16
    rounded-full
    overflow-hidden
    border
    border-[#CDA349]/30
    bg-black
    shadow-[0_0_25px_rgba(205,163,73,0.15)]
  "
>
                <img
                  src={logo}
                  alt="Brand Monk Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Brand Text */}
              <div>
                <motion.h2
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="text-3xl font-bold"
                >
                  Brand Monk
                </motion.h2>

                <p className="text-xs tracking-[5px] uppercase text-white/40">
                  Marketing Monks
                </p>
              </div>

            </div>

            <p className="text-white/60 max-w-lg leading-relaxed">
              We help creators, founders, and businesses build authority,
              visibility, and growth through strategic content, personal
              branding, and performance-driven marketing.
            </p>

          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-lg font-semibold text-[#CDA349] mb-4">
              Navigation
            </h3>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-[#CDA349] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-[#CDA349] mb-4">
              Contact
            </h3>

            <div className="space-y-4 text-white/60">

              <a
                href="mailto:brandmonk.creatives@gmail.com"
                className="flex items-center gap-3 hover:text-[#CDA349] transition"
              >
                <Mail size={18} />
                <span>brandmonk.creatives@gmail.com</span>
              </a>

              <a
                href="tel:+917500741215"
                className="flex items-center gap-3 hover:text-[#CDA349] transition"
              >
                <Phone size={18} />
                <span>+91 75007 41215</span>
              </a>

            </div>
          </div>

        </div>

        {/* NEWSLETTER */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-xl font-semibold">
              Join The Growth Circle
            </h3>

            <p className="text-white/60 mt-2">
              Receive branding, content, and growth insights directly in your inbox.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="Your Email"
              required
              className="bg-white/5 border border-white/10 focus:border-[#CDA349] px-4 py-3 rounded-l-lg outline-none w-full md:w-72 text-white"
            />

            <button
              type="submit"
              className="bg-[#CDA349] text-black px-6 py-3 rounded-r-lg font-semibold hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Brand Monk.
            Growth. Visibility. Authority.
          </p>

          <div className="flex gap-5">
            {socials.map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#CDA349] transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-white/30 text-sm">
            Designed & Developed by Brand Monk
          </p>

        </div>

      </div>
    </footer>
  );
}