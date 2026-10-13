import { Ocean } from '../types';

export const ocean3: Ocean = {
  id: "ocean-3",
  title: {
    en: "Ocean 3: Thinking & Cognitive Biases",
    ar: "المحيط 3: التفكير والتشوهات المعرفية والمغالطات المنطقية",
    ku: "بەحرا 3: هزرکرن و شاشیێن هزرێ (کەفتنێن مێشکی)"
  },
  subtitle: {
    en: "Cognitive distortions, overthinking, catastrophizing, confirmation bias & executive functioning",
    ar: "التشوهات المعرفية، والتفكير المفرط، والتهويل، والانحياز التأكيدي، والوظائف التنفيذية",
    ku: "شاشیێن هزرکرنێ، هزرکرنا زێدە، مەزنکرنا خەمان، چەوتیێن بیرکردنەوە و کۆنترۆلا هزرێ"
  },
  iconName: "brain",
  islandColor: "from-indigo-600 to-purple-800",
  topics: [
    {
      id: "catastrophizing-overthinking",
      category: "Thinking",
      title: {
        en: "Catastrophizing & Chronic Overthinking",
        ar: "التهويل والتفكير المفرط القهري (Catastrophizing)",
        ku: "مەزنکرنا ترسان و هزرکرنا زێدە یا شێلۆ (Catastrophizing)"
      },
      subtitle: {
        en: "Cognitive bias projecting worst-case outcomes and paralyzing decision-making",
        ar: "الانحياز الفكري لتوقع أسوأ السيناريوهات وشلل اتخاذ القرارات",
        ku: "پێشبینیکرنا کارەساتان ژ تشتێن بچووک و راوەستیانا بڕیاردانێ"
      },
      content: {
        en: {
          definition: "Catastrophizing is a pervasive cognitive distortion identified in Aaron Beck's cognitive therapy framework where an individual habitually magnifies potential negative consequences, interpreting ambiguous or minor events as impending catastrophes. It couples with rumination, locking the prefrontal cortex in repetitive loops of worst-case simulations, escalating autonomic dread while completely disregarding objective probability and baseline coping capacities.",
          symptoms: [
            "Automatic jump to absolute worst-case catastrophe upon hearing ambiguous news",
            "Obsessive loop of 'What If?' hypothetical disaster projections",
            "Inability to mentally compartmentalize or silence intrusive worrying thoughts",
            "Analysis paralysis: severe procrastination and inability to finalize simple decisions",
            "Somatic hyperarousal: chest tightness, shallow breathing, and epigastric discomfort",
            "Exaggeration of minor physical sensations into fatal medical diagnoses (health anxiety)",
            "Difficulty resting without mentally simulating future emergencies",
            "Irritability and emotional withdrawal from family members during thought spirals",
            "Exhaustion stemming from 24-hour mental crisis simulations",
            "Depressive despair when catastrophic scenarios feel emotionally real"
          ],
          causes: [
            "Evolutionary negativity bias over-attuning the amygdala to threat anticipation",
            "Childhood exposure to unpredictable parental volatility or chronic crises",
            "Low tolerance of ambiguity and uncertainty in daily decision-making",
            "Hyperconnectivity in the Default Mode Network (DMN) fueling unchecked rumination",
            "Learned behavioral modeling from anxious caregivers"
          ],
          stats: "Over 70% of individuals diagnosed with generalized anxiety disorder exhibit severe, clinically significant catastrophizing scores (APA, 2023).",
          treatment: [
            "Cognitive Restructuring: calculating objective statistical probabilities against worst-case fears",
            "Decatastrophizing worksheets: 'What is the worst? What is the best? What is the most realistic?'",
            "Mindfulness-Based Cognitive Therapy (MBCT) decoupling thoughts from objective reality",
            "Behavioral experiments directly testing catastrophe predictions in real-world scenarios"
          ],
          realStory: "دیلان، کچەکا ٢٦ ساڵی یا خەلکێ زاخۆ بوو، ل کومپانیەکێ کار دکر. هەر دەمێ رێڤەبەرێ وێ پەیامەک دهنارت و دگۆت 'سبەهی وەرە دەف من'، دیلانێ شەڤ هەمی بگری دنڤست و باوەر دکر کو دێ ژ کارێ هێتە دەرئێخستن، ژیانا وێ دێ تێکچیت و دێ کەڤیتە رێکا دەربەدەریێ. ئەڤ شێوازێ هزرکرنێ بەردەوام وزەیا وێ دمێژی. دەما دەست ب چارەسەریا دەروونی کر، فێربوو کو 'هزرێن تە نە راستی نە'. وێ فێربوو پرسیار ژ خۆ بکەت: 'ئەرێ چ بەڵگە هەنە کو ئەڤ تشتە دێ قەومیت؟'. پشتی هەیڤەکێ، پێشبینیا خەمان ل دەف وێ ب رێژەیا ٧٠٪ کێم بوو.",
          whenToSeeDoctor: [
            "دەما ترسا مەزنکرنا خەمان ببیتە ئەگەرێ بجهـ هێلانا کاری یان زانکۆیێ",
            "پەیدابوونا نۆبەیێن تۆقینێ (Panic Attacks) دگەل دلکووتانێ ژبەر هزرکرنێ",
            "نەمانا خەوێ و نەخارنا چ تشتی ژ ترسا وێ یەکێ کو تشتەکێ خراب دێ رویدەت",
            "پشتبەستن ب دەرمانێن ئارامکەر بێی چاڤدێریا نۆشداری"
          ]
        },
        ar: {
          definition: "التهويل أو التفكير الكارثي هو تشوه معرفي شائع يجعل العقل يقفز تلقائياً إلى أسوأ السيناريوهات المحتملة، ويعامل أدنى احتمال للفشل على أنه كارثة محققة لا يمكن النجاة منها. يترافق هذا مع الاجترار الفكري المستمر، مما يرهق الدماغ ويثير نوبات القلق والهلع، متجاهلاً تماماً قدرة الإنسان الطبيعية على التعامل مع الصعاب.",
          symptoms: [
            "القفز الفوري لأسوأ احتمال ممكن عند سماع أي خبر غير واضح",
            "دائرة لا تنتهي من أسئلة الرعب: 'ماذا لو حدثت الكارثة؟'",
            "العجز عن إيقاف شريط الأفكار السلبية المتدفقة ليلاً ونهاراً",
            "شلل التحليل: تأجيل القرارات المهمة خوفاً من وقوع أي خطأ",
            "أعراض جسدية: ضيق في الصدر، تسارع النبض، وتقلصات في المعدة",
            "تفسير أبسط الأعراض الجسدية على أنها مرض خطير ومميت",
            "صعوبة الشعور بالاسترخاء وتوقع حدوث مصيبة في أي لحظة",
            "العصبية وسرعة الانفعال على أفراد العائلة أثناء نوبات التفكير",
            "إرهاق شديد كأن الشخص يخوض معركة حقيقية طوال اليوم",
            "الشعور باليأس والعجز عندما تبدو الأفكار الكارثية حقيقة مطلقة"
          ],
          causes: [
            "ميل الدماغ التطوري لتضخيم المخاطر للبقاء على قيد الحياة",
            "النشأة في بيئة أسرية مليئة بالأزمات والتقلبات المفاجئة",
            "عدم القدرة على تقبل المجهول والشكوك الطبيعية في الحياة",
            "فرط نشاط شبكة الوضع الافتراضي في الدماغ المسؤولة عن اجترار الهموم",
            "اكتساب نمط القلق من الوالدين عبر الملاحظة والتربية"
          ],
          stats: "تشير دراسات جمعية علم النفس الأمريكية إلى أن أكثر من 70% من المصابين بالقلق العام يعانون من التفكير الكارثي (APA, 2023).",
          treatment: [
            "إعادة الهيكلة المعرفية؛ حساب الاحتمالات الواقعية مقابل أسوأ المخاوف",
            "تطبيق تمرين: 'ما هو أسوأ سيناريو؟ ما هو أفضله؟ وما هو الأكثر واقعية؟'",
            "العلاج المعرفي القائم على اليقظة الذهنية لمراقبة الفكرة دون تصديقها",
            "التجارب السلوكية العملية لمواجهة المخاوف وإثبات عدم وقوع الكارثة"
          ],
          realStory: "ديلان، فتاة تبلغ من العمر 26 عاماً من زاخو، تعمل في شركة تجارية. كلما أرسل مديرها رسالة يقول فيها 'أريد التحدث معك غداً'، تقضي ليلتها في البكاء والذعر ظانة أنها ستطرد وستفقد مستقبلها بالكامل. هذا التفكير دمر صحتها النفسية. مع المعالج النفسي، تعلمت قاعدة ذهبية: 'أفكارك ليست حقائق ملموسة'. تعلمت موازنة الأمور وتحدي الفكرة بالدليل. بعد شهرين، تخلصت من شبح التفكير الكارثي وعادت لثقتها بنفسها.",
          whenToSeeDoctor: [
            "عندما يعطل التفكير الكارثي القدرة على الذهاب إلى العمل أو الجامعة",
            "تكرار نوبات الهلع الشديدة مع تسارع نبضات القلب وضيق التنفس",
            "فقدان النوم والشهية التام بسبب ترقب الكوارث الوهمية",
            "اللجوء للمهدئات دون إشراف طبي للهروب من ضغط الأفكار"
          ]
        },
        ku: {
          definition: "مەزنکرنا ترسان (Catastrophizing) و هزرکرنا زێدە ئێک ژ مەزنترین داڤ و تەڵەیێن هزرێ نە کو مرۆڤ خۆ دئێخیتە تێدا. د ڤێ حالەتێ دا، مێشکێ تە بۆ هەر رویدانەکا سادە یان دەنگۆیەکی، ئێکسەر خراپترین پێشبینی چێدکەت؛ ئەگەر تەلەفۆنەکا نەنیاس بۆ تە بهێت هزر دکەی مرنەک قەومیە، ئەگەر سەرێ تە بئێشیت هزر دکەی نەخۆشیەکا گرانە! ئەڤ شێوازێ هزرکرنێ بەردەوام لەشێ تە دئێخیتە د بارودۆخێ شەر و ترسێ دا، ناهێلیت تشتەکێ ب کەیف ببینی، و وێرەکیێ ژ تە دستینیت بۆ بڕیاردانێ. ب دیتنا دەروونناسیێ، هزرێن تە نە راستی نە، بەلکو بتنێ وێنەیێن درەوینن کو مێشکێ ترسنۆک دروست دکەت.",
          symptoms: [
            "پێشبینیکرنا کارەساتەکا مەزن ئێکسەر پشتی بهیستنا هەر خەبەرەکێ نەدیار",
            "دوبارەبوونا پرسیارێن بێ مفا: 'ئەگەر نوکە نەخۆش بکەڤم چ بکەم؟ ئەگەر پارە نەمینیت چ قەومیت؟'",
            "نەشیانا راگرتنا هزرێن رەش ب تایبەت ل دەمێ درەنگیا شەڤێ",
            "راوەستیانا بڕیاردانێ ژ ترسا وێ یەکێ کو هەر بڕیارەک دێ بیتە شکەستنەکا مەزن",
            "گرژبوونا سنگ و دلی، تەنگەنەفەسی، و گێژبوونا سەرێ مرۆڤی",
            "هزڕکرنا نەخۆشیێن گران د هەر نیشانەیەکا لەشی دا (وەک وەستیان یان سەرئێشە)",
            "نەمانا تەحەملا مانا ل جهێن بێدەنگ ژ ترسا دەستپێکرنا هزرێن رەش",
            "زوو تووڕەبوون ل سەر هەڤال و خێزانێ دەما مێشک پڕی خەم دبیت",
            "ماندووبوونا هزرێ هەروەکی تە هەمی رۆژێ باری گرانیێ هەلگرتبیت",
            "هەستکرن ب بێهیواییەکا قویر دەما هزرێن خراب ل بەر چاڤێن تە دبنە راستی"
          ],
          causes: [
            "سروشتێ بەرەڤانیێ یێ مێشکی کو بەردەوام دگەڕێت ل پەی مەترسیان دا کو خۆ بپارێزیت",
            "پەروەردەبوونا د ناڤ خێزانەکا پڕی دودلی و ترسی دا د زارۆکینیێ دا",
            "نەبوونا باوەریێ ب وێ یەکێ کو تو دشێی بەرگەیا نەخۆشیێن ژیانێ بگری",
            "زێدە چالاکبوونا وێ بەشا مێشکی یا کو خەمان دووبارە دکەتەڤە",
            "بکارئینانا زێدە یا سۆشیال میدیایێ و خواندنا بەردەوام یا خەبەرێن دلتەزین"
          ],
          stats: "پتر ژ ٧٠٪ ژ وان کەسێن تووشی دڵەڕاوکێیا گشتی دبن، خاوەن شێوازێ مەزنکرنا خەمان و هزرێن شێلۆنە (APA, 2023).",
          treatment: [
            "پرسیارکرن ژ خۆ: 'ئەرێ چ بەڵگە هەنە کو ئەڤ تشتێ خراب دێ قەومیت؟ کێمترین و باشترین ئەگەر چییە؟'",
            "نڤیسینا هزران ل سەر کاغەزێ دا کو ببینی کا چەند ژ راستیێ یا دوورە",
            "هەناسەدانا ئارام یا زکی کو ئێکسەر پەیامێ ددەتە مێشکی کو مەترسی نینە",
            "تێکەلکرنا لەشی ب کارەکێ مادی وەک وەرزشێ، رێڤەچوونێ، یان کارێ دەستی بۆ راگرتنا هزران"
          ],
          realStory: "دیلان، کچەکا ٢٦ ساڵی یا خەلکێ زاخۆ بوو، ل کومپانیەکێ کار دکر. هەر دەمێ رێڤەبەرێ وێ پەیامەک دهنارت و دگۆت 'سبەهی وەرە دەف من'، دیلانێ شەڤ هەمی بگری دنڤست و باوەر دکر کو دێ ژ کارێ هێتە دەرئێخستن، ژیانا وێ دێ تێکچیت و دێ کەڤیتە رێکا دەربەدەریێ. ئەڤ شێوازێ هزرکرنێ بەردەوام وزەیا وێ دمێژی. دەما دەست ب چارەسەریا دەروونی کر، فێربوو کو 'هزرێن تە نە راستی نە'. وێ فێربوو پرسیار ژ خۆ بکەت: 'ئەرێ چ بەڵگە هەنە کو ئەڤ تشتە دێ قەومیت؟'. پشتی هەیڤەکێ، پێشبینیا خەمان ل دەف وێ ب رێژەیا ٧٠٪ کێم بوو.",
          whenToSeeDoctor: [
            "دەما ترسا مەزنکرنا خەمان ببیتە ئەگەرێ بجهـ هێلانا کاری یان زانکۆیێ",
            "پەیدابوونا نۆبەیێن تۆقینێ (Panic Attacks) دگەل دلکووتانێ ژبەر هزرکرنێ",
            "نەمانا خەوێ و نەخارنا چ تشتی ژ ترسا وێ یەکێ کو تشتەکێ خراب دێ رویدەت",
            "پشتبەستن ب دەرمانێن ئارامکەر بێی چاڤدێریا نۆشداری"
          ]
        }
      },
      source: "https://www.apa.org/topics/anxiety",
      citation: "(APA, 2023)"
    }
  ]
};
