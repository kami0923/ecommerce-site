import { Container } from '@/components/common/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { StaggerContainer } from '@/components/animations/StaggerContainer'
import { Card } from '@/components/common/Card'
import { BadgeCheck, HandCoins, Handshake, Home } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  {
    id: 1,
    icon: Home,
    title: 'Start From Home',
    description: 'Women can begin earning from home without renting a shop or buying stock.',
  },
  {
    id: 2,
    icon: HandCoins,
    title: 'Zero Investment',
    description: 'Our model removes upfront cost and reduces business risk for new sellers.',
  },
  {
    id: 3,
    icon: Handshake,
    title: 'Wholesale Network',
    description: 'Retailers get dependable access to fashion supply and branded products.',
  },
  {
    id: 4,
    icon: BadgeCheck,
    title: 'Trusted Platform',
    description: 'Registered and connected with respected business and development organizations.',
  },
]

export const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <FadeUp delay={0.2} className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            We combine women empowerment, wholesale access, and brand partnerships in one platform.
          </p>
        </FadeUp>

        <StaggerContainer staggerChildren={0.15} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <Card className="h-full hover:border-accent">
                  <motion.div
                    className="text-accent text-4xl mb-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon size={40} />
                  </motion.div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </StaggerContainer>
      </Container>
    </section>
  )
}
