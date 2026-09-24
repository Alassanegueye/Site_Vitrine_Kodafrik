import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import FloatingContact from './components/FloatingContact'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Realisations from './pages/Realisations'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu principal
      </a>

      <ScrollToTop />
      <Header />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realisations" element={<Realisations />} />
          {/* URL inconnue : redirection vers l'accueil. Afficher l'accueil
              sans changer l'URL créerait du contenu dupliqué pour Google. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <FloatingContact />
    </>
  )
}

export default App
