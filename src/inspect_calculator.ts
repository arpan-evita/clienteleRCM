import fs from 'fs';

function findCalculatorHtml() {
  const html = fs.readFileSync('formatted_site.html', 'utf-8');
  const lines = html.split('\n');
  let calcStartIdx = -1;
  let calcEndIdx = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('See what denials are really costing you')) {
      calcStartIdx = Math.max(0, i - 10);
      break;
    }
  }

  if (calcStartIdx !== -1) {
    // Find the next section or a reasonable block size (say, 300 lines)
    calcEndIdx = Math.min(lines.length, calcStartIdx + 300);
    console.log(`Found Denial Calculator section starting at line ${calcStartIdx} to ${calcEndIdx}`);
    const sectionHtml = lines.slice(calcStartIdx, calcEndIdx).join('\n');
    fs.writeFileSync('calculator_section.html', sectionHtml);
    console.log('Saved calculator section to calculator_section.html');
  } else {
    console.log('Denial Calculator text not found in HTML.');
  }
}

findCalculatorHtml();
