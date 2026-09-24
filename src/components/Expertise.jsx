import { expertise } from '../data/site'
import Icon from './Icon'
import Wave from './Wave'
import './Expertise.css'

export default function Expertise() {
  return (
    <section
      className="section section--dark has-wave expertise"
      id="expertise"
    >
      <div className="expertise__glow" aria-hidden="true" />

      <div className="container expertise__inner">
        <div className="expertise__content reveal">
          <span className="eyebrow">{expertise.eyebrow}</span>
          <h2>
            Vous avez le projet.{' '}
            <span className="accent">Nous avons l’équipe</span> pour le
            construire.
          </h2>
          <p className="expertise__lead">{expertise.text}</p>

          <ul className="expertise__bullets">
            {expertise.bullets.map((bullet) => (
              <li key={bullet.title}>
                <span className="expertise__check">
                  <Icon name="check" size={15} />
                </span>
                <div>
                  <h3>{bullet.title}</h3>
                  <p>{bullet.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn--light expertise__cta">
            Parler de mon projet
            <Icon name="arrowRight" />
          </a>
        </div>

        <div className="expertise__visual reveal" aria-hidden="true">
          <div className="editor">
            <div className="editor__tabs">
              <span className="editor__tab is-active">projet-client.jsx</span>
              <span className="editor__tab">api.js</span>
            </div>
            <pre className="editor__code">
              <code>
                <span className="ln">
                  <i className="c-key">const</i> <i className="c-fn">projet</i> ={' '}
                  {'{'}
                </span>
                <span className="ln">
                  {'  '}client<i className="c-punct">:</i>{' '}
                  <i className="c-str">'votre entreprise'</i>,
                </span>
                <span className="ln">
                  {'  '}besoin<i className="c-punct">:</i>{' '}
                  <i className="c-str">'web · mobile · sur mesure'</i>,
                </span>
                <span className="ln">
                  {'  '}delai<i className="c-punct">:</i>{' '}
                  <i className="c-str">'6 semaines'</i>,
                </span>
                <span className="ln">
                  {'  '}statut<i className="c-punct">:</i>{' '}
                  <i className="c-str">'en production'</i>,
                </span>
                <span className="ln">{'}'}</span>
                <span className="ln ln--blank" />
                <span className="ln">
                  <i className="c-fn">kodafrik</i>
                  <i className="c-punct">.</i>
                  <i className="c-fn">livrer</i>(projet)
                  <span className="cursor" />
                </span>
              </code>
            </pre>
          </div>

          <div className="expertise__chip expertise__chip--one">
            <Icon name="bolt" size={16} />
            Livraison toutes les 2 semaines
          </div>
          <div className="expertise__chip expertise__chip--two">
            <Icon name="shield" size={16} />
            Mise en production incluse
          </div>
        </div>
      </div>

      <Wave fill="var(--surface)" variant={1} />
    </section>
  )
}
