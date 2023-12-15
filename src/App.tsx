import About from "./components/About/About"
import { Home } from "./components/Home/Home"
import { Navigation } from "./components/Navigation/Navigation"
import Services from "./components/Services/Services"
import Qualifications from "./components/Qualifications/Qualifications"
import Tools from "./components/Tools/Tools"


function App() {

  return (
      <div className="main-wrapper">
        <Navigation />        
        <main className="main-section">
          <Home />
          <About />
          <Services />
          <Qualifications />
          <Tools />
        </main>
      </div>
  )
}

export default App
