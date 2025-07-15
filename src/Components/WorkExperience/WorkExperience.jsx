import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './WorkExperience.css';

  const workExperience = [
    {
      id: 1,
      company: "Freelance",
      position: "Front-End Developer (React Native)",
      location: "Remote",
      duration: "Nov 2023 - Jan 2024",
      description: "Built the front end of Labor-Linkz, a job-matching app for blue-collar workers. Developed role-based UIs for admin, client, and worker users. Integrated login, job search, notification, rating, and activity tracking features. Ensured a clean, responsive, and user-friendly mobile experience. I was also the UI/UX designer for this project, creating the design in Figma.",
      responsibilities: [
        "Developed role-based UIs for admin, client, and worker users",
        "Integrated login, job search, notification, rating, and activity tracking features",
        "Ensured a clean, responsive, and user-friendly mobile experience",
        "Built comprehensive job matching system",
        "Implemented mobile optimization strategies"
      ],
      technologies: ["React Native", "JavaScript", "Mobile Development", "UI/UX Design"],
      achievements: [
        "Successfully delivered a complete job-matching platform",
        "Implemented role-based access control for different user types",
        "Created responsive and intuitive mobile interfaces"
    ],
    },
    {
      id: 2,
      company: "Freelance",
      position: "Graphic Designer (Part Time at Upwork)",
      location: "Remote",
      duration: "Jan 2024 - Feb 2024",
      description: "Completed projects including logos and posters. Designed creative digital displays for online advertising for local businesses.",
      responsibilities: [
        "Created logos and poster designs for various clients",
        "Designed creative digital displays for online advertising",
        "Worked with local businesses to meet their branding needs",
        "Delivered high-quality visual content on tight deadlines"
      ],
      technologies: ["Adobe Creative Suite", "Logo Design", "Poster Creation", "Digital Advertising"],
      achievements: [
        "Completed multiple successful projects on Upwork",
        "Designed effective advertising materials for local businesses",
        "Maintained high client satisfaction ratings"
    ],
    },
    {
      id: 3,
      company: "Freelance",
      position: "Front-End Developer (React + Vite)",
      location: "Remote",
      duration: "Mar 2024 - Jun 2024",
      description: "Built the front end of Together WeComply, a system for automated school event attendance and sanctions. Designed a clean, responsive UI for students and admins. Added features like QR check-in, event logs, and auto-sanctioning. Focused on usability, performance, and mobile responsiveness.",
      responsibilities: [
        "Designed a clean, responsive UI for students and admins",
        "Implemented QR check-in system for event attendance",
        "Developed event management and logging features",
        "Created auto-sanctioning functionality",
        "Ensured mobile responsiveness and optimal performance"
      ],
      technologies: ["React", "Vite", "QR Code System", "Event Management", "Auto-sanctioning"],
      achievements: [
        "Successfully implemented automated attendance tracking",
        "Created efficient event management system",
        "Delivered mobile-responsive solution for educational institutions"
    ],
    },
    {
      id: 4,
      company: "LGU Sto. Tomas",
      position: "Social Media Manager",
      location: "Sto. Tomas, Philippines",
      duration: "Jun 2024 - Aug 2024",
      description: "Served as Social Media Manager for the LGU of Sto. Tomas from June to August 2024, overseeing content creation, daily publication of official announcements, visual material design including banners and a book cover, email communications, and basic IT support to ensure consistent and effective public engagement.",
      responsibilities: [
        "Edited banners, posters, and publication materials",
        "Designed book covers for official publications",
        "Posted daily announcements and updates physically and online",
        "Managed official email communications",
        "Provided basic computer troubleshooting and maintenance support"
      ],
      technologies: ["Adobe Creative Suite", "Publication Design", "Communication Management", "IT Support"],
      achievements: [
        "Created professional publication materials for government use",
        "Improved communication efficiency through digital platforms",
        "Provided essential IT support to government operations"
    ],
    },
    {
      id: 5,
      company: "Freelance",
      position: "React JS Developer (Part Time)",
      location: "Remote",
      duration: "Aug 2024 - Oct 2024",
      description: "Developed the front end of a mobile e-commerce app using React Native and Expo Router, featuring product listings, shopping cart, payment options (COD, GCash), and order tracking with a focus on a smooth, user-friendly experience.",
      responsibilities: [
        "Developed mobile e-commerce app with React Native and Expo Router",
        "Implemented product listings, shopping cart, and payment systems",
        "Ensured smooth, user-friendly mobile experiences across devices"
      ],
      technologies: ["React Native", "Expo Router", "E-commerce Platform"],
      achievements: [
        "Successfully launched a mobile e-commerce application",
        "Implemented comprehensive payment systems including COD and GCash"
    ],
    },
    {
      id: 6,
      company: "Freelance",
      position: "React JS Developer (Part Time)",
      location: "Remote",
      duration: "Aug 2024 - Oct 2024",
      description: "Quiz Whirl App: Built the front end of an interactive quiz app with multiple question types and score tracking. Designed a responsive and engaging UI using React Native, ensuring good performance across various mobile devices. Developed a mobile platform connecting blue-collar workers with local job opportunities, enhancing employment accessibility and supporting local economies.",
      responsibilities: [
        "Built the front end of an interactive quiz app with multiple question types and score tracking",
        "Designed a responsive and engaging UI using React Native",
        "Ensured good performance across various mobile devices",
        "Developed a mobile platform connecting blue-collar workers with local job opportunities"
      ],
      technologies: ["React Native", "Quiz Application", "Mobile Platform"],
      achievements: [
        "Created an engaging quiz platform with score tracking functionality",
        "Enhanced employment accessibility for blue-collar workers"
    ],
    },
    {
      id: 7,
      company: "DILG",
      position: "Secretary / Social Media Manager",
      location: "Philippines",
      duration: "Aug 2024 - Nov 2024",
      description: "Served as Secretary and Social Media Manager for DILG from August to November 2024, handling official documentation and records while also managing social media content, designing digital materials for barangay and SK programs, and promoting local initiatives through engaging public service announcements and visual campaigns.",
      responsibilities: [
        "Assisted with documentation and organized official papers",
        "Managed records and administrative tasks",
        "Designed and edited posters and digital materials for government programs",
        "Prepared visual content for community announcements and campaigns",
        "Contributed to promoting local initiatives through engaging materials"
      ],
      technologies: ["Documentation", "Digital Materials", "Community Outreach", "Administrative Support"],
      achievements: [
        "Improved documentation and record-keeping systems",
        "Created effective visual materials for government programs",
        "Enhanced community engagement through digital media"
    ],
    },
    {
      id: 8,
      company: "Caribbean LED Solutions",
      position: "Digital Marketing Assistant (Work from Home)",
      location: "Remote",
      duration: "Nov 2024 - Apr 2025",
      description: "Assisted the digital marketing team by creating visual content for brand awareness campaigns. Designed and edited promotional posters aligned with the company's branding and marketing goals. Produced montage-style videos showcasing the business, highlighting products and company achievements. Edited simple, educational video content for internal training and online courses. Contributed to increasing audience engagement through compelling visuals and informative content. I was also the UI/UX designer for the company's digital platforms, creating the design in Figma.",
      responsibilities: [
        "Created visual content for brand awareness campaigns",
        "Designed and edited promotional posters aligned with company branding",
        "Produced montage-style videos showcasing business and products",
        "Edited educational video content for internal training",
        "Contributed to increasing audience engagement through compelling visuals"
      ],
      technologies: ["Brand Awareness", "Video Production", "Content Creation", "Digital Marketing"],
      achievements: [
        "Increased brand visibility through effective visual campaigns",
        "Created engaging video content for training and marketing",
        "Improved audience engagement through compelling visual materials"
    ],
    },
    {
      id: 9,
      company: "Freelance",
      position: "Web Developer (React + Vite)",
      location: "Remote",
      duration: "Apr 2025 - Jun 2025",
      description: "Developed the front end of TriReg Web, a tricycle permit registration system, using React with Vite. Designed responsive and modular UI components with role-based access for LGU staff and treasury personnel. Integrated features such as QR code generation, receipt verification, and SMS notifications. Implemented modules for automated ID/permit sticker generation and report printing. Built interactive data dashboards to track tricycle registrations per barangay. Ensured high performance, smooth API integration, and mobile-friendly design. I was also the UI/UX designer for this project, creating the design in Figma.",
      responsibilities: [
        "Designed responsive and modular UI components with role-based access",
        "Integrated QR code generation, receipt verification, and SMS notifications",
        "Implemented automated ID/permit sticker generation and report printing",
        "Built interactive data dashboards for tracking registrations",
        "Ensured high performance, smooth API integration, and mobile-friendly design"
      ],
      technologies: ["React", "Vite", "QR Code System", "Dashboard Analytics", "Automated Reports"],
      achievements: [
        "Successfully implemented comprehensive permit registration system",
        "Created efficient automated reporting and notification systems",
        "Built interactive dashboards for data visualization and tracking"
    ],
    },
    {
      id: 10,
      company: "Freelance",
      position: "Web Developer (React + Vite)",
      location: "Remote",
      duration: "May 2025 - Jun 2025",
      description: "Developed the front end of VTrack, a violator tracking system for the PNP and LGU of Cabagan using React with Vite. Built secure, role-based interfaces with features like violation and payment tracking, citation management, and SMS/push notifications. Designed dashboards for visualizing violations and generating reports. Integrated automated fine computation based on municipal ordinances. Ensured fast performance, API integration, and mobile-friendly layout. I was also the UI/UX designer for this project, creating the design in Figma.",
      responsibilities: [
        "Built secure, role-based interfaces for law enforcement use",
        "Implemented violation and payment tracking systems",
        "Designed dashboards for visualizing violations and generating reports",
        "Integrated automated fine computation based on municipal ordinances",
        "Ensured fast performance, API integration, and mobile-friendly layout"
      ],
      technologies: ["React", "Vite", "Violation Tracking", "Payment System", "Automated Fines"],
      achievements: [
        "Created comprehensive law enforcement tracking system",
        "Implemented automated fine computation for efficiency",
        "Built secure interfaces for sensitive law enforcement data"
    ],
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
                  className="absolute inset-0 z-30 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-7 flex flex-col overflow-y-auto border-2 border-blue-200 dark:border-blue-800"
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
                  <div className="mb-5">
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                              <ul className="flex flex-wrap gap-2 mb-4">
                      {job.achievements.map((ach, i) => (
                        <li key={i} className="px-3 py-1 bg-green-100/70 dark:bg-green-900/50 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 text-xs rounded-full shadow font-semibold">{ach}</li>
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
                href="/service"
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