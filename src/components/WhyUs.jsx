import { advantages } from '../data/site'
import Icon from './Icon'
import './WhyUs.css'

export default function WhyUs() {
  return (
    <section className="section why">
      <div className="container why__inner">
        <div className="why__intro reveal">
          <span className="eyebrow">Pourquoi Kodafrik</span>
          <h2>
            Un prestataire technique <br />
            <span className="accent">sur qui compter</span>
          </h2>
          <p>
            Trop d’entreprises ont vécu le projet qui traîne, le prestataire
            injoignable ou le code que personne ne peut reprendre. Nous
            travaillons exactement à l’inverse.
          </p>
          <a href="#contact" className="btn btn--primary why__cta">
            Demander un devis gratuit
            <Icon name="arrowRight" />
          </a>
        </div>

        <div className="why__grid">
          {advantages.map((advantage, index) => (
            <article
              key={advantage.title}
              className="why__card reveal"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <span className="why__icon">
                <Icon name={advantage.icon} size={22} />
              </span>
              <h3>{advantage.title}</h3>
              <p>{advantage.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
