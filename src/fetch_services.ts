import fs from 'fs';

async function fetchServices() {
  const pages = [
    { name: 'front-end', url: 'https://clientele-ai-magic.lovable.app/services/front-end' },
    { name: 'mid-cycle', url: 'https://clientele-ai-magic.lovable.app/services/mid-cycle' },
    { name: 'back-end', url: 'https://clientele-ai-magic.lovable.app/services/back-end' },
    { name: 'rpm', url: 'https://clientele-ai-magic.lovable.app/services/rpm' },
    { name: 'rtm', url: 'https://clientele-ai-magic.lovable.app/services/rtm' },
    { name: 'services', url: 'https://clientele-ai-magic.lovable.app/services' }
  ];

  for (const page of pages) {
    try {
      console.log(`Fetching ${page.url}...`);
      const response = await fetch(page.url);
      if (response.status === 404) {
        console.log(`Page ${page.url} returned 404`);
        continue;
      }
      const html = await response.text();
      fs.writeFileSync(`${page.name}_content.html`, html);
      console.log(`Successfully fetched and wrote ${page.name}_content.html`);
    } catch (error) {
      console.error(`Error fetching ${page.url}:`, error);
    }
  }
}

fetchServices();
