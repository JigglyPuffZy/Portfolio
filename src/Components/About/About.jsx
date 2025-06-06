import './About.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
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

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-dark-200 dark:via-dark-300 dark:to-dark-400 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"
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
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-32">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-12"
          >
            <div className="relative">
              <motion.div 
                className="w-48 h-48 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center mx-auto shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-6xl font-bold text-white">RM</span>
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
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-7xl sm:text-8xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500"
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
            <p className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Hi, I'm <span className="font-bold text-primary-500">Ralph Matthew Delarosa Punzalan</span>, a BSIT student passionate about bringing digital ideas to life. 
              I love working on projects that combine React.js development, UI/UX design, graphic design, and video editing. 
              Whether it's building a smooth, responsive mobile app or designing eye-catching visuals, I always aim to create 
              experiences that are both functional and visually appealing.
            </p>
          </motion.div>
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          {expertise.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-8 rounded-2xl bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-500 transition-colors duration-300">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <h3 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500">Experience</h3>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-8 rounded-2xl bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold group-hover:text-primary-500 transition-colors duration-300">{exp.role}</h4>
                      <h5 className="text-xl font-medium text-primary-500">{exp.company}</h5>
                    </div>
                    <motion.span 
                      className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-200 px-4 py-2 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      {exp.period}
                    </motion.span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500">Education & Certificates</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-8 rounded-2xl bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300">
                <h4 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500">Education</h4>
                <div className="space-y-8">
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
                      <h5 className="text-xl font-semibold text-primary-500">{edu.school}</h5>
                      <p className="text-lg text-gray-600 dark:text-gray-300">{edu.degree}</p>
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
              <div className="relative p-8 rounded-2xl bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300">
                <h4 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-500">Certificates</h4>
                <div className="space-y-8">
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
                      <h5 className="text-xl font-semibold text-primary-500">{cert.title}</h5>
                      <p className="text-lg text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                      {cert.year && <p className="text-sm text-gray-500">{cert.year}</p>}
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
