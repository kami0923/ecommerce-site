import { Container } from '@/components/common/Container'
import { SocialLinks } from '@/components/common/SocialLinks'
import { Link } from 'react-router-dom'

const footerLinks = [
  {
    title: 'Shop',
    links: [
      { label: 'New Arrivals', href: '#' },
      { label: 'Collections', href: '#' },
      { label: 'Sale', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Shipping & Returns', href: '#' },
      { label: 'Size Guide', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
]

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <Container>
        <div className="py-16 md:py-24">
          {/* Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-serif font-bold mb-6 uppercase tracking-wide">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-12">
            {/* Newsletter */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="font-serif font-bold text-lg mb-4">Subscribe to Our Newsletter</h4>
                <p className="text-gray-400 text-sm mb-6">
                  Stay updated with new collections and exclusive offers.
                </p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <button className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium text-sm">
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Social */}
              <div className="md:text-right">
                <h4 className="font-serif font-bold text-lg mb-4">Follow Us</h4>
                <p className="text-gray-400 text-sm mb-6">
                  Connect with us on social media for latest updates.
                </p>
                <div className="md:flex md:justify-end">
                  <SocialLinks />
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-center md:text-left">
              <p className="text-sm text-gray-400">
                &copy; {currentYear} Luxury Brand. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                Designed with ✨ for premium experiences
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
