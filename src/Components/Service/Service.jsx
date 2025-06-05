import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Smartphone, 
  Layout, 
  Image,
  Video,
  Wrench,
  ArrowRight
} from 'lucide-react';

const Service = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'React Development',
      description: 'Building modern, responsive web and mobile applications using React.js and React Native.',
      features: [
        'React.js & React Native Development',
        'Expo Router Implementation',
        'E-commerce Solutions',
        'Mobile App Development'
      ]
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating clean, functional, and visually appealing interfaces for both mobile and web platforms.',
      features: [
        'User Interface Design',
        'User Experience Design',
        'Responsive Layouts',
        'Mobile-First Design'
      ]
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Graphic Design',
      description: 'Creating compelling visual content for digital and print media.',
      features: [
        'Logo Design',
        'Poster & Banner Creation',
        'Digital Advertising',
        'Publication Layouts'
      ]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Editing',
      description: 'Professional video editing for social media, presentations, and promotional content.',
      features: [
        'Social Media Videos',
        'Promotional Content',
        'Color Correction',
        'Audio Syncing'
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'Creating engaging digital content to boost brand awareness and audience engagement.',
      features: [
        'Content Creation',
        'Brand Awareness Campaigns',
        'Social Media Marketing',
        'Visual Content Strategy'
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Technical Support',
      description: 'Providing computer hardware support and system maintenance services.',
      features: [
        'Hardware Troubleshooting',
        'System Maintenance',
        'Technical Assistance',
        'Computer Servicing'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-100">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer a comprehensive range of development services to help bring your ideas to life.
            From web applications to mobile apps, I ensure high-quality solutions that meet your needs.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="card p-6 group"
            >
              <div className="text-primary-500 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                    <ArrowRight className="w-4 h-4 mr-2 text-primary-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Service;