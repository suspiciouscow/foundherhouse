'use client'

import Link from 'next/link'
import Nav from '@/app/components/nav'
import { useState } from 'react'
import { ChevronDown, Sparkles, Mail, Instagram } from 'lucide-react'

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is FoundHer House?",
      answer: "FoundHer House is an all-women hacker house located in San Francisco. Residents work on projects and startups while connecting with like-minded individuals. The house hosts workshops, networking events, and demo nights to foster collaboration and skill-sharing among participants."
    },
    {
      question: "Who can apply?",
      answer: "We welcome ambitious women aged 18 and above who are passionate about technology and entrepreneurship. Whether you're a founder, builder, or innovator, FoundHer House is designed for you."
    },
    {
      question: "What amenities and resources are provided?",
      answer: "We provide all essential living amenities to ensure you can focus on what matters most - building and growing. Our fully-furnished space is equipped with everything you need to live, work, and thrive."
    },
    {
      question: "What are the costs involved?",
      answer: "Thanks to our partnerships with sponsors and VCs, we're able to offer subsidized housing at approximately $800 per month, making it accessible for early-stage founders and builders."
    },
    {
      question: "Do I need to have an established startup?",
      answer: "Not at all! We welcome anyone with a passion for innovation and entrepreneurship. Whether you're building your own venture or working on projects within a company, what matters is your drive to create and innovate."
    },
    {
      question: "What community and networking opportunities are available?",
      answer: "You'll be part of a vibrant community of female founders and innovators. We regularly host networking dinners, special events, and culminate with a demo day where you can pitch to VCs. Our community is designed to help you build meaningful connections and grow your network."
    }
  ]
  return (
    <div className="min-h-screen bg-[#FAF7F4] relative overflow-hidden">
      <div className="decorative-asterisk decorative-asterisk-top-right"></div>
      <div className="decorative-asterisk decorative-asterisk-bottom-left"></div>
      
      <Nav />
  
      <main className="container mx-auto px-3">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center pt-15 animate-fade-in">
          {/* Logo */}
          <div className="mb-[-2rem]">
            <img src="/foundher-logo.png" alt="FoundHer House" className="h-48" />
          </div>
  
         {/* Hero Text - Tighter spacing */}
         <div className="mb-10">
          <h1 className="text-7xl font-light tracking-[-0.03em]">
            <div className="text-[#191A1B] font-playfair leading-[1.3]">Where ambitious women</div>
            <div className="text-[#191A1B] font-playfair -mt-5 leading-[1.3]">
              build <span className="text-[#AE3B46] font-playfair italic">extraordinary</span>
            </div>
            <div className="text-[#191A1B] font-playfair -mt-5 leading-[1.3]">ventures</div>
          </h1>
        </div>

          {/* Mission Statement */}
          <p className="text-[#494949] text-lg max-w-2xl mb-10 leading-relaxed">
            A curated community and living space for female founders 
            to collaborate, innovate, and scale their startups in an 
            environment designed for success.
          </p>

          {/* CTA Button */}
          <Link
            href="/apply"
            className="group relative inline-flex items-center justify-center transition-all duration-300"
          >
           <div className="absolute inset-0 w-full h-full bg-black rounded-lg transform
              transition-transform group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-lg shadow-[#000000]"></div>
            <div className="relative inline-flex items-center justify-center px-10 py-4
              text-lg font-medium text-white bg-[#AE3B46]
              border border-[#191A1B] rounded-lg">
              Apply Now
              <Sparkles className="ml-2 w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* FAQ Section */}
        <section className="py-24 relative">
          <div className="max-w-3xl mx-auto">
          

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-[#AE3B46]/20 rounded-lg overflow-hidden bg-white/90 
                    backdrop-blur-sm elegant-shadow transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 py-5 flex justify-between items-center 
                      hover:bg-gradient-to-r hover:from-[#AE3B46]/5 hover:to-transparent 
                      transition-colors text-left"
                  >
                    <h3 className="text-lg text-main font-medium">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-8 pb-5 text-main-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        
        {/* Contact Section */}
        <section className="pb-24">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-4xl font-light mb-6 max-w-4xl leading-[1.1] font-playfair">
              <span className="text-main">Contact Us</span>
            </h2>
            <p className="text-main-muted text-lg max-w-2xl leading-relaxed">
              Have questions about FoundHer House? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center items-center space-x-8">
              {/* Email */}
              <a href="mailto:contact@foundherhouse.org" 
                className="group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#AE3B46]/5 
                  group-hover:bg-[#AE3B46]/10 transition-colors">
                  <Mail className="w-6 h-6 text-[#AE3B46]" />
                </div>
              </a>
              

              {/* Instagram */}
              <a href="https://instagram.com/foundherhouse" 
                target="_blank"
                rel="noopener noreferrer"
                className="group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#AE3B46]/5 
                  group-hover:bg-[#AE3B46]/10 transition-colors">
                  <Instagram className="w-6 h-6 text-[#AE3B46]" />
                </div>
              </a>

              {/* X/Twitter */}
              <a href="https://x.com/foundherhouse" 
                target="_blank"
                rel="noopener noreferrer"
                className="group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#AE3B46]/5 
                  group-hover:bg-[#AE3B46]/10 transition-colors">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-6 h-6 text-[#AE3B46] fill-current"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}