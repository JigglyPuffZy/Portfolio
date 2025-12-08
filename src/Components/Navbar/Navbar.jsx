import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const navStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
const navItemAnim = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    setScrolled(window.scrollY > 10);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/') setActiveSection('home');
    else if (location.pathname === '/about') setActiveSection('about');
    else if (location.pathname === '/service') setActiveSection('service');
    else if (location.pathname === '/projects') setActiveSection('projects');
    else if (location.pathname === '/experience') setActiveSection('work-experience');
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', path: '/', onClick: scrollToTop, id: 'home' },
    { name: 'About', path: '/about', id: 'about' },
    { name: 'My Services', path: '/service', id: 'service' },
    { name: 'My Projects', path: '/projects', id: 'projects' },
    { name: 'Experience', path: '/experience', id: 'work-experience' },
  ];

  // Removed contact and resume handlers as they're now in the Hero section

  return (
    <>
      {/* Skip to content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 z-[100] bg-white dark:bg-neutral-900 text-blue-600 dark:text-blue-400 px-4 py-2 rounded shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition">Skip to content</a>
      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/30 dark:bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      <nav
        className="fixed w-full z-50 top-4 transition-all duration-500"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 transition-all duration-500">
          <div 
            className="flex items-center justify-between h-16 rounded-2xl px-6 backdrop-blur-2xl bg-white/70 dark:bg-gray-900/70 border border-white/20 dark:border-gray-700/30 shadow-[0_8px_32px_0_rgba(59,130,246,0.15)] transition-all duration-500"
            style={{
              background: isDark
                ? 'linear-gradient(135deg, rgba(17,24,39,0.85) 0%, rgba(31,41,55,0.75) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(249,250,251,0.75) 100%)',
              WebkitBackdropFilter: 'blur(20px)',
              backdropFilter: 'blur(20px)',
            }}
          >
          {/* Enhanced Logo */}
          <Link
            to="/"
            className="relative font-black text-2xl md:text-3xl tracking-tight select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg transition-all duration-300"
            onClick={scrollToTop}
            aria-label="Go to home"
          >
            <motion.span 
              className="inline-block relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              style={{
                textShadow: isDark
                  ? '0 0 30px rgba(59,130,246,0.3)'
                  : '0 0 30px rgba(37,99,235,0.2)',
              }}
            >
              R4lph
              {/* Glow effect on hover */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ zIndex: -1 }}
              />
              {/* Animated underline */}
              <motion.span
                className="absolute left-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                initial={{ width: '0%', left: '50%' }}
                whileHover={{ width: '100%', left: '0%' }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.span>
          </Link>
          {/* Enhanced Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`relative text-sm font-bold tracking-wide px-4 py-2.5 rounded-xl transition-all duration-300 block ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-[0_4px_20px_rgba(59,130,246,0.4)]'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50/80 dark:hover:bg-blue-900/20'
                  }`}
                  onClick={item.onClick}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {item.name}
                    {activeSection === item.id && (
                      <motion.span
                        layoutId="active-pill"
                        className="w-1.5 h-1.5 rounded-full bg-white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </span>
                  {/* Hover glow effect */}
                  {activeSection !== item.id && (
                    <motion.span
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 to-blue-600/0 opacity-0"
                      whileHover={{ 
                        opacity: 0.1,
                        background: 'linear-gradient(to right, rgba(59,130,246,0.1), rgba(37,99,235,0.1))'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            <motion.button
              onClick={toggleTheme}
              className="ml-3 p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/40 dark:hover:to-blue-700/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 shadow-lg backdrop-blur-xl border border-blue-200/50 dark:border-blue-700/30"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                key={isDark ? 'sun' : 'moon'}
                initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                className="block"
              >
                {isDark ? <Sun className="w-5 h-5 text-blue-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
              </motion.span>
            </motion.button>
          </div>
          {/* Enhanced Mobile Nav Button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 shadow-lg backdrop-blur-xl border border-blue-200/50 dark:border-blue-700/30"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                key={isDark ? 'sun-mobile' : 'moon-mobile'}
                initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                className="block"
              >
                {isDark ? <Sun className="w-5 h-5 text-blue-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
              </motion.span>
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 shadow-lg backdrop-blur-xl border border-blue-200/50 dark:border-blue-700/30"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                key={isOpen ? 'close' : 'menu'}
                initial={{ rotate: isOpen ? 0 : -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: isOpen ? 90 : -90, opacity: 0 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="block"
              >
                {isOpen ? <X className="w-6 h-6 text-blue-600 dark:text-blue-400" /> : <Menu className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
              </motion.span>
            </motion.button>
          </div>
        </div>
        </div>
        {/* Enhanced Mobile Nav Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="md:hidden fixed inset-x-4 top-24 z-40 rounded-3xl backdrop-blur-2xl bg-white/90 dark:bg-gray-900/90 shadow-[0_20px_60px_rgba(59,130,246,0.3)] border border-blue-200/50 dark:border-blue-700/30 overflow-hidden"
              aria-modal="true"
              role="dialog"
            >
              <motion.div
                className="flex flex-col items-stretch py-6 px-4 space-y-2"
                variants={navStagger}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {navItems.map((item, index) => (
                  <motion.div 
                    key={item.name} 
                    variants={navItemAnim}
                    custom={index}
                  >
                    <Link
                      to={item.path}
                      className={`relative text-base font-bold px-6 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                        activeSection === item.id
                          ? 'text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-[0_4px_20px_rgba(59,130,246,0.4)]'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50/80 dark:hover:bg-blue-900/20'
                      }`}
                      onClick={() => setIsOpen(false)}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {activeSection === item.id && (
                        <motion.span
                          layoutId="active-pill-mobile"
                          className="w-2 h-2 rounded-full bg-white"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                      {activeSection !== item.id && (
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
