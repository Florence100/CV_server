import { join } from 'path';

/**
 * @type {import("puppeteer").Configuration}
*/

const puppeteerConfig = {
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};

export default puppeteerConfig;