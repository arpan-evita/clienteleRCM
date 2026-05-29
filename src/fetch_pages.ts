import fs from 'fs';

async function fetchAllPages() {
  const pages = [
    { url: 'https://clientele-ai-magic.lovable.app/platform', file: 'platform_content.html', formatted: 'formatted_platform.html' },
    { url: 'https://clientele-ai-magic.lovable.app/about', file: 'about_content.html', formatted: 'formatted_about.html' },
  ];

  for (const page of pages) {
    try {
      const response = await fetch(page.url);
      if (response.status === 404) {
        console.log(`Page ${page.url} returned 404`);
        continue;
      }
      const html = await response.text();
      fs.writeFileSync(page.file, html);
      
      const formattedHtml = html.replace(/></g, '>\n<');
      fs.writeFileSync(page.formatted, formattedHtml);
      console.log(`Successfully fetched and formatted ${page.url}`);
    } catch (error) {
      console.error(`Error fetching ${page.url}:`, error);
    }
  }
}

fetchAllPages();
