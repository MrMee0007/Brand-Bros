import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { memo, useRef, useEffect } from "react";

/* ------------------ DATA ------------------ */

const projects = [
  {
    title: "Cinematic Event Coverage",
    category: "Videography",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1773136616/video2_lvg1nm.mp4",
  },
  {
    title: "Brand Commercial Shoot",
    category: "Cinematography",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1773136489/video1_ijormh.mp4",
  },
  {
    title: "Luxury Product Film",
    category: "Brand Film",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1773135665/video3_yip0we.mp4",
  },
  {
    title: "Creative Photography Showcase",
    category: "Photography",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1773136645/video4_st8cbr.mp4",
  },
];

/* ------------------ AUTOPLAY HOOK ------------------ */

const useAutoPlay = (ref) => {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [ref]);
};

/* ------------------ VIDEO CARD ------------------ */

const VideoCard = memo(({ project, large }) => {
  const videoRef = useRef(null);

  useAutoPlay(videoRef);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-[#0c0c0c]
        shadow-[0_0_40px_rgba(0,0,0,0.4)]
      "
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        preload="metadata"
        className={`
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
          ${large ? "h-[70vh]" : "h-[450px]"}
        `}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Content */}
      <div
        className={`
          absolute
          bottom-0
          left-0
          w-full
          ${large ? "p-10" : "p-6"}
        `}
      >
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#CDA349] mb-3">
              {project.category}
            </p>

            <h3
              className={`
                font-bold
                text-white
                leading-tight
                ${large ? "text-3xl md:text-5xl" : "text-xl"}
              `}
            >
              {project.title}
            </h3>
          </div>

          <div
            className="
              w-12
              h-12
              rounded-full
              bg-[#CDA349]
              flex
              items-center
              justify-center
              shadow-lg
              transition-all
              duration-300
              hover:scale-110
            "
          >
            <ExternalLink className="w-5 h-5 text-black" />
          </div>
        </div>
      </div>
    </motion.div>
  );
});

/* ------------------ MAIN SECTION ------------------ */

const ProjectsSection = () => {
  return (
    <section className="relative bg-[#050505] py-28 md:py-40 px-6 md:px-12 lg:px-24 text-white overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#CDA349]/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#CDA349]/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <p className="text-[#CDA349] uppercase tracking-[0.4em] text-xs mb-5">
            Featured Productions
          </p>

          <h2 className="text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9]">
            Visual Stories

            <span className="block italic text-[#CDA349]">
              That Move People
            </span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
            From cinematic brand films and event coverage to photography,
            commercial shoots, reels, and social-first content — we craft
            visuals that capture attention and leave a lasting impression.
          </p>
        </motion.div>

        {/* Featured Video */}
        <div className="mb-20">
          <VideoCard project={projects[0]} large />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.video}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              viewport={{ once: true }}
            >
              <VideoCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ProjectsSection);