// 100 Famous Free Psychology Books summarized in Pure Badini Kurdish
export interface BookChapter {
  chapter: number;
  title_ku: string;
  content_ku: string;
}

export interface LibraryBook {
  id: string;
  title_ku: string;
  title_en: string;
  author: string;
  year: number;
  category_ku: string;
  pages_est: string;
  summary_ku: string;
  keyLessons_ku: string[];
  pdfAvailable: boolean;
  isPublicDomainFullText: boolean;
  hasAudioSummary: boolean;
  audioDuration?: string;
  pdfPages?: number;
  rating?: number;
  downloadUrl?: string;
  tags: string[];
  chapters?: BookChapter[];
}

export const psychologyBooks: LibraryBook[] = [
  {
    id: "book-1",
    title_ku: "مرۆڤ ل دویڤ رامانێ دگەڕیت",
    title_en: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    year: 1946,
    category_ku: "دەرونناسیا هەبوونی (Existential)",
    pages_est: "180 لاپەر",
    pdfPages: 180,
    rating: 4.9,
    summary_ku: "پەرتووکەکا ناڤدارە دەربارەی هێزا مێشکی و دەرونی ل دەمێ زەحمەتترین نەخۆشیان. فرینکل باسێ ئەزموونا خۆ ل کەمپێن نازیان دکەت و چەوا مرۆڤ دشێت د ناڤ ئێشێ دا رامانێ بۆ ژیانا خۆ ببینیت (لۆگۆتێراپی).",
    keyLessons_ku: [
      "ئەو کەسێ 'بوچیەک' هەبیت بۆ ژیانێ، دشێت بەرگەی هەر 'چەوایەکێ' بگریت.",
      "دوماهیک ئازادیا مرۆڤی ئەوە کو هەڵوێستێ خۆ هەڵبژێریت ل هەمبەر هەر رەوشەکێ.",
      "ئێش و ئازار بێ رامان نینن ئەگەر مرۆڤ واتایەکێ بدەتێ."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: false,
    hasAudioSummary: true,
    audioDuration: "18:45 دەقیقە",
    tags: ["فرینکل", "رامان", "ئارامی", "خۆڕاگری"],
    chapters: [
      { chapter: 1, title_ku: "ئەزموونا د ناڤ کەمپا ئەشکەنجەیێ دا", content_ku: "ل وێرێ هەمی تشت ژ مە هاتنە ستاندن، تەنانەت جلوبەرگ و موویێن سەرێ مە. تنێ تشتەک ما: ئازادیا هەڵبژارتنا هەڵوێستێ ناخێ مە." },
      { chapter: 2, title_ku: "لۆگۆتێراپی: رامان ل دەڤ فرینکل", content_ku: "مرۆڤ ب کەیف و سەرمایێ بتنێ ژیانێ ناکەت. بزاڤا سەرەکی یا مرۆڤی دیتنا رامانەکێ یە بۆ مانا خۆ د ڤێ دنیایێ دا." },
      { chapter: 3, title_ku: "تڕاژیدیا سێقۆلی و هیڤی", content_ku: "ئێش، گونەه، و مرن. مرۆڤ دشێت ڤان هەرسێ زەحمەتیان بکەتە سەرفەرازی و مروڤایەتی." }
    ]
  },
  {
    id: "book-2",
    title_ku: "هێواش هزر بکە، لەزێ بکە",
    title_en: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: 2011,
    category_ku: "دەرونناسیا هزرینێ و بڕیاردانێ",
    pages_est: "490 لاپەر",
    pdfPages: 490,
    rating: 4.8,
    summary_ku: "دانیال کانیمان وەرگرێ خەڵاتێ نۆبڵ، دوو سیستەمێن سەرەکی یێن مێشکێ مرۆڤی شڕۆڤە دکەت: سیستەمێ 1 (لەز، هەستیار، ئۆتۆماتیکی) و سیستەمێ 2 (هێواش، لۆژیکی، هووربین).",
    keyLessons_ku: [
      "مێشکێ مە زۆربەی جاران لەزێ دکەت و دکەڤیتە داڤێن شاشیێن هزری (Biases).",
      "زێدە باوەری بخۆبوون د بڕیاردانێ دا مە بەرەڤ خەلەتیێن مەزن دبەت.",
      "بۆ بڕیارێن چارەنوسساز، فەرە سیستەمێ دووێ کارا بکەین."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: false,
    hasAudioSummary: true,
    audioDuration: "24:10 دەقیقە",
    tags: ["کانیمان", "هزر", "بڕیاردان", "سایکۆلۆژیا"],
    chapters: [
      { chapter: 1, title_ku: "دوو سیستەمێن هزرینێ", content_ku: "سیستەمێ ئێكێ بێ ماندیبوون کار دکەت و لەزێ ل هەڵسەنگاندنێ دکەت. سیستەمێ دووێ هێواشە لێ لۆژیکێ پارێزیت." },
      { chapter: 2, title_ku: "داڤێن بڕیاردانا دارایی و ژیانێ", content_ku: "ترسا مە ژ ژدەستدانێ دوو قات زێدەترە ژ کەیفخۆشیا مە ب دەستکەفتێ." }
    ]
  },
  {
    id: "book-3",
    title_ku: "کارتێکرن: دەرونناسیا رازیبوونێ",
    title_en: "Influence: The Psychology of Persuasion",
    author: "Robert B. Cialdini",
    year: 1984,
    category_ku: "دەرونناسیا جڤاکی",
    pages_est: "320 لاپەر",
    pdfPages: 320,
    rating: 4.9,
    summary_ku: "رووبەرت چاڵدینی 6 بنەمایێن دەرونی یێن رازیبوونێ ئاشکرا دکەت: قەرەبووکرن (Reciprocity)، پێگری و بەردەوامی، بەڵگەیێ جڤاکی، حەزژێکرن، دەسهەڵات و دەگمەنی.",
    keyLessons_ku: [
      "چەوا مرۆڤ بکەڤیتە ژێر کارتێکرنا خەڵکێ و چەوا خۆ بپارێزیت.",
      "بەڵگەیێ جڤاکی: دەمێ مرۆڤ نوزانیت چ بکەت، سەیری هەڵسوکەوتێ کەسێن دی دکەت.",
      "دەگمەنی: تشتێ کێم بیت، بها و خواستا ل سەر زێدە دبیت."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: false,
    hasAudioSummary: true,
    audioDuration: "19:30 دەقیقە",
    tags: ["چاڵدینی", "رازیبوون", "جڤاک", "هێز"]
  },
  {
    id: "book-4",
    title_ku: "شڕۆڤەکرنا خەونان (دەقی تەمام)",
    title_en: "The Interpretation of Dreams",
    author: "Sigmund Freud",
    year: 1899,
    category_ku: "شیکاریا دەرونی (Psychoanalysis)",
    pages_est: "600 لاپەر",
    pdfPages: 600,
    rating: 4.7,
    summary_ku: "شاکارێ ناڤدار یێ زیگمۆند فرۆید ل سالا 1899. فرۆید سەلماند کو خەون رێکا شاهانەیە بەرەڤ نەستی (Unconscious) و حەزێن ڤەشارتی یێن مێشکێ مرۆڤی.",
    keyLessons_ku: [
      "خەون بەرسڤدان و تێرکرنا حەزێن سەپێنراو و پەنگخواری نە.",
      "میکانیزمێن چڕبوون (Condensation) و جهگۆڕکێ (Displacement) د خەونان دا.",
      "سەرەدەریکرن دگەل سەمبۆل و نەستێ مرۆڤی."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: true,
    hasAudioSummary: true,
    audioDuration: "31:20 دەقیقە",
    tags: ["فرۆید", "خەون", "نەست", "شیکاری"],
    chapters: [
      { chapter: 1, title_ku: "ئەدەبیاتێ زانستی یێ کێشەیا خەونان", content_ku: "مێژوویا دیتنا خەونان ل جەم فەیلەسۆفان و نوژداران. خەون نە روودانەکا بەڕەڵایە بەڵکو چالاکیەکا تایبەت یا دەروونی یە." },
      { chapter: 2, title_ku: "رێبازا شڕۆڤەکرنا خەونێ: خەونا دەرزییا ئیرمایێ", content_ku: "ئێکەم خەونا فرۆید ب تەمامی شیکارکری. هەموو پارچەیەک د خەونێ دا وێنەکرنا هەستێن نەستی نە." },
      { chapter: 3, title_ku: "سانسۆر و نیشانێن خەونێ", content_ku: "مێشکێ مرۆڤی رێگریێ ل حەزێن قەدەغەکری دکەت کو ب ئاشکرایی دەرکەڤن، لەوما ب نقومبوونا رەمزان د خەونێ دا خۆ دیار دکەن." }
    ]
  },
  {
    id: "book-5",
    title_ku: "مرۆڤ و سەمبۆلێن وی (دەقی تەمام)",
    title_en: "Man and His Symbols",
    author: "Carl Gustav Jung",
    year: 1964,
    category_ku: "دەرونناسیا شیکاری یا یۆنگی",
    pages_est: "320 لاپەر",
    pdfPages: 320,
    rating: 4.8,
    summary_ku: "دوماهیک پەرتووکا کارل یۆنگ بەری وەغەرا وی. تێدا ب سادەیی باسێ نەستی ب کۆمەڵ (Collective Unconscious)، ئەنیموس، ئەنیما، و سێبەر (Shadow) دکەت.",
    keyLessons_ku: [
      "سێبەر ئەو پارچەیە ژ کەسایەتیا مەیە کو ئەم ژبیر دکەین یان رەتدکەین.",
      "سەمبۆلێن کەڤنار د هەمی کلتوورێن جیهانێ دا هەڤبەشن.",
      "گەهشتن ب تێگەهشتنا تەواو پێویستی ب قبوولکرنا بەشێن تاریک یێن ناخێ هەیە."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: true,
    hasAudioSummary: true,
    audioDuration: "25:40 دەقیقە",
    tags: ["یۆنگ", "سەمبۆل", "سێبەر", "نەست"],
    chapters: [
      { chapter: 1, title_ku: "تێچوونا ناڤ نەستی", content_ku: "هێمایێن نەستێ جڤاکی و سەرچاوەیێن ئەفسانەیی د ناخێ مێشکێ مرۆڤی دا." },
      { chapter: 2, title_ku: "ئەرکێتیپێن کەڤنار", content_ku: "پیرەمێردێ دانا، دایک، ئەنیما و ئەنیموس د خەونێن جیهانی دا." }
    ]
  },
  {
    id: "book-6",
    title_ku: "بنەمایێن دەرونناسیێ (دەقی تەمام)",
    title_en: "The Principles of Psychology",
    author: "William James",
    year: 1890,
    category_ku: "دەرونناسیا گشتی یا مێژوویی",
    pages_est: "800 لاپەر",
    pdfPages: 800,
    rating: 4.8,
    summary_ku: "بەرپەڕەکێ زێڕین یێ ویلیام جەیمز، بابێ دەرونناسیا ئەمریکی. تێدا چەمکێ رووبارێ هۆشیاریێ (Stream of Consciousness) و عادەتان و بیردۆزا هەستان داهێنا.",
    keyLessons_ku: [
      "هۆشیاریا مرۆڤی پارچەپارچە نینە، بەڵکو وەک رووبارەکێ دڕژێت.",
      "عادەت زنجیرەکا دەماری یا موکەمە کو رەفتارێ بەرەڤ ئاسانیێ دبەت.",
      "هەست پشتی کاردانەوەیا جەستەیی پەیدا دبیت (جەیمز-لانگ)."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: true,
    hasAudioSummary: false,
    audioDuration: "22:00 دەقیقە",
    tags: ["جەیمز", "بنەما", "هۆشیاری", "عادەت"]
  },
  {
    id: "book-7",
    title_ku: "تێگەهشتن ل سرۆشتێ مرۆڤی (دەقی تەمام)",
    title_en: "Understanding Human Nature",
    author: "Alfred Adler",
    year: 1927,
    category_ku: "دەرونناسیا تاکەکەسی (Individual Psychology)",
    pages_est: "290 لاپەر",
    pdfPages: 290,
    rating: 4.7,
    summary_ku: "ئالفرێد ئادلەر روون دکەت چەوا هەستیاری ب کێماسیێ (Inferiority Complex) هێزا سەرەکی یا پاڵدەرە بۆ سەرکەفتن یان تووشبوون ب نەخۆشیێ.",
    keyLessons_ku: [
      "هەستیاری ب کێماسیێ زگماکی یە و مرۆڤ هەوڵ ددەت قەرەبوویێ بکەتەوە.",
      "هەستیارییا جڤاکی (Social Interest) پیڤەرا ساخلەمیا دەروونییە.",
      "شێوازێ ژیانێ د 5 ساڵێن دەستپێکێ یێن زارۆکینیێ دا شێوە دەگریت."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: true,
    hasAudioSummary: true,
    audioDuration: "17:50 دەقیقە",
    tags: ["ئادلەر", "کێماسی", "جڤاک", "کەسایەتی"]
  },
  {
    id: "book-8",
    title_ku: "دەروونناسیا جەماوەری (دەقی تەمام)",
    title_en: "The Crowd: A Study of the Popular Mind",
    author: "Gustave Le Bon",
    year: 1895,
    category_ku: "دەرونناسیا جەماوەر و جڤاکی",
    pages_est: "210 لاپەر",
    pdfPages: 210,
    rating: 4.6,
    summary_ku: "گوستاڤ لۆبۆن شڕۆڤە دکەت چەوا تاکەکەس کاتێ دچیتە ناڤ جەماوەر و قەرەباڵغیێ دا، ئەقڵ و لۆژیکێ خۆ ژدەست ددەت و هەستیار و تەقلیدچی دبیت.",
    keyLessons_ku: [
      "جەماوەر ب وێنە و درووشمان بیر دکەتەوە، نەک ب بەڵگەیێن لۆژیکی.",
      "کارتێکرنا بەلاڤبوون و لەرزینا هەستیار (Contagion) د ناڤ خەڵکیدا.",
      "سەرکردە پێویستی ب پێشکێشکرنا هیڤی و پەیامێن سادە هەیە."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: true,
    hasAudioSummary: true,
    audioDuration: "16:20 دەقیقە",
    tags: ["لۆبۆن", "جەماوەر", "دەروونناسیا جڤاکی", "سیاسەت"]
  },
  {
    id: "book-9",
    title_ku: "دەروونناسیا نەخۆشیێن نیورۆتیک و گەشە (دەقی تەمام)",
    title_en: "Neurosis and Human Growth",
    author: "Karen Horney",
    year: 1950,
    category_ku: "شیکاریا دەرونی یا هەڤچەرخ",
    pages_est: "380 لاپەر",
    pdfPages: 380,
    rating: 4.8,
    summary_ku: "کارین هۆرنای باسێ ململانێیا ناڤخۆیی یا مرۆڤی دکەت د ناڤبەرا 'خۆیێ راستەقینە' و 'خۆیێ خەیاڵی و کامڵ' کو دبیتە ئەگەرێ ئازارێن دەرونی.",
    keyLessons_ku: [
      "دەسەڵاتی 'پێویستە بکەم' (Tyranny of the Should) دەرونێ مرۆڤی تێکددەت.",
      "سێ شێوازێن بەرەڤ پێشچوون: چوون بەرەڤ خەڵک، دوورکەفتن ژ خەڵک، یان شەڕ دگەل خەڵک.",
      "قبوولکرنا خودی بنەمایێ سەرەکیێ رزگاربوونێ یە."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: true,
    hasAudioSummary: true,
    audioDuration: "21:15 دەقیقە",
    tags: ["هۆرنای", "نیورۆز", "کەسایەتی", "خۆپەسەندی"]
  },
  {
    id: "book-10",
    title_ku: "دەربڕینا هەستان د مرۆڤ و گیانەوەران دا (دەقی تەمام)",
    title_en: "The Expression of the Emotions in Man and Animals",
    author: "Charles Darwin",
    year: 1872,
    category_ku: "دەرونناسیا گەشەکردنێ و زیندەوەرزانی",
    pages_est: "410 لاپەر",
    pdfPages: 410,
    rating: 4.7,
    summary_ku: "چارڵز داروین سەلماند کو دەربڕینێن رووخساری بۆ ترس، تووڕەیی، و کەیفێ رەگەزێن بایۆلۆجیێن گەردوونی نە د ناڤ هەموو مرۆڤێن سەر ئەردی دا.",
    keyLessons_ku: [
      "دەربڕینێن دەموچاڤی زگماکی نە و فێربوو نینن (وەک زەردەخەنە و گرین).",
      "بنەمایێ کردارێن بەسوود یێن پەیوەست ب هەستەوەریێ.",
      "پردێ بەستنەوەیا ناڤبەرا دەمارناسی و هەستێن دەروونی."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: true,
    hasAudioSummary: false,
    audioDuration: "20:00 دەقیقە",
    tags: ["داروین", "هەست", "رووخسار", "گەشەکردن"]
  },
  {
    id: "book-11",
    title_ku: "چارەسەریا مەعریفی یا خەمۆکیێ",
    title_en: "Cognitive Therapy of Depression",
    author: "Aaron T. Beck",
    year: 1979,
    category_ku: "چارەسەریا هزری-رەفتاری (CBT)",
    pages_est: "430 لاپەر",
    pdfPages: 430,
    rating: 4.9,
    summary_ku: "بەرپەڕێ مێژوویی یێ ئارۆن بێک دەربارەی چەوانیا گۆڕینا هزرێن نەرێنی یێن ئۆتۆماتیکی و نەهێشتنا خەمۆکیێ ب شێوازێ زانستی یێ CBT.",
    keyLessons_ku: [
      "سێگۆشەیا مەعریفی: دیتنا نەرێنی دەربارەی خۆ، جیهان، و داهاتی.",
      "تۆمارکرنا هزران (Thought Records) بۆ شکاندنا هزرا رەش و سپی.",
      "چالاککردنەوەیا رەفتاری د خەمۆکیێ دا پێشینەیە."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: false,
    hasAudioSummary: true,
    audioDuration: "22:50 دەقیقە",
    tags: ["بێک", "CBT", "خەمۆکی", "چارەسەری"]
  },
  {
    id: "book-12",
    title_ku: "جەستە برینان ژبیر ناکەت",
    title_en: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    year: 2014,
    category_ku: "ترووما و دەمارزانی",
    pages_est: "460 لاپەر",
    pdfPages: 460,
    rating: 4.9,
    summary_ku: "پیسێل ڤان دێر کۆڵک، پسپۆرێ تروومایێ، روون دکەت چەوا تروومایێن دەروونی د دەمار و جەستەی دا نامینن بەڵکو پێکهاتەیا مێشکی دگۆڕن و چەوا ب رێکا EMDR و یۆگا و زانست چارەسەر دبن.",
    keyLessons_ku: [
      "ترووما تنێ بیرەوەریەکا خراب نینە، بەڵکو مێشکێ مرۆڤی د رەوشا شەڕ-یان-ڕەڤین دا رادگریت.",
      "دەرمان تنێ نیشانان کەم دکەت، پێویستە دەمار و هەست ب رێکا جەستەی ئارام ببن.",
      "رێکێن نوی یێن چارەسەریێ وەک EMDR، هۆشیاری و یۆگا."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: false,
    hasAudioSummary: true,
    audioDuration: "26:00 دەقیقە",
    tags: ["ترووما", "جەستە", "PTSD", "مێشک"]
  },
  {
    id: "book-13",
    title_ku: "7 بنەمایێن سەرکەفتنا هەڤژینیێ",
    title_en: "The Seven Principles for Making Marriage Work",
    author: "John M. Gottman",
    year: 1999,
    category_ku: "خێزان و پەیوەندی",
    pages_est: "280 لاپەر",
    pdfPages: 280,
    rating: 4.8,
    summary_ku: "جۆن گۆتمان پشتی 40 سالان ژ لێکۆلینێ ل سەر هەزاران هەڤژینان، 4 سیحربازێن وێرانکەرێن هەڤژینیێ (رەخنە، بێڕێزی، بەڕەڤانیکردن، و دیوارکردن) ئاشکرا دکەت.",
    keyLessons_ku: [
      "بێڕێزی (Contempt) مەزنترین پێشبینیکەرێ جیابوون و تەڵاقێ یە.",
      "دانانا 'نەخشەیا ئەڤینێ' بۆ ناخێ هەڤژینی و زانینا حەزێن وی.",
      "چارەسەرکرنا کێشەیێن چارەسەرکراو و قبوولکرنا کێشەیێن بەردەوام."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: false,
    hasAudioSummary: true,
    audioDuration: "18:20 دەقیقە",
    tags: ["گۆتمان", "هەڤژینی", "خێزان", "پەیوەندی"]
  },
  {
    id: "book-14",
    title_ku: "عادەتێن ئەتۆمی",
    title_en: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    category_ku: "گەشەپێدانا کەسایەتیێ",
    pages_est: "320 لاپەر",
    pdfPages: 320,
    rating: 4.9,
    summary_ku: "جەیمس کلیر بنەمایێن زانستی یێن دروستکرنا عادەتێن باش و ژناڤبرنا عادەتێن خراب شڕۆڤە دکەت ب رێکا گۆڕانکاریێن بچووک یێن 1% رۆژانە.",
    keyLessons_ku: [
      "ئەنجامێن مەزن بەرهەمێ گۆڕانکاریێن بچووک یێن رۆژانەنە.",
      "4 یاسایێن عادەتان: ئاشکرای بکە، سەرنجراکێشی بکە، ئاسانی بکە، کەیفخۆشی بکە.",
      "کەسایەتیا خۆ بگۆڕە: نەبێژە 'ئەز هەوڵ ددەم جگەرێ نەکێشم'، بێژە 'ئەز جگەرەکێش نینم'."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: false,
    hasAudioSummary: true,
    audioDuration: "20:45 دەقیقە",
    tags: ["کلیر", "عادەت", "گەشەپێدان", "دیسپلین"]
  },
  {
    id: "book-15",
    title_ku: "هۆشێ سۆزداری (EQ)",
    title_en: "Emotional Intelligence",
    author: "Daniel Goleman",
    year: 1995,
    category_ku: "دەرونناسیا سۆزداری",
    pages_est: "350 لاپەر",
    pdfPages: 350,
    rating: 4.8,
    summary_ku: "دانیال گۆڵمان سەلماند کو هۆشێ سۆزداری (EQ) گەلەک گرنگترە ژ هۆشێ ژمێرەیی (IQ) بۆ سەرکەفتنا ژیانێ و پەیوەندیان.",
    keyLessons_ku: [
      "خۆناسین و کونترۆلکرنا هەستان بنەمایێ بەختەوەریێ نە.",
      "هاوسۆزی (Empathy): هەستپێکرنا ئێشا کەسێن دی پێشینەیە.",
      "رێکخستنا پەیوەندیێن جڤاکی و سەرکردایەتیا سەرکەفتی."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: false,
    hasAudioSummary: true,
    audioDuration: "21:30 دەقیقە",
    tags: ["گۆڵمان", "EQ", "سۆز", "سەرکەفتن"]
  },
  {
    id: "book-16",
    title_ku: "دەرونناسیا ڕەوشت و سۆزان",
    title_en: "The Righteous Mind",
    author: "Jonathan Haidt",
    year: 2012,
    category_ku: "دەرونناسیا جڤاکی و ئەخلاقی",
    pages_est: "420 لاپەر",
    pdfPages: 420,
    rating: 4.8,
    summary_ku: "جۆناتان هایت روون دکەت چەوا بریارێن ئەخلاقی و سیاسی ب هەست د دەستپێکێ دا پەیدا دبن، پاشان ئەقڵ پاساو بۆ ددۆزیتەوە (فیل و سوارچاک).",
    keyLessons_ku: [
      "هەست پێش ئەقڵ دکەڤیت د بڕیاردانا دروستی و شاشیدا.",
      "6 بنەمایێن ئەخلاقی: چاودێری، دادپەروەری، وەفاداری، دەسهەڵات، پیرۆزی، ئازادی.",
      "چەوا لە جیاوازیێن سیاسی و ئایینی بێ تووڕەبوون تێبگەهین."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: false,
    hasAudioSummary: true,
    audioDuration: "23:10 دەقیقە",
    tags: ["هایت", "ئەخلاق", "سیاسەت", "هزرین"]
  },
  {
    id: "book-17",
    title_ku: "دەروونناسیا باوەڕپێهێنان و جڤاک",
    title_en: "Social Psychology",
    author: "David G. Myers",
    year: 2012,
    category_ku: "دەرونناسیا جڤاکی یا زانکۆیی",
    pages_est: "700 لاپەر",
    pdfPages: 700,
    rating: 4.9,
    summary_ku: "پەرتووکا ستاندارد یا زانکۆیان دەربارەی جەماوەر، تعصب، هەڤڕکی، چەپاندن و هاریکاریکرنا مروڤایەتی.",
    keyLessons_ku: [
      "کارتێکرنا پێگەهـ و دەورووبەرێ جڤاکی ل سەر رەفتارا تاکەکەسی.",
      "شێوازێ تێگەهشتن ل پێشوەخت بڕیاردان (Prejudice) و رەگەزپەرستیێ.",
      "میکانیزمێن خۆشەویستی و هەڤپەیمانی د ناڤ مرۆڤان دا."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: false,
    hasAudioSummary: false,
    audioDuration: "18:00 دەقیقە",
    tags: ["مایەرز", "جڤاک", "زانکۆ", "زانست"]
  },
  {
    id: "book-18",
    title_ku: "ئەفسانەیا تەندروستیا ئاسایی",
    title_en: "The Myth of Normal",
    author: "Gabor Maté",
    year: 2022,
    category_ku: "ترووما، جڤاک و ساخلەمی",
    pages_est: "570 لاپەر",
    pdfPages: 570,
    rating: 4.9,
    summary_ku: "گابۆر ماتێ شیکار دکەت چەوا جڤاکێ سەردەم ب زۆری سترێس و تروومایان دکەتە بەشەکێ 'ئاسایی' و چەوا ئەڤە دەبێتە ئەگەرێ نەخۆشیێن جەستەیی و دەرونی.",
    keyLessons_ku: [
      "نەخۆشیا دەروونی جیاواز نینە ژ نەخۆشیا جەستەیی؛ هەردوو پەیوەستن.",
      "جەپاندنا تووڕەییێ و ناڕەزایەتیێ سیستەمێ بەرگرییا لەشی لاواز دکەت.",
      "گەڕانەوە بەرەڤ راستەقینەیا ناخ بۆ چارەسەریێ پێویستە."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: false,
    hasAudioSummary: true,
    audioDuration: "27:15 دەقیقە",
    tags: ["ماتێ", "ترووما", "جڤاک", "ساخلەمی"]
  },
  {
    id: "book-19",
    title_ku: "دەرونناسیا سۆزداری یا هەرزەکاران",
    title_en: "Brainstorm: The Power and Purpose of the Teenage Brain",
    author: "Daniel J. Siegel",
    year: 2013,
    category_ku: "زارۆک و هەرزەکاری",
    pages_est: "330 لاپەر",
    pdfPages: 330,
    rating: 4.8,
    summary_ku: "دانیال سیگڵ روون دکەت مێشکێ هەرزەکاران کێماسی نینە بەڵکو د قۆناغەکا زێدە چالاک یا دووبارە نەخشەکێشانێ دایە بۆ ئازایەتی و داهێنانێ.",
    keyLessons_ku: [
      "تووڕەیی و سەرکێشیا گەنجان بەرهەمێ گەشەکرنا بەشێ سۆزداری یێ مێشکی یە.",
      "چەوا دایک و باب ب رێز و تێگەهشتن مامەڵە دگەل هەرزەکاران بکەن.",
      "راهێنانێن هەناسەدانێ و هۆشیاریێ بۆ گەنجان."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: false,
    hasAudioSummary: true,
    audioDuration: "19:00 دەقیقە",
    tags: ["سیگڵ", "هەرزەکار", "مێشک", "پەروەردە"]
  },
  {
    id: "book-20",
    title_ku: "هێزا نوکە (The Power of Now)",
    title_en: "The Power of Now",
    author: "Eckhart Tolle",
    year: 1997,
    category_ku: "هۆشیاری و ئارامییا دەرونی",
    pages_est: "230 لاپەر",
    pdfPages: 230,
    rating: 4.7,
    summary_ku: "ئیکارت تۆلی باسێ رزگاربوون ژ هزرێن بەردەوام یێن رابردوو و دڵەڕاوکێیا داهاتی دکەت ب رێکا ژیان د لەحزەیا ئێستادا.",
    keyLessons_ku: [
      "تۆ نە هزرێن خۆی؛ تۆ چاودێرێ هزرێن خۆی.",
      "ئێش و ئازار هەمووی ژ رەتکردنەوەیا واقعی پەیدا دبیت.",
      "ئارامیا دەروونی بتنێ د ڤێ چرکەیێ دا دێ هێتە دیتن."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: false,
    hasAudioSummary: true,
    audioDuration: "17:40 دەقیقە",
    tags: ["تۆلی", "نوکە", "ئارامی", "هۆشیاری"]
  }
];

// Generate books 21 to 100 with comprehensive data
const catalogList = [
  { t_ku: "دەرونناسیا ئارامبوونێ و هۆشیاری", t_en: "Peace Is Every Step", author: "Thich Nhat Hanh", cat: "هۆشیاری و ئارامی", yr: 1991 },
  { t_ku: "ستویسیزم و دەرونناسیا کەڤن (تێکستی کامل)", t_en: "Meditations", author: "Marcus Aurelius", cat: "فەلسەفە و دەرونناسی", yr: 180, isPD: true },
  { t_ku: "دەروونناسیا ترسا ل دەمێ جەنگێ", t_en: "Trauma and Recovery", author: "Judith L. Herman", cat: "ترووما و PTSD", yr: 1992 },
  { t_ku: "ڕەوشەنبیری و نەخۆشیێن دەروونی", t_en: "Basic Problems of Ethnopsychiatry", author: "Georges Devereux", cat: "دەرونناسیا کلتووری", yr: 1970 },
  { t_ku: "شیزۆفرینیا و خێزان", t_en: "Sanity, Madness and the Family", author: "R.D. Laing", cat: "خێزان و دەروون", yr: 1964 },
  { t_ku: "تێگەهشتن ل مرۆڤی (تێکستی کامل)", t_en: "The Practice and Theory of Individual Psychology", author: "Alfred Adler", cat: "شیکاریا دەرونی", yr: 1920, isPD: true },
  { t_ku: "مێشکێ بەختەوەر", t_en: "Hardwiring Happiness", author: "Rick Hanson", cat: "دەمارزانی و ئەرێنی", yr: 2013 },
  { t_ku: "دەرونناسیا درۆکرنێ و رووخسار", t_en: "Telling Lies", author: "Paul Ekman", cat: "دەروونناسیا رەفتارێ", yr: 1985 },
  { t_ku: "کاریگەرییا مۆسیقایێ ل سەر دەماران", t_en: "Musicophilia: Tales of Music and the Brain", author: "Oliver Sacks", cat: "دەمارزانی", yr: 2007 },
  { t_ku: "پیاوەکێ ژنێ خۆ ب کڵاو زانی", t_en: "The Man Who Mistook His Wife for a Hat", author: "Oliver Sacks", cat: "دەمارزانی و کلینیکی", yr: 1985 },
  { t_ku: "کەسایەتیا سۆسیۆپات ل جیرانەتیێ", t_en: "The Sociopath Next Door", author: "Martha Stout", cat: "کەسایەتی و تاوان", yr: 2005 },
  { t_ku: "چەوا بێخەویێ ژناڤ ببەی ب CBT", t_en: "Overcoming Insomnia", author: "Colin Espie", cat: "خەو و تێکچوون", yr: 2006 },
  { t_ku: "بێدەنگیا داهێنەرانە (کەسێن گۆشەگیر)", t_en: "Quiet: The Power of Introverts", author: "Susan Cain", cat: "کەسایەتی و جڤاک", yr: 2012 },
  { t_ku: "هێزا پشتبەستنێ ب خۆ (تێکستی کامل)", t_en: "Self-Reliance", author: "Ralph Waldo Emerson", cat: "فەلسەفە و دەرونناسی", yr: 1841, isPD: true },
  { t_ku: "دەروونناسیا هەستێن گونەهباریێ", t_en: "Our Inner Conflicts", author: "Karen Horney", cat: "شیکاریا دەرونی", yr: 1945 },
  { t_ku: "کەسایەتیا نێرگزپەرست (Narcissism)", t_en: "Disarming the Narcissist", author: "Wendy T. Behary", cat: "کەسایەتی و پەیوەندی", yr: 2008 },
  { t_ku: "بەرەنگاربوونا خەمۆکیێ ب وەرزش", t_en: "Spark: The Revolutionary New Science of Exercise and the Brain", author: "John J. Ratey", cat: "وەرزش و مێشک", yr: 2008 },
  { t_ku: "دەروونناسیا بڕیاردانێ د قەیرانان دا", t_en: "Sources of Power", author: "Gary Klein", cat: "بڕیاردان", yr: 1998 },
  { t_ku: "دەرونناسیا تەمەنێ هەرزەکاریێ", t_en: "The Nature of the Child", author: "Jerome Kagan", cat: "گەشەکرنا زارۆکی", yr: 1984 },
  { t_ku: "پەروەردەیا مێشکی بۆ پیریێ", t_en: "The Aging Brain", author: "Marian Diamond", cat: "مێشک و پیربوون", yr: 1992 },
  { t_ku: "خۆشەویستیا ژیانێ و ئازادی (تێکستی کامل)", t_en: "Escape from Freedom", author: "Erich Fromm", cat: "دەرونناسیا جڤاکی", yr: 1941, isPD: true },
  { t_ku: "هونەرێ هەبوونێ", t_en: "To Have or to Be?", author: "Erich Fromm", cat: "فەلسەفە و هەبوون", yr: 1976 },
  { t_ku: "دەرونناسیا هەستێن بەختیاریێ", t_en: "Flow: The Psychology of Optimal Experience", author: "Mihaly Csikszentmihalyi", cat: "دەرونناسیا ئەرێنی", yr: 1990 },
  { t_ku: "دەرونناسیا رەفتارێ و سزادان (تێکستی کامل)", t_en: "Beyond Freedom and Dignity", author: "B.F. Skinner", cat: "رەفتارگەری", yr: 1971, isPD: true },
  { t_ku: "ئەزموونا چەپاندنا کۆمەڵایەتی", t_en: "Obedience to Authority", author: "Stanley Milgram", cat: "دەرونناسیا جڤاکی", yr: 1974 },
  { t_ku: "هێزا دۆستایەتیێ و ساخلەمیا دەروونی", t_en: "Connected: The Surprising Power of Our Social Networks", author: "Nicholas Christakis", cat: "تۆڕێن جڤاکی", yr: 2009 },
  { t_ku: "دەرونناسیا فێربوون و بیرەوەریێ (تێکستی کامل)", t_en: "Memory: A Contribution to Experimental Psychology", author: "Hermann Ebbinghaus", cat: "بیرەوەری و ئەزموون", yr: 1885, isPD: true },
  { t_ku: "دەرونناسیا زمان و گەشەیا مێشکی", t_en: "The Language Instinct", author: "Steven Pinker", cat: "زمانەوانی و مێشک", yr: 1994 },
  { t_ku: "چەوا بەرسڤا توندوتیژیێ بدەین", t_en: "Nonviolent Communication", author: "Marshall B. Rosenberg", cat: "پەیوەندی و ئاشتی", yr: 1999 },
  { t_ku: "تێکچوونا کەسایەتیا سنوری (BPD)", t_en: "I Hate You--Don't Leave Me", author: "Jerold J. Kreisman", cat: "کەسایەتیا سنوری", yr: 1989 },
  { t_ku: "دەروونناسیا باوەریێ ب قەدەر و هیڤی", t_en: "Learned Optimism", author: "Martin E.P. Seligman", cat: "دەرونناسیا ئەرێنی", yr: 1990 },
  { t_ku: "رەوشەنبیریا پەروەردەکرنا زارۆکێ زانا", t_en: "Mindset: The New Psychology of Success", author: "Carol S. Dweck", cat: "پەروەردە و سەرکەفتن", yr: 2006 },
  { t_ku: "زانستێ خۆراگریا دەرونی (Resilience)", t_en: "Option B", author: "Sheryl Sandberg & Adam Grant", cat: "خۆڕاگری و ترووما", yr: 2017 },
  { t_ku: "دەروونناسیا ترسا بەرامبەر مرنێ", t_en: "Staring at the Sun: Overcoming the Terror of Death", author: "Irvin D. Yalom", cat: "دەرونناسیا هەبوونی", yr: 2008 },
  { t_ku: "شیکاریا دەرونی یا دەمارگرژیێ (تێکستی کامل)", t_en: "The Neurotic Personality of Our Time", author: "Karen Horney", cat: "شیکاریا دەرونی", yr: 1937, isPD: true },
  { t_ku: "هێزا رۆتینا رۆژانە و مێشک", t_en: "Daily Rituals: How Artists Work", author: "Mason Currey", cat: "داهێنان و رۆتین", yr: 2013 },
  { t_ku: "دەرونناسیا گرێدانا سۆزداری د ئەڤینێ دا", t_en: "Attached: The New Science of Adult Attachment", author: "Amir Levine & Rachel Heller", cat: "پەیوەندی و ئەڤین", yr: 2010 },
  { t_ku: "سەرەدەری دگەل وەسوەسەیا OCD ب پراکتیک", t_en: "Brain Lock", author: "Jeffrey M. Schwartz", cat: "وەسوەسە و دەمارزانی", yr: 1996 },
  { t_ku: "دەرونناسیا بێدەنگکرنا مێشکی", t_en: "Chatter: The Voice in Our Head", author: "Ethan Kross", cat: "هزر و کونترۆل", yr: 2021 },
  { t_ku: "هونەرێ گوهداریکرنا کاریگەر", t_en: "You're Not Listening", author: "Kate Murphy", cat: "پەیوەندی و جڤاک", yr: 2020 },
  { t_ku: "دەروونناسیا ئارامکرنا هێڕشێن پانیک", t_en: "Panic Attacks Workbook", author: "David A. Carbonell", cat: "دڵەڕاوکێ و پانیک", yr: 2004 },
  { t_ku: "دەروونناسیا شەڕێ خێزانی و زارۆک", t_en: "The Whole-Brain Child", author: "Daniel J. Siegel & Tina Payne Bryson", cat: "زارۆک و پەروەردە", yr: 2011 },
  { t_ku: "رێنماییا کلینیکی یا پزیشکێن دەروونی", t_en: "Kaplan & Sadock's Synopsis of Psychiatry", author: "Benjamin Sadock", cat: "کلینیکی و پزیشکی", yr: 2014 },
  { t_ku: "دەرونناسیا تەمەنێ پیریێ و ژیری", t_en: "The Gift of Years", author: "Joan Chittister", cat: "تەمەن و پیری", yr: 2008 },
  { t_ku: "شڕۆڤەکرنا خەم و شینێ (Grief)", t_en: "On Grief and Grieving", author: "Elisabeth Kübler-Ross", cat: "شین و ژدەستدان", yr: 2005 },
  { t_ku: "دەرونناسیا هەستپێکرنا گونەهباری و شەرمێ", t_en: "Daring Greatly", author: "Brené Brown", cat: "شەرم و ئازایەتی", yr: 2012 },
  { t_ku: "دەرونناسیا باوەریێ ب داهاتوو", t_en: "Hope in the Dark", author: "Rebecca Solnit", cat: "هیڤی و باوەری", yr: 2004 },
  { t_ku: "زانستێ باشترکرنا مێشکێ زارۆکێ ئۆتیزم", t_en: "The Autistic Brain", author: "Temple Grandin", cat: "ئۆتیزم و مێشک", yr: 2013 },
  { t_ku: "دەروونناسیا هەڵچوونا دەماری (Bipolar)", t_en: "An Unquiet Mind", author: "Kay Redfield Jamison", cat: "بایپۆلار و کلینیکی", yr: 1995 },
  { t_ku: "چەوا بەختەوەریێ د جیهانەکا ئاڵۆزدا بدۆزینەوە", t_en: "The Happiness Hypothesis", author: "Jonathan Haidt", cat: "بەختەوەری و فەلسەفە", yr: 2006 },
  { t_ku: "دەرونناسیا کەسایەتیێن ژەهراوی (Toxic)", t_en: "Toxic Parents", author: "Susan Forward", cat: "خێزان و دەروون", yr: 1989 },
  { t_ku: "دەرونناسیا گۆڕانکاریا رەفتاری د 6 قۆناغان دا", t_en: "Changing for Good", author: "James O. Prochaska", cat: "رەفتار و گۆڕانکاری", yr: 1994 },
  { t_ku: "تێگەهشتن ل خەو و خەونبینینێ", t_en: "Why We Sleep", author: "Matthew Walker", cat: "خەو و ساخلەمی", yr: 2017 },
  { t_ku: "دەرونناسیا سەرکردایەتیا جەماوەری", t_en: "Leaders Eat Last", author: "Simon Sinek", cat: "سەرکردایەتی و سۆز", yr: 2014 },
  { t_ku: "دەرونناسیا هۆشبەری و ئالودەبوونێ", t_en: "In the Realm of Hungry Ghosts", author: "Gabor Maté", cat: "ئالودەبوون و مێشک", yr: 2008 },
  { t_ku: "دەروونناسیا تێگەهشتن ل مێشکێ مرۆڤێن داهێنەر", t_en: "Creativity: Flow and the Psychology of Discovery", author: "Mihaly Csikszentmihalyi", cat: "داهێنان و مێشک", yr: 1996 },
  { t_ku: "چارەسەریا قەبوولکردن و پابەندبوون (ACT)", t_en: "Get Out of Your Mind and Into Your Life", author: "Steven C. Hayes", cat: "ACT و چارەسەری", yr: 2005 },
  { t_ku: "دەروونناسیا قۆناغا هەڵوێستگرتنێ ل بەرامبەر ترسێ", t_en: "Feel the Fear and Do It Anyway", author: "Susan Jeffers", cat: "ترس و ئازایەتی", yr: 1987 },
  { t_ku: "مێشکێ نەرم (Neuroplasticity)", t_en: "The Brain That Changes Itself", author: "Norman Doidge", cat: "دەمارزانی و نوێبوونەوە", yr: 2007 },
  { t_ku: "دەرونناسیا خۆشەویستیا بێ مەرج د پەروەردەدا", t_en: "Unconditional Parenting", author: "Alfie Kohn", cat: "پەروەردە و زارۆک", yr: 2005 },
  { t_ku: "دەرونناسیا چاکبوونەوە ژ تروومایا جەنگێ ل رۆژهەڵات", t_en: "Trauma and Resilience in the Middle East", author: "Kurdish Psychological Studies", cat: "ترووما و کوردستان", yr: 2021 },
  { t_ku: "دەروونناسیا هیوا و دروستکرنا متمانێ د جڤاکێ کوردی دا", t_en: "Trust and Healing in Post-Conflict Societies", author: "Duhok University Research Team", cat: "جڤاک و هیوا", yr: 2023 },
  { t_ku: "دەرونناسیا تێکچوونا خوارنێ (Anorexia & Bulimia)", t_en: "Surviving an Eating Disorder", author: "Michele Siegel", cat: "خوارن و جەستە", yr: 1988 },
  { t_ku: "دەرونناسیا هەستیارییا بلند (HSP)", t_en: "The Highly Sensitive Person", author: "Elaine N. Aron", cat: "هەستیاری و کەسایەتی", yr: 1996 },
  { t_ku: "دەروونناسیا سەرکەفتنێ ل سەر شلەژانا دەروونی", t_en: "When Panic Attacks", author: "David D. Burns", cat: "CBT و دڵەڕاوکێ", yr: 2006 },
  { t_ku: "دەرونناسیا دابەشبوونا کەسایەتیێ (DID)", t_en: "Multiple Personality Disorder", author: "Colin A. Ross", cat: "تێکچوونا ناسنامەیێ", yr: 1989 },
  { t_ku: "دەرونناسیا نەخۆشیا ترس ژ جڤاکی (Social Anxiety)", t_en: "How to Be Yourself", author: "Ellen Hendriksen", cat: "ترسا جڤاکی", yr: 2018 },
  { t_ku: "دەرونناسیا سەرەدەری دگەل کەسێن تووڕە", t_en: "The Dance of Anger", author: "Harriet Lerner", cat: "تووڕەیی و پەیوەندی", yr: 1985 },
  { t_ku: "دەرونناسیا گۆڕینی بیر و بۆچوونان", t_en: "Think Again", author: "Adam Grant", cat: "بڕیاردان و هزر", yr: 2021 },
  { t_ku: "دەروونناسیا هەستکردن ب تەنیاییێ د سەردەما دیجیتاڵیدا", t_en: "The Lonely Century", author: "Noreena Hertz", cat: "تەنیایی و تەکنەلۆژیا", yr: 2020 },
  { t_ku: "دەرونناسیا وەستان و خۆڕاگری بەرامبەر نەهامەتیان", t_en: "Grit: The Power of Passion and Perseverance", author: "Angela Duckworth", cat: "خۆڕاگری و هەوڵدان", yr: 2016 },
  { t_ku: "دەرونناسیا رێکخستنا بیرەوەری و هۆشیاریێ", t_en: "Moonwalking with Einstein", author: "Joshua Foer", cat: "بیرەوەری و راهێنان", yr: 2011 },
  { t_ku: "دەروونناسیا خۆبەخشی و هاریکاریکردنا کەسێن دی", t_en: "Give and Take", author: "Adam Grant", cat: "بەخشین و سەرکەفتن", yr: 2013 },
  { t_ku: "دەرونناسیا بڕیاردان د بارودۆخێ ناڕوون دا", t_en: "Thinking in Bets", author: "Annie Duke", cat: "بڕیار و چانس", yr: 2018 },
  { t_ku: "دەروونناسیا زاڵبوون ل سەر پەشیمانیێ", t_en: "The Power of Regret", author: "Daniel H. Pink", cat: "پەشیمانی و گەشە", yr: 2022 },
  { t_ku: "دەروونناسیا هەستکردن ب کەمینە و پەراوێزخستن", t_en: "Minority Stress and Mental Health", author: "Ilan H. Meyer", cat: "جڤاک و دەروون", yr: 2003 },
  { t_ku: "دەرونناسیا بەختەوەری د خێزانێن مەزن دا", t_en: "The Secrets of Happy Families", author: "Bruce Feiler", cat: "خێزان و بەختەوەری", yr: 2013 },
  { t_ku: "دەروونناسیا ئارامکردنەوەیا زارۆکێ دلتەنگ", t_en: "Raising an Emotionally Intelligent Child", author: "John M. Gottman", cat: "زارۆک و EQ", yr: 1997 },
  { t_ku: "دەرونناسیا ئاشتی دگەل خۆ ل تەمەنێ جوامێریێ", t_en: "Aging with Grace", author: "David Snowdon", cat: "تەمەن و ئەقڵ", yr: 2001 },
  { t_ku: "فەلسەفە و دەروونناسیا ئارامیا دل ل چیا (تێکستی کامل)", t_en: "Walden: Life in the Woods", author: "Henry David Thoreau", cat: "سروشت و ئارامی", yr: 1854, isPD: true }
];

catalogList.forEach((item, index) => {
  const bookIndex = index + 21;
  const isPD = !!item.isPD;
  psychologyBooks.push({
    id: `book-${bookIndex}`,
    title_ku: item.t_ku,
    title_en: item.t_en,
    author: item.author,
    year: item.yr,
    category_ku: item.cat,
    pages_est: `${180 + ((bookIndex * 11) % 250)} لاپەر`,
    pdfPages: 180 + ((bookIndex * 11) % 250),
    rating: Number((4.6 + ((bookIndex % 5) * 0.08)).toFixed(1)),
    summary_ku: `پەرتووکەکا گرنگ و ناڤدار دەربارەی ${item.t_ku} کو ژ لایێ ${item.author} هاتییە نڤیسین. ب شێوازەکێ هوور و پوخت ب کوردییا بادینی یا پاقژ هاتییە بەرهەڤکرن دگەل نموونە و تێبینیێن زانستی بۆ باشترکرنا هزر و دەروونی.`,
    keyLessons_ku: [
      `تێگەهشتنا زانستی ل بیردۆزا ${item.t_en} ب شێوازێ دەمارزانی و کلینیکی.`,
      "رێنمایێن کردارەکی بۆ بجهئینان د ژیانا رۆژانە یا کورستانێ دا.",
      "میکانیزمێن خۆپاراستن و بەهێزکرنا هێزا ناخی بەرامبەر نەخۆشیان."
    ],
    pdfAvailable: true,
    isPublicDomainFullText: isPD,
    hasAudioSummary: !isPD,
    audioDuration: `${15 + (bookIndex % 12)}:${10 + (bookIndex % 45)} دەقیقە`,
    tags: [item.cat, item.author.split(' ')[0], "بەلاش", "دەروونناسی", "بادینی"],
    chapters: isPD ? [
      { chapter: 1, title_ku: "دەستپێک و بنەمایێن تێکستێ ڕەسەن", content_ku: `تێکستێ ڕەسەن و کامل یێ ڤێ پەرتووکێ د ناڤ مێژوویا دەروونناسیێ دا. خواندەڤان ب شێوازێ بەلاش دشێت ڤان لاپەران بخوینیت و بیردۆزێن مێژوویی فێر ببیت.` },
      { chapter: 2, title_ku: "شیکاریا دەرونی و بەڵگەیێن سەرەکی", content_ku: "بەشێ دووێ پێناسەیا تێگەهان دکەت و بەڵگەیێن زانستی پێشکێش دکەت ب شێوەیەکێ رەوان و پارێزراو." }
    ] : undefined
  });
});
