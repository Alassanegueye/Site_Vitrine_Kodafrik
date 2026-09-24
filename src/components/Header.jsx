import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/photo/logo-web.png'
import { navLinks } from '../data/site'
import useScrollSpy from '../hooks/useScrollSpy'
import Icon from './Icon'
import './Header.css'

const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const progressRef = useRef(null)
  const activeId = useScrollSpy(sectionIds)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // Depuis une autre page, une ancre ne mène nulle part : on revient à
  // l'accueil en indiquant la section à rejoindre.
  const goToSection = (event, href) => {
    setMenuOpen(false)
    if (pathname === '/') return
    event.preventDefault()
    navigate('/', { state: { scrollTo: href.slice(1) } })
  }

  // La navbar se rétracte quand on descend et revient dès qu'on remonte.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const previous = lastScrollY.current

      setScrolled(y > 24)

      // Jauge de progression écrite directement dans le DOM : aucun rendu
      // React déclenché à chaque événement de scroll.
      const bar = progressRef.current
      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight
        bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`
      }

      // Seuil de 6px : on ignore les micro-mouvements et le rebond élastique.
      if (Math.abs(y - previous) > 6) {
        setHidden(y > previous && y > 160)
        lastScrollY.current = y
      }
    }

    // Position de départ d'abord : un rechargement en milieu de page ne doit
    // pas être interprété comme un défilement vers le bas.
    lastScrollY.current = window.scrollY
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Le menu mobile est plein écran : on bloque le défilement derrière.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <header
        className={`header${scrolled ? ' is-scrolled' : ''}${
          hidden && !menuOpen ? ' is-hidden' : ''
        }`}
      >
        <div className="container header__inner">
          <Link to="/" className="header__brand" aria-label="Kodafrik — accueil">
            <img src={logo} alt="Kodafrik" width="440" height="324" />
          </Link>

          <nav className="header__nav" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => goToSection(event, link.href)}
                className={
                  activeId === link.href.replace('#', '')
                    ? 'is-active'
                    : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <a
              href="#contact"
              className="btn btn--primary header__cta"
              onClick={(event) => goToSection(event, '#contact')}
            >
              Demander un devis
              <Icon name="arrowRight" />
            </a>
            <button
              type="button"
              className="header__burger"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <Icon name={menuOpen ? 'close' : 'menu'} />
            </button>
          </div>
        </div>

        <span className="header__progress" ref={progressRef} aria-hidden="true" />
      </header>

      {/* Hors du <header> : son `transform` deviendrait le bloc conteneur
          de ce menu en position fixed. */}
      <div
        id="menu-mobile"
        className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
        hidden={!menuOpen}
      >
        <nav aria-label="Navigation mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => goToSection(event, link.href)}
            >
              {link.label}
              <Icon name="arrowRight" size={18} />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="btn btn--primary btn--block"
          onClick={(event) => goToSection(event, '#contact')}
        >
          Demander un devis
        </a>
      </div>
    </>
  )
}
