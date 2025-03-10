import { BrowserRouter } from "react-router-dom" 
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components/components"

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
