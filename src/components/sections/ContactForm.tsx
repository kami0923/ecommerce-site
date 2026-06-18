import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container } from '@/components/common/Container'
import { FormInput } from '@/components/common/FormInput'
import { FormTextarea } from '@/components/common/FormTextarea'
import { Button } from '@/components/common/Button'
import { FadeUp } from '@/components/animations/FadeUp'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })


  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitError('')

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )

      setIsSubmitted(true)
      reset()
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      const reason = error instanceof Error ? error.message : 'Please try again or message us on WhatsApp.'
      setSubmitError(reason)
    }
  }

  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      value: 'shoaibahmed4131@gmail.com',
      href: 'mailto:shoaibahmed4131@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 306 6330833',
      href: 'tel:+923066330833',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Plot# 4 & 5, D-Markaz Block D Markaz Gulberg Residencia, Islamabad, Pakistan',
      href: 'https://www.google.com/maps/place/Hoorain+Collection+Gulberg+pride+2+LLp/@33.6007884,73.2078809,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfefa662593ee7:0x3d4b5a921e2cd5d5!8m2!3d33.600784!4d73.2127518!16s%2Fg%2F11xrf665qj?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      icon: Clock,
      title: 'Timing',
      value: 'Monday - Sunday, 11:00 AM - 10:00 PM',
    },
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <FadeUp delay={0.2}>
            <div className="rounded-lg border border-gray-200 bg-secondary p-6 md:p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
                Store Support
              </p>
              <h2 className="text-4xl text-primary md:text-5xl">We are here to help</h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                Ask about sizes, availability, custom styling, or your visit to our Islamabad
                location. We usually respond fastest on WhatsApp.
              </p>

              <div className="mt-8 space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4 transition hover:border-primary"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        <Icon size={20} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-primary">{item.title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-gray-600">{item.value}</span>
                      </span>
                    </motion.div>
                  )

                  return item.href ? (
                    <a key={item.title} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {content}
                    </a>
                  ) : (
                    <div key={item.title}>{content}</div>
                  )
                })}
              </div>

              <a
                href="https://wa.me/923066330833"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-4 font-semibold text-white transition hover:bg-green-700"
              >
                <MessageCircle size={19} />
                Chat on WhatsApp
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-7">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  Send a Message
                </p>
                <h3 className="mt-2 text-4xl text-primary">Tell us what you need</h3>
              </div>

              <div className="space-y-5">
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
                size="md"
                variant="primary"
                className="min-h-12 w-full text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 border border-green-300 rounded-lg text-green-700 text-center"
                >
                  Thanks for reaching out! We'll get back to you soon.
                </motion.div>
              )}

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4 text-center text-sm text-red-700"
                >
                  {submitError}
                </motion.div>
              )}
            </form>
          </FadeUp>
        </div>
      </Container>
    </section>
  )
}
