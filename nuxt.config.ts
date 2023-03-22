// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'
import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts'],
  alias: {
    images: fileURLToPath(new URL('./assets/images', import.meta.url)),
    style: fileURLToPath(new URL('./assets/style', import.meta.url)),
    mixins: fileURLToPath(new URL('./assets/mixins', import.meta.url))
  },
  googleFonts: {
    families: {
      'Russo+One': [400],
      Roboto: [400, 600],
      Rubik: [300, 400, 500]
    }
  },
  vite: {
    plugins: [svgLoader()]
  }
})
