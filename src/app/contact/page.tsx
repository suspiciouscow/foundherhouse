'use client'

import Nav from '@/components/nav'
import { Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="decorative-asterisk decorative-asterisk-top-right">*</div>
      <div className="decorative-asterisk decorative-asterisk-bottom-left">*</div>
      
      <Nav />

      <main className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center pt-20 animate-fade-in">
        <h1 className="text-6xl font-light mb-6 max-w-4xl leading-[1.1] flex flex-wrap items-center justify-center">
          <span className="text-main font-playfair mr-4">Contact</span>
          <span className="text-main font-playfair ml-4">Us</span>
        </h1>
          <p className="text-main-muted text-lg max-w-2xl mb-12 leading-relaxed">
            Have questions about FoundHer House? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto pb-24">
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Email Card */}
            <div className="bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg p-8 
              text-center elegant-shadow hover:shadow-lg transition-all duration-300">
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-main text-xl mb-2 font-medium font-playfair">Email Us</h3>
              <p className="text-main-muted">hello@foundherhouse.com</p>
            </div>

            {/* Location Card */}
            <div className="bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg p-8 
              text-center elegant-shadow hover:shadow-lg transition-all duration-300">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-main text-xl mb-2 font-medium font-playfair">Location</h3>
              <p className="text-main-muted">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}