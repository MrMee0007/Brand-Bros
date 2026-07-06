import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronDown, ArrowRight,
  Film, LayoutGrid, Megaphone, Camera, TrendingUp, Users,
  Star, Zap, Globe, Cpu,
} from "lucide-react";
import creatorImg  from "../assets/creator.jpeg";
import businessImg from "../assets/business.jpeg";
import contentImg  from "../assets/content.jpeg";
import careersImg  from "../assets/career.jpeg";

/* ── Data ────────────────────────────────────────── */
const SERVICES = [
  {
    id: "creator", number: "01", icon: Star,
    label: "Creator Growth",
    title: "Creator Growth & Management",
    tagline: "Audience into influence.",
    intro: "We help creators transform their audience into influence, opportunities, and sustainable growth. From content strategy to brand partnerships, we provide end-to-end support that lets creators focus on creating while we handle the growth.",
    image: creatorImg,
    subServices: [
      { title: "Content Strategy & Growth",            desc: "Build a content ecosystem designed for consistent growth and audience engagement.",      items: ["Content Strategy & Planning","Monthly Content Calendars","Trend Research & Analysis","Competitor Benchmarking","Audience Growth Strategy","Platform-Specific Content Planning"] },
      { title: "Content Production & Editing",         desc: "Create high-quality content that captures attention and strengthens your personal brand.", items: ["Short-Form Video Editing (Reels, Shorts)","Long-Form Video Editing","Thumbnail Design","Social Media Graphics","Cinematic Content Production","Professional Photoshoots"] },
      { title: "Personal Branding",                    desc: "Establish a recognizable, credible identity that attracts both audiences and brands.",    items: ["Personal Brand Strategy","Profile & Bio Optimization","Brand Identity Development","Visual Branding Guidelines","Creator Portfolio Development","Professional Media Kit Creation"] },
      { title: "Brand Collaborations & Sponsorships",  desc: "Connect with relevant brands and unlock new revenue through strategic partnerships.",    items: ["Brand Outreach & Networking","Sponsorship Acquisition","Campaign Negotiation","Collaboration Management","Partnership Strategy","Deliverable Coordination"] },
      { title: "Creator Management",                   desc: "Comprehensive management services designed to help creators scale professionally.",       items: ["Brand Communication","Campaign Management","Contract Coordination","Content Scheduling","Performance Tracking","Opportunity Management"] },
      { title: "Monetization & Revenue Growth",        desc: "Turn your influence into a sustainable business through multiple revenue streams.",       items: ["Sponsorship Strategy","Affiliate Marketing Setup","Paid Promotion Management","Digital Product Strategy","Community Monetization","Revenue Growth Consulting"] },
    ],
    closer: { heading: "Why BRAND//BROS?", body: "We don't just help creators produce content — we help them build a brand, grow an audience, secure partnerships, and create long-term opportunities. Our goal is to transform creators into influential personal brands that stand out in an increasingly competitive digital landscape." },
  },
  {
    id: "business", number: "02", icon: TrendingUp,
    label: "Business Growth",
    title: "Business Growth & Marketing Solutions",
    tagline: "Marketing that moves the line.",
    intro: "We help businesses build stronger brands, attract more customers, and achieve sustainable growth through strategic marketing, content creation, and digital campaigns. Our approach combines creativity, technology, and business understanding to deliver measurable results.",
    image: businessImg,
    subServices: [
      { title: "Brand Strategy & Positioning",              desc: "Build a brand that stands out, earns trust, and creates lasting customer relationships.",     items: ["Brand Strategy Development","Market Positioning","Brand Identity Consultation","Competitor Analysis","Customer Persona Development","Brand Messaging Framework"] },
      { title: "Social Media Management",                   desc: "Create a powerful online presence that drives engagement and builds customer trust.",          items: ["Social Media Strategy","Content Planning & Scheduling","Post & Reel Creation","Community Management","Profile Optimization","Monthly Performance Reports"] },
      { title: "Content Creation & Media Production",       desc: "Tell your brand story through impactful visual content.",                                       items: ["Professional Photography","Promotional Videos","Reels & Short-Form Content","Corporate Shoots","Event Coverage","Product Photography & Videos"] },
      { title: "Performance Marketing",                     desc: "Reach the right audience and generate quality leads through targeted advertising.",            items: ["Meta Ads (Facebook & Instagram)","Google Ads","Lead Generation Campaigns","Remarketing Campaigns","Conversion Tracking","Campaign Optimization & Reporting"] },
      { title: "Influencer Marketing & Brand Collaborations",desc: "Leverage creator partnerships to increase awareness, credibility, and engagement.",          items: ["Influencer Identification","Campaign Planning","Collaboration Management","Brand Partnerships","Regional Influencer Campaigns","Performance Tracking"] },
      { title: "Website & Digital Presence",                desc: "Create digital assets that convert visitors into customers.",                                  items: ["Business Website Development","Landing Page Design","SEO Optimization","Google Business Profile Optimization","Online Reputation Management","Conversion Optimization"] },
    ],
    closer: { heading: "Build. Influence. Scale.", body: "Marketing is not about creating posts — it's about creating business growth. Our team combines branding, content, advertising, and strategic execution to help businesses attract attention, generate leads, and build long-term market presence." },
  },
  {
    id: "content", number: "03", icon: Film,
    label: "Content Creation",
    title: "Content Creation Services",
    tagline: "Attention, earned by craft.",
    intro: "In today's digital world, attention is earned through compelling content. We create high-quality visual and digital content that helps brands, businesses, and creators capture attention, build trust, and engage their audience effectively.",
    image: contentImg,
    subServices: [
      { title: "Short-Form Video Content",    desc: "Engaging videos designed for maximum reach across modern social platforms.",                    items: ["Instagram Reels","YouTube Shorts","TikTok Videos","Promotional Reels","Trend-Based Content","Product Showcase Videos"] },
      { title: "Professional Photography",    desc: "Showcase your products, services, and brand with premium visual content.",                     items: ["Product Photography","Food Photography","Fashion & Lifestyle Shoots","Corporate Photography","Hospitality & Resort Photography","Event Photography"] },
      { title: "Cinematic Video Production",  desc: "Tell your brand story through professionally crafted cinematic content.",                      items: ["Brand Films","Corporate Videos","Promotional Campaigns","Business Showcase Videos","Resort & Property Walkthroughs","Testimonial Videos"] },
      { title: "Event Coverage",              desc: "Capture and amplify your events through professional media production.",                       items: ["Event Photography","Event Videography","Same-Day Edits","Highlight Reels","Social Media Event Coverage","After-Movie Production"] },
      { title: "Social Media Content",        desc: "Consistent content designed to strengthen your online presence.",                             items: ["Creative Post Designs","Carousel Content","Story Creatives","Motion Graphics","Social Media Banners","Content Calendars"] },
      { title: "Editing & Post-Production",   desc: "Transform raw footage into polished, professional content.",                                  items: ["Video Editing","Color Grading","Sound Design","Motion Graphics","Thumbnail Design","Content Optimization"] },
    ],
    closer: { heading: "Content That Drives Results", body: "We don't create content just to look good — we create content with purpose. Every video, photograph, design, and campaign is crafted to help brands attract attention, engage audiences, and achieve meaningful business growth." },
  },
  {
    id: "careers", number: "04", icon: Users,
    label: "Join Us",
    title: "Careers at BRAND//BROS",
    tagline: "Build the studio with us.",
    intro: "We're building a home for future interns, creators, editors, photographers, and marketers who want to do their best work. If you care about craft and momentum, we want to hear from you.",
    image: careersImg,
    subServices: [
      { title: "Who We're Looking For", desc: "Open roles across the studio, year-round.", items: ["Interns (marketing, production, social)","Creators & On-Camera Talent","Video Editors & Motion Designers","Photographers & Cinematographers","Performance Marketers","Brand & Content Strategists"] },
    ],
    closer: { heading: "Let's talk.", body: "Send your portfolio, reel, or a short note about what you want to build. We read every submission. Drop us a line at anshgarg7640@gmail.com" },
  },
];

/* ── Sub-service card ─────────────────────────────── */
function SubCard({ sub, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border border-white/10 bg-[#111] rounded-2xl p-6 hover:border-[#F5C200]/35 hover:bg-[#141414] transition-all duration-400 group"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="font-heading text-[#F5C200] text-base tracking-widest">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 h-px bg-white/8 group-hover:bg-[#F5C200]/20 transition-colors duration-300" />
      </div>
      <h3 className="font-sans font-semibold text-white text-sm mb-2 group-hover:text-[#F5C200] transition-colors duration-300">
        {sub.title}
      </h3>
      <p className="text-white/40 text-xs leading-relaxed mb-4">{sub.desc}</p>
      <ul className="space-y-1.5">
        {sub.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-white/50">
            <span className="w-1 h-1 rounded-full bg-[#F5C200] flex-shrink-0 mt-1.5" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ── Accordion item ───────────────────────────────── */
function ServiceItem({ s, isOpen, onToggle }) {
  const bodyRef = useRef(null);
  const inView  = useInView(bodyRef, { once: true, margin: "-40px" });
  const Icon    = s.icon;

  return (
    <article className="border-b border-white/8 last:border-b-0">
      {/* Header button */}
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-6 py-8 md:py-10 text-left hover:text-[#F5C200] transition-colors duration-300"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-6 md:gap-10">
          {/* Number */}
          <span className="font-heading text-3xl md:text-4xl text-[#F5C200]/40 group-hover:text-[#F5C200] transition-colors duration-300 w-14 flex-shrink-0">
            {s.number}
          </span>
          {/* Icon circle */}
          <div className="hidden sm:flex w-12 h-12 rounded-full border border-white/10 group-hover:border-[#F5C200]/50 items-center justify-center flex-shrink-0 transition-colors duration-300">
            <Icon size={18} className="text-white/40 group-hover:text-[#F5C200] transition-colors duration-300" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl leading-tight text-white group-hover:text-[#F5C200] transition-colors duration-300">
              {s.title}
            </h2>
            <p className="text-white/35 text-sm mt-1 italic">{s.tagline}</p>
          </div>
        </div>
        <div className={`w-10 h-10 rounded-full border border-white/10 group-hover:border-[#F5C200] flex items-center justify-center flex-shrink-0 transition-all duration-400 ${isOpen ? "bg-[#F5C200] border-[#F5C200]" : ""}`}>
          <ChevronDown
            size={18}
            className={`transition-transform duration-500 ${isOpen ? "rotate-180 text-black" : "text-white/40 group-hover:text-[#F5C200]"}`}
          />
        </div>
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="overflow-hidden"
            ref={bodyRef}
          >
            <div className="pb-12">
              {/* Intro + image */}
              <div className="grid md:grid-cols-5 gap-8 mb-10">
                <div className="md:col-span-3">
                  <p className="text-white/55 text-base leading-relaxed">{s.intro}</p>
                </div>
                <div className="md:col-span-2 relative overflow-hidden rounded-2xl border border-white/8 aspect-video md:aspect-auto">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent" />
                  {/* Gold accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F5C200]" />
                </div>
              </div>

              {/* Sub-services grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {s.subServices.map((sub, i) => (
                  <SubCard key={sub.title} sub={sub} index={i} inView={inView} />
                ))}
              </div>

              {/* Closer CTA card */}
              {s.closer && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="border border-[#F5C200]/20 bg-[#111] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div className="max-w-2xl">
                    {/* Gold separator */}
                    <div className="w-8 h-0.5 bg-[#F5C200] mb-4" />
                    <h3 className="font-heading text-2xl md:text-3xl text-white mb-3">{s.closer.heading}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{s.closer.body}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 bg-[#F5C200] text-black px-7 py-4 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#FFD740] hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0"
                  >
                    Start a Project
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

/* ── Page ─────────────────────────────────────────── */
export default function ServicesPage() {
  const [activeId, setActiveId] = useState("creator");
  const heroRef    = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ── HERO ────────────────────────────────── */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden" ref={heroRef}>
        {/* Blobs */}
        <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-[#F5C200]/6 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-40 h-full opacity-10 pointer-events-none diag-stripes" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 border border-[#F5C200]/20 rounded-full px-4 py-2 bg-[#F5C200]/5 mb-8"
          >
            <span className="size-1.5 rounded-full bg-[#F5C200] animate-pulse" />
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#F5C200]">// What We Do</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="font-heading text-[clamp(3.5rem,11vw,9rem)] leading-[0.87] uppercase mb-6"
          >
            OUR <span className="text-[#F5C200]">SERVICES</span>
          </motion.h1>

          <div className="flex justify-start mb-8">
            <div className="w-16 h-0.5 bg-[#F5C200]" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-end">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-white/50 text-base leading-relaxed max-w-lg"
            >
              Tap any practice to expand it. We've built specialised service stacks
              across creator growth, business marketing, content production, and
              full-time opportunities — all under one roof.
            </motion.p>

            {/* Quick stat row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-8"
            >
              {[["17+","Brands"],["85+","Projects"],["83%+","Retention"],["4.2/5","Rating"]].map(([num, label]) => (
                <div key={label}>
                  <p className="font-heading text-3xl text-[#F5C200]">{num}</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 mt-1">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICE ICONS STRIP ──────────────────── */}
      <div className="border-y border-white/8 bg-black py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {[
            { icon: Film,       label: "Video Content"   },
            { icon: LayoutGrid, label: "Carousel Posts"  },
            { icon: Camera,     label: "Photography"     },
            { icon: Megaphone,  label: "Brand Campaigns" },
            { icon: TrendingUp, label: "Meta Ads"        },
            { icon: Globe,      label: "Social Media"    },
            { icon: Cpu,        label: "Strategy"        },
            { icon: Zap,        label: "Performance"     },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-white/30 hover:text-[#F5C200] transition-colors duration-300 cursor-default">
              <Icon size={14} strokeWidth={1.5} />
              <span className="text-[9px] uppercase tracking-[0.18em] whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── ACCORDION ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16 pb-32">
        <div className="border-t border-white/8">
          {SERVICES.map((s) => (
            <ServiceItem
              key={s.id}
              s={s}
              isOpen={activeId === s.id}
              onToggle={() => toggle(s.id)}
            />
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA STRIP ────────────────────── */}
      <section className="bg-black border-t border-white/8 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-heading text-3xl md:text-4xl text-white">
              Ready to <span className="text-[#F5C200]">start</span> something?
            </p>
            <p className="text-white/40 text-sm mt-2 max-w-md leading-relaxed">
              Strategy. Content. Distribution. Growth — all from one studio.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-[#F5C200] text-black px-7 py-4 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#FFD740] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book a Discovery Call
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:anshgarg7640@gmail.com"
              className="inline-flex items-center gap-2 border border-white/12 px-7 py-4 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:border-[#F5C200]/40 hover:text-[#F5C200] transition-all duration-300"
            >
              anshgarg7640@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
