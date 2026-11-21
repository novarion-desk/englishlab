/* Adverbs of manner */
TOPICS.push((()=>{
 const W={_:'Adverbien der Art und Weise beantworten «Wie?» und stehen beim Verb. Meist Adjektiv + -ly (careful → carefully). Unregelmässig: good → well, fast → fast, hard → hard.|Adverbs of manner answer “How?” and go with the verb. Usually adjective + -ly (careful → carefully). Irregular: good → well, fast → fast, hard → hard.'};
 const B=(s,ok,bad,lv,h)=>BK(s,ok,bad,lv,'',h);
 const bank=[
  B('She sings ___.',['beautifully'],['beautiful','beautifuly'],1,'(beautiful)'),
  B('He drives ___.',['carefully'],['careful','carefuly'],1,'(careful)'),
  B('Please speak ___.',['quietly'],['quiet','quietely'],1,'(quiet)'),
  B('He plays tennis very ___.',['well'],['good','goodly'],1,'(good)'),
  B('He runs ___.',['fast'],['fastly','fasts'],1,'(fast)'),
  B('He is a very ___ driver.',['careful'],['carefully','carefuly'],1,'(careful)'),
  B('She is a ___ singer.',['good'],['well','goodly'],1,'(good)'),
  B('The children played ___.',['happily'],['happyly','happy'],2,'(happy)'),
  B('She won the race ___.',['easily'],['easyly','easy'],2,'(easy)'),
  B('She works ___.',['hard'],['hardly','hardy'],2,'(hard)'),
  B('The teacher spoke ___ to the class.',['angrily'],['angryly','angry'],2,'(angry)'),
  B('They waited ___ for the bus.',['patiently'],['patient','patientely'],2,'(patient)'),
  B('I did the test ___.',['badly'],['bad','badlily'],2,'(bad)'),
  B('He opened the box ___.',['gently'],['gentlely','gentle'],3,'(gentle)'),
  B('He arrived ___.',['late'],['lately','latly'],3,'(late)'),
  B('The soup smells ___.',['good'],['well','goodly'],3,'(good)'),
  B('She looks ___ today.',['happy'],['happily','happyly'],3,'(happy)'),
  B('He answered the question ___.',['correctly'],['correct','correctely'],2,'(correct)')
 ];
 return bankTopic({id:'ad',grp:'adj',ord:20,ic:'💨',de:'Adverbien der Art und Weise',en:'Adverbs of manner',desc:'quickly · carefully · well · hard',
  fillInstr:()=>L('Bilde das Adverb aus dem Adjektiv.','Make the adverb from the adjective.'),
  fillDesc:()=>L('das Adverb schreiben','write the adverb'),
  lvDe:'C: -ly und good → well. B: dazu -y → -ily, hard / fast. A: dazu Verben wie smell / look (Adjektiv) und Sonderfälle.',lvEn:'C: -ly and good → well. B: plus -y → -ily, hard / fast. A: plus verbs like smell / look (adjective) and special cases.',
  why:W,bank,
  err:[['She speaks English well.',['She speaks English good.','She speaks well English.'],1],['They played the game badly.',['They played the game bad.','They played badly the game.'],1],['He drives carefully.',['He drives careful.','He drives carefuly.'],1],['She worked hard.',['She worked hardly.','She worked hardy.'],2],['The soup smells good.',['The soup smells well.','The soup smells goodly.'],3]],errWhy:W._,
  slides:()=>[
   slide(L('Adjektiv oder Adverb?','Adjective or adverb?'),
    SL.p(L('Ein <b>Adjektiv</b> beschreibt ein Nomen. Ein <b>Adverb der Art und Weise</b> beschreibt ein Verb: <b>Wie</b> geschieht etwas?','An <b>adjective</b> describes a noun. An <b>adverb of manner</b> describes a verb: <b>How</b> does something happen?'))+SL.ex(['She is a <b>careful</b> driver. <small>(Adjektiv / adjective)</small>','She drives <b>carefully</b>. <small>(Adverb / adverb)</small>'])),
   slide(L('So bildet man es','How to form it'),
    SL.tbl([L('Regel','Rule'),L('Beispiele','Examples')],[[L('Adjektiv + <b>-ly</b>','adjective + <b>-ly</b>'),'quiet → quiet<b>ly</b> · careful → careful<b>ly</b> · slow → slow<b>ly</b>'],[L('-y wird <b>-ily</b>','-y becomes <b>-ily</b>'),'happy → happ<b>ily</b> · easy → eas<b>ily</b> · angry → angr<b>ily</b>'],[L('-le wird <b>-ly</b>','-le becomes <b>-ly</b>'),'gentle → gent<b>ly</b> · simple → simp<b>ly</b>'],[L('-ic wird <b>-ically</b>','-ic becomes <b>-ically</b>'),'tragic → tragic<b>ally</b> · basic → basic<b>ally</b>']])),
   slide(L('Unregelmässig','Irregular'),
    SL.tbl([L('Adjektiv','Adjective'),L('Adverb','Adverb'),L('Beispiel','Example')],[['good','<b>well</b>','He plays tennis <b>well</b>.'],['fast','<b>fast</b>','She runs <b>fast</b>.'],['hard','<b>hard</b>','He works <b>hard</b>.'],['late','<b>late</b>','They arrived <b>late</b>.']])+SL.warn(L('<b>hardly</b> heisst «kaum», <b>lately</b> heisst «in letzter Zeit». Das sind andere Wörter.','<b>hardly</b> means “almost not”, <b>lately</b> means “recently”. These are different words.'))),
   slide(L('Wo steht das Adverb?','Where does the adverb go?'),
    SL.p(L('Das Adverb steht meist <b>am Ende</b> des Satzes, nie zwischen Verb und Objekt.','The adverb usually goes at the <b>end</b> of the sentence, never between verb and object.'))+SL.err([['She speaks well English.','She speaks English well.']])+SL.ex(['He <b>opened the door quietly</b>.'])),
   slide(L('Nach look, smell, taste, feel, sound','After look, smell, taste, feel, sound'),
    SL.p(L('Diese Verben beschreiben einen <b>Zustand</b>. Danach folgt ein <b>Adjektiv</b>.','These verbs describe a <b>state</b>. They are followed by an <b>adjective</b>.'))+SL.ex(['The soup smells <b>good</b>.','She looks <b>happy</b> today.','That sounds <b>great</b>!'])+SL.err([['The soup smells well.','The soup smells good.']])),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['She speaks English good.','She speaks English well.'],['He drives careful.','He drives carefully.'],['They worked hardly.','They worked hard.'],['The children played happyly.','The children played happily.']])),
   tryS(L('Übung','Exercise'),()=>[['She sings ___. (beautiful)','beautifully'],['He plays tennis very ___. (good)','well'],['The children played ___. (happy)','happily'],['He opened the box ___. (gentle)','gently'],['She works ___. (hard)','hard']])
  ]});
})());
