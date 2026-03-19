import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react'
import { company, services, serviceAreas } from '@/data/company'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-display font-extrabold tracking-tight text-accent">
                KAYAN
              </span>
              <span className="block text-[10px] font-display font-bold uppercase tracking-[0.25em] text-white/40 -mt-0.5">
                Contracting
              </span>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Serving Stony Plain, Spruce Grove, Parkland County, and
              surrounding areas since {company.foundedYear}.
            </p>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0 text-accent" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-accent" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 shrink-0 text-accent mt-0.5" />
                <span>
                  {company.address.street}, {company.address.city},{' '}
                  {company.address.province} {company.address.postalCode}
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <Clock className="w-4 h-4 shrink-0 text-accent mt-0.5" />
                <div>
                  <p>{company.hoursOfOperation.weekday}</p>
                  <p>{company.hoursOfOperation.saturday}</p>
                  <p>{company.hoursOfOperation.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] font-display font-bold uppercase tracking-widest text-white/30 mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-sm text-white/50 hover:text-accent transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-[10px] font-display font-bold uppercase tracking-widest text-white/30 mb-6">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <a
                    href={`#${area.slug}`}
                    className="text-sm text-white/50 hover:text-accent transition-colors"
                  >
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-[10px] font-display font-bold uppercase tracking-widest text-white/30 mb-6">
              Certifications
            </h3>
            <ul className="space-y-3">
              {company.certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-center gap-2 text-sm text-white/50"
                >
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  {cert.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>
            &copy; {currentYear} {company.name} All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-accent" />
            BBB {company.bbbRating} Rated &middot; Licensed &amp; Insured
          </p>
        </div>
      </div>
    </footer>
  )
}
