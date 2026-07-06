import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home",     href: "/" },
  { label: "Work",     href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 pt-5">
      <nav
        className={`mx-auto flex items-center justify-between rounded-full border border-[#F5C200]/20 backdrop-blur-xl px-5 py-3 shadow-[0_0_50px_rgba(245,194,0,.06)] transition-all duration-500 ${
          scrolled ? "bg-black/85" : "bg-black/40"
        }`}
      >
        {/* Logo — BRAND//BROS */}
        <Link to="/" className="group flex-shrink-0">
          <div className="flex flex-col leading-none select-none">
            <span className="font-heading text-[#F5C200] tracking-tight" style={{ fontSize: "1.45rem", lineHeight: 0.85 }}>
              BRAND<span className="text-[#F5C200]">//</span>
            </span>
            <span className="font-heading text-[#F5C200] tracking-tight" style={{ fontSize: "1.45rem", lineHeight: 0.85 }}>
              BROS
            </span>
            <span className="text-[7px] uppercase tracking-[0.32em] text-white/35 mt-1 font-sans hidden sm:block">
              Create. Edit. Inspire.
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((link, i) => {
            const active = location.pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`group relative flex items-center gap-1.5 text-[10px] tracking-[0.22em] uppercase transition-all duration-300 ${
                    active ? "text-[var(--brand)]" : "text-white/55 hover:text-white"
                  }`}
                >
                  <span
                    className={`text-[var(--brand)] text-[8px] font-bold transition-all duration-300 ${
                      active
                        ? "opacity-100"
                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-[var(--brand)] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/contact"
              className="hidden sm:flex items-center gap-2 rounded-full border border-[var(--brand)] bg-[var(--brand)] py-2 pl-5 pr-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black"
            >
              Get Started
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[var(--brand)]">
                <ArrowUpRight size={12} />
              </span>
            </Link>
          </motion.div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-[var(--brand)]/25 text-white hover:border-[var(--brand)]/50 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25 }}
            className="mt-3 overflow-hidden rounded-3xl border border-[var(--brand)]/15 bg-black/92 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col p-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`block rounded-xl px-4 py-3.5 text-[10px] uppercase tracking-[0.25em] transition-all ${
                      location.pathname === link.href
                        ? "bg-[var(--brand)]/10 text-[var(--brand)]"
                        : "text-white/55 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  to="/contact"
                  className="block rounded-xl px-4 py-3.5 text-center text-[10px] font-bold uppercase tracking-[0.22em] bg-[var(--brand)] text-black"
                >
                  Get Started //
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
