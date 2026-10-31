const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const WIDTHS = [320, 360, 375, 390, 414, 768, 1024, 1440];
const SCREENSHOT_WIDTHS = [320, 375, 414, 768];
const MODES = [
  { lang: 'en', theme: 'dark', label: 'en-dark' },
  { lang: 'en', theme: 'light', label: 'en-light' },
  { lang: 'ar', theme: 'dark', label: 'ar-dark' },
  { lang: 'ar', theme: 'light', label: 'ar-light' },
];

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'responsive-checks');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function run() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('========================================================');
  console.log('RESPONSIVENESS & SCROLLWIDTH VERIFICATION IN ALL MODES');
  console.log('========================================================\n');

  let allPassed = true;

  for (const mode of MODES) {
    console.log(`\n>>> Testing Combination: Language = ${mode.lang.toUpperCase()}, Theme = ${mode.theme.toUpperCase()}`);

    for (const width of WIDTHS) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('http://localhost:3050', { waitUntil: 'domcontentloaded' });

      // Apply language and theme
      await page.evaluate(({ lang, theme }) => {
        localStorage.setItem('preferred_lang', lang);
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, mode);

      // Reload to ensure full context initialization
      await page.reload({ waitUntil: 'networkidle' });

      const result = await page.evaluate((w) => {
        const scrollWidth = document.documentElement.scrollWidth;
        const innerWidth = window.innerWidth;
        const overflows = scrollWidth > innerWidth;

        let overflowing = [];
        if (overflows) {
          const all = document.querySelectorAll('*');
          for (const el of all) {
            const rect = el.getBoundingClientRect();
            if (rect.right > innerWidth + 1 || rect.left < -1) {
              overflowing.push({
                tag: el.tagName.toLowerCase(),
                className: (el.className && typeof el.className === 'string') ? el.className.slice(0, 80) : '',
                left: Math.round(rect.left),
                right: Math.round(rect.right),
                width: Math.round(rect.width),
                text: el.innerText ? el.innerText.trim().slice(0, 30).replace(/\n/g, ' ') : ''
              });
            }
          }
        }

        return {
          scrollWidth,
          innerWidth,
          overflows,
          overflowing: overflowing.slice(0, 10)
        };
      }, width);

      const status = result.overflows ? 'FAIL (OVERFLOW)' : 'PASS';
      if (result.overflows) allPassed = false;

      console.log(`  [${status}] Width ${width}px -> scrollWidth: ${result.scrollWidth}px (window: ${result.innerWidth}px)`);
      if (result.overflows) {
        console.log(`    Culprits:`, result.overflowing);
      }

      // If this width is in SCREENSHOT_WIDTHS, take a full page screenshot
      if (SCREENSHOT_WIDTHS.includes(width)) {
        const filename = `${mode.label}-${width}px.png`;
        const filepath = path.join(OUTPUT_DIR, filename);
        await page.screenshot({ path: filepath, fullPage: true });
        console.log(`    -> Screenshot saved: ${filename}`);
      }
    }
  }

  await browser.close();

  console.log('\n========================================================');
  console.log(`OVERALL RESULT: ${allPassed ? 'ALL VIEWPORTS AND MODES PASSED! ZERO OVERFLOW!' : 'SOME VIEWPORTS FAILED'}`);
  console.log('========================================================\n');
}

run().catch(console.error);
