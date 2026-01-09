import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="py-6 px-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl text-gray-900 tracking-wide"
        >
          <div className="mb-0">
            <img src="/logo.png" alt="FoundHer House" className="h-10" />
          </div>
        </Link>

        <div className="flex space-x-12 items-center">
          <Link 
            href="/about" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/residents" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Residents
          </Link>
          <Link 
            href="/sponsorship" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Sponsorship
          </Link>
            
          <Link
            href="/apply"
            className="text-gray-900 border border-gray-900 px-5 py-2 rounded 
              hover:bg-gray-900 hover:text-white transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  )
}