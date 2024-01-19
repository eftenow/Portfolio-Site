import About from "./components/About/About"
import { Home } from "./components/Home/Home"
import { Navigation } from "./components/Navigation/Navigation"
import Services from "./components/Services/Services"
import Qualifications from "./components/Qualifications/Qualifications"
import Tools from "./components/Tools/Tools"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import useCurrentSection from "./hooks/useCurrentSection"
import GetToTopButton from "./components/BackToTopBtn/BackToTopBtn"


function App() {
  const currentSection = useCurrentSection(['home', 'about', 'services', 'experience', 'tools', 'portfolio', 'contact']);

  return (
      <div className="main-wrapper">
        <Navigation currentSection={currentSection} />
        <main className="main-section">
          <Home />
          <About />
          <Services />
          <Qualifications />
          <Tools />
          <Portfolio />
          <Contact />
          <Footer />
          <GetToTopButton />
        </main>
      </div>
  )
}

export default App
