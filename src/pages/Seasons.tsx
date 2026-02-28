import { useData } from '../hooks/useData'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December']

export default function Seasons() {
  const { seasons, loading, error } = useData()

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">Error: {error}</div>

  const getCurrentMonth = () => MONTHS[new Date().getMonth()]

  return (
    <div>
      <h2 className="page-title">Seasonal Fishing Calendar</h2>

      <div className="current-season">
        <h3>📅 Current Month: {getCurrentMonth()}</h3>
        {(() => {
          const currentSeason = seasons.find(s => s.month === getCurrentMonth())
          return currentSeason ? (
            <div className="card">
              <p><strong>Species to Target:</strong> {currentSeason.species.map(s =>
                s.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
              ).join(', ')}</p>
              <p><strong>Active Hatches:</strong> {currentSeason.hatches.join(', ')}</p>
              <p><strong>Water Conditions:</strong> {currentSeason.waterConditions}</p>
            </div>
          ) : null
        })()}
      </div>

      <div className="seasons-grid">
        {seasons.map(season => (
          <div key={season.month} className="card season-card">
            <h3>{season.month}</h3>
            <div className="season-info">
              <p className="season-description">{season.description}</p>

              <div className="season-section">
                <strong>Species:</strong>
                <div className="tags">
                  {season.species.map(s => (
                    <span key={s} className="tag">
                      {s.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  ))}
                </div>
              </div>

              <div className="season-section">
                <strong>Hatches:</strong>
                <p>{season.hatches.join(', ')}</p>
              </div>

              <div className="season-section">
                <strong>Water Conditions:</strong>
                <p>{season.waterConditions}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="info-section">
        <h3>Fishing Seasons Overview</h3>
        <div className="season-highlights">
          <div className="highlight-card">
            <h4>🌸 Spring (April-May)</h4>
            <p>Excellent dry fly fishing begins. Salmonfly hatch on the Deschutes. Waters warming and fish becoming active.</p>
          </div>
          <div className="highlight-card">
            <h4>☀️ Summer (June-August)</h4>
            <p>Peak fishing season. Focus on morning and evening. Bass fishing heats up. High mountain lakes accessible.</p>
          </div>
          <div className="highlight-card">
            <h4>🍂 Fall (September-October)</h4>
            <p>Outstanding fishing as waters cool. Steelhead runs begin. Brown trout aggressive pre-spawn.</p>
          </div>
          <div className="highlight-card">
            <h4>❄️ Winter (November-March)</h4>
            <p>Slower fishing but still productive on warmer days. Mid-day fishing best. Check seasonal regulations.</p>
          </div>
        </div>
      </div>

      <style>{`
        .current-season {
          margin-bottom: 2rem;
        }

        .current-season h3 {
          margin-bottom: 1rem;
          color: var(--color-primary);
        }

        .seasons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .season-card {
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .season-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .season-card h3 {
          color: var(--color-primary);
          margin-bottom: 1rem;
          border-bottom: 2px solid var(--color-border);
          padding-bottom: 0.5rem;
        }

        .season-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .season-description {
          color: var(--color-text);
          line-height: 1.5;
        }

        .season-section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .season-section strong {
          color: var(--color-text-light);
          font-size: 0.875rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .info-section {
          margin-top: 2rem;
          padding: 2rem;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius);
        }

        .info-section h3 {
          margin-bottom: 1.5rem;
          color: var(--color-primary);
        }

        .season-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .highlight-card {
          padding: 1rem;
          background: var(--color-background);
          border-radius: var(--radius);
        }

        .highlight-card h4 {
          margin-bottom: 0.5rem;
          color: var(--color-text);
        }

        .highlight-card p {
          font-size: 0.875rem;
          color: var(--color-text-light);
          line-height: 1.5;
        }

        .loading, .error {
          text-align: center;
          padding: 2rem;
          font-size: 1.125rem;
        }

        .error {
          color: #dc2626;
        }
      `}</style>
    </div>
  )
}
