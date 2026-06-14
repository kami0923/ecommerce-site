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
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      custom={delay}
      variants={fadeUpVariants}
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
