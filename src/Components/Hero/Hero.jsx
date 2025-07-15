import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Github, Facebook, Instagram, Linkedin, FileText, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Hero = () => {
  const navigate = useNavigate();
  const { theme, isDark } = useTheme();
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

  // Theme-specific styles
  const getBackgroundClasses = () => {
    if (isDark) {
      return "bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]";
    }
    // Enhanced mesh/radial blue-to-white background
    return "bg-white";
  };

  const getGradientOverlays = () => {
    if (isDark) {
      return {
        primary: "from-blue-500/40 via-transparent to-transparent",
        secondary: "from-blue-800/35 via-transparent to-transparent",
        tertiary: "from-blue-400/30 via-transparent to-transparent"
      };
    }
    return {
      primary: "from-blue-300/30 via-transparent to-transparent",
      secondary: "from-blue-200/20 via-transparent to-transparent",
      tertiary: "from-white/40 via-transparent to-transparent"
    };
  };

  const getGeometricColors = () => {
    if (isDark) {
      return {
        blue: "border-blue-400/50",
        purple: "border-blue-800/50",
        cyan: "border-blue-300/50"
      };
    }
    return {
      blue: "border-blue-300/40",
      purple: "border-blue-200/40",
      cyan: "border-white/40"
    };
  };

  const getParticleColors = () => {
    if (isDark) {
      return "bg-blue-400/60";
    }
    return "bg-blue-200/70";
  };

  const getMeshGradient = () => {
    if (isDark) {
      return "bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(59,130,246,0.2)_0deg,_rgba(30,64,175,0.2)_120deg,_rgba(147,197,253,0.2)_240deg,_rgba(59,130,246,0.2)_360deg)]";
    }
    return "bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(186,230,253,0.18)_0deg,_rgba(59,130,246,0.13)_120deg,_rgba(255,255,255,0.18)_240deg,_rgba(186,230,253,0.18)_360deg)]";
  };

  const getBlobColor = () => {
    if (isDark) {
      return "#3b82f6"; // Blue for dark mode
    }
    return "#2563eb"; // Blue for light mode
  };

  const gradients = getGradientOverlays();
  const geometricColors = getGeometricColors();
  const particleColor = getParticleColors();
  const meshGradient = getMeshGradient();

  return (
    <div className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${getBackgroundClasses()} transition-all duration-500`}>
      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Only show overlays, lines, and particles in dark mode */}
        {isDark && (
          <>
            {/* Primary gradient overlays */}
            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] ${gradients.primary} animate-pulse`} />
            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] ${gradients.secondary} animate-pulse delay-500`} />
            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,_var(--tw-gradient-stops))] ${gradients.tertiary} animate-pulse delay-1000`} />
            {/* Background Lines Pattern */}
            <div className="absolute inset-0 opacity-30">
              {/* Horizontal lines */}
              <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent transform -translate-y-1/2" />
              <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-800/50 to-transparent transform -translate-y-1/2" />
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent transform -translate-y-1/2" />
              {/* Vertical lines */}
              <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent transform -translate-x-1/2" />
              <div className="absolute top-0 left-3/4 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-800/50 to-transparent transform -translate-x-1/2" />
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-300/50 to-transparent transform -translate-x-1/2" />
              {/* Diagonal lines */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 via-transparent to-transparent" />
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-800/20 via-transparent to-transparent" />
            </div>
            {/* Additional floating elements */}
            <div className="absolute inset-0">
              {/* Glowing orbs */}
              <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-400/40 rounded-full blur-sm animate-pulse" />
              <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-blue-800/40 rounded-full blur-sm animate-pulse delay-1000" />
              <div className="absolute bottom-1/3 left-2/3 w-5 h-5 bg-blue-300/50 rounded-full blur-sm animate-pulse delay-500" />
            </div>
            {/* Geometric pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className={`absolute top-1/4 left-1/4 w-32 h-32 border ${geometricColors.blue} rounded-full animate-spin-slow`} />
              <div className={`absolute top-3/4 right-1/4 w-24 h-24 border ${geometricColors.purple} rounded-full animate-spin-slow-reverse`} />
              <div className={`absolute bottom-1/4 left-1/3 w-20 h-20 border ${geometricColors.cyan} rounded-full animate-bounce-slow`} />
            </div>
            {/* Floating particles */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 ${particleColor} rounded-full animate-float`}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + i}s`
                  }}
                />
              ))}
            </div>
            {/* Mesh gradient overlay */}
            <div className={`absolute inset-0 ${meshGradient} opacity-60`} />
          </>
        )}
        {/* In light mode, only mesh and orbs, no lines or overlays */}
        {!isDark && (
          <>
            {/* Mesh/radial blue-white background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_#e0f2fe_0%,_#60a5fa_40%,_#2563eb_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,_#dbeafe_0%,_#3b82f6_60%,_transparent_100%)] opacity-80" />
            <div className="absolute inset-0 bg-blue-100/50" />
            {/* Top and bottom white gradient overlays for glassy effect */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/95 to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/95 to-transparent pointer-events-none z-10" />
            {/* Large, blurred, layered blue/white orbs */}
            <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-200/70 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-blue-400/60 rounded-full blur-[100px] animate-pulse delay-1000" />
            <div className="absolute top-2/3 left-2/3 w-48 h-48 bg-white/70 rounded-full blur-[90px] animate-pulse delay-500" />
            <div className="absolute top-1/2 left-1/5 w-40 h-40 bg-blue-300/60 rounded-full blur-[80px] animate-pulse delay-700" />
            <div className="absolute top-1/3 left-2/5 w-56 h-56 bg-white/50 rounded-full blur-[100px] animate-pulse delay-800" />
            {/* Animated sparkles */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute w-2 h-2 rounded-full bg-white/80 blur-[2px] animate-pulse" style={{
                left: `${10 + i * 10}%`,
                top: `${20 + (i % 2) * 60}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${3 + i * 0.5}s`
              }} />
            ))}
          </>
        )}
      </div>

      {/* 3D Background with Blob Only */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas dpr={[1, 2]} performance={{ min: 0.5 }}>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
          <ambientLight intensity={isDark ? 0.6 : 0.8} />
          <directionalLight position={[-2, 5, 2]} intensity={isDark ? 1.2 : 1.5} />
          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color={getBlobColor()}
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
            <span className={`text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${isDark ? 'bg-white/15' : 'bg-blue-100/60'} backdrop-blur-sm border ${isDark ? 'border-white/30' : 'border-blue-200/60'} ${isDark ? 'text-white' : 'text-blue-900'} shadow-lg hover:${isDark ? 'bg-white/25' : 'bg-blue-200/80'} transition-all duration-300`}>
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 sm:mb-4 tracking-tight text-center drop-shadow-2xl font-sans ${isDark ? '!text-white bg-clip-text bg-gradient-to-br from-blue-200 via-blue-400 to-blue-700' : '!text-white bg-none'} `}
            style={isDark ? {} : { color: '#fff', WebkitTextStroke: '0', textShadow: 'none', position: 'relative', zIndex: 1 }}
          >
            {"Hi, I'm Ralph".split("").map((char, idx) => (
              <span
                key={idx}
                className={char !== ' ' ? `hover:text-blue-500 transition-colors duration-200 cursor-pointer` : undefined}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
            {isDark && (
              <span className="block h-0.5 w-16 mx-auto mt-3 bg-blue-400 rounded-full opacity-80"></span>
            )}
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className={`text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-center tracking-widest uppercase opacity-90 font-sans ${isDark ? '!text-blue-200' : '!text-white'}`}
            style={isDark ? {} : { color: '#fff', textShadow: 'none' }}
          >
            Design-driven. Code-focused.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-xl sm:text-2xl md:text-3xl font-bold italic mb-8 max-w-2xl mx-auto text-center leading-snug tracking-tight px-4 py-3 rounded-lg shadow-md border font-sans bg-gradient-to-r from-blue-500 via-blue-400 to-blue-700 bg-clip-text text-transparent ${isDark ? 'bg-white/10 border-white/20' : 'bg-blue-50/80 border-blue-100/60'}`}
            style={{}}
          >
            "Turning ideas into digital realities."
          </motion.p>

          {/* Connect with Me Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, type: 'spring' }}
            className="flex justify-center mb-8 w-full"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ralphmatthewpunzalan23@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 font-semibold text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-[200px] rounded-lg shadow bg-gradient-to-r from-blue-500/80 to-blue-700/80 hover:from-blue-400 hover:to-blue-600 hover:scale-105 hover:shadow-blue-400/40 active:scale-95 border border-blue-400/30 text-sm sm:text-base"
            >
              <span className="relative flex items-center justify-center gap-2 w-full">
                Connect with Me
                <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
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
                className={`group relative p-2.5 sm:p-3 md:p-4 rounded-full ${isDark ? 'bg-white/15' : 'bg-blue-100/60'} backdrop-blur-sm border ${isDark ? 'border-white/30' : 'border-blue-200/60'} hover:${isDark ? 'bg-white/25' : 'bg-blue-200/80'} transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/30`}
                aria-label={social.label}
              >
                <social.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${isDark ? 'text-white' : 'text-blue-700'} group-hover:text-blue-500 transition-colors`} />
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
        <div className={`w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 ${isDark ? 'border-white/30' : 'border-blue-200/60'} rounded-full p-1 backdrop-blur-sm ${isDark ? 'bg-white/10' : 'bg-blue-50/80'}`}>
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gradient-to-b from-blue-300 to-blue-600 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
