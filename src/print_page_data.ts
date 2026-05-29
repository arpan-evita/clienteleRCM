import fs from 'fs';

function cleanLine(line: string) {
  return line.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function parsePage(filename: string, pageName: string) {
  console.log(`\n\n================================================================================`);
  console.log(`=== PAGE: ${pageName.toUpperCase()} (${filename}) ===`);
  console.log(`================================================================================`);
  
  if (!fs.existsSync(filename)) {
    console.log(`${filename} does not exist.`);
    return;
  }
  
  const content = fs.readFileSync(filename, 'utf-8');
  // Simple regex-based approach or split-line approach to extract key sections, headings and content.
  const lines = content.split('\n');
  let currentSection = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Check for section
    if (line.includes('<section') || line.includes('id="') || line.includes('className="') || line.includes('class="')) {
      const idMatch = line.match(/id="([^"]+)"/);
      const classMatch = line.match(/(class|className)="([^"]+)"/);
      if (idMatch || classMatch) {
        const id_str = idMatch ? `id="${idMatch[1]}"` : '';
        const cl_str = classMatch ? `class="${classMatch[2].substring(0, 45)}..."` : '';
        // console.log(`\n[Section Container: ${id_str} ${cl_str}]`);
      }
    }
    
    // Capture h1, h2, h3
    if (line.match(/<h[1-4]/i) || line.includes('<h1') || line.includes('<h2') || line.includes('<h3') || line.includes('<h4')) {
      // Find where it ends
      let text = line;
      if (!line.includes('</h')) {
        // Collect next lines until h tag closes
        let j = i + 1;
        while (j < lines.length && !lines[j].includes('</h')) {
          text += ' ' + lines[j].trim();
          j++;
        }
        if (j < lines.length) {
          text += ' ' + lines[j].trim();
        }
      }
      const cleanText = cleanLine(text);
      if (cleanText) console.log(`  HEADING: ${cleanText}`);
    }
    
    // Capture paragraph
    if (line.includes('<p') || line.match(/<p/i)) {
      let text = line;
      if (!line.includes('</p>')) {
        let j = i + 1;
        while (j < lines.length && !lines[j].includes('</p>')) {
          text += ' ' + lines[j].trim();
          j++;
        }
        if (j < lines.length) {
          text += ' ' + lines[j].trim();
        }
      }
      const cleanText = cleanLine(text);
      if (cleanText && cleanText.length > 5) {
        console.log(`    P: ${cleanText}`);
      }
    }

    // Capture button
    if (line.includes('<button') || line.includes('<a ')) {
      let text = line;
      if (!line.includes('</button>') && !line.includes('</a>')) {
        let j = i + 1;
        while (j < lines.length && !lines[j].includes('</button>') && !lines[j].includes('</a>')) {
          text += ' ' + lines[j].trim();
          j++;
        }
        if (j < lines.length) {
          text += ' ' + lines[j].trim();
        }
      }
      const cleanText = cleanLine(text);
      if (cleanText && cleanText.length > 2 && !cleanText.includes('Platform') && !cleanText.includes('Services') && !cleanText.includes('Specialties') && !cleanText.includes('Why Clientele') && !cleanText.includes('Resources')) {
        console.log(`    BTN/LINK: "${cleanText}"`);
      }
    }
  }
}

const files = [
  'front-end_content.html',
  'mid-cycle_content.html',
  'back-end_content.html',
  'rpm_content.html',
  'rtm_content.html',
  'services_content.html'
];

for (const file of files) {
  parsePage(file, file.replace('_content.html', ''));
}
