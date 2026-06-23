import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import creatorImg from "../assets/creator.jpeg";
import businessImg from "../assets/business.jpeg";
import contentImg from "../assets/content.jpeg";
import careersImg from "../assets/career.jpeg";

const services = [
  {
    id: "creator",
    number: "01",
    label: "Creator Growth",
    title: "Creator Growth & Management",
    tagline: "Audience into influence.",
    intro:
      "We help creators transform their audience into influence, opportunities, and sustainable growth. From content strategy to brand partnerships, we provide end-to-end support that lets creators focus on creating while we handle the growth.",
    image: creatorImg,
    subServices: [
      {
        title: "Content Strategy & Growth",
        description:
          "Build a content ecosystem designed for consistent growth and audience engagement.",
        items: [
          "Content Strategy & Planning",
          "Monthly Content Calendars",
          "Trend Research & Analysis",
          "Competitor Benchmarking",
          "Audience Growth Strategy",
          "Platform-Specific Content Planning",
        ],
      },
      {
        title: "Content Production & Editing",
        description:
          "Create high-quality content that captures attention and strengthens your personal brand.",
        items: [
          "Short-Form Video Editing (Reels, Shorts, TikToks)",
          "Long-Form Video Editing",
          "Thumbnail Design",
          "Social Media Graphics",
          "Cinematic Content Production",
          "Professional Photoshoots",
        ],
      },
      {
        title: "Personal Branding",
        description:
          "Establish a recognizable, credible identity that attracts both audiences and brands.",
        items: [
          "Personal Brand Strategy",
          "Profile & Bio Optimization",
          "Brand Identity Development",
          "Visual Branding Guidelines",
          "Creator Portfolio Development",
          "Professional Media Kit Creation",
        ],
      },
      {
        title: "Brand Collaborations & Sponsorships",
        description:
          "Connect with relevant brands and unlock new revenue through strategic partnerships.",
        items: [
          "Brand Outreach & Networking",
          "Sponsorship Acquisition",
          "Campaign Negotiation",
          "Collaboration Management",
          "Partnership Strategy",
          "Deliverable Coordination",
        ],
      },
      {
        title: "Creator Management",
        description:
          "Comprehensive management services designed to help creators scale professionally.",
        items: [
          "Brand Communication",
          "Campaign Management",
          "Contract Coordination",
          "Content Scheduling",
          "Performance Tracking",
          "Opportunity Management",
        ],
      },
      {
        title: "Monetization & Revenue Growth",
        description:
          "Turn your influence into a sustainable business through multiple revenue streams.",
        items: [
          "Sponsorship Strategy",
          "Affiliate Marketing Setup",
          "Paid Promotion Management",
          "Digital Product Strategy",
          "Community Monetization",
          "Revenue Growth Consulting",
        ],
      },
    ],
    closer: {
      heading: "Why Brand Monk?",
      body: "We don't just help creators produce content—we help them build a brand, grow an audience, secure partnerships, and create long-term opportunities. Our goal is to transform creators into influential personal brands that stand out in an increasingly competitive digital landscape.",
    },
  },
  {
    id: "business",
    number: "02",
    label: "Business Growth",
    title: "Business Growth & Marketing Solutions",
    tagline: "Marketing that moves the line.",
    intro:
      "We help businesses build stronger brands, attract more customers, and achieve sustainable growth through strategic marketing, content creation, and digital campaigns. Our approach combines creativity, technology, and business understanding to deliver measurable results.",
    image: businessImg,
    subServices: [
      {
        title: "Brand Strategy & Positioning",
        description:
          "Build a brand that stands out, earns trust, and creates lasting customer relationships.",
        items: [
          "Brand Strategy Development",
          "Market Positioning",
          "Brand Identity Consultation",
          "Competitor Analysis",
          "Customer Persona Development",
          "Brand Messaging Framework",
        ],
      },
      {
        title: "Social Media Management",
        description:
          "Create a powerful online presence that drives engagement and builds customer trust.",
        items: [
          "Social Media Strategy",
          "Content Planning & Scheduling",
          "Post & Reel Creation",
          "Community Management",
          "Profile Optimization",
          "Monthly Performance Reports",
        ],
      },
      {
        title: "Content Creation & Media Production",
        description: "Tell your brand story through impactful visual content.",
        items: [
          "Professional Photography",
          "Promotional Videos",
          "Reels & Short-Form Content",
          "Corporate Shoots",
          "Event Coverage",
          "Product Photography & Videos",
        ],
      },
      {
        title: "Performance Marketing",
        description:
          "Reach the right audience and generate quality leads through targeted advertising.",
        items: [
          "Meta Ads (Facebook & Instagram)",
          "Google Ads",
          "Lead Generation Campaigns",
          "Remarketing Campaigns",
          "Conversion Tracking",
          "Campaign Optimization & Reporting",
        ],
      },
      {
        title: "Influencer Marketing & Brand Collaborations",
        description:
          "Leverage creator partnerships to increase awareness, credibility, and engagement.",
        items: [
          "Influencer Identification",
          "Campaign Planning",
          "Collaboration Management",
          "Brand Partnerships",
          "Regional Influencer Campaigns",
          "Performance Tracking",
        ],
      },
      {
        title: "Website & Digital Presence",
        description: "Create digital assets that convert visitors into customers.",
        items: [
          "Business Website Development",
          "Landing Page Design",
          "SEO Optimization",
          "Google Business Profile Optimization",
          "Online Reputation Management",
          "Conversion Optimization",
        ],
      },
      {
        title: "Business Growth Consulting",
        description:
          "Strategic guidance to help businesses scale effectively in today's digital landscape.",
        items: [
          "Marketing Strategy Development",
          "Customer Acquisition Planning",
          "Business Growth Roadmaps",
          "Launch Campaigns",
          "Market Expansion Strategy",
          "Performance Review & Consulting",
        ],
      },
      {
        title: "Industry Solutions",
        description: "We work across a wide range of categories.",
        items: [
          "Restaurants & Cafes",
          "Resorts & Hospitality Brands",
          "Coaching Institutes & Educational Organizations",
          "Healthcare & Clinics",
          "Real Estate Businesses",
          "Retail Stores & Fashion Brands",
          "Startups & Local Enterprises",
          "Event Organizers & Entertainment Venues",
        ],
      },
    ],
    closer: {
      heading: "Build. Influence. Scale.",
      body: "Marketing is not about creating posts—it's about creating business growth. Our team combines branding, content, advertising, and strategic execution to help businesses attract attention, generate leads, and build long-term market presence.",
    },
  },
  {
    id: "content",
    number: "03",
    label: "Content Creation",
    title: "Content Creation Services",
    tagline: "Attention, earned by craft.",
    intro:
      "In today's digital world, attention is earned through compelling content. We create high-quality visual and digital content that helps brands, businesses, and creators capture attention, build trust, and engage their audience effectively.",
    image: contentImg,
    subServices: [
      {
        title: "Short-Form Video Content",
        description:
          "Engaging videos designed for maximum reach across modern social platforms.",
        items: [
          "Instagram Reels",
          "YouTube Shorts",
          "TikTok Videos",
          "Promotional Reels",
          "Trend-Based Content",
          "Product Showcase Videos",
        ],
      },
      {
        title: "Professional Photography",
        description:
          "Showcase your products, services, and brand with premium visual content.",
        items: [
          "Product Photography",
          "Food Photography",
          "Fashion & Lifestyle Shoots",
          "Corporate Photography",
          "Hospitality & Resort Photography",
          "Event Photography",
        ],
      },
      {
        title: "Cinematic Video Production",
        description:
          "Tell your brand story through professionally crafted cinematic content.",
        items: [
          "Brand Films",
          "Corporate Videos",
          "Promotional Campaigns",
          "Business Showcase Videos",
          "Resort & Property Walkthroughs",
          "Testimonial Videos",
        ],
      },
      {
        title: "Event Coverage",
        description: "Capture and amplify your events through professional media production.",
        items: [
          "Event Photography",
          "Event Videography",
          "Same-Day Edits",
          "Highlight Reels",
          "Social Media Event Coverage",
          "After-Movie Production",
        ],
      },
      {
        title: "Social Media Content Creation",
        description: "Consistent content designed to strengthen your online presence.",
        items: [
          "Creative Post Designs",
          "Carousel Content",
          "Story Creatives",
          "Motion Graphics",
          "Social Media Banners",
          "Content Calendars",
        ],
      },
      {
        title: "Creator & Influencer Content",
        description: "Content production designed specifically for creators and personal brands.",
        items: [
          "Creator Shoots",
          "Lifestyle Content",
          "Personal Branding Videos",
          "Collaboration Content",
          "Podcast Recording & Editing",
          "YouTube Content Production",
        ],
      },
      {
        title: "Editing & Post-Production",
        description: "Transform raw footage into polished, professional content.",
        items: [
          "Video Editing",
          "Color Grading",
          "Sound Design",
          "Motion Graphics",
          "Thumbnail Design",
          "Content Optimization",
        ],
      },
    ],
    closer: {
      heading: "Content That Drives Results",
      body: "We don't create content just to look good—we create content with purpose. Every video, photograph, design, and campaign is crafted to help brands attract attention, engage audiences, and achieve meaningful business growth.",
    },
  },
  {
    id: "careers",
    number: "04",
    label: "Join Us",
    title: "Careers at Brand Monk",
    tagline: "Build the studio with us.",
    intro:
      "We're building a home for future interns, creators, editors, photographers, and marketers who want to do their best work. If you care about craft and momentum, we want to hear from you.",
    image: careersImg,
    subServices: [
      {
        title: "Who We're Looking For",
        description: "Open roles across the studio, year-round.",
        items: [
          "Interns (marketing, production, social)",
          "Creators & On-Camera Talent",
          "Video Editors & Motion Designers",
          "Photographers & Cinematographers",
          "Performance Marketers",
          "Brand & Content Strategists",
        ],
      },
    ],
    closer: {
      heading: "Let's talk.",
      body: "Send your portfolio, reel, or a short note about what you want to build. We read every submission.",
    },
  },
];

function ServicesPage() {
  const [activeId, setActiveId] = useState("creator");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border/40 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center gap-3">
            <span className="font-display text-2xl italic text-primary">B</span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground">
              BRAND <span className="text-primary">●</span> MONK
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-xs tracking-[0.25em] text-muted-foreground md:flex">
            <Link to="/" className="transition hover:text-foreground">HOME</Link>
            <Link to="/services" className="text-foreground">SERVICES</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pt-32">
        <p className="mb-8 text-xs tracking-[0.4em] text-primary/80">WHAT WE DO</p>
        <h1 className="font-sans-display text-5xl font-medium leading-[0.95] tracking-tight text-foreground md:text-7xl lg:text-[7.5rem]">
          Services,
          <br />
          <span className="font-display italic text-primary">curated</span> for clarity.
        </h1>
        <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Tap any practice below to expand it. You'll see only what you came for—no noise,
          no scrolling through the rest.
        </p>
      </section>

      {/* Accordion */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="border-t border-border/60">
          {services.map((s) => {
            const isOpen = activeId === s.id;
            return (
              <article
                key={s.id}
                className={`border-b border-border/60 transition-colors ${
                  isOpen ? "bg-card/40" : "hover:bg-card/20"
                }`}
              >
                <button
                  onClick={() => setActiveId(isOpen ? null : s.id)}
                  className="group flex w-full items-center justify-between gap-6 px-2 py-8 text-left md:px-6 md:py-12"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-6 md:gap-12">
                    <span className="font-mono text-xs tracking-widest text-primary md:text-sm">
                      {s.number}
                    </span>
                    <div>
                      <h2 className="font-sans-display text-3xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl">
                        {s.title.split(" & ")[0]}
                        {s.title.includes(" & ") && (
                          <>
                            {" "}<span className="font-display italic text-primary">&</span>{" "}
                            <span className="text-foreground/90">{s.title.split(" & ")[1]}</span>
                          </>
                        )}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground md:text-base">
                        {s.tagline}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 shrink-0 text-primary transition-transform duration-500 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="px-2 pb-16 md:px-6">
                      {/* Intro + image */}
                      <div className="grid gap-10 pt-4 md:grid-cols-5 md:gap-12">
                        <div className="md:col-span-3">
                          <p className="text-lg leading-relaxed text-foreground/85 md:text-xl">
                            {s.intro}
                          </p>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl border border-border/60 md:col-span-2">
                          <img
                            src={s.image}
                            alt={s.title}
                            loading="lazy"
                            width={1280}
                            height={800}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
                        </div>
                      </div>

                      {/* Sub-services grid */}
                      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
                        {s.subServices.map((sub, i) => (
                          <div
                            key={sub.title}
                            className="flex flex-col gap-4 bg-card p-7 transition-colors hover:bg-card/70"
                          >
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-[10px] tracking-widest text-primary">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="h-px flex-1 bg-border" />
                            </div>
                            <h3 className="font-sans-display text-xl font-medium tracking-tight text-foreground">
                              {sub.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {sub.description}
                            </p>
                            <ul className="mt-2 space-y-2">
                              {sub.items.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-3 text-sm text-foreground/80"
                                >
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Closer */}
                      {s.closer && (
                        <div className="mt-16 flex flex-col items-start justify-between gap-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card/40 to-transparent p-10 md:flex-row md:items-center md:p-14">
                          <div className="max-w-2xl">
                            <h3 className="font-sans-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                              {s.closer.heading.replace("Brand Monk?", "")}
                              {s.closer.heading.includes("Brand Monk?") && (
                                <span className="font-display italic text-primary">
                                  Brand Monk?
                                </span>
                              )}
                            </h3>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                              {s.closer.body}
                            </p>
                          </div>
                          <a
                            href="/contact"
                            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-medium tracking-wide text-primary-foreground transition hover:bg-primary/90"
                          >
                            Start a project
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 text-xs tracking-[0.25em] text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} BRAND MONK</span>
          <span>GROWTH, MADE VISIBLE.</span>
        </div>
      </footer>
    </div>
  );
}

export default ServicesPage;