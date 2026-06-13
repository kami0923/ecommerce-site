import { Container } from '@/components/common/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { useCountdown } from '@/hooks/useCountdown'
import { motion } from 'framer-motion'

const CountdownItem = ({ label, value }: { label: string; value: number }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-primary text-white rounded-lg w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4">
        <span className="font-serif text-3xl md:text-4xl font-bold">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-sm md:text-base font-medium text-primary uppercase tracking-wide">
        {label}
      </span>
    </motion.div>
  )
}

export const ComingSoon = () => {
  const launchDate = new Date('2024-09-01')
  const { countdown } = useCountdown(launchDate)

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <Container>
        <FadeUp delay={0.2} className="text-center mb-12">
          <p className="text-accent font-medium uppercase tracking-widest text-sm mb-4">
            Launching Soon
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            The Shop is Coming
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're building something extraordinary. Be among the first to access our exclusive collection when we launch.
          </p>
        </FadeUp>

        {/* Countdown */}
        <div className="flex justify-center gap-6 md:gap-10 mb-16">
          <CountdownItem label="Days" value={countdown.days} />
          <CountdownItem label="Hours" value={countdown.hours} />
          <CountdownItem label="Minutes" value={countdown.minutes} />
          <CountdownItem label="Seconds" value={countdown.seconds} />
        </div>

        {/* Email Signup */}
        <FadeUp delay={0.6} className="max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Get notified at launch"
              className="flex-1 px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            />
            <button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-gray-900 transition-colors font-medium">
              Notify Me
            </button>
          </form>
        </FadeUp>
      </Container>
    </section>
  )
}
