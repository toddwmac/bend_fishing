// Data type definitions for the Bend Fishing Guide application

export interface AccessPoint {
  name: string
  description: string
  type: 'boat_ramp' | 'bank' | 'trailhead'
}

export interface WaterBody {
  id: string
  name: string
  type: 'river' | 'lake' | 'reservoir' | 'creek' | 'pond'
  sections?: string[]
  description: string
  species: string[]
  accessPoints: AccessPoint[]
  regulations: string
  bestSeasons: string[]
  techniques: string[]
}

export interface Species {
  id: string
  name: string
  scientificName: string
  description: string
  sizeRange: string
  weight: string
  difficulty: 'easy' | 'moderate' | 'difficult'
  techniques: string[]
  bestMonths: string[]
  protected: boolean
}

export interface SeasonInfo {
  month: string
  species: string[]
  description: string
  hatches: string[]
  waterConditions: string
}

export interface Technique {
  id: string
  name: string
  description: string
  gear: string[]
}

export interface SavedTrip {
  id: string
  date: string
  waterBody: string
  targetSpecies: string[]
  notes?: string
}

export interface Favorites {
  waterBodies: string[]
  species: string[]
}
