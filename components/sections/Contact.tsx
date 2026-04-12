"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Send, MapPin, MessageSquare } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-white dark:bg-[#0d0d16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="text-xs font-semibold font-mono tracking-widest text-indigo-500 uppercase">
            — Get In Touch —
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Let&apos;s Work
            <span className="text-gradient"> Together</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          
          {/* Left Side: Info Cards */}
          <div
            className="lg:col-span-2 space-y-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            {/* Status Card */}
            <div className="gradient-border p-6 group hover:border-indigo-500/50 transition-all duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <MessageSquare size={24} className="text-indigo-500 mb-3" />
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">
                    Let&apos;s connect
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Open for new opportunities
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Available</span>
                </div>
              </div>
            </div>

            {/* Direct Links */}
            <div className="space-y-3">
              <a
                href="mailto:krushilthakkar00@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl glass dark:glass-dark hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/20">
                  <Mail size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 dark:text-slate-500">Email</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    krushilthakkar00@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/krushil-thakkar-237661213/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass dark:glass-dark hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                  <FaLinkedinIn size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 dark:text-slate-500">LinkedIn</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    krushil-thakkar
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass dark:glass-dark">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-rose-500/20">
                  <MapPin size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 dark:text-slate-500">Location</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(20px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div className="gradient-border p-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending || sent}
                  className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/25"
                >
                  {sent ? (
                    <>
                      <span className="text-xl">✓</span> Sent Successfully
                    </>
                  ) : sending ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}