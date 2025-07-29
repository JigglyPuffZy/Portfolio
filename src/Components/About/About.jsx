import './About.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import heroImage from '../../assets/img/Hero Image.jpg';
import boracay1 from '../../assets/img/boracay1.jpg';
import boracay2 from '../../assets/img/boracay2.jpg';
import boracay3 from '../../assets/img/boracay3.jpg';
import boracay4 from '../../assets/img/boracay4.jpg';
import { useState } from 'react';
import { Sparkles, User, Award, BookOpen, Briefcase, Code, Palette, ExternalLink, Star, Calendar } from 'lucide-react';

// --- Static Data ---
const expertise = [
  {
    title: 'Front-End Development',
    description: 'React.js, React Native, Vite, Expo Router',
    icon: <Code className="w-7 h-7" />, gradient: 'from-blue-500 to-blue-700',
  },
  {
    title: 'UI/UX Design',
    description: 'Responsive interface design for mobile/web',
    icon: <Palette className="w-7 h-7" />, gradient: 'from-purple-500 to-purple-700',
  },
  {
    title: 'Graphic Design',
    description: 'Adobe Photoshop, Canva',
    icon: <BookOpen className="w-7 h-7" />, gradient: 'from-pink-500 to-pink-700',
  },
  {
    title: 'Video Editing',
    description: 'DaVinci Resolve, Adobe Premiere Pro',
    icon: <Briefcase className="w-7 h-7" />, gradient: 'from-yellow-500 to-yellow-700',
  },
  {
    title: 'Digital Marketing',
    description: 'Posters, content creation, brand campaigns',
    icon: <Award className="w-7 h-7" />, gradient: 'from-green-500 to-green-700',
  },
  {
    title: 'Technical Support',
    description: 'Hardware troubleshooting, system servicing',
    icon: <User className="w-7 h-7" />, gradient: 'from-gray-500 to-gray-700',
  },
];

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
    icon: <User className="w-7 h-7 text-green-700 dark:text-green-300" />, border: 'border-green-100 dark:border-green-700', title: 'NC II – Computer System Servicing', subtitle: '', year: '2023'
  },
  {
    icon: <Award className="w-7 h-7 text-yellow-700 dark:text-yellow-300" />, border: 'border-yellow-100 dark:border-yellow-700', title: 'Certificate of Appreciation – PSITE', subtitle: '4th ICITE', year: '2023'
  },
  {
    icon: <Star className="w-7 h-7 text-purple-700 dark:text-purple-300" />, border: 'border-purple-100 dark:border-purple-700', title: 'Gawad San Luis Awardee', subtitle: 'Innovation, Creativity & Agility', year: '2024'
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
    className={`bg-white/70 dark:bg-slate-900/70 rounded-3xl shadow-2xl hover:shadow-[0_8px_40px_0_rgba(30,64,175,0.15)] transition-shadow duration-300 p-7 mb-10 border border-blue-100 dark:border-blue-900/40 backdrop-blur-2xl ${className}`}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, delay, ease: 'easeOut' }}
    whileHover={{ scale: 1.025, boxShadow: '0 8px 40px 0 rgba(30,64,175,0.18)' }}
  >
    {children}
  </motion.div>
);

const AnimatedBackground = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    {/* Top Left Blur */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full filter blur-3xl opacity-40 animate-pulse-slow" />
    {/* Bottom Right Blur */}
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300 dark:bg-blue-800 rounded-full filter blur-3xl opacity-30 animate-pulse-slower" />
    {/* SVG Wave */}
    <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-32 opacity-10" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#3B82F6" fillOpacity="0.3" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
    </svg>
  </div>
);

const AboutIntro = () => (
  <SectionCard className="flex flex-col gap-8 items-center md:items-start text-center md:text-left mb-10" delay={0.05}>
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 dark:text-blue-100 mb-3 tracking-tight leading-tight drop-shadow-lg">
        About Me
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-medium mb-5">
        Hi, I’m <span className="font-bold text-blue-700 dark:text-blue-300">Ralph Matthew Delarosa Punzalan</span>, a Bachelor of Science in Information Technology graduate from the University of Saint Louis Tuguegarao. I’m passionate about turning digital ideas into reality—whether that’s through front-end development, UI/UX design, graphic design, or video editing.<br /><br />
        My skill set covers a broad range: I build responsive web and mobile apps with React.js and React Native, design engaging user interfaces, create eye-catching graphics, and edit videos for digital campaigns. I love working on projects that blend creativity and technology, like developing mobile apps for job matching, designing posters for local businesses, or editing promotional videos for digital marketing.<br /><br />
        My mission is simple: to create digital experiences that are not only beautiful and modern, but also intuitive and enjoyable for everyone who uses them.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-400 dark:border-blue-700 rounded-xl p-6 shadow flex flex-col gap-2">
        <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-1">User-Centered</h3>
        <p className="text-gray-700 dark:text-gray-300 text-base">I always put the user first, designing interfaces and experiences that are easy to navigate and enjoyable to use.</p>
      </div>
      <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-purple-400 dark:border-purple-700 rounded-xl p-6 shadow flex flex-col gap-2">
        <h3 className="text-lg font-bold text-purple-700 dark:text-purple-300 mb-1">Creative Problem Solver</h3>
        <p className="text-gray-700 dark:text-gray-300 text-base">I enjoy tackling challenges with a creative mindset, finding smart solutions whether I’m coding a new feature or designing a visual asset.</p>
      </div>
      <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-pink-400 dark:border-pink-700 rounded-xl p-6 shadow flex flex-col gap-2">
        <h3 className="text-lg font-bold text-pink-700 dark:text-pink-300 mb-1">Detail-Oriented</h3>
        <p className="text-gray-700 dark:text-gray-300 text-base">From pixel-perfect layouts to clean, maintainable code, I pay close attention to the details that make a project stand out.</p>
      </div>
      <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-green-400 dark:border-green-700 rounded-xl p-6 shadow flex flex-col gap-2">
        <h3 className="text-lg font-bold text-green-700 dark:text-green-300 mb-1">Collaborative</h3>
        <p className="text-gray-700 dark:text-gray-300 text-base">I thrive in team settings, communicating clearly and working together to turn ideas into polished, successful projects.</p>
      </div>
    </div>
  </SectionCard>
);

const AboutHero = () => (
  <SectionCard className="flex flex-col md:flex-row items-center gap-10 mb-10 relative z-10 bg-transparent shadow-none p-0" delay={0.1}>
    {/* Decorative SVG Blob */}
    <svg className="absolute -top-16 -left-16 w-72 h-72 opacity-30 z-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#3B82F6" fillOpacity="0.25" d="M44.8,-67.2C57.7,-59.2,67.7,-48.1,74.2,-34.9C80.7,-21.7,83.7,-6.4,80.7,7.7C77.7,21.8,68.7,34.7,58.1,45.7C47.5,56.7,35.2,65.8,21.2,70.7C7.2,75.6,-8.5,76.3,-23.2,72.1C-37.9,67.9,-51.6,58.7,-61.2,46.2C-70.8,33.7,-76.3,17.9,-75.2,2.7C-74.1,-12.5,-66.4,-27.1,-56.1,-39.1C-45.8,-51.1,-32.9,-60.5,-18.2,-67.1C-3.5,-73.7,12.9,-77.6,28.2,-75.2C43.5,-72.8,57.7,-64.8,44.8,-67.2Z" transform="translate(100 100)" />
    </svg>
    <motion.div
      className="flex-shrink-0 relative z-10"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
      whileHover={{ scale: 1.04 }}
    >
      <div className="w-44 h-44 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-blue-400 via-blue-200 to-blue-600 p-1 shadow-2xl flex items-center justify-center relative">
        <img
          src={heroImage}
          alt="Portrait of Ralph Matthew Delarosa Punzalan"
          className="w-full h-full object-cover object-top rounded-full border-4 border-white dark:border-slate-900 shadow-xl transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute -bottom-3 right-3 bg-white dark:bg-blue-900 rounded-full p-2 shadow-lg border border-blue-200 dark:border-blue-800 animate-bounce">
          <Sparkles className="w-7 h-7 text-blue-500 dark:text-blue-300" />
        </div>
      </div>
    </motion.div>
    <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl gap-4 z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-blue-100 mb-3 tracking-tight leading-tight drop-shadow-lg">
        Ralph Matthew Delarosa Punzalan
      </h1>
      <motion.div
        className="inline-flex items-center gap-2 mb-4 px-6 py-2 rounded-full border border-blue-200 dark:border-blue-800 font-semibold text-lg shadow cursor-pointer bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent"
        whileHover={{ scale: 1.07, boxShadow: '0 0 0 4px rgba(59,130,246,0.13)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      >
        <Sparkles className="w-6 h-6 text-blue-300 dark:text-blue-200 animate-spin-slow group-hover:animate-spin-faster" />
        Front-End Developer & Digital Creator
      </motion.div>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-medium mb-5">
        I am an IT graduate from USL Tuguegarao, passionate about React.js, React Native, and UI/UX. I turn digital ideas into reality through clean code, creative design, and a user-first mindset.
      </p>
      <motion.a
        href="/BEST.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Ralph's Resume PDF"
        className="inline-block px-8 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold shadow-lg hover:bg-blue-700 transition-transform duration-200 border-2 border-blue-400 mt-2 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base active:scale-95 relative overflow-hidden"
        whileTap={{ scale: 0.97 }}
        whileHover={{ boxShadow: '0 0 0 6px rgba(59,130,246,0.18)' }}
      >
        <span className="relative z-10">Download Resume</span>
        <span className="absolute inset-0 pointer-events-none rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.a>
    </div>
  </SectionCard>
);

const QuickStats = () => (
  <SectionCard className="flex flex-wrap gap-7 justify-center items-center mb-8 py-7 bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-slate-900 dark:to-blue-950" delay={0.15}>
    <motion.div whileHover={{ scale: 1.12, boxShadow: '0 0 0 8px rgba(59,130,246,0.10)' }} className="flex flex-col items-center transition-transform cursor-pointer">
      <Sparkles className="w-8 h-8 text-blue-500 mb-2 group-hover:animate-wiggle" />
      <span className="font-extrabold text-blue-800 dark:text-blue-200 text-2xl">3+ Years</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">Experience</span>
    </motion.div>
    <motion.div whileHover={{ scale: 1.12, boxShadow: '0 0 0 8px rgba(59,130,246,0.10)' }} className="flex flex-col items-center transition-transform cursor-pointer">
      <Star className="w-8 h-8 text-blue-500 mb-2 group-hover:animate-wiggle" />
      <span className="font-extrabold text-blue-800 dark:text-blue-200 text-2xl">20+ Projects</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">Completed</span>
    </motion.div>
    <motion.div whileHover={{ scale: 1.12, boxShadow: '0 0 0 8px rgba(59,130,246,0.10)' }} className="flex flex-col items-center transition-transform cursor-pointer">
      <Award className="w-8 h-8 text-blue-500 mb-2 group-hover:animate-wiggle" />
      <span className="font-extrabold text-blue-800 dark:text-blue-200 text-2xl">6 Skills</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">Core Expertise</span>
    </motion.div>
  </SectionCard>
);

const EducationCertificates = () => (
  <SectionCard className="flex flex-col md:flex-row gap-7 md:gap-6 mb-10" delay={0.25}>
    <div className="flex-1">
      <h3 className="flex items-center gap-2 mb-7 text-xl font-bold text-blue-700 dark:text-blue-300">
        <BookOpen className="w-6 h-6" /> Education
      </h3>
      <div className="flex flex-col gap-7">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-4 bg-blue-50/80 dark:bg-blue-950/80 rounded-xl shadow-lg p-5 border-l-4 border-blue-200 dark:border-blue-700 hover:shadow-2xl transition-shadow cursor-pointer"
            whileHover={{ scale: 1.04, x: 6, boxShadow: '0 8px 32px 0 rgba(30,64,175,0.13)' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * idx, ease: 'easeOut' }}
          >
            <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-full p-3">
              {edu.icon}
            </div>
            <div>
              <div className="text-base font-bold text-blue-800 dark:text-blue-200">{edu.school}</div>
              <div className="text-xs text-gray-700 dark:text-gray-300">{edu.degree}</div>
              <div className="text-xs text-blue-500 dark:text-blue-400 font-semibold mt-1">{edu.years}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="flex-1">
      <h3 className="flex items-center gap-2 mb-7 text-xl font-bold text-blue-700 dark:text-blue-300">
        <Award className="w-6 h-6" /> Certificates
      </h3>
      <div className="flex flex-col gap-7">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            className={`relative bg-blue-50/80 dark:bg-blue-950/80 rounded-xl shadow-lg border ${cert.border} flex flex-col items-center text-center px-3 pt-8 pb-4 min-h-[100px] hover:shadow-2xl transition-shadow cursor-pointer`}
            tabIndex={0}
            aria-label={cert.title}
            whileHover={{ scale: 1.06, rotate: 1, boxShadow: '0 8px 32px 0 rgba(30,64,175,0.13)' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * idx, ease: 'easeOut' }}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 rounded-full p-3 shadow border border-gray-200 dark:border-slate-700 flex items-center justify-center">
              {cert.icon}
            </div>
            <div className="text-xs font-bold text-blue-900 dark:text-blue-100 mb-1 mt-2 flex items-center gap-1">
              {cert.title}
              {idx === 2 && (
                <span className="ml-1 px-2 py-0.5 bg-yellow-400 text-white text-[10px] font-bold rounded-full shadow">Top</span>
              )}
            </div>
            {cert.subtitle && <div className="text-xs text-gray-700 dark:text-gray-300 mb-1">{cert.subtitle}</div>}
            <div className="text-xs text-blue-500 dark:text-blue-400 font-semibold mt-1">{cert.year}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionCard>
);

const PersonalGallery = ({ onImageClick }) => (
  <SectionCard className="max-w-2xl mx-auto flex flex-col items-center mb-10" delay={0.3}>
    <h2 className="text-3xl font-extrabold mb-5 text-blue-900 dark:text-blue-100 tracking-tight">Personal Gallery</h2>
    <div className="mb-8 w-full bg-blue-50/80 dark:bg-blue-950/80 rounded-xl p-7 flex items-start gap-4 shadow-inner">
      <Star className="w-8 h-8 text-blue-500 dark:text-blue-300 mt-1 animate-pulse" />
      <div>
        <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-1">Boracay Research Presentation</h3>
        <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
          Presenting our groundbreaking study to a diverse audience of professionals and researchers in the beautiful setting of Boracay was a milestone in my academic journey. The experience not only honed my public speaking and research skills but also allowed me to connect with fellow researchers and professionals, making it a truly memorable event.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
      {galleryImages.map((image, idx) => (
        <motion.button
          key={idx}
          className="relative group rounded-2xl overflow-hidden shadow-lg border-2 border-blue-100 dark:border-blue-800 bg-white dark:bg-blue-950 hover:scale-105 transition-transform aspect-[4/3] cursor-pointer"
          onClick={() => onImageClick(image.src)}
          aria-label={`View ${image.title}`}
          whileHover={{ scale: 1.09, boxShadow: '0 8px 32px 0 rgba(30,64,175,0.13)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 * idx, ease: 'easeOut' }}
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 rounded-xl aspect-[4/3]"
            loading="lazy"
          />
          {image.featured && (
            <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">Featured</span>
          )}
          <div className="absolute bottom-2 left-2 px-2 py-1 bg-blue-600/80 rounded text-white text-xs font-semibold opacity-90">
            {image.title}
          </div>
        </motion.button>
      ))}
    </div>
    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mt-7">
      <ExternalLink className="w-5 h-5 animate-bounce" />
      <span className="text-base font-medium">Click any image to view larger</span>
    </div>
  </SectionCard>
);

// --- Main About Component ---
const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleImageClick = (image) => setSelectedImage(image);
  const handleCloseModal = () => setSelectedImage(null);

  return (
    <motion.section
      id="about"
      className="min-h-screen w-full py-10 sm:py-12 md:py-16 bg-blue-50 dark:bg-slate-900 relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <AnimatedBackground />
      <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative z-10 flex flex-col gap-10">
        <AboutIntro />
        <QuickStats />
        <EducationCertificates />
        <PersonalGallery onImageClick={handleImageClick} />
      </div>
      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-2xl"
          onClick={handleCloseModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative max-w-4xl w-full max-h-full bg-white/20 dark:bg-slate-900/40 rounded-3xl shadow-2xl p-4 flex flex-col items-center border-2 border-blue-200 dark:border-blue-800 backdrop-blur-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.35, type: 'spring', stiffness: 180, damping: 18 }}
          >
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-xl border-4 border-blue-200 dark:border-blue-800 aspect-[4/3]"
              loading="lazy"
            />
            <motion.button
              onClick={handleCloseModal}
              className="absolute -top-5 -right-5 w-12 h-12 bg-blue-600/80 hover:bg-blue-700/90 text-white rounded-full flex items-center justify-center text-3xl shadow-lg border-2 border-white dark:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-90"
              aria-label="Close image modal"
              whileTap={{ scale: 0.92, rotate: 10 }}
              whileHover={{ scale: 1.08, boxShadow: '0 0 0 8px rgba(59,130,246,0.18)' }}
            >
              ×
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default About;