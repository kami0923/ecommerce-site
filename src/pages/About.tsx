import { Container } from '@/components/common/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { StaggerContainer } from '@/components/animations/StaggerContainer'
import { Card } from '@/components/common/Card'
import { Timeline } from '@/components/sections/Timeline'
import { Newsletter } from '@/components/sections/Newsletter'
import { motion } from 'framer-motion'

const values = [
  {
    title: 'Excellence',
    description: 'We never compromise on quality or craftsmanship',
  },
  {
    title: 'Innovation',
    description: 'Constantly evolving while respecting timeless design',
  },
  {
    title: 'Sustainability',
    description: 'Committed to ethical practices and environmental responsibility',
  },
  {
    title: 'Community',
    description: 'Building meaningful connections with our customers',
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
              About Our Brand
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We believe that luxury is not just about price, but about the experience, craftsmanship, and values behind every piece.
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
                To become the most trusted luxury brand for individuals who value quality, sustainability, and timeless design. We envision a world where fashion transcends trends and becomes a form of self-expression.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every collection we create is a testament to our commitment to excellence and our belief that true luxury stands the test of time.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We create beautifully crafted garments using the finest materials, sustainable practices, and innovative design. Our mission is to empower our customers to express their unique style while feeling confident and connected to a brand that shares their values.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're dedicated to pushing the boundaries of what luxury fashion can be.
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
