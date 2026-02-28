import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <h2 className="page-title">Welcome to Bend Fishing Guide</h2>

      <div className="hero">
        <p className="hero-text">
          Your complete guide to fishing in Bend, Oregon and the surrounding Central Oregon area.
          Explore pristine rivers, high mountain lakes, and reservoirs teeming with trout,
          salmon, bass, and more.
        </p>
      </div>

      <div className="grid">
        <Link to="/water-bodies" className="card">
          <div className="card-icon">🗺️</div>
          <h3>Water Bodies</h3>
          <p>Explore fishing locations including the Deschutes River, Cascade Lakes, and more.</p>
        </Link>

        <Link to="/species" className="card">
          <div className="card-icon">🐟</div>
          <h3>Species Guide</h3>
          <p>Learn about trout, salmon, bass and other fish species found in Central Oregon.</p>
        </Link>

        <Link to="/seasons" className="card">
          <div className="card-icon">📅</div>
          <h3>Seasonal Calendar</h3>
          <p>Find the best times to fish, insect hatches, and seasonal fishing patterns.</p>
        </Link>

        <Link to="/planner" className="card">
          <div className="card-icon">🎣</div>
          <h3>Trip Planner</h3>
          <p>Plan your fishing trip and save your favorite locations and species.</p>
        </Link>
      </div>

      <div className="info-section">
        <h3>Why Fish Bend, Oregon?</h3>
        <ul className="info-list">
          <li>🏔️ <strong>Blue Ribbon Waters:</strong> The Deschutes River is world-renowned for wild redband rainbow trout</li>
          <li>🏞️ <strong>Diverse Fisheries:</strong> From spring creeks to high mountain lakes to large reservoirs</li>
          <li>🎯 <strong>Year-Round Fishing:</strong> Something to catch in every season</li>
          <li>🌿 <strong>Beautiful Scenery:</strong> Fish against the backdrop of the Cascade Mountains</li>
        </ul>
      </div>

      <style>{`
        .hero {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          color: white;
          padding: 2rem;
          border-radius: 0.5rem;
          margin-bottom: 2rem;
        }

        .hero-text {
          font-size: 1.125rem;
          line-height: 1.75;
        }

        .card {
          cursor: pointer;
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }

        .card h3 {
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }

        .card:hover h3 {
          color: var(--color-primary-dark);
        }

        .info-section {
          margin-top: 3rem;
          padding: 2rem;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 0.5rem;
        }

        .info-section h3 {
          margin-bottom: 1rem;
          color: var(--color-primary);
        }

        .info-list {
          list-style: none;
        }

        .info-list li {
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--color-border);
        }

        .info-list li:last-child {
          border-bottom: none;
        }
      `}</style>
    </div>
  )
}
