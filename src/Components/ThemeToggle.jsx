import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-2 rounded-full transition-all duration-300 ${
        isDark 
          ? 'bg-white/10 hover:bg-white/20 border border-white/20' 
          : 'bg-gray-800/10 hover:bg-gray-800/20 border border-gray-800/20'
      } backdrop-blur-sm`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-blue-600" />
        )}
      </motion.div>
      
      {/* Ripple effect */}
      <motion.div
        className={`absolute inset-0 rounded-full ${
          isDark ? 'bg-yellow-400/20' : 'bg-blue-600/20'
        }`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default ThemeToggle; 