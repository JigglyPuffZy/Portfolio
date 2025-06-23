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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in software development, showcasing growth, achievements, and contributions to various organizations.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline connector */}
              {index < workExperience.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-transparent dark:from-blue-700"></div>
              )}
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="p-6 md:p-8">
                  {/* Job Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {job.position}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {job.company}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleJob(job.id)}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      {expandedJob === job.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      )}
                    </button>
                  </div>

                  {/* Job Details */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Job Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {job.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
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
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4"
                      >
                        {/* Responsibilities */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Key Responsibilities:
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex} className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-gray-700 dark:text-gray-300">
                                  {responsibility}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {job.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-gray-700 dark:text-gray-300">
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to new opportunities and exciting projects. Let's discuss how I can contribute to your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/service"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                View My Services
              </a>
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold rounded-lg transition-colors duration-200"
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