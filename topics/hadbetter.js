/* should, ought to, had better */
TOPICS.push((()=>{
 const W={_:'should / ought to = Rat. had better = starker Rat mit Warnung («sonst gibt es Probleme»). Danach steht die Grundform ohne to (ought to: mit to).|should / ought to = advice. had better = strong advice with a warning (“or there will be trouble”). Then use the base form without to (ought to: with to).'};
 const B=(s,ok,bad,lv,sb,h)=>BK(s,ok,bad,lv,sb||'',h||'');
 const bank=[
  B("You look tired. You ___ go to bed early.",['should','ought to','had better'],['must to','are better'],1),
  B("You ___ eat more vegetables. They are healthy.",['should','ought to'],['had better to','must to'],1),
  B("It's very late. You ___ go home now.",['had better','should'],['ought','have better'],2),
  B("We ___ to leave now or we will miss the train.",['ought'],['should','had'],2),
  B("You ___ better hurry, or the bus will leave without you!",['had'],['have','should'],2),
  B("You had ___ do your homework before the test.",['better'],['best','good'],2),
  B("She ___ to see a doctor. She has had a cough for two weeks.",['ought'],['had','must'],2),
  B("You ___ not shout in the library.",['should'],['ought','had better to'],1),
  B("You had better ___ late tonight.",["not be"],["don't be","be not"],3,'','(not / be)'),
  B("He ___ to be more careful with his phone.",['ought'],['should to','had'],2),
  B("We had better ___ an umbrella. It looks like rain.",['take'],['to take','taking'],2,'','(take)'),
  B("You ___ drink so much cola. It's not healthy.",["shouldn't","ought not to"],["don't should","must to"],2),
  B("You ___ spend all your money on sweets.",["shouldn't","ought not to"],["don't have","hadn't better"],3),
  B("I think you ___ talk to your teacher about it.",['should','ought to'],['had better to','must to'],1),
  B("You ___ tell the truth, or you will be in trouble.",['had better','should','ought to'],['ought','have better'],3),
  B("They ___ to be on time. The lesson starts at eight.",['ought'],['had','must'],2),
  B("The weather is bad. We ___ stay at home today.",['should','had better','ought to'],["don't have","must to"],1)
 ];
 return bankTopic({id:'hb',grp:'verben',ord:90,ic:'💬',de:'Ratschläge: should, ought to, had better',en:'Advice: should, ought to, had better',desc:'You should rest. · You ought to ask. · You had better hurry.',
  fillInstr:()=>L('Setze das passende Wort ein.','Fill in the correct word.'),
  fillDesc:()=>L('das passende Wort schreiben','write the right word'),
  lvDe:'C: should für Ratschläge. B: dazu ought to und had better. A: dazu Verneinung und schwierigere Sätze.',lvEn:'C: should for advice. B: plus ought to and had better. A: plus negatives and harder sentences.',
  why:W,bank,
  err:[["You should go to bed early.",["You should to go to bed early.","You shoulds go to bed early."],1],["You had better hurry.",["You had better to hurry.","You have better hurry."],2],["You ought to help your mum.",["You ought help your mum.","You ought to helping your mum."],2],["You shouldn't shout in the library.",["You don't should shout in the library.","You shouldn't to shout in the library."],2]],
  errWhy:'should / had better + Grundform ohne to. ought to behält to. Verneinung: shouldn\'t, had better not, ought not to.|should / had better + base form without to. ought to keeps to. Negative: shouldn\'t, had better not, ought not to.',
  slides:()=>[
   slide(L('Drei Möglichkeiten für einen Rat','Three ways to give advice'),
    SL.tbl([L('Ausdruck','Expression'),L('Stärke','Strength'),L('Beispiel','Example')],[['<b>should</b>',L('normaler Rat','normal advice'),'You <b>should</b> go to bed early.'],['<b>ought to</b>',L('wie should, etwas formeller','like should, a bit more formal'),'You <b>ought to</b> help your mum.'],['<b>had better</b>',L('starker Rat, mit Warnung','strong advice, with a warning'),'You <b>had better</b> hurry, or you\'ll miss the bus.']])),
   slide(L('Bildung','How to form it'),
    SL.fm([['a',L('Subjekt','Subject')],'+',['b','should'],'+',['c',L('Grundform','base form')]])+SL.fm([['a',L('Subjekt','Subject')],'+',['b','ought to'],'+',['c',L('Grundform','base form')]])+SL.fm([['a',L('Subjekt','Subject')],'+',['b','had better'],'+',['c',L('Grundform','base form')]])+SL.tip(L('<b>had better</b> klingt wie Vergangenheit, meint aber die <b>Zukunft</b> / <b>jetzt</b>. Kurzform: <i>You\'d better</i>.','<b>had better</b> looks like the past, but refers to <b>now</b> / the <b>future</b>. Short form: <i>You\'d better</i>.'))),
   slide(L('Verneinung','Negatives'),
    SL.tbl([L('Positiv','Positive'),L('Negativ','Negative')],[['should','<b>shouldn\'t</b> – You shouldn\'t shout.'],['ought to','<b>ought not to</b> – You ought not to be late.'],['had better','had better <b>not</b> – You had better <b>not</b> be late.']])+SL.warn(L('Kein <s>don\'t should</s>. Kein <s>hadn\'t better</s>.','No <s>don\'t should</s>. No <s>hadn\'t better</s>.'))),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['You should to go home.','You should go home.'],['You had better to hurry.','You had better hurry.'],['You ought help me.','You ought to help me.'],['You don\'t should shout.','You shouldn\'t shout.']])),
   tryS(L('Übung','Exercise'),()=>[['You have a cold. You ___ stay at home.','should'],['You ___ better hurry or you will be late.','had'],['You ought ___ help your friends.','to'],['You ___ eat so many sweets. (Rat dagegen)',"shouldn't"],['You had better ___ late. (nicht)','not be']])
  ]});
})());
