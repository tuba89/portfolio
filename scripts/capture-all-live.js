const { chromium } = require('playwright');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targets = [
  {
    name: 'weather-app',
    url: 'https://next-weather-app-assia.vercel.app/',
    desktop: 'weather-desktop.webp',
    mobile: 'weather-mobile.webp',
  },
  {
    name: 'livora',
    url: 'https://livora-five.vercel.app',
    desktop: 'livora-desktop.webp',
    mobile: 'livora-mobile.webp',
  },
  {
    name: 'researchforge',
    url: 'https://researchforge-112206130932.us-central1.run.app/',
    desktop: 'researchforge-desktop.webp',
    mobile: 'researchforge-mobile.webp',
  },
  {
    name: 'medibridge-kaggle',
    url: 'https://www.kaggle.com/code/assiaben/medibridge-ai-clinical-decision-support',
    desktop: 'medibridge-desktop.webp',
    mobile: 'medibridge-mobile.webp',
  },
];

async function captureAll() {
  console.log('Launching browser to capture authentic project screenshots...');
  const browser = await chromium.launch({ channel: 'chrome', headless: true });

  for (const item of targets) {
    console.log(`\nCapturing [${item.name}] from ${item.url} ...`);
    try {
      const context = await browser.newContext({
        viewport: { width: 1440, height: 900 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      });
      const page = await context.newPage();
      
      const response = await page.goto(item.url, { waitUntil: 'networkidle', timeout: 25000 }).catch(e => {
        console.log(`Fallback for ${item.name}: ${e.message}`);
        return null;
      });

      await page.waitForTimeout(2500);

      // Desktop
      const deskBuf = await page.screenshot();
      const deskPath = path.join(__dirname, '../public/images/projects', item.desktop);
      await sharp(deskBuf)
        .resize({ width: 1440, height: 900, fit: 'cover', position: 'top' })
        .webp({ quality: 82, effort: 4 })
        .toFile(deskPath);
      console.log(`✓ Saved ${item.desktop} (${fs.statSync(deskPath).size} bytes)`);

      // Mobile
      await page.setViewportSize({ width: 390, height: 844 });
      await page.waitForTimeout(1000);
      const mobBuf = await page.screenshot();
      const mobPath = path.join(__dirname, '../public/images/projects', item.mobile);
      await sharp(mobBuf)
        .resize({ width: 390, height: 844, fit: 'cover', position: 'top' })
        .webp({ quality: 82, effort: 4 })
        .toFile(mobPath);
      console.log(`✓ Saved ${item.mobile} (${fs.statSync(mobPath).size} bytes)`);

      await context.close();
    } catch (err) {
      console.error(`Error on ${item.name}:`, err.message);
    }
  }

  await browser.close();
  console.log('\nAll live captures finished!');
}

captureAll().catch(console.error);

