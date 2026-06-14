import { SocialLinksProps } from '@/types'
 import {  } from 'lucide-react'
// import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faIndustry } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faYoutube,
  faXTwitter,
  faTiktok,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

const socials = [
  { icon: faHeart, href: 'https://instagram.com', label: 'Instagram' },
  { icon: faIndustry, href: 'https://twitter.com', label: 'Twitter' },
  { icon: faLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: faYoutube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: faXTwitter, href: 'https://x.com', label: 'X (Twitter)' },
  { icon: faTiktok, href: 'https://tiktok.com', label: 'TikTok' },
  { icon: faGithub, href: 'https://github.com', label: 'GitHub' },    
  // { icon: faFacebook, href: 'https://facebook.com', label: 'Facebook' },
  // { icon: faTwitter, href: 'https://twitter.com', label: 'Twitter' },
  // { icon: faLinkedIn, href: 'https://linkedin.com', label: 'LinkedIn' },
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
      <FontAwesomeIcon icon={faHeart} size="2x" className="text-primary" />
      {socials.map((social) => {
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-primary hover:text-accent transition-colors duration-300"
          >
            <FontAwesomeIcon icon={social.icon} size="2x" />
          </a>
        )
      })}
    </div>
  )
}
