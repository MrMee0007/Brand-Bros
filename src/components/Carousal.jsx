import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const campaigns = [
  {
    image:
      "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562789/Photo9_juyekj.webp",
  },
  {
    image:
      "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774478218/IMG_1231_uxkiki.webp",
  },
  {
    image:
      "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774560979/Img19_xlvbjy.webp",
  },
  {
    image:
      "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774560979/Photo1_vdcrpp.webp",
  },
  {
    image:
      "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774560979/Photo2_zymbxo.webp",
  },
  {
    image:
      "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774478238/IMG_1300_squmym.webp",
  },
  {
    image:
      "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774560978/Img18_rtixf4.webp",
  },
];

function BrandMonkCarousel() {
  return (
    <section
      id="work"
      className="
      relative
      overflow-hidden
      bg-[#0a0908]
      py-24
      md:py-40
      px-6
      md:px-12
      grain
    "
    >
      {/* Glow Orbs */}
      <div className="blur-orb absolute w-[700px] h-[700px] top-20 left-1/4" />
      <div className="blur-orb absolute w-[500px] h-[500px] bottom-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <p className="section-label mb-5">
            Selected Rituals
          </p>

          <h2
            className="
            font-display
            font-extrabold
            leading-[0.85]
            tracking-tight
            text-[clamp(3rem,8vw,8rem)]
          "
          >
            Building
            <br />

            <span className="text-gradient-gold italic">
              Brands
            </span>

            <br />

            That Compound.
          </h2>

          <p
            className="
            mt-8
            max-w-xl
            text-[#8e8678]
            uppercase
            tracking-wide
            text-sm
            leading-relaxed
          "
          >
            We engineer creator ecosystems, social campaigns,
            brand systems and growth engines for ambitious
            brands shaping the new era.
          </p>

          <button
            className="
            mt-10
            flex
            items-center
            gap-3
            border
            border-[#c7a450]
            px-6
            py-3
            rounded-full
            text-[#f4f0e8]
            uppercase
            tracking-[0.2em]
            text-xs
            hover:bg-[#c7a450]
            hover:text-black
            transition-all
          "
          >
            View Case Studies
            <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            centeredSlides
            loop
            speed={1000}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".brand-next",
              prevEl: ".brand-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.15,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
          >
            {campaigns.map((item, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.85,
                      opacity: isActive ? 1 : 0.45,
                      y: isActive ? -12 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-black
                  "
                  >
                    <div className="relative aspect-[4/5]">
                      <img
                        src={item.image}
                        alt="Portfolio"
                        className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              className="
              brand-prev
              w-12
              h-12
              rounded-full
              border
              border-[#c7a450]/20
              bg-[#111]
              text-[#c7a450]
              flex
              items-center
              justify-center
              hover:bg-[#c7a450]
              hover:text-black
              transition-all
            "
            >
              <ChevronLeft size={18} />
            </button>

            <button
              className="
              brand-next
              w-12
              h-12
              rounded-full
              border
              border-[#c7a450]/20
              bg-[#111]
              text-[#c7a450]
              flex
              items-center
              justify-center
              hover:bg-[#c7a450]
              hover:text-black
              transition-all
            "
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandMonkCarousel;