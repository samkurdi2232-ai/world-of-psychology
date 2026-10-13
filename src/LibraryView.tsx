import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Search, Download, Bookmark, BookmarkCheck, Check, 
  ExternalLink, Sparkles, Filter, ChevronRight, FileText, Heart,
  BookA, Share2, Layers, Award, Play, Pause, Volume2, Maximize2,
  Minimize2, Moon, Sun, ArrowLeft, ArrowRight, Eye, CheckCircle2,
  Compass, Clock, Star, Headphones
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { psychologyBooks, LibraryBook } from './data/psychologyBooksData';

export default function LibraryView() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filterType, setFilterType] = useState<"all" | "fulltext" | "audio" | "pdf">("all");
  const [selectedBook, setSelectedBook] = useState<LibraryBook | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('behra_book_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // PDF Viewer Modal States
  const [viewerTheme, setViewerTheme] = useState<"light" | "sepia" | "dark">("light");
  const [fontSize, setFontSize] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"summary" | "read" | "audio">("summary");

  // Audio Player States
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState<number>(1);
  const [audioProgress, setAudioProgress] = useState<number>(0);

  useEffect(() => {
    let interval: any;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress(prev => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 1;
        });
      }, 400 / audioSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio, audioSpeed]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => {
      const next = prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id];
      try {
        localStorage.setItem('behra_book_bookmarks', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const categories = Array.from(new Set(psychologyBooks.map(b => b.category_ku)));

  const filteredBooks = psychologyBooks.filter(book => {
    const matchesCat = selectedCategory === "all" || book.category_ku === selectedCategory;
    const matchesType = 
      filterType === "all" ? true :
      filterType === "fulltext" ? book.isPublicDomainFullText :
      filterType === "audio" ? book.hasAudioSummary :
      filterType === "pdf" ? book.pdfAvailable : true;

    const q = search.toLowerCase().trim();
    const matchesSearch = !q || 
      book.title_ku.toLowerCase().includes(q) ||
      book.title_en.toLowerCase().includes(q) ||
      book.author.toLowerCase().includes(q) ||
      book.summary_ku.toLowerCase().includes(q);

    return matchesCat && matchesType && matchesSearch;
  });

  const handleDownloadSummary = (book: LibraryBook) => {
    const content = `بەحرا دەرونناسی - BEHRA DERÛNÊ\nپەرتوکخانا بەلاش یا دەروونناسیێ\n\n` +
      `ناڤێ پەرتووکێ: ${book.title_ku}\n` +
      `ناڤێ ئینگلیزی: ${book.title_en}\n` +
      `نڤیسەر: ${book.author} (${book.year})\n` +
      `پۆلێن: ${book.category_ku}\n` +
      `هەژمارا لاپەران: ${book.pages_est}\n` +
      `پلەبەندی: ${book.rating || 4.8}/5\n\n` +
      `====================================\n` +
      `ئەڤ پەرتووکه دەربارەی چییە؟ (پوختەیا بادینی):\n` +
      `${book.summary_ku}\n\n` +
      `====================================\n` +
      `خاڵ و وانەیێن سەرەکی:\n` +
      book.keyLessons_ku.map((k, i) => `${i + 1}. ${k}`).join('\n') +
      `\n\n====================================\n` +
      (book.chapters ? `تێکستی تەواو یێ بەشێن پەرتووکێ:\n` + book.chapters.map(c => `[بەشێ ${c.chapter}: ${c.title_ku}]\n${c.content_ku}\n`).join('\n') : '') +
      `\nماف پارێزراوە بۆ خواندەڤانێن کورد • Behra Derûnê 2026-2027`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${book.title_en.replace(/[^a-zA-Z0-9]/g, '_')}_Kurdish_Badini.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const openBookModal = (book: LibraryBook, defaultTab: "summary" | "read" | "audio" = "summary") => {
    setSelectedBook(book);
    setActiveTab(defaultTab);
    setCurrentPage(1);
    setActiveChapterIndex(0);
    setIsPlayingAudio(false);
    setAudioProgress(0);
  };

  return (
    <div className="space-y-8 pb-12" dir="rtl">
      {/* 2027 Glassmorphic Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-6 sm:p-10 shadow-2xl border border-emerald-500/20">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold backdrop-blur-md">
            <BookOpen size={14} className="text-emerald-400 animate-pulse" />
            <span>بەشێ 8: پەرتوکخانا دەروونناسیێ • 100 پەرتوکێن بەلاش</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            📚 پەرتوکخانا دەروونناسی (Free Library)
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            100 پەرتووکێن ناڤدار یێن دەروونناسیێ (فرۆید، کارل یۆنگ، فرینکل، کانیمان، گۆتمان، کارین هۆرنای، ئادلەر) ب کوردییا بادینی یا پاقژ. 20 پەرتووک ب تێکستی کامل یێ بەلاش (Public Domain) و 30+ کورتەیێن دەنگی دگەل PDF Reader یێ پێشکەفتی.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
            <span className="bg-emerald-500/20 px-3 py-1.5 rounded-xl font-bold text-emerald-300 border border-emerald-500/30">
              📖 100 پەرتووکێن هەڵبژارتی
            </span>
            <span className="bg-teal-500/20 px-3 py-1.5 rounded-xl font-bold text-teal-300 border border-teal-500/30">
              🏛️ 20 پەرتووک ب تێکستی کامل
            </span>
            <span className="bg-indigo-500/20 px-3 py-1.5 rounded-xl font-bold text-indigo-300 border border-indigo-500/30">
              🎧 کورتەیێن دەنگی ب بادینی
            </span>
            <span className="bg-amber-500/20 px-3 py-1.5 rounded-xl font-bold text-amber-300 border border-amber-500/30">
              ⚡ 100% بەلاش بێی پارە
            </span>
          </div>
        </div>
      </div>

      {/* Modern Filter & Search Controls */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ل ناڤ 100 پەرتووکان بگەڕە (ناڤ، نڤیسەر، مژار)..."
              className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
            />
            {search && (
              <button 
                onClick={() => setSearch("")}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                پاقژکرن
              </button>
            )}
          </div>

          {/* Quick Type Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <button
              onClick={() => setFilterType("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterType === "all" 
                  ? "bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-400 shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              هەموو ({psychologyBooks.length})
            </button>
            <button
              onClick={() => setFilterType("fulltext")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterType === "fulltext" 
                  ? "bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-400 shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              📖 تێکستی کامل (20)
            </button>
            <button
              onClick={() => setFilterType("audio")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterType === "audio" 
                  ? "bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-400 shadow-sm" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              🎧 کورتەیا دەنگی (30+)
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-slate-400 shrink-0 font-medium">پۆلێن:</span>
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all font-semibold ${
              selectedCategory === "all"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
            }`}
          >
            هەموو پۆلێن
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all font-semibold ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid of 100 Books */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredBooks.map((book, index) => {
          const isSaved = bookmarkedIds.includes(book.id);
          return (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.02, 0.4) }}
              className="group relative flex flex-col justify-between bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300"
            >
              {/* Top Meta & Bookmark */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex flex-wrap gap-1.5">
                    {book.isPublicDomainFullText ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                        📖 تێکستی کامل
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        📄 پوختە + PDF
                      </span>
                    )}
                    {book.hasAudioSummary && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                        🎧 دەنگی
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => toggleBookmark(book.id)}
                    className="text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors p-1"
                    title="هەڵگرتن"
                  >
                    {isSaved ? <BookmarkCheck size={18} className="text-emerald-600 fill-emerald-600" /> : <Bookmark size={18} />}
                  </button>
                </div>

                {/* Title & Author */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug mb-1">
                  {book.title_ku}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 line-clamp-1 mb-2" dir="ltr">
                  {book.title_en}
                </p>

                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 mb-3">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{book.author}</span>
                  <span>•</span>
                  <span>{book.year}</span>
                </div>

                {/* Badini Summary Snippet */}
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                  {book.summary_ku}
                </p>
              </div>

              {/* Bottom Actions & Details */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {book.pages_est}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-400">
                    <Star size={12} className="fill-amber-500" /> {book.rating || 4.8}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => openBookModal(book, "summary")}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm shadow-emerald-600/20 active:scale-95"
                  >
                    <BookOpen size={14} />
                    <span>بخوێنە بەلاش</span>
                  </button>

                  <button
                    onClick={() => handleDownloadSummary(book)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-all active:scale-95"
                  >
                    <Download size={14} />
                    <span>داونلۆد</span>
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
          <BookOpen size={48} className="mx-auto text-slate-400 mb-3" />
          <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">چ پەرتووک نەهاتنە دیتن</h4>
          <p className="text-xs text-slate-500 mb-4">تکایە پەیڤەکا دی بنڤیسە یان فلتەرێ پۆلێنان بگۆڕە.</p>
          <button
            onClick={() => { setSearch(""); setSelectedCategory("all"); setFilterType("all"); }}
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
          >
            پیشاندانا هەموو پەرتووکان
          </button>
        </div>
      )}

      {/* Advanced PDF Viewer & Book Reader Modal */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-600/10 text-emerald-600 flex items-center justify-center">
                    <BookOpen size={22} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white line-clamp-1">
                      {selectedBook.title_ku}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400" dir="ltr">
                      {selectedBook.author} ({selectedBook.year}) • {selectedBook.title_en}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleBookmark(selectedBook.id)}
                    className="p-2 rounded-xl text-slate-400 hover:text-emerald-600 transition-colors"
                  >
                    {bookmarkedIds.includes(selectedBook.id) ? (
                      <BookmarkCheck size={20} className="text-emerald-600 fill-emerald-600" />
                    ) : (
                      <Bookmark size={20} />
                    )}
                  </button>
                  <button
                    onClick={() => setSelectedBook(null)}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Reader Navigation Tabs */}
              <div className="flex items-center justify-between px-6 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-800/40 text-xs">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("summary")}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                      activeTab === "summary"
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    💡 ئەڤ پەرتووکه دەربارەی چییە؟
                  </button>

                  <button
                    onClick={() => setActiveTab("read")}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                      activeTab === "read"
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    📖 خواندنا پەرتووکێ (PDF Reader)
                  </button>

                  {selectedBook.hasAudioSummary && (
                    <button
                      onClick={() => setActiveTab("audio")}
                      className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                        activeTab === "audio"
                          ? "bg-indigo-600 text-white shadow-sm"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      🎧 کورتەیا دەنگی ({selectedBook.audioDuration || "15 دەقە"})
                    </button>
                  )}
                </div>

                {/* Reader Controls when Reading */}
                {activeTab === "read" && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setFontSize(s => Math.max(12, s - 2))}
                      className="px-2 py-1 bg-white dark:bg-slate-700 rounded text-slate-700 dark:text-slate-300 font-bold"
                    >
                      A-
                    </button>
                    <button
                      onClick={() => setFontSize(s => Math.min(24, s + 2))}
                      className="px-2 py-1 bg-white dark:bg-slate-700 rounded text-slate-700 dark:text-slate-300 font-bold"
                    >
                      A+
                    </button>
                    <div className="flex items-center gap-1 border-r border-slate-300 dark:border-slate-700 pr-2 mr-1">
                      <button
                        onClick={() => setViewerTheme("light")}
                        className={`w-5 h-5 rounded-full border bg-white ${viewerTheme === "light" ? "ring-2 ring-emerald-500" : ""}`}
                        title="رۆژ"
                      />
                      <button
                        onClick={() => setViewerTheme("sepia")}
                        className={`w-5 h-5 rounded-full border bg-[#fbf0d9] ${viewerTheme === "sepia" ? "ring-2 ring-emerald-500" : ""}`}
                        title="سێپیا"
                      />
                      <button
                        onClick={() => setViewerTheme("dark")}
                        className={`w-5 h-5 rounded-full border bg-slate-900 ${viewerTheme === "dark" ? "ring-2 ring-emerald-500" : ""}`}
                        title="شەڤ"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Body with Scroll */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {activeTab === "summary" && (
                  <div className="space-y-6">
                    {/* What is this about section */}
                    <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-3">
                      <h4 className="text-sm font-extrabold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                        <Sparkles size={16} />
                        <span>ئەڤ پەرتووکه دەربارەی چییە؟ (What is this book about?)</span>
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {selectedBook.summary_ku}
                      </p>
                    </div>

                    {/* Key Lessons */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Award size={16} className="text-amber-500" />
                        <span>خاڵ و وانەیێن سەرەکی ژ پەرتووکێ (Key Lessons):</span>
                      </h4>
                      <div className="grid grid-cols-1 gap-2.5">
                        {selectedBook.keyLessons_ku.map((lesson, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200"
                          >
                            <span className="w-5 h-5 rounded-full bg-emerald-500 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{lesson}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Meta Specifications */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                        <span className="text-slate-400 block mb-0.5">پۆلێن</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{selectedBook.category_ku}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                        <span className="text-slate-400 block mb-0.5">هەژمارا لاپەران</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{selectedBook.pages_est}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                        <span className="text-slate-400 block mb-0.5">ساڵا دەرچوونێ</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{selectedBook.year}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                        <span className="text-slate-400 block mb-0.5">شێوازێ بەڵگەنامە</span>
                        <span className="font-bold text-emerald-600">بەلاش و پارێزراو</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "read" && (
                  <div className={`p-6 rounded-2xl transition-colors duration-200 min-h-[420px] ${
                    viewerTheme === "light" 
                      ? "bg-slate-50 text-slate-900 border border-slate-200" :
                    viewerTheme === "sepia" 
                      ? "bg-[#FAF4E8] text-[#433422] border border-[#e3d5be]" :
                      "bg-slate-950 text-slate-200 border border-slate-800"
                  }`}>
                    {/* Simulated Book Header */}
                    <div className="border-b border-current/10 pb-4 mb-6 flex items-center justify-between text-xs opacity-70">
                      <span>{selectedBook.title_ku}</span>
                      <span>لاپەر {currentPage} ژ {selectedBook.pdfPages || 180}</span>
                    </div>

                    {/* Chapters or Full Text Content */}
                    <div className="space-y-6" style={{ fontSize: `${fontSize}px` }}>
                      {selectedBook.chapters && selectedBook.chapters.length > 0 ? (
                        <div>
                          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                            {selectedBook.chapters.map((chap, cIdx) => (
                              <button
                                key={cIdx}
                                onClick={() => setActiveChapterIndex(cIdx)}
                                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                                  activeChapterIndex === cIdx
                                    ? "bg-emerald-600 text-white"
                                    : "bg-current/10 hover:bg-current/20"
                                }`}
                              >
                                {chap.title_ku}
                              </button>
                            ))}
                          </div>

                          <div className="leading-loose space-y-4">
                            <h4 className="font-extrabold text-lg opacity-90">
                              {selectedBook.chapters[activeChapterIndex].title_ku}
                            </h4>
                            <p className="leading-relaxed">
                              {selectedBook.chapters[activeChapterIndex].content_ku}
                            </p>
                            <p className="leading-relaxed opacity-85">
                              {selectedBook.summary_ku}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4 leading-loose">
                          <h4 className="font-bold text-lg">{selectedBook.title_ku} - بەشێ ئێكێ</h4>
                          <p className="leading-relaxed">
                            {selectedBook.summary_ku}
                          </p>
                          <div className="p-4 rounded-xl bg-current/5 border border-current/10 text-sm space-y-2">
                            <span className="font-bold block">تێبینیێن مامۆستایێ بادینی بۆ خواندەڤانێن دهۆکێ و بادینان:</span>
                            <p>
                              ئەڤ پەرتووکه ئێکە ژ مەزنترین ژێدەرێن دەرونناسیێ. دەمێ تو ڤان لاپەران دخوینی، گرنگە هزر د ژیانا خۆ و کۆمەڵگەهێ خۆدا بکەی. هەموو بیردۆزەک پێویستی ب تاقیکردن و رەفتارێ هەیە.
                            </p>
                          </div>
                          <ul className="list-disc list-inside space-y-2 pt-2">
                            {selectedBook.keyLessons_ku.map((lesson, lIdx) => (
                              <li key={lIdx} className="leading-relaxed">{lesson}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Pagination Controls */}
                    <div className="border-t border-current/10 pt-4 mt-8 flex items-center justify-between text-xs">
                      <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage <= 1}
                        className="px-3 py-1.5 rounded-lg bg-current/10 disabled:opacity-40 font-bold"
                      >
                        پاشڤە (لاپەرێ بەری نوکە)
                      </button>
                      <span className="opacity-70">
                        لاپەر {currentPage} ژ {selectedBook.pdfPages || 180}
                      </span>
                      <button
                        onClick={() => setCurrentPage(p => Math.min(selectedBook.pdfPages || 180, p + 1))}
                        disabled={currentPage >= (selectedBook.pdfPages || 180)}
                        className="px-3 py-1.5 rounded-lg bg-current/10 disabled:opacity-40 font-bold"
                      >
                        پێشڤە (لاپەرێ داهاتی)
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "audio" && selectedBook.hasAudioSummary && (
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white space-y-6">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-400 flex items-center justify-center mx-auto mb-3 animate-pulse">
                        <Headphones size={30} />
                      </div>
                      <h4 className="text-lg font-bold">{selectedBook.title_ku}</h4>
                      <p className="text-xs text-indigo-300">کورتەیا دەنگی ب زاراوەیێ بادینی یێ پاقژ ({selectedBook.audioDuration || "15:00"})</p>
                    </div>

                    {/* Audio Player Controls */}
                    <div className="space-y-3 max-w-md mx-auto">
                      <div className="relative w-full h-2 rounded-full bg-white/20 overflow-hidden cursor-pointer">
                        <div
                          className="h-full bg-indigo-400 transition-all duration-200"
                          style={{ width: `${audioProgress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[11px] text-indigo-300">
                        <span>{Math.floor((audioProgress * 15) / 100)}:{String(Math.floor((audioProgress * 45) % 60)).padStart(2, '0')}</span>
                        <span>{selectedBook.audioDuration || "18:45"}</span>
                      </div>

                      <div className="flex items-center justify-center gap-4 pt-2">
                        <button
                          onClick={() => setAudioSpeed(s => s === 1 ? 1.25 : s === 1.25 ? 1.5 : 1)}
                          className="text-xs px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-bold"
                        >
                          {audioSpeed}x
                        </button>

                        <button
                          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-all active:scale-95"
                        >
                          {isPlayingAudio ? <Pause size={22} /> : <Play size={22} className="ml-0.5" />}
                        </button>

                        <button
                          onClick={() => setAudioProgress(0)}
                          className="text-xs px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20"
                        >
                          دووبارە
                        </button>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 leading-relaxed text-center">
                      🎧 ئەڤ کورتەیا دەنگی تایبەت بۆ بەحرا دەرونناسی هاتییە بەرهەڤکرن تا کو ل دەمێ رێڤەچوون یان شۆفێریێ بشێی ب ئاسانی ل پەرتووکێ بگەهی.
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  📚 پەرتوکخانا بەلاش یا دەروونناسیێ • 100% Free
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDownloadSummary(selectedBook)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
                  >
                    <Download size={14} />
                    <span>داونلۆدکرنا پوختە و PDF</span>
                  </button>
                  <button
                    onClick={() => setSelectedBook(null)}
                    className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold"
                  >
                    داخستن
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
