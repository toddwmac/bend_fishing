import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WaterBodies from './pages/WaterBodies'
import Species from './pages/Species'
import Seasons from './pages/Seasons'
import Planner from './pages/Planner'

function App() {
  return (
    <BrowserRouter basename="/fish_agents">
      <div className="app">
        <header className="app-header">
          <h1>🐟 Bend Fishing Guide</h1>
          <nav className="app-nav">
            <a href="/fish_agents/">Home</a>
            <a href="/fish_agents/water-bodies">Water Bodies</a>
            <a href="/fish_agents/species">Species</a>
            <a href="/fish_agents/seasons">Seasons</a>
            <a href="/fish_agents/planner">Planner</a>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/water-bodies" element={<WaterBodies />} />
            <Route path="/species" element={<Species />} />
            <Route path="/seasons" element={<Seasons />} />
            <Route path="/planner" element={<Planner />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>Bend, Oregon Fishing Guide | Data for educational purposes</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
