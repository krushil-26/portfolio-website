"use client";

import { useEffect, useRef } from "react";
import { MapPin, GraduationCap, Briefcase, Heart } from "lucide-react";

const highlights = [
  { icon: Briefcase, label: "4+ Years", sub: "Frontend Experience" },
  { icon: GraduationCap, label: "B.E. 8.46 CGPA", sub: "LJ Institute of Engg." },
  { icon: MapPin, label: "Ahmedabad", sub: "Gujarat, India" },
  { icon: Heart, label: "Passionate", sub: "About Clean Code" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-12 bg-white dark:bg-[#0d0d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div
          className="reveal mb-16 text-center"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="text-xs font-semibold font-mono tracking-widest text-indigo-500 uppercase">
            — About Me —
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Crafting Digital
            <span className="text-gradient"> Experiences</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: About text */}
          <div className="space-y-6">
            <div
              className="reveal"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                I&apos;m a <span className="font-semibold text-indigo-600 dark:text-indigo-400">Senior Frontend Developer</span> with
                over 4 years of hands-on experience building modern, scalable web applications. My expertise lies in
                React.js, Next.js, TypeScript, and the broader JavaScript ecosystem.
              </p>
            </div>
            <div
              className="reveal"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Currently at <span className="font-semibold text-slate-800 dark:text-slate-200">CMExpertise Infotech</span>, I&apos;ve built
                complex e-commerce platforms with role-based access control, integrated analytics systems, and delivered
                high-performance applications used by thousands.
              </p>
            </div>
            <div
              className="reveal"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                I&apos;m deeply committed to <span className="font-semibold text-slate-800 dark:text-slate-200">continuous learning</span>{" "} and staying
                ahead of industry trends. When I&apos;m not coding, I&apos;m exploring new tools, contributing to project ideas,
                and pushing the boundaries of what&apos;s possible in the browser.
              </p>
            </div>

            {/* Tech tags */}
            <div
              className="reveal flex flex-wrap gap-2 pt-2"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "JavaScript"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, sub }, i) => (
              <div
                key={label}
                className="reveal gradient-border p-5 group hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`,
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <p className="font-bold text-slate-900 dark:text-white text-lg">{label}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
