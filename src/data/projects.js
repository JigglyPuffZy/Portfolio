import WebPortfolio1 from "../assets/img/webportfolio1.png";
import WebPortfolio2 from "../assets/img/webportfolio2.png";
import WebPortfolio3 from "../assets/img/webportfolio3.png";
import WebPortfolio4 from "../assets/img/webportfolio4.png";
import WebPortfolio5 from "../assets/img/webportfolio5.png";
import Ads1 from "../assets/img/Ads Poster 1.jpg";
import Ads2 from "../assets/img/Ads Poster 2.jpg";
import BookCover1 from "../assets/img/BookCover1.jpg";
import BookCover2 from "../assets/img/BookCover2.jpg";
import BookCover3 from "../assets/img/BookCover3.jpg";
import BrandAwareness1 from "../assets/img/Brand Awareness 1.jpg";
import BrandAwareness2 from "../assets/img/Brand Awareness 2.jpg";
import BrandAwareness3 from "../assets/img/Brand Awareness 3.jpg";
import BrandAwareness4 from "../assets/img/Brand awareness 4.jpg";
import BrandAwareness5 from "../assets/img/Brand Awareness 5.jpg";
import Newspaper1 from "../assets/img/NewsPaper1.jpg";
import Newspaper2 from "../assets/img/NewsPaper2.jpg";
import Newspaper3 from "../assets/img/NewsPaper3.jpg";
import Newspaper4 from "../assets/img/NewsPaper4.jpg";
import Newspaper5 from "../assets/img/NewsPaper5.jpg";
import Newspaper6 from "../assets/img/NewsPaper6.jpg";
import Marians from "../assets/img/Marian's.png";
import QuizWhirl from "../assets/img/QuizWHirl.png";

export const projectCategories = {
  mobile: {
    title: 'Mobile Apps',
    icon: 'Smartphone',
    projects: [
      {
        title: 'Marians Mobile App',
        description: 'Developed a mobile application for Marians, featuring a modern UI/UX design and seamless user experience.',
        mainImage: Marians,
        images: [Marians],
        tech: ['React Native', 'Mobile UI/UX', 'State Management', 'Performance Optimization'],
        features: [
          'Modern and intuitive interface',
          'Smooth animations and transitions',
          'Responsive design for all devices',
          'Offline functionality',
          'Real-time updates'
        ],
        github: '#',
        live: '#'
      },
      {
        title: 'Quiz Whirl App',
        description: 'Built an interactive quiz app with multiple question types and score tracking. Designed a responsive and engaging UI using React Native.',
        mainImage: QuizWhirl,
        images: [QuizWhirl],
        tech: ['React Native', 'Mobile UI/UX', 'State Management', 'Performance Optimization'],
        features: [
          'Multiple question types support',
          'Real-time score tracking',
          'Responsive design for all devices',
          'Smooth animations and transitions',
          'Offline functionality'
        ],
        github: '#',
        live: '#'
      }
    ]
  },
  brand: {
    title: 'Brand Awareness',
    icon: 'Briefcase',
    projects: [
      {
        title: 'Brand Awareness Campaign 1',
        description: 'A comprehensive brand awareness campaign showcasing innovative marketing strategies and creative design solutions.',
        mainImage: BrandAwareness1,
        images: [BrandAwareness1],
        tech: ['Marketing', 'Brand Strategy', 'Social Media', 'Design'],
        features: [
          'Strategic brand positioning',
          'Social media campaign management',
          'Content creation and curation',
          'Analytics and performance tracking',
          'Cross-platform integration'
        ],
        github: '#',
        live: '#'
      },
      // ... Add other brand projects similarly
    ]
  },
  // ... Add other categories similarly
};

export const categories = [
  { id: 'mobile', title: 'Mobile Apps', icon: 'Smartphone' },
  { id: 'brand', title: 'Brand Awareness', icon: 'Briefcase' },
  { id: 'book', title: 'Book Designs', icon: 'Book' },
  { id: 'ads', title: 'Poster Ads', icon: 'Palette' },
  { id: 'newspaper', title: 'Newspaper', icon: 'Newspaper' },
  { id: 'web', title: 'Web Portfolio', icon: 'Code' }
]; 