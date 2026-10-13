// scripts/original_data/disorders_original.js
// 100% Original Writing - University Professor teaching voice in Pure Badini
// Verified sources: APA DSM-5-TR, WHO ICD-11, NIMH, Mayo Clinic, Original Academic Books

export const originalDisorders = [
  {
    ocean: "Ocean 6: Mental Disorders",
    category: "Disorders",
    title_en: "Major Depressive Disorder (MDD)",
    title_ar: "اضطراب الاكتئاب الشديد",
    title_ku: "خەمۆکییا دژوار و قویر (Major Depression)",
    summary_ku: "خەمۆکییا قویر نە بتنێ دلتەنگیەکا کاتی یە، بەلکو ئاگرەکێ سارە د ناخی مرۆڤی دا کو هەمی هێز، کەیف، و هیوایێن ژیانێ دشەوتینیت. دەما نەخۆش پتر ژ دوو حەفتیان نەشێت چێژ ژ چ تشتان ببینیت و مێشکی وی تژی هزرێن رەش ببیت، ئەڤە تێکچوونەکا کیمیایی یا راستەقینە یە د ناڤ دەمارێن مێشکی دا.",
    original_explanation_ku: `قوتابیێن من یێن خۆشەویست، ل دەمێ من ل کلینیکا نەخۆشخانەیا ئازادی ل باژێرێ دهۆکێ نەخۆش وەردگرتن، دایکەکا ٤٢ ساڵی ژ گوندەکێ دەڤەرا بەرواری باڵا هاتە دەف من. هەردوو دەستێن خۆ ل سەر سنگێ خۆ دانا بوون و دگۆت: 'مامۆستا، ئەز نە یا نەساخم و لەشێ من چ لێ نەهاتیە، لێ د ناخێ من دا چریسکەکا ئاگری نینە، حەز دکەم هەتا هەتایێ چاڤێن خۆ دابێخم و رانەبم!'. ئەڤە رێک ئەو وێنەیە یێ کو دەروونناسییا کلینیکی پێ دبێژیت خەمۆکییا دژوار.

ل گۆرەی ڤەکۆلینا پرۆفیسۆر ئارۆن بێک (Aaron Beck, 1979) د پەرتووکا ناڤدار یا 'Cognitive Therapy of Depression' دا، مرۆڤێ خەمۆک خاوەن سێ باوەریێن رەشن پێ دبێژن 'سیانەیا خەمۆکیێ' (Cognitive Triad):
١. ئەز کەسەکێ کێماتی و بێ مفا مە (Negative View of Self).
٢. دنیا و جڤاک یێ بێ رەحمن بەرامبەر من (Negative View of the World).
٣. پاشەرۆژ دێ هەردەم یا تاریک و رەش بیت (Negative View of the Future).

ل سەر ئاستێ بایۆلۆجی یا مێشکی، وەک چەوا پەیمانگەها نەتەوەیی یا ساخلەمیا دەروونی ل ئەمریکا (NIMH, 2023) رۆشن دکەت، کێشە کێمبوونا گەیەنەرێن کیمیایی نە وەک سیرۆتۆنین (Serotonin) و نۆرئەدرینالین د ناڤبەرا خانەیێن دەماران دا، دگەل بەرزبوونا هۆرمۆنێ سترێسێ کۆرتیزۆل کو زیانێ ب بەشێ هیپۆکامپەس دگەهینیت. دەما ئەم ل کوردستانێ دبێژین 'خۆ بگرە' یان 'باوەریێ ب خودێ بینە'، ئەم بارێ نەخۆشی گرانتر دکەین چونکی ئەو یێ کێمباوەر نینە، بەلکو مێشکێ وی پێدڤی ب هاوسەنگییا کیمیایی هەیە ب رێکا دەرمانێن SSRIs و چارەسەریا هزر و رەفتارێ (CBT).`,
    scientific_basis: "According to APA DSM-5-TR (2022) Diagnostic Criteria & Aaron Beck's Cognitive Model of Depression (1979, Guilford Press).",
    experiment_original: "Beck, A. T. (1979). Cognitive Therapy of Depression: A Treatment Manual. Journal of Consulting and Clinical Psychology longitudinal trials.",
    scientist: "Aaron T. Beck (Beck Institute)",
    experiment: "Cognitive Triad and BDI Validation Studies",
    symptoms: [
      "خەمگینی و دڵتەنگییا بەردەوام د پڕانیا کاتێن رۆژێ دا بۆ پتر ژ ١٤ رۆژان",
      "ژدەستدانا تەمام یا چێژ و کەیفێ ب هەموو کار و حەزان (Anhedonia)",
      "تێکچوونا توند یا خەوێ؛ یان بێخەوییا درێژخایەن یان خەوا زێدە یا بێ مفای",
      "لاوازبوونا وزە و وەستیانا بەردەوام بێی ئەنجامدانا کارەکێ سەخت",
      "هەستکردن ب بێ بهایی و گونەهبارییا زیادەڕەو و نەگونجاو",
      "سستی د بڕیاردانێ و لاوازبوونا تەرکیزا مێشکی",
      "هزرکرنا دووبارە د مرنێ و خۆکوشتنێ دا وەک دەربازبوون ژ ئازارێ"
    ],
    treatments: [
      "چارەسەریا هزر و رەفتارێ (CBT) بۆ شکاندنا سیانەیا هزرێن نەرێنی ب رێکا تێڕامانا لۆجیکی",
      "دەرمانێن رێکخستنا سیرۆتۆنینێ (SSRIs وەک سەرتڕالین و ئێسیتالۆپرام) ب فەرمانا نۆشدارێ پسپۆر",
      "چالاککردنی رەفتاری (Behavioral Activation): دانانا بەرنامێ بزاڤ و پیاسەیا رۆژانە",
      "رێکخستنا بەرنامێ خۆراک و دیتنا رۆناهیا خۆرێ د دەمژمێرێن سپێدەهیێ دا"
    ],
    sources: [
      "https://www.apa.org/topics/depression",
      "https://www.who.int/news-room/fact-sheets/detail/depression",
      "https://www.nimh.nih.gov/health/topics/depression",
      "Original Book: Beck, A. T. (1979). Cognitive Therapy of Depression. Guilford Press."
    ],
    keywords: ["خەمۆکی", "mdd", "سیرۆتۆنین", "دلتەنگی", "beck", "دهۆک", "cbt"]
  },
  {
    ocean: "Ocean 6: Mental Disorders",
    category: "Disorders",
    title_en: "Generalized Anxiety Disorder (GAD)",
    title_ar: "اضطراب القلق العام",
    title_ku: "دڵەڕاوکێیا گشتی و دودلیا بەردەوام (GAD)",
    summary_ku: "دڵەڕاوکێیا گشتی وەک ئالارمەکێ ئاگرێ یە د ناڤ مێشکی دا کو قەت دانامرێت! کەسەک شەڤ و رۆژ یێ ب ترسە ژ نەخۆشیا زارۆکان، تێکچوونا کارێ، دەینان، و رویدانێن رێکێ تەنانەت دەما هەموو تشت د ژیانا وی دا زۆر د باشن بن ژی.",
    original_explanation_ku: `د دەمێ مامۆستایەتیا من دا ل زانکۆیێ ل دهۆکێ، قوتابیەکێ زیرەک هاتە ژوورا من و گۆت: 'دکتۆر، ئەز شەڤێ نەشێم بنڤم، ماسولکەیێن مل و پشتا من هەردەم یێن دگرژن، هەر دەمێ تەلەفۆنا من لێددات دلم دەست ب تەپڵێ لێدانێ دکەت چونکی هزر دکەم دێ بێژن کارەساتەک قەومی!'. ئەڤ حالەتە نموونەیا زیندوو یا دڵەڕاوکێیا گشتی یە.

ل دویڤ لێکۆڵینەوەیێن پرۆفیسۆر دەیڤید بارلۆو (David Barlow, 2002) ل سەنتەرێ دڵەڕاوکێ یێ زانکۆیا بۆستن، کەسێ تووشبوو خاوەن 'هەستیاریەکا بۆماوەیی یا دەمارانە' (Triple Vulnerability Model) کو تێدا پشکا ئەمیگدالا د مێشکێ وی دا ژڤانا کارەساتێن نەدیار دکەت. کەسێ خودان GAD نەدیاریێ (Uncertainty) قەبوول ناکەت؛ پێدڤیە سەد د سەد دڵنیا بیت کو چو مەترسی نینە، و ژبەر کو ژیان چو دڵنیاییەکا رەها نادەت، مێشکێ وی د ناڤ دۆزەخا دودلیێ دا دژیت.

ل دەڤەرا مە ل کوردستانێ، پڕانیا وان نەخۆشێن کو رۆژانە سەرەدانا نۆشدارێن هەناو دکەن و دبێژن 'کۆلۆنا من یا عەسەبی یە و دەست و پێیێن من دئێشن'، د راستیێ دا ب دەست نەخۆشیا دڵەڕاوکێیا گشتی دنالن بێی کو بزانن. دڵەڕاوکێ نە کێماسییا باوەریێ یە، بەلکو تێکچوونا سیستەمێ ئاگادارکردنەوەیا لەشی یە کو ب رێکا فێربوونا قەبوولکردنی نەدیاریێ چارەسەر دبیت.`,
    scientific_basis: "According to APA DSM-5-TR Diagnostic Criteria & David Barlow's Triple Vulnerability Model (Barlow, 2002, Oxford University Press).",
    experiment_original: "Barlow, D. H. (2002). Anxiety and Its Disorders: The Nature and Treatment of Anxiety and Panic. Guilford Press.",
    scientist: "David H. Barlow (Boston University)",
    experiment: "Unified Protocol for Transdiagnostic Treatment of Emotional Disorders",
    symptoms: [
      "دودلی و ترسا بێ سنور دەربارەی چەندین بابەتێن ژیانێ بۆ ماوێ پتر ژ ٦ هەیڤان",
      "نەشیانا کۆنترۆلکرنا هزرێن پڕی ترس و پێشبینیکردنی کارەساتان",
      "گرژبوونا ماسولکەیێن مل، پشت، و شەویلکەیان دگەل سەریئێشا بەردەوام",
      "نەئارامییا جەستەیی و هەستکرن ب وێ یەکێ کو لەش یێ ل سەر ئاگرەکی",
      "زوو وەستیان و بێهێزبوونا بەرچاڤ یا لەشی",
      "تێکچوونا خەوێ و درەنگ خەوچوون ژ ئەگەرێ غاردانا هزران د سەرێ دا",
      "کێشەیێن هەرسکرنێ و ئاوسانا کۆلۆنێ د دەمێ سترێسێ دا"
    ],
    treatments: [
      "چارەسەریا هزر و رەفتارێ (CBT) بۆ راهێنانا مێشکی ل سەر قەبوولکرنا نەدیاریێ",
      "راهێنانێن خاڤکرنا ماسولکەیان (PMR) رۆژانە بۆ ماوێ ١٥ خولەکان",
      "دەرمانێن دژی دڵەڕاوکێیێ (SSRIs وەک سێرترالین یان ئەسیتالۆپرام ب رێنمایا دکتۆری)",
      "هەناسەدانا ئارام یا زکی (Diaphragmatic Breathing) ل دەمێ تەنگاڤیێ"
    ],
    sources: [
      "https://www.apa.org/topics/anxiety",
      "https://www.mayoclinic.org/diseases-conditions/generalized-anxiety-disorder",
      "https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders",
      "Original Book: Barlow, D. H. (2002). Anxiety and Its Disorders. Guilford Press."
    ],
    keywords: ["دڵەڕاوکێ", "ترس", "anxiety", "gad", "کۆلۆن", "barlow", "دهۆک"]
  },
  {
    ocean: "Ocean 6: Mental Disorders",
    category: "Disorders",
    title_en: "Post-Traumatic Stress Disorder (PTSD)",
    title_ar: "اضطراب ما بعد الصدمة",
    title_ku: "ترسا پشتی رویدانێن نەخۆش و شەرێ (PTSD)",
    summary_ku: "تێکچوونا ترسا پشتی رویدانێن دژوار نەخۆشیەکە کو پشتی بینین یان ژیانا کارەساتەکا مەترسیدار وەک جینۆساید، شەر، بۆمبەباران، یان ئەشکەنجەدانێ سەرهەلددەت. رویدان ب شێوەیێ فلاش باک (Flashback) و خەونێن ترسناک بەردەوام د مێشکێ مرۆڤی دا دوبارە دبیتەڤە هەروەکی نوکە د رویدەت.",
    original_explanation_ku: `قوتابیێن من، چ مللەت ل رۆژهەڵاتا ناڤین هندەی گەلێ کورد ئازارا تروما و ترسا پشتی کارەساتان نەچێژتیە. ل سالا ٢٠١٥ دەما کچێن رزگاربوو یێن کارەساتا شنگالێ گەهشتینە دەڤەرا دهۆکێ و زاخۆ، ئەز شایەدێ وێ چەندێ بووم کا چەوا بچووکترین دەنگێ با یان دیتنا کەسەکێ ریشدار دبووە ئەگەرێ داڕمان و گریانا بێ سنور. برینداریا وان جەستەیی نەبوو، بەلکو بیرەوەری د مێشکێ وان دا ب توندی هاتبوو بەستن.

ل دویڤ پەرتووکا گرنگ یا پرۆفیسۆر بێسێل ڤان دێر کۆلک (Bessel van der Kolk, 2014) ب ناڤێ 'The Body Keeps the Score'، تروما نەک بتنێ بیرەوەریەکە، بەلکو کارتێکرنێ ل سەر ئەناتۆمییا مێشکی دکەت. بەشێ بیردانکێ (Hippocampus) نەشێت رویدانا نەخۆش بئێخیتە د مێژووی دا؛ لەوما هەر جارەکا کەس دکەڤیتە بن فشارێ، ئەمیگدالا نامەیەکا درەوین دهنێریتە لەشی کو 'ئەڤرۆ جارەکا دی شەرە!'. لەش دەست ب لەرزین، دلکووتان، و عارەقکرنا سار دکەت.

ل کوردستانێ ژبەر کارەساتێن ئەنفال، هەلەبجە، و شنگالێ ب هزاران مالبات بێدەنگ ب دەست ڤێ نەخۆشیێ دنالن. زانستێ نوی یێ دەروونی پیشان دا کو ب رێکا تەکنیکێن وەک لڤینا چاڤان (EMDR) و گێڕانەوەیا چیرۆکان (NET)، دەمارێن مێشکی دشێن ئەڤ بیرەوەریێن کارەساتبار ساڕێژ بکەن و مرۆڤ ژ زیندانا رابردووی دەربکەڤیت.`,
    scientific_basis: "According to APA DSM-5-TR Criteria for Trauma-Related Disorders & Van der Kolk's Neurobiology of Trauma (2014, Viking Press).",
    experiment_original: "Van der Kolk, B. A. (2014). The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma. Penguin Books.",
    scientist: "Bessel van der Kolk (Boston University School of Medicine)",
    experiment: "Neuroimaging of Trauma Memory Re-experiencing in PTSD Patients",
    symptoms: [
      "دووبارە ژیانەوەیا رویدانێ ب شێوەیێ زیندوو و فلاش باک (Flashbacks) د پێش چاڤان دا",
      "خەونێن ترسناک یێن شەڤێ دەربارەی شەر و کارەساتێ و راچڵەکین ب عارەقا سار",
      "دوورکەفتن ژ هەر کەس، جهـ، یان بیرەوەریەکێ کو رویدانێ بینیتە بیرا وی",
      "سڕبوونا هەستان و نەمانا کەیف و دلنەرمیێ بەرامبەر ب کەسوکار و زارۆکان",
      "هۆشیارییا زیادەڕەو (Hypervigilance) و چاڤنێریکردنی بەردەوام یا مەترسیێ",
      "راچڵەکینا بلەز ژ بچووکترین دەنگێ ترۆمبێل یان دەنگێن بلند",
      "تووڕەبوونا ژ نشکەکێ ڤە و تەقینێن سۆزداری یێن بێ کۆنترۆل"
    ],
    treatments: [
      "چارەسەریا لڤینا چاڤان (EMDR) بۆ ساڕێژکرنا بیرەوەریێن گیربووی د مێشکی دا",
      "چارەسەریا گێڕانەوەیا چیرۆکان (Narrative Exposure Therapy - NET) بۆ قوربانیێن جینۆسایدێ",
      "دەرمانێن تایبەت ب کێمکرنا مۆتەکەی شەڤێ (وەک Prazosin ب چاڤدێریا پزیشکی)",
      "پشتەڤانیا خێزانی و نەگۆتنا 'ئەو تشتە دەرباز بوو ژبیرا بکە' بەرامبەر ب قوربانیان"
    ],
    sources: [
      "https://www.apa.org/topics/ptsd",
      "https://www.who.int/news-room/fact-sheets/detail/post-traumatic-stress-disorder",
      "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd",
      "Original Book: Van der Kolk, B. (2014). The Body Keeps the Score. Penguin Books."
    ],
    keywords: ["ptsd", "تروما", "ئەنفال", "شنگال", "شەر", "trauma", "vanderkolk"]
  },
  {
    ocean: "Ocean 6: Mental Disorders",
    category: "Disorders",
    title_en: "Obsessive-Compulsive Disorder (OCD)",
    title_ar: "اضطراب الوسواس القهري",
    title_ku: "تێکچوونا وەسواسێ یا زۆردار (وەسواس / OCD)",
    summary_ku: "وەسواس نەخۆشیەکا دەروونی یا زۆردارە کو تێدا هزرێن بێزارکەر و نەڤیاین (وەک پیسبوون یان شک د دەستنڤێژ و قفلا دەرگەهی دا) دچنە د سەرێ مرۆڤی دا و دەست ژێ بەرنادەن، و مرۆڤ نەچار دبیت تشتان چەندین جاران دوبارە بکەت (وەک دەستشوشتن یان هژمارتن) دا ترسا وی کەم ببیت.",
    original_explanation_ku: `ل ساڵا ٢٠١٩ گەنجەکێ ٢٤ ساڵی ژ باژێرێ زاخۆ هاتە نوسینگەیێ من، دەستێن وی هەموو بریندار و سوور ببوون ژبەر پاککەرەوەیان. دگۆت: 'مامۆستا، ئەز رۆژێ سێ دەمژمێران د ناڤ حەمامێ دا دەستێن خۆ دشۆم! ئەز بخۆ دزانم دەستێن من یێن پاقژن، لێ دەنگەک د سەرێ من دا دبێژیت ئەگەر جارەکا دی نەشۆی دێ مالباتا تە ژبەر میکرۆبێن تە مریت!'. ئەڤە نموونەیا کلاسیکی یا نەخۆشیا وەسواسێ یە.

ل دویڤ ڤەکۆلینێن دکتۆرە ئێدنا فۆوا (Edna Foa, 2004) ل زانکۆیا پەنسلڤانیا، وەسواس ژ دوو ئەڵقەیان پێکدهێت:
١. هزرا وەسواسێ (Obsession): هزرەکا نەڤیاین کو دڵەڕاوکێیەکا دژوار چێدکەت.
٢. رەفتارا زۆردار (Compulsion): ئەو کارەیە کو مرۆڤ دکەت تا ترسا وی ب شێوەیەکێ کاتی دانەمرێت.
کێشە ئەوە هەر جارەکا مرۆڤ گوهداریا وەسواسێ دکەت و دەستێن خۆ دشۆت، ئەو مێشکێ خۆ فێر دکەت کو مەترسی یا راستەقینە بوو!

ل سەر ئاستێ دەماری، لێکۆڵینەوەیێن MRI پیشان ددەن تێکچوونەک د بازنەیا Cortico-Striato-Thalamo-Cortical (CSTC) دا هەیە کو ناهێلیت مێشک پەیاما 'تە کار ب درۆستی ئەنجام دا، خلاس بوو' وەربگریت. چارەسەریا زێڕین یا جیهانی رێکارێ ERP یە کو فێری مرۆڤی دکەت دەست ل دەرگەهی بدەت و بەرگەیا ترسی بگریت بێی کو دەستێن خۆ بشۆت.`,
    scientific_basis: "According to APA DSM-5-TR Diagnostic Criteria & Edna Foa's Exposure and Response Prevention Protocols (Foa, 2004).",
    experiment_original: "Foa, E. B., & Kozak, M. J. (1996). Emotional Processing of Fear: Exposure to Corrective Information. Clinical Psychology Review.",
    scientist: "Edna B. Foa (University of Pennsylvania)",
    experiment: "Randomized Controlled Trials for ERP in Obsessive-Compulsive Disorder",
    symptoms: [
      "هزر و وێنەیێن دووبارە دەربارەی پیسبوون، میکرۆب، و جڕووبان د سەرێ دا",
      "گومانا بەردەوام دەربارەی قفلکردنی دەرگەهی، کوژاندنا گازێ، یان کارەبێ",
      "شووشتنا دەستان بۆ دەمێ پتر ژ نیڤ دەمژمێرێ هەتا پێستێ وی بریندار دبیت",
      "دووبارەکرنا دەستنڤێژ و نڤێژێ چەندین جاران ژ ترسا ئەوەی کو قەبوول نەبوویە",
      "رێکخستنا کەرەستەیان ب شێوەیەکێ هاوتا و رێکخستی بێی ئێک میللیم خەلەتی",
      "پێداویستیا زۆردار ب هژمارتنا تشتان یان دووبارەکرنا پەیڤان د دلێ خۆ دا",
      "ترسا مەزن ژ وێ یەکێ کو ب هزرێن خۆ زیانێ ب کەسەکێ نێزیک بگەهینیت"
    ],
    treatments: [
      "چارەسەریا رووبەرووبوون و نەکرنا رەفتارێ (Exposure and Response Prevention - ERP)",
      "دەرمانێن رێکخستنا سیرۆتۆنینێ ب ژەما بلند (SSRIs وەک فلوکسیتین یان سێرترالین)",
      "چارەسەریا قەبوولکرن و پابەندبوونێ (ACT) بۆ نادیدەگرتنا هزرێن وەسواسێ",
      "تێگەهشتنا خێزانێ کو نابیت هاریکاریا نەخۆشی بکەن د پشکنین و شوشتنێ دا"
    ],
    sources: [
      "https://www.apa.org/topics/ocd",
      "https://iocdf.org/about-ocd",
      "https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd",
      "Original Book: Foa, E. B. (2004). Stop Obsessing! How to Overcome Your Obsessions and Compulsions. Bantam."
    ],
    keywords: ["وەسواس", "ocd", "دەستنڤێژ", "شک", "foa", "دەستشوشتن", "زاخۆ"]
  },
  {
    ocean: "Ocean 6: Mental Disorders",
    category: "Disorders",
    title_en: "Panic Disorder & Agoraphobia",
    title_ar: "اضطراب الهلع ونوبات الذعر",
    title_ku: "نۆبەیێن تۆقینێ و ترسا جهێن گشتی (Panic Disorder)",
    summary_ku: "نۆبەیا تۆقینێ دەستپێکرنەکا ژ نشکەکێ ڤە یا ترسەکا گەلەک دژوار و دللەرزینێ یە کو د چەند خولەکان دا دگەهیتە لوتکەیێ. دل ب لەز لێددات، بێهن تەنگ دبیت، و مرۆڤ هەست دکەت دێ نوکە جەڵتە لێدەت یان مریت. ترسا دووبارەبوونا ڤان نۆبەیان وا دکەت مرۆڤ نەوێریت بچیتە ناڤ بازاڕ و قەرەباڵغیێ.",
    original_explanation_ku: `گەلەک جاران ل دەمێ شەوانە، کادرێن تەندروستی ل بەشێ فریاکەوتنێ (طوارئ) ل نەخۆشخانەیا دهۆکێ تەلەفۆن بۆ من دکرن: 'مامۆستا، گەنجەکێ ٢٨ ساڵی هاتیە، دلێ وی ١٤٠ لێدانان لێددات، دلەرزیت و هاوار دکەت دێ مرم! لێ هێڵکارییا دلی و فەحسێن وی هەموو سەد د سەد ساخلەمن!'. دەما ئەز دەچووم، من دزانی ئەڤە نۆبەیا تۆقینێ یە (Panic Attack).

ل دویڤ مۆدێلا زانستی یا پرۆفیسۆر دەیڤید کلارک (David M. Clark, 1986) ل زانکۆیا ئۆکسفۆرد، نۆبەیا تۆقینێ ژ ئەنجامێ 'لێکدانەوەیا کارەساتبار یا نیشانێن لەشی' پەیدا دبیت (Catastrophic Misinterpretation). بۆ نموونە: کەسەک قاوەیەکێ دڤەخۆت و دلێ وی تۆزەک بلەز لێددات، لەجیاتی ئەوەی بێژێت 'ژ ئەگەرێ قاوەیێ یە'، مێشکێ وی دبێژیت 'جەڵتەیە و دێ مرم!'. ئەڤ هزرە ئەدرینالینێ بەرز دکەت، دل هێشتا بلەزتر لێددات، و بازنەیا کارەساتێ دگەهیتە ئەوپەڕی خۆ.

نۆبەیا تۆقینێ هەرچەندە گەلەک یا ترسناکە، لێ قەت نابیتە ئەگەرێ مرنێ و زیانێ ناگەهینیتە دلی! دەما کەس تێبگەهیت ئەڤە بتنێ هەڵەیەکا سیستەمێ ئاگادارکردنەوەیە و فێری هەناسەدانا هێمن ببیت، نەخۆشی د ناڤ چەند حەفتیان دا ب تەمامی لاواز دبیت.`,
    scientific_basis: "According to APA DSM-5-TR Criteria & David M. Clark's Cognitive Model of Panic (Clark, 1986, Behaviour Research and Therapy).",
    experiment_original: "Clark, D. M. (1986). A Cognitive Approach to Panic. Behaviour Research and Therapy, 24(4), 461-470.",
    scientist: "David M. Clark (University of Oxford)",
    experiment: "Catastrophic Misinterpretation of Bodily Sensations Laboratory Protocols",
    symptoms: [
      "لێدانا زۆر بلەز و ب هێز یا دلی (دلکووتان) د سنگ دا بێی هۆکارەکێ جەستەیی",
      "بێهن تەنگیەکا دژوار و هەستکرن ب وێ یەکێ کو هەوا تێرێ ناکەت و دێ خنکیت",
      "لەرزینا دەست و لاقان، گێژبوون، و عارەقکرنا سار",
      "سڕبوونا دەم و چاڤ و پەنجەیان دگەل وشکبوونا دەڤی",
      "ترسەکا بێ سنور ژ مرنێ، جەڵتەیا دلی، یان شێتبوونێ",
      "هەستکرن ب وێ یەکێ کو دنیا یان لەشێ وی نە راستەقینە یە (Derealization)",
      "ترسا بەردەوام د ناڤبەرا نۆبەیان دا دەربارەی ئەوەی کەنگی نۆبەیا نوو دێ هێت"
    ],
    treatments: [
      "تێگەهشتنی زانستی کو نۆبەیا تۆقینێ زیانێ ناگەهینیتە دلی و نابیتە ئەگەرێ مرنێ",
      "راهێنانا هەناسەدانا هێمن (٤ چرکە وەرگرتن، ٤ چرکە راگرتن، ٦ چرکە بەردان)",
      "چارەسەریا رووبەرووبوونێ دگەل نیشانێن لەشی (Interoceptive Exposure)",
      "دوورکەفتن ژ کافایین، ڤەخوارنێن وزەبەخش، و جگەرێ"
    ],
    sources: [
      "https://www.apa.org/topics/anxiety/panic-disorder",
      "https://www.mayoclinic.org/diseases-conditions/panic-attacks",
      "https://www.nimh.nih.gov/health/topics/panic-disorder",
      "Original Paper: Clark, D. M. (1986). A Cognitive Approach to Panic. Behaviour Research and Therapy."
    ],
    keywords: ["panic", "تۆقین", "دلکووتان", "جەڵتە", "clark", "هەناسە", "دهۆک"]
  },
  {
    ocean: "Ocean 6: Mental Disorders",
    category: "Disorders",
    title_en: "Bipolar I Disorder",
    title_ar: "اضطراب ثنائي القطب النوع الأول",
    title_ku: "نەخۆشیا دوو جەمسەری یا جۆڕێ ئێکێ (شەیدایی و خەمۆکی)",
    summary_ku: "نەخۆشیا دوو جەمسەری تێکچوونەکا بایۆلۆجی یا مێزاجی یە کو تێدا کەس د ناڤبەرا دوو حالەتێن زێدە دژوار دا هاتوچۆ دکەت: لەهیەکا بلند یا شەیداییێ (Mania) کو خەو نامینیت و وزەیا زۆر پەیدا دبیت، و کەفتنەکا قویر بۆ ناڤ خەمۆکیەکا دژوار کو ناهێلیت ژ جهێ خۆ راببیت.",
    original_explanation_ku: `قوتابیێن من، نەخۆشیا دوو جەمسەری گەلەک جاران د جڤاکێ مە دا ب شێوەیەکێ شاش وەک 'تێکچوونا ئەخلاقی' دهێتە دیتن. ساڵا پار مالباتەک هاتە دەف من دگەل کورێ خۆ یێ ٣٢ ساڵی. دگۆتن: 'مامۆستا، ئەڤ کورە هەتا هەیڤا بوری یێ خەمۆک بوو و دەستێ خۆ ژ مال نەدئینا دەر، لێ نوکە ٥ رۆژە نەخەفتیە، دبێژیت ئەز نوێنەرێ پاشایێ دنیایێ مە، سێ دەفتەر دۆلار بەلاڤ کرینە ل سەر خەلکی و ب لەزاتیا ١٦٠ ل جاددەیان ترۆمبێلێ لێدخوڕیت!'. ئەڤە قۆناغا تەواو یا شەیداییێ یە (Full Mania).

ئەڤ نەخۆشیە ئێکەم جار ژ لایێ زانایێ مەزن یێ ئەڵمانی ئێمیل کرایپێلین (Emil Kraepelin, 1899) هاتە جوداکرن ژ شیزۆفرینیایێ. د دەمێ مانیا دا، بەشێ پێشییا مێشکی (Prefrontal Cortex) کۆنترۆلا خۆ ژ دەست ددەت و دۆپامین ب شێوەیەکێ زۆر بەرز دبیتە سەدەما دروستبوونا باوەریێن مەزناهیێ (Grandiosity). دەما شەیدایی خلاس دبیت، نەخۆش دکەڤیتە د ناڤ خەمۆکیەکا ڕەش دا.

ئەڤ نەخۆشیە بەرزترین رێژەیا بۆماوەیی (Genetics) هەیە د ناڤ نەخۆشیێن دەروونی دا (پتر ژ ٧٠٪). دەرمانێن سەقامگیرکەرێن مێزاجی (Mood Stabilizers) وەک لیسیۆم (Lithium) و سۆدیۆم ڤالپرۆات گرنگترین فاکتەرن بۆ ژیانەکا پارێزراو.`,
    scientific_basis: "According to APA DSM-5-TR Criteria for Bipolar and Related Disorders & Kraepelin's Manic-Depressive Psychosis Classifications (1899).",
    experiment_original: "Kraepelin, E. (1899). Psychiatrie: Ein Lehrbuch für Studierende und Aerzte. Barth Publishing.",
    scientist: "Emil Kraepelin (University of Munich)",
    experiment: "Longitudinal Manic-Depressive Cohort Classifications",
    symptoms: [
      "نەمامانا پێدڤیاتیا خەوێ (نڤستنا بتنێ ٢ دەمژمێران بێی هەستکرن ب وەستیانێ)",
      "ئاخفتنا زۆر بلەز و بازدان ژ بابەتەکی بۆ بابەتەکێ دی ب بێ راوەستیان",
      "باوەرکرن ب وێ یەکێ کو خاوەن هێز و شیانێن نائاسایی یە یان نامەیەک بۆ هاتیە",
      "بڕیاردانا مەترسیدار وەک سەرفکردنی هەموو پارەیێ مالێ یان گێڕانا کارێن نائاسایی",
      "کەفتنا کتوپڕ بۆ ناڤ خەمۆکیەکا قویر و بێهیوایی یا گران پشتی مانیا",
      "تێکچوونا پەیوەندیێن خێزانی و کۆمەڵایەتی"
    ],
    treatments: [
      "دەرمانێن سەقامگیرکەرێن مێزاجی (Lithium یان Sodium Valproate) ب چاڤدێریا پزیشکی",
      "رێکخستنا توند یا دەمژمێرێن خەو و بێهنڤەدانێ بۆ رێگریکردن ژ نۆبەیێن مانیا",
      "چارەسەریا دەروونی بۆ مالباتێ تا نیشانێن دەستپێکێ بناسن",
      "خۆ دوورخستن ژ کهول و ڤەخوارنێن وزەبەخش"
    ],
    sources: [
      "https://www.apa.org/topics/bipolar",
      "https://www.who.int/news-room/fact-sheets/detail/bipolar-disorder",
      "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
      "Original Book: Kraepelin, E. (1899). Compendium der Psychiatrie."
    ],
    keywords: ["bipolar", "دووجەمسەری", "مانیا", "شەیدایی", "لیسیۆم", "kraepelin", "خەمۆکی"]
  },
  {
    ocean: "Ocean 6: Mental Disorders",
    category: "Disorders",
    title_en: "Schizophrenia",
    title_ar: "الفصام العقلي (الشيزوفرينيا)",
    title_ku: "شیزۆفرینیا (ژێکڤەبوونا پەیوەندیا عەقڵی دگەل واقیعی)",
    summary_ku: "شیزۆفرینیا تێکچوونەکا گران و درێژخایەن یا مێشکی یە کو تێدا جوداهیا د ناڤبەرا راستیێ و وەهمێ دا تێکدچیت. کەس تووشی بهیستنا دەنگێن نادیار و باوەریێن سەیر یێن درەوین دبیت وەک پیلانگێڕیێ. ئەڤ نەخۆشیە پێدڤی ب چاڤدێریا بەردەوام یا پزیشکی هەیە.",
    original_explanation_ku: `قوتابیێن من، مەزنترین زولم کو ل کەسەکێ نەخۆش بهێتە کرن ئەوەیە کو شیزۆفرینیا ب 'جنۆکە و دەستکردی' بهێتە لێکدانەوە! سالا پار ل دەڤەرا ئاکرێ، گەنجەکێ ٢٢ ساڵی هاتە کلینیکێ پشتی کو دوو ساڵان ژ لایێ مالباتی ڤە ل ژوورەکێ هاتبوو بەستن و دگۆتن 'تۆڕا سحرێ لێ کریە'. گەنجی دگۆت: 'دەنگ د گوها من دا فەرمانێ دکەن و دبێژن هەموو ئاڤا باژێری یا ژەهراوی یە!'. پشتی بتنێ ٣ حەفتیان ژ وەرگرتنا دەرمانێن زانستی، دەنگ ب تەمامی وەستان و گەنج زڤڕی بۆ ناڤ ژیانا ئاسایی.

زانایێ سویسری ئۆیگین بلۆیلەر (Eugen Bleuler, 1911) ناڤێ 'شیزۆفرینیا' داهێنا کو واتا ژێکڤەبوونا بەشێن هزر و هەستانە، نەک فرەکەسایەتی!
ل گۆرەی پێوەرێن DSM-5-TR، نیشان دابەش دبن بۆ دوو پشک:
١. نیشانێن ئەرێنی (Positive): وەکو وەڕڕەوێ (Hallucinations) و باوەریێن پارانۆیا (Delusions) کو ژ ئەنجامێ زێدەبوونا دۆپامینێ یە د بەشێ Mesolimbic دا.
٢. نیشانێن نەرێنی (Negative): سڕبوونا هەستان و گۆشەگیری ژبەر کێمبوونا دۆپامینێ د پێشییا سەرێ دا.

شیزۆفرینیا نەخۆشیەکا سەد د سەد بایۆلۆجی یە. ب رێکا دەرمانێن Antipsychotics یێن سەردەم، نەخۆش دشێت ژیانەکا شایستە و سەربەخۆ بژیت ئەگەر ستیگمایا جڤاکی نەهێلیت.`,
    scientific_basis: "According to APA DSM-5-TR Diagnostic Criteria for Schizophrenia Spectrum Disorders & Bleuler's Concept of Schizophrenia (1911).",
    experiment_original: "Bleuler, E. (1911). Dementia Praecox oder Gruppe der Schizophrenien. Deuticke Publishing.",
    scientist: "Eugen Bleuler (University of Zurich)",
    experiment: "The Four A's (Affect, Associations, Ambivalence, Autism) Clinical Observations",
    symptoms: [
      "بهیستنا دەنگان د گوها دا کو کەسێ دی نابهیسیت (Auditory Hallucinations)",
      "باوەریێن نەگۆڕ و هەڵە کو دەزگەهـ یان کەس پیلانێ ل دژی وی دگێڕن (Paranoid Delusions)",
      "شپرزەبوونا ئاخفتنێ و پێکڤەنەبەستنا رستە و پەیڤان",
      "گۆشەگیرییا تەمام و نەمانا گرنگیدان ب پاکوخاوێنی و جلکێن خۆ",
      "سڕبوونا دەم و چاڤان و نیشان نەدانا چو هەستەکێ ل دەمێ رویدانان",
      "لاوازبوونا شیانا کارکردن و خاندنێ"
    ],
    treatments: [
      "دەرمانێن دژی شیزۆفرینیایێ (Antipsychotics وەک ئۆلانزاپین، ریسپێریدۆن، یان ئاریپیپرازۆل)",
      "پشتەڤانیا خێزانی و نەهێلانا لۆمە و گۆتنێن بریندارکەر د مالێ دا",
      "چارەسەریا راهێنانەوەیا جڤاکی (Social Skills Training) بۆ گێڕانەوە بۆ ژیانا کارێ",
      "رێکخستنا سەرەدانا بەردەوام یا نۆشدارێ دەروونی"
    ],
    sources: [
      "https://www.apa.org/topics/schizophrenia",
      "https://www.who.int/news-room/fact-sheets/detail/schizophrenia",
      "https://www.nimh.nih.gov/health/topics/schizophrenia",
      "Original Book: Bleuler, E. (1911). Dementia Praecox or the Group of Schizophrenias. International Universities Press."
    ],
    keywords: ["شیزۆفرینیا", "وەهم", "دەنگ", "bleuler", "دۆپامین", "ئاکرێ", "delusion"]
  },
  {
    ocean: "Ocean 6: Mental Disorders",
    category: "Disorders",
    title_en: "Borderline Personality Disorder (BPD)",
    title_ar: "اضطراب الشخصية الحدية",
    title_ku: "کەسایەتیا سنوری و برینداریا سۆزداری (BPD)",
    summary_ku: "کەسایەتیا سنوری برینیارترین بارودۆخێ سۆزداری یە کو تێدا کەس نەشێت هەستێن خۆ کۆنترۆل بکەت. ترسا مەزن ژ وێ یەکێ کو کەسێن نێزیک وی بجهـ بهێلن وا دکەت ب دژواری بەرپەرچ بدەتەوە، هەست ب ڤالاهیەکا رەش د ناخی دا بکەت، و دەست بۆ بریندارکردنی لەشێ خۆ ببەت.",
    original_explanation_ku: `قوتابیێن من، دکتۆرە مارشا لاینهان (Marsha Linehan) دەروونناسا ناڤدارا جیهانی دبێژیت: 'کەسێ خودان BPD وەکی ئەوەیە پیستێ هەستێن وی هاتبیە سۆتن؛ بچووکترین با کێشە، ئازارەکا دژوار دگەهینیتێ!'. ل دەڤەرا مە، کچەکا ٢١ ساڵی هاتە دەف من پشتی کو چەندین جاران ب تیغ دەستێن خۆ بریندار کربوون. مالباتا وێ تووڕە بوون و دگۆتن 'بتنێ حەز ل سەرنجڕاکێشانێ دکەت!'. لێ دەما من دگەل باخڤت، من دیت ئازارا وێ ئەوەندە گران بوو نەدشیا تەحەمۆل بکەت و دگۆت 'دەما دەستێ خۆ بریندار دکەم، ئازارا لەشی سەرنجا من ژ وێ ڤالاهیا رەش یا سینگێ من دوور دئێخیت!'.

د تێکچوونا کەسایەتیا سنوری دا، مێشک د ناڤ رەش و سپی دا دژیت (Splitting)؛ کەسەک یان فریشتەیە یان دوژمنە. ئەگەر هەڤالێ وی درەنگ جوابا نامەیێ بدەت، ئێکسەر باوەر دکەت دەست ژێ بەرددات و تووشی داڕمانێ دبیت.

مارشا لاینهان بخۆ د گەنجاتیێ دا ب دەست ڤێ نەخۆشیێ دنالی و هاتبووە زیندانیکردن د نەخۆشخانێ دا! لێ شییا شۆڕشەکێ بکەت و چارەسەریا دیالەکتیکی یا رەفتارێ (DBT) دابهێنیت. زانست سەلماندیە کو ب رێکا فێربوونا تەحەملا ئازارێ و هۆشیاریێ، کەسێ BPD دشێت بگەهیتە ئارامیەکا باڵا.`,
    scientific_basis: "According to APA DSM-5-TR Criteria for Borderline Personality Disorder & Marsha Linehan's Biosocial Theory (1993, Guilford Press).",
    experiment_original: "Linehan, M. M. (1993). Cognitive-Behavioral Treatment of Borderline Personality Disorder. Guilford Press.",
    scientist: "Marsha M. Linehan (University of Washington)",
    experiment: "Randomized Controlled Trials of Dialectical Behavior Therapy for Chronically Suicidal Borderline Patients",
    symptoms: [
      "ترسەکا بێ سنور ژ بجهێلان و رەتکردنەوە ژ لایێ کەسێن خۆشەویست ڤە",
      "پەیوەندیێن زێدە نەجێگیر؛ زوو بەرزکردن بۆ ئاسمانی و زوو نەفرەت لێکردن (Splitting)",
      "بریندارکردنی لەشێ خۆ ب تیغ یان سۆتن وەک رێکەک بۆ کەمکردنی ئازارا ناخی",
      "گوهۆڕینا کتوپڕ یا مێزاجی د ناڤ چەند دەمژمێران دا (خەم، تووڕەبوون، هیوا)",
      "هەستکردن ب ڤالاهیەکا بەردەوام و بێ ئەندازە د ناخی سینگ دا",
      "تەقینێن دژوار یێن تووڕەبوونێ ژبەر کێشەیێن بچووک و پاشی پەشیمانی",
      "تێکچوونا دیدگایێ ل سەر ناسنامەیا خۆ (نەزانینا ئەوەی ئەز کی مە و چ دڤێت)"
    ],
    treatments: [
      "چارەسەریا دیالەکتیکی یا رەفتارێ (DBT) ب شێوازێ تایبەت و بەردەوام",
      "تەکنیکا TIPP: دانانا دەم و چاڤان د ئاڤا بەفرێ دا بۆ ٣٠ چرکان ل دەمێ تەقینا هەستان",
      "فێربوونا شارەزاییێن رێکخستنا هەستان (Emotion Regulation)",
      "دانانا سنورێن رۆشن د پەیوەندیان دا بێی شکاندن"
    ],
    sources: [
      "https://www.apa.org/topics/personality-disorders/borderline",
      "https://www.nimh.nih.gov/health/topics/borderline-personality-disorder",
      "https://www.mayoclinic.org/diseases-conditions/borderline-personality-disorder",
      "Original Book: Linehan, M. M. (1993). Cognitive-Behavioral Treatment of Borderline Personality Disorder. Guilford Press."
    ],
    keywords: ["bpd", "سنوری", "بوردرلاین", "linehan", "خۆئازاردان", "splitting", "dbt"]
  }
];
