import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Check,
  Heart,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  X,
} from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/common/Button'
import { cn } from '@/lib/utils'
import { shopCategories, shopProducts, type ShopProduct } from '@/data/shopProducts'

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating'

const formatPrice = (price: number) => `Rs. ${price.toLocaleString('en-PK')}`

export const ShopShowcase = () => {
  const location = useLocation()
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [activeCategory, setActiveCategory] = useState<(typeof shopCategories)[number]>('All')
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [wishlist, setWishlist] = useState<string[]>(() =>
    JSON.parse(localStorage.getItem('hoorain-wishlist') || '[]') as string[],
  )
  const [cart, setCart] = useState<string[]>(() =>
    JSON.parse(localStorage.getItem('hoorain-cart') || '[]') as string[],
  )
  const [selectedProduct, setSelectedProduct] = useState<ShopProduct | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    const filtered = shopProducts.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory
      const matchesSearch =
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery)

      return matchesCategory && matchesSearch
    })

    return [...filtered].sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return Number(Boolean(b.badge)) - Number(Boolean(a.badge))
    })
  }, [activeCategory, query, sortBy])

  const cartProducts = shopProducts.filter((product) => cart.includes(product.id))
  const wishlistProducts = shopProducts.filter((product) => wishlist.includes(product.id))
  const cartTotal = cartProducts.reduce((total, product) => total + product.price, 0)

  useEffect(() => {
    localStorage.setItem('hoorain-wishlist', JSON.stringify(wishlist))
    window.dispatchEvent(new Event('hoorain-shop-update'))
  }, [wishlist])

  useEffect(() => {
    localStorage.setItem('hoorain-cart', JSON.stringify(cart))
    window.dispatchEvent(new Event('hoorain-shop-update'))
  }, [cart])

  useEffect(() => {
    const params = new URLSearchParams(location.search)

    if (params.get('panel') === 'wishlist') {
      setIsWishlistOpen(true)
    }

    if (params.get('focus') === 'search') {
      document.getElementById('shop-grid')?.scrollIntoView({ behavior: 'smooth' })
      window.setTimeout(() => searchInputRef.current?.focus(), 350)
    }
  }, [location.search])

  const toggleWishlist = (productId: string) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    )
  }

  const addToCart = (productId: string) => {
    setCart((current) => (current.includes(productId) ? current : [...current, productId]))
    setIsCartOpen(true)
  }

  const removeFromCart = (productId: string) => {
    setCart((current) => current.filter((id) => id !== productId))
  }

  const removeFromWishlist = (productId: string) => {
    setWishlist((current) => current.filter((id) => id !== productId))
  }

  const buildWhatsAppLink = (product?: ShopProduct) => {
    const message = product
      ? `Hi, I want to order ${product.name} (${formatPrice(product.price)}).`
      : `Hi, I want to order these items: ${cartProducts
          .map((item) => `${item.name} - ${formatPrice(item.price)}`)
          .join(', ')}. Total: ${formatPrice(cartTotal)}.`

    return `https://wa.me/923066330833?text=${encodeURIComponent(message)}`
  }

  return (
    <main className="pt-20 bg-white">
      <section className="relative overflow-hidden bg-secondary">
        <Container className="grid min-h-[520px] items-center gap-10 py-16 lg:grid-cols-[1fr_0.9fr] lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-primary">
              <Sparkles size={16} className="text-accent" />
              New season edit is live
            </div>
            <h1 className="text-5xl text-primary md:text-6xl lg:text-7xl">
              Shop the latest Hoorain's Collection
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              Browse curated pieces for everyday elegance, formal moments, and finishing
              details. Pick your favorites now and order directly through WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={() => document.getElementById('shop-grid')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Shopping
              </Button>
              <Button size="lg" variant="outline" onClick={() => setIsCartOpen(true)}>
                <ShoppingBag size={20} className="mr-2" />
                View Bag ({cart.length})
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {shopProducts.slice(0, 4).map((product, index) => (
              <div
                key={product.id}
                className={cn(
                  'group relative overflow-hidden rounded-lg bg-white shadow-sm',
                  index === 1 || index === 2 ? 'translate-y-8' : '',
                )}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  decoding="async"
                  className="aspect-[3/4] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4 text-white">
                  <p className="text-sm font-medium">{product.name}</p>
                  <p className="text-xs text-white/80">{formatPrice(product.price)}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section id="shop-grid" className="py-12 lg:py-16">
        <Container>
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-4xl text-primary md:text-5xl">All Products</h2>
              <p className="mt-3 text-gray-600">
                {filteredProducts.length} styles available for direct WhatsApp ordering.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_220px] lg:w-[560px]">
              <label className="relative block">
                <span className="sr-only">Search products</span>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  ref={searchInputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search products"
                  className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-11 pr-4 text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </label>

              <label className="relative block">
                <span className="sr-only">Sort products</span>
                <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as SortOption)}
                  className="h-12 w-full appearance-none rounded-lg border border-gray-200 bg-white pl-11 pr-4 text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </label>
            </div>
          </div>

          <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
            {shopCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition',
                  activeCategory === category
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 bg-white text-primary hover:border-primary',
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => {
                const isWishlisted = wishlist.includes(product.id)
                const isInCart = cart.includes(product.id)

                return (
                  <motion.article
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group overflow-hidden rounded-lg border border-gray-200 bg-white"
                  >
                    <div className="relative overflow-hidden bg-secondary">
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm transition hover:scale-105"
                        aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                      >
                        <Heart
                          size={18}
                          className={cn(isWishlisted ? 'fill-primary text-primary' : '')}
                        />
                      </button>
                      {product.badge && (
                        <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary shadow-sm">
                          {product.badge}
                        </span>
                      )}
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="block w-full text-left"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          decoding="async"
                          className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </button>
                    </div>

                    <div className="p-5">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                          {product.category}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                          <Star size={15} className="fill-yellow-400 text-yellow-400" />
                          {product.rating}
                        </span>
                      </div>
                      <h3 className="min-h-[56px] text-2xl leading-tight text-primary">
                        {product.name}
                      </h3>
                      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-600">
                        {product.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <span className="text-lg font-semibold text-primary">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {product.colors.slice(0, 3).map((color) => (
                          <span
                            key={color}
                            className="rounded-full bg-secondary px-3 py-1 text-xs text-gray-600"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
                        <Button
                          size="sm"
                          onClick={() => addToCart(product.id)}
                          className="min-h-10"
                        >
                          {isInCart ? (
                            <>
                              <Check size={17} className="mr-2" />
                              Added
                            </>
                          ) : (
                            <>
                              <ShoppingBag size={17} className="mr-2" />
                              Add
                            </>
                          )}
                        </Button>
                        <a
                          href={buildWhatsAppLink(product)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-10 items-center justify-center rounded-lg border border-gray-200 px-3 text-sm font-medium text-primary transition hover:border-primary"
                        >
                          Order
                        </a>
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-gray-300 bg-secondary p-10 text-center">
              <h3 className="text-3xl text-primary">No products found</h3>
              <p className="mt-2 text-gray-600">Try another category or search term.</p>
            </div>
          )}
        </Container>
      </section>

      <section className="bg-secondary py-12">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['Fast WhatsApp Orders', 'Send your selected items directly to our team.'],
              ['Size Help Available', 'Ask for sizing guidance before confirming your order.'],
              ['Boutique Quality', 'Curated styles with a premium, ready-to-wear feel.'],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-2xl text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            isWishlisted={wishlist.includes(selectedProduct.id)}
            isInCart={cart.includes(selectedProduct.id)}
            onClose={() => setSelectedProduct(null)}
            onWishlist={() => toggleWishlist(selectedProduct.id)}
            onAddToCart={() => addToCart(selectedProduct.id)}
            orderLink={buildWhatsAppLink(selectedProduct)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCartOpen && (
          <CartDrawer
            products={cartProducts}
            total={cartTotal}
            onClose={() => setIsCartOpen(false)}
            onRemove={removeFromCart}
            orderLink={buildWhatsAppLink()}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isWishlistOpen && (
          <WishlistDrawer
            products={wishlistProducts}
            onClose={() => setIsWishlistOpen(false)}
            onRemove={removeFromWishlist}
            onAddToCart={addToCart}
          />
        )}
      </AnimatePresence>
    </main>
  )
}

type ProductModalProps = {
  product: ShopProduct
  isWishlisted: boolean
  isInCart: boolean
  orderLink: string
  onClose: () => void
  onWishlist: () => void
  onAddToCart: () => void
}

const ProductModal = ({
  product,
  isWishlisted,
  isInCart,
  orderLink,
  onClose,
  onWishlist,
  onAddToCart,
}: ProductModalProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 24, scale: 0.98 }}
      className="max-h-[92vh] w-full max-w-4xl overflow-auto rounded-lg bg-white"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="grid md:grid-cols-2">
        <img
          src={product.image}
          alt={product.name}
          decoding="async"
          className="h-full min-h-[420px] w-full object-cover"
        />
        <div className="p-6 md:p-8">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                {product.category}
              </p>
              <h2 className="mt-2 text-4xl text-primary">{product.name}</h2>
            </div>
            <button
              onClick={onClose}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-primary transition hover:bg-secondary"
              aria-label="Close product details"
            >
              <X size={20} />
            </button>
          </div>

          <p className="leading-relaxed text-gray-600">{product.description}</p>
          <div className="mt-5 flex items-center gap-3">
            <span className="text-2xl font-semibold text-primary">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          <div className="mt-7">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">Colors</p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <span key={color} className="rounded-full bg-secondary px-4 py-2 text-sm text-gray-600">
                  {color}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">Sizes</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <span key={size} className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-primary">
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Button size="md" onClick={onAddToCart} className="min-h-12 text-base">
              <ShoppingBag size={18} className="mr-2" />
              {isInCart ? 'Added to Bag' : 'Add to Bag'}
            </Button>
            <Button size="md" variant="outline" onClick={onWishlist} className="min-h-12 text-base">
              <Heart size={18} className={cn('mr-2', isWishlisted ? 'fill-primary' : '')} />
              {isWishlisted ? 'Wishlisted' : 'Wishlist'}
            </Button>
          </div>

          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-6 py-4 text-lg font-medium text-white transition hover:bg-green-700"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
)

type CartDrawerProps = {
  products: ShopProduct[]
  total: number
  orderLink: string
  onClose: () => void
  onRemove: (productId: string) => void
}

const CartDrawer = ({ products, total, orderLink, onClose, onRemove }: CartDrawerProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[90] bg-black/45"
    onClick={onClose}
  >
    <motion.aside
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 260 }}
      className="ml-auto flex h-full w-full max-w-md flex-col bg-white"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="flex items-center justify-between border-b border-gray-200 p-5">
        <div>
          <h2 className="text-3xl text-primary">Shopping Bag</h2>
          <p className="text-sm text-gray-500">{products.length} selected items</p>
        </div>
        <button
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-primary transition hover:bg-secondary"
          aria-label="Close shopping bag"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-auto p-5">
        {products.length > 0 ? (
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="grid grid-cols-[88px_1fr] gap-4 rounded-lg border border-gray-200 p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="h-28 w-full rounded-md object-cover"
                />
                <div>
                  <h3 className="text-xl leading-tight text-primary">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  <p className="mt-2 font-semibold text-primary">{formatPrice(product.price)}</p>
                  <button
                    onClick={() => onRemove(product.id)}
                    className="mt-3 text-sm font-medium text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg bg-secondary p-8 text-center">
            <ShoppingBag className="mx-auto mb-4 text-accent" size={36} />
            <h3 className="text-2xl text-primary">Your bag is empty</h3>
            <p className="mt-2 text-sm text-gray-600">Add a few pieces to create a WhatsApp order.</p>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 p-5">
        <div className="mb-4 flex items-center justify-between text-lg font-semibold text-primary">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
        <a
          href={products.length > 0 ? orderLink : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex w-full items-center justify-center rounded-lg px-6 py-4 text-lg font-medium text-white transition',
            products.length > 0 ? 'bg-green-600 hover:bg-green-700' : 'pointer-events-none bg-gray-300',
          )}
        >
          Checkout on WhatsApp
        </a>
      </div>
    </motion.aside>
  </motion.div>
)

type WishlistDrawerProps = {
  products: ShopProduct[]
  onClose: () => void
  onRemove: (productId: string) => void
  onAddToCart: (productId: string) => void
}

const WishlistDrawer = ({ products, onClose, onRemove, onAddToCart }: WishlistDrawerProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[90] bg-black/45"
    onClick={onClose}
  >
    <motion.aside
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 260 }}
      className="ml-auto flex h-full w-full max-w-md flex-col bg-white"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="flex items-center justify-between border-b border-gray-200 p-5">
        <div>
          <h2 className="text-3xl text-primary">Wishlist</h2>
          <p className="text-sm text-gray-500">{products.length} saved items</p>
        </div>
        <button
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-primary transition hover:bg-secondary"
          aria-label="Close wishlist"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-auto p-5">
        {products.length > 0 ? (
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="grid grid-cols-[88px_1fr] gap-4 rounded-lg border border-gray-200 p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="h-28 w-full rounded-md object-cover"
                />
                <div>
                  <h3 className="text-xl leading-tight text-primary">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  <p className="mt-2 font-semibold text-primary">{formatPrice(product.price)}</p>
                  <div className="mt-3 flex gap-3">
                    <button
                      onClick={() => onAddToCart(product.id)}
                      className="text-sm font-semibold text-primary hover:text-accent"
                    >
                      Add to bag
                    </button>
                    <button
                      onClick={() => onRemove(product.id)}
                      className="text-sm font-medium text-red-600 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg bg-secondary p-8 text-center">
            <Heart className="mx-auto mb-4 text-accent" size={36} />
            <h3 className="text-2xl text-primary">No saved pieces yet</h3>
            <p className="mt-2 text-sm text-gray-600">Tap the heart on any product to keep it here.</p>
          </div>
        )}
      </div>
    </motion.aside>
  </motion.div>
)
