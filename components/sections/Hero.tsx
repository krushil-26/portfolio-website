"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Code2 } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-enter").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#fafafa] dark:bg-[#0a0a0f]"
    >
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 mt-6 sm:px-6 lg:px-8 py-32 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            {/* <div
              className="animate-on-enter"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Available for new opportunities
              </span>
            </div> */}

            {/* Heading */}
            <div
              className="animate-on-enter"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <p className="text-base font-medium text-slate-500 dark:text-slate-400 mb-2 font-mono tracking-wide">
                Hi there, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                Krushil
                <br />
                <span className="text-gradient">Thakkar</span>
              </h1>
            </div>

            {/* Role */}
            <div
              className="animate-on-enter"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                Senior Frontend Developer
                <span className="text-indigo-500"> / </span>
                React.js Specialist
              </p>
            </div>

            {/* Description */}
            <div
              className="animate-on-enter"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg">
                Crafting scalable, performant web applications with{" "}
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">4+ years</span> of expertise in React.js,
                Next.js & TypeScript. Passionate about clean code and exceptional user experiences.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="animate-on-enter flex flex-wrap gap-4"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <button onClick={() => scrollTo("#projects")} className="btn-primary text-base py-3.5 px-7">
                View Projects
              </button>
              <button onClick={() => scrollTo("#contact")} className="btn-outline text-base py-3.5 px-7">
                Contact Me
              </button>
            </div>

            {/* Stats */}
            <div
              className="animate-on-enter flex gap-8 pt-4"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              {[
                { value: "4+", label: "Years Exp." },
                { value: "5+", label: "Projects Done" },
                { value: "3", label: "Companies" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className="animate-on-enter flex justify-center lg:justify-end"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <div className="relative">
              {/* Main avatar card */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                {/* Rotating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-300/30 dark:border-indigo-700/30 animate-spin-slow" />
                <div className="absolute inset-4 rounded-full border border-indigo-400/20 dark:border-indigo-600/20" />

                {/* Avatar */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950/60 dark:to-purple-950/60 overflow-hidden flex items-center justify-center glow-primary">
                  {/* Stylized avatar illustration */}
                  <div className="relative w-full h-full flex items-end justify-center overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-500/30" />

                    {/* Monogram */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl font-bold text-gradient opacity-20 select-none">KT</span>
                    </div>

                    {/* Developer icon */}
                    <div className="relative z-10 mb-8 text-center">
                      {/* <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/40">
                        <Code2 size={44} className="text-white" strokeWidth={1.5} />
                      </div> */}
                      <p className="mt-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400 font-mono">
                        &lt;Frontend Dev /&gt;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 glass dark:glass-dark rounded-2xl px-3 py-2 shadow-lg shadow-indigo-500/10 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47m-6.69.51c.15-.26.29-.54.45-.8-.15-.27-.3-.54-.44-.81a20.6 20.6 0 0 0-.26 1.61zm7.08-.51.3.51c.1-.28.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.29.51m-.71 5.74c.63-.35.82-1.82.31-3.96a22.7 22.7 0 0 1-2.4.36c-.48.67-.99 1.31-1.51 1.9 1.59 1.5 2.97 2.08 3.6 1.7M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/></svg>
                    </div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">React.js</span>
                  </div>
                </div>

                <div
                  className="absolute -bottom-4 -left-4 glass dark:glass-dark rounded-2xl px-3 py-2 shadow-lg shadow-purple-500/10 animate-float"
                  style={{ animationDelay: "3s" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474.0001.9708.0118 1.1283.1005 1.8025.6711 5.0187 4.0955 9.4494 8.9345 11.2346.8234.313 1.6885.5282 2.6454.6588.3646.05 1.9731.05 2.3378 0 1.6518-.2234 3.0534-.7307 4.3943-1.5827.2105-.1351.2507-.1704.2221-.1917-.0188-.0136-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0234 3.509-.0081 3.3802-.0094 3.5162-.0516 3.596-.061.115-.108.1618-.2065.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1087-.068a.4949.4949 0 0 1-.1537-.1500l-.0528-.0697-.0026-4.703-.0035-4.7054.0772-.0969c.04-.0539.1248-.1207.1836-.1502.1023-.0505.1393-.0551.5398-.0551.4763 0 .5541.0181.6755.1504.0376.0388 1.3819 2.0613 2.9909 4.5006l4.7685 7.1476.1924-.1229c1.6945-1.0860 3.0827-2.5878 3.9478-4.3224.7976-1.6408 1.2208-3.5049 1.2208-5.3538 0-1.3284-.1729-2.5955-.5218-3.8012C21.8951 2.8375 17.4507.0042 12.5225.0005 12.1570 0 11.7383.0013 11.5725 0z"/></svg>
                    </div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Next.js</span>
                  </div>
                </div>

                <div
                  className="absolute top-1/2 -right-10 glass dark:glass-dark rounded-2xl px-3 py-2 shadow-lg shadow-blue-500/10 animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">TS</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-indigo-500 transition-colors group"
        aria-label="Scroll to about"
      >
        <span className="text-xs font-medium font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce group-hover:text-indigo-500" />
      </button>
    </section>
  );
}
