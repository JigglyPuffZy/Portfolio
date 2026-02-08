import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import './WorkExperience.css';

const workExperience = [
  {
    id: 1,
    company: "One Over Zero Technologies, Inc.",
    position: "Junior Front End Developer & UI/UX Designer",
    location: "Remote",
    duration: "Present",
    description: "At One Over Zero Technologies, Inc. (Defining Infinite Possibilities), I develop and enhance web-based systems while maintaining and updating WordPress websites and plugins. I implement front-end features and layout improvements, ensuring website functionality, responsiveness, and usability. My role involves fixing website issues, bugs, and UI inconsistencies while coordinating with the team for system updates and improvements.",
    responsibilities: [
      "Developing and enhancing web-based systems",
      "Maintaining and updating WordPress websites and plugins",
      "Implementing front-end features and layout improvements",
      "Fixing website issues, bugs, and UI inconsistencies",
      "Ensuring website functionality, responsiveness, and usability",
      "Coordinating with the team for system updates and improvements"
    ],
    technologies: ["WordPress", "Front-End Development", "UI/UX Design", "Web Development", "Plugin Development"],
    achievements: [],
  },
  {
    id: 2,
    company: "VA4U",
    position: "Front-End Developer (Project-Based)",
    location: "Remote",
    duration: "Oct 2025 – Present",
    description: "As a Front-End Developer at VA4U, I work on the Australian Rewards Club website, where I focus on building and optimizing the user interface using React and Tailwind CSS. I redesigned the prize section landing page to enhance visual hierarchy, responsiveness, and accessibility, ensuring a smoother user experience. Collaborating closely with the design and back-end teams, I contributed to creating a consistent, modern, and visually engaging platform that aligns with user expectations.",
    responsibilities: [
      "Built and optimized user interface using React and Tailwind CSS",
      "Redesigned prize section landing page for enhanced visual hierarchy",
      "Improved responsiveness and accessibility across the platform",
      "Collaborated with design and back-end teams for consistent user experience"
    ],
    technologies: ["React", "Tailwind CSS", "UI/UX Design", "Web Development"],
    achievements: [],
  },
  {
    id: 3,
    company: "Caribbean Led Solutions",
    position: "Front-End Developer, UI/UX Designer & Graphic Designer",
    location: "Remote",
    duration: "Nov 2024 – June 2025",
    description: "At Caribbean Led Solutions, I designed the entire Brioray platform UI in Figma and developed it in React, achieving a 30% improvement in user onboarding and a 45% increase in usability. I also created marketing visuals, infographics, and branded materials that significantly boosted campaign engagement. My role required a balance between design precision and development efficiency, ensuring that the platform was responsive, accessible, and consistent across all devices.",
    responsibilities: [
      "Designed entire Brioray platform UI in Figma and developed in React",
      "Achieved 30% improvement in user onboarding and 45% increase in usability",
      "Created marketing visuals, infographics, and branded materials",
      "Ensured platform responsiveness, accessibility, and cross-device consistency"
    ],
    technologies: ["React", "Figma", "UI/UX Design", "Graphic Design", "Marketing Materials"],
    achievements: ["30% improvement in user onboarding", "45% increase in usability"],
  },
  {
    id: 4,
    company: "DILG",
    position: "Secretary / Social Media Manager",
    location: "Philippines",
    duration: "Aug 2024 – Nov 2024",
    description: "During my time with the Department of the Interior and Local Government, I managed both administrative and creative tasks, such as designing social media content for SK and barangay initiatives. My efforts increased community engagement by 40% and enhanced communication accessibility. I also digitized workflows, cutting document retrieval times in half and making day-to-day operations more efficient.",
    responsibilities: [
      "Managed administrative and creative tasks for local government programs",
      "Designed social media content for SK and barangay initiatives",
      "Digitized workflows to improve operational efficiency",
      "Enhanced communication accessibility across community platforms"
    ],
    technologies: ["Social Media Management", "Digital Content Creation", "Administrative Systems", "Workflow Digitization"],
    achievements: ["40% increase in community engagement", "50% reduction in document retrieval times"],
  },
  {
    id: 5,
    company: "LGU Sto. Tomas",
    position: "Social Media Manager / UI/UX Designer",
    location: "Sto. Tomas, Philippines",
    duration: "Jun 2024 – Aug 2024",
    description: "At the LGU of Sto. Tomas, I enhanced the design and usability of internal systems, allowing staff to navigate 25% faster. I managed daily social media content, resulting in a 60% increase in audience reach within two months. I designed mobile-friendly and visually appealing layouts to ensure communication materials remained professional and clear.",
    responsibilities: [
      "Enhanced design and usability of internal systems for improved navigation",
      "Managed daily social media content and community engagement",
      "Designed mobile-friendly and visually appealing communication layouts",
      "Maintained professional standards across all digital communications"
    ],
    technologies: ["UI/UX Design", "Social Media Management", "Mobile Design", "Digital Communications"],
    achievements: ["25% faster staff navigation", "60% increase in audience reach within two months"],
  },
];

const WorkExperience = () => {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  return (
    <section id="work-experience" className="section-padding container-padding bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-950 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Header */}
      <div className="relative max-w-5xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-full border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-xl shadow-lg"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
              💼 Professional Journey
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Work Experience
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transforming ideas into reality through 
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500"> innovative development</span> and 
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-800 dark:from-blue-500 dark:to-blue-600"> creative design</span>
          </motion.p>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line with Glow */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600 transform md:-translate-x-1/2 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]" />

        <div className="space-y-12">
          {workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Timeline Dot with Pulse */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  className="relative"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-4 border-white dark:border-dark-900 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-blue-500"
                  />
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-200/50 dark:border-blue-700/30 cursor-pointer overflow-hidden group"
                  onClick={() => setExpanded(expanded === job.id ? null : job.id)}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Duration Badge */}
                  <div className="relative flex items-center gap-2 text-sm mb-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-800/40 rounded-full border border-blue-200/60 dark:border-blue-700/60">
                      <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="font-bold text-blue-700 dark:text-blue-300">{job.duration}</span>
                    </div>
                  </div>

                  {/* Position & Company */}
                  <h3 className="relative text-xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {job.position}
                  </h3>
                  <div className="relative flex items-center gap-4 mb-4 flex-wrap">
                    <h4 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                      {job.company}
                    </h4>
                    <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="font-medium">{job.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {expanded === job.id ? job.description : `${job.description.substring(0, 150)}...`}
                  </p>

                  {/* Technologies */}
                  <div className="relative flex flex-wrap gap-2 mb-4">
                    {job.technologies.slice(0, 4).map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full border border-blue-200/50 dark:border-blue-700/50 shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Expand/Collapse */}
                  <AnimatePresence>
                    {expanded === job.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4"
                      >
                        {/* Responsibilities */}
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Responsibilities</h5>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0" />
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        {job.achievements.length > 0 && (
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Achievements</h5>
                            <ul className="space-y-2">
                              {job.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-primary-600 dark:text-primary-400 font-medium">
                                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-1.5 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle Button */}
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center gap-2 text-sm px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-800/40 text-blue-700 dark:text-blue-300 hover:from-blue-200 hover:to-blue-100 dark:hover:from-blue-800/50 dark:hover:to-blue-700/50 font-bold mt-2 rounded-lg border border-blue-200/60 dark:border-blue-700/60 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    {expanded === job.id ? (
                      <>
                        Show Less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Show More <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default WorkExperience;
