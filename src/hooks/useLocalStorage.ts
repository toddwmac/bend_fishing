import { useState, useEffect } from 'react'
import type { SavedTrip, Favorites } from '../types'

const TRIPS_KEY = 'fishing-trips'
const FAVORITES_KEY = 'fishing-favorites'

export function useTrips() {
  const [trips, setTrips] = useState<SavedTrip[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(TRIPS_KEY)
    if (stored) {
      try {
        setTrips(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to parse trips:', e)
      }
    }
  }, [])

  const addTrip = (trip: Omit<SavedTrip, 'id'>) => {
    const newTrip: SavedTrip = {
      ...trip,
      id: `trip-${Date.now()}`
    }
    const updated = [...trips, newTrip]
    setTrips(updated)
    localStorage.setItem(TRIPS_KEY, JSON.stringify(updated))
  }

  const deleteTrip = (id: string) => {
    const updated = trips.filter(t => t.id !== id)
    setTrips(updated)
    localStorage.setItem(TRIPS_KEY, JSON.stringify(updated))
  }

  return { trips, addTrip, deleteTrip }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Favorites>({ waterBodies: [], species: [] })

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY)
    if (stored) {
      try {
        setFavorites(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to parse favorites:', e)
      }
    }
  }, [])

  const toggleWaterBody = (id: string) => {
    const updated = {
      ...favorites,
      waterBodies: favorites.waterBodies.includes(id)
        ? favorites.waterBodies.filter(w => w !== id)
        : [...favorites.waterBodies, id]
    }
    setFavorites(updated)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated))
  }

  const toggleSpecies = (id: string) => {
    const updated = {
      ...favorites,
      species: favorites.species.includes(id)
        ? favorites.species.filter(s => s !== id)
        : [...favorites.species, id]
    }
    setFavorites(updated)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated))
  }

  return { favorites, toggleWaterBody, toggleSpecies }
}
