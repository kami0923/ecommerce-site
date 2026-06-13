import { motion } from 'framer-motion'
import { StaggerContainerProps } from '@/types'

export const StaggerContainer = ({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  className,
}: StaggerContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
