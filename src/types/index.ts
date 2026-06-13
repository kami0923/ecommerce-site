export * from './components'

export interface Product {
  id: string
  name: string
  description: string
  image: string
  category: string
}

export interface Collection {
  id: string
  name: string
  description: string
  image: string
  href: string
}

export interface Value {
  id: string
  title: string
  description: string
  icon: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface NewsletterData {
  email: string
}
