'use client'

import Nav from '@/app/components/nav'
import { ArrowUpRight } from 'lucide-react'
import { pressItems } from '@/lib/press'

export default function Press() {
  return (
    <div className="min-h-screen bg-[#FAF7F4] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="decorative-asterisk decorative-asterisk-top-right text-[#AE3B46]/20">*</div>
      <div className="decorative-asterisk decorative-asterisk-bottom-left text-[#AE3B46]/20">*</div>

      <Nav />

      <main className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center pt-16 animate-fade-in">
          {/* Header Section */}
          <h1 className="text-5xl md:text-[64px] font-light tracking-[-0.02em] text-[#191A1B] mb-3">
            <span className="font-playfair">Press</span>
          </h1>
          <p className="text-[#494949] text-lg max-w-xl mx-auto mb-20 leading-relaxed">
            FoundHer House in the news
          </p>
        </div>

        <div className="max-w-3xl mx-auto pb-24">
          <div className="space-y-4">
            {pressItems.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-[#AE3B46]/20 rounded-lg bg-white/90 backdrop-blur-sm
                  elegant-shadow px-8 py-6 transition-all duration-300 hover:shadow-lg hover:border-[#AE3B46]/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-playfair text-[#AE3B46] text-sm mb-2">
                      {item.publication} <span className="text-[#AE3B46]/50">· {item.date}</span>
                    </p>
                    <h2 className="text-lg md:text-xl text-[#191A1B] font-medium leading-snug
                      group-hover:text-[#AE3B46] transition-colors">
                      {item.title}
                    </h2>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#AE3B46] shrink-0 mt-1
                    transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ))}
          </div>

          {/* Press inquiries */}
          <section className="text-center pt-20">
            <p className="text-[#494949] text-lg">
              For press inquiries, reach us at{' '}
              <a
                href="mailto:contact@foundherhouse.org"
                className="text-[#AE3B46] hover:underline"
              >
                contact@foundherhouse.org
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
