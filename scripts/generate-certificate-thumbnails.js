const { chromium } = require('playwright');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const certDir = path.resolve(__dirname, '../public/certificates');
const outDir = path.resolve(__dirname, '../public/images/certificates');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const certs = [
  { file: 'Assia_Benkedia_Deep_Past_Challenge.png', out: 'deep-past-challenge.webp', isImage: true },
  { file: 'graduation_diploma.png', out: 'graduation-diploma.webp', isImage: true },
  { file: 'codecademy_javascript.png', out: 'codecademy-javascript.webp', isImage: true },
  { file: 'codecademy_css.png', out: 'codecademy-css.webp', isImage: true },
  { file: 'codecademy_html.png', out: 'codecademy-html.webp', isImage: true },
  { file: 'Deloitte_Data_Analytics_Certificate.pdf', out: 'deloitte-data-analytics.webp', isImage: false },
  { file: 'Assia_Benkedia_DizzitUp_Internship_Certificate.pdf', out: 'dizzitup-internship.webp', isImage: false },
  { file: 'Assia_Benkedia_Graduation_Document.pdf', out: 'uopeople-degree.webp', isImage: false },
  { file: 'CCNA_Connecting_Networks.pdf', out: 'ccna-connecting-networks.webp', isImage: false },
  { file: 'CCNA_Scaling_Networks.pdf', out: 'ccna-scaling-networks.webp', isImage: false },
  { file: 'CCNA_Routing_Switching.pdf', out: 'ccna-routing-switching.webp', isImage: false },
  { file: 'CCNA_Intro_Networks.pdf', out: 'ccna-intro-networks.webp', isImage: false },
];

async function generateThumbnails() {
  console.log('Generating certificate thumbnails...');

  // 1. Process image certificates directly with Sharp
  for (const c of certs.filter(x => x.isImage)) {
    const srcPath = path.join(certDir, c.file);
    const destPath = path.join(outDir, c.out);
    if (fs.existsSync(srcPath)) {
      await sharp(srcPath)
        .resize({ width: 800, height: 600, fit: 'inside' })
        .webp({ quality: 82, effort: 4 })
        .toFile(destPath);
      console.log(`✓ Image cert: ${c.out} (${fs.statSync(destPath).size} bytes)`);
    } else {
      console.log(`Missing image: ${c.file}`);
    }
  }

  // 2. Process PDF certificates with Playwright / Chrome
  const pdfList = certs.filter(x => !x.isImage);
  if (pdfList.length > 0) {
    const browser = await chromium.launch({ channel: 'chrome', headless: true });
    const page = await browser.newPage({ viewport: { width: 1200, height: 850 } });

    for (const c of pdfList) {
      const srcPath = path.join(certDir, c.file);
      const destPath = path.join(outDir, c.out);
      if (fs.existsSync(srcPath)) {
        const fileUrl = 'file:///' + srcPath.split(path.sep).join('/');
        try {
          await page.goto(fileUrl, { waitUntil: 'load', timeout: 15000 });
          await page.waitForTimeout(2000);
          const buf = await page.screenshot();
          await sharp(buf)
            .resize({ width: 800, height: 600, fit: 'inside' })
            .webp({ quality: 82, effort: 4 })
            .toFile(destPath);
          console.log(`✓ PDF cert: ${c.out} (${fs.statSync(destPath).size} bytes)`);
        } catch (e) {
          console.error(`Error rendering PDF ${c.file}:`, e.message);
        }
      } else {
        console.log(`Missing PDF: ${c.file}`);
      }
    }
    await browser.close();
  }

  console.log('All certificate thumbnails generated successfully!');
}

generateThumbnails().catch(console.error);
