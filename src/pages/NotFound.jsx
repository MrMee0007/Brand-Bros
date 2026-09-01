import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden relative">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F5C200]/6 blur-[140px]" />
      </div>

      {/* Diagonal stripes */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 32px, white 32px 33px, transparent 33px 65px)",
        }}
      />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Large 404 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
        >
          <p className="text-[9px] uppercase tracking-[0.4em] text-[#F5C200]/70 mb-6">
            [ Error 404 ]
          </p>
          <h1
            className="font-heading leading-none text-[#F5C200] mb-2"
            style={{ fontSize: "clamp(7rem, 25vw, 14rem)", lineHeight: 0.85 }}
          >
            404
          </h1>
          <div className="w-full h-px bg-[#F5C200]/15 my-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0, 0, 1] }}
        >
          <h2 className="font-heading text-white text-3xl mb-3 uppercase tracking-wide">
            Page Not Found
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-xs mx-auto">
            Looks like this reel got lost in the edit. The page you're looking
            for doesn't exist or has been moved.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-full border border-[#F5C200] bg-[#F5C200] py-3 pl-4 pr-5 text-[10px] font-bold uppercase tracking-[0.25em] text-black hover:bg-transparent hover:text-[#F5C200] transition-all duration-300 group"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[#F5C200] group-hover:bg-[#F5C200] group-hover:text-black transition-all duration-300">
              <ArrowLeft size={12} />
            </span>
            Back to Home
          </Link>
        </motion.div>

        {/* Bottom label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[8px] uppercase tracking-[0.3em] text-white/15 mt-16"
        >
          Brand Bros · Create. Edit. Inspire.
        </motion.p>
      </div>
    </div>
  );
}
