'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  ArrowRight,
  Phone,
  Mail,
  User,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Home,
  Building2,
} from 'lucide-react'

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
  // Unselected radio groups submit null (not undefined); coerce any non-string
  // to undefined so the optional enum does not reject it and silently block the
  // entire form submission.
  callTime: z.preprocess((v) => (typeof v === 'string' && v !== '' ? v : undefined), z.enum(['morning', 'afternoon', 'evening']).optional()),
  message: z.string().optional(),
  propertyType: z.preprocess((v) => (typeof v === 'string' && v !== '' ? v : undefined), z.enum(['residential', 'commercial']).optional()),
})

const CALL_TIMES = [
  { id: 'morning', label: 'Morning' },
  { id: 'afternoon', label: 'Afternoon' },
  { id: 'evening', label: 'Evening' },
]

/**
 * When the form was last mounted, and how long ago that was.
 *
 * Module scope rather than a ref because the React Compiler treats the submit
 * handler as render-reachable (it is passed to handleSubmit during render) and
 * rejects both Date.now() calls and ref reads there. Only one of these forms is
 * on screen at a time, so a single module-level stamp is accurate.
 *
 * elapsedSinceMount returns null rather than 0 when the stamp is missing: the
 * server treats a very small elapsedMs as bot evidence, so an unknown duration
 * must be absent from the payload rather than look like an instant submit.
 */
let mountedAt = null

function markMounted() {
  mountedAt = Date.now()
}

function elapsedSinceMount() {
  if (mountedAt === null) return null
  return Date.now() - mountedAt
}

export default function ServiceQuoteForm({ serviceId, serviceTitle }) {
  const [submitted, setSubmitted] = useState(false)
  const [sendError, setSendError] = useState(false)
  /* Stamp the mount time, so the server can see how long the form was on
     screen. A submit faster than a human can read the form is bot evidence. */
  useEffect(markMounted, [])

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
      propertyType: undefined,
    },
  })

  const onSubmit = async (data) => {
    setSendError(false)
    const elapsed = elapsedSinceMount()
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email || null,
          address: data.address || null,
          callTime: data.callTime || null,
          message: data.message || null,
          propertyType: data.propertyType || null,
          serviceId,
          serviceTitle,
          source: `Service Page - ${serviceTitle}`,
          website: data.website || '',
          // Omitted when the mount stamp is missing, so the server never sees
          // a bogus 0ms and wrongly treats a human as a bot.
          ...(elapsed !== null ? { elapsedMs: elapsed } : {}),
        }),
      })

      if (!res.ok) {
        console.error('Lead submission failed:', res.status)
        setSendError(true)
        return
      }

      setSubmitted(true)
    } catch (err) {
      console.error('Lead submission error:', err)
      setSendError(true)
    }
  }

  const inputClass = (hasError) => `
    w-full pl-10 pr-4 py-3 rounded-lg bg-white/[0.04] text-white placeholder:text-white/20
    border ${hasError ? 'border-red-500' : 'border-white/[0.06]'}
    focus:outline-none focus:border-accent transition-colors
  `

  if (submitted) {
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
          to discuss your {serviceTitle.toLowerCase()} project.
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-md mx-auto">
      {/* Honeypot. Off-screen rather than type="hidden", because bots skip
          hidden inputs but do fill ones they can find in the DOM. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="website-url">Do not fill this in</label>
        <input id="website-url" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2 mb-2">
        <label className="flex items-center gap-3 cursor-pointer px-4 py-3 rounded-lg glass-card has-[:checked]:border-accent has-[:checked]:bg-accent/10 transition-all">
          <input type="radio" value="residential" {...register('propertyType')} className="sr-only" />
          <Home className="w-5 h-5 text-white/50" />
          <span className="text-sm font-medium text-white">Residential</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer px-4 py-3 rounded-lg glass-card has-[:checked]:border-accent has-[:checked]:bg-accent/10 transition-all">
          <input type="radio" value="commercial" {...register('propertyType')} className="sr-only" />
          <Building2 className="w-5 h-5 text-white/50" />
          <span className="text-sm font-medium text-white">Commercial</span>
        </label>
      </div>

      <div>
        <label htmlFor={`svc-name-${serviceId}`} className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">
          Name <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
          <input id={`svc-name-${serviceId}`} type="text" placeholder="Your name" {...register('name')} className={inputClass(errors.name)} />
        </div>
        {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor={`svc-phone-${serviceId}`} className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">
          Phone <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
          <input id={`svc-phone-${serviceId}`} type="tel" placeholder="(780) 555-1234" {...register('phone')} className={inputClass(errors.phone)} />
        </div>
        {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor={`svc-email-${serviceId}`} className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
          <input id={`svc-email-${serviceId}`} type="email" placeholder="you@example.com" {...register('email')} className={inputClass(errors.email)} />
        </div>
        {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor={`svc-address-${serviceId}`} className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">
          Property Address
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
          <input id={`svc-address-${serviceId}`} type="text" placeholder="123 Main St, Stony Plain" {...register('address')} className={inputClass(false)} />
        </div>
      </div>

      <fieldset>
        <legend className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
          <Clock className="inline-block w-3.5 h-3.5 mr-1.5 -mt-0.5 text-white/20" />
          Best time to call
        </legend>
        <div className="flex gap-3 flex-wrap">
          {CALL_TIMES.map((time) => (
            <label key={time.id} className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg glass-card has-[:checked]:border-accent has-[:checked]:bg-accent/10 transition-all">
              <input type="radio" value={time.id} {...register('callTime')} className="sr-only" />
              <span className="text-sm font-medium text-white">{time.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor={`svc-message-${serviceId}`} className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-1.5">
          Anything else we should know?
        </label>
        <textarea
          id={`svc-message-${serviceId}`}
          rows={3}
          placeholder="Tell us about your project..."
          {...register('message')}
          className="w-full px-4 py-3 rounded-lg bg-white/[0.04] text-white placeholder:text-white/20 border border-white/[0.06] focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      {sendError && (
        <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-center text-sm text-red-200">
          Something went wrong sending your request. Please call us at{' '}
          <a href="tel:+17809840221" className="font-bold underline">(780) 984-0221</a> and we will get you taken care of.
        </div>
      )}

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
            Get Your Free Quote
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </motion.button>

      <p className="text-xs text-white/30 text-center flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5" />
        Your information is private. We never share your details.
      </p>
    </form>
  )
}