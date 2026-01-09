'use client'

import Nav from '@/app/components/nav'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'

export default function Residents() {
  const cofounders = [
    {
      name: "Miki Safronov-Yamamoto",
      bio: "Founder of Veyra, an AI tool that detects and disputes medical billing errors. Former Microsoft product design intern; helped patients save thousands.",
      company: "Veyra",
      role: "Co-founder, FoundHer House"
    },
    {
      name: "Anantika Mannby",
      bio: "Founder of Treffa, a product recommendation platform with 400M+ views. Techstars alum and UX/AI growth expert.",
      company: "Treffa",
      role: "Co-founder, FoundHer House"
    }
  ]

  const residents = [
    {
      name: "Sonya Jin",
      bio: "Former AI researcher at NVIDIA and AWS; youngest Applied Scientist hired to AWS AI Lab. Now building Phinity Labs, a no-code platform for aligning LLMs with reinforcement learning and synthetic data.",
      company: "Phinity Labs"
    },
    {
      name: "Ava Poole",
      bio: "Fellow at Bain Capital Ventures, NEA, and Kleiner Perkins. Building Paygent, the first US manufacturer-to-consumer essentials platform powered by agentic AI.",
      company: "Paygent"
    },
    {
      name: "Danica Sun",
      bio: "Stanford CS student, COP28 speaker, and author of a viral climate bill. Now building geospatial tech to de-risk clean energy development.",
      company: "Insitu Energy"
    },
    {
      name: "Naciima Mohamed",
      bio: "Former Team USA Karate athlete and Gates Scholar. Founder of Cartoon Care, using animation to help kids understand their health journeys.",
      company: "Cartoon Care"
    },
    {
      name: "Chloe Hughes",
      bio: "Stanford Data Science student and former product/growth lead. Founder of Abodex, a new kind of real estate platform for investors.",
      company: "Abodex"
    },
    {
      name: "Fatimah Hussain",
      bio: "UC Berkeley CS student and 2x TEDx speaker. Created viral games and a hit fitness app. Now growing @fatimahs.guide, a student advice platform with 100K+ followers.",
      company: "@fatimahs.guide"
    }
  ]

  const ResidentCard = ({ resident }: { resident: any }) => (
    <div className="group relative">
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
        {/* Placeholder Headshot */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="w-full h-full bg-gradient-to-br from-[#AE3B46]/20 to-[#AE3B46]/10 rounded-full flex items-center justify-center">
            <div className="text-[#AE3B46] text-4xl font-light">
              {resident.name.split(' ').map((n: string) => n[0]).join('')}
            </div>
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-[#AE3B46]/20 group-hover:border-[#AE3B46]/40 transition-colors"></div>
        </div>
        
        {/* Name and Company */}
        <div className="text-center mb-4">
          <h3 className="text-xl text-[#191A1B] font-playfair mb-1">{resident.name}</h3>
          <p className="text-[#AE3B46] font-medium">{resident.company}</p>
        </div>
        
        {/* Bio */}
        <p className="text-[#494949] text-sm leading-relaxed text-center">
          {resident.bio}
        </p>
      </div>
    </div>
  )

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
            <span className="font-playfair">Meet Our Founders</span>
          </h1>
          <p className="text-[#494949] text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            FoundHer House Residents (Summer 2025)
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-[#AE3B46] hover:text-[#8B2E37] transition-colors mb-16"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to About
          </Link>
        </div>

        <div className="max-w-6xl mx-auto pb-24 space-y-24">
          {/* Co-founders Section */}
          <section>
            <h2 className="text-3xl text-[#191A1B] font-medium font-playfair mb-12 text-center">
              Co-founders of FoundHer House
            </h2>
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                {cofounders.map((cofounder, index) => (
                  <ResidentCard key={index} resident={cofounder} />
                ))}
              </div>
            </div>
          </section>

          {/* Other Residents */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residents.map((resident, index) => (
              <ResidentCard key={index} resident={resident} />
            ))}
          </div>
        </div>

        {/* Moving Logos Section */}
        <section className="py-16 mb-24">
          <h3 className="text-center text-xl font-playfair mb-8 text-[#191A1B]">
            Where Our Residents Come From
          </h3>
          <div className="overflow-hidden">
            <div className="flex animate-scroll items-center space-x-16 whitespace-nowrap">
              {/* Logos, duplicated inline for seamless loop */}
              {[
                '/logos/nvidia.png',
                '/logos/Amazon_Web_Services-Logo.wine.png',
                '/logos/baincapital.png',
                '/logos/nea.png',
                '/logos/kleiner .png',
                '/logos/stanford.png',
                '/logos/un logo.png',
                '/logos/bill-melinda-gates-foundation-logo-png-transparent.webp',
                '/logos/Microsoft_logo.svg.png',
                '/logos/Seal_of_University_of_California,_Berkeley.svg.png',
                '/logos/apple.png',
                '/logos/Cornell_University_seal.svg.png',
                '/logos/UniversityofPennsylvania_SimplifiedLogo_RGB-2.png',
                '/logos/USC-Logo.png',
                '/logos/Massachusetts_Institute_of_Technology-Logo.wine.svg',
                // duplicate for seamless loop
                '/logos/nvidia.png',
                '/logos/Amazon_Web_Services-Logo.wine.png',
                '/logos/baincapital.png',
                '/logos/nea.png',
                '/logos/kleiner .png',
                '/logos/stanford.png',
                '/logos/un logo.png',
                '/logos/bill-melinda-gates-foundation-logo-png-transparent.webp',
                '/logos/Microsoft_logo.svg.png',
                '/logos/Seal_of_University_of_California,_Berkeley.svg.png',
                '/logos/apple.png',
                '/logos/Cornell_University_seal.svg.png',
                '/logos/UniversityofPennsylvania_SimplifiedLogo_RGB-2.png',
                '/logos/USC-Logo.png',
                '/logos/Massachusetts_Institute_of_Technology-Logo.wine.svg',
              ].map((src, idx) => (
                <span key={idx} className="inline-block flex-shrink-0">
                  {src === '/logos/bill-melinda-gates-foundation-logo-png-transparent.webp' ? (
                    <Image src={src} alt="Bill & Melinda Gates Foundation" width={260} height={130} className="h-32 w-auto flex-shrink-0" />
                  ) : (
                    <Image src={src} alt="logo" width={120} height={60} className="h-12 w-auto flex-shrink-0" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center pt-16 pb-24">
          <p className="text-[#494949] mb-8 text-lg">
            Inspired by our community? Join us for the next cohort.
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
        </div>
      </main>
    </div>
  )
} 