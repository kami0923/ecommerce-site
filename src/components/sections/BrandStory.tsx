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
                A Platform for Women-Led Growth
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                H Collection helps women start and grow home-based fashion businesses
                without stock investment, financial risk, or complicated setup.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We also support retailers through wholesale supply, brand access, and
                reliable sourcing from our official collaborations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-accent text-2xl font-bold mt-1">✓</span>
                  <span className="text-gray-600">Zero investment opportunity for women at home</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent text-2xl font-bold mt-1">✓</span>
                  <span className="text-gray-600">Wholesale support for retail partners</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent text-2xl font-bold mt-1">✓</span>
                  <span className="text-gray-600">Looking for national and international donor support</span>
                </li>
              </ul>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  )
}
