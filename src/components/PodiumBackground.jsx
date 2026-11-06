import React from "react";

export default function PodiumBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#050507] pointer-events-none select-none z-0">
      
      {/* 1. Deep Wall Ambient Shadow & Top Gradient */}
      <div className="absolute inset-0 bg-radial from-[#150207]/40 via-[#070104] to-[#020002]" />

      {/* 2. Left Side Matte Angular Wing with Crimson Neon Line */}
      <div 
        className="absolute -top-12 -left-20 w-[45vw] max-w-[500px] h-[65vh] bg-[#0c0c11] border-r-[3px] border-b-[3px] border-[#ff2e56] neon-wing-left"
        style={{
          clipPath: "polygon(0 0, 100% 30%, 35% 100%, 0 100%)",
        }}
      />

      {/* 3. Right Side Matte Angular Wing with Crimson Neon Line */}
      <div 
        className="absolute -top-12 -right-20 w-[45vw] max-w-[500px] h-[65vh] bg-[#0c0c11] border-l-[3px] border-b-[3px] border-[#ff2e56] neon-wing-right"
        style={{
          clipPath: "polygon(100% 0, 0 30%, 65% 100%, 100% 100%)",
        }}
      />

      {/* 4. Floor Reflection Layer */}
      <div className="absolute bottom-0 inset-x-0 h-[42vh] bg-gradient-to-t from-[#020003] via-[#090205]/90 to-transparent" />

      {/* Center Glow Burst */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[650px] h-[250px] bg-[#dc143c]/15 rounded-full blur-[110px]" />

      {/* 5. Glowing Neon Floor Ring (Elliptical Halo) */}
      <div className="animate-halo-ring absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 w-[340px] sm:w-[540px] md:w-[680px] h-[100px] sm:h-[140px] md:h-[180px] rounded-[100%] border-[4px] border-[#ff2e56] pointer-events-none" />

      {/* 6. Dual-Tier 3D Dark Matte Cylindrical Podium */}
      <div className="absolute bottom-14 sm:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
        
        {/* Upper Tier Disk */}
        <div className="relative z-20 w-[240px] sm:w-[380px] md:w-[460px] h-[55px] sm:h-[75px]">
          {/* Top Surface */}
          <div className="w-full h-[40px] sm:h-[55px] rounded-[100%] bg-gradient-to-b from-[#1c1c24] to-[#0d0d12] border-t border-gray-700 shadow-inner" />
          {/* Cylinder Side Lip with Red Trim */}
          <div className="absolute top-[20px] sm:top-[28px] inset-x-0 h-[30px] rounded-b-[100%] bg-[#08080c] border-b-[2px] border-[#ff2e56] shadow-[0_4px_20px_rgba(255,46,86,0.6)]" />
        </div>

        {/* Lower Tier Base Disk */}
        <div className="relative z-10 -mt-6 sm:-mt-8 w-[290px] sm:w-[460px] md:w-[560px] h-[65px] sm:h-[90px]">
          {/* Top Surface */}
          <div className="w-full h-[45px] sm:h-[65px] rounded-[100%] bg-gradient-to-b from-[#14141a] to-[#09090d] border-t border-gray-800" />
          {/* Cylinder Base Side Lip with Glowing Red Rim */}
          <div className="absolute top-[22px] sm:top-[32px] inset-x-0 h-[38px] rounded-b-[100%] bg-[#050508] border-b-[3px] border-[#ff2e56] shadow-[0_8px_30px_rgba(255,46,86,0.85)]" />
        </div>

      </div>

    </div>
  );
}