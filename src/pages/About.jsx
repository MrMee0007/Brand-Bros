import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import founder1 from "../assets/Aditi.jpeg";
import founder2 from "../assets/Shourya.jpeg";

const founders = [
  {
    name: "Aditi Gupta",
    role: "Co-Founder",
    image: founder1,
    bio:
      "Aditi Gupta is the Co-Founder of Brand Monk, bringing a strong blend of business acumen, marketing insight, and strategic management expertise to the agency. A B.Com graduate and MBA postgraduate with over 2.5 years of industry experience, she plays a key role in client relations, business development, campaign execution, and operational strategy. With a deep understanding of consumer behavior, brand positioning, and market dynamics, Aditi helps businesses and creators build stronger market presence through effective marketing and management solutions.",
    quote:
      "Strong brands are built when business strategy and creative execution work together.",
    stats: [
      { label: "Experience", value: "2.5+" },
      { label: "Business Strategy", value: "100%" },
      { label: "Growth Focus", value: "360°" },
    ],
  },
  {
    name: "Shourya Porwal",
    role: "Founder & CEO",
    image: founder2,
    bio:
      "Shourya Porwal is a marketer, creative strategist, and entrepreneur passionate about helping businesses and creators build meaningful brands. With experience spanning branding, digital marketing, content creation, media production, and business development, he has worked closely with local businesses, startups, and influencers to enhance their visibility, engagement, and growth. His expertise lies in combining creative storytelling with strategic marketing to create impactful brand experiences.",
    quote:
      "Successful brands are built through consistency, authenticity, and innovation.",
    stats: [
      { label: "Brand Building", value: "11+" },
      { label: "Creator Network", value: "35+" },
      { label: "Innovation", value: "24/7" },
    ],
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">
            Brand Monk · Marketing & Creative Agency
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-[9rem] leading-[0.9] mt-8 tracking-tight"
          >
            Building brands
            <br />
            that create
            <br />
            <span className="text-gradient-gold italic">
              lasting impact.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Brand Monk is a modern marketing and creative agency focused on
            helping businesses, creators, and startups grow through strategic
            branding, digital marketing, content creation, influencer
            collaborations, and innovative storytelling that drives measurable
            results.
          </motion.p>
        </div>
      </section>

      {/* Founders */}
      <section className="relative px-6 md:px-12 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
            <div>
              <span className="section-label">Leadership</span>
              <h2 className="font-display text-5xl md:text-7xl mt-4 tracking-tight">
                The minds behind Brand Monk.
              </h2>
            </div>

            <p className="max-w-md text-muted-foreground">
              Meet the visionaries behind Brand Monk, dedicated to empowering
              businesses, creators, and emerging brands through strategic
              marketing, creative storytelling, and sustainable growth.
            </p>
          </div>

          <div className="space-y-32">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`grid md:grid-cols-12 gap-10 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="md:col-span-5 relative">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border">
                    <img
                      src={f.image}
                      alt={f.name}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background/90 to-transparent">
                      <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-muted-foreground">
                        {String(i + 1).padStart(2, "0")} / 0{founders.length}
                      </p>
                    </div>
                  </div>

                  <div className="absolute -inset-3 -z-10 bg-gradient-to-br from-primary/20 to-transparent blur-2xl opacity-50" />
                </div>

                <div className="md:col-span-7 md:pl-10">
                  <span className="section-label">{f.role}</span>

                  <h3 className="font-display text-5xl md:text-7xl mt-3 tracking-tight">
                    {f.name}
                  </h3>

                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                    {f.bio}
                  </p>

                  <blockquote className="mt-8 border-l-2 border-primary pl-5 font-display text-2xl md:text-3xl italic leading-snug text-foreground">
                    "{f.quote}"
                  </blockquote>

                  <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                    {f.stats.map((s) => (
                      <div key={s.label}>
                        <p className="font-display text-3xl md:text-4xl">
                          {s.value}
                        </p>
                        <p className="mt-1 text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Our Values</span>

          <h2 className="font-display text-5xl md:text-7xl mt-4 tracking-tight max-w-3xl">
            Principles that guide everything we do.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              {
                n: "01",
                t: "Strategy First",
                d: "Every successful campaign begins with a clear understanding of business goals and audience needs.",
              },
              {
                n: "02",
                t: "Creativity With Purpose",
                d: "We combine creative storytelling with measurable marketing outcomes to create real impact.",
              },
              {
                n: "03",
                t: "Growth Through Collaboration",
                d: "We work closely with brands, creators, and businesses to unlock new opportunities together.",
              },
              {
                n: "04",
                t: "Authenticity Always",
                d: "Trust, transparency, and genuine communication form the foundation of every brand we build.",
              },
            ].map((v) => (
              <div
                key={v.n}
                className="bg-background p-8 hover:bg-card transition-colors"
              >
                <p className="font-mono text-xs tracking-[0.3em] text-primary">
                  {v.n}
                </p>

                <h3 className="font-display text-2xl mt-6">{v.t}</h3>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-32 border-t border-border text-center">
        <span className="section-label">
          Ready to grow your brand?
        </span>

        <h2 className="font-display text-5xl md:text-8xl mt-6 tracking-tight">
          Let's build something remarkable.
        </h2>

        <Link
          to="/contact"
          className="inline-block mt-10 px-10 py-5 bg-primary text-primary-foreground font-mono text-sm tracking-[0.3em] uppercase hover:bg-foreground transition-colors"
        >
          Start Your Journey →
        </Link>
      </section>

   
    </div>
  );
};

export default About;
