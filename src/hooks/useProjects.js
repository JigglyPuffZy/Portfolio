import { useState } from 'react';
import { projectCategories } from '../data/projects';

export const useProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('mobile');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    setSelectedImage(e.target.src);
    setIsImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const getProjectsByCategory = () => {
    return projectCategories[activeCategory]?.projects || [];
  };

  return {
    selectedProject,
    currentImageIndex,
    activeCategory,
    isImageModalOpen,
    selectedImage,
    setActiveCategory,
    handleProjectClick,
    handleImageClick,
    handleCloseImageModal,
    handleNextImage,
    handlePrevImage,
    getProjectsByCategory
  };
}; 