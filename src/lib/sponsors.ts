export interface Sponsor {
  name: string
  firm?: string
  role?: string
  tier?: string
  linkedin?: string
  photo?: string
  logo?: string // institutional supporters show a logo instead of a headshot
}

// Supporters, in display order.
// People: set `photo` to a square headshot in public/sponsors/ (else initials).
// Institutions: set `logo` to an image in public/sponsors/ (shown in the circle).
export const sponsors: Sponsor[] = [
  {
    name: 'Brad Feld',
    firm: 'Techstars',
    role: 'Co-Founder',
    tier: 'House Sponsor',
    linkedin: 'https://www.linkedin.com/in/bfeld',
    photo: '/sponsors/brad-feld.jpg',
  },
  {
    name: 'Josh Kopelman',
    firm: 'First Round Capital',
    role: 'Founder & Managing Partner',
    tier: 'House Sponsor',
    linkedin: 'https://www.linkedin.com/in/jkopelman',
    photo: '/sponsors/josh-kopelman.jpg',
  },
  {
    name: 'Marina Girgis',
    firm: 'Precursor Ventures',
    role: 'Partner',
    tier: 'House Sponsor',
    linkedin: 'https://www.linkedin.com/in/marinagirgis/',
    photo: '/sponsors/marina-girgis.jpg',
  },
  {
    name: 'Alice Leung',
    tier: 'Supporter',
    linkedin: 'https://www.linkedin.com/in/awleung/',
    photo: '/sponsors/alice-leung.jpg',
  },
  {
    name: 'USC Iovine & Young Academy',
    tier: 'Institutional Supporter',
    logo: '/sponsors/usc-iovine.png',
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
]

// "Marina Girgis" -> "MG"
export function getInitials(name: string): string {
  const parts = name.replace(/\(.*?\)/g, '').trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}
