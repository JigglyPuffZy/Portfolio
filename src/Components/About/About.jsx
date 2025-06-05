import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faXTwitter,
  faThreads
} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, Server, Smartphone, Webhook, Video, Image, Wrench, Award, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
      icon: <Code2 className="w-8 h-8" />,
      title: 'React JS & React Native Development',
      description: 'Built mobile applications using React Native and Expo Router. Integrated features like product listings, payment options (COD, GCash), and responsive navigation.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Designed clean, functional, and visually appealing interfaces for both mobile and web platforms. Focused on enhancing usability and maintaining consistent layouts.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Graphic Design',
      description: 'Created logos, posters, banners, digital ads, and publication layouts. Proficient in using Adobe Photoshop and Canva for graphic design projects.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Editing',
      description: 'Edited professional-grade videos for social media, presentations, and promotional use. Skilled in DaVinci Resolve and Adobe Premiere Pro.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Technical Support',
      description: 'Provided support for computer hardware and basic system maintenance. Holder of Computer System Servicing NC II Certification.',
      color: 'from-yellow-500 to-amber-500',
    },
  ];

  const experience = [
    {
      period: 'Nov 2024 - Apr 2025',
      company: 'Caribbean LED Solutions',
      role: 'Digital Marketing Assistant (Work from Home)',
      description: 'Assisted the digital marketing team by creating visual content for brand awareness campaigns. Designed and edited promotional posters aligned with the company\'s branding and marketing goals. Produced montage-style videos showcasing the business, highlighting products and company achievements. Edited simple, educational video content for internal training and online courses. Contributed to increasing audience engagement through compelling visuals and informative content.',
      icon: <Video className="w-6 h-6" />,
    },
    {
      period: 'Aug 2023 - Oct 2023',
      company: 'Freelance',
      role: 'React JS Developer (Part Time)',
      description: 'Developed the front end of a mobile e-commerce app using React Native and Expo Router, featuring product listings, shopping cart, payment options (COD, GCash), and order tracking with a focus on a smooth, user-friendly experience. Built the front end of an interactive quiz app (Quiz Whirl App) with multiple question types and score tracking. Designed a responsive and engaging UI using React Native, ensuring good performance across various mobile devices. Developed a mobile platform connecting blue-collar workers with local job opportunities, enhancing employment accessibility and supporting local economies.',
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      period: 'Aug 2023 - Nov 2023',
      company: 'DILG',
      role: 'Secretary / Digital Media Assistant',
      description: 'Served as secretary, assisting with documentation, organizing official papers, and managing records. Designed and edited posters and digital materials for barangay captains and Sangguniang Kabataan (SK) programs. Helped in preparing visual content for community announcements, campaigns, and public service events. Contributed to promoting local initiatives through clear and visually engaging materials.',
      icon: <Image className="w-6 h-6" />,
    },
    {
      period: 'Jun 2023 - Aug 2023',
      company: 'LGU Sto-Tomas',
      role: 'Employee (GIP)',
      description: 'Edited banners for the Local Government Unit (LGU) and designed a book cover. Edited publication materials and newspapers.',
      icon: <Image className="w-6 h-6" />,
    },
    {
      period: 'Jan 2023 - Feb 2023',
      company: 'Freelance (Upwork)',
      role: 'Graphic Designer (Part Time)',
      description: 'Completed projects including logos and posters. Designed creative digital displays for online advertising for local businesses.',
      icon: <Image className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-200 dark:to-dark-300 relative overflow-hidden">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center mx-auto">
              <span className="text-3xl font-bold text-white">RM</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-primary-500">
            About <span className="text-primary-500">Me</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hi, I'm Ralph Matthew Delarosa Punzalan, a BSIT student passionate about bringing digital ideas to life. 
              I love working on projects that combine React.js development, UI/UX design, graphic design, and video editing. 
              Whether it's building a smooth, responsive mobile app or designing eye-catching visuals, I always aim to create 
              experiences that are both functional and visually appealing.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {expertise.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`card p-8 rounded-2xl bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300`}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-6 text-white`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Briefcase className="w-8 h-8 text-primary-500 mr-3" />
            <h3 className="text-3xl font-bold">Experience</h3>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="card p-8 rounded-2xl bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mr-4">
                      {exp.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{exp.role}</h4>
                      <h5 className="text-lg font-medium text-primary-500">{exp.company}</h5>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-200 px-4 py-2 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <div className="flex items-center justify-center mb-12">
            <GraduationCap className="w-8 h-8 text-primary-500 mr-3" />
            <h3 className="text-3xl font-bold">Education & Certificates</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card p-8 rounded-2xl bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300"
            >
              <h4 className="text-xl font-bold mb-4">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-primary-500">UNIVERSITY OF SAINT LOUIS TUGUEGARAO</h5>
                  <p className="text-gray-600 dark:text-gray-300">Bachelor of Science in Information Technology</p>
                  <p className="text-sm text-gray-500">2020-2024</p>
                </div>
                <div>
                  <h5 className="font-semibold text-primary-500">STO TOMAS NATIONAL HIGH SCHOOL</h5>
                  <p className="text-gray-600 dark:text-gray-300">Humanities and Social Sciences</p>
                  <p className="text-sm text-gray-500">2014-2020</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card p-8 rounded-2xl bg-white dark:bg-dark-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-300"
            >
              <h4 className="text-xl font-bold mb-4">Certificates</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-primary-500">Computer System Servicing NC II</h5>
                  <p className="text-gray-600 dark:text-gray-300">Technical Education and Skills Development Authority (TESDA)</p>
                  <p className="text-sm text-gray-500">2023</p>
                </div>
                <div>
                  <h5 className="font-semibold text-primary-500">Certificate of Appreciation</h5>
                  <p className="text-gray-600 dark:text-gray-300">PSITE (4th ICITE 2023)</p>
                </div>
                <div>
                  <h5 className="font-semibold text-primary-500">Gawad San Luis</h5>
                  <p className="text-gray-600 dark:text-gray-300">Excellence in Innovation, Creativity, and Agility</p>
                  <p className="text-sm text-gray-500">2024</p>
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
