import { Ocean } from '../types';

export const ocean6: Ocean = {
  id: "ocean-6",
  title: {
    en: "Ocean 6: Mental Disorders (DSM-5-TR & WHO ICD-11)",
    ar: "المحيط 6: الاضطرابات النفسية (معايير DSM-5 ومنظمة الصحة)",
    ku: "بەحرا 6: نەخۆشیێن دەروونی (ل گۆرەی پێوەرێن DSM-5 و WHO)"
  },
  subtitle: {
    en: "Clinical depression, generalized anxiety, PTSD, OCD, panic disorder, bipolar, schizophrenia, BPD & autism",
    ar: "الاكتئاب السريري، والقلق العام، والصدمة، والوسواس القهري، والهلع، وثنائي القطب، والفصام، والشخصية الحدية، والتوحد",
    ku: "خەمۆکییا دژوار، دڵەڕاوکێیا گشتی، ترسا تروما (PTSD)، وەسواس، نۆبەیێن تۆقینێ، دووجەمسەری، شیزۆفرینیا، کەسایەتیا سنوری و ئۆتیزم"
  },
  iconName: "heart-crack",
  islandColor: "from-blue-700 to-slate-900",
  topics: [
    {
      id: "major-depression",
      category: "Disorders",
      title: {
        en: "Major Depressive Disorder (MDD)",
        ar: "اضطراب الاكتئاب الشديد والسريري",
        ku: "نەخۆشیا خەمۆکییا دژوار (خەمۆکی / دڵتەنگییا قویر)"
      },
      subtitle: {
        en: "Clinical unipolar depression, anhedonia, psychomotor slowing and affective collapse",
        ar: "الاكتئاب أحادي القطب، وفقدان الشغف، والتباطؤ الحركي النفسي، والانهيار الوجداني",
        ku: "ژدەستدانا کەیفخۆشیێ، بێزارییا ژیانێ، خەوا تێکچووی و هەستکرن ب بێ هیواییێ"
      },
      content: {
        en: {
          definition: "Major Depressive Disorder (MDD) is a severe, debilitating psychiatric mood disorder codified in the DSM-5-TR and ICD-11. It is characterized by persistent low or depressed mood, profound anhedonia (the total inability to experience pleasure across formerly rewarding activities), cognitive slowing, and somatic vegetative dysregulation lasting for at least two consecutive weeks. Pathophysiologically, MDD involves blunted monoaminergic neurotransmission (serotonin, norepinephrine, dopamine), chronic neuroinflammation, reduced neuroplasticity (diminished BDNF), and sustained hyperactivity of the hypothalamic-pituitary-adrenal (HPA) axis flooding brain tissue with neurotoxic levels of cortisol.",
          symptoms: [
            "Pervasive, crushing sadness, emotional emptiness, and hopelessness throughout nearly every day",
            "Severe anhedonia: total loss of interest or joy in hobbies, intimacy, and socialization",
            "Significant unintended weight changes (marked appetite collapse or severe compensatory hyperphagia)",
            "Severe sleep architecture disruption: early morning terminal insomnia or excessive lethargic hypersomnia",
            "Psychomotor agitation (restless pacing) or psychomotor retardation (slurred speech, heavy limbs)",
            "Pervasive chronic fatigue, zero physical energy, and an inability to execute basic hygiene",
            "Crushing feelings of worthlessness, toxic self-blame, or inappropriate excessive guilt",
            "Impaired concentration, profound indecisiveness, and executive working memory collapse",
            "Recurrent intrusive thoughts of death, active suicidal ideation, or concrete self-harm plans",
            "Unexplained diffuse somatic aches, gastrointestinal dysfunction, and systemic malaise"
          ],
          causes: [
            "Neurochemical depletion in serotonergic, dopaminergic, and noradrenergic ascending pathways",
            "Hyperactivity of the HPA axis causing chronic hypercortisolemia and hippocampal dendritic atrophy",
            "Polygenic heritability interacting with early childhood relational trauma or acute adversity",
            "Chronic peripheral and central neuroinflammation mediated by elevated inflammatory cytokines",
            "Cognitive vulnerability: deeply internalized negative cognitive triad (negative view of self, world, and future)"
          ],
          stats: "The World Health Organization estimates that over 280 million people of all ages live with depression globally, representing roughly 3.8% of the human population (WHO, 2023).",
          treatment: [
            "Cognitive Behavioral Therapy (CBT) and Behavioral Activation scheduling restorative activities",
            "Evidence-based pharmacotherapy: Selective Serotonin Reuptake Inhibitors (SSRIs) or SNRIs",
            "Structured aerobic cardiovascular exercise stimulating hippocampal neurogenesis and BDNF release",
            "Interpersonal Psychotherapy (IPT) repairing relationship ruptures and resolving complicated bereavement"
          ],
          realStory: "ئەحمەد، گەنجەکێ ٢٢ ساڵی یێ خەلکێ دهۆکێ بوو، ل قۆناغا دویێ یا زانکۆیێ د خاند. ل دەستپێکێ هزر دکر بتنێ ماندووبوونەکا ئاسایی یە، لێ پشتی دوو مەهان نەشیا ژ سەر تەختی رابیت. چێژ ژ چ تشتان نەددی، حەزا خارنێ ژ دەست دا، و پەیوەندیا خۆ دگەل هەڤالێن خۆ بڕی. گەهشتبوو وێ باوەریێ کو بوویە بارگرانی ل سەر مالا خۆ و چ هیڤی بۆ پاشەرۆژێ نینە. دەما برایێ وی ئەو برە دەف نۆشدارێ دەروونی، هاتە دیارکرن کو تووشی خەمۆکییا دژوار ببوو. ب وەرگرتنا دەرمانێن رێکخستنا سیرۆتۆنینێ و دانیشتنێن چارەسەریا هزر و رەفتارێ (CBT)، پشتی ٣ مەهان، ئەحمەدی دەست ب خاندنێ کرەڤە و کەیفخۆشی بۆ ژیانا وی زڤڕی.",
          whenToSeeDoctor: [
            "هەبوونا هزرێن خۆکوشتنێ یان هەستکرن ب وێ یەکێ کو مرن ژ ژیانێ چێترە (پێدڤی ب هەوارهاتنا لەزگینە)",
            "نەشیانا رابوونا ژ سەر تەختی و بجهـ نەئینانا پێدڤیاتیێن سەرەکی یێن ژیانێ بۆ پتر ژ دوو حەفتیان",
            "ژدەستدانا ب کۆم یا کێشا لەشی ب شێوەیەکێ مەترسیدار ژبەر نەخارنێ",
            "دیتن یان گوهلێبوونا تشتێن نائاسایی د دەمێ خەمۆکیێ دا (پەیدابوونا وەهم و وڕێنەیان)"
          ]
        },
        ar: {
          definition: "اضطراب الاكتئاب الشديد هو اضطراب مزاجي خطير وشائع مصنف في الدليل التشخيصي DSM-5-TR ومنظمة الصحة العالمية. يتسم بالحزن العميق والمستمر، وفقدان تام للشغف والمتعة في كل جوانب الحياة، وتراجع حاد في طاقة الجسد والقدرة على التفكير السليم لمدة أسبوعين متتاليين على الأقل. لا يعتبر الاكتئاب مجرد حزن عابر أو ضعف إرادة، بل هو خلل عضوي وبيولوجي في توازن النواقل العصبية (السيروتونين والدوبامين) والتهابات في أنسجة الدماغ نتيجة الضغط النفسي الشديد.",
          symptoms: [
            "مزاج حزين وكئيب وشعور بالخواء الداخلي واليأس يسيطر على معظم ساعات اليوم",
            "انعدام الشغف التام (Anhedonia) وفقدان المتعة في كافة الهوايات والعلاقات الاجتماعية",
            "تغيرات حادة في الوزن والشهية (نقصان شديد أو إفراط قهري في تناول الطعام)",
            "اضطراب حاد في النوم: أرق مستمر في ساعات الصباح الباكر أو نوم مفرط طلباً للهروب",
            "تباطؤ حركي ملحوظ في المشي والكلام أو هياج عصبي وتململ غير مريح",
            "إرهاق شديد وخمول جسدي تام يجعل أبسط المهام كغسل الوجه عبئاً ثقيلاً",
            "مشاعر ساحقة بانعدام القيمة، وجلد الذات القاسي، والشعور غير المبرر بالذنب",
            "تشتت حاد في التركيز، وصعوبة التذكر، والتردد الشديد في اتخاذ أبسط القرارات",
            "أفكار متكررة حول الموت، أو رغبة ملحة في الانتحار لإنهاء الألم الداخلي",
            "آلام جسدية مبهمة تشمل الصداع المزمن واضطرابات القولون والمعدة المستمرة"
          ],
          causes: [
            "خلل في توازن النواقل العصبية الرئيسية في الدماغ كالسيروتونين والنورادرينالين والدوبامين",
            "فرط نشاط محور الغدة النخامية والكظرية مما يؤدي لفيضان هرمون الكورتيزول السام للأعصاب",
            "استعداد وراثي جيني قوي يتفاعل مع صدمات الطفولة أو الخسائر الكبرى في الحياة",
            "التهابات عصبية مزمنة تؤثر سلباً على مرونة الدماغ وقدرة الخلايا على التجدد",
            "مخططات فكرية سلبية راسخة تشوه رؤية الفرد لنفسه وللعالم ولمستقبله"
          ],
          stats: "تشير منظمة الصحة العالمية إلى أن أكثر من 280 مليون شخص حول العالم يعانون من الاكتئاب، وهو السبب الرئيسي للعجز في العالم (WHO, 2023).",
          treatment: [
            "العلاج المعرفي السلوكي (CBT) والتنشيط السلوكي لكسر حلقة الانعزال",
            "مضادات الاكتئاب الحديثة (SSRIs/SNRIs) تحت إشراف طبيب نفسي مختص",
            "ممارسة التمارين الرياضية الهوائية التي تحفز إفراز الإندورفين وتجديد خلايا الدماغ",
            "العلاج النفسي التفاعلي لمعالجة الخلافات الأسرية ومشاعر الفقد غير المعالجة"
          ],
          realStory: "أحمد، شاب يبلغ من العمر 22 عاماً من دهوك، كان يدرس في سنته الجامعية الثانية. في البداية ظن أنه مجرد إرهاق امتحانات، لكنه بعد شهرين أصبح عاجزاً عن مغادرة سريره. فقد رغبته في الطعام، وانقطع عن أصدقائه، واقتنع بأنه أصبح عبئاً على أسرته ولا فائدة من وجوده. عندما اصطحبه شقيقه إلى العيادة النفسية، شُخّص باكتئاب شديد. مع الالتزام بالعلاج الدوائي وجلسات العلاج السلوكي المعرفي، استعاد أحمد عافيته بعد 3 أشهر وعاد لدراسته وأسرته بروح جديدة.",
          whenToSeeDoctor: [
            "وجود أفكار انتحارية صريحة أو تخطيط لإيذاء النفس (حالة طوارئ فورية)",
            "العجز الكامل عن مغادرة الفراش والامتناع عن تناول الطعام لأيام متواصلة",
            "فقدان الاتصال بالواقع وظهور أوهام أو هلاوس سمعية مترافقة مع الحزن",
            "فشل المحاولات الشخصية واستمرار الانهيار النفسي لأكثر من أسبوعين"
          ]
        },
        ku: {
          definition: "خەمۆکییا دژوار نەخۆشیەکا دەروونی یا مەترسیدار و بەربەلاڤە کو ل گۆرەی پێوەرێن جیهانی یێن ساخلەمیێ (DSM-5 و WHO)، ژیان و هەستێن مرۆڤی تێکددەت. ئەڤ نەخۆشیە بتنێ دلتەنگیەکا کاتی یان بێتاقەتی نینە، بەلکو تێکچوونا کیمیایا مێشکی یە؛ کەرەستەیێن دلخۆشیێ وەک سیرۆتۆنین و دۆپامین کێم دبن و هۆرمۆنێ سترێسێ (کۆرتیزۆل) د ناڤ خوینێ دا بەرز دبیت. کەسێ تووشبوو بۆ دەمێ پتر ژ دوو حەفتیان هەست ب خەمگینیەکا گران و تاری دکەت، هەمی کەیفخۆشی و تام د ژیانا وی دا نامینیت، و هەست دکەت کو وزەیا لەشێ وی هاتیە دزین. خەمۆکی نە لاوازیا باوەریێ یە و نە کێماسییا کەسایەتیێ یە، بەلکو نەخۆشیەکا راستەقینە یا پزیشکی یە کو پێدڤی ب چارەسەریێ هەیە.",
          symptoms: [
            "هەستکرن ب خەمگینیەکا قویر و بێ هیواییێ کو شەڤ و رۆژ دەست ژ ناخێ تە بەرنەدەت",
            "ژدەستدانا تەمام یا حەز و کەیفێ ب هەر کارەکێ کو بەری نوکە حەز لێ دکر (Anhedonia)",
            "گۆهرینا مەزن د خارنێ دا؛ نەمانا حەزا خارنێ و کێمبوونا کێشا لەشی، یان زێدەخاری",
            "تێکچوونا دژوار یا خەوێ؛ بێخەویا شەڤێ و شەبەقڤەبوونا زوو، یان راکەفتنا بەردەوام یا بێ مفا",
            "سستبوونا توند یا لەشی و گرانبوونا دەست و پێیان هەروەکی تە بەردەوام بارەکێ گران هەلگرتبیت",
            "ماندووبوونا بێ دووماهی؛ تەحەملا کارێن ب ساناهی نینە وەک شووشتنا دەم و چاڤان",
            "هەستکرن ب گونەهباریێ و هزرکرن د وێ یەکێ دا کو تو کەسەکێ بێ مفا ی و بوویە بارگرانی ل سەر خەلکی",
            "نەمانا تەحەملا سەرنجدانێ، تێکچوونا بیردانکێ و نەشیانا بڕیاردانا ل سەر بچووکترین تشتان",
            "هاتنە بیرا بەردەوام یا مرنێ، هزرکرن د نەمانا ل ژیانێ یان هزرێن خۆکوشتنێ ژبەر ئازارا دژوار",
            "ئێشانا بەردەوام یا لەشی، سەرئێشە و تێکچوونا کێرێ زکی بێی چ ئەگەرەکێ ئاشکرا یێ لەشی"
          ],
          causes: [
            "تێکچوونا کیمیایا مێشکی ب تایبەت کێمبوونا کەرەستەیێن سیرۆتۆنین، دۆپامین و نۆرئەدرینالین",
            "بلندبوونا بەردەوام یا هۆرمۆنێ سترێسێ (کۆرتیزۆل) ژبەر خەم و قەهرێن نەچارەسەرکری",
            "بۆماوەیی و جینات؛ هەبوونا دیرۆکا خەمۆکیێ د ناڤ مالبات و خێزانێ دا",
            "رویدانێن نەخۆش و بریندارکەر یێن ژیانێ وەک ژدەستدانا کەسەکێ نێزیک، جودابوون، یان بێکاری",
            "هزرێن رەش و نەرێنی یێن چەقبەستوو دەربارەی خۆ، جڤاکی و پاشەرۆژێ"
          ],
          stats: "ل سەرتاسەری جیهانێ، پتر ژ ٢٨٠ ملیۆن کەسان ب دەست خەمۆکیێ دنالن، و ئەڤە ئێک ژ سەرەکیترین ئەگەرێن پەککەفتنێ یە د جیهانێ دا (WHO, 2023).",
          treatment: [
            "چارەسەریا هزر و رەفتارێ (CBT) بۆ شکاندنا هزرێن رەش و دوورکەفتنا ژ خەمۆکیێ",
            "دەرمانێن دژی خەمۆکیێ (وەک SSRIs) ب چاڤدێریا نۆشدارێ پسپۆرێ دەروونی",
            "وەرزشکرنا رۆژانە یا بزاڤێ کو خوینێ و ماددەیێ دلخۆشیێ دگەهینیتە مێشکی",
            "دەرکەفتن دگەل هەڤالێن دلنەرم و بجهـ نەهێلانا کارێن رۆژانە ب هەمی شێوەیان"
          ],
          realStory: "ئەحمەد، گەنجەکێ ٢٢ ساڵی یێ خەلکێ دهۆکێ بوو، ل قۆناغا دویێ یا زانکۆیێ د خاند. ل دەستپێکێ هزر دکر بتنێ ماندووبوونەکا ئاسایی یە، لێ پشتی دوو مەهان نەشیا ژ سەر تەختی رابیت. چێژ ژ چ تشتان نەددی، حەزا خارنێ ژ دەست دا، و پەیوەندیا خۆ دگەل هەڤالێن خۆ بڕی. گەهشتبوو وێ باوەریێ کو بوویە بارگرانی ل سەر مالا خۆ و چ هیڤی بۆ پاشەرۆژێ نینە. دەما برایێ وی ئەو برە دەف نۆشدارێ دەروونی، هاتە دیارکرن کو تووشی خەمۆکییا دژوار ببوو. ب وەرگرتنا دەرمانێن رێکخستنا سیرۆتۆنینێ و دانیشتنێن چارەسەریا هزر و رەفتارێ (CBT)، پشتی ٣ مەهان، ئەحمەدی دەست ب خاندنێ کرەڤە و کەیفخۆشی بۆ ژیانا وی زڤڕی.",
          whenToSeeDoctor: [
            "هەبوونا هزرێن خۆکوشتنێ یان هەستکرن ب وێ یەکێ کو مرن ژ ژیانێ چێترە (پێدڤی ب هەوارهاتنا لەزگینە)",
            "نەشیانا رابوونا ژ سەر تەختی و بجهـ نەئینانا پێدڤیاتیێن سەرەکی یێن ژیانێ بۆ پتر ژ دوو حەفتیان",
            "ژدەستدانا ب کۆم یا کێشا لەشی ب شێوەیەکێ مەترسیدار ژبەر نەخارنێ",
            "دیتن یان گوهلێبوونا تشتێن نائاسایی د دەمێ خەمۆکیێ دا (پەیدابوونا وەهم و وڕێنەیان)"
          ]
        }
      },
      source: "https://www.who.int/news-room/fact-sheets/detail/depression",
      citation: "(WHO, 2023)"
    },
    {
      id: "generalized-anxiety",
      category: "Disorders",
      title: {
        en: "Generalized Anxiety Disorder (GAD)",
        ar: "اضطراب القلق العام والتوتر العصبي المزمن",
        ku: "تێکچوونا دڵەڕاوکێیا گشتی (ترس، دڵەڕاوکێ و دودلیا بەردەوام)"
      },
      subtitle: {
        en: "Chronic uncontrollable worry, autonomic hyperarousal, muscle tension and anticipatory dread",
        ar: "القلق المزمن غير القابل للسيطرة، وفرط النشاط العصبي التلقائي، وتوتر العضلات، والخوف الترقبي",
        ku: "ترس و دودلیا بەردەوام ل سەر هەمی تشتێن ژیانێ، گرژبوونا ماسولکەیان و بێهن تەنگی"
      },
      content: {
        en: {
          definition: "Generalized Anxiety Disorder (GAD) is characterized in the DSM-5-TR by persistent, excessive, and unrealistic anxiety and worry regarding diverse daily life domains (finances, health, occupation, family well-being) lasting for at least six months. The worry is experienced as challenging to control, accompanied by marked somatic hyperarousal, muscular rigidity, central autonomic hyperreactivity, and profound executive fatigue resulting from continuous cognitive threat scanning.",
          symptoms: [
            "Excessive, pervasive worry disproportionate to the actual likelihood or impact of feared events",
            "Severe subjective difficulty controlling, compartmentalizing, or halting worrying loops",
            "Restlessness, feeling keyed up, nervous agitation, or physical trembling",
            "Chronic somatic muscular tension, especially in the cervical, trapezius, and lumbar regions",
            "Profound physical exhaustion from sustained autonomic sympathetic activation",
            "Impaired concentration, mind going completely blank during critical occupational tasks",
            "Marked irritability, low threshold for anger, and heightened startle reflex",
            "Sleep onset latency prolongations and fragmented, non-restorative nocturnal sleep",
            "Autonomic overdrive: tachycardia, diaphoresis, nausea, and irritable bowel manifestations",
            "Compulsive reassurance seeking and extensive avoidant procrastination behaviors"
          ],
          causes: [
            "Hyperactivity within the fronto-amygdalar neural circuitry governing threat valuation",
            "Deficiencies in central GABAergic inhibitory neurotransmitter tone failing to calm neural firing",
            "Polygenic inheritance combining with childhood environments characterized by chronic unpredictability",
            "Intolerance of uncertainty: treating ambiguous future events as inherently hazardous",
            "Sustained autonomic hyperarousal maintaining chronic high-baseline sympathetic tone"
          ],
          stats: "Anxiety disorders represent the most prevalent psychiatric category internationally, affecting over 301 million individuals globally (WHO, 2022).",
          treatment: [
            "Cognitive Behavioral Therapy (CBT) targeting worry loops and intolerance of uncertainty",
            "First-line SSRIs/SNRIs or buspirone modulating central serotonergic and GABAergic tone",
            "Applied Relaxation training and Progressive Muscle Relaxation (PMR) to reset muscular tone",
            "Diaphragmatic breathing modulating the vagus nerve and down-regulating sympathetic drive"
          ],
          realStory: "کاروان، گەنجەکێ ٢٩ ساڵی یێ خەلکێ زاخۆ بوو، دوکاندار بوو. سەرەڕای وێ یەکێ کو کارێ وی باش بوو، شەڤ و رۆژ یێ د ترسیێ دا بوو؛ ترسا هەبوو بازرگانیا وی دێ تێکچیت، دێ مالا خۆ ژ دەست دەت، یان زارۆکێن وی دێ تووشی نەخۆشیەکا گران بن. ماسولکەیێن مل و پشتا وی هەردەم گرژ بوون، سەری وی دئێشا، و شەڤێ نەدشیا بنڤیت ژ ترسا سبەهیێ. دەما سەردانا نۆشدارێ دەروونی کری، هاتە دیارکرن کو نەخۆشیا دڵەڕاوکێیا گشتی هەیە. ب رێکا چارەسەریا دەروونی، کاروان فێربوو کا چەوا مێشکێ وی یێ درەوان ل سەر مەترسیان دکەت، و ب فێربوونا راهێنانێن هەناسەدانا قویر و گۆهرینا هزران، شییا ئارامیێ بۆ ژیانا خۆ و خێزانا خۆ ڤەگێڕیتەڤە.",
          whenToSeeDoctor: [
            "دەما ترس و دڵەڕاوکێ رێ ل چوونە سەر کاری، خودانکرنا خێزانێ، یان دەرکەفتنا ژ مالێ بگریت",
            "پەیدابوونا دلکووتانا دژوار و تەنگەنەفەسیێ کو نەهێلیت ب شەڤ بنڤی",
            "پشتبەستن ب دەرمانێن ئارامکەر یان ماددەیێن بێ هۆشکەر بۆ کێمکرنا ترسی",
            "پەیدابوونا هزرێن نەمانێ و خەمۆکیێ ژ ئەگەرێ وەستیانا ژ ترسا بەردەوام"
          ]
        },
        ar: {
          definition: "اضطراب القلق العام هو حالة مزمنة ومنهكة من التفكير المفرط، والخوف المستمر، والتوتر غير المبرر تجاه أمور الحياة اليومية (مثل الصحة، والعمل، والمال، والأبناء) يستمر لمدة 6 أشهر على الأقل. يجد المصاب صعوبة بالغة في السيطرة على هذا القلق، ويصاحبه توتر عضلي دائم، وتسارع نبضات القلب، وإرهاق جسدي حاد نتيجة استنزاف الجهاز العصبي في ترقب مستمر لتهديدات وهمية.",
          symptoms: [
            "قلق وتوتر مبالغ فيه ولا يتناسب مع الحجم الحقيقي للمشاكل اليومية",
            "عجز تام عن إيقاف سيل الأفكار المقلقة أو تشتيتها عن الدماغ",
            "الشعور بالتململ الداخلي، والعصبية، والرجفان الخفيف في الأطراف",
            "توتر عضلي مزمن وتصلب دائم في عضلات الرقبة والكتفين والظهر",
            "سرعة التعب والإجهاد الجسدي المستمر دون بذل مجهود شاق",
            "صعوبة بالغة في التركيز والشعور بفراغ مفاجئ في الذاكرة أثناء التوتر",
            "سرعة الاستثارة والغضب من أقل المثيرات والأصوات المفاجئة",
            "اضطرابات حادة في النوم؛ صعوبة الاستغراق في النوم والاستيقاظ المتكرر بقلق",
            "أعراض جسدية: خفقان القلب، برودة الأطراف، الغثيان، والقولون العصبي",
            "البحث القهري والمستمر عن الاطمئنان من الآخرين وتأجيل المهام خوفاً"
          ],
          causes: [
            "فرط حساسية الدائرة العصبية الرابطة بين لوزة الدماغ والقشرة الجبهية المسؤولة عن رصد الخطر",
            "نقص في كفاءة النواقل العصبية المهدئة مثل حمض غابا (GABA) في الدماغ",
            "استعداد جيني وراثي يتفاعل مع بيئة طفولة اتسمت بعدم الأمان أو القلق المزمن",
            "عدم تقبل الشك والمجهول وافتراض أن أي شيء غير مؤكد يعني خطراً داهماً",
            "بقاء الجهاز العصبي السمبثاوي في حالة تأهب وإفراز مستمر للأدرينالين"
          ],
          stats: "تعد اضطرابات القلق الأكثر انتشاراً في العالم، حيث تصيب أكثر من 301 مليون إنسان حول العالم (WHO, 2022).",
          treatment: [
            "العلاج المعرفي السلوكي (CBT) لتفكيك حلقات القلق المفرط وتدريب العقل على تقبل المجهول",
            "الأدوية المنظمة للنواقل العصبية (مضادات الاكتئاب والقلق) تحت إشراف طبيب مختص",
            "تمارين الاسترخاء العضلي التدريجي لإعادة توازن الجهاز العصبي الجسدي",
            "تمارين التنفس البطني العميق لتنشيط العصب الحائر وتخفيض ضربات القلب"
          ],
          realStory: "كاروان، شاب يبلغ من العمر 29 عاماً من زاخو، صاحب متجر تجاري. رغم أن تجارته كانت جيدة، إلا أنه كان يعيش في رعب دائم؛ خائف من الإفلاس، وخائف من فقدان منزله، وخائف من مرض أطفاله. كانت رقبته وظهره متصلبين دائماً من التوتر، ويعاني من صداع نصفي وأرق. بعد استشارة الطبيب النفسي وتطبيق جلسات العلاج المعرفي السلوكي وتمارين التنفس العميق، أدرك كاروان كيف كان عقله يختلق كوارث وهمية، واستعاد راحة البال والثقة في إدارة حياته.",
          whenToSeeDoctor: [
            "عندما يعطلك القلق عن ممارسة عملك أو رعاية أطفالك أو مغادرة المنزل",
            "تكرار نوبات الهلع وتسارع ضربات القلب لدرجة الخوف من توقف القلب",
            "اللجوء للتدخين المفرط أو الأدوية المهدئة دون وصفة للهروب من التوتر",
            "ظهور أعراض اكتئاب مصاحب وشعور بالعجز عن مواصلة الحياة بهذا القلق"
          ]
        },
        ku: {
          definition: "دڵەڕاوکێیا گشتی نەخۆشیەکا بەردەوام و بێزارکەر یا دەروونی یە کو تێدا مرۆڤ شەڤ و رۆژ یێ د ترسیێ و دودلیێ دا ل سەر هەمی تشتێن ژیانێ؛ ترسا کارێ، پارەی، زارۆکان، نەخۆشیان و پاشەرۆژێ ب شێوەیەکێ زێدە کو کێمتر ژ شەش مەهان نەڤەکێشیت. ئەڤ ترسا بەردەوامە ناهێلیت مرۆڤ دەمەکێ بێدەنگ و ب کەیف دەرباز بکەت؛ ماسولکەیێن مل و پشتا وی هەردەم گرژن، دلێ وی ب لەز لێددات، و هەست دکەت هەر نوکە تشتەکێ خراب دێ قەومیت بێی چ ئەگەرەکێ راستەقینە. ئەڤ نەخۆشیە دەمارێن مێشکی ماندوو دکەت و لەشی تووشی لاوازیێ دکەت.",
          symptoms: [
            "ترس و دودلیا زێدە یا بێ سەدەف کو گەلەک مەزنترە ژ قەبارێ ئاریشەیێن راستەقینە",
            "نەشیانا راگرتنا هزرێن پڕی ترس و زەحمەتیا ئارامکرنا هزرێ د دەمێ تەنگاڤیێ دا",
            "بێهن تەنگی، نەئارامی و لەرزینا دەست و پێیان ژ ئەگەرێ گرژیا دەماران",
            "گرژبوونا بەردەوام یا ماسولکەیێن مل و پشتا مرۆڤی و سەریئێشا درێژخایەن",
            "ماندووبوونا بلەز؛ زوو هەناسەسواربوون و هەستکرن ب وێ یەکێ کو هێزا تە نەمایە",
            "تێکچوونا سەرنجدانێ و تاریبوونا مێشکی دەما پێتڤیە کارەکێ گرنگ بکەی",
            "زوو تووڕەبوون و راچڵەکین ژ دەنگێن بلند یان رویدانێن ژ نشکەکێ ڤە",
            "تێکچوونا خەوێ؛ خەونێن شێلۆ، و ب زەحمەت چوونا خەوێ ژ ترسا سبەهیێ",
            "دلکووتان، عارەقکرنا سار، دلرابوون و ئاوسانا زک و کۆلۆنێ ژ ترسان",
            "پرسیارکرنا بەردەوام ژ کەسێن دەوروبەر: 'ئەرێ هەمی تشت دێ باش بن؟' بۆ دلنیاکرنا خۆ"
          ],
          causes: [
            "زێدە چالاکبوونا ئەو بەشێ مێشکی (ئەمیگدالا) یێ کو زەنگا مەترسیێ لێددەت",
            "کێمیا کەرەستەیێن هێمنکەر یێن مێشکی وەک (GABA) کو ناهێلیت دەمار ئارام ببن",
            "بۆماوەیی؛ هەبوونا ترسی و دڵەڕاوکێیێ د ناڤ خێزانێ دا دگەل پەروەردەیا پڕی دودلی",
            "نەحەزکرنا ژ نەدیاربوونا پاشەرۆژێ؛ هزرکرن کو هەر تشتەکێ نەدیار مەترسی یە",
            "مانا لەشی د ناڤ سترێسا بەردەوام دا و دەردانا زێدە یا هۆرمۆنێ ئەدرینالینێ"
          ],
          stats: "نێزیکی ٣٠١ ملیۆن کەسان ل جیهانێ تووشی نەخۆشیێن ترسی و دڵەڕاوکێیێ دبن کو بەربەلاڤترین نەخۆشیا دەروونی یە (WHO, 2022).",
          treatment: [
            "چارەسەریا هزر و رەفتارێ (CBT) بۆ فێربوونا چەوانیا راگرتنا هزرێن پڕی ترس و نەهێلانا وان",
            "دەرمانێن پسپۆری ب رێنمایا پزیشکێ دەروونی بۆ هێمنکرنا کارەبا دەماران",
            "راهێنانێن خاڤکرنا ماسولکەیان (PMR) کو گرژیا مل و پشتا مرۆڤی بەرددەت",
            "راهێنانا هەناسەدانا هێمن ژ زکی کو لێدانا دلی و ترسی ئێکسەر دادئێخیت"
          ],
          realStory: "کاروان، گەنجەکێ ٢٩ ساڵی یێ خەلکێ زاخۆ بوو، دوکاندار بوو. سەرەڕای وێ یەکێ کو کارێ وی باش بوو، شەڤ و رۆژ یێ د ترسیێ دا بوو؛ ترسا هەبوو بازرگانیا وی دێ تێکچیت، دێ مالا خۆ ژ دەست دەت، یان زارۆکێن وی دێ تووشی نەخۆشیەکا گران بن. ماسولکەیێن مل و پشتا وی هەردەم گرژ بوون، سەری وی دئێشا، و شەڤێ نەدشیا بنڤیت ژ ترسا سبەهیێ. دەما سەردانا نۆشدارێ دەروونی کری، هاتە دیارکرن کو نەخۆشیا دڵەڕاوکێیا گشتی هەیە. ب رێکا چارەسەریا دەروونی، کاروان فێربوو کا چەوا مێشکێ وی یێ درەوان ل سەر مەترسیان دکەت، و ب فێربوونا راهێنانێن هەناسەدانا قویر و گۆهرینا هزران، شییا ئارامیێ بۆ ژیانا خۆ و خێزانا خۆ ڤەگێڕیتەڤە.",
          whenToSeeDoctor: [
            "دەما ترس و دڵەڕاوکێ رێ ل چوونە سەر کاری، خودانکرنا خێزانێ، یان دەرکەفتنا ژ مالێ بگریت",
            "پەیدابوونا دلکووتانا دژوار و تەنگەنەفەسیێ کو نەهێلیت ب شەڤ بنڤی",
            "پشتبەستن ب دەرمانێن ئارامکەر یان ماددەیێن بێ هۆشکەر بۆ کێمکرنا ترسی",
            "پەیدابوونا هزرێن نەمانێ و خەمۆکیێ ژ ئەگەرێ وەستیانا ژ ترسا بەردەوام"
          ]
        }
      },
      source: "https://www.mayoclinic.org/diseases-conditions/generalized-anxiety-disorder/symptoms-causes/syc-20360803",
      citation: "(Mayo Clinic, 2022)"
    }
  ]
};
