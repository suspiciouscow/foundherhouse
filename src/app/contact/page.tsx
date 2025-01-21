'use client'

import Nav from '@/components/nav'
import { Mail, MapPin, Instagram } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FAF7F4] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="decorative-asterisk decorative-asterisk-top-right text-[#AE3B46]/20">*</div>
      <div className="decorative-asterisk decorative-asterisk-bottom-left text-[#AE3B46]/20">*</div>
      
      <Nav />

      <main className="container mx-auto px-4">
        {/* Header - with animation */}
        <div className="text-center pt-16">
          <h1 className="animate-fade-in text-[64px] font-light tracking-[-0.02em] text-[#191A1B] mb-3">
            <span className="font-playfair">Contact Us</span>
          </h1>
          <p className="animate-fade-in text-[#494949] text-lg max-w-md mx-auto mb-16 leading-relaxed delay-100">
            Have questions about FoundHer House? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center items-start space-x-20 mb-16">
            {/* Email */}
            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#AE3B46]/5 
                group-hover:bg-[#AE3B46]/10 transition-colors">
                <Mail className="w-6 h-6 text-[#AE3B46]" />
              </div>
              <div className="text-left pt-1">
                <h3 className="text-[#191A1B] text-lg font-playfair mb-1">Email Us</h3>
                <a href="mailto:hello@foundherhouse.com" 
                   className="text-[#494949] hover:text-[#AE3B46] transition-colors">
                  hello@foundherhouse.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#AE3B46]/5 
                group-hover:bg-[#AE3B46]/10 transition-colors">
                <MapPin className="w-6 h-6 text-[#AE3B46]" />
              </div>
              <div className="text-left pt-1">
                <h3 className="text-[#191A1B] text-lg font-playfair mb-1">Location</h3>
                <p className="text-[#494949]">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-[#191A1B] text-lg font-playfair mb-5">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://instagram.com/foundherhouse" 
                 className="group"
                 target="_blank" 
                 rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-[#191A1B] opacity-80 
                  group-hover:text-[#AE3B46] group-hover:opacity-100 transition-all" />
              </a>
              <a href="https://x.com/foundherhouse" 
                 className="group"
                 target="_blank" 
                 rel="noopener noreferrer">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 text-[#191A1B] opacity-80 
                    group-hover:text-[#AE3B46] group-hover:opacity-100 transition-all fill-current"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}