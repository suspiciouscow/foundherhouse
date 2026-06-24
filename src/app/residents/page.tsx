import Nav from '@/app/components/nav'
import Avatar from '@/app/components/avatar'
import { Globe, Instagram } from 'lucide-react'
import { getResidentsData, type Person } from '@/lib/residents'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function SocialLinks({ person, className = '' }: { person: Person; className?: string }) {
  const socials = [
    { href: person.linkedin, label: 'LinkedIn', icon: <LinkedInIcon /> },
    { href: person.x, label: 'X', icon: <XIcon /> },
    { href: person.website, label: 'Website', icon: <Globe className="w-4 h-4" /> },
    { href: person.instagram, label: 'Instagram', icon: <Instagram className="w-4 h-4" /> },
  ].filter((s) => s.href)

  if (socials.length === 0) return null

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} on ${s.label}`}
          className="text-[#494949]/60 hover:text-[#AE3B46] transition-colors"
        >
          {s.icon}
        </a>
      ))}
    </div>
  )
}

// "Backed by" firms. Drop a transparent logo (SVG/PNG) into public/backers/ and
// set `logo: '/backers/<file>'` to show it (grayscale, like the homepage press
// strip); without one, the firm name renders as a clean wordmark.
const backers: { name: string; logo?: string; className?: string }[] = [
  { name: 'a16z', logo: '/backers/a16z.svg', className: 'h-5 md:h-6' },
  { name: 'Pear VC', logo: '/backers/pear.svg', className: 'h-9 md:h-11' },
  { name: 'Neo', logo: '/backers/neo.png', className: 'h-6 md:h-7' },
  { name: 'Uncork Capital', logo: '/backers/uncork.png', className: 'h-5 md:h-6' },
  { name: 'Genius Ventures' },
]

function PersonCard({
  person,
  founder = false,
  bylines = [],
}: {
  person: Person
  founder?: boolean
  bylines?: string[]
}) {
  return (
    <div className="group flex flex-col items-center text-center">
      <Avatar
        photo={person.photo}
        name={person.name}
        size={founder ? 'h-28 w-28' : 'h-24 w-24'}
        textSize={founder ? 'text-3xl' : 'text-2xl'}
      />
      <h3 className={`font-playfair text-[#191A1B] mt-4 leading-snug ${founder ? 'text-xl' : 'text-base'}`}>
        {person.name}
      </h3>
      {founder && <p className="text-[#AE3B46] text-sm italic mt-1">{person.role ?? 'Founder'}</p>}
      {bylines.map((b) => (
        <p key={b} className="text-[#494949]/70 text-xs mt-1">{b}</p>
      ))}
      <SocialLinks person={person} className="justify-center mt-2" />
    </div>
  )
}

export default function Residents() {
  const { founders, cohorts } = getResidentsData()
  const founderNames = new Set(founders.map((f) => f.name))

  // Dedupe people across cohorts: one card per person, with each cohort listed
  // under it. Preserves first-seen order (cohort order in the markdown).
  const byName = new Map<string, { person: Person; bylines: string[] }>()
  for (const c of cohorts) {
    const byline = `${c.house} · ${c.season}`
    for (const r of c.residents) {
      const entry = byName.get(r.name)
      if (entry) {
        entry.person = { ...r, ...entry.person } // keep first-seen, fill any gaps
        if (!entry.bylines.includes(byline)) entry.bylines.push(byline)
      } else {
        byName.set(r.name, { person: r, bylines: [byline] })
      }
    }
  }
  // People who are also founders show only in the Founders section (with their
  // cohort noted there); everyone else fills the Residents grid.
  const residents = Array.from(byName.values()).filter((e) => !founderNames.has(e.person.name))
  const founderBylines = (name: string) => byName.get(name)?.bylines ?? []

  return (
    <div className="min-h-screen bg-[#FAF7F4] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="decorative-asterisk decorative-asterisk-top-right text-[#AE3B46]/20">*</div>
      <div className="decorative-asterisk decorative-asterisk-bottom-left text-[#AE3B46]/20">*</div>

      <Nav />

      <main className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center pt-16 animate-fade-in">
          {/* Header Section */}
          <h1 className="text-[64px] font-light tracking-[-0.02em] text-[#191A1B] mb-3">
            <span className="font-playfair">Residents</span>
          </h1>
          <p className="text-[#494949] text-lg max-w-xl mx-auto mb-20 leading-relaxed">
            The founders and builders who call FoundHer House home
          </p>
        </div>

        {/* Backed by */}
        <section className="max-w-4xl mx-auto mb-24">
          <p className="text-center text-[#494949] text-sm tracking-[0.15em] uppercase mb-8">
            Our founders are backed by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-6">
            {backers.map((b) =>
              b.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={b.name}
                  src={b.logo}
                  alt={b.name}
                  className={`${b.className ?? 'h-6 md:h-7'} w-auto object-contain opacity-60 grayscale
                    transition-all duration-300 hover:opacity-100 hover:grayscale-0`}
                />
              ) : (
                <span
                  key={b.name}
                  className="font-medium text-lg md:text-xl tracking-tight text-[#191A1B]/55
                    hover:text-[#191A1B] transition-colors"
                >
                  {b.name}
                </span>
              )
            )}
          </div>
        </section>

        <div className="max-w-5xl mx-auto space-y-20 pb-24">
          {/* Founders */}
          {founders.length > 0 && (
            <section className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent rounded-2xl"></div>
              <div className="relative p-8">
                <h2 className="text-2xl text-[#191A1B] font-medium font-playfair mb-10 text-center">
                  Founders
                </h2>
                <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
                  {founders.map((founder) => (
                    <PersonCard
                      key={founder.name}
                      person={founder}
                      founder
                      bylines={founderBylines(founder.name)}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Residents */}
          {residents.length > 0 && (
            <section>
              <h2 className="text-2xl text-[#191A1B] font-medium font-playfair mb-12 text-center">
                Residents
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                {residents.map(({ person, bylines }) => (
                  <PersonCard key={person.name} person={person} bylines={bylines} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  )
}
