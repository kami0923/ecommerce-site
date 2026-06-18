import { motion } from 'framer-motion'
import { ImageZoomProps } from '@/types'

export const ImageZoom = ({ src, alt, className, width = 500, height = 500 }: ImageZoomProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '120px' }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-lg bg-secondary"
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover transition-transform duration-500 will-change-transform hover:scale-105 ${className}`}
      />
    </motion.div>
  )
}
