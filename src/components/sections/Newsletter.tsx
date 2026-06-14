import { useState } from 'react'
import { Container } from '@/components/common/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { Button } from '@/components/common/Button'
import { Mail, Check } from 'lucide-react'
import { motion } from 'framer-motion'

export const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      setTimeout(() => {
        setEmail('')
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  return (
    <section className="py-10 lg:py-10 bg-white">
      <Container>
        <FadeUp delay={0.2} className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6"
              whileHover={{ scale: 1.1 }}
            >
              <Mail className="text-accent" size={32} />
            </motion.div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 text-lg">
              Subscribe to our newsletter for exclusive collections, early access to sales, and insider content.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={isSubmitted}
              className="flex-1 px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-primary disabled:bg-gray-100"
            />
            <Button
              type="submit"
              size="lg"
              variant="primary"
              disabled={isLoading || isSubmitted}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-accent font-medium"
            >
              <Check size={20} />
              Thanks for subscribing!
            </motion.div>
          )}

          <p className="text-center text-sm text-gray-400 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </FadeUp>
      </Container>
    </section>
  )
}
