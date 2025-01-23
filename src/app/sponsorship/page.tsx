'use client'

import Nav from '@/components/nav'
import { Mail } from 'lucide-react'

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
          <h1 className="animate-fade-in text-[64px] font-light tracking-[-0.02em] text-[#191A1B] mb-3">
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

          {/* Benefits Section */}
          <div className="mb-24">
            <h2 className="text-2xl text-[#191A1B] font-medium font-playfair mb-12 text-center">
              Sponsorship Benefits
            </h2>
            <div className="grid grid-cols-2 gap-x-16 gap-y-12">
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
                 contact@foundherhouse.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}