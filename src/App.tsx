import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Layout } from '@/pages/Layout'

// Lazy load pages
const Home = lazy(() => import('@/pages/Home').then(m => ({ default: m.Home })))
const About = lazy(() => import('@/pages/About').then(m => ({ default: m.About })))
const Shop = lazy(() => import('@/pages/Shop').then(m => ({ default: m.Shop })))
const Contact = lazy(() => import('@/pages/Contact').then(m => ({ default: m.Contact })))
const NotFound = lazy(() => import('@/pages/NotFound').then(m => ({ default: m.NotFound })))

// Loading component
const LoadingPage = () => (
  <div className="min-h-screen flex items-center justify-center pt-20">
    <div className="animate-pulse">
      <div className="h-12 w-32 bg-secondary rounded-lg"></div>
    </div>
  </div>
)

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<LoadingPage />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/shop"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Shop />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<LoadingPage />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
