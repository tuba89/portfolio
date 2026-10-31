const { chromium } = require('playwright');

const WIDTHS = [320, 360, 375, 390, 414, 768, 1024, 1440];

async function run() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();

  console.log('--- DIAGNOSING OVERFLOW AT MULTIPLE VIEWPORT WIDTHS ---');

  for (const width of WIDTHS) {
    await page.setViewportSize({ width, height: 800 });
    await page.goto('http://localhost:3050', { waitUntil: 'networkidle' });

    const diagnosis = await page.evaluate((w) => {
      const scrollWidth = document.documentElement.scrollWidth;
      const innerWidth = window.innerWidth;
      const overflows = scrollWidth > innerWidth;

      const overflowingElements = [];
      if (overflows) {
        const allElements = document.querySelectorAll('*');
        for (const el of allElements) {
          const rect = el.getBoundingClientRect();
          // Check if element right exceeds innerWidth or left < 0
          if (rect.right > innerWidth + 1 || rect.left < -1) {
            overflowingElements.push({
              tag: el.tagName.toLowerCase(),
              id: el.id || undefined,
              className: (el.className && typeof el.className === 'string') ? el.className.slice(0, 100) : '',
              rect: {
                left: Math.round(rect.left),
                right: Math.round(rect.right),
                width: Math.round(rect.width)
              },
              textSnippet: el.innerText ? el.innerText.trim().slice(0, 40).replace(/\n/g, ' ') : ''
            });
          }
        }
      }

      return {
        width: w,
        scrollWidth,
        innerWidth,
        overflows,
        overflowCount: overflowingElements.length,
        elements: overflowingElements.slice(0, 20) // First 20 culprits
      };
    }, width);

    console.log(`\nWidth: ${width}px | scrollWidth: ${diagnosis.scrollWidth}px | overflows: ${diagnosis.overflows}`);
    if (diagnosis.overflows) {
      console.log(`Found ${diagnosis.overflowCount} overflowing elements. Top culprits:`);
      diagnosis.elements.forEach((el, i) => {
        console.log(`  ${i + 1}. <${el.tag}${el.id ? '#' + el.id : ''} class="${el.className}">`);
        console.log(`     rect: left=${el.rect.left}, right=${el.rect.right}, width=${el.rect.width} | text: "${el.textSnippet}"`);
      });
    }
  }

  await browser.close();
}

run().catch(console.error);

