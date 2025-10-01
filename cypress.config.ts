import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    supportFile: 'framework/support.ts',
    specPattern: 'tests/e2e/**/*.spec.ts',
    setupNodeEvents(on, config) {
      // configure plugins here if needed
    },
    viewportWidth: 1420,    // desired width
    viewportHeight: 1080     // desired height
  },
  video: false,
  screenshotsFolder: 'reports/screenshots',
  videosFolder: 'reports/videos'
});
