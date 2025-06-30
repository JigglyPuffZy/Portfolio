import React from 'react';
import WebPortfolio1 from '../../assets/img/webportfolio1.png';
import WebPortfolio2 from '../../assets/img/webportfolio2.png';
import WebPortfolio3 from '../../assets/img/webportfolio3.png';
import WebPortfolio4 from '../../assets/img/webportfolio4.png';
import WebPortfolio5 from '../../assets/img/webportfolio5.png';
import Marians from '../../assets/img/Marian\'s.png';
import LaborLinkz from '../../assets/img/LaborLinkz.png';
import QuizWhirl from '../../assets/img/QuizWHirl.png';
import ImageModal from '../ImageModal';

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
];

const DeveloperProjects = () => {
  const [modalImage, setModalImage] = React.useState(null);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 mt-24 bg-white dark:bg-slate-900">
      <h1 className="text-4xl font-bold mb-6 tracking-tight">Front-End Developer Projects</h1>
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-4">Mobile Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mobileProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-blue-100 dark:border-blue-700 transform transition duration-300 hover:scale-105 hover:shadow-3xl hover:border-blue-500 cursor-pointer group"
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => setModalImage(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-semibold shadow-sm border border-blue-200 dark:border-blue-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-4">Web Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-blue-100 dark:border-blue-700 transform transition duration-300 hover:scale-105 hover:shadow-3xl hover:border-blue-500 cursor-pointer group"
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => setModalImage(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-semibold shadow-sm border border-blue-200 dark:border-blue-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
    </div>
  );
};

export default DeveloperProjects; 