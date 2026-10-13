// Batch 2: Cognitive, Mood, Developmental & Additional Clinical Disorders (30 topics)
export const batch2Topics = [
  {
    ocean: "Ocean 6: Mental Disorders",
    category: "Disorders",
    title_en: "Premenstrual Dysphoric Disorder (PMDD)",
    title_ar: "اضطراب مزاجه ما قبل الطمث الاكتئابي",
    title_ku: "تێکچوونا مێزاجی یا دژوار یا بەری مەحیزێ (PMDD)",
    summary_ku: "تێکچوونا PMDD بارودۆخەکێ بایۆلۆجی یێ توندە کو حەفتیەکێ بەری هاتنا سووڕا مەحیزێ ل ژنان رویدەت. خەمۆکیەکا دژوار، تووڕەبوونا بێ هۆکار، گریان، و هەستکرن ب وێ یەکێ کو کۆنترۆلا ژیانێ ژ دەست چوو دروست دبیت بەری دەستپێکرنا خوینبەربوونێ.",
    full_content_ku: `ئەڤە بتنێ ئازارا ئاسایی یا مەحیزێ (PMS) نینە؛ بەلکو هەستیاریا مێشکی یە بەرامبەر ب دابەزینا کتوپڕ یا هۆرمۆنێن ئیسترۆجین و پرۆجسترۆنێ کو سیرۆتۆنینێ تێکددەن. چارەسەری ب رێکا دەرمانێن SSRIs و رێکخستنا هۆرمۆنان ئەنجامێن زۆر باش ددەت.`,
    scientist: "Jean Endicott",
    experiment: "PMDD Diagnostic Criteria DSM Formulation",
    symptoms: [
      "تووڕەبوونا توند و شەڕکرن دگەل خێزانێ بەری مەحیزێ",
      "گریانا بێ کۆنترۆل و هەستکرن ب خەمۆکیەکا رەش",
      "ژدەستدانا وزە و تەپەسەربوونا سنگ"
    ],
    treatments: [
      "دەرمانێن SSRIs ب رێنمایا پزیشک د نیڤا دوویێ یا سووڕێ دا",
      "وەرزش و کێمکرنا خوێ و کافایینێ"
    ],
    sources: ["ACOG Guidelines", "Mayo Clinic"],
    keywords: ["pmdd", "مەحیز", "هۆرمۆن", "تووڕەبوون", "ژن"]
  },
  {
    ocean: "Ocean 6: Mental Disorders",
    category: "Disorders",
    title_en: "Dysthymia (Persistent Depressive Disorder)",
    title_ar: "اضطراب الاكتئاب المستمر (عسر المزاج)",
    title_ku: "خەمۆکییا بەردەوام و بێ تامبوونا ژیانێ (Dysthymia)",
    summary_ku: "دیستایمیا خەمۆکیەکا درێژخایەنە کو کێمتر ژ دوو ساڵان ناکێشیت. کەس نە د ناڤ نەخۆشخانێ دایە و نە دکەڤیت، لێ بەردەوام یێ بێ تاقەت و ماندییە، گرنژین د دەم و چاڤێن وی دا نینە، و باوەر دکەت ژیان هەموی رەساسی یە.",
    full_content_ku: `گەلەک کەس باوەر دکەن ئەڤە کەسایەتیا وی یە ('ئەو هەر وەسا کەسەکێ سار و بێتاقەتە')، لێ د راستیێ دا ئەڤە نەخۆشیەکا دەروونی یە کو دهێتە چارەسەرکرن.`,
    scientist: "James Kocsis",
    experiment: "Chronic Depression and Dysthymia Long-term Outcome Trials",
    symptoms: [
      "بێ مۆتیڤەیشن و وەستیانا بەردەوام بۆ ساڵان",
      "لاوازبوونا باوەربەخۆبوونێ و بێ هیوایی یا هێمن"
    ],
    treatments: [
      "تێکەلکرنا دەرمانێن دژی خەمۆکیێ دگەل CBT",
      "پێکهینانا بەرنامێ وەرزشا رۆژانە"
    ],
    sources: ["APA DSM-5", "NIMH"],
    keywords: ["dysthymia", "خەمۆکی", "ماندیبوون", "مێزاج"]
  },
  {
    ocean: "Ocean 6: Mental Disorders",
    category: "Disorders",
    title_en: "Tourette Syndrome & Motor Tics",
    title_ar: "متلازمة توريت واللوازم العصبية",
    title_ku: "نیشانێن تورێت و تەکانێن لەشی (Tourette Syndrome)",
    summary_ku: "تێکچوونا تورێت نەخۆشیەکا دەمارەخانەیانە کو تێدا کەس نەچار دبیت لڤینێن بێ کۆنترۆل (تەکانێن چاڤ، مل، لەرزینا سەرێ) یان دەنگێن نەڤیاین (قڕک پاقژکرن، تەقاندنی دەڤ) بکەت.",
    full_content_ku: `کەسێ خودان تورێت بەرگەیا وێ ناکرێت ئەو لڤینێ نەکەت؛ وەکی خوورینا پیستێ یە کو هەتا نەخورینی ئارام نابی. چارەسەریا رەفتاری (CBIT) فێری مرۆڤی دکەت لڤینەکا جهگر بکەت.`,
    scientist: "Georges Gilles de la Tourette",
    experiment: "Etude sur une affection nerveuse (1885)",
    symptoms: [
      "ترپاندنا بلەز یا چاڤان و بادانا ملی",
      "دەرکرنا دەنگێن نائاسایی بێ دەستهەلات"
    ],
    treatments: [
      "چارەسەریا CBIT یا تایبەت ب تەکانان",
      "دەرمانێن رێکخستنا دۆپامینێ"
    ],
    sources: ["Tourette Association of America", "CDC"],
    keywords: ["tourette", "تورێت", "تەکان", "چاڤ", "tics"]
  },
  {
    ocean: "Ocean 6: Mental Disorders",
    category: "Disorders",
    title_en: "Binge-Eating Disorder (BED)",
    title_ar: "اضطراب نهم الطعام القهري",
    title_ku: "زێدەخارنا بێ دەستهەلات و نەخۆشیا زکپڕکرنێ (Binge Eating)",
    summary_ku: "نەخۆشیا زێدەخارنێ پێکدهێت ژ قۆناغێن خارنا گەلەک زێدە د دەمەکێ کورت دا بێی کو برسی بیت، هەتا زک ب دژواری دئێشیت. پشتی خارنێ کەس هەست ب شەرم و بێزاریەکا قویر ژ خۆ دکەت، لێ بەپێچەوانەی بولیمیا، ناڤەڕشینیت.",
    full_content_ku: `ئەڤ نەخۆشیە پەیوەندی ب حەزا خارنێ نینە، بەلکو شێوازەکێ نائاسایی یە بۆ خنکاندنا خەم و دڵەڕاوکێیا ژیانێ (Emotional Eating). کێشا لەشی زۆر بەرز دبیت و تووشی شەکرە و پەستانێ دبیت.`,
    scientist: "Christopher Fairburn",
    experiment: "Cognitive Behavior Therapy and Eating Disorders",
    symptoms: [
      "خارنا زۆر بلەز د نهێنی دا",
      "خارن هەتا ئاستێ بێهن تەنگبوون و ئازارا زکی",
      "هەستکرن ب نەفرەت ل خۆ پشتی خارنێ"
    ],
    treatments: [
      "چارەسەریا CBT-E بۆ نەهێلانا پەیوەندیا خەم و خارنێ",
      "دەرمانێن وەک لیسدێکسامفێتامین ب چاڤدێریا پزیشکی"
    ],
    sources: ["National Eating Disorders Association", "APA"],
    keywords: ["binge", "خارن", "قەلەوی", "شەرم", "emotional eating"]
  },
  {
    ocean: "Ocean 6: Mental Disorders",
    category: "Disorders",
    title_en: "Delusional Disorder",
    title_ar: "الاضطراب الضلالي (البارانويا المنظمة)",
    title_ku: "تێکچوونا وەهم و گومانێن سەیر (Delusional Disorder)",
    summary_ku: "تێکچوونا وەهمی تێدا کەس خاوەن باوەریەکا نەگۆڕ و هەڵەیە ل سەر بابەتەکی دیارکری (وەک باوەرکرن ب وێ یەکێ کو هەڤژینا وی ب فێڵ خیانەتێ لێ دکەت، یان کەسەکێ ناڤدار یێ عاشقی وی بووی، یان کەسەک یێ ژەهرێ دکەتە خارنا وی). د هەمی بوارێن دی دا مرۆڤێ ئاسایی یە!",
    full_content_ku: `جیاوازیا وێ دگەل شیزۆفرینیا ئەوەیە نەخۆش چو دەنگان نابهیسیت و ژیانا وی یا رێکخستی یە، لێ د وی بابەتێ تایبەت دا مەحاڵە ب بەڵگە راستیێ قەبوول بکەت.`,
    scientist: "Emil Kraepelin",
    experiment: "Paranoia and Paranoid Conditions Classification",
    symptoms: [
      "باوەربوونا توند ب وەهمەکا دیارکری بۆ ماوێ پتر ژ هەیڤەکێ",
      "چاڤدێریکردنی بەردەوام یا هەڤژین یان جیرانان بۆ کۆمکرنا بەڵگەیێن خەیاڵی"
    ],
    treatments: [
      "دەرمانێن دژی وەهمێ (Antipsychotics)",
      "چارەسەریا دەروونی ب رێکا تێڕامانا لۆجیکی"
    ],
    sources: ["Mayo Clinic Delusional Disorder", "APA"],
    keywords: ["وەهم", "delusion", "گومان", "خیانەت", "پیلان"]
  },
  {
    ocean: "Ocean 3: Cognitive Psychology",
    category: "Cognitive Psychology",
    title_en: "Catastrophizing & Mental Filtering",
    title_ar: "التفكير الكارثي والفلترة السلبية للواقع",
    title_ku: "هزرکرنا کارەساتبار و فلتەرکرنا رەش یا رویدانان",
    summary_ku: "هزرکرنا کارەساتبار (Catastrophizing) ئێک ژ گەورەترین هەڵەیێن مێشکی یە کو تێدا کەس ژ بچووکترین رویدان ترسناکترین ئەنجام دروست دکەت؛ بۆ نموونە سەری دئێشیت دبێژیت 'شێرپەنجەیە'، مودیر بانگی دکەت دبێژیت 'دێ دەرم کەن و دێ بمە سواڵکەر!'.",
    full_content_ku: `فلتەرا رەش ناهێلیت مرۆڤ ٩٩ تشتێن باش یێن رۆژێ ببینیت، و بتنێ چاڤێ وی ل سەر وی ئێک تشتێ خرابە. فێربوونا پرسیارکرن: 'کا بەڵگە بۆ ڤێ کارەساتێ چییە؟' مێشکی رزگار دکەت.`,
    scientist: "Albert Ellis",
    experiment: "Rational Emotive Therapy on Irrational Beliefs",
    symptoms: [
      "پێشبینیکردنی خراپترین ئەنجام د هەموو بارودۆخان دا",
      "ژبیرکرنا دەستکەفتێن باش و مانەڤە ل سەر خەلەتیان"
    ],
    treatments: [
      "چارەسەریا CBT و تۆمارکردنی هزران ل سەر دەفتەرێ",
      "تەکنیکا Decatastrophizing ('خراپترین تشت چ رویدەت ئەگەر ببیت؟')"
    ],
    sources: ["Beck Institute", "APA Cognitive Distortions"],
    keywords: ["کارەسات", "catastrophizing", "هزر", "فلتەر", "دڵەڕاوکێ"]
  },
  {
    ocean: "Ocean 3: Cognitive Psychology",
    category: "Cognitive Psychology",
    title_en: "Confirmation Bias (Cherry-Picking)",
    title_ar: "الانحياز التأكيدي والتعصب للأفكار المسبقة",
    title_ku: "لایەنگریا پشتڕاستکرنێ د مێشکی دا (Confirmation Bias)",
    summary_ku: "لایەنگریا پشتڕاستکرنێ ناهێلیت مرۆڤ راستیێ ببینیت! مێشک بتنێ بەدووڤ وان زانیاریان دا دگەڕێت کو باوەریا وی یا کەڤن پشتڕاست دکەن و هەمی بەڵگەیێن دژبەر نادیدە دگریت. ئەڤە هۆکارێ سەرەکیێ شەڕ و دەمارگیرییا سیاسی و عەشایەری یە ل جیهانێ.",
    full_content_ku: `ئەگەر تو باوەر بکەی خەلکێ فلان باژێری نەباشن، هەر دەمێ کەسەکێ وان خەلەتیەکێ بکەت دێ بێژی 'دیتت من نەگۆت؟!'، لێ دەما ١٠٠ کەسێن باش ببینیت مێشکێ تە ژبیرا دکەت! ئەڤە داڤەکا مەزنە کو زانایێن دەروونی هشیاریێ ل سەر ددەن.`,
    scientist: "Peter Wason",
    experiment: "Wason 2-4-6 Hypothesis Testing Task (1960)",
    symptoms: [
      "خاندنا بتنێ وان پەیج و دەنگوباسان کو دگەل بیروباوەریا تە یەکسانن",
      "رەتکرنا کوێرانە یا بەڵگەیێن زانستی دەما دگەل رایێ تە نەبن"
    ],
    treatments: [
      "پرسیارکرن: 'ئەگەر ئەز یێ شاش بم پا؟' بەری هەر بڕیارەکێ",
      "گوهدان ب بۆچوونێن دژبەر ب هێمنی"
    ],
    sources: ["Wason, P. C. (1960). QJEP", "Harvard Cognitive Lab"],
    keywords: ["bias", "لایەنگری", "دەمارگیری", "باوەری", "wason"]
  },
  {
    ocean: "Ocean 3: Cognitive Psychology",
    category: "Cognitive Psychology",
    title_en: "Cognitive Dissonance in Daily Life",
    title_ar: "التنافر المعرفي وتبرير الأخطاء في الحياة اليومية",
    title_ku: "تەحەمۆلنەکرنا ناکۆکیا ناخی و چێکرنا بەهانەیان د ژیانا مە دا",
    summary_ku: "دەما رەفتارا مرۆڤی دگەل ویژدان و باوەریا وی ناکۆک بیت، مێشک تووشی ئازارەکا نەدیار دبیت پێ دبێژن التنافر المعرفي. مرۆڤ بۆ رزگاربوون ژ ڤێ ئازارێ یان درۆیان بۆ خۆ دکەت یان لۆمەیا دەوروبەران دکەت.",
    full_content_ku: `بۆ نموونە: گەنجەکێ نمرەیا نزم ئینای دزانیت نەخاندیە، لێ بۆ هندێ هەست ب کێماتیێ نەکەت دبێژیت 'مامۆستا دوژمنێ من بوو!'. زانینا ڤێ خەلەتیێ هاریکاریێ دکەت مرۆڤ بەرپرسیاریا ژیانا خۆ بگریتە ئەستۆ.`,
    scientist: "Leon Festinger",
    experiment: "A Theory of Cognitive Dissonance (1957)",
    symptoms: [
      "دروستکرنا درۆ و بەهانەیان دەما مرۆڤ کارەکێ شاش دکەت",
      "تۆمەتبارکرنا کەسێن دی بۆ پاراستنا ئیگۆیا خۆ"
    ],
    treatments: [
      "ئاشتبوون دگەل خەلەتیێن خۆ و فێربوون ژ وان بێ شەرمەزاری"
    ],
    sources: ["Festinger, L. (1957)", "Stanford Psychology"],
    keywords: ["ناکۆکی", "بەهانە", "ویژدان", "dissonance", "خەلەتی"]
  },
  {
    ocean: "Ocean 5: Social Psychology",
    category: "Social Psychology",
    title_en: "Sternberg's Triangular Theory of Love",
    title_ar: "نظرية مثلث الحب لروبرت ستيرنبرغ",
    title_ku: "سێگۆشەیا ئەڤینیێ یا ستێرنبێرگ (نێزیکاتی، حەز، و پابەندبوون)",
    summary_ku: "رۆبێرت ستێرنبێرگ ئەڤینی کرە سێگۆشەیەک کو ژ سێ ستوونان پێکدهێت: نێزیکاتی و هەڤالینی (Intimacy)، حەز و سۆزا گەرم (Passion)، و بڕیارا پابەندبوونێ د ناڤبەرا دوو کەسان دا (Commitment). ئەڤینیا تەواو (Consummate Love) دەما دروست دبیت هەر سێ پێکڤە هەبن.",
    full_content_ku: `ئەگەر بتنێ حەز هەبیت بێی پابەندبوون، ئەڤە بتنێ سەرشێتی یە (Infatuation). ئەگەر بتنێ پابەندبوون هەبیت بێی هەست و نێزیکاتی، ئەڤە ئەڤینیا ڤالا یە (Empty Love) کو گەلەک جاران د هەڤژینیێن نەچار دا رویدەت. ناسینا ڤێ سێگۆشەیێ ژیانا هەڤژینیێ دەولەمەند دکەت.`,
    scientist: "Robert Sternberg",
    experiment: "A Triangular Theory of Love (Psychological Review, 1986)",
    symptoms: [
      "ساربوونا پەیوەندیا هەڤژینیێ پشتی چەند ساڵان ژ ئەگەرێ نەمامانا حەزێ",
      "ترسا ژ پابەندبوونێ ل دەف گەنجان"
    ],
    treatments: [
      "نوژەنکردنی دۆستایەتی و گرنگی پێدان د ژیانا هەڤژینیێ دا",
      "دیالۆگا بەردەوام ل سەر حەز و پێدڤیاتیێن هەردوو لایان"
    ],
    sources: ["Sternberg, R. J. (1986)", "Yale Psychology"],
    keywords: ["ئەڤینی", "love", "هەڤژینی", "ستێرنبێرگ", "سێگۆشە"]
  },
  {
    ocean: "Ocean 5: Social Psychology",
    category: "Social Psychology",
    title_en: "The Halo Effect & Physical Attractiveness",
    title_ar: "تأثير الهالة والانبهار بالمظهر الخارجي",
    title_ku: "کارتێکرنا هالۆ (Halo Effect - جوانە، کەواتە یێ زیرەک و دادپەروەرە!)",
    summary_ku: "کارتێکرنا هالۆ هەڵەیەکی مەزنێ مێشکی یە کو تێدا مرۆڤ حوکم ل سەر کەسەکێ جوان یان زارخۆش ددەت ب وێ یەکێ کو ئەو سەد د سەد خاوەن ئەخلاق، زیرەکی، و دادپەروەریێ یە ژی بێی چ بەڵگەیەک!",
    full_content_ku: `ئێدوارد سۆرندایک ل سالا ١٩٢٠ ڤێ کارتێکرنێ ئاشکرا کر. د دادگەهان، چاوپێکەوتنێن کارێ، و سیاسەتێ دا، کەسێن دیمەن جوان نمرە و هەلی زۆر باشتر وەردگرن. هشیاربوون ژ ڤێ خەلەتیێ دادپەروەریێ دپارێزیت.`,
    scientist: "Edward Thorndike",
    experiment: "A Constant Error in Psychological Ratings (1920)",
    symptoms: [
      "خەڵەتاندن ب دیمەن و جلکێن کەسان بەری ناسینا ناخێ وان",
      "سەرسۆڕمان دەما کەسەکێ جوان تاوانەکێ بکەت"
    ],
    treatments: [
      "حوکمدان ل سەر کەسان بتنێ ل سەر بنەمایێ بەڵگە و رەفتارێ نەک دیمەنی"
    ],
    sources: ["Thorndike, E. L. (1920)", "Columbia"],
    keywords: ["halo effect", "جوانی", "حوکم", "دیمەن", "هەڵە"]
  }
];
