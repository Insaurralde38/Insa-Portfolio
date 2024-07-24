import './About.css'
import { astro, audition, bootstrap, csharp, css, express, git, github, gitGithub, html, illustrator, javascript, materialui, next, node, office, photoshop, postgresql, react, redux, sass, sequelize, sqlite, tailwind, typescript, vite } from '../../assets/index'

function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-grid align-content-center">
            <section id="about_section" className="my-5 my-lg-0" data-aos="fade-right" data-aos-mirror="true" data-aos-duration="1500" data-aos-once="true" >
              <h1>ABOUT ME</h1>
                <p>
                  I'm a fullstack developer based in Buenos Aires who is committed
                  to using technology to benefit businesses. Finding innovative
                  solutions to problems is a great challenge for me, and working
                  with teams to produce excellent results is something I enjoy doing.<br />
                </p>
                <p>
                  In order to offer my clients the best solutions, I am committed
                  to staying current with the most recent technologies and trends.
                </p>
                <p>
                  When designing and developing my projects, I pay close attention
                  to every last detail. My ultimate objective is to develop software
                  that helps the client achieve their goals while being user-friendly.
                </p>
            </section>
          </div>
          <div className="col-12 col-lg-6 d-grid align-content-center">
            <section id="skills_section" className="mb-5 mb-lg-0" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" >
              <h1>SKILLS</h1>
              <div className="row">
                <div className="col-6 col-md-4">
                  <img src={ javascript } alt="javascript" />
                  <span>JavaScript</span>
                </div>
                <div className="col-6 col-md-4">
                  <img src={ html } alt="html5" />
                  <span>HTML5</span>
                </div>
                <div className="col-6 col-md-4">
                  <img src={ css } alt="css3" />
                  <span>CSS3</span>
                </div>
                <div className="col-6 col-md-4">
                  <img src={ typescript } alt="typescript" />
                  <span>TypeScript</span>
                </div>
                <div className="col-6 col-md-4">
                  <img src={ react } alt="react" />
                  <div style={{display: 'grid'}}>
                    <span>React</span>
                    <span>React Native</span>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <img src={ tailwind } alt="tailwind" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="col-6 col-md-4">
                  <img src={ node } alt="node" />
                  <span>Node</span>
                </div>
                <div className="col-6 col-md-4">
                  <img src={ redux } alt="redux" />
                  <span>Redux</span>
                </div>
                <div className="col-6 col-md-4">
                  <img src={ bootstrap } alt="bootstrap" />
                  <span>Bootstrap</span>
                </div>
                <div className="col-6 col-md-4">
                  <img src={ sequelize } alt="sequelize" />
                  <span>Sequelize</span>
                </div>
                <div className="col-6 col-md-4">
                  <img src={ express } alt="express" />
                  <span>express</span>
                </div>
                <div className="col-6 col-md-4">
                  <img src={ postgresql } alt="postgresql" />
                  <span>PostgreSQL</span>
                </div>
                <div className="col-6 col-md-4">
                  <img src={ gitGithub } alt="git-github" />
                  <div style={{display: 'grid'}}>
                    <span>Git</span>
                    <span>Github</span>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <img src={ photoshop } alt="photoshop" />
                  <span>Photoshop</span>
                </div>
                <div className="col-6 col-md-4">
                  <img src={ audition } alt="audition" />
                  <span>Audition</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About