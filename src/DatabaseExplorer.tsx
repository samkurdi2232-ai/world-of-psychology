import React, { useState, useMemo } from 'react';
import { 
  Search, X, Sparkles, Filter, Microscope, BookOpen, Stethoscope, 
  ExternalLink, Copy, Check, Bookmark, BookmarkCheck, ChevronRight,
  Brain, Dna, Users, Activity, ShieldCheck, HeartPulse, UserCheck, FlaskConical,
  Tag, Clock, AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { psychologyDatabase, DatabaseTopic, DATABASE_CATEGORIES } from './database';

interface DatabaseExplorerProps {
  onClose?: () => void;
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
}

export default function DatabaseExplorer({
  bookmarkedIds,
  onToggleBookmark
}: DatabaseExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [activeTopic, setActiveTopic] = useState<DatabaseTopic | null>(null);

  // Filter topics instantly
  const filteredTopics = useMemo(() => {
    let list = psychologyDatabase;

    if (selectedCategory !== "All Categories") {
      list = list.filter(item => {
        if (selectedCategory === "Disorders") return item.category.toLowerCase().includes("disorder");
        if (selectedCategory === "Experiments") return item.category.toLowerCase().includes("experiment");
        if (selectedCategory === "Scientists & Theories") return item.category.toLowerCase().includes("scientist") || item.category.toLowerCase().includes("theor");
        if (selectedCategory === "Therapies & Techniques") return item.category.toLowerCase().includes("therap");
        if (selectedCategory === "Brain & Neuroscience") return item.category.toLowerCase().includes("brain") || item.category.toLowerCase().includes("neuro");
        if (selectedCategory === "Social Psychology") return item.category.toLowerCase().includes("social");
        if (selectedCategory === "Cognitive Psychology") return item.category.toLowerCase().includes("cognitive");
        if (selectedCategory === "Kurdish Psychology") return item.category.toLowerCase().includes("kurdish");
        return item.category.toLowerCase() === selectedCategory.toLowerCase();
      });
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(item => {
        return (
          item.title_en.toLowerCase().includes(q) ||
          item.title_ku.toLowerCase().includes(q) ||
          item.title_ar.toLowerCase().includes(q) ||
          item.scientist.toLowerCase().includes(q) ||
          item.experiment.toLowerCase().includes(q) ||
          item.summary_ku.toLowerCase().includes(q) ||
          item.full_content_ku.toLowerCase().includes(q) ||
          item.keywords.some(k => k.toLowerCase().includes(q))
        );
      });
    }

    return list;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Hero Database Banner - Muted Navy with Sage Accents */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#102A43] via-[#243B53] to-[#334E68] text-white p-6 sm:p-8 shadow-xl border border-white/10 backdrop-blur-md">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#6D9479]/20 text-[#A3C7AD] border border-[#6D9479]/30 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-xs">
              <Sparkles size={14} className="text-[#D4A373]" />
              <span>World's Largest Kurdish Psychology Database • بانکا زانیاریێن دەروونناسیێ</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight font-sans">
              1,000+ Topics Psychology Archive
            </h2>

            <p className="text-[#D9E2EC] text-xs sm:text-sm leading-relaxed font-light">
              Comprehensive DSM-5 disorders with clinical criteria, landmark psychological experiments, historical theories, and pure Kurdish Badini deep-dives. Expandable database architecture ready for continuous knowledge seeding.
            </p>
          </div>

          {/* Database Counter Badge */}
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-[#6D9479] text-white flex items-center justify-center font-extrabold text-2xl shadow-lg border border-white/20 font-mono">
              {psychologyDatabase.length}
            </div>
            <div>
              <p className="text-[11px] text-[#BCCCDC] uppercase tracking-wider font-bold">Active Topics</p>
              <p className="text-sm font-extrabold text-white">Pure Badini Archive</p>
              <p className="text-[10px] text-[#D4A373] font-medium">1000+ Capacity</p>
            </div>
          </div>
        </div>
      </div>

      {/* Instant Search Bar & Category Filters */}
      <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-[#EADFCF]/80 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#829AB1]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search across 1,000+ topics by title, scientist, keywords (English, عربي, کوردی)..."
            className="w-full pl-11 pr-10 py-3 rounded-2xl border border-[#EADFCF] focus:border-[#6D9479] focus:ring-2 focus:ring-[#6D9479]/15 text-xs sm:text-sm text-[#243B53] placeholder-[#829AB1] outline-none transition-all bg-[#FAF8F5]/60 focus:bg-white"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#829AB1] hover:text-[#243B53] cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills Scroller */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar text-xs">
          <span className="text-[#627D98] font-bold px-1 shrink-0 flex items-center gap-1">
            <Filter size={13} className="text-[#6D9479]" />
            <span>Filter:</span>
          </span>

          <button
            onClick={() => setSelectedCategory("All Categories")}
            className={`px-3 py-1.5 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === "All Categories"
                ? "bg-[#102A43] text-white shadow-xs"
                : "bg-[#FAF8F5] text-[#486581] border border-[#EADFCF] hover:bg-[#F5EFE6]"
            }`}
          >
            All Categories ({psychologyDatabase.length})
          </button>

          {DATABASE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#6D9479] text-white shadow-xs font-bold"
                  : "bg-[#FAF8F5] text-[#486581] border border-[#EADFCF] hover:bg-[#F5EFE6]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-xs text-[#627D98] px-1">
        <span>
          Showing <strong className="text-[#102A43] font-mono">{filteredTopics.length}</strong> matching entries in database
        </span>
        {selectedCategory !== "All Categories" && (
          <span className="text-[#6D9479] font-bold">Category: {selectedCategory}</span>
        )}
      </div>

      {/* Grid of Database Topic Cards with DSM-5 tags and medical icons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
        {filteredTopics.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-3xl p-5 shadow-xs border border-[#EADFCF]/80 hover:border-[#6D9479] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Category & Badge */}
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E6EDE8] text-[#364B3D] border border-[#CFDDD3]">
                  {item.category}
                </span>

                <div className="flex items-center gap-1.5">
                  <span className="px-1.5 py-0.5 rounded-md text-[9px] font-bold font-mono bg-[#FAF8F5] text-[#627D98] border border-[#EADFCF]">
                    DSM-5
                  </span>
                  <button
                    onClick={() => onToggleBookmark(String(item.id))}
                    className="p-1 text-[#9FB3C8] hover:text-[#D4A373] transition-colors cursor-pointer"
                  >
                    {bookmarkedIds.includes(String(item.id)) ? (
                      <BookmarkCheck size={16} className="text-[#D4A373] fill-[#D4A373]" />
                    ) : (
                      <Bookmark size={16} />
                    )}
                  </button>
                </div>
              </div>

              {/* Title Section */}
              <div>
                <h3 className="text-base font-bold text-[#102A43] group-hover:text-[#6D9479] transition-colors leading-snug">
                  {item.title_ku}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#829AB1] mt-0.5 font-medium truncate">
                  <span className="font-mono text-[#486581]">{item.title_en}</span>
                  <span>•</span>
                  <span className="font-arabic">{item.title_ar}</span>
                </div>
              </div>

              {/* Badini Summary */}
              <p className="text-xs text-[#486581] leading-relaxed line-clamp-3 bg-[#FAF8F5] p-3 rounded-2xl border border-[#EADFCF]/70">
                {item.summary_ku}
              </p>

              {/* Metadata pill */}
              <div className="flex flex-wrap gap-1.5 text-[10px] text-[#627D98] pt-1">
                {item.scientist && (
                  <span className="bg-[#FAF8F5] px-2 py-0.5 rounded-md border border-[#EADFCF] flex items-center gap-1">
                    🔬 <strong className="text-[#243B53]">{item.scientist}</strong>
                  </span>
                )}
                {item.experiment && (
                  <span className="bg-[#FAF8F5] px-2 py-0.5 rounded-md border border-[#EADFCF] truncate max-w-[200px]">
                    🧪 {item.experiment}
                  </span>
                )}
              </div>
            </div>

            {/* Card Action Footer */}
            <div className="mt-4 pt-3 border-t border-[#EADFCF]/70 flex items-center justify-between text-xs">
              <span className="text-[10px] text-[#9FB3C8] font-mono">Topic ID #{item.id}</span>
              <button
                onClick={() => setActiveTopic(item)}
                className="px-3 py-1.5 rounded-xl bg-[#FAF8F5] group-hover:bg-[#102A43] text-[#334E68] group-hover:text-white font-bold transition-all flex items-center gap-1 cursor-pointer border border-[#EADFCF] group-hover:border-[#102A43]"
              >
                <span>Read Deep Dive</span>
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Modal for Selected Topic */}
      {activeTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102A43]/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-[#EADFCF] custom-scrollbar animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between pb-4 border-b border-[#EADFCF]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E6EDE8] text-[#364B3D] border border-[#CFDDD3]">
                    {activeTopic.category} • {activeTopic.ocean}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold font-mono bg-[#FAF8F5] text-[#627D98] border border-[#EADFCF]">
                    DSM-5 Manual Standard
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#102A43]">
                  {activeTopic.title_ku}
                </h3>
                <div className="text-xs text-[#829AB1] font-medium">
                  EN: {activeTopic.title_en} • AR: {activeTopic.title_ar}
                </div>
              </div>
              <button 
                onClick={() => setActiveTopic(null)}
                className="p-2 text-[#829AB1] hover:text-[#243B53] hover:bg-[#F5EFE6] rounded-full cursor-pointer transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#EADFCF] text-sm text-[#486581] leading-relaxed">
              <strong className="text-[#102A43] block mb-1">کورتیا زانستی ب بادینی:</strong>
              {activeTopic.summary_ku}
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-[#102A43]">شلۆڤەکرنا زانستی یا تەمام:</h4>
              <p className="text-xs sm:text-sm text-[#486581] leading-relaxed bg-[#FAF8F5] p-4 rounded-2xl border border-[#EADFCF]">
                {activeTopic.full_content_ku}
              </p>
            </div>

            {activeTopic.symptoms && activeTopic.symptoms.length > 0 && (
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-[#243B53]">نیشانە (DSM-5 Diagnostic Criteria):</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeTopic.symptoms.map((s, idx) => (
                    <span key={idx} className="bg-[#FAF8F5] text-[#334E68] text-xs px-2.5 py-1 rounded-lg border border-[#EADFCF]">
                      • {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTopic.treatments && activeTopic.treatments.length > 0 && (
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-[#364B3D]">چارەسەریێن زانستی:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeTopic.treatments.map((t, idx) => (
                    <span key={idx} className="bg-[#E6EDE8] text-[#364B3D] text-xs px-2.5 py-1 rounded-lg border border-[#CFDDD3]">
                      ✓ {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-3 border-t border-[#EADFCF] flex items-center justify-between text-xs text-[#829AB1]">
              <span>سەرچاوە: {activeTopic.sources.join(' • ')}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`${activeTopic.title_ku} (${activeTopic.title_en})\nSources: ${activeTopic.sources.join(', ')}`);
                }}
                className="px-3 py-1.5 rounded-xl bg-[#FAF8F5] hover:bg-[#F5EFE6] text-[#243B53] border border-[#EADFCF] font-bold flex items-center gap-1 cursor-pointer"
              >
                <Copy size={13} />
                <span>کۆپیکردنا سەرچاوەیان</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
