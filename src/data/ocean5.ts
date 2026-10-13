import { Ocean } from '../types';

export const ocean5: Ocean = {
  id: "ocean-5",
  title: {
    en: "Ocean 5: Social Psychology & Interpersonal Dynamics",
    ar: "المحيط 5: علم النفس الاجتماعي والديناميكيات البشرية",
    ku: "بەحرا 5: دەروونناسییا جڤاکی و پەیوەندیێن مرۆڤان"
  },
  subtitle: {
    en: "Groupthink, conformity, leadership, bystander effect, romantic love & social comparison",
    ar: "التفكير الجماعي، والامتثال، والقيادة، وتأثير المتفرج، والحب الرومانسي، والمقارنة الاجتماعية",
    ku: "هزرا دەستەکێ، چاڤلێکرن، سەرکردایەتی، چاڤدێریا خەلکی، ئەڤینی و بەراوردکرنا خۆ دگەل جڤاکی"
  },
  iconName: "users",
  islandColor: "from-rose-600 to-pink-800",
  topics: [
    {
      id: "groupthink-conformity",
      category: "Social",
      title: {
        en: "Groupthink & Social Conformity Dynamics",
        ar: "التفكير الجماعي وضغوط الامتثال المجتمعي (Groupthink)",
        ku: "هزرا کۆمێ و چاڤلێکرنا جڤاکی (Groupthink & Conformity)"
      },
      subtitle: {
        en: "How social desire for harmony and collective pressure override critical reasoning and truth",
        ar: "كيف تلغي الرغبة في التوافق وضغوط الجماعة التفكير النقدي وتطمس الحقيقة",
        ku: "چەوا ترسا ژ جڤاکی و حەزا رازیکرنا خەلکی ناهێلیت مرۆڤ هزرەکا سەربەخۆ بکەت"
      },
      content: {
        en: {
          definition: "Groupthink, first formulated by Irving Janis, is a psychological phenomenon that occurs within a cohesive in-group where the urgent desire for consensus, loyalty, and harmony suppresses independent dissent, critical evaluation of alternatives, and ethical realism. Closely linked to Solomon Asch's conformity experiments, it compels individuals to publicly affirm propositions they privately know to be incorrect or harmful simply to avert ostracization from the collective tribe.",
          symptoms: [
            "Illusion of invulnerability leading to excessive optimism and extreme collective risks",
            "Unquestioned belief in the inherent moral superiority of the in-group",
            "Direct social pressure exerted on any member who expresses dissenting viewpoints",
            "Self-censorship of doubts and contradictory evidence to preserve surface harmony",
            "Illusion of unanimity: treating silence as full ideological agreement",
            "Emergence of self-appointed 'mindguards' shielding leadership from dissenting data",
            "Stereotyping out-group members as malevolent, weak, or unintelligent",
            "Suppression of personal conscience in favor of collective conformity",
            "Severe moral distress experienced in secret while complying publicly",
            "Catastrophic collective decisions despite clear individual warnings"
          ],
          causes: [
            "High structural group cohesion combined with an authoritarian or charismatic leader",
            "Insulation of the decision-making group from independent external experts",
            "High situational stress with perceived existential threats from outside rivals",
            "Deep evolutionary terror of social exclusion and banishment from the kinship clan",
            "Lack of institutional norms enforcing methodological devil's advocacy"
          ],
          stats: "Classic social conformity experiments show that over 75% of participants conform to an obviously incorrect group consensus at least once during peer trials (Asch/APA, 2022).",
          treatment: [
            "Appointing a designated 'Devil's Advocate' in every strategic decision-making committee",
            "Anonymous voting and feedback mechanisms eliminating fear of immediate social retribution",
            "Encouraging independent sub-groups to deliberate separately before convening",
            "Cultivating authentic individual psychological safety where constructive dissent is celebrated"
          ],
          realStory: "شڤان، گەنجەکێ ٣٠ ساڵی یێ خەلکێ ئامێدیێ بوو، د فەرمانگەیەکێ دا کار دکر. د جڤاتا فەرمانگەیێ دا، رێڤەبەری بڕیارەکا گەلەک نەدرۆست دا کو زیان دگەهاندە خەلکێ باژێڕی. هەمی هەڤالێن شڤانی دزانین بڕیار یا خەلەتە، لێ چ کەس نەوێرا باخڤیت و هەمیان سەری خۆ بلەقاند و گۆت 'یا دروستە!'. شڤان ژی ژ ترسا وێ یەکێ کو نەبیتە کەسەکێ نامۆ، دەنگێ خۆ نەکر. پشتی چەند هەیڤان، بڕیار بووە ئەگەرێ ئاریشەیەکا مەزن. شڤان پشتی ڤێ رویدانێ تووشی هەستکرن ب گونەهباریێ بوو. دەما دگەل پسپۆرێ دەروونی ئاخفتی، فێربوو کو 'هزرا کۆمێ چەوا مێشکێ مرۆڤی کۆلە دکەت' و فێربوو چەوا ب رێزڤە رایێ خۆ یێ جودا بێژیت.",
          whenToSeeDoctor: [
            "دەما ترسا ژ قسەیێن خەلکی و جڤاکی ببیتە ئەگەرێ راوەستیانا تەمام یا ژیانا کەسی",
            "پەیدابوونا خەمۆکی و شەرمەکا دژوار ژبەر نەشیانا دەربرینا هزر و بیرێن خۆ",
            "تووشبوون ب دڵەڕاوکێیا جڤاکی (Social Anxiety) کو ناهێلیت دگەل کەسان باخڤی",
            "تێکچوونا ناسنامەیا کەسی و هەستکرن ب وێ یەکێ کو تو بوویە کەسەکێ درەوین بتنێ بۆ رازیکرنا خەلکی"
          ]
        },
        ar: {
          definition: "التفكير الجماعي (Groupthink) هو ظاهرة نفسية خطيرة تحدث عندما تطغى الرغبة في التوافق والسلام الظاهري داخل المجموعة على التفكير النقدي وتقييم الحقائق بإنصاف. يقود هذا الأفراد للتنازل عن قناعاتهم الشخصية وقبول قرارات خاطئة أو ظالمة خوفاً من التعرض للنقد أو النبذ، كما أثبتت تجارب سولومون آش الشهيرة حول ضغوط الامتثال.",
          symptoms: [
            "وهم القوة والكمال؛ الاعتقاد بأن قرارات المجموعة محصنة ضد الخطأ",
            "اليقين الأخلاقي المطلق بأن الجماعة دائماً على حق وتصرفاتها نبيلة",
            "ممارسة ضغوط قاسية على أي عضو يجرؤ على إبداء رأي مخالف",
            "الرقابة الذاتية؛ كتمان الشكوك والمخاوف لتجنب إزعاج الآخرين",
            "وهم الإجماع؛ افتراض أن صمت الأعضاء يعني موافقتهم التامة",
            "ظهور 'حراس الفكر' الذين يحجبون أي معلومات محبطة عن القائد",
            "شيطنة وتخوين أي طرف خارجي ينتقد سياسات المجموعة",
            "تعطيل الضمير الفردي لصالح طاعة العادات أو الأوامر الجمعية",
            "صراع نفسي داخلي وشعور بالذنب عند الانصياع لقرارات خاطئة",
            "انهيار ونتائج كارثية للمشاريع المشتركة رغم وضوح الأخطاء مسبقاً"
          ],
          causes: [
            "التماسك الشديد للمجموعة مع وجود قائد متسلط أو ذو كاريزما طاغية",
            "عزل المجموعة عن الآراء الخارجية المستقلة والخبراء المحايدين",
            "الخوف البشري الفطري القديم من الطرد والنبذ من القبيلة أو العشيرة",
            "غياب ثقافة الحوار وتقبل الاختلاف في البيئة الأسرية والمؤسسية",
            "الضغط الزمني الشديد والحاجة لاتخاذ قرارات مصيرية تحت الخوف"
          ],
          stats: "أثبتت تجارب الامتثال الاجتماعي أن أكثر من 75% من المشاركين يوافقون على رأي خاطئ وواضح على الأقل مرة واحدة لمجرد أن الجماعة أجمعت عليه (Asch/APA, 2022).",
          treatment: [
            "تعيين عضو رسمي بدور 'محامي الشيطان' لمساءلة كل قرار واكتشاف ثغراته",
            "التصويت السري وإبداء الملاحظات دون ذكر الأسماء لكسر حاجز الخوف",
            "تشجيع القادة على الاستماع قبل إبداء آرائهم الخاصة في الاجتماعات",
            "بناء الأمان النفسي في العائلة والمؤسسة حيث يُكافأ التفكير المستقل"
          ],
          realStory: "شفان، شاب في الثلاثين من عمره من العمادية، كان يعمل في مؤسسة محلية. في أحد الاجتماعات، اقترح المدير مشروعاً غير مدروس سيلحق الضرر بالعديد من العائلات. كان جميع الموظفين يدركون الخطأ، لكن خوفاً من غضب المدير، صفق الجميع وقالوا: 'خطة رائعة!'. التزم شفان الصمت أيضاً خوفاً من أن يُعتبر متمرداً. بعد أشهر، فشل المشروع وتحمل الجميع الخسائر. شعر شفان بتأنيب ضمير حاد. بمساعدة الاستشارة النفسية، فهم كيف يلغي 'التفكير الجماعي' العقول، وتدرب على التعبير عن رأيه المستقل باحترام وشجاعة.",
          whenToSeeDoctor: [
            "عندما يمنعك الخوف من رأي المجتمع من عيش حياتك الطبيعية واختيار قراراتك",
            "الإصابة بالرهاب الاجتماعي الحاد والعجز عن التحدث أمام الناس",
            "الشعور بالاكتئاب وفقدان الهوية نتيجة ارتداء أقنعة مصطنعة لإرضاء الآخرين",
            "نوبات الهلع الناتجة عن ضغوط التوقعات الأسرية والاجتماعية القاتلة"
          ]
        },
        ku: {
          definition: "هزرا کۆمێ (Groupthink) و چاڤلێکرنا جڤاکی ئێک ژ مەزنترین نەخۆشیێن دەروونی و جڤاکی یە کو دەستەسەریێ ل سەر مێشکێ مرۆڤی دکەت. د ڤێ دیاردەیێ دا، کەسەک نەوێریت بڕیارەکا جودا بدەت یان خەلەتیا کۆمێ دیار بکەت بتنێ ژ ترسا وێ یەکێ کو خەلک بێژن 'ئەڤە یێ ژ مە جودایە' یان ژ ترسا تانە و تەشەران. مرۆڤ ل سەر حەقێ خۆ یان حەقیقەتێ بێدەنگ دبیت بتنێ دا کو دلێ خەلکی نەئێشینیت. تاقیکرنێن دەروونناسیێ سەلماندینە کو پڕانیا مرۆڤان حەز دکەن چاڤلێکرنێ بکەن نەکو هزرەکا سەربەخۆ، و ئەڤە دبیتە ئەگەرێ دروستبوونا فشارێن مەزن ل سەر گەنجان د ناڤ جڤاکی دا.",
          symptoms: [
            "باوەرکرن ب وێ یەکێ کو کۆم یان عەشیرەتا مە چ جاران خەلەت نابیت",
            "سەردانانا هزرێن سەربەخۆ و چاڤلێکرنا کوێرانە ل دەوروبەران",
            "فشارا مەزن ل سەر هەر کەسەکێ کو دەنگەکێ جودا یان رەخنەیەکێ بینیتە پێش",
            "بێدەنگ مان ل سەر نەحەقیێ ژ ترسا ئەوەی کو تو ژ ناڤ بازنەیێ خەلکی بێیە هاڤێتن",
            "هزڕکرن ب وێ یەکێ کو ئەگەر کەس باوەر ناکەت کەواتە نابیت تو ژی باوەر بکەی",
            "دیتنا ئەوێن ژ دەرڤەی کۆمێ ب شێوەیەکێ کێم و نەزان و دژمنکار",
            "بەردانا ئارمانج و باوەرێن خۆ یێن تایبەت بتنێ بۆ راگرتنا رەزامەندیا خەلکی",
            "ئازارا دەروونی یا قویر دەما تو نەچاری تشتی بێژی کو باوەری پێ نینە",
            "هەستکرن ب دووڕووییێ د ناڤبەرا وێ یێ تو هەی و وێ یێ تو نیشا خەلکی ددەی",
            "شکەستنا ب کۆم د بڕیارێن ژیانێ دا ژ ئەگەرێ نەبوونا رەخنەیا زانستی"
          ],
          causes: [
            "ترسا فتری یا مرۆڤی ژ بێبەشبوون و دەرکرنێ ژ ناڤ خێزان و جڤاکێ خۆ",
            "هەبوونا دەستهەلاتەکا توند یان نەریتێن چەقبەستوو کو رێ ل هزرکرنێ دگرن",
            "نەبوونا فێرکرنا رەخنەیا ئاڤاکەر د ناڤ قوتابخانە و پەروەردەیا زارۆکینیێ دا",
            "کەلتوورێ 'خەلک چ دبێژیت؟' کو بوویە حاکم ل سەر ژیانا تەڤایا خەلکی",
            "لاوازبوونا باوەربەخۆبوونێ دەما مرۆڤ هزر دکەت بۆچوونا وی یا بێ بها یە"
          ],
          stats: "ڤەکۆلینێن جڤاکی نیشان ددەن کو پتر ژ ٧٥٪ ژ مرۆڤان ب کێمی جارەکێ رازی دبن ل سەر بڕیارەکا ئاشکرا یا خەلەت بتنێ ژبەرکو هەمی خەلک دگەل بووینە (Asch, 2022).",
          treatment: [
            "فێربوونا وێ چەندێ کو رەخنە و بیروبۆچوونا جودا خیانەت نینە بەلکو دەولەمەندییە",
            "رێزگرتن ل هزرێن گەنجان د ناڤ ماڵ و جڤاتان دا بێی بێدەنگکرنا وان",
            "دروستکرنا هەڤالینیێ دگەل ئەو کەسێن کو رێزێ ل ئازادیا هزرکرنا تە دگرن",
            "فێربوونا هونەرێ گۆتنا 'ئەز دگەل نینم' ب شێوەیەکێ ئەدەب و زانستی"
          ],
          realStory: "شڤان، گەنجەکێ ٣٠ ساڵی یێ خەلکێ ئامێدیێ بوو، د فەرمانگەیەکێ دا کار دکر. د جڤاتا فەرمانگەیێ دا، رێڤەبەری بڕیارەکا گەلەک نەدرۆست دا کو زیان دگەهاندە خەلکێ باژێڕی. هەمی هەڤالێن شڤانی دزانین بڕیار یا خەلەتە، لێ چ کەس نەوێرا باخڤیت و هەمیان سەری خۆ بلەقاند و گۆت 'یا دروستە!'. شڤان ژی ژ ترسا وێ یەکێ کو نەبیتە کەسەکێ نامۆ، دەنگێ خۆ نەکر. پشتی چەند هەیڤان، بڕیار بووە ئەگەرێ ئاریشەیەکا مەزن. شڤان پشتی ڤێ رویدانێ تووشی هەستکرن ب گونەهباریێ بوو. دەما دگەل پسپۆرێ دەروونی ئاخفتی، فێربوو کو 'هزرا کۆمێ چەوا مێشکێ مرۆڤی کۆلە دکەت' و فێربوو چەوا ب رێزڤە رایێ خۆ یێ جودا بێژیت.",
          whenToSeeDoctor: [
            "دەما ترسا ژ قسەیێن خەلکی و جڤاکی ببیتە ئەگەرێ راوەستیانا تەمام یا ژیانا کەسی",
            "پەیدابوونا خەمۆکی و شەرمەکا دژوار ژبەر نەشیانا دەربرینا هزر و بیرێن خۆ",
            "تووشبوون ب دڵەڕاوکێیا جڤاکی (Social Anxiety) کو ناهێلیت دگەل کەسان باخڤی",
            "تێکچوونا ناسنامەیا کەسی و هەستکرن ب وێ یەکێ کو تو بوویە کەسەکێ درەوین بتنێ بۆ رازیکرنا خەلکی"
          ]
        }
      },
      source: "https://www.apa.org/topics/social-dynamics",
      citation: "(APA, 2022)"
    }
  ]
};
