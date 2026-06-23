import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Person {
  name: string
  role?: string
  linkedin?: string
  x?: string
  website?: string
  instagram?: string
  photo?: string
}

export interface Cohort {
  house: string
  season: string
  label?: string
  residents: Person[]
}

// Reads content/residents.md (the single source of truth) at build time.
export function getResidentsData(): { founders: Person[]; cohorts: Cohort[] } {
  const filePath = path.join(process.cwd(), 'content', 'residents.md')
  const file = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(file)
  const founders = (data.founders as Person[]) ?? []
  const cohorts = ((data.cohorts as Cohort[]) ?? []).map((c) => ({
    ...c,
    // Ensure residents is always an array so the page never crashes on empty cohorts.
    residents: c.residents ?? [],
  }))
  return { founders, cohorts }
}

// "Georgina (Gigi) Alcaraz" -> "GA", "Sonya Jin" -> "SJ", "Cher" -> "C"
export function getInitials(name: string): string {
  const cleaned = name.replace(/\(.*?\)/g, '').trim()
  const parts = cleaned.split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}
