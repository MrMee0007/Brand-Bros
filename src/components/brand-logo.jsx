import berrybrosLogo from "../assets/berrybros.png";
import detaliensLogo from "../assets/detaliens.png";
import jgLogo from "../assets/t&g.png";
import jomotelLogo from "../assets/jomotel.png";
import mlmLogo from "../assets/llm.png";
import racingEmblem from "../assets/xtrafuel.png";
import raymondLogo from "../assets/raymond.png";
import waffleWorldLogo from "../assets/waffleword.png";

const clientLogos = [
  { name: "Detaliens", src: detaliensLogo },
  { name: "Berry Bros", src: berrybrosLogo },
  { name: "Racing Emblem", src: racingEmblem },
  { name: "Jomotel", src: jomotelLogo },
  { name: "Raymond", src: raymondLogo },
  { name: "Masters of Luxe Lifestyle", src: mlmLogo },
  { name: "JG", src: jgLogo },
  { name: "Waffle World", src: waffleWorldLogo },
];

export default function BrandLogo() {
  return (
    <section
      aria-labelledby="brand-logos-title"
      className="relative overflow-hidden border-y border-white/10 bg-black py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#F5C200]">
            Selected Clients
          </p>
          <h2
            id="brand-logos-title"
            className="font-heading text-[clamp(2.75rem,8vw,6rem)] uppercase leading-[0.95] text-white"
          >
            Good work,{" "}
            <span className="text-[#F5C200]">built together.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/50 md:text-base">
            We partner with ambitious brands to create work that makes an
            impact.
          </p>
        </header>
      </div>

      <div
        className="brand-logo-marquee relative overflow-hidden border-y border-white/10 py-5 md:py-7"
        aria-label="Selected client logos"
      >
        <div className="brand-logo-fade brand-logo-fade-left" aria-hidden="true" />
        <div className="brand-logo-fade brand-logo-fade-right" aria-hidden="true" />
        <div className="brand-logo-track">
          {[0, 1].map((copy) => (
            <ul
              className="brand-logo-run"
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
            >
              {clientLogos.map((logo) => (
                <li className="brand-logo-item" key={`${copy}-${logo.name}`}>
                  <img
                    className="brand-logo-image"
                    src={logo.src}
                    alt={copy === 0 ? logo.name : ""}
                    loading="lazy"
                    draggable="false"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <footer className="mx-auto mt-6 flex max-w-7xl items-center justify-between gap-4 px-6 text-xs text-white/40 md:mt-8">
        <p>A few of the brands that have trusted us with their work.</p>
        <span className="hidden uppercase tracking-[0.2em] text-[#F5C200] sm:inline">
          Creativity in motion
        </span>
      </footer>

      <style>{`
        .brand-logo-track,
        .brand-logo-run {
          display: flex;
          width: max-content;
        }

        .brand-logo-track {
          animation: brand-logo-scroll 38s linear infinite;
        }

        .brand-logo-marquee:hover .brand-logo-track {
          animation-play-state: paused;
        }

        .brand-logo-run {
          flex-shrink: 0;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .brand-logo-item {
          display: flex;
          width: 190px;
          height: 96px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px 24px;
        }

        .brand-logo-image {
          display: block;
          width: 100%;
          height: 100%;
          max-width: 160px;
          max-height: 72px;
          object-fit: contain;
          opacity: 0.9;
          transition: opacity 200ms ease, transform 200ms ease;
        }

        .brand-logo-item:hover .brand-logo-image {
          opacity: 1;
          transform: scale(1.06);
        }

        .brand-logo-fade {
          position: absolute;
          z-index: 1;
          top: 0;
          bottom: 0;
          width: clamp(32px, 8vw, 112px);
          pointer-events: none;
        }

        .brand-logo-fade-left {
          left: 0;
          background: linear-gradient(90deg, #000, transparent);
        }

        .brand-logo-fade-right {
          right: 0;
          background: linear-gradient(270deg, #000, transparent);
        }

        @keyframes brand-logo-scroll {
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .brand-logo-item {
            width: 155px;
            height: 82px;
            padding: 10px 20px;
          }

          .brand-logo-image {
            max-height: 60px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-logo-track {
            animation: none;
          }

          .brand-logo-image {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
