import React, { useEffect, useState } from 'react';
import CV from '../../assets/CV-DIEGO-INSAURRALDE.pdf'
import './NavBar.css';

function downloadCV() {
  const link = document.createElement('a');
  link.href = CV;
  link.download = 'CV-DIEGO-INSAURRALDE.pdf';
  link.click();
}

function NavBar() {

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const aboutSection = document.getElementById('about');
      const portfolioSection = document.getElementById('portfolio');
      const contactSection = document.getElementById('contact');
      const scrollPosition = window.scrollY;

      if (
        scrollPosition < aboutSection.offsetTop - 180 &&
        activeSection !== 'hero'
      ) {
        setActiveSection('hero');
      } else if (
        scrollPosition >= aboutSection.offsetTop - 180 &&
        scrollPosition < portfolioSection.offsetTop - 180 &&
        activeSection !== 'about'
      ) {
        setActiveSection('about');
      } else if (
        scrollPosition >= portfolioSection.offsetTop - 180 &&
        scrollPosition < contactSection.offsetTop - 180 &&
        activeSection !== 'portfolio'
      ) {
        setActiveSection('portfolio');
      } else if (
        scrollPosition >= contactSection.offsetTop - 180 &&
        activeSection !== 'contact'
      ) {
        setActiveSection('contact');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <header className="sticky-top">
      <nav role="navigation" className="navbar navbar-expand-lg navbar-light py-3" id="header">
        <div className="container">
          <a href={CV} target="_blank" rel="noopener noreferrer" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">Diego Insaurralde</span>
            <span className="grey-color">/&gt;</span>
          </a>
          {/* <button id="theme-btn" className="align-self-center ms-auto me-3">
            <i className="bi bi-moon-fill"></i>
            <i className="bi bi-brightness-high-fill"></i>
          </button> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#toggleMobileMenu"
            aria-controls="toggleMobileMenu"
            aria-expanded="false"
            aria-table="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="toggleMobileMenu">
            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item">
                <a href="#hero" className={`nav-link ${activeSection === 'hero' && 'active'}`}>Home</a>
              </li>
              <li className="nav-item">
                <a href="#about" className={`nav-link ${activeSection === 'about' && 'active'}`}>About</a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className={`nav-link ${activeSection === 'portfolio' && 'active'}`}>Projects</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className={`nav-link ${activeSection === 'contact' && 'active'}`}>Contact</a>
              </li>
              <li className="nav-item">
                <a href={CV} download="CV-DIEGO-INSAURRALDE.pdf" onClick={(e) => { e.preventDefault(); downloadCV(); }}  title="Download my CV" className="nav-link">CV <i className="bi bi-file-arrow-down"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar