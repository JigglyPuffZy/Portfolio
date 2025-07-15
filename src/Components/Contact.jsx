import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-[40vh] py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-100">Contact</h2>
        <p className="mb-6 text-lg text-blue-800 dark:text-blue-200">Let’s build something awesome together!</p>
        <form className="flex flex-col gap-4 mb-6">
          <input type="text" placeholder="Name" className="p-3 rounded border border-blue-200 dark:border-blue-700 bg-white dark:bg-slate-800" />
          <input type="email" placeholder="Email" className="p-3 rounded border border-blue-200 dark:border-blue-700 bg-white dark:bg-slate-800" />
          <textarea placeholder="Message" className="p-3 rounded border border-blue-200 dark:border-blue-700 bg-white dark:bg-slate-800" rows={4} />
          <button type="submit" className="mt-2 px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Send Message</button>
        </form>
        <div className="flex gap-4 justify-center">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-300 hover:underline">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-300 hover:underline">GitHub</a>
          <a href="mailto:contact@example.com" className="text-blue-700 dark:text-blue-300 hover:underline">Email</a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 