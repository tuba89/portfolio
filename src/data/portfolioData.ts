export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Production" | "Mobile & Full-Stack" | "AI & Agents" | "Kaggle & ML" | "Web3 & Cloud";
  description: string;
  longDescription: string;
  role: string;
  impact: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade: string;
  description: string;
  highlights: string[];
  credentialUrl?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  assetPath?: string;
  category: "AI & ML" | "Software & Cloud" | "Networking & IT";
}

export const PERSONAL_INFO = {
  name: "Assia Benkedia",
  title: "AI & Full-Stack Developer",
  specialization: "Mobile & Web Engineering · Autonomous AI Agents · Fintech & EVM",
  location: "Oran, Algeria (Open to Global Remote & Relocation)",
  email: "iiiassia.beniii@gmail.com",
  phone: "+213 783 60 05 83",
  github: "https://github.com/tuba89",
  githubUsername: "tuba89",
  linkedin: "https://linkedin.com/in/assia-benkedia-20708195",
  summary:
    "High-achieving Computer Science graduate (High Honors, 3.97 GPA) and Full-Stack & Mobile Developer specializing in autonomous AI agents, production fintech, EVM smart contracts, and scalable cloud deployments. Currently engineering production features at DizzitUp serving 54 African countries. Proven track record including a Kaggle Silver Medal (33rd / 2,674 teams) and a Google Gen AI Intensive Honourable Mention. Combines deep full-stack mastery (React Native Expo, Next.js, Node.js, Prisma, Coolify, VPS server administration) with 12+ years of rigorous legal and operational discipline.",
  stats: [
    { label: "Kaggle Global Rank", value: "33rd / 2,674", note: "Silver Medal (Top 1.2%)" },
    { label: "University Honors", value: "GPA 3.97 / 4.00", note: "High Honors Graduate" },
    { label: "Fintech Reach", value: "54 Countries", note: "DizzitUp Marketplace" },
    { label: "Gen AI Capstone", value: "Honourable Mention", note: "Top 100 of 280,000+" },
  ],
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "dizzitup",
    title: "DizzitUp",
    subtitle: "Pan-African Fintech & Marketplace Platform",
    category: "Production",
    description:
      "A comprehensive multi-country marketplace and fintech ecosystem serving 54 African countries with utility vouchers, digital gift cards, crypto settlement, and mobile money.",
    longDescription:
      "Contributing actively to DizzitUp core engineering, building responsive multilingual frontends, scalable Node.js/Express APIs, Supabase PostgreSQL data schemas with Row-Level Security, universal search indexing, and crypto-fiat on/off-ramp mechanisms.",
    role: "Full-Stack Developer (Core Contributor)",
    impact: [
      "Engineered cross-service Universal Search system indexing thousands of products, gift cards, and utility services across multiple African corridors.",
      "Built internal Admin Back-Office dashboards for fee structure configurations, live transaction ledgers, and operational oversight.",
      "Supported mobile money, telecom integrations, and DZYwallet crypto/stablecoin transaction flows.",
      "Implemented comprehensive multilingual RTL support (French, English, Arabic, Portuguese, Amharic).",
    ],
    tags: ["Next.js", "React", "Node.js", "Express", "Supabase", "PostgreSQL", "Prisma", "Web3", "TailwindCSS"],
    liveUrl: "https://dizzitup.com",
    badge: "Production Platform · 54 Countries",
    featured: true,
    metrics: [
      { label: "Corridors", value: "54 African Nations" },
      { label: "Architecture", value: "Next.js + Supabase + Prisma" },
      { label: "Payments", value: "Mobile Money & Crypto" },
    ],
  },
  {
    id: "cross-platform-mobile-marketplace",
    title: "Cross-Platform Mobile & Web Marketplace Suite",
    subtitle: "React Native (Expo), Payment Gateways & Self-Hosted Infrastructure",
    category: "Mobile & Full-Stack",
    description:
      "End-to-end mobile and web marketplace architecture featuring native iOS and Android apps, automated payment links, digital invoicing, card and mobile money checkouts, and custom VPS deployment.",
    longDescription:
      "Architected the complete lifecycle from UI/UX design to mobile build delivery and production cloud infrastructure. Developed native mobile interfaces using React Native and Expo with Android Emulator testing. Implemented multi-provider payment checkout including payment links, dynamic PDF invoices, card processing, and mobile money. Configured enterprise authentication with social logins (Apple, Google, Facebook/Meta) and custom Supabase SMTP transactional mailers. Deployed with Prisma ORM in production on self-hosted Coolify PaaS and managed Linux VPS servers.",
    role: "Full-Stack & Mobile Lead Architect",
    impact: [
      "Built cross-platform iOS and Android mobile applications using React Native and Expo with native performance and responsive layouts.",
      "Created end-to-end payment pipelines: payment links, automated invoice generation, card processing, and regional mobile money.",
      "Configured multi-provider social authentication (Sign in with Apple, Google OAuth, Meta/Facebook) and custom Supabase SMTP email delivery.",
      "Integrated transactional communications: SMS delivery and custom email notification pipelines.",
      "Configured enterprise analytics and tracking: Google Tag Manager, Google Analytics, Google Ads conversion tracking, Meta Pixel, and WhatsApp Business API.",
      "Managed production infrastructure: Linux server administration via SSH, Hostinger VPS orchestration, and Prisma ORM in production on Coolify.",
    ],
    tags: ["React Native", "Expo", "iOS & Android", "TypeScript", "Prisma", "Coolify", "Linux VPS", "Payment Links", "Social Auth"],
    badge: "Mobile iOS & Android + Cloud Infrastructure",
    featured: true,
    metrics: [
      { label: "Platforms", value: "iOS, Android (Expo) & Web" },
      { label: "Payments", value: "Cards, Pay Links, Invoices, Mobile Money" },
      { label: "DevOps", value: "Coolify PaaS, Hostinger VPS, Linux SSH" },
    ],
  },
  {
    id: "livora",
    title: "LIVORA",
    subtitle: "Autonomous Multi-Agent AI System ('JARVIS for Working Mothers')",
    category: "AI & Agents",
    description:
      "A proactive multi-agent assistant that orchestrates family schedules, household operations, and work-life balance using FastMCP, dynamic memory, and voice.",
    longDescription:
      "LIVORA combines specialized autonomous agents (calendar concierge, task delegator, household inventory, and voice assistant) to alleviate the cognitive load of working parents. Built with Model Context Protocol (MCP) tools and persistent conversational memory.",
    role: "Sole Creator & AI Architect",
    impact: [
      "Designed multi-agent collaboration architecture where specialized sub-agents coordinate complex schedules and task execution.",
      "Integrated FastMCP server enabling seamless local and external tool invocation.",
      "Implemented contextual long-term memory for recurring family routines and preferences.",
      "Built responsive, accessible interface with voice synthesis and audio interaction.",
    ],
    tags: ["React", "AI Agents", "FastMCP", "Multi-Agent Systems", "Voice AI", "LLM Memory", "TypeScript"],
    githubUrl: "https://github.com/tuba89/livora",
    badge: "Open Source AI Agent System",
    featured: true,
    metrics: [
      { label: "Pattern", value: "Multi-Agent Orchestration" },
      { label: "Protocol", value: "Model Context Protocol (FastMCP)" },
      { label: "Capability", value: "Voice + Memory + Scheduling" },
    ],
  },
  {
    id: "deep-past-challenge",
    title: "Deep Past Challenge: Akkadian Translation",
    subtitle: "Kaggle Silver Medal · 33rd Place out of 2,674 Teams",
    category: "Kaggle & ML",
    description:
      "Trained and fine-tuned Transformer models to translate fragmented ancient Akkadian cuneiform inscriptions directly into modern English.",
    longDescription:
      "Awarded a Kaggle Silver Medal (Certificate issued March 24, 2026). Collaborated in an elite team to tackle severe low-resource data scarcity, token misalignment, and cuneiform morphological ambiguity by carefully fine-tuning T5 models with targeted data augmentations under tight hardware constraints.",
    role: "NLP / ML Engineer (Team Collaboration)",
    impact: [
      "Placed 33rd out of 2,674 international teams, ranking in the top 1.2% globally.",
      "Engineered preprocessing pipelines to handle lacunae (broken cuneiform signs) and archaic semantic shifts.",
      "Fine-tuned sequence-to-sequence T5 architecture, outperforming baseline models on BLEU and chrF scores.",
      "Co-authored competitive strategy and submission validation loops.",
    ],
    tags: ["Python", "PyTorch", "Hugging Face", "T5 Transformers", "NLP", "Machine Translation", "Kaggle"],
    badge: "Kaggle Silver Medal (33rd / 2,674)",
    featured: true,
    metrics: [
      { label: "Global Standing", value: "Top 1.2% (Silver Medal)" },
      { label: "Participants", value: "2,674 International Teams" },
      { label: "Model Architecture", value: "Fine-Tuned T5 Sequence-to-Sequence" },
    ],
  },
  {
    id: "evm-smart-contracts",
    title: "EVM Smart Contracts & Decentralized Settlement",
    subtitle: "Solidity Protocols, Token Contracts & Multi-Chain Escrow",
    category: "Web3 & Cloud",
    description:
      "Designed and deployed smart contracts on Ethereum Virtual Machine (EVM) compatible networks for token management, automated escrow settlement, and decentralized verification.",
    longDescription:
      "Engineered reliable on-chain logic adhering to standard contract interfaces (ERC-20, escrow vault mechanisms) with security best practices, gas optimization, and comprehensive test suites. Connected contract interactions to Next.js frontends via web3 libraries with wallet signature authentication.",
    role: "Web3 & Smart Contract Developer",
    impact: [
      "Authored clean, gas-efficient Solidity smart contracts for EVM-compatible blockchains.",
      "Implemented multi-party escrow logic ensuring programmatic fund releases upon verified off-chain milestones.",
      "Integrated front-end dApp interfaces with wallet connectivity and event subscription handlers.",
    ],
    tags: ["Solidity", "EVM Chains", "Web3", "Smart Contracts", "Escrow", "TypeScript", "Next.js"],
    badge: "EVM Smart Contracts & Settlement",
    featured: true,
    metrics: [
      { label: "Ecosystem", value: "EVM Chains (Ethereum, Polygon, BNB)" },
      { label: "Standards", value: "Token & Escrow Contracts" },
      { label: "Integration", value: "Frontend dApp Connectivity" },
    ],
  },
  {
    id: "researchforge-ai",
    title: "ResearchForge-AI",
    subtitle: "Autonomous Research Collaboration & Proposal Generation Engine",
    category: "AI & Agents",
    description:
      "AI-powered academic research accelerator powered by Google Gemini to discover papers, synthesize literature, draft grant proposals, and match collaborators.",
    longDescription:
      "Engineered an autonomous workflow platform that solves the cold-start research problem. Ingests research questions, queries academic indices via multi-agent pipelines, builds structured literature matrices, and drafts comprehensive project proposals in minutes.",
    role: "Full-Stack AI Developer",
    impact: [
      "Integrated Google Gemini LLMs for multi-step paper analysis and executive synthesis.",
      "Engineered agentic drafting pipelines that produce structured methodologies, literature reviews, and grant proposals.",
      "Built clean Flask and Python backend with modular agent dispatchers.",
    ],
    tags: ["Python", "Flask", "Google Gemini", "Multi-Agent Systems", "Academic RAG", "Machine Learning"],
    githubUrl: "https://github.com/tuba89/ResearchForge-AI",
    badge: "Google Gemini Powered",
    featured: true,
    metrics: [
      { label: "AI Engine", value: "Google Gemini Pro" },
      { label: "Workflow", value: "Agentic Proposal Drafting" },
      { label: "License", value: "MIT Open Source" },
    ],
  },
  {
    id: "oncoassist-medibridge",
    title: "OncoAssist & MediBridge-AI",
    subtitle: "Clinical Decision Support & Cancer Recovery Guidance",
    category: "AI & Agents",
    description:
      "Multilingual clinical decision support system utilizing BigQuery AI, vector search, and Gemini LLMs to deliver evidence-backed care cards with full clinical citations.",
    longDescription:
      "Selected for an Honourable Mention in the global Kaggle x Google Gen AI Intensive Capstone (out of 280,000+ registered participants). Provides cancer survivors and oncologists with reliable, cited answers derived from ClinicalTrials.gov and oncology literature with RTL Arabic and French support.",
    role: "Lead Creator & AI Engineer",
    impact: [
      "Earned Honourable Mention among 280,000+ global participants in Kaggle x Google Gen AI Intensive.",
      "Implemented vector search over trusted clinical trial datasets and medical publications via ChromaDB & BigQuery AI.",
      "Developed strict medical safety filtering and automated source-citation rendering.",
      "Supported trilingual interfaces (English, French, Arabic RTL).",
    ],
    tags: ["Python", "Google Gemini Pro", "BigQuery AI", "Vector Search", "ChromaDB", "Gradio", "Healthcare AI"],
    githubUrl: "https://github.com/tuba89/medibridge-ai",
    badge: "Google Gen AI Honourable Mention",
    featured: true,
    metrics: [
      { label: "Recognition", value: "Honourable Mention (Top 100 / 280,000+)" },
      { label: "Knowledge Base", value: "ClinicalTrials.gov + Oncology Trials" },
      { label: "Languages", value: "Trilingual (EN / FR / AR RTL)" },
    ],
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    id: "next-weather-app",
    title: "Next.js Modern Weather App",
    subtitle: "Real-Time Animated Weather Intelligence",
    category: "Mobile & Full-Stack",
    description: "Production-ready weather application built with Next.js 15, TailwindCSS, shadcn/ui, Framer Motion, and Zod validation.",
    longDescription: "High-performance reactive frontend featuring dynamic atmospheric micro-animations, forecast graphs, geolocation caching, and strict type validation.",
    role: "Frontend Engineer",
    impact: ["Next.js 15 App Router", "Framer Motion responsive UI", "Zod type-safe API schema"],
    tags: ["Next.js 15", "TypeScript", "TailwindCSS", "Framer Motion", "shadcn/ui", "Zod"],
    githubUrl: "https://github.com/tuba89/next-weather-app",
    featured: false,
  },
  {
    id: "guardian-ai",
    title: "GuardianAI",
    subtitle: "AI-Powered Protection Against Theft & Harassment",
    category: "AI & Agents",
    description: "Real-time automated incident detection and alert notification system utilizing computer vision heuristics.",
    longDescription: "Engineered to deliver rapid security alerting with TypeScript and reactive client dashboard.",
    role: "Full-Stack Engineer",
    impact: ["Event-driven security monitoring", "TypeScript architecture"],
    tags: ["TypeScript", "Computer Vision", "AI Safety", "React"],
    githubUrl: "https://github.com/tuba89/GuardianAI",
    featured: false,
  },
  {
    id: "bloodlink",
    title: "BloodLink",
    subtitle: "Emergency Blood Donor Network",
    category: "Mobile & Full-Stack",
    description: "A community web platform connecting blood donors with urgent regional requests across Algeria.",
    longDescription: "Fast, community-driven emergency coordination tool connecting volunteer donors with hospital requests.",
    role: "Full-Stack Python Developer",
    impact: ["Fast geographic matching", "Community healthcare impact"],
    tags: ["Python", "Flask", "SQLite", "Community Tech"],
    githubUrl: "https://github.com/tuba89/BloodLink",
    featured: false,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "DizzitUp",
    role: "Full-Stack Developer",
    period: "Jan 2026 - Present",
    location: "Oran, Algeria (Remote)",
    type: "Part-time / Core Contributor",
    description:
      "Engineering a production-scale fintech and digital marketplace platform operating across 54 African countries, handling real-time payments, e-commerce, and digital services.",
    highlights: [
      "Develop responsive Next.js frontend interfaces and resilient Node.js / Express backend services.",
      "Design Supabase PostgreSQL schemas, implement Row-Level Security (RLS) policies, and optimize Prisma queries.",
      "Architected the Universal Search system connecting merchants, utility vouchers, mobile top-ups, and gift cards.",
      "Contributed to DZYwallet crypto/stablecoin transaction flows, payment settlement, and ledger reconciliations.",
      "Lead cross-border localization including French, English, Arabic RTL, Amharic, and Portuguese.",
    ],
    skills: ["Next.js", "React", "Node.js", "Express", "Supabase", "PostgreSQL", "Prisma", "Fintech", "Web3"],
  },
  {
    company: "DizzitUp (via Virtual Internships)",
    role: "Software Engineering Intern",
    period: "Sep 2025 - Jan 2026",
    location: "Remote",
    type: "262 Hours Completed - Hired as Developer",
    description:
      "Selected for competitive Virtual Internships placement at DizzitUp. Completed 262 hours of hands-on production engineering with outstanding evaluations, leading directly to a permanent developer role.",
    highlights: [
      "Contributed architectural designs for ledger transaction histories and cross-service state consistency.",
      "Collaborated in distributed engineering sprints, adhering to strict code review and CI/CD hygiene.",
      "Evaluated at top tier (7.0/7.0 in Technology, Career Development, and Global Fluency) by university assessment.",
    ],
    skills: ["Software Architecture", "Team Collaboration", "Agile Sprints", "Git", "E-commerce"],
  },
  {
    company: "Office Public Notarial",
    role: "Legal & Notarial Assistant & Office IT Administrator",
    period: "Sep 2013 - Jul 2026",
    location: "Oran, Algeria",
    type: "Full-time (12+ Years)",
    description:
      "Managed legal contract drafting, real estate conveyancing compliance, client relations, and full office IT infrastructure. Developed rigorous domain mastery in legal documentation and financial administration.",
    highlights: [
      "Drafted and audited hundreds of high-stakes legal deeds, commercial contracts, and notarized declarations.",
      "Managed complete office computer infrastructure, local network configuration, data backups, and security.",
      "Coordinated quarterly accounting, tax documentation, and regulatory submissions.",
      "Applied domain expertise to streamline data integrity, audit trails, and compliance workflows.",
    ],
    skills: ["Legal Contract Drafting", "Regulatory Compliance", "IT Infrastructure", "Accounting", "Data Integrity"],
  },
];

export const EDUCATION_LIST: Education[] = [
  {
    institution: "University of the People",
    degree: "Associate of Science in Computer Science (High Honors)",
    period: "Sep 2022 - Conferred Jan 14, 2026",
    location: "Pasadena, CA, USA (WASC Senior College & University Commission Accredited)",
    grade: "GPA 3.97 / 4.00 - High Honors",
    description:
      "Comprehensive computer science curriculum accredited by the WASC Senior College and University Commission. Graduated with near-perfect GPA and High Honors distinction.",
    highlights: [
      "Core Coursework: Programming Fundamentals, Programming 1 & 2 (Java & Python), Databases (SQL), Computer Systems, Operating Systems, Web Programming, Software Engineering, Networking, Statistics, Applied Economics.",
      "Earned A / A+ across all computing and mathematics modules.",
      "Conferred on January 14, 2026 with President commendation.",
    ],
    credentialUrl: "/certificates/Assia_Benkedia_Graduation_Document.pdf",
  },
  {
    institution: "University of Oran",
    degree: "Licence (Bac+3) in Economics, Banking & Insurance",
    period: "Sep 2009 - Jun 2011",
    location: "Oran, Algeria",
    grade: "Bac + 3",
    description:
      "Specialized in banking operations, financial markets, risk modeling, and insurance regulations. Provides foundational quantitative backing for fintech and algorithmic trading systems.",
    highlights: [
      "Study of monetary economics, banking mechanisms, risk hedging, and financial accounting.",
      "Foundation for fintech architecture and payment processing systems.",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Kaggle Silver Medalist - Deep Past Challenge",
    issuer: "Kaggle (Awarded by Will Cukierski, Head of Competitions)",
    date: "March 24, 2026",
    credentialId: "Rank 33 / 2,674 Teams",
    assetPath: "/certificates/Assia_Benkedia_Deep_Past_Challenge.png",
    category: "AI & ML",
  },
  {
    name: "Google Gen AI Intensive Capstone - Honourable Mention (OncoAssist)",
    issuer: "Kaggle x Google Generative AI Intensive",
    date: "April 2025",
    credentialId: "Top Capstone among 280,000+ Participants",
    category: "AI & ML",
  },
  {
    name: "Virtual Internships Completion Certificate (262 Hours)",
    issuer: "Virtual Internships / DizzitUp",
    date: "January 9, 2026",
    credentialId: "Chief Academic Officer Jillian Low",
    assetPath: "/certificates/Assia_Benkedia_DizzitUp_Internship_Certificate.pdf",
    category: "Software & Cloud",
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia (via Forage)",
    date: "March 16, 2025",
    credentialId: "f6aeBZxu3nkENERAF",
    assetPath: "/certificates/Deloitte_Data_Analytics_Certificate.pdf",
    category: "Software & Cloud",
  },
  {
    name: "CCNA Routing and Switching: Connecting Networks",
    issuer: "Cisco Networking Academy",
    date: "June 29, 2018",
    credentialId: "385129f3-bac3-4728-9f76-507549422599",
    assetPath: "/certificates/CCNA_Connecting_Networks.pdf",
    category: "Networking & IT",
  },
  {
    name: "CCNA Routing and Switching: Scaling Networks",
    issuer: "Cisco Networking Academy",
    date: "April 01, 2018",
    credentialId: "a19a3eb9-7e2f-42ac-ac5a-5ed3cb0bb1a2",
    assetPath: "/certificates/CCNA_Scaling_Networks.pdf",
    category: "Networking & IT",
  },
  {
    name: "CCNA Routing and Switching: Routing & Switching Essentials",
    issuer: "Cisco Networking Academy",
    date: "January 02, 2018",
    credentialId: "119262ff-9dc3-4230-95ef-d235126b3838",
    assetPath: "/certificates/CCNA_Routing_Switching.pdf",
    category: "Networking & IT",
  },
  {
    name: "CCNA Routing and Switching: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "July 10, 2017",
    credentialId: "338ec564-c996-4246-843b-f0a117200e73",
    assetPath: "/certificates/CCNA_Intro_Networks.pdf",
    category: "Networking & IT",
  },
  {
    name: "Learn JavaScript Course",
    issuer: "Codecademy",
    date: "July 2023",
    verifyUrl: "https://www.codecademy.com/profiles/assia_Ben/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
    assetPath: "/certificates/codecademy_javascript.png",
    category: "Software & Cloud",
  },
  {
    name: "Learn CSS Course",
    issuer: "Codecademy",
    date: "July 2023",
    verifyUrl: "https://www.codecademy.com/profiles/assia_Ben/certificates/9a5bb1fc45b4281af1fffec93b0aaf05",
    assetPath: "/certificates/codecademy_css.png",
    category: "Software & Cloud",
  },
  {
    name: "Learn HTML Course",
    issuer: "Codecademy",
    date: "July 2023",
    verifyUrl: "https://www.codecademy.com/profiles/assia_Ben/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
    assetPath: "/certificates/codecademy_html.png",
    category: "Software & Cloud",
  },
];

export const SKILL_CATEGORIES = [
  {
    name: "Mobile & Frontend Engineering",
    skills: [
      "React Native & Expo (iOS / Android)",
      "Android Emulator & Native Debugging",
      "Mobile UI/UX Design & Prototyping",
      "Next.js 15 & React 19",
      "TypeScript & Modern JavaScript",
      "Tailwind CSS & Framer Motion",
      "Multilingual RTL Architecture (Arabic)",
      "Social Auth (Apple, Google, Meta)",
    ],
  },
  {
    name: "AI & Machine Learning",
    skills: [
      "Agentic AI Development",
      "Model Context Protocol (FastMCP)",
      "Large Language Models (LLM)",
      "Google Gemini API",
      "RAG & Semantic Vector Search",
      "T5 Transformers Fine-Tuning",
      "ChromaDB & BigQuery AI",
      "PyTorch & Hugging Face",
    ],
  },
  {
    name: "Fintech, Web3 & Payments",
    skills: [
      "Card Payment Checkouts",
      "Automated Payment Links & Invoicing",
      "Regional Mobile Money Pipelines",
      "Crypto Settlement & DZYwallet Flows",
      "Solidity & EVM Smart Contracts",
      "Decentralized Escrow Protocols",
      "12+ Years Notarial Document Rigor",
      "Compliance & Financial Audit Trails",
    ],
  },
  {
    name: "Backend, DevOps & Cloud",
    skills: [
      "Node.js, Express & Python Flask",
      "Supabase PostgreSQL & Row-Level Security",
      "Custom Supabase SMTP Mailers",
      "Prisma ORM in Production",
      "Coolify Self-Hosted PaaS",
      "Linux Server Administration (SSH)",
      "Hostinger VPS Management",
      "Google Tag Manager, Analytics & Ads",
      "Meta Pixel & WhatsApp Business API",
      "Transactional Email & SMS Delivery",
    ],
  },
];
