'use client'

import { useState } from 'react'
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
  callTime: z.enum(['morning', 'afternoon', 'evening']).optional(),
  message: z.string().optional(),
  propertyType: z.enum(['residential', 'commercial']).optional(),
})

const CALL_TIMES = [
  { id: 'morning', label: 'Morning' },
  { id: 'afternoon', label: 'Afternoon' },
  { id: 'evening', label: 'Evening' },
]

export default function ServiceQuoteForm({ serviceId, serviceTitle }) {
  const [submitted, setSubmitted] = useState(false)

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
    const payload = {
      business_name: data.name,
      contact_name: data.name,
      email: data.email || null,
      phone: data.phone,
      source: `Service Page - ${serviceTitle}`,
      inquiry_type: 'Quote Request',
      form_data: {
        services_requested: [serviceId],
        property_type: data.propertyType || null,
        address: data.address || null,
        preferred_call_time: data.callTime || null,
        message: data.message || null,
      },
      services_interested: [serviceId],
      pipeline_stage: 'New',
      lead_score: 'Warm',
    }

    try {
      const SUPABASE_URL = 'https://ahzfmgfjuzlotvpibjtl.supabase.co'
      const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoemZtZ2ZqdXpsb3R2cGlianRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4OTg4NDcsImV4cCI6MjA1NzQ3NDg0N30.kPMbJMoJfIcMKcVs8j6q1GfxAWJqBIjYXP5sBPBu0bM'

      const orgRes = await fetch(`${SUPABASE_URL}/rest/v1/organizations?slug=eq.kay&select=id`, {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      })
      const orgs = await orgRes.json()
      const orgId = orgs?.[0]?.id

      if (orgId) {
        payload.org_id = orgId
        await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
          method: 'POST',
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
            Prefer: 'return=minimal',
          },
          body: JSON.stringify(payload),
        })
      }
    } catch (err) {
      console.error('Lead submission error:', err)
    }

    // Send email notification to Bryan via Resend
    try {
      await fetch('/api/lead-notify', {
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
          serviceTitle,
        }),
      })
    } catch (err) {
      console.error('Email notification error:', err)
    }

    setSubmitted(true)
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