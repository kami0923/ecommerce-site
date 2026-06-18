import { ButtonProps } from '@/types'
import { cn } from '@/lib/utils'

const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'

const variants = {
primary: 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl',
  secondary: 'bg-secondary text-primary hover:bg-gray-200',
  outline: 'border-2 border-primary bg-white text-primary hover:bg-primary hover:text-dark',
  ghost: 'text-primary hover:bg-secondary',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
