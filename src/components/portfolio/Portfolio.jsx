import './Portfolio.css'
import { portfolioImage01, portfolioImage02, portfolioImage03, portfolioImage04 } from '../../assets/index'
import { astro, audition, bootstrap, csharp, css, express, git, github, html, illustrator, javascript, materialui, mercadopago, next, node, office, photoshop, postgresql, react, redux, sass, sequelize, sqlite, tailwind, typescript, vite } from '../../assets/index'

function Portfolio() {
  return (
    <section id="portfolio" className="">
      <div className="container">
        <h1 className="mb-md-5">PROJECTS</h1>
        <div className="row row-cols-1 row-cols-lg-2 g-3">
          <div>
            <div className="project" data-aos="flip-up" data-aos-duration="1000" data-aos-once="true" >
              <img src={portfolioImage01} alt="Rick and Morty" />
              <div className="details">
                <div className="position-absolute top-50 start-50 translate-middle bg-accen w-100" >
                  <p className="text-center">
                    App using The Rick and Morty API to explore TV series characters.
                  </p>
                  <div className="links_project">
                    <a href="https://github.com/Insaurralde38/PI-Rick-and-Morty" target="_blank" rel="noopener noreferrer" title="Source Code" >
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://rick-and-morty-insa.vercel.app/" target="_blank" rel="noopener noreferrer" title="Live Demo" >
                      <i className="bi bi-eye-fill"></i>
                    </a>
                  </div>
                </div>
                <div className="technology">
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <img src={react} alt="react" title="React" />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img src={node} alt="node" title="Node.js" />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img src={postgresql} alt="postgresql" title="PostgreSQL" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="project" data-aos="flip-up" data-aos-duration="1000" data-aos-once="true" >
              <img src={portfolioImage02} alt="Pokémon" />
              <div className="details">
                <div className="position-absolute top-50 start-50 translate-middle bg-accen w-100" >
                  <p className="text-center">
                  App using PokéAPI to view, search, filter, and create Pokémons.
                  </p>
                  <div className="links_project">
                    <a href="https://github.com/Insaurralde38/PI-Pokemon" target="_blank" rel="noopener noreferrer" title="Source Code" >
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://pokeapi-insa.vercel.app/" target="_blank" rel="noopener noreferrer" title="Live Demo" >
                      <i className="bi bi-eye-fill"></i>
                    </a>
                  </div>
                </div>
                <div className="technology">
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <img src={react} alt="react" title="React" />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img src={node} alt="node" title="Node.js" />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img src={postgresql} alt="postgresql" title="PostgreSQL" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="project" data-aos="flip-up" data-aos-duration="1000" data-aos-once="true" >
              <img src={portfolioImage03} alt="space tourism" />
              <div className="details">
                <div className="position-absolute top-50 start-50 translate-middle bg-accen w-100" >
                  <p className="text-center">
                    E-commerce app for enthusiasts, gamers, and professionals.
                  </p>
                  <div className="links_project">
                    <a href="https://github.com/Insaurralde38/PF-Liliana-GameStore" target="_blank" rel="noopener noreferrer" title="Source Code" >
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://lilianagamesstore.onrender.com/" target="_blank" rel="noopener noreferrer" title="Live Demo" >
                      <i className="bi bi-eye-fill"></i>
                    </a>
                  </div>
                </div>
                <div className="technology">
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <img src={react} alt="react" title="React" />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img src={bootstrap} alt="bootstrap" title="Bootstrap" />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img src={node} alt="node" title="Node.js" />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img src={postgresql} alt="postgresql" title="PostgreSQL" />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img src={mercadopago} alt="mercadopago" title="Mercado Pago" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="project" data-aos="flip-up" data-aos-duration="1000" data-aos-once="true" >
              <img src={portfolioImage04} alt="quiz app" />
              <div className="details">
                <div className="position-absolute top-50 start-50 translate-middle bg-accen w-100" >
                  <p className="text-center">
                    Fighting game using JavaScript and HTML canvas.
                  </p>
                  <div className="links_project">
                    <a href="https://github.com/Insaurralde38/fighting-game" target="_blank" rel="noopener noreferrer" title="Source Code" >
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://fighting-game-insa.vercel.app/" target="_blank" rel="noopener noreferrer" title="Live Demo" >
                      <i className="bi bi-eye-fill"></i>
                    </a>
                  </div>
                </div>
                <div className="technology">
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <img src={javascript} alt="javascript" title="JavaScript" />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img src={html} alt="html" title="HTML5" />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img src={css} alt="css" title="CSS3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-4 d-flex justify-content-center">
          <a href="https://github.com/Insaurralde38?tab=repositories" target="_blank" className="btn btn-lg rounded-pill custom-btn" >
            See more <i className="bi bi-github fs-4"></i>
          </a>
        </p>
      </div>
    </section>
  )
}

export default Portfolio