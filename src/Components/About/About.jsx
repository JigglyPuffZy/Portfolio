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
      period: 'Nov 2024 - Apr 2025',
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
    <section id="about" className="min-h-screen py-12 md:py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-dark-200 dark:via-dark-300 dark:to-dark-400 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-72 md:w-96 h-72 md:h-96 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
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
          className="absolute -bottom-40 -left-40 w-72 md:w-96 h-72 md:h-96 bg-secondary-500/5 rounded-full blur-3xl"
          animate={{
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
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Enhanced Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8 md:mb-12"
          >
            <div className="relative">
              <motion.div 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto shadow-2xl"
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
                className="absolute -inset-4 rounded-full border-4 border-primary-500/20"
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
                className="absolute -inset-8 rounded-full border-4 border-secondary-500/20"
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
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500"
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
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Hi, I'm <span className="font-bold text-primary-500">Ralph Matthew Delarosa Punzalan</span>, a BSIT student passionate about bringing digital ideas to life. 
              I love working on projects that combine React.js development, UI/UX design, graphic design, and video editing. 
              Whether it's building a smooth, responsive mobile app or designing eye-catching visuals, I always aim to create 
              experiences that are both functional and visually appealing.
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Expertise Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-32"
        >
          {expertise.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300">
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary-500 transition-colors duration-300">{skill.title}</h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Experience Section */}
        <motion.div variants={itemVariants} className="mb-20 md:mb-32">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500">Experience</h3>
          
          <div className="space-y-6 md:space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold group-hover:text-primary-500 transition-colors duration-300">{exp.role}</h4>
                      <h5 className="text-lg md:text-xl font-medium text-primary-500">{exp.company}</h5>
                    </div>
                    <motion.span 
                      className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-200 px-4 py-2 rounded-full self-start"
                      whileHover={{ scale: 1.1 }}
                    >
                      {exp.period}
                    </motion.span>
                  </div>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Education Section */}
        <motion.div variants={itemVariants} className="text-center mb-20 md:mb-32">
          <h3 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500">Education & Certificates</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300">
                <h4 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500">Education</h4>
                <div className="space-y-6 md:space-y-8">
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
                      <h5 className="text-lg md:text-xl font-semibold text-primary-500">{edu.school}</h5>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">{edu.degree}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300">
                <h4 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500">Certificates</h4>
                <div className="space-y-6 md:space-y-8">
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
                      <h5 className="text-lg md:text-xl font-semibold text-primary-500">{cert.title}</h5>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                      {cert.year && <p className="text-sm text-gray-500">{cert.year}</p>}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Research Presentation Section */}
        <motion.div variants={itemVariants} className="text-center mb-20 md:mb-32">
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Research Presentation
          </motion.h3>
          
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              className="bg-white dark:bg-dark-100 rounded-3xl p-6 md:p-8 shadow-2xl mb-12 transform hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                I had the incredible opportunity to present our research in Boracay, where we showcased our study to a
                diverse audience of professionals and fellow researchers. The experience allowed me to refine my public
                speaking skills, gain valuable feedback, and connect with experts in our field.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {[
                { src: boracay1, alt: "Presenting research in Boracay", title: "Research Presentation", description: "Showcasing our innovative findings to industry experts" },
                { src: boracay2, alt: "Research team in Boracay", title: "Team Collaboration", description: "Working together with our dedicated research team" },
                { src: boracay3, alt: "Panel discussion in Boracay", title: "Panel Discussion", description: "Engaging in meaningful discussions with panel members" },
                { src: boracay4, alt: "Award ceremony in Boracay", title: "Recognition", description: "Celebrating our achievements and contributions" }
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
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  />
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{image.title}</h4>
                    <p className="text-base md:text-lg text-gray-200">{image.description}</p>
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
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                onClick={handleCloseModal}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="relative max-w-4xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 p-4 rounded-lg">
                    <h4 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h4>
                    <p className="text-gray-200">{selectedImage.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            )}

            <motion.div 
              className="mt-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 md:p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <h4 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Key Achievements</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-white/10 rounded-xl p-4 md:p-6 backdrop-blur-sm">
                  <h5 className="text-lg md:text-xl font-semibold mb-2">Expert Feedback</h5>
                  <p className="text-base md:text-lg text-gray-100">Received valuable insights from industry professionals</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 md:p-6 backdrop-blur-sm">
                  <h5 className="text-lg md:text-xl font-semibold mb-2">Networking</h5>
                  <p className="text-base md:text-lg text-gray-100">Connected with leading researchers in the field</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 md:p-6 backdrop-blur-sm">
                  <h5 className="text-lg md:text-xl font-semibold mb-2">Recognition</h5>
                  <p className="text-base md:text-lg text-gray-100">Acknowledged for innovative research approach</p>
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
