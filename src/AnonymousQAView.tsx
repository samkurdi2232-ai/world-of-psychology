import React, { useState } from 'react';
import { 
  Lock, Send, MessageSquare, ThumbsUp, ShieldCheck, AlertCircle, 
  Sparkles, CheckCircle2, UserCheck, HelpCircle, HeartHandshake, EyeOff
} from 'lucide-react';
import { sampleQA, AnonymousQuestion } from './data/anonymousQAData';

export default function AnonymousQAView() {
  const [qaList, setQaList] = useState<AnonymousQuestion[]>(() => {
    try {
      const saved = localStorage.getItem('behra_derune_anonymous_qa');
      return saved ? JSON.parse(saved) : sampleQA;
    } catch {
      return sampleQA;
    }
  });

  const [questionText, setQuestionText] = useState("");
  const [detailsText, setDetailsText] = useState("");
  const [category, setCategory] = useState("تەندروستیا دەروونی و نەخۆشی");
  const [alias, setAlias] = useState("");
  const [city, setCity] = useState("دهۆک");
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [filterCategory, setFilterCategory] = useState("all");
  const [upvotedIds, setUpvotedIds] = useState<Record<string, boolean>>({});

  const categories = [
    "تەندروستیا دەروونی و نەخۆشی",
    "دەروونناسیا زارۆک و پێگەهشتییان",
    "گەشەپێدان و هێزا کەسایەتیێ",
    "دەروونناسیا خێزان و پەیوەندییان",
    "گەنج و زانکۆ و داهاتی"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim()) return;

    const newQuestion: AnonymousQuestion = {
      id: `qa-${Date.now()}`,
      category: category,
      question_ku: questionText.trim(),
      details_ku: detailsText.trim() || "بەشداربوو بەبێ هووردەکاریێن زێدە پرسیارا خۆ ئاراستە کریە.",
      authorAlias: alias.trim() || "بەشداربوویێ نهێنی",
      city_ku: city,
      date_ku: "نوکە (چاوەڕوانی پشتڕاستکرنێ)",
      upvotes: 1,
      expertAnswer_ku: {
        doctorName: "لژنەیا تایبەتمەندێن بەهرا دەروونێ",
        title_ku: "راوێژکارێ دەروونی (دەمکی)",
        content_ku: "سوپاس بۆ پرسیارا تە یا گرنگ. پرسیارا تە هاتە تۆمارکرن و گەهشتە تیمی پزیشک و تایبەتمەندێن مە. بەرسڤا زانستی د ماوەیێ 24 دەمژمێران دا دێ ل ڤێرە هێتە بەڵاوکرن.",
        practicalSteps_ku: [
          "پرسیارا تە پاراستیە و چ ناڤ دیار نابیت",
          "دشێی سەردانا بەشێ فەرهەنگێ و بابەتان بکەی بۆ زانیاریێن پێشوەخت"
        ],
        disclaimer_ku: "ئەڤ بەرسڤە بۆ پێزانینانە و ل شوینا چارەسەریێ ناگریت."
      }
    };

    const updated = [newQuestion, ...qaList];
    setQaList(updated);
    try {
      localStorage.setItem('behra_derune_anonymous_qa', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }

    setQuestionText("");
    setDetailsText("");
    setAlias("");
    setSubmittedSuccess(true);
    setTimeout(() => setSubmittedSuccess(false), 5000);
  };

  const toggleUpvote = (id: string) => {
    const isUpvoted = upvotedIds[id];
    setUpvotedIds(prev => ({ ...prev, [id]: !isUpvoted }));
    setQaList(prev => prev.map(q => {
      if (q.id === id) {
        return { ...q, upvotes: q.upvotes + (isUpvoted ? -1 : 1) };
      }
      return q;
    }));
  };

  const filtered = qaList.filter(q => filterCategory === "all" || q.category === filterCategory);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0A4A7A] via-[#0b548b] to-[#1467a4] p-6 sm:p-8 text-white shadow-xl">
        <div className="relative z-10 space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-200 text-xs font-bold">
            <Lock size={14} />
            <span>بەشێ 6: پرسیار و بەرسڤێن 100% نهێنی</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            پرسیارێن نهێنی و بەرسڤا نۆژداران (Anonymous Q&A)
          </h2>
          <p className="text-blue-100/90 text-sm leading-relaxed">
            پرسیارا خۆ دەربارەی هەر کێشەیەکا دەروونی، خێزانی، یان سۆزداری بنڤیسە بێی ناڤێ خۆ. کەس ناڤێ تە نابینیت و پسپۆڕێن مە بەرسڤا زانستی ددەن.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-cyan-200 font-semibold">
            <span className="bg-white/10 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
              <EyeOff size={13} />
              <span>🔒 100% نهێنی - ناڤێ تە دیار نابیت</span>
            </span>
            <span>•</span>
            <span>بەرسڤ ب رێکا پسپۆڕان</span>
            <span>•</span>
            <span>شێوازی کۆمەڵگەیی و پشتەڤانی</span>
          </div>
        </div>
      </div>

      {/* Ask Question Form Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center">
              <Lock size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800">پرسیارا خۆ بێی ناڤ بنڤیسە</h3>
              <p className="text-xs text-slate-500">ناڤێ تە، ژمارەیا تەلەفۆنێ، و ناسنامەیا تە بە هیچ شێوەیەک تۆمار نابیت</p>
            </div>
          </div>
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
            <ShieldCheck size={13} />
            <span>پارێزراو</span>
          </span>
        </div>

        {submittedSuccess && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-2xl p-4 text-xs sm:text-sm flex items-center gap-3">
            <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
            <div>
              <span className="font-bold">پرسیارا تە ب سەرکەفتوویی هاتە تۆمارکرن ب شێوەیەکێ نهێنی!</span>
              <p className="text-emerald-700 text-xs mt-0.5">سوپاس بۆ متمانەیا تە. پرسیارا تە ل ژێرێ هاتە زێدەکرن و راوێژکار بەرسڤێ ددەت.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              ناڤونیشانێ کورت یێ پرسیارێ: *
            </label>
            <input
              type="text"
              required
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="بۆ نموونە: من شەرم دکەم بچمە دەف نۆژداری، یان ئاریشە دگەل هەڤژینێ خۆ..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0A4A7A] focus:ring-2 focus:ring-[#0A4A7A]/10 text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              هووردەکاریێن پرسیارێ (هەست و نیشانێن تە):
            </label>
            <textarea
              rows={3}
              value={detailsText}
              onChange={(e) => setDetailsText(e.target.value)}
              placeholder="تۆ چەند دەمە تووشی ڤێ هەستێ بووی؟ نیشان چنە؟ چی هەوڵێ تە داوە؟ (پێویست ناکات ناڤێ راستی بنووسی)..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0A4A7A] focus:ring-2 focus:ring-[#0A4A7A]/10 text-sm outline-none resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">پۆلێنکرن:</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-700 outline-none focus:border-[#0A4A7A]"
              >
                {categories.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">ناڤێ خواستەک (ئارەزوومەندانە):</label>
              <input
                type="text"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
                placeholder="وەک: گەنجەکێ بێهیڤی، دایکەک..."
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs outline-none focus:border-[#0A4A7A]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">باژێر:</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-700 outline-none focus:border-[#0A4A7A]"
              >
                <option value="دهۆک">دهۆک</option>
                <option value="هەولێر">هەولێر</option>
                <option value="سلێمانی">سلێمانی</option>
                <option value="زاخۆ">زاخۆ</option>
                <option value="ئامێدی">ئامێدی</option>
                <option value="ئاکرێ">ئاکرێ</option>
                <option value="کەرکووک">کەرکووک</option>
                <option value="دەرڤەی وەڵات">دەرڤەی وەڵات</option>
              </select>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[11px] text-slate-400">
              🔒 زانیارییەکانت راستەوخۆ دەپارێزرێن و پەیوەست نین بە ناسنامەی تۆ
            </span>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0A4A7A] hover:bg-[#073659] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all"
            >
              <Send size={15} />
              <span>ناردنا پرسیارێ ب شێوەیەکێ نهێنی</span>
            </button>
          </div>
        </form>
      </div>

      {/* Filter and List of Questions */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
            <MessageSquare size={18} className="text-[#0A4A7A]" />
            <span>پرسیار و بەرسڤێن ئەندامێن جڤاکێ ({filtered.length}):</span>
          </h3>

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setFilterCategory("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterCategory === "all" ? "bg-[#0A4A7A] text-white" : "bg-white text-slate-600 border border-slate-200"
              }`}
            >
              هەموو
            </button>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilterCategory(c)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  filterCategory === c ? "bg-[#0A4A7A] text-white" : "bg-white text-slate-600 border border-slate-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Q&A Cards */}
        <div className="space-y-4">
          {filtered.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200/90 hover:border-slate-300 transition-all space-y-4"
            >
              {/* Question Header */}
              <div className="flex items-center justify-between gap-2 text-xs text-slate-400 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span className="font-bold text-slate-700">{item.authorAlias}</span>
                  <span>•</span>
                  <span>{item.city_ku}</span>
                  <span>•</span>
                  <span>{item.date_ku}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold text-[11px]">
                  {item.category}
                </span>
              </div>

              {/* Question Body */}
              <div className="space-y-1.5">
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {item.question_ku}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.details_ku}
                </p>
              </div>

              {/* Expert Answer Box */}
              <div className="bg-gradient-to-br from-blue-50/70 to-indigo-50/50 rounded-2xl p-4 sm:p-5 border border-blue-100/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0A4A7A] text-white flex items-center justify-center text-xs font-bold">
                      د.
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-[#0A4A7A]">
                        بەرسڤا: {item.expertAnswer_ku.doctorName}
                      </h5>
                      <span className="text-[11px] text-slate-500">{item.expertAnswer_ku.title_ku}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    بەرسڤا پسپۆڕی
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {item.expertAnswer_ku.content_ku}
                </p>

                {item.expertAnswer_ku.practicalSteps_ku && item.expertAnswer_ku.practicalSteps_ku.length > 0 && (
                  <div className="pt-2 space-y-1.5 border-t border-blue-100/60">
                    <span className="text-xs font-bold text-slate-800">هەنگاوێن پێشنیارکری:</span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {item.expertAnswer_ku.practicalSteps_ku.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="text-[#0A4A7A] font-bold">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Footer with upvote and disclaimer */}
              <div className="flex items-center justify-between pt-1 text-xs">
                <button
                  onClick={() => toggleUpvote(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                    upvotedIds[item.id] 
                      ? "bg-[#0A4A7A] text-white border-[#0A4A7A]" 
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <ThumbsUp size={13} />
                  <span>پشتەڤانی ({item.upvotes})</span>
                </button>

                <span className="text-[11px] text-slate-400">
                  🔒 مێژوویا پاراستی د سیستەمێ خۆجێیی دا
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
