/* Indefinite pronouns */
TOPICS.push((()=>{
 const W={_:'some- in bejahten Sätzen und Angeboten, any- in Verneinung und Fragen, no- = verneint ohne not, every- = alle / alles. Diese Wörter sind singular.|some- in positive sentences and offers, any- in negatives and questions, no- = negative without not, every- = all. These words are singular.'};
 const B=(s,ok,bad,lv)=>BK(s,ok,bad,lv,'');
 const bank=[
  B('I can hear a knock. There is ___ at the door.',['someone','somebody'],['anyone','anybody'],1),
  B("I don't know ___ in this town.",['anyone','anybody'],['someone','somebody'],1),
  B('Is there ___ in the box?',['anything'],['everything','somewhere'],1),
  B('I am hungry. I need ___ to eat.',['something'],['anything','everything'],1),
  B('We looked ___, but we could not find the key.',['everywhere'],['nowhere','anything'],1),
  B("It is a secret. Please don't tell ___.",['anyone','anybody'],['someone','somebody'],1),
  B('___ knows the answer. All the students raised their hands.',['Everyone','Everybody'],['Nobody','Something'],1),
  B('The room is empty. There is ___ in it.',['nobody','no one'],['everybody','somebody'],1),
  B('Would you like ___ to drink?',['something'],['nothing','nowhere'],2),
  B("I don't want ___ else.",['anything'],['something','nothing'],2),
  B("She didn't go ___ last weekend.",['anywhere'],['somewhere','nowhere'],2),
  B("Let's go ___ nice for dinner.",['somewhere'],['anywhere','nowhere'],2),
  B('It was dark. I could see ___.',['nothing'],['anything','something'],2),
  B('Is there ___ I can help?',['anything'],['everything','nowhere'],2),
  B('Everyone ___ happy today. (be)',['is'],['are','be'],3),
  B('Nobody ___ here. (live)',['lives'],['live','living'],3),
  B("There isn't ___ in the fridge. It is empty.",['anything'],['nothing','something'],3),
  B('She didn\'t tell ___ about the party.',['anyone','anybody'],['someone','everyone'],3)
 ];
 return bankTopic({id:'ip',grp:'nomen',ord:40,ic:'❔',de:'Indefinitpronomen',en:'Indefinite pronouns',desc:'someone · anything · nobody · everywhere',
  fillInstr:()=>L('Setze das passende Wort ein.','Fill in the correct word.'),
  lvDe:'C: some- / any- / every- in einfachen Sätzen. B: dazu Angebote und Verneinungen. A: dazu Verbform (Singular) und schwierigere Sätze.',lvEn:'C: some- / any- / every- in simple sentences. B: plus offers and negatives. A: plus verb form (singular) and harder sentences.',
  why:W,bank,
  err:[['I did not see anything.',['I did not see nothing.','I did not see something.'],1],['Nobody is at home.',['Nobody are at home.','Nobody is not at home.'],2],['Everyone likes pizza.',['Everyone like pizza.','Everyone are liking pizza.'],2],["Is there anyone here?",["Is there someone here?","Is there noone here?"],3],['I have nothing to wear.',['I have not nothing to wear.','I have anything to wear.'],3]],errWhy:W._,
  slides:()=>[
   slide(L('Die Wortfamilie','The word family'),
    SL.p(L('Aus <b>some / any / no / every</b> und <b>-one / -body / -thing / -where</b> entstehen neue Wörter:','<b>some / any / no / every</b> + <b>-one / -body / -thing / -where</b> make new words:'))+SL.tbl(['',L('Person','Person'),L('Sache','Thing'),L('Ort','Place')],[['<b>some-</b>','someone / somebody','something','somewhere'],['<b>any-</b>','anyone / anybody','anything','anywhere'],['<b>no-</b>','no one / nobody','nothing','nowhere'],['<b>every-</b>','everyone / everybody','everything','everywhere']])),
   slide(L('some- oder any-?','some- or any-?'),
    SL.p(L('Es gilt dieselbe Regel wie bei <b>some / any</b>.','The same rule as for <b>some / any</b> applies.'))+SL.tbl([L('Satzart','Sentence type'),L('Wort','Word'),L('Beispiel','Example')],[[L('bejaht','positive'),'some-','There is <b>someone</b> at the door.'],[L('Verneinung','negative'),'any-',"I don't know <b>anyone</b> here."],[L('Frage','question'),'any-','Is there <b>anything</b> in the box?'],[L('Angebot / Bitte','offer / request'),'some-','Would you like <b>something</b> to drink?']])),
   slide(L('no-: schon verneint','no-: already negative'),
    SL.p(L('<b>nobody, nothing, nowhere, no one</b> sind schon verneint. Es folgt <b>kein not</b> (doppelte Verneinung gibt es nicht).','<b>nobody, nothing, nowhere, no one</b> are already negative. Do <b>not</b> add <i>not</i> (no double negatives).'))+SL.err([["I didn't see nothing.","I didn't see anything. / I saw nothing."],["Nobody doesn't know.","Nobody knows."]])),
   slide(L('Singular!','Singular!'),
    SL.p(L('Auch <b>everyone</b> und <b>everybody</b> sind <b>Singular</b>: das Verb bekommt -s.','<b>everyone</b> and <b>everybody</b> are <b>singular</b>: the verb takes -s.'))+SL.ex(['<b>Everyone is</b> happy today.','<b>Nobody lives</b> here.','<b>Everything was</b> fine.'])),
   slide(L('else','else'),
    SL.p(L('Mit <b>else</b> fragt man nach «noch etwas anderem».','Use <b>else</b> to mean “other”.'))+SL.ex(['Do you want <b>anything else</b>?','Let\'s go <b>somewhere else</b>.','Who <b>else</b> is coming?'])),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([["I didn't see nothing.","I didn't see anything."],['Everybody are here.','Everybody is here.'],["I don't know someone here.","I don't know anyone here."],['I know anything about it. (= nothing)','I know nothing about it.']])),
   tryS(L('Übung','Exercise'),()=>[["I can hear a knock. There is ___ at the door.",'someone'],["I don't know ___ in this town.",'anyone'],['Is there ___ in the box?','anything / something'],['We looked ___, but we could not find the key.','everywhere'],['Everyone ___ happy today. (be)','is'],['The room is empty. There is ___ in it.','nobody']])
  ]});
})());
