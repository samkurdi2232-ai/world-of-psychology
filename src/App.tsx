import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, Brain, Baby, Sparkles, HeartHandshake, ClipboardCheck, 
  Lock, BookA, ShieldAlert, Search, Moon, Sun, Menu, X, Bookmark, 
  BookmarkCheck, ChevronRight, Activity, ArrowLeft, ExternalLink, 
  Sparkle, ShieldCheck, HelpCircle, Layers, CheckCircle2, MessageCircle,
  FlaskConical, Stethoscope, Users, Building2, Scale, Dna, Component
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { MAIN_SECTIONS, MainSectionConfig } from './data/mainSectionsConfig';
import SevenSectionsContent from './SevenSectionsContent';
import PsychTestsView from './PsychTestsView';
import AnonymousQAView from './AnonymousQAView';
import DictionaryView from './DictionaryView';
import LibraryView from './LibraryView';
import EncyclopediaView from './EncyclopediaView';
import ScientistsView from './ScientistsView';
import TheoriesView from './TheoriesView';
import Chatbot from './Chatbot';
import { psychologyDatabase } from './database';

// Navigation structure distributing the 10,000 topics cleanly across all domains
export interface AppNavSection {
  id: string;
  group: 'all' | 'clinical' | 'science' | 'society' | 'tools';
  groupTitleKu: string;
  title_ku: string;
  badge_ku: string;
  icon: React.ReactNode;
  category10k?: string;
}

export const APP_NAV_SECTIONS: AppNavSection[] = [
  // 🌟 Main Encyclopedia (All 10,000)
  { 
    id: "section-encyclopedia", 
    group: "all", 
    groupTitleKu: "🌟 ئینسایکلۆپیدیایا گشتی",
    title_ku: "📚 هەمی 10,000 بابەتێن دەرونناسیێ", 
    badge_ku: "10,000", 
    icon: <Brain size={18} className="text-emerald-500" />,
    category10k: "all"
  },
  
  // 🩺 Clinical & Disorders
  { 
    id: "section-disorders", 
    group: "clinical", 
    groupTitleKu: "🩺 بەشێن کلینیکی و تەندروستی",
    title_ku: "💔 تێکچوون و نەخۆشیێن دەروونی", 
    badge_ku: "1,500 بابەت", 
    icon: <ShieldAlert size={18} className="text-rose-500" />,
    category10k: "Nexoshi"
  },
  { 
    id: "section-treatments", 
    group: "clinical", 
    groupTitleKu: "🩺 بەشێن کلینیکی و تەندروستی",
    title_ku: "💊 رێک و تەکنیکێن چارەسەریێ (CBT)", 
    badge_ku: "800 بابەت", 
    icon: <CheckCircle2 size={18} className="text-emerald-500" />,
    category10k: "Chareser"
  },
  { 
    id: "section-neuro", 
    group: "clinical", 
    groupTitleKu: "🩺 بەشێن کلینیکی و تەندروستی",
    title_ku: "🧬 مێشک و دەمار (Neuroscience)", 
    badge_ku: "1,000 بابەت", 
    icon: <Activity size={18} className="text-pink-500" />,
    category10k: "Neuro"
  },

  // 🧠 Theories, Science & Pioneers
  { 
    id: "section-scientists", 
    group: "science", 
    groupTitleKu: "🧠 بیردۆز، ئەزموون و زانایان",
    title_ku: "👤 ژیانناما زانا و فەیلەسوفان", 
    badge_ku: "115 زانا • 500 بابەت", 
    icon: <Sparkles size={18} className="text-cyan-500" />,
    category10k: "Zana"
  },
  { 
    id: "section-theories", 
    group: "science", 
    groupTitleKu: "🧠 بیردۆز، ئەزموون و زانایان",
    title_ku: "💡 بیردۆزێن مەزنێن دەروونناسیێ", 
    badge_ku: "125 بیردۆز • 1,200 بابەت", 
    icon: <Layers size={18} className="text-purple-500" />,
    category10k: "Birodoz"
  },
  { 
    id: "section-experiments", 
    group: "science", 
    groupTitleKu: "🧠 بیردۆز، ئەزموون و زانایان",
    title_ku: "🔬 ئەزموونێن تاقیگەهی و زانستی", 
    badge_ku: "1,000 بابەت", 
    icon: <Sparkle size={18} className="text-indigo-500" />,
    category10k: "Ezmun"
  },
  { 
    id: "section-concepts", 
    group: "science", 
    groupTitleKu: "🧠 بیردۆز، ئەزموون و زانایان",
    title_ku: "🧩 چەمک و میکانیزمێن دەروونی", 
    badge_ku: "1,500 بابەت", 
    icon: <BookOpen size={18} className="text-amber-500" />,
    category10k: "CheMek"
  },

  // 👥 Human, Child & Society
  { 
    id: "section-child", 
    group: "society", 
    groupTitleKu: "👥 پەرەسەندن و جڤاک و کار",
    title_ku: "👶 دەروونناسیا زارۆک و پەرەسەندنێ", 
    badge_ku: "1,000 بابەت", 
    icon: <Baby size={18} className="text-amber-500" />,
    category10k: "Zarok"
  },
  { 
    id: "section-social", 
    group: "society", 
    groupTitleKu: "👥 پەرەسەندن و جڤاک و کار",
    title_ku: "👥 دەروونناسیا جڤاکی و پەیوەندیان", 
    badge_ku: "1,000 بابەت", 
    icon: <HeartHandshake size={18} className="text-blue-500" />,
    category10k: "Civaki"
  },
  { 
    id: "section-industrial", 
    group: "society", 
    groupTitleKu: "👥 پەرەسەندن و جڤاک و کار",
    title_ku: "🏢 دەروونناسیا پیشەسازی و کار (Burnout)", 
    badge_ku: "500 بابەت", 
    icon: <ExternalLink size={18} className="text-orange-500" />,
    category10k: "Pishi"
  },
  { 
    id: "section-forensic", 
    group: "society", 
    groupTitleKu: "👥 پەرەسەندن و جڤاک و کار",
    title_ku: "⚖️ دەروونناسیا یاسایی و دادوەری", 
    badge_ku: "500 بابەت", 
    icon: <Lock size={18} className="text-violet-500" />,
    category10k: "Dadi"
  },
  { 
    id: "section-growth", 
    group: "society", 
    groupTitleKu: "👥 پەرەسەندن و جڤاک و کار",
    title_ku: "✨ گەشەپێدان و هێزا کەسایەتیێ", 
    badge_ku: "25 بابەت", 
    icon: <Sparkles size={18} className="text-purple-500" />
  },
  { 
    id: "section-family", 
    group: "society", 
    groupTitleKu: "👥 پەرەسەندن و جڤاک و کار",
    title_ku: "🤝 دەروونناسیا خێزان و پەیوەندییان", 
    badge_ku: "25 بابەت", 
    icon: <HeartHandshake size={18} className="text-pink-500" />
  },

  // 🛠️ Tools & Library
  { 
    id: "section-tests", 
    group: "tools", 
    groupTitleKu: "🛠️ ئامرازێن فێرکاری و تاقیکرن",
    title_ku: "📝 تاقیکرن و پێوەرێن دەروونی", 
    badge_ku: "6 تێست • 500 پێوەر", 
    icon: <ClipboardCheck size={18} className="text-emerald-500" />,
    category10k: "Test"
  },
  { 
    id: "section-library", 
    group: "tools", 
    groupTitleKu: "🛠️ ئامرازێن فێرکاری و تاقیکرن",
    title_ku: "📚 پەرتوکخانا بەلاش (100 پەرتوک)", 
    badge_ku: "100 پەرتوک", 
    icon: <BookOpen size={18} className="text-emerald-500" />
  },
  { 
    id: "section-dictionary", 
    group: "tools", 
    groupTitleKu: "🛠️ ئامرازێن فێرکاری و تاقیکرن",
    title_ku: "📖 فەرهەنگا زاراوان (400 زاراوە)", 
    badge_ku: "400 زاراوە", 
    icon: <BookA size={18} className="text-indigo-500" />
  },
  { 
    id: "section-anonymous", 
    group: "tools", 
    groupTitleKu: "🛠️ ئامرازێن فێرکاری و تاقیکرن",
    title_ku: "🔒 پرسیار و بەرسڤێن نهێنی", 
    badge_ku: "100% نهێنی", 
    icon: <Lock size={18} className="text-cyan-500" />
  },
];

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>("section-encyclopedia");
  const [encyclopediaCategory, setEncyclopediaCategory] = useState<string>("all");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [globalSearch, setGlobalSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Dark/Light Theme state with localStorage
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('jihaan_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return true; // Default to luxury dark
    }
  });

  // Bookmarks state with localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('jihaan_bookmarked_topics');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [showBookmarksDrawer, setShowBookmarksDrawer] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('jihaan_theme', isDarkMode ? 'dark' : 'light');
    } catch {}
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => {
      const next = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      try {
        localStorage.setItem('jihaan_bookmarked_topics', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleSelectSection = (id: string, initialCategory?: string) => {
    setActiveSectionId(id);
    if (initialCategory) {
      setEncyclopediaCategory(initialCategory);
    } else {
      const targetNav = APP_NAV_SECTIONS.find(s => s.id === id);
      if (targetNav?.category10k) {
        setEncyclopediaCategory(targetNav.category10k);
      }
    }
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Global search across all topics & sections
  const globalSearchResults = useMemo(() => {
    const q = globalSearch.toLowerCase().trim();
    if (!q) return [];
    return psychologyDatabase.filter(topic => 
      topic.title_ku.toLowerCase().includes(q) ||
      topic.title_en.toLowerCase().includes(q) ||
      topic.keywords.some(k => k.toLowerCase().includes(q)) ||
      topic.symptoms.some(s => s.toLowerCase().includes(q)) ||
      (topic.summary_ku && topic.summary_ku.toLowerCase().includes(q))
    ).slice(0, 10);
  }, [globalSearch]);

  const activeNav = APP_NAV_SECTIONS.find(s => s.id === activeSectionId) || APP_NAV_SECTIONS[0];

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 flex flex-col" dir="rtl">
        
        {/* =========================================================================
            HEADER - 2027 GLASSMORPHIC NAVBAR ("جیهانا دەرونناسی")
        ========================================================================= */}
        <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
            
            {/* Right side: Mobile Menu Trigger + Brand Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="مینویا سەرەکی"
                title="مینویا سەرەکی"
              >
                <Menu size={22} />
              </button>

              <div 
                onClick={() => handleSelectSection("section-encyclopedia", "all")} 
                className="flex items-center gap-3 cursor-pointer group select-none"
              >
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                  <Brain size={22} className="animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white">
                      جیهانا دەرونناسی
                    </h1>
                    <span className="hidden sm:inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                      10,000 بابەت
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium line-clamp-1">
                    مەزنترین پلاتفۆڕما دەرونناسی ب زمانی کوردی یێ بادینی
                  </p>
                </div>
              </div>
            </div>

            {/* Center: Live Platform Metrics Badges */}
            <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300">
              <button 
                onClick={() => handleSelectSection("section-encyclopedia", "all")} 
                className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer transition-colors"
                title="هەمی 10,000 بابەت"
              >
                10,000 بابەت
              </button>
              <span>•</span>
              <button 
                onClick={() => handleSelectSection("section-scientists")} 
                className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer transition-colors"
                title="115 زانا و فەیلەسۆف"
              >
                115 زانا
              </button>
              <span>•</span>
              <button 
                onClick={() => handleSelectSection("section-theories")} 
                className="font-bold text-purple-600 dark:text-purple-400 hover:underline cursor-pointer transition-colors"
                title="125+ بیردۆز"
              >
                125+ بیردۆز
              </button>
              <span>•</span>
              <button 
                onClick={() => handleSelectSection("section-library")} 
                className="font-bold text-teal-600 dark:text-teal-400 hover:underline cursor-pointer transition-colors"
                title="پەرتوکخانە"
              >
                100 پەرتوک
              </button>
              <span>•</span>
              <button 
                onClick={() => handleSelectSection("section-dictionary")} 
                className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer transition-colors"
                title="فەرهەنگ"
              >
                400 زاراوە
              </button>
              <span>•</span>
              <span className="text-[11px] text-slate-400">APA & WHO 100%</span>
            </div>

            {/* Left side: Search, Theme Toggle, Bookmark */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs transition-colors cursor-pointer"
                title="لێگەڕیانا گشتی د جیهانا دەرونناسیێ دا"
              >
                <Search size={16} />
                <span className="hidden sm:inline">لێگەڕیان...</span>
              </button>

              {/* Bookmark Drawer Button */}
              <button
                onClick={() => setShowBookmarksDrawer(true)}
                className="relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                title="بابەتێن هەڵگرتی"
              >
                <Bookmark size={18} />
                {bookmarkedIds.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">
                    {bookmarkedIds.length}
                  </span>
                )}
              </button>

              {/* Dark/Light Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                title={isDarkMode ? "شێوازێ رۆژێ (Light Mode)" : "شێوازێ شەڤێ (Dark Mode)"}
                aria-label="Toggle Dark/Light Mode"
              >
                {isDarkMode ? (
                  <Sun size={18} className="text-amber-400 animate-spin-slow" />
                ) : (
                  <Moon size={18} className="text-slate-700" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* =========================================================================
            LUXURY MOBILE SLIDING DRAWER MENU (2026-2027 ELEGANT STYLE)
        ========================================================================= */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 lg:hidden flex justify-start bg-slate-950/70 backdrop-blur-xl">
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 26, stiffness: 260 }}
                className="w-full max-w-xs sm:max-w-sm bg-slate-900 border-l border-white/10 h-full p-5 shadow-2xl flex flex-col justify-between overflow-y-auto text-slate-100"
              >
                <div className="space-y-4">
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-indigo-600 flex items-center justify-center text-white">
                        <Brain size={18} />
                      </div>
                      <div>
                        <h3 className="font-black text-sm text-white">جیهانا دەرونناسی</h3>
                        <p className="text-[10px] text-emerald-400 font-mono">10,000 بابەت دابەشکری</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      title="داخستن"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* Navigation Groups List */}
                  <div className="space-y-4 py-2">
                    {/* All 10K Top button */}
                    <button
                      onClick={() => handleSelectSection("section-encyclopedia", "all")}
                      className={`
                        w-full flex items-center justify-between p-3 rounded-2xl text-right text-xs font-black transition-all cursor-pointer
                        ${activeSectionId === "section-encyclopedia" && encyclopediaCategory === "all"
                          ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/30"
                          : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/20"
                        }
                      `}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">📚</span>
                        <span>هەمی 10,000 بابەت</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-600 text-white font-mono font-bold">
                        10K
                      </span>
                    </button>

                    {/* Grouped Links */}
                    <div className="space-y-1.5">
                      {APP_NAV_SECTIONS.filter(s => s.id !== "section-encyclopedia").map((section) => {
                        const isActive = activeSectionId === section.id;
                        return (
                          <button
                            key={section.id}
                            onClick={() => handleSelectSection(section.id, section.category10k)}
                            className={`
                              w-full flex items-center justify-between p-2.5 rounded-xl text-right text-xs font-bold transition-all cursor-pointer
                              ${isActive
                                ? "bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-600/25"
                                : "text-slate-300 hover:bg-white/5 hover:text-white"
                              }
                            `}
                          >
                            <div className="flex items-center gap-2.5 truncate">
                              <span className={`p-1.5 rounded-lg ${isActive ? "bg-white/20 text-white" : "bg-white/5 text-slate-300"}`}>
                                {section.icon}
                              </span>
                              <span className="truncate">{section.title_ku}</span>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-white/10 text-slate-400 shrink-0">
                              {section.badge_ku}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Drawer Footer Helpline */}
                <div className="pt-4 border-t border-white/10 text-[11px] text-slate-400 space-y-2">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <ShieldCheck size={14} />
                    <span>خەتا گەرم یا دەروونی: 119 (بێ بەرامبەر)</span>
                  </div>
                  <p className="text-[10px] text-slate-500">جیهانا دەرونناسیێ © 2026-2027</p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* =========================================================================
            MAIN LAYOUT: DESKTOP SIDEBAR + CONTENT AREA
        ========================================================================= */}
        <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col lg:flex-row gap-8">
          
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-72 xl:w-80 shrink-0">
            <div className="sticky top-28 space-y-4">
              
              {/* Sidebar Header Card */}
              <div className="p-4 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 px-1">
                  <span>بەشێن جیهانا دەرونناسیێ</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">10,000 بابەت</span>
                </div>

                {/* 1. Featured All 10,000 Topics Quick Trigger */}
                <button
                  onClick={() => handleSelectSection("section-encyclopedia", "all")}
                  className={`
                    w-full flex items-center justify-between p-3 rounded-2xl text-right text-xs font-black transition-all duration-200 cursor-pointer mb-2
                    ${activeSectionId === "section-encyclopedia" && encyclopediaCategory === "all"
                      ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white shadow-md shadow-emerald-600/30 scale-[1.02]' 
                      : 'bg-emerald-500/10 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/15'
                    }
                  `}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className={`p-1.5 rounded-xl ${activeSectionId === "section-encyclopedia" && encyclopediaCategory === "all" ? 'bg-white/20 text-white' : 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'}`}>
                      <Brain size={18} />
                    </span>
                    <span className="truncate">📚 هەمی 10,000 بابەت</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-extrabold bg-emerald-600 text-white">
                    10,000
                  </span>
                </button>

                {/* Categorized Sections Navigation */}
                <nav className="space-y-1 max-h-[62vh] overflow-y-auto pr-0.5 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700" role="navigation">
                  {APP_NAV_SECTIONS.filter(s => s.id !== "section-encyclopedia").map((section) => {
                    const isActive = activeSectionId === section.id;

                    return (
                      <button
                        key={section.id}
                        onClick={() => handleSelectSection(section.id, section.category10k)}
                        className={`
                          w-full flex items-center justify-between p-2.5 rounded-xl text-right text-xs font-bold transition-all duration-200 cursor-pointer
                          ${isActive 
                            ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-600/25 scale-[1.02]' 
                            : 'bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                          }
                        `}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className={`p-1.5 rounded-lg shrink-0 ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                            {section.icon}
                          </span>
                          <span className="truncate">{section.title_ku}</span>
                        </div>

                        <span className={`
                          text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0 mr-1.5 font-mono
                          ${isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                          }
                        `}>
                          {section.badge_ku}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Fast Helpline Banner */}
              <div className="p-4 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-md space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <ShieldCheck size={16} />
                  <span>پالپشتیا دەروونی ل کوردستانێ</span>
                </div>
                <div className="bg-white/10 p-2.5 rounded-xl text-center text-xs font-extrabold text-amber-300 border border-white/10">
                  📞 خەتا گەرم یا دەروونی: 119 (بێ بەرامبەر)
                </div>
              </div>

            </div>
          </aside>

          {/* =======================================================================
              MAIN CONTENT VIEW ROUTER
          ======================================================================= */}
          <main className="flex-1 min-w-0">
            {/* Top Breadcrumb & Mobile Navigation Indicator */}
            <div className="flex xl:hidden items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800 text-xs">
              <span className="font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                <span>{activeNav.icon}</span>
                <span>{activeNav.title_ku}</span>
              </span>
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-[11px] text-emerald-600 dark:text-emerald-400 font-extrabold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 cursor-pointer"
              >
                گوهۆڕینا بەشی ▾
              </button>
            </div>

            {/* Views Switcher */}
            {activeSectionId === "section-scientists" ? (
              <ScientistsView />
            ) : activeSectionId === "section-theories" ? (
              <TheoriesView onOpenScientistBio={() => handleSelectSection("section-scientists")} />
            ) : activeSectionId === "section-tests" ? (
              <PsychTestsView />
            ) : activeSectionId === "section-anonymous" ? (
              <AnonymousQAView />
            ) : activeSectionId === "section-dictionary" ? (
              <DictionaryView />
            ) : activeSectionId === "section-library" ? (
              <LibraryView />
            ) : activeSectionId === "section-growth" || activeSectionId === "section-family" ? (
              <SevenSectionsContent
                activeSectionId={activeSectionId}
                onSelectSection={handleSelectSection}
                bookmarkedIds={bookmarkedIds}
                onToggleBookmark={toggleBookmark}
              />
            ) : (
              // All distributed 10k sections (disorders, experiments, concepts, treatments, neuro, child, social, industrial, forensic, encyclopedia)
              <EncyclopediaView 
                initialCategory={encyclopediaCategory} 
                onSelectCategory={(cat) => setEncyclopediaCategory(cat)} 
              />
            )}
          </main>
        </div>

        {/* =========================================================================
            FOOTER - 2026-2027 MODERN STANDARDS ("جیهانا دەرونناسی")
        ========================================================================= */}
        <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md py-8 text-xs text-slate-500 dark:text-slate-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                🧠
              </div>
              <span className="font-bold text-slate-700 dark:text-slate-300">
                جیهانا دەرونناسی (Cîhana Derûnnasiyê) © 2026-2027
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[11px]">
              <span>پلاتفۆڕما دەرونناسیێ ب زاراوەیێ بادینی یێ پاقژ (10,000 بابەت)</span>
              <span>•</span>
              <span>APA, WHO, NIMH, DSM-5 Verified</span>
              <span>•</span>
              <span>تایبەت بۆ هەرێما کوردستانێ</span>
            </div>
          </div>
        </footer>

        {/* =========================================================================
            GLOBAL SEARCH MODAL
        ========================================================================= */}
        <AnimatePresence>
          {isSearchOpen && (
            <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md pt-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
              >
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
                  <Search size={20} className="text-emerald-600" />
                  <input
                    type="text"
                    value={globalSearch}
                    onChange={(e) => setGlobalSearch(e.target.value)}
                    placeholder="ل ناڤ 10,000 بابەتێن جیهانا دەرونناسیێ دا بگەڕە (خەمۆکی، دڵەڕاوکێ، زارۆک، خەو)..."
                    className="w-full bg-transparent text-sm font-semibold text-slate-900 dark:text-white focus:outline-none placeholder:text-slate-400"
                    autoFocus
                  />
                  <button
                    onClick={() => { setIsSearchOpen(false); setGlobalSearch(""); }}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  >
                    داخستن
                  </button>
                </div>

                <div className="max-h-96 overflow-y-auto p-4 space-y-2">
                  {globalSearchResults.length > 0 ? (
                    globalSearchResults.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          handleSelectSection("section-disorders", "Nexoshi");
                        }}
                        className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200/70 dark:border-slate-800 cursor-pointer transition-colors space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                            {item.title_ku}
                          </h4>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                          {item.summary_ku || item.full_content_ku}
                        </p>
                      </div>
                    ))
                  ) : globalSearch ? (
                    <div className="text-center py-8 text-xs text-slate-400">
                      چ ئەنجام نەهاتنە دیتن بۆ &quot;{globalSearch}&quot;. تکایە پەیڤەکا دی تاقی بکە.
                    </div>
                  ) : (
                    <div className="text-center py-6 text-xs text-slate-400">
                      پەیڤەکێ بنڤیسە بۆ گەڕیان د ناڤ 10,000 بابەت، پەرتووک، و زاراوەیاندا...
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* =========================================================================
            BOOKMARKS DRAWER
        ========================================================================= */}
        <AnimatePresence>
          {showBookmarksDrawer && (
            <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 280 }}
                className="w-full max-w-md bg-white dark:bg-slate-900 h-full p-6 shadow-2xl flex flex-col border-r border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <BookmarkCheck size={20} className="text-emerald-600" />
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                      بابەتێن هەڵگرتی ({bookmarkedIds.length})
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowBookmarksDrawer(false)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto py-4 space-y-3">
                  {bookmarkedIds.length === 0 ? (
                    <div className="text-center py-12 text-xs text-slate-400 space-y-2">
                      <Bookmark size={32} className="mx-auto text-slate-300 dark:text-slate-700" />
                      <p>تە چ بابەت هێشتا هەڵنەگرتینە.</p>
                      <p className="text-[11px] text-slate-500">ل سەر نیشانا هەڵگرتنێ داگرە بۆ لایێ بابەتێن خۆ یێن دڵخواز.</p>
                    </div>
                  ) : (
                    bookmarkedIds.map(id => {
                      const found = psychologyDatabase.find(t => String(t.id) === id);
                      return (
                        <div
                          key={id}
                          className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3"
                        >
                          <div>
                            <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                              {found ? found.title_ku : `بابەت ${id}`}
                            </h4>
                            <p className="text-[11px] text-slate-500 line-clamp-1">
                              {found ? found.category : "دەروونناسی"}
                            </p>
                          </div>
                          <button
                            onClick={() => toggleBookmark(id)}
                            className="text-xs text-rose-500 hover:underline shrink-0 cursor-pointer"
                          >
                            لادان
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* =========================================================================
            FLOATING AI CHATBOT (JIHAANA DERÛNASIÊ AI)
        ========================================================================= */}
        <Chatbot onNavigateToLibrary={() => handleSelectSection("section-library")} />

      </div>
    </div>
  );
}