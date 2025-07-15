import React from 'react';

const testimonials = [
  { name: 'Jane Doe', title: 'Product Manager', quote: 'Working with you was a fantastic experience!' },
  { name: 'John Smith', title: 'CEO', quote: 'Your creativity and technical skills are top-notch.' },
  { name: 'Alex Lee', title: 'Designer', quote: 'You bring ideas to life with style and precision.' },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="min-h-[40vh] py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-900 dark:text-blue-100">Testimonials</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="min-w-[250px] bg-white/80 dark:bg-slate-800/80 rounded-xl shadow p-6 flex flex-col items-center">
              <span className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">{t.name}</span>
              <span className="text-sm text-gray-500 mb-2">{t.title}</span>
              <p className="italic text-gray-700 dark:text-gray-200">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 