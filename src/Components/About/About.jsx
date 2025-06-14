import './About.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import boracay1 from '../../assets/img/boracay1.jpg';
import boracay2 from '../../assets/img/boracay2.jpg';
import boracay3 from '../../assets/img/boracay3.jpg';
import boracay4 from '../../assets/img/boracay4.jpg';
import heroImage from '../../assets/img/Hero Image.jpg';
import { useState } from 'react';

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

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

  const expertise = [
    {
      title: 'React JS & React Native Development',
      description: 'Built mobile applications using React Native and Expo Router. Integrated features like product listings, payment options (COD, GCash), and responsive navigation.',
    },
    {
      title: 'UI/UX Design',
      description: 'Designed clean, functional, and visually appealing interfaces for both mobile and web platforms. Focused on enhancing usability and maintaining consistent layouts.',
    },
    {
      title: 'Graphic Design',
      description: 'Created logos, posters, banners, digital ads, and publication layouts. Proficient in using Adobe Photoshop and Canva for graphic design projects.',
    },
    {
      title: 'Video Editing',
      description: 'Edited professional-grade videos for social media, presentations, and promotional use. Skilled in DaVinci Resolve and Adobe Premiere Pro.',
    },
    {
      title: 'Technical Support',
      description: 'Provided support for computer hardware and basic system maintenance. Holder of Computer System Servicing NC II Certification.',
    },
  ];

  const experience = [
    {
      period: 'Nov 2023 - Apr 2024',
      company: 'Caribbean LED Solutions',
      role: 'Digital Marketing Assistant (Work from Home)',
      description: 'Assisted the digital marketing team by creating visual content for brand awareness campaigns. Designed and edited promotional posters aligned with the company\'s branding and marketing goals. Produced montage-style videos showcasing the business, highlighting products and company achievements. Edited simple, educational video content for internal training and online courses. Contributed to increasing audience engagement through compelling visuals and informative content.',
    },
    {
      period: 'Aug 2023 - Oct 2023',
      company: 'Freelance',
      role: 'React JS Developer (Part Time)',
      description: 'Developed the front end of a mobile e-commerce app using React Native and Expo Router, featuring product listings, shopping cart, payment options (COD, GCash), and order tracking with a focus on a smooth, user-friendly experience. Built the front end of an interactive quiz app (Quiz Whirl App) with multiple question types and score tracking. Designed a responsive and engaging UI using React Native, ensuring good performance across various mobile devices. Developed a mobile platform connecting blue-collar workers with local job opportunities, enhancing employment accessibility and supporting local economies.',
    },
    {
      period: 'Aug 2023 - Nov 2023',
      company: 'DILG',
      role: 'Secretary / Digital Media Assistant',
      description: 'Served as secretary, assisting with documentation, organizing official papers, and managing records. Designed and edited posters and digital materials for barangay captains and Sangguniang Kabataan (SK) programs. Helped in preparing visual content for community announcements, campaigns, and public service events. Contributed to promoting local initiatives through clear and visually engaging materials.',
    },
    {
      period: 'Jun 2023 - Aug 2023',
      company: 'LGU Sto-Tomas',
      role: 'Employee (GIP)',
      description: 'Edited banners for the Local Government Unit (LGU) and designed a book cover. Edited publication materials and newspapers.',
    },
    {
      period: 'Jan 2023 - Feb 2023',
      company: 'Freelance (Upwork)',
      role: 'Graphic Designer (Part Time)',
      description: 'Completed projects including logos and posters. Designed creative digital displays for online advertising for local businesses.',
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="about" className="min-h-screen w-full py-8 sm:py-12 md:py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-dark-200 dark:via-dark-300 dark:to-dark-400 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-24 sm:w-32 md:w-96 h-24 sm:h-32 md:h-96 bg-primary-500/5 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-24 sm:w-32 md:w-96 h-24 sm:h-32 md:h-96 bg-secondary-500/5 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="visible"
        animate={inView ? "visible" : "visible"}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mb-6 sm:mb-8 md:mb-32">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4 sm:mb-6 md:mb-12"
          >
            <div className="relative">
              <motion.div 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden mx-auto shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src={heroImage} 
                  alt="Ralph Matthew Delarosa Punzalan" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -inset-1 sm:-inset-4 rounded-full border-4 border-primary-500/20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute -inset-2 sm:-inset-8 rounded-full border-4 border-secondary-500/20"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 0, 360],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About <motion.span 
              className="text-primary-500 inline-block"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >Me</motion.span>
          </motion.h2>
          
          <motion.div 
            className="w-full max-w-3xl mx-auto px-2 sm:px-4 md:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-3 sm:p-4 md:p-8 rounded-lg bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                  Hi, I&apos;m <span className="font-bold text-primary-500">Ralph Matthew Delarosa Punzalan</span>, a BSIT student passionate about bringing digital ideas to life. 
                  I love working on projects that combine React.js development, UI/UX design, graphic design, and video editing. 
                  Whether it&apos;s building a smooth, responsive mobile app or designing eye-catching visuals, I always aim to create 
                  experiences that are both functional and visually appealing.
                </p>
                <div className="mt-3 sm:mt-4 md:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                  <motion.div 
                    className="flex items-center gap-1 sm:gap-2 bg-primary-500/10 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-primary-500">💻</span>
                    <span className="text-xs sm:text-sm md:text-base font-medium">React Developer</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-1 sm:gap-2 bg-secondary-500/10 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-secondary-500">🎨</span>
                    <span className="text-xs sm:text-sm md:text-base font-medium">UI/UX Designer</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-1 sm:gap-2 bg-primary-500/10 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-primary-500">🎬</span>
                    <span className="text-xs sm:text-sm md:text-base font-medium">Video Editor</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-32 px-2 sm:px-4 md:px-6"
        >
          {expertise.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative flex flex-col h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient-x" />
              <div className="relative p-4 sm:p-6 rounded-2xl bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300 flex-1">
                <div className="relative z-10">
                  <motion.div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {index === 0 && <span className="text-xl sm:text-2xl">💻</span>}
                    {index === 1 && <span className="text-xl sm:text-2xl">🎨</span>}
                    {index === 2 && <span className="text-xl sm:text-2xl">🎨</span>}
                    {index === 3 && <span className="text-xl sm:text-2xl">🎬</span>}
                    {index === 4 && <span className="text-xl sm:text-2xl">🔧</span>}
                  </motion.div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors duration-300">
                    {skill.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {skill.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {index === 0 && (
                      <>
                        <motion.span 
                          className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          React Native
                        </motion.span>
                        <motion.span 
                          className="px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          Expo
                        </motion.span>
                        <motion.span 
                          className="px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          Mobile Apps
                        </motion.span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <motion.span 
                          className="px-3 py-1 rounded-full text-sm bg-pink-500/10 text-pink-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          UI Design
                        </motion.span>
                        <motion.span 
                          className="px-3 py-1 rounded-full text-sm bg-orange-500/10 text-orange-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          UX Research
                        </motion.span>
                        <motion.span 
                          className="px-3 py-1 rounded-full text-sm bg-yellow-500/10 text-yellow-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          Responsive
                        </motion.span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <motion.span 
                          className="px-3 py-1 rounded-full text-sm bg-red-500/10 text-red-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          Photoshop
                        </motion.span>
                        <motion.span 
                          className="px-3 py-1 rounded-full text-sm bg-indigo-500/10 text-indigo-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          Canva
                        </motion.span>
                        <motion.span 
                          className="px-3 py-1 rounded-full text-sm bg-teal-500/10 text-teal-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          Branding
                        </motion.span>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <motion.span 
                          className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          DaVinci
                        </motion.span>
                        <motion.span 
                          className="px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          Premiere Pro
                        </motion.span>
                        <motion.span 
                          className="px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          Motion
                        </motion.span>
                      </>
                    )}
                    {index === 4 && (
                      <>
                        <motion.span 
                          className="px-3 py-1 rounded-full text-sm bg-pink-500/10 text-pink-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          Hardware
                        </motion.span>
                        <motion.span 
                          className="px-3 py-1 rounded-full text-sm bg-orange-500/10 text-orange-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          Maintenance
                        </motion.span>
                        <motion.span 
                          className="px-3 py-1 rounded-full text-sm bg-yellow-500/10 text-yellow-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          NC II
                        </motion.span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={itemVariants} className="mb-8 md:mb-32 px-4 sm:px-6">
          <motion.h3 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Professional Journey
          </motion.h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-secondary-500 hidden md:block" />
            
            <div className="space-y-8 md:space-y-16">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-dark-100 shadow-lg hidden md:block" />
                  
                  <motion.div
                    className="w-full md:w-1/2"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                      <div className="relative p-4 sm:p-6 rounded-2xl bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300">
                        <div className="relative z-10">
                          <motion.span 
                            className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary-500/10 text-primary-500 mb-3"
                            whileHover={{ scale: 1.1 }}
                          >
                            {exp.period}
                          </motion.span>
                          
                          <h4 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors duration-300">
                            {exp.role}
                          </h4>
                          
                          <h5 className="text-base sm:text-lg font-medium text-primary-500 mb-3">
                            {exp.company}
                          </h5>
                          
                          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            {exp.description}
                          </p>
                          
                          <div className="mt-4 flex flex-wrap gap-2">
                            {exp.role.toLowerCase().includes('developer') && (
                              <>
                                <span className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-500">React</span>
                                <span className="px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-500">JavaScript</span>
                                <span className="px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-500">UI/UX</span>
                              </>
                            )}
                            {exp.role.toLowerCase().includes('design') && (
                              <>
                                <span className="px-3 py-1 rounded-full text-sm bg-pink-500/10 text-pink-500">DaVinci Resolve</span>
                                <span className="px-3 py-1 rounded-full text-sm bg-orange-500/10 text-orange-500">Video Editing</span>
                                <span className="px-3 py-1 rounded-full text-sm bg-yellow-500/10 text-yellow-500">Motion Graphics</span>
                              </>
                            )}
                            {exp.role.toLowerCase().includes('marketing') && (
                              <>
                                <span className="px-3 py-1 rounded-full text-sm bg-red-500/10 text-red-500">Social Media</span>
                                <span className="px-3 py-1 rounded-full text-sm bg-indigo-500/10 text-indigo-500">Content Creation</span>
                                <span className="px-3 py-1 rounded-full text-sm bg-teal-500/10 text-teal-500">Digital Marketing</span>
                              </>
                            )}
                            {exp.company === 'LGU Sto-Tomas' && (
                              <>
                                <span className="px-3 py-1 rounded-full text-sm bg-pink-500/10 text-pink-500">Photoshop</span>
                                <span className="px-3 py-1 rounded-full text-sm bg-orange-500/10 text-orange-500">Canva</span>
                                <span className="px-3 py-1 rounded-full text-sm bg-yellow-500/10 text-yellow-500">Graphic Design</span>
                              </>
                            )}
                            {exp.company === 'DILG' && (
                              <>
                                <span className="px-3 py-1 rounded-full text-sm bg-pink-500/10 text-pink-500">Photoshop</span>
                                <span className="px-3 py-1 rounded-full text-sm bg-orange-500/10 text-orange-500">Canva</span>
                                <span className="px-3 py-1 rounded-full text-sm bg-yellow-500/10 text-yellow-500">Digital Media</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={itemVariants} className="text-center mb-8 md:mb-32 px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500">Education & Certificates</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative flex flex-col"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-4 sm:p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300 flex-1">
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500">Education</h4>
                <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8">
                  {[
                    {
                      school: "UNIVERSITY OF SAINT LOUIS TUGUEGARAO",
                      degree: "Bachelor of Science in Information Technology",
                      year: "2020-2024"
                    },
                    {
                      school: "STO TOMAS NATIONAL HIGH SCHOOL",
                      degree: "Humanities and Social Sciences",
                      year: "2014-2020"
                    }
                  ].map((edu, index) => (
                    <motion.div 
                      key={index}
                      className="transform group-hover:translate-x-2 transition-transform duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary-500">{edu.school}</h5>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300">{edu.degree}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{edu.year}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative flex flex-col"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-4 sm:p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300 flex-1">
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500">Certificates</h4>
                <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8">
                  {[
                    {
                      title: "Computer System Servicing NC II",
                      issuer: "Technical Education and Skills Development Authority (TESDA)",
                      year: "2023"
                    },
                    {
                      title: "Certificate of Appreciation",
                      issuer: "PSITE (4th ICITE 2023)",
                      year: ""
                    },
                    {
                      title: "Gawad San Luis",
                      issuer: "Excellence in Innovation, Creativity, and Agility",
                      year: "2024"
                    }
                  ].map((cert, index) => (
                    <motion.div 
                      key={index}
                      className="transform group-hover:translate-x-2 transition-transform duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary-500">{cert.title}</h5>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                      {cert.year && <p className="text-xs sm:text-sm text-gray-500">{cert.year}</p>}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Research Presentation Section */}
        <motion.div variants={itemVariants} className="text-center mb-8 md:mb-32 px-4 sm:px-6">
          <motion.h3 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Research Presentation
          </motion.h3>
          
          <div className="max-w-6xl mx-auto">
            {/* Description Card */}
            <motion.div 
              className="bg-white dark:bg-dark-100 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl mb-8 sm:mb-12 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 animate-gradient-x" />
              <div className="relative z-10">
                <h4 className="text-xl sm:text-2xl font-bold mb-4 text-primary-500">Research Excellence in Boracay</h4>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I had the incredible opportunity to present our research in Boracay, where we showcased our study to a
                  diverse audience of professionals and fellow researchers. The experience allowed me to refine my public
                  speaking skills, gain valuable feedback, and connect with experts in our field.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                  <motion.div 
                    className="flex items-center gap-2 bg-primary-500/10 px-3 py-1 sm:px-4 sm:py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-primary-500">🎯</span>
                    <span className="text-sm font-medium">Expert Feedback</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 bg-secondary-500/10 px-3 py-1 sm:px-4 sm:py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-secondary-500">🤝</span>
                    <span className="text-sm font-medium">Networking</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 bg-primary-500/10 px-3 py-1 sm:px-4 sm:py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-primary-500">🏆</span>
                    <span className="text-sm font-medium">Recognition</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { 
                  src: boracay1, 
                  alt: "Presenting research in Boracay", 
                  title: "Research Presentation", 
                  description: "Showcasing our innovative findings to industry experts",
                  icon: "🎤"
                },
                { 
                  src: boracay2, 
                  alt: "Research team in Boracay", 
                  title: "Team Collaboration", 
                  description: "Working together with our dedicated research team",
                  icon: "👥"
                },
                { 
                  src: boracay3, 
                  alt: "Panel discussion in Boracay", 
                  title: "Panel Discussion", 
                  description: "Engaging in meaningful discussions with panel members",
                  icon: "💡"
                },
                { 
                  src: boracay4, 
                  alt: "Award ceremony in Boracay", 
                  title: "Recognition", 
                  description: "Celebrating our achievements and contributions",
                  icon: "🏆"
                }
              ].map((image, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  onClick={() => handleImageClick(image)}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  />
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <span className="text-xl sm:text-2xl">{image.icon}</span>
                      <h4 className="text-lg sm:text-xl font-bold text-white">{image.title}</h4>
                    </div>
                    <p className="text-sm sm:text-base text-gray-200">{image.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image Modal */}
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                onClick={handleCloseModal}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative w-full max-w-4xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                    <button
                      onClick={handleCloseModal}
                      className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors backdrop-blur-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <span className="text-2xl sm:text-3xl">{selectedImage.icon}</span>
                        <h4 className="text-xl sm:text-2xl font-bold text-white">{selectedImage.title}</h4>
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-gray-200">{selectedImage.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Key Achievements Section */}
            <motion.div 
              className="mt-8 sm:mt-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-4 sm:p-6 md:p-8 text-white relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="absolute inset-0 bg-white/10 animate-pulse" />
              <div className="relative z-10">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center">Key Achievements</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    {
                      icon: "🎯",
                      title: "Expert Feedback",
                      description: "Received valuable insights from industry professionals",
                      color: "from-blue-500/20 to-blue-600/20"
                    },
                    {
                      icon: "🤝",
                      title: "Networking",
                      description: "Connected with leading researchers in the field",
                      color: "from-purple-500/20 to-purple-600/20"
                    },
                    {
                      icon: "🏆",
                      title: "Recognition",
                      description: "Acknowledged for innovative research approach",
                      color: "from-green-500/20 to-green-600/20"
                    }
                  ].map((achievement, index) => (
                    <motion.div
                      key={index}
                      className={`bg-gradient-to-br ${achievement.color} rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/10`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">{achievement.icon}</span>
                      <h5 className="text-lg sm:text-xl font-bold mb-2">{achievement.title}</h5>
                      <p className="text-sm sm:text-base text-gray-100">{achievement.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
