import { ChevronDown, Phone } from 'lucide-react'
import * as Accordion from '@radix-ui/react-accordion'
import { faqs, company } from '@/data/company'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export default function FAQ() {
  return (
    <section id="faq" className="py-(--spacing-section) bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          label="QUESTIONS?"
          heading="Frequently Asked Questions"
        />

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
                  <ChevronDown
                    className="w-5 h-5 shrink-0 text-white/30 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-accent"
                  />
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

        <div className="text-center mt-12">
          <p className="text-white/50 text-lg mb-4 font-display normal-case">
            Have another question? Ask us directly.
          </p>
          <Button
            as="a"
            href={`tel:${company.phoneRaw}`}
            variant="secondary"
          >
            <Phone className="w-5 h-5" />
            {company.phone}
          </Button>
        </div>
      </div>
    </section>
  )
}
