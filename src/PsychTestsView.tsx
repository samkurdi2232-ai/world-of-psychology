import React, { useState, useEffect } from 'react';
import { 
  ClipboardCheck, RotateCcw, AlertTriangle, ArrowRight, ArrowLeft, 
  CheckCircle2, Sparkles, Award, ShieldAlert, Heart, Activity,
  Brain, FileText, ChevronRight, Share2, HelpCircle, BookOpen,
  Info, ExternalLink, Lightbulb
} from 'lucide-react';
import { psychTests, PsychTest } from './data/psychTestsData';
import { testExplanationTopics, TestExplanationTopic } from './data/testExplanationTopicsData';

export default function PsychTestsView() {
  const [selectedTest, setSelectedTest] = useState<PsychTest | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [testResult, setTestResult] = useState<any>(null);
  const [selectedExplanation, setSelectedExplanation] = useState<TestExplanationTopic | null>(null);
  const [activeTab, setActiveTab] = useState<'tests' | 'explanations'>('tests');

  const [savedHistory, setSavedHistory] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem('behra_derune_test_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const startTest = (test: PsychTest) => {
    setSelectedTest(test);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTestResult(null);
  };

  const handleSelectOption = (questionId: number, value: any) => {
    const updated = { ...answers, [questionId]: value };
    setAnswers(updated);

    if (selectedTest && currentQuestionIndex < selectedTest.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (selectedTest) {
      // Finished all questions
      const result = selectedTest.evaluate(updated);
      setTestResult(result);

      // Save to localStorage
      try {
        const record = {
          testId: selectedTest.id,
          testTitle: selectedTest.title_ku,
          date: new Date().toLocaleDateString('ku-IQ') || new Date().toISOString().split('T')[0],
          timestamp: Date.now(),
          scoreTitle: result.scoreTitle,
          scoreValue: result.scoreValue
        };
        const newHist = [record, ...savedHistory.slice(0, 9)];
        setSavedHistory(newHist);
        localStorage.setItem('behra_derune_test_history', JSON.stringify(newHist));
      } catch (err) {
        console.error("Failed to save test result", err);
      }
    }
  };

  const resetCurrentTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTestResult(null);
  };

  const exitTest = () => {
    setSelectedTest(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTestResult(null);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner - Therapeutic Sage & Navy */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#102A43] via-[#1c3d5a] to-[#243B53] p-6 sm:p-8 text-white shadow-xl border border-white/10">
        <div className="relative z-10 space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6D9479]/20 border border-[#6D9479]/35 text-[#A3C7AD] text-xs font-bold">
            <ClipboardCheck size={14} />
            <span>بەشێ 5: تاقیکرنێن دەروونی و شیکاری</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            تاقیکرنێن دەروونی و 10 بابەتێن فێرکاریێ
          </h2>
          <p className="text-[#D9E2EC] text-xs sm:text-sm leading-relaxed">
            6 تاقیکرنێن چالاک و باوەڕپێکراو یێن زانستی (MBTI، Beck، GAD-7، سترێس، هۆشا سۆزداری) دگەل 10 بابەتێن هوور یێن رۆهنکرنا چەوانیا کارکرنا پێوەرێن جیهانی.
          </p>

          {/* Tab buttons switcher */}
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setActiveTab('tests')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'tests'
                  ? "bg-[#6D9479] text-white shadow-md"
                  : "bg-white/10 text-[#D9E2EC] hover:bg-white/20"
              }`}
            >
              📝 6 تاقیکرنێن چالاک
            </button>
            <button
              onClick={() => setActiveTab('explanations')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'explanations'
                  ? "bg-[#6D9479] text-white shadow-md"
                  : "bg-white/10 text-[#D9E2EC] hover:bg-white/20"
              }`}
            >
              🔬 10 بابەتێن رۆهنکرنا تاقیکرنان
            </button>
          </div>
        </div>
      </div>

      {!selectedTest ? (
        <div className="space-y-6">
          {/* TAB 1: 6 Interactive Tests */}
          {activeTab === 'tests' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#102A43] flex items-center gap-2">
                  <Sparkles size={16} className="text-[#6D9479]" />
                  <span>6 تاقیکرنێن دەروونی یێن دەستبەجێ:</span>
                </h3>
                <span className="text-xs text-[#829AB1]">ئەنجامێ دەستبەجێ + پاراستن د ئامێرێ دا</span>
              </div>

              {/* Test Selection Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {psychTests.map((test) => (
                  <div 
                    key={test.id}
                    className="bg-white rounded-3xl p-6 shadow-xs border border-[#EADFCF]/80 hover:border-[#6D9479] hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl">{test.icon}</span>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${test.badge_color}`}>
                          {test.category}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-[#102A43] group-hover:text-[#6D9479] transition-colors">
                          {test.title_ku}
                        </h4>
                        <p className="text-xs text-[#829AB1] mt-0.5 font-medium">{test.title_en}</p>
                        <p className="text-xs text-[#486581] mt-2.5 leading-relaxed bg-[#FAF8F5] p-3 rounded-2xl border border-[#F5EFE6]">
                          {test.description_ku}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-[#829AB1] pt-1">
                        <span>⏱️ {test.time_est}</span>
                        <span>•</span>
                        <span>📝 {test.questions_count} پرسیار</span>
                      </div>
                    </div>

                    <button
                      onClick={() => startTest(test)}
                      className="mt-6 w-full py-3 rounded-2xl bg-[#102A43] hover:bg-[#1c3d5a] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm group-hover:shadow-md"
                    >
                      <span>دەستپێکرنا تاقیکرنێ</span>
                      <ArrowLeft size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Previous Results History if any */}
              {savedHistory.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-[#EADFCF]/80 space-y-4">
                  <h4 className="text-sm font-bold text-[#102A43] flex items-center gap-2">
                    <FileText size={16} className="text-[#6D9479]" />
                    <span>مێژوویا ئەنجامێن تە یێن پاشەکەوتکری (د ڤێ ئامێرێ دا):</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {savedHistory.map((hist, idx) => (
                      <div key={idx} className="bg-[#FAF8F5] rounded-2xl p-3.5 border border-[#EADFCF] text-xs space-y-1">
                        <div className="flex justify-between font-bold text-[#102A43]">
                          <span>{hist.testTitle}</span>
                          <span className="text-[#829AB1] font-normal">{hist.date}</span>
                        </div>
                        <div className="text-[#6D9479] font-semibold text-xs mt-1">
                          {hist.scoreTitle}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: 10 Topics Explaining Psychological Tests */}
          {activeTab === 'explanations' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#102A43] flex items-center gap-2">
                  <Lightbulb size={17} className="text-[#6D9479]" />
                  <span>10 بابەتێن گرنگ دەربارەی تاقیکرن و پێوەرێن دەروونی:</span>
                </h3>
                <span className="text-xs text-[#829AB1]">زانستی • شیکاری • بنەمایێن باوەڕپێکراو</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testExplanationTopics.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-5 border border-[#EADFCF]/80 hover:border-[#6D9479] hover:shadow-md transition-all flex flex-col justify-between group space-y-3"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="w-10 h-10 rounded-2xl bg-[#E6EDE8] text-[#55785F] flex items-center justify-center text-xl shrink-0">
                          {item.icon}
                        </span>
                        <span className="text-[11px] font-bold bg-[#FAF8F5] text-[#486581] border border-[#EADFCF] px-2.5 py-0.5 rounded-full">
                          {item.category}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#102A43] text-sm sm:text-base group-hover:text-[#6D9479] transition-colors">
                          {item.title_ku}
                        </h4>
                        <p className="text-xs text-[#829AB1] font-medium mt-0.5">{item.title_en}</p>
                      </div>

                      <p className="text-xs text-[#486581] leading-relaxed bg-[#FAF8F5] p-3 rounded-2xl border border-[#F5EFE6]">
                        {item.summary_ku}
                      </p>

                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-[#829AB1] uppercase">چەوا شڕۆڤە دبیت:</span>
                        {item.interpretation_ku.slice(0, 2).map((inter, iIdx) => (
                          <div key={iIdx} className="text-[11px] text-[#334E68] flex items-start gap-1.5">
                            <span className="text-[#6D9479] font-bold">•</span>
                            <span className="line-clamp-1">{inter}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedExplanation(item)}
                      className="w-full mt-2 py-2.5 rounded-xl bg-[#F5EFE6] hover:bg-[#EADFCF] text-[#102A43] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>بخوێنە و تێبگەهە</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Global Strict Disclaimer */}
          <div className="bg-rose-50 border-2 border-rose-300 rounded-3xl p-5 sm:p-6 text-rose-950 flex flex-col sm:flex-row items-start gap-4 shadow-xs">
            <AlertTriangle className="text-rose-600 shrink-0 mt-0.5" size={28} />
            <div className="space-y-1.5 text-xs sm:text-sm">
              <h4 className="font-bold text-rose-900 text-sm sm:text-base">
                ⚠️ ئاگەهدارییا کلینیکی یا گرنگ (IMPORTANT DISCLAIMER):
              </h4>
              <p className="leading-relaxed">
                ئەڤ تاقیکرنە تەنها بۆ پێزانینان و خۆئاگاداریێ نە و ل شوینا نۆژدار و شارەزایێ دەروونی ناگرن. ئەگەر نیشانێن گران هەنە یان د قەیرانەکا دەروونی دای، تکایە دەستبەجێ سەردانا نۆژدارەکێ تایبەتمەند یان نەخۆشخانێ بکە.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Active Test Taking View */
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Top Bar with Exit */}
          <div className="flex items-center justify-between">
            <button
              onClick={exitTest}
              className="text-xs font-bold text-[#486581] hover:text-[#102A43] flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-[#F5EFE6] cursor-pointer"
            >
              <ArrowRight size={14} />
              <span>زڤڕین بۆ لیستا تاقیکرنان</span>
            </button>
            <span className="text-xs font-bold text-[#6D9479] bg-[#E6EDE8] px-3 py-1 rounded-full border border-[#CFDDD3]">
              {selectedTest.title_ku}
            </span>
          </div>

          {!testResult ? (
            /* Question Card with Progress Bar */
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#EADFCF] space-y-6">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-[#486581]">
                  <span>پرسیارا {currentQuestionIndex + 1} ژ {selectedTest.questions.length}</span>
                  <span>{Math.round(((currentQuestionIndex + 1) / selectedTest.questions.length) * 100)}%</span>
                </div>
                <div className="w-full h-2.5 bg-[#F5EFE6] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#6D9479] transition-all duration-300 rounded-full"
                    style={{ width: `${((currentQuestionIndex + 1) / selectedTest.questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-2 pt-2 text-right" dir="rtl">
                <span className="text-xs font-bold text-[#829AB1] uppercase tracking-wider">
                  پرسیار:
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#102A43] leading-relaxed">
                  {selectedTest.questions[currentQuestionIndex].text_ku}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-2.5 pt-2" dir="rtl">
                {selectedTest.questions[currentQuestionIndex].options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(selectedTest.questions[currentQuestionIndex].id, opt.value)}
                    className="w-full text-right p-4 rounded-2xl border border-[#EADFCF] hover:border-[#6D9479] hover:bg-[#E6EDE8]/40 transition-all font-medium text-xs sm:text-sm text-[#243B53] flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt.label_ku}</span>
                    <span className="w-6 h-6 rounded-full border border-[#EADFCF] group-hover:border-[#6D9479] group-hover:bg-[#6D9479] group-hover:text-white flex items-center justify-center text-xs transition-colors shrink-0 mr-2">
                      ✓
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#EADFCF] space-y-6 text-right" dir="rtl">
              <div className="text-center space-y-3 pb-4 border-b border-[#F5EFE6]">
                <div className="w-16 h-16 rounded-3xl bg-[#E6EDE8] text-[#55785F] flex items-center justify-center text-3xl mx-auto shadow-inner">
                  🏆
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#102A43]">
                  ئەنجامێ تاقیکرنا تە:
                </h3>
                <div className="inline-block px-4 py-2 rounded-2xl bg-[#102A43] text-white text-base sm:text-lg font-bold shadow-sm">
                  {testResult.scoreTitle}
                </div>
                {testResult.scoreValue !== undefined && (
                  <p className="text-xs text-[#829AB1] font-mono">کۆی نمرە: {testResult.scoreValue}</p>
                )}
              </div>

              {/* Interpretation */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#829AB1] uppercase tracking-wider">شڕۆڤەکرنا زانستی:</h4>
                <p className="text-xs sm:text-sm text-[#334E68] leading-relaxed bg-[#FAF8F5] p-4 rounded-2xl border border-[#EADFCF]">
                  {testResult.explanation_ku}
                </p>
              </div>

              {/* Recommendations */}
              {testResult.recommendations_ku && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-[#829AB1] uppercase tracking-wider">رێنمایێن کردارەکی:</h4>
                  <div className="space-y-2">
                    {testResult.recommendations_ku.map((rec: string, rIdx: number) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-[#243B53] bg-[#E6EDE8]/40 p-3 rounded-xl border border-[#CFDDD3]">
                        <CheckCircle2 size={16} className="text-[#6D9479] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={resetCurrentTest}
                  className="flex-1 py-3 rounded-2xl bg-[#F5EFE6] hover:bg-[#EADFCF] text-[#102A43] font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <RotateCcw size={15} />
                  <span>دووبارە ئەنجامدان</span>
                </button>
                <button
                  onClick={exitTest}
                  className="flex-1 py-3 rounded-2xl bg-[#102A43] hover:bg-[#1c3d5a] text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
                >
                  <span>زڤڕین بۆ لیستا تاقیکرنان</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Explanation Modal */}
      {selectedExplanation && (
        <div 
          className="fixed inset-0 bg-[#102A43]/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedExplanation(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-[#EADFCF] space-y-5 max-h-[85vh] overflow-y-auto custom-scrollbar text-right"
            dir="rtl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-[#6D9479] bg-[#E6EDE8] px-3 py-1 rounded-full border border-[#CFDDD3]">
                  {selectedExplanation.category}
                </span>
                <h3 className="text-xl font-black text-[#102A43] mt-2">
                  {selectedExplanation.title_ku}
                </h3>
                <p className="text-xs text-[#829AB1] font-medium" dir="ltr">{selectedExplanation.title_en}</p>
              </div>
              <button
                onClick={() => setSelectedExplanation(null)}
                className="p-1.5 rounded-xl text-[#829AB1] hover:text-[#102A43] hover:bg-[#F5EFE6] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#829AB1] uppercase tracking-wider">پوختە:</h4>
              <p className="text-xs sm:text-sm text-[#334E68] leading-relaxed bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#EADFCF]">
                {selectedExplanation.summary_ku}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#829AB1] uppercase tracking-wider">بنەمایێ زانستی:</h4>
              <p className="text-xs text-[#486581] leading-relaxed">
                {selectedExplanation.scientific_basis_ku}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#829AB1] uppercase tracking-wider">شڕۆڤەکرنا نمرە و پلەیان:</h4>
              <div className="space-y-2">
                {selectedExplanation.interpretation_ku.map((inter, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#243B53] bg-[#FAF8F5] p-3 rounded-xl border border-[#EADFCF]/60">
                    <span className="w-5 h-5 rounded-full bg-[#6D9479] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed font-medium">{inter}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
              <strong>سەرنج:</strong> {selectedExplanation.limitations_ku}
            </div>

            <button
              onClick={() => setSelectedExplanation(null)}
              className="w-full py-2.5 rounded-xl bg-[#102A43] text-white font-bold text-xs hover:bg-[#1c3d5a] cursor-pointer"
            >
              داخستن
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
