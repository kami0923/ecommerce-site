import { Container } from '@/components/common/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { StaggerContainer } from '@/components/animations/StaggerContainer'
import { ImageZoom } from '@/components/animations/ImageZoom'
import { motion } from 'framer-motion'

const collections = [
  {
    id: 1,
    name: 'Spring Elegance',
    description: '2024 Spring Collection',
    image: 'https://images.unsplash.com/photo-1490481651985-2ad143146313?w=500&h=600&fit=crop',
  },
  {
    id: 2,
    name: 'Autumn Essence',
    description: '2024 Autumn Collection',
    image: 'https://images.unsplash.com/photo-1445521458279-0ac8890d3de3?w=500&h=600&fit=crop',
  },
  {
    id: 3,
    name: 'Minimalist Lines',
    description: 'Timeless Essentials',
    image: 'https://images.unsplash.com/photo-1505289012518-c21dba64bcd1?w=500&h=600&fit=crop',
  },
  {
    id: 4,
    name: 'Urban Edge',
    description: 'Contemporary Collection',
    image: 'https://images.unsplash.com/photo-1441984904556-0ac8ce9feafd?w=500&h=600&fit=crop',
  },
]

export const FeaturedCollections = () => {
  return (
    <section id="featured-collections" className="py-20 lg:py-32 bg-secondary">
      <Container>
        <FadeUp delay={0.2} className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Featured Collections
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our handpicked selections of premium fashion for every season
          </p>
        </FadeUp>

        <StaggerContainer staggerChildren={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              className="group cursor-pointer"
              whileHover={{ y: -10 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
            >
              <ImageZoom
                src={collection.image}
                alt={collection.name}
                className="aspect-[3/4] mb-6"
              />
              <h3 className="font-serif text-lg md:text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {collection.name}
              </h3>
              <p className="text-sm text-gray-600">
                {collection.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}
