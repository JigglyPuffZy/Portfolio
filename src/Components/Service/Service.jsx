import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Smartphone, 
  Layout, 
  Image,
  Video,
  Wrench,
  ArrowRight,
  Sparkles,
  CheckCircle
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
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
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
      ],
      gradient: 'from-blue-600 via-blue-500 to-blue-400',
      bgGradient: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Creating dynamic and responsive websites using modern web technologies and best practices.',
      features: [
        'Frontend Development',
        'Backend Development',
        'Full-Stack Solutions',
        'Website Maintenance'
      ],
      gradient: 'from-blue-700 via-blue-600 to-blue-500',
      bgGradient: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      iconBg: 'bg-gradient-to-br from-blue-600 to-blue-700'
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
      ],
      gradient: 'from-blue-800 via-blue-700 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      iconBg: 'bg-gradient-to-br from-blue-700 to-blue-800'
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
      ],
      gradient: 'from-blue-600 via-blue-500 to-blue-400',
      bgGradient: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600'
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
      ],
      gradient: 'from-blue-700 via-blue-600 to-blue-500',
      bgGradient: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      iconBg: 'bg-gradient-to-br from-blue-600 to-blue-700'
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
      ],
      gradient: 'from-blue-800 via-blue-700 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      iconBg: 'bg-gradient-to-br from-blue-700 to-blue-800'
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
      ],
      gradient: 'from-blue-600 via-blue-500 to-blue-400',
      bgGradient: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-full border border-blue-200/50 dark:border-blue-700/50">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">What I Offer</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-200 dark:to-blue-400">
            My Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            I offer a comprehensive range of development services to help bring your ideas to life.
            From web applications to mobile apps, I ensure high-quality solutions that meet your needs.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              {/* Card background with gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} dark:from-slate-800 dark:to-slate-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
              
              {/* Main card */}
              <div className={`relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 lg:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border ${service.borderColor} dark:border-slate-700 h-full group-hover:border-opacity-50`}>
                
                {/* Icon container */}
                <div className={`inline-flex p-4 rounded-2xl ${service.iconBg} shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl lg:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${service.gradient} group-hover:scale-105 transition-transform duration-300`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-sm lg:text-base text-gray-600 dark:text-gray-300 group/item"
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full ${service.iconBg} flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200`}>
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="group-hover/item:text-gray-800 dark:group-hover/item:text-gray-100 transition-colors duration-200">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Service;