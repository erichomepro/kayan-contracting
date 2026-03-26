'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Home,
  Wrench,
  CloudLightning,
  Shield,
  Building2,
  Droplets,
  Layers,
  Check,
  ChevronLeft,
  ArrowRight,
  Phone,
  Mail,
  User,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

// ===== CONSTANTS =====

const SERVICE_OPTIONS = [
  { id: 'roof-replacement', label: 'Roof Replacement', icon: Home },
  { id: 'metal-products', label: 'Metal Roofing & Products', icon: Shield },
  { id: 'steel-siding', label: 'Steel Siding', icon: Building2 },
  { id: 'roof-repair', label: 'Roof Repair', icon: Wrench },
  { id: 'storm-damage', label: 'Storm / Hail Damage', icon: CloudLightning },
  { id: 'eavestroughing', label: 'Seamless Eavestroughing', icon: Droplets },
  { id: 'soffits-fascia', label: 'Soffits & Fascia', icon: Layers },
  { id: 'other', label: 'Other / Not Sure', icon: MessageSquare },
]

const PROPERTY_TYPES = [
  { id: 'residential', label: 'Residential', icon: Home },
  { id: 'commercial', label: 'Commercial', icon: Building2 },
]

const TIMELINE_OPTIONS = [
  { id: 'asap', label: 'As Soon As Possible' },
  { id: '1-month', label: 'Within 1 Month' },
  { id: '1-3-months', label: '1-3 Months' },
  { id: 'just-exploring', label: 'Just Exploring Options' },
]

const CALL_TIMES = [
  { id: 'morning', label: 'Morning' },
  { id: 'afternoon', label: 'Afternoon' },
  { id: 'evening', label: 'Evening' },
]

// ===== ZOD SCHEMA =====

const leadSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[\d\s()+-]{7,20}$/, 'Please enter a valid phone number'),
  email: z
    .string()
    .transform((val) => (val === '' ? undefined : val))
    .pipe(z.string().email('Please enter a valid email').optional()),
  address: z.string().optional(),
  callTime: z.enum(['morning', 'afternoon', 'evening']).optional(),
  message: z.string().optional(),
})

// ===== ANIMATION VARIANTS =====

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
}

// ===== SUB-COMPONENTS =====

function ProgressBar({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}

function BackButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-white/40 hover:text-white transition-colors mb-6 cursor-pointer"
    >
      <ChevronLeft className="w-4 h-4" />
      Back
    </button>
  )
}

function StepTitle({ children, subtitle }) {
  return (
    <div className="text-center mb-6">
      <h3 className="text-xl md:text-2xl font-display font-bold text-white normal-case">
        {children}
      </h3>
      {subtitle && (
        <p className="text-sm text-white/40 mt-2">{subtitle}</p>
      )}
    </div>
  )
}

function OptionButton({ icon: Icon, label, selected, onClick }) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative w-full flex items-center gap-4 p-4 min-h-[3rem]
        rounded-xl text-left font-medium transition-all cursor-pointer
        ${
          selected
            ? 'bg-accent/10 border-2 border-accent text-white'
            : 'glass-card hover:border-accent/30 text-white'
        }
      `}
    >
      {Icon && (
        <span
          className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
            selected ? 'bg-accent text-white' : 'bg-white/[0.06] text-white/50'
          }`}
        >
          <Icon className="w-5 h-5" />
        </span>
      )}
      <span className="flex-1">
        <span className="block font-display font-semibold text-base normal-case">{label}</span>
      </span>
      {selected && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center"
        >
          <Check className="w-4 h-4" />
        </motion.span>
      )}
    </motion.button>
  )
}

// ===== STEP COMPONENTS =====

function StepServiceType({ value, onSelect }) {
  return (
    <div>
      <StepTitle subtitle="Select all that apply">
        What services are you interested in?
      </StepTitle>
      <div className="grid gap-3 sm:grid-cols-2">
        {SERVICE_OPTIONS.map((option) => (
          <OptionButton
            key={option.id}
            icon={option.icon}
            label={option.label}
            selected={value.includes(option.id)}
            onClick={() => onSelect(option.id)}
          />
        ))}
      </div>
      {value.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-white/40">
            {value.length} service{value.length > 1 ? 's' : ''} selected
          </p>
        </motion.div>
      )}
    </div>
  )
}

function StepPropertyAndTimeline({ propertyType, onPropertySelect, timeline, onTimelineSelect }) {
  return (
    <div className="space-y-8">
      <div>
        <StepTitle>What type of property?</StepTitle>
        <div className="grid gap-3 sm:grid-cols-2">
          {PROPERTY_TYPES.map((option) => (
            <OptionButton
              key={option.id}
              icon={option.icon}
              label={option.label}
              selected={propertyType === option.id}
              onClick={() => onPropertySelect(option.id)}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-display font-bold text-white mb-4 text-center normal-case">
          When are you looking to start?
        </h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {TIMELINE_OPTIONS.map((option) => (
            <OptionButton
              key={option.id}
              label={option.label}
              selected={timeline === option.id}
              onClick={() => onTimelineSelect(option.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function StepContactInfo({ onSubmitSuccess, services: selectedServices, propertyType, timeline }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      address: '',
      callTime: undefined,
      message: '',
    },
  })

  const onSubmit = async (data) => {
    const payload = {
      business_name: data.name,
      contact_name: data.name,
      email: data.email || null,
      phone: data.phone,
      source: 'Website Quote Form',
      inquiry_type: 'Quote Request',
      form_data: {
        services_requested: selectedServices,
        property_type: propertyType,
        timeline: timeline,
        address: data.address || null,
        preferred_call_time: data.callTime || null,
        message: data.message || null,
      },
      services_interested: selectedServices,
      pipeline_stage: 'New',
      lead_score: timeline === 'asap' ? 'Hot' : timeline === '1-month' ? 'Warm' : 'Cold',
    }

    try {
      const SUPABASE_URL = 'https://ahzfmgfjuzlotvpibjtl.supabase.co'
      const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoemZtZ2ZqdXpsb3R2cGlianRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4OTg4NDcsImV4cCI6MjA1NzQ3NDg0N30.kPMbJMoJfIcMKcVs8j6q1GfxAWJqBIjYXP5sBPBu0bM'

      const orgRes = await fetch(`${SUPABASE_URL}/rest/v1/organizations?slug=eq.kay&select=id`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
      })
      const orgs = await orgRes.json()
      const orgId = orgs?.[0]?.id

      if (orgId) {
        payload.org_id = orgId

        await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal',
          },
          body: JSON.stringify(payload),
        })
      }
    } catch (err) {
      console.error('Lead submission error:', err)
    }

    onSubmitSuccess(data)
  }

  const inputClass = (hasError) => `
    w-full pl-10 pr-4 py-3 rounded-lg bg-white/[0.04] text-white placeholder:text-white/20
    border ${hasError ? 'border-red-500' : 'border-white/[0.06]'}
    focus:outline-none focus:border-accent transition-colors
  `

  return (
    <div>
      <StepTitle subtitle="We'll get back to you within one business day.">
        Almost done! How can we reach you?
      </StepTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-md mx-auto">
        <div>
          <label htmlFor="calc-name" className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">
            Name <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
            <input
              id="calc-name"
              type="text"
              placeholder="Your name"
              {...register('name')}
              className={inputClass(errors.name)}
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="calc-phone" className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">
            Phone <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
            <input
              id="calc-phone"
              type="tel"
              placeholder="(780) 555-1234"
              {...register('phone')}
              className={inputClass(errors.phone)}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="calc-email" className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
            <input
              id="calc-email"
              type="email"
              placeholder="you@example.com"
              {...register('email')}
              className={inputClass(errors.email)}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="calc-address" className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">
            Property Address
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
            <input
              id="calc-address"
              type="text"
              placeholder="123 Main St, Stony Plain"
              {...register('address')}
              className={inputClass(false)}
            />
          </div>
        </div>

        <fieldset>
          <legend className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
            <Clock className="inline-block w-3.5 h-3.5 mr-1.5 -mt-0.5 text-white/20" />
            Best time to call
          </legend>
          <div className="flex gap-3 flex-wrap">
            {CALL_TIMES.map((time) => (
              <label
                key={time.id}
                className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg glass-card has-[:checked]:border-accent has-[:checked]:bg-accent/10 transition-all"
              >
                <input
                  type="radio"
                  value={time.id}
                  {...register('callTime')}
                  className="sr-only"
                />
                <span className="text-sm font-medium text-white">{time.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="calc-message" className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">
            Anything else we should know?
          </label>
          <textarea
            id="calc-message"
            rows={3}
            placeholder="Tell us about your project..."
            {...register('message')}
            className="w-full px-4 py-3 rounded-lg bg-white/[0.04] text-white placeholder:text-white/20 border border-white/[0.06] focus:outline-none focus:border-accent transition-colors resize-none"
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-display font-bold text-xs uppercase tracking-widest rounded-lg copper-glow hover:bg-accent-hover transition-colors disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
              Sending...
            </>
          ) : (
            <>
              Send My Quote Request
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </motion.button>

        <p className="text-xs text-white/30 text-center flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5" />
          Your information is private. We never share your details.
        </p>
      </form>
    </div>
  )
}

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="text-center py-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 15 }}
        className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle2 className="w-10 h-10 text-accent" />
      </motion.div>

      <h3 className="text-2xl font-display font-bold text-white mb-3 normal-case">
        Quote Request Sent!
      </h3>
      <p className="text-white/50 max-w-sm mx-auto leading-relaxed mb-6">
        Thanks for reaching out! Bryan will be in touch within one business day
        to discuss your project and schedule a free on-site inspection.
      </p>
      <a
        href="tel:+17809840221"
        className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:underline"
      >
        <Phone className="w-4 h-4" />
        Need it sooner? Call (780) 984-0221
      </a>
    </motion.div>
  )
}

// ===== MAIN COMPONENT =====

export default function RoofCalculator() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const [selectedServices, setSelectedServices] = useState([])
  const [propertyType, setPropertyType] = useState(null)
  const [timeline, setTimeline] = useState(null)

  const goForward = useCallback(() => {
    setDirection(1)
    setStep((s) => s + 1)
  }, [])

  const goBack = useCallback(() => {
    setDirection(-1)
    setStep((s) => s - 1)
  }, [])

  const handleServiceToggle = useCallback((serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    )
  }, [])

  const handleLeadSubmit = useCallback(() => {
    setSubmitted(true)
  }, [])

  const canAdvanceStep1 = selectedServices.length > 0
  const canAdvanceStep2 = propertyType && timeline

  const renderStep = () => {
    if (submitted) return <SuccessState />

    switch (step) {
      case 1:
        return (
          <StepServiceType
            value={selectedServices}
            onSelect={handleServiceToggle}
          />
        )
      case 2:
        return (
          <StepPropertyAndTimeline
            propertyType={propertyType}
            onPropertySelect={setPropertyType}
            timeline={timeline}
            onTimelineSelect={setTimeline}
          />
        )
      case 3:
        return (
          <StepContactInfo
            onSubmitSuccess={handleLeadSubmit}
            services={selectedServices}
            propertyType={propertyType}
            timeline={timeline}
          />
        )
      default:
        return null
    }
  }

  return (
    <section id="quote" className="py-(--spacing-section) bg-surface">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <SectionHeading
          label="GET A FREE QUOTE"
          heading="Request Your Free Consultation"
        />

        <div className="glass-card rounded-xl p-6 sm:p-8 md:p-10 copper-glow">
          {!submitted && <ProgressBar currentStep={step} totalSteps={3} />}

          {step >= 2 && !submitted && <BackButton onClick={goBack} />}

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={submitted ? 'success' : step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          {!submitted && step <= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6"
            >
              <motion.button
                type="button"
                whileHover={{ scale: (step === 1 ? canAdvanceStep1 : canAdvanceStep2) ? 1.02 : 1 }}
                whileTap={{ scale: (step === 1 ? canAdvanceStep1 : canAdvanceStep2) ? 0.98 : 1 }}
                onClick={goForward}
                disabled={step === 1 ? !canAdvanceStep1 : !canAdvanceStep2}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-display font-bold text-xs uppercase tracking-widest rounded-lg copper-glow hover:bg-accent-hover transition-colors disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
