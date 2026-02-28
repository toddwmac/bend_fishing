import { useState, useMemo } from 'react'
import { useData } from '../hooks/useData'
import type { Species } from '../types'

export default function Species() {
  const { species, loading, error } = useData()
  const [search, setSearch] = useState('')
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null)

  const filteredSpecies = useMemo(() => {
    return species.filter(s =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.scientificName.toLowerCase().includes(search.toLowerCase())
    )
  }, [species, search])

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">Error: {error}</div>

  if (selectedSpecies) {
    return (
      <div className="detail-view">
        <button className="btn btn-secondary" onClick={() => setSelectedSpecies(null)}>
          ← Back to List
        </button>

        <div className="detail-header">
          <h2 className="page-title">{selectedSpecies.name}</h2>
          {selectedSpecies.protected && <span className="tag tag-protected">Protected</span>}
        </div>

        <p className="scientific-name"><em>{selectedSpecies.scientificName}</em></p>

        <div className="detail-content">
          <section className="detail-section">
            <h3>About</h3>
            <p>{selectedSpecies.description}</p>
          </section>

          <section className="detail-section">
            <h3>Size & Weight</h3>
            <p><strong>Size Range:</strong> {selectedSpecies.sizeRange}</p>
            <p><strong>Typical Weight:</strong> {selectedSpecies.weight}</p>
          </section>

          <section className="detail-section">
            <h3>Difficulty</h3>
            <p className={`difficulty difficulty-${selectedSpecies.difficulty}`}>
              {selectedSpecies.difficulty.charAt(0).toUpperCase() + selectedSpecies.difficulty.slice(1)}
            </p>
          </section>

          <section className="detail-section">
            <h3>Best Months</h3>
            <p>{selectedSpecies.bestMonths.join(', ')}</p>
          </section>

          <section className="detail-section">
            <h3>Recommended Techniques</h3>
            <div className="tags">
              {selectedSpecies.techniques.map(t => (
                <span key={t} className="tag">{t.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
              ))}
            </div>
          </section>

          {selectedSpecies.protected && (
            <section className="detail-section important">
              <h3>⚠️ Protected Status</h3>
              <p>This species is protected and must be released immediately if caught. Please familiarize
              yourself with identification to avoid accidental catch of protected species.</p>
            </section>
          )}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2 className="page-title">Species Guide</h2>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search species..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid">
        {filteredSpecies.map(s => (
          <div key={s.id} className="card" onClick={() => setSelectedSpecies(s)}>
            <div className="card-header">
              <h3>{s.name}</h3>
              {s.protected && <span className="tag tag-protected">Protected</span>}
            </div>
            <p className="scientific-name"><em>{s.scientificName}</em></p>
            <p className="size-info">{s.sizeRange} • {s.weight}</p>
            <div className="difficulty-indicator">
              <span className={`difficulty difficulty-${s.difficulty}`}>
                {s.difficulty}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .detail-view {
          max-width: 800px;
        }

        .detail-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .scientific-name {
          color: var(--color-text-light);
          margin-bottom: 2rem;
          font-size: 1.125rem;
        }

        .detail-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .detail-section {
          padding: 1.5rem;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius);
        }

        .detail-section h3 {
          margin-bottom: 1rem;
          color: var(--color-primary);
        }

        .detail-section.important {
          border-color: #fca5a5;
          background: #fef2f2;
        }

        .detail-section.important h3 {
          color: #dc2626;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .card-header h3 {
          margin-bottom: 0;
        }

        .size-info {
          color: var(--color-text-light);
          font-size: 0.875rem;
          margin: 0.5rem 0;
        }

        .difficulty-indicator {
          margin-top: 1rem;
        }

        .difficulty {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .difficulty-easy {
          background: #dcfce7;
          color: #166534;
        }

        .difficulty-moderate {
          background: #fef3c7;
          color: #92400e;
        }

        .difficulty-difficult {
          background: #fee2e2;
          color: #991b1b;
        }

        .card {
          cursor: pointer;
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
