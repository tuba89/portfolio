const { chromium } = require('playwright');
const path = require('path');

async function run() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();

  const configs = [
    { lang: 'en', theme: 'dark', width: 375, height: 667, name: 'iphone-se-en-dark.png' },
    { lang: 'en', theme: 'light', width: 375, height: 667, name: 'iphone-se-en-light.png' },
    { lang: 'ar', theme: 'dark', width: 375, height: 667, name: 'iphone-se-ar-dark.png' },
    { lang: 'ar', theme: 'light', width: 375, height: 667, name: 'iphone-se-ar-light.png' },
    { lang: 'en', theme: 'dark', width: 320, height: 667, name: 'small-phone-320px-en-dark.png' },
  ];

  for (const cfg of configs) {
    await page.setViewportSize({ width: cfg.width, height: cfg.height });
    await page.goto('http://localhost:3050', { waitUntil: 'domcontentloaded' });
    await page.evaluate(({ lang, theme }) => {
      localStorage.setItem('preferred_lang', lang);
      localStorage.setItem('theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, cfg);
    await page.reload({ waitUntil: 'networkidle' });

    const outputPath = path.join(__dirname, '..', 'public', 'images', 'responsive-checks', cfg.name);
    await page.screenshot({ path: outputPath, fullPage: false });
    console.log(`Saved viewport screenshot: ${cfg.name}`);
  }

  await browser.close();
}

run().catch(console.error);
