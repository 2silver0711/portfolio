import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import imgRisoTexture from "../../assets/535520f8f89510a79d271aacc57bbe13d3a57498.png";
import imgNoise from "../../assets/bcfa0f2ecf6c15828a024b5c1166de4e07f82d98.png";

function GradientBackground() {
  return (
    <div className="fixed inset-0 w-full h-full">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 1080">
        <defs>
          <linearGradient id="paint0_linear_home" x1="1920" x2="0" y1="0" y2="1080">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="40%" stopColor="#1a1a1a" />
            <stop offset="70%" stopColor="#2a0a0a" />
            <stop offset="100%" stopColor="#3d1010" />
          </linearGradient>
          <radialGradient id="paint1_radial_home" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#3d1010" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="paint2_radial_home" cx="50%" cy="70%">
            <stop offset="0%" stopColor="#8B0000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#paint0_linear_home)" />
        <ellipse cx="960" cy="300" rx="800" ry="600" fill="url(#paint1_radial_home)" />
        <ellipse cx="960" cy="800" rx="600" ry="500" fill="url(#paint2_radial_home)" />
      </svg>
    </div>
  );
}

export function Home() {
  const navigate = useNavigate();
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative w-full bg-black">
      {/* Background */}
      <GradientBackground />
      
      {/* Textures */}
      <div className="fixed inset-0 mix-blend-multiply pointer-events-none opacity-60">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `url('${imgRisoTexture}')`,
            backgroundSize: '600px 800px',
            backgroundPosition: 'center',
          }} 
        />
      </div>
      <div 
        className="fixed inset-0 mix-blend-overlay opacity-40 pointer-events-none" 
        style={{ 
          backgroundImage: `url('${imgNoise}')`,
          backgroundSize: '240px 240px',
        }} 
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 pt-32 pb-20 min-h-screen flex flex-col">
        {/* Year Timeline */}
        <div className="relative w-full max-w-6xl mx-auto mb-28">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-3xl md:text-4xl text-white/70">
                2025
              </span>
            </div>
            <div className="flex-1 mx-12 h-[2px] bg-gradient-to-r from-white/30 via-white/50 to-white/30" />
            <div className="flex items-center">
              <span className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-3xl md:text-4xl text-white">
                2026
              </span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center text-center mb-24">
          {/* Main Headline */}
          <div className="mb-20">
            <h1 className="font-['EB_Garamond:Bold_Italic',sans-serif] font-bold italic text-6xl md:text-8xl lg:text-9xl leading-[1.3] mb-0">
              <span className="block mb-6 bg-gradient-to-r from-white/80 via-white to-white bg-clip-text text-transparent">
                Designing Solutions
              </span>
              <span className="block mb-6 bg-gradient-to-r from-white/80 via-white to-white bg-clip-text text-transparent">
                for{' '}
                <span 
                  className="relative inline-block cursor-pointer"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <span className="relative z-10 px-12 py-4 bg-gradient-to-r from-white/90 to-white bg-clip-text text-transparent">
                    Real Users
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-xl" />
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-[100px] border border-white/20 shadow-[inset_8px_5px_40px_0px_rgba(255,255,255,0.25)]" />
                  
                  {/* Glass Cursor */}
                  {isHovering && (
                    <div 
                      className="absolute w-40 h-40 pointer-events-none"
                      style={{
                        left: `${cursorPos.x - 80}px`,
                        top: `${cursorPos.y - 80}px`,
                        transition: 'left 0.15s ease-out, top 0.15s ease-out',
                      }}
                    >
                      <div className="relative w-full h-full">
                        {/* Outer glow ring */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent blur-2xl rounded-full" />
                        
                        {/* Main glass circle */}
                        <div className="absolute inset-6 bg-gradient-to-br from-white/30 via-white/15 to-white/5 backdrop-blur-xl rounded-full border-2 border-white/50 shadow-[0_8px_32px_0_rgba(255,255,255,0.35)]" />
                        
                        {/* Inner highlight */}
                        <div className="absolute inset-10 bg-gradient-to-br from-white/50 via-white/20 to-transparent rounded-full" />
                        
                        {/* Center dot with glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="w-5 h-5 bg-white rounded-full shadow-[0_0_20px_4px_rgba(255,255,255,0.8)] border-2 border-white/30" />
                        </div>
                        
                        {/* Shimmer effect */}
                        <div className="absolute inset-8 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-full opacity-60 rotate-45" />
                      </div>
                    </div>
                  )}
                </span>
              </span>
            </h1>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-5 justify-center mb-28">
            {[
              { label: 'Service Project', filter: 'service' },
              { label: 'UX/UI Project', filter: 'uxui' },
              { label: 'UX/UI Renewal', filter: 'renewal' }
            ].map((category) => (
              <button
                key={category.filter}
                onClick={() => navigate('/projects')}
                className="px-10 py-4 rounded-full border border-white/40 hover:border-white font-['Suisse_Int\'l:Regular',sans-serif] text-xl text-white tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 hover:bg-white/5"
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Description */}
          <div className="max-w-3xl space-y-10">
            <div className="h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent mb-16" />
            <p className="font-['Pretendard:Regular',sans-serif] text-xl md:text-2xl text-white leading-[1.8]">
              타켓 사용자를 겨냥해 문제를 해결하는 디자이너
            </p>
            <p className="font-['Pretendard:Regular',sans-serif] text-xl md:text-2xl text-white leading-[1.8]">
              명확한 문제 정의와 그에 맞는 디자인을 통해 사용자 경험의 질을 높입니다.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-right mt-auto">
          <p className="font-['EB_Garamond:Medium_Italic',sans-serif] font-medium italic text-3xl md:text-4xl text-white/50">
            Designer. Park Lee Eun
          </p>
        </div>
      </div>
    </div>
  );
}