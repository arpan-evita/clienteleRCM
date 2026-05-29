import fs from 'fs';

function cleanText(text: string) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function convertHtmlToMarkdown(htmlFile: string, mdFile: string) {
  if (!fs.existsSync(htmlFile)) {
    console.log(`${htmlFile} doesn't exist`);
    return;
  }
  const html = fs.readFileSync(htmlFile, 'utf-8');
  const lines = html.split('\n');
  const mdLines: string[] = [];

  mdLines.push(`# Derived Content for: ${htmlFile}`);
  mdLines.push('');

  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      i++;
      continue;
    }

    // Capture H1
    if (line.includes('<h1')) {
      let content = line;
      while (i + 1 < lines.length && !lines[i].includes('</h1>')) {
        i++;
        content += ' ' + lines[i].trim();
      }
      mdLines.push(`\n# ${cleanText(content)}\n`);
    }
    // Capture H2
    else if (line.includes('<h2')) {
      let content = line;
      while (i + 1 < lines.length && !lines[i].includes('</h2>')) {
        i++;
        content += ' ' + lines[i].trim();
      }
      mdLines.push(`\n## ${cleanText(content)}\n`);
    }
    // Capture H3
    else if (line.includes('<h3')) {
      let content = line;
      while (i + 1 < lines.length && !lines[i].includes('</h3>')) {
        i++;
        content += ' ' + lines[i].trim();
      }
      mdLines.push(`\n### ${cleanText(content)}\n`);
    }
    // Capture H4
    else if (line.includes('<h4')) {
      let content = line;
      while (i + 1 < lines.length && !lines[i].includes('</h4>')) {
        i++;
        content += ' ' + lines[i].trim();
      }
      mdLines.push(`\n#### ${cleanText(content)}\n`);
    }
    // Capture P
    else if (line.includes('<p')) {
      let content = line;
      while (i + 1 < lines.length && !lines[i].includes('</p>')) {
        i++;
        content += ' ' + lines[i].trim();
      }
      const cleaned = cleanText(content);
      if (cleaned.length > 3) {
        mdLines.push(cleaned);
      }
    }
    // Capture LI
    else if (line.includes('<li')) {
      let content = line;
      while (i + 1 < lines.length && !lines[i].includes('</li>')) {
        i++;
        content += ' ' + lines[i].trim();
      }
      const cleaned = cleanText(content);
      if (cleaned.length > 3) {
        mdLines.push(`- ${cleaned}`);
      }
    }

    i++;
  }

  fs.writeFileSync(mdFile, mdLines.join('\n'));
  console.log(`Saved parsed markdown to ${mdFile}`);
}

const files = [
  'front-end',
  'mid-cycle',
  'back-end',
  'rpm',
  'rtm',
  'services'
];

for (const name of files) {
  convertHtmlToMarkdown(`${name}_content.html`, `${name}_parsed.md`);
}
