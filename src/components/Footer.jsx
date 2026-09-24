import { Link } from 'react-router-dom'
import pictogramme from '../assets/photo/pictogramme-web.png'
import { company, navLinks, services } from '../data/site'
import Icon from './Icon'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          {/* Sur fond sombre, le logo fourni (fond blanc) est remplacé par
              le pictogramme sur pastille + le nom en texte. */}
          <Link to="/" className="footer__logo" aria-label="Kodafrik — accueil">
            <img src={pictogramme} alt="" width="44" height="44" />
            <span>
              Koda<i>frik</i>
            </span>
          </Link>
          <p>
            Agence de solutions informatiques : applications web, applications
            mobiles et logiciels métier sur mesure. Nous construisons le projet
            de nos clients, du cadrage à la mise en production.
          </p>
          {/* Seuls les comptes réellement renseignés sont affichés. */}
          <ul className="footer__socials">
            {company.socials
              .filter((social) => social.href)
              .map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <nav className="footer__col" aria-label="Services">
          <h3>Services</h3>
          <ul>
            {services.map((service) => (
              <li key={service.title}>
                <a href="#services">{service.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Navigation du site">
          <h3>Le site</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <Link to="/realisations">Toutes nos réalisations</Link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="footer__col">
          <h3>Contact</h3>
          <ul className="footer__contact">
            <li>
              <Icon name="mail" size={16} />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <Icon name="phone" size={16} />
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            </li>
            <li>
              <Icon name="pin" size={16} />
              <span>{company.address}</span>
            </li>
            <li>
              <Icon name="clock" size={16} />
              <span>{company.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {company.name}. Tous droits réservés.
        </p>
        <div className="footer__legal">
          {/* Mentions légales et politique de confidentialité : à ajouter en
              pages dédiées une fois les informations légales fournies
              (raison sociale, RCCM/NINEA, siège, hébergeur). */}
          <a href="#top" className="footer__top">
            Haut de page
            <Icon name="arrowUp" size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
