import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    supportFile: 'framework/commands/index.ts',
    specPattern: 'tests/e2e/**/*.spec.ts',
    setupNodeEvents(on, config) {
      // configure plugins here if needed
    }
  },
  video: false,
  screenshotsFolder: 'reports/screenshots',
  videosFolder: 'reports/videos'
});
