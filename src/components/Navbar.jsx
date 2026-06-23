import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const links = [
{ label: "Work", href: "/work" },
{ label: "About", href: "/about" },
{ label: "Services", href: "/services" },
{ label: "Contact", href: "/contact" },
];

export default function Navbar() {
const [open, setOpen] = useState(false);

return ( <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 pt-6"> <nav
     className="
       mx-auto
       flex
       items-center
       justify-between
       rounded-full
       border
       border-[#c7a450]/20
       bg-black/50
       backdrop-blur-xl
       px-6
       py-4
       shadow-[0_0_40px_rgba(199,164,80,.08)]
     "
   >
{/* Logo */} 
{/* Logo */}
<Link
  to="/"
  className="flex items-center gap-4 group"
>
  <div
    className="
      h-12
      w-14
      rounded-full
      overflow-hidden
      border-2
      border-[#c7a450]/50
      bg-black
      shadow-[0_0_20px_rgba(199,164,80,0.15)]
      transition-all
      duration-300
      group-hover:scale-110
      group-hover:border-[#c7a450]
    "
  >
    <img
      src={logo}
      alt="Brand Monk Logo"
      className="h-full w-full object-cover"
    />
  </div>

  <div>
    <h3 className="text-[#f4f0e8] font-bold tracking-wide text-sm md:text-base">
      Brand Monk
    </h3>

    <p className="text-[10px] uppercase tracking-[0.3em] text-[#8e8678]">
      Marketing Monks
    </p>
  </div>
</Link>

    {/* Desktop Menu */}
    <ul className="hidden md:flex items-center gap-10">
      {links.map((link, i) => (
        <li key={link.label}>
          <Link
            to={link.href}
            className="
              group
              relative
              flex
              items-center
              gap-2
              text-xs
              tracking-[0.25em]
              uppercase
              text-[#8e8678]
              hover:text-[#f4f0e8]
              transition-all
              duration-300
            "
          >
            <span
              className="
                text-[#c7a450]
                opacity-0
                -translate-x-2
                group-hover:opacity-100
                group-hover:translate-x-0
                transition-all
              "
            >
              0{i + 1}
            </span>

            {link.label}

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-[1px]
                w-0
                bg-[#c7a450]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </Link>
        </li>
      ))}
    </ul>

    {/* Right Side */}
    <div className="flex items-center gap-4">
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          hidden
          sm:flex
          items-center
          gap-2
          rounded-full
          border
          border-[#c7a450]
          bg-[#c7a450]
          py-2
          pl-5
          pr-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-black
        "
      >
        Let's Talk

        <span
          className="
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            bg-black
            text-[#c7a450]
          "
        >
          <ArrowUpRight size={14} />
        </span>
      </motion.a>

      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="
          md:hidden
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-[#c7a450]/30
          text-[#f4f0e8]
        "
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
    </div>
  </nav>

  {/* Mobile Menu */}
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -20,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          mt-3
          overflow-hidden
          rounded-3xl
          border
          border-[#c7a450]/20
          bg-black/80
          backdrop-blur-xl
          md:hidden
        "
      >
        <ul className="flex flex-col p-4">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                onClick={() => setOpen(false)}
                className="
                  block
                  rounded-xl
                  px-4
                  py-4
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-[#8e8678]
                  hover:bg-[#c7a450]/10
                  hover:text-[#f4f0e8]
                  transition
                "
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    )}
  </AnimatePresence>
</header>


);
}
