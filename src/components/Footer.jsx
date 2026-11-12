// import { Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react";
// import { Link } from "react-router-dom";

// const navLinks = [
//   { name: "Home",     path: "/" },
//   { name: "Work",     path: "/work" },
//   { name: "Services", path: "/services" },
//   { name: "About",    path: "/about" },
//   { name: "Contact",  path: "/contact" },
// ];

// export default function Footer() {
//   return (
//     <footer className="relative bg-black text-white px-6 md:px-16 py-20 overflow-hidden border-t border-[#F5C200]/10">
//       {/* Glows */}
//       <div className="absolute top-0 left-0 w-80 h-80 bg-[#F5C200]/5 blur-[130px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5C200]/4 blur-[150px] rounded-full pointer-events-none" />
//       {/* Diagonal stripes — top right corner */}
//       <div className="absolute top-0 right-0 w-32 h-32 opacity-8 pointer-events-none">
//         <div className="absolute inset-0 diag-stripes" />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Top grid */}
//         <div className="grid md:grid-cols-4 gap-12 pb-14 border-b border-white/8">

//           {/* Brand */}
//           <div className="md:col-span-2">
//             <div className="mb-5">
//               <h2 className="font-heading text-3xl tracking-[0.1em] mb-1">
//                 <span className="text-[#F5C200]">Brand//</span>Bros
//               </h2>
//               <p className="text-[9px] uppercase tracking-[0.35em] text-white/28">
//                 Create · Edit · Inspire
//               </p>
//             </div>
//             <p className="text-white/45 max-w-xs leading-relaxed text-sm mb-6">
//               A premium creative media turning ambitious businesses into
//               unforgettable digital brands through video, strategy, and growth.
//             </p>

//             {/* Socials */}
//             <div className="flex items-center gap-2.5">
//               {[
//                 { icon: Instagram, href: "https://instagram.com/brandbros", label: "Instagram" },
//                 { icon: Linkedin,  href: "https://linkedin.com/company/brandbros", label: "LinkedIn" },
//                 { icon: Youtube,   href: "https://youtube.com/@brandbros", label: "YouTube" },
//               ].map(({ icon: Icon, href, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={label}
//                   className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:border-[#F5C200] hover:text-[#F5C200] hover:bg-[#F5C200]/5 transition-all duration-300"
//                 >
//                   <Icon size={15} />
//                 </a>
//               ))}
//               {/* WhatsApp */}
//               <a
//                 href="https://wa.me/918887586830"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="WhatsApp"
//                 className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:border-[#F5C200] hover:text-[#F5C200] hover:bg-[#F5C200]/5 transition-all duration-300"
//               >
//                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Navigate */}
//           <div>
//             <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F5C200] mb-5">Navigate</h3>
//             <ul className="space-y-3">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link to={link.path} className="text-sm text-white/40 hover:text-[#F5C200] transition-colors duration-200">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact — REAL details from pitch deck */}
//           <div>
//             <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F5C200] mb-5">Contact Us</h3>
//             <div className="space-y-3.5 text-sm text-white/40">
//               <div className="flex items-start gap-2.5">
//                 <MapPin size={14} className="text-[#F5C200] mt-0.5 flex-shrink-0" />
//                 <span>Gurgaon, Haryana, India</span>
//               </div>
//               <a href="mailto:anshgarg7640@gmail.com" className="flex items-center gap-2.5 hover:text-[#F5C200] transition-colors">
//                 <Mail size={14} className="text-[#F5C200] flex-shrink-0" />
//                 <span>brandbros1711@gmail.com</span>
//               </a>
//               <a href="tel:+918887586830" className="flex items-start gap-2.5 hover:text-[#F5C200] transition-colors">
//                 <Phone size={14} className="text-[#F5C200] flex-shrink-0 mt-0.5" />
//                 <span>
//                   +91 88875 86830<br />
//                   +91 72488 48020
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Newsletter */}
//         <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
//           <div>
//             <h3 className="font-sans font-semibold text-base">Join The Growth Circle</h3>
//             <p className="text-white/35 mt-1 text-sm">Branding, content, and growth insights in your inbox.</p>
//           </div>
//           <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto">
//             <input
//               type="email"
//               placeholder="your@email.com"
//               required
//               className="bg-white/4 border border-white/8 focus:border-[#F5C200] px-4 py-3 rounded-l-lg outline-none w-full md:w-60 text-white text-sm placeholder:text-white/22 transition-colors"
//             />
//             <button type="submit" className="bg-[#F5C200] text-black px-6 py-3 rounded-r-lg font-bold text-sm hover:bg-[#FFD740] transition whitespace-nowrap">
//               Subscribe
//             </button>
//           </form>
//         </div>

//         {/* Bottom bar */}
//         <div className="mt-12 pt-5 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-white/22 text-xs">© {new Date().getFullYear()} BRAND BROS. All rights reserved.</p>
//           <p
//             className="text-white/18 text-sm italic"
//             style={{ fontFamily: "'Caveat', cursive" }}
//           >
//             See you on the other side of success!
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import React, { useState } from "react";
import {
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  Check,
  Menu,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/brandbros",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/brandbros",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/@brandbros",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Frontend confirmation only.
    // Connect your newsletter API to store subscriptions.
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="brand-footer" id="contact">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:wght@400;500;600;700;800&family=Caveat:wght@500;600&display=swap');

        .brand-footer {
          --footer-black: #050505;
          --footer-yellow: #f5c200;
          --footer-white: #ffffff;
          --footer-muted: #858585;
          --footer-border: rgba(255,255,255,.10);

          position: relative;
          width: 100%;
          overflow: hidden;
          background: var(--footer-black);
          color: var(--footer-white);
          font-family: 'DM Sans', sans-serif;
        }

        .brand-footer * {
          box-sizing: border-box;
        }

        .footer-container {
          position: relative;
          z-index: 2;
          width: 84%;
          max-width: 1500px;
          margin: 0 auto;
        }

        /* BACKGROUND EFFECTS */

        .footer-glow {
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: rgba(245,194,0,.045);
          filter: blur(120px);
          pointer-events: none;
        }

        .footer-glow--left {
          top: 100px;
          left: -250px;
        }

        .footer-glow--right {
          bottom: 0;
          right: -250px;
        }

        /* =========================
           LET'S WORK TOGETHER
        ========================= */

        .footer-cta {
          position: relative;
          padding: 105px 0 85px;
          border-bottom: 1px solid var(--footer-border);
        }

        .footer-cta-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 35px;
        }

        .footer-cta-label {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--footer-yellow);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .footer-cta-label::before {
          content: "";
          width: 30px;
          height: 1px;
          background: var(--footer-yellow);
        }

        .footer-cta-number {
          color: rgba(255,255,255,.3);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .footer-cta-heading {
          position: relative;
          z-index: 1;
          margin: 0;
          font-family: 'Anton', sans-serif;
          font-size: clamp(65px, 11vw, 155px);
          line-height: .88;
          letter-spacing: -2px;
          font-weight: 400;
          text-transform: uppercase;
        }

        .footer-cta-heading > span {
          display: block;
          color: var(--footer-yellow);
        }

        .footer-cta-heading .footer-outline {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,.6);
        }

        .footer-cta-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-top: 45px;
        }

        .footer-cta-description {
          max-width: 430px;
          color: #929292;
          font-size: 14px;
          line-height: 1.9;
        }

        .footer-cta-description strong {
          color: #fff;
          font-weight: 600;
        }

        .footer-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          min-width: 235px;
          padding: 18px 22px;
          background: var(--footer-yellow);
          color: #000;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          transition: .3s ease;
        }

        .footer-cta-button:hover {
          background: white;
          transform: translateY(-4px);
        }

        .footer-cta-button svg {
          width: 20px;
          height: 20px;
          transition: transform .3s ease;
        }

        .footer-cta-button:hover svg {
          transform: translate(4px,-4px);
        }

        /* =========================
           MAIN FOOTER GRID
        ========================= */

        .footer-main {
          display: grid;
          grid-template-columns: 2fr .85fr 1.05fr;
          gap: 80px;
          padding: 75px 0 65px;
          border-bottom: 1px solid var(--footer-border);
        }

        /* BRAND */

        .footer-brand-name {
          display: inline-block;
          margin: 0 0 8px;
          color: white;
          font-family: 'Anton', sans-serif;
          font-size: 34px;
          font-weight: 400;
          letter-spacing: 1px;
          text-decoration: none;
        }

        .footer-brand-name span {
          color: var(--footer-yellow);
        }

        .footer-brand-tagline {
          color: rgba(255,255,255,.35);
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 4px;
        }

        .footer-brand-description {
          max-width: 360px;
          margin: 27px 0;
          color: #929292;
          font-size: 14px;
          line-height: 2;
        }

        /* SOCIAL LINKS */

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-social-link {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          color: #888;
          transition: .3s ease;
        }

        .footer-social-link svg {
          width: 17px;
          height: 17px;
        }

        .footer-social-link:hover {
          border-color: var(--footer-yellow);
          color: var(--footer-yellow);
          background: rgba(245,194,0,.07);
          transform: translateY(-4px);
        }

        /* COLUMN TITLES */

        .footer-column-title {
          margin: 0 0 30px;
          color: var(--footer-yellow);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        /* NAVIGATION */

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 17px;
        }

        .footer-nav a {
          width: fit-content;
          color: #929292;
          font-size: 14px;
          text-decoration: none;
          transition: .25s ease;
        }

        .footer-nav a:hover {
          color: var(--footer-yellow);
          transform: translateX(5px);
        }

        /* CONTACT */

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 19px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          color: #929292;
          font-size: 14px;
          line-height: 1.8;
          text-decoration: none;
          transition: color .3s ease;
        }

        .footer-contact-item:hover {
          color: white;
        }

        .footer-contact-item svg {
          width: 17px;
          height: 17px;
          flex-shrink: 0;
          margin-top: 3px;
          color: var(--footer-yellow);
        }

        /* =========================
           NEWSLETTER
        ========================= */

        .footer-newsletter {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          padding: 50px 0;
          border-bottom: 1px solid var(--footer-border);
        }

        .footer-newsletter-heading {
          margin: 0;
          font-size: 19px;
          font-weight: 700;
        }

        .footer-newsletter-description {
          margin: 9px 0 0;
          color: #777;
          font-size: 14px;
        }

        .footer-newsletter-form {
          width: 440px;
          max-width: 100%;
          display: flex;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 22px;
          background: rgba(255,255,255,.035);
          transition: border-color .3s ease;
        }

        .footer-newsletter-form:focus-within {
          border-color: var(--footer-yellow);
        }

        .footer-newsletter-input {
          min-width: 0;
          flex: 1;
          padding: 17px 20px;
          border: none;
          outline: none;
          background: transparent;
          color: white;
          font-family: inherit;
          font-size: 14px;
        }

        .footer-newsletter-input::placeholder {
          color: #555;
        }

        .footer-newsletter-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 27px;
          border: none;
          background: var(--footer-yellow);
          color: black;
          font-family: inherit;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          transition: .3s ease;
        }

        .footer-newsletter-button:hover {
          background: #ffda43;
        }

        .footer-newsletter-button svg {
          width: 16px;
        }

        /* =========================
           BOTTOM BAR
        ========================= */

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
          padding: 27px 0;
        }

        .footer-copyright {
          margin: 0;
          color: #666;
          font-size: 12px;
        }

        .footer-goodbye {
          color: rgba(245,194,0,.65);
          font-family: 'Caveat', cursive;
          font-size: 23px;
        }

        .footer-back-top {
          color: #999;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          transition: color .3s ease;
        }

        .footer-back-top:hover {
          color: var(--footer-yellow);
        }

        /* FLOATING PORTFOLIO PILL */

        .footer-portfolio {
          position: fixed;
          z-index: 50;
          right: 30px;
          bottom: 25px;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 11px 14px 11px 17px;
          border: 1px solid rgba(245,194,0,.35);
          border-radius: 50px;
          background: rgba(5,5,5,.94);
          box-shadow: 0 0 35px rgba(245,194,0,.09);
          color: white;
          text-decoration: none;
          backdrop-filter: blur(15px);
          transition: .3s ease;
        }

        .footer-portfolio:hover {
          border-color: var(--footer-yellow);
          transform: translateY(-4px);
        }

        .footer-portfolio-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--footer-yellow);
          box-shadow: 0 0 0 5px rgba(245,194,0,.15);
        }

        .footer-portfolio-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .footer-portfolio-text span {
          color: var(--footer-yellow);
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .footer-portfolio-text strong {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .footer-portfolio-arrow {
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--footer-yellow);
          color: black;
        }

        .footer-portfolio-arrow svg {
          width: 18px;
          height: 18px;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media(max-width: 1050px) {
          .footer-container {
            width: 88%;
          }

          .footer-main {
            gap: 40px;
            grid-template-columns: 1.5fr 1fr 1.2fr;
          }

          .footer-cta-heading {
            font-size: 105px;
          }
        }

        @media(max-width: 760px) {
          .footer-cta {
            padding: 80px 0 65px;
          }

          .footer-cta-heading {
            font-size: clamp(65px, 12vw, 95px);
          }

          .footer-cta-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 28px;
          }

          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 50px 30px;
            padding: 55px 0;
          }

          .footer-brand-column {
            grid-column: 1 / -1;
          }

          .footer-newsletter {
            align-items: flex-start;
            flex-direction: column;
            gap: 25px;
          }

          .footer-newsletter-form {
            width: 100%;
          }

          .footer-bottom {
            flex-wrap: wrap;
          }

          .footer-goodbye {
            order: 3;
            width: 100%;
          }
        }

        @media(max-width: 480px) {
          .footer-container {
            width: 88%;
          }

          .footer-cta {
            padding: 70px 0 55px;
          }

          .footer-cta-top {
            margin-bottom: 27px;
          }

          .footer-cta-label {
            font-size: 8px;
            letter-spacing: 2px;
          }

          .footer-cta-heading {
            font-size: clamp(54px, 13vw, 75px);
            letter-spacing: -1px;
          }

          .footer-cta-description {
            font-size: 13px;
          }

          .footer-cta-button {
            width: 100%;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-brand-column {
            grid-column: auto;
          }

          .footer-newsletter {
            padding: 40px 0;
          }

          .footer-newsletter-heading {
            font-size: 17px;
          }

          .footer-newsletter-form {
            border-radius: 12px;
          }

          .footer-newsletter-input {
            padding: 15px 12px;
            font-size: 12px;
          }

          .footer-newsletter-button {
            padding: 0 15px;
            font-size: 12px;
          }

          .footer-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }

          .footer-goodbye {
            order: initial;
          }

          .footer-portfolio {
            right: 12px;
            bottom: 12px;
            padding: 9px 11px;
            gap: 10px;
          }

          .footer-portfolio-arrow {
            width: 33px;
            height: 33px;
          }

          .footer-portfolio-text strong {
            font-size: 9px;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .brand-footer *,
          .brand-footer *::before,
          .brand-footer *::after {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>

      {/* BACKGROUND GLOWS */}

      <div className="footer-glow footer-glow--left" />
      <div className="footer-glow footer-glow--right" />

      <div className="footer-container">

        {/* =================================
            SECTION 1: LET'S WORK TOGETHER
        ================================= */}

        <section className="footer-cta">

          <div className="footer-cta-top">
            <div className="footer-cta-label">
              GOOD BRANDS START WITH A GOOD CONVERSATION
            </div>

            <span className="footer-cta-number">
              BRAND BROS / 2026
            </span>
          </div>

          <h2 className="footer-cta-heading">
            LET'S WORK
            <span>TOGETHER.</span>
            <span className="footer-outline">
              LET'S CREATE.
            </span>
          </h2>

          <div className="footer-cta-bottom">

            <div className="footer-cta-description">
              Have a big idea, an ambitious project or
              something exciting in mind?

              <br /><br />

              <strong>
                Let's turn that vision into something
                people won't forget.
              </strong>
            </div>

            <a
              className="footer-cta-button"
              href="mailto:brandbros1711@gmail.com?subject=Let's%20Work%20Together"
            >
              START A PROJECT
              <ArrowUpRight />
            </a>

          </div>
        </section>

        {/* =================================
            SECTION 2: FOOTER MAIN GRID
        ================================= */}

        <div className="footer-main">

          {/* BRAND COLUMN */}

          <div className="footer-brand-column">

            <a href="/" className="footer-brand-name">
              <span>BRAND//</span>BROS
            </a>

            <div className="footer-brand-tagline">
              CREATE · EDIT · INSPIRE
            </div>

            <p className="footer-brand-description">
              A premium creative media turning ambitious
              businesses into unforgettable digital brands
              through video, strategy, and growth.
            </p>

            <div className="footer-socials">

              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="footer-social-link"
                >
                  <Icon />
                </a>
              ))}

              <a
                href="https://wa.me/918887586830"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="footer-social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="17">
                  <path d="M20.5 3.5A11.8 11.8 0 0012.1 0C5.5 0 .1 5.4.1 12c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7a12 12 0 005.7 1.5h.1c6.6 0 11.9-5.4 11.9-12a11.8 11.8 0 00-3.5-8.3zM12 21.8h-.1a9.8 9.8 0 01-5-1.4l-.4-.2-3.7 1 1-3.7-.3-.4A9.8 9.8 0 012 12C2 6.5 6.5 2 12 2c2.6 0 5.1 1 7 2.9a9.8 9.8 0 012.9 7c0 5.5-4.4 9.9-9.9 9.9zm5.4-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.1-.3 0-.5.2-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-1-2.2-.2-.5-.4-.5-.6-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.2-.3-.3-.5-.4z" />
                </svg>
              </a>

            </div>
          </div>

          {/* NAVIGATION */}

          <div>
            <h3 className="footer-column-title">
              Navigate
            </h3>

            <nav className="footer-nav">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="footer-column-title">
              Contact Us
            </h3>

            <div className="footer-contact-list">

              <div className="footer-contact-item">
                <MapPin />
                <span>Gurgaon, Haryana, India</span>
              </div>

              <a
                href="mailto:brandbros1711@gmail.com"
                className="footer-contact-item"
              >
                <Mail />
                <span>brandbros1711@gmail.com</span>
              </a>

              <a
                href="tel:+918887586830"
                className="footer-contact-item"
              >
                <Phone />
                <span>
                  +91 88875 86830
                  <br />
                  +91 72488 48020
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* =================================
            SECTION 3: NEWSLETTER
        ================================= */}

        <div className="footer-newsletter">

          <div>
            <h3 className="footer-newsletter-heading">
              Join The Growth Circle
            </h3>

            <p className="footer-newsletter-description">
              Branding, content, and growth insights in your inbox.
            </p>
          </div>

          <form
            className="footer-newsletter-form"
            onSubmit={handleSubscribe}
          >
            <input
              className="footer-newsletter-input"
              type="email"
              placeholder="your@email.com"
              aria-label="Your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSubscribed(false);
              }}
              required
            />

            <button
              className="footer-newsletter-button"
              type="submit"
            >
              {subscribed ? (
                <>
                  Subscribed <Check />
                </>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>

        </div>

        {/* =================================
            SECTION 4: BOTTOM BAR
        ================================= */}

        <div className="footer-bottom">

          <p className="footer-copyright">
            © {new Date().getFullYear()} BRAND BROS.
            All rights reserved.
          </p>

          <span className="footer-goodbye">
            See you on the other side of success!
          </span>

          <a href="#top" className="footer-back-top">
            BACK TO TOP ↑
          </a>

        </div>

      </div>

      {/* FLOATING PORTFOLIO BUTTON */}

      <a href="/work" className="footer-portfolio">

        <span className="footer-portfolio-dot" />

        <span className="footer-portfolio-text">
          <span>SELECTED WORKS</span>
          <strong>VIEW OUR PORTFOLIO</strong>
        </span>

        <span className="footer-portfolio-arrow">
          <ArrowUpRight />
        </span>

      </a>

    </footer>
  );
}
