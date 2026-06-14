import { SocialLinksProps } from '@/types'
import {  } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'

const socials = [
  { icon: faYoutube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: faTiktok, href: 'https://tiktok.com', label: 'TikTok' },
  { icon: faFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: faInstagram, href: 'https://instagram.com', label: 'Instagram' },
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
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={social.icon} size="2x" />
          </a>
        )
      })}
    </div>
  )
}
