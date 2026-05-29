import fs from 'fs';

function formatHtml() {
  try {
    const rawHtml = fs.readFileSync('site_content.html', 'utf-8');
    // Basic formatting: insert a newline between consecutive tags
    const formattedHtml = rawHtml.replace(/></g, '>\n<');
    fs.writeFileSync('formatted_site.html', formattedHtml);
    console.log('Successfully formatted HTML and saved to formatted_site.html');
  } catch (error) {
    console.error('Error formatting HTML:', error);
  }
}

formatHtml();
