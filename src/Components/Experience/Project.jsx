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
import ARC from "../../assets/img/ARC.png";
import ARCMobile from "../../assets/img/arc mobile.png";

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
    platform: "Web",
    tech: ["Node.js", "Express", "ChatGPT API", "AI Assistant", "RESTful APIs"],
    link: "https://santi-doc-cy6n.vercel.app/",
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
    image: ARC,
    title: "ARC - Australian Rewards Club (Web)",
    description: "UI/UX design for the Australian Rewards Club web app, created in Figma. A comprehensive rewards platform with modern design and intuitive user experience. [View on Figma](https://www.figma.com/design/yMTyPxE0fDEwOBf3qAqPNP/ARC-WEB?node-id=0-1&p=f&t=Ko3FbWaPHcuRAI0D-0)",
    tags: ["UI/UX Design"],
    category: "uiux",
    categoryLabel: "UX/UI Design",
    type: "Web UI/UX",
    figma: "https://www.figma.com/design/yMTyPxE0fDEwOBf3qAqPNP/ARC-WEB?node-id=0-1&p=f&t=Ko3FbWaPHcuRAI0D-0",
  },
  {
    image: ARCMobile,
    title: "Australian Rewards Club Mobile UI",
    description: "UI/UX design for the Australian Rewards Club mobile app, created in Figma. A mobile-first rewards platform with intuitive navigation and seamless user experience. [View on Figma](https://www.figma.com/design/bNtCVbo3LXVZaoCEl3RtmV/WEB-APP-VIEW-OF-AUSTRALIAN-REWARDS-CLUB?node-id=66-6&t=fpFBPiDTn72vxUEY-0)",
    tags: ["UI/UX Design"],
    category: "uiux",
    categoryLabel: "UX/UI Design",
    type: "Mobile UI/UX",
    figma: "https://www.figma.com/design/bNtCVbo3LXVZaoCEl3RtmV/WEB-APP-VIEW-OF-AUSTRALIAN-REWARDS-CLUB?node-id=66-6&t=fpFBPiDTn72vxUEY-0",
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
      className="min-h-screen py-24 relative overflow-hidden bg-white dark:bg-dark-950"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {/* Ultra-Modern Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 bg-mesh dark:bg-mesh-dark opacity-40" />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-accent-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-tr from-accent-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-accent-50 dark:from-blue-900/20 dark:to-accent-900/20 rounded-full border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-xl shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-accent-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-accent-600 dark:from-blue-400 dark:to-accent-400 bg-clip-text text-transparent">Portfolio Showcase</span>
            <FaRocket className="w-4 h-4 text-blue-500 dark:text-blue-400" />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-accent-600 to-blue-600 dark:from-blue-400 dark:via-accent-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Featured Projects
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
            Crafting exceptional digital experiences through innovative front-end development and stunning UI/UX design
          </p>
        </div>
        {/* Modern Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`group relative px-8 py-3.5 rounded-2xl font-semibold text-base transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400 focus-visible:ring-offset-2 flex items-center gap-3 overflow-hidden ${
                activeFilter === f.key
                  ? "bg-gradient-to-r from-blue-600 to-accent-600 text-white scale-105 shadow-glow"
                  : "bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:scale-105 shadow-lg hover:shadow-xl"
              }`}
              onClick={() => setActiveFilter(f.key)}
              tabIndex={0}
              aria-pressed={activeFilter === f.key}
              aria-label={`Show ${f.label}`}
            >
              {/* Shimmer effect on active */}
              {activeFilter === f.key && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {f.key === 'all' && <FaReact className={activeFilter === f.key ? "text-white" : "text-blue-500"} />}
                {f.key === 'frontend' && <FaReact className={activeFilter === f.key ? "text-white" : "text-blue-500"} />}
                {f.key === 'uiux' && <FaPalette className={activeFilter === f.key ? "text-white" : "text-pink-500"} />}
                {f.label}
              </span>
            </button>
          ))}
        </div>
        {/* Ultra-Modern Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length === 0 && activeFilter === "uiux" && (
            <div className="col-span-3 text-center text-gray-400 text-lg py-24">No UX/UI Design projects yet. Upload coming soon.</div>
          )}
          {filtered.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white/90 dark:bg-dark-800/90 backdrop-blur-2xl rounded-3xl shadow-premium hover:shadow-premium-lg border border-gray-200/60 dark:border-gray-700/60 flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] focus-within:ring-2 focus-within:ring-blue-400 outline-none cursor-pointer"
              tabIndex={0}
              aria-label={`View details for ${project.title}`}
              style={{ minHeight: "450px" }}
            >
              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-accent-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl pointer-events-none" />
              
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-accent-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Image Container */}
                <div 
                  className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-700 dark:to-dark-600 flex items-center justify-center overflow-hidden cursor-zoom-in group/image"
                  onClick={() => setModalImage(project.image)}
                  title="Click to view full image"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-56 transition-all duration-500 group-hover/image:scale-110 group-hover/image:rotate-1"
                  />
                  
                  {/* Overlay gradient on image hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Label */}
                  <span className="absolute top-4 left-4 px-4 py-2 rounded-xl font-semibold text-xs tracking-wide backdrop-blur-xl bg-white/90 dark:bg-dark-800/90 text-gray-800 dark:text-gray-200 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                    {project.categoryLabel}
                  </span>
                  
                  {/* Platform/Type Badge */}
                  {project.platform && (
                    <span className="absolute top-4 right-4 px-4 py-2 rounded-xl font-semibold text-xs tracking-wide backdrop-blur-xl bg-blue-500/90 text-white border border-blue-400/50 shadow-lg">
                      {project.platform}
                    </span>
                  )}
                  {project.type && (
                    <span className="absolute top-4 right-4 px-4 py-2 rounded-xl font-semibold text-xs tracking-wide backdrop-blur-xl bg-pink-500/90 text-white border border-pink-400/50 shadow-lg">
                      {project.type}
                    </span>
                  )}
                  
                  {/* Zoom indicator */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 shadow-lg">
                    <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6 gap-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-accent-600 dark:group-hover:from-blue-400 dark:group-hover:to-accent-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1">
                    {project.description.replace(/\[.*?\]\(.*?\)/g, '')}
                  </p>
                  
                  {/* Live Link Button */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center justify-center gap-2 mt-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg hover:shadow-glow transition-all duration-300 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 relative overflow-hidden"
                      style={{ width: 'fit-content' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <FaExternalLinkAlt className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                        View Page
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                    </a>
                  )}
                  
                  {/* Figma Button */}
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center justify-center gap-2 mt-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:from-pink-600 hover:via-red-600 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-glow transition-all duration-300 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 relative overflow-hidden"
                      style={{ width: 'fit-content' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <FaExternalLinkAlt className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                        View on Figma
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                    </a>
                  )}
                  
                  {/* Tech badges for front-end projects */}
                  {project.category === "frontend" && project.tech && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i} 
                          className="flex items-center gap-1.5 bg-gradient-to-r from-blue-50 to-accent-50 dark:from-blue-900/30 dark:to-accent-900/30 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-lg text-xs font-semibold border border-blue-200/50 dark:border-blue-700/50 shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          {techIcons[tech] || null}
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-gray-600/50">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
