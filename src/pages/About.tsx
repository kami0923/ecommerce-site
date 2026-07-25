import { Container } from '@/components/common/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { StaggerContainer } from '@/components/animations/StaggerContainer'
import { Card } from '@/components/common/Card'
import { Timeline } from '@/components/sections/Timeline'
import { Newsletter } from '@/components/sections/Newsletter'
import { motion } from 'framer-motion'

const values = [
  {
    title: 'Empowerment',
    description: 'We create earning pathways for women who want to work from home',
  },
  {
    title: 'Zero Risk',
    description: 'Our model reduces barriers by removing stock investment pressure',
  },
  {
    title: 'Trust',
    description: 'We work through credible organizations, retailers, donors, and brands',
  },
  {
    title: 'Community',
    description: 'We build networks between women entrepreneurs and retail markets',
  },
]

export const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-secondary">
        <Container>
          <FadeUp delay={0.2} className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
              About H Collection
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We are a women empowerment and wholesale platform helping families
              build income through home-based business opportunities.
            </p>
          </FadeUp>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <FadeUp delay={0.2}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                To become a trusted national platform where women can start earning
                from home with dignity, support, and access to reliable fashion supply.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We want donors, brands, and retailers to work together in a practical
                model that creates real income opportunities.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Our mission is to empower women to start businesses with zero
                investment and zero risk, while also serving retailers through
                wholesale access to trusted fashion brands.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are focused on partnerships that can scale nationally and
                internationally with donor and brand support.
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 bg-secondary">
        <Container>
          <FadeUp delay={0.2} className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
              Our Core Values
            </h2>
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              These principles guide every decision we make
            </p>
          </FadeUp>

          <StaggerContainer staggerChildren={0.15} className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <Card className="h-full">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Newsletter */}
      <Newsletter />
    </main>
  )
}
