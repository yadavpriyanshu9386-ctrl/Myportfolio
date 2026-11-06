import React, { useState } from "react";
import {
  Car,
  Sparkles,
  ArrowUpRight,
  Layers,
  ExternalLink,
} from "lucide-react";

// Native GitHub SVG Icon
function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: "carbyke",
      title: "CARBYKE - Automotive Marketplace & Rental Engine",
      tagline: "Buy, Sell & Rent Verified Cars & Motorcycles",
      description:
        "A full-fledged automobile marketplace built to streamline vehicle sales and rentals. Features intuitive 2-wheeler & 4-wheeler category browsing, dynamic pricing computation, listing flows, and verified inspection pipelines. Designed with component-driven React architecture with active Git/GitHub team collaboration.",
      status: "In Active Development • Frontend Ready",
      featured: true,
      category: "web",
      techStack: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Git & GitHub"],
      highlights: [
        { label: "Car & Bike Marketplace", sub: "Buy & Sell Verified", float: true },
        { label: "Rental Engine", sub: "Flexible Duration", float: false },
        { label: "Modern React Core", sub: "Component Driven", float: true },
        { label: "GitHub Pipeline", sub: "Team Collaboration", float: false },
      ],
      githubUrl: "https://github.com/yadavpriyanshu9386-ctrl/carbyke",
      liveUrl: "#",
    },
    {
      id: "portfolio3d",
      title: "3D Cyber Cinematic Developer Portfolio",
      tagline: "High-Performance 3D Web Experience with R3F",
      description:
        "Personal creative developer showcase built with React Three Fiber and Three.js. Includes a dynamic 120+ glowing crimson bubble physics engine, custom HUD glassmorphism layout, and smooth multi-page client routing.",
      status: "Live & Deployed",
      featured: false,
      category: "3d",
      techStack: ["React", "Three.js", "R3F", "Drei", "Tailwind CSS"],
      highlights: [
        { label: "Real-time 3D WebGL Canvas", sub: "Interactive Engine", float: false },
        { label: "Dynamic Floating Physics", sub: "Particle System", float: true },
        { label: "Responsive HUD Overlay", sub: "Cyber Aesthetic", float: false },
      ],
      githubUrl: "https://github.com/yadavpriyanshu9386-ctrl/",
      liveUrl: "#",
    },
    {
      id: "algolab",
      title: "DSA Problem Visualizer & Algorithmic Lab",
      tagline: "Curated C++ Problem Solving Architecture",
      description:
        "Structured repository containing optimized C++ solutions across key algorithmic patterns (Sliding Window, Binary Search, Trees, Graphs, DP). Tracks time-complexity benchmarks and clean OOP problem breakdowns.",
      status: "In Development",
      featured: false,
      category: "dsa",
      techStack: ["C++", "DSA", "Algorithms", "OOPs"],
      highlights: [
        { label: "Optimal Time & Space", sub: "LeetCode Patterns", float: true },
        { label: "Modular OOP Structure", sub: "C++ Standard", float: false },
      ],
      githubUrl: "https://github.com/yadavpriyanshu9386-ctrl/",
      liveUrl: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
  id="projects"
  className="relative w-full min-h-screen pt-15 pb-24 px-6 md:px-16 bg-transparent text-white flex items-center justify-center overflow-hidden"
>
      {/* Background Animated Dynamic Grid & Crimson Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3a000f18_1px,transparent_1px),linear-gradient(to_bottom,#3a000f18_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      
      <div className="animate-flare-drift absolute top-1/4 -left-20 w-[480px] h-[480px] bg-[#dc143c]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="animate-flare-drift absolute bottom-10 -right-20 w-[500px] h-[500px] bg-[#ff2e56]/12 rounded-full blur-[160px] pointer-events-none" style={{ animationDelay: "-3.5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header with Staggered Transition */}
        <div className="flex flex-col items-center md:items-start mb-14">
          
          {/* Step 1: Badge */}
          <div className="stagger-1 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#180208]/90 border border-[#dc143c]/50 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(220,20,60,0.35)]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff2e56] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-200 to-[#ff2e56] uppercase">
              // 03. Production Engineering
            </span>
          </div>

          {/* Step 2: Heading with Continuous Floating Highlight */}
          <h2 className="stagger-2 text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Featured Builds & <br />
            <span className="float-highlight text-transparent bg-clip-text bg-gradient-to-r from-[#ff2e56] via-rose-400 to-amber-300 drop-shadow-[0_0_30px_rgba(220,20,60,0.6)]">
              Digital Masterpieces.
            </span>
          </h2>

          <p className="stagger-3 mt-4 text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed">
            Real-world web applications, interactive experiments, and team-built systems designed with production-ready standards.
          </p>
        </div>

        {/* Step 3: Filter Pills */}
        <div className="stagger-3 flex flex-wrap items-center gap-2.5 mb-10">
          {[
            { id: "all", label: "All Projects" },
            { id: "web", label: "Web Marketplace" },
            { id: "3d", label: "3D & Creative" },
            { id: "dsa", label: "DSA Lab" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-gradient-to-r from-[#dc143c] to-[#990024] text-white shadow-[0_0_25px_rgba(220,20,60,0.5)] border border-[#ff6b8b] scale-105"
                  : "bg-[#0d0206]/80 text-gray-400 border border-gray-800/80 hover:border-[#dc143c]/50 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Step 4: Spotlight Hero Card: CARBYKE */}
          {filteredProjects.find((p) => p.id === "carbyke") && (
            <div className="stagger-4 lg:col-span-12 group relative rounded-3xl bg-gradient-to-br from-[#16020a]/90 via-[#0a0105]/95 to-[#040002] border border-[#dc143c]/45 p-8 md:p-10 backdrop-blur-2xl hover:border-[#ff2e56] transition-all duration-500 shadow-[0_15px_45px_rgba(220,20,60,0.22)] flex flex-col justify-between overflow-hidden">
              
              {/* Radial Top Hover Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#dc143c]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#dc143c]/30 transition-all duration-700" />

              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#dc143c] via-[#b30026] to-[#730016] border border-[#ff6b8b] flex items-center justify-center text-white shadow-[0_0_25px_rgba(220,20,60,0.5)] group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
                      <Car className="w-7 h-7" />
                    </div>
                    <div>
  <span className="float-highlight text-[11px] font-mono tracking-widest text-[#ff6b8b] uppercase font-bold">
    SPOTLIGHT MARKETPLACE PLATFORM
  </span>
  <h3 className="text-2xl md:text-4xl font-black text-white transition-all duration-300">
    <span className="float-highlight-delayed text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-200 to-[#ff2e56] drop-shadow-[0_0_20px_rgba(220,20,60,0.5)]">
      CARBYKE
    </span>
  </h3>
</div>
                  </div>

                  <span className="px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Frontend Complete • Team Collaboration
                  </span>
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mb-8 relative z-10">
                  An online automotive platform engineered to bridge buyers, sellers, and renters of cars and bikes. Features dedicated catalog browsing, pricing calculators, intuitive multi-step listing forms, and verified vehicle inspection workflows.
                </p>

                {/* Feature Highlights with Floating Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-8 relative z-10">
                  {filteredProjects.find((p) => p.id === "carbyke").highlights.map((feat, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-[#140209]/80 border border-[#dc143c]/25 hover:border-[#dc143c]/60 hover:bg-[#1a030c] transition-all duration-300 flex flex-col justify-center"
                    >
                      <span className={`text-xs font-bold text-white tracking-wide ${feat.float ? "float-highlight" : ""}`}>
                        {feat.label}
                      </span>
                      <span className="text-[11px] font-mono text-gray-400 mt-1">{feat.sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer: Tech Stack + Direct Actions */}
              <div className="pt-6 border-t border-gray-900/90 flex flex-wrap items-center justify-between gap-5 relative z-10">
                <div className="flex flex-wrap items-center gap-2">
                  {["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Git & GitHub"].map((tech, idx) => (
                    <span
                      key={tech}
                      className={`px-3.5 py-1 rounded-xl bg-[#140209] border border-[#dc143c]/30 text-xs font-mono text-gray-300 shadow-sm ${
                        idx === 0 ? "float-highlight" : ""
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3.5">
                  {/* Actual CARBYKE GitHub Link */}
                  <a
                    href="https://github.com/yadavpriyanshu9386-ctrl/carbyke"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider text-white bg-[#0e0206] border border-gray-800 hover:border-[#dc143c] hover:shadow-[0_0_20px_rgba(220,20,60,0.35)] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <GithubIcon className="w-4 h-4 text-[#ff2e56]" />
                    <span>View Repository</span>
                  </a>
                  <a
                    href="/contact"
                    className="px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider text-white 
                      bg-gradient-to-r from-[#dc143c] via-[#b30026] to-[#80001a] 
                      border-t border-[#ff6b8b] shadow-[0_10px_25px_rgba(220,20,60,0.5)] 
                      hover:shadow-[0_15px_35px_rgba(220,20,60,0.75)] hover:-translate-y-0.5 active:translate-y-0.5 
                      transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Demo</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Bottom Glowing Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#ff2e56] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </div>
          )}

          {/* Step 5: Secondary Project Cards */}
          {filteredProjects
            .filter((p) => p.id !== "carbyke")
            .map((proj) => (
              <div
                key={proj.id}
                className="stagger-5 lg:col-span-6 group relative p-7 md:p-8 rounded-3xl bg-gradient-to-br from-[#120208]/90 via-[#0a0105]/95 to-[#050003] border border-gray-800/80 hover:border-[#dc143c] transition-all duration-500 ease-out flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(220,20,60,0.3)] overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="float-highlight text-[11px] font-mono text-[#ff6b8b] uppercase tracking-wider font-bold">
                      {proj.status}
                    </span>
                    <Layers className="w-4 h-4 text-gray-600 group-hover:text-[#ff2e56] transition-colors" />
                  </div>

                  <h4 className="text-xl md:text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-rose-200 group-hover:to-[#ff2e56] transition-all mb-2.5">
                    {proj.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-[#140209] text-xs font-mono text-gray-300 border border-[#dc143c]/25"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-900 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-gray-500">Active Pipeline</span>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-white group-hover:text-[#ff2e56] transition-colors flex items-center gap-1.5"
                    >
                      <span>Repository</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2e56] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </div>
            ))}

        </div>
      </div>
    </section>
  );
}