"use client";

import { useState, useRef, useEffect, useMemo, useId } from "react";
import {
  Sparkles,
  Send,
  Bot,
  RotateCcw,
  X,
  Square,
  Mail,
  Download,
  MessageCircle,
  Award,
  Briefcase,
  UserCheck,
} from "lucide-react";
import { ColoredLinkedinIcon } from "./Icons";
import { useLanguage } from "@/context/LanguageContext";

interface ChatItem {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: string;
}

interface ParsedMessage {
  cleanText: string;
  followups: string[];
  hasContactAction: boolean;
}

function parseMessageTags(raw: string): ParsedMessage {
  let clean = raw;
  let hasContactAction = false;
  let followups: string[] = [];

  // Detect [[action: contact]]
  if (/\[\[action:\s*contact\]\]/i.test(clean)) {
    hasContactAction = true;
    clean = clean.replace(/\[\[action:\s*contact\]\]/gi, "").trim();
  }

  // Detect [[followups: a | b | c]]
  const followupsMatch = clean.match(/\[\[followups:\s*(.*?)\]\]/i);
  if (followupsMatch) {
    const rawOptions = followupsMatch[1];
    followups = rawOptions
      .split("|")
      .map((s) => s.trim().replace(/^[-•*]\s*/, ""))
      .filter((s) => s.length > 0 && !s.includes("[["));
    clean = clean.replace(/\[\[followups:\s*.*?\]\]/gi, "").trim();
  }

  // Clean trailing unclosed tags during streaming
  clean = clean.replace(/\[\[(?:action|followups)?:?[^\]]*$/i, "").trim();

  return { cleanText: clean, followups, hasContactAction };
}

function formatTimestamp(date: Date, lang: string): string {
  const locale = lang === "ar" ? "ar-DZ" : lang === "fr" ? "fr-FR" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export default function AiAssistant() {
  const { lang, isRtl } = useLanguage();
  const idPrefix = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [history, setHistory] = useState<ChatItem[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Auto-collapse to compact floating icon when user scrolls down
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 200 && currentScrollY > lastScrollY + 8) {
        setIsScrolledDown(true);
      } else if (currentScrollY < lastScrollY - 8 || currentScrollY < 120) {
        setIsScrolledDown(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global event triggers and Escape key support
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsMinimized(false);
    };
    const handleClose = () => setIsOpen(false);
    const handleToggle = () => setIsOpen((prev) => !prev);

    window.addEventListener("open-ai-assistant", handleOpen);
    window.addEventListener("close-ai-assistant", handleClose);
    window.addEventListener("toggle-ai-assistant", handleToggle);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-ai-assistant", handleOpen);
      window.removeEventListener("close-ai-assistant", handleClose);
      window.removeEventListener("toggle-ai-assistant", handleToggle);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const messageCounter = useRef(0);
  const getNextId = (prefix: string): string => {
    messageCounter.current += 1;
    return `${idPrefix}-${prefix}-${messageCounter.current}`;
  };

  // Localization labels without any emojis
  const labels = useMemo(() => {
    return {
      en: {
        fabTitle: "Ask Assia's AI Copilot",
        fabShort: "Ask AI",
        headerTitle: "Assia's AI Copilot",
        headerSubtitle: "Powered by Gemini",
        welcome:
          "Hello. I am Assia's interactive AI assistant. Ask me about her Kaggle Silver Medal, LIVORA multi-agent system, OncoAssist Google Capstone win, production fintech at DizzitUp, or how to get in touch.",
        placeholder: "Ask about projects, stack, experience...",
        send: "Send",
        stop: "Stop",
        retry: "Retry",
        clearChat: "Reset chat",
        footerNote: "AI-generated. Do not share personal data.",
        suggestionsTitle: "Suggested questions:",
        contactCard: {
          title: "Get in touch with Assia",
          email: "Email",
          linkedin: "LinkedIn",
          cv: "Download CV",
          whatsapp: "WhatsApp",
        },
        quickPrompts: [
          { text: "Tell me about the Kaggle Silver Medal", icon: "award" },
          { text: "What is OncoAssist?", icon: "sparkles" },
          { text: "Explain LIVORA multi-agent OS", icon: "bot" },
          { text: "DizzitUp production experience", icon: "briefcase" },
          { text: "How can I contact or hire Assia?", icon: "mail" },
        ],
      },
      fr: {
        fabTitle: "Consulter le Copilote IA d'Assia",
        fabShort: "Copilote IA",
        headerTitle: "Copilote IA d'Assia",
        headerSubtitle: "Propulsé par Gemini",
        welcome:
          "Bonjour. Je suis l'assistant IA interactif d'Assia. Posez-moi des questions sur sa Médaille d'Argent Kaggle, le système multi-agents LIVORA, OncoAssist primé par Google, son travail chez DizzitUp ou pour la recruter.",
        placeholder: "Posez une question sur ses projets, son parcours...",
        send: "Envoyer",
        stop: "Arrêter",
        retry: "Réessayer",
        clearChat: "Réinitialiser",
        footerNote: "Généré par IA. Ne partagez pas de données personnelles.",
        suggestionsTitle: "Questions suggérées :",
        contactCard: {
          title: "Contacter Assia",
          email: "Email",
          linkedin: "LinkedIn",
          cv: "Télécharger CV",
          whatsapp: "WhatsApp",
        },
        quickPrompts: [
          { text: "Parle-moi de la Médaille d'Argent Kaggle", icon: "award" },
          { text: "Qu'est-ce qu'OncoAssist ?", icon: "sparkles" },
          { text: "Explique le système multi-agents LIVORA", icon: "bot" },
          { text: "Son travail chez DizzitUp", icon: "briefcase" },
          { text: "Comment contacter ou recruter Assia ?", icon: "mail" },
        ],
      },
      ar: {
        fabTitle: "المساعد الذكي لمعرض أعمال اسيا",
        fabShort: "المساعد الذكي",
        headerTitle: "المساعد الذكي لاسيا",
        headerSubtitle: "مدعوم بنماذج Gemini",
        welcome:
          "مرحباً بك. أنا المساعد الذكي لمعرض أعمال اسيا بن كدية. يمكنك سؤالي عن ميدالية Kaggle الفضية، مشروع LIVORA للوكلاء الأذكياء، مشروع OncoAssist المكرم من Google، عملها في منصة DizzitUp، أو التواصل المباشر معها.",
        placeholder: "اسأل عن المشاريع، التقنيات، الخبرات...",
        send: "إرسال",
        stop: "إيقاف",
        retry: "إعادة المحاولة",
        clearChat: "إعادة ضبط",
        footerNote: "مُنشأ بالذكاء الاصطناعي. يُرجى عدم مشاركة بيانات حساسة.",
        suggestionsTitle: "أسئلة مقترحة :",
        contactCard: {
          title: "التواصل المباشر مع اسيا",
          email: "البريد الإلكتروني",
          linkedin: "لينكد إن",
          cv: "تحميل السيرة الذاتية",
          whatsapp: "واتساب",
        },
        quickPrompts: [
          { text: "حدثني عن الميدالية الفضية في Kaggle", icon: "award" },
          { text: "ما هو مشروع OncoAssist وتكريمه؟", icon: "sparkles" },
          { text: "اشرح معمارية وكلاء LIVORA", icon: "bot" },
          { text: "ما هي خبرة العمل في منصة DizzitUp؟", icon: "briefcase" },
          { text: "كيف يمكنني التواصل مع اسيا أو توظيفها؟", icon: "mail" },
        ],
      },
    }[lang];
  }, [lang]);

  // Auto scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen, isStreaming]);

  // Extract latest follow-up suggestions from the most recent assistant message
  const latestFollowups = useMemo(() => {
    if (history.length === 0) return [];
    const lastMsg = history[history.length - 1];
    if (lastMsg.role !== "assistant") return [];
    const parsed = parseMessageTags(lastMsg.content);
    return parsed.followups;
  }, [history]);

  const handleSendMessage = async (textToSend?: string) => {
    const rawContent = (textToSend || input).trim();
    if (!rawContent || isStreaming) return;

    const messageContent = rawContent.slice(0, 500);
    const now = new Date();
    const timeStr = formatTimestamp(now, lang);

    const userMessage: ChatItem = {
      id: getNextId("user"),
      role: "user",
      content: messageContent,
      timestamp: timeStr,
    };

    const updatedHistory = [...history, userMessage];
    setHistory(updatedHistory);
    setInput("");
    setIsStreaming(true);
    setHasError(false);

    const assistantId = getNextId("assistant");
    const assistantPlaceholder: ChatItem = {
      id: assistantId,
      role: "assistant",
      content: "",
      timestamp: timeStr,
    };

    setHistory([...updatedHistory, assistantPlaceholder]);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      // Send only real history turns, max 8 turns, never sending initial local welcome
      const payloadMessages = updatedHistory.slice(-8).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: payloadMessages,
          lang,
        }),
        signal: controller.signal,
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      if (!res.body) {
        throw new Error("No response stream");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const textChunk = decoder.decode(value, { stream: true });
        const lines = textChunk.split("\n");

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data:")) continue;

          const dataStr = trimmed.replace(/^data:\s*/, "");
          if (dataStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(dataStr);
            if (parsed.chunk) {
              accumulated += parsed.chunk;
              setHistory((prev) =>
                prev.map((msg) =>
                  msg.id === assistantId ? { ...msg, content: accumulated } : msg
                )
              );
            }
          } catch {
            // ignore partial JSON chunks
          }
        }
      }
    } catch (err: unknown) {
      if ((err as Error)?.name === "AbortError") {
        // Stream aborted by user
      } else {
        console.error("Chat error:", err);
        setHasError(true);
        setHistory((prev) =>
          prev.map((msg) =>
            msg.id === assistantId
              ? {
                  ...msg,
                  content:
                    msg.content ||
                    (lang === "ar"
                      ? "تعذر الاتصال بالخادم حالياً. يرجى إعادة المحاولة أو مراسلة اسيا عبر assiapro.ai@gmail.com."
                      : lang === "fr"
                      ? "Connexion momentanément indisponible. Veuillez réessayer ou contacter directement Assia à assiapro.ai@gmail.com."
                      : "Connection temporarily unavailable. Please retry or contact Assia directly at assiapro.ai@gmail.com."),
                }
              : msg
          )
        );
      }
    } finally {
      setIsStreaming(false);
      abortControllerRef.current = null;
    }
  };

  const handleStopStreaming = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  const handleRetry = () => {
    const lastUser = [...history].reverse().find((m) => m.role === "user");
    if (lastUser) {
      // Remove trailing failed assistant message
      setHistory((prev) => {
        const copy = [...prev];
        if (copy.length > 0 && copy[copy.length - 1].role === "assistant") {
          copy.pop();
        }
        return copy;
      });
      handleSendMessage(lastUser.content);
    }
  };

  const handleResetChat = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setHistory([]);
    setHasError(false);
    setIsStreaming(false);
  };

  // Structured Markdown renderer for bold, links, bullets
  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");

    return lines.map((line, lIdx) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return <span key={lIdx} className="block h-2" />;
      }

      const isBullet = trimmed.startsWith("- ") || trimmed.startsWith("* ");
      const content = isBullet ? trimmed.replace(/^[-*]\s+/, "") : line;

      const parts: (string | React.ReactNode)[] = [];
      const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(\*\*([^*]+)\*\*)/g;
      let match;
      let lastIndex = 0;

      while ((match = regex.exec(content)) !== null) {
        if (match.index > lastIndex) {
          parts.push(content.substring(lastIndex, match.index));
        }

        if (match[1] && match[2]) {
          parts.push(
            <a
              key={`${lIdx}-${match.index}`}
              href={match[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--accent-peach-strong) underline font-semibold hover:opacity-80 inline-flex items-center gap-0.5 break-all"
            >
              {match[1]}
            </a>
          );
        } else if (match[4]) {
          parts.push(
            <strong key={`${lIdx}-${match.index}`} className="font-semibold text-(--text-primary)">
              {match[4]}
            </strong>
          );
        }
        lastIndex = regex.lastIndex;
      }

      if (lastIndex < content.length) {
        parts.push(content.substring(lastIndex));
      }

      if (isBullet) {
        return (
          <span key={lIdx} className="flex items-start gap-2 ps-1.5 my-1">
            <span className="w-1.5 h-1.5 rounded-full bg-(--accent-peach-strong) shrink-0 mt-2" />
            <span className="flex-1">{parts}</span>
          </span>
        );
      }

      return (
        <span key={lIdx} className="block my-1">
          {parts}
        </span>
      );
    });
  };

  const getQuickPromptIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return <Award className="w-3.5 h-3.5 text-(--accent-peach-strong) shrink-0" />;
      case "sparkles":
        return <Sparkles className="w-3.5 h-3.5 text-(--accent-peach-strong) shrink-0" />;
      case "bot":
        return <Bot className="w-3.5 h-3.5 text-(--accent-peach-strong) shrink-0" />;
      case "briefcase":
        return <Briefcase className="w-3.5 h-3.5 text-(--accent-peach-strong) shrink-0" />;
      case "mail":
        return <Mail className="w-3.5 h-3.5 text-(--accent-peach-strong) shrink-0" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-(--accent-peach-strong) shrink-0" />;
    }
  };

  return (
    <>
      {/* Backdrop for mobile when chat dialog is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-48 bg-black/40 backdrop-blur-xs sm:hidden animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      {/* Floating Action Button (FAB) with smooth minimize/toggle */}
      <div
        className={`fixed z-40 bottom-5 sm:bottom-6 ${
          isRtl ? "left-4 sm:left-6" : "right-4 sm:right-6"
        } print:hidden transition-all duration-300`}
      >
        {!isOpen && (
          isMinimized || isScrolledDown ? (
            /* Minimized sleek circular floating orb */
            <div className="relative group">
              <button
                onClick={() => {
                  setIsMinimized(false);
                  setIsOpen(true);
                }}
                className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-(--bg-surface) border border-(--accent-peach)/50 text-(--text-primary) shadow-xl hover:shadow-2xl hover:border-(--accent-peach) hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer backdrop-blur-md group"
                aria-label={labels.fabTitle}
                title={labels.fabTitle}
              >
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-tr from-(--accent-peach) to-amber-500 text-white shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>
                <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-(--bg-surface)" />
              </button>
            </div>
          ) : (
            /* Full pill with subtle minimize button */
            <div className="relative flex items-center group">
              <div
                onClick={() => setIsOpen(true)}
                className="relative flex items-center gap-2.5 pl-3.5 pr-2 sm:pl-4 sm:pr-2.5 py-2.5 sm:py-3 rounded-full bg-(--bg-surface) border border-(--accent-peach)/40 text-(--text-primary) shadow-xl hover:shadow-2xl hover:border-(--accent-peach) hover:scale-102 active:scale-98 transition-all duration-200 cursor-pointer overflow-hidden backdrop-blur-md"
                role="button"
                tabIndex={0}
                aria-label={labels.fabTitle}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsOpen(true);
                  }
                }}
              >
                <span className="absolute inset-0 bg-linear-to-r from-amber-500/10 via-(--accent-peach)/15 to-sky-500/10 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-tr from-(--accent-peach) to-amber-500 text-white shadow-sm shrink-0">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>

                <div className="relative flex flex-col items-start text-start mr-1">
                  <span className="text-xs font-semibold text-(--text-primary) flex items-center gap-1.5 leading-tight">
                    <span>{labels.fabShort}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </span>
                  <span className="text-[10px] text-(--text-muted) hidden sm:inline-block leading-tight">
                    Gemini AI
                  </span>
                </div>

                {/* Subtle minimize button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMinimized(true);
                  }}
                  className="relative p-1 rounded-full text-(--text-muted) hover:text-(--text-primary) hover:bg-(--bg-page) transition-colors cursor-pointer"
                  title="Minimize Ask AI"
                  aria-label="Minimize Ask AI"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>
          )
        )}
      </div>

      {/* Chat Window Dialog */}
      {isOpen && (
        <div
          role="dialog"
          aria-label={labels.headerTitle}
          className={`fixed z-50 bottom-4 sm:bottom-6 ${
            isRtl ? "left-3 sm:left-6" : "right-3 sm:right-6"
          } w-[calc(100vw-1.5rem)] sm:w-96 max-h-[82vh] h-145 flex flex-col rounded-2xl border border-(--border-strong) bg-(--bg-surface) shadow-2xl backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200`}
        >
          {/* Header */}
          <div className="p-3.5 sm:p-4 border-b border-(--border-subtle) bg-(--bg-page)/80 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-linear-to-tr from-(--accent-peach) to-amber-500 text-white shadow-sm">
                <Bot className="w-4 h-4" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-(--bg-surface)" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-(--text-primary) flex items-center gap-1.5">
                  <span>{labels.headerTitle}</span>
                </h3>
                <p className="text-[10px] text-(--text-muted) flex items-center gap-1 font-mono">
                  <Sparkles className="w-2.5 h-2.5 text-(--accent-peach) shrink-0" />
                  <span>{labels.headerSubtitle}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-lg text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-surface-elevated) transition-colors cursor-pointer"
                title={labels.clearChat}
                aria-label={labels.clearChat}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-surface-elevated) transition-colors cursor-pointer"
                aria-label="Close Assistant"
                title="Close Assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-sm">
            {/* Initial Welcome Message (rendered locally, never sent to Gemini) */}
            <div className="flex flex-col items-start">
              <div className="max-w-[88%] rounded-2xl px-3.5 py-2.5 shadow-xs leading-relaxed bg-(--bg-surface-elevated) text-(--text-primary) border border-(--border-subtle) rounded-tl-xs">
                <p>{labels.welcome}</p>
              </div>
              <span className="text-[11px] text-(--text-muted) mt-1 px-1 font-mono">
                {formatTimestamp(new Date(), lang)}
              </span>
            </div>

            {/* Conversation History */}
            {history.map((m) => {
              const isUser = m.role === "user";
              const parsed = !isUser ? parseMessageTags(m.content) : null;

              return (
                <div
                  key={m.id}
                  className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 shadow-xs leading-relaxed text-sm ${
                      isUser
                        ? "bg-(--accent-peach-strong) text-white font-medium rounded-tr-xs"
                        : "bg-(--bg-surface-elevated) text-(--text-primary) border border-(--border-subtle) rounded-tl-xs"
                    }`}
                  >
                    {isUser ? (
                      <p className="whitespace-pre-wrap">{m.content}</p>
                    ) : (
                      <div className="space-y-1">
                        {parsed && parsed.cleanText ? (
                          renderFormattedText(parsed.cleanText)
                        ) : (
                          // While streaming first chunk
                          <span className="inline-flex items-center gap-1.5 text-(--text-muted)">
                            <Sparkles className="w-3.5 h-3.5 text-(--accent-peach-strong) animate-spin" />
                            <span>...</span>
                          </span>
                        )}

                        {/* Action Card: Contact Details */}
                        {parsed && parsed.hasContactAction && (
                          <div className="mt-2.5 p-3 rounded-xl bg-(--bg-page)/80 border border-(--border-subtle) shadow-2xs space-y-2">
                            <div className="text-[11px] font-semibold text-(--text-primary) flex items-center gap-1.5">
                              <UserCheck className="w-3.5 h-3.5 text-(--accent-peach-strong)" />
                              <span>{labels.contactCard.title}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1.5">
                              <a
                                href="mailto:assiapro.ai@gmail.com"
                                className="px-2.5 py-1.5 rounded-lg text-[11px] font-medium bg-(--bg-surface) hover:bg-(--bg-surface-elevated) text-(--text-primary) border border-(--border-subtle) hover:border-(--accent-peach) transition-colors flex items-center gap-1.5 truncate"
                              >
                                <Mail className="w-3.5 h-3.5 text-(--accent-peach-strong) shrink-0" />
                                <span className="truncate">{labels.contactCard.email}</span>
                              </a>
                              <a
                                href="https://linkedin.com/in/assia-benkedia-20708195"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2.5 py-1.5 rounded-lg text-[11px] font-medium bg-(--bg-surface) hover:bg-(--bg-surface-elevated) text-(--text-primary) border border-(--border-subtle) hover:border-(--accent-peach) transition-colors flex items-center gap-1.5 truncate"
                              >
                                <ColoredLinkedinIcon size={14} className="shrink-0" />
                                <span className="truncate">{labels.contactCard.linkedin}</span>
                              </a>
                              <a
                                href="/certificates/Assia_Benkedia_Resume.pdf"
                                download="Assia_Benkedia_Resume.pdf"
                                className="px-2.5 py-1.5 rounded-lg text-[11px] font-medium bg-(--bg-surface) hover:bg-(--bg-surface-elevated) text-(--text-primary) border border-(--border-subtle) hover:border-(--accent-peach) transition-colors flex items-center gap-1.5 truncate"
                              >
                                <Download className="w-3.5 h-3.5 text-(--accent-peach-strong) shrink-0" />
                                <span className="truncate">{labels.contactCard.cv}</span>
                              </a>
                              <a
                                href="https://wa.me/213783600583"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2.5 py-1.5 rounded-lg text-[11px] font-medium bg-(--bg-surface) hover:bg-(--bg-surface-elevated) text-(--text-primary) border border-(--border-subtle) hover:border-(--accent-peach) transition-colors flex items-center gap-1.5 truncate"
                              >
                                <MessageCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                <span className="truncate">{labels.contactCard.whatsapp}</span>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <span className="text-[11px] text-(--text-muted) mt-1 px-1 font-mono">
                    {m.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Error Retry Option */}
            {hasError && !isStreaming && (
              <div className="flex items-center gap-2 px-1 pt-1">
                <button
                  onClick={handleRetry}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-(--bg-surface-elevated) border border-(--border-subtle) text-(--text-primary) hover:border-(--accent-peach) transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3 text-(--accent-peach-strong)" />
                  <span>{labels.retry}</span>
                </button>
              </div>
            )}

            {/* Initial Quick Prompts (shown ONLY when user hasn't asked a question yet) */}
            {history.length === 0 && (
              <div className="pt-2 space-y-1.5">
                <span className="text-[10px] text-(--text-muted) uppercase tracking-wider font-semibold block px-1">
                  {labels.suggestionsTitle}
                </span>
                <div className="flex flex-col gap-1.5">
                  {labels.quickPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(prompt.text)}
                      className="text-start px-3 py-2 rounded-xl text-xs bg-(--bg-surface-elevated) hover:bg-(--bg-surface) text-(--text-primary) border border-(--border-subtle) hover:border-(--accent-peach) transition-all cursor-pointer flex items-center gap-2 group shadow-2xs"
                    >
                      {getQuickPromptIcon(prompt.icon)}
                      <span className="group-hover:text-(--accent-peach-strong) transition-colors font-medium">
                        {prompt.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dynamic Contextual Follow-Up Suggestions (replaces static prompts after message) */}
            {history.length > 0 && latestFollowups.length > 0 && !isStreaming && (
              <div className="pt-2 space-y-1.5 animate-in fade-in duration-200">
                <span className="text-[10px] text-(--text-muted) uppercase tracking-wider font-semibold block px-1">
                  {labels.suggestionsTitle}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {latestFollowups.map((suggestion, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => handleSendMessage(suggestion)}
                      className="text-start px-3 py-1.5 rounded-full text-xs bg-(--bg-surface-elevated) hover:bg-(--accent-peach-light) text-(--text-secondary) hover:text-(--accent-peach-strong) border border-(--border-subtle) hover:border-(--accent-peach) transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs font-medium"
                    >
                      <Sparkles className="w-3 h-3 text-(--accent-peach-strong) shrink-0" />
                      <span>{suggestion}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Typing Indicator while streaming empty start */}
            {isStreaming && history.length > 0 && history[history.length - 1].content === "" && (
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-(--bg-surface-elevated) border border-(--border-subtle) text-(--text-muted) w-fit">
                <Sparkles className="w-3.5 h-3.5 text-(--accent-peach-strong) animate-spin" />
                <span className="inline-flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--accent-peach-strong) animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-(--accent-peach-strong) animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-(--accent-peach-strong) animate-bounce" />
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 border-t border-(--border-subtle) bg-(--bg-page)/90 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={labels.placeholder}
              disabled={isStreaming}
              maxLength={500}
              className="flex-1 px-3 py-2 text-sm rounded-xl bg-(--bg-surface-elevated) border border-(--border-subtle) text-(--text-primary) placeholder-(--text-muted) focus:outline-hidden focus:border-(--accent-peach) transition-colors"
            />

            {isStreaming ? (
              <button
                type="button"
                onClick={handleStopStreaming}
                className="px-3 py-2 rounded-xl bg-red-600/90 hover:bg-red-600 text-white transition-all cursor-pointer shadow-xs shrink-0 flex items-center gap-1 text-xs font-medium"
                title={labels.stop}
                aria-label={labels.stop}
              >
                <Square className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline">{labels.stop}</span>
              </button>
            ) : (
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-(--accent-peach-strong) text-white disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-95 active:scale-95 transition-all cursor-pointer shadow-xs shrink-0"
                aria-label={labels.send}
              >
                <Send className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
              </button>
            )}
          </form>

          {/* Footer Note */}
          <div className="text-[10px] text-(--text-muted) text-center py-1.5 px-3 bg-(--bg-page)/80 border-t border-(--border-subtle)/60 shrink-0 font-medium">
            {labels.footerNote}
          </div>
        </div>
      )}
    </>
  );
}
