import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight,
  Film, LayoutGrid, Megaphone, Camera, TrendingUp, Users,
  Star, Zap, Globe, Cpu, Sparkles, ShieldCheck,
} from "lucide-react";
import creatorImg  from "../assets/creator.png";
import businessImg from "../assets/business.jpeg";
import contentImg  from "../assets/content.jpeg";
import careersImg  from "../assets/team.png";

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

/* ── Service capability card ─────────────────────── */
function SubCard({ sub, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.2, 0, 0, 1] }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#101010] p-5 transition-colors duration-300 hover:border-[#F5C200]/40 sm:p-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,194,0,0.12),transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-5 flex items-center gap-3">
          <span className="font-heading text-lg tracking-[0.16em] text-[#F5C200]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="h-px flex-1 bg-white/10 transition-colors duration-300 group-hover:bg-[#F5C200]/40" />
        </div>
        <h3 className="mb-2 font-sans text-sm font-bold text-white transition-colors duration-300 group-hover:text-[#F5C200]">
          {sub.title}
        </h3>
        <p className="mb-5 text-xs leading-relaxed text-white/45">{sub.desc}</p>
        <ul className="grid gap-x-4 gap-y-2 sm:grid-cols-2">
          {sub.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[11px] leading-relaxed text-white/60">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5C200] shadow-[0_0_16px_rgba(245,194,0,0.7)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ── Active service detail ────────────────────────── */
function ServiceItem({ s }) {
  const Icon    = s.icon;

  return (
    <motion.article
      key={s.id}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
      className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#090909] shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[300px] overflow-hidden lg:min-h-[470px]">
          <img
            src={s.image}
            alt={s.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/5 lg:bg-gradient-to-r lg:from-black/75 lg:via-black/10 lg:to-transparent" />
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-2 backdrop-blur-md">
            <Icon size={14} className="text-[#F5C200]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white">
              {s.label}
            </span>
          </div>
          <span className="absolute bottom-4 right-5 font-heading text-7xl leading-none text-white/20 sm:text-8xl">
            {s.number}
          </span>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
          <div className="mb-5 flex items-center gap-3 text-[#F5C200]">
            <span className="h-px w-8 bg-[#F5C200]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.25em]">
              {s.tagline}
            </span>
          </div>
          <h2 className="font-heading text-[clamp(2.4rem,5vw,4.6rem)] uppercase leading-[0.9] text-white">
            {s.title}
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
            {s.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F5C200]/20 bg-[#F5C200]/5 px-3 py-2 text-[9px] uppercase tracking-[0.18em] text-[#F5C200]">
              <Sparkles size={12} />
              Signature systems
            </span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-white/35">
              {s.subServices.length} specialist service{s.subServices.length === 1 ? "" : "s"}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 p-5 sm:p-8 lg:p-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#F5C200]">
              The full stack
            </p>
            <h3 className="font-heading text-3xl uppercase text-white sm:text-4xl">
              What we do
            </h3>
          </div>
          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/35 sm:block">
            Built around your next move
          </span>
        </div>

        <div className={`grid gap-4 ${s.subServices.length <= 1 ? "grid-cols-1" : "md:grid-cols-2 xl:grid-cols-3"}`}>
          {s.subServices.map((sub, index) => (
            <SubCard key={sub.title} sub={sub} index={index} />
          ))}
        </div>

        {s.closer && (
          <div className="relative mt-6 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl border border-[#F5C200]/20 bg-[linear-gradient(120deg,rgba(245,194,0,0.1),rgba(17,17,17,0.96)_45%,rgba(245,194,0,0.04))] p-6 sm:p-8 md:flex-row md:items-center">
            <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-[#F5C200]/10 blur-3xl" />
            <div className="relative z-10 max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-[#F5C200]">
                <ShieldCheck size={15} />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                  Built to perform
                </span>
              </div>
              <h3 className="mb-2 font-heading text-2xl text-white sm:text-3xl">
                {s.closer.heading}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">{s.closer.body}</p>
            </div>
            <Link
              to="/contact"
              className="group relative z-10 inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#F5C200] px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD740]"
            >
              Start a Project
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        )}
      </div>
    </motion.article>
  );
}

/* ── Page ─────────────────────────────────────────── */
export default function ServicesPage() {
  const [activeId, setActiveId] = useState("creator");
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const activeService = SERVICES.find((service) => service.id === activeId) ?? SERVICES[0];
  const ActiveServiceIcon = activeService.icon;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <section className="relative overflow-hidden px-6 pb-16 pt-36 md:px-12 md:pb-20 md:pt-44" ref={heroRef}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(245,194,0,0.12),transparent_35%),radial-gradient(ellipse_at_10%_70%,rgba(245,194,0,0.06),transparent_32%)]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#F5C200]/20 bg-[#F5C200]/5 px-4 py-2 shadow-[0_0_30px_rgba(245,194,0,0.08)]"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-[#F5C200]" />
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#F5C200]">// What We Do</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            className="mb-6 font-heading text-[clamp(4rem,11vw,9rem)] uppercase leading-[0.84]"
          >
            OUR <span className="text-[#F5C200]">SERVICES</span>
          </motion.h1>

          <div className="mb-8 h-0.5 w-16 bg-[#F5C200] shadow-[0_0_30px_rgba(245,194,0,0.7)]" />
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="max-w-xl text-sm leading-relaxed text-white/50 sm:text-base"
          >
            Select any practice to explore it. We've built specialised service stacks
            across creator growth, business marketing, content production, and
            full-time opportunities — all under one roof.
          </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative min-h-[330px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111] sm:min-h-[410px]"
            >
              <img src={activeService.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-65" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#F5C200]">
                  <ActiveServiceIcon size={14} />
                  Featured practice / {activeService.number}
                </p>
                <h2 className="max-w-lg font-heading text-4xl uppercase leading-[0.95] text-white sm:text-5xl">
                  {activeService.title}
                </h2>
                <p className="mt-3 text-sm text-white/60">{activeService.tagline}</p>
              </div>
              <span className="absolute right-5 top-3 font-heading text-8xl leading-none text-white/20 sm:text-9xl">
                {activeService.number}
              </span>
            </motion.div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[["10+","Brands"],["105+","Projects"],["80%","Retention"],["4.3/5","Rating"]].map(([num, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-4 sm:px-5">
                <p className="font-heading text-3xl text-[#F5C200] sm:text-4xl">{num}</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/40">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-y border-white/10 bg-[#080808] px-6 py-5 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
          {[
            { icon: Film, label: "Video Content" },
            { icon: LayoutGrid, label: "Carousel Posts" },
            { icon: Camera, label: "Photography" },
            { icon: Megaphone, label: "Brand Campaigns" },
            { icon: TrendingUp, label: "Meta Ads" },
            { icon: Globe, label: "Social Media" },
            { icon: Cpu, label: "Strategy" },
            { icon: Zap, label: "Performance" },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-white/40"
            >
              <Icon size={14} className="text-[#F5C200]/75" strokeWidth={1.5} />
              <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.18em]">
                {label}
              </span>
            </span>
          ))}
        </div>
      </div>

      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#F5C200]">
                Find your next move
              </p>
              <h2 className="font-heading text-3xl uppercase text-white sm:text-4xl">
                Our practices
              </h2>
            </div>
            <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/35 sm:block">
              Select a practice to explore
            </span>
          </div>

          <div className="mb-7 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3" aria-label="Choose a service practice">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveId(service.id)}
                  className={`group flex min-h-24 items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-300 sm:min-h-28 sm:p-5 ${
                    isActive
                      ? "border-[#F5C200]/50 bg-[#F5C200]/[0.08] shadow-[0_8px_30px_rgba(245,194,0,0.08)]"
                      : "border-white/10 bg-[#0b0b0b] hover:border-white/20 hover:bg-[#111]"
                  }`}
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
                    isActive ? "border-[#F5C200]/60 text-[#F5C200]" : "border-white/10 text-white/45 group-hover:text-[#F5C200]"
                  }`}>
                    <Icon size={17} strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0">
                    <span className="mb-1 block text-[8px] font-bold uppercase tracking-[0.18em] text-white/35">
                      {service.number} / {service.label}
                    </span>
                    <span className={`block font-heading text-lg uppercase leading-tight sm:text-xl ${isActive ? "text-[#F5C200]" : "text-white"}`}>
                      {service.tagline}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div
            aria-label={`${activeService.label} service details`}
          >
            <AnimatePresence mode="wait">
              <ServiceItem key={activeService.id} s={activeService} />
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#080808] px-6 py-16 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-heading text-3xl text-white md:text-4xl">
              Ready to <span className="text-[#F5C200]">start</span> something?
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/40">
              Strategy. Content. Distribution. Growth — all from one studio.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#F5C200] px-7 py-4 text-[10px] font-bold uppercase tracking-widest text-black shadow-[0_0_30px_rgba(245,194,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD740]"
            >
              Book a Discovery Call
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:anshgarg7640@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-white/12 px-7 py-4 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 hover:border-[#F5C200]/40 hover:text-[#F5C200]"
            >
              brandbros1711@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
