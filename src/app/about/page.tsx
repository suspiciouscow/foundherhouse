import Nav from '@/components/nav'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="decorative-asterisk decorative-asterisk-top-right">*</div>
      <div className="decorative-asterisk decorative-asterisk-bottom-left">*</div>
      
      <Nav />

      <main className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center pt-20 animate-fade-in">
          {/* Header Section */}
          <h1 className="text-6xl font-light tracking-normal mb-6 max-w-4xl leading-[1.1]">
            <span className="text-main font-playfair">About </span>
          </h1>
          <p className="text-main-muted text-lg max-w-2xl mb-12 leading-relaxed">
            Building a community of ambitious women founders
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16 pb-24">
          {/* Our Story Section */}
          <section className="space-y-4">
            <h2 className="text-3xl text-primary font-medium font-playfair">Our Story</h2>
            <p className="text-main-muted leading-relaxed">
              FoundHer House was created to address the unique challenges women founders face in the tech industry. 
              Our space is designed to foster collaboration, innovation, and growth in a supportive environment 
              where ambitious women can build and scale their startups.
            </p>
          </section>

          {/* What We Offer Section */}
          <section className="space-y-6">
            <h2 className="text-3xl text-primary font-medium font-playfair">What We Offer</h2>
            <div className="grid sm:grid-cols-2 gap-8">
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
                <div key={index} 
                  className="space-y-3 p-6 bg-white/90 rounded-lg backdrop-blur-sm elegant-shadow 
                    transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-main font-medium font-playfair">{item.title}</h3>
                  <p className="text-main-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="space-y-6">
            <h2 className="text-3xl text-primary font-medium font-playfair">Our Values</h2>
            <div className="space-y-4">
              {[
                "Innovation: Embracing new ideas and creative solutions",
                "Community: Supporting and empowering each other",
                "Growth: Continuous learning and development",
                "Impact: Creating meaningful change in tech"
              ].map((value, index) => (
                <div key={index} 
                  className="flex items-center space-x-3 p-4 bg-white/90 rounded-lg 
                    elegant-shadow transition-all duration-300 hover:shadow-lg">
                  <span className="text-primary font-playfair">*</span>
                  <span className="text-main-muted">{value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center pt-8">
            <p className="text-main-muted mb-8 text-lg">
              Ready to join our community of founders?
            </p>
            <Link
              href="/apply"
              className="group relative inline-flex items-center justify-center transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-black rounded-lg transform
                transition-transform group-hover:translate-x-1 group-hover:translate-y-1 shadow-lg shadow-[#000000]"></div>
              <div className="relative inline-flex items-center justify-center px-10 py-4
                text-lg font-medium text-white bg-[#AE3B46]
                border border-[#191A1B] rounded-lg group-hover:shadow-lg">
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