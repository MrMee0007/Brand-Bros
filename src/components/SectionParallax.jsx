import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function SectionParallax({
  targetRef,
  className = "",
  style,
  amount = 12,
}) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-amount, amount]
  );

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 -top-10 -bottom-10 will-change-transform ${className}`}
      style={{ y, backfaceVisibility: "hidden", ...style }}
    />
  );
}
