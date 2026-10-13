import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, BookOpen, Brain, Sparkles, Award, Globe, 
  X, ChevronRight, ChevronLeft, Bookmark, BookmarkCheck,
  Share2, Volume2, VolumeX, Copy, Check, Quote, GraduationCap,
  Microscope, Scale, Flame, ArrowUpRight, Filter, Shuffle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCIENTISTS, Scientist, ScientistTheory } from './data/scientists';

// Helper categories mapping to Kurdish Badini
const SCHOOL_CATEGORIES = [
  { key: 'all', label: 'هەمی زانا و فەیلەسۆف (115)', icon: '✨' },
  { key: 'Philosophy', label: 'فەلسەفە و دەروون', icon: '🏛️' },
  { key: 'Psychoanalysis', label: 'شیکاریا دەرونی', icon: '🧠' },
  { key: 'Behaviorism', label: 'رەفتارگەری', icon: '🐀' },
  { key: 'Cognitive', label: 'دەرونناسیا هزری', icon: '💡' },
  { key: 'Humanistic', label: 'مرۆڤدۆستی و بوونگەری', icon: '🌱' },
  { key: 'Developmental', label: 'گەشەپێدان و زارۆک', icon: '👶' },
  { key: 'Social', label: 'دەرونناسیا جڤاکی', icon: '👥' },
  { key: 'Positive', label: 'دەرونناسیا ئەرێنی', icon: '☀️' },
  { key: 'Neuroscience', label: 'دەمارزانی و بایۆلۆجی', icon: '⚡' },
];

interface ScientistsViewProps {
  initialScientistId?: number | null;
  onSelectScientist?: (scientist: Scientist) => void;
}

export default function ScientistsView({ initialScientistId }: ScientistsViewProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'name' | 'years'>('default');
  const [selectedScientist, setSelectedScientist] = useState<Scientist | null>(null);
  
  // Bookmarks in localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('behra_bookmarked_scientists');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (initialScientistId) {
      const found = SCIENTISTS.find(s => s.id === initialScientistId);
      if (found) setSelectedScientist(found);
    }
  }, [initialScientistId]);

  const toggleBookmark = (id: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setBookmarkedIds(prev => {
      const updated = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      try {
        localStorage.setItem('behra_bookmarked_scientists', JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
  };

  // Filtered & sorted scientists
  const filteredScientists = useMemo(() => {
    const q = search.trim().toLowerCase();
    return SCIENTISTS.filter(s => {
      // Category check
      const matchesCategory = selectedCategory === 'all' || 
        s.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === 'Philosophy' && (s.category.includes('فەلسەفە') || s.id >= 106)) ||
        (selectedCategory === 'Behaviorism' && (s.category.includes('Behavior') || s.category.includes('رەفتار'))) ||
        (selectedCategory === 'Cognitive' && (s.category.includes('Cognitive') || s.category.includes('هزر'))) ||
        (selectedCategory === 'Developmental' && (s.category.includes('Develop') || s.category.includes('گەشە'))) ||
        (selectedCategory === 'Social' && (s.category.includes('Social') || s.category.includes('جڤاک'))) ||
        (selectedCategory === 'Positive' && (s.category.includes('Positive') || s.category.includes('ئەرێنی'))) ||
        (selectedCategory === 'Neuroscience' && (s.category.includes('Neuro') || s.category.includes('Bio')));

      if (!matchesCategory) return false;

      // Search query
      if (!q) return true;

      return (
        s.nameKu.toLowerCase().includes(q) ||
        s.nameEn.toLowerCase().includes(q) ||
        s.shortBio.toLowerCase().includes(q) ||
        s.nationality.toLowerCase().includes(q) ||
        s.theories.some(t => t.nameKu.toLowerCase().includes(q) || t.name.toLowerCase().includes(q) || t.what.toLowerCase().includes(q)) ||
        s.famousExperiments.some(exp => exp.toLowerCase().includes(q))
      );
    }).sort((a, b) => {
      if (sortBy === 'name') {
        return a.nameKu.localeCompare(b.nameKu);
      }
      if (sortBy === 'years') {
        const getYear = (str: string) => parseInt(str.match(/\d{4}/)?.[0] || '0', 10);
        return getYear(a.years) - getYear(b.years);
      }
      return a.id - b.id;
    });
  }, [search, selectedCategory, sortBy]);

  // Pick a random scientist
  const handleRandomScientist = () => {
    const randomIndex = Math.floor(Math.random() * SCIENTISTS.length);
    setSelectedScientist(SCIENTISTS[randomIndex]);
  };

  return (
    <div className="space-y-8 animate-fade-in" dir="rtl">
      
      {/* =========================================================================
          HERO BANNER - 2026-2027 MODERN BENTO HEADER
      ========================================================================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-cyan-950 text-white p-6 sm:p-10 border border-indigo-500/20 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-black">
            <Sparkles size={14} className="text-amber-400" />
            <span>ئینسایکلۆپیدیایا مەزن یا 115 زانا و فەیلەسوفێن دەروونناسیێ</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            ژیاننامە و بیردۆزێن <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">زانا و فەیلەسوفان</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            هوورکاریێن ژیانناما 115 مەزنترین دەروونناس و فەیلەسوفێن دەروونناسیێ ب کوردییا بادینی. 
            کلیک ل سەر هەر زانایەکی بکە داکو هەمی بیردۆز (چیە، بۆچی، چەوا)، ئەزموونێن ئەفسانەیی، ووتە، و رەخنەیێن زانستی ب شێوەیەکێ رێک و پێک ڤەبن.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
            <span className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 font-bold text-cyan-300">
              👤 115 زانا و فەیلەسۆف
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 font-bold text-amber-300">
              🧠 150+ بیردۆزێن شیکارکری
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 font-bold text-emerald-300">
              🔬 120+ ئەزموونێن ئەفسانەیی
            </span>
            <button
              onClick={handleRandomScientist}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-black hover:opacity-90 transition-opacity cursor-pointer shadow-md"
            >
              <Shuffle size={14} />
              <span>کەسایەتیەکێ ب هەڵکەوت (Random)</span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          CONTROLS: SEARCH & CATEGORY FILTER TABS
      ========================================================================= */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ل ناڤ 105 زانایاندا بگەڕە (فرۆید، پیاژێ، سکینەر، بیردۆز، ئەزموون)..."
              className="w-full pl-4 pr-11 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 shadow-sm"
            />
            {search && (
              <button 
                onClick={() => setSearch('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs p-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-1 text-xs">
              <button
                onClick={() => setSortBy('default')}
                className={`px-3 py-2 rounded-xl font-bold transition-colors ${sortBy === 'default' ? 'bg-cyan-500 text-slate-950' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
              >
                رێزبەندی
              </button>
              <button
                onClick={() => setSortBy('name')}
                className={`px-3 py-2 rounded-xl font-bold transition-colors ${sortBy === 'name' ? 'bg-cyan-500 text-slate-950' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
              >
                ئەلفوبێ (A-Z)
              </button>
              <button
                onClick={() => setSortBy('years')}
                className={`px-3 py-2 rounded-xl font-bold transition-colors ${sortBy === 'years' ? 'bg-cyan-500 text-slate-950' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
              >
                سەردەم (مێژوویی)
              </button>
            </div>
          </div>
        </div>

        {/* Categories scrollable pill list */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {SCHOOL_CATEGORIES.map(cat => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`
                  flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer
                  ${isActive 
                    ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-600/25 scale-[1.02]' 
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }
                `}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Bookmarks state */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <div>
          نیشاندان <span className="font-extrabold text-cyan-600 dark:text-cyan-400">{filteredScientists.length}</span> ژ <span className="font-extrabold text-slate-900 dark:text-white">{SCIENTISTS.length}</span> زانایان
        </div>
        {bookmarkedIds.length > 0 && (
          <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold">
            <BookmarkCheck size={14} />
            <span>{bookmarkedIds.length} زانایێن هەڵگرتی</span>
          </div>
        )}
      </div>

      {/* =========================================================================
          SCIENTISTS BENTO CARDS GRID
      ========================================================================= */}
      {filteredScientists.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="text-4xl">🔍</div>
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            چ زانا نەهاتنە دیتن بۆ "{search}"
          </h3>
          <p className="text-xs text-slate-500">
            تکایە ناڤێ زانایەکێ دی بنڤیسە یان فلتەرێ پۆلان بگۆهەڕە.
          </p>
          <button
            onClick={() => { setSearch(''); setSelectedCategory('all'); }}
            className="px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-600 text-xs font-bold hover:bg-cyan-500/20"
          >
            نیشاندانا هەمی زانایان
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredScientists.map((scientist) => {
            const isBookmarked = bookmarkedIds.includes(scientist.id);

            return (
              <motion.div
                key={scientist.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedScientist(scientist)}
                className="group relative p-5 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Top aura on hover */}
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/0 group-hover:via-cyan-500/60 to-transparent transition-all duration-300" />

                <div className="space-y-4">
                  {/* Top Bar: Icon avatar, Lifespan & Bookmark */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/15 border border-cyan-500/25 flex items-center justify-center text-2xl shadow-inner group-hover:scale-105 transition-transform">
                        {scientist.image}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                          {scientist.years}
                        </span>
                        <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
                          {scientist.nationality}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => toggleBookmark(scientist.id, e)}
                      className={`p-2 rounded-xl transition-colors ${
                        isBookmarked 
                          ? 'bg-amber-500/15 text-amber-500' 
                          : 'bg-slate-100 dark:bg-slate-800/80 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                      }`}
                      title={isBookmarked ? 'لادان ژ هەڵگرتیان' : 'هەڵگرتن'}
                    >
                      <Bookmark size={16} fill={isBookmarked ? 'currentColor' : 'none'} />
                    </button>
                  </div>

                  {/* Name in Badini & English */}
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                      {scientist.nameKu}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                      {scientist.nameEn}
                    </p>
                  </div>

                  {/* School / Category Pill */}
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[11px] font-bold bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300">
                      <span>🏷️</span>
                      <span>{scientist.category}</span>
                    </span>
                  </div>

                  {/* Short Bio */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {scientist.shortBio}
                  </p>

                  {/* Theory Highlight snippet */}
                  {scientist.theories.length > 0 && (
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <span className="text-cyan-500 font-black">🧠</span>
                      <span className="truncate font-semibold">{scientist.theories[0].nameKu}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
                    {scientist.theories.length} بیردۆز • {scientist.famousExperiments.length} ئەزموون
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-black text-cyan-600 dark:text-cyan-400 group-hover:translate-x-[-2px] transition-transform">
                    <span>ژیانناما تەمام</span>
                    <ChevronLeft size={16} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* =========================================================================
          LUXURIOUS FULL SCIENTIST BIOGRAPHY MODAL (ON TOUCH / CLICK)
      ========================================================================= */}
      <AnimatePresence>
        {selectedScientist && (
          <ScientistDetailModal 
            scientist={selectedScientist} 
            onClose={() => setSelectedScientist(null)}
            onNavigate={(nextScientist) => setSelectedScientist(nextScientist)}
            isBookmarked={bookmarkedIds.includes(selectedScientist.id)}
            onToggleBookmark={() => toggleBookmark(selectedScientist.id)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}

// =============================================================================
// LUXURIOUS FULL SCIENTIST DETAIL MODAL COMPONENT
// =============================================================================
interface ScientistDetailModalProps {
  scientist: Scientist;
  onClose: () => void;
  onNavigate: (scientist: Scientist) => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export function ScientistDetailModal({
  scientist,
  onClose,
  onNavigate,
  isBookmarked,
  onToggleBookmark
}: ScientistDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'bio' | 'theories' | 'experiments' | 'legacy'>('bio');
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Next / Previous navigation
  const currentIndex = SCIENTISTS.findIndex(s => s.id === scientist.id);
  const prevScientist = currentIndex > 0 ? SCIENTISTS[currentIndex - 1] : SCIENTISTS[SCIENTISTS.length - 1];
  const nextScientist = currentIndex < SCIENTISTS.length - 1 ? SCIENTISTS[currentIndex + 1] : SCIENTISTS[0];

  const handleCopy = () => {
    const textToCopy = `${scientist.nameKu} (${scientist.nameEn})\nسەردەم: ${scientist.years} • ${scientist.nationality}\nقوتابخانە: ${scientist.category}\n\nکورتە: ${scientist.shortBio}\n\nژیانناما تەمام:\n${scientist.fullBiography}\n\nزانکۆ: ${scientist.education}\n\nبەحرا دەرونناسی 2026-2027`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleToggleSpeak = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(`${scientist.nameKu}. ${scientist.shortBio}. ${scientist.fullBiography.slice(0, 300)}`);
      utterance.lang = 'ku';
      utterance.rate = 0.9;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  // Text size classes
  const textClass = fontSize === 'xlarge' ? 'text-base sm:text-lg leading-loose' : fontSize === 'large' ? 'text-sm sm:text-base leading-relaxed' : 'text-xs sm:text-sm leading-relaxed';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-hidden animate-fade-in" dir="rtl">
      
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 25 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
      >
        
        {/* =======================================================================
            MODAL HEADER: TOP BAR & ACTION BUTTONS
        ======================================================================= */}
        <div className="p-4 sm:p-6 bg-slate-50/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 sticky top-0 z-20 backdrop-blur-xl">
          
          {/* Navigation Controls: Prev / Next */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => onNavigate(prevScientist)}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-1 transition-colors cursor-pointer"
              title="زانایێ پێشتر"
            >
              <ChevronRight size={16} />
              <span className="hidden md:inline">پێشتر: {prevScientist.nameKu.split(' ')[0]}</span>
            </button>

            <button
              onClick={() => onNavigate(nextScientist)}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-1 transition-colors cursor-pointer"
              title="زانایێ دووڤدا"
            >
              <span className="hidden md:inline">دووڤدا: {nextScientist.nameKu.split(' ')[0]}</span>
              <ChevronLeft size={16} />
            </button>
          </div>

          {/* Action Tools: Font size, Audio, Copy, Bookmark, Close */}
          <div className="flex items-center gap-1 sm:gap-2">
            
            {/* Font Size Selector */}
            <div className="hidden sm:flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-0.5 text-xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 rounded-lg font-bold ${fontSize === 'normal' ? 'bg-cyan-500 text-slate-950' : 'text-slate-600 dark:text-slate-400'}`}
                title="قەبارێ ئاسایی"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded-lg font-bold ${fontSize === 'large' ? 'bg-cyan-500 text-slate-950' : 'text-slate-600 dark:text-slate-400'}`}
                title="قەبارێ مەزنتر"
              >
                A+
              </button>
            </div>

            {/* Read Aloud */}
            <button
              onClick={handleToggleSpeak}
              className={`p-2 rounded-xl transition-colors ${isSpeaking ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'}`}
              title={isSpeaking ? 'راگرتنا دەنگی' : 'خواندنا دەنگی'}
            >
              {isSpeaking ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              title="کۆپیکرنا هەمی زانیاریان"
            >
              {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
            </button>

            {/* Bookmark button */}
            <button
              onClick={onToggleBookmark}
              className={`p-2 rounded-xl border transition-colors ${
                isBookmarked 
                  ? 'bg-amber-500/15 border-amber-500/30 text-amber-500' 
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
              }`}
              title={isBookmarked ? 'لادان ژ هەڵگرتیان' : 'هەڵگرتن'}
            >
              <Bookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/20 transition-colors"
              title="داخستن (Esc)"
            >
              <X size={18} />
            </button>
          </div>

        </div>

        {/* =======================================================================
            SCROLLABLE MODAL CONTENT BODY
        ======================================================================= */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
          
          {/* Hero Profile Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-cyan-950/20 via-indigo-950/20 to-slate-900/30 border border-cyan-500/20">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-indigo-500/25 to-teal-500/25 border-2 border-cyan-500/40 flex items-center justify-center text-3xl sm:text-4xl shadow-xl shadow-cyan-500/10">
                {scientist.image}
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/25">
                    {scientist.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {scientist.years}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    🌍 {scientist.nationality}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                  {scientist.nameKu}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono font-medium">
                  {scientist.nameEn}
                </p>
              </div>
            </div>

            {/* Quick Badge */}
            <div className="text-left hidden lg:block">
              <span className="text-xs text-slate-400">ناسنامە د مێژوویێ دا:</span>
              <div className="text-xs font-extrabold text-cyan-500">
                زانایێ ژمارە #{scientist.id} د ئینسایکلۆپیدیایێ دا
              </div>
            </div>
          </div>

          {/* Short Bio Highlight Quote */}
          <div className="p-4 sm:p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 text-xs sm:text-sm font-bold text-cyan-900 dark:text-cyan-200 flex items-start gap-3">
            <span className="text-xl">💡</span>
            <p className="leading-relaxed">
              {scientist.shortBio}
            </p>
          </div>

          {/* =====================================================================
              NAV TABS INSIDE MODAL: (Bio, Theories, Experiments, Criticism/Legacy)
          ===================================================================== */}
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('bio')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === 'bio'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen size={15} />
              <span>📖 ژیانناما تەمام و خواندن</span>
            </button>

            <button
              onClick={() => setActiveTab('theories')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === 'theories'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Brain size={15} />
              <span>🧠 بیردۆزێن هوور ({scientist.theories.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('experiments')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === 'experiments'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Microscope size={15} />
              <span>🔬 ئەزموون و گۆتنێن زێڕین</span>
            </button>

            <button
              onClick={() => setActiveTab('legacy')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === 'legacy'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Scale size={15} />
              <span>⚖️ رەخنە و میرات (2026-2027)</span>
            </button>
          </div>

          {/* =====================================================================
              TAB 1: FULL BIOGRAPHY & EDUCATION
          ===================================================================== */}
          {activeTab === 'bio' && (
            <div className="space-y-6 animate-fade-in">
              {/* Full Biography Narrative */}
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  <BookOpen size={16} />
                  <span>ژیانناما زانستی و کەسی ب درێژی:</span>
                </div>
                <div className={`text-slate-800 dark:text-slate-200 whitespace-pre-line ${textClass}`}>
                  {scientist.fullBiography}
                </div>
              </div>

              {/* Education & Academic Career Card */}
              {scientist.education && (
                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black text-amber-800 dark:text-amber-300">
                    <GraduationCap size={18} />
                    <span>زانکۆ، خواندن و پسپۆری:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-100 leading-relaxed font-medium">
                    {scientist.education}
                  </p>
                </div>
              )}

              {/* Quick Summary Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-1">
                  <span className="text-[11px] text-slate-400 font-bold block">🌍 وەلات:</span>
                  <span className="text-xs font-black text-slate-900 dark:text-white">{scientist.nationality}</span>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-1">
                  <span className="text-[11px] text-slate-400 font-bold block">⏳ سەردەم:</span>
                  <span className="text-xs font-black text-slate-900 dark:text-white font-mono">{scientist.years}</span>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-1">
                  <span className="text-[11px] text-slate-400 font-bold block">🏷️ قوتابخانە:</span>
                  <span className="text-xs font-black text-cyan-600 dark:text-cyan-400">{scientist.category}</span>
                </div>
              </div>
            </div>
          )}

          {/* =====================================================================
              TAB 2: THEORIES IN DEPTH (WHAT, WHY, HOW, EXPERIMENT, IMPACT)
          ===================================================================== */}
          {activeTab === 'theories' && (
            <div className="space-y-5 animate-fade-in">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-black text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                  <Brain size={18} />
                  <span>بیردۆزێن زانستی ب شرۆڤەکرنا پێنج لایەنی:</span>
                </h4>
                <span className="text-xs font-bold text-slate-400">
                  {scientist.theories.length} بیردۆز
                </span>
              </div>

              {scientist.theories.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-400">
                  چ بیردۆزێن تایبەت بۆ ئەڤی زانایی نەهاتینە تۆمارکرن.
                </div>
              ) : (
                <div className="space-y-4">
                  {scientist.theories.map((theory, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-4 shadow-sm"
                    >
                      {/* Theory Title */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-700">
                        <div>
                          <span className="text-[10px] font-black px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 ml-2">
                            بیردۆزا #{idx + 1}
                          </span>
                          <h5 className="inline text-base sm:text-lg font-black text-slate-900 dark:text-white">
                            {theory.nameKu}
                          </h5>
                        </div>
                        <span className="text-xs font-mono text-slate-400 font-medium">
                          {theory.name}
                        </span>
                      </div>

                      {/* 5 Structural Questions in Badini */}
                      <div className="grid grid-cols-1 gap-3 text-xs sm:text-sm">
                        
                        {/* 1. What is it? */}
                        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1">
                          <span className="font-black text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5 text-xs">
                            <span>❓</span>
                            <span>چیە ئەڤ بیردۆزە؟</span>
                          </span>
                          <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                            {theory.what}
                          </p>
                        </div>

                        {/* 2. Why formulated? */}
                        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1">
                          <span className="font-black text-amber-600 dark:text-amber-400 flex items-center gap-1.5 text-xs">
                            <span>🎯</span>
                            <span>بۆچی دانا؟ چ بوو ئەگەر؟</span>
                          </span>
                          <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                            {theory.why}
                          </p>
                        </div>

                        {/* 3. How does it work? */}
                        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1">
                          <span className="font-black text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 text-xs">
                            <span>⚙️</span>
                            <span>چەوا کار دکەت؟ مەیکانیزم چیە؟</span>
                          </span>
                          <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                            {theory.how}
                          </p>
                        </div>

                        {/* 4. The Experiment */}
                        {theory.experiment && (
                          <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1">
                            <span className="font-black text-purple-600 dark:text-purple-400 flex items-center gap-1.5 text-xs">
                              <span>🧪</span>
                              <span>کێش ئەزموون کرن؟ مرۆڤ، زارۆک، یان گیانەوەر؟</span>
                            </span>
                            <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                              {theory.experiment}
                            </p>
                          </div>
                        )}

                        {/* 5. Global Impact */}
                        <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                          <span className="font-black text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 text-xs">
                            <span>🌟</span>
                            <span>کارتێکرنا وێ ل سەر جیهان و دەروونناسیێ:</span>
                          </span>
                          <p className="text-emerald-950 dark:text-emerald-100 font-medium leading-relaxed">
                            {theory.impact}
                          </p>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* =====================================================================
              TAB 3: FAMOUS EXPERIMENTS & GOLDEN QUOTES
          ===================================================================== */}
          {activeTab === 'experiments' && (
            <div className="space-y-6 animate-fade-in">
              
              {/* Experiments */}
              <div className="space-y-3">
                <h4 className="text-sm font-black text-purple-600 dark:text-purple-400 flex items-center gap-2">
                  <Microscope size={18} />
                  <span>ئەزموونێن مەیدانی و ناڤدار:</span>
                </h4>
                
                {scientist.famousExperiments && scientist.famousExperiments.length > 0 ? (
                  <div className="grid grid-cols-1 gap-2.5">
                    {scientist.famousExperiments.map((exp, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-xs sm:text-sm text-purple-950 dark:text-purple-100 flex items-start gap-3"
                      >
                        <span className="p-1 rounded-lg bg-purple-500/20 text-purple-600 dark:text-purple-300 font-mono font-bold text-xs shrink-0">
                          #{i + 1}
                        </span>
                        <p className="leading-relaxed font-medium">{exp}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400">چ ئەزموونێن تایبەت نەهاتینە تۆمارکرن.</p>
                )}
              </div>

              {/* Quotes */}
              <div className="space-y-3">
                <h4 className="text-sm font-black text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                  <Quote size={18} />
                  <span>ووتە و گۆتنێن زێڕین یێن {scientist.nameKu}:</span>
                </h4>

                {scientist.quotes && scientist.quotes.length > 0 ? (
                  <div className="space-y-3">
                    {scientist.quotes.map((quote, i) => (
                      <div
                        key={i}
                        className="relative p-5 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-slate-100/50 dark:via-slate-800/50 to-indigo-500/5 border border-indigo-500/20 space-y-2"
                      >
                        <Quote className="text-indigo-400 opacity-30 absolute top-3 left-3" size={28} />
                        <blockquote className="text-xs sm:text-sm italic font-bold text-indigo-950 dark:text-indigo-200 leading-relaxed pr-2">
                          "{quote}"
                        </blockquote>
                        <div className="text-[11px] text-slate-400 font-mono pr-2">
                          — {scientist.nameKu} ({scientist.nameEn})
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400">چ ووتە نەهاتینە تۆمارکرن.</p>
                )}
              </div>

            </div>
          )}

          {/* =====================================================================
              TAB 4: CRITICISM & LEGACY (2026-2027)
          ===================================================================== */}
          {activeTab === 'legacy' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Criticism */}
                <div className="p-5 sm:p-6 rounded-3xl bg-rose-500/10 border border-rose-500/25 space-y-3">
                  <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-black text-sm">
                    <Scale size={18} />
                    <span>رەخنەیێن زانستی لێ هاتینە گرتن:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-rose-950 dark:text-rose-100 leading-relaxed font-medium">
                    {scientist.criticism || "رەخنەیەکا بنەڕەتی نەهاتیە تۆمارکرن."}
                  </p>
                </div>

                {/* Legacy */}
                <div className="p-5 sm:p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/25 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-black text-sm">
                    <Award size={18} />
                    <span>میرات و کارتێکرن ل سەردەمێ 2026-2027:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium">
                    {scientist.legacy || "وەک ژێدەرەکێ گرنگ د پەرتووکێن زانستیدا ماوە."}
                  </p>
                </div>

              </div>

              {/* Verified Badge info */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center text-xs text-slate-500 dark:text-slate-400 space-y-1">
                <div className="font-bold text-slate-700 dark:text-slate-300">
                  بەحرا دەرونناسی • پەسەندکری ل دووڤ بنەما و پیڤەرێن APA و WHO
                </div>
                <div className="text-[11px]">
                  هەمی داتایێن ئەڤی زانایی ب زمانی کوردی بادینی یێ پاراستی هاتینە بەرهەڤکرن
                </div>
              </div>
            </div>
          )}

        </div>

        {/* =======================================================================
            STICKY MODAL FOOTER BAR
        ======================================================================= */}
        <div className="p-4 bg-slate-50/90 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-500 dark:text-slate-400 text-[11px]">
            زانایێ <span className="font-bold text-slate-900 dark:text-white">{currentIndex + 1}</span> ژ <span className="font-bold">{SCIENTISTS.length}</span> زانایان
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate(prevScientist)}
              className="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              ← زانایێ پێشتر
            </button>
            <button
              onClick={() => onNavigate(nextScientist)}
              className="px-3 py-1.5 rounded-xl bg-cyan-600 text-white font-bold hover:bg-cyan-700 transition-colors"
            >
              زانایێ دووڤدا →
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
