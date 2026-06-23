import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";


const services = [
  "Social Media Marketing",
  "Influencer Marketing",
  "Brand Management",
  "Content Creation",
  "Social Media Management",
  "Other",
];

const heroWords = [
  "Hello.",
  "Growth.",
  "Success.",
  "Creators.",
  "Business.",
];

const Contact = () => {
    const [currentWord, setCurrentWord] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentWord((prev) => (prev + 1) % heroWords.length);
  }, 2500);

  return () => clearInterval(interval);
}, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    service: services[0],
    budget: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", form);

    alert(`Thank you ${form.name || "there"}! We'll get back to you soon.`);

    setForm({
      name: "",
      email: "",
      brand: "",
      service: services[0],
      budget: "",
      message: "",
    });
  };

  const update = (key) => (e) => {
    setForm({
      ...form,
      [key]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">


      {/* Background Glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Hero */}


<section className="relative pt-40 pb-24 px-6 md:px-12 overflow-hidden">

  {/* Animated Background Blobs */}
  <motion.div
    animate={{
      x: [0, 50, 0],
      y: [0, -40, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px]"
  />

  <motion.div
    animate={{
      x: [0, -60, 0],
      y: [0, 40, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-20 top-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px]"
  />

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-card/40 backdrop-blur-xl"
    >
      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      <span className="text-xs tracking-[0.25em] uppercase font-mono">
        Let's Build Something Great
      </span>
    </motion.div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-10 font-display text-6xl md:text-[9rem] leading-[0.9] tracking-tight"
    >
      <span className="block">Say</span>

      <div className="relative h-[1.1em] overflow-hidden mt-3">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWord}
            initial={{
              y: 180,
              rotateX: 90,
              opacity: 0,
            }}
            animate={{
              y: 0,
              rotateX: 0,
              opacity: 1,
            }}
            exit={{
              y: -180,
              rotateX: -90,
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-0 italic text-gradient-gold"
          >
            {heroWords[currentWord]}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="mt-10 max-w-3xl text-lg md:text-2xl text-muted-foreground leading-relaxed"
    >
      Whether you're launching a startup, growing a brand,
      scaling your business, or building a creator presence,
      Brand Monk helps transform ambitious ideas into
      unforgettable digital experiences.
    </motion.p>

    {/* Stats */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="mt-14 flex flex-wrap gap-8"
    >
      <div>
        <h3 className="text-4xl font-display">50+</h3>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Brands
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-display">100+</h3>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Creators
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-display">24/7</h3>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Innovation
        </p>
      </div>
    </motion.div>

  </div>
</section>


      {/* Content */}
      <section className="px-6 md:px-12 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="mb-10 p-8 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <h2 className="font-display text-3xl md:text-4xl">
                Let's create something remarkable.
              </h2>

              <p className="mt-3 text-muted-foreground">
                Share your goals and we'll help craft the right strategy for
                your business, brand, or campaign.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Field
                  label="Your Name"
                  value={form.name}
                  onChange={update("name")}
                  required
                />

                <Field
                  label="Email Address"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Field
                  label="Brand / Company"
                  value={form.brand}
                  onChange={update("brand")}
                />

                <div>
                  <label className="text-[10px] font-mono tracking-[0.3em] uppercase text-muted-foreground">
                    Service Needed
                  </label>

                  <select
                    value={form.service}
                    onChange={update("service")}
                    className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 font-display text-xl"
                  >
                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-background"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Field
                label="Approximate Budget"
                placeholder="₹50,000 - ₹5,00,000"
                value={form.budget}
                onChange={update("budget")}
              />

              <div>
                <label className="text-[10px] font-mono tracking-[0.3em] uppercase text-muted-foreground">
                  Project Details
                </label>

                <textarea
                  rows={6}
                  required
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us about your project, goals, audience, timeline, and expectations..."
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 font-display text-xl resize-none placeholder:text-muted-foreground/40"
                />
              </div>

              <button
                type="submit"
                className="group relative overflow-hidden px-10 py-5 bg-primary text-primary-foreground font-mono text-sm tracking-[0.25em] uppercase rounded-xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Send Message
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-32 space-y-6">
              <Detail
                icon={<Mail className="w-4 h-4" />}
                label="Email"
                lines={[
                  "brandmonk.creatives@gmail.com",
                ]}
              />

              <Detail
                icon={<Phone className="w-4 h-4" />}
                label="Phone"
                lines={[
                  "+91 75007 41215",
                  "Mon - Sat | 10 AM - 7 PM",
                ]}
              />

              <Detail
                icon={<MapPin className="w-4 h-4" />}
                label="Office"
                lines={[
                  "Brand Monk Studio",
                  "India",
                ]}
              />

              <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-8">
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-muted-foreground mb-5">
                  Follow Us
                </p>

                <div className="flex gap-4">
                  {[
                    { Icon: Instagram, href: "#" },
                    { Icon: Linkedin, href: "#" },
                    { Icon: Twitter, href: "#" },
                  ].map(({ Icon, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      className="w-12 h-12 flex items-center justify-center rounded-xl border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

    </div>
  );
};

const Field = ({ label, ...props }) => (
  <div>
    <label className="text-[10px] font-mono tracking-[0.3em] uppercase text-muted-foreground">
      {label}
    </label>

    <input
      {...props}
      className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 font-display text-xl transition-colors placeholder:text-muted-foreground/40"
    />
  </div>
);

const Detail = ({ icon, label, lines }) => (
  <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-8">
    <div className="flex items-center gap-3 text-primary">
      {icon}
      <p className="text-[10px] font-mono tracking-[0.3em] uppercase">
        {label}
      </p>
    </div>

    <div className="mt-4 space-y-2 font-display text-xl">
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  </div>
);

export default Contact;

