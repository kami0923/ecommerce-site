import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container } from '@/components/common/Container'
import { FormInput } from '@/components/common/FormInput'
import { FormTextarea } from '@/components/common/FormTextarea'
import { Button } from '@/components/common/Button'
import { FadeUp } from '@/components/animations/FadeUp'
import { Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'   // ADDED: import EmailJS library


const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })


  //updated onsubmit as per emailjs template 
  // ContactForm.tsx

// ADDED: import at the very top of the file (line 1, with other imports)


// CHANGED: replace your existing onSubmit function with this
const onSubmit = async (data: ContactFormData) => {
  try {
    // ADDED: send email via EmailJS
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: data.name,        // matches {{name}} in template
        email: data.email,      // matches {{email}} in template
        subject: data.subject,  // matches {{subject}} in template
        message: data.message,  // matches {{message}} in template
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    // UNCHANGED: show success and reset form
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 3000)

  }  catch (error: any) {
    // CHANGED: show exact error reason
    console.log('Status:', error.status)
    console.log('Reason:', error.text)   // ← tells us exact problem
    alert(`Error: ${error.text}`)        // shows exact reason on screen
  }
}
  // const onSubmit = async (data: ContactFormData) => {
  //   // Simulate API call
  //   await new Promise((resolve) => setTimeout(resolve, 1000))
  //   console.log('Form data:', data)
  //   setIsSubmitted(true)
  //   reset()
  //   setTimeout(() => setIsSubmitted(false), 3000)
  // }

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <FadeUp delay={0.2}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
              Get in Touch
            </h2>

            <div className="space-y-8">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-4"
              >
                <div className="text-accent mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <p className="text-gray-600">hello@luxurybrand.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-4"
              >
                <div className="text-accent mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-4"
              >
                <div className="text-accent mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Address</h3>
                  <p className="text-gray-600">123 Fashion Street, New York, NY 10001</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 p-8 bg-white rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                <strong>WhatsApp:</strong> Chat with us directly
              </p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              >
                💬 Start WhatsApp Chat
              </a>
            </div>
          </FadeUp>

          {/* Right - Form */}
          <FadeUp delay={0.4}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FormInput
                label="Name"
                placeholder="Your name"
                error={errors.name?.message}
                {...register('name')}
              />

              <FormInput
                label="Email"
                type="email"
                placeholder="your@email.com"
                error={errors.email?.message}
                {...register('email')}
              />

              <FormInput
                label="Subject"
                placeholder="How can we help?"
                error={errors.subject?.message}
                {...register('subject')}
              />

              <FormTextarea
                label="Message"
                placeholder="Tell us your thoughts..."
                rows={6}
                error={errors.message?.message}
                {...register('message')}
              />

              <Button
                type="submit"
                size="lg"
                variant="primary"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 border border-green-300 rounded-lg text-green-700 text-center"
                >
                  Thanks for reaching out! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </FadeUp>
        </div>
      </Container>
    </section>
  )
}
