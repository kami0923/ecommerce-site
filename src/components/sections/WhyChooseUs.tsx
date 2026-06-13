import { Container } from '@/components/common/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { StaggerContainer } from '@/components/animations/StaggerContainer'
import { Card } from '@/components/common/Card'
import { Award, Leaf, Zap, Crown } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  {
    id: 1,
    icon: Award,
    title: 'Premium Quality',
    description: 'Handcrafted with the finest materials and meticulous attention to detail',
  },
  {
    id: 2,
    icon: Leaf,
    title: 'Sustainable',
    description: 'Ethical sourcing and eco-conscious production practices',
  },
  {
    id: 3,
    icon: Zap,
    title: 'Modern Design',
    description: 'Contemporary aesthetics meeting timeless elegance',
  },
  {
    id: 4,
    icon: Crown,
    title: 'Exclusivity',
    description: 'Limited edition collections for discerning individuals',
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
            We stand apart through our unwavering commitment to excellence and craftsmanship
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
