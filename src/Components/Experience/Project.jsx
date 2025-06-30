import { useState, useEffect, useCallback } from "react";
import "./Project.css";
import WebPortfolio1 from "../../assets/img/webportfolio1.png";
import WebPortfolio2 from "../../assets/img/webportfolio2.png";
import WebPortfolio3 from "../../assets/img/webportfolio3.png";
import WebPortfolio4 from "../../assets/img/webportfolio4.png";
import WebPortfolio5 from "../../assets/img/webportfolio5.png";
import Ads1 from "../../assets/img/Ads Poster 1.jpg";
import Ads2 from "../../assets/img/Ads Poster 2.jpg";
import BookCover1 from "../../assets/img/BookCover1.jpg";
import BookCover2 from "../../assets/img/BookCover2.jpg";
import BookCover3 from "../../assets/img/BookCover3.jpg";
import BookCover4 from "../../assets/img/BookCover4.png";
import BookCover5 from "../../assets/img/BookCover5.png";
import BookCover6 from "../../assets/img/BookCover6.png";
import BrandAwareness1 from "../../assets/img/Brand Awareness 1.jpg";
import BrandAwareness2 from "../../assets/img/Brand Awareness 2.jpg";
import BrandAwareness3 from "../../assets/img/Brand Awareness 3.jpg";
import BrandAwareness4 from "../../assets/img/Brand awareness 4.jpg";
import BrandAwareness5 from "../../assets/img/Brand Awareness 5.jpg";
import Newspaper1 from "../../assets/img/NewsPaper1.jpg";
import Newspaper2 from "../../assets/img/NewsPaper2.jpg";
import Newspaper3 from "../../assets/img/NewsPaper3.jpg";
import Newspaper4 from "../../assets/img/NewsPaper4.jpg";
import Newspaper5 from "../../assets/img/NewsPaper5.jpg";
import Newspaper6 from "../../assets/img/NewsPaper6.jpg";
import Marians from "../../assets/img/Marian's.png";
import QuizWhirl from "../../assets/img/QuizWHirl.png";
import Shoes1 from "../../assets/img/Shoes1.png";
import Shoes2 from "../../assets/img/Shoes2.png";
import Shoes3 from "../../assets/img/Shoes3.png";
import Shoes4 from "../../assets/img/shoes4.png";
import CAR1 from "../../assets/img/Car1.png";
import CAR2 from "../../assets/img/Car2.png";
import CAR3 from "../../assets/img/Car3.png";
import CAR4 from "../../assets/img/Car4.png";
import CAR5 from "../../assets/img/Car5.png";
import Nba1 from "../../assets/img/Nba1.png";
import nba2 from "../../assets/img/nba2.png";
import nba3 from "../../assets/img/nba3.png";
import nba4 from "../../assets/img/nba4.png";
import LaborLinkz from "../../assets/img/LaborLinkz.png";
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, X, ChevronLeft, ChevronRight, Smartphone, Code, Star, Book, Palette, Briefcase, Newspaper, Footprints, Car } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState({ src: null, alt: null });
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [selectedCategory, setSelectedCategory] = useState('frontend'); // 'frontend' or 'graphic'
  // Add state to control visibility of each section
  const [visibleSections, setVisibleSections] = useState({
    book: true,
    ad: true,
    newspaper: true,
    shoes: true,
    car: true,
    brand: true,
    nba: true,
  });

  // Add touch event handlers for mobile
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchStart(touch.clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    
    const touch = e.touches[0];
    const diff = touchStart - touch.clientX;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        handleNextImage();
      } else {
        handlePrevImage();
      }
      setTouchStart(null);
    }
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

  const mobileProjects = [
    {
      title: 'Marians Mobile App',
      description: 'Developed a mobile application for Marians, featuring a modern UI/UX design and seamless user experience.',
      mainImage: Marians,
      images: [Marians],
      tech: ['React Native', 'Mobile UI/UX', 'State Management', 'Performance Optimization'],
      features: [
        'Modern and intuitive interface',
        'Smooth animations and transitions',
        'Responsive design for all devices',
        'Offline functionality',
        'Real-time updates'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'LaborLinkz',
      description: 'Building Community Through Freelancing Platform',
      mainImage: LaborLinkz,
      images: [LaborLinkz],
      tech: ['React Native', 'Freelancing Platform', 'Job Matching', 'Mobile Development'],
      features: [
        'Job matching for blue-collar workers',
        'Admin, client, and worker roles',
        'Login, search, notifications, rating, and activity tracking',
        'User management and account verification',
        'Simple, responsive, and mobile-friendly design'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Quiz Whirl App',
      description: 'Built an interactive quiz app with multiple question types and score tracking. Designed a responsive and engaging UI using React Native.',
      mainImage: QuizWhirl,
      images: [QuizWhirl],
      tech: ['React Native', 'Mobile UI/UX', 'State Management', 'Performance Optimization'],
      features: [
        'Multiple question types support',
        'Real-time score tracking',
        'Responsive design for all devices',
        'Smooth animations and transitions',
        'Offline functionality'
      ],
      github: '#',
      live: '#'
    }
  ];

  const brandProjects = [
    {
      title: 'Brand Awareness Campaign 1',
      description: 'A comprehensive brand awareness campaign showcasing innovative marketing strategies and creative design solutions.',
      mainImage: BrandAwareness1,
      images: [BrandAwareness1],
      tech: ['Marketing', 'Brand Strategy', 'Social Media', 'Design'],
      features: [
        'Strategic brand positioning',
        'Social media campaign management',
        'Content creation and curation',
        'Analytics and performance tracking',
        'Cross-platform integration'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Brand Awareness Campaign 2',
      description: 'A comprehensive brand awareness campaign showcasing innovative marketing strategies and creative design solutions.',
      mainImage: BrandAwareness2,
      images: [BrandAwareness2],
      tech: ['Marketing', 'Brand Strategy', 'Social Media', 'Design'],
      features: [
        'Strategic brand positioning',
        'Social media campaign management',
        'Content creation and curation',
        'Analytics and performance tracking',
        'Cross-platform integration'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Brand Awareness Campaign 3',
      description: 'A comprehensive brand awareness campaign showcasing innovative marketing strategies and creative design solutions.',
      mainImage: BrandAwareness3,
      images: [BrandAwareness3],
      tech: ['Marketing', 'Brand Strategy', 'Social Media', 'Design'],
      features: [
        'Strategic brand positioning',
        'Social media campaign management',
        'Content creation and curation',
        'Analytics and performance tracking',
        'Cross-platform integration'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Brand Awareness Campaign 4',
      description: 'A comprehensive brand awareness campaign showcasing innovative marketing strategies and creative design solutions.',
      mainImage: BrandAwareness4,
      images: [BrandAwareness4],
      tech: ['Marketing', 'Brand Strategy', 'Social Media', 'Design'],
      features: [
        'Strategic brand positioning',
        'Social media campaign management',
        'Content creation and curation',
        'Analytics and performance tracking',
        'Cross-platform integration'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Brand Awareness Campaign 5',
      description: 'A comprehensive brand awareness campaign showcasing innovative marketing strategies and creative design solutions.',
      mainImage: BrandAwareness5,
      images: [BrandAwareness5],
      tech: ['Marketing', 'Brand Strategy', 'Social Media', 'Design'],
      features: [
        'Strategic brand positioning',
        'Social media campaign management',
        'Content creation and curation',
        'Analytics and performance tracking',
        'Cross-platform integration'
      ],
      github: '#',
      live: '#'
    }
  ];

  const bookProjects = [
    {
      title: 'The Devil Behind the Mask',
      description: 'A collection of book cover designs showcasing creative typography and visual storytelling for various genres.',
      mainImage: BookCover1,
      images: [BookCover1],
      tech: ['Design', 'Typography', 'Illustration', 'Print'],
      features: [
        'Genre-specific design approaches',
        'Custom typography solutions',
        'Digital and print-ready artwork',
        'Market research integration',
        'Client collaboration process'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'The Man Out of Time',
      description: 'A collection of book cover designs showcasing creative typography and visual storytelling for various genres.',
      mainImage: BookCover2,
      images: [BookCover2],
      tech: ['Design', 'Typography', 'Illustration', 'Print'],
      features: [
        'Genre-specific design approaches',
        'Custom typography solutions',
        'Digital and print-ready artwork',
        'Market research integration',
        'Client collaboration process'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Learn Graphic Design Easily',
      description: 'A collection of book cover designs showcasing creative typography and visual storytelling for various genres.',
      mainImage: BookCover3,
      images: [BookCover3],
      tech: ['Design', 'Typography', 'Illustration', 'Print'],
      features: [
        'Genre-specific design approaches',
        'Custom typography solutions',
        'Digital and print-ready artwork',
        'Market research integration',
        'Client collaboration process'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'The Evil Forest',
      description: 'A collection of book cover designs showcasing creative typography and visual storytelling for various genres.',
      mainImage: BookCover4,
      images: [BookCover4],
      tech: ['Design', 'Typography', 'Illustration', 'Print'],
      features: [
        'Genre-specific design approaches',
        'Custom typography solutions',
        'Digital and print-ready artwork',
        'Market research integration',
        'Client collaboration process'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'The Final Path',
      description: 'A collection of book cover designs showcasing creative typography and visual storytelling for various genres.',
      mainImage: BookCover5,
      images: [BookCover5],
      tech: ['Design', 'Typography', 'Illustration', 'Print'],
      features: [
        'Genre-specific design approaches',
        'Custom typography solutions',
        'Digital and print-ready artwork',
        'Market research integration',
        'Client collaboration process'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'The Vanishing Mountain',
      description: 'A collection of book cover designs showcasing creative typography and visual storytelling for various genres.',
      mainImage: BookCover6,
      images: [BookCover6],
      tech: ['Design', 'Typography', 'Illustration', 'Print'],
      features: [
        'Genre-specific design approaches',
        'Custom typography solutions',
        'Digital and print-ready artwork',
        'Market research integration',
        'Client collaboration process'
      ],
      github: '#',
      live: '#'
    }
  ];

  const adProjects = [
    {
      title: 'Poster Ads 1',
      description: 'Creative poster advertisements designed to capture attention and convey messages effectively.',
      mainImage: Ads1,
      images: [Ads1],
      tech: ['Design', 'Typography', 'Illustration', 'Print'],
      features: [
        'Eye-catching visuals',
        'Clear message delivery',
        'Strategic placement',
        'Target audience focus',
        'Brand consistency'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Poster Ads 2',
      description: 'Creative poster advertisements designed to capture attention and convey messages effectively.',
      mainImage: Ads2,
      images: [Ads2],
      tech: ['Design', 'Typography', 'Illustration', 'Print'],
      features: [
        'Eye-catching visuals',
        'Clear message delivery',
        'Strategic placement',
        'Target audience focus',
        'Brand consistency'
      ],
      github: '#',
      live: '#'
    }
  ];

  const newspaperProjects = [
    {
      title: 'I was Reincarnated as the 7th Prince',
      description: 'Professional newspaper layouts and designs for various publications.',
      mainImage: Newspaper1,
      images: [Newspaper1],
      tech: ['Layout Design', 'Typography', 'Print', 'Editorial Design'],
      features: [
        'Clean and readable layouts',
        'Hierarchical information design',
        'Print optimization',
        'Editorial consistency',
        'Space management'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'About Me Newspaper',
      description: 'Professional newspaper layouts and designs for various publications.',
      mainImage: Newspaper2,
      images: [Newspaper2],
      tech: ['Layout Design', 'Typography', 'Print', 'Editorial Design'],
      features: [
        'Clean and readable layouts',
        'Hierarchical information design',
        'Print optimization',
        'Editorial consistency',
        'Space management'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Newspaper About Upgrading the Business',
      description: 'Professional newspaper layouts and designs for various publications.',
      mainImage: Newspaper3,
      images: [Newspaper3],
      tech: ['Layout Design', 'Typography', 'Print', 'Editorial Design'],
      features: [
        'Clean and readable layouts',
        'Hierarchical information design',
        'Print optimization',
        'Editorial consistency',
        'Space management'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Oggy And The Cockroaches',
      description: 'Professional newspaper layouts and designs for various publications.',
      mainImage: Newspaper4,
      images: [Newspaper4],
      tech: ['Layout Design', 'Typography', 'Print', 'Editorial Design'],
      features: [
        'Clean and readable layouts',
        'Hierarchical information design',
        'Print optimization',
        'Editorial consistency',
        'Space management'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Santo Tomas Newspaper',
      description: 'Professional newspaper layouts and designs for various publications.',
      mainImage: Newspaper5,
      images: [Newspaper5],
      tech: ['Layout Design', 'Typography', 'Print', 'Editorial Design'],
      features: [
        'Clean and readable layouts',
        'Hierarchical information design',
        'Print optimization',
        'Editorial consistency',
        'Space management'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Solo Leveling',
      description: 'Professional newspaper layouts and designs for various publications.',
      mainImage: Newspaper6,
      images: [Newspaper6],
      tech: ['Layout Design', 'Typography', 'Print', 'Editorial Design'],
      features: [
        'Clean and readable layouts',
        'Hierarchical information design',
        'Print optimization',
        'Editorial consistency',
        'Space management'
      ],
      github: '#',
      live: '#'
    }
  ];

  const webProjects = [
    {
      title: 'We Comply ',
      description: 'Modern and responsive web portfolio showcasing creative work and professional experience.',
      mainImage: WebPortfolio1,
      images: [WebPortfolio1],
      tech: ['React', 'Responsive Design', 'Modern UI/UX', 'Performance'],
      features: [
        'Responsive layout',
        'Modern design elements',
        'Smooth animations',
        'Performance optimization',
        'Cross-browser compatibility'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Personal Portfolio',
      description: 'Modern and responsive web portfolio showcasing creative work and professional experience.',
      mainImage: WebPortfolio2,
      images: [WebPortfolio2],
      tech: ['React', 'Responsive Design', 'Modern UI/UX', 'Performance'],
      features: [
        'Responsive layout',
        'Modern design elements',
        'Smooth animations',
        'Performance optimization',
        'Cross-browser compatibility'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'TriReg',
      description: 'Modern and responsive web portfolio showcasing creative work and professional experience.',
      mainImage: WebPortfolio3,
      images: [WebPortfolio3],
      tech: ['React', 'Responsive Design', 'Modern UI/UX', 'Performance'],
      features: [
        'Responsive layout',
        'Modern design elements',
        'Smooth animations',
        'Performance optimization',
        'Cross-browser compatibility'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Vtrack',
      description: 'Modern and responsive web portfolio showcasing creative work and professional experience.',
      mainImage: WebPortfolio4,
      images: [WebPortfolio4],
      tech: ['React', 'Responsive Design', 'Modern UI/UX', 'Performance'],
      features: [
        'Responsive layout',
        'Modern design elements',
        'Smooth animations',
        'Performance optimization',
        'Cross-browser compatibility'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Personal Portfolio 2',
      description: 'Modern and responsive web portfolio showcasing creative work and professional experience.',
      mainImage: WebPortfolio5,
      images: [WebPortfolio5],
      tech: ['React', 'Responsive Design', 'Modern UI/UX', 'Performance'],
      features: [
        'Responsive layout',
        'Modern design elements',
        'Smooth animations',
        'Performance optimization',
        'Cross-browser compatibility'
      ],
      github: '#',
      live: '#'
    }
  ];

  const shoesProjects = [
    {
      title: 'Shoe Design 1',
      description: 'Creative shoe design showcasing modern aesthetics and innovative concepts.',
      mainImage: Shoes1,
      images: [Shoes1],
      tech: ['Design', '3D Modeling', 'Color Theory', 'Material Design'],
      features: [
        'Modern design elements',
        'Ergonomic considerations',
        'Material selection',
        'Color coordination',
        'Brand alignment'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Shoe Design 2',
      description: 'Creative shoe design showcasing modern aesthetics and innovative concepts.',
      mainImage: Shoes2,
      images: [Shoes2],
      tech: ['Design', '3D Modeling', 'Color Theory', 'Material Design'],
      features: [
        'Modern design elements',
        'Ergonomic considerations',
        'Material selection',
        'Color coordination',
        'Brand alignment'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Shoe Design 3',
      description: 'Creative shoe design showcasing modern aesthetics and innovative concepts.',
      mainImage: Shoes3,
      images: [Shoes3],
      tech: ['Design', '3D Modeling', 'Color Theory', 'Material Design'],
      features: [
        'Modern design elements',
        'Ergonomic considerations',
        'Material selection',
        'Color coordination',
        'Brand alignment'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Shoe Design 4',
      description: 'Creative shoe design showcasing modern aesthetics and innovative concepts.',
      mainImage: Shoes4,
      images: [Shoes4],
      tech: ['Design', '3D Modeling', 'Color Theory', 'Material Design'],
      features: [
        'Modern design elements',
        'Ergonomic considerations',
        'Material selection',
        'Color coordination',
        'Brand alignment'
      ],
      github: '#',
      live: '#'
    }
  ];
  const CarProjects = [
    {
      title: '911 Carrera',
      description: 'Porsche 911 Carrera is a sports car known for its blend of performance, luxury, and a distinctive design.',
      mainImage: CAR1,
      images: [CAR1],
      tech: ['Marketing', 'Social Media', 'Design'],
      features: [
        '3.0L twin-turbocharged flat-6 engine',
        'Rear-wheel drive',
        '8-speed Porsche Doppelkupplung (PDK) transmission',
        'Premium interior finishes',
        'Advanced driver assistance systems'
      ],
      github: '#',
      live: '#'
    },
    {
      title: '911 Targa 4 GTS',
      description: 'The Porsche 911 Targa 4 GTS combines the iconic Targa design with enhanced performance and luxury features.',
      mainImage: CAR2,
      images: [CAR2],
      tech: ['Marketing', 'Social Media', 'Design'],
      features: [
        '3.0L twin-turbocharged flat-6 engine',
        'All-wheel drive system',
        'Unique Targa roof design',
        'Sport-tuned suspension',
        'GTS-specific styling elements'
      ],
      github: '#',
      live: '#'
    },
    {
      title: '911 Turbo',
      description: 'The Porsche 911 Turbo represents the pinnacle of performance, combining raw power with everyday usability.',
      mainImage: CAR3,
      images: [CAR3],
      tech: ['Marketing', 'Social Media', 'Design'],
      features: [
        '3.8L twin-turbocharged flat-6 engine',
        'All-wheel drive system',
        'Active aerodynamics',
        'Porsche Ceramic Composite Brakes',
        'Adaptive aerodynamics'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Ford Mustang Shelby',
      description: 'The Ford Mustang Shelby is a high-performance variant of the iconic Mustang, featuring enhanced power and handling.',
      mainImage: CAR4,
      images: [CAR4],
      tech: ['Marketing', 'Social Media', 'Design'],
      features: [
        'Supercharged V8 engine',
        'Track-focused suspension',
        'Aggressive aerodynamics',
        'Shelby-specific styling',
        'High-performance braking system'
      ],
      github: '#',
      live: '#'
    },
    {
      title: '911 GT3 RS',
      description: 'The Porsche 911 GT3 RS is a track-focused supercar that brings race car technology to the road.',
      mainImage: CAR5,
      images: [CAR5],
      tech: ['Marketing', 'Social Media', 'Design'],
      features: [
        '4.0L naturally aspirated flat-6 engine',
        'Rear-wheel drive',
        'Advanced aerodynamics package',
        'Lightweight construction',
        'Track-focused suspension setup'
      ],
      github: '#',
      live: '#'
    }
  ];

  const nbaProjects = [
    {
      title: 'NBA Poster 1',
      description: 'NBA themed poster design showcasing dynamic composition and vibrant colors.',
      mainImage: Nba1,
      images: [Nba1],
      tech: ['Design', 'Sports', 'Poster', 'Illustration'],
      features: [
        'Dynamic composition',
        'Vibrant color palette',
        'Sports theme',
        'High-resolution print',
        'Fan engagement'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'NBA Poster 2',
      description: 'NBA themed poster design with a focus on player action and energy.',
      mainImage: nba2,
      images: [nba2],
      tech: ['Design', 'Sports', 'Poster', 'Illustration'],
      features: [
        'Action-oriented design',
        'Energetic layout',
        'Player focus',
        'Bold typography',
        'Fan appeal'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'NBA Poster 3',
      description: 'NBA themed poster design with creative use of space and team branding.',
      mainImage: nba3,
      images: [nba3],
      tech: ['Design', 'Sports', 'Poster', 'Illustration'],
      features: [
        'Creative use of space',
        'Team branding',
        'Modern aesthetics',
        'High-impact visuals',
        'Collectible design'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'NBA Poster 4',
      description: 'NBA themed poster design with a unique artistic style and memorable imagery.',
      mainImage: nba4,
      images: [nba4],
      tech: ['Design', 'Sports', 'Poster', 'Illustration'],
      features: [
        'Unique artistic style',
        'Memorable imagery',
        'Basketball culture',
        'Limited edition',
        'Fan favorite'
      ],
      github: '#',
      live: '#'
    },
  ];

  // Group projects for the two sections
  const frontEndProjects = [
    ...mobileProjects,
    ...webProjects
  ];
  const graphicDesignProjects = [
    ...brandProjects,
    ...bookProjects,
    ...adProjects,
    ...newspaperProjects,
    ...shoesProjects,
    ...CarProjects,
    ...nbaProjects
  ];

  const handleExpandImage = (src, alt) => {
    setExpandedImage({ src, alt });
  };

  const handleCollapseImage = () => {
    setExpandedImage({ src: null, alt: null });
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const handleCloseSection = (section) => {
    setVisibleSections((prev) => ({ ...prev, [section]: false }));
  };

  // Parallax/tilt effect for enlarged image
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setTilt({ x, y });
  };
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="projects-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <div className="projects-header">
            <motion.h2 variants={itemVariants} className="text-gray-900 dark:text-white">
              My <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300">
              Explore my creative journey through various projects and designs
            </motion.p>
          </div>

          {/* Category Toggle Buttons */}
          <div className="flex justify-center gap-6 my-12">
            <button
              className={`px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-200 outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 border border-transparent ${selectedCategory === 'frontend' ? 'scale-105 bg-blue-600 text-white shadow-2xl' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-105 hover:shadow-xl'}`}
              onClick={() => setSelectedCategory('frontend')}
              tabIndex={0}
              aria-pressed={selectedCategory === 'frontend'}
            >
              Front-End Developer
            </button>
            <button
              className={`px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-200 outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 border border-transparent ${selectedCategory === 'graphic' ? 'scale-105 bg-blue-600 text-white shadow-2xl' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-105 hover:shadow-xl'}`}
              onClick={() => setSelectedCategory('graphic')}
              tabIndex={0}
              aria-pressed={selectedCategory === 'graphic'}
            >
              Graphic Designer
            </button>
          </div>

          {/* Projects Section (grouped by type) */}
          {selectedCategory === 'frontend' && (
            <motion.div variants={itemVariants} className="projects-section">
              <h3 className="section-title text-2xl font-extrabold mb-8 tracking-tight text-center">Front-End Developer</h3>
              <div className="mb-12">
                <h4 className="text-xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Mobile Projects</h4>
                <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {mobileProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="project-card bg-white dark:bg-slate-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 focus-within:ring-4 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-slate-900 group scale-100 hover:scale-[1.035] focus:scale-[1.035] will-change-transform animate-fadeInUp"
                    >
                      <div
                        className="project-image aspect-video bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden group rounded-t-3xl transition-transform duration-300 group-hover:scale-105 group-focus:scale-105 will-change-transform"
                        style={{ cursor: 'zoom-in' }}
                        onClick={e => { e.stopPropagation(); handleExpandImage(project.mainImage, project.title); }}
                      >
                        <img src={project.mainImage} alt={project.title} className="object-cover w-full h-56 sm:h-64 rounded-2xl" />
                      </div>
                      <div className="project-content p-7 flex-1 flex flex-col gap-2">
                        <h3 className="project-title text-2xl font-black mb-1 text-gray-900 dark:text-white tracking-tight leading-tight">{project.title}</h3>
                        <p className="project-description text-gray-600 dark:text-gray-300 mb-2 flex-1 text-lg leading-relaxed tracking-wide">{project.description}</p>
                        <div className="project-tech flex flex-wrap gap-2 mt-auto">
                          {project.tech.map((tech, idx) => (
                            <span key={idx} className="tech-tag bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-1 rounded-full text-sm font-semibold shadow-sm tracking-wide">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Web Projects</h4>
                <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {webProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="project-card bg-white dark:bg-slate-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 focus-within:ring-4 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-slate-900 group scale-100 hover:scale-[1.035] focus:scale-[1.035] will-change-transform animate-fadeInUp"
                    >
                      <div
                        className="project-image aspect-video bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden group rounded-t-3xl transition-transform duration-300 group-hover:scale-105 group-focus:scale-105 will-change-transform"
                        style={{ cursor: 'zoom-in' }}
                        onClick={e => { e.stopPropagation(); handleExpandImage(project.mainImage, project.title); }}
                      >
                        <img src={project.mainImage} alt={project.title} className="object-cover w-full h-56 sm:h-64 rounded-2xl" />
                      </div>
                      <div className="project-content p-7 flex-1 flex flex-col gap-2">
                        <h3 className="project-title text-2xl font-black mb-1 text-gray-900 dark:text-white tracking-tight leading-tight">{project.title}</h3>
                        <p className="project-description text-gray-600 dark:text-gray-300 mb-2 flex-1 text-lg leading-relaxed tracking-wide">{project.description}</p>
                        <div className="project-tech flex flex-wrap gap-2 mt-auto">
                          {project.tech.map((tech, idx) => (
                            <span key={idx} className="tech-tag bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-1 rounded-full text-sm font-semibold shadow-sm tracking-wide">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          {selectedCategory === 'graphic' && (
            <motion.div variants={itemVariants} className="projects-section">
              <h3 className="section-title text-2xl font-extrabold mb-8 tracking-tight text-center">Graphic Designer</h3>

              {/* Book Cover Projects */}
              {visibleSections.book && (
                <div className="mb-12">
                  <h4 className="text-xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Book Cover Projects</h4>
                  <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bookProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="project-card bg-white dark:bg-slate-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 focus-within:ring-4 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-slate-900 group scale-100 hover:scale-[1.035] focus:scale-[1.035] will-change-transform animate-fadeInUp"
                      >
                        <div
                          className="project-image aspect-video bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden group rounded-t-3xl transition-transform duration-300 group-hover:scale-105 group-focus:scale-105 will-change-transform"
                          style={{ cursor: 'zoom-in' }}
                          onClick={e => { e.stopPropagation(); handleExpandImage(project.mainImage, project.title); }}
                        >
                          <img src={project.mainImage} alt={project.title} className="object-cover w-full h-56 sm:h-64 rounded-2xl" />
                        </div>
                        <div className="project-content p-7 flex-1 flex flex-col gap-2">
                          <h3 className="project-title text-2xl font-black mb-1 text-gray-900 dark:text-white tracking-tight leading-tight">{project.title}</h3>
                          <p className="project-description text-gray-600 dark:text-gray-300 mb-2 flex-1 text-lg leading-relaxed tracking-wide">{project.description}</p>
                          <div className="project-tech flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech, idx) => (
                              <span key={idx} className="tech-tag bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-1 rounded-full text-sm font-semibold shadow-sm tracking-wide">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ad Projects */}
              {visibleSections.ad && (
                <div className="mb-12">
                  <h4 className="text-xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Ad Projects</h4>
                  <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {adProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="project-card bg-white dark:bg-slate-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 focus-within:ring-4 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-slate-900 group scale-100 hover:scale-[1.035] focus:scale-[1.035] will-change-transform animate-fadeInUp"
                      >
                        <div
                          className="project-image aspect-video bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden group rounded-t-3xl transition-transform duration-300 group-hover:scale-105 group-focus:scale-105 will-change-transform"
                          style={{ cursor: 'zoom-in' }}
                          onClick={e => { e.stopPropagation(); handleExpandImage(project.mainImage, project.title); }}
                        >
                          <img src={project.mainImage} alt={project.title} className="object-cover w-full h-56 sm:h-64 rounded-2xl" />
                        </div>
                        <div className="project-content p-7 flex-1 flex flex-col gap-2">
                          <h3 className="project-title text-2xl font-black mb-1 text-gray-900 dark:text-white tracking-tight leading-tight">{project.title}</h3>
                          <p className="project-description text-gray-600 dark:text-gray-300 mb-2 flex-1 text-lg leading-relaxed tracking-wide">{project.description}</p>
                          <div className="project-tech flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech, idx) => (
                              <span key={idx} className="tech-tag bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-1 rounded-full text-sm font-semibold shadow-sm tracking-wide">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Newspaper Projects */}
              {visibleSections.newspaper && (
                <div className="mb-12">
                  <h4 className="text-xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Newspaper Projects</h4>
                  <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newspaperProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="project-card bg-white dark:bg-slate-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 focus-within:ring-4 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-slate-900 group scale-100 hover:scale-[1.035] focus:scale-[1.035] will-change-transform animate-fadeInUp"
                      >
                        <div
                          className="project-image aspect-video bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden group rounded-t-3xl transition-transform duration-300 group-hover:scale-105 group-focus:scale-105 will-change-transform"
                          style={{ cursor: 'zoom-in' }}
                          onClick={e => { e.stopPropagation(); handleExpandImage(project.mainImage, project.title); }}
                        >
                          <img src={project.mainImage} alt={project.title} className="object-cover w-full h-56 sm:h-64 rounded-2xl" />
                        </div>
                        <div className="project-content p-7 flex-1 flex flex-col gap-2">
                          <h3 className="project-title text-2xl font-black mb-1 text-gray-900 dark:text-white tracking-tight leading-tight">{project.title}</h3>
                          <p className="project-description text-gray-600 dark:text-gray-300 mb-2 flex-1 text-lg leading-relaxed tracking-wide">{project.description}</p>
                          <div className="project-tech flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech, idx) => (
                              <span key={idx} className="tech-tag bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-1 rounded-full text-sm font-semibold shadow-sm tracking-wide">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Shoe Design Projects */}
              {visibleSections.shoes && (
                <div className="mb-12">
                  <h4 className="text-xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Shoe Design Projects</h4>
                  <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {shoesProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="project-card bg-white dark:bg-slate-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 focus-within:ring-4 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-slate-900 group scale-100 hover:scale-[1.035] focus:scale-[1.035] will-change-transform animate-fadeInUp"
                      >
                        <div
                          className="project-image aspect-video bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden group rounded-t-3xl transition-transform duration-300 group-hover:scale-105 group-focus:scale-105 will-change-transform"
                          style={{ cursor: 'zoom-in' }}
                          onClick={e => { e.stopPropagation(); handleExpandImage(project.mainImage, project.title); }}
                        >
                          <img src={project.mainImage} alt={project.title} className="object-cover w-full h-56 sm:h-64 rounded-2xl" />
                        </div>
                        <div className="project-content p-7 flex-1 flex flex-col gap-2">
                          <h3 className="project-title text-2xl font-black mb-1 text-gray-900 dark:text-white tracking-tight leading-tight">{project.title}</h3>
                          <p className="project-description text-gray-600 dark:text-gray-300 mb-2 flex-1 text-lg leading-relaxed tracking-wide">{project.description}</p>
                          <div className="project-tech flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech, idx) => (
                              <span key={idx} className="tech-tag bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-1 rounded-full text-sm font-semibold shadow-sm tracking-wide">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Car Design Projects */}
              {visibleSections.car && (
                <div className="mb-12">
                  <h4 className="text-xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Car Design Projects</h4>
                  <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CarProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="project-card bg-white dark:bg-slate-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 focus-within:ring-4 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-slate-900 group scale-100 hover:scale-[1.035] focus:scale-[1.035] will-change-transform animate-fadeInUp"
                      >
                        <div
                          className="project-image aspect-video bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden group rounded-t-3xl transition-transform duration-300 group-hover:scale-105 group-focus:scale-105 will-change-transform"
                          style={{ cursor: 'zoom-in' }}
                          onClick={e => { e.stopPropagation(); handleExpandImage(project.mainImage, project.title); }}
                        >
                          <img src={project.mainImage} alt={project.title} className="object-cover w-full h-56 sm:h-64 rounded-2xl" />
                        </div>
                        <div className="project-content p-7 flex-1 flex flex-col gap-2">
                          <h3 className="project-title text-2xl font-black mb-1 text-gray-900 dark:text-white tracking-tight leading-tight">{project.title}</h3>
                          <p className="project-description text-gray-600 dark:text-gray-300 mb-2 flex-1 text-lg leading-relaxed tracking-wide">{project.description}</p>
                          <div className="project-tech flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech, idx) => (
                              <span key={idx} className="tech-tag bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-1 rounded-full text-sm font-semibold shadow-sm tracking-wide">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* NBA Projects */}
              {visibleSections.nba && (
                <div className="mb-12">
                  <h4 className="text-xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">NBA Poster Projects</h4>
                  <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nbaProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="project-card bg-white dark:bg-slate-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 focus-within:ring-4 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-slate-900 group scale-100 hover:scale-[1.035] focus:scale-[1.035] will-change-transform animate-fadeInUp"
                      >
                        <div
                          className="project-image aspect-video bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden group rounded-t-3xl transition-transform duration-300 group-hover:scale-105 group-focus:scale-105 will-change-transform"
                          style={{ cursor: 'zoom-in' }}
                          onClick={e => { e.stopPropagation(); handleExpandImage(project.mainImage, project.title); }}
                        >
                          <img src={project.mainImage} alt={project.title} className="object-cover w-full h-56 sm:h-64 rounded-2xl" />
                        </div>
                        <div className="project-content p-7 flex-1 flex flex-col gap-2">
                          <h3 className="project-title text-2xl font-black mb-1 text-gray-900 dark:text-white tracking-tight leading-tight">{project.title}</h3>
                          <p className="project-description text-gray-600 dark:text-gray-300 mb-2 flex-1 text-lg leading-relaxed tracking-wide">{project.description}</p>
                          <div className="project-tech flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech, idx) => (
                              <span key={idx} className="tech-tag bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-1 rounded-full text-sm font-semibold shadow-sm tracking-wide">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Brand Awareness Projects (moved below) */}
              {visibleSections.brand && (
                <div className="mb-12">
                  <h4 className="text-xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Brand Awareness Projects</h4>
                  <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {brandProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="project-card bg-white dark:bg-slate-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 focus-within:ring-4 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-slate-900 group scale-100 hover:scale-[1.035] focus:scale-[1.035] will-change-transform animate-fadeInUp"
                      >
                        <div
                          className="project-image aspect-video bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden group rounded-t-3xl transition-transform duration-300 group-hover:scale-105 group-focus:scale-105 will-change-transform"
                          style={{ cursor: 'zoom-in' }}
                          onClick={e => { e.stopPropagation(); handleExpandImage(project.mainImage, project.title); }}
                        >
                          <img src={project.mainImage} alt={project.title} className="object-cover w-full h-56 sm:h-64 rounded-2xl" />
                        </div>
                        <div className="project-content p-7 flex-1 flex flex-col gap-2">
                          <h3 className="project-title text-2xl font-black mb-1 text-gray-900 dark:text-white tracking-tight leading-tight">{project.title}</h3>
                          <p className="project-description text-gray-600 dark:text-gray-300 mb-2 flex-1 text-lg leading-relaxed tracking-wide">{project.description}</p>
                          <div className="project-tech flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech, idx) => (
                              <span key={idx} className="tech-tag bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-1 rounded-full text-sm font-semibold shadow-sm tracking-wide">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {expandedImage.src && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ opacity: { duration: 0.25 }, backdropFilter: { duration: 0.4 } }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(0,0,0,0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              overflow: 'hidden',
            }}
            onClick={handleCollapseImage}
          >
            <motion.img
              src={expandedImage.src}
              alt={expandedImage.alt}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                boxShadow: '0 12px 48px 0 rgba(0,0,0,0.45)',
                border: '3px solid rgba(255,255,255,0.18)',
              }}
              exit={{ scale: 0.7, opacity: 0, boxShadow: '0 0 0 0 rgba(0,0,0,0)', border: '3px solid rgba(255,255,255,0)' }}
              transition={{ type: 'spring', stiffness: 220, damping: 22, opacity: { duration: 0.2 } }}
              style={{
                maxHeight: '90vh',
                maxWidth: '90vw',
                objectFit: 'contain',
                cursor: 'zoom-out',
                margin: 'auto',
                display: 'block',
                background: 'transparent',
                borderRadius: '1.25rem',
                boxShadow: '0 12px 48px 0 rgba(0,0,0,0.45)',
                border: '3px solid rgba(255,255,255,0.18)',
                transform: `rotateY(${tilt.x * 8}deg) rotateX(${-tilt.y * 8}deg)`
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={e => { e.stopPropagation(); handleExpandImage(expandedImage.src, expandedImage.alt); }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
