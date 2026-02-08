import imgRisoTexture from "../../assets/535520f8f89510a79d271aacc57bbe13d3a57498.png";
import imgNoise from "../../assets/bcfa0f2ecf6c15828a024b5c1166de4e07f82d98.png";
import imgRectangle21 from "../../assets/bc042af91aad7d70dca49f0e41893c364785a12f.png";

function GradientBackground() {
  return (
    <div className="fixed inset-0 w-full h-full">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 1080">
        <defs>
          <linearGradient id="paint0_linear_profile" x1="1920" x2="0" y1="0" y2="1080">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="40%" stopColor="#1a1a1a" />
            <stop offset="70%" stopColor="#2a0a0a" />
            <stop offset="100%" stopColor="#3d1010" />
          </linearGradient>
          <radialGradient id="paint1_radial_profile" cx="70%" cy="30%">
            <stop offset="0%" stopColor="#3d1010" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="paint2_radial_profile" cx="30%" cy="70%">
            <stop offset="0%" stopColor="#8B0000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#paint0_linear_profile)" />
        <ellipse cx="1344" cy="300" rx="700" ry="500" fill="url(#paint1_radial_profile)" />
        <ellipse cx="576" cy="800" rx="500" ry="400" fill="url(#paint2_radial_profile)" />
      </svg>
    </div>
  );
}

export function Profile() {
  return (
    <div className="bg-black relative w-full pt-24" data-name="Profile">
      {/* Background */}
      <GradientBackground />
      
      {/* Textures */}
      <div className="fixed inset-0 mix-blend-multiply pointer-events-none opacity-60">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `url('${imgRisoTexture}')`,
            backgroundSize: '600px 800px',
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

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 py-12 pb-24">
        {/* Title */}
        <h1 className="font-['EB_Garamond:Bold_Italic',sans-serif] font-bold italic text-6xl md:text-8xl mb-20">
          <span className="bg-gradient-to-r from-gray-500 to-white bg-clip-text text-transparent">
            Profile
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column - Profile Photo and Contact */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-10">
              {/* Profile Image with Glass Effect */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden max-w-[400px] border border-white/10 shadow-2xl">
                <img 
                  alt="Profile" 
                  className="size-full object-cover" 
                  src={imgRectangle21} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Contact Info with Glass Card */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
                <div className="flex flex-col gap-6 text-white">
                  <div className="pb-5 border-b border-white/10">
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-sm text-gray-400 mb-3 tracking-wider uppercase">
                      Name
                    </p>
                    <p className="font-['Pretendard:Medium',sans-serif] text-xl leading-relaxed">
                      박이은 <span className="text-gray-400">/</span> Park Lee Eun
                    </p>
                  </div>
                  
                  <div className="pb-5 border-b border-white/10">
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-sm text-gray-400 mb-3 tracking-wider uppercase">
                      Email
                    </p>
                    <a 
                      className="font-['Pretendard:Regular',sans-serif] text-lg hover:text-gray-300 transition-colors underline decoration-gray-500 hover:decoration-white leading-relaxed" 
                      href="mailto:peu11118@naver.com"
                    >
                      peu11118@naver.com
                    </a>
                  </div>
                  
                  <div>
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-sm text-gray-400 mb-3 tracking-wider uppercase">
                      Phone
                    </p>
                    <p className="font-['Pretendard:Medium',sans-serif] text-xl leading-relaxed">
                      010-4533-1620
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-20">
              {/* Education & Awards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Education */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <h2 className="font-['EB_Garamond:Bold_Italic',sans-serif] font-bold italic text-4xl mb-8">
                    <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
                      Education.
                    </span>
                  </h2>
                  <div className="font-['Pretendard:Regular',sans-serif] text-gray-300 text-base md:text-lg flex flex-col gap-6 leading-[1.8]">
                    <p>2025 / 서울여자대학교<br />산업디자인학과 학사 졸업</p>
                    <p>2025 / 주)구름 프로덕트 디자이너<br />4회차 부트캠프 수료</p>
                    <p>2021 / 조선대학교<br />디자인공학과 수료</p>
                  </div>
                </div>

                {/* Awards */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <h2 className="font-['EB_Garamond:Bold_Italic',sans-serif] font-bold italic text-4xl mb-8">
                    <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
                      Award Details.
                    </span>
                  </h2>
                  <div className="font-['Pretendard:Regular',sans-serif] text-gray-300 text-base md:text-lg flex flex-col gap-6 leading-[1.8]">
                    <p>2025 / kakao goorm DEEPDIVE<br />4회차 팀 최우수상</p>
                    <p>2024 / LocalLink 프로젝트<br />노트폴리오 PICK 선정</p>
                  </div>
                </div>
              </div>

              {/* Experience & Activities */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <h2 className="font-['EB_Garamond:Bold_Italic',sans-serif] font-bold italic text-4xl mb-8">
                  <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
                    Experience + Activities.
                  </span>
                </h2>
                <div className="font-['Pretendard:Regular',sans-serif] text-gray-300 text-base md:text-lg flex flex-col gap-6 leading-[1.8]">
                  <p>2024 / 산업디자인학과 졸준위 포스터 팀장</p>
                  <p>2024 / SKT 에이닷 얼리어닷터 2기</p>
                </div>
              </div>

              {/* Projects Overview */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10">
                <h2 className="font-['EB_Garamond:Bold_Italic',sans-serif] font-bold italic text-5xl mb-12">
                  <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
                    Project.
                  </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {/* Service Project */}
                  <div className="flex flex-col gap-6">
                    <div className="inline-block">
                      <div className="border border-gray-500 hover:border-white rounded-full px-6 py-3 transition-all duration-300">
                        <p className="font-['Suisse_Int\'l:Regular',sans-serif] text-lg text-white text-center tracking-wider">
                          Service Project
                        </p>
                      </div>
                    </div>
                    <div className="font-['Pretendard:Regular',sans-serif] text-gray-300">
                      <p className="mb-4">
                        <span className="font-['Pretendard:SemiBold',sans-serif] text-xl text-white">STOOV</span>
                        <br />
                        <span className="text-sm text-gray-500">(2025.10 ~ 2026.01)</span>
                      </p>
                      <p className="text-base leading-[1.8]">
                        버스킹 공연 장소를 탐색하고, 예약 사이트로 바로 이동이 가능한 지도형 플랫폼
                      </p>
                    </div>
                  </div>

                  {/* UX/UI Renewal */}
                  <div className="flex flex-col gap-6">
                    <div className="inline-block">
                      <div className="border border-gray-500 hover:border-white rounded-full px-6 py-3 transition-all duration-300">
                        <p className="font-['Suisse_Int\'l:Regular',sans-serif] text-lg text-white text-center tracking-wider">
                          UX/UI Renewal
                        </p>
                      </div>
                    </div>
                    <div className="font-['Pretendard:Regular',sans-serif] text-gray-300">
                      <p className="mb-4">
                        <span className="font-['Pretendard:SemiBold',sans-serif] text-xl text-white">메쎄이상 메인 홈 개선</span>
                        <br />
                        <span className="text-sm text-gray-500">(2026.01 ~ 02)</span>
                      </p>
                      <p className="text-base leading-[1.8]">
                        회사를 설명하는 공간에서 방문자의 전시 정보를 찾는 출발점으로 개선
                      </p>
                    </div>
                  </div>

                  {/* UX/UI Project */}
                  <div className="flex flex-col gap-6">
                    <div className="inline-block">
                      <div className="border border-gray-500 hover:border-white rounded-full px-6 py-3 transition-all duration-300">
                        <p className="font-['Suisse_Int\'l:Regular',sans-serif] text-lg text-white text-center tracking-wider">
                          UX/UI Project
                        </p>
                      </div>
                    </div>
                    <div className="font-['Pretendard:Regular',sans-serif] text-gray-300">
                      <p className="mb-4">
                        <span className="font-['Pretendard:SemiBold',sans-serif] text-xl text-white">LocalLink</span>
                        <br />
                        <span className="text-sm text-gray-500">(2025.03 ~ 11)</span>
                      </p>
                      <p className="text-base leading-[1.8]">
                        소외 지역 활성화를 위한 현지인의 여행 코스 제공과 게스트의 코스 소비 서비스
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10">
                <h2 className="font-['EB_Garamond:Bold_Italic',sans-serif] font-bold italic text-5xl mb-10">
                  <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
                    Tool.
                  </span>
                </h2>
                <div className="flex flex-wrap gap-4 font-['Pretendard:Regular',sans-serif] text-gray-300 text-lg">
                  {['Figma, Make, Slides', 'Photoshop, Illustrator', 'Maze', 'Keyshot, Fusion', 'VS Code', 'GitHub'].map((tool, idx) => (
                    <span 
                      key={idx}
                      className="px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-white/30 transition-all duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}