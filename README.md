# Premium Luxury Fashion Brand Website

A modern, production-ready React website showcasing a premium luxury fashion brand. Built with React 18, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Features

### Pages
- **Home** - Hero section, brand story, featured collections, value propositions, Instagram gallery, newsletter
- **About** - Company vision/mission, core values, animated timeline, brand history
- **Shop** - Coming soon page with countdown timer, product teasers, email subscription
- **Contact** - Contact form, location map, WhatsApp CTA, social links
- **404** - Custom not found page

### Design Elements
- **Premium minimalist aesthetic** inspired by luxury brands (Zara, COS, Represent)
- **Smooth animations** with Framer Motion throughout
- **Responsive design** - mobile-first approach, fully responsive
- **Accessible** - semantic HTML, ARIA labels, keyboard navigation
- **SEO optimized** - meta tags, structured markup

### Animations & Interactions
- Fade-up animations on scroll
- Staggered card reveals
- Image hover zoom effects
- Blur navbar effect on scroll
- Smooth page transitions
- Lenis smooth scrolling throughout
- Countdown timer on shop page
- Loading states and transitions

### Components

#### Common Components
- `Button` - 4 variants (primary, secondary, outline, ghost), 3 sizes
- `Container` - Responsive max-width wrapper
- `Card` - Hover effects, flexible layout
- `FormInput` & `FormTextarea` - With error states and validation
- `SocialLinks` - Horizontal/vertical layout
- `Navbar` - Sticky, blur effect, mobile menu
- `Footer` - Newsletter, social, links, company info

#### Animation Components
- `FadeUp` - Fade and slide up on scroll
- `StaggerContainer` - Stagger children animations
- `ImageZoom` - Hover zoom effect on images

#### Section Components
- `HeroSection` - Full-screen hero with CTAs
- `BrandStory` - Company narrative with image
- `FeaturedCollections` - Grid of collection cards
- `WhyChooseUs` - 4 value propositions
- `InstagramGallery` - 6-item grid with modal overlays
- `Newsletter` - Email subscription form
- `ContactForm` - Full contact form with validation
- `ComingSoon` - Launch countdown and signup
- `ProductTeaser` - 3-item product preview
- `Timeline` - Animated company history

## 📁 Project Structure

```
ecommerce-site/
├── src/
│   ├── components/
│   │   ├── animations/
│   │   │   ├── FadeUp.tsx
│   │   │   ├── ImageZoom.tsx
│   │   │   └── StaggerContainer.tsx
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── FormInput.tsx
│   │   │   ├── FormTextarea.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── SocialLinks.tsx
│   │   └── sections/
│   │       ├── BrandStory.tsx
│   │       ├── ComingSoon.tsx
│   │       ├── ContactForm.tsx
│   │       ├── FeaturedCollections.tsx
│   │       ├── HeroSection.tsx
│   │       ├── InstagramGallery.tsx
│   │       ├── Newsletter.tsx
│   │       ├── ProductTeaser.tsx
│   │       ├── Timeline.tsx
│   │       └── WhyChooseUs.tsx
│   ├── hooks/
│   │   ├── useCountdown.ts
│   │   ├── useNavbarBlur.ts
│   │   └── useScrollTrigger.ts
│   ├── lib/
│   │   ├── animations.ts
│   │   ├── colors.ts
│   │   └── utils.ts
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Layout.tsx
│   │   ├── NotFound.tsx
│   │   └── Shop.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   ├── components.ts
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs on `http://localhost:5173`

## 🎯 Tech Stack

- **React 18** - UI library
- **Vite** - Next-gen build tool (3x faster)
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS
- **Framer Motion** - Advanced animations
- **React Router v7** - Client-side routing
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Lenis** - Smooth scrolling
- **Lucide React** - Icon library
- **Day.js** - Lightweight date library

## 🎨 Design System

### Color Palette
- **Primary**: #121212 (Deep black)
- **Background**: #FFFFFF (Pure white)
- **Secondary**: #F5F3EF (Warm beige)
- **Accent**: #8A817C (Taupe)

### Typography
- **Headings**: Georgia serif (premium feel)
- **Body**: System fonts (performance)
- **Line height**: 1.6-1.8 (luxury spacing)

### Spacing
- Mobile: 16-20px
- Desktop: 48-64px
- Section gap: 80-120px

## 🔧 Configuration

### Tailwind Config
Custom colors and animations extended in `tailwind.config.ts`

### Vite Aliases
`@/` resolves to `src/` for clean imports

### Environment Variables
Create `.env` file if needed:
```
VITE_API_URL=https://api.example.com
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large**: > 1280px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Focus states on buttons/links

## 🚀 Performance

- Code splitting with lazy loading
- Image optimization with lazy loading
- Framer Motion GPU acceleration
- Smooth 60fps animations
- Lenis smooth scrolling optimization

## 📝 Usage Examples

### Using Animation Components

```tsx
import { FadeUp } from '@/components/animations/FadeUp'

<FadeUp delay={0.2}>
  <h2>Your content fades up on scroll</h2>
</FadeUp>
```

### Form Validation

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email()
})

const { register, formState: { errors } } = useForm({
  resolver: zodResolver(schema)
})
```

### Smooth Scrolling

Lenis is configured in `main.tsx` for automatic smooth scrolling on all browsers.

## 🎯 Future Enhancements

- [ ] Blog section with CMS integration
- [ ] Product comparison feature
- [ ] Wishlist functionality
- [ ] Advanced filtering
- [ ] User accounts and profiles
- [ ] Order tracking
- [ ] Reviews and ratings
- [ ] Real-time notifications

## 📦 Production Deployment

### Build
```bash
npm run build
```

Generates optimized production files in `dist/`

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🔐 Security

- No sensitive data in client code
- XSS prevention through React
- CSRF protection ready
- HTTP-only cookies support

## 📄 License

MIT

## 👨‍💻 Development

### Code Style
- ESLint ready
- TypeScript strict mode
- Component-based architecture
- Utility-first CSS

### Git Workflow
```bash
git add .
git commit -m "feat: add feature name"
git push origin main
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

For questions or support, contact: hello@luxurybrand.com

---

**Built with ✨ for premium experiences**
