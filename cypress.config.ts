import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    specPattern: 'tests/e2e/**/*.spec.ts',
    supportFile: 'framework/support.ts',
    setupNodeEvents(on, config) {
      // register reporters or other node events here
      return config
    },
    viewportWidth: 1480,
    viewportHeight: 1280,
    video: false,
    retries: { runMode: 1, openMode: 0 }
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'reports',
    overwrite: false,
    html: true,
    json: true
  },
  env: {
    DEMOQA_WAIT: 1000
  }
})
