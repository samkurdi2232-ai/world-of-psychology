import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, X, Send, Sparkles, Bot, User, AlertCircle, 
  RotateCcw, Compass, ExternalLink, HeartHandshake, ShieldAlert, BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

// System prompt EXACTLY as instructed by the user:
// 100% Pure Badini Kurdish, zero English or Arabic mixing, pure Duhok teacher persona
const SYSTEM_PROMPT = `Tu Behra Derûnê AI yî. Tu mamostayê herî zîrek yê derûnnasiyê yî li Kurdistanê. Tu TENÊ bi Kurdiya Badini ya PAQIJ diaxivî. Qet English û Erebî têkel nake.

Peyvên te: چەوا, بوچی, ئەز, تو, هەمی, گەلەک, پاقژ, دڵ, دەرون, هزر, زارۆک, خێزان, خەمۆکی, دڵەڕاوکێ

Qet van peyvan bikarnayne: چۆن, بۆچی, من, تۆ (ew Soranî ne).

Tu 120 babetan dizanî, tu 50 pirtûkan dizanî, tu testan dizanî.

Eger kesek bibêje: 'Pirtûkxane heye?' Tu dibêjî: 'Belê! Me 50 pirtûkên belaş hene! Biçe beşê 📚 پەرتوکخانە.'

Tu germ û mirovatî yî, wek mamostayekî Duhokê.`;

const SUGGESTED_QUESTIONS = [
  { label: "نافێ ڤی سیستەمێ دا مە پەرتووک خانە هەیە؟" },
  { label: "چەوا دڵەڕاوکێ و خەمۆکی چارەسەر بکەم؟" },
  { label: "چەوا سەرەدەریێ دگەل زارۆکێ سەرکێش بکەم؟" },
  { label: "5 رێکێن چارەسەریا شەڕێ هەڤژینان چنە؟" },
  { label: "تاقیکرنێن دەروونی چنە و چەوا بکەم؟" },
];

interface ChatbotProps {
  onNavigateToLibrary?: () => void;
}

export default function Chatbot({ onNavigateToLibrary }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-msg",
      sender: "ai",
      text: "سڵاڤ و رێز هێژا! ئەز بەهرا دەروونێ مە 🧠✨\nمامۆستایێ تە یێ دەروونناسیێ ب زاراوەیێ بادینی یێ پاقژ. ل دەربارەی هەر نەخۆشیەکێ، 50 پەرتووکێن بەلاش، تاقیکرنان یان پەروەردەیا زارۆکان پرسیار بکە، د خزمەتێ دا مە!",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Retrieve API key securely from import.meta.env
  const apiKey = (import.meta.env.VITE_GEMINI_API_KEY as string | undefined) || "";

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  // Local rule-based handler for instant library inquiries and smart fallback
  const getBadiniResponse = (query: string): string | null => {
    const q = query.toLowerCase();
    if (
      q.includes("پەرتووک") || 
      q.includes("پەرتوک") || 
      q.includes("کتێب") || 
      q.includes("pirtuk") || 
      q.includes("pirtûk") || 
      q.includes("library") ||
      q.includes("مەکتەبە") ||
      q.includes("خواندن")
    ) {
      return "بەلێ بەرێز! 🤗📚 مە پەرتوکخانەکا مەزن هەیە! 50 پەرتوکێن ناڤدار یێن دەرونناسیێ یێن بەلاش! هەمی ب بدینی هاتینە کورتیکرن. تو دشێی بچیه بەشێ '📚 پەرتوکخانە' ل سەری و تەمامی بخوینی. چ پەرتوک تە دڤێت؟";
    }

    if (q.includes("تاقیکرن") || q.includes("test") || q.includes("مبتی") || q.includes("mbti")) {
      return "بەلێ گەلەک ب خێربێی! مە 6 تاقیکرنێن دەروونی یێن زانستی هەنە: MBTI (16 کەسایەتی)، پیڤەرا سترێسێ، خەمۆکیێ (BDI)، و دڵەڕاوکێێ. تو دشێی بچیە بەشێ 'تاقیکرن' ل سەری و ئێکسەر ئەنجامێ خۆ ببینی!";
    }

    if (q.includes("خەمۆک") || q.includes("دڵەڕاوکێ") || q.includes("سترێس") || q.includes("خەو")) {
      return "سڵاڤ ل تە برا یان خوشکا عەزیز. دڵەڕاوکێ و خەمۆکی وەک بایەکێ رەشە ل دەروونی، لێ ب رێکێن زانستی وەک چارەسەریا هزری-رەفتاری (CBT) و هەناسەدانا کوور گەلەک ب ساناهی دهێنە چارەسەرکرن. بێهیوا نەبە، ئەگەر نیشانە گەلەک د دژوار بن، سەردانا پسپۆرێ دەروونی ل باژێرێ خۆ بکە.";
    }

    return null;
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    setErrorMessage(null);
    const userMsgId = `user-${Date.now()}`;
    const newMessages: Message[] = [
      ...messages,
      { id: userMsgId, sender: 'user', text: query, timestamp: new Date() }
    ];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    // Check if the query is directly about library or instant answer
    const directLibraryMatch = getBadiniResponse(query);
    if (directLibraryMatch && (query.includes("پەرتوک") || query.includes("کتێب") || query.includes("pirtuk") || query.includes("pirtûk"))) {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { id: `ai-${Date.now()}`, sender: 'ai', text: directLibraryMatch, timestamp: new Date() }
        ]);
        setIsLoading(false);
      }, 500);
      return;
    }

    if (!apiKey) {
      // Graceful instant Badini answer even if user hasn't put API key yet!
      setTimeout(() => {
        const fallback = directLibraryMatch || 
          "بەلێ گەلەک ب خێربێی! ئەز یاریدەدەرێ تە یێ بادینی مە. مە 120 بابەتێن دەروونناسیێ و 50 پەرتووکێن بەلاش و 6 تاقیکرن هەنە. پرسیارا خۆ بنڤیسە، ئەز ل دەف تەمە!";
        setMessages(prev => [
          ...prev,
          { id: `ai-${Date.now()}`, sender: 'ai', text: fallback, timestamp: new Date() }
        ]);
        setIsLoading(false);
      }, 500);
      return;
    }

    try {
      // Build request with STRICT Badini system instruction
      const formattedContents = [
        {
          role: "user",
          parts: [{ text: `${SYSTEM_PROMPT}\n\nUser Question: ${query}\n\nRemember: Answer ONLY in 100% Pure Badini Kurdish. Never use Sorani (no چۆن, بۆچی, من, تۆ), never use English or Arabic.` }]
        }
      ];

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: formattedContents,
            generationConfig: {
              temperature: 0.6,
              maxOutputTokens: 1000,
            }
          })
        }
      );

      if (!response.ok) {
        // Fallback to gemini-2.5-flash if 1.5-flash endpoint requires alternative
        const fallbackResponse = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: formattedContents,
              generationConfig: { temperature: 0.6, maxOutputTokens: 1000 }
            })
          }
        );

        if (!fallbackResponse.ok) {
          throw new Error("API call error");
        }

        const data = await fallbackResponse.json();
        const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "ببورە، تێکچوونەک چێبوو.";
        setMessages(prev => [
          ...prev,
          { id: `ai-${Date.now()}`, sender: 'ai', text: aiReply, timestamp: new Date() }
        ]);
        return;
      }

      const data = await response.json();
      const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "ببورە، بەرسڤ نەگەهشت.";
      
      setMessages(prev => [
        ...prev,
        { id: `ai-${Date.now()}`, sender: 'ai', text: aiReply, timestamp: new Date() }
      ]);
    } catch (err: any) {
      console.error("Chatbot API error:", err);
      // Give warm Badini fallback
      const localReply = directLibraryMatch || 
        "ببورە برایێ من یان خوشکا من! هێلا ئینتەرنێتێ کێمەک سستە، لێ مە 120 بابەتێن دەروونی و 50 پەرتووکێن بەلاش هەنە د بەشێن سەری دا.";
      setMessages(prev => [
        ...prev,
        { 
          id: `ai-err-${Date.now()}`, 
          sender: 'ai', 
          text: localReply, 
          timestamp: new Date() 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* =========================================================================
          FLOATING CHATBOT BUTTON (BOTTOM RIGHT) - Glowing Blue
      ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 via-teal-700 to-slate-900 text-white shadow-2xl shadow-emerald-950/50 border-2 border-emerald-400/40 transition-all focus:outline-none cursor-pointer"
          aria-label="Open Badini AI Psychology Chatbot"
        >
          {/* Glowing pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 blur-md animate-pulse -z-10" />

          {isOpen ? (
            <>
              <X size={22} className="text-white" />
              <span className="font-bold text-xs sm:text-sm">داخستن</span>
            </>
          ) : (
            <>
              <div className="relative">
                <MessageCircle size={24} className="text-white fill-white/20" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full animate-ping" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full" />
              </div>
              <span className="font-extrabold text-xs sm:text-sm tracking-wide">
                پرسیار بکە
              </span>
              <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full bg-white/20 text-emerald-200 font-semibold">
                AI بادینی
              </span>
            </>
          )}
        </motion.button>
      </div>

      {/* =========================================================================
          CHATBOT WINDOW (GLASSMORPHISM DESIGN)
      ========================================================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[92vw] sm:w-[420px] h-[600px] max-h-[82vh] bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#EADFCF]/80 flex flex-col overflow-hidden z-40"
          >
            {/* Header: Title "Behra Derûnê AI - پرسیار بکە" */}
            <div className="bg-gradient-to-r from-[#102A43] via-[#1c3d5a] to-[#243B53] text-white p-4.5 px-5 flex items-center justify-between shrink-0 shadow-md border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#6D9479] flex items-center justify-center text-white shadow-inner font-bold text-lg">
                  🧠
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base leading-tight flex items-center gap-1.5">
                    <span>Behra Derûnê AI</span>
                    <span className="text-xs font-normal text-[#A3C7AD]">• پرسیار بکە</span>
                  </h3>
                  <p className="text-[11px] text-[#BCCCDC] font-medium">
                    100% کوردی بادینی یا پاقژ • مامۆستایێ دەروونی
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMessages([messages[0]])}
                  className="p-1.5 rounded-xl hover:bg-white/10 text-[#BCCCDC] hover:text-white transition-colors cursor-pointer"
                  title="دەستپێکرنەڤە"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-xl hover:bg-white/10 text-white transition-colors cursor-pointer"
                  aria-label="داخستن"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Quick Badge: Library & 120 Topics Knowledge */}
            <div className="bg-[#FAF8F5] border-b border-[#EADFCF]/70 px-4 py-2 text-[11px] text-[#334E68] font-bold flex items-center justify-between shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[#6D9479]">✨</span>
                <span>120 بابەت • 50 پەرتووکێن بەلاش • 6 تاقیکرن</span>
              </div>
              {onNavigateToLibrary && (
                <button 
                  onClick={() => {
                    onNavigateToLibrary();
                    setIsOpen(false);
                  }}
                  className="text-[#6D9479] hover:underline flex items-center gap-1 cursor-pointer font-extrabold"
                >
                  <BookOpen size={12} />
                  <span>پەرتوکخانە</span>
                </button>
              )}
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 custom-scrollbar bg-[#FBF9F5]/80">
              {messages.map((msg) => {
                const isUser = msg.sender === 'user';

                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-xs whitespace-pre-wrap font-arabic text-right ${
                        isUser
                          ? 'bg-[#102A43] text-white rounded-tr-xs'
                          : 'bg-white/95 text-[#102A43] border border-[#EADFCF] rounded-tl-xs shadow-slate-200/50'
                      }`}
                      dir="rtl"
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-[#829AB1] mt-1 px-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                );
              })}

              {/* Typing Animation */}
              {isLoading && (
                <div className="flex items-start gap-2">
                  <div className="bg-white/95 border border-[#EADFCF] rounded-2xl rounded-tl-xs px-4 py-3 shadow-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#102A43] animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-full bg-[#6D9479] animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-[#102A43] animate-bounce" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions Pills */}
            <div className="p-2.5 px-3 bg-white border-t border-[#EADFCF]/70 overflow-x-auto custom-scrollbar flex items-center gap-2 shrink-0">
              <span className="text-[10px] font-bold text-[#829AB1] uppercase tracking-wider shrink-0 font-arabic">
                پێشنیاز:
              </span>
              {SUGGESTED_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q.label)}
                  disabled={isLoading}
                  className="shrink-0 text-xs bg-[#FAF8F5] hover:bg-[#E6EDE8] text-[#102A43] border border-[#EADFCF] px-3 py-1.5 rounded-full transition-colors font-arabic cursor-pointer font-medium"
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white border-t border-[#EADFCF] flex items-center gap-2 shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ب بادینی یا پاقژ پرسیار بکە (بۆ نموونە: پەرتوکخانە هەیە؟)..."
                disabled={isLoading}
                dir="rtl"
                className="flex-1 bg-[#FAF8F5] focus:bg-white text-xs sm:text-sm text-[#102A43] placeholder-[#829AB1] px-4 py-2.5 rounded-full border border-[#EADFCF] focus:border-[#6D9479] focus:outline-none transition-all shadow-inner font-arabic"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-full bg-[#102A43] hover:bg-[#1c3d5a] disabled:bg-[#D9E2EC] text-white disabled:text-[#829AB1] flex items-center justify-center transition-all shadow-md shrink-0 cursor-pointer disabled:cursor-not-allowed"
                aria-label="Send Message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
