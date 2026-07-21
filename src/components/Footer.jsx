import { Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home",     path: "/" },
  { name: "Work",     path: "/work" },
  { name: "Services", path: "/services" },
  { name: "About",    path: "/about" },
  { name: "Contact",  path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white px-6 md:px-16 py-20 overflow-hidden border-t border-[#F5C200]/10">
      {/* Glows */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#F5C200]/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5C200]/4 blur-[150px] rounded-full pointer-events-none" />
      {/* Diagonal stripes — top right corner */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-8 pointer-events-none">
        <div className="absolute inset-0 diag-stripes" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top grid */}
        <div className="grid md:grid-cols-4 gap-12 pb-14 border-b border-white/8">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <h2 className="font-heading text-3xl tracking-[0.1em] mb-1">
                <span className="text-[#F5C200]">Brand//</span>Bros
              </h2>
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/28">
                Create · Edit · Inspire
              </p>
            </div>
            <p className="text-white/45 max-w-xs leading-relaxed text-sm mb-6">
              A premium creative studio turning ambitious businesses into
              unforgettable digital brands through video, strategy, and growth.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2.5">
              {[
                { icon: Instagram, href: "https://instagram.com/mediaverse", label: "Instagram" },
                { icon: Linkedin,  href: "https://linkedin.com/company/mediaverse", label: "LinkedIn" },
                { icon: Youtube,   href: "https://youtube.com/@mediaverse", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:border-[#F5C200] hover:text-[#F5C200] hover:bg-[#F5C200]/5 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
              {/* WhatsApp */}
              <a
                href="https://wa.me/918887586830"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:border-[#F5C200] hover:text-[#F5C200] hover:bg-[#F5C200]/5 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F5C200] mb-5">Navigate</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-white/40 hover:text-[#F5C200] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — REAL details from pitch deck */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F5C200] mb-5">Contact Us</h3>
            <div className="space-y-3.5 text-sm text-white/40">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#F5C200] mt-0.5 flex-shrink-0" />
                <span>Gurgaon, Haryana, India</span>
              </div>
              <a href="mailto:anshgarg7640@gmail.com" className="flex items-center gap-2.5 hover:text-[#F5C200] transition-colors">
                <Mail size={14} className="text-[#F5C200] flex-shrink-0" />
                <span>brandbros1711@gmail.com</span>
              </a>
              <a href="tel:+918887586830" className="flex items-start gap-2.5 hover:text-[#F5C200] transition-colors">
                <Phone size={14} className="text-[#F5C200] flex-shrink-0 mt-0.5" />
                <span>
                  +91 88875 86830<br />
                  +91 72488 48020
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-sans font-semibold text-base">Join The Growth Circle</h3>
            <p className="text-white/35 mt-1 text-sm">Branding, content, and growth insights in your inbox.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="bg-white/4 border border-white/8 focus:border-[#F5C200] px-4 py-3 rounded-l-lg outline-none w-full md:w-60 text-white text-sm placeholder:text-white/22 transition-colors"
            />
            <button type="submit" className="bg-[#F5C200] text-black px-6 py-3 rounded-r-lg font-bold text-sm hover:bg-[#FFD740] transition whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-5 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/22 text-xs">© {new Date().getFullYear()} BRAND BROS. All rights reserved.</p>
          <p
            className="text-white/18 text-sm italic"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            See you on the other side of success!
          </p>
        </div>
      </div>
    </footer>
  );
}