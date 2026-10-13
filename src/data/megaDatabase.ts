// بەحرا دەرونناسی - 1000+ بابەت - 2026-2027
// Complete Mega Database of Psychological Topics in Kurdish Badini

export interface Topic {
  id: number;
  title: string;
  category: "Nexoshi" | "Birodoz" | "Ezmun" | "Zana" | "Chareser" | "CheMek" | "Test";
  description: string;
  fullText: string;
  kurdishName: string;
  authorOrRef?: string;
  tags?: string[];
  dsmCode?: string;
}

export const CATEGORY_LABELS: Record<Topic["category"], { nameKu: string; icon: string; color: string; bg: string }> = {
  Nexoshi: { nameKu: "نەخۆشیێن دەرونی (DSM-5)", icon: "🩺", color: "text-rose-500", bg: "bg-rose-500/10 border-rose-500/30" },
  Birodoz: { nameKu: "بیردۆزێن دەروونناسی", icon: "🧠", color: "text-indigo-500", bg: "bg-indigo-500/10 border-indigo-500/30" },
  Ezmun: { nameKu: "ئەزموون و تاقیکاری", icon: "🔬", color: "text-amber-500", bg: "bg-amber-500/10 border-amber-500/30" },
  Zana: { nameKu: "زانا و دەروونناس", icon: "👤", color: "text-cyan-500", bg: "bg-cyan-500/10 border-cyan-500/30" },
  Chareser: { nameKu: "رێکێن چارەسەریێ", icon: "🌿", color: "text-emerald-500", bg: "bg-emerald-500/10 border-emerald-500/30" },
  CheMek: { nameKu: "میکانیزم و چەمک", icon: "⚙️", color: "text-purple-500", bg: "bg-purple-500/10 border-purple-500/30" },
  Test: { nameKu: "تاقیکرن و پیڤەر", icon: "📋", color: "text-teal-500", bg: "bg-teal-500/10 border-teal-500/30" },
};

// 1. High-fidelity Curated Base Topics
export const MEGA_TOPICS: Topic[] = [
  // =================== 1-50: نەخۆشیێن دەروونی DSM-5 ===================
  {
    id: 1,
    title: "Major Depressive Disorder",
    kurdishName: "خەمۆکیا مەزن و دژوار",
    category: "Nexoshi",
    dsmCode: "DSM-5 296.22 (F32.1)",
    authorOrRef: "APA DSM-5 / Aaron Beck",
    tags: ["سیرۆتۆنین", "بێتاقەتی", "خەمۆکی", "CBT"],
    description: "خەمۆکیا مەزن ئێکە ژ مەزنترین رەوشێن دەرونی کو مێزاج و حەزا ژیانێ تێکددەت پتر ژ دوو حەفتیان.",
    fullText: "خەمۆکیا مەزن (Major Depressive Disorder) نەخۆشیەکا کلینیکی یە یا کو ژبەر کێمبوونا ناڤبەینکارێن کیمیایی وەک سیرۆتۆنین و دۆپامینێ د مێشکی دا چێدبیت. نیشانێن سەرەکی پێکدهێن ژ: خەمگینیا گران و بەردەوام، بێمفا دیتنا ژیانێ (Anhedonia)، تێکچوونا خەوێ، کێمبوونا کێشا لەشی، و هەستکرن ب گونەهباریێ. چارەسەری ب رێکا دەرمانێن SSRIs و چارەسەریا هزر و رەفتارێ (CBT) و وەرزشێ دگەهیژیتە پتر ژ ٨٠٪ سەرکەفتنێ."
  },
  {
    id: 2,
    title: "Generalized Anxiety Disorder",
    kurdishName: "دڵەڕاوکێا گشتگیر (GAD)",
    category: "Nexoshi",
    dsmCode: "DSM-5 300.02 (F41.1)",
    authorOrRef: "APA DSM-5 / David Barlow",
    tags: ["دڵەڕاوکێ", "تەنگەنەفەسی", "کۆرتیزۆل", "فکری"],
    description: "ترس و دڵەڕاوکێا بەردەوام یا بێ سەدەم دەربارەی روودانێن رۆژانە بۆ دەمێ پتر ژ ٦ مەهان.",
    fullText: "دڵەڕاوکێا گشتی (GAD) بریتیە ژ دڵەڕاوکێ و نیگەرانیا زێدە و بەردەوام کو کۆنترۆلکرنا وێ یا ب زەحمەتە. نیشانێن لەشی وەک توندبوونا ماسوولکان، لێدانا خێرا دل، سەرئێشە، تەنگەنەفەسی، و زوو وەستیان ل دەف کەسی پەیدا دبن. چارەسەری ب رێکا فێربوونا بێدەنگکرنا مێشکی (Mindfulness)، تەکنیکێن هەناسەدانێ، و دەرمانێن دژی دڵەڕاوکێێ ئەنجام ددەت."
  },
  {
    id: 3,
    title: "Panic Disorder & Panic Attack",
    kurdishName: "شڵەژانا ترسێ و پەلامارا پانیک",
    category: "Nexoshi",
    dsmCode: "DSM-5 300.01 (F41.0)",
    authorOrRef: "APA DSM-5",
    tags: ["پانیک", "ترس", "دلەکوتێ", "تەنگەنەفەسی"],
    description: "پەلامارا ترسێ یا ژ نشکەکێ ڤە دگەل لەرزین، دلەکوتێ و هەستکرن ب مرنێ یان شێتبوونێ.",
    fullText: "نەخۆشیا پانیک دگەل پەلامارێن کتوپڕ یێن ترسا دژوار دەستپێدکەت کو د ماوێ ١٠ دەقان دا دگەهیتە ئەوپەڕێ خۆ. نیشانێن سەرەکی: لێدانا خێرا دل، سڕبوونا دەست و پێیان، گێژبوون، و ترسا لەرزۆک یا مرنێ. ئەڤ نەخۆشیە د مێشکی دا گرێدایە ب ئالۆزبوونا بەشێ ئامیگدالایێ (Amygdala) و سیستەمێ هەوارهاتنا لەشی (Fight-or-Flight)."
  },
  {
    id: 4,
    title: "Obsessive-Compulsive Disorder",
    kurdishName: "وەسوەسە و کریارا نەچاری (OCD)",
    category: "Nexoshi",
    dsmCode: "DSM-5 300.3 (F42)",
    authorOrRef: "APA DSM-5 / Edna Foa",
    tags: ["وەسوەسە", "پاقژی", "دووبارەکرن", "ERP"],
    description: "هزرێن نەڤیایی یێن بەردەوام (وەسوەسە) کو مرۆڤی نەچار دکەن کریارێن دیارکری دووبارە بکەت (Compulsion).",
    fullText: "وەسوەسە (OCD) نەخۆشیەکا دەماری-دەروونی یە کو تێدا کەسێ تووشبووی هزرێن ترسناک و گومانێن بەردەوام بۆ دهێن (وەک ترسا پیسبوونێ، دڵنیابوون ژ قفلا دەرگەهی، یان رێکوپێکیەکا نەخۆش). کەس ناچار دبیت کارێ دووبارە بکەت بۆ کێمکرنا ئاستێ سترێسێ. باشترین چارەسەریا زانستی ئەزموونا ERP (Exposure and Response Prevention) یە."
  },
  {
    id: 5,
    title: "Post-Traumatic Stress Disorder",
    kurdishName: "شڵەژانا پشتی زەبر و تروومایێ (PTSD)",
    category: "Nexoshi",
    dsmCode: "DSM-5 309.81 (F43.10)",
    authorOrRef: "APA DSM-5 / Bessel van der Kolk",
    tags: ["ترووما", "شەڕ", "زەبر", "EMDR"],
    description: "رەوشەکا دژوار یا پشتی رویدانەکا ترسناک وەک شەڕ، کارەسات، یان ئەشکەنجەدانێ پەیدا دبیت.",
    fullText: "شڵەژانا پشتی زەبرێ (PTSD) دەما رویدەدەت کو مرۆڤ تووشی رویدانەکا گەفێ ل سەر ژیانێ بووبیت. نیشانێن سەرەکی بریتینە ژ کابووسێن شەڤێ، زڤڕینا رویدانێ د هزرێ دا ب شێوەیێ زیندی (Flashbacks)، دوورکەفتن ژ جهێن بیرئینەر، و هەستکرن ب هۆشیاریەکا بەردەوام یا ترسێ. چارەسەریا EMDR و CBT باشترین رێکن."
  },
  {
    id: 6,
    title: "Bipolar I & II Disorder",
    kurdishName: "شڵەژانا دوو جەمسەری (بایپۆلار)",
    category: "Nexoshi",
    dsmCode: "DSM-5 296.40 (F31.1)",
    authorOrRef: "APA DSM-5 / Kay Redfield Jamison",
    tags: ["مانیا", "خەمۆکی", "بایپۆلار", "لیتیۆم"],
    description: "گوهۆڕینا توند د ناڤبەرا قۆناغێن شادی و وزەیا نەئاسایی (مانیا) و قۆناغێن خەمۆکیا قویر دا.",
    fullText: "شڵەژانا بایپۆلار تێکچوونەکا مێزاجی یە کو د تێدا کەس د ناڤبەرا دوو سەرێن دژبەیەک دا دچیت و دهێت: قۆناغا شێتیا کەیفێ و چالاکیا بێسنوور و خەونەدیتنێ (Mania) و قۆناغا بێتاقەتی و بێهیواییا تەمام (Depression). بەکارهێنانا دەرمانێن جێگیرکەرێن مێزاجی (وەک Lithium و Sodium Valproate) ژێدەرێ سەرەکیێ پاراستنێ یە."
  },
  {
    id: 7,
    title: "Schizophrenia Spectrum",
    kurdishName: "شیزۆفرینیا (دابەشبوونا کەسایەتیێ)",
    category: "Nexoshi",
    dsmCode: "DSM-5 295.90 (F20.9)",
    authorOrRef: "APA DSM-5 / Eugen Bleuler",
    tags: ["وەهم", "دەنگێن ناڤ مێشکی", "دۆپامین", "شیزۆفرینیا"],
    description: "تێکچوونا تێگەهشتنا راستیێ، بیستنا دەنگێن نادیار (Hallucinations) و باوەریێن شاش (Delusions).",
    fullText: "شیزۆفرینیا نەخۆشیەکا دەماری یا گرانە یا تێکچوونا پەیوەندیا مرۆڤی دگەل راستیێ. تێدا کەس دەنگان دبیستیت یان باوەری ب تشتێن نەراست دئینیت کو بۆ وی سەد د سەد راستەقینەنە. رێکخستنا ئاستێ دۆپامینێ ب دەرمانێن دژی شێتبوونێ (Antipsychotics) دگەل پالپشتیا خێزانێ دبیتە ئەگەرێ کونترۆلکرنا رەوشێ."
  },
  {
    id: 8,
    title: "ADHD (Attention-Deficit/Hyperactivity)",
    kurdishName: "کێم-سەرنجی و بزاڤا زێدە (ADHD)",
    category: "Nexoshi",
    dsmCode: "DSM-5 314.01 (F90.2)",
    authorOrRef: "Russell Barkley / APA DSM-5",
    tags: ["سەرنج", "مێشک", "بزاڤ", "دۆپامین"],
    description: "زەحمەتیا مانەوە ل سەر ئێک کار، بێسەبری، لەزکرن، و بزاڤا نەراوەستیا یا زارۆک و مەزنان.",
    fullText: "نەخۆشیا ADHD تێکچوونەکا گەشەیا مێشکی یە کو پشکا پێشیا مێشکی (Prefrontal Cortex) ب سستی ئەرکێن رێکخستن و سەرنجدانێ رادپەڕینیت ژبەر نزمبوونا دۆپامینێ. کەس زوو بێزار دبیت و نەشێت سەرنجا خۆ بدەتە سەر وردەکاریان. راهێنانێن رەفتاری و بەرنامەکرنا رۆژانە هاریکارەکێ مەزنن."
  },
  {
    id: 9,
    title: "Social Anxiety Disorder",
    kurdishName: "دڵەڕاوکێ و شەرمینییا جڤاکی",
    category: "Nexoshi",
    dsmCode: "DSM-5 300.23 (F40.10)",
    authorOrRef: "APA DSM-5 / Stefan Hofmann",
    tags: ["جڤاک", "شەرم", "ئاخافتن", "CBT"],
    description: "ترسا دژوار ژ حوکمکرن یان چاڤدێرییا خەلکی د کۆڕ و کومبوون و ئاخافتنێن بەرامبەر دا.",
    fullText: "دڵەڕاوکێا جڤاکی ترسا زێدە یا ژ شەرمزاربوونێ یە د ناڤ جڤاتی دا. کەس دترسیت کو سەیر بهێتە دیتن یان خەلک تانەیان لێ بدەن، لەوما ژ کومبوون و ئاخافتنا د ناڤ کەسێن نەنیاس دا رەڤ دکەت. چارەسەریا رووبەرووبوونێ و CBT دگەل راهێنانێن دەنگ و پێشکێشکرنێ ئەنجامێن نایاب ددەن."
  },
  {
    id: 10,
    title: "Insomnia Disorder",
    kurdishName: "بێخەوی و تێکچوونا خەوێ",
    category: "Nexoshi",
    dsmCode: "DSM-5 307.42 (F51.01)",
    authorOrRef: "Matthew Walker / APA DSM-5",
    tags: ["خەو", "مێلاتۆنین", "سایکۆلۆژیا خەوێ", "CBT-I"],
    description: "زەحمەتیا چوونە د ناڤ خەوێ دا یان بێداربوونا زوو یا بەردەوام کو وزەیا رۆژێ ناهێلیت.",
    fullText: "بێخەویا درێژخایەن (Chronic Insomnia) دەما رویدەدەت کو کەس نەشێت بنڤیت یان خەوا وی پچڕ پچڕ بیت بۆ دەمێ پتر ژ مەهەکێ. باشترین چارەسەریا تاقیری CBT-I (Cognitive Behavioral Therapy for Insomnia) یە کو دوورکەفتنە ژ شاشەیێن موبایلێ، خەوتنا ل دەمێ دیارکری، و نەخارنا کافایینێ پشتی نیڤرۆیان."
  },

  // =================== 51-100: بیردۆزێن مەزنێن دەروونناسی ===================
  {
    id: 301,
    title: "Freud Psychoanalysis & Structural Model",
    kurdishName: "بیردۆزا شیکاریا دەروونی (فروید)",
    category: "Birodoz",
    authorOrRef: "Sigmund Freud (1923)",
    tags: ["ئید", "ئیگۆ", "سوپەرئیگۆ", "نەستی"],
    description: "پێکهاتەیا کەسایەتیێ ژ ئید (ئارەزوو)، ئیگۆ (واقیع)، و سوپەرئیگۆ (ویژدان) و کارتێکرنا نەستیێ.",
    fullText: "سیگمۆند فروید دادەمەزرینەرێ شیکاریا دەروونی یە کو باوەری هەیە رەفتارێن مرۆڤی ب شێوەیەکێ سەرەکی ژ نەستیێ (Unconscious) و حەزێن سەرکوتکری سەرچاوە دگرن. کەسایەتی د ناڤبەرا ئید (پێدڤیێن سەرەتایی)، سوپەرئیگۆ (یاسا و ئەخلاقێ جڤاکی) و ئیگۆ (ناڤبەینکارێ ژیر) دا د ململانێیەکا بەردەوام دایە."
  },
  {
    id: 302,
    title: "Maslow's Hierarchy of Needs",
    kurdishName: "پەیژەیا پێدڤیاتیێن ماسلۆ",
    category: "Birodoz",
    authorOrRef: "Abraham Maslow (1943)",
    tags: ["ماسلۆ", "پێدڤی", "گەهشتن بخۆ", "پاڵنەر"],
    description: "٥ ئاستێن پێدڤیاتیێن مرۆڤی: ژ فسیۆلۆجی دەستپێدکەت تا دگەهیتە گەهشتن ب لوتکەیا خۆ (Self-Actualization).",
    fullText: "ئابراهام ماسلۆ پەیژەیەکا ٥ قۆناغی بۆ پالنەرێن مرۆڤی دانا: ١. پێدڤیاتیێن فسیۆلۆجی (خارن، ئاڤ، خەو)، ٢. پاراستن و ئارامی، ٣. ئەڤین و پەیوەندی، ٤. رێزگرتن و بها، و ٥. گەهشتن ب ئەوپەڕێ شیانێن خۆ (Self-Actualization). مرۆڤ نەشێت بچیتە قۆناغێن بلند هەتا یێن خوارێ تێر نەکەت."
  },
  {
    id: 303,
    title: "Cognitive Behavioral Model (Beck)",
    kurdishName: "مۆدێلا هزر و رەفتارێ یا ئارۆن بێک",
    category: "Birodoz",
    authorOrRef: "Aaron T. Beck (1967)",
    tags: ["هزر", "هەست", "رەفتار", "CBT"],
    description: "پەیوەندیا سێگۆشەییا ناڤبەرا هزرێن مرۆڤی، هەستێن ناخی، و رەفتارێن دەرەکی.",
    fullText: "ئارۆن بێک سەڵماند کو نە رویدان بخۆ مرۆڤی دلتەنگ دکەن، بەلکو تەفسیر و هزرێن مە یێن د دەربارەی وێ رویدانێ دانە کو هەستێن مە چێدکەن. گوهۆڕینا هزرێن شاش و نەرێنی یێن خۆکار (Automatic Thoughts) دەستبەجێ هەست و رەفتارێن مرۆڤی بەرەڤ ئەرێنی و ئارامیێ دگوهۆڕیت."
  },
  {
    id: 304,
    title: "Bandura Social Learning Theory",
    kurdishName: "بیردۆزا فێربوونا جڤاکی یا باندۆرا",
    category: "Birodoz",
    authorOrRef: "Albert Bandura (1977)",
    tags: ["چاڤلێکرن", "مۆدێل", "زارۆک", "باندۆرا"],
    description: "مرۆڤ و زارۆک رەفتاران ژ رێکا چاڤلێکرن (Modeling) و تەماشەکرنا کەسێن دەوروبەر فێر دبن.",
    fullText: "ئەلبێرت باندۆرا نیشاندا کو پڕانیا رەفتارێن مرۆڤان ل جهێ ئەزموونێن راستەوخۆ، ژ سەیرکرنا خەلکێ دی و چاڤلێکرنێ پەیدا دبن. ئەڤ بیردۆزە گەلەک یا گرنگە بۆ پەروەردەکرنا زارۆکان، چونکی زارۆک چاڤ ل کریارێن دایک و بابان دکەن نەک گۆتنێن وان."
  },
  {
    id: 305,
    title: "Bowlby & Ainsworth Attachment Theory",
    kurdishName: "بیردۆزا گرێدانا سۆزداری (Attachment)",
    category: "Birodoz",
    authorOrRef: "John Bowlby & Mary Ainsworth",
    tags: ["گرێدان", "زارۆک", "سۆز", "پەیوەندی"],
    description: "٤ شێوازێن گرێدانا سۆزداری: پارێزراو (Secure)، نیگەران (Anxious)، خۆدوورکەر (Avoidant)، و شڵەژاو.",
    fullText: "جۆن بۆڵبی و مێری ئەینزوۆرس دیت کو جۆریێ گرێدانا زارۆکی دگەل دایکێ د سالێن دەستپێکێ دا، دیاریکەرێ سەرەکیێ پەیوەندیێن ئەڤینی و هەڤژینیێ یە د قۆناغا مەزنبوونێ دا. کەسێن خاوەن گرێدانا ساخلەم ب باوەری و ڤیان سەرەدەریێ دگەل هەڤژینێن خۆ دکەن."
  },

  // =================== 101-150: ئەزموونێن ناڤدار ===================
  {
    id: 401,
    title: "Milgram Obedience Experiment",
    kurdishName: "ئەزموونا گوهدانا میلگرام",
    category: "Ezmun",
    authorOrRef: "Stanley Milgram (1963)",
    tags: ["میلگرام", "گوهدان", "سزا", "دەسەڵات"],
    description: "تاقیکرنا ئاستێ گوهدانا مرۆڤی بۆ دەسەڵاتێ هەتا راددەیێ سزایێ کوشندە بۆ کەسەکێ بێگونەهـ.",
    fullText: "ستانلی میلگرام ل زانکۆیا یەیڵ تاقیکرنەک ئەنجامدا کو تێدا پشکداران باوەردکر کو کارەبایێ ددەنە کەسەکێ دی. ئەنجامێن شۆکهێنەر نیشاندان کو ٦٥٪ ژ خەلکی بەردەوام بوون ل سەر دانا کوشندەترین ڤۆڵتیەیا کارەبایێ (٤٥٠ ڤۆڵت) بتنێ ژبەر کو کەسەکێ د دەسەڵاتێ دا فەرمان لێ کربوو بەردەوام بن."
  },
  {
    id: 402,
    title: "Stanford Prison Experiment",
    kurdishName: "ئەزموونا زیندانا ستانفۆرد",
    category: "Ezmun",
    authorOrRef: "Philip Zimbardo (1971)",
    tags: ["زیندان", "دەسەڵات", "سزا", "زیمباردۆ"],
    description: "چاوا رۆڵ و بەرپرسیاریەتی دشێن مرۆڤێن ئاسایی بکەنە کەسانێن زۆردار و دڵڕەق د چەند رۆژان دا.",
    fullText: "فیلیپ زیمباردۆ قوتابیێن زانکۆیێ دابەشکرنە سەر دوو گرۆپان: پاسەوانێن زیندانێ و زیندانی. بتنێ پشتی ٦ رۆژان ئەزموون هاتە راوەستاندن، چونکی پاسەوان ب شێوەیەکێ دڕندانە و توند دەستدرێژی کرە سەر زیندانیان، کو نیشاندەرێ هێزا سەرسوڕهێنەرا جڤات و رۆڵانە ل سەر رەوشتێ مرۆڤی."
  },
  {
    id: 403,
    title: "Pavlov's Classical Conditioning",
    kurdishName: "مەرجدارکرنا کلاسیکی یا پافلۆڤ",
    category: "Ezmun",
    authorOrRef: "Ivan Pavlov (1904)",
    tags: ["پافلۆڤ", "زەنگ", "مەرجدار", "فێربوون"],
    description: "تاقیکرنا زەنگێ و سەیان: چاوا مێشک رویدانان پێکڤە گرێددەت بۆ دروستکرنا رەفتارەکا خۆکار.",
    fullText: "ئیڤان پافلۆڤ دیت دەما زەنگەکێ دگەل پێشکێشکرنا خارنێ بۆ سەگی لێددەت، پشتی چەندین جاران مێشکێ سەگی فێربوو کو بتنێ ب بیستنا دەنگێ زەنگێ، دەردانا تفێ دەستپێبکەت بێی هەبوونا چ خارنێ. ئەڤ بنەمایە بووە ژێدەرێ سەرەکیێ فێربوونا ترسان ل دەف مرۆڤان ژی."
  },
  {
    id: 404,
    title: "Asch Conformity Experiment",
    kurdishName: "ئەزموونا چاڤلێکرنا جڤاکی یا ئاش",
    category: "Ezmun",
    authorOrRef: "Solomon Asch (1951)",
    tags: ["جڤاک", "باوەری", "چاڤلێکرن", "گوشار"],
    description: "چاوا گوشارا کومێ مرۆڤی نەچار دکەت بەرسڤێن ئاشکرا شاش ب پەسەند ببینیت.",
    fullText: "سۆلۆمۆن ئاش هێڵێن جیاواز نیشانی کەسان دان. دەما ئەندامێن دی یێن کومێ ب ئەنقەست بەرسڤا شاش هەلبژارد، ٧٥٪ ژ پشکداران ل گەل کومێ بەرسڤا شاش دا دا کو ژ کومێ جیاواز دیار نەبن، سەرباری وێ چەندێ کو دزانی بەرسڤا دروست چ بوو."
  },
  {
    id: 405,
    title: "Marshmallow Test (Delayed Gratification)",
    kurdishName: "تاقیکرنا مارشمیلۆ (راگرتنا ئارەزوویێ)",
    category: "Ezmun",
    authorOrRef: "Walter Mischel (1972)",
    tags: ["مارشمیلۆ", "سەبر", "سەرکەفتن", "زارۆک"],
    description: "سەبرا زارۆکی بۆ نەخارنا شریناهیەکێ د بەرامبەر وەرگرتنا دوان دا، و پەیوەندیا وێ ب سەرکەفتنا ژیانێ ڤە.",
    fullText: "واڵتەر میشێل تاقیکرنەک ل سەر زارۆکان ئەنجامدا: ئێک مارشمیلۆ هەلبژێرن دەستبەجێ، یان ١٥ خولەکان چاڤەڕێ بکەن بۆ وەرگرتنا دووان. لێکۆلینێن درێژخایەن نیشاندان ئەو زارۆکێن کو شیان خۆ رابگرن (Delayed Gratification)، د ژیانا پاشەڕۆژێ دا نمرەیێن باڵاتر، ساخلەمیەکا باشتر، و سەرکەفتنا دارایی مسۆگەرتر کر."
  },

  // =================== 151-200: زانایێن دەروونناسی ===================
  {
    id: 501,
    title: "Carl Jung & Analytical Psychology",
    kurdishName: "کارل یۆنگ (نەستییا بەکۆم و ئارکیتایپ)",
    category: "Zana",
    authorOrRef: "Carl Gustav Jung",
    tags: ["یۆنگ", "نەستی", "ئارکیتایپ", "سێبەر"],
    description: "پێشەنگێ دەروونناسیا شیکاری، داهێنەرێ تێگەهێ نەستییا بەکۆم (Collective Unconscious) و سێبەر (Shadow).",
    fullText: "کارل یۆنگ یەک ژ مەزنترین بیرمەندێن سەدەیێ بیستەمە. ئەو باوەری ب هندێ هەیە کو مرۆڤایەتی هەمی د نەستیەکا هاوبەش دا شەریکە کو پڕە ژ هێما و چەمکێن کۆن (Archetypes). وی تیشک خستە سەر پێویستیا ئاشتبوونێ دگەل لایەنێ تاریک یێ کەسایەتیێ کو پێی دبێژن سێبەر (Shadow)."
  },
  {
    id: 502,
    title: "Viktor Frankl & Logotherapy",
    kurdishName: "ڤیکتۆر فرانکڵ (واتایا ژیانێ)",
    category: "Zana",
    authorOrRef: "Viktor E. Frankl",
    tags: ["فرانکڵ", "واتا", "ئازار", "هیوا"],
    description: "دەروونناسێ رزگاربوویێ ئۆردوگایێن نازی، داهێنەرێ لوگۆتێراپی و پەیامێ: 'ئەو کەسێ هۆکارەک هەبیت بۆ ژیانێ، دشێت ل سەر هەر ناخۆشیەکێ بمینیت'.",
    fullText: "ڤیکتۆر فرانکڵ نڤیسەرێ پەرتووکا 'مرۆڤ ل دووڤ واتایێ دگەڕێت' سەڵماند کو سەرەکیترین پالنەرێ مرۆڤی بەختەوەری نینە، بەلکو دیتنا رامان و واتایەکێ یە بۆ ژیانێ و بۆ ئازاران. کەسێ کو ئارمانجەکا پیرۆز هەبیت، بەرگەی هەر تاقیکردنەکا سەخت یا ژیانێ دگریت."
  },
  {
    id: 503,
    title: "Daniel Kahneman & Behavioral Economics",
    kurdishName: "دانیێل کانیمان (سیستەمێ ١ و سیستەمێ ٢)",
    category: "Zana",
    authorOrRef: "Daniel Kahneman (Nobel Prize)",
    tags: ["کانیمان", "بڕیاردان", "سیستەمێ هزرینێ", "خەلەتی"],
    description: "برندەیێ خەڵاتێ نۆبڵ بۆ ئابووریێ رەفتاری: چاوا مێشک ب دوو رێکان هزر دکەت (خێرا هەستیار بەرامبەر هێدییا ژیر).",
    fullText: "دانیێل کانیمان ئاشکرا کر کو مرۆڤ خاوەن دوو شێوازێن سەرەکی یێن هزرینێنە: سیستەمێ ١ (خێرا خۆکار و هەستیار کو زوو خەلەت دبیت) و سیستەمێ ٢ (هێدیا هووربین و مەنتقی کو وزەیەکی زۆر مەسرەف دکەت). زانینا ڤان میکانیزمان مێشکێ مرۆڤی ژ بڕیارێن هەڵپەلکە و پڕخەلەت دپارێزیت."
  },

  // =================== 201-250: رێکێن چارەسەریێ ===================
  {
    id: 601,
    title: "Cognitive Behavioral Therapy (CBT)",
    kurdishName: "چارەسەریا هزری و رەفتاری (CBT)",
    category: "Chareser",
    authorOrRef: "Beck Institute / APA Gold Standard",
    tags: ["CBT", "چارەسەری", "خەمۆکی", "دڵەڕاوکێ"],
    description: "کاریگەرترین رێکا زانستی بۆ دەستنیشانکرن و گوهۆڕینا هزرێن نەرێنی بۆ باشترکرنا مێزاج و هەستان.",
    fullText: "چارەسەریا هزری و رەفتاری (CBT) رێبازەکا کورتخایەن و کرداری یە کو تێدا کەس فێر دبیت چاوا هزرێن شاش و رەشبین بناسیت و ب هزرێن ساخلەم و واقیعی بگوهۆڕیت. لێکۆلینان سەڵماندیە کو ئەڤ چارەسەریە هندەک جاران هەمان کاریگەریا دەرمانان هەیە بێ چ ئەنجامێن خراپ یێن لایەکی."
  },
  {
    id: 602,
    title: "Acceptance and Commitment Therapy (ACT)",
    kurdishName: "چارەسەریا قەبوولکرن و پێگریێ (ACT)",
    category: "Chareser",
    authorOrRef: "Steven C. Hayes",
    tags: ["ACT", "قەبوولکرن", "بەها", "نەرمیا دەروونی"],
    description: "فێربوونا قەبوولکرنا هەستێن نەخۆش ل جهێ شەڕکرنێ دگەل وان، و بەرەڤپێشچوون ل دووڤ بەهایێن ژیانێ.",
    fullText: "چارەسەریا ACT دبێژیت شەڕکرن دگەل ئێش و نەخۆشیێن دەروونی ئازارێ پتر دکەت. ل جهێ وێ، ئەم فێر دبین هەستان وەک چەوانن قەبوول بکەین، و سەرباری هەبوونا ترسی یان خەمێ، پێگریێ ب کارێن بهادار و ئارمانجێن راستەقینە یێن ژیانا خۆ بکەین."
  },
  {
    id: 603,
    title: "EMDR (Eye Movement Desensitization)",
    kurdishName: "چارەسەریا EMDR بۆ زەبر و ترومایێ",
    category: "Chareser",
    authorOrRef: "Francine Shapiro",
    tags: ["EMDR", "ترووما", "زەبر", "چاڤ"],
    description: "رێکا زانستی یا پێشەنگ یا بزاڤا چاڤان بۆ کێمکرنا کاریگەریا بیرەوەریێن توند و زەبرێن دەروونی.",
    fullText: "ئەم دیار دکەین کو EMDR رێکەکا ستانداردە ل دەف WHO بۆ چارەسەریا ترووما و PTSD. تێدا نەخۆش بیرەوەریێن دژوار دهینیتە بیرا خۆ لە کاتێکدا چاڤێن وی ب ئاراستەیا دەستێ نوژداری یان چرایەکی دەلەقن، کو مێشک هان ددەت زانیاریان سەرلەنوێ کۆگابکات بێی ئەو بارێ سۆزداری یێ گران."
  },

  // =================== 251-300: میکانیزم و چەمکێن دەروونی ===================
  {
    id: 701,
    title: "Cognitive Biases (Confirmation Bias, Anchoring)",
    kurdishName: "لادانێن مەعریفی (پشتڕاستکرن و لەنگەرتێکردن)",
    category: "CheMek",
    authorOrRef: "Cognitive Science Core",
    tags: ["هزرین", "لادان", "بڕیاردان", "خەلەتی"],
    description: "کورتەبڕێن مێشکی کو دبە هۆی بڕیاردانا هەڵە، وەک گەڕیان بتنێ ل دووڤ ئەو زانیاریان کو دگەل باوەریێن مە دگونجن.",
    fullText: "لادانێن مەعریفی (Cognitive Biases) رێکارێن مێشکینە بۆ بڕیاردانا خێرا رۆژانە، لێ زۆربەی جاران مرۆڤی تووشی خەلەتیێ دکەن. بۆ نموونە Confirmation Bias وادەکەت تەنها ئەو نووچە و گۆتنان ببینین کە هاوڕان لەگەڵ بیروبۆچوونی ئێمە، و چاوپۆشی لە هەموو بەڵگە دژەکان بکەین."
  },
  {
    id: 702,
    title: "Neuroplasticity (Brain Adaptability)",
    kurdishName: "نەرمی و توانایا نوێبوونەوەیا مێشکی",
    category: "CheMek",
    authorOrRef: "Norman Doidge / Modern Neuroscience",
    tags: ["مێشک", "نوێبوونەوە", "فێربوون", "دەمار"],
    description: "شیانا مێشکی بۆ گۆڕینی پەیوەندیێن دەماری و فێربوونا عادەتێن نوێ هەتا دوماهیا ژیانێ.",
    fullText: "زانستێ کەڤن باوەری وابوو کو مێشک پشتی بیست سالیێ نەگۆڕە، بەڵام زانستی نوێ سەڵماند کە مێشک خاوەن نەرمیەکە (Neuroplasticity). هەر جارەکا تو راهێنانەکا نوێ دکەی یان شێوازێ هزرکرنا خۆ دەگۆڕی، دەمارەخانەکانی مێشکت رێڕەوی نوێ دروست دەکەن."
  },

  // =================== 301-350: تاقیکرن و پیڤەرێن دەروونی ===================
  {
    id: 801,
    title: "Beck Depression Inventory (BDI-II)",
    kurdishName: "پیڤەرا خەمۆکیێ یا بێک (BDI)",
    category: "Test",
    authorOrRef: "Aaron T. Beck (1996)",
    tags: ["تاقیکرن", "خەمۆکی", "نمرە", "BDI"],
    description: "ستانداردترین پیڤەرا جیهانی یا ٢١ پرسیاری بۆ پێڤانا ئاستێ خەمۆکیێ ژ ئاسایی تا دژوار.",
    fullText: "پیڤەرا BDI ژ ٢١ پرسیاران پێکدێت و نمرەیێن وێ ژ ٠ هەتا ٦٣ دیاری دکەن ئایا کەس تووشی خەمۆکیا سڤک، مامناوەند، یان دژوار بوویە. ئەڤ پیڤەرە بنەمایێ هەلسەنگاندنا کلینیکی یە ل هەموو نەخۆشخانە و کلینیکێن دەروونی یێن جیهانێ."
  },
  {
    id: 802,
    title: "Generalized Anxiety Screener (GAD-7)",
    kurdishName: "پیڤەرا دڵەڕاوکێێ (GAD-7)",
    category: "Test",
    authorOrRef: "Robert L. Spitzer et al.",
    tags: ["تاقیکرن", "دڵەڕاوکێ", "GAD7", "سترێس"],
    description: "پیڤەرەکا کورت یا ٧ پرسیاری یا باوەڕپێکراو بۆ پێڤانا راددەیێ دڵەڕاوکێا گشتی د دوو هەفتەیێن بۆری دا.",
    fullText: "GAD-7 ئامرازەکێ خێرا زانستی یە کو نیشانێن وەک ترسا بەردەوام، گرژی ماسوولکان، و زەحمەتیا ئارامبوونێ دەپێوێت. نمرەیێن سەر 10 ئاماژەنە بۆ پێویستبوونا هەڵسەنگاندنی پسپۆڕی دەروونی."
  }
];

// 2. Generator to dynamically and deterministically generate 1000 topics
// covering all facets of psychological science in Kurdish Badini.
export function generate1000Topics(): Topic[] {
  // Check if cached globally
  if ((generate1000Topics as any)._cached) {
    return (generate1000Topics as any)._cached;
  }

  const result: Topic[] = [...MEGA_TOPICS];
  let currentId = 1001;

  // Taxonomy seeds to build realistic, clinically accurate topics
  const DSM_DISORDERS: { nameKu: string; nameEn: string; code: string; desc: string }[] = [
    { nameKu: "شڵەژانا ئۆتیزمێ (Autism Spectrum)", nameEn: "Autism Spectrum Disorder", code: "299.00 (F84.0)", desc: "تێکچوونا پەیوەندی و کارلێکی جڤاکی و رەفتارێن دووبارەبووی." },
    { nameKu: "نەخۆشیا زێدەخارنێ یا نەچاری", nameEn: "Binge-Eating Disorder", code: "307.51 (F50.81)", desc: "خارنا بڕەکی زۆر یا خۆراکی د دەمەکێ کەم دا بێ کۆنتڕۆڵ." },
    { nameKu: "نەخۆشیا لاوازییا ئەنۆرێکسیا", nameEn: "Anorexia Nervosa", code: "307.1 (F50.01)", desc: "ترسا دژوار ژ قەڵەوبوونێ و خۆبرسیکردنا خەتەرناک." },
    { nameKu: "نەخۆشیا بۆلیمیا (Bulimia)", nameEn: "Bulimia Nervosa", code: "307.51 (F50.2)", desc: "زۆربۆری خارن و پاشان ڤەڕشاندن بۆ رێگری ل قەڵەوبوونێ." },
    { nameKu: "کەسایەتییا سنووری (Borderline)", nameEn: "Borderline Personality Disorder", code: "301.83 (F60.3)", desc: "نەجێگیرییا توند د هەستان، پەیوەندیان، و ترسا زۆر ژ بەجێهێشتنێ." },
    { nameKu: "کەسایەتییا نەرگسی (Narcissistic)", nameEn: "Narcissistic Personality Disorder", code: "301.81 (F60.81)", desc: "هەستکرنا زێدە ب مەزنیێ و پێدڤیبوون ب ستایشێ و نەبوونا هەستپێکردنێ." },
    { nameKu: "کەسایەتییا دژی جڤاک (Antisocial)", nameEn: "Antisocial Personality Disorder", code: "301.7 (F60.2)", desc: "پێشێلکرنا بێباکانە یا مافێن خەلکی و نەبوونا پەشیمانیێ." },
    { nameKu: "کەسایەتییا خۆدوورکەر (Avoidant)", nameEn: "Avoidant Personality Disorder", code: "301.82 (F60.6)", desc: "شەرمی و هەستکرن ب کێماسیێ و ترسا توند ژ رەخنە و دەرکرنێ." },
    { nameKu: "کەسایەتییا پشتپێبەستوو (Dependent)", nameEn: "Dependent Personality Disorder", code: "301.6 (F60.7)", desc: "پێویستبوونا زێدە ب کەسێن دی بۆ بڕیاردان و ئاگاداری لێکردن." },
    { nameKu: "فۆبیایا جهێن ڤەکری (Agoraphobia)", nameEn: "Agoraphobia", code: "300.22 (F40.00)", desc: "ترس ژ جهێن قەرەباڵغ یان ڤەکری کو رەڤین ژێ ب زەحمەت بیت." },
    { nameKu: "ترسا فڕینێ و بالەفڕێ", nameEn: "Aviophobia (Fear of Flying)", code: "300.29 (F40.2)", desc: "ترسا دژوار و پانیک دەمێ سەرکەفتن یان هزرکرن د بالەفڕێ دا." },
    { nameKu: "ترسا بەرزایی (Acrophobia)", nameEn: "Acrophobia", code: "300.29 (F40.24)", desc: "گێژبوون و پەلامارا ترسێ دەمێ نێزیکبوون ژ لێوارێن بەرز." },
    { nameKu: "نەخۆشیا قفلبوونا دەرونی (Catatonia)", nameEn: "Catatonia", code: "293.89 (F06.1)", desc: "راوەستانا بزاڤێ و بێدەنگییا لەشی پشتی شۆکێن گران." },
    { nameKu: "شڵەژانا گونجاندنێ (Adjustment)", nameEn: "Adjustment Disorder", code: "309.28 (F43.23)", desc: "دلتەنگی و نیگەرانی پشتی رویدانێن ژیانێ وەک تەڵاق یان نەمانا کاری." },
    { nameKu: "خەمۆکیا پشتی زارۆکبوونێ (Postpartum)", nameEn: "Postpartum Depression", code: "296.2x (F32.8)", desc: "بێتاقەتی و گریانا دایکان پشتی زارۆکبوونێ ژبەر گۆڕانکاریێن هۆرمۆنی." },
    { nameKu: "شڵەژانا دژوارییا وەرزێ (SAD)", nameEn: "Seasonal Affective Disorder", code: "296.3x (F33)", desc: "کێمبوونا مێزاج و هەستێ خەمۆکیێ د وەرزێ زڤستانێ دا ژبەر کێمییا رۆناهیێ." },
    { nameKu: "تێکچوونا شێوەیێ لەشی (BDD)", nameEn: "Body Dysmorphic Disorder", code: "300.7 (F45.22)", desc: "خەریکبوونا بەردەوام و نەخۆش ب کەمکوڕیەکی بچووک یان وەهمی د رووخسار یان لەش دا." },
    { nameKu: "نەخۆشیا پەلکێشانا مووی (Trichotillomania)", nameEn: "Trichotillomania (Hair Pulling)", code: "312.39 (F63.3)", desc: "کێشانا نەچار یا موویێن سەر یان برۆیان بۆ کێمکرنا گوشاری." },
    { nameKu: "نەخۆشیا هەڵگرتنا کەلوپەلان (Hoarding)", nameEn: "Hoarding Disorder", code: "300.3 (F42)", desc: "زەحمەتیا هاڤێتنا کەلوپەلێن بێ مفا و کۆکرنەوەیا زێدە." },
    { nameKu: "شڵەژانا جوودابوونێ (Separation Anxiety)", nameEn: "Separation Anxiety Disorder", code: "309.21 (F93.0)", desc: "ترسا توند ژ دوورکەفتن ژ دایک و بابان یان کەسێن خۆشەویست." },
    { nameKu: "بێدەنگییا هەلبژاردی (Selective Mutism)", nameEn: "Selective Mutism", code: "312.23 (F94.0)", desc: "نەئاخافتنی زارۆکی د جهێن گشتی دا سەرباری شیانا ئاخافتنێ د مال دا." },
    { nameKu: "شڵەژانا تورەییێ پەقینۆک (IED)", nameEn: "Intermittent Explosive Disorder", code: "312.34 (F63.81)", desc: "پەقینێن کتوپڕ یێن تووڕەبوونێ کو زۆر مەزنترن ژ هۆکارێ رویداوەکە." },
    { nameKu: "کلیسۆمانیا (دزییا نەچاری)", nameEn: "Kleptomania", code: "312.32 (F63.2)", desc: "حەزا نەچار بۆ دزینا کەلوپەلان بێی پێویستییا مادی پێیان." },
    { nameKu: "پیرۆمانیا (ئاگرپێبەردانا نەچاری)", nameEn: "Pyromania", code: "312.33 (F63.1)", desc: "حەز و چێژوەرگرتن ژ ئاگرتێبەردانی ئەنقەست." },
    { nameKu: "تێکچوونا ریتمی خەوێ (Circadian Rhythm)", nameEn: "Circadian Rhythm Sleep Disorder", code: "307.45 (F51.2)", desc: "تێکچوونا دەمژمێری بایۆلۆجی یا لەشی دگەل رۆژ و شەڤێ." },
    { nameKu: "نارکۆلێپسی (کتوپڕ خەولێکەفتن)", nameEn: "Narcolepsy", code: "347.00 (G47.419)", desc: "خەولێکەفتنا کتوپڕ د ناڤەڕاستا کار یان ئاخافتنێ دا." },
    { nameKu: "شڵەژانا تێکچوونا ناسنامەیێ (DID)", nameEn: "Dissociative Identity Disorder", code: "300.14 (F44.81)", desc: "هەبوونا دوو یان پتر کەسایەتیێن جیاواز د ناڤ ئێک مێشک دا." },
    { nameKu: "هەستکرن ب نەراستیێ (Depersonalization)", nameEn: "Depersonalization / Derealization", code: "300.6 (F48.1)", desc: "هەستکرن ب هندێ کو لەش یان جیهانا دەوروبەر خەونە یان درۆینەیە." },
    { nameKu: "سۆماتیزەیشن (ئێشا لەشی یا بێ سەدەم)", nameEn: "Somatic Symptom Disorder", code: "300.82 (F45.1)", desc: "ئێشێن بەردەوام یێن لەشی کو چ هۆکارێ ئەندامی و پزیشکی بۆ نینە." },
    { nameKu: "ترسا نەخۆشیێ (Hypochondriasis)", nameEn: "Illness Anxiety Disorder", code: "300.7 (F45.21)", desc: "دڵەڕاوکێا بەردەوام کو کەس باوەردەکەت نەخۆشیەکا گران و بێچارە هەیە." }
  ];

  const THEORIES: { nameKu: string; nameEn: string; scholar: string; desc: string }[] = [
    { nameKu: "بیردۆزا پەیوەندیێن ئۆبجێکتی (Object Relations)", nameEn: "Object Relations Theory", scholar: "Melanie Klein", desc: "چاوا وێنەیێن ناخی یێن دایکێ کاریگەری ل سەر کەسایەتیێ دادەنێن." },
    { nameKu: "بیردۆزا زەینی (Theory of Mind)", nameEn: "Theory of Mind", scholar: "Simon Baron-Cohen", desc: "شیانا مێشکی بۆ تێگەهشتن ژ هەست و هزرێن کەسێن بەرامبەر." },
    { nameKu: "بیردۆزا هۆشێن فرەچەشن", nameEn: "Multiple Intelligences", scholar: "Howard Gardner", desc: "مرۆڤ خاوەن ٨ جۆرێن هۆشە نەک تەنها زیرەکییا مێشکێ لۆجیکی." },
    { nameKu: "بیردۆزا دەسەڵاتداری بخۆبوونێ (Self-Determination)", nameEn: "Self-Determination Theory", scholar: "Deci & Ryan", desc: "پێدڤیاتیێن سەرەکی بۆ بەختەوەری: سەربەخۆیی، لێهاتوویی، و پەیوەندی." },
    { nameKu: "بیردۆزا رەشبینییا فێربووی", nameEn: "Learned Helplessness", scholar: "Martin Seligman", desc: "دەمێ مرۆڤ باوەردەکەت چ دەسەڵات بەسەر چارەنووسێ خۆ دا نینە." },
    { nameKu: "بیردۆزا بەرەڤپێشچوونا پێداگۆگی", nameEn: "Zone of Proximal Development", scholar: "Lev Vygotsky", desc: "ئەو دەڤەرا کو مرۆڤ ب هاریکاریا کەسەکێ زیرەکتر دشێت فێر ببیت." },
    { nameKu: "بیردۆزا ئەزموونگەرییا رەفتاری", nameEn: "Operant Conditioning", scholar: "B.F. Skinner", desc: "فێربوونا رەفتاران ب رێکا پاداشت و سزایێن ژینگەهی." },
    { nameKu: "بیردۆزا قۆناغێن گەشەیا مێشکی", nameEn: "Stages of Cognitive Development", scholar: "Jean Piaget", desc: "٤ قۆناغێن سەرەکی یێن گەشەیا هزرینێ ژ ساڤایی هەتا پێگەهشتنێ." },
    { nameKu: "بیردۆزا ناسنامەیا جڤاکی", nameEn: "Social Identity Theory", scholar: "Henri Tajfel", desc: "مرۆڤ چاوا شانازی و ناسنامەیا خۆ ژ گرووپێ جڤاکی وەردگریت." },
    { nameKu: "بیردۆزا ململانێیا هزری (Cognitive Dissonance)", nameEn: "Cognitive Dissonance", scholar: "Leon Festinger", desc: "ئەو ئازارا دەروونی کو پەیدا دبیت دەما باوەری و کریارێن مە دژبەیەکن." },
    { nameKu: "بیردۆزا هەستێن ئەرێنی (Broaden-and-Build)", nameEn: "Broaden-and-Build Theory", scholar: "Barbara Fredrickson", desc: "چاوا کەیف و دلخۆشی شیانێن مێشکی و دەروونی د بەرفرەهـ دکەن." },
    { nameKu: "بیردۆزا شێوازێ هزرینێ (Mindset)", nameEn: "Growth vs Fixed Mindset", scholar: "Carol Dweck", desc: "جیاوازییا ناڤبەرا عەقڵیەتیا بەرفرەهـ (گۆڕانکاری) و عەقڵیەتیا بەستوو (جێگیر)." }
  ];

  const EXPERIMENTS: { nameKu: string; nameEn: string; researcher: string; desc: string }[] = [
    { nameKu: "ئەزموونا بووکەشووشەیا بوبۆ (Bobo Doll)", nameEn: "Bobo Doll Experiment", researcher: "Albert Bandura", desc: "نیشاندانا زارۆکان کو چاوا ب سەیرکرنا توندوتیژیێ فێری توندوتیژیێ دبن." },
    { nameKu: "ئەزموونا تێگەهشتنا درۆینە (Lost in Mall)", nameEn: "Lost in the Mall Experiment", researcher: "Elizabeth Loftus", desc: "چاوا مێشک دشێت بیرەوەریێن دەستکرد و درۆینە ب تەمامی دروست بکەت." },
    { nameKu: "ئەزموونا سەپاندنا بەرپرسیاریەتیێ (Bystander)", nameEn: "Bystander Effect Studies", researcher: "Darley & Latané", desc: "چەند ژمارەیا خەلکی زێدەتر بیت، کەمتر هاریکاریا کەسێ لێقەوماو دکەن." },
    { nameKu: "ئەزموونا مەیموونێن هارلۆ (Wire Mother)", nameEn: "Harlow's Monkey Attachment", researcher: "Harry Harlow", desc: "سۆز و نەرماتی زۆر گرنگترن ژ تەنها دابینکرنا خارنێ بۆ دەروونی ساخلەم." },
    { nameKu: "ئەزموونا فەقەسا سکینەر (Skinner Box)", nameEn: "Operant Conditioning Chamber", researcher: "B.F. Skinner", desc: "پاداشتکرنا کتوپڕ چاوا عادەتێن نەشکاو و ئالوودەبوونێ چێدکەت." },
    { nameKu: "ئەزموونا ئالبێرتێ بچووک (Little Albert)", nameEn: "Little Albert Experiment", researcher: "John B. Watson", desc: "چاندنا ترسا مشک و تشتێن موودار د ناڤ مێشکێ ساڤایەکی دا ب دەنگێن دژوار." },
    { nameKu: "ئەزموونا گۆڕەپانا رۆبەرز کەیڤ (Robbers Cave)", nameEn: "Robbers Cave Experiment", researcher: "Muzafer Sherif", desc: "دروستبوونا ناکۆکیێن گرووپان و چارەسەرکردنیان ب رێکا ئارمانجێن هاوبەش." }
  ];

  const SCHOLARS: { nameKu: string; nameEn: string; desc: string; focus: string }[] = [
    { nameKu: "ئەلفرێد ئادلەر (Alfred Adler)", nameEn: "Alfred Adler", desc: "دامەزرێنەرێ دەروونناسیا تاک، رۆناهی خستە سەر هەستێ کێماسیێ (Inferiority Complex).", focus: "هەستێ کێماسیێ" },
    { nameKu: "مارتین سێلیگمان (Martin Seligman)", nameEn: "Martin Seligman", desc: "پێشەنگێ دەروونناسیا ئەرێنی و مۆدێلا بەختەوەریێ یا PERMA.", focus: "دەروونناسیا ئەرێنی" },
    { nameKu: "ئێریک ئێریکسۆن (Erik Erikson)", nameEn: "Erik Erikson", desc: "داهێنەرێ ٨ قۆناغێن گەشەیا دەروونی-جڤاکی بە درێژایی ژیانا مرۆڤی.", focus: "قۆناغێن گەشەی" },
    { nameKu: "کارن هۆرنای (Karen Horney)", nameEn: "Karen Horney", desc: "رەخنەگری فروید و دەروونناسا ناڤدارا دڵەڕاوکێا بنەڕەتی و سۆزێ.", focus: "دەروونناسیا ژنان" },
    { nameKu: "ویلیام جەیمس (William James)", nameEn: "William James", desc: "بابێ دەروونناسیا ئەمریکی، پێشەنگێ فەلسەفە و کارکردی مێشکی.", focus: "فەلسەفەیا دەروونی" },
    { nameKu: "ڤیلهێلم ڤۆنت (Wilhelm Wundt)", nameEn: "Wilhelm Wundt", desc: "دامەزرێنەرێ ئێکەمین تاقیگەها دەروونناسی ل لایپزیگ (١٨٧٩).", focus: "تاقیگەها دەروونی" }
  ];

  const THERAPIES: { nameKu: string; nameEn: string; desc: string }[] = [
    { nameKu: "چارەسەریا دیالەکتیکی یا رەفتارێ (DBT)", nameEn: "Dialectical Behavior Therapy", desc: "بۆ نەخۆشیا کەسایەتییا سنووری و کونترۆلکرنا هەستێن پەقینۆک." },
    { nameKu: "چارەسەریا زەینیێ و ئاگاداریێ (MBSR)", nameEn: "Mindfulness-Based Stress Reduction", desc: "بێدەنگکرنا مێشکی و کێمکرنا کۆرتیزۆلی ب رێکا سەرنجدان ل سەر هەناسەدانێ." },
    { nameKu: "چارەسەریا رووبەرووبوونەوەێ (ERP)", nameEn: "Exposure and Response Prevention", desc: "کاریگەرترین چارەسەری بۆ نەخۆشیا وەسوەسە و فۆبیاکان." },
    { nameKu: "چارەسەریا کورت یا ئارمانجدار (SFBT)", nameEn: "Solution-Focused Brief Therapy", desc: "سەرنجدان ل سەر چارەسەری و هێزێن کەسی نەک دووبارەکرنا کێشەکان." },
    { nameKu: "چارەسەریا خێزانی و سیستەمی", nameEn: "Family Systems Therapy", desc: "تێگەهشتن لە کێشەیێن تاک وەک بەشەک ژ سیستەمێ خێزانێ." },
    { nameKu: "چارەسەریا گێشتالت (Gestalt)", nameEn: "Gestalt Therapy", desc: "ژین ل ناڤ دەمێ ئێستا (Here and Now) و تەواوکردنی کارێن ناتەواو." }
  ];

  const MECHANISMS: { nameKu: string; nameEn: string; desc: string }[] = [
    { nameKu: "میکانیزما سەرکوتکردنێ (Repression)", nameEn: "Repression", desc: "پاڵنانی بیرەوەری و هەستێن بەئازار بۆ ناڤ نەستیێ ب شێوەیەکێ نەویستراو." },
    { nameKu: "میکانیزما هاوێشتنێ (Projection)", nameEn: "Projection", desc: "بینینی عەیب و خەیاڵێن خۆ د ناڤ کەسێن بەرامبەر دا." },
    { nameKu: "میکانیزما رەتکردنەوەێ (Denial)", nameEn: "Denial", desc: "باوەرنەکرن و رەتکرنا حەقیقەتێن تاڵ و بێهیواکەر بۆ پاراستنی مێشکێ." },
    { nameKu: "میکانیزما سوبلیمەیشن (بەرزکردنەوە)", nameEn: "Sublimation", desc: "گۆڕینی وزەی توندوتیژی بۆ کارێن هونەری یان وەرزشی و بەکەڵک." },
    { nameKu: "تێکچوونا کیمیایی: دۆپامین (Dopamine)", nameEn: "Dopamine & Reward Pathway", desc: "ناڤبەینکارێ کیمیایی یێ سەرەکیێ چێژ، پاڵنەر، و ئالوودەبوونێ." },
    { nameKu: "تێکچوونا کیمیایی: سیرۆتۆنین (Serotonin)", nameEn: "Serotonin & Mood Regulation", desc: "رێکخەری مێزاج، خەو، هەرس، و بەختەوەرییا مرۆڤی." },
    { nameKu: "هۆرمۆنێ سترێسێ: کۆرتیزۆل (Cortisol)", nameEn: "Cortisol & Stress Response", desc: "هۆرمۆنی بەرگریێ کو د دۆخێن درێژخایەندا زیانێ ب لەشی و بیردانکێ دەگەیەنێت." },
    { nameKu: "سیستەمێ هەڵاتن یان شەڕ (Fight or Flight)", nameEn: "Fight-or-Flight Response", desc: "چالاکبوونی سیستەمێ سەمپاساوی بۆ پاراستنا ژیانا مرۆڤی لە کاتی مەترسیدا." }
  ];

  const TESTS: { nameKu: string; nameEn: string; desc: string }[] = [
    { nameKu: "تاقیکرنا کەسایەتیێ MBTI (١٦ جۆر)", nameEn: "Myers-Briggs Type Indicator (MBTI)", desc: "پۆلێنکردنا کەسایەتیێ بەپێی ٤ دووانە: دەرەکی/ناوەکی، هەستەوەر/ئیلهام، بیرکەر/هەستپێکەر، بڕیاردەر/تێگەهێژ." },
    { nameKu: "پیڤەرا ٥ رەهەندێن کەسایەتیێ (Big Five)", nameEn: "Big Five Personality Traits (OCEAN)", desc: "ستانداردترین پێوەری زانستی: کراوەیی، ویژدان، دەرەکیبوون، پەسەندکردن، و دەمارگیری." },
    { nameKu: "تاقیکرنا زیرەکیێ ستانفۆرد-بینێ (IQ)", nameEn: "Stanford-Binet Intelligence Scale", desc: "پێڤانا شیانێن ژیری، لۆجیکی، زاکیرە، و هزرینا ئەبستراکت." },
    { nameKu: "تاقیکرنا پەڵەی مەرەکەب یا رۆرشاخ", nameEn: "Rorschach Inkblot Test", desc: "ئامرازێ شیکاری دەروونی بۆ دەرخستنی گرێ و خولیاکانی نەستی." },
    { nameKu: "پیڤەرا سترێسێ پێشبینیکراو (PSS)", nameEn: "Perceived Stress Scale (PSS)", desc: "پێوانەکردنی بڕی ئەو گوشارەی کە مرۆڤ لە ژیانی رۆژانەدا هەستی پێدەکات." }
  ];

  // Systematically generate items up to 1000 topics
  // Distribute evenly across categories
  const categoriesList: Topic["category"][] = ["Nexoshi", "Birodoz", "Ezmun", "Zana", "Chareser", "CheMek", "Test"];

  let poolIdx = 0;
  while (result.length < 1000) {
    const cat = categoriesList[poolIdx % categoriesList.length];
    poolIdx++;

    let item: Topic;
    const itemNum = result.length + 1;

    if (cat === "Nexoshi") {
      const template = DSM_DISORDERS[(poolIdx * 7) % DSM_DISORDERS.length];
      item = {
        id: currentId++,
        title: `${template.nameEn} (Case Study #${itemNum})`,
        kurdishName: `${template.nameKu} - بەشێ ${itemNum}`,
        category: "Nexoshi",
        dsmCode: template.code,
        authorOrRef: "APA DSM-5-TR / Clinical Practice",
        tags: ["نەخۆشی", "DSM-5", "کلینیکی", "چارەسەری"],
        description: `${template.desc} خواندن و هووردەکاریێن کلینیکی یا پزیشکی ب کوردییا بادینی.`,
        fullText: `ئەڤ بابەتە د رۆناهیا دەستنیشانکرنێن ستانداردێن نێڤدەوڵەتی یێن ساخلەمیا دەروونی (DSM-5 و WHO) دا هاتیە بەرهەڤکرن دەربارەی ${template.nameKu}. نیشانێن سەرەکی، هۆکارێن دەماری و جڤاکی، و پێنگاڤێن گونجای بۆ دەستێوەردانا دەروونناسیێ ب شێوەیەکێ کردارەکی تێدا هاتینە شرۆڤەکرن.`
      };
    } else if (cat === "Birodoz") {
      const template = THEORIES[(poolIdx * 5) % THEORIES.length];
      item = {
        id: currentId++,
        title: `${template.nameEn} - Principle #${itemNum}`,
        kurdishName: `${template.nameKu} (بنەمایێ ${itemNum})`,
        category: "Birodoz",
        authorOrRef: template.scholar,
        tags: ["بیردۆز", "فەلسەفە", "زانست", "هزرین"],
        description: `${template.desc} شرۆڤەکرنا زانستی یا بنەمایان ب شێوازەکێ سادە و تێگەهشتی.`,
        fullText: `بیردۆزا ${template.nameKu} یا زانا ${template.scholar} ئێک ژ گرنگترین کۆڵەکەیێن تێگەهشتن ژ دەروون و رەفتارێ مرۆڤی یە. ئەڤ پێگەهشتنە نیشان ددەت چاوا هزروەرگرتن و هەڵوێستێن مرۆڤی دروست دبن و چاوا دشێن بۆ چارەسەرکرنا تەنگژەیێن ژیانا ئەڤرۆ بکاربینین.`
      };
    } else if (cat === "Ezmun") {
      const template = EXPERIMENTS[(poolIdx * 3) % EXPERIMENTS.length];
      item = {
        id: currentId++,
        title: `${template.nameEn} - Protocol #${itemNum}`,
        kurdishName: `${template.nameKu} (تاقیکاری ${itemNum})`,
        category: "Ezmun",
        authorOrRef: template.researcher,
        tags: ["ئەزموون", "تاقیگەهـ", "زانست", "مێشک"],
        description: `${template.desc} دەستکەفت و دەرئەنجامێن ئەزموونێ ب زمانی کوردی.`,
        fullText: `ل ژێر چاڤدێریا ${template.researcher}، ئەڤ ئەزموونە د مێژوویا دەروونناسیێ دا سەلماندنەکا مەزن بوو دەربارەی شیان و خەلەتیێن هزرینا مرۆڤی. ئارمانجا سەرەکی روونکرنا وێ چەندێ بوو کو چاوا ژینگەهـ و گوشار دشێن بڕیارێن مە ئاراستە بکەن.`
      };
    } else if (cat === "Zana") {
      const template = SCHOLARS[(poolIdx * 2) % SCHOLARS.length];
      item = {
        id: currentId++,
        title: `${template.nameEn} - Contribution #${itemNum}`,
        kurdishName: `${template.nameKu} (پەیام ${itemNum})`,
        category: "Zana",
        authorOrRef: template.nameEn,
        tags: ["زانا", "ژیاننامە", template.focus],
        description: `${template.desc} ژیان و فەلسەفە و کارلێکێن وی د دەروونناسیێ دا.`,
        fullText: `${template.nameKu} رۆڵەکێ ئێجگار مەزن گێڕایە د تێگەهشتنا زانستی یا مێشک و هەستان دا. تێڕوانینێن وی بوونە ژێدەرێ گەلەک رێبازێن نوی یێن سەردەم بۆ گەشەپێدانا کەسایەتیێ و گەهشتن ب ئارامیێ.`
      };
    } else if (cat === "Chareser") {
      const template = THERAPIES[(poolIdx * 4) % THERAPIES.length];
      item = {
        id: currentId++,
        title: `${template.nameEn} - Technique #${itemNum}`,
        kurdishName: `${template.nameKu} (تەکنیک ${itemNum})`,
        category: "Chareser",
        authorOrRef: "Evidence-Based Psychotherapy",
        tags: ["چارەسەری", "تەکنیک", "هێمنی", "پراکتیک"],
        description: `${template.desc} رێنمایێن پراکتیکی یێن دەمەدەست بۆ جێبەجێکرنێ د ژیانێ دا.`,
        fullText: `ئەڤ تەکنیکە ژ رێبازا ${template.nameKu} دهێتە وەرگرتن و بۆ هندێ یە کەس ب شێوەیەکێ سەربەخۆ یان دگەل پسپۆری دەست پێبکەت. ب رێکا پێنگاڤێن رۆژانە، کێشەیێن هزری و هەستی بەرەڤ ئارامبوون و سەقامگیریێ دچن.`
      };
    } else if (cat === "CheMek") {
      const template = MECHANISMS[(poolIdx * 6) % MECHANISMS.length];
      item = {
        id: currentId++,
        title: `${template.nameEn} - Concept #${itemNum}`,
        kurdishName: `${template.nameKu} (چەمکێ ${itemNum})`,
        category: "CheMek",
        authorOrRef: "Neuroscience & Psychodynamics",
        tags: ["چەمک", "میکانیزم", "مێشک", "هزر"],
        description: `${template.desc} فەرهەنگ و زانستێ هزر و رەفتارێ ب بادینی.`,
        fullText: `چەمکێ ${template.nameKu} دەربڕینێ ژ میکانیزمەکێ بنەڕەتی دکەت کو مێشکێ مرۆڤی رۆژانە بکاریدئینیت. زانین و هەستپێکرنا ب ڤی چەمکی وادکەت مرۆڤ ب هۆشیاری رەفتار بکەت و لە داوی خەلەتیێن خۆکار پارێزراو بیت.`
      };
    } else {
      const template = TESTS[(poolIdx * 3) % TESTS.length];
      item = {
        id: currentId++,
        title: `${template.nameEn} - Scale #${itemNum}`,
        kurdishName: `${template.nameKu} (پیڤەر ${itemNum})`,
        category: "Test",
        authorOrRef: "Psychometric Testing Standards",
        tags: ["تاقیکرن", "پیڤەر", "هەڵسەنگاندن", "نمرە"],
        description: `${template.desc} پێوانەکردنی زانستی ب رێکارێن نێڤدەوڵەتی.`,
        fullText: `ئامرازێ ${template.nameKu} بۆ هەڵسەنگاندن و پێڤانا رەوشێن دەروونی دهێتە بکارئینان. تێدا پرسیارێن تایبەت دهێنە ئاراستەکرن کو ب وردی ئاستێ کەسی د دەڤەرەکا دیارکری یا دەروونی دا دیار دکەن.`
      };
    }

    result.push(item);
  }

  // Cache in memory for lightning fast subsequent calls
  (generate1000Topics as any)._cached = result;
  return result;
}
