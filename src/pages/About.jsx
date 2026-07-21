import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowRight, Award, Users, TrendingUp, Zap, Star, CheckCircle } from "lucide-react";

/* ── DATA ─────────────────────────────────────── */
const STATS = [
  { num: "17+",  label: "Brands Launched" },
  { num: "85+", label: "Reels Produced"  },
  { num: "3M",  label: "Total Reach"     },
  { num: "83%",  label: "Client Retention"},
];

const CAROUSEL_SLIDES = [
  { tag: "Branding",       title: "The Sensory Universe",   metric: "1.2M Views",     bg: "linear-gradient(145deg,#120600,#5c2500,#2a1000)" },
  { tag: "Reels",          title: "Defining Modern Luxury", metric: "+240% Engagement",bg: "linear-gradient(145deg,#0a0016,#3a0060,#180030)" },
  { tag: "Product Shoots", title: "Light on Glass",         metric: "+87% Conversion", bg: "linear-gradient(145deg,#001a12,#004535)" },
  { tag: "Ads",            title: "Midnight Run",           metric: "4.8x ROAS",       bg: "linear-gradient(145deg,#00080f,#001a35)" },
  { tag: "Events",         title: "Three Days, One Story",  metric: "8.4M Impressions",bg: "linear-gradient(145deg,#1a0010,#500040)" },
  { tag: "Social Media",   title: "Dining in the Dark",     metric: "+312% Followers", bg: "linear-gradient(145deg,#091400,#243500)" },
];

const TEAM = [
  {
    name: "Yug Gupta",
    role: "Founder & Creative Director",
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774567144/Story_eh2xik.jpg",
    color: "from-yellow-400 via-orange-400 to-red-500",
    bio: "Yug Gupta is the Founder of Brand Bros and a Computer Science Engineering student with a passion for cinematic storytelling, visual branding, and creative innovation. As a cinematographer and creative visionary, he transforms ideas into compelling visual experiences that leave a lasting impact.",
    quote: "Every frame has a purpose. Every story deserves to be unforgettable.",
  },
  {
    name: "Ansh Garg",
    role: "Co-Founder & Creative Management Head",
    img: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1783369087/WhatsApp_Image_2026-06-05_at_10.05.03_AM_avbrl2.jpg",
    color: "from-cyan-400 via-blue-500 to-purple-500",
    bio: "Ansh Garg is the Co-Founder of Brand Bros, leading creative management and post-production. Renowned for his exceptional editing skills and meticulous attention to detail, he turns raw footage into immersive cinematic experiences.",
    quote: "Editing is where imagination becomes reality.",
  },
];

const VALUES = [
  { icon: Award,      num: "01", title: "Craft Over Speed",      desc: "We never sacrifice quality for convenience. Every frame, colour grade, and caption is considered with intention and purpose." },
  { icon: TrendingUp, num: "02", title: "Results-First Thinking",desc: "Beautiful content that doesn't move a metric is decorative. We engineer every asset around a measurable outcome." },
  { icon: Users,      num: "03", title: "Brand-First Always",     desc: "We embed ourselves in your brand's world before we pick up a camera. Your voice — only amplified, never replaced." },
];

const TIMELINE = [
  { year: "2022", title: "BRAND//BROS Founded",  desc: "Started with a vision: every brand deserves cinematic storytelling."   },
  { year: "2023", title: "50+ Projects",         desc: "First 50 clients across fashion, F&B, automotive, and tech."           },
  { year: "2024", title: "Full-Stack Studio",    desc: "Expanded to drone, events, ads, and growth retainers under one roof."  },
  { year: "2025", title: "12M Reach Milestone",  desc: "Content delivered 12M+ organic impressions across client accounts."    },
  { year: "2026", title: "Building India's Best",desc: "On a mission to become the most creative studio in North India."       },
];

/* ── SECTION WRAPPER ──────────────────────────── */
function Section({ children, className = "" }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease" }}>
      {children}
    </div>
  );
}

/* ── 3D TEAM CARD ─────────────────────────────── */
function TeamCard({ member, index }) {
  const [flipped, setFlipped] = useState(false);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative h-[520px] perspective-1000 cursor-pointer"
      onClick={() => setFlipped(f => !f)}
    >
      <div
        className="relative w-full h-full preserve-3d transition-all duration-700"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-white/8 group">
          <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${member.color}`} />
          <div className="absolute bottom-0 left-0 right-0 p-7">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--brand)] mb-2 block">{member.role}</span>
            <h3 className="font-heading text-3xl text-white">{member.name}</h3>
            <p className="text-xs text-white/40 mt-2 tracking-[0.15em] uppercase">Click to read bio →</p>
          </div>
        </div>

        {/* Back */}
{/* Back */}
<div
  className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]"
>
  {/* Background Image */}
  <img
    src={member.img}
    alt={member.name}
    className="absolute inset-0 w-full h-full object-cover opacity-15 scale-110"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0b0b]/95 to-black" />

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col p-8">

    {/* Profile */}
    <div className="flex items-center gap-4 mb-8">
      <img
        src={member.img}
        alt={member.name}
        className="w-20 h-20 rounded-full object-cover border border-white/10"
      />

      <div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--brand)] font-semibold">
          {member.role}
        </span>

        <h3 className="font-heading text-3xl text-white mt-1">
          {member.name}
        </h3>
      </div>
    </div>

    {/* Bio */}
    <div className="flex-1">
      <p className="text-[15px] leading-8 text-white/65">
        {member.bio}
      </p>

      <blockquote className="mt-8 border-l-2 border-[var(--brand)] pl-5 italic text-white/90 leading-relaxed text-[15px]">
        "{member.quote}"
      </blockquote>
    </div>

    {/* Footer */}
    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
          Brand Bros
        </p>

        <p className="text-sm text-white/60 mt-1">
          Building stories that inspire.
        </p>
      </div>

      <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--brand)]">
        Tap to Flip ↺
      </span>
    </div>

  </div>
</div>
      </div>
    </motion.div>
  );
}

/* ── PAGE ─────────────────────────────────────── */
export default function About() {
  const heroRef    = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ═══ HERO ════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 px-6 overflow-hidden" ref={heroRef}>
        {/* Blobs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[var(--brand)]/8 blur-[130px] animate-blob-1 pointer-events-none" />
        <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] rounded-full bg-[#F5C200]/4 blur-[110px] animate-blob-2 pointer-events-none" />
        <div className="absolute inset-0 opacity-20 diag-stripes pointer-events-none" />

        {/* Rotating ring decoration */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-full border border-[var(--brand)]/10 animate-spin-slow" />
            <div className="absolute inset-6 rounded-full border border-[var(--brand)]/6 animate-spin-reverse" />
            <div className="absolute inset-12 rounded-full border border-white/5 animate-spin-slow" style={{ animationDuration: "30s" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-heading text-5xl text-[var(--brand)] opacity-30">17+</div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-white/20 mt-1">Brands</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 border border-[var(--brand)]/20 rounded-full px-4 py-2 bg-[var(--brand)]/5 mb-8"
          >
            <span className="size-1.5 rounded-full bg-[var(--brand)] animate-pulse-glow" />
            <span className="text-[9px] uppercase tracking-[0.35em] text-[var(--brand)]">// About BRAND//BROS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="font-heading uppercase text-[clamp(3.8rem,11vw,9.5rem)] leading-[0.85] tracking-tight mb-8"
          >
            <span className="block">We Build</span>
            <span className="block text-gradient-gold">Brands That</span>
            <span className="block">Matter.</span>
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-12 items-end mt-12">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-white/50 leading-relaxed text-lg max-w-xl"
            >
              BRAND//BROS is a premium creative studio based in Gurgaon. We turn ambitious businesses
              into unforgettable digital brands through cinematic production, strategic content,
              and data-driven growth — all under one roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-8"
            >
              {STATS.map(({ num, label }) => (
                <div key={label}>
                  <div className="font-heading text-4xl text-[var(--brand)]">{num}</div>
                  <div className="text-[9px] uppercase tracking-[0.22em] text-white/35 mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-[var(--brand)] text-black px-7 py-4 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300"
            >
              Work With Us
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ MARQUEE ─ reversed ══════════════════ */}
      <div className="overflow-hidden border-y border-white/5 py-4 bg-black">
        <div className="flex animate-marquee-right whitespace-nowrap select-none">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="mx-6 text-[10px] uppercase tracking-[0.25em] text-white/20">
              Create <span className="text-[var(--brand)]/40 mx-1">✦</span> Edit <span className="text-[var(--brand)]/40 mx-1">✦</span> Inspire <span className="text-[var(--brand)]/40 mx-1">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══ WHO WE ARE ══════════════════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Section>
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <p className="text-[var(--brand)] uppercase tracking-[0.3em] text-[10px] mb-5">// Who We Are</p>
                <h2 className="font-heading text-4xl md:text-[3.2rem] leading-[0.92]">
                  More than a<br />content studio.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-white/50 text-lg leading-relaxed mb-6">
                  We don't just make videos — we craft brand identities, cinematic campaigns, and
                  digital experiences that connect businesses with people at scale.
                </p>
                <p className="text-white/40 text-base leading-relaxed">
                  Every project is a blend of strategy, creativity, and technology.
                  We believe the best content is the kind that makes your audience feel something —
                  and then makes them buy something.
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  {["48-hour standard edit turnaround", "Full in-house crew — no freelancers", "Data-backed content strategy every month"].map(p => (
                    <div key={p} className="flex items-center gap-3 text-sm text-white/60">
                      <CheckCircle size={15} className="text-[var(--brand)] flex-shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ═══ SWIPER WORK SHOWCASE ════════════════ */}


      {/* ═══ TEAM — 3D FLIP CARDS ════════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Section className="mb-16">
            <p className="text-[var(--brand)] uppercase tracking-[0.3em] text-[10px] mb-4">// The Team</p>
            <h2 className="font-heading text-4xl md:text-[3.2rem] leading-[0.92] max-w-xl">
              The creatives behind<br />every frame we shoot.
              <span className="block text-white/30 text-2xl mt-2">Click a card to flip it.</span>
            </h2>
          </Section>

          <div className="grid md:grid-cols-2 gap-8">
            {TEAM.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VALUES ══════════════════════════════ */}
      <section className="py-28 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <Section className="mb-16">
            <p className="text-[var(--brand)] uppercase tracking-[0.3em] text-[10px] mb-4">// Our Principles</p>
            <h2 className="font-heading text-4xl md:text-[3.2rem] leading-[0.92]">
              Three things we<br />
              <span className="text-white/35">never compromise on.</span>
            </h2>
          </Section>

          <div className="grid md:grid-cols-3 gap-px bg-white/5">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Section key={v.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group relative bg-black p-10 overflow-hidden hover:bg-[#F5C200]/4 transition-all duration-500 cursor-default h-full"
                  >
                    <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-[var(--brand)] to-transparent transition-all duration-700 pointer-events-none" />
                    <div className="mb-6 flex items-start justify-between">
                      <span className="font-heading text-5xl text-white/6 group-hover:text-[var(--brand)]/18 transition-colors duration-400 select-none">{v.num}</span>
                      <div className="w-11 h-11 rounded-xl border border-white/8 flex items-center justify-center text-white/35 group-hover:border-[var(--brand)] group-hover:text-[var(--brand)] transition-all duration-300">
                        <Icon size={20} />
                      </div>
                    </div>
                    <h3 className="font-sans font-semibold text-base text-white mb-3 group-hover:text-[var(--brand)] transition-colors duration-300">{v.title}</h3>
                    <p className="text-[0.83rem] text-white/40 leading-relaxed">{v.desc}</p>
                  </motion.div>
                </Section>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ════════════════════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <Section className="mb-20">
            <p className="text-[var(--brand)] uppercase tracking-[0.3em] text-[10px] mb-4">// Our Journey</p>
            <h2 className="font-heading text-4xl md:text-[3.2rem] leading-[0.92]">
              How we got here.
            </h2>
          </Section>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand)]/60 via-[var(--brand)]/20 to-transparent" />

            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative pl-16 pb-14 group"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-[#0c0c0c] border border-[var(--brand)]/30 group-hover:border-[var(--brand)] group-hover:bg-[var(--brand)]/10 transition-all duration-300 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--brand)] animate-pulse-glow" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--brand)] block mb-2">{item.year}</span>
                <h3 className="font-sans font-semibold text-lg text-white mb-2 group-hover:text-[var(--brand)] transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed max-w-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECOND SWIPER — Testimonials Scroll ═ */}
      <section className="py-16 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <p className="text-[var(--brand)] uppercase tracking-[0.3em] text-[10px]">// Kind Words</p>
        </div>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.1}
          spaceBetween={16}
          breakpoints={{ 640: { slidesPerView: 1.8 }, 1024: { slidesPerView: 2.5 } }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="px-6 pb-4"
        >
          {[
            { quote: "BRAND//BROS treats every project like a craft. The Himalayan campaign moved both culture and cash.", name: "Marketing Lead", org: "Royal Enfield" },
            { quote: "Their content network is unreal. We unlocked 3x install lift in a single quarter.", name: "Growth Director", org: "Ixigo" },
            { quote: "They understood photography culture better than most photographers. Every metric moved up.", name: "Brand Manager", org: "Nikon India" },
            { quote: "From positioning to funnels, BRAND//BROS rebuilt our admissions engine. +71% qualified leads.", name: "Dean of Admissions", org: "GLA University" },
          ].map((t, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-2xl border border-white/7 bg-white/[0.02] p-8 hover:border-[var(--brand)]/30 transition-all duration-300">
                <div className="text-[var(--brand)] text-3xl font-serif mb-4">"</div>
                <p className="text-white/65 text-[0.92rem] leading-relaxed mb-6">{t.quote}"</p>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--brand)] mt-0.5">{t.org}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ═══ STAR RATING STRIP ═══════════════════ */}
      <section className="py-12 border-y border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12">
            {[["Google", "4.2"], ["Instagram", "3.8"], ["LinkedIn", "3.6"]].map(([pl, rat]) => (
              <div key={pl} className="text-center">
                <div className="flex items-center gap-1 justify-center mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#c7a450" stroke="none" />)}
                </div>
                <p className="font-heading text-xl text-[var(--brand)]">{rat}</p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 mt-0.5">on {pl}</p>
              </div>
            ))}
            <div className="text-center">
              <p className="font-heading text-2xl text-[var(--brand)]">83%</p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 mt-0.5">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═════════════════════════════════ */}
      <section className="relative py-36 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[var(--brand)]/6 blur-[160px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-[var(--brand)] uppercase tracking-[0.35em] text-[10px] mb-6">// Let's Create Together</p>
          <h2 className="font-heading text-[clamp(3rem,9vw,7rem)] leading-[0.88] mb-8">
            Your brand's<br /><span className="text-gradient-gold">best chapter</span><br />starts here.
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            We take on a limited number of new clients each quarter to ensure every project gets our full attention. Apply now for next quarter.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-[var(--brand)] text-black px-8 py-4 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300"
            >
              Book a Discovery Call
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:hello@brandbros.in"
              className="inline-flex items-center gap-2 border border-white/12 px-8 py-4 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:border-[var(--brand)]/40 hover:text-[var(--brand)] transition-all duration-300"
            >
              anshgarg7640@gmail.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

