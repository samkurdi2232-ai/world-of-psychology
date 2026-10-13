import React, { useState, useMemo, useEffect } from "react";
import { 
  Search, BookOpen, Filter, Sparkles, X, ChevronRight, Bookmark, 
  BookmarkCheck, Share2, Volume2, ShieldAlert, Brain, Microchip, 
  FlaskConical, User, HeartPulse, SlidersHorizontal, CheckCircle2,
  Stethoscope, Layers, Compass, Pill, Activity, ShieldCheck, Scale, Briefcase, Baby, Users
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MEGA_10K_TOPICS, Topic10k, CATEGORY_10K_METADATA, CategoryKey } from "./mega10kFull";
import { SCIENTISTS, Scientist } from "./scientists";
import { ScientistDetailModal } from "../ScientistsView";

export default function EncyclopediaView() {
  const allTopics = MEGA_10K_TOPICS;
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [selectedTopic, setSelectedTopic] = useState<Topic10k | null>(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 24;

  // Bookmarking state
  const [savedTopicIds, setSavedTopicIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("behra_mega10k_bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const toggleBookmark = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedTopicIds(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      try {
        localStorage.setItem("behra_mega10k_bookmarks", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleCopy = (topic: Topic10k, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    try {
      const text = `${topic.titleKu} (${topic.titleEn})\n\nپۆلێن: ${topic.categoryKu}\n\nکورتە: ${topic.shortDesc}\n\nنیشانێن سەرەکی:\n${topic.symptoms.map(s => `- ${s}`).join("\n")}\n\nسەدەم و هۆکار:\n${topic.causes.map(c => `- ${c}`).join("\n")}\n\nچارەسەری:\n${topic.treatment.map(t => `- ${t}`).join("\n")}\n\nشرۆڤە:\n${topic.fullText}\n\nژێدەر: بەحرا دەرونناسی - ئینسایکلۆپیدیایا ١٠،٠٠٠ بابەت (2026-2027)`;
      navigator.clipboard.writeText(text);
      setCopiedId(topic.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {}
  };

  const handleSpeak = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ku-IQ"; // Kurdish fallback
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Filter topics
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return allTopics.filter(t => {
      const matchesCat = cat === "all" || t.category === cat;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        t.titleEn.toLowerCase().includes(q) ||
        t.titleKu.toLowerCase().includes(q) ||
        t.shortDesc.toLowerCase().includes(q) ||
        t.fullText.toLowerCase().includes(q) ||
        (t.tags && t.tags.some(tag => tag.toLowerCase().includes(q))) ||
        (t.dsmOrRef && t.dsmOrRef.toLowerCase().includes(q)) ||
        t.symptoms.some(s => s.toLowerCase().includes(q)) ||
        t.causes.some(c => c.toLowerCase().includes(q)) ||
        t.treatment.some(tr => tr.toLowerCase().includes(q))
      );
    });
  }, [allTopics, search, cat]);

  // Reset pagination on filter or search change
  useEffect(() => {
    setPage(1);
  }, [search, cat]);

  const paginatedTopics = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, page]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const [selectedScientist, setSelectedScientist] = useState<Scientist | null>(null);

  // Exact 12 Categories menu requested by user
  const categoriesConfig: { key: string; label: string; icon: string; count: number }[] = [
    { key: "all", label: "هەمی 10,000 بابەت", icon: "🧠", count: 10000 },
    { key: "Nexoshi", label: "تێکچوونێن دەرونی", icon: "💔", count: 1500 },
    { key: "Birodoz", label: "بیردۆز", icon: "💡", count: 1200 },
    { key: "Ezmun", label: "ئەزموون", icon: "🔬", count: 1000 },
    { key: "Zana", label: "زانا", icon: "👨‍🏫", count: 500 },
    { key: "CheMek", label: "چەمک", icon: "🧩", count: 1500 },
    { key: "Chareser", label: "چارەسەری", icon: "💊", count: 800 },
    { key: "Test", label: "تێست", icon: "📝", count: 500 },
    { key: "Neuro", label: "مێشک و دەمار", icon: "🧬", count: 1000 },
    { key: "Zarok", label: "دەرونناسیا زارۆکان", icon: "👶", count: 1000 },
    { key: "Civaki", label: "دەرونناسیا جڤاکی", icon: "👥", count: 1000 },
    { key: "Pishi", label: "دەرونناسیا پیشەسازی", icon: "🏢", count: 500 },
    { key: "Dadi", label: "دەرونناسیا یاسایی", icon: "⚖️", count: 500 },
  ];

  // Filtered scientists when category is Zana or search matches
  const filteredScientists = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return SCIENTISTS;
    return SCIENTISTS.filter(s => 
      s.nameKu.toLowerCase().includes(q) ||
      s.nameEn.toLowerCase().includes(q) ||
      s.shortBio.toLowerCase().includes(q) ||
      s.nationality.toLowerCase().includes(q) ||
      s.theories.some(t => t.nameKu.toLowerCase().includes(q) || t.name.toLowerCase().includes(q))
    );
  }, [search]);

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn" dir="rtl">
      
      {/* =========================================================================
          HERO BANNER & SEARCH - 2026-2027 GLASSMORPHIC BENTO HEADER
      ========================================================================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 border border-indigo-500/20 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-emerald-400 text-xs font-bold">
            <Sparkles size={14} />
            <span>ئینسایکلۆپیدیایا مەزنا دەروونناسیێ • 10,000 بابەت</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            📚 فەرهەنگ و ئینسایکلۆپیدیا دەرونناسی - {allTopics.length.toLocaleString()} بابەت
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            گەڕیان د ناڤ 10,000 بابەتێن کلینیکی و ئەکادیمی دا: نەخۆشیێن DSM-5 و ICD-11، بیردۆزێن مەزن، ئەزموونێن ناڤدار، دەمارناسی، دەروونناسیا زارۆک، جڤاکی، پیشەیی و دادوەری ب زمانێ کوردی یێ بادینی یێ پاقژ.
          </p>

          {/* Quick Stats Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
            <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-center">
              <div className="text-base sm:text-xl font-black text-emerald-400">10,000</div>
              <div className="text-[11px] text-slate-400 font-medium">بابەتێن بەرهەڤ</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-center">
              <div className="text-base sm:text-xl font-black text-indigo-400">DSM-5 & ICD-11</div>
              <div className="text-[11px] text-slate-400 font-medium">ستانداردێن جیهانی</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-center">
              <div className="text-base sm:text-xl font-black text-amber-400">12 پۆڵێن</div>
              <div className="text-[11px] text-slate-400 font-medium">پۆڵێنێن سەرەکی</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-center">
              <div className="text-base sm:text-xl font-black text-rose-400">Britannica 2027</div>
              <div className="text-[11px] text-slate-400 font-medium">پێوەری ئەکادیمی</div>
            </div>
          </div>
        </div>

        {/* Global Instant Search Bar */}
        <div className="mt-6 relative">
          <div className="relative flex items-center">
            <Search className="absolute right-4 text-slate-400 pointer-events-none" size={20} />
            <input 
              type="text"
              placeholder="🔍 ل ناڤ 10,000 بابەتی دا بگەرە (خەمۆکی، دڵەڕاوکێ، فروید، ستانفۆرد، نیشانە، چارەسەری، مێشک...)"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-12 py-3.5 sm:py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white/15 transition-all shadow-inner"
            />
            {search && (
              <button 
                onClick={() => setSearch("")}
                className="absolute left-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="پاقژکرن"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* =========================================================================
          CATEGORY FILTER TABS (All 12 Categories)
      ========================================================================= */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categoriesConfig.map(c => {
          const isActive = cat === c.key;
          return (
            <button
              key={c.key}
              onClick={() => setCat(c.key)}
              className={`
                px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold shrink-0 flex items-center gap-2 transition-all duration-200
                ${isActive 
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105" 
                  : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                }
              `}
            >
              <span>{c.icon}</span>
              <span>{c.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                {c.count.toLocaleString()}
              </span>
            </button>
          );
        })}
      </div>

      {/* Counter bar */}
      <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 px-1">
        <div>
          نیشاندان <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">{filtered.length.toLocaleString()}</span> ژ <span className="text-slate-900 dark:text-white font-extrabold">{allTopics.length.toLocaleString()}</span> بابەتان
        </div>
        {savedTopicIds.length > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400">
            <BookmarkCheck size={15} />
            <span>{savedTopicIds.length} بابەتێن هەڵگرتی</span>
          </div>
        )}
      </div>

      {/* =========================================================================
          TOPIC CARDS & SCIENTISTS BENTO GRID
      ========================================================================= */}
      {cat === "Zana" && filteredScientists.length > 0 && search && (
        <div className="mb-6 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-900 dark:text-cyan-200 flex items-center justify-between text-xs sm:text-sm">
          <span className="font-bold flex items-center gap-2">
            <span className="text-xl">👤</span>
            <span>ئینسایکلۆپیدیایا زانایێن دەروونناسیێ: {filteredScientists.length} زانایێن هاوتا دگەل گەڕیانێ</span>
          </span>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="text-4xl">🔍</div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
            چ ئەنجام نەهاتنە دیتن بۆ "{search}"
          </h3>
          <p className="text-xs text-slate-500">
            هیڤیە پەیڤەکا دی تاقی بکە یان پۆلێنێ بگوهۆڕە بۆ "هەمی بابەت".
          </p>
          <button 
            onClick={() => { setSearch(""); setCat("all"); }}
            className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors"
          >
            پشکنینا هەمی بابەتان
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {paginatedTopics.map(topic => {
            const catInfo = CATEGORY_10K_METADATA[topic.category] || { 
              nameKu: topic.categoryKu, 
              color: "text-slate-500", 
              bg: "bg-slate-100", 
              icon: "📄" 
            };
            const isBookmarked = savedTopicIds.includes(topic.id);

            return (
              <motion.div
                key={topic.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedTopic(topic)}
                className="group relative p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-3">
                  {/* Category Pill & Bookmark Button */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold border ${catInfo.bg} ${catInfo.color}`}>
                      <span>{catInfo.icon}</span>
                      <span>{catInfo.nameKu}</span>
                    </span>

                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        #{topic.id}
                      </span>
                      <button
                        onClick={(e) => toggleBookmark(topic.id, e)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title={isBookmarked ? "لابردن ژ هەڵگرتیان" : "هەڵگرتن"}
                      >
                        {isBookmarked ? <BookmarkCheck size={16} className="text-amber-500" /> : <Bookmark size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Title & English Subtitle */}
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {topic.titleKu}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-mono mt-0.5">
                      {topic.titleEn}
                    </p>
                  </div>

                  {/* Description preview */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {topic.shortDesc}
                  </p>
                </div>

                {/* Card Footer: Reference & Read Button */}
                <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 font-medium truncate max-w-[180px]">
                    {topic.dsmOrRef || `بابەتێ #${topic.id}`}
                  </span>

                  <button
                    onClick={() => setSelectedTopic(topic)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:underline"
                  >
                    <span>بخوێنە</span>
                    <ChevronRight size={14} className="rotate-180" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* =========================================================================
          PAGINATION BAR WITH QUICK JUMP
      ========================================================================= */}
      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          <button
            onClick={() => setPage(1)}
            disabled={page === 1}
            className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            دەستپێک
          </button>

          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            بەرەڤ پاش
          </button>

          <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300">
            <span>پەڕپەڕا {page.toLocaleString()} ژ {totalPages.toLocaleString()}</span>
          </div>

          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            بەرەڤ پێش
          </button>

          <button
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages}
            className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            دوماهیک
          </button>
        </div>
      )}

      {/* Bottom Summary text */}
      <p style={{ textAlign: "center", marginTop: "20px" }} className="text-xs text-slate-500 dark:text-slate-400">
        نیشاندان {filtered.length.toLocaleString()} ژ {allTopics.length.toLocaleString()} بابەتان • ئینسایکلۆپیدیایا مەزنا دەرونناسیێ 2026-2027
      </p>

      {/* =========================================================================
          FULL TOPIC DETAIL MODAL - CLINICAL BENTO DRAWER
      ========================================================================= */}
      <AnimatePresence>
        {selectedTopic && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTopic(null)}
                className="absolute top-5 left-5 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="گرتن"
              >
                <X size={20} />
              </button>

              {/* Category & Reference badge */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {CATEGORY_10K_METADATA[selectedTopic.category] && (
                  <span className={`px-3 py-1 rounded-xl text-xs font-bold border ${CATEGORY_10K_METADATA[selectedTopic.category].bg} ${CATEGORY_10K_METADATA[selectedTopic.category].color}`}>
                    {CATEGORY_10K_METADATA[selectedTopic.category].icon} {selectedTopic.categoryKu}
                  </span>
                )}
                {selectedTopic.dsmOrRef && (
                  <span className="px-3 py-1 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-mono font-bold">
                    {selectedTopic.dsmOrRef}
                  </span>
                )}
                <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium">
                  کۆدێ بابەتێ: #{selectedTopic.id}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                  {selectedTopic.titleKu}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
                  {selectedTopic.titleEn}
                </p>
              </div>

              {/* Action Toolbar (Listen, Bookmark, Copy) */}
              <div className="flex items-center gap-2 pt-2 pb-3 border-y border-slate-100 dark:border-slate-800 text-xs">
                <button
                  onClick={() => handleSpeak(`${selectedTopic.titleKu}. ${selectedTopic.shortDesc}. ${selectedTopic.fullText}`)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-colors ${
                    isSpeaking 
                      ? "bg-rose-500/10 text-rose-600 border-rose-500/30" 
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-transparent hover:bg-slate-200"
                  }`}
                >
                  <Volume2 size={16} />
                  <span>{isSpeaking ? "راگرتن" : "گوهدان ب دەنگ"}</span>
                </button>

                <button
                  onClick={() => toggleBookmark(selectedTopic.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
                >
                  {savedTopicIds.includes(selectedTopic.id) ? (
                    <>
                      <BookmarkCheck size={16} className="text-amber-500" />
                      <span className="text-amber-600 dark:text-amber-400 font-bold">هەڵگرتییە</span>
                    </>
                  ) : (
                    <>
                      <Bookmark size={16} />
                      <span>هەڵگرتن</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleCopy(selectedTopic)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
                >
                  {copiedId === selectedTopic.id ? (
                    <>
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      <span className="text-emerald-600 font-bold">هاتە کۆپیکردن!</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={16} />
                      <span>کۆپیکرن</span>
                    </>
                  )}
                </button>
              </div>

              {/* Description callout */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                {selectedTopic.shortDesc}
              </div>

              {/* 3-Pillar Clinical Bento Grid: Symptoms, Causes, Treatment */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* 1. Symptoms */}
                <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-2">
                  <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-black text-xs">
                    <Activity size={16} />
                    <span>نیشانێن سەرەکی (Symptoms):</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                    {selectedTopic.symptoms.map((sym, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Causes */}
                <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-2">
                  <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-black text-xs">
                    <Brain size={16} />
                    <span>سەدەم و هۆکار (Causes):</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                    {selectedTopic.causes.map((cau, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{cau}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Treatment */}
                <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-black text-xs">
                    <HeartPulse size={16} />
                    <span>چارەسەری (Treatment):</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                    {selectedTopic.treatment.map((tre, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{tre}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Full Text */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 tracking-wider">
                  شرۆڤەکرن و پەڕپەڕا زانستی یا تەمام:
                </h4>
                <div className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line space-y-3 bg-slate-50/50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800">
                  {selectedTopic.fullText}
                </div>
              </div>

              {/* Tags */}
              {selectedTopic.tags && selectedTopic.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-400 ml-1">تەگێن بابەتێ:</span>
                  {selectedTopic.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Scientist Detail Modal if opened from Encyclopedia */}
      {selectedScientist && (
        <ScientistDetailModal 
          scientist={selectedScientist} 
          onClose={() => setSelectedScientist(null)} 
          onNavigate={(s) => setSelectedScientist(s)}
          isBookmarked={savedTopicIds.includes(selectedScientist.id)}
          onToggleBookmark={() => toggleBookmark(selectedScientist.id)}
        />
      )}

    </div>
  );
}
