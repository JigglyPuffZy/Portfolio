import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars, Float } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Github, Facebook, Instagram, Linkedin, FileText, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [resumeAvailable, setResumeAvailable] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Check if resume is available
  useEffect(() => {
    fetch('/Resume New.pdf')
      .then(response => {
        if (response.ok) {
          setResumeAvailable(true);
        }
      })
      .catch(() => {
        setResumeAvailable(false);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const handleResumeClick = (e) => {
    if (!resumeAvailable) {
      e.preventDefault();
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ralphmatthewpunzalan23@gmail.com', '_blank');
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent animate-pulse delay-300" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent animate-pulse delay-700" />
      </div>

      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 2]} performance={{ min: 0.5 }}>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color="#3b82f6"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={0.8}
              />
            </Sphere>
          </Float>
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ y }}
        className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-20"
      >
        <div className="flex flex-col items-center justify-center w-full">
          <motion.div
            variants={itemVariants}
            className="inline-block mb-3 sm:mb-6"
          >
            <span className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg hover:bg-white/20 transition-all duration-300">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-8 tracking-tight text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-gradient">
              Hi, I'm Ralph
            </span>
            <br />
            <span className="text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-wide">
              Creative Technologist
              <span className="block mt-1 text-blue-400/90">Digital Artist</span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-10 md:mb-14 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto leading-relaxed text-center"
          >
            I create beautiful and functional web applications with modern technologies.
            Let's build something amazing together.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-16 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ralphmatthewpunzalan23@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 font-bold text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white/20 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-600"></span>
              <span className="relative flex items-center gap-2 text-sm sm:text-base">
                Connect with Me
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <button
              onClick={() => navigate('/experience')}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 font-bold text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-white/10 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white/5 border-2 border-white/20 group-hover:bg-white/10"></span>
              <span className="relative flex items-center gap-2 text-sm sm:text-base">
                View Projects
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]"
          >
            {[
              { icon: Github, href: "https://github.com/JigglyPuffZy", label: "GitHub" },
              { icon: Facebook, href: "https://facebook.com/JigglypuffZy", label: "Facebook" },
              { icon: Instagram, href: "https://www.instagram.com/jigglypufzzz", label: "Instagram" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-2.5 sm:p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-blue-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-white/20 rounded-full p-1 backdrop-blur-sm bg-white/5">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
