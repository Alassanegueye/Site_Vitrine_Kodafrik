import { services } from '../data/site'
import Icon from './Icon'
import './Services.css'

// Halo qui suit le pointeur : on écrit deux variables CSS sur la carte
// survolée, sans passer par un état React (aucun rendu déclenché).
const followPointer = (event) => {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--px', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--py', `${event.clientY - rect.top}px`)
}

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Nos services</span>
          <h2>
            Tout ce qu’il faut pour{' '}
            <span className="accent">digitaliser votre activité</span>
          </h2>
          <p>
            Une seule équipe pour concevoir, développer et maintenir vos outils —
            du site vitrine au logiciel métier qui fait tourner votre entreprise.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="service reveal"
              style={{ transitionDelay: `${index * 70}ms` }}
              onMouseMove={followPointer}
            >
              <span className="service__icon">
                <Icon name={service.icon} size={26} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul className="service__items">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#contact" className="service__link">
                Discuter de ce besoin
                <Icon name="arrowRight" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
