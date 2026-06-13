import { Container } from '@/components/common/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { StaggerContainer } from '@/components/animations/StaggerContainer'
import { ImageZoom } from '@/components/animations/ImageZoom'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Premium Wool Jacket',
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1539533057440-7a601feb0b13?w=400&h=500&fit=crop',
  },
  {
    id: 2,
    name: 'Silk Blend Shirt',
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
  },
  {
    id: 3,
    name: 'Tailored Trousers',
    category: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=500&fit=crop',
  },
]

export const ProductTeaser = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <FadeUp delay={0.2} className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Sneak Peek
          </h2>
          <p className="text-center text-gray-600 text-lg">
            A preview of what's coming to our exclusive collection
          </p>
        </FadeUp>

        <StaggerContainer staggerChildren={0.15} className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group"
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
                src={product.image}
                alt={product.name}
                className="aspect-[3/4] mb-6"
              />
              <p className="text-accent text-sm font-medium uppercase tracking-wide mb-2">
                {product.category}
              </p>
              <h3 className="font-serif text-xl font-bold text-primary group-hover:text-accent transition-colors">
                {product.name}
              </h3>
            </motion.div>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}
