import { projects } from '../data/site'
import Icon from './Icon'
import './Trust.css'

// Arguments courts affichés sous les logos clients.
const proofs = [
  { icon: 'check', text: 'Applications livrées et en production' },
  { icon: 'users', text: 'Un interlocuteur unique du début à la fin' },
  { icon: 'support', text: 'Suivi assuré après le lancement' },
]

export default function Trust() {
  return (
    <section className="section trust">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Ils nous font confiance</span>
          <h2>
            Rejoignez nos <span className="accent">clients satisfaits</span>
          </h2>
          <p>
            Des entreprises nous ont confié leur produit et l’exploitent au
            quotidien. La prochaine, c’est peut-être la vôtre.
          </p>
        </div>

        <ul className="trust__logos reveal">
          {projects.map((project) => (
            <li key={project.slug}>
              <img
                src={project.logo}
                alt=""
                width={project.logoWidth}
                height={project.logoHeight}
                loading="lazy"
              />
              <span>{project.name}</span>
            </li>
          ))}
        </ul>

        <ul className="trust__proofs reveal">
          {proofs.map((proof) => (
            <li key={proof.text}>
              <span className="trust__proof-icon">
                <Icon name={proof.icon} size={18} />
              </span>
              {proof.text}
            </li>
          ))}
        </ul>

        <div className="trust__cta reveal">
          <a href="#contact" className="btn btn--primary">
            Démarrer mon projet
            <Icon name="arrowRight" />
          </a>
        </div>
      </div>
    </section>
  )
}
