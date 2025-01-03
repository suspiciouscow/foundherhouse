'use client'

import Nav from '@/components/nav'
import { Sparkles } from 'lucide-react'

export default function Sponsorship() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="decorative-asterisk decorative-asterisk-top-right">*</div>
      <div className="decorative-asterisk decorative-asterisk-bottom-left">*</div>
      
      <Nav />

      <main className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center pt-20 animate-fade-in">
          <h1 className="text-6xl font-light tracking-normal mb-6 max-w-4xl leading-[1.1]">
            <span className="text-main font-playfair">Support </span>
            <span className="text-main font-playfair">Us</span>
          </h1>
          <p className="text-main-muted text-lg max-w-2xl mb-12 leading-relaxed">
            Support the next generation of women founders and be part of our mission to increase diversity in tech entrepreneurship.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12 pb-24">
          {/* Partner Section */}
          <div className="space-y-6 bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg p-8 elegant-shadow">
            <h2 className="text-2xl text-main font-medium tracking-wide font-playfair">
              Partner With Us
            </h2>
            <p className="text-main-muted text-lg leading-relaxed">
              By sponsoring FoundHer House, you're investing in the future of women in technology. 
              Our carefully curated community provides unique opportunities for meaningful engagement and support.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="space-y-6 bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg p-8 elegant-shadow">
            <h2 className="text-2xl text-main font-medium tracking-wide font-playfair">
              Sponsorship Benefits
            </h2>
            <ul className="space-y-4">
              {[
                "Access to our network of innovative founders",
                "Brand visibility in our space and events",
                "First look at emerging technologies and startups",
                "Opportunity to mentor promising entrepreneurs"
              ].map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-main-muted"
                >
                  <span className="text-primary">*</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button
              className="group relative inline-flex items-center justify-center transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-black rounded-lg transform
                transition-transform group-hover:translate-x-1 group-hover:translate-y-1 shadow-lg shadow-[#000000]"></div>
              <div className="relative inline-flex items-center justify-center px-10 py-4
                text-lg font-medium text-white bg-[#AE3B46]
                border border-[#191A1B] rounded-lg group-hover:shadow-lg">
                Become a Sponsor
                <Sparkles className="ml-2 w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}