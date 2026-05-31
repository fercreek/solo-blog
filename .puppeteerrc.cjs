const { join } = require('path');

// Cache Chromium inside the project so Vercel's build cache keeps it
// (default ~/.cache/puppeteer is not persisted across CI builds).
module.exports = {
  cacheDirectory: join(__dirname, 'node_modules', '.cache', 'puppeteer'),
};
