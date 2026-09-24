import { process } from '../data/site'
import Icon from './Icon'
import './Process.css'

export default function Process() {
  return (
    <section className="section process" id="methode">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Notre méthode</span>
          <h2>
            Un projet <span className="accent">sans mauvaise surprise</span>
          </h2>
          <p>
            Cinq étapes claires, des points d’avancement réguliers et un livrable
            visible à chaque jalon. Vous savez toujours où en est votre projet.
          </p>
        </div>

        <ol className="process__list">
          {process.map((item, index) => (
            <li
              key={item.step}
              className="process__item reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="process__step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>

        <div className="process__cta reveal">
          <Icon name="sparkle" size={20} />
          <p>
            Premier échange gratuit et sans engagement — repartez au minimum avec
            un avis technique honnête sur votre projet.
          </p>
          <a href="#contact" className="btn btn--primary">
            Réserver mon échange
            <Icon name="arrowRight" />
          </a>
        </div>
      </div>
    </section>
  )
}
