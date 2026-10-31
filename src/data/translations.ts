export type Language = "en" | "fr" | "ar";

export interface Translations {
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
    stats: {
      kaggle: { label: string; note: string };
      uopeople: { label: string; note: string };
      fintech: { label: string; note: string };
      genai: { label: string; note: string };
    };
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    allRepos: string;
    codeBtn: string;
    liveBtn: string;
    deliverablesTitle: string;
    archProfile: string;
    stackTitle: string;
  };
  honors: {
    badge: string;
    title: string;
    subtitle: string;
    kaggleCard: {
      tag: string;
      title: string;
      sub: string;
      desc: string;
      viewCert: string;
    };
    googleCard: {
      tag: string;
      title: string;
      sub: string;
      desc: string;
      viewCode: string;
    };
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
  };
  education: {
    badge: string;
    title: string;
    subtitle: string;
    diplomaBtn: string;
    transcriptBtn: string;
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
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
  };
  otherProjects: {
    badge: string;
    title: string;
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
  };
  footer: {
    rights: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
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
      exploreBtn: "Explore Projects",
      downloadCvBtn: "Download CV",
      contactBtn: "Contact",
      stats: {
        kaggle: { label: "Kaggle Global Rank", note: "Silver Medal (Top 1.2%)" },
        uopeople: { label: "University Honors", note: "High Honors Graduate" },
        fintech: { label: "Fintech Reach", note: "DizzitUp Marketplace" },
        genai: { label: "Gen AI Capstone", note: "Top 100 of 280,000+" },
      },
    },
    projects: {
      badge: "Flagship Work",
      title: "Featured Case Studies",
      subtitle: "Production platforms, mobile applications, and autonomous agent architectures delivered with verifiable results.",
      allRepos: "All GitHub Repositories",
      codeBtn: "Code",
      liveBtn: "Live Site",
      deliverablesTitle: "Key Deliverables & Architectural Results",
      archProfile: "Architecture Profile",
      stackTitle: "Stack",
    },
    honors: {
      badge: "Honors & Benchmark Validations",
      title: "Competitive & Academic Honors",
      subtitle: "Recognized internationally across competitive machine learning benchmarks and accredited academic programs.",
      kaggleCard: {
        tag: "Kaggle Silver Medal (Top 1.2%)",
        title: "Deep Past Challenge: Akkadian to English",
        sub: "Placed 33rd out of 2,674 international teams",
        desc: "Awarded official Competition Silver Medal by Will Cukierski, Head of Kaggle Competitions. Fine-tuned T5 Transformer sequence-to-sequence architectures to decipher and translate damaged ancient cuneiform texts.",
        viewCert: "Full Certificate",
      },
      googleCard: {
        tag: "Google Gen AI Intensive Capstone",
        title: "Honourable Mention: OncoAssist",
        sub: "Selected among top capstones out of 280,000+ global participants",
        desc: "Built an AI cancer recovery advisor utilizing Gemini Pro, BigQuery AI vector embeddings, ChromaDB, and evidence retrieval from ClinicalTrials.gov with multilingual RTL Arabic support.",
        viewCode: "Project Code",
      },
    },
    experience: {
      badge: "Career Record",
      title: "Engineering & Domain Experience",
      subtitle: "Combining modern full-stack development with 12+ years of legal and operational rigor.",
    },
    education: {
      badge: "Academic Background",
      title: "Accredited Education & Honors",
      subtitle: "Rigorous foundation in computer science, software engineering, and financial economics.",
      diplomaBtn: "Diploma Document",
      transcriptBtn: "Official Transcript",
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
    },
    skills: {
      badge: "Technical Capabilities",
      title: "Core Technical Expertise",
      subtitle: "A specialized blend of cross-platform mobile engineering, autonomous artificial intelligence, production fintech, and server administration.",
    },
    otherProjects: {
      badge: "Open Source & Utilities",
      title: "Additional Selected Projects",
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
    },
    footer: {
      rights: "Full-Stack & Mobile Developer - Oran, Algeria - © 2026 All rights reserved.",
    },
  },

  fr: {
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
      downloadCvBtn: "Télécharger le CV",
      contactBtn: "Me Contacter",
      stats: {
        kaggle: { label: "Classement Mondial Kaggle", note: "Médaille d'Argent (Top 1.2%)" },
        uopeople: { label: "Excellence Académique", note: "Diplômée Haute Mention" },
        fintech: { label: "Couverture Fintech", note: "Plateforme DizzitUp" },
        genai: { label: "Capstone Gen AI", note: "Top 100 sur 280 000+" },
      },
    },
    projects: {
      badge: "Projets Phares",
      title: "Études de Cas Réalisées",
      subtitle: "Plateformes de production, applications mobiles et architectures d'agents autonomes livrées avec impact vérifiable.",
      allRepos: "Tous les Dépôts GitHub",
      codeBtn: "Code Source",
      liveBtn: "Site en Ligne",
      deliverablesTitle: "Livrables Clés & Résultats Architecturaux",
      archProfile: "Profil Architectural",
      stackTitle: "Technologies",
    },
    honors: {
      badge: "Distinctions & Validations de Compétition",
      title: "Distinctions Compétitives & Académiques",
      subtitle: "Reconnue internationalement sur des benchmarks de machine learning compétitifs et au sein de programmes universitaires accrédités.",
      kaggleCard: {
        tag: "Médaille d'Argent Kaggle (Top 1.2%)",
        title: "Deep Past Challenge : Traduction de l'Akkadien",
        sub: "33e place sur 2 674 équipes internationales",
        desc: "Médaille d'argent officielle décernée par Will Cukierski, responsable des compétitions Kaggle. Fine-tuning de Transformers T5 pour le déchiffrement et la traduction de tablettes cunéiformes endommagées.",
        viewCert: "Certificat Complet",
      },
      googleCard: {
        tag: "Kaggle x Google Gen AI Intensive",
        title: "Mention Honorable : OncoAssist",
        sub: "Sélectionnée parmi les meilleurs projets sur 280 000+ participants",
        desc: "Assistant IA d'aide au rétablissement oncologique développé avec Gemini Pro, vector search BigQuery AI, ChromaDB et recherche clinique sur ClinicalTrials.gov avec support multilingue arabe RTL.",
        viewCode: "Code du Projet",
      },
    },
    experience: {
      badge: "Parcours Professionnel",
      title: "Expérience Technique & Métier",
      subtitle: "Alliance d'un développement full-stack moderne avec plus de 12 ans de rigueur juridique et administrative.",
    },
    education: {
      badge: "Parcours Académique",
      title: "Diplômes Accrédités & Mentions",
      subtitle: "Fondations solides en informatique théorique, génie logiciel et économie bancaire.",
      diplomaBtn: "Voir le Diplôme",
      transcriptBtn: "Relevé de Notes Officiel",
    },
    credentials: {
      badge: "Certifications & Habilitations",
      title: "Certifications Vérifiées",
      subtitle: "Qualifications industrielles en analyse de données, ingénierie réseau Cisco et développement web.",
      all: "Toutes",
      aiMl: "IA & ML",
      softwareCloud: "Logiciel & Cloud",
      networkingIt: "Réseaux & IT",
      viewDoc: "Voir le Document",
      verify: "Vérifier le Titre",
    },
    skills: {
      badge: "Compétences Techniques",
      title: "Expertise Technologique",
      subtitle: "Maîtrise transversale de l'ingénierie mobile, de l'intelligence artificielle agentique, de la fintech et de l'administration système.",
    },
    otherProjects: {
      badge: "Open Source & Utilitaires",
      title: "Autres Réalisations Sélectionnées",
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
    },
    footer: {
      rights: "Développeuse Full-Stack & Mobile - Oran, Algérie - © 2026 Tous droits réservés.",
    },
  },

  ar: {
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
      bio: "مطورة أنظمة متكاملة وتطبيقات هواتف متخصصة في وكلاء الذكاء الاصطناعي، تطبيقات React Native، وبوابات الدفع الإلكتروني. أساهم حالياً في منصة DizzitUp التي تغطي 54 دولة أفريقية.",
      kaggleBadge: "ميدالية فضية في Kaggle (المركز 33 من 2,674)",
      uopeopleBadge: "خريجة بمرتبة الشرف العالية (معدل 3.97)",
      fintechBadge: "منظومات مالية (54 دولة أفريقية)",
      mobileBadge: "تطبيقات React Native و Expo",
      exploreBtn: "استكشاف المشاريع",
      downloadCvBtn: "تحميل السيرة الذاتية",
      contactBtn: "تواصل معي",
      stats: {
        kaggle: { label: "الترتيب العالمي في Kaggle", note: "ميدالية فضية (أفضل 1.2%)" },
        uopeople: { label: "مرتبة الشرف الأكاديمية", note: "معدل 3.97 من 4.00" },
        fintech: { label: "النطاق المالي", note: "سوق DizzitUp عبر 54 دولة" },
        genai: { label: "مشروع الذكاء الاصطناعي", note: "ضمن أفضل 100 من 280,000+" },
      },
    },
    projects: {
      badge: "الأعمال البارزة",
      title: "دراسات المشاريع الواقعية",
      subtitle: "منصات إنتاجية حية، تطبيقات هواتف، وأنظمة وكلاء ذكاء اصطناعي منجزة بنتائج ملموسة ومثبتة.",
      allRepos: "جميع المستودعات على GitHub",
      codeBtn: "الكود المصدري",
      liveBtn: "الموقع المباشر",
      deliverablesTitle: "أبرز المخرجات والحلول الهندسية",
      archProfile: "الخصائص الهندسية",
      stackTitle: "التقنيات المستخدمة",
    },
    honors: {
      badge: "الجوائز والاعتمادات العالمية",
      title: "الإنجازات التنافسية والأكاديمية",
      subtitle: "تكريمات دولية عبر منافسات تعلم الآلة المرموقة والبرامج الأكاديمية المعتمدة عالمياً.",
      kaggleCard: {
        tag: "ميدالية فضية في Kaggle (أفضل 1.2%)",
        title: "تحدي Deep Past: ترجمة اللغة الأكادية إلى الإنجليزية",
        sub: "المركز 33 من بين 2,674 فريقاً دولياً",
        desc: "ميدالية فضية رسمية معتمدة من ويل كوكيرسكي، رئيس مسابقات Kaggle. تدريب وضبط نماذج T5 المحولة لفك شفرات وترجمة النصوص المسمارية القديمة بدقة فائقة.",
        viewCert: "عرض الشهادة الرسمية",
      },
      googleCard: {
        tag: "مبادرة Kaggle و Google للذكاء الاصطناعي",
        title: "تنويه شرفي: OncoAssist",
        sub: "تم اختياره ضمن أفضل المشاريع من بين 280,000+ مشارك",
        desc: "نظام استشاري داعم لمرضى السرطان يعتمد على Gemini Pro وبحث BigQuery AI الشعاعي و ChromaDB، مع دعم كامل للغة العربية والفرنسية والإنجليزية.",
        viewCode: "كود المشروع",
      },
    },
    experience: {
      badge: "المسار المهني",
      title: "الخبرات الهندسية والعملية",
      subtitle: "دمج احترافي بين البرمجة الحديثة وأكثر من 12 عاماً من الدقة في المعاملات القانونية والتوثيق.",
    },
    education: {
      badge: "المؤهلات الأكاديمية",
      title: "التعليم الجامعي المعتمد",
      subtitle: "أساس علمي رصين في علوم الحاسوب وهندسة البرمجيات والعلوم الاقتصادية والمالية.",
      diplomaBtn: "عرض وثيقة الدبلوم",
      transcriptBtn: "كشف النقاط الرسمي",
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
    },
    skills: {
      badge: "المهارات والتقنيات",
      title: "الخبرات التقنية الأساسية",
      subtitle: "مزيج متكامل من تطوير تطبيقات الهواتف، وكلاء الذكاء الاصطناعي، المنظومات المالية، وإدارة الخوادم.",
    },
    otherProjects: {
      badge: "مشاريع مفتوحة المصدر",
      title: "مشاريع وتطبيقات إضافية",
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
    },
    footer: {
      rights: "مطورة أنظمة متكاملة وتطبيقات هواتف - وهران، الجزائر - © 2026 جميع الحقوق محفوظة.",
    },
  },
};

