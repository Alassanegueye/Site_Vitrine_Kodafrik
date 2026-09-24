import { useState } from 'react'
import { company, faq } from '../data/site'
import Icon from './Icon'
import './Faq.css'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section section--alt faq" id="faq">
      <div className="container faq__inner">
        <div className="faq__intro reveal">
          <span className="eyebrow">Questions fréquentes</span>
          <h2>
            Les réponses <span className="accent">avant de nous écrire</span>
          </h2>
          <p>
            Une question qui n’est pas dans la liste ? Écrivez-nous, nous
            répondons sous 24h ouvrées.
          </p>
          <a href={`mailto:${company.email}`} className="faq__mail">
            <Icon name="mail" size={18} />
            {company.email}
          </a>
        </div>

        <div className="faq__list reveal">
          {faq.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.q}
                className={`faq__item${isOpen ? ' is-open' : ''}`}
              >
                <h3>
                  <button
                    type="button"
                    className="faq__question"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{item.q}</span>
                    <Icon name="plus" size={20} className="faq__toggle" />
                  </button>
                </h3>
                {/* Le contenu reste dans le DOM pour animer l'ouverture ;
                    `visibility: hidden` (CSS) le retire des lecteurs d'écran. */}
                <div id={`faq-answer-${index}`} className="faq__answer">
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
