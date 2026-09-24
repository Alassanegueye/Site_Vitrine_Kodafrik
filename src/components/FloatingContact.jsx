import { useEffect, useState } from 'react'
import { company } from '../data/site'
import Icon from './Icon'
import './FloatingContact.css'

// Bouton WhatsApp flottant : apparaît une fois le hero dépassé.
export default function FloatingContact() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      className={`floating-contact${visible ? ' is-visible' : ''}`}
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Nous écrire sur WhatsApp"
      tabIndex={visible ? 0 : -1}
    >
      <Icon name="whatsapp" size={26} />
      <span>Discutons de votre projet</span>
    </a>
  )
}
