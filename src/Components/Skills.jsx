import React, { useState, useRef, useEffect } from 'react';
import { FaReact, FaJs, FaNodeJs, FaFigma, FaGitAlt, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiCanva, SiAdobephotoshop, SiDavinciresolve, SiMongodb, SiExpress, SiVite, SiGithub, SiWordpress, SiWebflow, SiFlutter } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import CapcutLogo from '../assets/img/capcut.png';
import ElementorLogo from '../assets/img/elementor.svg';
import GoHighLevelLogo from '../assets/img/gohighlevel.png';

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
  { 
    name: 'GoHighLevel', 
    icon: <img src={GoHighLevelLogo} alt="GoHighLevel Logo" style={{ width: 38, height: 38, objectFit: 'contain' }} />,
    url: 'https://www.gohighlevel.com/'
  },
  { 
    name: 'Elementor', 
    icon: <img src={ElementorLogo} alt="Elementor Logo" style={{ width: 38, height: 38, objectFit: 'contain' }} />,
    url: 'https://elementor.com/'
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
          whileHover={{ y: -6, scale: 1.02 }}
          className="flex flex-col items-center justify-center bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-glow border border-gray-200/60 dark:border-gray-700/60 py-8 px-3 transition-all duration-300 min-h-[140px] relative group overflow-hidden"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Icon container with glow effect */}
          <div className="relative mb-3 transform group-hover:scale-110 transition-transform duration-300">
            <div className="absolute inset-0 bg-primary-500/20 dark:bg-primary-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">{skill.icon}</div>
          </div>
          
          {/* Skill name */}
          <span className="font-semibold text-gray-800 dark:text-gray-100 text-sm sm:text-base text-center relative z-10 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
            {skill.name}
          </span>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-2xl" />
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
    <section id="skills" className="relative min-h-[70vh] section-padding container-padding bg-gradient-to-b from-white via-gray-50 to-white dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-mesh dark:bg-mesh-dark opacity-40" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/5 dark:bg-accent-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-full border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-xl shadow-lg"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
            />
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
              💻 Tech Arsenal
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Skills & Technologies
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Crafting digital experiences with a powerful blend of 
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500"> modern technologies</span> and 
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-800 dark:from-blue-500 dark:to-blue-600"> creative tools</span>
          </motion.p>
        </motion.div>

        {/* Tech Stacks Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {techStacks.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-800/40 rounded-full border border-blue-200/60 dark:border-blue-700/60 backdrop-blur-xl shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xs font-bold text-blue-700 dark:text-blue-300">🛠️ Essential Tools</span>
            </motion.div>
            
            <h3 className="text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
              Development Tools
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The <span className="font-bold text-blue-600 dark:text-blue-400">essential toolkit</span> that powers my workflow and maximizes productivity
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {tools.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <SkillCard skill={tool} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 