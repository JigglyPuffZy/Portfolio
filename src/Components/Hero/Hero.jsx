import './Hero.css';
import PunzalanResume from './../../assets/Punzalan Resume.pdf';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="dot-pattern"></div>
      <div className="hero-content">
        <h1><span>I&apos;m Ralph Matthew Punzalan,</span> frontend developer based in PH</h1>
        <p>I&apos;m a mobile and web developer focused on creating smooth and engaging digital experiences.</p>
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
