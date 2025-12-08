import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Mail, href: 'mailto:ralphmatthewpunzalan23@gmail.com', label: 'Email', color: 'hover:text-primary-600' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-dark-950 dark:via-dark-900 dark:to-black border-t border-gray-200/50 dark:border-gray-800/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh dark:bg-mesh-dark opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold gradient-text-premium mb-2">
              Ralph Punzalan
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Front-End Developer & Digital Creator
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-xl bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold shadow-lg hover:shadow-glow transition-all duration-300"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 flex-wrap justify-center">
              <span>&copy; {new Date().getFullYear()} Ralph Punzalan.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Crafted with <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> and passion
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 