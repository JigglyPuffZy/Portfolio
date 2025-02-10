import './Hero.css';
import PunzalanResume from './../../assets/Punzalan Resume.pdf';

const Hero = () => {
  return (
    <div className="hero-container" style={{ overflow: 'hidden' }}>
      <div className="dot-pattern"></div>
      <div className="hero-content">
        <h1><span>Welcome to my homepage, </span> I&apos;m Ralph Matthew Punzalan</h1>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>I&apos;m here to bring your ideas to life with passion, precision, and creativity. </p>
        <div className="hero-action">
          <a 
            className="hero-connect" 
            href="https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Connect with me
          </a>
          <a 
            className="hero-resume" 
            href={PunzalanResume} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
