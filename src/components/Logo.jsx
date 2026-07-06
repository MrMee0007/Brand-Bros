/* ── Logo component — BRAND//BROS ── */
export default function Logo({ scale = "md", showTagline = true }) {
  const SIZE = {
    xs:  "text-xl",
    sm:  "text-2xl",
    md:  "text-3xl",
    lg:  "text-5xl",
    xl:  "text-[clamp(4rem,12vw,10rem)]",
    "2xl": "text-[clamp(5rem,16vw,14rem)]",
  }[scale] ?? "text-3xl";

  return (
    <div className="flex flex-col leading-none select-none">
      <span className={`font-heading ${SIZE} text-[#F5C200] tracking-tight`} style={{ lineHeight: 0.85 }}>
        BRAND<span className="text-[#F5C200]">//</span>
      </span>
      <span className={`font-heading ${SIZE} text-[#F5C200] tracking-tight`} style={{ lineHeight: 0.85 }}>
        BROS
      </span>
      {showTagline && (
        <span className="text-[8px] uppercase tracking-[0.35em] text-white/50 mt-1.5 font-sans font-medium">
          CREATE. EDIT. INSPIRE.
        </span>
      )}
    </div>
  );
}
