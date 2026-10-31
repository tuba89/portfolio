const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processAll() {
  const root = path.join(__dirname, '..');
  const assetsDir = path.join(root, 'public', 'assets');
  const projDir = path.join(root, 'public', 'images', 'projects');

  if (!fs.existsSync(projDir)) {
    fs.mkdirSync(projDir, { recursive: true });
  }

  const tasks = [
    // 1. OncoAssist
    {
      input: path.join(assetsDir, 'oncoAssist.png'),
      output: path.join(projDir, 'oncoassist.webp'),
      width: 1400,
    },
    // 2. MediBridge UI
    {
      input: path.join(assetsDir, 'medibridge', 'MedibridgeAI_UI_b.png'),
      output: path.join(projDir, 'medibridge-desktop.webp'),
      width: 1400,
    },
    // 3. MediBridge Carecard
    {
      input: path.join(assetsDir, 'medibridge', 'MedibridgeAI-Carecard-Results_b.png'),
      output: path.join(projDir, 'medibridge-carecard.webp'),
      width: 1100,
    },
    // 4. ResearchForge Hero Section
    {
      input: path.join(assetsDir, 'researchForge', 'hero_section.png'),
      output: path.join(projDir, 'researchforge-desktop.webp'),
      width: 1300,
    },
    // 5. ResearchForge Search & Export
    {
      input: path.join(assetsDir, 'researchForge', 'search_export.png'),
      output: path.join(projDir, 'researchforge-export.webp'),
      width: 852,
    },
    // 6. Livora Desktop View
    {
      input: path.join(assetsDir, 'livora', 'desktop_view.png'),
      output: path.join(projDir, 'livora-desktop.webp'),
      width: 1300,
    },
    // 7. Livora Shopping List
    {
      input: path.join(assetsDir, 'livora', 'shopping_list_Example.png'),
      output: path.join(projDir, 'livora-shopping.webp'),
      width: 1400,
    },
    // 8. 3D AB Logo as Profile Photo
    {
      input: path.join(assetsDir, 'assia-benkedia-logo-3d.jpg'),
      output: path.join(root, 'public', 'images', 'profile.webp'),
      width: 400,
      height: 400,
      fit: 'cover',
    },
  ];

  console.log('>>> Processing user assets from public/assets/...');

  for (const t of tasks) {
    if (!fs.existsSync(t.input)) {
      console.warn(`File missing: ${t.input}`);
      continue;
    }

    let pipeline = sharp(t.input);
    if (t.width && t.height) {
      pipeline = pipeline.resize(t.width, t.height, { fit: t.fit || 'inside' });
    } else if (t.width) {
      pipeline = pipeline.resize(t.width);
    }

    await pipeline.webp({ quality: 85 }).toFile(t.output);
    const stat = fs.statSync(t.output);
    console.log(`Saved ${path.basename(t.output)} (${Math.round(stat.size / 1024)} KB)`);
  }

  console.log('>>> All user assets successfully optimized to WebP under 200 KB!');
}

processAll().catch(console.error);
