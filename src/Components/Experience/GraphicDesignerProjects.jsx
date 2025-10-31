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
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 bg-white dark:bg-slate-900 font-sans overflow-x-hidden">
      <div className="relative z-20 w-full flex flex-col items-center mb-10">
        <div className="relative flex flex-col items-center w-full">
          <div className="relative flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-lg px-6 py-3 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-blue-100 dark:border-blue-700 shadow-xl">
              Graphic Design Projects
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mt-4 text-center max-w-2xl">
              This section is currently being updated. Please check back soon for new graphic design projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignerProjects; 