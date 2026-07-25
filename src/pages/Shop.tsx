import { Container } from '@/components/common/Container'
import { Button } from '@/components/common/Button'
import { FadeUp } from '@/components/animations/FadeUp'
import { BriefcaseBusiness, Building2, Globe2, HandCoins, Handshake, Home } from 'lucide-react'

const opportunities = [
  {
    icon: Home,
    title: 'Women at Home',
    description: 'Start a fashion business from home with zero stock investment and guided support.',
  },
  {
    icon: Building2,
    title: 'Retail Wholesale',
    description: 'Retailers can source trusted fashion products through our wholesale network.',
  },
  {
    icon: Globe2,
    title: 'Donor Support',
    description: 'We welcome national and international donors who want to support women-led income.',
  },
]

const registrations = ['Akhtar Khanum', 'PMYD', 'Sharakat', 'Rawalpindi Chamber', 'Women Development Network', 'Local Business Partners']
const brands = ['Sapphire', 'Saya', 'Batik', 'Khaadi']

export const Shop = () => {
  return (
    <main className="pt-20">
      <section className="bg-secondary py-16 lg:py-24">
        <Container>
          <FadeUp delay={0.2} className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-primary">
              <Handshake size={16} className="text-accent" />
              Partnership and growth platform
            </div>
            <h1 className="text-5xl text-primary md:text-6xl lg:text-7xl">
              Build income from home with H Collection
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              We empower women to start home-based businesses with zero investment,
              zero risk, and access to reliable fashion supply. We also work with
              retailers as a wholesale partner.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" onClick={() => window.location.href = '/contact'}>
                Join as Partner
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = '/contact'}>
                Support as Donor
              </Button>
            </div>
          </FadeUp>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {opportunities.map((item) => {
              const Icon = item.icon
              return (
                <FadeUp key={item.title} delay={0.1}>
                  <div className="h-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                      <Icon size={24} />
                    </span>
                    <h2 className="text-3xl text-primary">{item.title}</h2>
                    <p className="mt-3 leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-secondary py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <FadeUp delay={0.2}>
              <div className="rounded-lg border border-gray-200 bg-white p-6 md:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <BriefcaseBusiness size={24} />
                </div>
                <h2 className="text-4xl text-primary">Registered and connected with trusted organizations</h2>
                <p className="mt-4 leading-relaxed text-gray-600">
                  H Collection is building credibility through respected development,
                  business, and community organizations.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {registrations.map((name) => (
                    <span key={name} className="rounded-full border border-gray-200 bg-secondary px-4 py-2 text-sm font-medium text-primary">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="rounded-lg border border-gray-200 bg-white p-6 md:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <HandCoins size={24} />
                </div>
                <h2 className="text-4xl text-primary">Official brand collaborations</h2>
                <p className="mt-4 leading-relaxed text-gray-600">
                  We collaborate with leading Pakistani fashion brands to create access
                  for women sellers and retail partners.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {brands.map((name) => (
                    <div key={name} className="rounded-lg border border-gray-200 bg-secondary p-4 text-center text-lg font-semibold text-primary">
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>
    </main>
  )
}
