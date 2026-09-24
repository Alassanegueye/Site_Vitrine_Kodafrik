import heroImage from '../assets/photo/hero-web.jpg'
import { hero, stats } from '../data/site'
import Counter from './Counter'
import Icon from './Icon'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>
            Nous transformons vos idées en{' '}
            <span className="text-gradient">produits digitaux</span> qui tournent.
          </h1>
          <p className="hero__subtitle">{hero.subtitle}</p>

          <div className="btn-row hero__actions">
            <a href={hero.primaryCta.href} className="btn btn--primary">
              {hero.primaryCta.label}
              <Icon name="arrowRight" />
            </a>
            <a href={hero.secondaryCta.href} className="btn btn--ghost">
              {hero.secondaryCta.label}
            </a>
          </div>

          <ul className="hero__highlights">
            {hero.highlights.map((item) => (
              <li key={item}>
                <Icon name="check" size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <img
            className="hero__image"
            src={heroImage}
            alt="Applications web et mobiles conçues par Kodafrik, affichées sur tablette et smartphones"
            width="1100"
            height="850"
            fetchPriority="high"
          />

          <div className="hero__badge" aria-hidden="true">
            <span className="hero__badge-icon">
              <Icon name="check" size={16} />
            </span>
            <div>
              <strong>Mise en production</strong>
              <small>web · iOS · Android</small>
            </div>
          </div>

          <div className="hero__badge hero__badge--alt" aria-hidden="true">
            <span className="hero__badge-icon hero__badge-icon--blue">
              <Icon name="bolt" size={16} />
            </span>
            <div>
              <strong>Devis sous 48h</strong>
              <small>échange gratuit</small>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="hero__stats">
          {stats.map((stat) => (
            <li key={stat.label}>
              <strong>
                {stat.to ? (
                  <Counter
                    to={stat.to}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                ) : (
                  stat.value
                )}
              </strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
