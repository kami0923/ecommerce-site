export type ShopProduct = {
  id: string
  name: string
  category: 'Luxury Pret' | 'Formal Wear' | 'Everyday Edit' | 'Accessories'
  price: number
  originalPrice?: number
  image: string
  colors: string[]
  sizes: string[]
  rating: number
  badge?: 'New' | 'Best Seller' | 'Limited'
  description: string
}

export const shopProducts: ShopProduct[] = [
  {
    id: 'noor-embroidered-kurta',
    name: 'Noor Embroidered Kurta',
    category: 'Luxury Pret',
    price: 6850,
    originalPrice: 8200,
    image: '/images/optimized/image1.jpg',
    colors: ['Ivory', 'Rose', 'Sage'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.9,
    badge: 'Best Seller',
    description: 'Soft lawn kurta with delicate threadwork and a clean modern silhouette.',
  },
  {
    id: 'zara-organza-dupatta-set',
    name: 'Zara Organza Dupatta Set',
    category: 'Formal Wear',
    price: 12400,
    image: '/images/optimized/image2.jpg',
    colors: ['Champagne', 'Black'],
    sizes: ['S', 'M', 'L'],
    rating: 4.8,
    badge: 'New',
    description: 'A polished three-piece set finished with a lightweight organza dupatta.',
  },
  {
    id: 'aira-minimal-co-ord',
    name: 'Aira Minimal Co-ord',
    category: 'Everyday Edit',
    price: 5450,
    image: '/images/optimized/image3.jpg',
    colors: ['Sand', 'Olive', 'Charcoal'],
    sizes: ['XS', 'S', 'M', 'L'],
    rating: 4.7,
    description: 'Relaxed co-ord styling made for daily wear with a refined boutique finish.',
  },
  {
    id: 'mehreen-evening-ensemble',
    name: 'Mehreen Evening Ensemble',
    category: 'Formal Wear',
    price: 17950,
    originalPrice: 19500,
    image: '/images/optimized/image4.jpg',
    colors: ['Emerald', 'Maroon'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 5,
    badge: 'Limited',
    description: 'Statement formal piece with rich texture, soft fall, and elevated detailing.',
  },
  {
    id: 'sana-daily-kurta',
    name: 'Sana Daily Kurta',
    category: 'Everyday Edit',
    price: 3950,
    image: '/images/optimized/insta1.jpg',
    colors: ['White', 'Powder Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.6,
    description: 'Easy weekday essential with breathable fabric and graceful proportions.',
  },
  {
    id: 'hina-pearl-clutch',
    name: 'Hina Pearl Clutch',
    category: 'Accessories',
    price: 3200,
    image: '/images/optimized/insta2.jpg',
    colors: ['Pearl', 'Gold'],
    sizes: ['One Size'],
    rating: 4.8,
    badge: 'New',
    description: 'Compact occasion clutch with a subtle sheen and detachable chain strap.',
  },
  {
    id: 'maira-lace-shirt',
    name: 'Maira Lace Shirt',
    category: 'Luxury Pret',
    price: 7350,
    image: '/images/optimized/insta3.jpg',
    colors: ['Cream', 'Tea Pink'],
    sizes: ['S', 'M', 'L'],
    rating: 4.9,
    description: 'Premium lace shirt designed for effortless styling from brunch to dinner.',
  },
  {
    id: 'amal-silk-scarf',
    name: 'Amal Silk Scarf',
    category: 'Accessories',
    price: 2600,
    image: '/images/optimized/insta4.jpg',
    colors: ['Blush', 'Ink', 'Walnut'],
    sizes: ['One Size'],
    rating: 4.7,
    description: 'Light silk-touch scarf with a soft drape for finishing everyday looks.',
  },
]

export const shopCategories = ['All', 'Luxury Pret', 'Formal Wear', 'Everyday Edit', 'Accessories'] as const
