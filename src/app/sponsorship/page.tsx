'use client'

import Nav from '@/app/components/nav'
import { Mail } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { sponsors, getInitials, type Sponsor } from '@/lib/sponsors'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const [imgOk, setImgOk] = useState(true)
  const imgRef = useRef<HTMLImageElement>(null)
  // Catch images that 404'd before hydration (so we fall back to initials, not a broken icon).
  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth === 0) setImgOk(false)
  }, [])
  const media = sponsor.logo ?? sponsor.photo
  const showImage = media && imgOk
  const fallback = sponsor.logo ? sponsor.name.split(' ')[0] : getInitials(sponsor.name)
  return (
    <div className="group flex flex-col items-center text-center w-40">
      <div className="relative w-28 h-28 mb-4 rounded-full p-1.5 bg-[#AE3B46]/10
        ring-2 ring-[#AE3B46]/20 transition-all duration-300
        group-hover:ring-[#AE3B46]/50 group-hover:-translate-y-1 group-hover:shadow-lg">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src={media}
            alt={sponsor.name}
            onError={() => setImgOk(false)}
            className="w-full h-full rounded-full object-cover grayscale transition-all duration-500
              group-hover:grayscale-0 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#AE3B46]/15 to-[#AE3B46]/5
            flex items-center justify-center">
            <span className="font-playfair text-xl text-[#AE3B46]">{fallback}</span>
          </div>
        )}
      </div>
      <h3 className="font-playfair text-lg text-[#191A1B] leading-snug">{sponsor.name}</h3>
      {sponsor.firm && <p className="text-[#494949] text-sm mt-1">{sponsor.firm}</p>}
      {sponsor.role && <p className="text-[#494949]/70 text-xs italic">{sponsor.role}</p>}
      {sponsor.linkedin && (
        <a
          href={sponsor.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${sponsor.name} on LinkedIn`}
          className="text-[#494949]/60 hover:text-[#AE3B46] transition-colors mt-3"
        >
          <LinkedInIcon />
        </a>
      )}
    </div>
  )
}

export default function Sponsorship() {
  return (
    <div className="min-h-screen bg-[#FAF7F4] relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="decorative-asterisk decorative-asterisk-top-right text-[#AE3B46]/20">*</div>
      <div className="decorative-asterisk decorative-asterisk-bottom-left text-[#AE3B46]/20">*</div>
      
      <Nav />

      <main className="container mx-auto px-4 pb-24">
        {/* Header */}
        <div className="text-center pt-16">
          <h1 className="animate-fade-in text-5xl md:text-[64px] font-light tracking-[-0.02em] text-[#191A1B] mb-3">
            <span className="font-playfair">Support Us</span>
          </h1>
          <p className="animate-fade-in text-[#494949] text-lg max-w-xl mx-auto mb-24 leading-relaxed delay-100">
            Support the next generation of women founders and be part of our mission to increase diversity in tech entrepreneurship.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Partner Section with subtle background */}
          <div className="mb-24 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent rounded-2xl"></div>
            <div className="relative p-8">
              <h2 className="text-2xl text-[#191A1B] font-medium font-playfair mb-4">
                Partner With Us
              </h2>
              <p className="text-[#494949] text-lg leading-relaxed">
                By sponsoring FoundHer House, you&apos;re investing in the future of women in technology.
                Our carefully curated community provides unique opportunities for meaningful engagement and support.
              </p>
            </div>
          </div>

          {/* Our Sponsors Section */}
          <div className="mb-24">
            <h2 className="text-2xl text-[#191A1B] font-medium font-playfair mb-3 text-center">
              Our Supporters
            </h2>
            <p className="text-[#494949] text-center mb-12 max-w-xl mx-auto">
              We&apos;re grateful to the House Supporters who make FoundHer House possible.
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 md:gap-x-16 gap-y-12">
              {sponsors.map((sponsor) => (
                <SponsorCard key={sponsor.name} sponsor={sponsor} />
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-24">
            <h2 className="text-2xl text-[#191A1B] font-medium font-playfair mb-12 text-center">
              Sponsorship Benefits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
              {[
                {
                  title: "Network Access",
                  description: "Connect with our community of innovative founders and emerging entrepreneurs."
                },
                {
                  title: "Brand Visibility",
                  description: "Feature your brand in our space and at our exclusive events."
                },
                {
                  title: "First Look Access",
                  description: "Preview emerging technologies and startups from our resident founders."
                },
                {
                  title: "Mentorship Opportunities",
                  description: "Shape the future by mentoring promising entrepreneurs in our program."
                }
              ].map((benefit, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -left-4 top-0 w-[2px] h-0 bg-[#AE3B46]/10 
                    group-hover:h-full transition-all duration-300"></div>
                  <div className="space-y-3 pl-4">
                    <h3 className="text-[#191A1B] font-playfair text-lg group-hover:text-[#AE3B46] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-[#494949] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white/30 backdrop-blur-sm rounded-2xl p-8">
            <div className="inline-flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#AE3B46]/5">
                <Mail className="w-6 h-6 text-[#AE3B46]" />
              </div>
              <div className="text-left">
                <p className="text-[#191A1B] text-lg font-playfair mb-1">Get in Touch</p>
                <a href="mailto:contact@foundherhouse.org" 
                   className="text-[#494949] hover:text-[#AE3B46] transition-colors">
                 contact@foundherhouse.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}