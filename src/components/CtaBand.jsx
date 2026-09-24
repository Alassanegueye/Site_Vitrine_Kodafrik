import { company } from '../data/site'
import Icon from './Icon'
import './CtaBand.css'

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner reveal">
        <div>
          <h2>
            Votre projet mérite mieux qu’un fichier Excel et des messages
            WhatsApp.
          </h2>
          <p>
            Dites-nous ce que vous voulez construire. On vous répond avec une
            estimation claire, un planning réaliste et une équipe prête à
            démarrer.
          </p>
        </div>
        <div className="cta-band__actions">
          <a href="#contact" className="btn btn--light">
            Demander un devis gratuit
            <Icon name="arrowRight" />
          </a>
          <a href={`tel:${company.phoneHref}`} className="btn btn--ghost-light">
            <Icon name="phone" />
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
