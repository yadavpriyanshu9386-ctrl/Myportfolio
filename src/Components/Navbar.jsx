import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Code2, Terminal, Cpu, FolderGit2, Mail, Sparkles } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "ABOUT", path: "/about", icon: Terminal, delayClass: "animate-float-slow" },
    { label: "SKILLS", path: "/skills", icon: Cpu, delayClass: "animate-float-delayed" },
    { label: "PROJECTS", path: "/projects", icon: FolderGit2, delayClass: "animate-float-reverse" },
    { label: "CONTACT", path: "/contact", icon: Mail, delayClass: "animate-float-slow" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-2xl bg-[#080305]/85 border border-[#dc143c]/30 backdrop-blur-xl crimson-glow transition-all duration-300">
        
        {/* Colorful Animated Logo */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#dc143c] via-[#990024] to-[#120006] p-[1.5px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <div className="w-full h-full bg-[#0a0205] rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-[#ff2e56] group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_#dc143c]" />
            </div>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#dc143c] animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#ff2e56]" />
          </div>

          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-[#ff2e56] group-hover:from-[#ff2e56] group-hover:to-amber-300 transition-all duration-500">
              PRIYANSHU<span className="text-[#dc143c] text-glow-red">.DEV</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase -mt-1 group-hover:text-rose-400 transition-colors">
              Core Developer HUD
            </span>
          </div>
        </Link>

        {/* 3D Floating Crimson Red + Obsidian Black Buttons */}
        <nav className="flex items-center gap-3 md:gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`relative group px-4 md:px-5 py-2.5 rounded-xl font-black text-[11px] md:text-xs tracking-wider uppercase transition-all duration-300 ease-out flex items-center gap-2 overflow-hidden ${item.delayClass} ${
                  isActive
                    ? "bg-gradient-to-r from-[#dc143c] to-[#80001a] text-white border-t border-[#ff6b8b] crimson-glow-strong scale-105"
                    : "bg-[#0f0408]/90 text-gray-300 border border-[#dc143c]/40 hover:border-[#dc143c] hover:text-white hover:crimson-glow hover:-translate-y-1.5"
                }`}
              >
                {/* Background Shimmer & Red Flare on Hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#dc143c]/0 via-[#ff2e56]/25 to-[#dc143c]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]" />

                <Icon
                  className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 ${
                    isActive ? "text-white" : "text-[#ff2e56] group-hover:text-white"
                  }`}
                />

                <span className="relative z-10 transition-colors duration-300 font-mono">
                  {item.label}
                </span>

                {/* Micro Bottom Neon Indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 rounded-full ${
                    isActive
                      ? "w-3/4 bg-white shadow-[0_0_8px_#ffffff]"
                      : "w-0 bg-[#ff2e56] group-hover:w-2/3"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}