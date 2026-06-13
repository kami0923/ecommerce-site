import { Container } from '@/components/common/Container'
import { FadeUp } from '@/components/animations/FadeUp'
import { ContactForm } from '@/components/sections/ContactForm'

export const Contact = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-secondary">
        <Container>
          <FadeUp delay={0.2} className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Have questions or ready to join our community? We'd love to hear from you. Reach out through any of the channels below.
            </p>
          </FadeUp>
        </Container>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Map Embed Section */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <FadeUp delay={0.2} className="mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-center mb-4">
              Visit Us
            </h2>
            <p className="text-center text-gray-600 text-lg">
              Our flagship store is located in the heart of New York
            </p>
          </FadeUp>

          <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-accent transition-colors">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.00601234567890!3d40.71234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316c2f9c3f%3A0x1234567890abcdef!2s123%20Fashion%20Street%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </main>
  )
}
