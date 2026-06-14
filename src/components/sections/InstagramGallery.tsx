import { Container } from '@/components/common/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { StaggerContainer } from '@/components/animations/StaggerContainer'
import { ImageZoom } from '@/components/animations/ImageZoom'
import { motion } from 'framer-motion'
// import { icons } from 'lucide-react'

const instagramPosts = [
  { id: 1, image: '/images/insta1.jpg' },
  { id: 2, image: '/images/insta2.jpg' },
  { id: 3, image: '/images/insta3.jpg' },
  { id: 4, image: '/images/insta4.jpg' },
  { id: 5, image: '/images/insta5.jpg' },
  { id: 6, image: '/images/insta6.jpg' },
]

export const InstagramGallery = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <Container>
        <FadeUp delay={0.2} className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            {/* <Instagram className="text-accent" size={32} /> */}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Follow Our Feed
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Join our community and discover the latest from @luxurybrand
          </p>
        </FadeUp>

        <StaggerContainer staggerChildren={0.05} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {instagramPosts.map((post) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg aspect-square"
              whileHover={{ scale: 1.02 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <ImageZoom
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                    {/* <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} /> */}
              </div>
            </motion.a>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.6} className="text-center mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors hover:underline  "
          >
            {/* <Instagram size={20} /> */}
            View More on Instagram
          </a>
        </FadeUp>
      </Container>
    </section>
  )
}
