export interface Sponsor {
  name: string
  firm: string
  role: string
  tier: string
  linkedin?: string
  photo?: string
}

// House Sponsors, in the order from the Investors & Sponsors export.
// To show a headshot: drop a square image into public/sponsors/ and set the
// `photo` path below. Without a `photo`, a clean initials placeholder is shown.
export const sponsors: Sponsor[] = [
  {
    name: 'Marina Girgis',
    firm: 'Precursor Ventures',
    role: 'Partner',
    tier: 'House Sponsor',
    linkedin: 'https://www.linkedin.com/in/marinagirgis/',
    photo: '/sponsors/marina-girgis.jpg',
  },
  {
    name: 'Brad Feld',
    firm: 'Techstars',
    role: 'Co-Founder',
    tier: 'House Sponsor',
    linkedin: 'https://www.linkedin.com/in/bfeld',
    photo: '/sponsors/brad-feld.jpg',
  },
  // Temporarily removed — may add back later.
  // {
  //   name: 'Ben Taft',
  //   firm: 'Genius Ventures',
  //   role: 'Founder & Managing Partner',
  //   tier: 'House Sponsor',
  //   linkedin: 'https://www.linkedin.com/in/ben-taft-46830679',
  //   photo: '/sponsors/ben-taft.jpg',
  // },
  {
    name: 'Josh Kopelman',
    firm: 'First Round Capital',
    role: 'Founder & Managing Partner',
    tier: 'House Sponsor',
    linkedin: 'https://www.linkedin.com/in/jkopelman',
    photo: '/sponsors/josh-kopelman.jpg',
  },
]

// "Marina Girgis" -> "MG"
export function getInitials(name: string): string {
  const parts = name.replace(/\(.*?\)/g, '').trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}
