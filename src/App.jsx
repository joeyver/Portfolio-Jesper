import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import StyledButton from './components/StyledButton';
import ProjectElement from './components/ProjectElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser, faHammer, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import data from './data.json';

function App({ currentPage, setCurrentPage }) {
  const user = data.user;
  const settings = data.settings;
  const projects = data.projects;

  const homePage = useRef(null);
  const aboutPage = useRef(null);
  const projectsPage = useRef(null);
  const contactPage = useRef(null);

  const [activeSection, setActiveSection] = useState(null);
  const [viewAll, setViewAll] = useState(false);
  const [navColor, setNavColor] = useState('#C19770');


  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(homePage.current);
    observer.observe(aboutPage.current);
    observer.observe(projectsPage.current);
    observer.observe(contactPage.current);

    return () => observer.disconnect();
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleColorChange = (color) => {
    document.documentElement.style.setProperty('--background', color);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: navColor }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection(homePage)}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection(aboutPage)}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection(projectsPage)}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scrollToSection(contactPage)}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section ref={homePage} id="homePage" className="container-fluid d-flex align-items-center justify-content-center vh-100 text-center text-white">
        <div>
          <h1>Jespers porfolio</h1>
          <p>Hi, Ik ben Jesper van der Tol. En afgestudeerde Software Developer.</p>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutPage} id="aboutPage" className="container my-5">
        <br></br>
         <br></br>
          <br></br>
           <br></br>
  <h2 >About Me</h2>
        <div className="row">
          <div className="col-md-4">
            <img src="images\Me.jpeg" alt="Profile" className="img-fluid rounded-circle" loading="lazy"/>
          </div>
          <div className="col-md-8">
            <p>
Mijn naam is Jesper van der Tol, ik ben 20 jaar oud en een student en softwareontwikkelaar woonachtig in Tilburg, oorspronkelijk uit Vlissingen. Ik heb een passie voor softwareontwikkeling en ben voortdurend op zoek naar manieren om mijn vaardigheden te verbeteren en op de hoogte te blijven van de nieuwste trends in de industrie.            </p>
            <p>
Ik zou mezelf beschrijven als rustig, ordelijk, onafhankelijk en proactief. Ik haal veel plezier uit mijn werk en geloof in de kracht van zowel teamwork als zelfstandig werken. Mijn sterke planningsvaardigheden zorgen ervoor dat ik mijn taken efficiënt beheer.            </p>
            <p>
Ik heb ervaring met verschillende programmeertalen, waaronder HTML/CSS, SQL, JavaScript en Java. Ik heb projecten voltooid zoals een webshop voor Smulderstextiel en een incheck- en absente controlesysteem genaamd "Pasimo" als onderdeel van mijn schoolcurriculum. Mijn professionele ervaring omvat een stage bij Estrategy B.V., waar ik heb bijgedragen aan de ontwikkeling en het beheer van digitale projecten.            </p>
            <p>         
               Momenteel volg ik een niveau 4 opleiding in Software Development aan Scalda in Vlissingen, die ik naar verwachting in 2025 zal afronden. Naast mijn studie heb ik gewerkt in verschillende klantenservice- en operationele functies, waardoor ik mijn interpersoonlijke en organisatorische vaardigheden verder heb kunnen ontwikkelen.
</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsPage} id="projectsPage" className="container my-5">
         <br></br>
          <br></br>
           <br></br>
        <h2>My Projects</h2>
        <div className="row">
          {projects.slice(0, viewAll ? projects.length : settings.maxProjects).map((project, index) => (
            <ProjectElement key={index} project={project} />
          ))}
        </div>
      
      </section>

      {/* Contact Section */}
         <section ref={contactPage} id="contactPage" className="container my-5">
        <h2>Contact</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h5>Stuur een Email en neem contact</h5>
          </div>
           <div id='socials' className="d-flex mt-3">
              <FontAwesomeIcon icon={faLinkedin} fontSize={40} className="fa-icon me-3" onClick={() => window.open(user.linkedIn, '_blank')} />
              <FontAwesomeIcon icon={faInstagramSquare} fontSize={40} className="fa-icon me-3" onClick={() => window.open(user.instagram, '_blank')} />
            </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Naam</label>
                <input type="text" className="form-control" id="nameInput" />
              </div>
              <div className="mb-3">
                <label htmlFor="subjectInput" className="form-label">Onderwerp</label>
                <input type="text" className="form-control" id="subjectInput" />
              </div>
              <div className="mb-3">
                <label htmlFor="messageInput" className="form-label">Bschrijving</label>
                <textarea className="form-control" id="messageInput" rows="5"></textarea>
              </div>
              <StyledButton text='Send' onClick={() => {
                const nameInput = document.getElementById('nameInput');
                const subjectInput = document.getElementById('subjectInput');
                const messageInput = document.getElementById('messageInput');

                const name = encodeURIComponent(nameInput.value);
                const subject = encodeURIComponent(subjectInput.value);
                const message = encodeURIComponent(messageInput.value);

                const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${user.email}&su=${subject}&body=From ${name},%0A%0A${message}`;

                window.open(mailtoLink, '_blank');
              }} />
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" text-white text-center py-3">
        <p>&copy; {new Date().getFullYear()} Jesper van der Tol. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
