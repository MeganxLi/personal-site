import { ChevronUp } from 'lucide-react'

import AboutLink from './components/AboutLink'
import About from './page/About'
import Home from './page/Home'
import HorseDrawn from './page/HorseDrawn'
import Portfolio from './page/Portfolio'
import Skills from './page/Skills'
import Works from './page/Works'

function App() {
  return (
    <>
      <Home />
      <About />
      <HorseDrawn />
      <Skills />
      <Works />
      <Portfolio />
      <footer>
        <div className="appear">
          <span>Copyright © MEI YI LEE</span>
          <AboutLink />
          <button type="button" className="footer-home">
            <a href="#About">
              Home
              <ChevronUp size={20} />
            </a>
          </button>
        </div>
      </footer>
    </>
  )
}

export default App
