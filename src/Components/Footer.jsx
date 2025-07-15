import React from 'react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer className="py-6 bg-white dark:bg-slate-900 border-t border-blue-100 dark:border-blue-800 text-center">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-4 mb-2">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-300 hover:underline">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-300 hover:underline">GitHub</a>
          <a href="mailto:contact@example.com" className="text-blue-700 dark:text-blue-300 hover:underline">Email</a>
        </div>
        <button onClick={scrollToTop} className="px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 font-semibold text-sm hover:bg-blue-200 dark:hover:bg-blue-700 transition">Back to top</button>
        <span className="text-xs text-gray-400 mt-2">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer; 