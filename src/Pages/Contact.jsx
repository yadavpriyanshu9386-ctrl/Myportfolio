import React, { useState } from "react";
import {
  Phone,
  Mail,
  Send,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Radio,
  ShieldCheck,
  AlertCircle,
  Loader2,
} from "lucide-react";

// Native SVG for Instagram
function InstagramIcon({ className = "w-5 h-5" }) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Native SVG for LinkedIn
function LinkedinIcon({ className = "w-5 h-5" }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const contactData = [
    {
      key: "phone",
      label: "Direct Phone & WhatsApp",
      value: "+91 7050862XXX", // Last 3 digits masked for privacy
      copyValue: "+91 7050862XXX",
      href: "https://wa.me/917050862592",
      icon: Phone,
      tag: "INSTANT CONNECT",
      glowBorder: "hover:border-emerald-500/80 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]",
    },
    {
      key: "email",
      label: "Official Email Address",
      value: "yadavpriyanshu9386@gmail.com",
      copyValue: "yadavpriyanshu9386@gmail.com",
      href: "mailto:yadavpriyanshu9386@gmail.com",
      icon: Mail,
      tag: "PRIMARY INBOX",
      glowBorder: "hover:border-[#ff2e56] hover:shadow-[0_0_25px_rgba(255,46,86,0.4)]",
    },
    {
      key: "insta",
      label: "Instagram Profile",
      value: "@priyanshukr_ydv",
      copyValue: "https://www.instagram.com/priyanshukr_ydv/",
      href: "https://www.instagram.com/priyanshukr_ydv/",
      icon: InstagramIcon,
      tag: "SOCIAL & UPDATES",
      glowBorder: "hover:border-pink-500/80 hover:shadow-[0_0_25px_rgba(236,72,153,0.35)]",
    },
    {
      key: "linkedin",
      label: "LinkedIn Network",
      value: "Priyanshu Kumar",
      copyValue: "https://www.linkedin.com/in/Priyanshukr-ydv",
      href: "https://www.linkedin.com/in/Priyanshukr-ydv",
      icon: LinkedinIcon,
      tag: "PROFESSIONAL",
      glowBorder: "hover:border-blue-500/80 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]",
    },
  ];

  const handleCopy = (text, key) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
     const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", contact: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen pt-15 pb-24 px-6 md:px-16 bg-transparent text-white flex items-center justify-center overflow-hidden"
    >
      {/* Background Animated Dynamic Grid & Crimson Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3a000f18_1px,transparent_1px),linear-gradient(to_bottom,#3a000f18_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      
      <div className="animate-flare-drift absolute top-1/4 -right-20 w-[480px] h-[480px] bg-[#dc143c]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="animate-flare-drift absolute bottom-10 -left-20 w-[500px] h-[500px] bg-[#ff2e56]/12 rounded-full blur-[160px] pointer-events-none" style={{ animationDelay: "-3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header with Staggered Transition */}
        <div className="flex flex-col items-center md:items-start mb-14">
          
          {/* Step 1: Badge */}
          <div className="stagger-1 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#180208]/90 border border-[#dc143c]/50 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(220,20,60,0.35)]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff2e56] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-200 to-[#ff2e56] uppercase">
              // 04. Direct Transmission
            </span>
          </div>

          {/* Step 2: Heading with Continuous Floating Highlight */}
          <h2 className="stagger-2 text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Let's Connect & <br />
            <span className="float-highlight text-transparent bg-clip-text bg-gradient-to-r from-[#ff2e56] via-rose-400 to-amber-300 drop-shadow-[0_0_30px_rgba(220,20,60,0.6)]">
              Build Something Iconic.
            </span>
          </h2>

          {/* Step 3: Description */}
          <p className="stagger-3 mt-4 text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed">
            Have an internship role, freelance project, tech inquiry, or want to discuss{" "}
            <span className="float-highlight-delayed font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-300 border-b border-amber-400/50">
              DSA problem patterns
            </span>
            ? Connect through any active channel below.
          </p>
        </div>

        {/* 2-Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Step 4: Left Column Direct High-Attention Channels */}
          <div className="stagger-4 lg:col-span-5 flex flex-col gap-4 justify-between">
            {contactData.map((item) => {
              const Icon = item.icon;
              const isCopied = copiedKey === item.key;

              return (
                <div
                  key={item.key}
                  className={`group relative p-5 rounded-3xl bg-gradient-to-br from-[#120208]/90 via-[#0a0105]/95 to-[#050003] border border-gray-800/80 ${item.glowBorder} transition-all duration-500 ease-out flex items-center justify-between overflow-hidden cursor-pointer hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    {/* Glowing Icon Container */}
                    <div className="w-12 h-12 rounded-2xl bg-[#1c020a] border border-[#dc143c]/40 flex items-center justify-center text-[#ff2e56] group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#dc143c] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(220,20,60,0.25)]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <span className="float-highlight text-[10px] font-mono tracking-widest text-[#ff6b8b] uppercase font-bold">
                        {item.tag}
                      </span>
                      <p className="text-[11px] font-mono text-gray-400">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        target={item.key === "insta" || item.key === "linkedin" || item.key === "phone" ? "_blank" : "_self"}
                        rel="noreferrer"
                        className="text-sm font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-rose-200 group-hover:to-[#ff2e56] transition-all flex items-center gap-1.5 mt-0.5"
                      >
                        <span className="float-highlight-delayed">{item.value}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#ff2e56]" />
                      </a>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <button
                    type="button"
                    onClick={() => handleCopy(item.copyValue, item.key)}
                    className="relative z-10 p-3 rounded-xl bg-[#140209] border border-[#dc143c]/30 text-gray-400 hover:text-white hover:border-[#ff2e56] hover:shadow-[0_0_15px_rgba(220,20,60,0.4)] transition-all active:scale-95 cursor-pointer"
                    title="Copy details"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_6px_#10b981]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  {/* Bottom Accent Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2e56] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
              );
            })}

            {/* Availability Status Card */}
            <div className="p-5 rounded-3xl bg-gradient-to-r from-[#17030a] via-[#0d0106] to-[#050003] border border-[#dc143c]/40 flex items-center justify-between text-xs font-mono shadow-[0_10px_25px_rgba(220,20,60,0.2)]">
              <span className="flex items-center gap-2.5 text-gray-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2e56] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#dc143c]"></span>
                </span>
                OPEN TO OPPORTUNITIES • B.TECH CSE
              </span>
              <span className="float-highlight text-[#ff6b8b] font-bold">2026 EDITION</span>
            </div>
          </div>

          {/* Step 5: Right Column Cyber Transmission Message Form */}
          <div className="stagger-5 lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#16020a]/90 via-[#0a0105]/95 to-[#040002] border border-[#dc143c]/45 p-8 md:p-10 backdrop-blur-2xl shadow-[0_15px_45px_rgba(220,20,60,0.22)] flex flex-col justify-between relative overflow-hidden group">
            
            {/* Top Glowing Shimmer */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2e56] to-transparent opacity-75 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-900 mb-6">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-[#ff2e56]" />
                  <span className="text-xs font-mono text-gray-400 tracking-wider">
                    secure-transmission://protocol.sh
                  </span>
                </div>
                <Radio className="w-4 h-4 text-[#ff2e56] animate-pulse" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#120208]/90 border border-gray-800 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff2e56] focus:shadow-[0_0_20px_rgba(255,46,86,0.3)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                      Your Contact / Email
                    </label>
                    <input
                      type="text"
                      name="contact"
                      required
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="e.g. contact@domain.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#120208]/90 border border-gray-800 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff2e56] focus:shadow-[0_0_20px_rgba(255,46,86,0.3)] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                    Transmission Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity / Tech Discussion"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#120208]/90 border border-gray-800 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff2e56] focus:shadow-[0_0_20px_rgba(255,46,86,0.3)] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your transmission details here..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#120208]/90 border border-gray-800 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff2e56] focus:shadow-[0_0_20px_rgba(255,46,86,0.3)] transition-all resize-none"
                  ></textarea>
                </div>

                {status === "error" && (
                  <div className="p-3.5 rounded-2xl bg-rose-950/60 border border-rose-500/50 text-rose-300 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Failed to dispatch transmission. Verify backend server is active.</span>
                  </div>
                )}

                {status === "success" && (
                  <div className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Transmission successfully dispatched to primary inbox!</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-white 
                    bg-gradient-to-r from-[#dc143c] via-[#b30026] to-[#80001a] 
                    border-t border-[#ff6b8b] shadow-[0_10px_30px_rgba(220,20,60,0.5)] 
                    hover:shadow-[0_15px_40px_rgba(220,20,60,0.75)] hover:-translate-y-0.5 active:translate-y-0.5 
                    transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 text-white animate-spin" />
                      <span>DISPATCHING TRANSMISSION...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Send Transmission</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Footer inside terminal */}
            <div className="mt-8 pt-4 border-t border-gray-900 flex items-center justify-between text-[11px] font-mono text-gray-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ff2e56]" />
                END-TO-END VERIFIED CHANNELS
              </span>
              <span>PRIYANSHU.DEV</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}