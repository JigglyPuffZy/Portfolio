import React from 'react';
import { FaReact, FaJs, FaNodeJs, FaPython, FaFigma, FaGitAlt, FaPhotoVideo, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiCanva, SiAdobephotoshop, SiDavinciresolve, SiMongodb, SiExpress, SiVite, SiGithub, SiPostman } from 'react-icons/si';
import { motion } from 'framer-motion';
import CapcutLogo from '../assets/img/capcut.png';

// Group skills into two sections: Tech Stacks and Tools
const techStacks = [
  { name: 'React', icon: <FaReact color="#61DAFB" size={38} /> },
  { name: 'JavaScript', icon: <FaJs color="#F7DF1E" size={38} /> },
  { name: 'Tailwind', icon: <SiTailwindcss color="#06B6D4" size={38} /> },
  { name: 'Framer Motion', icon: <SiFramer color="#E64AFF" size={38} /> },
  { name: 'Node.js', icon: <FaNodeJs color="#3C873A" size={38} /> },
  { name: 'Express', icon: <SiExpress color="#000000" size={38} /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={38} /> },
  { name: 'Python', icon: <FaPython color="#3776AB" size={38} /> },
  { name: 'Figma', icon: <FaFigma color="#A259FF" size={38} /> },
  { name: 'Canva', icon: <SiCanva color="#00C4CC" size={38} /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop color="#31A8FF" size={38} /> },
  { name: 'DaVinci', icon: <SiDavinciresolve color="#FF9C00" size={38} /> },
  { name: 'CapCut', icon: <img src={CapcutLogo} alt="CapCut Logo" style={{ width: 38, height: 38, objectFit: 'contain' }} /> },
];

const tools = [
  { name: 'Git', icon: <FaGitAlt color="#F05032" size={38} /> },
  { name: 'VS Code', icon: <FaCode color="#007ACC" size={38} /> },
  { name: 'GitHub', icon: <SiGithub color="#181717" size={38} /> },
  { name: 'Postman', icon: <SiPostman color="#FF6C37" size={38} /> },
  { name: 'Vite', icon: <SiVite color="#646CFF" size={38} /> },
];

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
            <motion.div
              key={skill.name}
              whileHover={{ y: -4, boxShadow: '0 8px 32px 0 rgba(34,197,94,0.10)' }}
              className="flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 py-7 px-2 transition-all duration-200 min-h-[120px]"
            >
              <div className="mb-2">{skill.icon}</div>
              <span className="font-medium text-gray-800 dark:text-gray-100 text-base text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
        {/* Tools Section */}
        <p className="text-center text-base text-gray-500 dark:text-gray-300 max-w-2xl mx-auto mb-8 font-medium">
          These are the collaboration and developer tools I use to <span className="font-semibold text-gray-900 dark:text-white">streamline my workflow</span>.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              whileHover={{ y: -4, boxShadow: '0 8px 32px 0 rgba(34,197,94,0.10)' }}
              className="flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 py-7 px-2 transition-all duration-200 min-h-[120px]"
            >
              <div className="mb-2">{tool.icon}</div>
              <span className="font-medium text-gray-800 dark:text-gray-100 text-base text-center">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 