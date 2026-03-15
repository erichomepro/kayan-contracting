import { motion } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

export default function ServiceFAQ({ faqs }) {
  if (!faqs || faqs.length === 0) return null

  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {faqs.map((faq, i) => (
        <Accordion.Item
          key={i}
          value={`faq-${i}`}
          className="glass-card rounded-xl overflow-hidden data-[state=open]:border-accent/30 transition-all duration-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer">
              <span className="font-display font-semibold text-white text-base leading-snug normal-case">
                {faq.q}
              </span>
              <ChevronDown className="w-5 h-5 shrink-0 text-white/30 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-accent" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="px-6 pb-5 text-white/55 text-sm leading-relaxed">
              {faq.a}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
