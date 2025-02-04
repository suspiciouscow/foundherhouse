'use client'

import Nav from '@/app/components/nav'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAF7F4] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="decorative-asterisk decorative-asterisk-top-right text-[#AE3B46]/20">*</div>
      <div className="decorative-asterisk decorative-asterisk-bottom-left text-[#AE3B46]/20">*</div>
      
      <Nav />

      <main className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center pt-16 animate-fade-in">
          {/* Header Section */}
          <h1 className="text-[64px] font-light tracking-[-0.02em] text-[#191A1B] mb-3">
            <span className="font-playfair">About</span>
          </h1>
          <p className="text-[#494949] text-lg max-w-xl mx-auto mb-20 leading-relaxed">
            Building a community of ambitious women founders
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-24 pb-24">
          {/* Our Story Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent rounded-2xl"></div>
            <div className="relative p-8">
              <h2 className="text-2xl text-[#191A1B] font-medium font-playfair mb-4">Our Story</h2>
              <p className="text-[#494949] text-lg leading-relaxed">
                FoundHer House was created to address the unique challenges women founders face in the tech industry. 
                Our space is designed to foster collaboration, innovation, and growth in a supportive environment 
                where ambitious women can build and scale their startups.
              </p>
            </div>
          </section>

          
          {/* What We Offer Section */}
          <section>
            <h2 className="text-2xl text-[#191A1B] font-medium font-playfair mb-12 text-center">
              What We Offer
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
              {[
                {
                  title: "Living Space",
                  description: "A thoughtfully designed coliving environment that promotes focus, creativity, and community."
                },
                {
                  title: "Mentorship",
                  description: "Access to experienced founders, investors, and industry experts who provide guidance and support."
                },
                {
                  title: "Community",
                  description: "A network of like-minded founders who share resources, insights, and support each other's growth."
                },
                {
                  title: "Resources",
                  description: "Workspace, networking events, workshops, and tools needed to build successful startups."
                }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -left-4 top-0 w-[2px] h-0 bg-[#AE3B46]/10 
                    group-hover:h-full transition-all duration-300"></div>
                  <div className="space-y-3 pl-4">
                    <h3 className="text-[#191A1B] font-playfair text-lg group-hover:text-[#AE3B46] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#494949] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section>
            <h2 className="text-2xl text-[#191A1B] font-medium font-playfair mb-12 text-center">
              Our Values
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
              {[
                {
                  title: "Innovation",
                  description: "Embracing new ideas and creative solutions"
                },
                {
                  title: "Community",
                  description: "Supporting and empowering each other"
                },
                {
                  title: "Growth",
                  description: "Continuous learning and development"
                },
                {
                  title: "Impact",
                  description: "Creating meaningful change in tech"
                }
              ].map((value, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -left-4 top-0 w-[2px] h-0 bg-[#AE3B46]/10 
                    group-hover:h-full transition-all duration-300"></div>
                  <div className="space-y-3 pl-4">
                    <h3 className="text-[#191A1B] font-playfair text-lg group-hover:text-[#AE3B46] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-[#494949] leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center pt-8">
            <p className="text-[#494949] mb-8 text-lg">
              Ready to join our community of founders?
            </p>
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
          </section>
        </div>
      </main>
    </div>
  )
}