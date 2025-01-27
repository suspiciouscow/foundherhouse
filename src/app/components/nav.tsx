import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav className="py-6 px-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl text-gray-900 tracking-wide"
        >
          <Image 
            src="/logo.png"  // Replace with your actual logo path
            alt="FH Logo" 
            width={30}  // Adjust width as needed
            height={50}  // Adjust height as needed
            className="h-8"  // Adjust sizing as needed
          />
        </Link>

        <div className="flex space-x-12 items-center">
          <Link 
            href="/about" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
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