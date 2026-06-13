import { Container } from '@/components/common/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { StaggerContainer } from '@/components/animations/StaggerContainer'
import { motion } from 'framer-motion'

const timelineEvents = [
  {
    year: '2020',
    title: 'Brand Founded',
    description: 'We started with a vision to revolutionize luxury fashion',
  },
  {
    year: '2021',
    title: 'First Collection Launch',
    description: 'Introduced our signature minimalist design philosophy',
  },
  {
    year: '2022',
    title: 'Sustainability Initiative',
    description: 'Launched eco-conscious production practices',
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Extended our reach to 15 countries worldwide',
  },
]

export const Timeline = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <FadeUp delay={0.2} className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Our Journey
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            From vision to reality, here's how we built a brand
          </p>
        </FadeUp>

        <StaggerContainer staggerChildren={0.15} className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                className="flex gap-8 md:gap-12"
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                {/* Timeline marker */}
                <div className="flex flex-col items-center gap-4 md:gap-8 w-24 md:w-32 flex-shrink-0">
                  <div className="w-4 h-4 md:w-6 md:h-6 bg-accent rounded-full mt-2" />
                  {index !== timelineEvents.length - 1 && (
                    <div className="w-1 h-16 md:h-32 bg-gradient-to-b from-accent to-secondary" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <p className="text-accent font-serif text-2xl md:text-3xl font-bold mb-2">
                    {event.year}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </Container>
    </section>
  )
}
