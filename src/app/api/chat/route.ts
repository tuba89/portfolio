import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `You are the official AI Portfolio Assistant for Assia Benkedia (بن كدية اسيا).
Your mission is to represent Assia professionally, accurately, and enthusiastically to recruiters, engineering leaders, and collaborators visiting her portfolio.

### Verified Background & Credentials:
- **Full Name**: Assia Benkedia
- **Title**: AI & Full-Stack Developer · Mobile Engineer · Autonomous AI Agent Specialist
- **Contact**: Email: assiapro.ai@gmail.com | Phone: +213 783 60 05 83
- **Location**: Oran, Algeria (Available immediately for Global Remote roles & Relocation)
- **GitHub**: https://github.com/tuba89 (tuba89)
- **Kaggle**: https://www.kaggle.com/assiaben (assiaben)
- **LinkedIn**: https://linkedin.com/in/assia-benkedia-20708195

### Major Honors, Competitions & Certificates:
1. **Kaggle Silver Medalist (Deep Past Challenge)**:
   - Ranked 33rd out of 2,674 international teams (Top 1.2% globally).
   - Trained and fine-tuned Transformer models (ByT5-base sequence-to-sequence) to translate ancient Akkadian cuneiform inscriptions directly to English.
   - Kaggle Solution Writeup: https://www.kaggle.com/competitions/deep-past-initiative-machine-translation/writeups/32nd-byt5-base-fine-tuning-no-llms-no-synthet#3443570
   - Kaggle Leaderboard: https://www.kaggle.com/competitions/deep-past-initiative-machine-translation/leaderboard

2. **Google Gen AI Intensive Capstone - Honourable Mention (OncoAssist)**:
   - Awarded Honourable Mention in the official Google Gen AI Intensive Capstone (among 280,000+ course participants worldwide).
   - OncoAssist is an AI-powered cancer recovery companion paired with MediBridge-AI for clinical decision support.
   - Architecture: Google Gemini 1.5, ChromaDB vector search, BigQuery AI, RAG over the TCGA oncology dataset, and ClinicalTrials.gov evidence retrieval with strict medical safety guardrails.
   - Official Winners Announcement: https://www.kaggle.com/competitions/gen-ai-intensive-course-capstone-2025q1/discussion/575927
   - Kaggle Notebook: https://www.kaggle.com/code/assiaben/oncoassist-ai-powered-cancer-recovery-advisor
   - Technical Article on Medium: https://medium.com/@iiiassia.beniii/oncoassist-building-an-ai-companion-for-cancer-survivors-with-gemini-and-rag-f76e9bbe8438
   - Video Demo on YouTube: https://www.youtube.com/watch?v=gKRmSPRP5NQ
   - GitHub: https://github.com/tuba89/medibridge-ai

3. **Google & Kaggle Gen AI Certificates**:
   - **5-Day AI Agents: Intensive Vibe Coding Course with Google**: Capstone project LIVORA. Officially recapped by Google on the Google Developers Blog: https://blog.google/innovation-and-ai/technology/developers-tools/ai-agents-intensive-recap/ (Certificate verified).
   - **5-Day AI Agents Intensive Course with Google**: Capstone project ResearchForge-AI (Certificate verified).
   - **5-Day Gen AI Intensive Course with Google**: Capstone project OncoAssist, awarded Honourable Mention (Certificate verified).

4. **Academic Degrees**:
   - Associate of Science in Computer Science: University of the People (Pasadena, CA, USA, accredited by WASC Senior College and University Commission). Graduated with GPA 3.97 / 4.00 (High Honors Distinction).
   - Licence (Bac+3) in Economics, Banking & Insurance: University of Oran, Algeria. Specialized in banking operations, monetary economics, risk modeling, and financial accounting.

4. **Production Engineering Experience**:
   - **DizzitUp** (Jan 2026 - Present): Core Full-Stack Developer on a production fintech & marketplace operating across 54 African countries. Developed Next.js frontends, Node.js/Express APIs, Supabase PostgreSQL schemas with Row-Level Security, universal search indexing, and crypto/stablecoin payments (DZYwallet). Note: DizzitUp's repository is private enterprise commercial IP.
   - **Cross-Platform Mobile & Web Marketplace Suite**: Architected native iOS and Android apps using React Native & Expo. Self-hosted on Coolify PaaS and Hostinger Linux VPS via SSH with Prisma ORM. Integrated payment links, dynamic PDF invoices, card processing, mobile money, and social authentication. Note: Private enterprise commercial IP.
   - **Office Public Notarial** (12+ years): Managed legal deed drafting, financial compliance, and IT network administration.

5. **Flagship Open Source & AI Projects**:
   - **LIVORA**: Autonomous Multi-Agent AI system ("JARVIS for Working Mothers"). FastMCP protocol, persistent memory, voice synthesis. GitHub: https://github.com/tuba89/livora | Hackathon Writeup: https://www.kaggle.com/competitions/vibecoding-agents-capstone-project/writeups/new-writeup-1783122930771
   - **ResearchForge-AI**: Academic research accelerator & proposal drafting engine powered by Google Gemini. GitHub: https://github.com/tuba89/ResearchForge-AI | Hackathon Writeup: https://www.kaggle.com/competitions/agents-intensive-capstone-project/writeups/new-writeup-1764433151428
   - **EVM Smart Contracts**: Gas-optimized Solidity protocols for token management, multi-chain escrow vaults, and decentralized settlement.
   - **GuardianAI**: Real-time automated safety alerting platform using computer vision heuristics. GitHub: https://github.com/tuba89/GuardianAI | Hackathon Writeup: https://www.kaggle.com/competitions/gemini-3/writeups/guardianai-global-safety-platform-for-device-prot
   - **Next.js Modern Weather App**: Animated weather intelligence with Next.js 15, Framer Motion, Tailwind, and Zod. GitHub: https://github.com/tuba89/next-weather-app
   - **BloodLink**: Emergency community blood donor coordination web app in Algeria. GitHub: https://github.com/tuba89/BloodLink

### Tone & Style Guidelines:
- Respond in the language requested or used by the user (English, French, or Arabic).
- Be crisp, polite, articulate, and technically precise.
- Format responses cleanly with markdown: bullet points, bold highlights, and relevant links when discussing projects.
- Whenever appropriate, invite the user to get in touch with Assia directly via email (assiapro.ai@gmail.com) or explore the live links in the portfolio.
`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// Fallback intelligent responder when GEMINI_API_KEY is not configured
function getLocalFallbackResponse(query: string, lang: string): string {
  const q = query.toLowerCase();

  const isFr = lang === "fr" || /bonjour|salut|qui|projet|médaille|honneur|compétence|contact/i.test(query);
  const isAr = lang === "ar" || /مرحبا|السلام|من|مشروع|ميدالية|شرف|كاجل|تعليم|تواصل/i.test(query);

  if (q.includes("kaggle") || q.includes("silver") || q.includes("argent") || q.includes("فضية") || q.includes("deep past")) {
    if (isAr) {
      return `حازت اسيا بن كدية على **الميدالية الفضية في مسابقة Kaggle Deep Past Challenge** (المركز 33 من بين 2,674 فريقاً دولياً، ضمن أفضل 1.2% عالمياً).
      
- **المهمة**: تدريب وضبط نماذج المحولات Transformer (ByT5-base) لترجمة النقوش المسمارية الأكادية القديمة إلى الإنجليزية الحديثة بدون بيانات مصطنعة أو نماذج LLM خارجية.
- [قراءة تقرير الحل الهندسي على Kaggle](https://www.kaggle.com/competitions/deep-past-initiative-machine-translation/writeups/32nd-byt5-base-fine-tuning-no-llms-no-synthet#3443570)
- [معاينة الترتيب الرسمي على لوحة صدارة Kaggle](https://www.kaggle.com/competitions/deep-past-initiative-machine-translation/leaderboard)`;
    }
    if (isFr) {
      return `Assia est **Médaillée d'Argent Kaggle** lors du *Deep Past Challenge* (classée **33e sur 2 674 équipes internationales**, dans le **Top 1.2% mondial**).

- **Défi technique** : Fine-tuning de Transformers ByT5-base pour la traduction de tablettes cunéiformes akkadiennes fragmentées vers l'anglais moderne, sans données synthétiques ni distillation d'autres LLMs.
- [Consulter le rapport technique officiel sur Kaggle](https://www.kaggle.com/competitions/deep-past-initiative-machine-translation/writeups/32nd-byt5-base-fine-tuning-no-llms-no-synthet#3443570)
- [Voir le classement officiel sur Kaggle](https://www.kaggle.com/competitions/deep-past-initiative-machine-translation/leaderboard)`;
    }
    return `Assia is a **Kaggle Silver Medalist** in the *Deep Past Challenge* (ranked **33rd out of 2,674 international teams**, placing in the **Top 1.2% globally**).

- **Core achievement**: Fine-tuned ByT5-base sequence-to-sequence Transformer architectures to translate fragmented ancient Akkadian cuneiform inscriptions directly into modern English without synthetic data or large LLM ensembles.
- [Read the Solution Writeup on Kaggle](https://www.kaggle.com/competitions/deep-past-initiative-machine-translation/writeups/32nd-byt5-base-fine-tuning-no-llms-no-synthet#3443570)
- [View the Official Leaderboard on Kaggle](https://www.kaggle.com/competitions/deep-past-initiative-machine-translation/leaderboard)`;
  }

  if (q.includes("oncoassist") || q.includes("cancer") || q.includes("medibridge") || q.includes("capstone") || q.includes("mention") || q.includes("تنويه")) {
    if (isAr) {
      return `مشروع **OncoAssist** حصل على **التنويه الشرفي (Honourable Mention)** في برنامج *Google Gen AI Intensive Capstone* الرسمي بين أكثر من 280,000 مشارك عالمياً!
      
- **المنظومة**: رفيق ذكي لمرضى السرطان للتعافي مع محرك MediBridge-AI للدعم السريري باستخدام Google Gemini 1.5، والبحث الشعاعي ChromaDB على مجموعات بيانات TCGA للأورام.
- [قائمة الفائزين الرسمية على Kaggle](https://www.kaggle.com/competitions/gen-ai-intensive-course-capstone-2025q1/discussion/575927)
- [دفتر المشروع على Kaggle Notebook](https://www.kaggle.com/code/assiaben/oncoassist-ai-powered-cancer-recovery-advisor)
- [المقال التقني المفصل على Medium](https://medium.com/@iiiassia.beniii/oncoassist-building-an-ai-companion-for-cancer-survivors-with-gemini-and-rag-f76e9bbe8438)
- [فيديو توضيحي على YouTube](https://www.youtube.com/watch?v=gKRmSPRP5NQ)`;
    }
    if (isFr) {
      return `**OncoAssist** a reçu la **Mention d'Honneur officielle** au *Google Gen AI Intensive Capstone* parmi plus de 280 000 participants mondiaux !

- **Architecture** : Conseiller IA bienveillant pour la rémission du cancer associé au moteur de support clinique MediBridge-AI, utilisant Google Gemini 1.5, la recherche vectorielle ChromaDB sur le jeu de données TCGA et l'extraction d'évidences médicales.
- [Consulter la liste officielle des gagnants sur Kaggle](https://www.kaggle.com/competitions/gen-ai-intensive-course-capstone-2025q1/discussion/575927)
- [Notebook complet sur Kaggle](https://www.kaggle.com/code/assiaben/oncoassist-ai-powered-cancer-recovery-advisor)
- [Article technique sur Medium](https://medium.com/@iiiassia.beniii/oncoassist-building-an-ai-companion-for-cancer-survivors-with-gemini-and-rag-f76e9bbe8438)
- [Démonstration vidéo sur YouTube](https://www.youtube.com/watch?v=gKRmSPRP5NQ)`;
    }
    return `**OncoAssist** was awarded an official **Honourable Mention** in the *Google Gen AI Intensive Course Capstone* among 280,000+ global participants!

- **Architecture**: A compassionate AI cancer recovery companion paired with MediBridge-AI for clinical decision support. Powered by Google Gemini 1.5, ChromaDB vector search over TCGA oncology datasets, and ClinicalTrials.gov evidence retrieval with strict medical safety guardrails.
- [Official Winners Announcement Discussion on Kaggle](https://www.kaggle.com/competitions/gen-ai-intensive-course-capstone-2025q1/discussion/575927)
- [Kaggle Notebook](https://www.kaggle.com/code/assiaben/oncoassist-ai-powered-cancer-recovery-advisor)
- [Technical Deep-Dive Article on Medium](https://medium.com/@iiiassia.beniii/oncoassist-building-an-ai-companion-for-cancer-survivors-with-gemini-and-rag-f76e9bbe8438)
- [Video Walkthrough on YouTube](https://www.youtube.com/watch?v=gKRmSPRP5NQ)`;
  }

  if (q.includes("livora") || q.includes("agent") || q.includes("mcp") || q.includes("وكيل") || q.includes("وكلاء")) {
    if (isAr) {
      return `مشروع **LIVORA** هو نظام وكلاء ذكاء اصطناعي متعدد مستقل (JARVIS للأمهات والأولياء العاملين).
      
- **المعمارية**: يعتمد على بروتوكول FastMCP وتنسيق وكلاء متخصصين (المواعيد، تفويض المهام، مخزون المنزل، المساعد الصوتي) مع ذاكرة طويلة الأمد.
- [مستودع الكود على GitHub](https://github.com/tuba89/livora)
- [تقرير المسابقة الرسمي على Kaggle](https://www.kaggle.com/competitions/vibecoding-agents-capstone-project/writeups/new-writeup-1783122930771)`;
    }
    if (isFr) {
      return `**LIVORA** est un système multi-agents IA autonome (« JARVIS pour Mères Actives »).

- **Architecture** : Intègre le protocole FastMCP, une mémoire contextuelle persistante et des sous-agents coordonnés (agenda, logistique familiale, inventaire, voix).
- [Dépôt GitHub du projet](https://github.com/tuba89/livora)
- [Rapport de projet sur Kaggle](https://www.kaggle.com/competitions/vibecoding-agents-capstone-project/writeups/new-writeup-1783122930771)`;
    }
    return `**LIVORA** is an autonomous multi-agent AI operating system ("JARVIS for Working Mothers").

- **Architecture**: Powered by the Model Context Protocol (FastMCP), persistent conversational memory, and coordinated sub-agents for schedule delegation, household inventory, and voice interaction.
- [GitHub Repository](https://github.com/tuba89/livora)
- [Hackathon Solution Writeup on Kaggle](https://www.kaggle.com/competitions/vibecoding-agents-capstone-project/writeups/new-writeup-1783122930771)`;
  }

  if (q.includes("dizzitup") || q.includes("experience") || q.includes("expérience") || q.includes("خبرة") || q.includes("work")) {
    if (isAr) {
      return `تعمل اسيا حالياً كـ **مطورة أنظمة متكاملة في DizzitUp**، وهي منصة تجارة إلكترونية وتقنية مالية تخدم 54 دولة في أفريقيا:
      
- تطوير واجهات Next.js وخدمات Node.js/Express، وتصميم جداول Supabase PostgreSQL بسياسات أمان RLS و Prisma.
- محرك بحث شامل لفهرسة آلاف المنتجات والخدمات وبطاقات الهدايا وسداد المرافق.
- تسوية المدفوعات والعملات الرقمية عبر محفظة DZYwallet.
- *ملاحظة*: كود DizzitUp هو ملكية فكرية تجارية خاصة للشركة.`;
    }
    if (isFr) {
      return `Assia contribue activement en tant que **Développeuse Full-Stack chez DizzitUp**, marketplace et fintech opérant dans 54 pays africains :

- Développement d'interfaces Next.js, APIs Node.js/Express et schémas Supabase PostgreSQL avec sécurité RLS et Prisma ORM.
- Moteur de recherche universel indexant produits, bons de services et cartes cadeaux.
- Passerelles de paiement mobile money et règlements en stablecoins via DZYwallet.
- *Remarque* : Le dépôt DizzitUp est une propriété commerciale d'entreprise privée.`;
    }
    return `Assia is a **Core Full-Stack Developer at DizzitUp**, a pan-African fintech & marketplace platform operating across 54 African countries:

- Building responsive Next.js frontends, scalable Node.js/Express backend APIs, and Supabase PostgreSQL data schemas with Row-Level Security and Prisma ORM.
- Built cross-service Universal Search indexing products, utility vouchers, mobile top-ups, and gift cards.
- Integrated telecom gateways, regional mobile money, and crypto settlement via DZYwallet.
- *Note*: DizzitUp's codebase is private enterprise commercial IP.`;
  }

  if (q.includes("contact") || q.includes("hire") || q.includes("recruter") || q.includes("email") || q.includes("تواصل") || q.includes("توظيف")) {
    if (isAr) {
      return `يسعد اسيا جداً التواصل معكم بخصوص فرص العمل والمشاريع:
      
- **البريد الإلكتروني**: [assiapro.ai@gmail.com](mailto:assiapro.ai@gmail.com)
- **الهاتف**: [\`+213 783 60 05 83\`](tel:+213783600583)
- **LinkedIn**: [الملف الشخصي على LinkedIn](https://linkedin.com/in/assia-benkedia-20708195)
- **GitHub**: [github.com/tuba89](https://github.com/tuba89)
- **الموقع الجغرافي**: وهران، الجزائر (متاحة تماماً للعمل عن بُعد وللانتقال الدولي)`;
    }
    if (isFr) {
      return `Assia est disponible pour des opportunités en ingénierie Full-Stack, Mobile et IA :

- **Email** : [assiapro.ai@gmail.com](mailto:assiapro.ai@gmail.com)
- **Téléphone** : [\`+213 783 60 05 83\`](tel:+213783600583)
- **LinkedIn** : [Profil LinkedIn](https://linkedin.com/in/assia-benkedia-20708195)
- **GitHub** : [github.com/tuba89](https://github.com/tuba89)
- **Disponibilité** : Immédiate, Télétravail mondial et mobilité internationale`;
    }
    return `Assia is actively available for Full-Stack, Mobile & AI engineering opportunities:

- **Email**: [assiapro.ai@gmail.com](mailto:assiapro.ai@gmail.com)
- **Phone**: [\`+213 783 60 05 83\`](tel:+213783600583)
- **LinkedIn**: [linkedin.com/in/assia-benkedia-20708195](https://linkedin.com/in/assia-benkedia-20708195)
- **GitHub**: [github.com/tuba89](https://github.com/tuba89)
- **Location**: Oran, Algeria (Open to Global Remote and Relocation)`;
  }

  // Default response
  if (isAr) {
    return `أهلاً بك! أنا المساعد الذكي لمعرض أعمال اسيا بن كدية (Assia Benkedia).
    
اسيا مهندسة برمجيات وذكاء اصطناعي حاصلة على:
- 🥈 **ميدالية فضية في Kaggle** (المركز 33 من 2,674 فريقاً في ترجمة الأكادية).
- 🏆 **تنويه شرفي في Google Gen AI Intensive Capstone** (مشروع OncoAssist).
- 🎓 **مرتبة الشرف العالية** في علوم الحاسوب من University of the People (معدل 3.97).
- 💼 خبرة حية في **DizzitUp** عبر 54 دولة أفريقية و12+ عاماً من الانضباط القانوني.

يمكنك سؤالي عن أي مشروع، أو التقنيات المستخدمة، أو كيفية التواصل معها!`;
  }
  if (isFr) {
    return `Bienvenue ! Je suis l'assistant IA du portfolio d'Assia Benkedia.

Assia est Développeuse Full-Stack & Mobile et Ingénieure IA :
- 🥈 **Médaillée d'Argent Kaggle** (33e / 2 674 équipes dans le Deep Past Challenge).
- 🏆 **Mention d'Honneur au Google Gen AI Capstone** (projet OncoAssist).
- 🎓 **Haute Mention d'Excellence** en Informatique (University of the People, GPA 3.97 / 4.00).
- 💼 Développeuse chez **DizzitUp** couvrant 54 pays africains et 12+ ans de rigueur juridique.

N'hésitez pas à me poser des questions sur ses projets, son stack ou pour la contacter !`;
  }

  return `Welcome! I am Assia Benkedia's official AI Portfolio Assistant.

Assia is a Full-Stack, Mobile & AI Engineer with verified credentials:
- 🥈 **Kaggle Silver Medalist**: 33rd / 2,674 international teams in the Deep Past Challenge.
- 🏆 **Google Gen AI Intensive Capstone Honourable Mention**: OncoAssist recovery platform.
- 🎓 **High Honors Computer Science Graduate**: University of the People (GPA 3.97 / 4.00).
- 💼 **Production Contributor**: Engineering DizzitUp across 54 African countries.

Feel free to ask about any of her projects (LIVORA, OncoAssist, DizzitUp), tech stack, or how to get in touch!`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages || [];
    const lang = body.lang || "en";

    if (!messages.length) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!apiKey) {
      // Graceful local fallback knowledge retrieval
      const reply = getLocalFallbackResponse(lastMessage.content, lang);
      return NextResponse.json({ reply, model: "local-portfolio-knowledge" });
    }

    // Call Google Gemini using official SDK
    const ai = new GoogleGenAI({ apiKey });

    // Format conversation history for Gemini (must start with user role)
    const contents = messages.map((m) => ({
      role: m.role === "assistant" ? ("model" as const) : ("user" as const),
      parts: [{ text: m.content }],
    }));

    while (contents.length > 0 && contents[0].role === "model") {
      contents.shift();
    }

    if (contents.length === 0) {
      contents.push({
        role: "user",
        parts: [{ text: "Hello" }],
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    const reply = response.text || getLocalFallbackResponse(lastMessage.content, lang);
    return NextResponse.json({ reply, model: "gemini-2.5-flash" });
  } catch (error: unknown) {
    console.error("Gemini API Error:", error);
    // Fall back gracefully to local knowledge if API request fails (e.g. rate limit or network)
    const fallbackReply = getLocalFallbackResponse(
      "tell me about Assia Benkedia",
      "en"
    );
    return NextResponse.json(
      {
        reply: fallbackReply,
        model: "fallback",
        note: "Handled via portfolio knowledge fallback.",
      },
      { status: 200 }
    );
  }
}

