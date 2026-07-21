import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Film, LayoutGrid, BookImage, Megaphone, Camera, TrendingUp, Users, Target, Star } from "lucide-react";

const SERVICES = [
  { icon: Film,       title: "VIDEO CONTENT",    desc: "High-performing reels, promos and brand films that engage and convert." },
  { icon: LayoutGrid, title: "CAROUSEL POSTS",   desc: "Informative, visually appealing carousels that educate and build authority." },
  { icon: BookImage,  title: "STORY DESIGNS",    desc: "Creative stories that capture attention and keep your audience coming back." },
  { icon: Megaphone,  title: "BRAND CAMPAIGNS",  desc: "Strategic campaigns that amplify reach, engagement and brand recall." },
  { icon: Camera,     title: "PHOTOGRAPHY",      desc: "High-quality product and lifestyle photography that tells your brand story beautifully." },
  { icon: TrendingUp, title: "AD CREATIVES",     desc: "Scroll-stopping ad creatives designed to drive clicks and deliver results." },
];

const STATS = [
  { icon: Users,  num: "8",   label: "HAPPY CLIENTS"       },
  { icon: Film,   num: "10+",  label: "PROJECTS DELIVERED"  },
  { icon: Target, num: "80%",  label: "CLIENT RETENTION"    },
  { icon: Star,   num: "4.3/5", label: "AVERAGE RATING"      },
];

export default function ServicesSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 px-6 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Header — pitch-deck style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <h2 className="font-heading text-[clamp(3.5rem,10vw,8rem)] leading-none">
            <span className="text-[#F5C200]">  OUR WORK</span>
          </h2>
          <p className="text-white/50 text-base mt-4">
            A glimpse of the{" "}
            <span className="text-[#F5C200] font-semibold">brands we've</span>{" "}
            had the privilege to work with.
          </p>
        </motion.div>

        {/* Gold underline */}
        <div className="flex justify-center mb-14">
          <div className="w-16 h-0.5 bg-[#F5C200]" />
        </div>

        {/* 6-column service grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="group border border-white/10 bg-[#111] rounded-2xl p-5 flex flex-col items-center text-center hover:border-[#F5C200]/40 hover:bg-[#141414] transition-all duration-400 cursor-default"
              >
                {/* Icon circle */}
                <div className="w-14 h-14 rounded-full border-2 border-[#F5C200] flex items-center justify-center bg-[#111] mb-4 group-hover:bg-[#F5C200]/8 transition-colors duration-300">
                  <Icon size={22} className="text-[#F5C200]" strokeWidth={1.5} />
                </div>

                {/* Gold separator */}
                <div className="w-6 h-0.5 bg-[#F5C200] mb-3" />

                {/* Title */}
                <h3 className="font-bold uppercase text-[0.7rem] tracking-[0.12em] text-white mb-3 leading-tight">
                  {svc.title}
                </h3>

                {/* Desc */}
                <p className="text-white/40 text-[0.72rem] leading-relaxed">{svc.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border border-white/10 bg-[#111] rounded-2xl px-6 py-5 flex flex-wrap items-center justify-around gap-6 mb-6"
        >
          {STATS.map(({ icon: Icon, num, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#F5C200]/50 flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-[#F5C200]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-heading text-2xl text-[#F5C200] leading-none">{num}</p>
                <p className="text-white/40 text-[0.68rem] uppercase tracking-[0.15em] mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-white/45 text-sm tracking-wide"
        >
          <span className="text-[#F5C200] text-xl font-serif mr-2">"</span>
          We don't just create content, we{" "}
          <span className="text-[#F5C200] font-semibold">create impact.</span>
          <span className="text-[#F5C200] text-xl font-serif ml-2">"</span>
        </motion.p>
      </div>
    </section>
  );
}
