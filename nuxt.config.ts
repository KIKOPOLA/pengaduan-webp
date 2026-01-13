// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  // Global CSS (pure CSS, no Tailwind)
  css: [
    '~/assets/css/guest.css',
    '~/assets/css/auth.css',
    '~/assets/css/user.css',
    '~/assets/css/admin.css',
  ],

  // Dev modules
  modules: ['@nuxt/eslint'],

  // Auto-import composables
  imports: {
    dirs: ['composables'],
  },

  // TypeScript configuration (FIX for window / DOM / SSR)
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        target: 'ESNext',
        module: 'ESNext',
        lib: ['ESNext', 'DOM'],
        moduleResolution: 'Bundler',
        types: ['node'],
        jsx: 'preserve',
        skipLibCheck: true,
        useDefineForClassFields: true,
      },
    },
  },

  // Runtime config
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
    public: {},
  },

  // Devtools (safe to keep on dev)
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
})
