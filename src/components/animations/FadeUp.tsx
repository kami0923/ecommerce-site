import { motion } from 'framer-motion'
import { FadeUpProps } from '@/types'
import { fadeUpVariants } from '@/lib/animations'

export const FadeUp = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: FadeUpProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
