const { chromium } = require('playwright');

async function testImages() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();

  const failedRequests = [];
  page.on('response', (res) => {
    if (res.status() >= 400) {
      failedRequests.push({ url: res.url(), status: res.status() });
    }
  });

  const pageErrors = [];
  page.on('pageerror', (err) => {
    pageErrors.push(err.message);
  });

  console.log('>>> Loading http://localhost:3050 to check all image assets at runtime...');
  await page.goto('http://localhost:3050', { waitUntil: 'networkidle' });

  // Scroll through entire page to trigger all lazy-loaded images
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 50);
    });
  });

  // Wait 1 second for any triggered images to finish loading
  await page.waitForTimeout(1000);

  // Check every image element
  const imageResults = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img'));
    return images.map((img) => ({
      src: img.currentSrc || img.src,
      alt: img.alt,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      complete: img.complete,
      broken: !img.complete || img.naturalWidth === 0
    }));
  });

  console.log(`\nChecked ${imageResults.length} images on the page.`);
  const brokenImages = imageResults.filter((img) => img.broken);

  if (brokenImages.length > 0) {
    console.error(`\nFAILED: Found ${brokenImages.length} broken images:`);
    brokenImages.forEach((img, i) => {
      console.error(`  ${i + 1}. src="${img.src}" | alt="${img.alt}"`);
    });
  } else {
    console.log(`SUCCESS: All ${imageResults.length} images loaded with valid natural dimensions!`);
  }

  if (failedRequests.length > 0) {
    console.error(`\nFAILED: Found ${failedRequests.length} HTTP error requests:`);
    failedRequests.forEach((r, i) => console.error(`  ${i + 1}. [${r.status}] ${r.url}`));
  } else {
    console.log('SUCCESS: Zero 4xx/5xx network requests!');
  }

  if (pageErrors.length > 0) {
    console.error(`\nPage runtime errors:`, pageErrors);
  } else {
    console.log('SUCCESS: Zero JavaScript runtime page errors!');
  }

  // Also print the list of loaded project images
  console.log('\n--- Active Images Loaded On Page ---');
  imageResults.forEach((i, idx) => {
    let cleanSrc = i.src;
    if (cleanSrc.includes('/_next/image?url=')) {
      cleanSrc = decodeURIComponent(cleanSrc.split('/_next/image?url=')[1].split('&')[0]);
    } else {
      cleanSrc = cleanSrc.replace('http://localhost:3050', '');
    }
    console.log(`  ${idx + 1}. [${i.naturalWidth}x${i.naturalHeight}] ${cleanSrc}`);
  });

  await browser.close();
}

testImages().catch(console.error);
