import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const docs = path.join(root, 'docs');

/** User Pages: https://tony561688.github.io/ (repo tony561688.github.io) */
process.chdir(root);
execSync('npx tsc --noEmit', { stdio: 'inherit', cwd: root });
execSync('npx vite build --base / --outDir docs', {
  stdio: 'inherit',
  cwd: root,
  shell: true,
});

fs.copyFileSync(path.join(docs, 'index.html'), path.join(docs, '404.html'));
fs.writeFileSync(path.join(docs, '.nojekyll'), '');
console.log('GitHub Pages: built to docs/ with base / (tony561688.github.io)');
