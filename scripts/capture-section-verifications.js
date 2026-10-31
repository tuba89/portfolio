const { chromium } = require('playwright');
const path = require('path');

async function captureSections() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('http://localhost:3050', { waitUntil: 'networkidle' });

  // Scroll through to trigger all lazy loading
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1000);

  // 1. Featured projects section
  const featSec = await page.$('#featured-projects');
  if (featSec) {
    await featSec.screenshot({
      path: path.join(__dirname, '..', 'public', 'images', 'responsive-checks', 'featured-projects-user-assets.png')
    });
    console.log('Saved featured-projects-user-assets.png');
  }

  // 2. Honors section (Kaggle & OncoAssist)
  const honorsSec = await page.$('#achievements');
  if (honorsSec) {
    await honorsSec.screenshot({
      path: path.join(__dirname, '..', 'public', 'images', 'responsive-checks', 'honors-oncoassist-verified.png')
    });
    console.log('Saved honors-oncoassist-verified.png');
  }

  await browser.close();
}

captureSections().catch(console.error);
