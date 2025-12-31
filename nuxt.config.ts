// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: ['@nuxt/eslint'],

  // 🔥 INI YANG KAMU KURANG
  imports: {
    dirs: ['composables']
  },

  typescript: {
    strict: true
  },

  runtimeConfig: {
    public: {
      supabaseUrl: '',
      supabaseAnonKey: ''
    }
  }
})
