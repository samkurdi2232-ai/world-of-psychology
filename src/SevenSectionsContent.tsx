import React, { useState } from 'react';
import { 
  Search, X, Sparkles, Filter, Microscope, BookOpen, Stethoscope, 
  ExternalLink, Copy, Check, Bookmark, BookmarkCheck, ChevronRight,
  Brain, Dna, Users, Activity, ShieldCheck, HeartPulse, Baby,
  HeartHandshake, ClipboardCheck, Lock, BookOpenCheck, ArrowRight,
  AlertTriangle, CheckCircle2, FileText, Share2, Layers, Tag,
  Clock, ShieldAlert, Sparkle, Stethoscope as MedicalCross
} from 'lucide-react';
import { psychologyDatabase, DatabaseTopic } from './database';
import { MAIN_SECTIONS, MainSectionConfig } from './data/mainSectionsConfig';
import { sevenSectionsTopics, SevenSectionTopic } from './data/sevenSectionsTopicsData';

interface Props {
  activeSectionId: string;
  onSelectSection: (sectionId: string) => void;
  bookmarkedIds: string[];
  onToggleBookmark: (topicId: string) => void;
}

// Unified card data structure
interface UnifiedTopic {
  id: string;
  title_ku: string;
  title_en: string;
  category: string;
  badge: string;
  icon: string;
  summary_ku: string;
  symptoms: string[];
  causes: string[];
  treatments: string[];
  tips: string[];
  realStory?: string;
  scientist?: string;
  sources: string[];
  isCustom: boolean;
  rawTopic?: any;
}

export default function SevenSectionsContent({
  activeSectionId,
  onSelectSection,
  bookmarkedIds,
  onToggleBookmark
}: Props) {
  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<UnifiedTopic | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const currentSection = MAIN_SECTIONS.find(s => s.id === activeSectionId) || MAIN_SECTIONS[0];

  // 1. Get detailed handcrafted topics for this section
  const detailedList = sevenSectionsTopics.filter(t => t.sectionId === activeSectionId);

  // 2. Distribute database topics (from the 160+ items) into this specific section
  const dbList = psychologyDatabase.filter(item => {
    if (activeSectionId === 'section-disorders') {
      return (
        item.ocean.includes('Disorders') || 
        item.category === 'Disorders' ||
        item.keywords.some(k => k.includes('خەمۆکی') || k.includes('دڵەڕاوکێ') || k.includes('وەسواس') || k.includes('شیزۆفرینیا') || k.includes('بایپۆلار') || k.includes('ptsd'))
      );
    }
    if (activeSectionId === 'section-child') {
      return (
        item.ocean.includes('Development') || 
        item.category.includes('Child') || 
        item.keywords.some(k => k.includes('زارۆک') || k.includes('منداڵ') || k.includes('گەشە') || k.includes('ئۆتیزم') || k.includes('هەرزەکار') || k.includes('پەروەردە'))
      );
    }
    if (activeSectionId === 'section-growth') {
      return (
        item.ocean.includes('Brain') || 
        item.ocean.includes('Cognitive') || 
        item.category.includes('Theories') || 
        item.keywords.some(k => k.includes('باوەری') || k.includes('سترێس') || k.includes('هزر') || k.includes('ئارمانج') || k.includes('عادەت') || k.includes('کات'))
      );
    }
    if (activeSectionId === 'section-family') {
      return (
        item.ocean.includes('Social') || 
        item.ocean.includes('Kurdish') || 
        item.category.includes('Social') || 
        item.keywords.some(k => k.includes('خێزان') || k.includes('هەڤژین') || k.includes('ئەڤین') || k.includes('ژن و مێر') || k.includes('جودابوون') || k.includes('پەیوەندی'))
      );
    }
    return true;
  });

  // Convert detailed topics to unified format
  const unifiedDetailed: UnifiedTopic[] = detailedList.map(t => ({
    id: t.id,
    title_ku: t.title_ku,
    title_en: t.title_en,
    category: currentSection.title_ku,
    badge: t.badge_ku,
    icon: t.icon,
    summary_ku: t.summary_ku,
    symptoms: t.symptoms_or_behaviors,
    causes: t.causes_ku,
    treatments: t.treatment_or_exercises,
    tips: t.prevention_or_tips,
    realStory: t.realStory_ku,
    sources: t.sources,
    isCustom: true,
    rawTopic: t
  }));

  // Convert database topics to unified format
  const unifiedDb: UnifiedTopic[] = dbList.map(d => ({
    id: `db-${d.id}`,
    title_ku: d.title_ku,
    title_en: d.title_en,
    category: d.category,
    badge: d.category || "بانکا دەروونناسیێ",
    icon: activeSectionId === 'section-disorders' ? "🌧️" : activeSectionId === 'section-child' ? "🧸" : activeSectionId === 'section-growth' ? "🌱" : "🤝",
    summary_ku: d.summary_ku,
    symptoms: d.symptoms || [],
    causes: d.keywords || [],
    treatments: d.treatments || [],
    tips: d.symptoms.slice(0, 3) || [],
    realStory: d.experiment ? `ڤەکۆلینا زانستی: ${d.experiment}` : undefined,
    scientist: d.scientist,
    sources: d.sources || ["APA.org", "WHO.int"],
    isCustom: false,
    rawTopic: d
  }));

  // Deduplicate and combine
  const seenTitles = new Set<string>();
  const combinedTopics: UnifiedTopic[] = [];

  for (const item of [...unifiedDetailed, ...unifiedDb]) {
    const norm = item.title_ku.trim();
    if (!seenTitles.has(norm)) {
      seenTitles.add(norm);
      combinedTopics.push(item);
    }
  }

  // Filter by search query
  const filteredTopics = combinedTopics.filter(t => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    return t.title_ku.toLowerCase().includes(q) ||
      t.title_en.toLowerCase().includes(q) ||
      t.summary_ku.toLowerCase().includes(q);
  });

  const copyText = (topic: UnifiedTopic) => {
    const text = `${topic.title_ku} (${topic.title_en})\n${topic.summary_ku}\nمەرجەع: Behra Derûnê (APA & WHO)`;
    navigator.clipboard.writeText(text);
    setCopiedId(topic.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner - Therapeutic Health Tech Aesthetic */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#102A43] via-[#1c3d5a] to-[#243B53] p-6 sm:p-8 text-white shadow-xl border border-white/10">
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6D9479]/20 border border-[#6D9479]/35 text-[#A3C7AD] text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#6D9479] animate-pulse" />
            <span>بەشێ {currentSection.number}: {currentSection.title_ku}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {currentSection.title_ku}
          </h2>

          <div className="flex flex-wrap items-center gap-2 text-xs text-[#D9E2EC]/90 font-medium">
            <span className="bg-black/20 px-2.5 py-0.5 rounded-lg border border-white/10 font-mono">
              EN: {currentSection.title_en}
            </span>
            <span>•</span>
            <span className="bg-black/20 px-2.5 py-0.5 rounded-lg border border-white/10 font-arabic">
              AR: {currentSection.title_ar}
            </span>
          </div>

          <p className="text-[#D9E2EC] text-xs sm:text-sm leading-relaxed font-light">
            {currentSection.description_ku}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="bg-[#6D9479]/25 text-[#A3C7AD] px-3 py-1 rounded-xl font-bold border border-[#6D9479]/40">
              📊 {combinedTopics.length} بابەتێن بەردەست د ڤێ بەشێ دا
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-xl text-white font-medium border border-white/10">
              APA & WHO زانستی
            </span>
          </div>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-[#EADFCF]/80 flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#829AB1]" size={16} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`ل بابەتێن ${currentSection.title_ku} بگەڕە...`}
            className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-[#EADFCF] focus:border-[#6D9479] text-xs sm:text-sm text-[#243B53] placeholder-[#829AB1] outline-none focus:ring-2 focus:ring-[#6D9479]/15 transition-all bg-[#FAF8F5]/60 focus:bg-white text-right font-arabic"
            dir="rtl"
          />
          {search && (
            <button 
              onClick={() => setSearch("")}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#829AB1] hover:text-[#243B53] cursor-pointer"
            >
              پاککەرەوە
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-[#486581]">
          <span>دیارکرنا:</span>
          <span className="font-bold bg-[#E6EDE8] text-[#364B3D] px-2.5 py-1 rounded-full border border-[#CFDDD3]">
            {filteredTopics.length} بابەت ژ {combinedTopics.length}
          </span>
        </div>
      </div>

      {/* Unified Topics Grid - Card Based Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
        {filteredTopics.map((topic) => {
          const isSaved = bookmarkedIds.includes(topic.id);

          return (
            <div
              key={topic.id}
              className="bg-white rounded-3xl p-5.5 shadow-xs border border-[#EADFCF]/80 hover:border-[#6D9479] hover:shadow-lg transition-all duration-200 flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-10 rounded-2xl bg-[#FAF8F5] border border-[#EADFCF] flex items-center justify-center text-xl shadow-xs group-hover:scale-105 transition-transform">
                      {topic.icon}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold border bg-[#E6EDE8] text-[#364B3D] border-[#CFDDD3]">
                      {topic.badge}
                    </span>
                  </div>

                  <button
                    onClick={() => onToggleBookmark(topic.id)}
                    className="p-1.5 text-[#9FB3C8] hover:text-[#D4A373] transition-colors cursor-pointer"
                    title="پاشەکەوتکرن"
                  >
                    {isSaved ? (
                      <BookmarkCheck size={18} className="text-[#D4A373]" />
                    ) : (
                      <Bookmark size={18} />
                    )}
                  </button>
                </div>

                <div className="text-right" dir="rtl">
                  <h4 className="font-extrabold text-base text-[#102A43] group-hover:text-[#6D9479] transition-colors leading-snug">
                    {topic.title_ku}
                  </h4>
                  <p className="text-[11px] text-[#829AB1] font-mono mt-0.5 truncate" dir="ltr">
                    {topic.title_en}
                  </p>
                </div>

                <p className="text-xs text-[#486581] leading-relaxed line-clamp-3 bg-[#FAF8F5] p-3 rounded-2xl border border-[#F5EFE6] text-right font-arabic" dir="rtl">
                  {topic.summary_ku}
                </p>

                {topic.scientist && (
                  <div className="text-[11px] text-[#334E68] bg-[#F5EFE6]/60 p-2 rounded-xl border border-[#EADFCF]/70 text-right" dir="rtl">
                    🔬 زانا / بیردۆز: <strong>{topic.scientist}</strong>
                  </div>
                )}
              </div>

              {/* Card Footer with "بخوێنە" Button */}
              <div className="pt-2 border-t border-[#F5EFE6] flex items-center justify-between">
                <button
                  onClick={() => copyText(topic)}
                  className="p-2 rounded-xl text-[#829AB1] hover:text-[#102A43] hover:bg-[#F5EFE6] transition-colors cursor-pointer"
                  title="کۆپیکردنی زانیاری"
                >
                  {copiedId === topic.id ? <Check size={15} className="text-[#6D9479]" /> : <Copy size={15} />}
                </button>

                <button
                  onClick={() => setSelectedTopic(topic)}
                  className="py-2 px-4 rounded-xl bg-[#102A43] hover:bg-[#1c3d5a] text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer group-hover:bg-[#6D9479]"
                >
                  <span>بخوێنە (Read Deep)</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Topic Full Article Modal */}
      {selectedTopic && (
        <div 
          className="fixed inset-0 bg-[#102A43]/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTopic(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#EADFCF] space-y-6 max-h-[85vh] overflow-y-auto custom-scrollbar text-right font-arabic"
            dir="rtl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-[#F5EFE6] pb-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#364B3D] bg-[#E6EDE8] px-3 py-1 rounded-full border border-[#CFDDD3]">
                  {selectedTopic.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#102A43] pt-1">
                  {selectedTopic.title_ku}
                </h3>
                <p className="text-xs text-[#829AB1] font-mono" dir="ltr">{selectedTopic.title_en}</p>
              </div>
              <button
                onClick={() => setSelectedTopic(null)}
                className="p-2 rounded-xl text-[#829AB1] hover:text-[#102A43] hover:bg-[#F5EFE6] cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Explanation */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#829AB1] uppercase tracking-wider">شڕۆڤەکرنا هوور ب بادینی:</h4>
              <p className="text-sm text-[#243B53] leading-relaxed bg-[#FAF8F5] p-4 rounded-2xl border border-[#EADFCF]/70">
                {selectedTopic.summary_ku}
              </p>
            </div>

            {/* Symptoms / Behaviors */}
            {selectedTopic.symptoms && selectedTopic.symptoms.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#829AB1] uppercase tracking-wider">نیشانە و دیاردە سەرەکییەکان:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedTopic.symptoms.map((sym, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-[#F5EFE6]/50 p-2.5 rounded-xl border border-[#EADFCF]/50 text-xs text-[#334E68]">
                      <span className="text-[#6D9479] font-bold">•</span>
                      <span>{sym}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Treatments / Exercises */}
            {selectedTopic.treatments && selectedTopic.treatments.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#829AB1] uppercase tracking-wider">چارەسەری و رێکێن کردارەکی (CBT / راهێنان):</h4>
                <div className="space-y-2">
                  {selectedTopic.treatments.map((tr, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-[#E6EDE8]/40 p-3 rounded-xl border border-[#CFDDD3] text-xs text-[#243B53]">
                      <CheckCircle2 size={15} className="text-[#6D9479] shrink-0 mt-0.5" />
                      <span>{tr}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Real Story or Scientific Basis */}
            {selectedTopic.realStory && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#829AB1] uppercase tracking-wider">چیرۆک یان بەڵگەیێ زانستی:</h4>
                <div className="p-3.5 bg-amber-50/70 border border-amber-200/70 rounded-2xl text-xs text-amber-950 leading-relaxed">
                  📖 {selectedTopic.realStory}
                </div>
              </div>
            )}

            {/* Citations */}
            <div className="pt-3 border-t border-[#F5EFE6] flex items-center justify-between text-xs text-[#829AB1]">
              <span>مەرجەع: {selectedTopic.sources.join(' • ')}</span>
              <button
                onClick={() => setSelectedTopic(null)}
                className="py-2.5 px-6 rounded-xl bg-[#102A43] text-white font-bold text-xs hover:bg-[#1c3d5a] cursor-pointer"
              >
                داخستن
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
