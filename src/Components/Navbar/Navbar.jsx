import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
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
    else if (location.pathname === '/projects') setActiveSection('projects');
    else if (location.pathname === '/experience') setActiveSection('work-experience');
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', path: '/', onClick: scrollToTop, id: 'home' },
    { name: 'About', path: '/about', id: 'about' },
    { name: 'My Projects', path: '/projects', id: 'projects' },
    { name: 'Work Experience', path: '/experience', id: 'work-experience' },
  ];

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
        className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md shadow-2xl border-b border-white/20 dark:border-neutral-800/40' : 'backdrop-blur-none shadow-none border-none'
        }`}
        style={{
          background: isDark
            ? 'linear-gradient(120deg, rgba(23,23,23,0.82) 80%, rgba(0,0,0,0.7) 100%)'
            : 'linear-gradient(120deg, rgba(255,255,255,0.82) 80%, rgba(255,255,255,0.7) 100%)',
          WebkitBackdropFilter: 'blur(16px)',
          backdropFilter: 'blur(16px)',
          boxShadow: scrolled
            ? (isDark
                ? '0 8px 32px 0 rgba(0,0,0,0.25) inset, 0 2px 16px 0 rgba(0,0,0,0.10)'
                : '0 8px 32px 0 rgba(31,38,135,0.10) inset, 0 2px 16px 0 rgba(31,38,135,0.05)')
            : 'none',
        }}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="relative font-extrabold text-2xl md:text-3xl tracking-widest text-blue-600 dark:text-blue-400 select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition-shadow duration-300"
            onClick={scrollToTop}
            aria-label="Go to home"
            style={{
              textShadow: isDark
                ? '0 2px 8px rgba(96,165,250,0.15)'
                : '0 2px 8px rgba(37,99,235,0.10)',
            }}
          >
            <span className="inline-block relative">
              R4lph
              {/* Animated underline grows on hover */}
              <motion.span
                layoutId="logo-underline"
                className="absolute left-0 -bottom-1 h-1 rounded bg-blue-600 dark:bg-blue-400 opacity-30 group-hover:opacity-60"
                initial={{ width: '40%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
                style={{ width: '40%' }}
              />
            </span>
          </Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.08, y: -2 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`relative text-base font-semibold tracking-wide px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onClick={item.onClick}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Animated underline center-out */}
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-1/2 -bottom-1 h-0.5 rounded w-0 bg-blue-600 dark:bg-blue-400"
                    animate={activeSection === item.id ? { width: '80%', left: '10%', opacity: 0.7 } : { width: 0, left: '50%', opacity: 0 }}
                    transition={{ duration: 0.35, type: 'spring', stiffness: 260, damping: 20 }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 shadow-sm"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1, boxShadow: '0 0 0 4px rgba(96,165,250,0.10)' }}
              whileTap={{ scale: 0.95 }}
              style={{ boxShadow: isDark ? '0 2px 8px rgba(96,165,250,0.10)' : '0 2px 8px rgba(37,99,235,0.08)' }}
            >
              <motion.span
                key={isDark ? 'sun' : 'moon'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="block"
              >
                {isDark ? <Sun className="w-5 h-5 text-blue-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
              </motion.span>
            </motion.button>
          </div>
          {/* Mobile Nav Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleTheme}
              className="mr-2 p-2 rounded-full bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 shadow-sm"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1, boxShadow: '0 0 0 4px rgba(96,165,250,0.10)' }}
              whileTap={{ scale: 0.95 }}
              style={{ boxShadow: isDark ? '0 2px 8px rgba(96,165,250,0.10)' : '0 2px 8px rgba(37,99,235,0.08)' }}
            >
              <motion.span
                key={isDark ? 'sun-mobile' : 'moon-mobile'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="block"
              >
                {isDark ? <Sun className="w-5 h-5 text-blue-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
              </motion.span>
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                key={isOpen ? 'close' : 'menu'}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                {isOpen ? <X className="w-7 h-7 text-blue-600 dark:text-blue-400" /> : <Menu className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              </motion.span>
            </motion.button>
          </div>
        </div>
        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -32 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              className="md:hidden fixed inset-x-4 top-20 z-40 rounded-2xl bg-white/95 dark:bg-dark-100/95 backdrop-blur-lg shadow-2xl border border-blue-100/20 dark:border-blue-900/20 mx-2"
              style={{
                boxShadow: isDark
                  ? '0 8px 32px 0 rgba(0,0,0,0.25)'
                  : '0 8px 32px 0 rgba(31,38,135,0.10)',
              }}
              aria-modal="true"
              role="dialog"
            >
              <motion.div
                className="flex flex-col items-center py-8 space-y-3"
                variants={navStagger}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={navItemAnim}>
                    <Link
                      to={item.path}
                      className={`relative text-lg font-semibold px-4 py-2 rounded transition-colors duration-200 w-full text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                        activeSection === item.id
                          ? 'text-blue-600 dark:text-blue-400 shadow-sm'
                          : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                      onClick={() => setIsOpen(false)}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {/* Animated underline center-out */}
                      <motion.span
                        layoutId="nav-underline-mobile"
                        className="absolute left-1/2 -bottom-1 h-0.5 rounded w-0 bg-blue-600 dark:bg-blue-400"
                        animate={activeSection === item.id ? { width: '66%', left: '17%', opacity: 0.7 } : { width: 0, left: '50%', opacity: 0 }}
                        transition={{ duration: 0.35, type: 'spring', stiffness: 260, damping: 20 }}
                      />
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
