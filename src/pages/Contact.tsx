import { Container } from '@/components/common/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { ContactForm } from '@/components/sections/ContactForm'
import { MapPin, Navigation } from 'lucide-react'

export const Contact = () => {
  const mapQuery = encodeURIComponent('Hoorain Collection Gulberg pride 2 LLp')

  return (
    <main className="pt-20">
      <section className="bg-secondary py-16 lg:py-24">
        <Container>
          <FadeUp delay={0.2} className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-primary">
              <MapPin size={16} className="text-accent" />
              Islamabad boutique support
            </div>
            <h1 className="text-5xl text-primary md:text-6xl lg:text-7xl">
              Visit, call, or message Hoorain's Collection
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
              Whether you need size guidance, product availability, or directions to the
              store, every contact option is kept simple and direct.
            </p>
          </FadeUp>
        </Container>
      </section>

      <ContactForm />

      <section className="bg-secondary py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <FadeUp delay={0.2}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
                Store Location
              </p>
              <h2 className="text-4xl text-primary md:text-5xl">Find us in Gulberg Residencia</h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                Plot# 4&5, D-Markaz, D-Block, Gulberg Residencia, Islamabad.
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-3 font-semibold text-white transition hover:bg-gray-600"
              >
                <Navigation size={18} />
                Open Directions
              </a>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="h-[420px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <iframe
                  title="Hoorain's Collection location"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>
    </main>
  )
}
