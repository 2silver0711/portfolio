import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import imgRisoTexture from "../../assets/535520f8f89510a79d271aacc57bbe13d3a57498.png";
import imgNoise from "../../assets/bcfa0f2ecf6c15828a024b5c1166de4e07f82d98.png";
import { ArrowLeft, FileText, ExternalLink, Video } from 'lucide-react';

function GradientBackground() {
  return (
    <div className="fixed inset-0 w-full h-full">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 1080">
        <defs>
          <linearGradient id="paint0_linear_detail" x1="1920" x2="0" y1="0" y2="1080">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="40%" stopColor="#1a1a1a" />
            <stop offset="70%" stopColor="#2a0a0a" />
            <stop offset="100%" stopColor="#3d1010" />
          </linearGradient>
          <radialGradient id="paint1_radial_detail" cx="70%" cy="30%">
            <stop offset="0%" stopColor="#3d1010" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="paint2_radial_detail" cx="30%" cy="70%">
            <stop offset="0%" stopColor="#8B0000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#paint0_linear_detail)" />
        <ellipse cx="1344" cy="300" rx="700" ry="500" fill="url(#paint1_radial_detail)" />
        <ellipse cx="576" cy="800" rx="500" ry="400" fill="url(#paint2_radial_detail)" />
      </svg>
    </div>
  );
}

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="bg-black relative w-full min-h-screen pt-24">
        <GradientBackground />
        <div className="relative z-10 size-full min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-['EB_Garamond:SemiBold',sans-serif] text-5xl text-white mb-6">
              Project Not Found
            </h1>
            <Link 
              to="/projects"
              className="font-['Pretendard:Regular',sans-serif] text-lg text-[#d2d2d2] hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black relative w-full pt-24">
      {/* Background */}
      <GradientBackground />

      {/* Textures */}
      <div className="fixed inset-0 mix-blend-multiply pointer-events-none opacity-60">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `url('${imgRisoTexture}')`,
            backgroundSize: '600px 800px',
            backgroundPosition: 'center'
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
      <div className="relative z-10 max-w-[1920px] mx-auto px-8 md:px-16 py-12 pb-24">
        {/* Back Button */}
        <Link 
          to="/projects"
          className="inline-flex items-center gap-3 font-['Pretendard:Regular',sans-serif] text-lg text-[#d2d2d2] hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-16 max-w-[1200px]">
          {/* Category Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="inline-block px-6 py-2 bg-[#2a2a2a]/50 backdrop-blur-sm rounded-full border border-white/10">
              <span className="font-['Suisse_Int\'l:Regular',sans-serif] text-sm text-[#a0a0a0] tracking-wider uppercase">
                {project.category === 'service' ? 'Service Project' : 
                 project.category === 'renewal' ? 'UX/UI Renewal' : 'UX/UI Project'}
              </span>
            </div>
            {project.category === 'service' && (
              <div className="inline-block px-6 py-2 bg-[#3d1010]/50 backdrop-blur-sm rounded-full border border-[#8B0000]/30">
                <span className="font-['Suisse_Int\'l:Regular',sans-serif] text-sm text-[#d2a0a0] tracking-wider">
                  PM, PD, DEV 팀 프로젝트 (Mobile Web design)
                </span>
              </div>
            )}
            {project.category === 'uxui' && (
              <div className="inline-block px-6 py-2 bg-[#3d1010]/50 backdrop-blur-sm rounded-full border border-[#8B0000]/30">
                <span className="font-['Suisse_Int\'l:Regular',sans-serif] text-sm text-[#d2a0a0] tracking-wider">
                  4인 졸업 전시 프로젝트 (App design)
                </span>
              </div>
            )}
            {project.category === 'renewal' && (
              <div className="inline-block px-6 py-2 bg-[#3d1010]/50 backdrop-blur-sm rounded-full border border-[#8B0000]/30">
                <span className="font-['Suisse_Int\'l:Regular',sans-serif] text-sm text-[#d2a0a0] tracking-wider">
                  개인 프로젝트 (Web design)
                </span>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="font-['EB_Garamond:SemiBold',sans-serif] font-semibold text-5xl md:text-6xl text-white mb-6 leading-tight">
            {project.title}
          </h1>

          {/* Period */}
          <p className="font-['Pretendard:Regular',sans-serif] text-xl text-[#888] mb-6">
            {project.period}
          </p>

          {/* Description */}
          <p className="font-['Pretendard:Regular',sans-serif] text-xl md:text-2xl text-[#d2d2d2] leading-[1.8] mb-8">
            {project.description}
          </p>

          {/* Meta Info and Action Buttons */}
          <div className="flex flex-wrap gap-8 items-start">
            {/* Meta Info */}
            <div className="flex gap-12 flex-wrap flex-1">
              <div>
                <h3 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-xl text-white mb-2">
                  Role
                </h3>
                <p className="font-['Pretendard:Regular',sans-serif] text-lg text-[#d2d2d2]">
                  {project.role}
                </p>
              </div>
              <div>
                <h3 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-xl text-white mb-2">
                  Tools
                </h3>
                <p className="font-['Pretendard:Regular',sans-serif] text-lg text-[#d2d2d2]">
                  {project.tools.join(', ')}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              {project.designSystemUrl && (
                <a
                  href={project.designSystemUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full font-['Pretendard:SemiBold',sans-serif] text-white transition-all duration-300 backdrop-blur-sm"
                >
                  <FileText size={20} />
                  디자인시스템 보기
                </a>
              )}
              {project.pdfUrl && !project.designSystemUrl && (
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full font-['Pretendard:SemiBold',sans-serif] text-white transition-all duration-300 backdrop-blur-sm"
                >
                  <FileText size={20} />
                  PDF 보기
                </a>
              )}
              {project.prototypeUrl && (
                <a
                  href={project.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-white/90 rounded-full font-['Pretendard:SemiBold',sans-serif] transition-all duration-300 shadow-lg shadow-white/20"
                >
                  <ExternalLink size={20} />
                  프로토타입 보기
                </a>
              )}
              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full font-['Pretendard:SemiBold',sans-serif] text-white transition-all duration-300 backdrop-blur-sm"
                >
                  <Video size={20} />
                  서비스 소개영상
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Hero Image - Full Width */}
        <div className="mb-20 rounded-2xl overflow-hidden border border-white/10">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Project Content Sections */}
        <div className="space-y-20 max-w-[1200px]">
          {/* Overview */}
          <section>
            <h2 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-4xl text-white mb-8">
              Overview
            </h2>
            <p className="font-['Pretendard:Regular',sans-serif] text-xl text-[#d2d2d2] leading-[1.8]">
              {project.overview}
            </p>
          </section>

          {/* Problem */}
          <section>
            <h2 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-4xl text-white mb-8">
              Problem
            </h2>
            <div className="bg-[#2a2a2a]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="font-['Pretendard:Regular',sans-serif] text-xl text-[#d2d2d2] leading-[1.8]">
                {project.problem}
              </p>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-4xl text-white mb-8">
              Solution
            </h2>
            <p className="font-['Pretendard:Regular',sans-serif] text-xl text-[#d2d2d2] leading-[1.8] mb-12">
              {project.solution}
            </p>
          </section>
        </div>
            
        {/* Additional Images - Full Width 1920px */}
        {project.images.length > 1 && (
          <div className="space-y-12 mb-20">
            <h3 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-3xl text-white max-w-[1200px]">
              프로젝트 이미지
            </h3>
            <div className="flex flex-col gap-12">
              {project.images.slice(1).map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 bg-black/20">
                  <img
                    src={img}
                    alt={`${project.title} ${idx + 1}`}
                    className="w-full h-auto object-contain"
                    style={{ maxWidth: '1920px', margin: '0 auto', display: 'block' }}
                  />
                </div>
              ))}
            </div>
            <p className="font-['Pretendard:Regular',sans-serif] text-sm text-[#888] italic mt-8 max-w-[1200px]">
              * 이미지를 추가하려면 /src/app/data/projects.ts 파일의 images 배열에 이미지 URL을 추가하세요.
            </p>
          </div>
        )}

        <div className="space-y-20 max-w-[1200px]">
          {/* Result */}
          <section>
            <h2 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-4xl text-white mb-8">
              Result
            </h2>
            <div className="bg-gradient-to-br from-[#2a2a2a]/70 to-[#1a1a1a]/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="font-['Pretendard:Regular',sans-serif] text-xl text-[#d2d2d2] leading-[1.8]">
                {project.result}
              </p>
            </div>
          </section>

          {/* Tags */}
          <section>
            <h2 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-3xl text-white mb-6">
              Tags
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2 bg-[#2a2a2a]/50 backdrop-blur-sm rounded-full font-['Pretendard:Regular',sans-serif] text-base text-[#d2d2d2] border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Navigation to other projects */}
        <div className="mt-24 pt-12 border-t border-white/10 max-w-[1200px]">
          <h3 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-3xl text-white mb-8">
            More Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((otherProject) => (
                <Link
                  key={otherProject.id}
                  to={`/projects/${otherProject.id}`}
                  className="group relative overflow-hidden rounded-xl bg-[#2a2a2a]/50 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 border border-white/10 hover:border-white/30"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={otherProject.thumbnail}
                      alt={otherProject.title}
                      className="size-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-['Pretendard:SemiBold',sans-serif] text-lg text-white mb-1">
                      {otherProject.title}
                    </h4>
                    <p className="font-['Pretendard:Regular',sans-serif] text-sm text-[#888]">
                      {otherProject.period}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}