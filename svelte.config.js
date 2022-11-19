import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'
/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte'],
  preprocess: [
    [
      preprocess({
        postcss: true
      })
    ]
  ],
  kit: {
    adapter: adapter(),

    prerender: {
      entries: ['*']
    },
  },
}

export default config
