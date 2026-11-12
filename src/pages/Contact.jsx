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
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,.09) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at 50% 20%, black 15%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 85% 10%, rgba(245,194,0,.12), transparent 35%), radial-gradient(ellipse at 5% 55%, rgba(245,194,0,.07), transparent 32%)",
        }}
      />

      <section className="relative overflow-hidden px-6 pb-16 pt-36 md:px-12 md:pb-20 md:pt-44">
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#F5C200]/25 bg-white/[0.03] px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#F5C200]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#F5C200] sm:text-[10px]">
              Let&apos;s build something great
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-[clamp(4rem,12vw,10rem)] uppercase leading-[0.85] tracking-tight"
          >
            <span className="block">Say</span>
            <span className="relative mt-2 block h-[0.95em] overflow-hidden text-[#F5C200]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ y: "100%", rotateX: 45, opacity: 0 }}
                  animate={{ y: "0%", rotateX: 0, opacity: 1 }}
                  exit={{ y: "-100%", rotateX: -45, opacity: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-0"
                >
                  {heroWords[currentWord]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base md:text-lg"
          >
            Whether you&apos;re launching a startup, growing a brand, scaling
            your business, or building a creator presence, Brand Bros turns
            ambitious ideas into unforgettable digital experiences.
          </motion.p>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="mb-8 rounded-2xl border border-white/10 bg-[#111] p-6 sm:p-8">
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.25em] text-[#F5C200]">
                Start a conversation
              </p>
              <h2 className="font-heading text-3xl uppercase leading-tight text-white md:text-4xl">
                Let's create something remarkable.
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Share your goals and we'll help craft the right strategy for
                your business, brand, or campaign.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="space-y-7 rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 sm:p-8"
            >
              <div className="grid gap-6 md:grid-cols-2">
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

              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  label="Brand / Company"
                  value={form.brand}
                  onChange={update("brand")}
                />

                <div>
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                    Service Needed
                  </label>

                  <select
                    value={form.service}
                    onChange={update("service")}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-sans text-sm text-white outline-none transition-colors focus:border-[#F5C200]/70 focus:ring-2 focus:ring-[#F5C200]/10"
                  >
                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-[#111] text-white"
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
                <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Project Details
                </label>

                <textarea
                  rows={6}
                  required
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us about your project, goals, audience, timeline, and expectations..."
                  className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-sans text-sm leading-relaxed text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#F5C200]/70 focus:ring-2 focus:ring-[#F5C200]/10"
                />
              </div>

              <button
                type="submit"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#F5C200] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#FFD740]"
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
            <div className="space-y-4 lg:sticky lg:top-32">
              <Detail
                icon={<Mail className="w-4 h-4" />}
                label="Email"
                lines={[
                  "anshgarg7640@gmail.com",
                ]}
              />

              <Detail
                icon={<Phone className="w-4 h-4" />}
                label="Phone"
                lines={[
                  "+91 88875 86830",
                  "+91 72488 48020",
                  "Mon - Sat | 10 AM - 7 PM",
                ]}
              />

              <Detail
                icon={<MapPin className="w-4 h-4" />}
                label="Office"
                lines={[
                  "BRAND//BROS Media",
                  "Gurgaon, Haryana, India",
                ]}
              />

              <div className="rounded-2xl border border-white/10 bg-[#111] p-6 sm:p-8">
                <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
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
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/65 transition-all duration-300 hover:border-[#F5C200] hover:bg-[#F5C200] hover:text-black"
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

    </main>
  );
};

const Field = ({ label, ...props }) => (
  <div>
    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
      {label}
    </label>

    <input
      {...props}
      className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-sans text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#F5C200]/70 focus:ring-2 focus:ring-[#F5C200]/10"
    />
  </div>
);

const Detail = ({ icon, label, lines }) => (
  <div className="rounded-2xl border border-white/10 bg-[#111] p-6 sm:p-7">
    <div className="flex items-center gap-3 text-[#F5C200]">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F5C200]/40">
        {icon}
      </span>
      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
        {label}
      </p>
    </div>

    <div className="mt-4 space-y-2 font-sans text-sm font-medium leading-relaxed text-white/85">
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  </div>
);

export default Contact;
