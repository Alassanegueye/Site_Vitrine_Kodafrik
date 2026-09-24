import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'
import Icon from '../components/Icon'
import { projects } from '../data/site'
import useScrollReveal from '../hooks/useScrollReveal'
import './Realisations.css'

const TITLE = 'Nos réalisations — Kodafrik'
const DESCRIPTION =
  'Les applications mobiles conçues, développées et mises en production par Kodafrik : le besoin de départ, ce que nous avons livré et les technologies employées.'

export default function Realisations() {
  useScrollReveal()

  // Page dédiée : on adapte le titre et la description du document, puis on
  // remet les valeurs de l'accueil en quittant la page.
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]')
    const previousTitle = document.title
    const previousDescription = meta?.content

    document.title = TITLE
    if (meta) meta.content = DESCRIPTION

    return () => {
      document.title = previousTitle
      if (meta && previousDescription) meta.content = previousDescription
    }
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link to="/" className="page-hero__back">
            <Icon name="arrowRight" size={16} />
            Retour à l’accueil
          </Link>
          <span className="eyebrow">Réalisations</span>
          <h1>
            Les applications que nous avons{' '}
            <span className="accent">conçues et mises en production</span>
          </h1>
          <p>
            Pour chaque projet : le besoin de départ, ce que nous avons livré et
            les technologies employées. Les écrans présentés sont ceux des
            applications réellement déployées.
          </p>
        </div>
      </section>

      {projects.map((project, index) => (
        <section
          key={project.slug}
          id={project.slug}
          className={`section case${index % 2 === 1 ? ' section--alt' : ''}`}
        >
          <div className="container">
            <div className="case__head reveal">
              <span className="case__logo">
                <img
                  src={project.logo}
                  alt=""
                  width={project.logoWidth}
                  height={project.logoHeight}
                  loading="lazy"
                />
              </span>
              <div>
                <span className="case__tag">{project.tag}</span>
                <h2>{project.name}</h2>
                <p className="case__tagline">{project.tagline}</p>
              </div>
            </div>

            <figure className="case__visual reveal">
              <img
                src={project.presentation}
                alt={`Présentation de l’application ${project.name}`}
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="case__grid reveal">
              <div className="case__block">
                <h3>Le besoin</h3>
                <p>{project.challenge}</p>
              </div>

              <div className="case__block">
                <h3>Ce que nous avons livré</h3>
                <ul className="case__list">
                  {project.delivered.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={15} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="case__block">
                <h3>Fonctionnalités clés</h3>
                <ul className="case__list">
                  {project.features.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={15} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="case__block">
                <h3>Technologies</h3>
                <ul className="case__tech">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CtaBand />

      <section className="section realisations__outro">
        <div className="container realisations__outro-inner reveal">
          <h2>
            Votre application peut être la{' '}
            <span className="accent">prochaine</span>
          </h2>
          <p>
            Décrivez-nous votre idée : nous revenons vers vous avec un périmètre
            écrit, un budget et un calendrier.
          </p>
          <Link
            to="/"
            state={{ scrollTo: 'contact' }}
            className="btn btn--primary"
          >
            Démarrer mon projet
            <Icon name="arrowRight" />
          </Link>
        </div>
      </section>
    </>
  )
}
