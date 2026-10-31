const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function check() {
  const dir = path.join(__dirname, '..', 'public', 'assets');
  const files = [];

  function getFiles(p) {
    for (const item of fs.readdirSync(p)) {
      const full = path.join(p, item);
      if (fs.statSync(full).isDirectory()) {
        getFiles(full);
      } else {
        files.push(full);
      }
    }
  }
  getFiles(dir);

  for (const f of files) {
    try {
      const meta = await sharp(f).metadata();
      const rel = path.relative(path.join(__dirname, '..'), f);
      console.log(`${rel} -> ${meta.width}x${meta.height} [${meta.format}] (${Math.round(fs.statSync(f).size / 1024)} KB)`);
    } catch (e) {
      console.error(f, e.message);
    }
  }
}

check().catch(console.error);
