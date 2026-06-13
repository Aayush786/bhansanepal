const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');
const sharp = require('sharp');

const workspaceRoot = path.resolve(__dirname, '..');
const publicImagesDir = path.join(workspaceRoot, 'public', 'images');
const originalsDir = path.join(publicImagesDir, 'originals');
const webpDir = path.join(publicImagesDir, 'webp');

const filesToScan = [
  path.join(workspaceRoot, 'src', 'data', 'mockRecipes.js'),
  path.join(workspaceRoot, 'src', 'pages', 'Home.jsx'),
  path.join(workspaceRoot, 'src', 'pages', 'Blog.jsx'),
  path.join(workspaceRoot, 'src', 'pages', 'KitchenTools.jsx'),
  path.join(workspaceRoot, 'src', 'pages', 'RecipeDetail.jsx')
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function sha8(input) {
  return crypto.createHash('sha1').update(input).digest('hex').slice(0, 8);
}

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(download(res.headers.location));
      }
      if (res.statusCode !== 200) return reject(new Error('Failed to download ' + url + ' (' + res.statusCode + ')'));
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function processUrl(url) {
  try {
    const hash = sha8(url);
    const urlObj = new URL(url);
    const origName = path.basename(urlObj.pathname).split('?')[0] || 'img';
    const ext = path.extname(origName) || '.jpg';
    const baseName = `${hash}-${origName.replace(/[^a-zA-Z0-9.-]/g, '')}`;
    const origPath = path.join(originalsDir, baseName + ext);
    const webpPath = path.join(webpDir, baseName + '.webp');

    if (!fs.existsSync(origPath)) {
      console.log('Downloading', url);
      const data = await download(url);
      fs.writeFileSync(origPath, data);
    } else {
      console.log('Already downloaded', url);
    }

    if (!fs.existsSync(webpPath)) {
      console.log('Optimizing to webp', origPath);
      await sharp(origPath)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpPath);
    } else {
      console.log('WebP exists for', url);
    }

    return { url, webp: `/images/webp/${path.basename(webpPath)}` };
  } catch (err) {
    console.error('Error processing', url, err.message);
    return null;
  }
}

(async () => {
  ensureDir(originalsDir);
  ensureDir(webpDir);

  const urlSet = new Set();

  for (const file of filesToScan) {
    if (!fs.existsSync(file)) continue;
    const txt = fs.readFileSync(file, 'utf8');
    const re = /https?:\/\/[^"'\s)]+/g;
    let m;
    while ((m = re.exec(txt)) !== null) {
      urlSet.add(m[0]);
    }
  }

  const urls = Array.from(urlSet);
  console.log('Found', urls.length, 'external URLs to process');

  const map = {};
  for (const url of urls) {
    const res = await processUrl(url);
    if (res) map[url] = res.webp;
  }

  for (const file of filesToScan) {
    if (!fs.existsSync(file)) continue;
    let txt = fs.readFileSync(file, 'utf8');
    let changed = false;
    for (const [orig, webp] of Object.entries(map)) {
      if (txt.includes(orig)) {
        txt = txt.split(orig).join(webp);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(file, txt, 'utf8');
      console.log('Updated', file);
    }
  }

  console.log('Done. Optimized images saved to', webpDir);
})();
