/* Passiv: present simple und past simple (Unit 2 / 6 Stufe 3) */
TOPICS.push((()=>{
 const W={pres:'Present simple Passiv: am / is / are + 3. Form (Partizip). Das Objekt des Aktivsatzes wird zum Subjekt.|Present simple passive: am / is / are + past participle. The object of the active sentence becomes the subject.',
  past:'Past simple Passiv: was / were + 3. Form (Partizip). Einzahl: was, Mehrzahl: were.|Past simple passive: was / were + past participle. Singular: was, plural: were.'};
 const B=(s,ok,bad,lv,sb,h)=>BK(s,ok,bad,lv,sb,h);
 const bank=[
  B("English ___ spoken in many countries.",['is'],['are','was'],1,'pres'),
  B("These cars ___ made in Germany.",['are'],['is','were'],1,'pres'),
  B("The room ___ cleaned every day.",['is'],['are','was'],1,'pres'),
  B("Cheese ___ made from milk.",['is'],['are','was'],1,'pres'),
  B("Many books ___ sold in this shop.",['are'],['is','were'],1,'pres'),
  B("Rice ___ grown in Asia.",['is'],['are','was'],1,'pres'),
  B("Football ___ played all over the world.",['is'],['are','was'],1,'pres'),
  B("The windows ___ cleaned every week.",['are'],['is','were'],1,'pres'),
  B("Chocolate is ___ in Switzerland.",['made'],['make','making'],2,'pres','(make)'),
  B("Letters are ___ by the postman.",['delivered'],['deliver','delivering'],2,'pres','(deliver)'),
  B("The tests are ___ on Friday.",['written'],['wrote','write'],2,'pres','(write)'),
  B("The door is ___ at night.",['locked'],['lock','locking'],2,'pres','(lock)'),
  B("Lots of tickets are ___ online.",['sold'],['sell','selled'],3,'pres','(sell)'),
  B("The museum ___ visited by thousands of people every year.",['is'],['are','was'],3,'pres'),
  B("Our English homework ___ checked by the teacher.",['is'],['are','was'],2,'pres'),
  B("The castle ___ built in 1250.",['was'],['is','were'],1,'past'),
  B("My phone ___ stolen yesterday.",['was'],['were','is'],1,'past'),
  B("The thieves ___ caught by the police.",['were'],['was','are'],1,'past'),
  B("These photos ___ taken last summer.",['were'],['was','are'],1,'past'),
  B("The cake ___ eaten by the children.",['was'],['were','is'],1,'past'),
  B("We ___ invited to the party.",['were'],['was','are'],1,'past'),
  B("The window was ___ by a ball.",['broken'],['break','broke'],2,'past','(break)'),
  B("The letter was ___ yesterday.",['sent'],['send','sended'],2,'past','(send)'),
  B("The book was ___ in 1960.",['written'],['wrote','write'],2,'past','(write)'),
  B("The pizzas were ___ by my dad.",['made'],['make','maked'],2,'past','(make)'),
  B("The film was ___ by a famous director.",['directed'],['direct','directing'],2,'past','(direct)'),
  B("The match was ___ because of the rain.",['cancelled','canceled'],['cancel','cancelling'],3,'past','(cancel)'),
  B("The bridge ___ built by Roman soldiers.",['was'],['were','is'],3,'past'),
  B("Two men ___ arrested after the robbery.",['were'],['was','are'],3,'past')
 ];
 return bankTopic({id:'pv',grp:'verben',ord:60,ic:'🔁',de:'Passiv (present & past simple)',en:'Passive (present & past simple)',desc:'English is spoken here. · The castle was built in 1250.',
  fillInstr:()=>L('Setze das passende Wort oder die richtige Verbform ein.','Fill in the correct word or verb form.'),
  fillDesc:()=>L('is / are / was / were oder die 3. Form schreiben','write is / are / was / were or the past participle'),
  lvDe:'C: is/are/was/were im Passiv. B: dazu die 3. Form. A: dazu schwierigere Partizipien und längere Sätze.',lvEn:'C: is/are/was/were in the passive. B: plus the past participle. A: plus harder participles and longer sentences.',
  subs:()=>[{k:'pres',n:L('Present simple','Present simple')},{k:'past',n:L('Past simple','Past simple')}],
  why:W,bank,
  err:[["English is spoken in many countries.",["English speaks in many countries.","English is speak in many countries."],1],["The castle was built in 1250.",["The castle was build in 1250.","The castle is built in 1250."],2],["These cars are made in Germany.",["These cars is made in Germany.","These cars are make in Germany."],1],["The thieves were caught by the police.",["The thieves was caught by the police.","The thieves were catch by the police."],2],["My bike was stolen last night.",["My bike was stole last night.","My bike were stolen last night."],2]],
  errWhy:'Passiv = be (am/is/are/was/were) + 3. Form. Das Verb be richtet sich nach dem Subjekt.|Passive = be (am/is/are/was/were) + past participle. The verb be agrees with the subject.',
  slides:()=>[
   slide(L('Aktiv und Passiv','Active and passive'),
    SL.p(L('Im <b>Aktiv</b> steht der Handelnde im Mittelpunkt. Im <b>Passiv</b> steht das, <b>was passiert</b>. Oft ist der Handelnde unwichtig oder unbekannt.','In the <b>active</b> the doer is the focus. In the <b>passive</b> the focus is on <b>what happens</b>. Often the doer is unimportant or unknown.'))+SL.tbl([L('Aktiv','Active'),L('Passiv','Passive')],[['Millions of people <b>speak</b> English.','English <b>is spoken</b> by millions of people.'],['Someone <b>stole</b> my phone.','My phone <b>was stolen</b>.']])+SL.tip(L('Das <b>Objekt</b> vom Aktivsatz wird das <b>Subjekt</b> vom Passivsatz.','The <b>object</b> of the active sentence becomes the <b>subject</b> of the passive sentence.'))),
   slide(L('Bildung','How to form it'),
    SL.fm([['a',L('Subjekt','Subject')],'+',['b','am / is / are','was / were'],'+',['c',L('3. Form','past participle'),'made · built · taken']])+SL.tbl([L('Zeit','Tense'),L('Bildung','Form'),L('Beispiel','Example')],[['present simple','am / is / are + 3. Form','The room <b>is cleaned</b> every day. · They <b>are made</b> in Italy.'],['past simple','was / were + 3. Form','The castle <b>was built</b> in 1250. · The photos <b>were taken</b> last year.']])),
   slide(L('Verneinung und Frage','Negatives and questions'),
    SL.tbl([L('Satzart','Type'),L('Beispiel','Example')],[[L('Verneinung','negative'),'English <b>isn\'t</b> spoken here. · The thieves <b>weren\'t</b> caught.'],[L('Frage','question'),'<b>Is</b> English spoken here? · <b>Were</b> the thieves caught?'],[L('Frage mit Fragewort','wh-question'),'Where <b>was</b> the film made? · When <b>were</b> they built?']])+SL.tip(L('Kein <i>do / did</i>! <b>be</b> wird verneint und vor das Subjekt gestellt.','No <i>do / did</i>! <b>be</b> takes the negative and moves in front of the subject.'))),
   slide(L('Wer hat es getan? by …','Who did it? by …'),
    SL.p(L('Mit <b>by</b> nennst du den Handelnden, aber nur, wenn er wichtig ist.','Use <b>by</b> to name the doer, but only if it matters.'))+SL.ex(['The Mona Lisa was painted <b>by Leonardo da Vinci</b>.','My phone was stolen. <span class="muted">(Wer? Unwichtig / unbekannt.)</span>'])),
   slide(L('Wichtige 3. Formen','Important past participles'),
    SL.tbl(['Infinitive','Past simple','Past participle'],[['make','made','<b>made</b>'],['write','wrote','<b>written</b>'],['break','broke','<b>broken</b>'],['steal','stole','<b>stolen</b>'],['build','built','<b>built</b>'],['sell','sold','<b>sold</b>']])+SL.tip(L('Regelmässige Verben: 3. Form = Verb + <b>-ed</b>.','Regular verbs: past participle = verb + <b>-ed</b>.'))),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['English speaks here.','English is spoken here.'],['The castle was build in 1250.','The castle was built in 1250.'],['The thieves was caught.','The thieves were caught.'],['Was the window break?','Was the window broken?']])),
   tryS(L('Übung','Exercise'),()=>[['Cheese ___ ___ from milk. (make)','is made'],['The castle ___ ___ in 1250. (build)','was built'],['These photos ___ ___ last summer. (take)','were taken'],['English ___ ___ in many countries. (speak)','is spoken'],['My bike ___ ___ yesterday. (steal)','was stolen']])
  ]});
})());
