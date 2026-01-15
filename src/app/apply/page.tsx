'use client'

import Nav from '@/app/components/nav'
import { Sparkles } from 'lucide-react'
import { useState } from 'react'

interface FormData {
  fullName: string;
  age: string;
  startup: string;
  impressive: string;
  funFact: string;
  locationPreference: string;
  links: string;
}

interface FormErrors {
  fullName?: string;
  age?: string;
  startup?: string;
  impressive?: string;
  funFact?: string;
  locationPreference?: string;
  links?: string;
  submit?: string;
}

const WORD_LIMITS = {
  startup: 300,
  impressive: 200,
  funFact: 150
}

export default function Apply() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    age: '',
    startup: '',
    impressive: '',
    funFact: '',
    locationPreference: '',
    links: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const getWordCount = (text: string) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name'
    }
    
    if (!formData.age.trim()) {
      newErrors.age = 'Please enter your age'
    } else {
      const ageNum = parseInt(formData.age)
      if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
        newErrors.age = 'Please enter a valid age (18-100)'
      }
    }
    
    if (!formData.startup.trim()) {
      newErrors.startup = 'Please tell us about your startup'
    } else if (getWordCount(formData.startup) > WORD_LIMITS.startup) {
      newErrors.startup = `Please keep your response under ${WORD_LIMITS.startup} words`
    }
    
    if (!formData.impressive.trim()) {
      newErrors.impressive = 'Please tell us what is most impressive about you'
    } else if (getWordCount(formData.impressive) > WORD_LIMITS.impressive) {
      newErrors.impressive = `Please keep your response under ${WORD_LIMITS.impressive} words`
    }

    if (!formData.funFact.trim()) {
      newErrors.funFact = 'Please share a fun fact about yourself'
    } else if (getWordCount(formData.funFact) > WORD_LIMITS.funFact) {
      newErrors.funFact = `Please keep your response under ${WORD_LIMITS.funFact} words`
    }

    if (!formData.locationPreference) {
      newErrors.locationPreference = 'Please select your location preference'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    // Check if the field has a word limit and if the new value exceeds it
    if (WORD_LIMITS.hasOwnProperty(name as keyof typeof WORD_LIMITS)) {
      const wordCount = getWordCount(value)
      const limit = WORD_LIMITS[name as keyof typeof WORD_LIMITS]
      if (wordCount > limit) {
        setErrors(prev => ({
          ...prev,
          [name]: `Please keep your response under ${limit} words`
        }))
      } else {
        setErrors(prev => ({
          ...prev,
          [name]: ''
        }))
      }
    } else {
      // Clear error when user starts typing
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      locationPreference: value
    }))
    setErrors(prev => ({
      ...prev,
      locationPreference: ''
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          age: parseInt(formData.age),
          startup_description: formData.startup,
          impressive_thing: formData.impressive,
          fun_fact: formData.funFact,
          location_preference: formData.locationPreference,
          links: formData.links,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error('API Error:', errorData)
        const errorMessage = errorData.details 
          ? `${errorData.error}: ${errorData.details}${errorData.hint ? ` (${errorData.hint})` : ''}` 
          : errorData.error || 'Failed to submit application'
        throw new Error(errorMessage)
      }

      setSubmitSuccess(true)
      setFormData({
        fullName: '',
        age: '',
        startup: '',
        impressive: '',
        funFact: '',
        locationPreference: '',
        links: ''
      })
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        submit: error instanceof Error ? error.message : 'Failed to submit application. Please try again.'
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

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center text-center pt-8 animate-fade-in mb-12">
          <h1 className="text-6xl font-light tracking-normal mb-6 max-w-4xl leading-[1.1]">
            <span className="text-main font-playfair">Application Form</span>
          </h1>
          <div className="text-main-muted text-lg max-w-3xl mb-8 leading-relaxed space-y-4">
            <p>
              FoundHer House is a three-month residency program and shared living space for women building startups. 
              Expanding from San Francisco to New York, FoundHer House will have eight residents per location. 
              Since launching, FoundHer House has been featured on the front cover of The New York Times and USA Today 
              along with FOX, GeekWire, Apple, The Atlantic, and more.
            </p>
            <p>
              Last summer, residents collectively raised over $6.5M in funding, reached billions of people, and built 
              companies with hundreds of thousands of users across industries from healthcare to consumer social. 
              FoundHer House is designed to reduce the cost and isolation of early-stage building while concentrating 
              serious founders in a high-trust, high-output environment.
            </p>
          </div>
        </div>
        
        {submitSuccess ? (
          <div className="max-w-2xl mx-auto p-8 bg-primary/10 rounded-lg text-center backdrop-blur-sm">
            <h2 className="text-2xl text-main mb-4 font-playfair">Application Submitted!</h2>
            <p className="text-main-muted leading-relaxed mb-6">
              Thank you for your interest in FoundHer House. We've received your application and will be in touch soon.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="text-primary hover:underline"
            >
              Submit another application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-main font-medium mb-2">
                Full Name *
              </label>
              <input 
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-white text-main border 
                  ${errors.fullName ? 'border-red-500' : 'border-primary/10'}
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                  transition-colors placeholder:text-main/40`}
                placeholder="Your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label htmlFor="age" className="block text-main font-medium mb-2">
                Age *
              </label>
              <input 
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="18"
                max="100"
                className={`w-full p-3 rounded-lg bg-white text-main border 
                  ${errors.age ? 'border-red-500' : 'border-primary/10'}
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                  transition-colors placeholder:text-main/40`}
                placeholder="Your age"
              />
              {errors.age && (
                <p className="mt-1 text-red-500 text-sm">{errors.age}</p>
              )}
            </div>

            <div>
              <label className="block text-main font-medium mb-2">
                Tell us about the startup that you're building. What problem are you solving and why are you solving it? *
                <span className="text-main-muted text-sm ml-2">({WORD_LIMITS.startup} words max)</span>
              </label>
              <textarea 
                name="startup"
                value={formData.startup}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-white text-main border 
                  ${errors.startup ? 'border-red-500' : 'border-primary/10'}
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                  transition-colors placeholder:text-main/40 h-40 resize-none`}
                placeholder="Describe your startup, the problem you're solving, and why it matters to you"
              />
              <div className="flex justify-between mt-1">
                <p className={errors.startup ? "text-red-500 text-sm" : "hidden"}>{errors.startup}</p>
                <p className="text-main-muted text-sm ml-auto">
                  {getWordCount(formData.startup)}/{WORD_LIMITS.startup} words
                </p>
              </div>
            </div>

            <div>
              <label className="block text-main font-medium mb-2">
                What is the most impressive thing about you? *
                <span className="text-main-muted text-sm ml-2">({WORD_LIMITS.impressive} words max)</span>
              </label>
              <textarea 
                name="impressive"
                value={formData.impressive}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-white text-main border 
                  ${errors.impressive ? 'border-red-500' : 'border-primary/10'}
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                  transition-colors placeholder:text-main/40 h-32 resize-none`}
                placeholder="Share what makes you stand out"
              />
              <div className="flex justify-between mt-1">
                <p className={errors.impressive ? "text-red-500 text-sm" : "hidden"}>{errors.impressive}</p>
                <p className="text-main-muted text-sm ml-auto">
                  {getWordCount(formData.impressive)}/{WORD_LIMITS.impressive} words
                </p>
              </div>
            </div>

            <div>
              <label className="block text-main font-medium mb-2">
                Tell us a fun fact about you *
                <span className="text-main-muted text-sm ml-2">({WORD_LIMITS.funFact} words max)</span>
              </label>
              <textarea 
                name="funFact"
                value={formData.funFact}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-white text-main border 
                  ${errors.funFact ? 'border-red-500' : 'border-primary/10'}
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                  transition-colors placeholder:text-main/40 h-32 resize-none`}
                placeholder="Share something interesting about yourself"
              />
              <div className="flex justify-between mt-1">
                <p className={errors.funFact ? "text-red-500 text-sm" : "hidden"}>{errors.funFact}</p>
                <p className="text-main-muted text-sm ml-auto">
                  {getWordCount(formData.funFact)}/{WORD_LIMITS.funFact} words
                </p>
              </div>
            </div>

            <div>
              <label className="block text-main font-medium mb-3">
                Would you rather be in SF or NY (or no preference)? *
              </label>
              <div className="space-y-2">
                {[
                  { value: 'only_sf', label: 'Only in SF' },
                  { value: 'only_ny', label: 'Only in NY' },
                  { value: 'sf_first_ny', label: 'SF first choice but can do NY' },
                  { value: 'ny_first_sf', label: 'NY first choice but can do SF' },
                  { value: 'no_preference', label: 'No preference' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="locationPreference"
                      value={option.value}
                      checked={formData.locationPreference === option.value}
                      onChange={(e) => handleRadioChange(e.target.value)}
                      className="w-4 h-4 text-primary border-primary/30 focus:ring-primary focus:ring-2"
                    />
                    <span className="text-main group-hover:text-primary transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
              {errors.locationPreference && (
                <p className="mt-1 text-red-500 text-sm">{errors.locationPreference}</p>
              )}
            </div>

            <div>
              <label className="block text-main font-medium mb-2">
                Paste Relevant Links (LinkedIn, Portfolio, Github, X/Twitter)
              </label>
              <textarea 
                name="links"
                value={formData.links}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-white text-main border 
                  ${errors.links ? 'border-red-500' : 'border-primary/10'}
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                  transition-colors placeholder:text-main/40 h-24 resize-none`}
                placeholder="Paste links separated by commas or line breaks"
              />
              {errors.links && (
                <p className="mt-1 text-red-500 text-sm">{errors.links}</p>
              )}
            </div>

            {errors.submit && (
              <div className="text-red-500 text-center p-3 bg-red-50 rounded-lg">{errors.submit}</div>
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