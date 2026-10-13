import React, { useState, useMemo } from 'react';
import { 
  Search, Brain, Sparkles, BookOpen, User, 
  ChevronDown, ChevronUp, Copy, Check, Volume2, VolumeX,
  Layers, ArrowLeft, ArrowRight, Share2, Bookmark, BookmarkCheck,
  CheckCircle2, Compass, Lightbulb, Zap, Globe, Microscope, Filter
} from 'lucide-react';
import { SCIENTISTS, Scientist, ScientistTheory } from './data/scientists';
import { ScientistDetailModal } from './ScientistsView';

interface FlatTheoryItem {
  theory: ScientistTheory;
  scientist: Scientist;
  theoryIndex: number;
}

interface TheoriesViewProps {
  onOpenScientistBio?: (scientist: Scientist) => void;
}

export default function TheoriesView({ onOpenScientistBio }: TheoriesViewProps) {
  // Search & Filters
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grouped" | "flat">("grouped");
  const [sortBy, setSortBy] = useState<"theoriesCount" | "name" | "chronological">("theoriesCount");

  // Expanded cards for grouped view
  const [expandedScientistIds, setExpandedScientistIds] = useState<number[]>([1, 2, 3, 106, 107]);

  // Selected Theory for Deep Modal
  const [activeTheoryItem, setActiveTheoryItem] = useState<FlatTheoryItem | null>(null);

  // Selected Scientist for Bio Modal
  const [selectedScientistForBio, setSelectedScientistForBio] = useState<Scientist | null>(null);

  // Bookmarks
  const [bookmarkedKeys, setBookmarkedKeys] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("behra_bookmarked_theories");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Copied feedback
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Audio speech
  const [speakingKey, setSpeakingKey] = useState<string | null>(null);

  const toggleBookmark = (key: string) => {
    setBookmarkedKeys(prev => {
      const next = prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key];
      try {
        localStorage.setItem("behra_bookmarked_theories", JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const handleCopyTheory = (theory: ScientistTheory, authorName: string, key: string) => {
    const text = `🧠 بیردۆز: ${theory.nameKu} (${theory.name})\n👤 دانەر: ${authorName}\n\n💡 چیە؟\n${theory.what}\n\n🎯 بۆچی هاتە دانان؟\n${theory.why}\n\n⚙️ چەوا کار دکەت؟\n${theory.how}\n\n🔬 ئەزموون و تاقیکرن:\n${theory.experiment}\n\n🌍 کاریگەری ل جیهانێ:\n${theory.impact}\n\n📚 پلاتفۆڕما بەحرا دەرونناسی 2026-2027`;
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSpeak = (text: string, key: string) => {
    if (speakingKey === key) {
      window.speechSynthesis.cancel();
      setSpeakingKey(null);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ku";
    utterance.rate = 0.95;
    utterance.onend = () => setSpeakingKey(null);
    utterance.onerror = () => setSpeakingKey(null);
    setSpeakingKey(key);
    window.speechSynthesis.speak(utterance);
  };

  // Flattened list of all theories across all scientists
  const allTheoriesFlat = useMemo<FlatTheoryItem[]>(() => {
    const list: FlatTheoryItem[] = [];
    SCIENTISTS.forEach(scientist => {
      scientist.theories.forEach((theory, idx) => {
        list.push({ theory, scientist, theoryIndex: idx });
      });
    });
    return list;
  }, []);

  // Filtered scientists with their filtered theories
  const filteredScientists = useMemo(() => {
    const q = search.trim().toLowerCase();

    return SCIENTISTS.map(s => {
      // Filter theories belonging to this scientist
      const matchingTheories = s.theories.filter(t => {
        const matchesCategory = selectedCategory === "all" || 
          s.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
          (selectedCategory === "philosophy" && (s.category.includes("فەلسەفە") || s.id >= 106));

        if (!matchesCategory) return false;
        if (!q) return true;

        return (
          t.nameKu.toLowerCase().includes(q) ||
          t.name.toLowerCase().includes(q) ||
          t.what.toLowerCase().includes(q) ||
          t.why.toLowerCase().includes(q) ||
          t.how.toLowerCase().includes(q) ||
          t.experiment.toLowerCase().includes(q) ||
          t.impact.toLowerCase().includes(q) ||
          s.nameKu.toLowerCase().includes(q) ||
          s.nameEn.toLowerCase().includes(q)
        );
      });

      return {
        ...s,
        filteredTheories: matchingTheories
      };
    }).filter(s => s.filteredTheories.length > 0)
    .sort((a, b) => {
      if (sortBy === "theoriesCount") {
        return b.theories.length - a.theories.length || a.id - b.id;
      }
      if (sortBy === "name") {
        return a.nameKu.localeCompare(b.nameKu, "ckb");
      }
      if (sortBy === "chronological") {
        return a.id - b.id;
      }
      return 0;
    });
  }, [search, selectedCategory, sortBy]);

  // Filtered flat theories
  const filteredFlatTheories = useMemo(() => {
    const q = search.trim().toLowerCase();

    return allTheoriesFlat.filter(({ theory, scientist }) => {
      const matchesCategory = selectedCategory === "all" || 
        scientist.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === "philosophy" && (scientist.category.includes("فەلسەفە") || scientist.id >= 106));

      if (!matchesCategory) return false;
      if (!q) return true;

      return (
        theory.nameKu.toLowerCase().includes(q) ||
        theory.name.toLowerCase().includes(q) ||
        theory.what.toLowerCase().includes(q) ||
        theory.why.toLowerCase().includes(q) ||
        theory.how.toLowerCase().includes(q) ||
        theory.experiment.toLowerCase().includes(q) ||
        theory.impact.toLowerCase().includes(q) ||
        scientist.nameKu.toLowerCase().includes(q) ||
        scientist.nameEn.toLowerCase().includes(q)
      );
    });
  }, [allTheoriesFlat, search, selectedCategory]);

  const toggleExpandScientist = (id: number) => {
    setExpandedScientistIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedScientistIds(filteredScientists.map(s => s.id));
  };

  const collapseAll = () => {
    setExpandedScientistIds([]);
  };

  // Categories list
  const categoryFilters = [
    { key: "all", label: "هەمی قوتابخانە", count: allTheoriesFlat.length },
    { key: "philosophy", label: "فەلسەفە و دەروون", count: allTheoriesFlat.filter(x => x.scientist.category.includes("فەلسەفە") || x.scientist.id >= 106).length },
    { key: "psychoanalysis", label: "شیکاریا دەرونی", count: allTheoriesFlat.filter(x => x.scientist.category.toLowerCase().includes("psycho")).length },
    { key: "behavior", label: "رەفتارگەری", count: allTheoriesFlat.filter(x => x.scientist.category.toLowerCase().includes("behavior")).length },
    { key: "cognitive", label: "مەعریفی", count: allTheoriesFlat.filter(x => x.scientist.category.toLowerCase().includes("cognitive")).length },
    { key: "humanistic", label: "مرۆڤدۆستی", count: allTheoriesFlat.filter(x => x.scientist.category.toLowerCase().includes("human")).length },
    { key: "developmental", label: "گەشەپێدان", count: allTheoriesFlat.filter(x => x.scientist.category.toLowerCase().includes("develop")).length },
    { key: "social", label: "جڤاکی", count: allTheoriesFlat.filter(x => x.scientist.category.toLowerCase().includes("social")).length },
    { key: "clinical", label: "کلینیکی و تێراپی", count: allTheoriesFlat.filter(x => x.scientist.category.toLowerCase().includes("clinical")).length },
  ];

  return (
    <div className="space-y-8 pb-16 animate-fadeIn text-slate-800 dark:text-slate-100" dir="rtl">
      
      {/* =========================================================================
          HERO BANNER & STATS
      ========================================================================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white p-6 sm:p-8 border border-indigo-800/40 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-bold">
              <Sparkles size={14} className="text-amber-400 animate-pulse" />
              <span>کۆمکرنا هەمی بیردۆزێن دەرونناسیێ و فەلسەفەیێ</span>
              <span className="text-[10px] bg-indigo-500/30 px-2 py-0.5 rounded-full font-black">2026-2027</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
              🧠 هەمی بیردۆزێن دەرونناسیێ و فەلسەفەیێ
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              کۆمکرنا هەمی بیردۆزێن زانستی و فەلسەفی یێن دەرونناسیێ. هەر زانا یان فەیلەسۆفەک چەند بیردۆز هەنە و هەر بیردۆزەک بەحسێ چ دکەت: پێناسە، هۆکار، چەوانیا کارکردنێ، ئەزموون، و کاریگەری ل جیهانێ ب زاراوەیێ کوردی یێ بادینی.
            </p>
          </div>

          {/* Quick Metrics Badges */}
          <div className="grid grid-cols-3 gap-3 shrink-0">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-black text-amber-300">{allTheoriesFlat.length}+</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">بیردۆزێن زانستی</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-black text-cyan-300">{SCIENTISTS.length}</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">زانا و فەیلەسۆف</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-black text-emerald-300">5</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">کۆڵەکێن شیکاریێ</div>
            </div>
          </div>
        </div>

        {/* 5 Scientific Criteria Explanation Bar */}
        <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-[10px]">1</span>
            <span>💡 <b>چیە؟</b> (پێناسە و تێگەهـ)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-[10px]">2</span>
            <span>🎯 <b>بۆچی؟</b> (ئەگەر و پاڵنەر)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-[10px]">3</span>
            <span>⚙️ <b>چەوا؟</b> (میکانیزم و رەفتار)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-[10px]">4</span>
            <span>🔬 <b>ئەزموون؟</b> (بەڵگەیێن تاقیگەهێ)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold text-[10px]">5</span>
            <span>🌍 <b>کاریگەری؟</b> (سەنگ ل جیهانێ)</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          CONTROLS: SEARCH & CATEGORY FILTERS & VIEW MODE
      ========================================================================= */}
      <div className="space-y-4">
        {/* Search Bar & View Mode Toggle */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ل ناڤ بیردۆزان دا بگەڕە (پێکهاتەیا کەسایەتیێ، هەرەما ماسلۆ، مەرجدارکرن، نەست، Id، کەروێشک)..."
              className="w-full pr-11 pl-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
            {search && (
              <button 
                onClick={() => setSearch("")}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                پاقژکرن
              </button>
            )}
          </div>

          {/* View Mode Buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shrink-0 w-full sm:w-auto justify-center">
            <button
              onClick={() => setViewMode("grouped")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                viewMode === "grouped"
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <User size={15} />
              <span>ل دویڤ زانایان ({filteredScientists.length})</span>
            </button>
            <button
              onClick={() => setViewMode("flat")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                viewMode === "flat"
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers size={15} />
              <span>لیستا بیردۆزان ({filteredFlatTheories.length})</span>
            </button>
          </div>

          {/* Sort Menu */}
          <div className="shrink-0 flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            >
              <option value="theoriesCount">زۆرترین بیردۆز</option>
              <option value="chronological">مێژووی (کەڤن بەرەف نوو)</option>
              <option value="name">پیتێن ئەلفوبێ</option>
            </select>
          </div>
        </div>

        {/* Categories Horizontal Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categoryFilters.map(c => (
            <button
              key={c.key}
              onClick={() => setSelectedCategory(c.key)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                selectedCategory === c.key
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span>{c.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedCategory === c.key ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                {c.count}
              </span>
            </button>
          ))}
        </div>

        {/* Quick Expand / Collapse for Grouped View */}
        {viewMode === "grouped" && (
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
            <span>
              نیشاندانا <b>{filteredScientists.length}</b> زانا و فەیلەسۆفان ({filteredFlatTheories.length} بیردۆز)
            </span>
            <div className="flex items-center gap-3">
              <button 
                onClick={expandAll}
                className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
              >
                ڤەکرنا هەمیان
              </button>
              <span>•</span>
              <button 
                onClick={collapseAll}
                className="text-slate-500 dark:text-slate-400 hover:underline"
              >
                گرتنا هەمیان
              </button>
            </div>
          </div>
        )}
      </div>

      {/* =========================================================================
          VIEW MODE 1: GROUPED BY SCIENTIST & PHILOSOPHER
      ========================================================================= */}
      {viewMode === "grouped" ? (
        <div className="space-y-6">
          {filteredScientists.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
              <Brain size={48} className="mx-auto text-slate-300 dark:text-slate-600" />
              <h3 className="text-base font-bold">چ بیردۆز ب ڤێ گەڕیانێ نەهاتنە دیتن!</h3>
              <p className="text-xs text-slate-500">پەیڤەکا دی تاقی بکە یان فلتەرێ پۆلینێ پاقژ بکە.</p>
              <button
                onClick={() => { setSearch(""); setSelectedCategory("all"); }}
                className="text-xs px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold"
              >
                پاقژکرنا لێگەڕیانێ
              </button>
            </div>
          ) : (
            filteredScientists.map(scientist => {
              const isExpanded = expandedScientistIds.includes(scientist.id);
              const theoriesCount = scientist.theories.length;

              return (
                <div 
                  key={scientist.id}
                  className="rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  {/* Scientist Header Card */}
                  <div className="p-5 sm:p-6 bg-slate-50/70 dark:bg-slate-800/50 border-b border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-4">
                      {/* Avatar */}
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-indigo-500/30 flex items-center justify-center text-2xl sm:text-3xl shrink-0 shadow-inner">
                        {scientist.image}
                      </div>

                      {/* Info */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                            {scientist.nameKu}
                          </h2>
                          <span className="text-xs text-slate-400 font-medium">({scientist.nameEn})</span>
                          
                          {/* Badge: Theory count */}
                          <span className="text-[11px] px-2.5 py-0.5 rounded-full font-black bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
                            {theoriesCount} {theoriesCount === 1 ? "بیردۆز" : "بیردۆز"}
                          </span>

                          {scientist.id >= 106 && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                              فەیلەسۆف
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                          <span>{scientist.category}</span>
                          <span>•</span>
                          <span>{scientist.nationality} ({scientist.years})</span>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      {/* View Full Biography button */}
                      <button
                        onClick={() => setSelectedScientistForBio(scientist)}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-200/80 dark:bg-slate-700/80 hover:bg-indigo-600 hover:text-white text-slate-700 dark:text-slate-200 text-xs font-bold transition-all"
                        title="خواندنا ژیانناما تەمام یا ڤی زانای"
                      >
                        <BookOpen size={14} />
                        <span>ژیاننامە</span>
                      </button>

                      {/* Expand / Collapse toggle */}
                      <button
                        onClick={() => toggleExpandScientist(scientist.id)}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 text-indigo-700 dark:text-indigo-300 text-xs font-bold transition-all border border-indigo-200 dark:border-indigo-800"
                      >
                        <span>{isExpanded ? "شاردنەوەیا بیردۆزان" : `نیشاندانا بیردۆزان (${scientist.filteredTheories.length})`}</span>
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>
                    </div>
                  </div>

                  {/* List of Theories under this Scientist */}
                  {isExpanded && (
                    <div className="p-5 sm:p-6 space-y-6 bg-white dark:bg-slate-900/60 divide-y divide-slate-100 dark:divide-slate-800/80">
                      {scientist.filteredTheories.map((theory, idx) => {
                        const itemKey = `${scientist.id}-${idx}`;
                        const isBookmarked = bookmarkedKeys.includes(itemKey);
                        const isSpeaking = speakingKey === itemKey;

                        return (
                          <div key={idx} className={idx > 0 ? "pt-6" : ""}>
                            {/* Theory Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm shadow-indigo-600/30">
                                  {idx + 1}
                                </div>
                                <div>
                                  <h3 className="text-base sm:text-lg font-black text-indigo-950 dark:text-indigo-200">
                                    {theory.nameKu}
                                  </h3>
                                  <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                                    {theory.name}
                                  </div>
                                </div>
                              </div>

                              {/* Action tools */}
                              <div className="flex items-center gap-1.5 self-end sm:self-center">
                                {/* Audio reader */}
                                <button
                                  onClick={() => handleSpeak(`${theory.nameKu}. چیە؟ ${theory.what}. بۆچی هاتە دانان؟ ${theory.why}.`, itemKey)}
                                  className={`p-2 rounded-xl text-xs transition-colors ${
                                    isSpeaking 
                                      ? 'bg-rose-500 text-white animate-pulse' 
                                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                                  }`}
                                  title="خواندنا دەنگی ب کوردی"
                                >
                                  {isSpeaking ? <VolumeX size={15} /> : <Volume2 size={15} />}
                                </button>

                                {/* Copy */}
                                <button
                                  onClick={() => handleCopyTheory(theory, scientist.nameKu, itemKey)}
                                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors"
                                  title="کۆپیکرنا هەمی زانیاریێن ڤێ بیردۆزێ"
                                >
                                  {copiedKey === itemKey ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
                                </button>

                                {/* Bookmark */}
                                <button
                                  onClick={() => toggleBookmark(itemKey)}
                                  className={`p-2 rounded-xl text-xs transition-colors ${
                                    isBookmarked 
                                      ? 'bg-amber-500 text-white' 
                                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                                  }`}
                                  title="هەڵگرتنا بیردۆزێ"
                                >
                                  {isBookmarked ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}
                                </button>
                              </div>
                            </div>

                            {/* 5 Scientific Criteria Breakdown Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
                              {/* 1. What is it? */}
                              <div className="p-3.5 rounded-2xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 space-y-1.5 md:col-span-2">
                                <div className="flex items-center gap-2 font-black text-amber-700 dark:text-amber-400">
                                  <Lightbulb size={16} />
                                  <span>💡 ئەڤ بیردۆزە چیە؟ (پێناسە و تێگەهـ ب درێژی)</span>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[13px]">
                                  {theory.what}
                                </p>
                              </div>

                              {/* 2. Why was it developed? */}
                              <div className="p-3.5 rounded-2xl bg-cyan-500/5 dark:bg-cyan-950/20 border border-cyan-500/20 space-y-1.5">
                                <div className="flex items-center gap-2 font-black text-cyan-700 dark:text-cyan-400">
                                  <Compass size={16} />
                                  <span>🎯 بۆچی دانایە؟ (ئەگەر و پاڵنەر)</span>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                  {theory.why}
                                </p>
                              </div>

                              {/* 3. How does it work? */}
                              <div className="p-3.5 rounded-2xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                                <div className="flex items-center gap-2 font-black text-emerald-700 dark:text-emerald-400">
                                  <Zap size={16} />
                                  <span>⚙️ چەوا کار دکەت؟ (میکانیزم و رەفتار)</span>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                  {theory.how}
                                </p>
                              </div>

                              {/* 4. Experiments & Evidence */}
                              <div className="p-3.5 rounded-2xl bg-purple-500/5 dark:bg-purple-950/20 border border-purple-500/20 space-y-1.5">
                                <div className="flex items-center gap-2 font-black text-purple-700 dark:text-purple-400">
                                  <Microscope size={16} />
                                  <span>🔬 ئەزموون و تاقیکرن (سەلماندنا زانستی)</span>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                  {theory.experiment}
                                </p>
                              </div>

                              {/* 5. Global Impact */}
                              <div className="p-3.5 rounded-2xl bg-rose-500/5 dark:bg-rose-950/20 border border-rose-500/20 space-y-1.5">
                                <div className="flex items-center gap-2 font-black text-rose-700 dark:text-rose-400">
                                  <Globe size={16} />
                                  <span>🌍 کاریگەری و سەنگ ل جیهانێ</span>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                  {theory.impact}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      ) : (
        /* =========================================================================
            VIEW MODE 2: FLAT MASTER CATALOG OF ALL THEORIES
        ========================================================================= */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFlatTheories.map(({ theory, scientist, theoryIndex }) => {
            const itemKey = `${scientist.id}-${theoryIndex}`;
            const isBookmarked = bookmarkedKeys.includes(itemKey);
            const isSpeaking = speakingKey === itemKey;

            return (
              <div
                key={itemKey}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4 hover:border-indigo-500/50 transition-all"
              >
                <div className="space-y-3">
                  {/* Top Bar: Author Badge + Actions */}
                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedScientistForBio(scientist)}
                      className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                      title="سەحدکە ژیانناما زانای"
                    >
                      <span className="text-base">{scientist.image}</span>
                      <span className="truncate">{scientist.nameKu}</span>
                    </button>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleSpeak(`${theory.nameKu}. چیە؟ ${theory.what}`, itemKey)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600"
                        title="گوهداریکرن"
                      >
                        {isSpeaking ? <VolumeX size={14} className="text-rose-500" /> : <Volume2 size={14} />}
                      </button>
                      <button
                        onClick={() => handleCopyTheory(theory, scientist.nameKu, itemKey)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600"
                        title="کۆپیکرن"
                      >
                        {copiedKey === itemKey ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                      </button>
                      <button
                        onClick={() => toggleBookmark(itemKey)}
                        className={`p-1.5 rounded-lg ${isBookmarked ? 'text-amber-500' : 'text-slate-400 hover:text-amber-500'}`}
                        title="هەڵگرتن"
                      >
                        <Bookmark size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Theory Title */}
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white leading-snug">
                      {theory.nameKu}
                    </h3>
                    <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5">
                      {theory.name}
                    </div>
                  </div>

                  {/* Summary what */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    <span className="font-black text-amber-600 dark:text-amber-400 block mb-1">💡 چیە؟</span>
                    {theory.what}
                  </div>

                  {/* Compact facts */}
                  <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <div>
                      <b className="text-cyan-600 dark:text-cyan-400">🎯 بۆچی:</b> {theory.why}
                    </div>
                    <div>
                      <b className="text-emerald-600 dark:text-emerald-400">⚙️ چەوا:</b> {theory.how}
                    </div>
                    <div>
                      <b className="text-purple-600 dark:text-purple-400">🔬 ئەزموون:</b> {theory.experiment}
                    </div>
                  </div>
                </div>

                {/* Footer link to author bio */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{scientist.category}</span>
                  <button
                    onClick={() => setSelectedScientistForBio(scientist)}
                    className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                  >
                    <span>ژیانناما {scientist.nameKu.split(" ")[0]}</span>
                    <ArrowLeft size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* =========================================================================
          FULL SCIENTIST BIOGRAPHY MODAL (Interactive Touch / Click)
      ========================================================================= */}
      {selectedScientistForBio && (
        <ScientistDetailModal
          scientist={selectedScientistForBio}
          onClose={() => setSelectedScientistForBio(null)}
          onNavigate={(nextS) => setSelectedScientistForBio(nextS)}
          isBookmarked={bookmarkedKeys.includes(`bio-${selectedScientistForBio.id}`)}
          onToggleBookmark={() => toggleBookmark(`bio-${selectedScientistForBio.id}`)}
        />
      )}

    </div>
  );
}
