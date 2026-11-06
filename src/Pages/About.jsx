import React, { useState } from "react";
import { Terminal, Code2, Brain, Rocket, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

export default function About() {
  const [activeCard, setActiveCard] = useState(null);

  const journeyDetails = [
    {
      title: "Aspiring Software Developer",
      desc: "Deep focus on building scalable web apps with React & clean architecture, while constantly leveling up core fundamentals.",
      icon: Code2,
      tag: "FRONTEND & ARCHITECTURE",
      floatClass: "animate-card-float-1",
      accent: "from-[#dc143c] via-[#ff2e56] to-rose-400",
    },
    {
      title: "DSA & Problem Solving",
      desc: "Actively solving algorithmic challenges to build strong logic, time-complexity awareness, and analytical thinking.",
      icon: Brain,
      tag: "ALGORITHMS & C++",
      floatClass: "animate-card-float-2",
      accent: "from-amber-400 via-rose-500 to-[#dc143c]",
    },
    {
      title: "Relentless Curiosity",
      desc: "Love exploring modern web technologies, 3D interactive graphics, and turning ideas into smooth user-centric digital products.",
      icon: Rocket,
      tag: "INNOVATION & EXPLORATION",
      floatClass: "animate-card-float-3",
      accent: "from-[#ff2e56] via-purple-500 to-[#dc143c]",
    },
  ];

  const techHighlights = [
    "Computer Science & Engineering Background",
    "Frontend Mastery (React, Tailwind CSS, Modern JS)",
    "Data Structures & Algorithms Enthusiast",
    "Creative 3D Web & Interactive UI Experimenter",
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-transparent ..."
    >
      {/* Background Animated Dynamic Grid & Moving Flares */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3a000f18_1px,transparent_1px),linear-gradient(to_bottom,#3a000f18_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="animate-flare-drift absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[#dc143c]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="animate-flare-drift absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#ff2e56]/12 rounded-full blur-[160px] pointer-events-none" style={{ animationDelay: "-4s" }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header with Step-by-Step Stagger */}
        <div className="flex flex-col items-center md:items-start mb-14">
          
          {/* Step 1: Badge Appears */}
          <div className="stagger-1 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#180208]/90 border border-[#dc143c]/50 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(220,20,60,0.35)]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff2e56] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-200 to-[#ff2e56] uppercase">
              // 01. Developer Dossier
            </span>
          </div>

          {/* Step 2: Heading Appears + Floating Highlight Words */}
          <h2 className="stagger-2 text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Building with{" "}
            <span className="float-highlight text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-amber-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              Logic,
            </span>{" "}
            <br />
            <span className="float-highlight-delayed text-transparent bg-clip-text bg-gradient-to-r from-[#ff2e56] via-rose-400 to-amber-300 drop-shadow-[0_0_30px_rgba(220,20,60,0.6)]">
              Crafting with Passion.
            </span>
          </h2>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Step 3: Left Column Terminal Appears */}
          <div className="stagger-3 lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#120208]/90 via-[#0a0105]/95 to-[#050003] border border-[#dc143c]/35 p-6 md:p-8 backdrop-blur-2xl shadow-[0_15px_40px_rgba(220,20,60,0.18)] flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2e56] to-transparent opacity-75 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-900 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#dc143c] shadow-[0_0_8px_#dc143c]" />
                  <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                  <span className="text-xs font-mono text-gray-500 ml-2 tracking-wider">
                    priyanshu@core-dev:~/profile$
                  </span>
                </div>
                <Terminal className="w-4 h-4 text-[#ff2e56]" />
              </div>

              {/* Bio Narrative with Staggered Lines & Floating Highlights */}
              <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed font-sans">
                <p>
                  Hey there! I'm{" "}
                  <span className="float-highlight text-white font-black tracking-wide border-b border-[#ff2e56]/50">
                    Priyanshu
                  </span>
                  , a developer who enjoys crafting fast, interactive digital experiences that live on the web.
                </p>
                <p className="text-gray-400">
                  Right now, I'm focusing heavily on building web applications using{" "}
                  <span className="float-highlight font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff2e56] to-rose-300 border-b border-[#dc143c]/50">
                    React & Tailwind CSS
                  </span>
                  , while simultaneously sharpening my problem-solving edge through rigorous{" "}
                  <span className="float-highlight-delayed font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-300 border-b border-amber-400/50">
                    DSA in C++
                  </span>{" "}
                  practice.
                </p>
                <p className="text-gray-400">
                  For me, coding isn't just about syntax—it's the rush of picking up a complex concept, breaking it down, and turning it into something functional and visually captivating.
                </p>
              </div>

              {/* Core Checklist Badges */}
              <div className="mt-8 pt-6 border-t border-gray-900/90 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {techHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-[#140209]/60 border border-[#dc143c]/20 hover:border-[#dc143c]/60 hover:bg-[#1a030c] transition-all duration-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#ff2e56] shrink-0 drop-shadow-[0_0_6px_#dc143c]" />
                    <span className="text-xs font-mono text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-900 flex items-center justify-between text-xs font-mono text-gray-500">
              <span className="text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                ACTIVE ENGINE • EXPLORING & BUILDING
              </span>
              <span className="text-gray-600">UTF-8 / REACT 19</span>
            </div>
          </div>

          {/* Step 4: Right Column Cards Appear */}
          <div className="stagger-4 lg:col-span-5 flex flex-col gap-5 justify-between">
            {journeyDetails.map((detail, index) => {
              const Icon = detail.icon;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`${detail.floatClass} group relative p-6 rounded-3xl bg-gradient-to-r from-[#120208]/90 via-[#0a0105]/95 to-[#050003] border border-gray-800/80 hover:border-[#dc143c] transition-all duration-500 ease-out hover:shadow-[0_15px_35px_rgba(220,20,60,0.35)] cursor-pointer overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${detail.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none`}
                  />

                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <span className="float-highlight text-[10px] font-mono tracking-widest text-[#ff2e56] uppercase font-bold">
                      {detail.tag}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-gray-700 group-hover:text-[#ff2e56] transition-colors" />
                  </div>

                  <div className="flex items-center gap-4 mb-3 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#1c020a] border border-[#dc143c]/40 flex items-center justify-center text-[#ff2e56] group-hover:bg-[#dc143c] group-hover:text-white group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(220,20,60,0.25)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-rose-200 group-hover:to-[#ff2e56] transition-all">
                      {detail.title}
                    </h3>
                  </div>

                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed pl-16 relative z-10 group-hover:text-gray-300 transition-colors">
                    {detail.desc}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#ff2e56] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}