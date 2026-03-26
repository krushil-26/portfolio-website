"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, CalendarDays, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "React.js Developer",
    company: "CMExpertise Infotech Pvt. Ltd",
    location: "Ahmedabad, India",
    period: "Feb 2025 – Present",
    duration: "Current",
    type: "Full-time",
    color: "from-indigo-500 to-purple-600",
    dotColor: "bg-indigo-500",
    highlights: [
      "Developed & maintained an E-commerce platform using Next.js, Redux Toolkit, JavaScript, and Tailwind CSS",
      "Implemented role-based access control across Super Admin, Vendor Admin, Branch Admin, and User panels",
      "Integrated Google Analytics for tracking page views, user interactions, and conversions",
      "Built scalable, secure, high-performance systems with emphasis on user experience and real-time insights",
      "Managed product listings, orders, and user accounts efficiently at scale",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Incipient Infotech",
    location: "Ahmedabad, India",
    period: "Aug 2023 – Feb 2025",
    duration: "1.5 years",
    type: "Full-time",
    color: "from-blue-500 to-cyan-600",
    dotColor: "bg-blue-500",
    highlights: [
      "Specialized in creating robust web applications using React.js, TypeScript, Bootstrap, and Tailwind CSS",
      "Built user-friendly, responsive, high-performance applications with modern frameworks",
      "Collaborated cross-functionally to deliver high-quality results on time",
      "Committed to continuous improvement and adherence to industry best practices",
      "Actively sought opportunities to learn cutting-edge technologies and methodologies",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "Surekha Technology",
    location: "Ahmedabad, India",
    period: "Jan 2022 – Mar 2023",
    duration: "1 year 2 months",
    type: "Full-time",
    color: "from-purple-500 to-pink-600",
    dotColor: "bg-purple-500",
    highlights: [
      "Developed UI components with strong focus on responsive design using CSS",
      "Leveraged fundamental design principles to create visually appealing, adaptable user interfaces",
      "Ensured seamless user experiences across various devices and screen sizes",
      "Utilized Bootstrap extensively for streamlined CSS styling and visual consistency",
      "Collaborated with JavaScript and libraries to implement interactive and functional components",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-12 bg-[#fafafa] dark:bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            — Work History —
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Professional
            <span className="text-gradient"> Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-blue-500 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="relative pl-16"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-20px)",
                  transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 flex items-center justify-center">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                    <Building2 size={17} className="text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="gradient-border p-6 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="font-semibold text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                        <span className="text-slate-300 dark:text-slate-700">·</span>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{exp.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                        <CalendarDays size={14} className="text-indigo-400" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      {/* <span
                        className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                          exp.duration === "Current"
                            ? "bg-green-100 dark:bg-green-950/40 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800/50"
                            : "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50"
                        }`}
                      >
                        {exp.duration === "Current" ? (
                          <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            {exp.duration}
                          </span>
                        ) : exp.duration}
                      </span> */}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {exp.highlights.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 size={15} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education card */}
        <div
          className="mt-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-white"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
          }}
        >
          <p className="text-xs font-mono tracking-widest text-indigo-200 uppercase mb-1">Education</p>
          <h3 className="text-2xl font-bold">Bachelor of Engineering</h3>
          <p className="text-indigo-200 mt-1">LJ Institute of Engineering and Technology, Ahmedabad</p>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2">
              <span className="text-xl font-bold">8.46</span>
              <span className="text-indigo-200 text-sm">CGPA</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2">
              <span className="font-semibold">2018 - 2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
