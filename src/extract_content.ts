import fs from 'fs';

// Helper to extract clean text from HTML tags for an element line
function cleanLine(line: string) {
  return line.replace(/<[^>]+>/g, '').trim();
}

function parsePage(filename: string, pageName: string) {
  console.log(`\n=================== ${pageName.toUpperCase()} PAGE SECTIONS ===================`);
  if (!fs.existsSync(filename)) {
    console.log(`${filename} does not exist.`);
    return;
  }
  const lines = fs.readFileSync(filename, 'utf-8').split('\n');
  let currentSection = '';
  let elementHistory: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Detect section tags or divs with ID/class suggesting a new section
    if (line.startsWith('<section') || line.startsWith('<footer') || line.startsWith('<header')) {
      const match = line.match(/(id|class)="([^"]+)"/g);
      console.log(`\n--- NEW SECTION: ${line.substring(0, 80)} ---`);
      currentSection = line;
    }

    // Capture headings
    if (line.match(/^<h[1-6]/)) {
      const txt = cleanLine(line);
      if (txt) console.log(`  Heading: ${txt}`);
    }

    // Capture button and link labels
    if (line.startsWith('<a') || line.startsWith('<button')) {
      const txt = cleanLine(line);
      const isNav = line.includes('nav') || line.includes('block px-3 py-2');
      if (txt && !isNav) {
        console.log(`    Btn/Link: "${txt}" ${line.match(/href="([^"]+)"/)?.[0] || ''}`);
      }
    }

    // Capture paragraphs (sample output to understand copywriting)
    if (line.startsWith('<p')) {
      const txt = cleanLine(line);
      if (txt) console.log(`    Paragraph: ${txt}`);
    }

    // Capture list items
    if (line.startsWith('<li')) {
      const txt = cleanLine(line);
      if (txt) console.log(`    List-Item: ${txt}`);
    }

    // Capture special stats or numbers in the page
    if (line.includes('font-display text-5xl') || line.includes('font-display text-6xl') || line.includes('font-display text-7xl') || line.includes('font-display text-4xl')) {
      const nextLine = lines[i+1] ? cleanLine(lines[i+1]) : '';
      const txt = cleanLine(line);
      const output = txt || nextLine;
      if (output) console.log(`    [STAT]: ${output}`);
    }
  }
}

parsePage('formatted_site.html', 'Home');
parsePage('formatted_platform.html', 'Platform');
parsePage('formatted_about.html', 'About');
