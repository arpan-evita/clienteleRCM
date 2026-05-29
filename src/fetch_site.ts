import fs from 'fs';

async function fetchSite() {
  try {
    const response = await fetch('https://clientele-ai-magic.lovable.app/');
    const html = await response.text();
    fs.writeFileSync('site_content.html', html);
    console.log('Successfully fetched homepage HTML and saved to site_content.html');
  } catch (error) {
    console.error('Error fetching site:', error);
  }
}

fetchSite();
