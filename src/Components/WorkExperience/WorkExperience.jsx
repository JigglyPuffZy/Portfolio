import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './WorkExperience.css';

  const workExperience = [
    {
      id: 1,
      company: "LaborLinkz",
      position: "Front-End Developer & UI/UX Designer",
      location: "Remote",
      duration: "Nov 2023 - Jan 2024",
      description: "Built a job-matching app for blue-collar workers. Created the UI in Figma and developed responsive, role-based interfaces for admin, client, and worker users.",
      responsibilities: [
        "Designed UI/UX in Figma for web and mobile",
        "Developed responsive UIs for admin, client, and worker roles",
        "Integrated login, job search, notification, rating, and activity tracking",
        "Ensured accessibility and user-friendly design"
      ],
      technologies: ["React Native", "Figma", "UI/UX Design", "Mobile/Web Development"],
      achievements: [],
    },
    {
      id: 2,
      company: "Upwork Projects",
      position: "Graphic Designer",
      location: "Remote",
      duration: "Jan 2024 – Feb 2024",
      description: "Designed visual assets including logos, posters, and digital ads for local clients' online marketing campaigns.",
      responsibilities: [
        "Delivered brand-aligned logos and promotional posters",
        "Created digital ad displays optimized for online platforms",
        "Met tight deadlines with consistent visual quality"
      ],
      technologies: ["Adobe Creative Suite", "Logo Design", "Poster Creation", "Digital Advertising"],
      achievements: [],
    },
    {
      id: 3,
      company: "Together WeComply",
      position: "Front-End Developer & UI/UX Designer",
      location: "Remote",
      duration: "Mar 2024 – Jun 2024",
      description: "Built a school attendance system with QR check-in and event logs. Designed the full UI in Figma and developed a clean, mobile-friendly experience.",
      responsibilities: [
        "Designed responsive UI for students and admins",
        "Developed event check-in and logging features",
        "Implemented front-end logic for sanction tracking",
        "Focused on performance and usability"
      ],
      technologies: ["React", "Figma", "UI/UX Design", "QR Code System"],
      achievements: [],
    },
    {
      id: 4,
      company: "Marian’s Pottery",
      position: "Front-End Developer",
      location: "Remote",
      duration: "Aug 2024 – Oct 2024",
      description: "Built a mobile shopping app using React Native and Expo Router, including payment flows, cart features, and order tracking.",
      responsibilities: [
        "Developed shopping and checkout front-end",
        "Integrated payment options (COD, GCash)",
        "Optimized layout for cross-device usability"
      ],
      technologies: ["React Native", "Expo Router", "E-commerce"],
      achievements: [],
    },
    {
      id: 5,
      company: "Quiz Whirl App",
      position: "Front-End Developer",
      location: "Remote",
      duration: "Aug 2024 – Oct 2024",
      description: "Developed an interactive mobile quiz app with multiple question types and responsive UI.",
      responsibilities: [
        "Built front-end quiz flow with score tracking",
        "Designed clean, mobile-friendly interfaces",
        "Focused on responsiveness and smooth performance"
      ],
      technologies: ["React Native", "Quiz Application", "Mobile Platform"],
      achievements: [],
    },
    {
      id: 6,
      company: "DILG",
      position: "Secretary / Social Media Manager",
      location: "Philippines",
      duration: "Aug 2024 - Nov 2024",
      description: "Supported both administrative and creative efforts for local government programs. Helped manage documentation while also contributing visual materials for SK and barangay campaigns.",
      responsibilities: [
        "Organized official documentation and managed records",
        "Designed posters, digital content, and public announcements",
        "Assisted in visual branding and storytelling for community initiatives"
      ],
      technologies: ["Documentation", "Digital Materials", "Community Outreach", "Administrative Support"],
      achievements: [],
    },
    {
      id: 7,
      company: "LGU Sto. Tomas",
      position: "Social Media Manager / UI/UX Designer",
      location: "Sto. Tomas, Philippines",
      duration: "Jun 2024 - Aug 2024",
      description: "Managed visual communications and UI designs for LGU Sto. Tomas. Led social media content, public-facing visuals, and contributed UI/UX support to internal systems.",
      responsibilities: [
        "Designed posters, banners, publication materials, and book covers",
        "Posted daily announcements across physical and digital platforms",
        "Contributed UI design improvements for internal digital tools",
        "Managed email communications and basic IT support"
      ],
      technologies: ["Adobe Creative Suite", "UI/UX Design", "Publication Design", "IT Support"],
      achievements: [],
    },
    {
      id: 8,
      company: "Caribbean LED Solutions",
      position: "Digital Marketing Assistant / UI/UX Designer",
      location: "Remote",
      duration: "Aug 2024 - Nov 2024",
      description: "Created visual content, posters, and educational videos. Designed UIs in Figma for the company’s digital platforms, including the Brioray web interface used for internal branding and client communication.",
      responsibilities: [
        "Created visual content for brand awareness campaigns",
        "Designed and edited promotional posters aligned with company branding",
        "Produced montage-style videos showcasing business and products",
        "Edited educational video content for internal training",
        "Designed the UI of Brioray using Figma",
        "Contributed to increasing audience engagement through compelling visuals"
      ],
      technologies: ["Brand Awareness", "Video Production", "Content Creation", "UI/UX Design", "Figma"],
      achievements: [],
    },
    {
      id: 9,
      company: "TriReg Web & Mobile",
      position: "Front-End Developer & UI/UX Designer",
      location: "Remote",
      duration: "Aug 2024 - Nov 2024",
      description: "Built a comprehensive tricycle permit registration platform for both web and mobile. Designed the UI in Figma and implemented the front-end using React + Vite, including dashboards, QR integration, and SMS-based notifications.",
      responsibilities: [
        "Designed modular, role-based UI in Figma for web and mobile",
        "Developed the front-end interface with React + Vite",
        "Integrated QR code generation, receipt verification, and SMS workflows",
        "Built dashboard views for tracking permits and registrations",
        "Ensured high performance, accessibility, and responsive layout"
      ],
      technologies: ["React", "Vite", "Figma", "QR Code System", "Dashboard Analytics"],
      achievements: [],
    },
    {
      id: 10,
      company: "VTrack Web & Mobile",
      position: "Front-End Developer & UI/UX Designer",
      location: "Remote",
      duration: "Aug 2024 - Nov 2024",
      description: "Designed and built the front-end for a violator tracking system used by LGUs and the PNP. Created dashboards and citation tools for both web and mobile using Figma, and implemented the UI in React + Vite.",
      responsibilities: [
        "Designed UI/UX in Figma for both mobile and web",
        "Built role-based interfaces and citation tracking tools",
        "Created dashboards for visualizing violations and fine reports",
        "Integrated SMS alert interface (front-end only)",
        "Ensured responsive, accessible performance across platforms"
      ],
      technologies: ["React", "Vite", "Figma", "UI/UX Design", "Dashboard Analytics"],
      achievements: [],
    },
  ];

const WorkExperience = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="work-experience" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 relative overflow-hidden">
      {/* Headline & Intro */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-blue-600 dark:text-blue-500 mb-6 tracking-tight drop-shadow-xl leading-tight" style={{letterSpacing: '-0.03em'}}>
            Work Experience
          </h1>
        <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium">
          A journey through my professional milestones, reimagined as an interactive showcase.
          </p>
      </div>
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {workExperience.map((job) => (
          <motion.div
            key={job.id}
            className={`relative rounded-3xl bg-white/80 dark:bg-gray-900/80 shadow-2xl border border-blue-100 dark:border-blue-800 transition-all duration-300 cursor-pointer group ${expanded === job.id ? 'ring-4 ring-blue-500 scale-105 z-20' : 'hover:scale-102'}`}
            whileHover={{ scale: expanded === job.id ? 1.05 : 1.03 }}
            onClick={() => setExpanded(expanded === job.id ? null : job.id)}
            tabIndex={0}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Accent Bar */}
            <div className="h-2 w-full rounded-t-3xl bg-blue-500 mb-5" />
            {/* Card Content */}
            <div className="p-7 flex flex-col">
              <div className="mb-2">
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white leading-tight mb-1">
                              {job.position}
                            </h3>
                <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-1">
                              {job.company}
                            </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                          <span>{job.duration}</span>
                  <span>•</span>
                          <span>{job.location}</span>
                        </div>
                      </div>
              <p className="text-base text-gray-800 dark:text-gray-200 mb-4 line-clamp-3">
                        {job.description}
                      </p>
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-0.5 bg-white/60 dark:bg-gray-800/60 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 text-xs rounded-full shadow font-semibold tracking-wide">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
              <div className="mt-auto flex justify-end">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-lg shadow-lg transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={e => { e.stopPropagation(); setExpanded(expanded === job.id ? null : job.id); }}
                  aria-expanded={expanded === job.id}
                >
                  {expanded === job.id ? 'Hide Details' : 'View Details'}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </motion.button>
              </div>
            </div>
            {/* Expanded Details */}
                      <AnimatePresence>
              {expanded === job.id && (
                          <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 z-30 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-7 flex flex-col overflow-y-auto border-2 border-blue-200 dark:border-blue-800 custom-scrollbar"
                  style={{ maxHeight: '540px' }}
                  onClick={e => e.stopPropagation()}
                >
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">
                    {job.position}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {job.company}
                  </p>
                  <div className="flex items-center gap-2 text-base text-gray-500 dark:text-gray-400 mb-2">
                    <span>{job.duration}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                  <p className="text-base text-gray-800 dark:text-gray-200 mb-4">
                    {job.description}
                  </p>
                  <div className="mb-5">
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="text-gray-800 dark:text-gray-200 text-base">{resp}</li>
                    ))}
                    </ul>
                  </div>
                  <div className="flex justify-end">
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-lg shadow-lg transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      onClick={() => setExpanded(null)}
                    >
                      Close
                    </motion.button>
                  </div>
                </motion.div>
                        )}
                      </AnimatePresence>
          </motion.div>
        ))}
        </div>
        {/* Call to Action */}
      <div className="text-center mt-20">
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl border border-blue-200 dark:border-blue-700 mx-auto max-w-2xl">
            <h3 className="text-4xl font-black text-blue-600 dark:text-blue-500 mb-4 tracking-tight">
              Ready to Work Together?
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              I'm always open to new opportunities and exciting projects. Let's discuss how I can contribute to your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.06, background: 'linear-gradient(90deg,#2563eb,#7c3aed)' }}
                whileTap={{ scale: 0.98 }}
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-lg shadow-lg transition-colors duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                View My Services
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.06, background: 'linear-gradient(90deg,#fff,#e0e7ff)' }}
                whileTap={{ scale: 0.98 }}
                href="mailto:contact@example.com"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-bold rounded-lg transition-colors duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Get In Touch
              </motion.a>
            </div>
          </div>
      </div>
    </section>
  );
};

export default WorkExperience; 