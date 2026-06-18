import { Container } from '@/components/common/Container'
import { SocialLinks } from '@/components/common/SocialLinks'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = [
  {
    title: 'Shop',
    links: [
      { label: 'New Arrivals', href: '/shop' },
      { label: 'Collections', href: '/shop' },
      { label: 'Best Sellers', href: '/shop' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Visit Store', href: '/contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'WhatsApp Support', href: 'https://wa.me/923066330833' },
      { label: 'Size Help', href: '/contact' },
      { label: 'Order Assistance', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Facebook', href: 'https://facebook.com' },
      { label: 'YouTube', href: 'https://youtube.com' },
    ],
  },
]

const storeInfo = [
  {
    icon: MapPin,
    label: 'Plot# 4&5, D-Markaz, D-Block, Gulberg Residencia, Islamabad',
    href: 'https://www.google.com/maps/search/?api=1&query=Plot%23%204%265%2C%20D-Markaz%2C%20D-Block%2C%20Gulberg%20Residencia%2C%20Islamabad',
  },
  { icon: Phone, label: '+92 306 6330833', href: 'tel:+923066330833' },
  { icon: Mail, label: 'shoaibahmed4131@gmail.com', href: 'mailto:shoaibahmed4131@gmail.com' },
  { icon: Clock, label: 'Open daily, 11:00 AM - 10:00 PM' },
]

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white text-primary">
      <Container>
        <div className="py-10 md:py-14">
          <div className="mb-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-4xl text-primary">Hoorain's Collection</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-gray-600">
                Premium fashion pieces, direct WhatsApp ordering, and in-store support
                from Gulberg Residencia, Islamabad.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-secondary p-5">
              <h3 className="mb-4 text-xl text-primary">Store Details</h3>
              <div className="space-y-3">
                {storeInfo.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <span className="flex gap-3 text-sm leading-relaxed text-gray-600 transition hover:text-primary">
                      <Icon size={18} className="mt-0.5 shrink-0 text-accent" />
                      {item.label}
                    </span>
                  )

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 md:grid-cols-4 md:gap-12">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-primary">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('http') ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-500 transition-colors hover:text-primary"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-sm text-gray-500 transition-colors hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t border-gray-200 pt-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-gray-500">
                &copy; {currentYear} Hoorain's Collection. All rights reserved.
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Designed by Shoaib Ahmed for premium experiences.
              </p>
            </div>
            <div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
