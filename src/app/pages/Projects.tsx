import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import imgRisoTexture from "../../assets/535520f8f89510a79d271aacc57bbe13d3a57498.png";
import imgNoise from "../../assets/bcfa0f2ecf6c15828a024b5c1166de4e07f82d98.png";

type FilterType = 'all' | 'service' | 'uxui' | 'renewal';

function GradientBackground() {
  return (
    <div className="fixed inset-0 w-full h-full">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 1080">
        <defs>
          <linearGradient id="paint0_linear_projects" x1="1920" x2="0" y1="0" y2="1080">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="40%" stopColor="#1a1a1a" />
            <stop offset="70%" stopColor="#2a0a0a" />
            <stop offset="100%" stopColor="#3d1010" />
          </linearGradient>
          <radialGradient id="paint1_radial_projects" cx="70%" cy="30%">
            <stop offset="0%" stopColor="#3d1010" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="paint2_radial_projects" cx="30%" cy="70%">
            <stop offset="0%" stopColor="#8B0000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#paint0_linear_projects)" />
        <ellipse cx="1344" cy="300" rx="700" ry="500" fill="url(#paint1_radial_projects)" />
        <ellipse cx="576" cy="800" rx="500" ry="400" fill="url(#paint2_radial_projects)" />
      </svg>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categoryLabels = {
    all: 'All Projects',
    service: 'Service Project',
    uxui: 'UX/UI Project',
    renewal: 'UX/UI Renewal',
  };

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
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 py-12 pb-24">
        {/* Title */}
        <h1 className="font-['EB_Garamond:Bold_Italic',sans-serif] font-bold italic text-6xl md:text-8xl mb-16">
          <span className="bg-gradient-to-r from-white/80 to-white bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          {(['all', 'service', 'uxui', 'renewal'] as FilterType[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-8 py-3 rounded-full font-['Suisse_Int\'l:Regular',sans-serif] text-lg tracking-wider transition-all duration-300
                ${filter === cat
                  ? 'bg-white text-black border-2 border-white shadow-lg shadow-white/20'
                  : 'bg-transparent text-white border-2 border-white/40 hover:border-white hover:bg-white/5'
                }
              `}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="size-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block mb-3 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="font-['Suisse_Int\'l:Regular',sans-serif] text-xs text-white/80 tracking-wider uppercase">
                    {project.category === 'service' ? 'Service' : 
                     project.category === 'renewal' ? 'Renewal' : 'UX/UI'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-['Pretendard:Bold',sans-serif] text-2xl text-white mb-2 group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>

                {/* Period */}
                <p className="font-['Pretendard:Regular',sans-serif] text-sm text-white/60 mb-4">
                  {project.period}
                </p>

                {/* Description */}
                <p className="font-['Pretendard:Regular',sans-serif] text-base text-white/80 leading-[1.6] line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 rounded-full font-['Pretendard:Regular',sans-serif] text-xs text-white/70 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="font-['Pretendard:Regular',sans-serif] text-xl text-white/60">
              해당 카테고리의 프로젝트가 없습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}