import { TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const FormTextarea = ({ label, error, className, ...props }: FormTextareaProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-primary">{label}</label>
      )}
      <textarea
        className={cn(
          'bg-white border border-gray-200 rounded-lg px-4 py-3 text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none',
          error && 'border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <span className="text-sm text-red-500">{error}</span>
      )}
    </div>
  )
}
