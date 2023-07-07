// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'みずさわぽーたる',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // twitter ogp
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@mizphses' },
        // ogp
        { hid: 'og:site_name', property: 'og:site_name', content: 'みずさわぽーたる' },
        { hid: 'og:title', property: 'og:title', content: 'みずさわぽーたる' },
        { hid: 'og:description', property: 'og:description', content: 'みずさわぽーたる: みずさわ（mizphses）の個人サイト' },
        { hid: 'og:image', property: 'og:image', content: 'https://mizphs.es/ogp.webp' },
        { hid: 'og:url', property: 'og:url', content: 'https://mizphs.es' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        // favicon
        { hid: 'favicon', rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { hid: 'apple-touch-icon', rel: 'apple-touch-icon', href: '/apple-touch-icon-180x180.png' },
        // SEO
        { hid: 'description', name: 'description', content: 'みずさわぽーたる: みずさわ（mizphses）の個人サイト' },
        { hid: 'keywords', name: 'keywords', content: 'mizphses,みずさわ,みずさわぽーたる,ポータルサイト'},
        { hid: 'author', name: 'author', content: 'mizphses' },
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
