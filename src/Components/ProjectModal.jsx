import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const ProjectModal = ({
  project,
  currentImageIndex,
  onClose,
  onNextImage,
  onPrevImage
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="project-modal bg-black/50"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="project-modal-content bg-white dark:bg-dark-200"
        >
          <button
            className="project-modal-close text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="project-modal-image">
            <img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="max-h-[80vh] w-auto object-contain"
            />
            {project.images.length > 1 && (
              <>
                <button
                  className="project-modal-nav prev text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                  onClick={onPrevImage}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  className="project-modal-nav next text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                  onClick={onNextImage}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          <div className="project-modal-info p-6">
            <h3 className="project-modal-title text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="project-modal-description text-lg mb-6 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <div className="project-modal-tech flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-modal-features mb-6">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Features:</h4>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Star className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal; 