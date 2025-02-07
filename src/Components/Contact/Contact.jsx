import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faGithub, 
  faXTwitter, 
  faThreads 
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>My Contact</h1>
      </header>
      
      <section className="contact-info">
        <div className="info-item">
          <span className="label">Phone</span>
          <span className="detail"><a href="tel:+639453386067">+639453386067</a></span>
        </div>
        <div className="info-item">
          <span className="label">Email</span>
          <span className="detail"><a href="mailto:ralphmatthewpunzalan23@gmail.com">ralphmatthewpunzalan23@gmail.com</a></span>
        </div>
      </section>

      <section className="social-links">
        <h2>Social Profiles</h2>
        <div className="social-grid">
          <a href="https://facebook.com/Jigglypuffzy" target="_blank" rel="noopener noreferrer" className="social-item">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://instagram.com/jigglypufzzz" target="_blank" rel="noopener noreferrer" className="social-item">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://github.com/JigglyPuffZy" target="_blank" rel="noopener noreferrer" className="social-item">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://x.com/ralphmatt__?s=21" target="_blank" rel="noopener noreferrer" className="social-item">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://www.threads.net/@jigglypufzzz?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer" className="social-item">
            <FontAwesomeIcon icon={faThreads} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
