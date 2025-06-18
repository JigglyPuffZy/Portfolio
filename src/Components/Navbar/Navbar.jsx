import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
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
    else if (location.pathname === '/service') setActiveSection('services');
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', path: '/', onClick: scrollToTop, id: 'home' },
    { name: 'About', path: '/about', id: 'about' },
    { name: 'Services', path: '/service', id: 'services' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-md' : 'backdrop-blur-none shadow-none'
      }`}
      style={{
        background: isDark
          ? 'rgba(23,23,23,0.7)' // dark: neutral-900/70
          : 'rgba(255,255,255,0.7)',
        WebkitBackdropFilter: 'blur(8px)',
        backdropFilter: 'blur(8px)',
        boxShadow: scrolled
          ? (isDark
              ? '0 4px 24px 0 rgba(0,0,0,0.25)'
              : '0 4px 24px 0 rgba(31,38,135,0.10)')
          : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl md:text-2xl text-blue-600 dark:text-blue-400 tracking-tight" onClick={scrollToTop}>
          R4lph
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-base font-medium transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                activeSection === item.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              onClick={item.onClick}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-2 p-2 rounded-full bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5 text-blue-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
          </button>
        </div>
        {/* Mobile Nav Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsDark(!isDark)}
            className="mr-2 p-2 rounded-full bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5 text-blue-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            aria-label="Open menu"
          >
            {isOpen ? <X className="w-6 h-6 text-blue-600 dark:text-blue-400" /> : <Menu className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
          </button>
        </div>
      </div>
      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-16 z-40 bg-white/95 dark:bg-dark-100/95 backdrop-blur-md shadow-lg border-b border-blue-100/20 dark:border-blue-900/20"
          >
            <div className="flex flex-col items-center py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-lg font-medium px-4 py-2 rounded transition-colors duration-200 w-full text-center ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
