import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Home,
  Wrench,
  CloudLightning,
  HelpCircle,
  Building2,
  Store,
  Check,
  ChevronLeft,
  ArrowRight,
  Phone,
  Mail,
  User,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

// ===== CONSTANTS =====

const TOTAL_STEPS = 7

const SERVICE_TYPES = [
  { id: 'replacement', label: 'Roof Replacement', icon: Home },
  { id: 'repair', label: 'Roof Repair', icon: Wrench },
  { id: 'storm', label: 'Storm Damage', icon: CloudLightning },
  { id: 'unsure', label: 'Not Sure', icon: HelpCircle },
]

const PROPERTY_TYPES = [
  { id: 'single-family', label: 'Single-Family Home', icon: Home },
  { id: 'townhouse', label: 'Townhouse / Duplex', icon: Building2 },
  { id: 'commercial', label: 'Commercial', icon: Store },
]

const ROOF_SIZES = [
  { id: 'under-1000', label: 'Under 1,000 sq ft', midpoint: 800 },
  { id: '1000-1500', label: '1,000 - 1,500 sq ft', midpoint: 1250 },
  { id: '1500-2000', label: '1,500 - 2,000 sq ft', midpoint: 1750 },
  { id: '2000-2500', label: '2,000 - 2,500 sq ft', midpoint: 2250 },
  { id: '2500-plus', label: '2,500+ sq ft', midpoint: 3000 },
]

const STORIES = [
  { id: '1', label: '1 Story', multiplier: 1.0 },
  { id: '2', label: '2 Stories', multiplier: 1.15 },
  { id: '3+', label: '3+ Stories', multiplier: 1.3 },
]

const MATERIALS = [
  {
    id: 'asphalt',
    label: 'Asphalt Shingles ($)',
    description: 'Most popular, 25-30 year lifespan',
    rateMin: 4.5,
    rateMax: 6.5,
  },
  {
    id: 'metal',
    label: 'Metal Roofing ($$$)',
    description: 'Premium, 40-70 year lifespan',
    rateMin: 8,
    rateMax: 12,
  },
  {
    id: 'unsure',
    label: 'Not Sure Yet',
    description: "We'll help you decide",
    rateMin: 4.5,
    rateMax: 6.5,
  },
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
    .regex(
      /^[\d\s()+-]{7,20}$/,
      'Please enter a valid phone number'
    ),
  email: z
    .string()
    .transform((val) => (val === '' ? undefined : val))
    .pipe(z.string().email('Please enter a valid email').optional()),
  callTime: z.enum(['morning', 'afternoon', 'evening']).optional(),
})

// ===== ESTIMATE CALCULATOR =====

function calculateEstimate({ serviceType, roofSize, stories, material }) {
  if (serviceType === 'repair') {
    return { low: 300, high: 3000, isRepair: true, isStorm: false }
  }

  if (serviceType === 'storm') {
    return { low: 300, high: 3000, isRepair: false, isStorm: true }
  }

  const sizeData = ROOF_SIZES.find((s) => s.id === roofSize)
  const storyData = STORIES.find((s) => s.id === stories)
  const materialData = MATERIALS.find((m) => m.id === material)

  if (!sizeData || !storyData || !materialData) {
    return { low: 0, high: 0, isRepair: false, isStorm: false }
  }

  const sqft = sizeData.midpoint
  const multiplier = storyData.multiplier
  const low = Math.round(sqft * materialData.rateMin * multiplier)
  const high = Math.round(sqft * materialData.rateMax * multiplier)

  return { low, high, isRepair: false, isStorm: false }
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

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

function StepTitle({ children }) {
  return (
    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-6 text-center normal-case">
      {children}
    </h3>
  )
}

function OptionButton({ icon: Icon, label, description, selected, onClick }) {
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
        {description && (
          <span className="block text-sm text-white/40 mt-0.5">{description}</span>
        )}
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
      <StepTitle>What do you need?</StepTitle>
      <div className="grid gap-3">
        {SERVICE_TYPES.map((option) => (
          <OptionButton
            key={option.id}
            icon={option.icon}
            label={option.label}
            selected={value === option.id}
            onClick={() => onSelect(option.id)}
          />
        ))}
      </div>
    </div>
  )
}

function StepPropertyType({ value, onSelect }) {
  return (
    <div>
      <StepTitle>What type of property?</StepTitle>
      <div className="grid gap-3">
        {PROPERTY_TYPES.map((option) => (
          <OptionButton
            key={option.id}
            icon={option.icon}
            label={option.label}
            selected={value === option.id}
            onClick={() => onSelect(option.id)}
          />
        ))}
      </div>
    </div>
  )
}

function StepRoofSize({ value, onSelect }) {
  return (
    <div>
      <StepTitle>Approximate roof size?</StepTitle>
      <div className="grid gap-3">
        {ROOF_SIZES.map((option) => (
          <OptionButton
            key={option.id}
            label={option.label}
            selected={value === option.id}
            onClick={() => onSelect(option.id)}
          />
        ))}
      </div>
    </div>
  )
}

function StepStories({ value, onSelect }) {
  return (
    <div>
      <StepTitle>Number of stories?</StepTitle>
      <div className="grid gap-3">
        {STORIES.map((option) => (
          <OptionButton
            key={option.id}
            label={option.label}
            selected={value === option.id}
            onClick={() => onSelect(option.id)}
          />
        ))}
      </div>
    </div>
  )
}

function StepMaterial({ value, onSelect }) {
  return (
    <div>
      <StepTitle>Material preference?</StepTitle>
      <div className="grid gap-3">
        {MATERIALS.map((option) => (
          <OptionButton
            key={option.id}
            label={option.label}
            description={option.description}
            selected={value === option.id}
            onClick={() => onSelect(option.id)}
          />
        ))}
      </div>
    </div>
  )
}

function StepResults({ estimate, onContinue }) {
  return (
    <div className="text-center">
      <StepTitle>Your Estimated Range</StepTitle>

      {estimate.isStorm && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 p-4 rounded-xl glass-card border-accent/30"
        >
          <p className="text-accent font-display font-semibold normal-case">
            Insurance may cover most or all costs
          </p>
          <p className="text-sm text-white/40 mt-1">
            We work directly with your insurance provider to maximize your claim.
          </p>
        </motion.div>
      )}

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 20 }}
        className="mb-8 py-8 px-6 rounded-xl bg-white/[0.04]"
      >
        <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-2 font-display">
          Estimated Range
        </p>
        <p className="text-3xl md:text-4xl font-display font-bold text-accent">
          {formatCurrency(estimate.low)} &ndash; {formatCurrency(estimate.high)}
        </p>
      </motion.div>

      <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-md mx-auto">
        This estimate is based on average Parkland County pricing. Your actual cost
        depends on roof complexity, condition, and material grade. A free on-site
        inspection provides your exact quote.
      </p>

      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onContinue}
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-accent text-white font-display font-bold text-xs uppercase tracking-widest rounded-lg copper-glow hover:bg-accent-hover transition-colors cursor-pointer"
      >
        Get Your Exact Quote
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </div>
  )
}

function StepLeadCapture({ onSubmitSuccess }) {
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
      callTime: undefined,
    },
  })

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1200))
    onSubmitSuccess(data)
  }

  const inputClass = (hasError) => `
    w-full pl-10 pr-4 py-3 rounded-lg bg-white/[0.04] text-white placeholder:text-white/20
    border ${hasError ? 'border-red-500' : 'border-white/[0.06]'}
    focus:outline-none focus:border-accent transition-colors
  `

  return (
    <div>
      <StepTitle>Where should we send your detailed estimate?</StepTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-md mx-auto">
        {/* Name */}
        <div>
          <label htmlFor="calc-name" className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">
            Name
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

        {/* Phone */}
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

        {/* Email */}
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

        {/* Best time to call */}
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

        {/* Submit */}
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
            'Send My Estimate'
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
        Estimate Sent!
      </h3>
      <p className="text-white/50 max-w-sm mx-auto leading-relaxed">
        We&apos;ll be in touch within one business day with your detailed roof
        estimate. Keep an eye on your phone for a call from our team.
      </p>
    </motion.div>
  )
}

// ===== MAIN COMPONENT =====

export default function RoofCalculator() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const [serviceType, setServiceType] = useState(null)
  const [propertyType, setPropertyType] = useState(null)
  const [roofSize, setRoofSize] = useState(null)
  const [stories, setStories] = useState(null)
  const [material, setMaterial] = useState(null)

  const goForward = useCallback(() => {
    setDirection(1)
    setStep((s) => s + 1)
  }, [])

  const goBack = useCallback(() => {
    setDirection(-1)
    setStep((s) => s - 1)
  }, [])

  const handleSelect = useCallback(
    (setter) => (value) => {
      setter(value)
      setTimeout(() => {
        setDirection(1)
        setStep((s) => s + 1)
      }, 250)
    },
    []
  )

  const estimate = calculateEstimate({ serviceType, roofSize, stories, material })

  const handleLeadSubmit = useCallback(() => {
    setSubmitted(true)
  }, [])

  const showBack = step >= 2 && step <= 5

  const renderStep = () => {
    if (submitted) return <SuccessState />

    switch (step) {
      case 1:
        return (
          <StepServiceType
            value={serviceType}
            onSelect={handleSelect(setServiceType)}
          />
        )
      case 2:
        return (
          <StepPropertyType
            value={propertyType}
            onSelect={handleSelect(setPropertyType)}
          />
        )
      case 3:
        return (
          <StepRoofSize
            value={roofSize}
            onSelect={handleSelect(setRoofSize)}
          />
        )
      case 4:
        return (
          <StepStories
            value={stories}
            onSelect={handleSelect(setStories)}
          />
        )
      case 5:
        return (
          <StepMaterial
            value={material}
            onSelect={handleSelect(setMaterial)}
          />
        )
      case 6:
        return <StepResults estimate={estimate} onContinue={goForward} />
      case 7:
        return <StepLeadCapture onSubmitSuccess={handleLeadSubmit} />
      default:
        return null
    }
  }

  return (
    <section id="quote" className="py-(--spacing-section) bg-surface">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <SectionHeading
          label="GET YOUR ESTIMATE"
          heading="What Will Your New Roof Cost?"
        />

        <div className="glass-card rounded-xl p-6 sm:p-8 md:p-10 copper-glow">
          {!submitted && <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />}

          {showBack && <BackButton onClick={goBack} />}

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
        </div>
      </div>
    </section>
  )
}
