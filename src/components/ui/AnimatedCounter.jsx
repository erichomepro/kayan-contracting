'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

export default function AnimatedCounter({
  target,
  suffix = '',
  label,
  className = '',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000 // ms
    let startTime = null
    let animationId

    function animate(timestamp) {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)

      setDisplayValue(Math.round(easedProgress * target))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [isInView, target])

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <span className="block text-4xl md:text-5xl font-display font-bold text-accent">
        {displayValue}
        {suffix}
      </span>
      <span className="block mt-2 text-sm text-text-muted font-medium uppercase tracking-wide">
        {label}
      </span>
    </div>
  )
}