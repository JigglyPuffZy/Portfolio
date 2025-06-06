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
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const services = [
    {
      icon: <Code2 className="w-10 h-10" />,
      title: 'React Development',
      description: 'Building modern, responsive web and mobile applications using React.js and React Native.',
      features: [
        'React.js & React Native Development',
        'Expo Router Implementation',
        'E-commerce Solutions',
        'Mobile App Development'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: 'UI/UX Design',
      description: 'Creating clean, functional, and visually appealing interfaces for both mobile and web platforms.',
      features: [
        'User Interface Design',
        'User Experience Design',
        'Responsive Layouts',
        'Mobile-First Design'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Image className="w-10 h-10" />,
      title: 'Graphic Design',
      description: 'Creating compelling visual content for digital and print media.',
      features: [
        'Logo Design',
        'Poster & Banner Creation',
        'Digital Advertising',
        'Publication Layouts'
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: 'Video Editing',
      description: 'Professional video editing for social media, presentations, and promotional content.',
      features: [
        'Social Media Videos',
        'Promotional Content',
        'Color Correction',
        'Audio Syncing'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Digital Marketing',
      description: 'Creating engaging digital content to boost brand awareness and audience engagement.',
      features: [
        'Content Creation',
        'Brand Awareness Campaigns',
        'Social Media Marketing',
        'Visual Content Strategy'
      ],
      gradient: 'from-yellow-500 to-amber-500'
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Technical Support',
      description: 'Providing computer hardware support and system maintenance services.',
      features: [
        'Hardware Troubleshooting',
        'System Maintenance',
        'Technical Assistance',
        'Computer Servicing'
      ],
      gradient: 'from-indigo-500 to-violet-500'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-dark-100 dark:to-dark-200">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
            My Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            I offer a comprehensive range of development services to help bring your ideas to life.
            From web applications to mobile apps, I ensure high-quality solutions that meet your needs.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative group w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                   style={{ backgroundImage: `linear-gradient(to right, ${service.gradient})` }} />
              <div className="relative bg-white dark:bg-dark-200 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full">
                <div className={`inline-flex p-2 sm:p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-sm sm:text-base text-gray-600 dark:text-gray-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className={`w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-${service.gradient.split('-')[1]}-500`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Service;