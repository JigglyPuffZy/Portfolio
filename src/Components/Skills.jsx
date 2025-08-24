import React, { useState, useRef, useEffect } from 'react';
import { FaReact, FaJs, FaNodeJs, FaFigma, FaGitAlt, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiCanva, SiAdobephotoshop, SiDavinciresolve, SiMongodb, SiExpress, SiVite, SiGithub, SiWordpress, SiWebflow, SiFlutter } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import CapcutLogo from '../assets/img/capcut.png';

// Skill data with proficiency levels and descriptions
const techStacks = [
  { 
    name: 'React', 
    icon: <FaReact color="#61DAFB" size={38} />,
    url: 'https://reactjs.org/'
  },
  { 
    name: 'Flutter', 
    icon: <SiFlutter color="#02569B" size={38} />,
    url: 'https://flutter.dev/'
  },
  { 
    name: 'JavaScript', 
    icon: <FaJs color="#F7DF1E" size={38} />,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  { 
    name: 'Tailwind CSS', 
    icon: <SiTailwindcss color="#06B6D4" size={38} />,
    url: 'https://tailwindcss.com/'
  },
  { 
    name: 'Framer Motion', 
    icon: <SiFramer color="#E64AFF" size={38} />,
    url: 'https://www.framer.com/motion/'
  },
  { 
    name: 'Node.js', 
    icon: <FaNodeJs color="#3C873A" size={38} />,
    url: 'https://nodejs.org/'
  },
  { 
    name: 'Express', 
    icon: <SiExpress color="#000000" size={38} />,
    url: 'https://expressjs.com/'
  },
  { 
    name: 'MongoDB', 
    icon: <SiMongodb color="#47A248" size={38} />,
    url: 'https://www.mongodb.com/'
  },
  { 
    name: 'Figma', 
    icon: <FaFigma color="#A259FF" size={38} />,
    url: 'https://www.figma.com/'
  },
  { 
    name: 'Canva', 
    icon: <SiCanva color="#00C4CC" size={38} />,
    url: 'https://www.canva.com/'
  },
  { 
    name: 'Photoshop', 
    icon: <SiAdobephotoshop color="#31A8FF" size={38} />,
    url: 'https://www.adobe.com/products/photoshop.html'
  },
  { 
    name: 'DaVinci Resolve', 
    icon: <SiDavinciresolve color="#FF9C00" size={38} />,
    url: 'https://www.blackmagicdesign.com/products/davinciresolve/'
  },
  { 
    name: 'CapCut', 
    icon: <img src={CapcutLogo} alt="CapCut Logo" style={{ width: 38, height: 38, objectFit: 'contain' }} />,
    url: 'https://www.capcut.com/'
  },
  { 
    name: 'WordPress', 
    icon: <SiWordpress color="#21759B" size={38} />,
    url: 'https://wordpress.org/'
  },
  { 
    name: 'Webflow', 
    icon: <SiWebflow color="#4353FF" size={38} />,
    url: 'https://webflow.com/'
  },
];

const tools = [
  { 
    name: 'Git', 
    icon: <FaGitAlt color="#F05032" size={38} />,
    url: 'https://git-scm.com/'
  },
  { 
    name: 'VS Code', 
    icon: <FaCode color="#007ACC" size={38} />,
    url: 'https://code.visualstudio.com/'
  },
  { 
    name: 'GitHub', 
    icon: <SiGithub color="#181717" size={38} />,
    url: 'https://github.com/'
  },
  { 
    name: 'Vite', 
    icon: <SiVite color="#646CFF" size={38} />,
    url: 'https://vitejs.dev/'
  },
];

const SkillCard = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef(null);
  
  // Extract domain from URL for display
  const getDomain = (url) => {
    try {
      const domain = new URL(url).hostname.replace('www.', '');
      return domain;
    } catch (e) {
      return url;
    }
  };

  // Generate a screenshot URL using a screenshot API
  const getScreenshotUrl = (url) => {
    try {
      const domain = new URL(url).hostname.replace('www.', '');
      // Using a free screenshot API (you might want to use your own service for production)
      return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=400&h=300`;
    } catch (e) {
      return null;
    }
  };

  // Preload the image when component mounts
  useEffect(() => {
    if (isHovered && !imgLoaded) {
      const img = new Image();
      img.src = getScreenshotUrl(skill.url);
      img.onload = () => setImgLoaded(true);
    }
  }, [isHovered, skill.url]);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={skill.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block no-underline"
      >
        <motion.div
          whileHover={{ y: -4, boxShadow: '0 8px 32px 0 rgba(34,197,94,0.10)' }}
          className="flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 py-7 px-2 transition-all duration-200 min-h-[120px] relative group"
        >
          <div className="mb-2">{skill.icon}</div>
          <span className="font-medium text-gray-800 dark:text-gray-100 text-base text-center">
            {skill.name}
          </span>
        </motion.div>
      </a>
      
      {/* Website Preview */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full w-80 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden z-50"
            style={{ pointerEvents: 'none' }}
          >
            <div className="relative">
              {imgLoaded ? (
                <img 
                  ref={imgRef}
                  src={getScreenshotUrl(skill.url)} 
                  alt={`${skill.name} website preview`}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
              ) : (
                <div className="w-full h-48 bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
                  <div className="animate-pulse text-gray-400">Loading preview...</div>
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200"></div>
            </div>
            <div className="p-3 border-t border-gray-100 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {getDomain(skill.url)}
                </span>
                <FaExternalLinkAlt className="text-gray-400 text-xs" />
              </div>
              <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-1 mt-2">
                <div className="bg-blue-500 h-1 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-800 transform rotate-45 border-r border-b border-gray-200 dark:border-slate-700"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-[70vh] py-24 px-2 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Tech Stacks Section */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-2 text-center tracking-tight text-blue-600 select-none">
          A collection of my skills
        </h2>
        <p className="text-center text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-10 font-medium">
          These are the technologies I use to <span className="font-semibold text-gray-900 dark:text-white">craft efficient software solutions</span>.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-14">
          {techStacks.map((skill, idx) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
        {/* Tools Section */}
        <p className="text-center text-base text-gray-500 dark:text-gray-300 max-w-2xl mx-auto mb-8 font-medium">
          These are the collaboration and developer tools I use to <span className="font-semibold text-gray-900 dark:text-white">streamline my workflow</span>.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {tools.map((tool, idx) => (
            <SkillCard key={tool.name} skill={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 