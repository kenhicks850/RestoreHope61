import { useState } from 'react'
import { cn } from '../lib/utils'
import { needsOptions, ageRanges } from '../lib/data'
import { Button } from './Button'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    age_range: '',
    needs: [],
    message: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      setFormState((prev) => ({
        ...prev,
        needs: checked
          ? [...prev.needs, value]
          : prev.needs.filter((n) => n !== value),
      }))
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }))
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formState.name.trim()) newErrors.name = 'Name is required'
    if (!formState.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formState.email.trim()) newErrors.email = 'Email is required'
    if (formState.needs.length === 0)
      newErrors.needs = 'Please select at least one area'
    if (!formState.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      e.preventDefault()
      setErrors(newErrors)
      return
    }
    // Form will submit naturally to FormSubmit
  }

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-crosses" />

      <div className="relative z-10 max-w-[1140px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Content */}
          <div className="lg:max-w-[400px]">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
              Get Help Today
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">
              We're Here for You
            </h2>
            <p className="text-lg text-white/80 mb-8">
              For assistance connecting with resources or guidance on which
              services may best meet your needs, please reach out. All inquiries
              are confidential.
            </p>
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-4 bg-white/10 rounded-[--radius-md] font-semibold">
              <span className="text-secondary">Safety</span>
              <span className="text-white/40">→</span>
              <span className="text-secondary">Stability</span>
              <span className="text-white/40">→</span>
              <span className="text-secondary">Restoration</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-[--radius-xl] p-8 shadow-xl">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gray-900 mb-6">
              Request Help
            </h3>

            <form
              action="https://formsubmit.co/kenhicks850@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="_subject"
                value="New Help Request from RestoreHope61"
              />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_template" value="table" />

              {/* Name & Phone */}
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={cn(
                      'w-full px-4 py-3 text-gray-700 bg-gray-50',
                      'border rounded-[--radius-md]',
                      'transition-all duration-150',
                      'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10',
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    )}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="(256) 555-1234"
                    className={cn(
                      'w-full px-4 py-3 text-gray-700 bg-gray-50',
                      'border rounded-[--radius-md]',
                      'transition-all duration-150',
                      'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10',
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    )}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Email & Age */}
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={cn(
                      'w-full px-4 py-3 text-gray-700 bg-gray-50',
                      'border rounded-[--radius-md]',
                      'transition-all duration-150',
                      'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10',
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    )}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Age Range
                  </label>
                  <select
                    id="age"
                    name="age_range"
                    value={formState.age_range}
                    onChange={handleChange}
                    className={cn(
                      'w-full px-4 py-3 text-gray-700 bg-gray-50',
                      'border border-gray-300 rounded-[--radius-md]',
                      'transition-all duration-150 cursor-pointer appearance-none',
                      'bg-[url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2378716c\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")]',
                      'bg-no-repeat bg-[right_0.75rem_center] bg-[length:16px]',
                      'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10'
                    )}
                  >
                    <option value="">Select age range</option>
                    {ageRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Needs checkboxes */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  What areas do you need help with?{' '}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {needsOptions.map((need) => (
                    <label
                      key={need}
                      className={cn(
                        'inline-flex items-center gap-2 px-4 py-2.5',
                        'rounded-md cursor-pointer select-none',
                        'text-sm font-medium',
                        'border transition-all duration-200',
                        formState.needs.includes(need)
                          ? 'bg-primary text-white border-primary shadow-md'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-primary hover:bg-primary/5'
                      )}
                    >
                      <input
                        type="checkbox"
                        name="needs[]"
                        value={need}
                        checked={formState.needs.includes(need)}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {formState.needs.includes(need) && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {need}
                    </label>
                  ))}
                </div>
                {errors.needs && (
                  <p className="mt-2 text-sm text-red-500">{errors.needs}</p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  How can we help? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Please tell us about your situation..."
                  className={cn(
                    'w-full px-4 py-3 text-gray-700 bg-gray-50',
                    'border rounded-[--radius-md] resize-y min-h-[120px]',
                    'transition-all duration-150',
                    'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10',
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  )}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <Button type="submit" variant="secondary" size="lg" className="w-full">
                Send Request
              </Button>

              <p className="mt-4 text-xs text-gray-500 text-center">
                All information is kept strictly confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
