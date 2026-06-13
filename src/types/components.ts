export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export interface CardProps {
  className?: string
  children: React.ReactNode
}

export interface SocialLinksProps {
  variant?: 'horizontal' | 'vertical'
  className?: string
}

export interface FadeUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export interface StaggerContainerProps {
  children: React.ReactNode
  staggerChildren?: number
  delayChildren?: number
  className?: string
}

export interface ImageZoomProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}
