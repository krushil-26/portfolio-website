"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, ShoppingBag, Calendar, User, Shirt, Layers } from "lucide-react";

const projects = [
  {
    title: "LauncheStore",
    description:
      "Full-featured e-commerce platform with Super Admin, Vendor Admin, Branch Admin, and User panels. Manages products, orders, inventory, and analytics via Google Analytics integration.",
    tech: ["Next.js", "Redux Toolkit", "TypeScript", "Tailwind CSS", "Google Analytics"],
    icon: ShoppingBag,
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "from-blue-50 to-indigo-50",
    bgDark: "from-blue-950/30 to-indigo-950/30",
    category: "E-Commerce",
    live: "https://launchestore.com/",
    github: "#",
  },
  {
    title: "Fashion E-commerce Platform",
    description:
      "Modern e-commerce web application focused on fashion products. Features product browsing, category filtering, responsive UI, and smooth user experience. Built with reusable components and optimized performance for fast loading and seamless navigation.",
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "REST API", "CSS3"],
    icon: Shirt,
    gradient: "from-orange-400 to-rose-500",
    bgLight: "from-orange-50 to-rose-50",
    bgDark: "from-orange-950/30 to-rose-950/30",
    category: "E-Commerce",
    live: "https://krushil-ecommerce-fashion.vercel.app/",
    github: "#",
  },
  {
    title: "Event Management Portal",
    description:
      "Comprehensive portal managing event flows and booking. Features QR code scanning for check-ins, dual flows for event managers and end users, with seamless booking management.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Bootstrap", "CSS3"],
    icon: Calendar,
    gradient: "from-purple-500 to-violet-600",
    bgLight: "from-purple-50 to-violet-50",
    bgDark: "from-purple-950/30 to-violet-950/30",
    category: "Portal",
    live: "https://2n1t3.com/",
    github: "#",
  },
  {
    title: "Client Showcase Site",
    description:
      "Portfolio website with Strapi CMS integration enabling easy content management. Fully responsive, performance-optimized with modern design principles and fast load times.",
    tech: ["Next.js", "Strapi CMS", "JavaScript", "CSS3", "Tailwind CSS"],
    icon: User,
    gradient: "from-green-400 to-emerald-600",
    bgLight: "from-green-50 to-emerald-50",
    bgDark: "from-green-950/30 to-emerald-950/30",
    category: "CMS",
    live: "https://alessiograncini.com/",
    github: "#",
  },
  {
    title: "Admin Dashboard UI",
    description:
      "Responsive admin dashboard with data visualization, role-based components, chart integrations, and modular architecture. Built for performance with real-time data rendering.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "REST API", "Redux"],
    icon: Layers,
    gradient: "from-cyan-400 to-blue-500",
    bgLight: "from-cyan-50 to-blue-50",
    bgDark: "from-cyan-950/30 to-blue-950/30",
    category: "Dashboard",
    live: "#",
    github: "#",
  }
  // {
  //   title: "Component Library",
  //   description:
  //     "Custom React component library with reusable UI elements, design tokens, and consistent theming. Includes buttons, forms, modals, and data display components.",
  //   tech: ["React.js", "TypeScript", "Storybook", "Tailwind CSS"],
  //   icon: Code2,
  //   gradient: "from-amber-400 to-orange-500",
  //   bgLight: "from-amber-50 to-orange-50",
  //   bgDark: "from-amber-950/30 to-orange-950/30",
  //   category: "Library",
  //   live: "#",
  //   github: "#",
  // },
];

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-12 bg-white dark:bg-[#0d0d16]">
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
            — Featured Work —
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Selected
            <span className="text-gradient"> Projects</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            A collection of projects that showcase my expertise in building real-world web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="group relative flex flex-col h-full rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800/50 bg-white dark:bg-slate-900/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-400 hover:-translate-y-2"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.98)",
                  transition: `opacity 0.6s ease ${0.05 * i}s, transform 0.6s ease ${0.05 * i}s, box-shadow 0.3s ease, translate 0.3s ease`,
                }}
              >
                {/* Card thumbnail */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${project.bgLight} dark:${project.bgDark} overflow-hidden`}
                >
                  {/* Background decoration */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-400`}
                    >
                      <Icon size={28} className="text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-medium rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5 mt-auto"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
