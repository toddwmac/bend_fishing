import { useState, useMemo } from 'react'
import { useData } from '../hooks/useData'
import type { WaterBody } from '../types'

export default function WaterBodies() {
  const { waterBodies, loading, error } = useData()
  const [filter, setFilter] = useState<string>('all')
  const [search, setSearch] = useState('')
  const [selectedBody, setSelectedBody] = useState<WaterBody | null>(null)

  const filteredBodies = useMemo(() => {
    return waterBodies.filter(body => {
      const matchesFilter = filter === 'all' || body.type === filter
      const matchesSearch = body.name.toLowerCase().includes(search.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [waterBodies, filter, search])

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">Error: {error}</div>

  if (selectedBody) {
    return (
      <div className="detail-view">
        <button className="btn btn-secondary" onClick={() => setSelectedBody(null)}>
          ← Back to List
        </button>

        <div className="detail-header">
          <h2 className="page-title">{selectedBody.name}</h2>
          <span className="tag">{selectedBody.type}</span>
        </div>

        <div className="detail-content">
          <section className="detail-section">
            <h3>About</h3>
            <p>{selectedBody.description}</p>
          </section>

          <section className="detail-section">
            <h3>Species Found</h3>
            <div className="tags">
              {selectedBody.species.map(s => (
                <span key={s} className="tag">{s.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h3>Access Points</h3>
            <ul className="access-list">
              {selectedBody.accessPoints.map((ap, i) => (
                <li key={i}>
                  <strong>{ap.name}</strong> ({ap.type.replace('_', ' ')}) - {ap.description}
                </li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h3>Best Seasons</h3>
            <p>{selectedBody.bestSeasons.join(', ')}</p>
          </section>

          <section className="detail-section">
            <h3>Techniques</h3>
            <div className="tags">
              {selectedBody.techniques.map(t => (
                <span key={t} className="tag">{t.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
              ))}
            </div>
          </section>

          <section className="detail-section important">
            <h3>⚠️ Regulations</h3>
            <p>{selectedBody.regulations}</p>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2 className="page-title">Water Bodies</h2>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search water bodies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Types</option>
          <option value="river">Rivers</option>
          <option value="lake">Lakes</option>
          <option value="reservoir">Reservoirs</option>
          <option value="creek">Creeks</option>
        </select>
      </div>

      <div className="grid">
        {filteredBodies.map(body => (
          <div key={body.id} className="card" onClick={() => setSelectedBody(body)}>
            <h3>{body.name}</h3>
            <span className="tag">{body.type}</span>
            <p>{body.description}</p>
            <div className="card-footer">
              <span className="small-text">Species: {body.species.length}</span>
              <span className="small-text">Access Points: {body.accessPoints.length}</span>
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
          margin-bottom: 2rem;
        }

        .detail-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
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

        .access-list {
          list-style: none;
        }

        .access-list li {
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--color-border);
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border);
        }

        .small-text {
          font-size: 0.875rem;
          color: var(--color-text-light);
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
