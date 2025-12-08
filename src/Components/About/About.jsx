import './About.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import heroImage from '../../assets/img/Hero Image.jpg';
import boracay1 from '../../assets/img/boracay1.jpg';
import boracay2 from '../../assets/img/boracay2.jpg';
import boracay3 from '../../assets/img/boracay3.jpg';
import boracay4 from '../../assets/img/boracay4.jpg';
import { useState } from 'react';
import React from 'react';
import { Sparkles, User, Award, BookOpen, Briefcase, Code, Palette, ExternalLink, Star, Calendar } from 'lucide-react';

// --- Static Data ---
const expertise = [
  {
    title: 'Front-End Development',
    description: 'React.js, React Native, Vite, Expo Router',
    icon: <Code className="w-7 h-7" />, 
    gradient: 'from-blue-500 to-blue-700',
    skills: ['React.js', 'React Native', 'JavaScript', 'TypeScript', 'Vite'],
    level: 95
  },
  {
    title: 'UI/UX Design',
    description: 'Responsive interface design for mobile/web',
    icon: <Palette className="w-7 h-7" />, 
    gradient: 'from-blue-400 to-blue-600',
    skills: ['Figma', 'Adobe XD', 'Responsive Design', 'User Research'],
    level: 90
  },
  {
    title: 'Graphic Design',
    description: 'Adobe Photoshop, Canva',
    icon: <BookOpen className="w-7 h-7" />, 
    gradient: 'from-blue-600 to-blue-800',
    skills: ['Photoshop', 'Canva', 'Illustrator', 'Brand Design'],
    level: 85
  },
  {
    title: 'Video Editing',
    description: 'DaVinci Resolve, Adobe Premiere Pro',
    icon: <Briefcase className="w-7 h-7" />, 
    gradient: 'from-blue-300 to-blue-500',
    skills: ['DaVinci Resolve', 'Premiere Pro', 'Motion Graphics'],
    level: 80
  },
  {
    title: 'Digital Marketing',
    description: 'Posters, content creation, brand campaigns',
    icon: <Award className="w-7 h-7" />, 
    gradient: 'from-blue-700 to-blue-900',
    skills: ['Content Creation', 'Social Media', 'Brand Strategy'],
    level: 88
  },
  {
    title: 'Technical Support',
    description: 'Hardware troubleshooting, system servicing',
    icon: <User className="w-7 h-7" />, 
    gradient: 'from-blue-800 to-slate-700',
    skills: ['Hardware Repair', 'System Maintenance', 'Troubleshooting'],
    level: 92
  },
];

const PersonalQuote = () => (
  <SectionCard className="mb-10 text-center relative overflow-hidden" delay={0.18}>
    {/* Decorative background */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-blue-100/50 to-blue-50/50 dark:from-blue-950/50 dark:via-blue-900/50 dark:to-blue-950/50" />
    <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-blue-300/20 dark:bg-blue-700/20 rounded-full blur-2xl" />
    
    <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-4">
      <motion.div
        className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 opacity-20"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        💭
      </motion.div>
      
      <motion.blockquote 
        className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed italic px-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        "I believe in the power of technology to transform lives and businesses. Every line of code I write, every design I create, and every problem I solve is driven by the passion to make a meaningful impact in the digital world."
      </motion.blockquote>
      
      <motion.div
        className="flex items-center justify-center gap-2 sm:gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400" />
        <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base whitespace-nowrap">Ralph Matthew Punzalan</span>
        <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-400" />
      </motion.div>
      
      <motion.div
        className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <span className="flex items-center gap-1 whitespace-nowrap">
          🎯 <span>Mission-Driven</span>
        </span>
        <span className="flex items-center gap-1 whitespace-nowrap">
          💡 <span>Innovation-Focused</span>
        </span>
        <span className="flex items-center gap-1 whitespace-nowrap">
          🤝 <span>User-Centric</span>
        </span>
      </motion.div>
    </div>
  </SectionCard>
);



const experience = [
  {
    period: 'Nov 2023–Jan 2024',
    company: 'Labor-Linkz (Freelance)',
    role: 'Front-End Developer',
    description: `Built the front end of Labor-Linkz, a job-matching app for blue-collar workers, using React Native.\nCreated user interfaces for admin, client, and worker roles with features like login, search, notifications, rating, and activity tracking.\nAdmins can manage users, verify accounts, and handle reports and feedback.\nFocused on simple, responsive design to make job searching easier and mobile-friendly.`,
    highlights: ['Labor-Linkz', 'Job Matching', 'Activity Tracking'],
    type: 'Freelance',
    duration: '3 months'
  },
  {
    period: 'Jan–Feb 2024',
    company: 'Graphic Design (Freelance)',
    role: 'Graphic Designer',
    description: `Completed projects including logos and posters. Designed creative digital displays for online advertising for local businesses.`,
    highlights: ['Logos', 'Posters', 'Digital Campaigns'],
    type: 'Freelance',
    duration: '2 months'
  },
  {
    period: 'Mar–Jun 2024',
    company: 'Together WeComply (Freelance)',
    role: 'Front-End Developer',
    description: 'Created Together WeComply, a school event tracker with QR check-ins, auto-sanctioning, and a clean UI for students and admins.',
    highlights: ['Together WeComply', 'QR Check-ins', 'Auto-sanctioning'],
    type: 'Freelance',
    duration: '4 months'
  },
  {
    period: 'Aug 2024 - Oct 2024',
    company: 'Quiz Whirl App (Freelance)',
    role: 'Front-End Developer',
    description: 'Built the front end of an interactive quiz app with multiple question types and score tracking. Designed a responsive and engaging UI using React Native, ensuring good performance across various mobile devices.',
    highlights: ['Quiz App', 'React Native', 'Responsive UI'],
    type: 'Freelance',
    duration: '3 months'
  },
  {
    period: 'Aug–Oct 2024',
    company: 'E-commerce App (Freelance)',
    role: 'React JS Developer (Part-Time)',
    description: 'Worked on a freelance project featuring a mobile e-commerce app with product listings and GCash/COD payment options.',
    highlights: ['E-commerce App', 'Product Listings', 'GCash/COD Payments'],
    type: 'Freelance',
    duration: '3 months'
  },
  {
    period: 'Jun–Aug 2024',
    company: 'LGU Sto. Tomas (Government)',
    role: 'Employee (GIP)',
    description: 'Designed banners, posters, and a book cover for local government use. Managed official emails, posted updates, and provided computer troubleshooting and maintenance support.',
    highlights: ['Banners', 'Posters', 'IT Support'],
    type: 'Government',
    duration: '3 months'
  },
  {
    period: 'Aug–Nov 2024',
    company: 'DILG (Government)',
    role: 'Secretary / Digital Media Assistant',
    description: 'Assisted with official documentation and designed visual materials for SK programs and barangay events. Created posters and content for local campaigns and announcements.',
    highlights: ['Documentation', 'Visual Materials', 'Community Campaigns'],
    type: 'Government',
    duration: '4 months'
  },
  {
    period: 'Nov 2024–Apr 2025',
    company: 'Caribbean LED Solutions (Corporate)',
    role: 'Digital Marketing Assistant (Remote)',
    description: 'Designed promotional materials, edited videos for training and product showcases, and contributed to audience engagement through digital campaigns.',
    highlights: ['Promotional Materials', 'Video Editing', 'Digital Campaigns'],
    type: 'Corporate',
    duration: '6 months'
  },
  {
    period: 'May–June 2025',
    company: 'VTrack (Freelance)',
    role: 'Front-End Developer',
    description: 'Developed VTrack, a violator tracking system for PNP and LGU Cabagan using React + Vite, with SMS notifications, citation tracking, and automated fine computation.',
    highlights: ['VTrack System', 'React + Vite', 'SMS Notifications'],
    type: 'Freelance',
    duration: '2 months'
  },
  {
    period: 'Apr–Jun 2025',
    company: 'TriReg Web (Freelance)',
    role: 'Front-End Developer',
    description: 'Built TriReg Web, a tricycle permit system using React + Vite with QR generation, receipt verification, and dashboard visualizations.',
    highlights: ['TriReg Web', 'QR Generation', 'Dashboard Visualizations'],
    type: 'Freelance',
    duration: '3 months'
  },
];

const education = [
  {
    icon: <BookOpen className="w-7 h-7 text-blue-700 dark:text-blue-300" />,
    school: 'University of Saint Louis Tuguegarao',
    degree: 'Bachelor of Science in Information Technology',
    years: '2020–2024',
  },
  {
    icon: <Award className="w-7 h-7 text-blue-700 dark:text-blue-300" />,
    school: 'Sto. Tomas National High School',
    degree: 'Humanities and Social Sciences',
    years: '2014–2020',
  },
];

const certificates = [
  {
    icon: <User className="w-7 h-7 text-blue-700 dark:text-blue-300" />, border: 'border-blue-100 dark:border-blue-700', title: 'NC II – Computer System Servicing', subtitle: '', year: '2023'
  },
  {
    icon: <Award className="w-7 h-7 text-blue-700 dark:text-blue-300" />, border: 'border-blue-100 dark:border-blue-700', title: 'Certificate of Appreciation – PSITE', subtitle: '4th ICITE', year: '2023'
  },
  {
    icon: <Star className="w-7 h-7 text-blue-700 dark:text-blue-300" />, border: 'border-blue-100 dark:border-blue-700', title: 'Gawad San Luis Awardee', subtitle: 'Innovation, Creativity & Agility', year: '2024'
  }
];

const galleryImages = [
  { src: boracay1, title: 'Research Presentation', featured: true },
  { src: boracay2, title: 'Conference Venue' },
  { src: boracay3, title: 'Professional Networking' },
  { src: boracay4, title: 'Academic Achievement' },
];

// --- Components ---
// --- Subcomponents ---
const SectionCard = ({ children, className = '', delay = 0 }) => (
  <motion.div
    className={`bg-white/90 dark:bg-dark-800/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-500 p-4 sm:p-6 md:p-8 border border-gray-200/60 dark:border-gray-700/60 relative overflow-hidden ${className}`}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, delay, ease: 'easeOut' }}
    whileHover={{ scale: 1.01, y: -4 }}
  >
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    {children}
  </motion.div>
);





const AboutHero = () => (
  <SectionCard className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 group" delay={0.1}>
    {/* Profile Image with 3D Effect */}
    <motion.div
      className="flex-shrink-0 relative w-full sm:w-auto flex justify-center"
      initial={{ scale: 0.9, opacity: 0, rotateY: -20 }}
      whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500 via-accent-500 to-blue-600 p-1 shadow-premium relative">
        <img
          src={heroImage}
          alt="Ralph Matthew Delarosa Punzalan"
          className="w-full h-full object-cover object-top rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white dark:border-dark-900 shadow-xl"
          loading="lazy"
        />
        {/* Floating badge */}
        <motion.div 
          className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-blue-600 to-accent-600 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-glow"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </motion.div>
        
        {/* Orbiting particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{
              duration: 10 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/2 left-1/2 w-full h-full"
            style={{ transformOrigin: "center" }}
          >
            <div 
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-accent-400 rounded-full blur-sm"
              style={{
                top: `${20 + i * 30}%`,
                left: "100%",
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Content */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 gap-4 sm:gap-6 w-full">
      <motion.h1 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text-premium leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Ralph Matthew Delarosa Punzalan
      </motion.h1>

      <motion.div
        className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-accent-600 text-white font-semibold shadow-glow text-sm sm:text-base"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <Code className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="whitespace-nowrap">Front-End Developer & Digital Creator</span>
      </motion.div>

      <motion.p 
        className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl px-2 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        IT graduate from <span className="font-semibold text-blue-600 dark:text-blue-400">USL Tuguegarao</span>, passionate about React.js, React Native, and UI/UX. I turn digital ideas into reality through clean code, creative design, and a user-first mindset.
      </motion.p>

      {/* CTA Buttons */}

    </div>
  </SectionCard>
);



const EducationCertificates = () => (
  <SectionCard className="flex flex-col md:flex-row gap-6 sm:gap-7 md:gap-6 mb-10" delay={0.25}>
    <div className="flex-1">
      <h3 className="flex items-center gap-2 mb-4 sm:mb-6 text-lg sm:text-xl font-bold text-blue-700 dark:text-blue-300">
        <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" /> Education
      </h3>
      <div className="flex flex-col gap-4 sm:gap-6">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            className="flex items-start sm:items-center gap-3 sm:gap-4 bg-blue-50/80 dark:bg-blue-950/80 rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-5 border-l-4 border-blue-200 dark:border-blue-700 hover:shadow-2xl transition-shadow cursor-pointer"
            whileHover={{ scale: 1.02, x: 4, boxShadow: '0 8px 32px 0 rgba(30,64,175,0.13)' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * idx, ease: 'easeOut' }}
          >
            <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-full p-2 sm:p-3">
              <BookOpen className="w-5 h-5 sm:w-7 sm:h-7 text-blue-700 dark:text-blue-300" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm sm:text-base font-bold text-blue-800 dark:text-blue-200 break-words">{edu.school}</div>
              <div className="text-xs text-gray-700 dark:text-gray-300 mt-1 break-words">{edu.degree}</div>
              <div className="text-xs text-blue-500 dark:text-blue-400 font-semibold mt-1">{edu.years}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="flex-1">
      <h3 className="flex items-center gap-2 mb-4 sm:mb-6 text-lg sm:text-xl font-bold text-blue-700 dark:text-blue-300">
        <Award className="w-5 h-5 sm:w-6 sm:h-6" /> Certificates
      </h3>
      <div className="flex flex-col gap-6 sm:gap-7">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            className={`relative bg-blue-50/80 dark:bg-blue-950/80 rounded-lg sm:rounded-xl shadow-lg border ${cert.border} flex flex-col items-center text-center px-3 pt-10 sm:pt-8 pb-3 sm:pb-4 min-h-[100px] hover:shadow-2xl transition-shadow cursor-pointer`}
            tabIndex={0}
            aria-label={cert.title}
            whileHover={{ scale: 1.03, rotate: 0.5, boxShadow: '0 8px 32px 0 rgba(30,64,175,0.13)' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * idx, ease: 'easeOut' }}
          >
            <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 rounded-full p-2 sm:p-3 shadow border border-gray-200 dark:border-slate-700 flex items-center justify-center">
              <User className="w-5 h-5 sm:w-7 sm:h-7 text-blue-700 dark:text-blue-300" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-blue-900 dark:text-blue-100 mb-1 mt-1 sm:mt-2 flex flex-wrap items-center justify-center gap-1 px-2">
              <span className="break-words text-center">{cert.title}</span>
              {idx === 2 && (
                <span className="px-2 py-0.5 bg-yellow-400 text-white text-[10px] font-bold rounded-full shadow whitespace-nowrap">Top</span>
              )}
            </div>
            {cert.subtitle && <div className="text-xs text-gray-700 dark:text-gray-300 mb-1 px-2 break-words">{cert.subtitle}</div>}
            <div className="text-xs text-blue-500 dark:text-blue-400 font-semibold mt-1">{cert.year}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionCard>
);

const PersonalGallery = ({ onImageClick }) => (
  <SectionCard className="max-w-4xl mx-auto flex flex-col items-center mb-10 relative" delay={0.3}>
    <motion.h2 
      className="text-3xl font-extrabold mb-8 text-blue-900 dark:text-blue-100 tracking-tight text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      🌟 Personal Gallery & Achievements
    </motion.h2>
    
    {/* Enhanced story section */}
    <motion.div 
      className="mb-10 w-full bg-gradient-to-r from-blue-50/80 via-blue-100/80 to-blue-50/80 dark:from-blue-950/80 dark:via-blue-900/80 dark:to-blue-950/80 rounded-2xl p-8 shadow-lg border border-blue-200/50 dark:border-blue-800/50 relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full translate-y-12 -translate-x-12" />
      
      <div className="flex items-start gap-6 relative z-10">
        <motion.div
          className="flex-shrink-0"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <Star className="w-8 h-8 text-white animate-pulse" />
          </div>
        </motion.div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
            🏆 Boracay Research Presentation Excellence
          </h3>
          <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed mb-4">
            A transformative experience presenting cutting-edge research to industry professionals and academics in the stunning backdrop of Boracay. This milestone event showcased my ability to communicate complex technical concepts effectively while building valuable professional networks.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Public Speaking', 'Research Excellence', 'Professional Networking', 'Academic Achievement'].map((tag, idx) => (
              <motion.span
                key={idx}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + (0.1 * idx) }}
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
    
    {/* Enhanced gallery grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
      {galleryImages.map((image, idx) => (
        <motion.button
          key={idx}
          className="relative group rounded-3xl overflow-hidden shadow-xl border-2 border-blue-100 dark:border-blue-800 bg-white dark:bg-blue-950 cursor-pointer aspect-[4/3] transform-gpu"
          onClick={() => onImageClick(image.src)}
          aria-label={`View ${image.title}`}
          initial={{ opacity: 0, y: 30, rotateY: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 * idx, ease: 'easeOut' }}
          whileHover={{ 
            scale: 1.05, 
            y: -8,
            boxShadow: '0 25px 50px rgba(30,64,175,0.2)',
            rotateY: 5
          }}
        >
          {/* Image with enhanced effects */}
          <div className="relative w-full h-full overflow-hidden rounded-3xl">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Enhanced badges and labels */}
            {image.featured && (
              <motion.span 
                className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10 flex items-center gap-1"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (0.1 * idx) }}
              >
                ⭐ Featured
              </motion.span>
            )}
            
            <motion.div 
              className="absolute bottom-3 left-3 right-3 px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl text-gray-800 dark:text-gray-200 text-sm font-semibold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + (0.1 * idx) }}
            >
              <div className="flex items-center justify-between">
                <span>{image.title}</span>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </div>
            </motion.div>
          </div>
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/0 via-blue-500/0 to-blue-400/0 group-hover:from-blue-400/20 group-hover:via-blue-500/20 group-hover:to-blue-400/20 transition-all duration-500" />
        </motion.button>
      ))}
    </div>
    
    {/* Enhanced call-to-action */}
    <motion.div 
      className="flex items-center gap-3 text-blue-600 dark:text-blue-400 mt-8 bg-blue-50/50 dark:bg-blue-950/50 px-6 py-3 rounded-full border border-blue-200/50 dark:border-blue-800/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <ExternalLink className="w-5 h-5" />
      </motion.div>
      <span className="text-base font-medium">Click any image to explore in detail</span>
    </motion.div>
  </SectionCard>
);

// --- Main About Component ---
const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleImageClick = (image) => setSelectedImage(image);
  const handleCloseModal = () => setSelectedImage(null);

  // Add keyboard support for modal
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        handleCloseModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <motion.section
      id="about"
      className="min-h-screen w-full py-24 bg-white dark:bg-dark-950 relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Ultra-Modern Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 bg-mesh dark:bg-mesh-dark opacity-40" />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-accent-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-tr from-accent-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col gap-16">
        <AboutHero />
        <PersonalQuote />
        <EducationCertificates />
        <PersonalGallery onImageClick={handleImageClick} />
      </div>
      {/* Enhanced Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 backdrop-blur-3xl"
          onClick={handleCloseModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative max-w-5xl w-full max-h-full bg-white/10 dark:bg-slate-900/20 rounded-3xl shadow-2xl p-6 flex flex-col items-center border border-white/20 dark:border-blue-800/30 backdrop-blur-3xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Enhanced image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage}
                alt="Gallery"
                className="max-w-full max-h-[75vh] object-contain rounded-2xl"
                loading="lazy"
              />
              
              {/* Image overlay with info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Research Presentation Gallery</h3>
                <p className="text-sm opacity-90">Academic excellence showcase from Boracay conference</p>
              </div>
            </div>
            
            {/* Enhanced close button */}
            <motion.button
              onClick={handleCloseModal}
              className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full flex items-center justify-center text-2xl shadow-xl border-2 border-white/20 focus:outline-none focus:ring-4 focus:ring-red-400/50 group"
              aria-label="Close image modal"
              whileTap={{ scale: 0.9, rotate: 90 }}
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(239,68,68,0.5)' }}
            >
              <motion.span
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="group-hover:animate-none"
              >
                ×
              </motion.span>
            </motion.button>
            
            {/* Navigation hint */}
            <motion.div
              className="mt-4 text-white/70 text-sm flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span>💡 Click outside or press ESC to close</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Floating Quick Actions */}
      <motion.div
        className="fixed bottom-8 right-8 z-40 flex flex-col gap-3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          title="Back to top"
        >
          <motion.span
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↑
          </motion.span>
        </motion.button>
        
        <motion.button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          title="Contact me"
        >
          💬
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default About;