import { Container } from '@/components/common/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { ImageZoom } from '@/components/animations/ImageZoom'

export const BrandStory = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeUp delay={0.2}>
            <ImageZoom
              src="/images/optimized/brand story.jpg"
              alt="Brand Story"
              className="aspect-square"
            />
          </FadeUp>

          {/* Content */}
          <FadeUp delay={0.4}>
            <div>
              <p className="text-accent font-medium uppercase tracking-widest text-sm mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
                Crafted with Precision
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, our brand emerged from a simple vision: to create fashion that transcends trends and celebrates individuality. Every piece is meticulously crafted using the finest materials and time-honored techniques.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe in quality over quantity, sustainability, and the timeless appeal of minimalist design. Our collections reflect our commitment to excellence and our passion for creating pieces that will be cherished for years to come.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-accent text-2xl font-bold mt-1">✓</span>
                  <span className="text-gray-600">Premium materials sourced responsibly</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent text-2xl font-bold mt-1">✓</span>
                  <span className="text-gray-600">Handcrafted by master artisans</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent text-2xl font-bold mt-1">✓</span>
                  <span className="text-gray-600">Limited edition collections</span>
                </li>
              </ul>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  )
}
