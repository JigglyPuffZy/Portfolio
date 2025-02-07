import './About.css';
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
        <p>Frontend Developer | UI/UX Designer | Graphic Designer</p>
      </section>

      <section className="about-me">
        <p>
          I am a passionate BSIT student specializing in UI/UX design, graphic design, and front-end development.
          With expertise in React.js, React Native, and Tailwind CSS, I create seamless digital experiences.
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

      
    </main>
  );
};

export default About;