// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'みずさわぽーたる',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/zqf6nqg.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kaisei+Opti&family=Noto+Sans+JP:wght@400;700&family=Roboto+Condensed:ital,wght@0,400;0,700;1,400;1,700&display=swap'
        }
      ],
      script: [
        {
          src: 'https://use.typekit.net/ukl7xfb.js',
        },
      ],
    }
  },
  css: [
    'normalize.css/normalize.css'
  ]
})
