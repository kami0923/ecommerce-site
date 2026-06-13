import postcss from 'postcss'
import tailwindcss from '@tailwindcss/postcss'
const css = `@import "tailwindcss";
@reference "tailwindcss";
body { @apply text-red-500; }`

postcss([tailwindcss({ config: './tailwind.config.js' })])
  .process(css, { from: 'src/styles/globals.css' })
  .then(result => {
    console.log('SUCCESS')
    console.log(result.css)
  })
  .catch(error => {
    console.error('ERROR')
    console.error(error)
    process.exit(1)
  })
