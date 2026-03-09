import fs from 'fs';

const FILES = [
  {
    path: 'd:/bhansanepal/src/data/mockRecipes.js',
    type: 'structured',
    titleRegex: /title:\s*"([^"]+)",/g,
    blockRegex: (title) => new RegExp(`(title:\\s*"${escapeRegExp(title)}"[\\s\\S]*?image:\\s*)"([^"]+)"`)
  },
  {
    path: 'd:/bhansanepal/src/pages/Blog.jsx',
    type: 'structured',
    titleRegex: /title:\s*"([^"]+)",/g,
    blockRegex: (title) => new RegExp(`(title:\\s*"${escapeRegExp(title)}"[\\s\\S]*?image:\\s*)"([^"]+)"`)
  },
  {
    path: 'd:/bhansanepal/src/pages/Home.jsx',
    type: 'standalone',
    replacements: [
      {
        query: "Traditional Nepali Cooking Fire",
        oldUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400"
      }
    ]
  },
  {
      path: 'd:/bhansanepal/src/pages/Blog.jsx',
      type: 'standalone',
      replacements: [
          {
              query: "Nepali Food Platter",
              oldUrl: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=1200"
          }
      ]
  }
];

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function fetchWikiImage(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url&format=json&gsrlimit=5`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.query && data.query.pages) {
      const pages = data.query.pages;
      for (const id in pages) {
        const page = pages[id];
        if (page.imageinfo && page.imageinfo[0]) {
          const imgUrl = page.imageinfo[0].url;
          const ext = imgUrl.split('.').pop().toLowerCase();
          if (['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg'].includes(ext)) {
            return imgUrl;
          }
        }
      }
    }
  } catch (e) {
    console.error("Error fetching for", query, e);
  }
  return null;
}

const FALLBACK_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Bhat_Tarkari_Machha.jpg/800px-Dal_Bhat_Tarkari_Machha.jpg";

async function main() {
  for (const fileConfig of FILES) {
    console.log(`Processing ${fileConfig.path}...`);
    let content = fs.readFileSync(fileConfig.path, 'utf8');

    if (fileConfig.type === 'structured') {
      const titles = [];
      let match;
      while ((match = fileConfig.titleRegex.exec(content)) !== null) {
        titles.push(match[1]);
      }

      for (const title of titles) {
        console.log(`  Fetching image for title: ${title}`);
        let imgUrl = await fetchWikiImage(title + " Food Nepal");
        if (!imgUrl) imgUrl = await fetchWikiImage(title + " Nepal");
        if (!imgUrl) imgUrl = await fetchWikiImage(title);
        if (!imgUrl) imgUrl = FALLBACK_IMAGE;

        const regex = fileConfig.blockRegex(title);
        content = content.replace(regex, `$1"${imgUrl}"`);
        await new Promise(r => setTimeout(r, 100));
      }
    } else if (fileConfig.type === 'standalone') {
      for (const rep of fileConfig.replacements) {
        console.log(`  Fetching standalone image for: ${rep.query}`);
        let imgUrl = await fetchWikiImage(rep.query);
        if (!imgUrl) imgUrl = FALLBACK_IMAGE;
        
        // Literal replacement of the old URL
        content = content.split(rep.oldUrl).join(imgUrl);
        await new Promise(r => setTimeout(r, 100));
      }
    }

    fs.writeFileSync(fileConfig.path, content, 'utf8');
  }
  console.log("Done updating all images.");
}

main();
