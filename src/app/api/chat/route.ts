import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `You are the personal, interactive AI Portfolio Copilot for Assia Benkedia (بن كدية اسيا).
You are intelligent, witty, warm, articulate, and deeply knowledgeable about Assia's career, technical projects, and background.
You communicate just like an expert human engineering colleague and mentor—never like a rigid template or robotic script.

### Personality & Conversation Rules:
1. **Be Truly Interactive & Conversational**:
   - Talk *with* the user, not *at* them. Be natural, warm, and engaging.
   - For greetings like "hi", "hello", "hey", "bonjour", "salut", "مرحبا", respond warmly and concisely in 2-3 sentences. Greet them like a friendly colleague, invite them to explore, and ask what they are most curious about (e.g. her Kaggle Silver medal, multi-agent AI systems, full-stack fintech, or engineering journey). DO NOT immediately dump a huge bulleted CV unless they asked for an overview.
   - When asked "who is assia" (or typos like "who is assis"), explain who she is with enthusiasm and personality: a Full-Stack, Mobile & AI Engineer blending 12+ years of high-rigor legal/notarial experience with Computer Science High Honors (GPA 3.97) and top-tier AI wins (Kaggle Silver, Google Capstone Honourable Mention). Follow up with a helpful question to keep the conversation flowing.
   - End with an engaging follow-up question or suggest 1-2 interesting topics to explore.
   - NEVER repeat the exact same static bulleted resume summary over and over. Adapt naturally to what the user actually said!
   - Understand typos gracefully (e.g. "who is assis" -> recognise they mean "Assia").

2. **Multilingual Fluency**:
   - Respond in the language used by the visitor: English, French, or Arabic.
   - When Arabic is used, reply in natural, eloquent Arabic with correct RTL technical phrasing.
   - When French is used, reply in elegant, professional French.

3. **Accurate Facts About Assia Benkedia**:
   - **Identity**: Full-Stack, Mobile & AI Engineer based in Oran, Algeria. Available immediately for global remote roles and relocation.
   - **Contact**: assiapro.ai@gmail.com | Phone: +213 783 60 05 83 | LinkedIn: https://linkedin.com/in/assia-benkedia-20708195 | GitHub: https://github.com/tuba89 | Kaggle: https://www.kaggle.com/assiaben
   - **Unique Edge**: Blends 12+ years of notarial/legal background (high-stakes precision, contracts, compliance) with deep computer science and AI engineering.
   - **Academics**: Associate of Science in Computer Science from University of the People (WASC accredited) with High Honors (GPA 3.97 / 4.00). Also holds a Licence in Economics, Banking & Insurance from University of Oran.
   - **Kaggle Silver Medalist**: Deep Past Challenge (Ranked 33rd / 2,674 international teams, Top 1.2% globally). Fine-tuned sequence-to-sequence Transformer models (ByT5-base) to translate ancient Akkadian cuneiform inscriptions to English without synthetic data or large LLMs. Writeup: https://www.kaggle.com/competitions/deep-past-initiative-machine-translation/writeups/32nd-byt5-base-fine-tuning-no-llms-no-synthet#3443570
   - **Google Gen AI Intensive Capstone Honourable Mention**: Awarded for **OncoAssist**, a compassionate cancer recovery companion with MediBridge-AI clinical decision support, powered by Gemini 1.5, ChromaDB vector search over TCGA oncology data, and ClinicalTrials.gov evidence retrieval. Official announcement: https://www.kaggle.com/competitions/gen-ai-intensive-course-capstone-2025q1/discussion/575927 | Medium writeup: https://medium.com/@iiiassia.beniii/oncoassist-building-an-ai-companion-for-cancer-survivors-with-gemini-and-rag-f76e9bbe8438 | YouTube: https://www.youtube.com/watch?v=gKRmSPRP5NQ
   - **Official Google Developers Blog Feature**: Her work in the 5-Day AI Agents Intensive (capstone LIVORA) was officially highlighted on the Google Developers Blog: https://blog.google/innovation-and-ai/technology/developers-tools/ai-agents-intensive-recap/
   - **Production Fintech at DizzitUp**: Core developer on a multi-national platform operating across 54 African countries (Next.js, Node.js/Express, Supabase PostgreSQL with RLS, DZYwallet crypto/stablecoin payments). Note: Commercial code is private IP.
   - **Other Projects**: 
     - LIVORA: Autonomous multi-agent OS ("JARVIS for working mothers") using FastMCP protocol. https://github.com/tuba89/livora
     - ResearchForge-AI: Academic proposal accelerator with Gemini. https://github.com/tuba89/ResearchForge-AI
     - EVM Smart Contracts: Solidity protocols for token management & escrow.
     - GuardianAI: Computer vision real-time safety alerting. https://github.com/tuba89/GuardianAI
     - Next Weather App: Modern weather app in Next.js 15 & Framer Motion. https://github.com/tuba89/next-weather-app
     - BloodLink: Community blood donation network. https://github.com/tuba89/BloodLink

4. **Markdown Links & Formatting**:
   - Use Markdown links [Link Title](url) when referencing specific projects or writeups so the visitor can click directly.
   - Keep answers readable, structured, and pleasant on mobile devices.
`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// Fallback intelligent responder when GEMINI_API_KEY is not configured or network fails
function getLocalFallbackResponse(query: string, lang: string): string {
  const q = query.toLowerCase();

  const isFr = lang === "fr" || /bonjour|salut|qui|projet|médaille|honneur|compétence|contact/i.test(query);
  const isAr = lang === "ar" || /مرحبا|السلام|من|مشروع|ميدالية|شرف|كاجل|تعليم|تواصل/i.test(query);

  // Conversational greetings
  if (/^(hi|hello|hey|greetings|howdy|salut|bonjour|coucou|مرحبا|سلام|أهلا|اهلا)/i.test(q.trim()) || q === "hi" || q === "hello") {
    if (isAr) {
      return `مرحباً بك! يسعدني التحدث معك. أنا المساعد الذكي لمعرض أعمال اسيا بن كدية.

اسيا مهندسة برمجيات وتطبيقات ذكاء اصطناعي تجمع بين التميز الأكاديمي والخبرة الإنتاجية العالية.

ما الذي تود استكشافه اليوم؟
- 🥈 **ميدالية Kaggle الفضية** في ترجمة النقوش الأكادية.
- 🏆 مشروع **OncoAssist** المكرم من Google.
- 🤖 نظام **LIVORA** للوكلاء الأذكياء.
- 💼 خبرة العمل التقني والمالي في **DizzitUp**.
- 📬 معلومات التواصل والتوظيف المباشر.`;
    }
    if (isFr) {
      return `Bonjour et bienvenue ! Je suis le copilote IA du portfolio d'Assia Benkedia.

Assia est Ingénieure Full-Stack, Mobile et IA avec un parcours d'excellence unique (Haute Distinction universitaire, Médaille d'Argent Kaggle, Mention d'Honneur Google).

Que souhaitez-vous découvrir ensemble ?
- 🥈 Sa **Médaille d'Argent Kaggle** en traduction de tablettes cunéiformes.
- 🏆 Le projet **OncoAssist** primé par Google.
- 🤖 Le système multi-agents autonome **LIVORA**.
- 💼 Son expérience en fintech de production chez **DizzitUp**.
- 📬 Comment la recruter ou la contacter directement.`;
    }
    return `Hey there! Great to meet you. I'm Assia Benkedia's interactive AI Copilot.

Assia is a Full-Stack, Mobile & AI Engineer with a unique, high-achieving profile—bringing 12+ years of legal rigor into software engineering, academic High Honors (GPA 3.97), and top international AI recognition.

What are you curious about today?
- 🥈 Her **Kaggle Silver Medal** in translating ancient Akkadian cuneiform.
- 🏆 The **Google Capstone award** for OncoAssist.
- 🤖 The autonomous multi-agent OS **LIVORA**.
- 💼 Her production fintech engineering at **DizzitUp**.
- 📬 How to get in touch or discuss a role.`;
  }

  // Identity queries ("who is assia", "who is assis", "tell me about her")
  if (/who is|who's|qui est|c'est qui|من هي|من هو|tell me about assia|about assia|who is assis/i.test(q)) {
    if (isAr) {
      return `**اسيا بن كدية (Assia Benkedia)** هي مهندسة برمجيات وتطبيقات ذكاء اصطناعي متكاملة (Full-Stack, Mobile & AI Engineer) تتميز بمسار فريد واستثنائي:

- **التميز الأكاديمي**: تخرجت بمرتبة الشرف العالية في علوم الحاسوب من جامعة الناس (University of the People - كاليفورنيا) بمعدل شبه كامل **3.97 / 4.00**.
- **منافسات الذكاء الاصطناعي العالمية**:
  - 🥈 **ميدالية فضية في مسابقة Kaggle Deep Past Challenge** (المركز 33 من أصل 2,674 فريقاً دولياً).
  - 🏆 **التنويه الشرفي (Honourable Mention)** في برنامج *Google Gen AI Intensive Capstone* عن مشروع **OncoAssist**.
- **الخبرة الإنتاجية**: مطورة أساسية في منصة **DizzitUp** للتجارة والتقنية المالية الممتدة عبر 54 دولة في أفريقيا.
- **نقطة القوة الاستثنائية**: 12+ عاماً من الدقة والانضباط في المجال القانوني والتوثيقي قبل التفرغ لعالم البرمجة.

هل تحب أن أحدثك بالتفصيل عن أحد مشاريعها المفتوحة، أو حلول الوكلاء الأذكياء (Agents)، أو كيفية التواصل معها؟`;
    }
    if (isFr) {
      return `**Assia Benkedia** est une Ingénieure Full-Stack, Mobile & IA dotée d'un profil d'exception :

- **Rigueur & Reconversion d'élite** : Elle a exercé pendant 12+ années dans le domaine notarial et juridique avant d'obtenir son diplôme en Informatique avec la plus haute distinction (**High Honors, GPA 3.97 / 4.00** à l'University of the People).
- **Reconnaissance Internationale en IA** :
  - 🥈 **Médaillée d'Argent Kaggle** (33e / 2 674 équipes mondiales au Deep Past Challenge).
  - 🏆 **Mention d'Honneur Google** au *Gen AI Intensive Capstone* pour **OncoAssist** (parmi 280 000 participants).
- **Impact en Production** : Développeuse Full-Stack chez **DizzitUp**, marketplace et fintech couvrant 54 pays africains.

Souhaitez-vous explorer ses architectures IA (LIVORA, MediBridge), son stack technique ou ses coordonnées ?`;
    }
    return `**Assia Benkedia** is a Full-Stack, Mobile & AI Engineer with a standout background:

- **Unique Trajectory**: She practiced for 12+ years in high-stakes notarial law before turning her passion into software engineering, graduating with High Honors (**GPA 3.97 / 4.00**) in Computer Science from the University of the People.
- **International AI Recognition**:
  - 🥈 **Kaggle Silver Medalist** (33rd out of 2,674 global teams in the Deep Past Challenge, Top 1.2%).
  - 🏆 **Google Gen AI Capstone Honourable Mention** for **OncoAssist** (out of 280,000+ worldwide participants).
  - 🚀 Officially featured on the **Google Developers Blog** for her multi-agent AI system LIVORA.
- **Production Fintech Impact**: Core engineer at **DizzitUp**, powering an e-commerce and utility platform across 54 African countries.

Would you like to dive into her AI research, explore her full-stack open source repositories, or view her contact details?`;
  }

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
  let userQuery = "hello";
  let userLang = "en";

  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages || [];
    const lang = body.lang || "en";
    userLang = lang;

    if (!messages.length) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    userQuery = lastMessage?.content || "hello";
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

    const candidateModels = [
      "gemini-3.5-flash-lite",
      "gemini-3.5-flash",
      "gemini-3.8-flash",
    ];

    let generatedText: string | null = null;
    let successfulModel = "";

    const callWithTimeout = async <T,>(promise: Promise<T>, ms: number): Promise<T> => {
      let timer: NodeJS.Timeout;
      const timeout = new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(new Error(`Timed out after ${ms}ms`)), ms);
      });
      return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
    };

    for (const modelName of candidateModels) {
      try {
        const response = await callWithTimeout(
          ai.models.generateContent({
            model: modelName,
            contents,
            config: {
              systemInstruction: SYSTEM_PROMPT,
              temperature: 0.7,
            },
          }),
          7000
        );
        if (response.text) {
          generatedText = response.text;
          successfulModel = modelName;
          break;
        }
      } catch (modelErr) {
        console.warn(`Gemini model ${modelName} attempt failed or timed out:`, modelErr);
      }
    }

    if (generatedText) {
      return NextResponse.json({ reply: generatedText, model: successfulModel });
    }

    // Fall back gracefully to local knowledge if all models fail
    const fallbackReply = getLocalFallbackResponse(lastMessage.content, lang);
    return NextResponse.json({
      reply: fallbackReply,
      model: "fallback",
      note: "Live models temporarily unavailable; served from local knowledge base.",
    });
  } catch (error: unknown) {
    console.error("Gemini API Error:", error);
    const fallbackReply = getLocalFallbackResponse(userQuery, userLang);
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

