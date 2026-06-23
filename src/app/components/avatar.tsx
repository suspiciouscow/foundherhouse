'use client'

import { useState, useRef, useEffect } from 'react'

function initials(name: string): string {
  const parts = name.replace(/\(.*?\)/g, '').trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export default function Avatar({
  photo,
  name,
  size = 'h-24 w-24',
  textSize = 'text-2xl',
}: {
  photo?: string
  name: string
  size?: string
  textSize?: string
}) {
  const [ok, setOk] = useState(true)
  const ref = useRef<HTMLImageElement>(null)
  // Fall back to initials if the image 404'd before hydration.
  useEffect(() => {
    const img = ref.current
    if (img && img.complete && img.naturalWidth === 0) setOk(false)
  }, [])

  const base = `${size} rounded-full overflow-hidden ring-2 ring-[#AE3B46]/15 bg-[#AE3B46]/10
    transition-all duration-300 group-hover:ring-[#AE3B46]/45 group-hover:-translate-y-1`

  if (photo && ok) {
    return (
      <div className={base}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={ref}
          src={photo}
          alt={name}
          onError={() => setOk(false)}
          className="h-full w-full object-cover grayscale transition-all duration-500
            group-hover:grayscale-0 group-hover:scale-[1.04]"
        />
      </div>
    )
  }

  return (
    <div className={`${base} flex items-center justify-center bg-gradient-to-br from-[#AE3B46]/15 to-[#AE3B46]/5`}>
      <span className={`font-playfair ${textSize} text-[#AE3B46]`}>{initials(name)}</span>
    </div>
  )
}
