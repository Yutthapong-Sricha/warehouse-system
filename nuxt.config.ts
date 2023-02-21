// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@vuestic/nuxt'
  ],

  vuestic: {
    config: {
      // Vuestic config here
    },
    
    css: ['grid', 'typography'],
  },
})
