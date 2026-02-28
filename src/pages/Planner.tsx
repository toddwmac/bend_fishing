import { useState } from 'react'
import { useData } from '../hooks/useData'
import { useTrips, useFavorites } from '../hooks/useLocalStorage'

export default function Planner() {
  const { waterBodies, species } = useData()
  const { trips, addTrip, deleteTrip } = useTrips()
  const { favorites, toggleWaterBody, toggleSpecies } = useFavorites()

  const [selectedWaterBody, setSelectedWaterBody] = useState('')
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([])
  const [notes, setNotes] = useState('')
  const [date, setDate] = useState('')

  const handleSpeciesToggle = (speciesId: string) => {
    setSelectedSpecies(prev =>
      prev.includes(speciesId)
        ? prev.filter(s => s !== speciesId)
        : [...prev, speciesId]
    )
  }

  const handleSaveTrip = () => {
    if (!selectedWaterBody || selectedSpecies.length === 0 || !date) {
      alert('Please select a water body, at least one species, and a date.')
      return
    }

    addTrip({
      date,
      waterBody: selectedWaterBody,
      targetSpecies: selectedSpecies,
      notes: notes || undefined
    })

    // Reset form
    setSelectedWaterBody('')
    setSelectedSpecies([])
    setNotes('')
    setDate('')
  }

  const getWaterBodyName = (id: string) => {
    return waterBodies.find(wb => wb.id === id)?.name || id
  }

  const getSpeciesName = (id: string) => {
    return species.find(s => s.id === id)?.name || id
  }

  return (
    <div>
      <h2 className="page-title">Trip Planner</h2>

      <div className="planner-grid">
        <div className="planner-section">
          <h3>Plan a New Trip</h3>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="water-body">Water Body</label>
            <select
              id="water-body"
              value={selectedWaterBody}
              onChange={(e) => setSelectedWaterBody(e.target.value)}
            >
              <option value="">Select a location...</option>
              {waterBodies.map(wb => (
                <option key={wb.id} value={wb.id}>{wb.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Target Species</label>
            <div className="species-checkboxes">
              {species.map(s => (
                <label key={s.id} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedSpecies.includes(s.id)}
                    onChange={() => handleSpeciesToggle(s.id)}
                  />
                  <span>{s.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notes (optional)</label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any notes about your planned trip..."
              rows={3}
            />
          </div>

          <button
            className="btn btn-primary"
            onClick={handleSaveTrip}
            disabled={!selectedWaterBody || selectedSpecies.length === 0 || !date}
          >
            Save Trip
          </button>
        </div>

        <div className="planner-section">
          <h3>Saved Trips</h3>
          {trips.length === 0 ? (
            <p className="empty-state">No trips saved yet. Plan your first trip!</p>
          ) : (
            <div className="trips-list">
              {trips.map(trip => (
                <div key={trip.id} className="trip-card">
                  <div className="trip-header">
                    <span className="trip-date">{trip.date}</span>
                    <button
                      className="btn-delete"
                      onClick={() => deleteTrip(trip.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <h4>{getWaterBodyName(trip.waterBody)}</h4>
                  <p><strong>Targeting:</strong> {trip.targetSpecies.map(s =>
                    getSpeciesName(s)
                  ).join(', ')}</p>
                  {trip.notes && <p><em>{trip.notes}</em></p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="favorites-section">
        <h3>⭐ Favorites</h3>

        <div className="favorites-grid">
          <div className="favorite-group">
            <h4>Favorite Water Bodies</h4>
            {favorites.waterBodies.length === 0 ? (
              <p className="empty-state">No favorites yet</p>
            ) : (
              <ul className="favorites-list">
                {favorites.waterBodies.map(id => (
                  <li key={id}>
                    {getWaterBodyName(id)}
                    <button
                      className="btn-fav-remove"
                      onClick={() => toggleWaterBody(id)}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="favorite-group">
            <h4>Favorite Species</h4>
            {favorites.species.length === 0 ? (
              <p className="empty-state">No favorites yet</p>
            ) : (
              <ul className="favorites-list">
                {favorites.species.map(id => (
                  <li key={id}>
                    {getSpeciesName(id)}
                    <button
                      className="btn-fav-remove"
                      onClick={() => toggleSpecies(id)}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .planner-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .planner-section {
          background: var(--color-surface);
          padding: 1.5rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius);
        }

        .planner-section h3 {
          margin-bottom: 1.5rem;
          color: var(--color-primary);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--color-text);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius);
          font-size: 1rem;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .species-checkboxes {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 0.5rem;
          max-height: 200px;
          overflow-y: auto;
          padding: 0.5rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius);
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          cursor: pointer;
          padding: 0.25rem;
        }

        .checkbox-label:hover {
          background: var(--color-background);
        }

        .checkbox-label input {
          cursor: pointer;
        }

        .empty-state {
          color: var(--color-text-light);
          font-style: italic;
          padding: 1rem 0;
        }

        .trips-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .trip-card {
          padding: 1rem;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: var(--radius);
        }

        .trip-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .trip-date {
          font-weight: 500;
          color: var(--color-primary);
        }

        .trip-card h4 {
          margin: 0.5rem 0;
        }

        .trip-card p {
          font-size: 0.875rem;
          color: var(--color-text-light);
          margin: 0.25rem 0;
        }

        .btn-delete {
          background: #fee2e2;
          color: #991b1b;
          border: none;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius);
          font-size: 0.875rem;
          cursor: pointer;
        }

        .btn-delete:hover {
          background: #fecaca;
        }

        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .favorites-section {
          background: var(--color-surface);
          padding: 1.5rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius);
        }

        .favorites-section h3 {
          margin-bottom: 1.5rem;
          color: var(--color-accent);
        }

        .favorites-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .favorite-group h4 {
          margin-bottom: 1rem;
          color: var(--color-text);
        }

        .favorites-list {
          list-style: none;
        }

        .favorites-list li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem;
          background: var(--color-background);
          border-radius: var(--radius);
          margin-bottom: 0.5rem;
        }

        .btn-fav-remove {
          background: none;
          border: none;
          color: var(--color-text-light);
          cursor: pointer;
          font-size: 1rem;
          padding: 0.25rem 0.5rem;
        }

        .btn-fav-remove:hover {
          color: #dc2626;
        }
      `}</style>
    </div>
  )
}
