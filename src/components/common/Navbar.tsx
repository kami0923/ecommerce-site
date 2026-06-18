import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useNavbarBlur } from '@/hooks/useNavbarBlur'
import { Container } from '@/components/common/Container'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/contact' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const isScrolled = useNavbarBlur()

  useEffect(() => {
    const syncShopCounts = () => {
      const wishlist = JSON.parse(localStorage.getItem('hoorain-wishlist') || '[]') as string[]
      const cart = JSON.parse(localStorage.getItem('hoorain-cart') || '[]') as string[]

      setWishlistCount(wishlist.length)
      setCartCount(cart.length)
    }

    syncShopCounts()
    window.addEventListener('hoorain-shop-update', syncShopCounts)
    window.addEventListener('storage', syncShopCounts)

    return () => {
      window.removeEventListener('hoorain-shop-update', syncShopCounts)
      window.removeEventListener('storage', syncShopCounts)
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full border-b border-gray-200/90 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 shadow-sm backdrop-blur-xl'
          : 'bg-white/95 shadow-[0_1px_0_rgba(18,18,18,0.05)] backdrop-blur-md',
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4 md:h-20">
          <Link to="/" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white shadow-sm transition group-hover:shadow-md">
              <img
                src="/images/logo.png"
                alt="Hoorain's Collection"
                className="h-9 w-9 object-contain"
                decoding="async"
              />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-serif text-xl font-bold text-primary">
                Hoorain's
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                Collection
              </span>
            </span>
          </Link>

          <div className="hidden items-center rounded-full border border-gray-200 bg-secondary/70 p-1 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wide transition',
                    isActive
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-500 hover:bg-white/70 hover:text-primary',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/shop?focus=search#shop-grid"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-primary transition hover:border-primary hover:bg-secondary md:inline-flex"
              aria-label="Search"
            >
              <Search size={18} />
            </Link>
            <Link
              to="/shop?panel=wishlist"
              className="relative hidden h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-primary transition hover:border-primary hover:bg-secondary md:inline-flex"
              aria-label="Wishlist"
            >
              <Heart size={18} />
              {wishlistCount > 0 && (
<span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gray-900 px-1 text-[11px] font-bold text-white ring-2 ring-white">
  {wishlistCount}
</span>
              )}
            </Link>
            <Link
              to="/shop"
className="relative hidden items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-gray-800 md:inline-flex"
            >
              <ShoppingBag size={18} />
              Shop Now
              {cartCount > 0 && (
<span className="ml-1 rounded-full bg-white px-2 py-0.5 text-xs font-bold text-gray-900">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-primary transition hover:bg-secondary md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-gray-200 bg-white/95 shadow-lg backdrop-blur-xl md:hidden"
          >
            <Container>
              <div className="py-4">
                <div className="mb-4 grid grid-cols-3 gap-2">
                  <Link
                    to="/shop?focus=search#shop-grid"
                    onClick={() => setIsOpen(false)}
                    className="flex h-11 items-center justify-center rounded-lg bg-secondary text-primary"
                    aria-label="Search"
                  >
                    <Search size={18} />
                  </Link>
                  <Link
                    to="/shop?panel=wishlist"
                    onClick={() => setIsOpen(false)}
                    className="relative flex h-11 items-center justify-center rounded-lg bg-secondary text-primary"
                    aria-label="Wishlist"
                  >
                    <Heart size={18} />
                    {wishlistCount > 0 && (
                      <span className="absolute right-3 top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-bold text-white">
                        {wishlistCount}
                      </span>
                    )}
                  </Link>
                  <Link
                    to="/shop"
                    onClick={() => setIsOpen(false)}
                    className="flex h-11 items-center justify-center rounded-lg bg-primary text-white"
                    aria-label="Shop"
                  >
                    <ShoppingBag size={18} />
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide transition',
                          isActive
                            ? 'bg-secondary text-primary'
                            : 'text-gray-600 hover:bg-secondary hover:text-primary',
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
