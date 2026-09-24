import { useEffect, useState } from 'react'

// Renvoie l'id de la section actuellement visible, pour surligner le lien
// correspondant dans la navigation.
export default function useScrollSpy(ids, offset = 140) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => {
      let current = ''
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) current = id
      })
      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, offset])

  return activeId
}
