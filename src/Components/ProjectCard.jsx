import { motion } from 'framer-motion';

const ProjectCard = ({ project, onImageClick }) => {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.5 }
        }
      }}
      className="project-card bg-white dark:bg-dark-200"
    >
      <div className="project-image" onClick={onImageClick}>
        <img src={project.mainImage} alt={project.title} />
      </div>
      <div className="project-content">
        <h3 className="project-title text-gray-900 dark:text-white">{project.title}</h3>
        <p className="project-description text-gray-600 dark:text-gray-300">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="tech-tag bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 