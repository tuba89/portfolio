const { chromium } = require('playwright');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function capture() {
  console.log('Launching browser for real asset capture...');
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  
  // 1. Capture DizzitUp Live
  try {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    });
    const page = await context.newPage();
    console.log('Fetching https://dizzitup.com ...');
    await page.goto('https://dizzitup.com', { waitUntil: 'networkidle', timeout: 35000 });
    await page.waitForTimeout(3000);
    
    // Save desktop screenshot
    const desktopBuf = await page.screenshot();
    const desktopPath = path.join(__dirname, '../public/images/projects/dizzitup-desktop.webp');
    await sharp(desktopBuf)
      .resize({ width: 1440, height: 900, fit: 'cover', position: 'top' })
      .webp({ quality: 82, effort: 4 })
      .toFile(desktopPath);
    console.log('Saved:', desktopPath, 'Size:', fs.statSync(desktopPath).size, 'bytes');

    // Save mobile screenshot
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(1500);
    const mobBuf = await page.screenshot();
    const mobPath = path.join(__dirname, '../public/images/projects/dizzitup-mobile.webp');
    await sharp(mobBuf)
      .resize({ width: 390, height: 844, fit: 'cover', position: 'top' })
      .webp({ quality: 82, effort: 4 })
      .toFile(mobPath);
    console.log('Saved:', mobPath, 'Size:', fs.statSync(mobPath).size, 'bytes');

    // Extract logo if available
    const logoData = await page.evaluate(() => {
      const img = document.querySelector('img[src*="logo"], header img, nav img');
      if (img) return img.src;
      const svg = document.querySelector('header svg, nav svg');
      if (svg) return svg.outerHTML;
      return null;
    });
    console.log('DizzitUp logo detected:', logoData ? (logoData.startsWith('data:') ? 'Data URI' : logoData.slice(0, 80)) : 'None');

    await context.close();
  } catch (err) {
    console.error('Error capturing DizzitUp:', err.message);
  }

  await browser.close();
}

capture().catch(console.error);
