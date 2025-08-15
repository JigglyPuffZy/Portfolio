import React from 'react';
import { FaReact, FaMobileAlt, FaDatabase, FaPalette, FaRocket, FaUserFriends, FaNodeJs } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiJavascript, SiFirebase, SiExpress, SiOpenai } from 'react-icons/si';
import WebPortfolio1 from '../../assets/img/webportfolio1.png';
import WebPortfolio2 from '../../assets/img/webportfolio2.png';
import WebPortfolio3 from '../../assets/img/webportfolio3.png';
import WebPortfolio4 from '../../assets/img/webportfolio4.png';
import WebPortfolio5 from '../../assets/img/webportfolio5.png';
import Marians from '../../assets/img/Marian\'s.png';
import LaborLinkz from '../../assets/img/LaborLinkz.png';
import QuizWhirl from '../../assets/img/QuizWHirl.png';
import LovatoElectric from '../../assets/img/lovato-electric.png';
import DoctorSanti from '../../assets/img/doc santi.png';
import ImageModal from '../ImageModal';

// Icon mapping for tech stack
const techIcons = {
  'React': <FaReact className="text-blue-400" title="React" />,
  'React Native': <FaMobileAlt className="text-blue-400" title="React Native" />,
  'Mobile UI/UX': <FaPalette className="text-blue-300" title="Mobile UI/UX" />,
  'State Management': <SiRedux className="text-purple-400" title="State Management" />,
  'Performance Optimization': <FaRocket className="text-blue-300" title="Performance Optimization" />,
  'Freelancing Platform': <FaUserFriends className="text-blue-300" title="Freelancing Platform" />,
  'Job Matching': <FaUserFriends className="text-blue-300" title="Job Matching" />,
  'Mobile Development': <FaMobileAlt className="text-blue-400" title="Mobile Development" />,
  'Responsive Design': <SiTailwindcss className="text-cyan-400" title="Responsive Design" />,
  'Modern UI/UX': <FaPalette className="text-blue-300" title="Modern UI/UX" />,
  'Performance': <FaRocket className="text-blue-300" title="Performance" />,
  'Node.js': <FaNodeJs className="text-green-500" title="Node.js" />,
  'Express': <SiExpress className="text-gray-700" title="Express" />,
  'Chatbot': <FaUserFriends className="text-blue-400" title="Chatbot" />,
  'AI Assistant': <FaUserFriends className="text-blue-400" title="AI Assistant" />,
  'Gemini API': <SiOpenai className="text-blue-500" title="Gemini API" />,
  'ChatGPT API': <SiOpenai className="text-green-500" title="ChatGPT API" />,
};

const mobileProjects = [
  {
    title: 'Marians Mobile App',
    description: 'Developed a mobile application for Marians, featuring a modern UI/UX design and seamless user experience.',
    mainImage: Marians,
    tech: ['React Native', 'Mobile UI/UX', 'State Management', 'Performance Optimization'],
  },
  {
    title: 'LaborLinkz',
    description: 'Building Community Through Freelancing Platform',
    mainImage: LaborLinkz,
    tech: ['React Native', 'Freelancing Platform', 'Job Matching', 'Mobile Development'],
  },
  {
    title: 'Quiz Whirl App',
    description: 'Built an interactive quiz app with multiple question types and score tracking. Designed a responsive and engaging UI using React Native.',
    mainImage: QuizWhirl,
    tech: ['React Native', 'Mobile UI/UX', 'State Management', 'Performance Optimization'],
  },
  {
    title: 'Doctor Santi - AI Vet',
    description: 'Personal AI veterinarian assistant named Doctor Santi using ChatGPT 3.5 Turbo to provide pet health information and advice. Built with React Native for mobile devices. (July to Aug 2025)',
    mainImage: DoctorSanti,
    tech: ['React Native', 'Mobile UI/UX', 'AI Assistant', 'ChatGPT API'],
  },
];

const webProjects = [
  {
    title: 'We Comply ',
    description: 'Modern and responsive web portfolio showcasing creative work and professional experience.',
    mainImage: WebPortfolio1,
    tech: ['React', 'Responsive Design', 'Modern UI/UX', 'Performance'],
  },
  {
    title: 'Personal Portfolio',
    description: 'Modern and responsive web portfolio showcasing creative work and professional experience.',
    mainImage: WebPortfolio2,
    tech: ['React', 'Responsive Design', 'Modern UI/UX', 'Performance'],
  },
  {
    title: 'TriReg',
    description: 'Modern and responsive web portfolio showcasing creative work and professional experience.',
    mainImage: WebPortfolio3,
    tech: ['React', 'Responsive Design', 'Modern UI/UX', 'Performance'],
  },
  {
    title: 'Vtrack',
    description: 'Modern and responsive web portfolio showcasing creative work and professional experience.',
    mainImage: WebPortfolio4,
    tech: ['React', 'Responsive Design', 'Modern UI/UX', 'Performance'],
  },
  {
    title: 'Personal Portfolio 2',
    description: 'Modern and responsive web portfolio showcasing creative work and professional experience.',
    mainImage: WebPortfolio5,
    tech: ['React', 'Responsive Design', 'Modern UI/UX', 'Performance'],
  },
  {
    title: 'Lovato Electric Chatbot',
    description: 'AI-powered chatbot for Lovato Electric using Gemini technology to assist customers with product inquiries and support. Built with Node.js and Express. (July to Aug 2025)',
    mainImage: LovatoElectric,
    tech: ['Node.js', 'Express', 'Gemini API', 'Chatbot'],
  },
];

const DeveloperProjects = () => {
  const [modalImage, setModalImage] = React.useState(null);
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 bg-white dark:bg-slate-900 font-sans overflow-x-hidden">
      {/* Background grid/abstract shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Faint grid lines */}
        <svg className="w-full h-full opacity-10 dark:opacity-15" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#60a5fa" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Abstract geometric shapes */}
        <div className="absolute top-10 left-1/3 w-72 h-72 bg-blue-100 dark:bg-blue-900 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-200 dark:bg-slate-800 rounded-full blur-2xl opacity-10" />
      </div>
      {/* Enhanced header section */}
      <div className="relative z-20 w-full flex flex-col items-center mb-10">
        <div className="relative flex flex-col items-center w-full">
          {/* Decorative blue gradient shape */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-80 h-24 bg-gradient-to-r from-blue-400/30 via-blue-200/40 to-blue-500/20 blur-2xl rounded-full opacity-70 pointer-events-none" />
          <div className="relative flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-lg px-6 py-3 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-blue-100 dark:border-blue-700 shadow-xl animate-fade-in-up" style={{boxShadow:'0 4px 32px 0 rgba(96,165,250,0.10)'}}>Front-End Developer Projects</h1>
            <div className="mt-2 h-2 w-32 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 blur-sm opacity-60 animate-pulse" />
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Mobile Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mobileProjects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-100 dark:border-blue-700 flex flex-col overflow-hidden transform transition duration-300 hover:scale-[1.04] hover:shadow-blue-200 dark:hover:shadow-blue-900 hover:border-blue-400 hover:z-20 hover:-translate-y-2 hover:rotate-1 cursor-pointer relative before:absolute before:inset-0 before:rounded-3xl before:pointer-events-none before:transition before:duration-300 before:opacity-0 hover:before:opacity-100 before:shadow-[0_0_32px_8px_rgba(96,165,250,0.15)]"
              style={{ perspective: '800px' }}
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => setModalImage(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-2 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto items-center">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="flex items-center gap-1 bg-blue-50/60 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold shadow-sm border border-blue-200 dark:border-blue-700 backdrop-blur-sm">
                      {techIcons[tech] || null}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Web Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-100 dark:border-blue-700 flex flex-col overflow-hidden transform transition duration-300 hover:scale-[1.04] hover:shadow-blue-200 dark:hover:shadow-blue-900 hover:border-blue-400 hover:z-20 hover:-translate-y-2 hover:rotate-1 cursor-pointer relative before:absolute before:inset-0 before:rounded-3xl before:pointer-events-none before:transition before:duration-300 before:opacity-0 hover:before:opacity-100 before:shadow-[0_0_32px_8px_rgba(96,165,250,0.15)]"
              style={{ perspective: '800px' }}
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => setModalImage(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-2 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto items-center">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="flex items-center gap-1 bg-blue-50/60 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold shadow-sm border border-blue-200 dark:border-blue-700 backdrop-blur-sm">
                      {techIcons[tech] || null}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Immersive Modal Preview */}
      <ImageModal image={modalImage} onClose={() => setModalImage(null)} modalClassName="glass-modal" />
    </div>
  );
};

export default DeveloperProjects; 