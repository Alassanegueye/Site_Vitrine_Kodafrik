import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Contact from '../components/Contact'
import CtaBand from '../components/CtaBand'
import Expertise from '../components/Expertise'
import Faq from '../components/Faq'
import Hero from '../components/Hero'
import Process from '../components/Process'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Trust from '../components/Trust'
import WhyUs from '../components/WhyUs'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Home() {
  const { state } = useLocation()
  useScrollReveal()

  // Retour depuis une autre page via un lien d'ancre : on rejoint la section
  // demandée une fois la page montée.
  useEffect(() => {
    if (!state?.scrollTo) return
    document.getElementById(state.scrollTo)?.scrollIntoView({ behavior: 'auto' })
  }, [state])

  return (
    <>
      <Hero />
      <Services />
      <Expertise />
      <Process />
      <Projects />
      <WhyUs />
      <CtaBand />
      <Faq />
      <Trust />
      <Contact />
    </>
  )
}
