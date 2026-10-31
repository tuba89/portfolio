export type Language = "en" | "fr" | "ar";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface LocalizedProject {
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
  writeupUrl?: string;
  notebookUrl?: string;
  blogUrl?: string;
  videoUrl?: string;
  isPrivateRepo?: boolean;
  badge?: string;
  featured: boolean;
  metrics?: ProjectMetric[];
  coverImage?: string;
  imageAlt?: string;
}

export interface LocalizedExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface LocalizedEducation {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade: string;
  honor?: string;
  description: string;
  highlights: string[];
  credentialUrl?: string;
}

export interface LocalizedCertification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  assetPath?: string;
  category: "AI & ML" | "Software & Cloud" | "Networking & IT";
  categoryLabel: string;
}

export interface LocalizedSkillCategory {
  name: string;
  skills: string[];
}

export interface Translations {
  personal: {
    name: string;
    title: string;
    roleSubtitle: string;
    specialization: string;
    location: string;
    email: string;
    phone: string;
    summary: string;
    stats: {
      kaggle: { value: string; label: string; note: string };
      uopeople: { value: string; label: string; note: string };
      fintech: { value: string; label: string; note: string };
      genai: { value: string; label: string; note: string };
    };
  };
  nav: {
    projects: string;
    honors: string;
    experience: string;
    education: string;
    credentials: string;
    contact: string;
    resume: string;
    downloadPdf: string;
  };
  hero: {
    statusBadge: string;
    headlineStart: string;
    headlineAccent: string;
    headlineEnd: string;
    bio: string;
    kaggleBadge: string;
    uopeopleBadge: string;
    fintechBadge: string;
    mobileBadge: string;
    exploreBtn: string;
    downloadCvBtn: string;
    contactBtn: string;
    techStripBadge: string;
    techStripTitle: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    allRepos: string;
    codeBtn: string;
    liveBtn: string;
    writeupBtn: string;
    notebookBtn: string;
    blogBtn: string;
    videoBtn: string;
    privateRepoBadge: string;
    deliverablesTitle: string;
    archProfile: string;
    stackTitle: string;
  };
  featuredProjects: LocalizedProject[];
  otherProjects: {
    badge: string;
    title: string;
    items: LocalizedProject[];
  };
  honors: {
    badge: string;
    title: string;
    subtitle: string;
    kaggleCard: {
      tag: string;
      date: string;
      title: string;
      sub: string;
      desc: string;
      viewCert: string;
      writeupBtn: string;
      verifiedText: string;
    };
    googleCard: {
      tag: string;
      date: string;
      title: string;
      sub: string;
      desc: string;
      highlights: string[];
      viewCode: string;
      winnersBtn: string;
      notebookBtn: string;
      blogBtn: string;
      videoBtn: string;
      initiativeText: string;
    };
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    items: LocalizedExperience[];
  };
  education: {
    badge: string;
    title: string;
    subtitle: string;
    diplomaBtn: string;
    transcriptBtn: string;
    items: LocalizedEducation[];
  };
  credentials: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    aiMl: string;
    softwareCloud: string;
    networkingIt: string;
    viewDoc: string;
    verify: string;
    verifiedFallback: string;
    items: LocalizedCertification[];
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    categories: LocalizedSkillCategory[];
  };
  contact: {
    badge: string;
    title: string;
    desc: string;
    sendEmail: string;
    detailsTitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    responseTime: string;
    copyTooltip: string;
    copiedTooltip: string;
    kaggleProfileLabel: string;
    linkedinProfileLabel: string;
    githubProfileLabel: string;
  };
  theme: {
    light: string;
    dark: string;
    toggleTitleLight: string;
    toggleTitleDark: string;
  };
  footer: {
    rights: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    personal: {
      name: "Assia Benkedia",
      title: "Full-Stack & Mobile Developer",
      roleSubtitle: "Full-Stack & Mobile Engineer",
      specialization: "Mobile & Web Engineering · Autonomous AI Agents · Fintech & EVM",
      location: "Oran, Algeria (Open to Global Remote & Relocation)",
      email: "assiapro.ai@gmail.com",
      phone: "+213 783 60 05 83",
      summary:
        "High-achieving Computer Science graduate (High Honors, 3.97 GPA) and Full-Stack & Mobile Developer specializing in autonomous AI agents, production fintech, EVM smart contracts, and scalable cloud deployments. Currently engineering production features at DizzitUp serving 54 African countries. Proven track record including a Kaggle Silver Medal (33rd / 2,674 teams) and a Google Gen AI Intensive Honourable Mention. Combines deep full-stack mastery (React Native Expo, Next.js, Node.js, Prisma, Coolify, VPS server administration) with 12+ years of rigorous legal and operational discipline.",
      stats: {
        kaggle: { value: "33rd / 2,674", label: "Kaggle Global Rank", note: "Silver Medal (Top 1.2%)" },
        uopeople: { value: "GPA 3.97 / 4.00", label: "University Honors", note: "High Honors Graduate" },
        fintech: { value: "54 Countries", label: "Fintech Reach", note: "DizzitUp Marketplace" },
        genai: { value: "Honourable Mention", label: "Gen AI Capstone", note: "Top 100 of 280,000+" },
      },
    },
    nav: {
      projects: "Projects",
      honors: "Honors",
      experience: "Experience",
      education: "Education",
      credentials: "Credentials",
      contact: "Contact",
      resume: "Resume",
      downloadPdf: "Download CV (PDF)",
    },
    hero: {
      statusBadge: "Available for Full-Stack, Mobile & AI Engineering",
      headlineStart: "Building ",
      headlineAccent: "autonomous AI agents",
      headlineEnd: ", cross-platform mobile apps, and resilient fintech.",
      bio: "I am a Full-Stack & Mobile Developer specializing in intelligent agent workflows, React Native applications, and production payment architecture. Currently contributing to DizzitUp across 54 African countries.",
      kaggleBadge: "Kaggle Silver Medalist (33rd / 2,674)",
      uopeopleBadge: "UoPeople High Honors (GPA 3.97)",
      fintechBadge: "Fintech (54 African Nations)",
      mobileBadge: "React Native & Expo",
      exploreBtn: "Explore Flagship Work",
      downloadCvBtn: "Download Verified CV",
      contactBtn: "Get in Touch",
      techStripBadge: "Core Technologies",
      techStripTitle: "Technologies I build with daily:",
    },
    projects: {
      badge: "Flagship Work",
      title: "Featured Case Studies",
      subtitle: "Production platforms, mobile applications, and autonomous agent architectures delivered with verifiable results.",
      allRepos: "All GitHub Repositories",
      codeBtn: "Code",
      liveBtn: "Live Site",
      writeupBtn: "Solution Writeup",
      notebookBtn: "Kaggle Notebook",
      blogBtn: "Technical Article",
      videoBtn: "Video Demo",
      privateRepoBadge: "Private Enterprise Repository",
      deliverablesTitle: "Key Deliverables & Architectural Results",
      archProfile: "Architecture Profile",
      stackTitle: "Stack",
    },
    featuredProjects: [
      {
        id: "dizzitup",
        title: "DizzitUp",
        subtitle: "Pan-African Fintech & Marketplace Platform",
        category: "Production",
        badge: "Production Platform · 54 Countries",
        isPrivateRepo: true,
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
        badge: "Mobile iOS & Android + Cloud Infrastructure",
        isPrivateRepo: true,
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
        badge: "Open Source AI Agent System",
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
        writeupUrl: "https://www.kaggle.com/competitions/vibecoding-agents-capstone-project/writeups/new-writeup-1783122930771",
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
        badge: "Kaggle Silver Medal (33rd / 2,674)",
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
        writeupUrl: "https://www.kaggle.com/competitions/deep-past-initiative-machine-translation/writeups/32nd-byt5-base-fine-tuning-no-llms-no-synthet#3443570",
        liveUrl: "https://www.kaggle.com/competitions/deep-past-initiative-machine-translation/leaderboard",
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
        badge: "EVM Smart Contracts & Settlement",
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
        badge: "Google Gemini Powered",
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
        writeupUrl: "https://www.kaggle.com/competitions/agents-intensive-capstone-project/writeups/new-writeup-1764433151428",
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
        subtitle: "Google Gen AI Intensive Capstone Honourable Mention & Clinical Decision Support",
        category: "AI & Agents",
        badge: "Gen AI Capstone Winner · Honourable Mention",
        description:
          "Award-winning clinical intelligence and cancer recovery platform powered by Google Gemini, RAG over TCGA oncology data, vector search, and multimodal patient recovery guidance.",
        longDescription:
          "OncoAssist was awarded Honourable Mention in the Google Gen AI Intensive Course Capstone (among 280,000+ global participants). It pairs an AI-powered cancer recovery companion with MediBridge-AI's real-time clinical decision support engine, featuring semantic search over oncology databases, automated case similarity matching, stage-specific recovery care cards, and strict medical source citation.",
        role: "Sole Creator & Lead AI Engineer",
        impact: [
          "Awarded Honourable Mention in Google Gen AI Intensive Capstone (Top Capstone of 280,000+ course participants).",
          "Engineered vector search over the TCGA oncology dataset and medical publications via ChromaDB and Gemini.",
          "Developed conversational recovery advisor with empathetic tone, multimodal analysis, and patient care cards.",
          "Published full Kaggle Notebook, technical Medium architecture breakdown, and video demonstration.",
          "Implemented strict medical safety guardrails and automated source-citation rendering.",
        ],
        tags: ["Google Gemini", "Python", "RAG", "Vector Search", "ChromaDB", "Healthcare AI", "TCGA Dataset"],
        githubUrl: "https://github.com/tuba89/medibridge-ai",
        liveUrl: "https://www.kaggle.com/competitions/gen-ai-intensive-course-capstone-2025q1/discussion/575927",
        notebookUrl: "https://www.kaggle.com/code/assiaben/oncoassist-ai-powered-cancer-recovery-advisor",
        blogUrl: "https://medium.com/@iiiassia.beniii/oncoassist-building-an-ai-companion-for-cancer-survivors-with-gemini-and-rag-f76e9bbe8438",
        videoUrl: "https://www.youtube.com/watch?v=gKRmSPRP5NQ",
        writeupUrl: "https://www.kaggle.com/competitions/bigquery-ai-hackathon/writeups/medibridge-ai-real-time-oncology-decision-support#3287416",
        featured: true,
        metrics: [
          { label: "Award", value: "Honourable Mention (Google Gen AI Capstone)" },
          { label: "AI Engine", value: "Google Gemini 1.5 & ChromaDB RAG" },
          { label: "Knowledge Base", value: "TCGA Clinical Trial & Oncology Data" },
        ],
      },
    ],
    otherProjects: {
      badge: "Open Source & Utilities",
      title: "Additional Selected Projects",
      items: [
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
          writeupUrl: "https://www.kaggle.com/competitions/gemini-3/writeups/guardianai-global-safety-platform-for-device-prot",
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
      ],
    },
    honors: {
      badge: "Honors & Benchmark Validations",
      title: "Competitive & Academic Honors",
      subtitle: "Recognized internationally across competitive machine learning benchmarks and accredited academic programs.",
      kaggleCard: {
        tag: "Kaggle Silver Medal (Top 1.2%)",
        date: "March 2026",
        title: "Deep Past Challenge: Akkadian to English",
        sub: "Placed 33rd out of 2,674 international teams",
        desc: "Awarded official Competition Silver Medal by Will Cukierski, Head of Kaggle Competitions. Fine-tuned T5 Transformer sequence-to-sequence architectures to decipher and translate damaged ancient cuneiform texts.",
        viewCert: "Full Certificate",
        writeupBtn: "Solution Writeup",
        verifiedText: "Verified on Kaggle Platform",
      },
      googleCard: {
        tag: "Google Gen AI Intensive Capstone",
        date: "April 2025",
        title: "Honourable Mention: OncoAssist",
        sub: "Selected among top capstones out of 280,000+ global participants",
        desc: "Built an AI cancer recovery advisor utilizing Gemini Pro, BigQuery AI vector embeddings, ChromaDB, and evidence retrieval from ClinicalTrials.gov with multilingual RTL Arabic support.",
        highlights: [
          "280,000+ Global Participants in Kaggle x Google Cohort",
          "Source-cited, medically-grounded RAG architecture",
          "Multilingual evaluation with French & Arabic RTL",
        ],
        viewCode: "Project Code",
        winnersBtn: "Winners Table",
        notebookBtn: "Kaggle Notebook",
        blogBtn: "Medium Article",
        videoBtn: "YouTube Demo",
        initiativeText: "Kaggle x Google AI Initiative",
      },
    },
    experience: {
      badge: "Career Record",
      title: "Engineering & Domain Experience",
      subtitle: "Combining modern full-stack development with 12+ years of legal and operational rigor.",
      items: [
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
      ],
    },
    education: {
      badge: "Academic Background",
      title: "Accredited Education & Honors",
      subtitle: "Rigorous foundation in computer science, software engineering, and financial economics.",
      diplomaBtn: "Conferred Diploma",
      transcriptBtn: "Official Transcript",
      items: [
        {
          institution: "University of the People",
          degree: "Associate of Science in Computer Science",
          period: "Sep 2022 - Conferred Jan 14, 2026",
          location: "Pasadena, CA, USA (WASC Accredited)",
          grade: "GPA 3.97 / 4.00",
          honor: "High Honors Distinction",
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
            "Specialized in banking operations, financial markets, risk modeling, and insurance regulations. Provides foundational quantitative backing for fintech and algorithmic systems.",
          highlights: [
            "Study of monetary economics, banking mechanisms, risk hedging, and financial accounting.",
            "Foundation for fintech architecture and payment processing systems.",
          ],
        },
      ],
    },
    credentials: {
      badge: "Professional Licenses & Validations",
      title: "Verified Certifications",
      subtitle: "Industry credentials across enterprise data analytics, Cisco network engineering, and frontend systems.",
      all: "All",
      aiMl: "AI & ML",
      softwareCloud: "Software & Cloud",
      networkingIt: "Networking & IT",
      viewDoc: "View Document",
      verify: "Verify Record",
      verifiedFallback: "Verified Record",
      items: [
        {
          name: "Kaggle Silver Medalist - Deep Past Challenge",
          issuer: "Kaggle (Awarded by Will Cukierski, Head of Competitions)",
          date: "March 24, 2026",
          credentialId: "Rank 33 / 2,674 Teams",
          assetPath: "/certificates/Assia_Benkedia_Deep_Past_Challenge.png",
          category: "AI & ML",
          categoryLabel: "AI & ML",
        },
        {
          name: "Google Gen AI Intensive Capstone - Honourable Mention (OncoAssist)",
          issuer: "Google DeepMind x Kaggle",
          date: "April 2025",
          credentialId: "Honourable Mention · Top Capstone among 280,000+ Participants",
          verifyUrl: "https://www.kaggle.com/competitions/gen-ai-intensive-course-capstone-2025q1/discussion/575927",
          category: "AI & ML",
          categoryLabel: "AI & ML",
        },
        {
          name: "Virtual Internships Completion Certificate (262 Hours)",
          issuer: "Virtual Internships / DizzitUp",
          date: "January 9, 2026",
          credentialId: "Chief Academic Officer Jillian Low",
          assetPath: "/certificates/Assia_Benkedia_DizzitUp_Internship_Certificate.pdf",
          category: "Software & Cloud",
          categoryLabel: "Software & Cloud",
        },
        {
          name: "Data Analytics Job Simulation",
          issuer: "Deloitte Australia (via Forage)",
          date: "March 16, 2025",
          credentialId: "f6aeBZxu3nkENERAF",
          assetPath: "/certificates/Deloitte_Data_Analytics_Certificate.pdf",
          category: "Software & Cloud",
          categoryLabel: "Software & Cloud",
        },
        {
          name: "CCNA Routing and Switching: Connecting Networks",
          issuer: "Cisco Networking Academy",
          date: "June 29, 2018",
          credentialId: "385129f3-bac3-4728-9f76-507549422599",
          assetPath: "/certificates/CCNA_Connecting_Networks.pdf",
          category: "Networking & IT",
          categoryLabel: "Networking & IT",
        },
        {
          name: "CCNA Routing and Switching: Scaling Networks",
          issuer: "Cisco Networking Academy",
          date: "April 01, 2018",
          credentialId: "a19a3eb9-7e2f-42ac-ac5a-5ed3cb0bb1a2",
          assetPath: "/certificates/CCNA_Scaling_Networks.pdf",
          category: "Networking & IT",
          categoryLabel: "Networking & IT",
        },
        {
          name: "CCNA Routing and Switching: Routing & Switching Essentials",
          issuer: "Cisco Networking Academy",
          date: "January 02, 2018",
          credentialId: "119262ff-9dc3-4230-95ef-d235126b3838",
          assetPath: "/certificates/CCNA_Routing_Switching.pdf",
          category: "Networking & IT",
          categoryLabel: "Networking & IT",
        },
        {
          name: "CCNA Routing and Switching: Introduction to Networks",
          issuer: "Cisco Networking Academy",
          date: "July 10, 2017",
          credentialId: "338ec564-c996-4246-843b-f0a117200e73",
          assetPath: "/certificates/CCNA_Intro_Networks.pdf",
          category: "Networking & IT",
          categoryLabel: "Networking & IT",
        },
        {
          name: "Learn JavaScript Course",
          issuer: "Codecademy",
          date: "July 2023",
          verifyUrl: "https://www.codecademy.com/profiles/assia_Ben/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
          assetPath: "/certificates/codecademy_javascript.png",
          category: "Software & Cloud",
          categoryLabel: "Software & Cloud",
        },
        {
          name: "Learn CSS Course",
          issuer: "Codecademy",
          date: "July 2023",
          verifyUrl: "https://www.codecademy.com/profiles/assia_Ben/certificates/9a5bb1fc45b4281af1fffec93b0aaf05",
          assetPath: "/certificates/codecademy_css.png",
          category: "Software & Cloud",
          categoryLabel: "Software & Cloud",
        },
        {
          name: "Learn HTML Course",
          issuer: "Codecademy",
          date: "July 2023",
          verifyUrl: "https://www.codecademy.com/profiles/assia_Ben/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
          assetPath: "/certificates/codecademy_html.png",
          category: "Software & Cloud",
          categoryLabel: "Software & Cloud",
        },
      ],
    },
    skills: {
      badge: "Technical Capabilities",
      title: "Core Technical Expertise",
      subtitle: "A specialized blend of cross-platform mobile engineering, autonomous artificial intelligence, production fintech, and server administration.",
      categories: [
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
      ],
    },
    contact: {
      badge: "Let's Build Together",
      title: "Interested in collaborating on mobile apps, AI agents, or fintech platforms?",
      desc: "I am open to high-impact software engineering roles, mobile architecture, autonomous AI systems, consulting, and fintech projects.",
      sendEmail: "Send an Email",
      detailsTitle: "Direct Contact Details",
      emailLabel: "Email",
      phoneLabel: "Phone / WhatsApp",
      locationLabel: "Location & Work Mode",
      responseTime: "Response time: Usually within 24 hours. Fluent in English, French, and Arabic.",
      copyTooltip: "Copy email address",
      copiedTooltip: "Copied!",
      kaggleProfileLabel: "Kaggle (@assiaben)",
      linkedinProfileLabel: "LinkedIn Profile",
      githubProfileLabel: "GitHub (@tuba89)",
    },
    theme: {
      light: "Light",
      dark: "Dark",
      toggleTitleLight: "Switch to Editorial Light Mode",
      toggleTitleDark: "Switch to Deep Dark Mode",
    },
    footer: {
      rights: "Full-Stack & Mobile Developer - Oran, Algeria - © 2026 All rights reserved.",
      backToTop: "Back to top",
    },
  },

  fr: {
    personal: {
      name: "Assia Benkedia",
      title: "Développeuse Full-Stack & Mobile",
      roleSubtitle: "Ingénieure Full-Stack & Mobile",
      specialization: "Ingénierie Mobile & Web · Agents IA Autonomes · Fintech & EVM",
      location: "Oran, Algérie (Ouverte au télétravail international & à la relocalisation)",
      email: "assiapro.ai@gmail.com",
      phone: "+213 783 60 05 83",
      summary:
        "Diplômée avec Haute Mention en informatique (GPA 3.97) et développeuse Full-Stack & Mobile spécialisée dans les agents IA autonomes, la fintech en production, les smart contracts EVM et les déploiements cloud. Contribue actuellement aux fonctionnalités de production chez DizzitUp pour 54 pays africains. Médaillée d'Argent Kaggle (33e / 2 674 équipes) et Mention d'Honneur au Google Gen AI Intensive Capstone. Alliant expertise full-stack (React Native Expo, Next.js, Node.js, Prisma, Coolify, administration Linux VPS) à plus de 12 ans de rigueur juridique et administrative.",
      stats: {
        kaggle: { value: "33e / 2 674", label: "Classement Mondial Kaggle", note: "Médaille d'Argent (Top 1.2%)" },
        uopeople: { value: "Moyenne 3.97 / 4.00", label: "Excellence Académique", note: "Diplômée Haute Mention" },
        fintech: { value: "54 pays", label: "Couverture Fintech", note: "Marché DizzitUp" },
        genai: { value: "Mention d'Honneur", label: "Projet Capstone Gen AI", note: "Top 100 sur 280 000+" },
      },
    },
    nav: {
      projects: "Projets",
      honors: "Distinctions",
      experience: "Expérience",
      education: "Formation",
      credentials: "Certifications",
      contact: "Contact",
      resume: "CV",
      downloadPdf: "Télécharger le CV (PDF)",
    },
    hero: {
      statusBadge: "Disponible pour ingénierie Full-Stack, Mobile & IA",
      headlineStart: "Conception d'",
      headlineAccent: "agents IA autonomes",
      headlineEnd: ", d'applications mobiles cross-platform et de fintech résiliente.",
      bio: "Développeuse Full-Stack & Mobile spécialisée dans les workflows d'agents intelligents, les applications React Native et les architectures de paiement en production. Contribue actuellement à DizzitUp à travers 54 pays africains.",
      kaggleBadge: "Médaille d'Argent Kaggle (33e / 2 674)",
      uopeopleBadge: "Haute Mention UoPeople (Moyenne 3.97)",
      fintechBadge: "Fintech (54 pays africains)",
      mobileBadge: "React Native & Expo",
      exploreBtn: "Découvrir les Projets",
      downloadCvBtn: "Télécharger le CV Vérifié",
      contactBtn: "Me Contacter",
      techStripBadge: "Technologies Clés",
      techStripTitle: "Technologies utilisées au quotidien :",
    },
    projects: {
      badge: "Réalisations Majeures",
      title: "Études de Cas & Projets",
      subtitle: "Plateformes en production, applications mobiles natives et architectures d'agents autonomes aux résultats concrets.",
      allRepos: "Tous les Dépôts GitHub",
      codeBtn: "Code Source",
      liveBtn: "Site en Ligne",
      writeupBtn: "Rapport Technique",
      notebookBtn: "Notebook Kaggle",
      blogBtn: "Article Technique",
      videoBtn: "Démo Vidéo",
      privateRepoBadge: "Dépôt d'Entreprise Privé",
      deliverablesTitle: "Livrables Clés & Résultats Architecturaux",
      archProfile: "Profil Architectural",
      stackTitle: "Technologies",
    },
    featuredProjects: [
      {
        id: "dizzitup",
        title: "DizzitUp",
        subtitle: "Plateforme Panafricaine de Fintech & Marketplace",
        category: "Production",
        badge: "Plateforme en Production · 54 Pays",
        isPrivateRepo: true,
        description:
          "Écosystème fintech et marketplace multi-pays couvrant 54 pays africains avec bons de services publics, cartes cadeaux numériques, règlement crypto et mobile money.",
        longDescription:
          "Contribution active au développement cœur de DizzitUp : interfaces multilingues réactives, API Node.js/Express scalables, schémas de données Supabase PostgreSQL avec sécurité au niveau des lignes (RLS), indexation de recherche universelle et passerelles de conversion crypto-fiat.",
        role: "Développeuse Full-Stack (Contributrice Cœur)",
        impact: [
          "Conception et déploiement du moteur de recherche universel indexant des milliers de produits, cartes cadeaux et services d'utilité publique à travers les corridors africains.",
          "Développement des tableaux de bord administratifs internes pour la gestion des grilles tarifaires, les registres de transactions en direct et le suivi opérationnel.",
          "Intégration des flux de paiement mobile money, des passerelles télécoms et des transactions crypto/stablecoins avec DZYwallet.",
          "Mise en œuvre du support multilingue avec gestion native RTL (français, anglais, arabe, portugais, amharique).",
        ],
        tags: ["Next.js", "React", "Node.js", "Express", "Supabase", "PostgreSQL", "Prisma", "Web3", "TailwindCSS"],
        liveUrl: "https://dizzitup.com",
        featured: true,
        metrics: [
          { label: "Corridors", value: "54 nations africaines" },
          { label: "Architecture", value: "Next.js + Supabase + Prisma" },
          { label: "Paiements", value: "Mobile Money & Crypto" },
        ],
      },
      {
        id: "cross-platform-mobile-marketplace",
        title: "Suite Mobile Cross-Platform & Marketplace Web",
        subtitle: "React Native (Expo), Passerelles de Paiement & Infrastructure Auto-Hébergée",
        category: "Mobile & Full-Stack",
        badge: "Applications Mobiles iOS & Android + Infrastructure Cloud",
        isPrivateRepo: true,
        description:
          "Architecture marketplace mobile et web de bout en bout comprenant applications natives iOS et Android, liens de paiement automatisés, facturation électronique, paiements par cartes et mobile money.",
        longDescription:
          "Conception complète de l'expérience utilisateur jusqu'au déploiement mobile et à la gestion de serveurs de production. Développement d'applications mobiles performantes avec React Native et Expo testées sur émulateur Android. Intégration de flux de paiement multi-canaux (liens de paiement, factures PDF dynamiques, cartes bancaires, mobile money). Configuration de l'authentification sociale (Apple, Google, Meta/Facebook) et serveurs SMTP transactionnels Supabase. Déploiement en production avec Prisma ORM sur PaaS Coolify auto-hébergé et serveurs VPS Linux.",
        role: "Architecte Principale Full-Stack & Mobile",
        impact: [
          "Développement d'applications mobiles cross-platform iOS et Android avec React Native et Expo offrant des performances natives.",
          "Mise en place de tunnels de paiement complets : liens de paiement, génération automatique de factures PDF, cartes bancaires et mobile money.",
          "Configuration de l'authentification sociale multi-fournisseurs (Connexion avec Apple, Google, Meta/Facebook) et distribution SMTP Supabase personnalisée.",
          "Intégration de flux de communication transactionnels : délivrance de SMS et notifications par emails.",
          "Configuration des outils d'analyse et de conversion : Google Tag Manager, Google Analytics, suivi Google Ads, Meta Pixel et WhatsApp Business API.",
          "Administration de l'infrastructure de production : gestion de serveurs Linux via SSH, orchestration VPS Hostinger et Prisma ORM sur Coolify.",
        ],
        tags: ["React Native", "Expo", "iOS & Android", "TypeScript", "Prisma", "Coolify", "Linux VPS", "Payment Links", "Social Auth"],
        featured: true,
        metrics: [
          { label: "Plateformes", value: "iOS, Android (Expo) & Web" },
          { label: "Paiements", value: "Cartes, Liens de paiement, Factures, Mobile Money" },
          { label: "DevOps", value: "PaaS Coolify, VPS Hostinger, Linux SSH" },
        ],
      },
      {
        id: "livora",
        title: "LIVORA",
        subtitle: "Système d'Agents IA Autonomes Multi-Agents ('JARVIS pour Mères Actives')",
        category: "IA & Agents",
        badge: "Système d'Agents IA Open Source",
        description:
          "Assistant proactif multi-agents orchestrant plannings familiaux, gestion du foyer et équilibre vie pro-vie perso grâce à FastMCP, une mémoire dynamique et la voix.",
        longDescription:
          "LIVORA réunit des sous-agents autonomes spécialisés (agenda, délégation de tâches, inventaire du foyer et assistant vocal) pour décharger la charge mentale des parents actifs. Construit avec les outils Model Context Protocol (MCP) et une mémoire conversationnelle persistante.",
        role: "Créatrice & Architecte IA",
        impact: [
          "Architecture de collaboration multi-agents où des sous-agents coordonnent agendas complexes et exécution des tâches.",
          "Intégration du serveur FastMCP permettant l'appel sécurisé d'outils locaux et externes.",
          "Implémentation d'une mémoire contextuelle à long terme pour les routines familiales récurrentes.",
          "Interface intuitive et accessible avec synthèse vocale et interaction audio.",
        ],
        tags: ["React", "AI Agents", "FastMCP", "Multi-Agent Systems", "Voice AI", "LLM Memory", "TypeScript"],
        githubUrl: "https://github.com/tuba89/livora",
        writeupUrl: "https://www.kaggle.com/competitions/vibecoding-agents-capstone-project/writeups/new-writeup-1783122930771",
        featured: true,
        metrics: [
          { label: "Modèle", value: "Orchestration Multi-Agents" },
          { label: "Protocole", value: "Model Context Protocol (FastMCP)" },
          { label: "Capacités", value: "Voix + Mémoire + Planification" },
        ],
      },
      {
        id: "deep-past-challenge",
        title: "Défi Deep Past : Traduction de l'Akkadien",
        subtitle: "Médaille d'Argent Kaggle · 33e Place sur 2 674 Équipes",
        category: "Kaggle & ML",
        badge: "Médaille d'Argent Kaggle (33e / 2 674)",
        description:
          "Entraînement et fine-tuning de modèles Transformers pour traduire des inscriptions cunéiformes akkadiennes fragmentées en anglais moderne.",
        longDescription:
          "Attribution d'une Médaille d'Argent Kaggle (certificat officiel émis le 24 mars 2026). Collaboration au sein d'une équipe de haut niveau pour surmonter le manque de données textuelles et l'ambiguïté morphologique cunéiforme en réajustant des modèles T5 avec des augmentations ciblées.",
        role: "Ingénieure NLP / ML (Collaboration)",
        impact: [
          "Classée 33e sur 2 674 équipes internationales, parmi le Top 1.2% mondial.",
          "Conception des pipelines de prétraitement pour gérer les lacunes (caractères cunéiformes brisés) et glissements sémantiques.",
          "Fine-tuning de l'architecture séquentielle T5, dépassant les modèles de référence sur les scores BLEU et chrF.",
          "Co-élaboration de la stratégie compétitive et des boucles de validation des soumissions.",
        ],
        tags: ["Python", "PyTorch", "Hugging Face", "T5 Transformers", "NLP", "Machine Translation", "Kaggle"],
        writeupUrl: "https://www.kaggle.com/competitions/deep-past-initiative-machine-translation/writeups/32nd-byt5-base-fine-tuning-no-llms-no-synthet#3443570",
        liveUrl: "https://www.kaggle.com/competitions/deep-past-initiative-machine-translation/leaderboard",
        featured: true,
        metrics: [
          { label: "Rang Mondial", value: "Top 1.2% (Médaille d'Argent)" },
          { label: "Participants", value: "2 674 Équipes Internationales" },
          { label: "Architecture", value: "T5 Sequence-to-Sequence Réajusté" },
        ],
      },
      {
        id: "evm-smart-contracts",
        title: "Smart Contracts EVM & Règlements Décentralisés",
        subtitle: "Protocoles Solidity, Contrats de Tokens & Séquestre Multi-Chaînes",
        category: "Web3 & Cloud",
        badge: "Smart Contracts EVM & Règlements",
        description:
          "Conception et déploiement de smart contracts compatibles Ethereum Virtual Machine (EVM) pour la gestion de tokens, le séquestre automatisé et la vérification décentralisée.",
        longDescription:
          "Développement d'une logique on-chain rigoureuse respectant les standards de l'industrie (ERC-20, coffres de séquestre programmables) avec optimisation du gas et tests automatisés complets. Connexion aux interfaces Next.js via librairies Web3 avec signatures de portefeuilles numériques.",
        role: "Développeuse Web3 & Smart Contracts",
        impact: [
          "Rédaction de contrats Solidity sécurisés et optimisés en gas pour blockchains compatibles EVM.",
          "Mise en place de mécanismes de séquestre (escrow) multi-parties libérant les fonds selon des étapes vérifiées.",
          "Intégration dApps frontend avec connectivité de portefeuilles et gestionnaires d'événements on-chain.",
        ],
        tags: ["Solidity", "EVM Chains", "Web3", "Smart Contracts", "Escrow", "TypeScript", "Next.js"],
        featured: true,
        metrics: [
          { label: "Écosystème", value: "Chaînes EVM (Ethereum, Polygon, BNB)" },
          { label: "Standards", value: "Tokens & Séquestre Escrow" },
          { label: "Intégration", value: "Connectivité Web3 Frontend" },
        ],
      },
      {
        id: "researchforge-ai",
        title: "ResearchForge-AI",
        subtitle: "Moteur de Collaboration Scientifique & Génération de Propositions",
        category: "IA & Agents",
        badge: "Propulsé par Google Gemini",
        description:
          "Accélérateur de recherche académique propulsé par Google Gemini pour analyser des publications, synthétiser la littérature et rédiger des propositions de subventions.",
        longDescription:
          "Plateforme de workflow autonome résolvant le problème de démarrage à froid en recherche. Analyse les problématiques scientifiques, interroge les index académiques via des pipelines d'agents, structure des matrices d'état de l'art et génère des propositions complètes en quelques minutes.",
        role: "Développeuse Full-Stack IA",
        impact: [
          "Intégration des modèles Google Gemini pour l'analyse multi-étapes et la synthèse de publications.",
          "Création de pipelines agentiques générant méthodologies détaillées, revues de littérature et demandes de financement.",
          "Développement d'un backend Flask & Python modulaire avec répartiteurs d'agents.",
        ],
        tags: ["Python", "Flask", "Google Gemini", "Multi-Agent Systems", "Academic RAG", "Machine Learning"],
        githubUrl: "https://github.com/tuba89/ResearchForge-AI",
        writeupUrl: "https://www.kaggle.com/competitions/agents-intensive-capstone-project/writeups/new-writeup-1764433151428",
        featured: true,
        metrics: [
          { label: "Moteur IA", value: "Google Gemini Pro" },
          { label: "Workflow", value: "Rédaction Agentique de Projets" },
          { label: "Licence", value: "Open Source MIT" },
        ],
      },
      {
        id: "oncoassist-medibridge",
        title: "OncoAssist & MediBridge-AI",
        subtitle: "Mention d'Honneur Google Gen AI Capstone & Support Décisionnel Clinique",
        category: "IA & Agents",
        badge: "Gagnant Capstone Gen AI · Mention d'Honneur",
        description:
          "Plateforme d'intelligence clinique et d'accompagnement oncologique primée, propulsée par Google Gemini, RAG sur données TCGA, recherche vectorielle et orientation personnalisée du patient.",
        longDescription:
          "OncoAssist a reçu la Mention d'Honneur lors du Capstone Google Gen AI Intensive (parmi 280 000+ participants mondiaux). Il associe un compagnon IA de rémission oncologique à MediBridge-AI, moteur de support décisionnel clinique doté de recherche sémantique, de calcul de similarité de cas et de fiches de soins médicalement sourcées.",
        role: "Créatrice & Ingénieure IA Principale",
        impact: [
          "Projet primé par la Mention d'Honneur au Capstone Google Gen AI Intensive (Top Capstone sur 280 000+ participants).",
          "Recherche vectorielle sur jeux de données oncologiques TCGA et publications médicales via ChromaDB et Gemini.",
          "Conseiller conversationnel bienveillant avec analyse multimodale et fiches de soins personnalisées.",
          "Publication complète du Notebook Kaggle, d'un article technique Medium et d'une démonstration vidéo.",
          "Garde-fous médicaux stricts et restitution automatisée des sources cliniques.",
        ],
        tags: ["Google Gemini", "Python", "RAG", "Vector Search", "ChromaDB", "Healthcare AI", "TCGA Dataset"],
        githubUrl: "https://github.com/tuba89/medibridge-ai",
        liveUrl: "https://www.kaggle.com/competitions/gen-ai-intensive-course-capstone-2025q1/discussion/575927",
        notebookUrl: "https://www.kaggle.com/code/assiaben/oncoassist-ai-powered-cancer-recovery-advisor",
        blogUrl: "https://medium.com/@iiiassia.beniii/oncoassist-building-an-ai-companion-for-cancer-survivors-with-gemini-and-rag-f76e9bbe8438",
        videoUrl: "https://www.youtube.com/watch?v=gKRmSPRP5NQ",
        writeupUrl: "https://www.kaggle.com/competitions/bigquery-ai-hackathon/writeups/medibridge-ai-real-time-oncology-decision-support#3287416",
        featured: true,
        metrics: [
          { label: "Distinction", value: "Mention d'Honneur (Google Gen AI Capstone)" },
          { label: "Moteur IA", value: "Google Gemini 1.5 & ChromaDB RAG" },
          { label: "Base de Données", value: "Données Cliniques & Essais TCGA" },
        ],
      },
    ],
    otherProjects: {
      badge: "Open Source & Utilitaires",
      title: "Autres Réalisations Sélectionnées",
      items: [
        {
          id: "next-weather-app",
          title: "Application Météo Moderne Next.js",
          subtitle: "Météo en Temps Réel & Micro-Animations",
          category: "Mobile & Full-Stack",
          description: "Application météo prête pour la production développée avec Next.js 15, TailwindCSS, shadcn/ui, Framer Motion et validation Zod.",
          longDescription: "Frontend réactif haute performance avec micro-animations atmosphériques, graphiques de prévision, mise en cache de géolocalisation et typage strict.",
          role: "Ingénieure Frontend",
          impact: ["Next.js 15 App Router", "Interface réactive Framer Motion", "Schéma d'API typé avec Zod"],
          tags: ["Next.js 15", "TypeScript", "TailwindCSS", "Framer Motion", "shadcn/ui", "Zod"],
          githubUrl: "https://github.com/tuba89/next-weather-app",
          featured: false,
        },
        {
          id: "guardian-ai",
          title: "GuardianAI",
          subtitle: "Protection IA Contre le Vol & le Harcèlement",
          category: "IA & Agents",
          description: "Système de détection automatisée d'incidents et de notifications d'alertes en temps réel reposant sur la vision par ordinateur.",
          longDescription: "Conçu pour fournir des alertes de sécurité rapides avec TypeScript et un tableau de bord client réactif.",
          role: "Ingénieure Full-Stack",
          impact: ["Surveillance axée sur les événements", "Architecture TypeScript"],
          tags: ["TypeScript", "Computer Vision", "AI Safety", "React"],
          githubUrl: "https://github.com/tuba89/GuardianAI",
          writeupUrl: "https://www.kaggle.com/competitions/gemini-3/writeups/guardianai-global-safety-platform-for-device-prot",
          featured: false,
        },
        {
          id: "bloodlink",
          title: "BloodLink",
          subtitle: "Réseau d'Urgence pour Donneurs de Sang",
          category: "Mobile & Full-Stack",
          description: "Plateforme communautaire connectant les donneurs de sang avec les demandes hospitalières urgentes à travers l'Algérie.",
          longDescription: "Outil d'urgence rapide reliant les donneurs volontaires aux demandes médicales régionales.",
          role: "Développeuse Python Full-Stack",
          impact: ["Appariement géographique rapide", "Impact santé communautaire"],
          tags: ["Python", "Flask", "SQLite", "Community Tech"],
          githubUrl: "https://github.com/tuba89/BloodLink",
          featured: false,
        },
      ],
    },
    honors: {
      badge: "Distinctions & Validations Mondiales",
      title: "Distinctions Compétitives & Académiques",
      subtitle: "Reconnaissance internationale lors de compétitions de machine learning et au sein de cursus accrédités.",
      kaggleCard: {
        tag: "Médaille d'Argent Kaggle (Top 1.2%)",
        date: "Mars 2026",
        title: "Défi Deep Past : Traduction de l'Akkadien",
        sub: "33e place sur 2 674 équipes internationales",
        desc: "Médaille d'Argent officielle décernée par Will Cukierski, responsable des compétitions Kaggle. Fine-tuning de modèles Transformers T5 pour déchiffrer et traduire des tablettes cunéiformes anciennes.",
        viewCert: "Certificat Complet",
        writeupBtn: "Rapport Technique",
        verifiedText: "Vérifié sur la plateforme Kaggle",
      },
      googleCard: {
        tag: "Google Gen AI Intensive Capstone",
        date: "Avril 2025",
        title: "Mention d'Honneur : OncoAssist",
        sub: "Sélectionné parmi les meilleurs projets sur 280 000+ participants",
        desc: "Développement d'un conseiller d'aide au rétablissement oncologique utilisant Gemini Pro, BigQuery AI et la recherche vectorielle avec support de l'arabe RTL.",
        highlights: [
          "280 000+ participants internationaux au programme Kaggle x Google",
          "Architecture RAG ancrée médicalement avec citations précises",
          "Évaluation multilingue avec gestion native de l'arabe RTL et du français",
        ],
        viewCode: "Code du Projet",
        winnersBtn: "Tableau des Gagnants",
        notebookBtn: "Notebook Kaggle",
        blogBtn: "Article Medium",
        videoBtn: "Démo Vidéo",
        initiativeText: "Initiative IA Kaggle x Google",
      },
    },
    experience: {
      badge: "Parcours Professionnel",
      title: "Expérience Technique & Métier",
      subtitle: "Alliance du développement moderne et de plus de 12 ans de rigueur juridique et opérationnelle.",
      items: [
        {
          company: "DizzitUp",
          role: "Développeuse Full-Stack",
          period: "Janvier 2026 - Présent",
          location: "Oran, Algérie (Télétravail)",
          type: "Temps partiel / Contributrice Cœur",
          description:
            "Développement d'une plateforme fintech et e-commerce couvrant 54 pays africains, traitant paiements en temps réel et services numériques.",
          highlights: [
            "Développement d'interfaces Next.js réactives et de services backend Node.js / Express résilients.",
            "Conception des schémas Supabase PostgreSQL, application des politiques de sécurité RLS et optimisation Prisma.",
            "Architecture du système de recherche universelle pour les marchands, bons de services et cartes cadeaux.",
            "Contribution aux flux de transactions crypto/stablecoins sur DZYwallet et réconciliation comptable.",
            "Direction de l'internationalisation incluant français, anglais, arabe RTL, amharique et portugais.",
          ],
          skills: ["Next.js", "React", "Node.js", "Express", "Supabase", "PostgreSQL", "Prisma", "Fintech", "Web3"],
        },
        {
          company: "DizzitUp (via Virtual Internships)",
          role: "Stagiaire en Ingénierie Logicielle",
          period: "Septembre 2025 - Janvier 2026",
          location: "Télétravail",
          type: "262 heures complétées - Embauchée comme Développeuse",
          description:
            "Sélectionnée pour un stage compétitif Virtual Internships chez DizzitUp. Réalisation de 262 heures d'ingénierie concrète avec évaluations remarquables, débouchant sur une embauche.",
          highlights: [
            "Conception architecturale pour l'historique des transactions et la cohérence d'état multi-services.",
            "Collaboration en sprints agiles avec revue de code rigoureuse et pipelines CI/CD.",
            "Évaluation maximale (7.0/7.0 en Technologies, Carrière et Maîtrise Globale) par le jury universitaire.",
          ],
          skills: ["Software Architecture", "Team Collaboration", "Agile Sprints", "Git", "E-commerce"],
        },
        {
          company: "Office Public Notarial",
          role: "Assistante Juridique & Notariale & Administratrice IT",
          period: "Septembre 2013 - Juillet 2026",
          location: "Oran, Algérie",
          type: "Temps plein (12+ ans)",
          description:
            "Gestion de la rédaction d'actes juridiques, conformité des transactions immobilières, relations clients et administration complète du parc informatique de l'étude.",
          highlights: [
            "Rédaction et audit de centaines d'actes authentiques, baux commerciaux et conventions notariales.",
            "Administration de l'infrastructure informatique de l'étude, réseaux locaux, sauvegardes et sécurité.",
            "Coordination des bilans comptables, déclarations fiscales et formalités réglementaires.",
            "Rigueur juridique appliquée à l'intégrité des données, aux pistes d'audit et à la conformité.",
          ],
          skills: ["Legal Contract Drafting", "Regulatory Compliance", "IT Infrastructure", "Accounting", "Data Integrity"],
        },
      ],
    },
    education: {
      badge: "Formation Académique",
      title: "Diplômes & Titres Universitaires",
      subtitle: "Fondations rigoureuses en informatique, génie logiciel et sciences économiques.",
      diplomaBtn: "Diplôme Officiel",
      transcriptBtn: "Relevé de Notes Officiel",
      items: [
        {
          institution: "University of the People",
          degree: "Associate of Science en Informatique",
          period: "Septembre 2022 - Diplômée le 14 janvier 2026",
          location: "Pasadena, Californie, USA (Accréditation WASC)",
          grade: "Moyenne 3.97 / 4.00",
          honor: "Haute Mention d'Excellence",
          description:
            "Cursus académique rigoureux en informatique accrédité aux États-Unis par la commission WASC. Diplômée avec mention d'excellence.",
          highlights: [
            "Matières fondamentales : Algorithmique, Programmation Java & Python, Bases de données SQL, Systèmes d'exploitation, Génie logiciel, Réseaux, Statistiques, Économie appliquée.",
            "Obtention des notes maximales A / A+ sur l'ensemble des modules informatiques.",
            "Remise officielle du diplôme le 14 janvier 2026 avec les félicitations du président.",
          ],
          credentialUrl: "/certificates/Assia_Benkedia_Graduation_Document.pdf",
        },
        {
          institution: "Université d'Oran",
          degree: "Licence (Bac+3) en Sciences Économiques, Banque & Assurances",
          period: "Septembre 2009 - Juin 2011",
          location: "Oran, Algérie",
          grade: "Bac + 3",
          description:
            "Spécialisation dans les opérations bancaires, marchés financiers, modélisation des risques et régulation des assurances. Base quantitative solide pour la fintech.",
          highlights: [
            "Étude de l'économie monétaire, des mécanismes bancaires et de la gestion comptable.",
            "Socle fondamental pour l'architecture des systèmes de paiement et de la fintech.",
          ],
        },
      ],
    },
    credentials: {
      badge: "Titres & Validations Professionnelles",
      title: "Certifications Vérifiées",
      subtitle: "Diplômes professionnels en analyse de données, ingénierie réseaux Cisco et technologies frontend.",
      all: "Toutes",
      aiMl: "IA & ML",
      softwareCloud: "Logiciel & Cloud",
      networkingIt: "Réseaux & IT",
      viewDoc: "Voir le Document",
      verify: "Vérifier le Titre",
      verifiedFallback: "Titre Vérifié",
      items: [
        {
          name: "Médaillée d'Argent Kaggle - Défi Deep Past",
          issuer: "Kaggle (Décerné par Will Cukierski, Directeur des Compétitions)",
          date: "24 Mars 2026",
          credentialId: "Rang 33 / 2 674 Équipes",
          assetPath: "/certificates/Assia_Benkedia_Deep_Past_Challenge.png",
          category: "AI & ML",
          categoryLabel: "IA & ML",
        },
        {
          name: "Mention d'Honneur Google Gen AI Intensive Capstone (OncoAssist)",
          issuer: "Google DeepMind x Kaggle",
          date: "Avril 2025",
          credentialId: "Mention d'Honneur · Top Projets sur 280 000+ Participants",
          verifyUrl: "https://www.kaggle.com/competitions/gen-ai-intensive-course-capstone-2025q1/discussion/575927",
          category: "AI & ML",
          categoryLabel: "IA & ML",
        },
        {
          name: "Certificat de Fin de Stage Virtual Internships (262 Heures)",
          issuer: "Virtual Internships / DizzitUp",
          date: "9 Janvier 2026",
          credentialId: "Directrice Académique Jillian Low",
          assetPath: "/certificates/Assia_Benkedia_DizzitUp_Internship_Certificate.pdf",
          category: "Software & Cloud",
          categoryLabel: "Logiciel & Cloud",
        },
        {
          name: "Simulation Professionnelle en Analyse de Données",
          issuer: "Deloitte Australie (via Forage)",
          date: "16 Mars 2025",
          credentialId: "f6aeBZxu3nkENERAF",
          assetPath: "/certificates/Deloitte_Data_Analytics_Certificate.pdf",
          category: "Software & Cloud",
          categoryLabel: "Logiciel & Cloud",
        },
        {
          name: "CCNA Routing and Switching : Connexion des Réseaux",
          issuer: "Cisco Networking Academy",
          date: "29 Juin 2018",
          credentialId: "385129f3-bac3-4728-9f76-507549422599",
          assetPath: "/certificates/CCNA_Connecting_Networks.pdf",
          category: "Networking & IT",
          categoryLabel: "Réseaux & IT",
        },
        {
          name: "CCNA Routing and Switching : Évolution des Réseaux",
          issuer: "Cisco Networking Academy",
          date: "01 Avril 2018",
          credentialId: "a19a3eb9-7e2f-42ac-ac5a-5ed3cb0bb1a2",
          assetPath: "/certificates/CCNA_Scaling_Networks.pdf",
          category: "Networking & IT",
          categoryLabel: "Réseaux & IT",
        },
        {
          name: "CCNA Routing and Switching : Notions de Base du Routage",
          issuer: "Cisco Networking Academy",
          date: "02 Janvier 2018",
          credentialId: "119262ff-9dc3-4230-95ef-d235126b3838",
          assetPath: "/certificates/CCNA_Routing_Switching.pdf",
          category: "Networking & IT",
          categoryLabel: "Réseaux & IT",
        },
        {
          name: "CCNA Routing and Switching : Introduction aux Réseaux",
          issuer: "Cisco Networking Academy",
          date: "10 Juillet 2017",
          credentialId: "338ec564-c996-4246-843b-f0a117200e73",
          assetPath: "/certificates/CCNA_Intro_Networks.pdf",
          category: "Networking & IT",
          categoryLabel: "Réseaux & IT",
        },
        {
          name: "Formation Approfondie JavaScript",
          issuer: "Codecademy",
          date: "Juillet 2023",
          verifyUrl: "https://www.codecademy.com/profiles/assia_Ben/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
          assetPath: "/certificates/codecademy_javascript.png",
          category: "Software & Cloud",
          categoryLabel: "Logiciel & Cloud",
        },
        {
          name: "Formation Approfondie CSS",
          issuer: "Codecademy",
          date: "Juillet 2023",
          verifyUrl: "https://www.codecademy.com/profiles/assia_Ben/certificates/9a5bb1fc45b4281af1fffec93b0aaf05",
          assetPath: "/certificates/codecademy_css.png",
          category: "Software & Cloud",
          categoryLabel: "Logiciel & Cloud",
        },
        {
          name: "Formation Approfondie HTML",
          issuer: "Codecademy",
          date: "Juillet 2023",
          verifyUrl: "https://www.codecademy.com/profiles/assia_Ben/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
          assetPath: "/certificates/codecademy_html.png",
          category: "Software & Cloud",
          categoryLabel: "Logiciel & Cloud",
        },
      ],
    },
    skills: {
      badge: "Compétences Techniques",
      title: "Expertise Technologique",
      subtitle: "Maîtrise transversale de l'ingénierie mobile, de l'intelligence artificielle agentique, de la fintech et de l'administration système.",
      categories: [
        {
          name: "Ingénierie Mobile & Frontend",
          skills: [
            "React Native & Expo (iOS / Android)",
            "Émulateur Android & Débogage Natif",
            "Design UI/UX Mobile & Prototypage",
            "Next.js 15 & React 19",
            "TypeScript & JavaScript Moderne",
            "Tailwind CSS & Framer Motion",
            "Architecture Multilingue avec Support RTL (Arabe)",
            "Authentification Sociale (Apple, Google, Meta)",
          ],
        },
        {
          name: "IA & Machine Learning",
          skills: [
            "Développement d'Agents IA Autonomes",
            "Model Context Protocol (FastMCP)",
            "Grands Modèles de Langage (LLM)",
            "API Google Gemini",
            "RAG & Recherche Vectorielle Sémantique",
            "Fine-Tuning de Transformers T5",
            "ChromaDB & BigQuery AI",
            "PyTorch & Hugging Face",
          ],
        },
        {
          name: "Fintech, Web3 & Paiements",
          skills: [
            "Paiements par Cartes Bancaires",
            "Liens de Paiement Automatisés & Facturation",
            "Passerelles Régionales Mobile Money",
            "Règlements Crypto & Flux DZYwallet",
            "Solidity & Smart Contracts EVM",
            "Protocoles de Séquestre Décentralisés",
            "12+ Ans de Rigueur Juridique & Notariale",
            "Conformité & Pistes d'Audit Financier",
          ],
        },
        {
          name: "Backend, DevOps & Cloud",
          skills: [
            "Node.js, Express & Python Flask",
            "Supabase PostgreSQL & Sécurité RLS",
            "Serveurs SMTP Personnalisés Supabase",
            "Prisma ORM en Production",
            "PaaS Auto-Hébergé Coolify",
            "Administration Serveurs Linux (SSH)",
            "Gestion de VPS Hostinger",
            "Google Tag Manager, Analytics & Google Ads",
            "Meta Pixel & WhatsApp Business API",
            "Distribution Transactionnelle d'Emails & SMS",
          ],
        },
      ],
    },
    contact: {
      badge: "Collaborons Ensemble",
      title: "Intéressé par une collaboration sur des applications mobiles, agents IA ou plateformes fintech ?",
      desc: "Je suis disponible pour des postes à fort impact, des missions d'architecture mobile et IA agentique, du conseil et des projets fintech.",
      sendEmail: "Envoyer un Email",
      detailsTitle: "Coordonnées Directes",
      emailLabel: "Email Professionnel",
      phoneLabel: "Téléphone / WhatsApp",
      locationLabel: "Localisation & Disponibilité",
      responseTime: "Délai de réponse : Généralement sous 24h. Bilingue français, anglais et arabe.",
      copyTooltip: "Copier l'adresse email",
      copiedTooltip: "Copié !",
      kaggleProfileLabel: "Profil Kaggle (@assiaben)",
      linkedinProfileLabel: "Profil LinkedIn",
      githubProfileLabel: "Profil GitHub (@tuba89)",
    },
    theme: {
      light: "Clair",
      dark: "Sombre",
      toggleTitleLight: "Passer au mode clair",
      toggleTitleDark: "Passer au mode sombre",
    },
    footer: {
      rights: "Développeuse Full-Stack & Mobile - Oran, Algérie - © 2026 Tous droits réservés.",
      backToTop: "Haut de page",
    },
  },

  ar: {
    personal: {
      name: "بن كدية اسيا",
      title: "مطورة أنظمة متكاملة وتطبيقات هواتف وذكاء اصطناعي",
      roleSubtitle: "مهندسة برمجيات وتطبيقات هواتف",
      specialization: "تطوير تطبيقات الهواتف والويب · وكلاء الذكاء الاصطناعي المستقلين · التقنية المالية وعقود EVM",
      location: "وهران، الجزائر (متاحة للعمل عن بعد والانتقال عالمياً)",
      email: "assiapro.ai@gmail.com",
      phone: "+213 783 60 05 83",
      summary:
        "خريجة علوم حاسوب بمرتبة الشرف العالية (معدل 3.97 من 4.00) ومطورة متخصصة في وكلاء الذكاء الاصطناعي المستقلين، تطبيقات الهواتف الذكية، الأنظمة المالية في بيئات الإنتاج، وعقود EVM الذكية. أساهم حالياً في بناء وتطوير منصة DizzitUp التي تخدم 54 دولة أفريقية. حاصلة على ميدالية فضية في Kaggle (المركز 33 من بين 2,674 فريقاً) وتنويه شرفي في برنامج Google Gen AI المكثف. تجمع بين التمكن التقني الكامل (React Native Expo، و Next.js، و Node.js، و Prisma، و Coolify، وإدارة خوادم Linux VPS) وأكثر من 12 عاماً من الانضباط القانوني والإداري الصارم.",
      stats: {
        kaggle: { value: "المركز 33 / 2,674", label: "الترتيب العالمي في Kaggle", note: "ميدالية فضية (أفضل 1.2%)" },
        uopeople: { value: "المعدل 3.97 / 4.00", label: "مرتبة الشرف الأكاديمية", note: "خريجة بمرتبة الشرف العالية" },
        fintech: { value: "54 دولة", label: "النطاق المالي", note: "منصة وسوق DizzitUp" },
        genai: { value: "تنويه شرفي", label: "مشروع الذكاء الاصطناعي", note: "ضمن أفضل 100 من 280,000+" },
      },
    },
    nav: {
      projects: "المشاريع",
      honors: "الإنجازات",
      experience: "الخبرات",
      education: "التعليم",
      credentials: "الشهادات",
      contact: "تواصل",
      resume: "السيرة الذاتية",
      downloadPdf: "تحميل السيرة الذاتية (PDF)",
    },
    hero: {
      statusBadge: "متاحة لمشاريع وتطوير الواجهات والأنظمة والذكاء الاصطناعي",
      headlineStart: "هندسة ",
      headlineAccent: "وكلاء الذكاء الاصطناعي المستقلين",
      headlineEnd: "، وتطبيقات الهواتف، والمنظومات المالية المتقدمة.",
      bio: "أنا بن كدية اسيا، مطورة أنظمة متكاملة وتطبيقات هواتف متخصصة في وكلاء الذكاء الاصطناعي، تطبيقات React Native، وبوابات الدفع الإلكتروني. أساهم حالياً في منصة DizzitUp التي تغطي 54 دولة أفريقية.",
      kaggleBadge: "ميدالية فضية في Kaggle (المركز 33 من 2,674)",
      uopeopleBadge: "خريجة بمرتبة الشرف العالية (معدل 3.97)",
      fintechBadge: "منظومات مالية (54 دولة أفريقية)",
      mobileBadge: "تطبيقات React Native و Expo",
      exploreBtn: "استكشاف المشاريع البارزة",
      downloadCvBtn: "تحميل السيرة الذاتية المعتمدة",
      contactBtn: "تواصل معي",
      techStripBadge: "التقنيات الأساسية",
      techStripTitle: "التقنيات والأدوات المستخدمة يومياً :",
    },
    projects: {
      badge: "الأعمال البارزة",
      title: "دراسات المشاريع الواقعية",
      subtitle: "منصات إنتاجية حية، تطبيقات هواتف، وأنظمة وكلاء ذكاء اصطناعي منجزة بنتائج ملموسة ومثبتة.",
      allRepos: "جميع المستودعات على GitHub",
      codeBtn: "الكود المصدري",
      liveBtn: "الموقع المباشر",
      writeupBtn: "تقرير الحل الهندسي",
      notebookBtn: "دفتر Kaggle",
      blogBtn: "المقال التقني",
      videoBtn: "فيديو توضيحي",
      privateRepoBadge: "مستودع شركة خاص",
      deliverablesTitle: "أبرز المخرجات والحلول الهندسية",
      archProfile: "الخصائص الهندسية",
      stackTitle: "التقنيات المستخدمة",
    },
    featuredProjects: [
      {
        id: "dizzitup",
        title: "DizzitUp",
        subtitle: "منظومة التقنية المالية وسوق التجارة الإلكترونية عبر أفريقيا",
        category: "أنظمة إنتاجية",
        badge: "منصة قيد الإنتاج · 54 دولة",
        isPrivateRepo: true,
        description:
          "سوق رقمي ومنظومة مالية شاملة تغطي 54 دولة أفريقية، تتيح سداد فواتير الخدمات العامة، شراء بطاقات الهدايا الرقمية، والتسويات المالية عبر المحافظ وعملات الكريبتو.",
        longDescription:
          "مساهمة هندسية فعالة في تطوير المنظومة الأساسية لمنصة DizzitUp: بناء واجهات تفاعلية متعددة اللغات، تطوير واجهات برمجة تطبيقات Node.js/Express عالية التوسع، تصميم قواعد بيانات Supabase PostgreSQL بسياسات أمان صارمة (RLS)، ومحرك بحث موحد.",
        role: "مطورة أنظمة متكاملة (مساهمة أساسية)",
        impact: [
          "تطوير محرك بحث موحد متكامل لفهرسة آلاف المنتجات وبطاقات الهدايا وخدمات المرافق عبر مختلف الدول والمسارات الأفريقية.",
          "بناء لوحات تحكم إدارية داخلية لإدارة هياكل الرسوم المالية، سجلات المعاملات الفورية، والرقابة التشغيلية.",
          "دعم وتكامل مدفوعات Mobile Money ومعاملات العملات الرقمية المستقرة عبر محفظة DZYwallet.",
          "تطبيق الدعم الكامل للغات المتعددة مع التوافق التام مع اتجاه RTL من اليمين لليسار (العربية، الفرنسية، الإنجليزية، البرتغالية، الأمهرية).",
        ],
        tags: ["Next.js", "React", "Node.js", "Express", "Supabase", "PostgreSQL", "Prisma", "Web3", "TailwindCSS"],
        liveUrl: "https://dizzitup.com",
        featured: true,
        metrics: [
          { label: "المسارات المغطاة", value: "54 دولة أفريقية" },
          { label: "المعمارية التقنية", value: "Next.js + Supabase + Prisma" },
          { label: "بوابات الدفع", value: "Mobile Money والعملات الرقمية" },
        ],
      },
      {
        id: "cross-platform-mobile-marketplace",
        title: "حزمة تطبيقات الهواتف الذكية وسوق التجارة المتكامل",
        subtitle: "تطبيقات React Native (Expo)، بوابات الدفع الإلكتروني وبنية سحابية ذاتية الاستضافة",
        category: "تطبيقات هواتف وأنظمة ويب",
        badge: "تطبيقات iOS و Android + بنية تحتية سحابية",
        isPrivateRepo: true,
        description:
          "معمارية شاملة للتجارة الرقمية تضم تطبيقات أصيلة لنظامي iOS و Android، روابط دفع فورية، فواتير إلكترونية، معالجة البطاقات المصرفية و Mobile Money مع استضافة كاملة على خوادم VPS.",
        longDescription:
          "هندسة كاملة لدورة حياة التطبيقات بدءاً من تصميم تجربة المستخدم حتى إطلاق حزم الهواتف الذكية وإدارة خوادم الإنتاج. تطوير تطبيقات هواتف أصيلة باستخدام React Native و Expo مع الاختبار عبر محاكي Android Emulator. بناء مسار دفع متكامل يشمل روابط الدفع، الفواتير الآلية، معالجة البطاقات المصرفية، وخدمات الدفع الإقليمية. إعداد المصادقة الاجتماعية المتقدمة (Apple و Google و Meta) مع خوادم Supabase SMTP المخصصة. نشر المنظومة باستخدام Prisma ORM على بيئة Coolify السحابية الذاتية وخوادم Linux VPS مدارة.",
        role: "مهندسة معمارية رئيسية لتطبيقات الهواتف والأنظمة المتكاملة",
        impact: [
          "بناء تطبيقات هواتف ذكية لأنظمة iOS و Android باستخدام React Native و Expo بأداء فائق وتصاميم متجاوبة تماماً.",
          "إنشاء مسارات دفع مؤتمتة: روابط دفع سريعة، إصدار فواتير PDF فورية، الدفع بالبطاقات المصرفية، وخدمات Mobile Money الإقليمية.",
          "تهيئة المصادقة الاجتماعية متعددة المزودين (تسجيل الدخول عبر Apple و Google و Meta/Facebook) وإعداد بريد Supabase SMTP الاحترافي.",
          "ربط أنظمة التنبيهات والإشعارات التفاعلية: رسائل SMS النصية وحملات البريد الإلكتروني الآلية.",
          "ضبط وتتبع تحليلات الأعمال المتقدمة: Google Tag Manager، و Google Analytics، وتتبع إعلانات Google Ads، و Meta Pixel، و WhatsApp Business API.",
          "إدارة وتأمين الخوادم الإنتاجية: إدارة خوادم Linux عبر بروتوكول SSH، استضافة Hostinger VPS، واستخدام Prisma ORM في بيئة الإنتاج على Coolify.",
        ],
        tags: ["React Native", "Expo", "iOS & Android", "TypeScript", "Prisma", "Coolify", "Linux VPS", "Payment Links", "Social Auth"],
        featured: true,
        metrics: [
          { label: "المنصات المدعومة", value: "تطبيقات iOS و Android (Expo) والويب" },
          { label: "وسائل الدفع", value: "بطاقات بنكية، روابط دفع، فواتير، Mobile Money" },
          { label: "هندسة العمليات DevOps", value: "منصة Coolify، خوادم Hostinger VPS، إدارة Linux SSH" },
        ],
      },
      {
        id: "livora",
        title: "LIVORA",
        subtitle: "نظام وكلاء ذكاء اصطناعي متعدد مستقل (JARVIS للأمهات العاملات)",
        category: "ذكاء اصطناعي ووكلاء",
        badge: "نظام وكلاء ذكاء اصطناعي مفتوح المصدر",
        description:
          "مساعد ذكي يعتمد على وكلاء مستقلين لتنسيق الجداول الأسرية، مهام المنزل، وتحقيق التوازن بين العمل والحياة باستخدام FastMCP والذاكرة الديناميكية والتفاعل الصوتي.",
        longDescription:
          "يجمع LIVORA بين وكلاء مستقلين متخصصين (وكيل المواعيد، مفوض المهام، مخزون المنزل والمساعد الصوتي) لتخفيف العبء الذهني عن الأولياء العاملين. صُمم باستخدام أدوات بروتوكول سياق النماذج (MCP) والذاكرة الحوارية طويلة الأمد.",
        role: "المطورة والمهندسة المعمارية للنظام",
        impact: [
          "تصميم معمارية تعاون بين وكلاء مستقلين متعددين لتنسيق المهام والمواعيد المعقدة.",
          "دمج خادم FastMCP لاستدعاء الأدوات المحلية والخدمات الخارجية بسلاسة فائقة.",
          "تطبيق ذاكرة سياقية طويلة الأمد لحفظ الروتين اليومي والتفضيلات الأسرية.",
          "بناء واجهة مستخدم تفاعلية متجاوبة تدعم التوليف الصوتي والتفاعل السمعي الكامل.",
        ],
        tags: ["React", "AI Agents", "FastMCP", "Multi-Agent Systems", "Voice AI", "LLM Memory", "TypeScript"],
        githubUrl: "https://github.com/tuba89/livora",
        writeupUrl: "https://www.kaggle.com/competitions/vibecoding-agents-capstone-project/writeups/new-writeup-1783122930771",
        featured: true,
        metrics: [
          { label: "النمط الهندسي", value: "تنسيق وكلاء متعددين (Multi-Agent)" },
          { label: "البروتوكول", value: "بروتوكول سياق النماذج (FastMCP)" },
          { label: "القدرات", value: "تفاعل صوتي + ذاكرة سياقية + جدولة مواعيد" },
        ],
      },
      {
        id: "deep-past-challenge",
        title: "تحدي Deep Past: ترجمة اللغة الأكادية",
        subtitle: "ميدالية فضية في Kaggle · المركز 33 من بين 2,674 فريقاً دولياً",
        category: "Kaggle وتعلم الآلة",
        badge: "ميدالية فضية في Kaggle (المركز 33 / 2,674)",
        description:
          "تدريب وضبط نماذج المحولات Transformer لترجمة النقوش المسمارية الأكادية القديمة المجزأة مباشرة إلى اللغة الإنجليزية الحديثة.",
        longDescription:
          "الحصول على ميدالية فضية في Kaggle (تاريخ إصدار الشهادة 24 مارس 2026). التعاون ضمن فريق نخبوي للتغلب على ندرة البيانات اللغوية والغموض الصرفي للخط المسماري، عبر الضبط الدقيق لنماذج T5 مع تقنيات تعزيز البيانات الموجهة تحت قيود معالجة صارمة.",
        role: "مهندسة معالجة لغات طبيعية وتعلم آلة",
        impact: [
          "تحقيق المركز 33 من بين 2,674 فريقاً دولياً، والتصنيف ضمن أفضل 1.2% على مستوى العالم.",
          "هندسة خطوط معالجة أولية للتعامل مع الفجوات والنقوش المسمارية المكسورة والتحولات الدلالية القديمة.",
          "الضبط الدقيق لمعمارية T5 لتوليد النصوص، والتفوق على النماذج المرجعية في معياري BLEU و chrF.",
          "المشاركة في صياغة الاستراتيجية التنافسية وحلقات التحقق من التقديمات الرسمية.",
        ],
        tags: ["Python", "PyTorch", "Hugging Face", "T5 Transformers", "NLP", "Machine Translation", "Kaggle"],
        writeupUrl: "https://www.kaggle.com/competitions/deep-past-initiative-machine-translation/writeups/32nd-byt5-base-fine-tuning-no-llms-no-synthet#3443570",
        liveUrl: "https://www.kaggle.com/competitions/deep-past-initiative-machine-translation/leaderboard",
        featured: true,
        metrics: [
          { label: "الترتيب الدولي", value: "أفضل 1.2% عالمياً (ميدالية فضية)" },
          { label: "المشاركون", value: "2,674 فريقاً دولياً" },
          { label: "معمارية النماذج", value: "نماذج T5 مدربة لمهام Sequence-to-Sequence" },
        ],
      },
      {
        id: "evm-smart-contracts",
        title: "عقود EVM الذكية وأنظمة التسوية اللامركزية",
        subtitle: "بروتوكولات Solidity، عقود التوكن وحسابات الضمان متعدّدة السلاسل",
        category: "Web3 والسحابيات",
        badge: "عقود EVM الذكية وتسويات مالية",
        description:
          "تصميم ونشر عقود ذكية متوافقة مع آلة إيثريوم الافتراضية (EVM) لإدارة العملات الرقمية، حسابات الضمان الآلي، وعمليات التحقق اللامركزي.",
        longDescription:
          "هندسة منطق برمجي آمن على الشبكة متوافق مع معايير العقود القياسية (ERC-20 وآليات خزائن الضمان) مع مراعاة أفضل ممارسات الأمان وتوفير استهلاك الغاز ومجموعات اختبار شاملة. ربط تفاعلات العقود مع واجهات Next.js عبر مكتبات Web3 وتوقيعات المحافظ.",
        role: "مطورة عقود ذكية وتقنيات Web3",
        impact: [
          "برمجة عقود ذكية بلغة Solidity نظيفة وعالية الكفاءة وموفرة لرسوم الغاز لشبكات EVM.",
          "تطبيق منطق حسابات الضمان (Escrow) متعدد الأطراف للإفراج البرمجي عن الأموال وفق إنجاز مراحل محددة.",
          "ربط واجهات التطبيقات اللامركزية dApp مع اتصال المحافظ الرقمية ومعالجة أحداث الشبكة.",
        ],
        tags: ["Solidity", "EVM Chains", "Web3", "Smart Contracts", "Escrow", "TypeScript", "Next.js"],
        featured: true,
        metrics: [
          { label: "المنظومة", value: "سلاسل EVM (Ethereum, Polygon, BNB)" },
          { label: "المعايير", value: "عقود التوكن وحسابات الضمان (Escrow)" },
          { label: "التكامل", value: "ربط واجهات dApp مع محافظ Web3" },
        ],
      },
      {
        id: "researchforge-ai",
        title: "ResearchForge-AI",
        subtitle: "محرك لتسريع البحوث الأكاديمية وصياغة مقترحات المشاريع آلياً",
        category: "ذكاء اصطناعي ووكلاء",
        badge: "مدعوم بنماذج Google Gemini",
        description:
          "منصة ذكية مدعومة بنماذج Google Gemini للبحث في الأوراق العلمية، وتلخيص الدراسات السابقة، وصياغة مقترحات المنح، والتوفيق بين الباحثين.",
        longDescription:
          "هندسة منصة أعمال ذكية تحل مشكلة البداية الصعبة في الأبحاث العلمية. تستقبل الأسئلة البحثية، وتبحث في الفهارس الأكاديمية عبر وكلاء متعددين، وتنشئ مصفوفات أدبيات منظمة، وتصيغ مقترحات مشاريع علمية متكاملة في دقائق.",
        role: "مطورة ذكاء اصطناعي وأنظمة متكاملة",
        impact: [
          "دمج نماذج Google Gemini LLM لتحليل الأوراق العلمية متعدد المراحل والصياغة التنفيذية المركزة.",
          "هندسة مسارات صياغة ذكية تنتج منهجيات بحثية منظمة ومراجعات أدبيات ومقترحات منح متكاملة.",
          "بناء خلفية برمجية نقية باستخدام Flask و Python مع موجهات وكلاء نمطية.",
        ],
        tags: ["Python", "Flask", "Google Gemini", "Multi-Agent Systems", "Academic RAG", "Machine Learning"],
        githubUrl: "https://github.com/tuba89/ResearchForge-AI",
        writeupUrl: "https://www.kaggle.com/competitions/agents-intensive-capstone-project/writeups/new-writeup-1764433151428",
        featured: true,
        metrics: [
          { label: "محرك الذكاء", value: "Google Gemini Pro" },
          { label: "مسار العمل", value: "صياغة مقترحات المشاريع عبر وكلاء مستقلين" },
          { label: "الترخيص", value: "مفتوح المصدر (MIT)" },
        ],
      },
      {
        id: "oncoassist-medibridge",
        title: "OncoAssist و MediBridge-AI",
        subtitle: "تنويه شرفي في مشروع Google Gen AI المكثف ومحرك الذكاء السريري",
        category: "ذكاء اصطناعي ووكلاء",
        badge: "مشروع فائز في Capstone Gen AI · تنويه شرفي",
        description:
          "منصة ذكاء سريري ودعم لمرضى السرطان حائزة على تكريم رسمي، مدعومة بنماذج Google Gemini، وتقنية RAG على بيانات TCGA للأورام، والبحث الشعاعي، والإرشاد الشخصي.",
        longDescription:
          "حصل مشروع OncoAssist على تنويه شرفي في برنامج Google Gen AI Intensive Course Capstone (من بين أكثر من 280,000 مشارك حول العالم). يجمع بين الرفيق الذكي للتعافي من السرطان ومحرك MediBridge-AI للدعم السريري الفوري بالبحث الدلالي ومطابقة الحالات السريرية وبطاقات الرعاية الطبية الموثقة.",
        role: "المطورة والمهندسة الرئيسية للذكاء الاصطناعي",
        impact: [
          "مشروع حائز على التنويه الشرفي في Google Gen AI Intensive Capstone (ضمن أفضل المشاريع من بين 280,000+ مشارك).",
          "تطبيق البحث الشعاعي المتقدم على قواعد بيانات TCGA السريرية ومقالات الأورام عبر ChromaDB و Gemini.",
          "مستشار حواري ذكي ومتعاطف يدعم التحليل متعدد الوسائط وبطاقات الرعاية الصحية المخصصة.",
          "نشر الدفتر البرمجي الكامل على Kaggle، ومقال معمق على Medium، وفيديو توضيحي عملي.",
          "تطبيق فلاتر أمان سريرية صارمة وعرض تلقائي للمراجع والمصادر الطبية.",
        ],
        tags: ["Google Gemini", "Python", "RAG", "Vector Search", "ChromaDB", "Healthcare AI", "TCGA Dataset"],
        githubUrl: "https://github.com/tuba89/medibridge-ai",
        liveUrl: "https://www.kaggle.com/competitions/gen-ai-intensive-course-capstone-2025q1/discussion/575927",
        notebookUrl: "https://www.kaggle.com/code/assiaben/oncoassist-ai-powered-cancer-recovery-advisor",
        blogUrl: "https://medium.com/@iiiassia.beniii/oncoassist-building-an-ai-companion-for-cancer-survivors-with-gemini-and-rag-f76e9bbe8438",
        videoUrl: "https://www.youtube.com/watch?v=gKRmSPRP5NQ",
        writeupUrl: "https://www.kaggle.com/competitions/bigquery-ai-hackathon/writeups/medibridge-ai-real-time-oncology-decision-support#3287416",
        featured: true,
        metrics: [
          { label: "الجائزة والتكريم", value: "تنويه شرفي (Google Gen AI Capstone)" },
          { label: "محرك الذكاء", value: "Google Gemini 1.5 و ChromaDB RAG" },
          { label: "قاعدة المعرفة", value: "بيانات TCGA وتجارب الأورام السريرية" },
        ],
      },
    ],
    otherProjects: {
      badge: "مشاريع مفتوحة المصدر",
      title: "مشاريع وتطبيقات إضافية",
      items: [
        {
          id: "next-weather-app",
          title: "تطبيق طقس حديث بـ Next.js",
          subtitle: "معلومات الطقس اللحظية مع حركات تفاعلية",
          category: "تطبيقات هواتف وأنظمة ويب",
          description: "تطبيق طقس جاهز للإنتاج مبني باستخدام Next.js 15 و TailwindCSS و shadcn/ui و Framer Motion مع تحقق دقيق عبر Zod.",
          longDescription: "واجهة تفاعلية عالية الأداء تحتوي على حركات جوية دقيقة، ورسوم بيانية للتوقعات، وتخزين مؤقت للموقع الجغرافي، وتحقق صارم من الأنواع.",
          role: "مهندسة واجهات أمامية",
          impact: ["مسار Next.js 15 App Router", "واجهة تفاعلية بـ Framer Motion", "مخطط API آمن بـ Zod"],
          tags: ["Next.js 15", "TypeScript", "TailwindCSS", "Framer Motion", "shadcn/ui", "Zod"],
          githubUrl: "https://github.com/tuba89/next-weather-app",
          featured: false,
        },
        {
          id: "guardian-ai",
          title: "GuardianAI",
          subtitle: "حماية ذكية ضد السرقات والمضايقات",
          category: "ذكاء اصطناعي ووكلاء",
          description: "نظام آلي فوري لرصد الحوادث وإرسال التنبيهات بالاعتماد على خوارزميات الرؤية الحاسوبية.",
          longDescription: "مصمم لإرسال تنبيهات أمنية سريعة باستخدام TypeScript ولوحة تحكم تفاعلية للمستخدم.",
          role: "مهندسة أنظمة متكاملة",
          impact: ["مراقبة أمنية تعتمد على الأحداث", "معمارية برمجية بلغة TypeScript"],
          tags: ["TypeScript", "Computer Vision", "AI Safety", "React"],
          githubUrl: "https://github.com/tuba89/GuardianAI",
          writeupUrl: "https://www.kaggle.com/competitions/gemini-3/writeups/guardianai-global-safety-platform-for-device-prot",
          featured: false,
        },
        {
          id: "bloodlink",
          title: "BloodLink",
          subtitle: "شبكة طوارئ للتبرع بالدم",
          category: "تطبيقات هواتف وأنظمة ويب",
          description: "منصة ويب مجتمعية تربط المتبرعين بالدم بالطلبات الإقليمية العاجلة في مختلف المستشفيات في الجزائر.",
          longDescription: "أداة تنسيق طوارئ مجتمعية سريعة تربط المتبرعين المتطوعين باحتياجات المستشفيات والمراكز الصحية.",
          role: "مطورة Python وأنظمة متكاملة",
          impact: ["توفيق جغرافي سريع للمتبرعين", "أثر صحي مجتمعي فعال"],
          tags: ["Python", "Flask", "SQLite", "Community Tech"],
          githubUrl: "https://github.com/tuba89/BloodLink",
          featured: false,
        },
      ],
    },
    honors: {
      badge: "الجوائز والاعتمادات العالمية",
      title: "الإنجازات التنافسية والأكاديمية",
      subtitle: "تكريمات دولية عبر منافسات تعلم الآلة المرموقة والبرامج الأكاديمية المعتمدة عالمياً.",
      kaggleCard: {
        tag: "ميدالية فضية في Kaggle (أفضل 1.2%)",
        date: "مارس 2026",
        title: "تحدي Deep Past: ترجمة اللغة الأكادية إلى الإنجليزية",
        sub: "المركز 33 من بين 2,674 فريقاً دولياً",
        desc: "ميدالية فضية رسمية معتمدة من ويل كوكيرسكي، رئيس مسابقات Kaggle. تدريب وضبط نماذج T5 المحولة لفك شفرات وترجمة النصوص المسمارية القديمة بدقة فائقة.",
        viewCert: "عرض الشهادة الرسمية",
        writeupBtn: "تقرير الحل الفائز",
        verifiedText: "موثق على منصة Kaggle",
      },
      googleCard: {
        tag: "مبادرة Kaggle و Google للذكاء الاصطناعي",
        date: "أبريل 2025",
        title: "تنويه شرفي: OncoAssist",
        sub: "تم اختياره ضمن أفضل المشاريع من بين 280,000+ مشارك",
        desc: "نظام استشاري داعم لمرضى السرطان يعتمد على Gemini Pro وبحث BigQuery AI الشعاعي و ChromaDB، مع دعم كامل للغة العربية والفرنسية والإنجليزية.",
        highlights: [
          "أكثر من 280,000 مشارك حول العالم في برنامج Kaggle x Google",
          "معمارية RAG مدعومة بالمراجع السريرية والاقتباسات الطبية الموثقة",
          "تقييم دقيق متعدد اللغات مع دعم أصيل للغة العربية والفرنسية",
        ],
        viewCode: "كود المشروع",
        winnersBtn: "قائمة الفائزين الرسمية",
        notebookBtn: "دفتر Kaggle",
        blogBtn: "مقال Medium",
        videoBtn: "عرض يوتيوب",
        initiativeText: "مبادرة Kaggle x Google المشتركة للذكاء الاصطناعي",
      },
    },
    experience: {
      badge: "المسار المهني",
      title: "الخبرات الهندسية والعملية",
      subtitle: "دمج احترافي بين البرمجة الحديثة وأكثر من 12 عاماً من الدقة في المعاملات القانونية والتوثيق.",
      items: [
        {
          company: "DizzitUp",
          role: "مطورة أنظمة متكاملة",
          period: "يناير 2026 - الحالي",
          location: "وهران، الجزائر (عن بُعد)",
          type: "مساهمة أساسية / دوام جزئي",
          description:
            "تطوير منصة تقنية مالية وتجارة إلكترونية تعمل في 54 دولة أفريقية، وتتعامل مع المدفوعات اللحظية والتجارة الإلكترونية والخدمات الرقمية.",
          highlights: [
            "تطوير واجهات Next.js متجاوبة وخدمات خلفية مرنة باستخدام Node.js و Express.",
            "تصميم جداول Supabase PostgreSQL وتطبيق سياسات الأمان على مستوى السجلات (RLS) وتحسين استعلامات Prisma.",
            "هندسة محرك البحث الموحد لربط التجار، قسائم الخدمات، شحن أرصدة الهواتف، وبطاقات الهدايا.",
            "المساهمة في دورات المعاملات عبر DZYwallet للعملات الرقمية، التسويات المالية، ومطابقة السجلات.",
            "قيادة أعمال التعريب والدعم متعدد اللغات بما فيها العربية (RTL)، والفرنسية، والإنجليزية، والأمهرية، والبرتغالية.",
          ],
          skills: ["Next.js", "React", "Node.js", "Express", "Supabase", "PostgreSQL", "Prisma", "Fintech", "Web3"],
        },
        {
          company: "DizzitUp (عبر Virtual Internships)",
          role: "متدربة في هندسة البرمجيات",
          period: "سبتمبر 2025 - يناير 2026",
          location: "عن بُعد",
          type: "إتمام 262 ساعة تدريبية - التعيين كمطورة دائمة",
          description:
            "تم اختياري في برنامج التدريب التنافسي Virtual Internships في DizzitUp. أكملت 262 ساعة من الهندسة البرمجية الفعلية بتقييمات استثنائية أدت مباشرة لتعييني في دور مطورة برمجيات.",
          highlights: [
            "المساهمة في تصاميم معمارية لسجلات المعاملات وضمان اتساق الحالة بين الخدمات المختلفة.",
            "التعاون في دورات برمجية مرنة (Agile Sprints) والالتزام الصارم بمراجعات الكود ومعايير CI/CD.",
            "الحصول على أعلى تقييم جامعي (7.0 / 7.0 في التكنولوجيا، والتطوير المهني، والطلاقة العالمية).",
          ],
          skills: ["Software Architecture", "Team Collaboration", "Agile Sprints", "Git", "E-commerce"],
        },
        {
          company: "مكتب التوثيق العمومي (Office Public Notarial)",
          role: "مساعدة قانونية وتوثيقية ومسؤولة تقنية المعلومات",
          period: "سبتمبر 2013 - يوليو 2026",
          location: "وهران، الجزائر",
          type: "دوام كامل (أكثر من 12 عاماً)",
          description:
            "إدارة صياغة العقود القانونية، الامتثال للمعاملات العقارية، خدمة المتعاملين، وإدارة كامل البنية التحتية لتقنية المعلومات بالمكتب. اكتساب خبرة قانونية وتنظيمية معمقة.",
          highlights: [
            "صياغة وتدقيق مئات العقود القانونية والصفقات التجارية والمحررات التوثيقية عالية الحساسية.",
            "إدارة شبكة وأنظمة الحواسب بالمكتب، النسخ الاحتياطي، وحماية سرية وأمن البيانات.",
            "تنسيق الحسابات الدورية، الوثائق الجبائية والضريبية، والمعاملات الإدارية الرسمية.",
            "توظيف الخبرة القانونية لضمان سلامة البيانات وسجلات التدقيق المالي وإجراءات الامتثال.",
          ],
          skills: ["صياغة العقود القانونية", "الامتثال التنظيمي", "البنية التحتية التقنية", "المحاسبة المالية", "سلامة البيانات"],
        },
      ],
    },
    education: {
      badge: "المؤهلات الأكاديمية",
      title: "التعليم الجامعي المعتمد",
      subtitle: "أساس علمي رصين في علوم الحاسوب وهندسة البرمجيات والعلوم الاقتصادية والمالية.",
      diplomaBtn: "وثيقة التخرج والدبلوم",
      transcriptBtn: "كشف النقاط الرسمي",
      items: [
        {
          institution: "جامعة الناس (University of the People)",
          degree: "دبلوم مشارك في علوم الحاسوب",
          period: "سبتمبر 2022 - منح التخرج 14 يناير 2026",
          location: "باسادينا، كاليفورنيا، الولايات المتحدة (معتمدة من هيئة WASC العليا)",
          grade: "المعدل 3.97 / 4.00",
          honor: "مرتبة الشرف العالية",
          description:
            "برنامج أكاديمي معتمد في علوم الحاسوب وهندسة البرمجيات من هيئة WASC الأمريكية. تخرج بمعدل شبه كامل ومرتبة الشرف العالية.",
          highlights: [
            "المقررات الأساسية: أساسيات البرمجة، البرمجة 1 و 2 (Java و Python)، قواعد البيانات (SQL)، أنظمة الحاسوب، أنظمة التشغيل، برمجة الويب، هندسة البرمجيات، الشبكات، الإحصاء، الاقتصاد التطبيقي.",
            "الحصول على تقدير ممتاز A / A+ في كافة المقررات الحاسوبية والرياضية.",
            "منح التخرج الرسمي في 14 يناير 2026 مع إشادة وتنويه من رئيس الجامعة.",
          ],
          credentialUrl: "/certificates/Assia_Benkedia_Graduation_Document.pdf",
        },
        {
          institution: "جامعة وهران",
          degree: "ليسانس (بكالوريا + 3) في العلوم الاقتصادية، فرع بنوك وتأمينات",
          period: "سبتمبر 2009 - يونيو 2011",
          location: "وهران، الجزائر",
          grade: "بكالوريا + 3",
          description:
            "تخصص في العمليات المصرفية، الأسواق المالية، إدارة المخاطر، وقوانين التأمين. أساس رياضي واقتصادي متين لهندسة الأنظمة المالية والتقنية (Fintech).",
          highlights: [
            "دراسة الاقتصاد النقدي، آليات التمويل البنكي، التحوط من المخاطر، والمحاسبة المالية.",
            "ركيزة علمية قوية لتطوير وتصميم بوابات الدفع الإلكتروني والأنظمة المالية الرقمية.",
          ],
        },
      ],
    },
    credentials: {
      badge: "الرخص والشهادات المعتمدة",
      title: "الشهادات المهنية الموثقة",
      subtitle: "مؤهلات مهنية في تحليل البيانات الضخمة، شبكات سيسكو، وتطوير الواجهات الحديثة.",
      all: "الكل",
      aiMl: "الذكاء الاصطناعي وتعلم الآلة",
      softwareCloud: "البرمجيات والسحابيات",
      networkingIt: "الشبكات وتقنية المعلومات",
      viewDoc: "معاينة الوثيقة",
      verify: "التحقق من الشهادة",
      verifiedFallback: "شهادة معتمدة موثقة",
      items: [
        {
          name: "ميدالية فضية في Kaggle - تحدي Deep Past",
          issuer: "منصة Kaggle (معتمدة من ويل كوكيرسكي، رئيس المسابقات)",
          date: "24 مارس 2026",
          credentialId: "المركز 33 / 2,674 فريقاً",
          assetPath: "/certificates/Assia_Benkedia_Deep_Past_Challenge.png",
          category: "AI & ML",
          categoryLabel: "الذكاء الاصطناعي وتعلم الآلة",
        },
        {
          name: "تنويه شرفي في مشروع Google Gen AI المكثف (OncoAssist)",
          issuer: "Google DeepMind x Kaggle",
          date: "أبريل 2025",
          credentialId: "تنويه شرفي · ضمن أفضل المشاريع من بين 280,000+ مشارك",
          verifyUrl: "https://www.kaggle.com/competitions/gen-ai-intensive-course-capstone-2025q1/discussion/575927",
          category: "AI & ML",
          categoryLabel: "الذكاء الاصطناعي وتعلم الآلة",
        },
        {
          name: "شهادة إتمام التدريب المهني في Virtual Internships (262 ساعة)",
          issuer: "Virtual Internships / DizzitUp",
          date: "9 يناير 2026",
          credentialId: "المديرة الأكاديمية جيليان لو",
          assetPath: "/certificates/Assia_Benkedia_DizzitUp_Internship_Certificate.pdf",
          category: "Software & Cloud",
          categoryLabel: "البرمجيات والسحابيات",
        },
        {
          name: "المحاكاة الوظيفية في تحليل البيانات المتقدم",
          issuer: "شركة ديلويت أستراليا Deloitte Australia (عبر Forage)",
          date: "16 مارس 2025",
          credentialId: "f6aeBZxu3nkENERAF",
          assetPath: "/certificates/Deloitte_Data_Analytics_Certificate.pdf",
          category: "Software & Cloud",
          categoryLabel: "البرمجيات والسحابيات",
        },
        {
          name: "شهادة سيسكو CCNA : ربط الشبكات المتقدمة",
          issuer: "أكاديمية سيسكو للشبكات Cisco Networking Academy",
          date: "29 يونيو 2018",
          credentialId: "385129f3-bac3-4728-9f76-507549422599",
          assetPath: "/certificates/CCNA_Connecting_Networks.pdf",
          category: "Networking & IT",
          categoryLabel: "الشبكات وتقنية المعلومات",
        },
        {
          name: "شهادة سيسكو CCNA : توسيع الشبكات وإدارتها",
          issuer: "أكاديمية سيسكو للشبكات Cisco Networking Academy",
          date: "01 أبريل 2018",
          credentialId: "a19a3eb9-7e2f-42ac-ac5a-5ed3cb0bb1a2",
          assetPath: "/certificates/CCNA_Scaling_Networks.pdf",
          category: "Networking & IT",
          categoryLabel: "الشبكات وتقنية المعلومات",
        },
        {
          name: "شهادة سيسكو CCNA : أساسيات التوجيه والتبديل",
          issuer: "أكاديمية سيسكو للشبكات Cisco Networking Academy",
          date: "02 يناير 2018",
          credentialId: "119262ff-9dc3-4230-95ef-d235126b3838",
          assetPath: "/certificates/CCNA_Routing_Switching.pdf",
          category: "Networking & IT",
          categoryLabel: "الشبكات وتقنية المعلومات",
        },
        {
          name: "شهادة سيسكو CCNA : مدخل إلى الشبكات",
          issuer: "أكاديمية سيسكو للشبكات Cisco Networking Academy",
          date: "10 يوليو 2017",
          credentialId: "338ec564-c996-4246-843b-f0a117200e73",
          assetPath: "/certificates/CCNA_Intro_Networks.pdf",
          category: "Networking & IT",
          categoryLabel: "الشبكات وتقنية المعلومات",
        },
        {
          name: "دورة البرمجة الاحترافية بلغة JavaScript",
          issuer: "منصة كودكاديمي Codecademy",
          date: "يوليو 2023",
          verifyUrl: "https://www.codecademy.com/profiles/assia_Ben/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
          assetPath: "/certificates/codecademy_javascript.png",
          category: "Software & Cloud",
          categoryLabel: "البرمجيات والسحابيات",
        },
        {
          name: "دورة تصميم وتنسيق المواقع المتقدمة CSS",
          issuer: "منصة كودكاديمي Codecademy",
          date: "يوليو 2023",
          verifyUrl: "https://www.codecademy.com/profiles/assia_Ben/certificates/9a5bb1fc45b4281af1fffec93b0aaf05",
          assetPath: "/certificates/codecademy_css.png",
          category: "Software & Cloud",
          categoryLabel: "البرمجيات والسحابيات",
        },
        {
          name: "دورة هيكلة وتطوير الويب HTML",
          issuer: "منصة كودكاديمي Codecademy",
          date: "يوليو 2023",
          verifyUrl: "https://www.codecademy.com/profiles/assia_Ben/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
          assetPath: "/certificates/codecademy_html.png",
          category: "Software & Cloud",
          categoryLabel: "البرمجيات والسحابيات",
        },
      ],
    },
    skills: {
      badge: "المهارات والتقنيات",
      title: "الخبرات التقنية الأساسية",
      subtitle: "مزيج متكامل من تطوير تطبيقات الهواتف، وكلاء الذكاء الاصطناعي، المنظومات المالية، وإدارة الخوادم.",
      categories: [
        {
          name: "تطوير تطبيقات الهواتف والواجهات",
          skills: [
            "تطبيقات React Native و Expo لأنظمة iOS و Android",
            "محاكي Android وتصحيح الأخطاء الأصيل",
            "تصميم واجهات وتجربة مستخدم الهواتف (UI/UX)",
            "أحدث إصدارات Next.js 15 و React 19",
            "لغة TypeScript و JavaScript الحديثة",
            "تنسيق Tailwind CSS ومكتبة Framer Motion",
            "معمارية متعددة اللغات مع دعم كامل لاتجاه RTL العربي",
            "المصادقة الاجتماعية (Apple و Google و Meta)",
          ],
        },
        {
          name: "الذكاء الاصطناعي وتعلم الآلة",
          skills: [
            "تطوير وكلاء الذكاء الاصطناعي المستقلين (Agentic AI)",
            "بروتوكول سياق النماذج (FastMCP)",
            "النماذج اللغوية الكبيرة (LLMs)",
            "واجهات برمجة تطبيقات Google Gemini API",
            "تقنيات RAG والبحث الشعاعي الدلالي",
            "ضبط وتدريب نماذج المحولات T5 Transformers",
            "قواعد بيانات ChromaDB و BigQuery AI",
            "أطر العمل PyTorch و Hugging Face",
          ],
        },
        {
          name: "التقنية المالية والويب 3 وبوابات الدفع",
          skills: [
            "معالجة مدفوعات البطاقات البنكية",
            "روابط الدفع الآلية والفواتير الرقمية",
            "مسارات الدفع عبر شبكات Mobile Money الإقليمية",
            "تسويات الكريبتو ومعاملات محفظة DZYwallet",
            "برمجة عقود Solidity الذكية على شبكات EVM",
            "بروتوكولات حسابات الضمان اللامركزية (Escrow)",
            "أكثر من 12 عاماً من الدقة في المعاملات التوثيقية",
            "إجراءات الامتثال ومسارات التدقيق المالي الصارمة",
          ],
        },
        {
          name: "الواجهات الخلفية والبنية السحابية وإدارة الخوادم",
          skills: [
            "تطوير الخوادم بـ Node.js و Express و Python Flask",
            "قواعد بيانات Supabase PostgreSQL مع أمان RLS",
            "إعداد خوادم بريد Supabase SMTP المخصصة",
            "استخدام Prisma ORM في بيئات الإنتاج الحية",
            "نظام الاستضافة السحابي الذاتي Coolify PaaS",
            "إدارة خوادم Linux عبر الطرفية (SSH)",
            "إدارة خوادم Hostinger VPS السحابية",
            "إعداد Google Tag Manager و Analytics و Google Ads",
            "ربط Meta Pixel و WhatsApp Business API",
            "أنظمة الرسائل اللحظية SMS والبريد المعاملاتي",
          ],
        },
      ],
    },
    contact: {
      badge: "لنبنِ معاً",
      title: "هل ترغب في التعاون في تطبيقات الهواتف أو وكلاء الذكاء الاصطناعي أو المنظومات المالية؟",
      desc: "مستعدة للانضمام لمشاريع برمجية متقدمة، استشارات هندسة وتطوير، وحلول الذكاء الاصطناعي والتقنية المالية.",
      sendEmail: "إرسال بريد إلكتروني",
      detailsTitle: "معلومات التواصل المباشر",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف / واتساب",
      locationLabel: "الموقع ونمط العمل",
      responseTime: "وقت الاستجابة: عادة خلال 24 ساعة. إتقان تام للغات العربية والإنجليزية والفرنسية.",
      copyTooltip: "نسخ عنوان البريد الإلكتروني",
      copiedTooltip: "تم النسخ!",
      kaggleProfileLabel: "الملف الشخصي على Kaggle (@assiaben)",
      linkedinProfileLabel: "الملف الشخصي على LinkedIn",
      githubProfileLabel: "حساب GitHub (@tuba89)",
    },
    theme: {
      light: "فاتح",
      dark: "داكن",
      toggleTitleLight: "التبديل إلى الوضع الفاتح",
      toggleTitleDark: "التبديل إلى الوضع الداكن",
    },
    footer: {
      rights: "مطورة أنظمة متكاملة وتطبيقات هواتف - وهران، الجزائر - © 2026 جميع الحقوق محفوظة.",
      backToTop: "العودة للأعلى",
    },
  },
};
