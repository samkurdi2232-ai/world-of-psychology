import { Ocean } from '../types';

export const ocean1: Ocean = {
  id: "ocean-1",
  title: {
    en: "Ocean 1: Brain & Mind (Neuroscience)",
    ar: "المحيط 1: الدماغ والعقل والعلوم العصبية",
    ku: "بەحرا 1: مێشک و هزر (زانستێ دەمار و مێشکی)"
  },
  subtitle: {
    en: "Neurons, neuroplasticity, memory encoding, intelligence, consciousness & the biological mind",
    ar: "الخلايا العصبية والمرونة الدماغية وتشفير الذاكرة والذكاء والوعي البشري",
    ku: "خانەیێن دەماری، نوژەنبوونا مێشکی، بیردانک، ژیری، هۆشمەندی و کارکرنا مێشکی"
  },
  iconName: "brain",
  islandColor: "from-blue-600 to-cyan-700",
  topics: [
    {
      id: "neurons-synapses",
      category: "Brain & Mind",
      title: {
        en: "Neurons & Synaptic Transmission",
        ar: "الخلايا العصبية ونقل الإشارات المشبكية",
        ku: "خانەیێن دەماری و گەهاندنا پەیامان د مێشکی دا (Neurons & Synapses)"
      },
      subtitle: {
        en: "How 86 billion neurons communicate using electrical potentials and chemical messengers",
        ar: "كيف تتواصل 86 مليار خلية عصبية عبر الإشارات الكهربائية والنواقل الكيميائية",
        ku: "چەوا ٨٦ ملیار خانەیێن دەماری ب رێکا کارەبا و کەرەستەیێن کیمیایی دگەل ئێک دئاخڤن"
      },
      content: {
        en: {
          definition: "The human nervous system is anchored by approximately 86 billion neurons that process and transmit information through electrical action potentials and chemical synapses. When an action potential depolarizes the presynaptic axon terminal, voltage-gated calcium channels open, triggering the exocytosis of neurotransmitter vesicles into the synaptic cleft. These neurotransmitters bind to specific ionotropic or metabotropic receptors on the postsynaptic dendrite, either exciting or inhibiting the downstream neuron. This microscopic orchestration underlies every thought, perception, memory, emotion, and motor impulse in human life.",
          symptoms: [
            "Cognitive slowing and delayed verbal recall when synaptic clearance is impaired",
            "Mental fatigue and brain fog following prolonged neurochemical exertion",
            "Sensory overload when inhibitory GABAergic synaptic gating weakens",
            "Tremors or involuntary motor twitches from dopaminergic transmission dysregulation",
            "Heightened stress reactivity due to noradrenergic synaptic hypersensitivity",
            "Fluctuating focus and attention lapses during dopamine transporter fluctuations",
            "Sleep-wake cycle fragmentation tied to acetylcholine transmission imbalances",
            "Altered pain thresholds resulting from substance P and endorphin synaptic anomalies",
            "Episodic migraines linked to cortical spreading depression and glutamate surges",
            "Memory retrieval blocks during acute stress-induced cortisol receptor flooding"
          ],
          causes: [
            "Genetic polymorphisms affecting neurotransmitter receptor density and transporter pumps",
            "Chronic neuroinflammation degrading synaptic plasticity and dendritic spine health",
            "Nutritional deficiencies in essential choline, omega-3 fatty acids, and B-complex vitamins",
            "Prolonged psychological stress elevating neurotoxic glucocorticoid levels in the hippocampus",
            "Traumatic brain injuries or microvascular ischemic events disrupting axonal pathways"
          ],
          stats: "The human brain contains roughly 86 billion neurons forming over 100 trillion synaptic connections, consuming 20% of resting metabolic energy (NIH/PubMed, 2023).",
          treatment: [
            "Targeted psychopharmacology stabilizing neurotransmitter reuptake and receptor binding",
            "High-intensity interval and aerobic exercise to upregulate Brain-Derived Neurotrophic Factor (BDNF)",
            "Nutritional psychiatry: Mediterranean-style diet rich in polyphenols and healthy lipids",
            "Sleep optimization securing the glymphatic clearance of neurotoxic metabolic waste"
          ],
          realStory: "ئاڵان، گەنجەکێ ٢٤ ساڵی یێ خەلکێ زاخۆ بوو، ل بەشێ ئەندازیاریێ د خاند. پشتی چەند مەهان ژ خاندنا زێدە یا شەڤان و ڤەخوارنا زێدە یا قەهوە و سترێسێ، هەست ب سستبوونا مێشکی دکر؛ زەحمەت بوو پەیڤ بهێنە بیرا وی و دەستێن وی دهەژین. دەما چوویە دەف نۆشدارێ دەروونی و نۆشدارێ دەماران، دەرکەفت کو ژبەر کێمخەویێ و سترێسا بەردەوام، گەهاندنا پەیامان د ناڤبەرا خانەیێن مێشکێ وی دا تووشی ماندووبوونەکا مەزن ببوو. ب رێکخستنا خەوێ و وەرزشێ و راهێنانێن هزرکرنێ، پشتی ٦ حەفتیان چالاکیا مێشکێ وی ڤەگەڕیا سەر سەردەمێ بەرێ.",
          whenToSeeDoctor: [
            "لەرزینا بێ دەستهەلات یا دەست و چاڤان یان سڕبوونا بەردەوام یا ئێک لایێ لەشی",
            "ژدەستدانا ژ نشکەکێ ڤە یا بیردانکێ یان نەزانینا کات و جهێ خۆ",
            "سەرئێشێن دژوار کو دگەل رەشبوونا بەرچاڤان و دلرابوونێ بن",
            "نەشیانا رێکخستنا پەیڤان و ئاخفتنەکا نەفامکری"
          ]
        },
        ar: {
          definition: "تتكون الشبكة العصبية البشرية من نحو 86 مليار خلية عصبية تتواصل عبر جهود الفعل الكهربائية والمشابك الكيميائية. عند وصول الإشارة إلى نهاية المحور العصبي، تتحرر النواقل الكيميائية في الشق المشبكي لترتبط بمستقبلات الخلية التالية، محفزة إياها أو كابحة لنشاطها. هذا التناغم الكيميائي والكهربائي الدقيق هو الأساس البيولوجي لكل فكرة وشعور وحركة تصدر عن الإنسان.",
          symptoms: [
            "تباطؤ معالجة المعلومات وضعف استرجاع الكلمات عند إجهاد المشابك العصبية",
            "ضبابية التفكير والإرهاق الذهني بعد التركيز الشديد لساعات طويلة",
            "فرط التحسس للأصوات والضوء عند ضعف التثبيط العصبي لحمض غابا",
            "رجفان خفيف في الأطراف نتيجة اضطراب مسارات الدوبامين",
            "استثارة القلق السريع بسبب حساسية النورادرينالين المفرطة",
            "تشتت الانتباه وصعوبة إتمام المهام الروتينية",
            "اضطراب النوم نتيجة خلل إشارات الأسيتيل كولين والميلاتونين",
            "تغير عتبة الشعور بالألم الجسدي والصداع المتكرر",
            "نوبات شقيقة مرتبطة بزيادة تدفق الغلوتامات في الدماغ",
            "تعطل استرجاع الذكريات تحت وطأة الضغط النفسي الشديد"
          ],
          causes: [
            "عوامل وراثية تؤثر على عدد وكفاءة مستقبلات النواقل العصبية",
            "الالتهابات العصبية الناتجة عن التوتر المزمن وسوء التغذية",
            "نقص الأحماض الدهنية الأساسية (أوميغا 3) ومجموعة فيتامينات ب",
            "ارتفاع هرمون الكورتيزول الذي يؤذي الخلايا العصبية في الحُصين",
            "إصابات الرأس أو قلة التروية الدموية الدقيقة لأنسجة الدماغ"
          ],
          stats: "يحتوي الدماغ البشري على نحو 86 مليار خلية عصبية تشكل أكثر من 100 تريليون نقطة اشتباك عصبي (NIH, 2023).",
          treatment: [
            "العلاجات الدوائية المنظمة لكيمياء الدماغ بإشراف طبيب مختص",
            "ممارسة الرياضة الهوائية لتحفيز العامل العصبي المشتق من الدماغ (BDNF)",
            "التغذية الداعمة للمخ الغنية بمضادات الأكسدة والدهون الصحية",
            "النوم الكافي لتنظيف الفضلات الأيضية السامة من بين الخلايا العصبية"
          ],
          realStory: "آلان، شاب في الـ24 من عمره من زاخو، كان يدرس الهندسة. بعد أشهر من السهر المفرط وتناول المنبهات بكثرة والقلق، شعر بتراجع حاد في تركيزه وثقل في التفكير ورجفة خفيفة في يديه. بعد استشارة الطبيب، تبين أن إجهاد المشابك العصبية ونقص النوم أثرا على كفاءة النواقل الكيميائية لديه. مع تنظيم النوم والرياضة والابتعاد عن التوتر، استعاد نشاطه الذهني بالكامل خلال أسابيع قليلة.",
          whenToSeeDoctor: [
            "خدر مفاجئ ومستمر في أحد جانبي الوجه أو الجسم",
            "فقدان الذاكرة الفجائي وصعوبة معرفة المكان أو الزمان",
            "صداع حاد غير مسبوق مصحوب بتشوش في الرؤية أو قيء",
            "صعوبة مفاجئة في نطق الكلمات أو فهم حديث الآخرين"
          ]
        },
        ku: {
          definition: "مێشکێ مرۆڤی ئێک ژ مەزنترین موعجیزەیێن سرۆشتی یە؛ پتر ژ ٨٦ ملیار خانەیێن دەماری (Neurons) د ناڤ سەرێ تە دانە کو ب رێکا تلیۆنان پرێن هویر یێن گەهاندنێ (Synapses) شەڤ و رۆژ بێ راوەستیان دگەل ئێک دئاخڤن. دەما تو هزرا تشتەکی دکەی، دەنگەکێ دبیسی، یان هەست ب خەم و کەیفێ دکەی، کارەبەکا گەلەک هویر د ناڤ ڤان خانەیان دا دچیت و کەرەستەیێن کیمیایی وەک سیرۆتۆنین و دۆپامین دهێنە رژاندن دا کو پەیامێ بگەهیننە خانەیا دی. ئەگەر ئەڤ پەیامە ب شێوەیەکێ درۆست نەچن ژبەر سترێسێ یان کێمخەویێ، مرۆڤ تووشی وەستیانا هزرێ، بێزاریێ، و دڵەڕاوکێیێ دبیت. تێگەهشتن ل ڤان خانەیان، دەستپێکا هشیاریا دەروونی یە دا کو بزانین کا چەوا لەش و دەروون پێکڤە گرێداینە.",
          symptoms: [
            "سستبوونا هزرکرنێ و دەم پێڤەچوون هەتا بەرسڤا پرسیارەکێ ددەی",
            "مژداربوونا مێشکی (Brain Fog) و هەستکرن ب وێ یەکێ کو سەرێ تە یێ گرانە",
            "بێزاربوونا زۆرا دەماران ژ دەنگێن بلند و رۆناهیا زێدە",
            "لەرزینەکا کێم د دەستان دا دەما سترێس و خەم زێدە دبن",
            "زوو ترسیاین و دلکوتانا بلەز ژ ئەگەرێ هوشیاربوونا زێدە یا دەماران",
            "ژبیرچوونا ب ساناهی یا کارێن رۆژانە و نەمانا تەحەملا سەرنجدانێ",
            "تێکچوونا خەوێ و نەمانا خەوا قویر ژبەر نەئارامیا کەرەستەیێن مێشکی",
            "سەرئێشێن بەردەوام کو دەرمان ب زەحمەت ئارام دکەن",
            "هەستکرن ب ئێشانا ماسولکەیان و گرژبوونا پشتا سەرێ مرۆڤی",
            "نەمامانا شیانا فێربوونا تشتێن نوو دەما خەمۆکی زێدە دبیت"
          ],
          causes: [
            "بۆماوەیی و سیفەتێن خێزانی د چێکرن و رژاندنا کەرەستەیێن کیمیایی یێن مێشکی دا",
            "سترێسا بەردەوام و خەمێن درێژخایەن کو خانەیێن مێشکی لاواز دکەن",
            "کێمیا خارنا ساخلەم، ب تایبەت کێمیا زەیتا ماسیێ (ئۆمێگا ٣) و فیتامینان",
            "کێمخەویا بەردەوام کو ناهێلیت مێشک پاشماوەیێن ژەهراوی یێن رۆژێ پاقژ بکەت",
            "برینداربوونا سەرێ مرۆڤی یان قەهرێن دەروونی یێن زارۆکینیێ"
          ],
          stats: "مێشکێ مرۆڤی نێزیکی ٨٦ ملیار خانەیێن دەماری بخۆڤەدگریت و ٢٠٪ ژ هەمی وزەیا لەشی سەرف دکەت (NIH, 2023).",
          treatment: [
            "رێکخستنا خەوێ ب کێمی ٧ هەتا ٨ دەمژمێران بۆ پاقژکرنا خانەیێن دەماران",
            "وەرزشا رۆژانە یا بزاڤێ کو ماددەیێ (BDNF) پەیدا دکەت بۆ نوژەنکرنا مێشکی",
            "خارنا کەسکاتی، ماسی، و گویز کو خارنێن سەرەکی یێن خانەیێن دەمارانە",
            "راهێنانێن ئارامکرنا دەروونی و هەناسەدانا قویر بۆ هێمنکرنا کارەبا مێشکی"
          ],
          realStory: "ئاڵان، گەنجەکێ ٢٤ ساڵی یێ خەلکێ زاخۆ بوو، ل بەشێ ئەندازیاریێ د خاند. پشتی چەند مەهان ژ خاندنا زێدە یا شەڤان و ڤەخوارنا زێدە یا قەهوە و سترێسێ، هەست ب سستبوونا مێشکی دکر؛ زەحمەت بوو پەیڤ بهێنە بیرا وی و دەستێن وی دهەژین. دەما چوویە دەف نۆشدارێ دەروونی و نۆشدارێ دەماران، دەرکەفت کو ژبەر کێمخەویێ و سترێسا بەردەوام، گەهاندنا پەیامان د ناڤبەرا خانەیێن مێشکێ وی دا تووشی ماندووبوونەکا مەزن ببوو. ب رێکخستنا خەوێ و وەرزشێ و راهێنانێن هزرکرنێ، پشتی ٦ حەفتیان چالاکیا مێشکێ وی ڤەگەڕیا سەر سەردەمێ بەرێ.",
          whenToSeeDoctor: [
            "سڕبوونا بێ دەستهەلات یا لایەکێ دەم و چاڤان یان دەست و پێیان",
            "ژبیرچوونا ژ نشکەکێ ڤە یا ناڤێ خۆ یان جهێ کو تێدا دژیت",
            "سەرئێشەکا گەلەک دژوار کو چ جاران وەک وێ نەهاتبیت و چاڤ تاری ببن",
            "نەشیانا ئاخفتنێ یان پەیڤێن تێکەل و نەفامکری"
          ]
        }
      },
      source: "https://www.ncbi.nlm.nih.gov/books/NBK539894/",
      citation: "(NIH/PubMed, 2023)"
    },
    {
      id: "neuroplasticity-healing",
      category: "Brain & Mind",
      title: {
        en: "Neuroplasticity: The Rewiring Mind",
        ar: "المرونة العصبية: قدرة الدماغ على إعادة التشكيل",
        ku: "نوژەنبوونا مێشکی و شیانا خۆ چێکرنێ (Neuroplasticity)"
      },
      subtitle: {
        en: "How experience, learning, and therapeutic interventions physically rewire brain architecture",
        ar: "كيف يعيد الدماغ بناء مساراته من خلال التعلم والتدريب والعلاج النفسي",
        ku: "چەوا مێشک دشێت برینێن خۆ ساڕێژ بکەت و رێکێن نوو یێن هزرکرنێ دروست بکەت"
      },
      content: {
        en: {
          definition: "Neuroplasticity is the brain's lifelong capacity to structurally reorganize itself by forming new neural connections, strengthening active synapses (long-term potentiation), and pruning dormant pathways. Rather than being a static hardwired organ, the cerebral cortex continuously remodels in response to behavioral repetition, environmental stimuli, emotional recovery, and focused cognitive practice.",
          symptoms: [
            "Gradual reduction in depressive ruminations as constructive thought patterns strengthen",
            "Gradual restoration of motor and language fluency following neurological insult",
            "Weakening of trauma trigger reactivity through systematic cognitive reframing",
            "Enhanced cognitive flexibility and adaptability when confronting unexpected crises",
            "Decreased automatic anxious reactivity after practicing daily mindfulness",
            "Enhanced working memory capacity through disciplined mental exercises",
            "Progressive mastery of new linguistic and technical skills in adulthood",
            "Reduction in phobic avoidance through graded exposure exercises",
            "Shift from chronic learned helplessness to self-efficacy and agency",
            "Restored emotional regulation following trauma-focused therapy"
          ],
          causes: [
            "Consistent daily repetition activating long-term potentiation (LTP) mechanisms",
            "Upregulation of neurotrophic factors including BDNF and nerve growth factor",
            "Environmental enrichment providing novel cognitive and sensory engagement",
            "Targeted psychotherapeutic unlearning of maladaptive behavioral schemas",
            "Aerobic exercise stimulating neurogenesis in the subgranular zone of the dentate gyrus"
          ],
          stats: "Adult neurogenesis generates approximately 700 new neurons daily in the human hippocampus, directly modulated by exercise and mental enrichment (PubMed, 2022).",
          treatment: [
            "Cognitive Behavioral Therapy (CBT) systematically dismantling ingrained cognitive distortions",
            "Deliberate practice of novel musical, linguistic, or analytical skills",
            "Regular cardiovascular exercise promoting neurogenesis and synaptic remodeling",
            "Mindfulness meditation increasing cortical thickness in the prefrontal cortex"
          ],
          realStory: "شەرمین، مامۆستایەکا ٣٢ ساڵی یا خەلکێ ئاکرێ بوو، پشتی رویدانەکا دژوار یا ترۆمبێلێ تووشی ترسا مەزن و خەمۆکیێ ببوو، باوەر دکر کو مێشکێ وێ چ جاران ناڤەگەڕیتەڤە باری خۆ یێ سرۆشتی. دەما دەست ب چارەسەریا دەروونی کر، فێربوو کو مێشک دشێت خۆ نوژەن بکەت ب رێکا هزرێن نوو. پشتی ٤ مەهان ژ راهێنانێن رۆژانە یێن هزرکرنێ و وێنەکێشانێ و خواندنا پەرتووکان، پرێن نوو یێن دەماران د مێشکێ وێ دا دروست بوون و ترسا وێ یا کەڤن شکەست.",
          whenToSeeDoctor: [
            "مانا خەمۆکیێ و نەمامانا هیڤیێ بۆ دەمێ پتر ژ چەند مەهان بێ پێشکەفتن",
            "شکەستنا تەمام د بەردەوامیدان ب کار و دەواما رۆژانە",
            "هزرکرن د خۆئازاردانێ دا ژبەر هەستکرن ب وێ یەکێ کو تشت ناگوهۆڕن",
            "تێکچوونا بڕیاردانێ و کێشەیێن نەراوەستای یێن بیردانکێ"
          ]
        },
        ar: {
          definition: "المرونة العصبية هي قدرة الدماغ المدهشة على إعادة تنظيم بنيته الفيزيائية ووظائفه عبر تكوين مسارات عصبية جديدة طوال حياة الإنسان. يعني هذا أن الدماغ ليس عضواً جامداً ثابتاً، بل يمكنه التعافي من الصدمات، وتجاوز العادات السلبية، وتعلم مهارات جديدة من خلال التكرار والتدريب والتفكير الواعي.",
          symptoms: [
            "تراجع تدريجي في الأفكار الكئيبة مع ترسيخ طرق تفكير أكثر واقعية",
            "استعادة الحركة أو النطق تدريجياً بعد الإصابات أو الجلطات الخفيفة",
            "انخفاض الخوف من محفزات الصدمة بعد جلسات العلاج النفسي",
            "مرونة أعلى في التعامل مع مفاجآت الحياة وضغوطاتها",
            "هدوء ردات الفعل الانفعالية التلقائية بعد ممارسة التأمل واليقظة",
            "تحسن قوة الذاكرة والتركيز مع الممارسة اليومية للمهارات",
            "القدرة على تعلم لغات جديدة واكتساب عادات صحية في أي عمر",
            "كسر دائرة الهروب وتجاوز المخاوف القديمة بالتعرض التدريجي",
            "تغير النظرة السلبية للذات إلى شعور بالقوة والقدرة على التغيير",
            "تحسن الاستقرار النفسي والعاطفي على المدى الطويل"
          ],
          causes: [
            "التكرار اليومي المستمر للسلوكيات الإيجابية الذي يرسخ الروابط العصبية",
            "إفراز البروتينات المغذية للدماغ مثل BDNF المحفز لتجدد الخلايا",
            "التعرض لبيئات غنية بالتحديات الفكرية والأنشطة الجديدة",
            "العلاج النفسي الموجه لتفكيك المعتقدات الخاطئة وبناء بدائل مرنة",
            "التمارين الرياضية الهوائية التي تحفز ولادة خلايا جديدة في الحُصين"
          ],
          stats: "ينتج الحُصين في دماغ الإنسان البالغ نحو 700 خلية عصبية جديدة يومياً تتأثر بشكل مباشر بالرياضة والتعلم (PubMed, 2022).",
          treatment: [
            "العلاج المعرفي السلوكي لإعادة برمجة مسارات التفكير القديمة",
            "تعلم مهارات جديدة ومعقدة مثل العزف، اللغات، أو البرمجة",
            "ممارسة التمارين الرياضية بانتظام لتنشيط تدفق الدم والمغذيات للدماغ",
            "تمارين اليقظة الذهنية والتأمل التي تزيد من سماكة القشرة الجبهية"
          ],
          realStory: "شرمين، معلمة تبلغ من العمر 32 عاماً من عقرة، تعرضت لحادث سيارة أدى لإصابتها بخوف حاد واكتئاب، وكانت تظن أن دماغها لن يتعافى أبداً. عندما بدأت العلاج النفسي، تعلمت أن الدماغ يعيد ترميم مساراته مع كل تمرين فكري جديد. بعد 4 أشهر من التدريب اليومي على الكتابة وتغيير الأفكار، تلاشت نوبات الهلع وعادت إلى التدريس بكامل حيويتها.",
          whenToSeeDoctor: [
            "استمرار نوبات اليأس والاكتئاب دون أي تحسن لأشهر طويلة",
            "العجز الكامل عن أداء المهام الوظيفية والمسؤوليات الأسرية",
            "ظهور أفكار إيذاء النفس لشعور الفرد باستحالة التحسن",
            "تدهور حاد ومفاجئ في القدرات الذهنية والذاكرة"
          ]
        },
        ku: {
          definition: "نوژەنبوونا مێشکی (Neuroplasticity) ئێک ژ مەزنترین مزگینیێن زانستێ نوی یە بۆ مرۆڤی. بەرێ دهاتە گۆتن کو مێشک پشتی ژیێ گەنجاتیێ چێنابیت و وەک خۆ دمینیت، لێ نوکە زانستێ سەلماندیە کو مێشکێ مرۆڤی وەک هەویرەکی یە؛ هەر دەمێ تو بیرۆکەیەکا نوو دوبارە دکەی، یان فێری زمانەکی دبی، یان خەمەکێ چارەسەر دکەی، مێشک پرێن نوو یێن دەماران چێدکەت و رێکێن کەڤن یێن خەمۆکیێ و ترسیێ کێم دکەت. ئەڤە وێ رامانێ ددەت کو هیچ کەسەک ب تەمامی شکەستی نینە و مێشکێ تە دشێت خۆ ژ نوو ساڕێژ بکەت و هێزێ بدەتە تە، ب مەرجەکێ کو تو ب بێهنفەرهی کار ل سەر هزر و ژیانا خۆ بکەی.",
          symptoms: [
            "کێمبوونا هێدی هێدی یا هزرێن رەش و هاتنا هزرێن هیڤی بەخش",
            "ڤەگەڕیانا ئارامیێ دەما رویدانەکا نەخۆش ب بیرا تە دهێت بێی کو دلێ تە بلەرزیت",
            "زێدەبوونا شیانا بەرگەگرتنێ دەما کێشەیەک د ژیانێ دا دروست دبیت",
            "ئارامبوونا مێزاجی و کێمبوونا زوو توڕەبوونێ پشتی راهێنانێن دەروونی",
            "باشتربوونا بیردانکێ و زوو وەرگرتنا زانیاریێن نوو",
            "شکاندنا ترسا کەڤن دەما ب چاڤنەترسی بەرەنگاری دبی",
            "فێربوونا عادەتێن ساخلەم یێن نوو وەک وەرزشێ و خاندنێ ل هەر ژیەکێ بی",
            "نەمامانا هەستێ کێماتیێ و باوەرکرن ب شیانێن خۆ یێن ناخی",
            "کۆنترۆلکرنا دڵەڕاوکێیێ ب رێکا هەناسەدانا هێمن",
            "ڤەبوونا دەرگەهێن نوو د ژیانێ دا و زڤڕینا کەنیێ بۆ سەر لێڤان"
          ],
          causes: [
            "دوبارەکرنا رۆژانە یا کریارێن باش کو پرێن نوو د مێشکی دا بەهێز دکەت",
            "وەرزشا رۆژانە یا کو خوینێ و فیتامینان دگەهینیتە قویراتیا مێشکی",
            "خواندنا بەردەوام و گوهۆڕینا شێوازێ ژیانێ ژ تەمبەڵیێ بۆ چەلەنگیێ",
            "چارەسەریا دەروونی ل دەف پسپۆری بۆ شکاندنا هزرێن شاش",
            "ئارامیا روحی و دوورکەفتن ژ دەنگەدەنگ و جەنجالیا بێ مفا"
          ],
          stats: "ل گۆرەی ڤەکۆلینان، مێشکێ مرۆڤێ پێگەهشتی رۆژانە نێزیکی ٧٠٠ خانەیێن نوو یێن دەماران د پشکا بیردانکێ دا دروست دکەت (PubMed, 2022).",
          treatment: [
            "چارەسەریا هزر و رەفتارێ (CBT) بۆ پاقژکرنا مێشکی ژ هزرێن رەش",
            "فێربوونا زمانەکێ نوو یان پیشەیەکێ دەستی بۆ چالاککرنا دەمارێن مێشکی",
            "وەرزشکرنا نیڤ دەمژمێر رۆژانە کو مێشکی نوژەن دکەت",
            "راهێنانێن بێدەنگیێ و تێڕامانێ بۆ خورتکرنا بەشێ پێشیێ یێ مێشکی"
          ],
          realStory: "شەرمین، مامۆستایەکا ٣٢ ساڵی یا خەلکێ ئاکرێ بوو، پشتی رویدانەکا دژوار یا ترۆمبێلێ تووشی ترسا مەزن و خەمۆکیێ ببوو، باوەر دکر کو مێشکێ وێ چ جاران ناڤەگەڕیتەڤە باری خۆ یێ سرۆشتی. دەما دەست ب چارەسەریا دەروونی کر، فێربوو کو مێشک دشێت خۆ نوژەن بکەت ب رێکا هزرێن نوو. پشتی ٤ مەهان ژ راهێنانێن رۆژانە یێن هزرکرنێ و وێنەکێشانێ و خواندنا پەرتووکان، پرێن نوو یێن دەماران د مێشکێ وێ دا دروست بوون و ترسا وێ یا کەڤن شکەست.",
          whenToSeeDoctor: [
            "مانا خەمۆکیێ و نەمامانا هیڤیێ بۆ دەمێ پتر ژ چەند مەهان بێ پێشکەفتن",
            "شکەستنا تەمام د بەردەوامیدان ب کار و دەواما رۆژانە",
            "هزرکرن د خۆئازاردانێ دا ژبەر هەستکرن ب وێ یەکێ کو تشت ناگوهۆڕن",
            "تێکچوونا بڕیاردانێ و کێشەیێن نەراوەستای یێن بیردانکێ"
          ]
        }
      },
      source: "https://pubmed.ncbi.nlm.nih.gov/30896924/",
      citation: "(PubMed, 2022)"
    }
  ]
};
