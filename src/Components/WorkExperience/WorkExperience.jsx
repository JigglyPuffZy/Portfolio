import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import './WorkExperience.css';

const workExperience = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    <section id="work-experience" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Headline & Intro */}
      <div className="relative max-w-4xl mx-auto text-center mb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4 tracking-tight">
            Experience
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </motion.div>
      </div>

      {/* Experience List */}
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="space-y-12">
          {workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setExpanded(expanded === job.id ? null : job.id)}
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-300">
                {/* Duration */}
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-3 font-medium">
                  {job.duration}
                </div>

                {/* Position Title */}
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {job.position}
                </h3>

                {/* Company Name */}
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  {job.company}
                </h4>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {job.description.length > 200
                    ? `${job.description.substring(0, 200)}...`
                    : job.description
                  }
                </p>

                {/* Achievements */}
                {job.achievements.length > 0 && (
                  <div className="mb-6">
                    <div className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-blue-700 dark:text-blue-400 font-medium">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* View Details Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {job.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-medium rounded-full">
                        +{job.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm flex items-center gap-1"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Modal */}
              <AnimatePresence>
                {expanded === job.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={() => setExpanded(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto"
                      onClick={e => e.stopPropagation()}
                    >
                      {/* Modal Header */}
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                            {job.duration}
                          </div>
                          <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                            {job.position}
                          </h3>
                          <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                            {job.company}
                          </h4>
                        </div>
                        <button
                          onClick={() => setExpanded(null)}
                          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                        >
                          <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      {/* Modal Content */}
                      <div className="space-y-6">
                        {/* Full Description */}
                        <div>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {job.description}
                          </p>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h5 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Key Responsibilities</h5>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-slate-600 dark:text-slate-300">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        {job.achievements.length > 0 && (
                          <div>
                            <h5 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Key Achievements</h5>
                            <ul className="space-y-2">
                              {job.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-blue-700 dark:text-blue-400 font-medium">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies */}
                        <div>
                          <h5 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Technologies Used</h5>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 rounded-full font-medium text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
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
            <motion.button
              whileHover={{ scale: 1.06, background: 'linear-gradient(90deg,#2563eb,#1d4ed8)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/service')}
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg shadow-lg transition-colors duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              View My Services
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.06, background: 'linear-gradient(90deg,#dbeafe,#bfdbfe)' }}
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