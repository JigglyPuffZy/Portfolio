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

import ImageModal from "../ImageModal.jsx";
import { FaReact, FaMobileAlt, FaPalette, FaRocket, FaUserFriends, FaExternalLinkAlt } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiJavascript, SiFirebase } from 'react-icons/si';

import TriregMobile from "../../assets/img/Trireg.png";
import VtrackMobile from "../../assets/img/Vtrack.png";
import ProAssisting from "../../assets/img/proassisting.png";
import Brioray from "../../assets/img/brioray.png";
import Plantpal from "../../assets/img/Plantpal.png";
import Sas from "../../assets/img/Sas.png";
import Planto from "../../assets/img/Planto.png";

import DoctorSanti from "../../assets/img/doc santi.png";

const PROJECTS = [
  // --- FRONT-END PROJECTS ---
  {
    image: WebPortfolio1,
    title: "Together WeComply",
    description: "Developed a mobile-first school attendance system with QR scanning for fast event check-in and integrated sanction tracking features for administrators. (Mar 2024 – Jun 2024)",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Web",
    tech: ["React", "Figma", "UI/UX Design", "QR Code System"],
  },

  {
    image: WebPortfolio3,
    title: "TriReg Web & Mobile",
    description: "Developed a tricycle permit registration platform using Flutter, featuring QR code generation, SMS notifications, and admin dashboards for tracking registrations. (May 2025 – Oct 2025)",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Web",
    tech: ["Flutter", "Dart", "Figma", "QR Code System", "Cross-Platform Development"],
  },
  {
    image: WebPortfolio4,
    title: "VTrack Web & Mobile",
    description: "Developed a violator tracking system using Flutter, featuring role-based dashboards, citation tools, and SMS alerts for local government units. (May 2025 – Oct 2025)",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Web",
    tech: ["Flutter", "Dart", "Figma", "Cross-Platform Development", "Real-time Data"],
  },

  {
    image: Marians,
    title: "Marian's Pottery",
    description: "Created a shopping app with COD and GCash payment options, optimizing the checkout experience for mobile users. (Aug 2024 – Oct 2024)",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Mobile",
    tech: ["React Native", "Expo Router", "E-commerce"],
  },
  {
    image: LaborLinkz,
    title: "LaborLinkz",
    description: "Built a job-matching app for blue-collar workers using React.js and Figma. Designed role-based dashboards to streamline the matching process for admins, clients, and workers. (Nov 2023 – Jan 2024)",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Web & Mobile",
    tech: ["React Native", "Figma", "UI/UX Design", "Mobile/Web Development"],
  },
  {
    image: QuizWhirl,
    title: "Quiz Whirl App",
    description: "Built an interactive quiz app with score tracking and a responsive interface for an engaging user experience. (Aug 2024 – Oct 2024)",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Mobile",
    tech: ["React Native", "Quiz Application", "Mobile Platform"],
  },
  {
    image: TriregMobile,
    title: "TriReg Mobile App",
    description: "Developed a tricycle permit registration platform using Flutter, featuring QR code generation, SMS notifications, and admin dashboards for tracking registrations. (May 2025 – Oct 2025)",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Mobile",
    tech: ["Flutter", "Dart", "Figma", "QR Code System", "Cross-Platform Development"],
  },
  {
    image: VtrackMobile,
    title: "VTrack Mobile App",
    description: "Developed a violator tracking system using Flutter, featuring role-based dashboards, citation tools, and SMS alerts for local government units. (May 2025 – Oct 2025)",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Mobile",
    tech: ["Flutter", "Dart", "Figma", "Cross-Platform Development", "Real-time Data"],
  },
  {
    image: DoctorSanti,
    title: "Doctor Santi",
    description: "Developed an AI-powered virtual veterinarian platform using React, TypeScript, Node.js, and OpenAI GPT-3.5 to provide instant pet care advice. (July 2025 – Present)",
    tags: ["Front-End"],
    category: "frontend",
    categoryLabel: "Front-End",
    platform: "Mobile",
    tech: ["Node.js", "Express", "ChatGPT API", "AI Assistant", "RESTful APIs"],
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
  {
    image: Plantpal,
    title: "PlantPal UI/UX Design",
    description: "The PlantPal app is a plant care and community app designed to help users track, monitor, and care for their plants in a simple and calming way. Created in Figma with focus on user-friendly plant management features. [View on Figma](https://www.figma.com/design/7A48SiV6ks8z2NKc1BOOMO/UI-UX-PROJECt?node-id=27-6&t=mFMb4oHeInEtkZdP-0)",
    tags: ["UI/UX Design"],
    category: "uiux",
    categoryLabel: "UX/UI Design",
    type: "Mobile UI/UX",
    figma: "https://www.figma.com/design/7A48SiV6ks8z2NKc1BOOMO/UI-UX-PROJECt?node-id=27-6&t=mFMb4oHeInEtkZdP-0",
  },
  {
    image: Sas,
    title: "Sourcing Analysis Simplified",
    description: "Powerful toolkit for Amazon sellers to analyze products for profitability, eligibility, and sales potential. Created in Figma with focus on data visualization and user-friendly analytics interface. [View on Figma](https://www.figma.com/design/p3DY30bs9Nt9f1ZCMKK97q/Sourcing-Analysis-Simplified?node-id=0-1&p=f&t=bKcLMHFOUD0GSrRN-0)",
    tags: ["UI/UX Design"],
    category: "uiux",
    categoryLabel: "UX/UI Design",
    type: "Web UI/UX",
    figma: "https://www.figma.com/design/p3DY30bs9Nt9f1ZCMKK97q/Sourcing-Analysis-Simplified?node-id=0-1&p=f&t=bKcLMHFOUD0GSrRN-0",
  },
  {
    image: Planto,
    title: "Planto",
    description: "It's an e-commerce system for plants — designed to help users discover, learn about, and purchase houseplants that make their homes or offices feel fresher, greener, and more relaxing. Created in Figma with focus on intuitive shopping experience and plant discovery features. [View on Figma](https://www.figma.com/design/FhdXWVWA6blrVGY4r6k4AC/Planto?node-id=0-1&p=f&t=ZXxaDVWDVcUh0o4A-0)",
    tags: ["UI/UX Design"],
    category: "uiux",
    categoryLabel: "UX/UI Design",
    type: "Mobile UI/UX",
    figma: "https://www.figma.com/design/FhdXWVWA6blrVGY4r6k4AC/Planto?node-id=0-1&p=f&t=ZXxaDVWDVcUh0o4A-0",
  },
];

const FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "frontend", label: "Front-End" },
  { key: "uiux", label: "UX/UI Design" },
];

const CATEGORY_COLORS = {
  "Front-End": "text-blue-600 bg-blue-50",
  "UX/UI Design": "text-pink-600 bg-pink-50",
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
