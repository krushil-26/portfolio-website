"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Download, Moon, Sun } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0, rootMargin: "-20% 0px -65% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    setActiveSection(href.slice(1));
    const el = document.querySelector(href);

    if (el) {
      const offset = 40; // Change this to the number of pixels you want to stay above
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "py-3 bg-white border-slate-200 shadow-sm"
        : "py-5 bg-white "
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex cursor-pointer items-center gap-2 group"
            aria-label="Go to top"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
              KT
            </div>
            <span className="font-semibold text-slate-800 dark:text-white text-lg hidden sm:block">
              Krushil<span className="text-indigo-600 dark:text-indigo-400"> Thakkar</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === link.href.slice(1)
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40"
                  : "text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/20"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-outline text-sm py-2 px-4"
            >
              Hire Me
            </button>
            <a
              href="/krushil_thakkar_resume.pdf"
              download="Krushil_Thakkar_Resume.pdf"
              className="btn-primary text-sm py-2.5 px-5 flex items-center gap-2"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-100 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
        >
          <div className="glass dark:glass-dark rounded-2xl p-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${activeSection === link.href.slice(1)
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40"
                  : "text-slate-600 dark:text-slate-400"
                  }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-outline text-sm py-2.5 text-center w-full"
              >
                Hire Me
              </button>
              <a
                href="/resume.pdf"
                download="Krushil_Thakkar_Resume.pdf"
                className="btn-primary text-sm py-2.5 flex items-center justify-center gap-2 w-full"
              >
                <Download size={15} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
