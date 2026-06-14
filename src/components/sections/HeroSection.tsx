import { motion } from 'framer-motion'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/common/Button'
import { ChevronDown } from 'lucide-react'

export const HeroSection = () => {
  const scrollToNextSection = () => {
    const element = document.getElementById('featured-collections')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  }

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4 },
    },
  }

  const buttonsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.6 },
    },
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-secondary to-white flex items-center justify-center overflow-hidden pt-16">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <motion.h1
            variants={titleVariants}
            className="text-5xl md:text-7xl lg:text-7xl  text-primary mb-6 leading-tight"
          >
            Hoorain's Collection
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={descriptionVariants}
            className="text-lg md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Discover our curated collection of premium fashion designed for those who appreciate timeless elegance and modern craftsmanship.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonsVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            <Button size="lg" variant="primary">
              Explore Collections
            </Button>
            <Button size="lg" variant="outline">
              View Latest
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNextSection}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary hover:text-accent transition-colors"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  )
}
