import { motion } from 'framer-motion'
import { ImageZoomProps } from '@/types'

export const ImageZoom = ({ src, alt, className, width = 500, height = 500 }: ImageZoomProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-lg"
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
      />
    </motion.div>
  )
}
