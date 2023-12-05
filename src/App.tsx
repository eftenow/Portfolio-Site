import About from "./components/About/About"
import { Home } from "./components/Home/Home"
import { Navigation } from "./components/Navigation/Navigation"

function App() {

  return (
      <div className="main-wrapper">
        <Navigation />        
        <main className="main-section">
          <Home />
          <About />
        </main>
      </div>
  )
}

export default App
