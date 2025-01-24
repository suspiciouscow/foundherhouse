'use client'

import { useState } from 'react'
import Nav from '@/components/nav'
import { Sparkles } from 'lucide-react'

interface FormData {
  fullName: string;
  email: string;
  project: string;
  about: string;
  unique: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  project?: string;
  about?: string;
  unique?: string;
  submit?: string;
}

const WORD_LIMITS = {
  project: 200,
  about: 300,
  unique: 150
}

export default function Apply() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    project: '',
    about: '',
    unique: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const getWordCount = (text: string) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}
    
    if (!formData.fullName.trim() || !/^[a-zA-Z\s]{2,50}$/.test(formData.fullName)) {
      newErrors.fullName = 'Please enter a valid name (2-50 characters, letters only)'
    }
    
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    for (const field of ['project', 'about', 'unique'] as const) {
      const wordCount = getWordCount(formData[field])
      if (!formData[field].trim()) {
        newErrors[field] = `This field is required`
      } else if (wordCount > WORD_LIMITS[field]) {
        newErrors[field] = `Please keep your response under ${WORD_LIMITS[field]} words`
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (WORD_LIMITS.hasOwnProperty(name as keyof typeof WORD_LIMITS)) {
      const wordCount = getWordCount(value)
      const limit = WORD_LIMITS[name as keyof typeof WORD_LIMITS]
      setErrors(prev => ({
        ...prev,
        [name]: wordCount > limit ? `Please keep your response under ${limit} words` : ''
      }))
    }
    setFormData(prev => ({ ...prev, [name]: value }))
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

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Submission failed')
      }

      setSubmitSuccess(true)
      setFormData({
        fullName: '',
        email: '',
        project: '',
        about: '',
        unique: ''
      })
    } catch (error) {
      console.error('Submission error:', error)
      setErrors(prev => ({
        ...prev,
        submit: error instanceof Error ? error.message : 'Failed to submit application'
      }))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Nav />
      
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
              <label className="block text-main font-medium mb-2">
                What is the most impressive thing you&apos;ve worked on?
                <span className="text-main-muted text-sm ml-2">({WORD_LIMITS.project} words max)</span>
              </label>
              <textarea 
                name="project"
                value={formData.project}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-white text-main border 
                  ${errors.project ? 'border-red-500' : 'border-primary/10'}
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                  transition-colors placeholder:text-main/40 h-32 resize-none`}
                placeholder="Your startup, project, or something else you've built"
              />
              <div className="flex justify-between mt-1">
                <p className={errors.project ? "text-red-500 text-sm" : "hidden"}>{errors.project}</p>
                <p className="text-main-muted text-sm ml-auto">
                  {getWordCount(formData.project)}/{WORD_LIMITS.project} words
                </p>
              </div>
            </div>

            <div>
              <label className="block text-main font-medium mb-2">
                Why do you want to join FoundHer House?
                <span className="text-main-muted text-sm ml-2">({WORD_LIMITS.about} words max)</span>
              </label>
              <textarea 
                name="about"
                value={formData.about}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-white text-main border 
                  ${errors.about ? 'border-red-500' : 'border-primary/10'}
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                  transition-colors placeholder:text-main/40 h-32 resize-none`}
                placeholder="Tell us about your goals and how FoundHer House can help you achieve them"
              />
              <div className="flex justify-between mt-1">
                <p className={errors.about ? "text-red-500 text-sm" : "hidden"}>{errors.about}</p>
                <p className="text-main-muted text-sm ml-auto">
                  {getWordCount(formData.about)}/{WORD_LIMITS.about} words
                </p>
              </div>
            </div>

            <div>
              <label className="block text-main font-medium mb-2">
                What is something unique about you?
                <span className="text-main-muted text-sm ml-2">({WORD_LIMITS.unique} words max)</span>
              </label>
              <textarea 
                name="unique"
                value={formData.unique}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-white text-main border 
                  ${errors.unique ? 'border-red-500' : 'border-primary/10'}
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                  transition-colors placeholder:text-main/40 h-32 resize-none`}
                placeholder="Tell us something interesting or unique about yourself"
              />
              <div className="flex justify-between mt-1">
                <p className={errors.unique ? "text-red-500 text-sm" : "hidden"}>{errors.unique}</p>
                <p className="text-main-muted text-sm ml-auto">
                  {getWordCount(formData.unique)}/{WORD_LIMITS.unique} words
                </p>
              </div>
            </div>

            {errors.submit && (
              <div className="text-red-500 text-center">{errors.submit}</div>
            )}

            <div className="pt-4 w-full flex items-center justify-center">   
              <button 
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center justify-center transition-all duration-300"
              >
                <div className="absolute inset-0 w-full h-full bg-black rounded-lg transform
                  transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
                <div className={`relative inline-flex items-center justify-center px-6 py-3
                  text-base font-medium text-white bg-[#AE3B46]
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