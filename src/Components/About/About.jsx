import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faXTwitter,
  faThreads
} from '@fortawesome/free-brands-svg-icons';
import boracay1 from '../../assets/img/boracay1.jpg';
import boracay2 from '../../assets/img/boracay2.jpg';
import boracay3 from '../../assets/img/boracay3.jpg';
import boracay4 from '../../assets/img/boracay4.jpg';

const About = () => {
  const researchImages = [
    {
      src: boracay1,
      alt: "Presenting research in Boracay",
      title: "Research Presentation", 
      description: "Sharing our findings with the academic community"
    },
    {
      src: boracay2,
      alt: "Research team in Boracay",
      title: "Team Collaboration",
      description: "Working together to advance knowledge"
    },
    {
      src: boracay3,
      alt: "Panel discussion in Boracay", 
      title: "Panel Discussion",
      description: "Engaging with experts in the field"
    },
    {
      src: boracay4,
      alt: "Award ceremony in Boracay",
      title: "Recognition",
      description: "Celebrating our research achievements"
    }
  ];

  return (
    <main className="about">
      <section className="hero">
        <h1>Ralph Matthew Delarosa Punzalan</h1>
        <p>Relentless dedication transforms dreams into success</p>
      </section>

      <section className="about-me">
        <p>
          I&apos;m a BSIT student specializing in UI/UX design, graphic design, and front-end development. With expertise in React.js, React Native, and Tailwind CSS, I provide technical services and work as a freelance project developer, focusing on seamless and user-friendly digital experiences.
        </p>
        <p>
          I have worked on various projects, including e-commerce applications, quiz apps, and freelancing platforms.
          My graphic design skills extend to logo creation, poster design, and publication materials.
        </p>
        <p>
          My goal is to enhance user experiences through intuitive and visually appealing designs.
        </p>
      </section>

      <section className="research">
        <h2>Research Presentation in Boracay</h2>
        <p>
          I had the incredible opportunity to present our research in Boracay, where we showcased our study to a
          diverse audience of professionals and fellow researchers. The experience allowed me to refine my public
          speaking skills, gain valuable feedback, and connect with experts in our field. This presentation marked
          a significant milestone in my academic journey, combining theoretical knowledge with practical applications
          in a real-world setting.
        </p>
        <div className="images">
          {researchImages.map((image, index) => (
            <div className="image-container" key={index}>
              <img src={image.src} alt={image.alt} />
              <div className="image-overlay">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="certificates">
        <h2>Certificates</h2>
        <ul>
          <li>
            <strong>Computer System Servicing NC II</strong>
            <span>2023</span>
            <p>Comprehensive certification in computer system maintenance and troubleshooting</p>
            <div className="badge">Technical</div>
          </li>
          <li>
            <strong>Certificate of Appreciation - PSITE</strong>
            <span>4th ICITE 2023</span>
            <p>Recognition from the Philippine Society of Information Technology Educators</p>
            <div className="badge">Academic</div>
          </li>
          <li>
            <strong>Gawad San Luis for Excellence</strong>
            <span>2024</span>
            <p>Award for Innovation, Creativity, and Agility from University of Saint Louis</p>
            <div className="badge">Excellence</div>
          </li>
        </ul>
      </section>

      <section className="contact">
        <div className="contact-content-wrapper">
          <div className="contact-header-section">
            <h2>Get in Touch</h2>
            <p>Let&apos;s connect and create something amazing together</p>
          </div>
          
          <div className="contact-info">
            <div className="info-item">
              <span className="label">Email</span>
              <a href="mailto:ralphmatthewpunzalan23@gmail.com">
                ralphmatthewpunzalan23@gmail.com
              </a>
            </div>
          </div>

          <div className="social-links">
            <h3>Social Profiles</h3>
            <div className="social-grid">
              {[
                { icon: faFacebookF, url: "https://facebook.com/Jigglypuffzy" },
                { icon: faInstagram, url: "https://instagram.com/jigglypufzzz" },
                { icon: faGithub, url: "https://github.com/JigglyPuffZy" },
                { icon: faXTwitter, url: "https://x.com/ralphmatt__?s=21" },
                { icon: faThreads, url: "https://www.threads.net/@jigglypufzzz?igshid=NTc4MTIwNjQ2YQ==" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
