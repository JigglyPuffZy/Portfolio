import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Github, Facebook, Instagram, Linkedin, FileText } from 'lucide-react';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#ebf5ff] via-[#dbeafe] to-[#bfdbfe] dark:from-dark-100 dark:via-dark-150 dark:to-dark-200">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3b82f6]/30 via-transparent to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-[#3b82f6]/30 via-transparent to-transparent animate-pulse delay-300" />
      </div>

      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
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
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
      >
        <div className="text-center">
          <motion.div
            variants={itemVariants}
            className="inline-block mb-4 sm:mb-6"
          >
            <span className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 dark:border-gray-700 text-white">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] dark:from-[#3b82f6] dark:via-[#2563eb] dark:to-[#1d4ed8]">
              Hi, I'm Ralph
            </span>
            <br />
            <span className="text-white">
              Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            I create beautiful and functional web applications with modern technologies.
            Let's build something amazing together.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-bold text-white transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] border-2 border-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#3b82f6] group-hover:to-[#2563eb]"></span>
              <span className="relative flex items-center gap-2">
                Get in Touch
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-bold text-gray-900 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-gray-900 group-hover:bg-gray-50"></span>
              <span className="relative">View Projects</span>
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap"
          >
            {[
              { icon: Github, href: "https://github.com/JigglyPuffZy", label: "GitHub" },
              { icon: Facebook, href: "https://facebook.com/JigglypuffZy", label: "Facebook" },
              { icon: Instagram, href: "https://www.instagram.com/jigglypufzzz", label: "Instagram" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: FileText, href: "/Resume New.pdf", label: "Resume" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </a>
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
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1 backdrop-blur-sm bg-white/10">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1.5 h-1.5 bg-gradient-to-b from-[#3b82f6] to-[#2563eb] rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
