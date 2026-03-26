"use client";

import { useEffect, useRef, useState } from "react";

const frontendSkills = [
  { name: "React.js", level: 92, color: "from-blue-500 to-cyan-500" },
  { name: "Next.js", level: 88, color: "from-slate-700 to-slate-900 dark:from-slate-300 dark:to-white" },
  { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-700" },
  { name: "JavaScript", level: 90, color: "from-yellow-400 to-amber-500" },
  { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-teal-500" },
  { name: "HTML / CSS", level: 95, color: "from-orange-500 to-red-500" },
  { name: "Redux Toolkit", level: 82, color: "from-purple-500 to-violet-600" },
  { name: "Bootstrap", level: 80, color: "from-purple-600 to-indigo-700" },
];

const toolSkills = [
  { name: "Git & GitHub", icon: "🔧", desc: "Version Control" },
  { name: "VS Code", icon: "💻", desc: "Code Editor" },
  { name: "Figma", icon: "🎨", desc: "Design Tool" },
  { name: "Google Analytics", icon: "📊", desc: "Analytics" },
  { name: "Strapi", icon: "⚡", desc: "Headless CMS" },
  { name: "REST APIs", icon: "🔗", desc: "API Integration" },
  { name: "Responsive Design", icon: "📱", desc: "Mobile-First" },
  { name: "Performance Opt.", icon: "🚀", desc: "Web Vitals" },
];

function SkillBar({ name, level, color, animate }: { name: string; level: number; color: string; animate: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            setTimeout(() => setAnimate(true), 300);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-12 bg-[#fafafa] dark:bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="text-xs font-semibold font-mono tracking-widest text-indigo-500 uppercase">
            — Skills & Expertise —
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            What I Work
            <span className="text-gradient"> With</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <div
            className="glass dark:glass-dark rounded-3xl p-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-lg">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frontend Technologies</h3>
            </div>
            <div className="space-y-5">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} animate={animate} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-lg">🛠</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Tools & Practices</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {toolSkills.map((tool, i) => (
                <div
                  key={tool.name}
                  className="gradient-border p-4 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 cursor-default group"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.6s ease ${0.1 + i * 0.06}s, transform 0.6s ease ${0.1 + i * 0.06}s`,
                  }}
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {tool.icon}
                  </div>
                  <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">{tool.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
