/* used to */
TOPICS.push((()=>{
 const W={_:'used to + Grundform: eine Gewohnheit oder ein Zustand in der Vergangenheit, der jetzt nicht mehr gilt. Frage und Verneinung mit did: did you use to …? / I didn\'t use to …|used to + base form: a habit or state in the past that is not true now. Questions and negatives with did: did you use to …? / I didn\'t use to …'};
 const B=(s,ok,bad,lv,sb,h)=>BK(s,ok,bad,lv,sb||'',h||'');
 const bank=[
  B("I ___ to play with dolls when I was little.",['used'],['use','was'],1),
  B("We ___ to live in Bern, but now we live in Zurich.",['used'],['use','were'],1),
  B("She ___ to have long hair.",['used'],['use','was'],1),
  B("He used ___ football every day.",['to play'],['playing','to playing'],1,'','(play)'),
  B("They used ___ a big dog.",['to have'],['having','have'],2,'','(have)'),
  B("I didn't ___ to like vegetables.",['use'],['used','using'],2),
  B("She didn't ___ to wear glasses.",['use'],['used','using'],2),
  B("Did you ___ to go to the same school?",['use'],['used','using'],2),
  B("___ he use to smoke?",['Did'],['Does','Was'],3),
  B("My grandfather ___ to tell us stories every evening.",['used'],['use','was'],2),
  B("There ___ to be a cinema here, but it closed.",['used'],['use','was'],2),
  B("I ___ to be afraid of the dark, but now I'm not.",['used'],['use','was'],1),
  B("We ___ use to have a TV in the kitchen.",["didn't"],["don't","weren't"],3),
  B("Where ___ you use to live?",['did'],['do','were'],3),
  B("Children ___ to play outside more.",['used'],['use','were'],2),
  B("My dad ___ to go fishing every Sunday.",['used'],['use','was'],2),
  B("She used to ___ shy, but now she loves talking.",['be'],['being','been'],3,'','(be)'),
  B("People ___ to write letters. Now they write emails.",['used'],['use','were'],2)
 ];
 return bankTopic({id:'us',grp:'verben',ord:110,ic:'🕰️',de:'used to',en:'used to',desc:'I used to play · she didn\'t use to like it · did you use to…?',
  fillInstr:()=>L('Setze das passende Wort ein.','Fill in the correct word.'),
  fillDesc:()=>L('das passende Wort schreiben','write the right word'),
  lvDe:'C: used to in einfachen Aussagen. B: dazu Verneinung mit didn\'t use to. A: dazu Fragen und schwierigere Sätze.',lvEn:'C: used to in simple statements. B: plus the negative didn\'t use to. A: plus questions and harder sentences.',
  why:W,bank,
  err:[["I used to play with dolls.",["I use to play with dolls.","I used to playing with dolls."],1],["She didn't use to like fish.",["She didn't used to like fish.","She not used to like fish."],2],["Did you use to live here?",["Did you used to live here?","Do you use to live here?"],2],["We used to live in Bern.",["We were used to live in Bern.","We used live in Bern."],1]],
  errWhy:'Aussage: used to. Mit did (Frage / Verneinung) fällt das -d weg: did / didn\'t + use to.|Statement: used to. With did (question / negative) the -d disappears: did / didn\'t + use to.',
  slides:()=>[
   slide(L('Was bedeutet used to?','What does used to mean?'),
    SL.tl({c:'#a16207',spans:[[8,50,'used to','#a16207']],marks:[]})+SL.p('<center>'+L('Früher so, <b>heute nicht mehr</b>.','That was true in the past, but <b>not any more</b>.')+'</center>')+SL.ex(['I <b>used to play</b> with dolls. <span class="muted">(heute nicht mehr)</span>','We <b>used to live</b> in Bern. <span class="muted">(heute wohnen wir woanders)</span>'])),
   slide(L('Bildung','How to form it'),
    SL.fm([['a',L('Subjekt','Subject')],'+',['b','used to'],'+',['c',L('Grundform','base form')]])+SL.tbl([L('Satzart','Type'),L('Beispiel','Example')],[[L('Aussage','statement'),'She <b>used to</b> have long hair.'],[L('Verneinung','negative'),'She <b>didn\'t use to</b> wear glasses.'],[L('Frage','question'),'<b>Did</b> you <b>use to</b> live here?']])+SL.warn(L('In Frage und Verneinung: <b>use to</b> (ohne -d), weil <i>did</i> schon die Vergangenheit zeigt.','In questions and negatives: <b>use to</b> (no -d), because <i>did</i> already shows the past.'))),
   slide(L('Gewohnheiten und Zustände','Habits and states'),
    SL.tbl([L('Art','Kind'),L('Beispiel','Example')],[[L('Gewohnheit','habit'),'We <b>used to</b> go to the beach every summer.'],[L('Zustand','state'),'There <b>used to</b> be a cinema here.'],[L('Gefühl','feeling'),'I <b>used to</b> be afraid of the dark.']])+SL.tip(L('Für <b>einmalige</b> Ereignisse nimmt man <b>nicht</b> used to, sondern past simple: <i>I went to Rome in 2020.</i>','For <b>one-time</b> events do <b>not</b> use used to, use the past simple: <i>I went to Rome in 2020.</i>'))),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['I use to play football.','I used to play football.'],['She didn\'t used to like it.','She didn\'t use to like it.'],['Did you used to live here?','Did you use to live here?'],['I used to going.','I used to go.']])),
   tryS(L('Übung','Exercise'),()=>[['I ___ to be shy, but now I\'m not.','used'],['We ___ to live in Bern.','used'],['She didn\'t ___ to like fish.','use'],['___ you use to play the piano?','Did'],['They used ___ a dog. (have)','to have']])
  ]});
})());
