import { stats } from '@/data/company'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function StatsBar() {
  return (
    <section aria-label="Company statistics" className="bg-primary py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              target={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              className="[&_span:first-child]:text-text-on-dark [&_span:last-child]:text-text-on-dark/70"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
