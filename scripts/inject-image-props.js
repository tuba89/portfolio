const fs = require('fs');
const path = require('path');

const tsPath = path.resolve(__dirname, '../src/data/translations.ts');
let code = fs.readFileSync(tsPath, 'utf8');

// Project image mapping
const projectProps = {
  dizzitup: {
    coverImage: '/images/projects/dizzitup-desktop.webp',
    imageAlt: {
      en: 'DizzitUp live production pan-African marketplace platform interface',
      fr: 'Interface de production de la plateforme e-commerce DizzitUp',
      ar: 'واجهة منصة وسوق التجارة الإلكترونية لمنصة DizzitUp قيد الإنتاج',
    },
  },
  'cross-platform-mobile-marketplace': {
    isMobileMockup: true,
    coverImage: '/images/mobile-screens/mobile-home-wallet.webp',
    imageAlt: {
      en: 'Cross-platform React Native Expo mobile marketplace screens in native phone frame',
      fr: 'Écrans de l application mobile React Native Expo dans un cadre mobile',
      ar: 'شاشات تطبيق سوق التجارة الإلكترونية React Native Expo ضمن إطار هاتف ذكي',
    },
  },
  livora: {
    diagramSvg: '/images/diagrams/livora-architecture.svg',
    coverImage: '/images/projects/livora-desktop.webp',
    imageAlt: {
      en: 'LIVORA autonomous multi-agent AI orchestration architecture diagram',
      fr: 'Diagramme d architecture multi-agents autonomes LIVORA',
      ar: 'مخطط معمارية وكلاء الذكاء الاصطناعي المستقلين في نظام LIVORA',
    },
  },
  'deep-past-challenge': {
    diagramSvg: '/images/diagrams/akkadian-t5-pipeline.svg',
    coverImage: '/images/certificates/deep-past-challenge.webp',
    imageAlt: {
      en: 'Deep Past Challenge fine-tuned T5 cuneiform translation pipeline diagram',
      fr: 'Diagramme du pipeline de traduction cunéiforme T5 du défi Deep Past',
      ar: 'مخطط مسار تدريب نماذج T5 لترجمة النصوص المسمارية الأكادية في مسابقة Kaggle',
    },
  },
  'evm-smart-contracts': {
    diagramSvg: '/images/diagrams/smart-contracts-architecture.svg',
    coverImage: '/images/diagrams/smart-contracts-architecture.svg',
    imageAlt: {
      en: 'EVM smart contracts multi-chain escrow and decentralized settlement architecture',
      fr: 'Diagramme d architecture des smart contracts EVM et du séquestre multi-chaînes',
      ar: 'مخطط معمارية عقود EVM الذكية وحسابات الضمان والتسوية اللامركزية',
    },
  },
  'researchforge-ai': {
    coverImage: '/images/projects/researchforge-desktop.webp',
    imageAlt: {
      en: 'ResearchForge-AI academic research and proposal drafting interface',
      fr: 'Interface de la plateforme de recherche académique ResearchForge-AI',
      ar: 'واجهة منصة ResearchForge-AI لتسريع الأبحاث وتوليد مقترحات المشاريع',
    },
  },
  'oncoassist-medibridge': {
    coverImage: '/images/projects/medibridge-desktop.webp',
    imageAlt: {
      en: 'OncoAssist & MediBridge-AI clinical decision support system on Kaggle',
      fr: 'Carnet de support décisionnel clinique OncoAssist sur Kaggle',
      ar: 'واجهة نظام دعم القرار السريري OncoAssist و MediBridge-AI على منصة Kaggle',
    },
  },
};

const otherProjectProps = {
  'next-weather-app': {
    coverImage: '/images/projects/weather-desktop.webp',
    imageAlt: {
      en: 'Next.js modern animated weather application interface',
      fr: 'Interface de l application météo animée Next.js',
      ar: 'واجهة تطبيق الطقس التفاعلي الحديث بـ Next.js',
    },
  },
  'guardian-ai': {
    imageAlt: {
      en: 'GuardianAI computer vision security alerting architecture',
      fr: 'Architecture de surveillance et d alerte sécurité GuardianAI',
      ar: 'معمارية نظام الحماية ورصد الحوادث الذكي GuardianAI',
    },
  },
  bloodlink: {
    imageAlt: {
      en: 'BloodLink emergency blood donor platform architecture',
      fr: 'Plateforme de coordination des donneurs de sang BloodLink',
      ar: 'منصة شبكة التبرع بالدم في حالات الطوارئ BloodLink',
    },
  },
};

// Experience logos
const expLogos = ['dizzitup', 'virtual-internships', 'notarial'];

// Education thumbnails & logos
const eduProps = [
  { thumbnail: '/images/certificates/uopeople-degree.webp', logo: 'uopeople' },
  { thumbnail: '/images/certificates/graduation-diploma.webp', logo: 'oran' },
];

// Certification props
const certProps = [
  { thumbnail: '/images/certificates/deep-past-challenge.webp', issuerLogo: 'kaggle' },
  { thumbnail: '/images/projects/medibridge-desktop.webp', issuerLogo: 'google' },
  { thumbnail: '/images/certificates/dizzitup-internship.webp', issuerLogo: 'dizzitup' },
  { thumbnail: '/images/certificates/deloitte-data-analytics.webp', issuerLogo: 'deloitte' },
  { thumbnail: '/images/certificates/ccna-connecting-networks.webp', issuerLogo: 'cisco' },
  { thumbnail: '/images/certificates/ccna-scaling-networks.webp', issuerLogo: 'cisco' },
  { thumbnail: '/images/certificates/ccna-routing-switching.webp', issuerLogo: 'cisco' },
  { thumbnail: '/images/certificates/ccna-intro-networks.webp', issuerLogo: 'cisco' },
  { thumbnail: '/images/certificates/codecademy-javascript.webp', issuerLogo: 'codecademy' },
  { thumbnail: '/images/certificates/codecademy-css.webp', issuerLogo: 'codecademy' },
  { thumbnail: '/images/certificates/codecademy-html.webp', issuerLogo: 'codecademy' },
];

['en', 'fr', 'ar'].forEach(lang => {
  // Inject into featured projects
  for (const [id, props] of Object.entries(projectProps)) {
    const idRegex = new RegExp(`(id:\\s*"${id}",[\\s\\S]*?featured:\\s*true,)`);
    code = code.replace(idRegex, (match) => {
      let extra = `\n        coverImage: "${props.coverImage}",\n        imageAlt: "${props.imageAlt[lang]}",`;
      if (props.diagramSvg) extra += `\n        diagramSvg: "${props.diagramSvg}",`;
      if (props.isMobileMockup) extra += `\n        isMobileMockup: true,`;
      return match + extra;
    });
  }

  // Inject into other projects
  for (const [id, props] of Object.entries(otherProjectProps)) {
    const idRegex = new RegExp(`(id:\\s*"${id}",[\\s\\S]*?featured:\\s*false,)`);
    code = code.replace(idRegex, (match) => {
      let extra = `\n          imageAlt: "${props.imageAlt[lang]}",`;
      if (props.coverImage) extra += `\n          coverImage: "${props.coverImage}",`;
      return match + extra;
    });
  }
});

// Inject experience logos
const expCompanyMatches = [
  { match: 'company: "DizzitUp",', logo: 'dizzitup' },
  { match: 'company: "DizzitUp (via Virtual Internships)",', logo: 'virtual-internships' },
  { match: 'company: "DizzitUp (عبر Virtual Internships)",', logo: 'virtual-internships' },
  { match: 'company: "Office Public Notarial",', logo: 'notarial' },
  { match: 'company: "مكتب التوثيق العمومي (Office Public Notarial)",', logo: 'notarial' },
];

expCompanyMatches.forEach(item => {
  code = code.split(item.match).join(`${item.match}\n          logo: "${item.logo}",`);
});

// Inject education props
const eduMatches = [
  { match: 'institution: "University of the People",', prop: eduProps[0] },
  { match: 'institution: "جامعة الناس (University of the People)",', prop: eduProps[0] },
  { match: 'institution: "University of Oran",', prop: eduProps[1] },
  { match: 'institution: "Université d\'Oran",', prop: eduProps[1] },
  { match: 'institution: "جامعة وهران",', prop: eduProps[1] },
];

eduMatches.forEach(item => {
  code = code.split(item.match).join(`${item.match}\n          thumbnail: "${item.prop.thumbnail}",\n          logo: "${item.prop.logo}",`);
});

// Inject certification props
const certMatches = [
  { nameContains: 'Deep Past', prop: certProps[0] },
  { nameContains: 'OncoAssist', prop: certProps[1] },
  { nameContains: 'Virtual Internships', prop: certProps[2] },
  { nameContains: 'Deloitte', prop: certProps[3] },
  { nameContains: 'Connecting Networks', prop: certProps[4] },
  { nameContains: 'ربط الشبكات', prop: certProps[4] },
  { nameContains: 'Scaling Networks', prop: certProps[5] },
  { nameContains: 'توسيع الشبكات', prop: certProps[5] },
  { nameContains: 'Routing & Switching', prop: certProps[6] },
  { nameContains: 'Routing and Switching', prop: certProps[6] },
  { nameContains: 'التوجيه والتبديل', prop: certProps[6] },
  { nameContains: 'Introduction to Networks', prop: certProps[7] },
  { nameContains: 'مدخل إلى الشبكات', prop: certProps[7] },
  { nameContains: 'JavaScript', prop: certProps[8] },
  { nameContains: 'CSS', prop: certProps[9] },
  { nameContains: 'HTML', prop: certProps[10] },
];

certMatches.forEach(item => {
  const regex = new RegExp(`(name:\\s*"[^"]*?${item.nameContains}[^"]*?",[\\s\\S]*?categoryLabel:\\s*"[^"]*?",)`, 'g');
  code = code.replace(regex, (m) => {
    if (m.includes('thumbnail:')) return m;
    return `${m}\n          thumbnail: "${item.prop.thumbnail}",\n          issuerLogo: "${item.prop.issuerLogo}",`;
  });
});

fs.writeFileSync(tsPath, code, 'utf8');
console.log('Successfully injected image properties into translations.ts');

