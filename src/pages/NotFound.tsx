import { Container } from '@/components/common/Container'
import { Button } from '@/components/common/Button'
import { Link } from 'react-router-dom'
import { FadeUp } from '@/components/animations/FadeUp'

export const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-secondary pt-20">
      <Container>
        <FadeUp delay={0.2} className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="font-serif text-8xl md:text-9xl font-bold text-accent mb-4">
              404
            </h1>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12">
              We couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
          </div>

          <Link to="/">
            <Button size="lg" variant="primary">
              Return to Home
            </Button>
          </Link>
        </FadeUp>
      </Container>
    </main>
  )
}
