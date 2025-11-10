const puppeteer = require('puppeteer');
const { readFile, writeFile, mkdir } = require('fs').promises;
const { existsSync } = require('fs');

(async () => {
  // Ensure output directory exists
  if (!existsSync('output')) {
    await mkdir('output', { recursive: true });
  }

  const htmlContent = await readFile('resume-custom.html', 'utf-8');

  // Write HTML to output folder
  await writeFile('output/index.html', htmlContent);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: 'output/resume-formatted.pdf',
    format: 'Letter',
    margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' },
    printBackground: true,
  });

  await browser.close();
  console.log('✓ PDF updated with new color scheme (Option A: Deep Professional)');
})();

