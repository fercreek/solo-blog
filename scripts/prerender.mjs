// Dependency-free prerender: serve dist with vite preview, render each route
// with headless Chrome, and write the rendered HTML to dist/<route>/index.html.
// Static hosts (Vercel) then serve crawlers/agents fully-rendered HTML.
import { spawn, execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const PORT = 4178;
const ROUTES = ['/', '/about', '/projects', '/now', '/contact', '/impossible-list'];
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const preview = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: ROOT, stdio: 'ignore', detached: false,
});

try {
  await sleep(3500); // let preview boot
  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    const html = execFileSync(CHROME, [
      '--headless=new', '--disable-gpu', '--no-sandbox',
      '--virtual-time-budget=4000', '--dump-dom', url,
    ], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
    const outDir = route === '/' ? join(ROOT, 'dist') : join(ROOT, 'dist', route);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), '<!doctype html>\n' + html);
    console.log('prerendered', route, `(${html.length} bytes)`);
  }
  console.log('✓ prerender complete');
} finally {
  preview.kill('SIGTERM');
}
