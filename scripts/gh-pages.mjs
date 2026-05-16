import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const docs = path.join(root, 'docs');

process.chdir(root);
execSync('npx tsc --noEmit', { stdio: 'inherit', cwd: root });
execSync('npx vite build --base /personal.github.io/ --outDir docs', {
  stdio: 'inherit',
  cwd: root,
  shell: true,
});

fs.copyFileSync(path.join(docs, 'index.html'), path.join(docs, '404.html'));
fs.writeFileSync(path.join(docs, '.nojekyll'), '');
console.log('GitHub Pages: built to docs/ with base /personal.github.io/');
