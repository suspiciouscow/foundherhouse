import Link from 'next/link'

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Residents', href: '/residents' },
  { label: 'Supporters', href: '/sponsorship' },
  { label: 'Press', href: '/press' },
  { label: 'Events', href: 'https://luma.com/calendar/cal-DFxxla4CNZhO96B', external: true },
  { label: 'Apply', href: '/apply' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#FAF7F4] border-t border-[#AE3B46]/10 overflow-hidden">
      <div className="container mx-auto px-6 pt-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <img src="/logo.png" alt="FoundHer House" className="h-9 mb-5" />
            <p className="text-[#191A1B] text-lg font-playfair leading-snug mb-6">
              a home for ambitious female founders
            </p>
            <div className="flex items-center gap-5 mb-6 text-[#191A1B]">
              <a href="https://x.com/foundherhouse" target="_blank" rel="noopener noreferrer"
                aria-label="FoundHer House on X" className="hover:text-[#AE3B46] transition-colors">
                <XIcon />
              </a>
              <a href="https://www.linkedin.com/company/foundher-house" target="_blank" rel="noopener noreferrer"
                aria-label="FoundHer House on LinkedIn" className="hover:text-[#AE3B46] transition-colors">
                <LinkedInIcon />
              </a>
              <a href="https://instagram.com/foundherhouse" target="_blank" rel="noopener noreferrer"
                aria-label="FoundHer House on Instagram" className="hover:text-[#AE3B46] transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-3 md:text-right md:items-end">
            <span className="text-[#191A1B] font-playfair text-lg mb-1 underline underline-offset-4 decoration-[#AE3B46]/40">
              main
            </span>
            {links.map((l) =>
              l.external ? (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="text-[#494949] hover:text-[#AE3B46] transition-colors">
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} href={l.href}
                  className="text-[#494949] hover:text-[#AE3B46] transition-colors">
                  {l.label}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Oversized wordmark — echoes the logo: FOUND + cursive "her" */}
        <div className="mt-10">
          <h2 className="group/wm leading-[0.8] whitespace-nowrap select-none text-[19vw] -mb-[2.6vw]
            flex items-baseline justify-start text-[#191A1B]">
            <span className="font-playfair font-semibold tracking-[-0.02em]">FOUND</span>
            <span
              className="[font-family:var(--font-script)] text-[#AE3B46] -ml-[0.5vw]
                inline-block origin-bottom-left transition-all duration-500 ease-out
                group-hover/wm:-rotate-3 group-hover/wm:scale-[1.06] group-hover/wm:text-[#d9694f]"
            >
              her
            </span>
          </h2>
        </div>
      </div>
    </footer>
  )
}
