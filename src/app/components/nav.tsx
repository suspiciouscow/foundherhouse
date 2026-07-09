'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <nav className="py-6 px-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          onClick={close}
          className="text-xl text-gray-900 tracking-wide"
        >
          <div className="mb-0">
            <img src="/logo.png" alt="FoundHer House" className="h-10" />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 lg:space-x-12 items-center">
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </Link>

          {/* Residents page temporarily hidden
          <Link
            href="/residents"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Residents
          </Link>
          */}

          <Link
            href="/sponsorship"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Supporters
          </Link>

          <a
            href="http://foundhersummit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            FoundHer Summit
          </a>

          <a
            href="https://luma.com/calendar/cal-DFxxla4CNZhO96B"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Events
          </a>

          <Link
            href="/apply"
            className="text-gray-900 border border-gray-900 px-5 py-2 rounded
              hover:bg-gray-900 hover:text-white transition-colors"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden text-gray-900 p-2 -mr-2"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden container mx-auto mt-4 flex flex-col gap-1 px-1">
          <Link
            href="/about"
            onClick={close}
            className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors py-3 px-2 rounded"
          >
            About
          </Link>

          {/* Residents page temporarily hidden
          <Link href="/residents" onClick={close} className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors py-3 px-2 rounded">
            Residents
          </Link>
          */}

          <Link
            href="/sponsorship"
            onClick={close}
            className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors py-3 px-2 rounded"
          >
            Supporters
          </Link>

          <a
            href="http://foundhersummit.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors py-3 px-2 rounded"
          >
            FoundHer Summit
          </a>

          <a
            href="https://luma.com/calendar/cal-DFxxla4CNZhO96B"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors py-3 px-2 rounded"
          >
            Events
          </a>

          <Link
            href="/apply"
            onClick={close}
            className="mt-2 text-center text-gray-900 border border-gray-900 px-5 py-3 rounded
              hover:bg-gray-900 hover:text-white transition-colors"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  )
}
