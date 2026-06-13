import { HeroSection } from '@/components/sections/HeroSection'
import { BrandStory } from '@/components/sections/BrandStory'
import { FeaturedCollections } from '@/components/sections/FeaturedCollections'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { InstagramGallery } from '@/components/sections/InstagramGallery'
import { Newsletter } from '@/components/sections/Newsletter'

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <BrandStory />
      <FeaturedCollections />
      <WhyChooseUs />
      <InstagramGallery />
      <Newsletter />
    </main>
  )
}
