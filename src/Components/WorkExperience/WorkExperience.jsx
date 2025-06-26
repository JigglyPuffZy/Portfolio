import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import './WorkExperience.css';

const WorkExperience = () => {
  const [expandedJob, setExpandedJob] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const workExperience = [
    {
      id: 1,
      company: "Freelance",
      position: "Front-End Developer (React Native)",
      location: "Remote",
      duration: "Nov 2023 - Jan 2024",
      description: "Built the front end of Labor-Linkz, a job-matching app for blue-collar workers. Developed role-based UIs for admin, client, and worker users. Integrated login, job search, notification, rating, and activity tracking features. Ensured a clean, responsive, and user-friendly mobile experience.",
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
      ]
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
      ]
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
      ]
    },
    {
      id: 4,
      company: "LGU Sto. Tomas",
      position: "Employee (GIP)",
      location: "Sto. Tomas, Philippines",
      duration: "Jun 2024 - Aug 2024",
      description: "Edited banners, posters, publication materials, and designed a book cover for the LGU. Posted daily announcements and updates both physically and online. Checked and managed emails for official communications. Provided basic computer troubleshooting and maintenance support.",
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
      ]
    },
    {
      id: 5,
      company: "Freelance",
      position: "React JS Developer (Part Time)",
      location: "Remote",
      duration: "Aug 2024 - Oct 2024",
      description: "Developed the front end of a mobile e-commerce app using React Native and Expo Router, featuring product listings, shopping cart, payment options (COD, GCash), and order tracking with a focus on a smooth, user-friendly experience. Quiz Whirl App Built the front end of an interactive quiz app with multiple question types and score tracking. Designed a responsive and engaging UI using React Native, ensuring good performance across various mobile devices. Developed a mobile platform connecting blue-collar workers with local job opportunities, enhancing employment accessibility and supporting local economies.",
      responsibilities: [
        "Developed mobile e-commerce app with React Native and Expo Router",
        "Implemented product listings, shopping cart, and payment systems",
        "Built interactive quiz app with multiple question types and score tracking",
        "Created job platform connecting blue-collar workers with opportunities",
        "Ensured smooth, user-friendly mobile experiences across devices"
      ],
      technologies: ["React Native", "Expo Router", "E-commerce Platform", "Quiz Application", "Job Platform"],
      achievements: [
        "Successfully launched multiple mobile applications",
        "Implemented comprehensive payment systems including COD and GCash",
        "Created engaging quiz platform with score tracking functionality"
      ]
    },
    {
      id: 6,
      company: "DILG",
      position: "Secretary / Digital Media Assistant",
      location: "Philippines",
      duration: "Aug 2024 - Nov 2024",
      description: "Served as secretary, assisting with documentation, organizing official papers, and managing records. Designed and edited posters and digital materials for barangay captains and Sangguniang Kabataan (SK) programs. Helped in preparing visual content for community announcements, campaigns, and public service events. Contributed to promoting local initiatives through clear and visually engaging materials.",
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
      ]
    },
    {
      id: 7,
      company: "Caribbean LED Solutions",
      position: "Digital Marketing Assistant (Work from Home)",
      location: "Remote",
      duration: "Nov 2024 - Apr 2025",
      description: "Assisted the digital marketing team by creating visual content for brand awareness campaigns. Designed and edited promotional posters aligned with the company's branding and marketing goals. Produced montage-style videos showcasing the business, highlighting products and company achievements. Edited simple, educational video content for internal training and online courses. Contributed to increasing audience engagement through compelling visuals and informative content.",
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
      ]
    },
    {
      id: 8,
      company: "Freelance",
      position: "Web Developer (React + Vite)",
      location: "Remote",
      duration: "Apr 2025 - Jun 2025",
      description: "Developed the front end of TriReg Web, a tricycle permit registration system, using React with Vite. Designed responsive and modular UI components with role-based access for LGU staff and treasury personnel. Integrated features such as QR code generation, receipt verification, and SMS notifications. Implemented modules for automated ID/permit sticker generation and report printing. Built interactive data dashboards to track tricycle registrations per barangay. Ensured high performance, smooth API integration, and mobile-friendly design.",
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
      ]
    },
    {
      id: 9,
      company: "Freelance",
      position: "Web Developer (React + Vite)",
      location: "Remote",
      duration: "May 2025 - Jun 2025",
      description: "Developed the front end of VTrack, a violator tracking system for the PNP and LGU of Cabagan using React with Vite. Built secure, role-based interfaces with features like violation and payment tracking, citation management, and SMS/push notifications. Designed dashboards for visualizing violations and generating reports. Integrated automated fine computation based on municipal ordinances. Ensured fast performance, API integration, and mobile-friendly layout.",
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
      ]
    }
  ];

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 overflow-hidden">
      {/* Decorative SVG background */}
      <svg className="absolute top-0 left-0 w-full h-96 opacity-30 pointer-events-none z-0" viewBox="0 0 1440 320"><path fill="#3b82f6" fillOpacity="0.13" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900/60 dark:to-indigo-900/60 rounded-full mb-6 shadow-lg">
            <Briefcase className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight drop-shadow-lg">
            Work Experience
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in software development, showcasing growth, achievements, and contributions to various organizations.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative flex flex-col md:flex-row md:space-x-12">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-blue-400 rounded-full z-0" style={{ minHeight: '100%' }}></div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12 w-full z-10"
          >
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className="relative flex md:items-center group"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center mr-8 z-10">
                  <span className={`w-6 h-6 rounded-full border-4 border-white dark:border-gray-800 bg-gradient-to-br from-blue-400 to-indigo-400 shadow-lg transition-transform duration-300 ${expandedJob === job.id ? 'scale-125' : ''}`}></span>
                  {index < workExperience.length - 1 && (
                    <div className="flex-1 w-1 bg-blue-400 dark:bg-blue-700"></div>
                  )}
                </div>
                {/* Card */}
                <div className="relative flex-1 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 hover:shadow-3xl transition-all duration-300 overflow-hidden group-hover:scale-[1.02]">
                  <div className="p-8">
                    {/* Job Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900/60 dark:to-indigo-900/60 rounded-full flex items-center justify-center shadow-md">
                          <Briefcase className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {job.position}
                          </h3>
                          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                            {job.company}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleJob(job.id)}
                        className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                        aria-label={expandedJob === job.id ? 'Collapse' : 'Expand'}
                      >
                        <motion.span animate={{ rotate: expandedJob === job.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          {expandedJob === job.id ? (
                            <ChevronUp className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                          )}
                        </motion.span>
                      </button>
                    </div>

                    {/* Job Details */}
                    <div className="flex flex-wrap items-center gap-6 mb-4 text-base text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-blue-500" />
                        <span>{job.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-indigo-500" />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    {/* Job Description */}
                    <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
                      {job.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {job.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-1 bg-gradient-to-r from-blue-400 to-indigo-400 text-white text-sm rounded-full shadow-md font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedJob === job.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="border-t border-blue-200 dark:border-blue-700 pt-6 mt-6"
                        >
                          {/* Responsibilities */}
                          <div className="mb-8">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                              <span className="inline-block w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center"><ChevronDown className="w-3 h-3 text-white" /></span>
                              Key Responsibilities:
                            </h4>
                            <ul className="space-y-3">
                              {job.responsibilities.map((responsibility, respIndex) => (
                                <li key={respIndex} className="flex items-start space-x-3">
                                  <span className="w-3 h-3 mt-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                                  <span className="text-gray-800 dark:text-gray-200 text-base flex-1">
                                    {responsibility}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                              <span className="inline-block w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"><ExternalLink className="w-3 h-3 text-white" /></span>
                              Key Achievements:
                            </h4>
                            <ul className="space-y-3">
                              {job.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start space-x-3">
                                  <span className="w-3 h-3 mt-2 bg-green-500 rounded-full flex-shrink-0"></span>
                                  <span className="text-gray-800 dark:text-gray-200 text-base flex-1">
                                    {achievement}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-blue-200 dark:border-blue-700 mx-auto max-w-2xl">
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              I'm always open to new opportunities and exciting projects. Let's discuss how I can contribute to your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/service"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-lg shadow-lg transition-colors duration-200 text-lg"
              >
                View My Services
              </a>
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-bold rounded-lg transition-colors duration-200 text-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkExperience; 