'use client'

import Nav from '@/app/components/nav'
import { CalendarClock } from 'lucide-react'

export default function Apply() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Nav />
      
      <div className="decorative-asterisk decorative-asterisk-top-right">*</div>
      <div className="decorative-asterisk decorative-asterisk-bottom-left">*</div>

      <main className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center pt-20 animate-fade-in">
          <h1 className="text-6xl font-light tracking-normal mb-6 max-w-4xl leading-[1.1]">
            <span className="text-main font-playfair">Applications Closed</span>
          </h1>
          <p className="text-main-muted text-lg max-w-2xl mb-12 leading-relaxed">
            Thank you for your interest in FoundHer House. Our application period has ended.
          </p>
        </div>

        <div className="max-w-2xl mx-auto p-8 bg-primary/10 rounded-lg text-center backdrop-blur-sm space-y-6">
          <div className="flex justify-center">
            <CalendarClock className="w-16 h-16 text-[#AE3B46]" />
          </div>
          <h2 className="text-2xl text-main mb-2 font-playfair">Application Period Has Ended</h2>
          <p className="text-main-muted leading-relaxed">
            The application window for FoundHer House closed on March 7th, 2025 at 11:59PM PST. 
            We are currently reviewing applications and will be in touch with selected candidates soon.
          </p>
          <div className="pt-6">
            <p className="text-main-muted text-sm">
              For any inquiries, please contact us through our social media channels.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}