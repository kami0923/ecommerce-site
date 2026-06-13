import { CardProps } from '@/types'
import { cn } from '@/lib/utils'

export const Card = ({ className, children }: CardProps) => {
  return (
    <div className={cn('bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300', className)}>
      {children}
    </div>
  )
}
