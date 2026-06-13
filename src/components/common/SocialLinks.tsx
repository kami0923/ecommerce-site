import { SocialLinksProps } from '@/types'
// import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

const socials = [
  { icon: ExternalLink, href: 'https://instagram.com', label: 'Instagram' },
  { icon: ExternalLink, href: 'https://facebook.com', label: 'Facebook' },
  { icon: ExternalLink, href: 'https://twitter.com', label: 'Twitter' },
  { icon: ExternalLink, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export const SocialLinks = ({ variant = 'horizontal', className }: SocialLinksProps) => {
  const isVertical = variant === 'vertical'

  return (
    <div
      className={cn(
        'flex gap-4',
        isVertical && 'flex-col',
        className
      )}
    >
      {socials.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-primary hover:text-accent transition-colors duration-300"
          >
            <Icon size={24} />
          </a>
        )
      })}
    </div>
  )
}
