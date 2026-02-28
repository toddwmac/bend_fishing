import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import WaterBodies from './pages/WaterBodies'
import Species from './pages/Species'
import Seasons from './pages/Seasons'
import Planner from './pages/Planner'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <h1>🐟 Bend Fishing Guide</h1>
          <nav className="app-nav">
            <Link to="/">Home</Link>
            <Link to="/water-bodies">Water Bodies</Link>
            <Link to="/species">Species</Link>
            <Link to="/seasons">Seasons</Link>
            <Link to="/planner">Planner</Link>
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
