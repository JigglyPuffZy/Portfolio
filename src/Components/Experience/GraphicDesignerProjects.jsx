import React from 'react';

// Graphic design projects data removed - images were unused
// All graphic design project arrays have been removed as the images were deleted

// Add a subtle geometric SVG background overlay
const GeometricBg = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none opacity-10 z-0"
    width="100%"
    height="100%"
    viewBox="0 0 800 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#60a5fa" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="800" height="600" fill="url(#grid)" />
  </svg>
);

const GraphicDesignerProjects = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 bg-white dark:bg-slate-900 font-sans overflow-x-hidden">
      <div className="relative z-20 w-full flex flex-col items-center mb-10">
        <div className="relative flex flex-col items-center w-full">
          <div className="relative flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-lg px-6 py-3 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-blue-100 dark:border-blue-700 shadow-xl">
              Graphic Design Projects
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mt-4 text-center max-w-2xl">
              This section is currently being updated. Please check back soon for new graphic design projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignerProjects; 