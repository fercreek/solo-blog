// CI-native prerender: serve the built dist with `vite preview`, render each
// route with puppeteer (bundled Chromium; skipped where it cannot launch), and write the
// fully-rendered HTML to dist/<route>/index.html so crawlers and AI agents get
// content + JSON-LD without executing JS.
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const PORT = 4178;
const ROUTES = ['/', '/about', '/projects', '/system', '/now', '/contact', '/impossible-list'];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const preview = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: ROOT, stdio: 'ignore',
});

let browser;
try {
  await sleep(3500); // let preview boot
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    });
  } catch (error) {
    // Vercel's build image lacks Chromium's shared libraries (libnspr4.so), and a
    // failed prerender used to fail the whole deploy. Ship the plain SPA instead.
    console.warn('prerender skipped, browser did not launch:', String(error.message).split('\n')[0]);
  }
  if (!browser) {
    preview.kill('SIGTERM');
    process.exit(0);
  }
  for (const route of ROUTES) {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0', timeout: 30000,
    });
    await sleep(400); // settle helmet + styled-components
    const html = await page.content();
    await page.close();
    const outDir = route === '/' ? join(ROOT, 'dist') : join(ROOT, 'dist', route);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), html);
    console.log('prerendered', route, `(${html.length} bytes)`);
  }
  console.log('✓ prerender complete');
} finally {
  if (browser) await browser.close();
  preview.kill('SIGTERM');
}
