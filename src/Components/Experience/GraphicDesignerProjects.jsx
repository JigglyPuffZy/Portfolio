import React from 'react';
import BrandAwareness1 from '../../assets/img/Brand Awareness 1.jpg';
import BrandAwareness2 from '../../assets/img/Brand Awareness 2.jpg';
import BrandAwareness3 from '../../assets/img/Brand Awareness 3.jpg';
import BrandAwareness4 from '../../assets/img/Brand awareness 4.jpg';
import BrandAwareness5 from '../../assets/img/Brand Awareness 5.jpg';
import BookCover1 from '../../assets/img/BookCover1.jpg';
import BookCover2 from '../../assets/img/BookCover2.jpg';
import BookCover3 from '../../assets/img/BookCover3.jpg';
import BookCover4 from '../../assets/img/BookCover4.png';
import BookCover5 from '../../assets/img/BookCover5.png';
import BookCover6 from '../../assets/img/BookCover6.png';
import Ads1 from '../../assets/img/Ads Poster 1.jpg';
import Ads2 from '../../assets/img/Ads Poster 2.jpg';
import Newspaper1 from '../../assets/img/NewsPaper1.jpg';
import Newspaper2 from '../../assets/img/NewsPaper2.jpg';
import Newspaper3 from '../../assets/img/NewsPaper3.jpg';
import Newspaper4 from '../../assets/img/NewsPaper4.jpg';
import Newspaper5 from '../../assets/img/NewsPaper5.jpg';
import Newspaper6 from '../../assets/img/NewsPaper6.jpg';
import Shoes1 from '../../assets/img/Shoes1.png';
import Shoes2 from '../../assets/img/Shoes2.png';
import Shoes3 from '../../assets/img/Shoes3.png';
import Shoes4 from '../../assets/img/shoes4.png';
import CAR1 from '../../assets/img/Car1.png';
import CAR2 from '../../assets/img/Car2.png';
import CAR3 from '../../assets/img/Car3.png';
import CAR4 from '../../assets/img/Car4.png';
import CAR5 from '../../assets/img/Car5.png';
import Nba1 from '../../assets/img/Nba1.png';
import nba2 from '../../assets/img/nba2.png';
import nba3 from '../../assets/img/nba3.png';
import nba4 from '../../assets/img/nba4.png';
import ImageModal from '../ImageModal';

const brandProjects = [
  { title: 'Brand Awareness Campaign 1', mainImage: BrandAwareness1 },
  { title: 'Brand Awareness Campaign 2', mainImage: BrandAwareness2 },
  { title: 'Brand Awareness Campaign 3', mainImage: BrandAwareness3 },
  { title: 'Brand Awareness Campaign 4', mainImage: BrandAwareness4 },
  { title: 'Brand Awareness Campaign 5', mainImage: BrandAwareness5 },
];
const bookProjects = [
  { title: 'The Devil Behind the Mask', mainImage: BookCover1 },
  { title: 'The Man Out of Time', mainImage: BookCover2 },
  { title: 'Learn Graphic Design Easily', mainImage: BookCover3 },
  { title: 'The Evil Forest', mainImage: BookCover4 },
  { title: 'The Final Path', mainImage: BookCover5 },
  { title: 'The Vanishing Mountain', mainImage: BookCover6 },
];
const adProjects = [
  { title: 'Poster Ads 1', mainImage: Ads1 },
  { title: 'Poster Ads 2', mainImage: Ads2 },
];
const newspaperProjects = [
  { title: 'I was Reincarnated as the 7th Prince', mainImage: Newspaper1 },
  { title: 'About Me Newspaper', mainImage: Newspaper2 },
  { title: 'Newspaper About Upgrading the Business', mainImage: Newspaper3 },
  { title: 'Oggy And The Cockroaches', mainImage: Newspaper4 },
  { title: 'Santo Tomas Newspaper', mainImage: Newspaper5 },
  { title: 'Solo Leveling', mainImage: Newspaper6 },
];
const shoesProjects = [
  { title: 'Shoe Design 1', mainImage: Shoes1 },
  { title: 'Shoe Design 2', mainImage: Shoes2 },
  { title: 'Shoe Design 3', mainImage: Shoes3 },
  { title: 'Shoe Design 4', mainImage: Shoes4 },
];
const carProjects = [
  { title: '911 Carrera', mainImage: CAR1 },
  { title: '911 Targa 4 GTS', mainImage: CAR2 },
  { title: '911 Turbo', mainImage: CAR3 },
  { title: 'Ford Mustang Shelby', mainImage: CAR4 },
  { title: '911 GT3 RS', mainImage: CAR5 },
];
const nbaProjects = [
  { title: 'NBA Poster 1', mainImage: Nba1 },
  { title: 'NBA Poster 2', mainImage: nba2 },
  { title: 'NBA Poster 3', mainImage: nba3 },
  { title: 'NBA Poster 4', mainImage: nba4 },
];

// Add a subtle geometric SVG background overlay
const GeometricBg = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none opacity-10 z-0"
    width="100%"
    height="100%"
    viewBox="0 0 800 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#60a5fa" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="800" height="600" fill="url(#grid)" />
  </svg>
);

const GraphicDesignerProjects = () => {
  const [modalImage, setModalImage] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

  // Modal open/close with animation
  const handleOpenModal = (img) => {
    setModalImage(img);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => setModalImage(null), 300); // match animation duration
  };

  // Card base classes for glassmorphism and glowing hover
  const cardBase =
    'group bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-100 dark:border-blue-700 flex flex-col overflow-hidden transform transition duration-300 cursor-pointer relative before:absolute before:inset-0 before:rounded-3xl before:pointer-events-none before:transition before:duration-300 before:opacity-0 hover:before:opacity-100 before:shadow-[0_0_32px_8px_rgba(96,165,250,0.15)]';
  const cardHover =
    'hover:scale-[1.04] hover:shadow-blue-200 dark:hover:shadow-blue-900 hover:border-blue-400 hover:z-20 hover:-translate-y-2 hover:rotate-1';
  const cardPadding = 'p-8';

  // Section title classes
  const sectionTitle =
    'text-2xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-slate-100';

  // Card title classes
  const cardTitle =
    'text-xl font-bold mb-1 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300';

  // Optional: Add descriptions for each project (example only for Brand)
  const brandDescriptions = [
    'A campaign to boost brand awareness with modern, clean visuals.',
    'A fresh approach to brand storytelling.',
    'Creative assets for a multi-channel brand push.',
    'Minimalist branding for a new product line.',
    'Vibrant campaign for digital and print.',
  ];

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
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-lg px-6 py-3 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-blue-100 dark:border-blue-700 shadow-xl animate-fade-in-up" style={{boxShadow:'0 4px 32px 0 rgba(96,165,250,0.10)'}}>Graphic Designer Projects</h1>
            <div className="mt-2 h-2 w-32 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 blur-sm opacity-60 animate-pulse" />
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full max-w-6xl">
        {/* Brand Projects */}
        <h2 className={sectionTitle}>Brand Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {brandProjects.map((project, idx) => (
            <div
              key={idx}
              className={`${cardBase} ${cardHover} ${cardPadding}`}
              style={{ perspective: '800px' }}
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => handleOpenModal(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className={cardTitle}>{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-2 flex-1 text-base">{brandDescriptions[idx]}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Book Cover Projects */}
        <h2 className={sectionTitle}>Book Cover Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {bookProjects.map((project, idx) => (
            <div
              key={idx}
              className={`${cardBase} ${cardHover} ${cardPadding}`}
              style={{ perspective: '800px' }}
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => handleOpenModal(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className={cardTitle}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* Ad Projects */}
        <h2 className={sectionTitle}>Ad Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {adProjects.map((project, idx) => (
            <div
              key={idx}
              className={`${cardBase} ${cardHover} ${cardPadding}`}
              style={{ perspective: '800px' }}
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => handleOpenModal(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className={cardTitle}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* Newspaper Projects */}
        <h2 className={sectionTitle}>Newspaper Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newspaperProjects.map((project, idx) => (
            <div
              key={idx}
              className={`${cardBase} ${cardHover} ${cardPadding}`}
              style={{ perspective: '800px' }}
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => handleOpenModal(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className={cardTitle}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* Shoe Design Projects */}
        <h2 className={sectionTitle}>Shoe Design Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {shoesProjects.map((project, idx) => (
            <div
              key={idx}
              className={`${cardBase} ${cardHover} ${cardPadding}`}
              style={{ perspective: '800px' }}
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => handleOpenModal(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className={cardTitle}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* Car Projects */}
        <h2 className={sectionTitle}>Car Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {carProjects.map((project, idx) => (
            <div
              key={idx}
              className={`${cardBase} ${cardHover} ${cardPadding}`}
              style={{ perspective: '800px' }}
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => handleOpenModal(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className={cardTitle}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* NBA Poster Projects */}
        <h2 className={sectionTitle}>NBA Poster Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {nbaProjects.map((project, idx) => (
            <div
              key={idx}
              className={`${cardBase} ${cardHover} ${cardPadding}`}
              style={{ perspective: '800px' }}
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => handleOpenModal(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className={cardTitle}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal with soft fade/scale animation and glowing effect */}
      {modalImage && (
        <ImageModal image={modalImage} onClose={handleCloseModal} modalClassName="glass-modal" />
      )}
      {/* Modal animation keyframes */}
      <style>{`
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
};

export default GraphicDesignerProjects; 