const fs = require('fs');
const path = require('path');

const tsPath = path.resolve(__dirname, '../src/data/translations.ts');
let content = fs.readFileSync(tsPath, 'utf8');

// 1. Update interfaces
content = content.replace(
  `export interface LocalizedProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  role: string;
  impact: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  featured: boolean;
  metrics?: ProjectMetric[];
  coverImage?: string;
  imageAlt?: string;
}`,
  `export interface LocalizedProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  role: string;
  impact: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  featured: boolean;
  metrics?: ProjectMetric[];
  coverImage?: string;
  imageAlt?: string;
  diagramSvg?: string;
  isMobileMockup?: boolean;
}`
);

content = content.replace(
  `export interface LocalizedExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}`,
  `export interface LocalizedExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
  logo?: "dizzitup" | "virtual-internships" | "notarial";
}`
);

content = content.replace(
  `export interface LocalizedEducation {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade: string;
  description: string;
  highlights: string[];
  credentialUrl?: string;
}`,
  `export interface LocalizedEducation {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade: string;
  description: string;
  highlights: string[];
  credentialUrl?: string;
  thumbnail?: string;
  logo?: "uopeople" | "oran";
}`
);

content = content.replace(
  `export interface LocalizedCertification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  assetPath?: string;
  category: "AI & ML" | "Software & Cloud" | "Networking & IT";
  categoryLabel: string;
}`,
  `export interface LocalizedCertification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  assetPath?: string;
  category: "AI & ML" | "Software & Cloud" | "Networking & IT";
  categoryLabel: string;
  thumbnail?: string;
  issuerLogo?: "kaggle" | "google" | "cisco" | "deloitte" | "codecademy" | "dizzitup";
}`
);

fs.writeFileSync(tsPath, content, 'utf8');
console.log('Successfully updated translation interfaces in translations.ts');
