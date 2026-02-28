import { useState, useEffect } from 'react'
import type { WaterBody, Species, SeasonInfo, Technique } from '../types'

export function useData() {
  const [waterBodies, setWaterBodies] = useState<WaterBody[]>([])
  const [species, setSpecies] = useState<Species[]>([])
  const [seasons, setSeasons] = useState<SeasonInfo[]>([])
  const [techniques, setTechniques] = useState<Technique[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        const [waterBodiesData, speciesData, seasonsData, techniquesData] = await Promise.all([
          fetch('/data/water-bodies.json').then(r => r.json()),
          fetch('/data/species.json').then(r => r.json()),
          fetch('/data/seasons.json').then(r => r.json()),
          fetch('/data/techniques.json').then(r => r.json())
        ])

        setWaterBodies(waterBodiesData)
        setSpecies(speciesData)
        setSeasons(seasonsData)
        setTechniques(techniquesData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return { waterBodies, species, seasons, techniques, loading, error }
}

export function useWaterBodies() {
  const { waterBodies, loading } = useData()
  return { waterBodies, loading }
}

export function useSpecies() {
  const { species, loading } = useData()
  return { species, loading }
}

export function useSeasons() {
  const { seasons, loading } = useData()
  return { seasons, loading }
}
