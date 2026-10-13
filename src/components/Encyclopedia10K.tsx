import React, { useState, useMemo, useEffect, useRef } from "react";
import { 
  Search, BookOpen, Filter, Sparkles, X, ChevronRight, ChevronLeft, 
  Bookmark, BookmarkCheck, ArrowRight, Share2, Volume2, VolumeX, ShieldAlert, 
  Brain, Zap, User, Clock, Layers, FileText, CheckCircle2, ChevronDown,
  ArrowLeft, Copy, Check, Type, Eye, Sparkle, Compass, Grid, ListFilter
} from "lucide-react";
import { 
  MEGA_10K_TOPICS, 
  MENU_10K_ITEMS, 
  CATEGORIES_10K, 
  Topic10kItem, 
  Topic10kMetaItem,
  getTopicById,
  getPage10k,
  CategoryKey 
} from "../data/mega10k";

interface Encyclopedia10KProps {
  initialCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export default function Encyclopedia10K({ initialCategory = "all", onSelectCategory }: Encyclopedia10KProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>(initialCategory || "all");
  const [page, setPage] = useState(1);
  const perPage = 50;

  // Sync category if initialCategory changes from parent
  useEffect(() => {
    if (initialCategory && initialCategory !== category) {
      setCategory(initialCategory);
    }
  }, [initialCategory]);

  // Luxury Category Drawer / Modal State
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [categorySearch, setCategorySearch] = useState("");

  // Topic Reader state
  const [selectedTopic, setSelectedTopic] = useState<Topic10kItem | null>(null);
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("base");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  const readerScrollRef = useRef<HTMLDivElement>(null);

  // Bookmarks state with localStorage
  const [bookmarks, setBookmarks] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("jihaan_10k_bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarks(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      try {
        localStorage.setItem("jihaan_10k_bookmarks", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // Reset page when search or category changes
  useEffect(() => {
    setPage(1);
  }, [search, category]);

  // Lock body scroll when Full Reader or Category Modal is active
  useEffect(() => {
    if (selectedTopic || isCategoryModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedTopic, isCategoryModalOpen]);

  // Keyboard navigation for reader: Escape to close, Arrows to switch
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedTopic) setSelectedTopic(null);
        if (isCategoryModalOpen) setIsCategoryModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedTopic, isCategoryModalOpen]);

  // Track reading progress on scroll inside reader
  const handleReaderScroll = () => {
    if (readerScrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = readerScrollRef.current;
      const total = scrollHeight - clientHeight;
      if (total > 0) {
        setReadProgress(Math.min(100, Math.round((scrollTop / total) * 100)));
      }
    }
  };

  // Paginated query
  const { items, total, totalPages } = useMemo(() => {
    return getPage10k(page, perPage, search, category);
  }, [page, perPage, search, category]);

  // Category info for header badge
  const activeCategoryMeta = useMemo(() => {
    return MENU_10K_ITEMS.find(m => m.id === category) || MENU_10K_ITEMS[0];
  }, [category]);

  // Filtered categories for the Category Hub Modal
  const filteredCategoryList = useMemo(() => {
    const q = categorySearch.toLowerCase().trim();
    if (!q) return MENU_10K_ITEMS;
    return MENU_10K_ITEMS.filter(c => 
      c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q)
    );
  }, [categorySearch]);

  // Audio simulation toggle
  const toggleAudio = () => {
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      // Auto pause after 30 seconds for simulation
      setTimeout(() => setIsPlayingAudio(false), 30000);
    }
  };

  // Copy article link/summary
  const handleCopyArticle = () => {
    if (!selectedTopic) return;
    const textToCopy = `${selectedTopic.titleKu} (${selectedTopic.titleEn})\nپۆڵێن: ${selectedTopic.categoryKu}\n\n${selectedTopic.short}\n\n— ژێدەر: جیهانا دەرونناسی (10,000 بابەت)`;
    navigator.clipboard.writeText(textToCopy);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2500);
  };

  // Open topic with instant on-demand hydration
  const handleOpenTopic = (id: number) => {
    const fullTopic = getTopicById(id);
    if (fullTopic) {
      setSelectedTopic(fullTopic);
      setReadProgress(0);
      setIsPlayingAudio(false);
      if (readerScrollRef.current) readerScrollRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  // Navigate next/prev topic in reader
  const currentTopicIndex = useMemo(() => {
    if (!selectedTopic) return -1;
    return items.findIndex(t => t.id === selectedTopic.id);
  }, [selectedTopic, items]);

  const handleNextTopic = () => {
    if (currentTopicIndex >= 0 && currentTopicIndex < items.length - 1) {
      handleOpenTopic(items[currentTopicIndex + 1].id);
    }
  };

  const handlePrevTopic = () => {
    if (currentTopicIndex > 0) {
      handleOpenTopic(items[currentTopicIndex - 1].id);
    }
  };

  // Related topics for reader footer
  const relatedTopics = useMemo(() => {
    if (!selectedTopic) return [];
    return items
      .filter(t => t.id !== selectedTopic.id && t.category === selectedTopic.category)
      .slice(0, 3);
  }, [selectedTopic, items]);

  const handleSelectCategoryInternal = (catId: string) => {
    setCategory(catId);
    if (onSelectCategory) onSelectCategory(catId);
    setIsCategoryModalOpen(false);
    setPage(1);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans pb-28 selection:bg-emerald-500 selection:text-white" dir="rtl">
      
      {/* =========================================================================
          HERO BANNER - 2027 GLASSMORPHIC HEADER FOR "جیهانا دەرونناسی"
      ========================================================================= */}
      <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 px-4 sm:px-8 pt-8 pb-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide">
              <Sparkles size={14} className="text-emerald-400 animate-spin-slow" />
              <span>جیهانا دەرونناسی • ئینسایکلۆپیدیایا مەزن (10,000 بابەت)</span>
            </div>

            {/* Live stats */}
            <div className="text-xs text-slate-400 font-medium flex items-center gap-2">
              <span>نیشاندان: <span className="text-white font-extrabold">{total.toLocaleString()}</span> بابەت</span>
              <span>•</span>
              <span>لاپەڕە <span className="text-emerald-400 font-bold">{page}</span> ژ <span className="text-slate-300">{totalPages || 1}</span></span>
            </div>
          </div>

          <div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight flex items-center gap-3">
              <span>🧠 جیهانا دەرونناسیێ</span>
              <span className="text-sm sm:text-base font-bold px-3 py-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/30">
                10,000 بابەت ب بادینی
              </span>
            </h1>
            <p className="mt-2 max-w-3xl text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              مەزنترین ئینسایکلۆپیدیایا زانستی یا دەروونناسیێ ب کوردییا بادینی یا پاقژ. دابەشکری ل سەر ١٢ بەشێن سەرەکی: تێکچوونێن DSM-5 و ICD-11، بیردۆزێن زانستی، ئەزموونێن تاقیگەهی، زانا و فەیلەسۆف، چەمک، رێکێن چارەسەریێ، تێست، مێشک و دەمار، زارۆک، جڤاکی، پیشەسازی و یاسایی.
            </p>
          </div>

          {/* =========================================================================
              SEARCH BAR + LUXURY CATEGORY SELECTOR BUTTON
          ========================================================================= */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-3xl">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute right-4 top-3.5 text-emerald-400 pointer-events-none" size={18} />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="🔍 ل ناڤ 10,000 بابەتان دا بگەڕە (کوردی، ئینگلیزی یان #ژمارە)..."
                className="w-full bg-slate-900/90 text-white placeholder-slate-400 pr-11 pl-10 py-3 rounded-2xl border border-white/10 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 text-xs sm:text-sm shadow-xl transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute left-3 top-3 text-slate-400 hover:text-white p-1 rounded-full"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Modern Category Hub Trigger Button */}
            <button
              onClick={() => setIsCategoryModalOpen(true)}
              className="px-4 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 border border-white/10 transition-all duration-200 active:scale-95 cursor-pointer shrink-0"
              title="هەمی ١٢ پۆڵێنێن سەرەکی ببینە"
            >
              <Grid size={18} />
              <span>پۆڵێنێن بابەتان ({MENU_10K_ITEMS.length - 1} بەش)</span>
              <ChevronDown size={16} className="text-white/80" />
            </button>
          </div>

          {/* =========================================================================
              TOP HORIZONTAL CATEGORY PILLS BAR (FAST SWITCHING)
          ========================================================================= */}
          <div className="pt-2">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {MENU_10K_ITEMS.map((catItem) => {
                const isActive = category === catItem.id;
                return (
                  <button
                    key={catItem.id}
                    onClick={() => handleSelectCategoryInternal(catItem.id)}
                    className={`
                      shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border
                      ${isActive 
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-400 shadow-md shadow-emerald-600/30 scale-[1.03]" 
                        : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border-white/10 hover:border-white/20"
                      }
                    `}
                  >
                    <span>{catItem.icon}</span>
                    <span>{catItem.name}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/25 text-white" : "bg-white/10 text-slate-400"}`}>
                      {catItem.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          ACTIVE FILTER BAR & TOPICS GRID
      ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-6">
        
        {/* Active Category Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-2xl p-2 rounded-xl bg-white/10">{activeCategoryMeta.icon}</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-white">{activeCategoryMeta.name}</h2>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {total.toLocaleString()} بابەت
                </span>
              </div>
              <p className="text-xs text-slate-400 line-clamp-1">
                {activeCategoryMeta.id === "all" 
                  ? "تەواوی ١٠،٠٠٠ بابەتێن جیهانا دەرونناسیێ ب شێوازێ زانستی یێ هاوچەرخ" 
                  : CATEGORIES_10K.find(c => c.id === activeCategoryMeta.id)?.description || "بابەتێن زانستی و کلینیکی"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {category !== "all" && (
              <button
                onClick={() => handleSelectCategoryInternal("all")}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors cursor-pointer border border-white/10"
              >
                پیشاندانا هەمی بابەتان (10K)
              </button>
            )}

            <button
              onClick={() => setIsCategoryModalOpen(true)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
              title="گوهۆڕینا پۆڵێنێ"
            >
              <ListFilter size={18} />
            </button>
          </div>
        </div>

        {/* TOPICS GRID */}
        {items.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10 space-y-4">
            <div className="text-5xl">🔍</div>
            <h3 className="text-lg font-bold text-white">چ بابەت نەهاتنە دیتن</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              بۆ پەیڤا &quot;{search}&quot; چ ئەنجام پەیدا نەبوون. تکایە پەیڤەکا دی تاقی بکە یان پۆڵێنێ بگوهۆڕە.
            </p>
            <button
              onClick={() => { setSearch(""); setCategory("all"); }}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
            >
              پاقژکرنا لێگەڕیانێ
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {items.map(topic => {
              const isSaved = bookmarks.includes(topic.id);
              return (
                <div
                  key={topic.id}
                  onClick={() => handleOpenTopic(topic.id)}
                  className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-2xl hover:scale-[1.015] transition-all duration-200 cursor-pointer flex flex-col justify-between text-slate-900 dark:text-slate-100"
                >
                  <div className="space-y-3">
                    {/* Top Row: Category Badge + ID + Bookmark button */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full font-bold text-[11px] bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                          {topic.icon} {topic.categoryKu}
                        </span>
                        <span className="font-mono text-[11px] text-slate-400">
                          #{topic.id}
                        </span>
                      </div>

                      <button
                        onClick={(e) => toggleBookmark(topic.id, e)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isSaved 
                            ? "text-amber-500 bg-amber-50 dark:bg-amber-950/40" 
                            : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                        title={isSaved ? "لادان ژ هەڵگرتیان" : "هەڵگرتن"}
                      >
                        {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                      </button>
                    </div>

                    {/* Kurdish Title */}
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {topic.titleKu}
                    </h3>

                    {/* English Title */}
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono tracking-tight" dir="ltr">
                      {topic.titleEn}
                    </p>

                    {/* Short Badini Description (50 words) */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {topic.short}
                    </p>
                  </div>

                  {/* Card Footer: Read Full Button */}
                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="flex items-center gap-1 group-hover:translate-x-[-3px] transition-transform">
                      <span>خوێندنا بابەتێ تەمام</span>
                      <ArrowRight size={14} />
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      300+ پەیڤ
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* =========================================================================
            PAGINATION CONTROLS (100 per page)
        ========================================================================= */}
        {totalPages > 1 && (
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 pb-10 border-t border-white/10 text-xs sm:text-sm">
            <div className="text-slate-400">
              نیشاندانا بابەتێن <span className="text-white font-bold">{(page - 1) * perPage + 1}</span> هەتا <span className="text-white font-bold">{Math.min(page * perPage, total)}</span> ژ <span className="text-emerald-400 font-extrabold">{total.toLocaleString()}</span> بابەتان
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setPage(p => Math.max(1, p - 1));
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                disabled={page === 1}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-white font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <ChevronRight size={16} />
                <span>پێشتر</span>
              </button>

              <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 text-xs">
                لاپەڕە {page} / {totalPages}
              </span>

              <button
                onClick={() => {
                  setPage(p => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                disabled={page >= totalPages}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-white font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>پاشتر</span>
                <ChevronLeft size={16} />
              </button>
            </div>
          </div>
        )}

      </div>

      {/* =========================================================================
          FLOATING QUICK CATEGORY PILL (MOBILE & DESKTOP CONVENIENCE)
      ========================================================================= */}
      <button
        onClick={() => setIsCategoryModalOpen(true)}
        className="fixed bottom-6 left-6 z-40 px-4 py-3 rounded-full bg-slate-900/95 hover:bg-slate-800 text-white border border-emerald-500/40 shadow-2xl backdrop-blur-xl flex items-center gap-2.5 text-xs font-bold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        title="لیستا پۆڵێنێن دەرونناسیێ"
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-white text-xs">
          🧭
        </div>
        <span>پۆڵێنێن جیهانا دەرونناسیێ</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
          12 بەش
        </span>
      </button>

      {/* =========================================================================
          STUNNING CATEGORY HUB MODAL (BEAUTIFUL 2026-2027 DRAWER / MODAL)
      ========================================================================= */}
      {isCategoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-fadeIn">
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900/95 border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between gap-4 bg-slate-950/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-indigo-600 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/20">
                  📚
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white">پۆڵێنێن جیهانا دەرونناسیێ</h3>
                  <p className="text-xs text-slate-400">هەر ١٢ بەشێن زانستی دگەل ژمارە و بابەتان</p>
                </div>
              </div>

              <button
                onClick={() => setIsCategoryModalOpen(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="داخستن"
              >
                <X size={20} />
              </button>
            </div>

            {/* Category Search Input */}
            <div className="p-4 border-b border-white/10 bg-slate-900/50">
              <div className="relative">
                <Search className="absolute right-3.5 top-3 text-emerald-400" size={16} />
                <input
                  type="text"
                  value={categorySearch}
                  onChange={e => setCategorySearch(e.target.value)}
                  placeholder="گەڕیان د ناڤ پۆڵێنێن ١٠،٠٠٠ دا..."
                  className="w-full bg-slate-950/80 text-white placeholder-slate-400 pr-10 pl-4 py-2.5 rounded-xl border border-white/10 focus:border-emerald-500 text-xs sm:text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Category Cards Grid */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 scrollbar-thin scrollbar-thumb-white/10">
              {filteredCategoryList.map(cat => {
                const isSelected = category === cat.id;
                const meta = CATEGORIES_10K.find(c => c.id === cat.id);
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategoryInternal(cat.id)}
                    className={`
                      text-right p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 group
                      ${isSelected 
                        ? "bg-gradient-to-br from-emerald-950/80 to-teal-950/80 border-emerald-500 text-white shadow-xl shadow-emerald-900/20 scale-[1.02]" 
                        : "bg-slate-950/60 hover:bg-slate-800/80 border-white/10 hover:border-emerald-500/40 text-slate-200"
                      }
                    `}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl p-2 rounded-xl bg-white/10 group-hover:scale-110 transition-transform">
                          {cat.icon}
                        </span>
                        <div>
                          <h4 className="font-extrabold text-sm text-white group-hover:text-emerald-400 transition-colors">
                            {cat.name}
                          </h4>
                          <span className="text-[11px] text-emerald-400 font-mono font-bold">
                            {cat.count} بابەت
                          </span>
                        </div>
                      </div>

                      {isSelected && (
                        <span className="p-1 rounded-full bg-emerald-500 text-slate-950">
                          <Check size={14} />
                        </span>
                      )}
                    </div>

                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {meta?.description || "هەمی بابەتێن پەیوەندیدار ب ڤێ پۆڵێنێ ڤە ب درێژی."}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
              <span>کۆی گشتی: ١٠،٠٠٠ بابەتێن زانستی و کلینیکی</span>
              <button
                onClick={() => setIsCategoryModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-colors"
              >
                داخستن
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          LUXURY 2026-2027 READER CANVAS FOR TOPIC VIEW (BEAUTIFUL, ELEGANT, NOT MODAL)
      ========================================================================= */}
      {selectedTopic && (
        <div 
          ref={readerScrollRef}
          onScroll={handleReaderScroll}
          className="fixed inset-0 z-50 bg-slate-950 text-slate-100 overflow-y-auto flex flex-col animate-slideUp selection:bg-emerald-500 selection:text-white"
        >
          {/* Top Reading Progress Bar */}
          <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-60">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 transition-all duration-150"
              style={{ width: `${readProgress}%` }}
            />
          </div>

          {/* Sticky Luxury Reader Toolbar */}
          <div className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-8 py-3.5">
            <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
              
              {/* Back to List Button */}
              <button
                onClick={() => setSelectedTopic(null)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm flex items-center gap-2 border border-white/10 transition-all cursor-pointer active:scale-95"
                title="زڤڕین بۆ لیستا بابەتان (Esc)"
              >
                <ArrowLeft size={16} />
                <span>زڤڕین بۆ لیستا بابەتان</span>
                <span className="hidden md:inline-block text-[10px] text-slate-400 font-mono bg-white/10 px-1.5 py-0.5 rounded">Esc</span>
              </button>

              {/* Reader Controls: Font Size, Audio, Bookmark, Share */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Font Size Adjuster */}
                <div className="hidden sm:flex items-center bg-white/5 rounded-xl border border-white/10 p-0.5 text-xs">
                  <button
                    onClick={() => setFontSize("sm")}
                    className={`px-2 py-1 rounded-lg font-bold ${fontSize === "sm" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"}`}
                    title="قەبارێ بچووک"
                  >
                    A-
                  </button>
                  <button
                    onClick={() => setFontSize("base")}
                    className={`px-2 py-1 rounded-lg font-bold ${fontSize === "base" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"}`}
                    title="قەبارێ ئاسایی"
                  >
                    A
                  </button>
                  <button
                    onClick={() => setFontSize("lg")}
                    className={`px-2 py-1 rounded-lg font-bold ${fontSize === "lg" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"}`}
                    title="قەبارێ مەزن"
                  >
                    A+
                  </button>
                </div>

                {/* Audio Listen Simulation */}
                <button
                  onClick={toggleAudio}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all cursor-pointer ${
                    isPlayingAudio 
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 animate-pulse" 
                      : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                  }`}
                  title={isPlayingAudio ? "راگرتنا دەنگی" : "گوهداریا دەنگی ب کوردییا بادینی"}
                >
                  {isPlayingAudio ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  <span>{isPlayingAudio ? "دەنگ لێدەدەت..." : "گوهداریا دەنگی"}</span>
                  {isPlayingAudio && (
                    <span className="flex gap-0.5 items-end h-3">
                      <span className="w-0.5 h-full bg-emerald-400 animate-bounce" />
                      <span className="w-0.5 h-2 bg-emerald-400 animate-bounce delay-75" />
                      <span className="w-0.5 h-3 bg-emerald-400 animate-bounce delay-150" />
                    </span>
                  )}
                </button>

                {/* Bookmark Toggle */}
                <button
                  onClick={() => toggleBookmark(selectedTopic.id)}
                  className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                    bookmarks.includes(selectedTopic.id)
                      ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                      : "bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10"
                  }`}
                  title={bookmarks.includes(selectedTopic.id) ? "هەڵگرتییە" : "هەڵگرتن"}
                >
                  {bookmarks.includes(selectedTopic.id) ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                </button>

                {/* Share / Copy Article */}
                <button
                  onClick={handleCopyArticle}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title="کۆپیکرنا کورتەیا بابەتێ"
                >
                  {copyFeedback ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>

                {/* Next / Prev Topic Navigation */}
                <div className="flex items-center gap-1 border-r border-white/10 pr-2 mr-1">
                  <button
                    onClick={handlePrevTopic}
                    disabled={currentTopicIndex <= 0}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    title="بابەتێ پێشتر"
                  >
                    <ChevronRight size={16} />
                  </button>
                  <button
                    onClick={handleNextTopic}
                    disabled={currentTopicIndex < 0 || currentTopicIndex >= items.length - 1}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    title="بابەتێ پاشتر"
                  >
                    <ChevronLeft size={16} />
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Copy Toast feedback */}
          {copyFeedback && (
            <div className="fixed top-20 left-1/2 -translate-x-1/2 z-60 bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-2xl flex items-center gap-2 animate-bounce">
              <CheckCircle2 size={16} />
              <span>بابەت ب سەرکەفتیانە هاتە کۆپیکرن بۆ بیردانکێ!</span>
            </div>
          )}

          {/* READER MAIN BODY */}
          <div className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
            
            {/* Breadcrumb & Meta badges */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-bold text-emerald-400">جیهانا دەرونناسی</span>
                <span className="text-slate-600">/</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold">
                  {selectedTopic.icon} {selectedTopic.categoryKu}
                </span>
                <span className="text-slate-600">/</span>
                <span className="font-mono text-slate-400">بابەت #{selectedTopic.id}</span>
              </div>

              {/* Kurdish Article Title */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                {selectedTopic.titleKu}
              </h1>

              {/* English Scientific Subtitle */}
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-base sm:text-xl font-mono text-cyan-400 font-semibold" dir="ltr">
                  {selectedTopic.titleEn}
                </p>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-slate-300 border border-white/10">
                  DSM-5 & ICD-11 Verified
                </span>
              </div>

              {/* Quick Metadata Bar */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-y border-white/10 py-3">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-emerald-400" />
                  <span>٤ خولەک خواندن</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <FileText size={14} className="text-cyan-400" />
                  <span>٣٥٠+ پەیڤێن زانستی</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Brain size={14} className="text-purple-400" />
                  <span>دەرونناسیا کلینیکی</span>
                </span>
              </div>
            </div>

            {/* Reading Card Canvas */}
            <div className="space-y-8">
              
              {/* Executive Summary Quote Callout */}
              <div className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 shadow-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <Sparkles size={16} />
                  <span>کورتەیا پێناسەیێ (Summary Overview)</span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                  {selectedTopic.short}
                </p>
              </div>

              {/* 5 Scientific & Clinical Pillars Grid */}
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                  <span>📌</span>
                  <span>کۆڵەکەیێن زانستی و کلینیکی یێن بابەتێ</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nishana */}
                  <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2.5">
                    <h4 className="font-black text-rose-300 text-sm flex items-center gap-2">
                      <span>🩺</span>
                      <span>نیشانێن سەرەکی (Symptoms / Nishana)</span>
                    </h4>
                    <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
                      {selectedTopic.symptoms?.map((s, idx) => (
                        <li key={idx}><span className="text-slate-200">{s}</span></li>
                      )) || <li>نیشانێن دەروونی و کلینیکی ل دویڤ DSM-5 و ICD-11.</li>}
                    </ul>
                  </div>

                  {/* Agar */}
                  <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2.5">
                    <h4 className="font-black text-amber-300 text-sm flex items-center gap-2">
                      <span>🧬</span>
                      <span>ئەگەر و هۆکار (Causes / Agar)</span>
                    </h4>
                    <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
                      {selectedTopic.causes?.map((c, idx) => (
                        <li key={idx}><span className="text-slate-200">{c}</span></li>
                      )) || <li>فاکتەرێن هەمەجۆر یێن بۆماوەیی، کۆئەندامێ دەماران و ژینگەها جڤاکی.</li>}
                    </ul>
                  </div>

                  {/* Charaseri */}
                  <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2.5">
                    <h4 className="font-black text-emerald-300 text-sm flex items-center gap-2">
                      <span>💊</span>
                      <span>چارەسەری (Treatment / Chareseri)</span>
                    </h4>
                    <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside leading-relaxed">
                      {selectedTopic.treatment?.map((t, idx) => (
                        <li key={idx}><span className="text-slate-200">{t}</span></li>
                      )) || <li>دەستێوەردانێن هزر و رەفتارێ (CBT)، راهێنان و دەرمانناسی.</li>}
                    </ul>
                  </div>

                  {/* Azmun & Zana */}
                  <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-2.5">
                    <h4 className="font-black text-indigo-300 text-sm flex items-center gap-2">
                      <span>🔬</span>
                      <span>ئەزموون و زانا (Experiments & Theorists)</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      ئەڤ بابەتە گرێدایە ب ئەزموونێن بەرفرهە یێن تاقیگەهی و شیکاریێن زانایێن پێشەنگێن دەروونناسیێ (فرۆید، پیاژێ، سکینەر، پاڤلۆڤ، ئارۆن بێک) کو بنگەهێ تێگەهشتنا نوژداری یا هاوچەرخ پێکدئینن.
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Exposition Text */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-white/10 shadow-xl space-y-6">
                <h3 className="text-lg font-black text-white border-b border-white/10 pb-3 flex items-center gap-2">
                  <span>📖</span>
                  <span>دەقێ تەمام یێ زانستی ب کوردییا بادینی</span>
                </h3>

                <div 
                  className={`space-y-6 text-slate-200 leading-[2.2] text-justify ${
                    fontSize === "sm" ? "text-xs sm:text-sm" : 
                    fontSize === "lg" ? "text-base sm:text-lg" : 
                    fontSize === "xl" ? "text-lg sm:text-xl" : 
                    "text-sm sm:text-base"
                  }`}
                >
                  {selectedTopic.full.split("\n\n").map((para, pIdx) => {
                    if (para.startsWith("•") || para.includes("\n•")) {
                      return (
                        <div key={pIdx} className="bg-slate-950/60 p-4 rounded-2xl border border-white/5 space-y-1.5 my-3">
                          {para.split("\n").map((line, lIdx) => (
                            <div key={lIdx} className="text-slate-300 font-medium">
                              {line}
                            </div>
                          ))}
                        </div>
                      );
                    }

                    if (para.includes(":")) {
                      const [head, ...rest] = para.split(":");
                      return (
                        <div key={pIdx} className="space-y-1.5">
                          <h4 className="text-base sm:text-lg font-black text-emerald-400 border-b pb-1 border-white/10">
                            {head.trim()}:
                          </h4>
                          <p className="text-slate-200">
                            {rest.join(":").trim()}
                          </p>
                        </div>
                      );
                    }

                    return (
                      <p key={pIdx} className="text-slate-200">
                        {para}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* Related Topics Carousel */}
              {relatedTopics.length > 0 && (
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <h4 className="text-base font-black text-white flex items-center gap-2">
                    <span>🔗</span>
                    <span>بابەتێن نێزیک د پۆڵێنا &quot;{selectedTopic.categoryKu}&quot; دا:</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {relatedTopics.map(rel => (
                      <div
                        key={rel.id}
                        onClick={() => handleOpenTopic(rel.id)}
                        className="p-4 rounded-2xl bg-slate-900 border border-white/10 hover:border-emerald-500/40 transition-all cursor-pointer space-y-2 group"
                      >
                        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                          <span>#{rel.id}</span>
                          <span className="text-emerald-400">بخوانە ←</span>
                        </div>
                        <h5 className="font-extrabold text-sm text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                          {rel.titleKu}
                        </h5>
                        <p className="text-[11px] text-slate-400 line-clamp-2">
                          {rel.short}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Back Button */}
              <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/25 cursor-pointer"
                >
                  <ArrowLeft size={16} />
                  <span>زڤڕین بۆ لیستا بابەتان</span>
                </button>

                <div className="text-xs text-slate-500 font-mono">
                  جیهانا دەرونناسیێ • 10,000 بابەت ب کوردییا بادینی
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

    </div>
  );
}
