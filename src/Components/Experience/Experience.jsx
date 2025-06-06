import { useState, useEffect } from "react";
import "./Experience.css";
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
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, X, ChevronLeft, ChevronRight, Smartphone, Code, Star, Book, Palette, Briefcase, Newspaper, Footprints } from 'lucide-react';

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('mobile');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [relatedProjects, setRelatedProjects] = useState([]);

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
      title: 'Book Cover Design 1',
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
      title: 'Book Cover Design 2',
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
      title: 'Book Cover Design 3',
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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleImageClick = (e, image) => {
    e.stopPropagation();
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage(null);
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

  const getProjectsByCategory = () => {
    switch (activeCategory) {
      case 'mobile':
        return mobileProjects;
      case 'brand':
        return brandProjects;
      case 'book':
        return bookProjects;
      case 'ads':
        return adProjects;
      case 'newspaper':
        return newspaperProjects;
      case 'web':
        return webProjects;
      case 'shoes':
        return shoesProjects;
      default:
        return mobileProjects;
    }
  };

  useEffect(() => {
    if (selectedProject) {
      // Get projects from the same category
      const currentCategoryProjects = getProjectsByCategory();
      // Filter out the current project and get 3 random projects
      const filteredProjects = currentCategoryProjects
        .filter(project => project.title !== selectedProject.title)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      setRelatedProjects(filteredProjects);
    }
  }, [selectedProject, activeCategory]);

  return (
    <section className="projects-section bg-white dark:bg-dark-100">
      <div className="projects-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="projects-header">
            <motion.h2 variants={itemVariants} className="text-gray-900 dark:text-white">
              My <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300">
              Explore my creative journey through various projects and designs
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="category-tabs">
            <button
              onClick={() => setActiveCategory('mobile')}
              className={`category-tab ${activeCategory === 'mobile' ? 'active' : ''} text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400`}
            >
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="ml-1">Mobile</span>
            </button>
            <button
              onClick={() => setActiveCategory('brand')}
              className={`category-tab ${activeCategory === 'brand' ? 'active' : ''} text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400`}
            >
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="ml-1">Brand</span>
            </button>
            <button
              onClick={() => setActiveCategory('book')}
              className={`category-tab ${activeCategory === 'book' ? 'active' : ''} text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400`}
            >
              <Book className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="ml-1">Books</span>
            </button>
            <button
              onClick={() => setActiveCategory('ads')}
              className={`category-tab ${activeCategory === 'ads' ? 'active' : ''} text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400`}
            >
              <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="ml-1">Ads</span>
            </button>
            <button
              onClick={() => setActiveCategory('newspaper')}
              className={`category-tab ${activeCategory === 'newspaper' ? 'active' : ''} text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400`}
            >
              <Newspaper className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="ml-1">News</span>
            </button>
            <button
              onClick={() => setActiveCategory('web')}
              className={`category-tab ${activeCategory === 'web' ? 'active' : ''} text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400`}
            >
              <Code className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="ml-1">Web</span>
            </button>
            <button
              onClick={() => setActiveCategory('shoes')}
              className={`category-tab ${activeCategory === 'shoes' ? 'active' : ''} text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400`}
            >
              <Footprints className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="ml-1">Shoes</span>
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="projects-grid">
            {getProjectsByCategory().map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="project-card"
                onClick={() => handleProjectClick(project)}
              >
                <div className="project-image" onClick={(e) => handleImageClick(e, project.mainImage)}>
                  <img src={project.mainImage} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3 className="project-title text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="project-description text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="project-modal"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="project-modal-content"
            >
              <button
                className="project-modal-close"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="project-modal-image">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="max-h-[80vh] w-auto object-contain"
                  onClick={(e) => handleImageClick(e, selectedProject.images[currentImageIndex])}
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <div className="carousel-instructions">
                      <ChevronLeft className="w-4 h-4" />
                      <span>Swipe or use arrows to navigate</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <button
                      className="project-modal-nav prev"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      className="project-modal-nav next"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="carousel-dots">
                      {selectedProject.images.map((_, index) => (
                        <div
                          key={index}
                          className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="project-modal-info">
                <h3 className="project-modal-title">{selectedProject.title}</h3>
                <p className="project-modal-description">
                  {selectedProject.description}
                </p>
                <div className="project-modal-tech">
                  {selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-modal-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>
                        <Star className="w-5 h-5 text-primary-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Related Projects Section */}
            {relatedProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="related-projects"
              >
                <div className="related-projects-header">
                  <h3>More Projects Like This</h3>
                  <p>Swipe to explore more projects</p>
                </div>
                <div className="related-projects-carousel">
                  <div className="related-projects-track">
                    {relatedProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        className="related-project-card"
                        onClick={() => handleProjectClick(project)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="related-project-image">
                          <img src={project.mainImage} alt={project.title} />
                        </div>
                        <div className="related-project-content">
                          <h4>{project.title}</h4>
                          <p>{project.description}</p>
                          <div className="related-project-tech">
                            {project.tech.slice(0, 2).map((tech, idx) => (
                              <span key={idx} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="related-projects-nav">
                    <button className="nav-prev" onClick={() => {
                      const track = document.querySelector('.related-projects-track');
                      track.scrollBy({ left: -300, behavior: 'smooth' });
                    }}>
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="nav-next" onClick={() => {
                      const track = document.querySelector('.related-projects-track');
                      track.scrollBy({ left: 300, behavior: 'smooth' });
                    }}>
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isImageModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal active"
            onClick={handleCloseImageModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close"
                onClick={handleCloseImageModal}
              >
                <X className="w-6 h-6" />
              </button>
              <img src={selectedImage} alt="Full size" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
