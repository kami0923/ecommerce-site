import { ComingSoon } from '@/components/sections/ComingSoon'
import { ProductTeaser } from '@/components/sections/ProductTeaser'
import { Newsletter } from '@/components/sections/Newsletter'

export const Shop = () => {
  return (
    <main className="pt-20">
      <ComingSoon />
      <ProductTeaser />
      <Newsletter />
    </main>
  )
}
