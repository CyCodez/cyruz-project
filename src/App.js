import "./App.css";
import rout from "./router-app.png.png";
import profile from "./profile-pics.jpeg"
import testimony from "./testimony.jpeg";
import food from "./food.jpeg";
import chair from "./chair.jpeg";
import travel from "./travel-list.jpeg";
import pizza from "./pizza.jpeg";
import care from "./care-finder.jpeg";
import mobile from "./mobile-app.jpeg";
import tour from "./tour.jpeg";
import studentdb from "./student-db.jpeg"
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import NavBar from "./navBar";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavBar/>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

function Home() {
  return (
    <section className="section-hero" id="home">
      <div className="hero">
        <div>
          {" "}
          <p className="name">Hey there, I am Cyrus</p>
          <h4 className="interface">
            {" "}
            I build and design Beautiful user Interfaces
          </h4>
          <a href="#contact" className="btn btn--full margin-right-sm">
            Send me an email
          </a>
        </div>

        <div className="hero-img-box">
          <img
            className="my-image"
            src={profile}
            alt="profile_pics"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
<section className="about-section" id="about">
  <div className="about-container">

    <div className="about-heading">
      <span className="section-tag">ABOUT ME</span>
      <h2>Building digital experiences that <span>solve real problems.</span></h2>
    </div>

    <div className="about-content">

      <div className="about-text">
        <p>
          I’m a passionate <strong>Full-Stack Engineer</strong> focused on
          building scalable, responsive, and user-centered web applications
          that solve real business problems. I enjoy transforming ideas and
          complex requirements into clean, functional digital products that
          create meaningful value for users and businesses.
        </p>

        <p>
          My technical experience spans both <strong>frontend and backend
          development</strong>, with hands-on experience using
          <strong> HTML, CSS, JavaScript, React, Node.js, Express, and
          MongoDB</strong>. I enjoy building complete applications, from
          designing intuitive interfaces to developing APIs, managing
          databases, and connecting the different layers of an application.
        </p>

        <p>
          I hold a <strong>Diploma in Frontend Engineering from AltSchool
          Africa</strong>, where I developed a strong foundation in modern
          frontend development and web technologies. I am also currently
          pursuing a <strong>Full-Stack Engineering course at NIIT</strong>,
          where I am expanding my knowledge of backend development, databases,
          APIs, software architecture, and end-to-end application development.
        </p>

        <p>
          Beyond writing code, I bring practical experience in
          <strong> Customer Experience and digital product operations</strong>.
          This gives me a unique perspective as an engineer because I
          understand that great software is not only about writing functional
          code—it is about understanding the people using the product and
          solving problems that actually matter.
        </p>

        <p>
          I’m continuously learning, building, and improving my engineering
          skills with the goal of becoming an exceptional full-stack engineer
          capable of designing and delivering <strong>high-quality, scalable,
          and impactful software products from idea to production.</strong>
        </p>
      </div>

      <div className="about-highlights">

        <div className="highlight-card">
          <span className="highlight-icon">01</span>
          <div>
            <h3>Frontend Engineering</h3>
            <p>
              Building responsive, accessible, and intuitive interfaces
              using HTML, CSS, JavaScript, and React.
            </p>
          </div>
        </div>

        <div className="highlight-card">
          <span className="highlight-icon">02</span>
          <div>
            <h3>Backend Development</h3>
            <p>
              Developing reliable server-side applications, REST APIs, and
              business logic with Node.js and Express.
            </p>
          </div>
        </div>

        <div className="highlight-card">
          <span className="highlight-icon">03</span>
          <div>
            <h3>Database & APIs</h3>
            <p>
              Designing and managing data-driven applications using MongoDB
              and integrating frontend applications with backend services.
            </p>
          </div>
        </div>

        <div className="highlight-card">
          <span className="highlight-icon">04</span>
          <div>
            <h3>Business-Focused Engineering</h3>
            <p>
              Combining engineering with customer experience to build
              solutions that address real user and business challenges.
            </p>
          </div>
        </div>

      </div>

    </div>

    <div className="about-bottom">
      <div className="education-item">
        <span>EDUCATION</span>
        <h3>Diploma in Frontend Engineering</h3>
        <p>AltSchool Africa</p>
      </div>

      <div className="education-item">
        <span>CURRENTLY LEARNING</span>
        <h3>Full-Stack Engineering</h3>
        <p>NIIT</p>
      </div>

      <div className="education-item">
        <span>FOCUS</span>
        <h3>Building Scalable Digital Products</h3>
        <p>Frontend • Backend • APIs • Databases</p>
      </div>
    </div>

  </div>
</section>
  );
}

function Portfolio() {
  return (
    <div className="recent-project">
      <h3 className="pt-title" id="project">
        My Projects
      </h3>
      <div className="container grid">
        <div className="projects">
          <img src={pizza} className="project-img" alt="" height="50%" />
          <div className="project-content">
            <h3>Pizza Application</h3>
            <div className="btn-container">
              <button
                className="pt-btn"
                onClick={() =>
                  window.open("https://github.com/CyCodez/pizza-menu")
                }
              >
                github
              </button>
              <button
                className="pt-btn"
                onClick={() => window.open("https://cy-pizza-app.netlify.app/")}
              >
                live demo
              </button>
            </div>
          </div>
        </div>
        <div className="projects">
          <img src={studentdb} className="project-img" alt="" height="50%" />
          <div className="project-content">
            <h3>Database management System</h3>
            <div className="btn-container">
              <button
                className="pt-btn"
                onClick={() =>
                  window.open("https://github.com/CyCodez/student_database_db")
                }
              >
                github
              </button>
              <button
                className="pt-btn"
                onClick={() =>
                  window.open(
                    "https://student-database-frontend-elsx.onrender.com",
                  )
                }
              >
                live demo
              </button>
            </div>
          </div>
        </div>
        <div className="projects">
          <img src={mobile} className="project-img" alt="" height="50%" />
          <div className="project-content">
            <h3>Mobile-Bank Application</h3>
            <div className="btn-container">
              <button
                className="pt-btn"
                onClick={() =>
                  window.open("https://github.com/CyCodez/Authentication_App")
                }
              >
                github
              </button>
              <button
                className="pt-btn"
                onClick={() => window.open("https://bank-recharge.netlify.app")}
              >
                live demo
              </button>
            </div>
          </div>
        </div>
        <div className="projects">
          <img src={tour} className="project-img" alt="" height="50%" />
          <div className="project-content">
            <h3>Tourist Website</h3>
            <div className="btn-container">
              <button
                className="pt-btn"
                onClick={() =>
                  window.open("https://github.com/CyCodez/Tour-project")
                }
              >
                github
              </button>
              <button
                className="pt-btn"
                onClick={() =>
                  window.open("https://tour-project-01.netlify.app/")
                }
              >
                live demo
              </button>
            </div>
          </div>
        </div>
        <div className="projects">
          <img src={rout} className="project-img" alt="" height="50%" />
          <div className="project-content">
            <h3>Router App</h3>
            <div className="btn-container">
              <button
                className="pt-btn"
                onClick={() =>
                  window.open("https://replit.com/@cyruz/Routerassignment")
                }
              >
                replit
              </button>
              <button
                className="pt-btn"
                onClick={() =>
                  window.open("https://replit.com/@cyruz/Routerassignment")
                }
              >
                live demo
              </button>
            </div>
          </div>
        </div>
        <div className="projects">
          <img src={testimony} className="project-img" alt="" height="50%" />
          <div className="project-content">
            <h3>Testimonial Website</h3>
            <div className="btn-container">
              <button
                className="pt-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/CyCodez/testimonials-grid-section",
                  )
                }
              >
                github
              </button>
              <button
                className="pt-btn"
                onClick={() =>
                  window.open("https://testimonial-grid-section0.netlify.app/")
                }
              >
                live demo
              </button>
            </div>
          </div>
        </div>
        <div className="projects">
          <img src={food} className="project-img" alt="" height="50%" />
          <div className="project-content">
            <h3>OminiFood Website</h3>
            <div className="btn-container">
              <button
                className="pt-btn"
                onClick={() =>
                  window.open("https://github.com/CyCodez/Omnifood-project")
                }
              >
                github
              </button>
              <button
                className="pt-btn"
                onClick={() => window.open("https://ominifood-12.netlify.app")}
              >
                live demo
              </button>
            </div>
          </div>
        </div>
        <div className="projects">
          <img src={chair} className="project-img" alt="" height="50%" />
          <div className="project-content">
            <h3>Furniture Website</h3>
            <div className="btn-container">
              <button
                className="pt-btn"
                onClick={() =>
                  window.open("https://github.com/CyCodez/furniture-app")
                }
              >
                github
              </button>
              <button
                className="pt-btn"
                onClick={() =>
                  window.open("https://furniture-app01.netlify.app/")
                }
              >
                live demo
              </button>
            </div>
          </div>
        </div>
        <div className="projects">
          <img src={travel} className="project-img" alt="" height="50%" />
          <div className="project-content">
            <h3>Travel-list Application</h3>
            <div className="btn-container">
              <button
                className="pt-btn"
                onClick={() =>
                  window.open("https://github.com/CyCodez/travel-app")
                }
              >
                github
              </button>
              <button
                className="pt-btn"
                onClick={() =>
                  window.open("https://travel-list-app01.netlify.app")
                }
              >
                live demo
              </button>
            </div>
          </div>
        </div>
        <div className="projects">
          <img src={care} className="project-img" alt="" height="50%" />
          <div className="project-content">
            <h3>CareFinder Application</h3>
            <div className="btn-container">
              <button
                className="pt-btn"
                onClick={() =>
                  window.open("https://github.com/CyCodez/careFinder")
                }
              >
                github
              </button>
              <button
                className="pt-btn"
                onClick={() =>
                  window.open("https://carefinder-project.web.app/")
                }
              >
                live demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills" id="experience">
      <div className="skills-header">
        <h1>What Skills I Have</h1>
        <h2>My Experience</h2>
      </div>

      <div className="skill-container">
        <div className="skill-title">Frontend Development</div>
        <div className="skill-list">
          <div>
            <ion-icon
              style={{ color: "#4dabf7", width: "20px" }}
              name="construct-outline"
            ></ion-icon>
          </div>
          <div>
            {" "}
            <div>Html</div>
            <div className="xp">Experienced</div>
          </div>
        </div>
        <div className="skill-list">
          <div>
            <ion-icon
              style={{ color: "#4dabf7", width: "20px" }}
              name="construct-outline"
            ></ion-icon>
          </div>
          <div>
            <div>Css</div>
            <div className="xp">Experienced</div>
          </div>
        </div>
        <div className="skill-list">
          <div>
            <ion-icon
              style={{ color: "#4dabf7", width: "20px" }}
              name="construct-outline"
            ></ion-icon>
          </div>
          <div>
            {" "}
            <div>Javascript</div>
            <div className="xp">Experienced</div>
          </div>
        </div>
        <div className="skill-list">
          <div>
            <ion-icon
              style={{ color: "#4dabf7", width: "20px" }}
              name="construct-outline"
            ></ion-icon>
          </div>
          <div>
            <div>React</div>
            <div className="xp">Experienced</div>
          </div>
        </div>
        

        <div className="skill-list">
          <div>
            <ion-icon
              style={{ color: "#4dabf7", width: "20px" }}
              name="construct-outline"
            ></ion-icon>
          </div>
          <div>
            <div>RestAPI</div>
            <div className="xp">Intermediate</div>
          </div>
        </div>
        <div className="skill-list">
          <div>
            <ion-icon
              style={{ color: "#4dabf7", width: "20px" }}
              name="construct-outline"
            ></ion-icon>
          </div>
          <div>
            <div>Typescript</div>
            <div className="xp">Intermediate</div>
          </div>
        </div>

        <div className="skill-list">
          <div>
            <ion-icon
              style={{ color: "#4dabf7", width: "20px" }}
              name="construct-outline"
            ></ion-icon>
          </div>
          <div>
            <div>Firebase</div>
            <div className="xp">Basic</div>
          </div>
        </div>
      </div>
      <div className="skill-container">
        <div className="skill-title">Backend Development</div>
        <div className="skill-list">
          <div>
            <ion-icon
              style={{ color: "#4dabf7", width: "20px" }}
              name="construct-outline"
            ></ion-icon>
          </div>
          <div>
            {" "}
            <div>MongoDb</div>
            <div className="xp">Experienced</div>
          </div>
        </div>
        <div className="skill-list">
          <div>
            <ion-icon
              style={{ color: "#4dabf7", width: "20px" }}
              name="construct-outline"
            ></ion-icon>
          </div>
          <div>
            <div>Nodejs</div>
            <div className="xp">Experienced</div>
          </div>
        </div>
        <div className="skill-list">
          <div>
            <ion-icon
              style={{ color: "#4dabf7", width: "20px" }}
              name="construct-outline"
            ></ion-icon>
          </div>
          <div>
            {" "}
            <div>Java</div>
            <div className="xp">Intermediate</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-main container" id="contact">
      <div className="contact-title">Get In Touch</div>
      <div className="contacts-title">Contact Me</div>
      <div className="container grid-2-cols">
        <div className="social-media">
          <div>
            <p>
              <FaEnvelope className="contact-icon" />
            </p>
            <p>email</p>
            <p>
              <a href="mailto:uwaomacyruz.com">uwaomacyruz@gmail.com</a>
            </p>
            <a href="mailto:uwaomacyruz.com">
              <p className="contact-msg">Send a message</p>
            </a>
          </div>
          <div>
            <p>
              <FaLinkedin
                style={{ fontSize: "3.5rem" }}
                className="contact-icon"
              />
            </p>
            <p>LinkedIn</p>
            <p>Uwaoma Cyrus</p>
            <a href="https://www.linkedin.com/in/uwaomacyrus/">
              <p className="contact-msg">Send a message</p>
            </a>
          </div>
          <div>
            <p>
              <FaWhatsapp
                style={{ fontSize: "3.5rem" }}
                className="contact-icon"
              />
            </p>
            <p>WhatApp</p>
            <p>+2348147276128</p>
            <a href="tel:+2348147276128">
              <p className="contact-msg">Send a message</p>
            </a>
          </div>
        </div>
        <div className="message">
          <form>
            <input type="text" placeholder="Your full name" />
            <input type="text" placeholder="Your email" />
            <textarea placeholder="message" />
            <button>
              {" "}
              <a  href="mailto:uwaomacyruz.com">Send
              Message</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
