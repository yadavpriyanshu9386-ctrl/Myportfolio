import React from "react";
import { Link } from "react-router-dom";
import { Code2, ArrowUpRight, Sparkles, Terminal, Heart } from "lucide-react";

// ================= NATIVE SOCIAL ICONS ================= //

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ThreadsIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c3.2 0 6 1.8 7.3 4.5" />
      <path d="M15.5 12c0 2.2-1.8 3.5-3.5 3.5S8.5 14.2 8.5 12s1.8-3.5 3.5-3.5c2.3 0 3.7 1.4 3.7 3.5v1.2c0 1.2.8 1.8 1.8 1.8 1.5 0 2.5-1.3 2.5-3" />
    </svg>
  );
}

function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Footer() {
  const navLinks = [
    { label: "Home", path: "/", floatDelay: "animate-pulse" },
    { label: "About", path: "/about", floatDelay: "" },
    { label: "Skills", path: "/skills", floatDelay: "" },
    { label: "Projects", path: "/projects", floatDelay: "" },
    { label: "Contact", path: "/contact", floatDelay: "animate-pulse" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yadavpriyanshu9386-ctrl",
      icon: GithubIcon,
      textColor: "text-[#ff4d6d]",
      iconBg: "bg-[#330814]/90",
      borderGlow: "border-[#ff2e56]/60 shadow-[0_0_20px_rgba(255,46,86,0.35)] hover:shadow-[0_0_30px_rgba(255,46,86,0.7)] hover:border-[#ff4d6d]",
      pulseDot: "bg-[#ff2e56]",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/Priyanshukr-ydv",
      icon: LinkedinIcon,
      textColor: "text-[#38bdf8]",
      iconBg: "bg-[#0b1d2e]/90",
      borderGlow: "border-[#38bdf8]/50 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.65)] hover:border-[#38bdf8]",
      pulseDot: "bg-[#38bdf8]",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/priyanshukr_ydv/",
      icon: InstagramIcon,
      textColor: "text-[#fb7185]",
      iconBg: "bg-[#300a18]/90",
      borderGlow: "border-[#fb7185]/50 shadow-[0_0_20px_rgba(251,113,133,0.3)] hover:shadow-[0_0_30px_rgba(251,113,133,0.65)] hover:border-[#fb7185]",
      pulseDot: "bg-[#fb7185]",
    },
    {
      name: "Threads",
      url: "https://www.threads.net/@priyanshukr_ydv",
      icon: ThreadsIcon,
      textColor: "text-[#c084fc]",
      iconBg: "bg-[#250d2e]/90",
      borderGlow: "border-[#c084fc]/50 shadow-[0_0_20px_rgba(192,132,252,0.3)] hover:shadow-[0_0_30px_rgba(192,132,252,0.65)] hover:border-[#c084fc]",
      pulseDot: "bg-[#c084fc]",
    },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#1f020a] via-[#140106] to-[#0a0003] border-t-2 border-[#dc143c]/50 pt-8 pb-6 px-6 md:px-14 overflow-hidden shadow-[0_-15px_40px_rgba(220,20,60,0.25)]">
      
      {/* Dynamic Red & Crimson Ambient Mesh */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[160px] bg-[#dc143c]/25 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[140px] bg-[#ff2e56]/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Futuristic Crimson Top Laser Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5/6 h-[2px] bg-gradient-to-r from-transparent via-[#ff2e56] to-transparent shadow-[0_0_20px_#ff2e56]" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Upper Layer: Logo, Floating Nav Buttons & Colorful Floating Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#dc143c]/25">
          
          {/* Brand Logo with Glow */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#ff2e56] via-[#dc143c] to-[#690014] border-2 border-[#ff859f] flex items-center justify-center text-white shadow-[0_0_25px_rgba(220,20,60,0.6)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-[#ff3b65] drop-shadow-[0_0_15px_rgba(220,20,60,0.5)]">
                PRIYANSHU<span className="text-[#ff2e56]">.DEV</span>
              </span>
            </Link>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2a0410] border border-[#ff2e56]/40 text-[11px] font-mono text-rose-200 shadow-inner">
              <Terminal className="w-3.5 h-3.5 text-[#ff2e56] animate-pulse" />
              CSE '26
            </span>
          </div>

          {/* Floating Nav Buttons */}
          <nav className="flex flex-wrap items-center justify-center gap-2.5">
            {navLinks.map((item, idx) => (
              <Link
                key={item.label}
                to={item.path}
                className={`group px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-rose-100 bg-gradient-to-b from-[#2a0511] to-[#1a0209] border border-[#dc143c]/40 hover:border-[#ff2e56] hover:bg-[#3d0718] hover:text-white shadow-[0_4px_15px_rgba(220,20,60,0.2)] hover:shadow-[0_0_25px_rgba(220,20,60,0.55)] hover:-translate-y-1 active:translate-y-0.5 transition-all duration-300 flex items-center gap-1.5 ${
                  idx % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#ff4d6d] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            ))}
          </nav>

          {/* Glowing Colorful Floating Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  title={item.name}
                  className={`group relative w-11 h-11 rounded-2xl ${item.iconBg} border-2 ${item.borderGlow} flex items-center justify-center ${item.textColor} transition-all duration-300 hover:scale-115 hover:-translate-y-1.5 active:scale-95 cursor-pointer`}
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-120 drop-shadow-[0_0_8px_currentColor]" />
                  
                  {/* Floating Top Beacon Dot */}
                  <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full ${item.pulseDot} shadow-[0_0_8px_currentColor] animate-ping opacity-60`} />
                  <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full ${item.pulseDot}`} />
                </a>
              );
            })}
          </div>

        </div>

        {/* Lower Layer: Status Info & Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          
          {/* Status Hook */}
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#20030c] border border-[#dc143c]/30 shadow-[0_0_15px_rgba(220,20,60,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-gray-300">Open for Roles</span>
            <span className="text-rose-400">•</span>
            <a
              href="mailto:yadavpriyanshu9386@gmail.com"
              className="text-[#ff4d6d] font-semibold hover:text-white transition-colors"
            >
              yadavpriyanshu9386@gmail.com
            </a>
          </div>

          {/* Credits */}
          <div className="flex items-center gap-2 text-rose-300/80">
            <span>© 2026 Priyanshu Kumar</span>
            <span>•</span>
            <span className="text-[#ff3b65] font-semibold flex items-center gap-1.5 drop-shadow-[0_0_8px_rgba(255,59,101,0.5)]">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Crafted in Crimson & Code
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}