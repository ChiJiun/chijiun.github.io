// Post-build step for GitHub Pages.
// - With showSlideBrowser off, open-slide renders "not found" at the base root,
//   so the root redirects to the home deck before the app boots.
// - GitHub Pages has no SPA rewrites; 404.html is a copy of index.html so deep
//   links like /chijiun.io/s/home/ still load the app.
import { readFileSync, writeFileSync } from 'node:fs';

const BASE = '/chijiun.io/';
const HOME = `${BASE}s/home`;

const redirect = `<script>(function(){var p=location.pathname;if(p===${JSON.stringify(BASE)}||p===${JSON.stringify(BASE.slice(0, -1))}||p===${JSON.stringify(`${BASE}index.html`)}){history.replaceState(null,'',${JSON.stringify(HOME)}+location.search+location.hash);}})();</script>`;

const html = readFileSync('dist/index.html', 'utf8');
if (!html.includes('<head>')) throw new Error('dist/index.html has no <head>');
const patched = html
  .replace('<html lang="en">', '<html lang="zh-Hant">')
  .replace('<head>', `<head>${redirect}`)
  .replace(/<title>[^<]*<\/title>/, '<title>翁祺鈞 Chi-Jiun Wong</title>\n    <meta name="description" content="翁祺鈞的個人網站：可驗證機器學習研究與跑在免費額度上的小工具。" />');

writeFileSync('dist/index.html', patched);
writeFileSync('dist/404.html', patched);
writeFileSync('dist/.nojekyll', '');
console.log(`pages: root redirects to ${HOME}; wrote 404.html and .nojekyll`);
