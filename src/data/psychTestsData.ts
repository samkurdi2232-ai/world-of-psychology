// 6 Interactive Psychological Tests with scoring, interpretations, and strict clinical disclaimers
export interface TestQuestion {
  id: number;
  text_ku: string;
  options: {
    label_ku: string;
    value: number | string;
  }[];
}

export interface PsychTest {
  id: string;
  title_ku: string;
  title_en: string;
  subtitle_ku: string;
  icon: string;
  badge_color: string;
  category: string;
  time_est: string;
  questions_count: number;
  description_ku: string;
  questions: TestQuestion[];
  evaluate: (answers: Record<number, any>) => {
    scoreTitle: string;
    scoreLevel: 'low' | 'moderate' | 'high' | 'type';
    scoreValue: string | number;
    explanation_ku: string;
    advice_ku: string[];
    urgency: 'green' | 'amber' | 'red';
  };
}

export const psychTests: PsychTest[] = [
  // 1. پیڤەرا سترێسێ (PSS-10 Adapted)
  {
    id: "test-stress",
    title_ku: "پیڤەرا فشارا دەروونی (سترێس)",
    title_en: "Perceived Stress Scale (PSS)",
    subtitle_ku: "تاقیکرنا ئاستێ فشار و بێزارییا دەروونی د مەها بۆری دا",
    icon: "⚡",
    badge_color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    category: "فشار و مێشک",
    time_est: "3 دەقە",
    questions_count: 8,
    description_ku: "ئەڤ تاقیکرنە پێوانە دکەت کا تە تا چ راددە هەست ب وێ یەکێ کریە کو ژیانا تە ژ بن کۆنتڕۆڵا تە دەرکەفتییە د مەها بۆری دا.",
    questions: [
      {
        id: 1,
        text_ku: "د مەها بۆری دا، چەند جاران هەست کریە کو روودانێن نەچاڤەڕێکری تووشی دڵەڕاوکێ کری؟",
        options: [
          { label_ku: "چ جاران (0)", value: 0 },
          { label_ku: "کێم جاران (1)", value: 1 },
          { label_ku: "هندەک جاران (2)", value: 2 },
          { label_ku: "گەلەک جاران (3)", value: 3 },
          { label_ku: "بەردەوام (4)", value: 4 }
        ]
      },
      {
        id: 2,
        text_ku: "د مەها بۆری دا، چەند جاران هەست کریە کو نەشیایە تشتێن گرنگ د ژیانا خۆ دا کۆنتڕۆڵ بکەی؟",
        options: [
          { label_ku: "چ جاران (0)", value: 0 },
          { label_ku: "کێم جاران (1)", value: 1 },
          { label_ku: "هندەک جاران (2)", value: 2 },
          { label_ku: "گەلەک جاران (3)", value: 3 },
          { label_ku: "بەردەوام (4)", value: 4 }
        ]
      },
      {
        id: 3,
        text_ku: "چەند جاران هەست ب ماندووبوونا دەروونی و دەمارگیریێ کریە؟",
        options: [
          { label_ku: "چ جاران (0)", value: 0 },
          { label_ku: "کێم جاران (1)", value: 1 },
          { label_ku: "هندەک جاران (2)", value: 2 },
          { label_ku: "گەلەک جاران (3)", value: 3 },
          { label_ku: "بەردەوام (4)", value: 4 }
        ]
      },
      {
        id: 4,
        text_ku: "چەند جاران باوەری ب شیانێن خۆ هەبوویە کو سەرەدەریێ دگەل ئاریشەیێن خۆ بکەی؟",
        options: [
          { label_ku: "بەردەوام (0)", value: 0 },
          { label_ku: "گەلەک جاران (1)", value: 1 },
          { label_ku: "هندەک جاران (2)", value: 2 },
          { label_ku: "کێم جاران (3)", value: 3 },
          { label_ku: "چ جاران (4)", value: 4 }
        ]
      },
      {
        id: 5,
        text_ku: "چەند جاران هەست کریە کو کار و ئەرک ل سەر سەرێ تە کۆم بووینە و نەشێی سەرەدەریێ دگەل بکەی؟",
        options: [
          { label_ku: "چ جاران (0)", value: 0 },
          { label_ku: "کێم جاران (1)", value: 1 },
          { label_ku: "هندەک جاران (2)", value: 2 },
          { label_ku: "گەلەک جاران (3)", value: 3 },
          { label_ku: "بەردەوام (4)", value: 4 }
        ]
      },
      {
        id: 6,
        text_ku: "چەند جاران نەشیایە کۆنتڕۆلا تورەبوون و هەلچوونا خۆ بکەی؟",
        options: [
          { label_ku: "چ جاران (0)", value: 0 },
          { label_ku: "کێم جاران (1)", value: 1 },
          { label_ku: "هندەک جاران (2)", value: 2 },
          { label_ku: "گەلەک جاران (3)", value: 3 },
          { label_ku: "بەردەوام (4)", value: 4 }
        ]
      },
      {
        id: 7,
        text_ku: "چەند جاران هەست ب وێ کریە کو ژیان ب دلی تە ب رێڤەدچیت؟",
        options: [
          { label_ku: "بەردەوام (0)", value: 0 },
          { label_ku: "گەلەک جاران (1)", value: 1 },
          { label_ku: "هندەک جاران (2)", value: 2 },
          { label_ku: "کێم جاران (3)", value: 3 },
          { label_ku: "چ جاران (4)", value: 4 }
        ]
      },
      {
        id: 8,
        text_ku: "چەند جاران هەست ب بێزارییا دەروونی کریە ژبەر کو کێشە ب ساناهی چارەسەر نەدبوون؟",
        options: [
          { label_ku: "چ جاران (0)", value: 0 },
          { label_ku: "کێم جاران (1)", value: 1 },
          { label_ku: "هندەک جاران (2)", value: 2 },
          { label_ku: "گەلەک جاران (3)", value: 3 },
          { label_ku: "بەردەوام (4)", value: 4 }
        ]
      }
    ],
    evaluate: (answers) => {
      const sum = Object.values(answers).reduce((acc: number, v: any) => acc + Number(v), 0);
      if (sum <= 10) {
        return {
          scoreTitle: "ئاستێ سترێسێ یێ نزم و ساخلەم (0 - 10)",
          scoreLevel: "low",
          scoreValue: `${sum} / 32`,
          explanation_ku: "تۆ ئاستەکێ باش یێ ئارامی و شیانا بەرەڤانیکرنێ ژ فشارێن رۆژانە نیشان ددەی. کۆنتڕۆلا تە ل سەر ژیانا تە یا باشە.",
          advice_ku: [
            "بەردەوام بە ل سەر خەوا رێکخستی و وەرزشێ",
            "کاتێ بهێنڤەدانێ بپارێزە ژ کارێن زێدە",
            "سوپاسگوزارییا رۆژانە (Gratitude) پەیڕەو بکە"
          ],
          urgency: "green"
        };
      } else if (sum <= 20) {
        return {
          scoreTitle: "ئاستێ سترێسێ یێ مامناوەند (11 - 20)",
          scoreLevel: "moderate",
          scoreValue: `${sum} / 32`,
          explanation_ku: "تۆ تووشی فشارەکا بەرچاو دبی کو دبیت ل سەر خەو و سەرنجا تە کارتێکرنێ بکەت، لێ هێشتا دەلیڤەیا گوهۆڕینێ یا هەی.",
          advice_ku: [
            "مەشقێن هەناسەدانا کوور (4-7-8) رۆژێ دوو جاران ئەنجام بدە",
            "سنوور بۆ کارێ گران و تۆڕێن جڤاکی دابنێ",
            "دگەل کەسەکێ نێزیک و باوەرپێکری باخڤە دەربارەی بارگرانیێن خۆ"
          ],
          urgency: "amber"
        };
      } else {
        return {
          scoreTitle: "ئاستێ سترێسێ یێ بلند و مەترسیدار (21 - 32)",
          scoreLevel: "high",
          scoreValue: `${sum} / 32`,
          explanation_ku: "تۆ د قۆناغەکا زۆرا فشارا دەروونی (Burnout / High Chronic Stress) دای. مێشک و لەشێ تە پێتڤی ب بهێنڤەدانەکا بلەز و هاریکارییا پسپۆرانەیە.",
          advice_ku: [
            "پشکنینەکێ دگەل پزیشک یان تایبەتمەندێ دەروونی بکە",
            "ئەو کارێن نە سەرەکی راگرە و ئەولەویەتێ بدە تەندروستیا خۆ",
            "خۆ ژ ڤەخوارنێن کافایین و دەرمانێن بێ پشکنین دوور بگرە"
          ],
          urgency: "red"
        };
      }
    }
  },

  // 2. پیڤەرا خەمۆکیێ (BDI Short / PHQ-9 Screener)
  {
    id: "test-depression",
    title_ku: "پیڤەرا خەمۆکیێ (Beck Depression Screener)",
    title_en: "Depression Severity Screener",
    subtitle_ku: "پشکنینا نیشانێن خەمۆکیێ و بێتاقەتیێ د دوو حەفتیێن بۆری دا",
    icon: "🌧️",
    badge_color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    category: "میزاج و هەست",
    time_est: "4 دەقە",
    questions_count: 7,
    description_ku: "ئەڤ پرسیارە پشت بەستنێ ل سەر پیڤەرا بەیک (BDI) و (PHQ) دکەن بۆ دەستنیشانکرنا ئاستێ نیشانێن خەمۆکیێ د دوو حەفتیێن بۆری دا.",
    questions: [
      {
        id: 1,
        text_ku: "کێمبوونا کەیف یان چێژ وەرگرتن د ئەنجامدانا کارێن رۆژانە دا؟",
        options: [
          { label_ku: "هیچ نەبوویە (0)", value: 0 },
          { label_ku: "چەندین رۆژان (1)", value: 1 },
          { label_ku: "پتر ژ نیڤا رۆژان (2)", value: 2 },
          { label_ku: "کەمپەر هەموو رۆژان (3)", value: 3 }
        ]
      },
      {
        id: 2,
        text_ku: "هەستکرن ب خەمگینیێ، بێهیڤیبوونێ، یان رووخانێ؟",
        options: [
          { label_ku: "هیچ نەبوویە (0)", value: 0 },
          { label_ku: "چەندین رۆژان (1)", value: 1 },
          { label_ku: "پتر ژ نیڤا رۆژان (2)", value: 2 },
          { label_ku: "کەمپەر هەموو رۆژان (3)", value: 3 }
        ]
      },
      {
        id: 3,
        text_ku: "ئاریشە د خەوتنێ دا (زەحمەتی د خەوچوونێ، زوو هشیاربوون، یان خەوتنا زێدە)؟",
        options: [
          { label_ku: "هیچ نەبوویە (0)", value: 0 },
          { label_ku: "چەندین رۆژان (1)", value: 1 },
          { label_ku: "پتر ژ نیڤا رۆژان (2)", value: 2 },
          { label_ku: "کەمپەر هەموو رۆژان (3)", value: 3 }
        ]
      },
      {
        id: 4,
        text_ku: "هەستکرن ب بێهێزی، زوو ماندووبوون، یان نەمامانا وزەیێ؟",
        options: [
          { label_ku: "هیچ نەبوویە (0)", value: 0 },
          { label_ku: "چەندین رۆژان (1)", value: 1 },
          { label_ku: "پتر ژ نیڤا رۆژان (2)", value: 2 },
          { label_ku: "کەمپەر هەموو رۆژان (3)", value: 3 }
        ]
      },
      {
        id: 5,
        text_ku: "لاوازبوونا ئیشتیهایێ یان ژی زێدەخوارنا نەئاسایی؟",
        options: [
          { label_ku: "هیچ نەبوویە (0)", value: 0 },
          { label_ku: "چەندین رۆژان (1)", value: 1 },
          { label_ku: "پتر ژ نیڤا رۆژان (2)", value: 2 },
          { label_ku: "کەمپەر هەموو رۆژان (3)", value: 3 }
        ]
      },
      {
        id: 6,
        text_ku: "هەستکرن ب تاوانبارییا زێدە یان بێبهاییێ و وێرانکرنا هەستی بەرامبەر خێزانێ؟",
        options: [
          { label_ku: "هیچ نەبوویە (0)", value: 0 },
          { label_ku: "چەندین رۆژان (1)", value: 1 },
          { label_ku: "پتر ژ نیڤا رۆژان (2)", value: 2 },
          { label_ku: "کەمپەر هەموو رۆژان (3)", value: 3 }
        ]
      },
      {
        id: 7,
        text_ku: "لاوازی د سەرنجدانێ دا دەمێ خواندن یان تەماشەکرنا تەلەفزیۆنێ؟",
        options: [
          { label_ku: "هیچ نەبوویە (0)", value: 0 },
          { label_ku: "چەندین رۆژان (1)", value: 1 },
          { label_ku: "پتر ژ نیڤا رۆژان (2)", value: 2 },
          { label_ku: "کەمپەر هەموو رۆژان (3)", value: 3 }
        ]
      }
    ],
    evaluate: (answers) => {
      const sum = Object.values(answers).reduce((acc: number, v: any) => acc + Number(v), 0);
      if (sum <= 4) {
        return {
          scoreTitle: "نیشانێن خەمۆکیێ نینن یان زۆر سڤکن (0 - 4)",
          scoreLevel: "low",
          scoreValue: `${sum} / 21`,
          explanation_ku: "بارودۆخێ تە یێ دەروونی د چارچووڤەیێ ئاسایی دایە و نیشانێن دیار یێن خەمۆکیێ بەرچاو نینن.",
          advice_ku: [
            "پاراستنا پەیوەندیێن جڤاکی یێن بهێز",
            "ئەنجامدانا حەز و ئارەزوویێن رۆژانە",
            "بەردەوامبوون ل سەر وەرزش و رۆژانە دەرکەفتن بۆ بەر هەتاڤێ"
          ],
          urgency: "green"
        };
      } else if (sum <= 10) {
        return {
          scoreTitle: "خەمۆکییا سڤک بۆ مامناوەند (5 - 10)",
          scoreLevel: "moderate",
          scoreValue: `${sum} / 21`,
          explanation_ku: "تۆ هندەک نیشانێن خەمگینی و بێتاقەتیێ نیشان ددەی. پێشنیار دهێتە کرن پێشگیریێ ل گرانبوونا بارێ خۆ بکەی.",
          advice_ku: [
            "خۆ ژ بتنێمانێ دوور بگرە و دگەل هەڤالێن دڵسۆز دانیشە",
            "رووتینەکێ رۆژانە بۆ خەوێ و خوارنێ جێگیر بکە",
            "ئەگەر بۆ پتر ژ 2 حەفتیان بەردەوام بوو، شیرەتێ ژ پسپۆری وەرگرە"
          ],
          urgency: "amber"
        };
      } else {
        return {
          scoreTitle: "خەمۆکییا گران (11 - 21)",
          scoreLevel: "high",
          scoreValue: `${sum} / 21`,
          explanation_ku: "ئەڤ ئەنجامە ئاماژەیە بۆ هەبوونا نیشانێن گران یێن خەمۆکیێ کو پێویستی ب چاودێری و راوێژا پزیشکی یا فەرمی هەیە.",
          advice_ku: [
            "تکایە سەردانا نۆژدارێ دەروونی (Psychiatrist) یان راوێژکارێ تایبەتمەند بکە",
            "بزانە کو چارەسەری یا هەی و پێویست ناکەت ب بتنێ بەرگە بگری",
            "ئەگەر هزرێن زیان گەیاندن ب خۆ هەنە، دەستبەجێ پەیوەندی ب خێزان یان نۆژداری بکە"
          ],
          urgency: "red"
        };
      }
    }
  },

  // 3. پیڤەرا دڵەڕاوکێ (GAD-7 Anxiety Screener)
  {
    id: "test-anxiety",
    title_ku: "پیڤەرا دڵەڕاوکێ و نیگەرانیێ (GAD-7)",
    title_en: "Generalized Anxiety Screener",
    subtitle_ku: "پشکنینا ترسا زێدە، شڵەژان و نائارامییا بەردەوام",
    icon: "🌪️",
    badge_color: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    category: "دڵەڕاوکێ و ترس",
    time_est: "3 دەقە",
    questions_count: 6,
    description_ku: "ئەڤ پرسیارانە پێوانە دکەن کا دڵەڕاوکێ و ترسا بەردەوام تا چ ڕاددە کارتێکرن ل سەر ژیانا تە یا رۆژانە کریە.",
    questions: [
      {
        id: 1,
        text_ku: "هەستکرن ب دەمارگیری، دڵەڕاوکێ، یان لەرزینا دەروونی؟",
        options: [
          { label_ku: "هیچ نەبوویە (0)", value: 0 },
          { label_ku: "چەندین رۆژان (1)", value: 1 },
          { label_ku: "پتر ژ نیڤا رۆژان (2)", value: 2 },
          { label_ku: "کەمپەر هەموو رۆژان (3)", value: 3 }
        ]
      },
      {
        id: 2,
        text_ku: "نەشیانا راگرتن یان کۆنتڕۆڵکرنا نیگەرانی و هزرێن رەش؟",
        options: [
          { label_ku: "هیچ نەبوویە (0)", value: 0 },
          { label_ku: "چەندین رۆژان (1)", value: 1 },
          { label_ku: "پتر ژ نیڤا رۆژان (2)", value: 2 },
          { label_ku: "کەمپەر هەموو رۆژان (3)", value: 3 }
        ]
      },
      {
        id: 3,
        text_ku: "نیگەرانییا زێدە دەربارەی تشتێن جیاواز د ژیانێ دا؟",
        options: [
          { label_ku: "هیچ نەبوویە (0)", value: 0 },
          { label_ku: "چەندین رۆژان (1)", value: 1 },
          { label_ku: "پتر ژ نیڤا رۆژان (2)", value: 2 },
          { label_ku: "کەمپەر هەموو رۆژان (3)", value: 3 }
        ]
      },
      {
        id: 4,
        text_ku: "زەحمەتی د حەواندن و بهێنڤەدانێ دا (نەمانا ئارامیێ)؟",
        options: [
          { label_ku: "هیچ نەبوویە (0)", value: 0 },
          { label_ku: "چەندین رۆژان (1)", value: 1 },
          { label_ku: "پتر ژ نیڤا رۆژان (2)", value: 2 },
          { label_ku: "کەمپەر هەموو رۆژان (3)", value: 3 }
        ]
      },
      {
        id: 5,
        text_ku: "هێندە بێ ئۆقرەی کو زەحمەتە ل سەر جهێ خۆ روونیشی؟",
        options: [
          { label_ku: "هیچ نەبوویە (0)", value: 0 },
          { label_ku: "چەندین رۆژان (1)", value: 1 },
          { label_ku: "پتر ژ نیڤا رۆژان (2)", value: 2 },
          { label_ku: "کەمپەر هەموو رۆژان (3)", value: 3 }
        ]
      },
      {
        id: 6,
        text_ku: "ترس ژ هندێ کو تشتەکێ گەلەک خراب و کارەساتبار رووبدەت؟",
        options: [
          { label_ku: "هیچ نەبوویە (0)", value: 0 },
          { label_ku: "چەندین رۆژان (1)", value: 1 },
          { label_ku: "پتر ژ نیڤا رۆژان (2)", value: 2 },
          { label_ku: "کەمپەر هەموو رۆژان (3)", value: 3 }
        ]
      }
    ],
    evaluate: (answers) => {
      const sum = Object.values(answers).reduce((acc: number, v: any) => acc + Number(v), 0);
      if (sum <= 4) {
        return {
          scoreTitle: "دڵەڕاوکێیا کێم یان سروشتی (0 - 4)",
          scoreLevel: "low",
          scoreValue: `${sum} / 18`,
          explanation_ku: "ترس و دڵەڕاوکێیا تە د سنوورێ پێویست و سروشتی یێ مروڤاتی دایە و مێشکێ تە ئارامە.",
          advice_ku: [
            "رێکخستنا خەوێ و کێمکرنا چای و قەهوەیا زێدە",
            "مەشقێن ئارامکرنا ماسولکان ئەنجام بدە"
          ],
          urgency: "green"
        };
      } else if (sum <= 9) {
        return {
          scoreTitle: "دڵەڕاوکێیا مامناوەند (5 - 9)",
          scoreLevel: "moderate",
          scoreValue: `${sum} / 18`,
          explanation_ku: "تۆ هەست ب شڵەژان و دڵەڕاوکێیەکێ دکەی کو رەنگە کارتێکرنێ ل سەر بڕیاردان و لەشێ تە بکەت.",
          advice_ku: [
            "تەکنیکا 5-4-3-2-1 یا نیشتەجێبوونێ (Grounding) بکارهینە",
            "هزرێن کارەساتی بنڤیسە و بەراورد بکە دگەل بەڵگەیێن راستی",
            "وەرزشا رۆژانە یا پیادەڕەویێ ئەنجام بدە"
          ],
          urgency: "amber"
        };
      } else {
        return {
          scoreTitle: "دڵەڕاوکێیا گران (10 - 18)",
          scoreLevel: "high",
          scoreValue: `${sum} / 18`,
          explanation_ku: "سیستەمێ دەماری یێ تە د حالەتێ زەنگا بەردەوام (Fight-or-Flight) دایە، کو ئەمە ماندووبوونا گران دروست دکەت.",
          advice_ku: [
            "راوێژکرن دگەل پسپۆری بۆ راهێنانا مەعریفی رەفتاری (CBT)",
            "کۆنتڕۆڵکرنا پێلێن پانیکێ ب رێنماییا نۆژدارێ دەروونی"
          ],
          urgency: "red"
        };
      }
    }
  },

  // 4. تاقیکرنا کەسایەتیێ MBTI (16 Personalities Badini Edition)
  {
    id: "test-mbti",
    title_ku: "تاقیکرنا شێوازێ کەسایەتیێ (MBTI - 16 کەسایەتی)",
    title_en: "16 Personalities Badini Edition",
    subtitle_ku: "دیارکرنا تایتلێ کەسایەتیا تە: دەرەکی/ناوەکی، هزری/سۆزداری",
    icon: "🧩",
    badge_color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    category: "کەسایەتی",
    time_est: "5 دەقە",
    questions_count: 8,
    description_ku: "تۆ کەسەکێ دەرەکێ یان ناوەکی ی؟ ب هزرێ بڕیارێ ددەی یان ب سۆزێ؟ ئەڤ تاقیکرنە شێوازێ بنەڕەتی یێ کەسایەتیا تە دەرئێخیت.",
    questions: [
      {
        id: 1,
        text_ku: "پشتی رۆژەکا درێژ و ماندووکەر، کێشانا وزەیێ بۆ تە چاوا یە؟",
        options: [
          { label_ku: "حەز دکەم بتنێ د ژوورێ دا بم و بێدەنگ بم (ناوەکی - I)", value: "I" },
          { label_ku: "حەز دکەم بچمە دگەل هەڤالان و قسە بکەم (دەرەکی - E)", value: "E" }
        ]
      },
      {
        id: 2,
        text_ku: "د کۆڕ و جڤاتان دا، شێوازێ تە یێ دەستپێکرنا ئاخفتنێ چاوا یە؟",
        options: [
          { label_ku: "چاوەڕێ دکەم کەسێن دی دەستپێبکەن (I)", value: "I" },
          { label_ku: "ئەز دەستپێشخەریێ دکەم و ئاخفتنێ ڤەدکەم (E)", value: "E" }
        ]
      },
      {
        id: 3,
        text_ku: "چەوا زانیارییان کۆم دکەی و جیهانێ دبینیت؟",
        options: [
          { label_ku: "حەز دکەم ل سەر راستی و بەڵگەیێن کۆنکرێت بوەستم (S)", value: "S" },
          { label_ku: "حەز دکەم ل سەر وێنێ گەورە و ئیلهام و بیرۆکەکان بوەستم (N)", value: "N" }
        ]
      },
      {
        id: 4,
        text_ku: "د بڕیاردانێ دا، چ گرنگترە ل دەف تە؟",
        options: [
          { label_ku: "لۆجیک، راستیێن زانستی و عەدالەت (T)", value: "T" },
          { label_ku: "هەستێن کەسان، بەزەیی و پێکڤەژیانا ئارام (F)", value: "F" }
        ]
      },
      {
        id: 5,
        text_ku: "د دەمێ ناکۆکیێن کارێ دا چاوا مامەڵێ دکەی؟",
        options: [
          { label_ku: "راستیێ ب بێ لایەنی دەربڕین دکەم بێ گوێدان بە هەست (T)", value: "T" },
          { label_ku: "هەوڵ دەدەم کەس دلگران نەبێت و دڵی هەمووان راگرم (F)", value: "F" }
        ]
      },
      {
        id: 6,
        text_ku: "شێوازێ پلان دانان بۆ گەشت یان پڕۆژەیەکێ نوو:",
        options: [
          { label_ku: "هەموو وردەکارییان پێشوەخت رێکدێخم و خشتە دادەنێم (J)", value: "J" },
          { label_ku: "وەک روودانەکان هاتن پێشوازی لێ دکەم و دەرفەتێ نوێ بەکاردێنم (P)", value: "P" }
        ]
      },
      {
        id: 7,
        text_ku: "ژوور و مێزێ کارێ تە زۆربەی جاران چاوا یە؟",
        options: [
          { label_ku: "رێکخستی، پاک و هەر شتێ ل جهێ خۆیە (J)", value: "J" },
          { label_ku: "پڕ ژ کاغەز و بیرۆکە، ئازاد و بێ پلانێکی توند (P)", value: "P" }
        ]
      },
      {
        id: 8,
        text_ku: "پێناسەکرنا تە بۆ کارەکێ سەرکەفتی:",
        options: [
          { label_ku: "کارەک کو پلان بۆ هاتیە دانان و بەرێ خودان هەیە (J)", value: "J" },
          { label_ku: "کارەکێ کو پڕە ژ دەلیڤەیێن نوو و ئازادی (P)", value: "P" }
        ]
      }
    ],
    evaluate: (answers) => {
      let E = 0, I = 0, S = 0, N = 0, T = 0, F = 0, J = 0, P = 0;
      Object.values(answers).forEach((val) => {
        if (val === 'E') E++;
        if (val === 'I') I++;
        if (val === 'S') S++;
        if (val === 'N') N++;
        if (val === 'T') T++;
        if (val === 'F') F++;
        if (val === 'J') J++;
        if (val === 'P') P++;
      });
      const type = `${E >= I ? 'E' : 'I'}${S >= N ? 'S' : 'N'}${T >= F ? 'T' : 'F'}${J >= P ? 'J' : 'P'}`;
      const typeNamesKu: Record<string, { title: string; desc: string }> = {
        "INTJ": { title: "ستراتیژیستێ ژیر (The Architect)", desc: "هزرمەندەکێ کوور، خاوەن دیدگا و پلاندارێژەرێ بەتوانا." },
        "INTP": { title: "مەنتقیێ زانا (The Logician)", desc: "ڤەکۆلەرێ حەقیقەتێ، داهێنەرێ بیرۆکەیێن فەلسەفی." },
        "ENTJ": { title: "سەرکردەیێ رێبەر (The Commander)", desc: "بڕیاردەرێ دلێر، رابەرێ سەرکەفتنا کومەلان." },
        "ENTP": { title: "موناقەشەکەرێ ژیر (The Debater)", desc: "حەز ژ بەرسڤدانا پرسیارێن دژوار و شلۆڤەکرنێ دکەت." },
        "INFJ": { title: "پارێزەرێ دادپەروەر (The Advocate)", desc: "کەسەکێ دلۆڤان، کەمبین لێ خاوەن ئیلهام و بەهایێن مەزن." },
        "INFP": { title: "ناڤبژیکەرێ هەستناسک (The Mediator)", desc: "خەونبینێ راستەقینە، دلسۆز بۆ باشکرنا جیهانێ." },
        "ENFJ": { title: "قسەکەرێ ئیلهامبەخش (The Protagonist)", desc: "سەرکێشێ بەخشندە کو کەسێن دی بەرەو چاکیێ رێنمایی دکەت." },
        "ENFP": { title: "پاڵپشتێ پڕ وزە (The Campaigner)", desc: "کەسایەتیەکا جڤاکی، داهێنەر و حەزژێکەرێ ژیانێ." },
        "ISTJ": { title: "پشکنەرێ باوەڕپێکراو (The Logistician)", desc: "کەسەکێ باوەرپێکری، پابەند ب یاسا و کارێ دروست." },
        "ISFJ": { title: "پارێزەرێ بێدەنگ (The Defender)", desc: "خزمەتکارێ وەفادار، دلسۆز بۆ خێزان و هەڤالان." },
        "ESTJ": { title: "رێڤەبەرێ کارامە (The Executive)", desc: "رێکخەرێ کاروباران ب یاسا و دیسیپلینەکا بەرز." },
        "ESFJ": { title: "مێواندۆستێ گەرم (The Consul)", desc: "جڤاکدۆست، گرنگیدەر ب پێداویستیێن کەسێن دەوروبەر." },
        "ISTP": { title: "پیناسەکەرێ کارامە (The Virtuoso)", desc: "تەکنیکارێ بێدەنگ، فێرخوازێ پراکتیکی یێ ئامێران." },
        "ISFP": { title: "هونەرمەندێ ئارام (The Adventurer)", desc: "حەزژێکەرێ جوانیێ، ژیان د دەمێ نوکە دا." },
        "ESTP": { title: "سەرکێشێ ژیر (The Entrepreneur)", desc: "چالاک، زوو بڕیاردەر و حەزژێکەرێ تاقیکرنێن نوو." },
        "ESFP": { title: "شانۆکارێ بەختەوەر (The Entertainer)", desc: "پڕ لە ژیان، رۆناککەرەوەی دڵێ هەڤالان." },
      };
      const info = typeNamesKu[type] || { title: `کەسایەتیا ${type}`, desc: "تایبەتمەندیێن سەرنجڕاکێش و بەهرەیێن تایبەت." };

      return {
        scoreTitle: `${type} - ${info.title}`,
        scoreLevel: "type",
        scoreValue: type,
        explanation_ku: info.desc,
        advice_ku: [
          "خاڵێن بهێز یێن کەسایەتیا خۆ د کار و خێزانێ دا بکاربینە",
          "ئاگاداری خاڵێن لاواز بە دەمێ بڕیارێن هەستیار وەردگری",
          "رێز ل کەسایەتیێن جیاواز ژ خۆ بگرە بۆ ئاڤاکرنا پەیوەندیێن باشتر"
        ],
        urgency: "green"
      };
    }
  },

  // 5. پیڤەرا باوەری بخۆبوونێ (Rosenberg Self-Esteem Scale)
  {
    id: "test-selfesteem",
    title_ku: "پیڤەرا باوەری بخۆبوونێ و رێزگرتنا خۆ",
    title_en: "Rosenberg Self-Esteem Scale",
    subtitle_ku: "دیارکرنا ئاستێ باوەربوونا تە ب بهایێ کەسی و شیانێن خۆ",
    icon: "💎",
    badge_color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    category: "باوەری بخۆبوون",
    time_est: "3 دەقە",
    questions_count: 6,
    description_ku: "تۆ تا چ ڕاددە هەست ب وێ یەکێ دکەی کو کەسەکێ ب بها و خاوەن شیانی؟ ئەڤ تاقیکرنە راستیێ دەرئێخیت.",
    questions: [
      {
        id: 1,
        text_ku: "هەست دکەم ئەز کەسەکێ ب بهام، لانیکەم وەکی کەسێن دی؟",
        options: [
          { label_ku: "ب تەمامی نەخێر (0)", value: 0 },
          { label_ku: "پێم وانییە (1)", value: 1 },
          { label_ku: "رازی مە (2)", value: 2 },
          { label_ku: "ب تەمامی بەلێ (3)", value: 3 }
        ]
      },
      {
        id: 2,
        text_ku: "هەست دکەم چەندین خاڵێن باش و بهێز د ناڤ کەسایەتیا من دا هەنە؟",
        options: [
          { label_ku: "ب تەمامی نەخێر (0)", value: 0 },
          { label_ku: "پێم وانییە (1)", value: 1 },
          { label_ku: "رازی مە (2)", value: 2 },
          { label_ku: "ب تەمامی بەلێ (3)", value: 3 }
        ]
      },
      {
        id: 3,
        text_ku: "دەمەک هەست دکەم ئەز کەسەکێ بێ مفا و نەشیاوم؟ (پێچەوانە)",
        options: [
          { label_ku: "ب تەمامی بەلێ (0)", value: 0 },
          { label_ku: "رازی مە (1)", value: 1 },
          { label_ku: "پێم وانییە (2)", value: 2 },
          { label_ku: "ب تەمامی نەخێر (3)", value: 3 }
        ]
      },
      {
        id: 4,
        text_ku: "شێوازم هەیە کارەکان وەکی زۆربەی کەسان ب سەرکەفتوویی ئەنجام بدەم؟",
        options: [
          { label_ku: "ب تەمامی نەخێر (0)", value: 0 },
          { label_ku: "پێم وانییە (1)", value: 1 },
          { label_ku: "رازی مە (2)", value: 2 },
          { label_ku: "ب تەمامی بەلێ (3)", value: 3 }
        ]
      },
      {
        id: 5,
        text_ku: "رێزەکا باش بۆ خۆ و کەسایەتیا خۆ دادەنێم؟",
        options: [
          { label_ku: "ب تەمامی نەخێر (0)", value: 0 },
          { label_ku: "پێم وانییە (1)", value: 1 },
          { label_ku: "رازی مە (2)", value: 2 },
          { label_ku: "ب تەمامی بەلێ (3)", value: 3 }
        ]
      },
      {
        id: 6,
        text_ku: "بە گشتی ژ خۆ و ژیانا خۆ رازی مە؟",
        options: [
          { label_ku: "ب تەمامی نەخێر (0)", value: 0 },
          { label_ku: "پێم وانییە (1)", value: 1 },
          { label_ku: "رازی مە (2)", value: 2 },
          { label_ku: "ب تەمامی بەلێ (3)", value: 3 }
        ]
      }
    ],
    evaluate: (answers) => {
      const sum = Object.values(answers).reduce((acc: number, v: any) => acc + Number(v), 0);
      if (sum >= 14) {
        return {
          scoreTitle: "باوەری بخۆبوونەکا بلند و ساخلەم (14 - 18)",
          scoreLevel: "high",
          scoreValue: `${sum} / 18`,
          explanation_ku: "تۆ رێزەکا ساخلەم بۆ خۆ دادەنێی و باوەری ب شیانێن خۆ هەیە بێی کەفتنە داڤا فیز و نەرگسیەتێ.",
          advice_ku: [
            "بەردەوام بە ل سەر ئارمانجێن گەورە",
            "ئەڤێ هێزێ بکارهینە بۆ پشتەڤانیکرنا کەسێن کەمباوەر"
          ],
          urgency: "green"
        };
      } else if (sum >= 8) {
        return {
          scoreTitle: "باوەری بخۆبوونا مامناوەند (8 - 13)",
          scoreLevel: "moderate",
          scoreValue: `${sum} / 18`,
          explanation_ku: "باوەریا تە ب خۆ د هندەک بارودۆخان دا باشە، لێ زوو ژ دەستێن رەخنە یان شکەستنێ د لەرزیت.",
          advice_ku: [
            "خۆ بەراورد مەکە دگەل سەرکەفتنا کەسێن دی ل تۆڕێن جڤاکی",
            "سەرکەفتنێن خۆ یێن بچووک بنڤیسە و جەژنێ ل سەر بگێڕە",
            "فێربە چاوا ب رێز بێژی 'نەخێر' بۆ تشتێن تە ناڤێت"
          ],
          urgency: "amber"
        };
      } else {
        return {
          scoreTitle: "باوەری بخۆبوونا نزم و هەست ب بێبهاییێ (0 - 7)",
          scoreLevel: "low",
          scoreValue: `${sum} / 18`,
          explanation_ku: "تۆ بەردەوام خۆ سەرکۆنە دکەی و بهایێ خۆ کێم دبینیت. ئەڤە کارتێکرنەکا نەباش ل هەموو بوارێن ژیانێ دکەت.",
          advice_ku: [
            "تەکنیکا دلۆڤانی ب خۆ برن (Self-Compassion) مەشق بکە",
            "هزرێن سەرکۆنەکەر یێن ناخێ خۆ وەکی دوژمن تەماشا بکە نەکو راستی",
            "پێشنیار دکەین دگەل راوێژکارەکێ دەروونی باخڤی بۆ چارەسەرکرنا برینێن کەڤن"
          ],
          urgency: "red"
        };
      }
    }
  },

  // 6. پیڤەرا هۆشا سۆزداری (EQ - Emotional Intelligence)
  {
    id: "test-eq",
    title_ku: "پیڤەرا هۆشا سۆزداری (Emotional Intelligence - EQ)",
    title_en: "Emotional Quotient Scale",
    subtitle_ku: "تێگەهشتن ژ هەستێن خۆ و شیانا هاوسۆزیێ دگەل خەڵکی",
    icon: "❤️",
    badge_color: "bg-teal-500/10 text-teal-600 border-teal-500/20",
    category: "هۆشیاری و پەیوەندی",
    time_est: "3 دەقە",
    questions_count: 6,
    description_ku: "هۆشا سۆزداری (EQ) گرنگترە ژ بلیمەتییا ئەقلی (IQ) بۆ سەرکەفتن د پەیوەندی و کاریدا. تاقی بکە کا ئاستێ تە چەندە.",
    questions: [
      {
        id: 1,
        text_ku: "دەستبەجێ دزانم کا چ هەستەک نوکە ل دەف من دروست بوویە (تورەیی، شەرم، بێزاری)؟",
        options: [
          { label_ku: "گەلەک کێم (0)", value: 0 },
          { label_ku: "هندەک جاران (1)", value: 1 },
          { label_ku: "زۆربەی کاتان (2)", value: 2 },
          { label_ku: "بەردەوام دزانم (3)", value: 3 }
        ]
      },
      {
        id: 2,
        text_ku: "دەمێ کەسەک خەمگین یان دلتەنگ دبیت، ب زووی هەست پێ دکەم بەری ئەو بێژیت؟",
        options: [
          { label_ku: "گەلەک کێم (0)", value: 0 },
          { label_ku: "هندەک جاران (1)", value: 1 },
          { label_ku: "زۆربەی کاتان (2)", value: 2 },
          { label_ku: "بەردەوام (3)", value: 3 }
        ]
      },
      {
        id: 3,
        text_ku: "دەمێ تورە دەبم، دشێم بەری ئاخفتنێ یان شکاندنا تشتان کەمەکێ رابوەستم؟",
        options: [
          { label_ku: "گەلەک کێم (0)", value: 0 },
          { label_ku: "هندەک جاران (1)", value: 1 },
          { label_ku: "زۆربەی کاتان (2)", value: 2 },
          { label_ku: "بەردەوام (3)", value: 3 }
        ]
      },
      {
        id: 4,
        text_ku: "دشێم ب سەبر گوهـ بدەمە کەسەکێ دی بێی ئەوەی قسەی پێ ببڕم؟",
        options: [
          { label_ku: "گەلەک کێم (0)", value: 0 },
          { label_ku: "هندەک جاران (1)", value: 1 },
          { label_ku: "زۆربەی کاتان (2)", value: 2 },
          { label_ku: "بەردەوام (3)", value: 3 }
        ]
      },
      {
        id: 5,
        text_ku: "دەمێ هەڵەیەک دکەم، دشێم لێبووردنێ بخوازم ب بێ هەستکرن بە تێکچوونی کەڕامەت؟",
        options: [
          { label_ku: "گەلەک کێم (0)", value: 0 },
          { label_ku: "هندەک جاران (1)", value: 1 },
          { label_ku: "زۆربەی کاتان (2)", value: 2 },
          { label_ku: "بەردەوام (3)", value: 3 }
        ]
      },
      {
        id: 6,
        text_ku: "دشێم کەسێن دەوروبەری خۆ هان بدەم و هیڤیێ بدەمێ کاتێ بێهیڤی دەبن؟",
        options: [
          { label_ku: "گەلەک کێم (0)", value: 0 },
          { label_ku: "هندەک جاران (1)", value: 1 },
          { label_ku: "زۆربەی کاتان (2)", value: 2 },
          { label_ku: "بەردەوام (3)", value: 3 }
        ]
      }
    ],
    evaluate: (answers) => {
      const sum = Object.values(answers).reduce((acc: number, v: any) => acc + Number(v), 0);
      if (sum >= 14) {
        return {
          scoreTitle: "هۆشا سۆزداری یا زۆر بلند (14 - 18)",
          scoreLevel: "high",
          scoreValue: `${sum} / 18`,
          explanation_ku: "تۆ خاوەن شیانەکا مەزنی د تێگەهشتنا هەستان و دروستکرنا پەیوەندیێن سەرکەفتی دا. کەسەکێ متمانەپێکراوی بۆ دەوروبەران.",
          advice_ku: [
            "ئەڤێ تایبەتمەندیێ بکاربینە د سەرکردایەتیکردن و ئاشتەوایی دا",
            "ئاگاداری بە کو هەستێن خەڵک بارگرانی ل سەر دڵێ تە دروست نەکەن"
          ],
          urgency: "green"
        };
      } else if (sum >= 8) {
        return {
          scoreTitle: "هۆشا سۆزداری یا مامناوەند (8 - 13)",
          scoreLevel: "moderate",
          scoreValue: `${sum} / 18`,
          explanation_ku: "تۆ باشی د تێگەهشتنا هەستان دا، بەڵام هەندێک جار لە ژێر فشاردا کۆنتڕۆڵی هەستەکانت قورس دەبێت.",
          advice_ku: [
            "مەشق بکە ل سەر سەبر و گوێگرتنا چالاک (Active Listening)",
            "بەری بەرسڤدانێ، سێ چرکە بهێنێ بهەناسەدانێ بدە"
          ],
          urgency: "amber"
        };
      } else {
        return {
          scoreTitle: "هۆشا سۆزداری یا پێتڤی ب پێشخستنێ (0 - 7)",
          scoreLevel: "low",
          scoreValue: `${sum} / 18`,
          explanation_ku: "تۆ زەحمەتە هەستێن خۆ بنیاسی و زوو تورە دبی، و تێگەهشتن ژ هەستێن خەڵک بۆ تە ئالۆزە.",
          advice_ku: [
            "رۆژانە ناڤێ ئەو هەستەی کە هەتە بنڤیسە (وەک: تورەبوون، خەم، بێزاری)",
            "هەوڵ بدە خۆ بخەیتە شوێنی کەسی بەرامبەر بەری قسەکردنێ",
            "بخوێنەوە دەربارەی پەیوەندییە مرۆییەکان و زمانی جەستە"
          ],
          urgency: "red"
        };
      }
    }
  }
];
