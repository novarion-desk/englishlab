/* Past perfect */
TOPICS.push((()=>{
 const W={_:'Past perfect: had + 3. Form. Es zeigt, was in der Vergangenheit schon passiert war, bevor etwas anderes geschah.|Past perfect: had + past participle. It shows what had already happened in the past before something else happened.'};
 const B=(s,ok,bad,lv,sb,h)=>BK(s,ok,bad,lv,sb||'',h||'');
 const bank=[
  B("When I arrived, the film ___ started.",['had'],['has','was'],1),
  B("She was sad because she ___ lost her phone.",['had'],['has','was'],1),
  B("He ___ eaten before we got there.",['had'],['has','did'],1),
  B("They had already ___ when we arrived.",['left'],['leave','leaved'],2,'','(leave)'),
  B("I couldn't get in because I had ___ my key.",['forgotten'],['forgot','forget'],2,'','(forget)'),
  B("After she had ___ dinner, she watched TV.",['cooked'],['cook','cooking'],2,'','(cook)'),
  B("We were late because the bus had ___ come.",['not'],['no','nothing'],3),
  B("The teacher was angry. Nobody ___ done the homework.",['had'],['has','did'],2),
  B("When we got to the station, the train ___ already gone.",['had'],['has','was'],1),
  B("I was tired because I ___ got up very early.",['had'],['has','did'],1),
  B("He told me he ___ never seen snow before.",['had'],['has','did'],2),
  B("By the time I called, she ___ gone to bed.",['had'],['has','was'],2),
  B("Before he moved to Zurich, he ___ lived in Bern.",['had'],['has','did'],2),
  B("She didn't want to see the film because she ___ already seen it.",['had'],['has','did'],2),
  B("We ___ finished our lunch when it began to rain.",['had'],['have','did'],1),
  B("He had ___ the window before the storm came.",['closed'],['close','closing'],2,'','(close)'),
  B("I ___ never met her before the party.",["had"],["have","did"],2),
  B("Why was he so happy? He ___ won the match.",['had'],['has','did'],2),
  B("When the police came, the thief ___ already run away.",['had'],['has','was'],1),
  B("Had you ___ the book before you saw the film?",['read'],['reading','readed'],3,'','(read)'),
  B("The pizza ___ gone cold because we had waited too long.",['had'],['has','was'],3),
  B("She said she ___ lost her bag the day before.",['had'],['has','was'],3)
 ];
 return bankTopic({id:'zpp',grp:'zeiten',ord:65,ic:'⏮️',de:'Past perfect',en:'Past perfect',desc:'I had finished · she had already left · had you seen it?',
  fillInstr:()=>L('Setze had oder die richtige Verbform ein.','Fill in had or the correct verb form.'),
  fillDesc:()=>L('had oder die 3. Form schreiben','write had or the past participle'),
  lvDe:'C: had + einfache 3. Form in kurzen Sätzen. B: dazu unregelmässige Verben und before / after / when. A: dazu Verneinung, Fragen und Satz mit by the time.',lvEn:'C: had + simple past participle in short sentences. B: plus irregular verbs and before / after / when. A: plus negatives, questions and by the time.',
  why:W,bank,
  err:[["When I arrived, the film had started.",["When I arrived, the film has started.","When I arrived, the film had start."],1],["She had already left when we got there.",["She has already left when we got there.","She had already leave when we got there."],2],["He told me he had never seen snow.",["He told me he has never seen snow.","He told me he had never saw snow."],2],["We were late because the bus hadn't come.",["We were late because the bus didn't came.","We were late because the bus hasn't come."],3]],
  errWhy:'Past perfect = had + 3. Form. Für alle Personen gleich: had. Kein has / have in der Vergangenheit.|Past perfect = had + past participle. Same for all persons: had. No has / have when you tell a past story.',
  slides:()=>[
   slide(L('Zeitstrahl und Bausteine','Timeline and building blocks'),
    SL.tl({c:'#7c3aed',marks:[[26,'had finished','#7c3aed',150],[62,'arrived','#dc2626',150]]})+SL.p('<center>'+L('Zuerst passiert <b>A</b> (past perfect), danach <b>B</b> (past simple).','First <b>A</b> happened (past perfect), then <b>B</b> (past simple).')+'</center>')+SL.fm([['a',L('Subjekt','Subject')],'+',['b','had / hadn\'t'],'+',['c',L('3. Form','past participle'),'seen · gone · eaten']])),
   slide(L('Wann braucht man es?','When do you use it?'),
    SL.p(L('Wenn zwei Dinge in der Vergangenheit passieren und man zeigen will, was <b>zuerst</b> war:','When two things happened in the past and you want to show which came <b>first</b>:'))+SL.ex(["When I arrived, the film <b>had</b> already <b>started</b>.","She was sad because she <b>had lost</b> her phone.","After he <b>had eaten</b>, he went out."])+SL.tip(L('Der Satzteil im <b>past perfect</b> war <b>früher</b>. Der andere steht im <b>past simple</b>.','The part in the <b>past perfect</b> happened <b>earlier</b>. The other part is in the <b>past simple</b>.'))),
   slide(L('Signalwörter','Signal words'),
    SL.tbl([L('Wort','Word'),L('Beispiel','Example')],[['<b>before</b>','He had lived in Bern <b>before</b> he moved to Zurich.'],['<b>after</b>','<b>After</b> she had eaten, she watched TV.'],['<b>when</b>','<b>When</b> we got there, the train had gone.'],['<b>by the time</b>','<b>By the time</b> I called, she had gone to bed.'],['<b>already / never / just</b>','He had <b>already</b> left. · I had <b>never</b> seen it.'],['<b>because</b>','We were late <b>because</b> the bus <b>had broken</b> down.']])),
   slide(L('Verneinung und Frage','Negatives and questions'),
    SL.tbl([L('Satzart','Type'),L('Beispiel','Example')],[[L('Verneinung','negative'),'I <b>hadn\'t</b> seen it before.'],[L('Frage','question'),'<b>Had</b> you seen it before?'],[L('Frage mit Fragewort','wh-question'),'Why <b>had</b> he left so early?']])),
   slide(L('Past perfect oder past simple?','Past perfect or past simple?'),
    SL.tbl([L('Zwei Handlungen nacheinander','Two actions in a row'),L('Eine ist vorher fertig','One was finished earlier')],[['When I arrived, she <b>left</b>. <span class="muted">(erst kam ich, dann ging sie)</span>','When I arrived, she <b>had left</b>. <span class="muted">(sie war schon weg)</span>']])),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['When I came, the film has started.','When I came, the film had started.'],['She had already leave.','She had already left.'],['He had went home.','He had gone home.']])),
   tryS(L('Übung','Exercise'),()=>[['When we arrived, the film ___ already ___. (start)','had / started'],['She was sad because she ___ ___ her phone. (lose)','had / lost'],['He ___ never ___ snow before. (see)','had / seen'],['After I ___ ___ dinner, I did my homework. (eat)','had / eaten'],['___ you ___ him before? (meet)','Had / met']])
  ]});
})());
