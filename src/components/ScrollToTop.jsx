import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Changement de page : on repart du haut, sauf si le lien vise une section
// précise — par ancre (#projet) ou par l'état de navigation.
export default function ScrollToTop() {
  const { pathname, hash, state } = useLocation()

  useEffect(() => {
    if (state?.scrollTo) return

    if (hash) {
      // La cible n'existe qu'après le rendu de la page fraîchement montée.
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash, state])

  return null
}
