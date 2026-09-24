import { useEffect } from 'react'

// Ajoute la classe `is-visible` aux éléments `.reveal` dès qu'ils entrent
// dans le viewport. Un seul observer pour toute la page.
export default function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal')

    // Pas d'IntersectionObserver (vieux navigateur) : on affiche tout.
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
