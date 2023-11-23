import "./App.css";
import rout from "./router-app.png.png";
import testimony from "./testimony.jpeg";
import food from "./food.jpeg";
import chair from "./chair.jpeg";
import travel from "./travel-list.jpeg";
import pizza from "./pizza.jpeg";
import care from "./care-finder.jpeg";
import mobile from "./mobile-app.jpeg";
import tour from "./tour.jpeg";
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
          <a href="#contact" class="btn btn--full margin-right-sm">
            Send me an email
          </a>
        </div>

        <div class="hero-img-box">
          <img
            className="my-image"
            src="https://avatars.githubusercontent.com/u/100401054?v=4"
            alt="profile_pics"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <div className="container" id="about">
      <div className="about-content">
        <h2>About Me</h2>I started out as a self-taught developer, trying to
        find the best possible way to improve my learning Experience. working
        with other developers, building Projects, joining communities and
        contributing to open source has been a sure fire way to improving my
        skill and keep me up to date with latest technologies in software. Among
        my exciting tech journey and experience is the Privledge of passing
        through altSchool with a diploma in Frontend Engineering. I have a keen Interest in developing efficient
        and reliable solutions while meeting user expectation and satisfaction{" "}
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="recent-project">
      <h3 className="pt-title" id="project">
        My Recent Project
      </h3>
      <div className="container grid">
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
                    "https://github.com/CyCodez/testimonials-grid-section"
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
                onClick={() => window.open("travel-list-app01.netlify.app")}
              >
                live demo
              </button>
            </div>
          </div>
        </div>
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
            <div>Vue</div>
            <div className="xp">Basic</div>
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
