import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Terminal, Code2, Cpu, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-transparent flex flex-col justify-between pt-6 pb-12 overflow-hidden">
      {/* Dynamic Red Ambience Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#dc143c]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#ff2e56]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* 2D Overlay Content Grid */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-6 md:px-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pointer-events-none flex-grow">
        
        {/* Left Column: Animated 3D Gradient Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Badge */}
          <div className="animate-appear-1 pointer-events-auto inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#160309]/90 border border-[#dc143c]/50 backdrop-blur-md w-fit mb-6 shadow-[0_0_20px_rgba(220,20,60,0.3)]">
            <Sparkles className="w-4 h-4 text-[#ff2e56] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-200 to-[#ff2e56] uppercase">
              // Software Developer & Problem Solver
            </span>
          </div>

          {/* Main 3D Title with Dynamic Changing Color Gradient & Floating Motion */}
          <h1 className="animate-appear-2 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] drop-shadow-2xl">
            Hi, I'm <br />
            <span className="float-highlight animate-name-gradient text-3d-crimson inline-block transform hover:scale-[1.03] transition-transform duration-300 drop-shadow-[0_0_35px_rgba(220,20,60,0.7)]">
              Priyanshu
            </span>
          </h1>

          {/* Subtitle / Focus Statement with Floating Highlights */}
          <p className="animate-appear-3 mt-6 text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed max-w-xl">
            Building modern, high-speed web apps with{" "}
            <span className="float-highlight font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b8b] to-white border-b-2 border-[#dc143c]/60">
              React & Tailwind
            </span>{" "}
            while relentlessly grinding{" "}
            <span className="float-highlight-delayed font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-300 border-b-2 border-amber-400/60">
              Data Structures & Algorithms
            </span>{" "}
            in C++.
          </p>

          {/* Interactive CTAs */}
          <div className="animate-appear-4 pointer-events-auto mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="group relative px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-white 
                bg-gradient-to-r from-[#dc143c] via-[#b30026] to-[#80001a] 
                border-t border-[#ff6b8b] shadow-[0_10px_30px_rgba(220,20,60,0.5)] 
                hover:shadow-[0_15px_40px_rgba(220,20,60,0.75)] hover:-translate-y-1 active:translate-y-0.5 
                transition-all duration-300 flex items-center gap-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <Link
              to="/about"
              className="group px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-gray-300 
                bg-[#0f0307]/90 border border-[#dc143c]/40 backdrop-blur-md 
                hover:border-[#dc143c] hover:text-white hover:shadow-[0_0_25px_rgba(220,20,60,0.4)] 
                hover:-translate-y-1 active:translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-[#ff2e56]" />
              <span>About Journey</span>
            </Link>
          </div>

          {/* Terminal Status Ticker */}
          <div className="animate-appear-5 mt-10 flex items-center gap-3 text-xs font-mono text-gray-400">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2e56] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#dc143c]"></span>
            </span>
            <span className="tracking-wide">READY FOR COLLABORATION • 2026 EDITION</span>
          </div>
        </div>

        {/* Right Column: Dynamic Live Code HUD Terminal (Niche shift kiya gaya with pt-8 lg:pt-14) */}
        <div className="lg:col-span-5 flex justify-center pointer-events-auto animate-appear-3 pt-8 lg:pt-14">
          <div className="relative group w-full max-w-md rounded-3xl p-[1.5px] bg-gradient-to-b from-[#dc143c] via-[#5c0015] to-[#140006] shadow-[0_0_40px_rgba(220,20,60,0.35)] hover:shadow-[0_0_65px_rgba(220,20,60,0.6)] transition-all duration-500 hover:-translate-y-1.5">
            
            {/* Inner Terminal Container */}
            <div className="w-full rounded-[22px] bg-[#080205]/95 border border-[#dc143c]/40 backdrop-blur-2xl p-5 md:p-6 flex flex-col justify-between overflow-hidden relative font-mono">
              
              {/* Sci-Fi Corner Tech Accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#ff2e56] pointer-events-none" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#ff2e56] pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#ff2e56] pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#ff2e56] pointer-events-none" />

              {/* Terminal Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-900/90 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#dc143c] shadow-[0_0_8px_#dc143c]" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80 shadow-[0_0_8px_#f59e0b]" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80 shadow-[0_0_8px_#10b981]" />
                  <span className="text-[11px] text-gray-400 ml-2 font-mono">
                    priyanshu.config.ts
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[#ff6b8b] uppercase tracking-wider font-bold">
                    LIVE_V2
                  </span>
                  <Terminal className="w-3.5 h-3.5 text-[#ff2e56]" />
                </div>
              </div>

              {/* Live Bio Code Body */}
              <div className="text-xs sm:text-[13px] leading-relaxed space-y-1.5 select-text">
                <div className="text-gray-500 italic">// Engineering human experiences with code</div>
                
                <div>
                  <span className="text-[#ff2e56] font-bold">const</span>{" "}
                  <span className="text-amber-300">developer</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-white">{"{"}</span>
                </div>

                <div className="pl-4">
                  <span className="text-gray-400">name:</span>{" "}
                  <span className="text-emerald-400">"Priyanshu"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-gray-400">role:</span>{" "}
                  <span className="text-rose-300">"Software Developer"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-gray-400">stack:</span>{" "}
                  <span className="text-cyan-400">[</span>
                  <span className="text-emerald-300">"React"</span>,{" "}
                  <span className="text-emerald-300">"Tailwind"</span>,{" "}
                  <span className="text-emerald-300">"JavaScript"</span>
                  <span className="text-cyan-400">]</span>,
                </div>

                <div className="pl-4">
                  <span className="text-gray-400">focusTrack:</span>{" "}
                  <span className="text-emerald-400">"DSA with C++"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-gray-400">learningBatch:</span>{" "}
                  <span className="text-amber-300">"CodeHelp (Love Babbar)"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-gray-400">activeProject:</span>{" "}
                  <span className="text-emerald-400">"CARBYKE Marketplace"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-gray-400">problemSolving:</span>{" "}
                  <span className="text-[#ff2e56]">true</span>,
                </div>

                <div className="pl-4">
                  <span className="text-gray-400">openForRoles:</span>{" "}
                  <span className="text-emerald-400">true</span>
                </div>

                <div className="text-white">{"};"}</div>

                {/* Dynamic Running Shell Line */}
                <div className="pt-3 text-[11px] text-gray-500 border-t border-gray-900/80 flex items-center gap-1.5">
                  <span className="text-[#ff2e56]">dev@engine:~$</span>
                  <span className="text-gray-300">npm run grind:leetcode</span>
                  <span className="w-2 h-4 bg-[#ff2e56] inline-block animate-pulse" />
                </div>
              </div>

              {/* Terminal Footer Status */}
              <div className="mt-4 pt-3 border-t border-gray-900/80 flex items-center justify-between text-[10px] text-gray-500">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  STATUS: COMPILING CLEAN CODE
                </span>
                <span className="text-gray-400">UTF-8 • TS</span>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* ================= BOTTOM STYLISH CYBER SECTION (Space filler before Footer) ================= */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-6 md:px-14 mt-16 lg:mt-24">
        <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#140208]/85 via-[#0a0105]/95 to-[#140208]/85 border border-[#dc143c]/30 backdrop-blur-xl shadow-[0_10px_35px_rgba(220,20,60,0.18)] flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          
          {/* Subtle Top Glowing Line */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#ff2e56] to-transparent opacity-80" />

          {/* Left Text Bio / Philosophy */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1f030c] border border-[#dc143c]/50 flex items-center justify-center text-[#ff2e56] shadow-[0_0_15px_rgba(220,20,60,0.35)] shrink-0 mt-1">
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="float-highlight text-[10px] font-mono tracking-widest text-[#ff6b8b] uppercase font-bold">
                ENGINEERING PHILOSOPHY & PILLARS
              </span>
              <p className="mt-1 text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
                Bridging the gap between{" "}
                <span className="text-white font-semibold border-b border-[#dc143c]/50">
                  pixel-perfect UI responsiveness
                </span>{" "}
                and{" "}
                <span className="text-amber-300 font-semibold border-b border-amber-400/50">
                  optimal asymptotic time complexity
                </span>
                . Dedicated to clean system design, scalable state management, and production-ready code.
              </p>
            </div>
          </div>

          {/* Right Micro Tech Tags */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <span className="px-3.5 py-1.5 rounded-xl bg-[#180209] border border-[#dc143c]/35 text-xs font-mono text-gray-300 flex items-center gap-1.5 shadow-sm">
              <Code2 className="w-3.5 h-3.5 text-[#ff2e56]" />
              Modern Web Stack
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-[#180209] border border-amber-500/35 text-xs font-mono text-amber-300 flex items-center gap-1.5 shadow-sm">
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              Algorithmic Core
            </span>
          </div>

        </div>
      </div>

    </main>
  );
}