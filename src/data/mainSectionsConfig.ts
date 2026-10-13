// The 7 Main Sections Configuration according to Psychologist Friend's Structure
export interface MainSectionConfig {
  id: string;
  number: number;
  title_ku: string;
  title_en: string;
  title_ar: string;
  description_ku: string;
  badge_ku: string;
  themeColor: string; // Tailwind color accent
  bgCardGradient: string;
  iconName: string;
  targetCount: string;
  subcategories: string[];
}

export const MAIN_SECTIONS: MainSectionConfig[] = [
  {
    id: "section-disorders",
    number: 1,
    title_ku: "تەندروستیا دەروونی و نەخۆشی",
    title_en: "Mental Health & Disorders",
    title_ar: "الصحة النفسية والاضطرابات",
    description_ku: "30 بابەتێن هوور: خەمۆکی، دڵەڕاوکێ، وەسوەسە (OCD)، تێکچوونا خەوێ، PTSD و نیشانە + هۆکار + خۆپاراستن + چارەسەری ب بادینی.",
    badge_ku: "30+ بابەت • DSM-5 & WHO",
    themeColor: "rose",
    bgCardGradient: "from-rose-50 to-red-50/40 border-rose-200 hover:border-rose-400 text-rose-900",
    iconName: "ShieldAlert",
    targetCount: "30 بابەتێن کلینیکی",
    subcategories: ["خەمۆکی و بێتاقەتی", "دڵەڕاوکێ و پانیک", "وەسوەسە و OCD", "ترووما و PTSD", "شیزۆفرینیا و بایپۆلار", "تێکچوونا خەوێ و بێخەوی"]
  },
  {
    id: "section-child",
    number: 2,
    title_ku: "دەروونناسیا زارۆک و پێگەهشتییان",
    title_en: "Child & Adolescent Psychology",
    title_ar: "علم نفس الطفل والمراهقة",
    description_ku: "25 بابەتێن پەروەردەیی: زارۆکێن سەرکێش، ترسا زارۆکان، قۆناغا هەرزەکاریێ، گریا زارۆکی، و 'چاوا سەرەدەریێ بکەی؟' بۆ دایک و بابان.",
    badge_ku: "25 بابەت • رێنماییا دایک و بابان",
    themeColor: "amber",
    bgCardGradient: "from-amber-50 to-yellow-50/40 border-amber-200 hover:border-amber-400 text-amber-900",
    iconName: "Baby",
    targetCount: "25 بابەتێن پەروەردەیی",
    subcategories: ["زارۆکێن سەرکێش و تووڕە", "قۆناغا هەرزەکاریێ", "ترسا زارۆکان و تاریکی", "گریان و تێکچوونا هەستان", "زیانێن لێدانا زارۆکی", "کێشەیێن قوتابخانێ و فێربوونێ"]
  },
  {
    id: "section-growth",
    number: 3,
    title_ku: "گەشەپێدان و هێزا کەسایەتیێ",
    title_en: "Personal Growth & Self-Strength",
    title_ar: "تطوير الذات وقوة الشخصية",
    description_ku: "25 بابەت: زالبوون ل سەر سترێسێ، باوەری بخۆبوونێ، هزرا ئەرێنی، دانانا ئارمانجان، و 'راهێنانا 5 دەقەیی' یا رۆژانە.",
    badge_ku: "25 بابەت • راهێنانێن 5 دەقەیی",
    themeColor: "purple",
    bgCardGradient: "from-purple-50 to-indigo-50/40 border-purple-200 hover:border-purple-400 text-purple-900",
    iconName: "Sparkles",
    targetCount: "25 بابەتێن گەشەپێدانێ",
    subcategories: ["زالبوون ل سەر سترێسێ", "ئاڤاکرنا باوەری بخۆبوونێ", "هزرا ئەرێنی و رەشبینی", "دانانا ئارمانجان و پلان", "خۆشەویستیا خۆ و رێزگرتن", "دیسیپلین و نەهێشتنا تەمبەڵیێ"]
  },
  {
    id: "section-family",
    number: 4,
    title_ku: "دەروونناسیا خێزان و پەیوەندییان",
    title_en: "Family & Relationships",
    title_ar: "علم نفس الأسرة والعلاقات",
    description_ku: "25 بابەت: ئاریشەیێن هەڤژینان، ژن و مێر، بووک و خەسوو، پەیوەندیێن ساخلەم، و '5 رێک بۆ چارەسەریا شەڕ و ناخۆشیان'.",
    badge_ku: "25 بابەت • خێزان و هەڤژینی",
    themeColor: "pink",
    bgCardGradient: "from-pink-50 to-rose-50/40 border-pink-200 hover:border-pink-400 text-pink-900",
    iconName: "HeartHandshake",
    targetCount: "25 بابەتێن خێزانی",
    subcategories: ["ئاریشەیێن ژن و مێران", "پەیوەندیا بووک و خەسووێ", "5 رێکێن چارەسەریا ناکۆکیان", "پەروەردەکرنا هەڤپشک", "سۆزبەستن و ئەڤینا بەردەوام", "تەڵاق و سەلامەتیا زارۆکان"]
  },
  {
    id: "section-tests",
    number: 5,
    title_ku: "تاقیکرنێن دەروونی (Psychological Tests)",
    title_en: "Psychological Tests & Screeners",
    title_ar: "الاختبارات النفسية التفاعلية",
    description_ku: "6 تاقیکرنێن چالاک و هوور: MBTI (16 کەسایەتی)، پیڤەرا سترێسێ، خەمۆکیێ (BDI)، دڵەڕاوکێێ (GAD-7)، باوەری بخۆبوونێ، و EQ.",
    badge_ku: "6 تاقیکرنێن چالاک • دەستبەجێ ئەنجام",
    themeColor: "emerald",
    bgCardGradient: "from-emerald-50 to-teal-50/40 border-emerald-200 hover:border-emerald-400 text-emerald-900",
    iconName: "ClipboardCheck",
    targetCount: "6 تاقیکرنێن زانستی",
    subcategories: ["MBTI - 16 کەسایەتی", "پیڤەرا سترێسێ (0-32)", "پیڤەرا خەمۆکیێ (BDI)", "پیڤەرا دڵەڕاوکێ (GAD-7)", "پیڤەرا باوەری بخۆبوونێ", "پیڤەرا هۆشا سۆزداری (EQ)"]
  },
  {
    id: "section-anonymous",
    number: 6,
    title_ku: "پرسیار و بەرسڤێن نهێنی (Anonymous Q&A)",
    title_en: "Anonymous Questions & Expert Answers",
    title_ar: "أسئلة وأجوبة مجهولة",
    description_ku: "پرسیارا خۆ ب 100% نهێنی بنڤیسە بێی ناڤێ خۆ، و بەرسڤێن زانستی ژ پسپۆرێن دەروونی وەربگرە دگەل 10+ نموونەیێن جڤاکی.",
    badge_ku: "🔒 100% نهێنی • ناڤێ تە دیار نابیت",
    themeColor: "cyan",
    bgCardGradient: "from-cyan-50 to-sky-50/40 border-cyan-200 hover:border-cyan-400 text-cyan-900",
    iconName: "Lock",
    targetCount: "پرسیار و بەرسڤێن نهێنی",
    subcategories: ["پسیارێن نەخۆشیان", "ئاریشەیێن خێزانی", "زارۆک و پەروەردە", "گەنج و زانکۆ", "پەیوەندی و هەڤژینی"]
  },
  {
    id: "section-dictionary",
    number: 7,
    title_ku: "فەرهەنگا دەروونناسیێ (Dictionary)",
    title_en: "Multilingual Psychology Dictionary",
    title_ar: "معجم المصطلحات النفسية",
    description_ku: "فەرهەنگا تێگەهـ و زاراوەیێن دەروونناسیێ ب زمانێن کوردی بادینی، ئینگلیزی و عەرەبی دگەل نموونە و لێگەڕیانا پیتان.",
    badge_ku: "400 زاراوە • کوردی / English / عربي",
    themeColor: "indigo",
    bgCardGradient: "from-indigo-50 to-blue-50/40 border-indigo-200 hover:border-indigo-400 text-indigo-900",
    iconName: "BookOpenCheck",
    targetCount: "400 زاراوەیێن فەرمی",
    subcategories: ["پیتێن ئەلفوبێ (A-Z / ئ-ی)", "تێگەهێن دەمارزانی", "تێگەهێن کلینیکی", "بیردۆز و قوتابخانە"]
  },
  {
    id: "section-library",
    number: 8,
    title_ku: "📚 پەرتوکخانا دەروونناسی (Free Library)",
    title_en: "Psychology Library",
    title_ar: "مكتبة علم النفس المجانية",
    description_ku: "100 پەرتووکێن مەزنێن دەروونناسیێ ب کوردییا بادینی ب بەلاش: کورتەیا دەنگی، خواندنا پەرتووکێ، و پەڕپەڕێن گشتی ب تێکستی کامل.",
    badge_ku: "100 پەرتوک - بەلاش",
    themeColor: "emerald",
    bgCardGradient: "from-emerald-50 to-teal-50/40 border-emerald-200 hover:border-emerald-400 text-emerald-900",
    iconName: "BookOpen",
    targetCount: "100 پەرتوک - بەلاش",
    subcategories: ["فرۆید و شیکاریا دەروونی", "کانیمان و زانستێ هزرینێ", "بێک و هزری-رەفتاری CBT", "گەشەپێدان و هێزا دەرونی", "پەرتووکێن دایک و بابان", "پەیوەندی و خێزان"]
  }
];
