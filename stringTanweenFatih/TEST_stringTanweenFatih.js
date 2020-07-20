import {stringTanweenFatih} from './stringTanweenFatih.js'

//============ test codes ==================
var r=0; // test tracker
r |= test("ستُوتِنْكَا","ستُوتِنْكًا")
r |= test("شَيءُ","شَيئًا")
r |= test("عِبْءُ","عِبْئًا")
r |= test("دِفْءُ","دِفْئًا")
r |= test("مَلْءُ","مَلْئًا")
r |= test("كَفْءُ","كَفْئًا")
r |= test("نَشْءُ","نَشْئًا")
r |= test("وَطْءُ","وَطْئًا")
r |= test("بَطْءُ","بَطْئًا")
r |= test("بَطِيءٌ","بَطِيئًا")
r |= test("فَيْءٌ","فَيْئًا")
r |= test("مَريْءٌ","مَريْئًا")
r |= test("مليْءٌ","مليْئًا")
r |= test("جَرْيءٌ","جَرْيئًا")
r |= test("هَنيءٌ","هَنيئًا")
r |= test("دَنِيءٌ","دَنِيئًا")
r |= test("رَدِيءٌ","رَدِيئًا")
r |= test("مُضِيءٌ","مُضِيئًا")
r |= test("بَرِيءٌ","بَرِيئًا")
//-------------------------------------
r |= test("سُوءٌ","سُوءًا")
r |= test("جُزْء","جُزْءًا")
r |= test("رِدْءٌ","رِدْءًا")
r |= test("بِرْء","بِرْءًا")
r |= test("لُجوُءٌ","لُجوُءًا")
r |= test("ضَوء","ضَوءًا")
r |= test("مَخبوء","مَخبوءًا")
r |= test("هُدوءٌ","هُدوءًا")
r |= test("مَوْبُوءٌ","مَوْبُوءًا")
r |= test("مَجْزوء","مَجْزوءًا")
r |= test("مَمْلوءٌ","مَمْلوءًا")
r |= test("مَقْروءٌ","مَقْروءًا")
r |= test("مَبْدوء","مَبْدوءًا")
r |= test("وضوءٌ","وضوءًا")
//-------------------------------------
r |= test("شاطِئٌ","شاطِئًا")
r |= test("بارِئٌ","بارِئًا")
r |= test("بادِئٌ","بادِئًا")
r |= test("مُبتَدِئ","مُبتَدِئًا")
r |= test("مَوانِئُ","مَوانِئًا")
r |= test("هادِئٌ","هادِئًا")
r |= test("قارِئٌ","قارِئًا")
r |= test("ضَمَئُ","ضَمَئًا")
r |= test("مُخْطِئُ","مُخْطِئًا")
r |= test("مُوطِئٌ","مُوطِئًا")
r |= test("مُقرِئٌ","مُقرِئًا")
//-------------------------------------
r |= test("مستشفَىَ","مستشفًى")
r |= test("فَتَى","فَتًى")
r |= test("مُنَى","مُنًى")
r |= test("سُدَى","سُدًى")
r |= test("هَوَى","هَوًى")
r |= test("مَرسَى","مَرسًى")
r |= test("رَحَى","رَحًى")
//-------------------------------------
r |= test("سَمَاءُ","سَمَاءً")
r |= test("بِنَاءٌ","بِنَاءً")
r |= test("سَوَاءٌ","سَوَاءً")
r |= test("جَزاءُ","جَزاءً")
r |= test("وِعاءُ","وِعاءً")
r |= test("كِساءُ","كِساءً")
r |= test("هَناءُ","هَناءً")
r |= test("عَزاءُ","عَزاءً")
r |= test("عُوآءُ","عُوآءً")
r |= test("مَاءُ","مَاءً")
r |= test("وَفاءُ","وَفاءً")
r |= test("سُفَهَاءُ","سُفَهَاءً")
r |= test("وَبَاءُ","وَبَاءً")
r |= test("دَوَاءُ","دَوَاءً")
r |= test("دُعَاءُ","دُعَاءً")
r |= test("شَقَاءُ","شَقَاءً")
r |= test("دَاءُ","دَاءً")
r |= test("رِداءُ","رِداءً")
r |= test("وِقاءُ","وِقاءً")
//-------------------------------------
r |= test("مُبتدَأ","مُبتدَأً")
r |= test("مَخبَأ","مَخبَأً")
r |= test("نَشَأ","نَشَأً")
r |= test("مَنْشَأ","مَنْشَأً")
r |= test("خَطَأ","خَطَأً")
r |= test("مَأ","مَأً")
r |= test("مِدْفَأ","مِدْفَأً")
r |= test("مِرْجَأ","مِرْجَأً")
//-------------------------------------
r |= test("عَصَا","عَصًا")
r |= test("عَلا","عَلًا")
r |= test("عَشَا","عَشًا")
r |= test("عَرَا","عَرًا")
r |= test("رضَا","رضًا")
r |= test("اسَا","اسًا")
r |= test("رِبَا","رِبًا")
r |= test("قَطَا","قَطًا")
//-------------------------------------
r |= test("مدرسَةٌ","مدرسَةً")
r |= test("سيارَةٌ","سيارَةً")
r |= test("علبَةٌ","علبَةً")
r |= test("مائَةٌ","مائَةً")
r |= test("نعمَةٌ","نعمَةً")
//-------------------------------------
r |= test("كتابٌ","كتابًا")
r |= test("كرسيٌّ","كرسيًّا")
r |= test("متحفٌ","متحفًا")
r |= test("مدرِسٌ","مدرِسًا")
r |= test("بحرُ","بحرًا")
r |= test("نهرُ","نهرًا")
r |= test("بيتُ","بيتًا")
r |= test("ولًدُ","ولًدًا")
r |= test("بنتً","بنتًا")
r |= test("مرً","مرًا")
r |= test("هواءً","هواءً")
r |= test("لؤلؤً","لؤلؤًا")
r |= test("جؤجؤً","جؤجؤًا")
r |= test("بؤبؤً","بؤبؤًا")
r |= test("أمرؤً","أمرؤًا")
r |= test("تكافؤ","تكافؤًا")
r |= test("تواطؤ","تواطؤًا")
r |= test("تلكُؤً","تلكُؤًا")
r |= test("مذياع","مذياعًا")
r |= test("تلفازً","تلفازًا")
r |= test("بلد","بلدًا")
r |= test("الفَ","الفًا")
r |= test("مليونَ","مليونًا")
r |= test("شرطَ","شرطًا")
r |= test("دينارَ","دينارًا")
r |= test("جنيهَ","جنيهًا")
r |= test("ريالَ","ريالًا")
r |= test("شيكلَ","شيكلًا")
r |= test("كُوَيتِيٍّ","كُوَيتِيًّا")
r |= test("قاضي","قاضيًا")
if (r==0) console.log("Test Cases Passed.");
//------------------
function test(n,should) {
let result = stringTanweenFatih(n);
if (result !== should) {console.log(`${n} Output   : ${result}\n${n} Should be: ${should}`);return 1;}
}
