'use client'

import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-accent text-white hover:bg-accent-hover copper-glow',
  secondary:
    'bg-white/5 border border-white/10 text-white hover:border-accent/50 backdrop-blur-sm',
  outline:
    'border border-accent/40 text-white hover:bg-accent hover:text-white backdrop-blur-md',
  ghost:
    'text-text-muted hover:text-white hover:bg-white/5',
}

const sizes = {
  sm: 'px-5 py-2.5 text-[10px] rounded-lg',
  md: 'px-8 py-4 text-xs rounded-xl',
  lg: 'px-10 py-5 text-xs rounded-xl',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as,
  href,
  className = '',
  ...props
}) {
  const Tag = as === 'a' || href ? motion.a : motion.button

  return (
    <Tag
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        inline-flex items-center justify-center gap-2
        font-bold uppercase tracking-widest
        transition-all duration-300
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
        cursor-pointer
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Tag>
  )
}