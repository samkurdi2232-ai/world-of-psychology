import { Ocean } from '../types';

export const ocean2: Ocean = {
  id: "ocean-2",
  title: {
    en: "Ocean 2: Sleep, Dreams & Circadian Rhythms",
    ar: "المحيط 2: النوم والأحلام والإيقاع الحيوي",
    ku: "بەحرا 2: خەو، خەون و دەمژمێرا بایۆلۆجی یا لەشی"
  },
  subtitle: {
    en: "Insomnia, REM sleep architecture, nightmares, sleep hygiene, lucid dreaming & circadian neurobiology",
    ar: "الأرق، ومراحل نوم حركة العين السريعة، والكوابيس، ونظافة النوم، والأحلام الجلية، وعلم أحياء الساعة البيولوجية",
    ku: "بێخەوی، خەوا قویر، خەونێن ترسناک، رێکارێن خەوا ساخلەم، خەونا هشدار و تێکچوونا دەمژمێرا لەشی"
  },
  iconName: "dna",
  islandColor: "from-emerald-600 to-teal-800",
  topics: [
    {
      id: "chronic-insomnia",
      category: "Sleep & Dreams",
      title: {
        en: "Chronic Insomnia Disorder",
        ar: "اضطراب الأرق المزمن",
        ku: "نەخۆشیا بێخەویا درێژخایەن (بێخەوی / دڵەڕاوکێیا شەڤێ)"
      },
      subtitle: {
        en: "Neurobiological hyperarousal, conditioned sleep difficulty, and circadian misalignment",
        ar: "الاستثارة العصبية المفرطة وصعوبة النوم المشروطة واختلال الساعة البيولوجية",
        ku: "گرژیا دەماران، شەبەقڤەبوون ل نیڤا شەڤێ و تێکچوونا خەوا قویر"
      },
      content: {
        en: {
          definition: "Chronic Insomnia Disorder is a persistent sleep-wake disorder characterized by subjective difficulties initiating sleep, maintaining nocturnal sleep continuity, or experiencing non-restorative sleep occurring at least three nights per week for three months or longer. Pathophysiologically, it is driven by 24-hour central nervous system hyperarousal, manifesting in elevated metabolic rates, elevated nocturnal sympathetic autonomic tone, and hyperactive hypothalamic-pituitary-adrenal (HPA) axis activity with nocturnal cortisol surges.",
          symptoms: [
            "Prolonged sleep onset latency exceeding 30 to 45 minutes despite exhaustion",
            "Frequent nocturnal awakenings with profound difficulty returning to sleep",
            "Terminal early morning awakening hours before desired alarm time",
            "Daytime cognitive fatigue, pervasive brain fog, and working memory deficits",
            "Anticipatory anxiety and conditioned dread regarding bedtime routines",
            "Mood lability, heightened irritability, and low frustration tolerance",
            "Tension headaches and ocular strain throughout morning hours",
            "Gastrointestinal distress and autonomic somatic restlessness",
            "Reliance on stimulants during the day and sedatives at night",
            "Elevated risk of depressive and generalized anxiety spirals"
          ],
          causes: [
            "Psychophysiological hyperarousal locking the sympathetic nervous system in flight mode",
            "Maladaptive sleep behaviors: irregular bedtimes, bed-bound rumination, blue light exposure",
            "Genetic vulnerabilities affecting circadian clock gene expression (PER, CRY genes)",
            "Chronic work or family stress elevating nocturnal adrenocorticotropic hormone",
            "Co-occurring affective conditions such as major depression or panic disorder"
          ],
          stats: "Roughly 10% of the global adult population suffers from chronic insomnia, while over 30% experiences episodic severe sleep disruption annually (WHO, 2023).",
          treatment: [
            "Cognitive Behavioral Therapy for Insomnia (CBT-I) incorporating sleep restriction therapy",
            "Stimulus control protocols reassociating the bed strictly with rapid sleep onset",
            "Circadian phototherapy: 30 minutes of natural outdoor sunlight within 1 hour of waking",
            "Judicious short-term non-benzodiazepine hypnotics or dual orexin receptor antagonists"
          ],
          realStory: "رێباز، مامۆستایەکێ ٣٤ ساڵی یێ خەلکێ دهۆکێ بوو، بۆ دەمێ سالەکێ بوو نەدشیا شەڤێ بنڤیت. هەر دەما دچووە سەر تەختی، دلێ وی ب لەز لێددات و دەست ب هزرکرن د کێشەیێن کار و خێزانێ دا دکر. پشتی چەند مەهان، رۆژێ یێ مژدار و تووڕە بوو و چێژ ژ چ تشتان نەددی. دەما سەردانا نۆشدارێ دەروونی کری، دەست ب چارەسەریا (CBT-I) کر: تەخت بتنێ بۆ نڤستنێ بکارئینا، مۆبایل دوو دەمژمێران بەری خەوێ راگرت، و کاتێ رابوونا سپێدێ جێگیر کر. پشتی پێنج حەفتیان، خەوا وی ئاسایی بوو و وزەیا ژیانا وی زڤڕی.",
          whenToSeeDoctor: [
            "مانا بێخەویێ پتر ژ مەهەکێ ب شێوەیەکێ بەردەوام کو کارتێکرنێ ل کار و هاژۆتنا ترۆمبێلێ بکەت",
            "هەستکرن ب خنکاندن یان راوەستیانا هەناسێ د خەوێ دا (Sleep Apnea)",
            "پەیدابوونا خەمۆکیەکا دژوار و هزرێن بێزاریێ ژ ژیانێ ژبەر ماندووبوونا شەڤێ",
            "بکارئینانا بێ هۆشکرن یان دەرمانێن خەوێ بێی رەچەتەیا نۆشداری"
          ]
        },
        ar: {
          definition: "اضطراب الأرق المزمن هو اضطراب مستمر في النوم واليقظة يتميز بصعوبة الدخول في النوم، أو تكرار الاستيقاظ الليلي، أو الاستيقاظ المبكر جداً مع نوم غير مريح يستمر لثلاث ليالٍ على الأقل أسبوعياً لمدة تتجاوز 3 أشهر. ينجم هذا الاضطراب فسيولوجياً عن استثارة مفرطة ومستمرة في الجهاز العصبي على مدار 24 ساعة، مع ارتفاع الكورتيزول وتوتر عضلات الجسد ليلاً.",
          symptoms: [
            "استغراق أكثر من 45 دقيقة لمحاولة النوم رغم التعب الشديد",
            "الاستيقاظ المتكرر ليلاً مع صعوبة بالغة في العودة للنوم",
            "الاستيقاظ في الصباح الباكر جداً قبل الموعد بساعات دون شبع من النوم",
            "إرهاق نهاري مزمن، وضبابية في العقل، وصعوبة في التذكر",
            "قلق الترقب والخوف الشديد كل مساء بمجرد الاقتراب من السرير",
            "تقلبات مزاجية سريعة وسرعة الغضب من أقل المواقف",
            "صداع توتري وضغط في العينين والرقبة طوال ساعات النهار",
            "اضطرابات في المعدة والقولون نتيجة توتر الجهاز العصبي اللاإرادي",
            "الاعتماد المفرط على القهوة نهاراً والمهدئات ليلاً",
            "تضاعف احتمالية الانزلاق إلى نوبات اكتئاب وقلق سريري"
          ],
          causes: [
            "فرط النشاط العصبي التلقائي وبقاء الجسم في حالة تحفز دائم",
            "العادات الخاطئة: السهر المفرط، استخدام الشاشات، والتفكير بالهموم في الفراش",
            "عوامل وراثية تؤثر على جينات الساعة البيولوجية وإفراز هرمون الميلاتونين",
            "الضغوط المهنية والأسرية المتراكمة التي ترفع هرمونات التوتر ليلاً",
            "الإصابة باضطرابات نفسية كامنة كالاكتئاب أو اضطراب الهلع"
          ],
          stats: "يعاني نحو 10% من البالغين حول العالم من الأرق المزمن، بينما يختبر أكثر من 30% أرقاً حاداً ومتقطعاً سنوياً (WHO, 2023).",
          treatment: [
            "العلاج المعرفي السلوكي للأرق (CBT-I) كخط علاج أول معتمد دولياً",
            "بروتوكول التحكم في المثيرات؛ تخصيص السرير للنوم فقط ومغادرته عند اليقظة",
            "التعرض لأشعة الشمس الطبيعية صباحاً لضبط إيقاع الساعة البيولوجية",
            "الأدوية المنظمة للنوم تحت إشراف طبي دقيق ولفترات محددة فقط"
          ],
          realStory: "ريباز، أستاذ يبلغ من العمر 34 عاماً من دهوك، عانى لأكثر من سنة من صعوبة النوم. كلما اقترب من سريره، تسارعت نبضات قلبه وغرق في التفكير في هموم الحياة. تراجع تركيزه في التدريس وأصبح سريع الغضب. بعد مراجعة الطبيب النفسي، طبق جلسات CBT-I: التزم بموعد استيقاظ ثابت، منع الهاتف قبل النوم بساعتين، وتوقف عن البقاء في الفراش مستيقظاً. بعد 5 أسابيع، استعاد نومه الطبيعي وعاد لنشاطه المعتاد.",
          whenToSeeDoctor: [
            "استمرار الأرق لأكثر من شهر وتأثيره الخطير على قيادة السيارة أو العمل",
            "الشعور بالاختناق أو توقف التنفس أثناء النوم (انقطاع النفس الانسدادي)",
            "ظهور أعراض اكتئاب حاد أو رغبة في الانعزال بسبب الإنهاك الجسدي",
            "الإدمان على الحبوب المنومة دون استشارة طبية"
          ]
        },
        ku: {
          definition: "بێخەویا درێژخایەن نەخۆشیەکا گران و بێزارکەر یا خەو و هوشیاریێ یە؛ دەما کەسەک نەشێت ب ساناهی بنڤیت، یان شەڤێ چەندین جاران ژ خەو هشدار دبیت و خەوا وی تێکدچیت، یان سپێدێ گەلەک زوو ب دڵەڕاوکێ رادبیت و ئەڤ حالەتە حەفتیێ پتر ژ سێ شەڤان و بۆ دەمێ سێ مەهان یان پتر یا بەردەوام بیت. ژ لایێ زانستی ڤە، ئەڤ نەخۆشیە ژبەر وێ یەکێ یە کو دەمارێن لەشێ مرۆڤی د ناڤ وەغەرەکا بەردەوام یا ترسی و سترێسێ دانە و هۆرمۆنێ کۆرتیزۆل شەڤێ ژی یێ بلندە. بێخەوی بتنێ ماندووبوونا لەشی نینە، بەلکو دەروونێ مرۆڤی تێکددەت، هزرکرنێ سست دکەت و دەرگەهێ خەمۆکیێ ڤەدکەت.",
          symptoms: [
            "مان ل سەر تەختی بۆ پتر ژ ٤٥ خولەکان بێی کو خەو بچیتە چاڤان سەرەڕای وەستیانێ",
            "شەبەقڤەبوون و هشداربوونا چەندین جاران د ناڤ شەڤێ دا ب دلکووتان و ترس",
            "رابوونا گەلەک زوو ل سپێدێ بەری کاتژمێرا دیارکری بێی کو تێر خەو ببی",
            "ماندووبوونا مەزن د رۆژێ دا، مژداربوونا مێشکی و لاوازبوونا سەرنجدانێ",
            "ترسا بەردەوام د دەمێ ئێڤاریێ دا دەما دەمێ نڤستنێ نێزیک دبیت",
            "زوو تووڕەبوون، بێهن تەنگی، و نەمانا تەحەملا بچووکترین دەنگان",
            "سەرئێشە و چاڤ ئێشا بەردەوام ل دەمێ سپێدێ و نێڤرۆیان",
            "تێکچوونا کێرێ زکی و ئاوسانا کۆلۆنێ ژ ئەگەرێ گرژیا دەماران",
            "ڤەخوارنا زێدە یا چای و قەهوەیێ د رۆژێ دا بۆ مانا ب هوشیاری",
            "پەیدابوونا هزرێن رەش و خەمۆکیێ ژبەر بێزاریا ژ شەڤێن تاری"
          ],
          causes: [
            "گرژبوونا زێدە یا دەمارێن مێشکی کو ناهێلیت لەش باوەر بکەت مەترسی نینە",
            "عادەتێن شاش یێن نڤستنێ: برنا مۆبایلێ بۆ سەر تەختی و تەماشەکرنا شاشەیان د تاریێ دا",
            "کێمیا هۆرمۆنێ خەوێ (مێلاتۆنین) ژبەر نەدیتنا رۆناهیا رۆژێ د سپێدێ دا",
            "فشارێن مەزن یێن ژیانێ، دەین، ئاریشەیێن خێزانێ، و هزرکرنا زێدە د پاشەرۆژێ دا",
            "هەبوونا نەخۆشیێن دەروونی وەک خەمۆکیێ یان ترسا گشتی"
          ],
          stats: "پتر ژ ١٠٪ ژ خەلکێ جیهانێ ب دەست بێخەویا درێژخایەن دنالن، و ٣٠٪ سالانە تووشی بێخەویا دژوار دبن (WHO, 2023).",
          treatment: [
            "چارەسەریا هزر و رەفتارێ بۆ بێخەویێ (CBT-I) کو باشترین رێکا زانستی یە",
            "تەخت بتنێ بۆ نڤستنێ بیت؛ ئەگەر پشتی ٢٠ خولەکان خەو نەهات رابە ژ سەر تەختی",
            "دیتنا رۆناهیا رۆژێ ل دەمێ سپێدەهیێ بۆ رێکخستنا دەمژمێرا ناخێ لەشی",
            "دوورکەفتن ژ مۆبایلێ، تەلەفزیۆنێ، چای و قەهوەیێ دوو دەمژمێران بەری نڤستنێ"
          ],
          realStory: "رێباز، مامۆستایەکێ ٣٤ ساڵی یێ خەلکێ دهۆکێ بوو، بۆ دەمێ سالەکێ بوو نەدشیا شەڤێ بنڤیت. هەر دەما دچووە سەر تەختی، دلێ وی ب لەز لێددات و دەست ب هزرکرن د کێشەیێن کار و خێزانێ دا دکر. پشتی چەند مەهان، رۆژێ یێ مژدار و تووڕە بوو و چێژ ژ چ تشتان نەددی. دەما سەردانا نۆشدارێ دەروونی کری، دەست ب چارەسەریا (CBT-I) کر: تەخت بتنێ بۆ نڤستنێ بکارئینا، مۆبایل دوو دەمژمێران بەری خەوێ راگرت، و کاتێ رابوونا سپێدێ جێگیر کر. پشتی پێنج حەفتیان، خەوا وی ئاسایی بوو و وزەیا ژیانا وی زڤڕی.",
          whenToSeeDoctor: [
            "بەردەوامبوونا بێخەویێ پتر ژ مەهەکێ ب شێوەیەکێ کو نەشیێ کارێ خۆ بکەی",
            "هەستکرن ب خنکاندنێ د خەوێ دا یان ڤەچنقیانا ژ نشکەکێ ڤە",
            "پەیدابوونا خەمۆکیەکا دژوار و هزرێن مرنێ ژبەر ماندووبوونا دەروونی",
            "خارنا حەبکێن خەوێ ب شێوەیەکێ سەرپێچی و بێ دەستوورا پزیشکی"
          ]
        }
      },
      source: "https://www.mayoclinic.org/diseases-conditions/insomnia/symptoms-causes/syc-20355167",
      citation: "(Mayo Clinic, 2023)"
    }
  ]
};
