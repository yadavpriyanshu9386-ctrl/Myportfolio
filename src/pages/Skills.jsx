import React, { useState } from "react";
import {
  Cpu,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Award,
} from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    { id: "all", label: "All Arsenal" },
    { id: "languages", label: "Core Languages" },
    { id: "frontend", label: "Frontend Craft" },
    { id: "dsa", label: "DSA & Problem Solving" },
    { id: "tools", label: "Dev Tools" },
  ];

  const skillsList = [
    // Languages
    {
      name: "C++",
      level: "Primary • OOPs & Algorithmic Focus",
      category: "languages",
      highlightBorder: "hover:border-blue-500/80 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]",
      hot: true,
      float: true,
    },
    {
      name: "C Language",
      level: "Memory Management & Pointers",
      category: "languages",
      highlightBorder: "hover:border-cyan-500/80 hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]",
      hot: false,
      float: false,
    },
    {
      name: "Python",
      level: "Scripting, Automation & Logic",
      category: "languages",
      highlightBorder: "hover:border-yellow-500/80 hover:shadow-[0_0_25px_rgba(234,179,8,0.35)]",
      hot: false,
      float: false,
    },
    {
      name: "JavaScript",
      level: "Modern ES6+, Asynchronous & DOM",
      category: "languages",
      highlightBorder: "hover:border-amber-400/80 hover:shadow-[0_0_25px_rgba(251,191,36,0.35)]",
      hot: true,
      float: true,
    },

    // Frontend
    {
      name: "React.js",
      level: "Component Architecture, Hooks & Router",
      category: "frontend",
      highlightBorder: "hover:border-[#ff2e56] hover:shadow-[0_0_25px_rgba(255,46,86,0.4)]",
      hot: true,
      float: true,
    },
    {
      name: "Tailwind CSS",
      level: "Responsive Design & Custom HUD Themes",
      category: "frontend",
      highlightBorder: "hover:border-teal-400/80 hover:shadow-[0_0_25px_rgba(45,212,191,0.35)]",
      hot: true,
      float: true,
    },
    {
      name: "HTML5 & CSS3",
      level: "Semantic Layouts, Flexbox, Grid & Keyframes",
      category: "frontend",
      highlightBorder: "hover:border-orange-500/80 hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]",
      hot: false,
      float: false,
    },

    // Problem Solving
    {
      name: "Data Structures",
      level: "Arrays, LinkedList, Trees, BST, Graphs",
      category: "dsa",
      highlightBorder: "hover:border-[#dc143c] hover:shadow-[0_0_30px_rgba(220,20,60,0.5)]",
      hot: true,
      float: true,
    },
    {
      name: "Algorithms",
      level: "Binary Search, Recursion, Backtracking, DP",
      category: "dsa",
      highlightBorder: "hover:border-purple-500/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]",
      hot: true,
      float: true,
    },
    {
      name: "LeetCode Practice",
      level: "Algorithmic Challenges & Pattern Grinding",
      category: "dsa",
      highlightBorder: "hover:border-amber-500/80 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]",
      hot: true,
      float: true,
    },

    // Tools
    {
      name: "Git",
      level: "Commit Staging, Branching & Merging",
      category: "tools",
      highlightBorder: "hover:border-rose-500/80 hover:shadow-[0_0_25px_rgba(244,63,94,0.35)]",
      hot: false,
      float: false,
    },
    {
      name: "GitHub",
      level: "Team Pull Requests & Project Collaboration",
      category: "tools",
      highlightBorder: "hover:border-gray-400 hover:shadow-[0_0_25px_rgba(156,163,175,0.35)]",
      hot: false,
      float: false,
    },
    {
      name: "VS Code",
      level: "Optimized Debugging, Extensions & Terminal",
      category: "tools",
      highlightBorder: "hover:border-sky-400/80 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]",
      hot: false,
      float: false,
    },
    {
      name: "Vite",
      level: "HMR Bundling & Ultra-Fast Local Builds",
      category: "tools",
      highlightBorder: "hover:border-purple-500/80 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]",
      hot: false,
      float: false,
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillsList
      : skillsList.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-transparent ..."
    >
      {/* Background Animated Dynamic Grid & Crimson Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3a000f18_1px,transparent_1px),linear-gradient(to_bottom,#3a000f18_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="animate-flare-drift absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[#dc143c]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="animate-flare-drift absolute bottom-10 -left-20 w-[450px] h-[450px] bg-[#ff2e56]/12 rounded-full blur-[150px] pointer-events-none" style={{ animationDelay: "-3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Step 1 & 2: Header with Stagger & Floating Heading Highlight */}
        <div className="flex flex-col items-center md:items-start mb-12">
          
          {/* Badge */}
          <div className="stagger-1 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#180208]/90 border border-[#dc143c]/50 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(220,20,60,0.35)]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff2e56] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-200 to-[#ff2e56] uppercase">
              // 02. Technical Capabilities
            </span>
          </div>

          {/* Heading */}
          <h2 className="stagger-2 text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Skills, Tools & <br />
            <span className="float-highlight text-transparent bg-clip-text bg-gradient-to-r from-[#ff2e56] via-rose-400 to-amber-300 drop-shadow-[0_0_30px_rgba(220,20,60,0.6)]">
              Problem Solving Power.
            </span>
          </h2>

          <p className="stagger-3 mt-4 text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed">
            A battle-tested set of languages, engineering frameworks, and dedicated{" "}
            <span className="float-highlight-delayed font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-300 border-b border-amber-400/50">
              DSA in C++
            </span>{" "}
            preparation used to build scalable web applications.
          </p>
        </div>

        {/* Step 3: Category Filter Pills */}
        <div className="stagger-3 flex flex-wrap items-center gap-2.5 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-[#dc143c] to-[#990024] text-white shadow-[0_0_25px_rgba(220,20,60,0.5)] border border-[#ff6b8b] scale-105"
                  : "bg-[#0d0206]/80 text-gray-400 border border-gray-800/80 hover:border-[#dc143c]/50 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Step 4: Skills High-Visibility Grid with Individual Floating Highlights */}
        <div className="stagger-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-3xl bg-gradient-to-br from-[#120208]/90 via-[#0a0105]/95 to-[#050003] border border-gray-800/80 ${skill.highlightBorder} transition-all duration-500 ease-out cursor-pointer overflow-hidden hover:-translate-y-1`}
            >
              {skill.hot && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#ff2e56]/20 to-transparent pointer-events-none rounded-bl-3xl" />
              )}

              <div className="flex items-start justify-between gap-3 relative z-10">
                <div className="flex items-center gap-4">
                  {/* Glowing Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-[#1c020a] border border-[#dc143c]/40 flex items-center justify-center text-[#ff2e56] group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#dc143c] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(220,20,60,0.25)]">
                    <Cpu className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3
                        className={`text-lg font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-rose-200 group-hover:to-[#ff2e56] transition-all ${
                          skill.float ? "float-highlight" : ""
                        }`}
                      >
                        {skill.name}
                      </h3>
                      {skill.hot && (
                        <span className="float-highlight-delayed px-2 py-0.5 rounded-md bg-[#dc143c]/20 border border-[#dc143c]/50 text-[10px] font-mono text-[#ff6b8b] uppercase tracking-wider font-bold">
                          HOT
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-gray-400 mt-1 leading-snug">
                      {skill.level}
                    </p>
                  </div>
                </div>

                <CheckCircle2 className="w-4 h-4 text-gray-700 group-hover:text-[#ff2e56] transition-colors shrink-0 mt-1 drop-shadow-[0_0_6px_#dc143c]" />
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2e56] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </div>
          ))}
        </div>

        {/* Step 5: Love Babbar / CodeHelp Batch Dedicated Spotlight Card */}
        <div className="stagger-5 mt-14 relative group p-8 md:p-10 rounded-3xl bg-gradient-to-r from-[#17030a] via-[#100106] to-[#070003] border border-[#dc143c]/50 shadow-[0_15px_45px_rgba(220,20,60,0.25)] hover:border-[#ff2e56] transition-all duration-500 overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#dc143c]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#dc143c]/25 transition-all" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dc143c] to-[#730016] border border-[#ff6b8b] flex items-center justify-center text-white shrink-0 shadow-[0_0_25px_rgba(220,20,60,0.5)] group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="float-highlight px-3 py-1 rounded-full bg-[#2a030f] border border-[#dc143c]/60 text-[11px] font-mono font-bold text-[#ff6b8b] uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#ff2e56]" />
                    Rigorous Training Program
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Enrolled & Active DSA Batch
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-rose-200 group-hover:to-amber-300 transition-all">
                  DSA Mastery with{" "}
                  <span className="float-highlight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-[#ff2e56]">
                    CodeHelp by Love Babbar
                  </span>
                </h3>

                <p className="mt-3 text-sm text-gray-300 max-w-2xl leading-relaxed">
                  Actively pursuing an extensive Data Structures & Algorithms curriculum through the official CodeHelp cohort. Focused on algorithmic intuition, time-space complexity optimization, deep recursion, dynamic programming, and standard FAANG/Product-level interview problem patterns in C++.
                </p>

                {/* Topics Covered Badges */}
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {[
                    "C++ Fundamentals",
                    "Recursion & Backtracking",
                    "Linked List & Stacks",
                    "Trees & BST",
                    "Graphs & DP",
                    "Daily LeetCode Grinding",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-[#140209] border border-[#dc143c]/30 text-xs font-mono text-gray-300 hover:border-[#ff2e56] transition-colors"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Official Link Button */}
            <a
              href="https://www.codehelp.in/"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 px-7 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-white 
                bg-gradient-to-r from-[#dc143c] via-[#b30026] to-[#80001a] 
                border-t border-[#ff6b8b] shadow-[0_10px_30px_rgba(220,20,60,0.5)] 
                hover:shadow-[0_15px_40px_rgba(220,20,60,0.75)] hover:-translate-y-1 active:translate-y-0.5 
                transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
            >
              <span>Visit CodeHelp Portal</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}