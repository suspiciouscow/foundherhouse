import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="py-6 px-4 border-b border-[#1C1C1C]/10">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl text-[#1C1C1C] tracking-wide"
        >
          FH
        </Link>

        <div className="flex space-x-12 items-center">
          <Link 
            href="/about" 
            className="text-[#1C1C1C]/80 hover:text-[#1C1C1C] transition-colors hover-underline"
          >
            About
          </Link>
          <Link 
            href="/sponsorship" 
            className="text-[#1C1C1C]/80 hover:text-[#1C1C1C] transition-colors hover-underline"
          >
            Sponsorship
          </Link>
          
          <Link
            href="/apply"
            className="text-[#1C1C1C] border border-[#1C1C1C] px-5 py-2 rounded 
              hover:bg-[#1C1C1C] hover:text-white transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  )
}