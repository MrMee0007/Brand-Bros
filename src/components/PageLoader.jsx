import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Animated film strip ticker ─── */
const TICKER_ITEMS = ["REELS", "BRAND FILMS", "ADS", "SOCIAL", "EVENTS", "PRODUCT"];

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [tickerIdx, setTickerIdx] = useState(0);

  /* Cycle ticker text */
  useEffect(() => {
    const id = setInterval(() => {
      setTickerIdx((i) => (i + 1) % TICKER_ITEMS.length);
    }, 400);
    return () => clearInterval(id);
  }, []);

  /* Auto-hide after content likely ready */
  useEffect(() => {
    const id = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black overflow-hidden select-none"
        >
          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F5C200]/8 blur-[120px]" />
          </div>

          {/* Diagonal stripe texture */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(115deg, transparent 0 32px, white 32px 33px, transparent 33px 65px)",
            }}
          />

          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="flex flex-col items-center"
          >
            {/* Brand name */}
            <div className="flex flex-col leading-none text-center mb-8">
              <span
                className="font-heading text-[#F5C200] tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 12vw, 6.5rem)", lineHeight: 0.85 }}
              >
                BRAND
                <span className="text-white/20">//</span>
              </span>
              <span
                className="font-heading text-[#F5C200] tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 12vw, 6.5rem)", lineHeight: 0.85 }}
              >
                BROS
              </span>
              <span className="text-[9px] uppercase tracking-[0.45em] text-white/30 mt-3 font-sans">
                Create. Edit. Inspire.
              </span>
            </div>

            {/* Shimmer progress bar */}
            <div className="relative w-48 h-[2px] bg-white/8 rounded-full overflow-hidden mb-6">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#F5C200] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              {/* Shimmer glint */}
              <motion.div
                className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                initial={{ left: "-4rem" }}
                animate={{ left: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
              />
            </div>

            {/* Animated ticker */}
            <div className="h-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={tickerIdx}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="text-[9px] uppercase tracking-[0.35em] text-white/30 text-center"
                >
                  {TICKER_ITEMS[tickerIdx]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Corner decoration */}
          <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-2 opacity-20">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 rounded-full bg-[#F5C200]"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.2, delay: i * 0.15, repeat: Infinity }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
