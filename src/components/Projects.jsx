import { Link } from 'react-router-dom'
import { projects } from '../data/site'
import Icon from './Icon'
import Wave from './Wave'
import './Projects.css'

export default function Projects() {
  return (
    <section
      className="section section--dark has-wave projects"
      id="realisations"
    >
      <div className="projects__glow" aria-hidden="true" />

      <div className="container">
        <div className="section-head projects__head reveal">
          <div>
            <span className="eyebrow">Réalisations</span>
            <h2>
              Des applications livrées,{' '}
              <span className="accent">pas des promesses</span>
            </h2>
            <p>
              Des applications conçues, développées et mises en production
              pour nos clients — du premier écran jusqu’à la mise en ligne.
            </p>
          </div>
          <Link to="/realisations" className="btn btn--light projects__head-cta">
            Voir toutes nos réalisations
            <Icon name="arrowRight" />
          </Link>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/realisations#${project.slug}`}
              className="pcard reveal"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <span className="pcard__media">
                <img
                  src={project.image}
                  alt={`Écrans de l’application ${project.name}`}
                  width="900"
                  height="700"
                  loading="lazy"
                  decoding="async"
                />
                <span className="pcard__platform">
                  <Icon name="mobile" size={14} />
                  {project.platform}
                </span>
                <span className="pcard__overlay">
                  <span className="pcard__overlay-btn">
                    Voir le projet
                    <Icon name="arrowRight" size={17} />
                  </span>
                </span>
              </span>

              <span className="pcard__label">{project.tag}</span>
              <h3>{project.name}</h3>
              <p>{project.short}</p>
              <span className="pcard__cta">
                Voir le projet
                <Icon name="arrowRight" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>

      <Wave fill="var(--surface)" variant={2} />
    </section>
  )
}
