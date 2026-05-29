import fs from 'fs';

function extractLinks() {
  const html = fs.readFileSync('formatted_site.html', 'utf-8');
  const hrefRegex = /href="([^"]+)"/g;
  const links = new Set<string>();
  let match;
  while ((match = hrefRegex.exec(html)) !== null) {
    links.add(match[1]);
  }
  console.log('Detected links running on the site:');
  console.log(Array.from(links));
}

extractLinks();
