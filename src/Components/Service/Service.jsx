import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMobileAlt, 
  faPaintBrush, 
  faPalette, 
  faTools, 
  faCode,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons';
import './Service.css'; 

const Service = () => {
  const services = [
    {
      id: "1", 
      title: "React.js & React Native Development", 
      icon: faMobileAlt,
      description: "Crafting responsive mobile and web applications with cutting-edge React technologies. Specializing in e-commerce and interactive platforms."
    },
    {
      id: "2", 
      title: "UI/UX Design", 
      icon: faPaintBrush,
      description: "Creating intuitive and engaging user interfaces for mobile and web applications. Focused on enhancing user experience through thoughtful design solutions."
    },
    {
      id: "3", 
      title: "Graphic Design", 
      icon: faPalette,
      description: "Designing eye-catching visual content including logos, posters, digital displays, and publication materials for local businesses and clients."
    },
    {
      id: "4", 
      title: "Technical Support", 
      icon: faTools,
      description: "Providing comprehensive computer hardware support with expertise in system servicing and technical troubleshooting."
    },
    {
      id: "5", 
      title: "Web Development", 
      icon: faCode,
      description: "Building robust and scalable web applications with a focus on clean code and optimal performance."
    },
    {
      id: "6", 
      title: "Freelance Project Development", 
      icon: faDesktop,
      description: "Creating innovative platforms that solve real-world problems and support local communities."
    }
  ];

 

  return (
    <div className="services-container">
      <div className="services-background">
    
       
      </div>
      <h2>My Professional Services</h2>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-card-icon-wrapper">
              <FontAwesomeIcon icon={service.icon} />
            </div>
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;