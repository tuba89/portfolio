"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Sparkles, Send, Bot, RotateCcw, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ChatItem {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: string;
}

let messageCounter = 0;
function getNextId(prefix: string): string {
  messageCounter += 1;
  return `${prefix}-${messageCounter}`;
}

export default function AiAssistant() {
  const { lang, isRtl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [history, setHistory] = useState<ChatItem[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Localization for the chat UI
  const labels = {
    en: {
      fabTitle: "Ask Assia's AI Copilot",
      fabShort: "Ask AI",
      headerTitle: "Assia's AI Copilot",
      headerSubtitle: "Powered by Google Gemini",
      welcome:
        "Hello! I am Assia's AI Copilot. Ask me about her Kaggle Silver Medal, OncoAssist, LIVORA, production fintech at DizzitUp, or how to get in touch!",
      placeholder: "Ask about projects, stack, experience...",
      send: "Send",
      clearChat: "Reset chat",
      quickPrompts: [
        "Tell me about the Kaggle Silver Medal 🥈",
        "What is OncoAssist? 🏆",
        "Explain LIVORA multi-agent OS 🤖",
        "DizzitUp production experience 💼",
        "How can I contact or hire Assia? 📬",
      ],
    },
    fr: {
      fabTitle: "Consulter le Copilote IA d'Assia",
      fabShort: "Copilote IA",
      headerTitle: "Copilote IA d'Assia",
      headerSubtitle: "Propulsé par Google Gemini",
      welcome:
        "Bonjour ! Je suis le copilote IA d'Assia. Posez-moi des questions sur sa Médaille d'Argent Kaggle, OncoAssist, LIVORA, son expérience chez DizzitUp ou pour la contacter !",
      placeholder: "Posez une question sur ses projets, son parcours...",
      send: "Envoyer",
      clearChat: "Réinitialiser",
      quickPrompts: [
        "Parle-moi de la Médaille d'Argent Kaggle 🥈",
        "Qu'est-ce qu'OncoAssist ? 🏆",
        "Explique le système multi-agents LIVORA 🤖",
        "Son travail chez DizzitUp 💼",
        "Comment contacter ou recruter Assia ? 📬",
      ],
    },
    ar: {
      fabTitle: "المساعد الذكي لمعرض أعمال اسيا",
      fabShort: "المساعد الذكي",
      headerTitle: "المساعد الذكي لاسيا",
      headerSubtitle: "مدعوم بنماذج Google Gemini",
      welcome:
        "مرحباً بك! أنا المساعد الذكي لمعرض أعمال اسيا بن كدية. يمكنك سؤالي عن ميدالية Kaggle الفضية، مشروع OncoAssist، نظام LIVORA، عملها في منصة DizzitUp، أو التواصل المباشر معها!",
      placeholder: "اسأل عن المشاريع، التقنيات، الخبرات...",
      send: "إرسال",
      clearChat: "إعادة ضبط",
      quickPrompts: [
        "حدثني عن الميدالية الفضية في Kaggle 🥈",
        "ما هو مشروع OncoAssist وتكريمه؟ 🏆",
        "اشرح معمارية وكلاء LIVORA 🤖",
        "ما هي خبرة العمل في منصة DizzitUp؟ 💼",
        "كيف يمكنني التواصل مع اسيا أو توظيفها؟ 📬",
      ],
    },
  }[lang];

  // Dynamically computed messages: if user hasn't started yet, display current localized welcome
  const messages: ChatItem[] = useMemo(() => {
    return hasStarted
      ? history
      : [
          {
            id: "initial-welcome",
            role: "assistant",
            content: labels.welcome,
            timestamp: "Just now",
          },
        ];
  }, [hasStarted, history, labels.welcome]);

  // Auto scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || input).trim();
    if (!messageContent || isLoading) return;

    const userMessage: ChatItem = {
      id: getNextId("user"),
      role: "user",
      content: messageContent,
      timestamp: "Today",
    };

    const currentBase = hasStarted
      ? history
      : [
          {
            id: getNextId("welcome"),
            role: "assistant" as const,
            content: labels.welcome,
            timestamp: "Just now",
          },
        ];

    const updatedConversation = [...currentBase, userMessage];
    setHasStarted(true);
    setHistory(updatedConversation);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedConversation.map((m) => ({ role: m.role, content: m.content })),
          lang,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to contact chat API");
      }

      const data = await res.json();
      const assistantMessage: ChatItem = {
        id: getNextId("assistant"),
        role: "assistant",
        content: data.reply || "Sorry, I could not generate a response. Please try again.",
        timestamp: "Today",
      };

      setHistory((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMsg: ChatItem = {
        id: getNextId("error"),
        role: "assistant",
        content:
          lang === "ar"
            ? "عذراً، حدث خطأ أثناء الاتصال. يرجى المحاولة مرة أخرى أو مراسلة اسيا عبر assiapro.ai@gmail.com."
            : lang === "fr"
            ? "Désolé, une erreur s'est produite. Veuillez réessayer ou contacter directement Assia à assiapro.ai@gmail.com."
            : "Sorry, a connection issue occurred. Please try again or reach out to Assia directly at assiapro.ai@gmail.com.",
        timestamp: "Today",
      };
      setHistory((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setHasStarted(false);
    setHistory([]);
  };

  // Simple Markdown renderer for links, bold, bullets
  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");

    return lines.map((line, lIdx) => {
      const parts = [];
      let lastIndex = 0;
      const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(\*\*([^*]+)\*\*)/g;
      let match;

      while ((match = regex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }

        if (match[1] && match[2]) {
          parts.push(
            <a
              key={`${lIdx}-${match.index}`}
              href={match[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--accent-peach) underline font-medium hover:opacity-80 inline-flex items-center gap-0.5 break-all"
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

      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      const isBullet = line.trim().startsWith("- ") || line.trim().startsWith("* ");
      const lineContent = isBullet ? parts.slice(0) : parts;

      return (
        <span key={lIdx} className={`block ${isBullet ? "ps-2 my-0.5" : "my-0.5"}`}>
          {lineContent.length > 0 ? lineContent : <span className="inline-block h-2" />}
        </span>
      );
    });
  };

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <div
        className={`fixed z-40 bottom-5 sm:bottom-6 ${
          isRtl ? "left-5 sm:left-6" : "right-5 sm:right-6"
        } print:hidden transition-all duration-300`}
      >
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-(--bg-surface) border border-(--accent-peach)/40 text-(--text-primary) shadow-xl hover:shadow-2xl hover:border-(--accent-peach) hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer overflow-hidden backdrop-blur-md"
            aria-label={labels.fabTitle}
          >
            {/* Ambient glow effect */}
            <span className="absolute inset-0 bg-linear-to-r from-amber-500/10 via-(--accent-peach)/15 to-sky-500/10 opacity-70 group-hover:opacity-100 transition-opacity" />

            <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-tr from-(--accent-peach) to-amber-500 text-white shadow-sm shrink-0">
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>

            <div className="relative flex flex-col items-start text-start">
              <span className="text-xs font-semibold text-(--text-primary) flex items-center gap-1.5">
                <span>{labels.fabShort}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </span>
              <span className="text-[10px] text-(--text-muted) hidden sm:inline-block">
                Gemini 2.5
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Chat Window Dialog */}
      {isOpen && (
        <div
          role="dialog"
          aria-label={labels.headerTitle}
          className={`fixed z-50 bottom-4 sm:bottom-6 ${
            isRtl ? "left-3 sm:left-6" : "right-3 sm:right-6"
          } w-[calc(100vw-1.5rem)] sm:w-96 max-h-[82vh] h-[580px] flex flex-col rounded-2xl border border-(--border-strong) bg-(--bg-surface) shadow-2xl backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200`}
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
                <p className="text-[10px] text-(--text-muted) flex items-center gap-1">
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
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((m) => {
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-xs leading-relaxed ${
                      isUser
                        ? "bg-(--accent-peach) text-white rounded-br-xs"
                        : "bg-(--bg-page) text-(--text-primary) border border-(--border-subtle) rounded-bl-xs"
                    }`}
                  >
                    {isUser ? (
                      <span>{m.content}</span>
                    ) : (
                      <div className="space-y-1">{renderFormattedText(m.content)}</div>
                    )}
                  </div>
                  <span className="text-[9px] text-(--text-muted) mt-1 px-1">
                    {m.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Quick Suggestion Chips (shown when no user message yet) */}
            {!hasStarted && (
              <div className="pt-2 space-y-1.5">
                <span className="text-[10px] text-(--text-muted) uppercase tracking-wider font-semibold block px-1">
                  {lang === "ar" ? "أسئلة مقترحة :" : lang === "fr" ? "Suggestions :" : "Quick Prompts:"}
                </span>
                <div className="flex flex-col gap-1.5">
                  {labels.quickPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(prompt)}
                      className="text-start px-3 py-1.5 rounded-lg text-[11px] bg-(--bg-page) hover:bg-(--bg-surface-elevated) text-(--text-secondary) hover:text-(--text-primary) border border-(--border-subtle) hover:border-(--accent-peach) transition-all cursor-pointer"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-(--bg-page) border border-(--border-subtle) text-(--text-muted) w-fit">
                <Sparkles className="w-3.5 h-3.5 text-(--accent-peach) animate-spin" />
                <span className="inline-flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--accent-peach) animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-(--accent-peach) animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-(--accent-peach) animate-bounce" />
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
            className="p-3 border-t border-(--border-subtle) bg-(--bg-page)/80 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={labels.placeholder}
              disabled={isLoading}
              className="flex-1 px-3 py-2 text-xs rounded-xl bg-(--bg-surface) border border-(--border-subtle) text-(--text-primary) placeholder-(--text-muted) focus:outline-hidden focus:border-(--accent-peach) transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2 rounded-xl bg-(--accent-peach) text-white disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-95 active:scale-95 transition-all cursor-pointer shadow-xs shrink-0"
              aria-label={labels.send}
            >
              <Send className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
