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

const GraphicDesignerProjects = () => {
  const [modalImage, setModalImage] = React.useState(null);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 mt-24 bg-white dark:bg-slate-900">
      <h1 className="text-4xl font-bold mb-6 tracking-tight">Graphic Designer Projects</h1>
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-4">Brand Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {brandProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-3xl hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer group"
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => setModalImage(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-4">Book Cover Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {bookProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-3xl hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer group"
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => setModalImage(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-4">Ad Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {adProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-3xl hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer group"
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => setModalImage(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-4">Newspaper Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newspaperProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-3xl hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer group"
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => setModalImage(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-4">Shoe Design Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {shoesProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-3xl hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer group"
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => setModalImage(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-4">Car Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {carProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-3xl hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer group"
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => setModalImage(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-4">NBA Poster Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {nbaProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-3xl hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer group"
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-56 sm:h-64 rounded-t-2xl group-hover:opacity-90 transition duration-300 cursor-zoom-in"
                onClick={() => setModalImage(project.mainImage)}
              />
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
    </div>
  );
};

export default GraphicDesignerProjects; 