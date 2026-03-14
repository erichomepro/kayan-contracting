export default function SectionHeading({
  label,
  heading,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center'

  return (
    <div className={`mb-16 lg:mb-20 ${isCenter ? 'text-center' : ''} ${className}`}>
      {label && (
        <div className={`flex items-center gap-4 mb-4 ${isCenter ? 'justify-center' : ''}`}>
          <span className="h-px w-12 bg-accent" />
          <span className="text-accent font-bold tracking-widest text-[10px] uppercase italic">
            {label}
          </span>
          {isCenter && <span className="h-px w-12 bg-accent" />}
        </div>
      )}

      <h2 className="text-white font-display tracking-tight leading-none">
        {heading}
      </h2>

      {subtitle && (
        <p className="mt-6 text-text-muted text-sm leading-relaxed max-w-2xl ${isCenter ? 'mx-auto' : ''}">
          {subtitle}
        </p>
      )}
    </div>
  )
}
