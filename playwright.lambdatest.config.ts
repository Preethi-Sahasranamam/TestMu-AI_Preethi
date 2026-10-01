import { defineConfig } from '@playwright/test';

const username = process.env.LT_USERNAME;
const accessKey = process.env.LT_ACCESS_KEY;

if (!username || !accessKey) {
  throw new Error('Set LT_USERNAME and LT_ACCESS_KEY before running the LambdaTest project.');
}

const capabilities = {
  browserName: 'pw-chromium',
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 11',
    user: username,
    accessKey,
    build: process.env.LT_BUILD_NAME ?? 'Playwright Assessment',
    name: 'Playwright Assessment',
    network: true,
    video: true,
    console: true,
  },
};

const wsEndpoint = `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
  JSON.stringify(capabilities),
)}`;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    browserName: 'chromium',
    connectOptions: { wsEndpoint },
    trace: 'on',
    screenshot: 'on',
    video: 'on',
  },
});