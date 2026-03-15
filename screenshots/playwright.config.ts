import {defineConfig, devices} from '@playwright/test';
import path from 'path';

export default defineConfig({
  testDir: './specs',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: process.env.DEMO_URL || 'https://demo.egyutter.hu',
    // storageState NOT set here — only in 'screenshots' project below
    screenshot: 'only-on-failure',
    video: 'off',
    locale: 'hu-HU',
    viewport: {width: 1280, height: 800},
  },
  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'screenshots',
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        storageState: path.join(__dirname, 'fixtures/auth.json'),
      },
    },
  ],
});
