"use client";

import { Mail, ArrowUp } from "lucide-react";
import { FaLinkedinIn, FaGithub  } from "react-icons/fa";

const socials = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/krushil-thakkar-237661213",
    label: "LinkedIn",
    color: "hover:text-blue-500",
  },
  {
    icon: Mail,
    href: "mailto:krushilthakkar00@gmail.com",
    label: "Email",
    color: "hover:text-indigo-500",
  },
  {
    icon: FaGithub,
    href: "https://github.com/krushil-26",
    label: "Website",
    color: "hover:text-emerald-500",
  },
];

const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (section: string) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-sm shadow-lg shadow-indigo-500/30">
                KT
              </div>
              <div>
                <p className="font-bold text-white">Krushil Thakkar</p>
                <p className="text-xs text-slate-400">Frontend Developer</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Crafting beautiful, scalable web applications with React.js & Next.js. Based in Ahmedabad, India.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 ${color} border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-200`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-sm text-slate-400 hover:text-indigo-400 transition-colors text-left cursor-pointer"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact quick */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Contact</p>
            <div className="space-y-2">
              <a
                href="mailto:krushilthakkar00@gmail.com"
                className="block text-sm text-slate-400 hover:text-indigo-400 transition-colors"
              >
                krushilthakkar00@gmail.com
              </a>
              <a
                href="tel:+918460721482"
                className="block text-sm text-slate-400 hover:text-indigo-400 transition-colors"
              >
                +91 84607 21482
              </a>
              <p className="text-sm text-slate-500">Ahmedabad, Gujarat, India</p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-sm text-slate-500 text-center sm:text-left">
            © 2026 Krushil Thakkar · Built with{" "}
            <span className="text-indigo-400">Next.js</span> &{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-200">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
