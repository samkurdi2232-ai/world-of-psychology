import React, { useState } from 'react';
import { 
  Search, BookOpen, Volume2, Bookmark, Check, Copy, ExternalLink, 
  Sparkles, Filter, Hash, ChevronRight, BookA
} from 'lucide-react';
import { dictionaryTerms, DictionaryTerm } from './data/dictionaryData';

const ALPHABET_KU = [
  "هەموو", "ئ", "ب", "پ", "ت", "ج", "چ", "ح", "خ", "د", 
  "ر", "ز", "ژ", "س", "ش", "ف", "ڤ", "ق", "ک", "گ", "ل", 
  "م", "ن", "و", "ه", "ی"
];

export default function DictionaryView() {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState("هەموو");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<DictionaryTerm | null>(null);

  const categories = Array.from(new Set(dictionaryTerms.map(t => t.category)));

  const filteredTerms = dictionaryTerms.filter(term => {
    const matchesLetter = activeLetter === "هەموو" || term.letter_ku === activeLetter;
    const matchesCategory = selectedCategory === "all" || term.category === selectedCategory;
    const q = search.toLowerCase().trim();
    const matchesSearch = !q || 
      term.term_ku.toLowerCase().includes(q) ||
      term.term_en.toLowerCase().includes(q) ||
      term.term_ar.toLowerCase().includes(q) ||
      term.def_ku.toLowerCase().includes(q);
    return matchesLetter && matchesCategory && matchesSearch;
  });

  const copyTerm = (term: DictionaryTerm) => {
    const text = `${term.term_ku} (${term.term_en} / ${term.term_ar})\nپێناسە: ${term.def_ku}\nنموونە: ${term.example_ku}`;
    navigator.clipboard.writeText(text);
    setCopiedId(term.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0A4A7A] via-[#11578e] to-[#1c6fae] p-6 sm:p-8 text-white shadow-xl">
        <div className="relative z-10 space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C158]/20 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold">
            <BookA size={14} />
            <span>بەشێ 7: فەرهەنگا زانستی یا دەروونناسیێ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            فەرهەنگا زاراوەیێن دەروونناسیێ (کوردی • ئینگلیزی • عەرەبی)
          </h2>
          <p className="text-blue-100/90 text-sm leading-relaxed">
            ل فەرهەنگێ بگەڕە بۆ دیتنا هەر تێگەهەکێ دەروونی ب پێناسەیا سادە یا بادینی، زاراوەیێ زانستی یێ ئینگلیزی، و هاوتایێ عەرەبی دگەل نموونەیێن جڤاکی.
          </p>
          <div className="flex items-center gap-3 pt-1 text-xs text-[#E5C158]">
            <span className="font-semibold bg-white/10 px-2.5 py-1 rounded-lg">400 زاراوە</span>
            <span>•</span>
            <span>رێکخستی ب پیتان</span>
            <span>•</span>
            <span>پێناسەیا 2 دێڕی + نموونە</span>
          </div>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ل فەرهەنگێ بگەڕە... (ب کوردی، English، یان عربي)"
              className="w-full pl-4 pr-11 py-2.5 rounded-xl border border-slate-200 focus:border-[#0A4A7A] focus:ring-2 focus:ring-[#0A4A7A]/10 text-sm outline-none transition-all"
            />
            {search && (
              <button 
                onClick={() => setSearch("")}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                پاککەرەوە
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-700 outline-none cursor-pointer focus:border-[#0A4A7A]"
            >
              <option value="all">هەموو پۆلەکان ({dictionaryTerms.length})</option>
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Kurdish Alphabet Scroller */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 custom-scrollbar text-xs">
          <span className="text-slate-400 font-semibold px-1 shrink-0">پیت:</span>
          {ALPHABET_KU.map((letter) => {
            const isActive = activeLetter === letter;
            return (
              <button
                key={letter}
                onClick={() => setActiveLetter(letter)}
                className={`min-w-8 h-8 px-2 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                  isActive 
                    ? "bg-[#0A4A7A] text-white shadow-sm" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          ئەنجامێن فەرهەنگێ: <strong className="text-slate-800">{filteredTerms.length}</strong> زاراوە
        </span>
        {activeLetter !== "هەموو" && (
          <span className="text-[#0A4A7A] font-semibold">پیتێ هەڵبژێردراو: {activeLetter}</span>
        )}
      </div>

      {/* Grid of Term Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.map((term) => (
          <div 
            key={term.id}
            className="group bg-white rounded-2xl p-5 shadow-xs border border-slate-200/90 hover:border-[#0A4A7A]/40 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Header tags */}
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-[#0A4A7A] border border-blue-100">
                  {term.category}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => copyTerm(term)}
                    title="کۆپیکردنا تێگەهی"
                    className="p-1.5 text-slate-400 hover:text-[#0A4A7A] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    {copiedId === term.id ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Term Title Badini */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0A4A7A] transition-colors">
                  {term.term_ku}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1 text-xs">
                  <span className="font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md font-mono">
                    EN: {term.term_en}
                  </span>
                  <span className="text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md">
                    AR: {term.term_ar}
                  </span>
                </div>
              </div>

              {/* 2-line Definition in Badini */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                <strong className="text-[#0A4A7A]">پێناسە: </strong>
                {term.def_ku}
              </p>

              {/* Local Example */}
              <div className="text-xs text-amber-900 bg-amber-50/60 p-3 rounded-xl border border-amber-200/50">
                <span className="font-bold text-amber-800">نموونەیا جڤاکی: </span>
                {term.example_ku}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>پیت: {term.letter_ku}</span>
              <span className="text-[#0A4A7A] font-semibold group-hover:underline cursor-pointer" onClick={() => copyTerm(term)}>
                {copiedId === term.id ? "کۆپی بوو!" : "کۆپیکردنا زانیارییان"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200 p-8 space-y-3">
          <BookOpen className="mx-auto text-slate-300" size={40} />
          <h4 className="font-bold text-slate-700 text-base">هیچ زاراوەیەک نەهاتە دیتن</h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            تکایە پیتەکا دی هەڵبژێرە یان وشەیەکا دی بنڤیسە د فەرهەنگێ دا.
          </p>
          <button
            onClick={() => { setSearch(""); setActiveLetter("هەموو"); setSelectedCategory("all"); }}
            className="px-4 py-2 bg-[#0A4A7A] text-white text-xs font-bold rounded-xl cursor-pointer hover:bg-[#083659]"
          >
            نیشاندانا هەموو زاراوەیان
          </button>
        </div>
      )}
    </div>
  );
}
