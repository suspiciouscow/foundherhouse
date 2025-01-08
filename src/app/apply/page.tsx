'use client'

import { useState } from 'react'
import Nav from '@/components/nav'
import { Sparkles } from 'lucide-react'

interface FormData {
  fullName: string;
  email: string;
  project: string;
  about: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  project?: string;
  about?: string;
  submit?: string;
}

export default function Apply() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    project: '',
    about: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: FormErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.project.trim()) {
      newErrors.project = 'Please tell us what you are working on'
    }
    
    if (!formData.about.trim()) {
      newErrors.about = 'Please tell us about yourself'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {  // Add type assertion here
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setSubmitSuccess(true)
      setFormData({
        fullName: '',
        email: '',
        project: '',
        about: ''
      })
    } catch {
      setErrors(prev => ({
        ...prev,
        submit: 'Failed to submit application. Please try again.'
      }))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Nav />
      
      {/* Decorative elements */}
      <div className="decorative-asterisk decorative-asterisk-top-right">*</div>
      <div className="decorative-asterisk decorative-asterisk-bottom-left">*</div>

      <main className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center pt-20 animate-fade-in">
          <h1 className="text-6xl font-light tracking-normal mb-6 max-w-4xl leading-[1.1]">
            <span className="text-main font-playfair">Apply Now</span>
          </h1>
          <p className="text-main-muted text-lg max-w-2xl mb-12 leading-relaxed">
            Join our community of ambitious women founders and innovators
          </p>
        </div>
        
        {submitSuccess ? (
          <div className="max-w-2xl mx-auto p-8 bg-primary/10 rounded-lg text-center backdrop-blur-sm">
            <h2 className="text-2xl text-main mb-2 font-playfair">Application Submitted!</h2>
            <p className="text-main-muted">Thank you for applying. We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8 pb-24">
            <div>
              <label className="block text-main font-medium mb-2">Full Name</label>
              <input 
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-white text-main border 
                  ${errors.fullName ? 'border-red-500' : 'border-primary/10'}
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                  transition-colors placeholder:text-main/40`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-main font-medium mb-2">Email</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-white text-main border 
                  ${errors.email ? 'border-red-500' : 'border-primary/10'}
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                  transition-colors placeholder:text-main/40`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-main font-medium mb-2">What are you working on?</label>
              <input 
                type="text"
                name="project"
                value={formData.project}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-white text-main border 
                  ${errors.project ? 'border-red-500' : 'border-primary/10'}
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                  transition-colors placeholder:text-main/40`}
                placeholder="Your startup idea or current project"
              />
              {errors.project && (
                <p className="mt-1 text-red-500 text-sm">{errors.project}</p>
              )}
            </div>

            <div>
              <label className="block text-main font-medium mb-2">Tell us about yourself</label>
              <textarea 
                name="about"
                value={formData.about}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-white text-main border 
                  ${errors.about ? 'border-red-500' : 'border-primary/10'}
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                  transition-colors placeholder:text-main/40 h-32 resize-none`}
                placeholder="Share your story, experience, and vision"
              />
              {errors.about && (
                <p className="mt-1 text-red-500 text-sm">{errors.about}</p>
              )}
            </div>

            {errors.submit && (
              <div className="text-red-500 text-center">{errors.submit}</div>
            )}

            <div className="pt-4">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full inline-flex items-center justify-center transition-all duration-300"
              >
                <div className="absolute inset-0 w-full h-full bg-black rounded-lg transform
                  transition-transform group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-lg shadow-[#000000]"></div>
                <div className={`relative w-full inline-flex items-center justify-center px-10 py-4
                  text-lg font-medium text-white bg-[#AE3B46]
                  border border-[#191A1B] rounded-lg ${isSubmitting ? 'opacity-75' : ''}`}>
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  <Sparkles className="ml-2 w-4 h-4" />
                </div>
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  )
}