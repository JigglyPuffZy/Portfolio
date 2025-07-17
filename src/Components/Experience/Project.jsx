import { useState } from "react";
import "./Project.css";
import WebPortfolio1 from "../../assets/img/webportfolio1.png";
import WebPortfolio2 from "../../assets/img/webportfolio2.png";
import WebPortfolio3 from "../../assets/img/webportfolio3.png";
import WebPortfolio4 from "../../assets/img/webportfolio4.png";
import WebPortfolio5 from "../../assets/img/webportfolio5.png";
import Marians from "../../assets/img/Marian's.png";
import LaborLinkz from "../../assets/img/LaborLinkz.png";
import QuizWhirl from "../../assets/img/QuizWHirl.png";
import BookCover1 from "../../assets/img/BookCover1.jpg";
import BookCover2 from "../../assets/img/BookCover2.jpg";
import BookCover3 from "../../assets/img/BookCover3.jpg";
import BookCover4 from "../../assets/img/BookCover4.png";
import BookCover5 from "../../assets/img/BookCover5.png";
import BookCover6 from "../../assets/img/BookCover6.png";
import Ads1 from "../../assets/img/Ads Poster 1.jpg";
import Ads2 from "../../assets/img/Ads Poster 2.jpg";
import BrandAwareness1 from "../../assets/img/Brand Awareness 1.jpg";
import BrandAwareness2 from "../../assets/img/Brand Awareness 2.jpg";
import BrandAwareness3 from "../../assets/img/Brand Awareness 3.jpg";
import BrandAwareness4 from "../../assets/img/Brand awareness 4.jpg";
import BrandAwareness5 from "../../assets/img/Brand Awareness 5.jpg";
import Newspaper1 from "../../assets/img/NewsPaper1.jpg";
import Newspaper2 from "../../assets/img/NewsPaper2.jpg";
import Newspaper3 from "../../assets/img/NewsPaper3.jpg";
import Newspaper4 from "../../assets/img/NewsPaper4.jpg";
import Newspaper5 from "../../assets/img/NewsPaper5.jpg";
import Newspaper6 from "../../assets/img/NewsPaper6.jpg";
import ImageModal from "../ImageModal.jsx";
import { FaReact, FaMobileAlt, FaPalette, FaRocket, FaUserFriends, FaExternalLinkAlt } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiJavascript, SiFirebase } from 'react-icons/si';
import Shoes1 from "../../assets/img/Shoes1.png";
import Shoes2 from "../../assets/img/Shoes2.png";
import Shoes3 from "../../assets/img/Shoes3.png";
import Shoes4 from "../../assets/img/shoes4.png";
import TriregMobile from "../../assets/img/Trireg.png";
import VtrackMobile from "../../assets/img/Vtrack.png";
import ProAssisting from "../../assets/img/proassisting.png";
import Brioray from "../../assets/img/brioray.png";

const PROJECTS = [
  // --- FRONT-END PROJECTS ---
  {
    image: WebPortfolio1,
    title: "We Comply",
    description: "A compliance management web app with a modern, responsive UI.",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Web",
    tech: ["React", "Tailwind CSS", "Modern UI/UX", "Performance"],
  },
  {
    image: WebPortfolio2,
    title: "Personal Portfolio",
    description: "A personal website to showcase my creative work and experience.",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Web",
    tech: ["React", "Tailwind CSS", "Modern UI/UX", "Performance"],
  },
  {
    image: WebPortfolio3,
    title: "TriReg",
    description: "A registration platform with a clean, user-friendly interface.",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Web",
    tech: ["React", "Tailwind CSS", "Modern UI/UX", "Performance"],
  },
  {
    image: WebPortfolio4,
    title: "Vtrack",
    description: "A vehicle tracking dashboard with real-time updates.",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Web",
    tech: ["React", "Tailwind CSS", "Modern UI/UX", "Performance"],
  },
  {
    image: WebPortfolio5,
    title: "Personal Portfolio 2",
    description: "A second iteration of my portfolio with enhanced features.",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Web",
    tech: ["React", "Tailwind CSS", "Modern UI/UX", "Performance"],
  },
  {
    image: Marians,
    title: "Marians Mobile App",
    description: "A mobile app for Marians with seamless user experience.",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Mobile",
    tech: ["React Native", "Mobile UI/UX", "Redux", "Performance Optimization"],
  },
  {
    image: LaborLinkz,
    title: "LaborLinkz",
    description: "A freelancing platform for building community connections.",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Web & Mobile",
    tech: ["React Native", "Freelancing Platform", "Job Matching", "Mobile Development"],
  },
  {
    image: QuizWhirl,
    title: "Quiz Whirl App",
    description: "An interactive quiz app with multiple question types and score tracking.",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Mobile",
    tech: ["React Native", "Mobile UI/UX", "Redux", "Performance Optimization"],
  },
  {
    image: TriregMobile,
    title: "TriReg Mobile App",
    description: "A mobile registration platform with a clean, user-friendly interface and responsive design.",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Mobile",
    tech: ["React Native", "Mobile UI/UX", "Redux", "Performance Optimization"],
  },
  {
    image: VtrackMobile,
    title: "Vtrack Mobile App",
    description: "A mobile vehicle tracking dashboard with real-time updates and a seamless user experience.",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Mobile",
    tech: ["React Native", "Mobile UI/UX", "Redux", "Performance Optimization"],
  },
  // --- GRAPHIC DESIGN PROJECTS ---
  {
    image: BookCover1,
    title: "The Devil Behind the Mask",
    description: "Book cover design for a mystery novel.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Book Cover",
  },
  {
    image: BookCover2,
    title: "The Man Out of Time",
    description: "Book cover design for a science fiction story.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Book Cover",
  },
  {
    image: BookCover3,
    title: "Learn Graphic Design Easily",
    description: "Educational book cover for design beginners.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Book Cover",
  },
  {
    image: BookCover4,
    title: "The Evil Forest",
    description: "Book cover for a fantasy adventure.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Book Cover",
  },
  {
    image: BookCover5,
    title: "The Final Path",
    description: "Book cover for a dramatic novel.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Book Cover",
  },
  {
    image: BookCover6,
    title: "The Vanishing Mountain",
    description: "Book cover for a suspenseful story.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Book Cover",
  },
  {
    image: Ads1,
    title: "Poster Ads 1",
    description: "Poster ad designed to capture attention.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Poster",
  },
  {
    image: Ads2,
    title: "Poster Ads 2",
    description: "Poster ad for effective message delivery.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Poster",
  },
  {
    image: BrandAwareness1,
    title: "Brand Awareness Campaign 1",
    description: "Branding campaign for innovative marketing.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Branding",
  },
  {
    image: BrandAwareness2,
    title: "Brand Awareness Campaign 2",
    description: "Branding campaign for creative solutions.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Branding",
  },
  {
    image: BrandAwareness3,
    title: "Brand Awareness Campaign 3",
    description: "Branding campaign for marketing strategies.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Branding",
  },
  {
    image: BrandAwareness4,
    title: "Brand Awareness Campaign 4",
    description: "Branding campaign for design solutions.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Branding",
  },
  {
    image: BrandAwareness5,
    title: "Brand Awareness Campaign 5",
    description: "Branding campaign for business growth.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Branding",
  },
  {
    image: Newspaper1,
    title: "I was Reincarnated as the 7th Prince",
    description: "Newspaper layout for a fantasy series.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Newspaper",
  },
  {
    image: Newspaper2,
    title: "About Me Newspaper",
    description: "Personal newspaper-style layout.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Newspaper",
  },
  {
    image: Newspaper3,
    title: "Newspaper About Upgrading the Business",
    description: "Business upgrade newspaper layout.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Newspaper",
  },
  {
    image: Newspaper4,
    title: "Oggy And The Cockroaches",
    description: "Newspaper layout for a cartoon feature.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Newspaper",
  },
  {
    image: Newspaper5,
    title: "Santo Tomas Newspaper",
    description: "Local news layout for Santo Tomas.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Newspaper",
  },
  {
    image: Newspaper6,
    title: "Solo Leveling",
    description: "Newspaper layout for a popular series.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Newspaper",
  },
  {
    image: Shoes1,
    title: "Shoe Design 1",
    description: "Custom shoe design with modern aesthetics.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Shoe Design",
  },
  {
    image: Shoes2,
    title: "Shoe Design 2",
    description: "Creative sneaker concept for urban style.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Shoe Design",
  },
  {
    image: Shoes3,
    title: "Shoe Design 3",
    description: "Sporty shoe design with bold colorways.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Shoe Design",
  },
  {
    image: Shoes4,
    title: "Shoe Design 4",
    description: "Minimalist shoe design for everyday wear.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Shoe Design",
  },
  {
    image: require("../../assets/img/Car1.png"),
    title: "911 Carrera",
    description: "Photo manipulation and graphic edit of a Porsche 911 Carrera.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Car Edit",
  },
  {
    image: require("../../assets/img/Car2.png"),
    title: "911 Targa 4 GTS",
    description: "Creative car edit for the Porsche 911 Targa 4 GTS.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Car Edit",
  },
  {
    image: require("../../assets/img/Car3.png"),
    title: "911 Turbo",
    description: "Stylized graphic design of a Porsche 911 Turbo.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Car Edit",
  },
  {
    image: require("../../assets/img/Car4.png"),
    title: "Ford Mustang Shelby",
    description: "Photo manipulation and creative edit of a Ford Mustang Shelby.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Car Edit",
  },
  {
    image: require("../../assets/img/Car5.png"),
    title: "911 GT3 RS",
    description: "Graphic design and color grading for a Porsche 911 GT3 RS.",
    tags: ["Graphic Design"],
    category: "graphic",
    categoryLabel: "Graphic Design",
    type: "Car Edit",
  },
  // Insert UI/UX Design projects for Vtrack, Trireg, and LaborLinkz
  {
    image: VtrackMobile,
    title: "Vtrack UI/UX Design (Mobile)",
    description: "UI/UX design for the Vtrack mobile app, created in Figma. Focused on seamless user experience and modern interface for mobile. [View on Figma](https://www.figma.com/design/BBSDb1xjDozdEwui2vIAeb/VTRACK-Mobile?node-id=0-1&p=f&t=JuBJWG9TxUcwUFMD-0)",
    tags: ["UI/UX Design"],
    category: "uiux",
    categoryLabel: "UX/UI Design",
    type: "Mobile UI/UX",
    figma: "https://www.figma.com/design/BBSDb1xjDozdEwui2vIAeb/VTRACK-Mobile?node-id=0-1&p=f&t=JuBJWG9TxUcwUFMD-0",
  },
  {
    image: TriregMobile,
    title: "TriReg UI/UX Design (Mobile)",
    description: "UI/UX design for the TriReg mobile app, crafted in Figma. Emphasized clean layouts and intuitive flows for mobile users. [View on Figma](https://www.figma.com/design/mO2Y5WmASDZNNuvSbEYtqs/TRIREG-NEW-MOBILE-APP?node-id=360-7&t=9EbKOhq0bAGZVN7q-0)",
    tags: ["UI/UX Design"],
    category: "uiux",
    categoryLabel: "UX/UI Design",
    type: "Mobile UI/UX",
    figma: "https://www.figma.com/design/mO2Y5WmASDZNNuvSbEYtqs/TRIREG-NEW-MOBILE-APP?node-id=360-7&t=9EbKOhq0bAGZVN7q-0",
  },
  {
    image: LaborLinkz,
    title: "LaborLinkz UI/UX Design (Mobile)",
    description: "UI/UX design for the LaborLinkz mobile app, designed in Figma. Prioritized accessibility and engaging user journeys for mobile. [View on Figma](https://www.figma.com/design/rlsh7gKzyxvC7Kw1xdloK2/Laborlinkz?t=JuBJWG9TxUcwUFMD-0)",
    tags: ["UI/UX Design"],
    category: "uiux",
    categoryLabel: "UX/UI Design",
    type: "Mobile UI/UX",
    figma: "https://www.figma.com/design/rlsh7gKzyxvC7Kw1xdloK2/Laborlinkz?t=JuBJWG9TxUcwUFMD-0",
  },
  {
    image: WebPortfolio4,
    title: "Vtrack UI/UX Design (Web)",
    description: "UI/UX design for the Vtrack web app, created in Figma. Focused on seamless user experience and modern interface for web. [View on Figma](https://www.figma.com/design/dNLjZlmTlTWOGJd4wpdK8I/VTRACK-Web-Prototype?node-id=0-1&p=f&t=JuBJWG9TxUcwUFMD-0)",
    tags: ["UI/UX Design"],
    category: "uiux",
    categoryLabel: "UX/UI Design",
    type: "Web UI/UX",
    figma: "https://www.figma.com/design/dNLjZlmTlTWOGJd4wpdK8I/VTRACK-Web-Prototype?node-id=0-1&p=f&t=JuBJWG9TxUcwUFMD-0",
  },
  {
    image: WebPortfolio3,
    title: "TriReg UI/UX Design (Web)",
    description: "UI/UX design for the TriReg web app, crafted in Figma. Emphasized clean layouts and intuitive flows for web users. [View on Figma](https://www.figma.com/design/tukviOiiuBGE4KOeuECMnI/TRIREG-NEW?t=9EbKOhq0bAGZVN7q-0)",
    tags: ["UI/UX Design"],
    category: "uiux",
    categoryLabel: "UX/UI Design",
    type: "Web UI/UX",
    figma: "https://www.figma.com/design/tukviOiiuBGE4KOeuECMnI/TRIREG-NEW?t=9EbKOhq0bAGZVN7q-0",
  },
  {
    image: ProAssisting,
    title: "Pro Assisting UI/UX Design (Web)",
    description: "UI/UX design for the Pro Assisting web app, created in Figma. Focused on professional workflows and intuitive user experience for web. [View on Figma](https://www.figma.com/design/gSL72RPA5UYsFqi2iAAsHA/Pro-Assisting?t=9EbKOhq0bAGZVN7q-0)",
    tags: ["UI/UX Design"],
    category: "uiux",
    categoryLabel: "UX/UI Design",
    type: "Web UI/UX",
    figma: "https://www.figma.com/design/gSL72RPA5UYsFqi2iAAsHA/Pro-Assisting?t=9EbKOhq0bAGZVN7q-0",
  },
  {
    image: Brioray,
    title: "Brioray UI/UX Design (Web)",
    description: "UI/UX design for the Brioray web app, created in Figma. Focused on modern aesthetics and user-friendly web experience. [View on Figma](https://www.figma.com/design/XVSqvw546Y7wON3PymZokB/Brioray?node-id=0-1&p=f&t=k9X840YzjxDVaPFx-0)",
    tags: ["UI/UX Design"],
    category: "uiux",
    categoryLabel: "UX/UI Design",
    type: "Web UI/UX",
    figma: "https://www.figma.com/design/XVSqvw546Y7wON3PymZokB/Brioray?node-id=0-1&p=f&t=k9X840YzjxDVaPFx-0",
  },
];

const FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "frontend", label: "Front-End" },
  { key: "uiux", label: "UX/UI Design" },
  { key: "graphic", label: "Graphic Design" },
];

const CATEGORY_COLORS = {
  "Front-End": "text-blue-600 bg-blue-50",
  "UX/UI Design": "text-pink-600 bg-pink-50",
  "Graphic Design": "text-green-600 bg-green-50",
};

// Badge color maps
// Remove PLATFORM_COLORS and TYPE_COLORS

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalImage, setModalImage] = useState(null);
  let filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);
  // If UX/UI Design is selected, show nothing (blank)

  // Tech icon mapping
  const techIcons = {
    'React': <FaReact className="text-blue-400" title="React" />, 
    'React Native': <FaMobileAlt className="text-blue-400" title="React Native" />,
    'Mobile UI/UX': <FaPalette className="text-blue-300" title="Mobile UI/UX" />,
    'Redux': <SiRedux className="text-purple-400" title="Redux" />,
    'Performance Optimization': <FaRocket className="text-blue-300" title="Performance Optimization" />,
    'Freelancing Platform': <FaUserFriends className="text-blue-300" title="Freelancing Platform" />,
    'Job Matching': <FaUserFriends className="text-blue-300" title="Job Matching" />,
    'Mobile Development': <FaMobileAlt className="text-blue-400" title="Mobile Development" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-400" title="Tailwind CSS" />,
    'Modern UI/UX': <FaPalette className="text-blue-300" title="Modern UI/UX" />,
    'Performance': <FaRocket className="text-blue-300" title="Performance" />,
    'JavaScript': <SiJavascript className="text-yellow-400" title="JavaScript" />,
    'Firebase': <SiFirebase className="text-orange-400" title="Firebase" />,
  };

  return (
    <section
      className="min-h-screen py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {/* Background decorative SVG dot pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-full border border-blue-200/50 dark:border-blue-700/50 shadow-sm">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Portfolio Showcase</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-200 dark:to-blue-400 tracking-tight">My Projects</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore a curated selection of my most impactful work in front-end development and graphic design. Each project highlights my commitment to quality, creativity, and user experience.
          </p>
        </div>
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`px-6 py-2 rounded-full font-semibold text-base transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400 focus-visible:ring-offset-2 border border-transparent shadow-md backdrop-blur-md flex items-center gap-2 ${
                activeFilter === f.key
                  ? "bg-blue-600 text-white scale-105 shadow-2xl animate-pulse"
                  : "bg-gray-100 text-gray-800 hover:bg-blue-50 hover:text-blue-700"
              }`}
              onClick={() => setActiveFilter(f.key)}
              tabIndex={0}
              aria-pressed={activeFilter === f.key}
              aria-label={`Show ${f.label}`}
            >
              {/* Add icons for each filter */}
              {f.key === 'all' && <FaReact className="text-blue-400" />}
              {f.key === 'frontend' && <FaReact className="text-blue-400" />}
              {f.key === 'uiux' && <FaPalette className="text-pink-400" />}
              {f.key === 'graphic' && <FaPalette className="text-green-400" />}
              {f.label}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length === 0 && activeFilter === "uiux" && (
            <div className="col-span-3 text-center text-gray-400 text-lg py-24">No UX/UI Design projects yet. Upload coming soon.</div>
          )}
          {filtered.map((project, idx) => (
            <div
              key={idx}
              className="relative group bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md rounded-3xl shadow-md hover:shadow-xl border border-gray-200 dark:border-neutral-700 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04] focus-within:ring-2 focus-within:ring-gray-400 outline-none cursor-pointer"
              tabIndex={0}
              aria-label={`View details for ${project.title}`}
              style={{ minHeight: "400px" }}
            >
              {/* Card gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-blue-900 dark:via-blue-950 dark:to-blue-900 opacity-0 group-hover:opacity-60 transition-all duration-500 rounded-3xl z-10 pointer-events-none" />
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="relative aspect-video bg-gray-100 dark:bg-neutral-800 flex items-center justify-center overflow-hidden rounded-t-3xl cursor-zoom-in group/image"
                  onClick={() => setModalImage(project.image)}
                  title="Click to view full image"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 sm:h-56 rounded-2xl transition-transform duration-300 group-hover/image:scale-105 shadow group-hover/image:shadow-lg"
                  />
                  {/* Category Label at top left */}
                  <span
                    className="absolute top-4 left-4 px-4 py-1 rounded-full font-semibold text-xs tracking-wide shadow bg-gray-100 text-gray-700 border border-gray-300"
                  >
                    {project.categoryLabel}
                  </span>
                  {/* Platform/Type Badge - neutral style, no color */}
                  {project.platform && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full font-semibold text-xs tracking-wide shadow bg-gray-200 text-gray-700 border border-gray-300">
                      {project.platform}
                    </span>
                  )}
                  {project.type && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full font-semibold text-xs tracking-wide shadow bg-gray-200 text-gray-700 border border-gray-300">
                      {project.type}
                    </span>
                  )}
                </div>
                <div className="flex-1 flex flex-col p-6 gap-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 leading-tight group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base mb-2 line-clamp-3">{project.description.replace(/\[.*?\]\(.*?\)/g, '')}</p>
                  {/* Figma Button */}
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white font-semibold shadow hover:from-pink-600 hover:to-yellow-500 transition-all duration-200 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                      style={{ width: 'fit-content' }}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      View on Figma
                    </a>
                  )}
                  {/* Tech badges for front-end projects */}
                  {project.category === "frontend" && project.tech && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="flex items-center gap-1 bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-medium tracking-wide border border-gray-300 shadow-sm">
                          {techIcons[tech] || null}
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Image Modal */}
      <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
    </section>
  );
};

export default Projects;
