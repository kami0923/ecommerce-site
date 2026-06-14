const makeDummyImage = (label: string, subtitle: string, colors: [string, string]) => {
  const [start, end] = colors

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="${start}" offset="0%" />
          <stop stop-color="${end}" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="800" height="800" fill="url(#g)" rx="32" />
      <circle cx="160" cy="180" r="130" fill="rgba(255,255,255,0.12)" />
      <circle cx="640" cy="620" r="180" fill="rgba(255,255,255,0.08)" />
      <rect x="120" y="120" width="560" height="560" rx="40" fill="rgba(10,14,20,0.25)" stroke="rgba(255,255,255,0.18)" />
      <text x="50%" y="48%" text-anchor="middle" fill="#fff" font-family="Segoe UI, Arial, sans-serif" font-size="56" font-weight="700">${label}</text>
      <text x="50%" y="58%" text-anchor="middle" fill="rgba(255,255,255,0.88)" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="500">${subtitle}</text>
    </svg>
  `)}`
}

export const dummyImages = {
  placeholder: makeDummyImage('Luxury Brand', 'Premium Fashion', ['#111827', '#1f2937']),
  brandStory: makeDummyImage('Crafted', 'Timeless Elegance', ['#3f3cbb', '#0f172a']),
  spring: makeDummyImage('Spring', 'Elegance Edit', ['#8b5cf6', '#0f172a']),
  autumn: makeDummyImage('Autumn', 'Essence Edit', ['#d97706', '#1f2937']),
  minimalist: makeDummyImage('Minimal', 'Modern Lines', ['#14b8a6', '#0f172a']),
  urban: makeDummyImage('Urban', 'Edge Collection', ['#f59e0b', '#111827']),
  feedOne: makeDummyImage('Feed', 'New Drop', ['#ec4899', '#1f2937']),
  feedTwo: makeDummyImage('Style', 'Seasonal Picks', ['#6366f1', '#111827']),
}
