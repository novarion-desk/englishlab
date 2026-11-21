/* Indirekte Rede: Aussagen, Aufforderungen, Fragen */
(()=>{
 const B=(s,ok,bad,lv,sb,h)=>BK(s,ok,bad,lv,sb||'',h||'');
 const gen=(id,ord,ic,de,en,desc,o)=>bankTopic(Object.assign({id,grp:'rede',ord,ic,de,en,desc,
  fillInstr:()=>L('Setze das passende Wort oder die richtige Verbform ein.','Fill in the correct word or verb form.'),
  fillDesc:()=>L('das passende Wort schreiben','write the right word'),noOrder:1},o));
 /* ---- Aussagen ---- */
 const WS={bs:'In der indirekten Rede rutscht die Zeit einen Schritt zurück: present → past, past → past perfect, will → would, can → could.|In reported speech the tense moves one step back: present → past, past → past perfect, will → would, can → could.',
  st:'say ohne Person (He said that …), tell immer mit Person (He told me that …).|say without a person (He said that …), tell always with a person (He told me that …).',
  tm:'Pronomen, Zeit- und Ortsangaben passen sich der neuen Sicht an: I → he / she, today → that day, tomorrow → the next day, here → there.|Pronouns, time and place words change to the new point of view: I → he / she, today → that day, tomorrow → the next day, here → there.'};
 const bsB=[
  B("“I am tired.” – She said she ___ tired.",['was'],['is','am'],1,'bs'),
  B("“It is raining.” – She said it ___ raining.",['was'],['is','were'],1,'bs'),
  B("“I like pizza.” – He said he ___ pizza.",['liked'],['likes','like'],1,'bs'),
  B("“We live in Bern.” – They said they ___ in Bern.",['lived'],['live','lives'],1,'bs'),
  B("“I have a new bike.” – Tom said he ___ a new bike.",['had'],['has','have'],1,'bs'),
  B("“I am playing football.” – Tom said he ___ football.",['was playing'],['is playing','played'],2,'bs'),
  B("“I will help you.” – She said she ___ help me.",['would'],['will','does'],2,'bs'),
  B("“I can swim.” – He said he ___ swim.",['could'],['can','does'],2,'bs'),
  B("“We are going to leave.” – They said they ___ going to leave.",['were'],['are','was'],2,'bs'),
  B("“I don't know.” – She said she ___ know.",["didn't"],["doesn't","don't"],2,'bs'),
  B("“We don't like fish.” – They said they ___ like fish.",["didn't"],["don't","doesn't"],2,'bs'),
  B("“I played tennis.” – She said she ___ tennis.",['had played'],['plays','has played'],3,'bs'),
  B("“I have finished.” – He said he ___ finished.",['had'],['has','have'],3,'bs'),
  B("“I have never been to Rome.” – She said she ___ never been to Rome.",['had'],['has','have'],3,'bs'),
  B("“I saw a ghost.” – He said he ___ seen a ghost.",['had'],['has','have'],3,'bs')
 ];
 const stB=[
  B("She ___ me that she was tired.",['told'],['said','say'],1,'st'),
  B("He ___ that he was hungry.",['said'],['told','tell'],1,'st'),
  B("Tom ___ me he was ill.",['told'],['said','say'],1,'st'),
  B("My mum ___ she was tired.",['said'],['told','tell'],1,'st'),
  B("He ___ us a funny story.",['told'],['said','says'],1,'st'),
  B("She ___ goodbye and left.",['said'],['told','tell'],2,'st'),
  B("Please ___ me the truth.",['tell'],['say','said'],2,'st'),
  B("She said ___ her friend that she was late.",['to'],['her','at'],2,'st'),
  B("They ___ us they were leaving.",['told'],['said','say'],2,'st'),
  B("Did she ___ that she was coming?",['say'],['tell','told'],3,'st'),
  B("He ___ nothing about the plan.",['said'],['told','tell'],3,'st')
 ];
 const tmB=[
  B("“I'm tired.” – Tom said ___ was tired.",['he'],['I','me'],1,'tm'),
  B("“We love our school.” – They said ___ loved their school.",['they'],['we','you'],2,'tm'),
  B("“I forgot my keys.” – She said she had forgotten ___ keys.",['her'],['my','his'],2,'tm'),
  B("“I'm busy today.” – She said she was busy ___.",['that day'],['today','this day'],2,'tm'),
  B("“I'm busy now.” – She said she was busy ___.",['then','at that time'],['now','here'],2,'tm'),
  B("“I live here.” – He said he lived ___.",['there'],['here','where'],2,'tm'),
  B("“I will come tomorrow.” – He said he would come ___.",['the next day','the following day'],['tomorrow','yesterday'],2,'tm'),
  B("“I saw him yesterday.” – She said she had seen him ___.",['the day before','the previous day'],['yesterday','tomorrow'],3,'tm'),
  B("“I like this book.” – She said she liked ___ book.",['that'],['this','these'],3,'tm'),
  B("“I'll see you next week.” – He said he would see me ___.",['the following week','the next week'],['next week','last week'],3,'tm')
 ];
 TOPICS.push(gen('ir',10,'🗣️','Indirekte Rede: Aussagen','Reported speech: statements','She said that she was tired. · He told me he liked it.',{
  lvDe:'C: einfache Aussagen im present. B: dazu will / can, say und tell. A: dazu past simple, present perfect, Zeit- und Ortsangaben.',lvEn:'C: simple present statements. B: plus will / can, say and tell. A: plus past simple, present perfect, time and place words.',
  subs:()=>[{k:'bs',n:L('Zeit rutscht zurück','Tense moves back')},{k:'st',n:'say / tell'},{k:'tm',n:L('Pronomen & Zeitangaben','Pronouns & time words')}],
  why:WS,bank:bsB.concat(stB,tmB),
  err:[["She said she was tired.",["She said she is tired.","She said she were tired."],1],["He told me that he liked pizza.",["He said me that he liked pizza.","He told that he liked pizza."],2],["They said they would come the next day.",["They said they will come tomorrow.","They said they would come tomorrow."],2],["She said she had finished.",["She said she has finished.","She said she finished had."],3]],
  errWhy:WS.bs,
  slides:()=>[
   slide(L('Direkte und indirekte Rede','Direct and reported speech'),
    SL.tbl([L('Direkte Rede','Direct speech'),L('Indirekte Rede','Reported speech')],[['She said, “I <b>am</b> tired.”','She said (that) she <b>was</b> tired.'],['Tom said, “I <b>like</b> pizza.”','Tom said (that) he <b>liked</b> pizza.']])+SL.tip(L('<b>that</b> darf man weglassen. Keine Anführungszeichen, kein Komma nach <i>said</i>.','You can leave out <b>that</b>. No quotation marks, no comma after <i>said</i>.'))),
   slide(L('Die Zeit rutscht einen Schritt zurück','The tense moves one step back'),
    SL.tbl([L('Direkte Rede','Direct speech'),L('Indirekte Rede','Reported speech')],[['present simple<br><i>I like it.</i>','past simple<br><i>he liked it.</i>'],['present continuous<br><i>I am working.</i>','past continuous<br><i>he was working.</i>'],['past simple<br><i>I saw it.</i>','past perfect<br><i>he had seen it.</i>'],['present perfect<br><i>I have seen it.</i>','past perfect<br><i>he had seen it.</i>'],['will · can<br><i>I will come. I can swim.</i>','would · could<br><i>he would come. he could swim.</i>']])),
   slide(L('Pronomen, Zeit und Ort','Pronouns, time and place'),
    SL.tbl([L('direkt','direct'),L('indirekt','reported')],[['I / we','he, she / they'],['my / our','his, her / their'],['today','that day'],['now','then / at that time'],['yesterday','the day before'],['tomorrow','the next day / the following day'],['next week','the following week'],['here','there'],['this / these','that / those']])),
   slide(L('say oder tell?','say or tell?'),
    SL.cols(SL.p('<b>say</b>')+SL.ex(['He <b>said</b> that he was hungry.','She <b>said to</b> me that …']),SL.p('<b>tell</b> + '+L('Person','person'))+SL.ex(['He <b>told me</b> that he was hungry.','She <b>told</b> us a story.']))+SL.warn(L('Nicht: <s>He said me</s> / <s>He told that</s>.','Not: <s>He said me</s> / <s>He told that</s>.'))),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['She said she is tired.','She said she was tired.'],['He said me that he was ill.','He told me that he was ill.'],['He said he will come tomorrow.','He said he would come the next day.']])),
   tryS(L('Übung','Exercise'),()=>[['“I am hungry.” – She said she ___ hungry.','was'],['“I will call you.” – He said he ___ call me.','would'],['“I saw a ghost.” – He said he ___ seen a ghost.','had'],['Mum ___ me that dinner was ready. (say / tell)','told'],['“I’ll come tomorrow.” – She said she would come ___.','the next day']])
  ]}));
 /* ---- Aufforderungen ---- */
 const WA={_:'ask / tell + Person + to + Grundform. Verneinung: not to + Grundform.|ask / tell + person + to + base form. Negative: not to + base form.'};
 const iaB=[
  B("“Open the window!” – She told me ___ the window.",['to open'],['open','opening'],1,'','(open)'),
  B("“Sit down!” – He told the children ___ down.",['to sit'],['sit','sitting'],1,'','(sit)'),
  B("“Be quiet!” – Mum told me ___ quiet.",['to be'],['be','being'],1,'','(be)'),
  B("“Do your homework!” – Dad told me ___ my homework.",['to do'],['do','doing'],1,'','(do)'),
  B("“Please help me.” – He asked me ___ him.",['to help'],['help','helping'],1,'','(help)'),
  B("“Please wait here.” – The guard asked us ___ there.",['to wait'],['wait','waiting'],2,'','(wait)'),
  B("“Can you close the door?” – She asked him ___ the door.",['to close'],['close','closing'],2,'','(close)'),
  B("“Could you send me the photo?” – She asked me ___ her the photo.",['to send'],['send','sending'],2,'','(send)'),
  B("“Please give me your phone.” – He asked me ___ him my phone.",['to give'],['give','giving'],2,'','(give)'),
  B("“Don't be late!” – The teacher told us ___ late.",['not to be'],["don't be",'to not be'],2,'','(be)'),
  B("“Don't touch it!” – She told him ___ it.",['not to touch'],["don't touch",'no touch'],2,'','(touch)'),
  B("“Please don't talk.” – The teacher asked us ___.",['not to talk'],["don't talk",'to no talk'],3,'','(talk)'),
  B("“Don't open the door!” – He told me ___ the door.",['not to open'],["don't open",'no to open'],3,'','(open)'),
  B("She told ___ to open the window.",['me'],['I','to me'],1),
  B("The teacher asked ___ to be quiet. (the pupils)",['them'],['they','their'],2),
  B("He asked ___ to help him. (Anna)",['her'],['she','hers'],2)
 ];
 TOPICS.push(gen('ia',20,'📣','Indirekte Rede: Aufforderungen','Reported requests and orders','She told me to open the window. · He asked us not to talk.',{
  fillInstr:()=>L('Setze die richtige Form ein.','Fill in the correct form.'),
  fillDesc:()=>L('to + Verb schreiben','write to + verb'),
  lvDe:'C: tell / ask + Person + to + Grundform. B: dazu höfliche Bitten (Can you …?). A: dazu Verneinung mit not to.',lvEn:'C: tell / ask + person + to + base form. B: plus polite requests (Can you …?). A: plus the negative with not to.',
  why:WA,bank:iaB,
  err:[["She told me to open the window.",["She told me open the window.","She told me opening the window."],1],["He asked us to wait.",["He asked to us wait.","He asked we to wait."],1],["The teacher told us not to be late.",["The teacher told us don't be late.","The teacher told us to not being late."],2],["She asked him to close the door.",["She asked him closing the door.","She asked him that close the door."],2]],
  errWhy:WA._,
  slides:()=>[
   slide(L('Befehle und Bitten weitergeben','Reporting orders and requests'),
    SL.tbl([L('Direkt','Direct'),L('Indirekt','Reported')],[['“Open the window!”','She <b>told</b> me <b>to open</b> the window.'],['“Please help me.”','He <b>asked</b> me <b>to help</b> him.'],['“Can you close the door?”','She <b>asked</b> him <b>to close</b> the door.']])+SL.tip(L('<b>tell</b> = Befehl, <b>ask</b> = Bitte.','<b>tell</b> = order, <b>ask</b> = request.'))),
   slide(L('Bildung','How to form it'),
    SL.fm([['a','tell / ask'],'+',['b',L('Person','person'),'me · him · us'],'+',['c','to + '+L('Grundform','base form')]])+SL.ex(['The teacher <b>told us to</b> be quiet.','She <b>asked me to</b> wait.'])+SL.warn(L('Die Person steht <b>direkt</b> nach <i>tell / ask</i> (kein <s>to</s> vor der Person).','The person comes <b>directly</b> after <i>tell / ask</i> (no <s>to</s> before the person).'))),
   slide(L('Verneinung: not to','Negative: not to'),
    SL.tbl([L('Direkt','Direct'),L('Indirekt','Reported')],[['“Don\'t be late!”','The teacher told us <b>not to be</b> late.'],['“Please don\'t talk.”','He asked us <b>not to talk</b>.']])+SL.warn(L('Nicht: <s>told us don\'t be</s>.','Not: <s>told us don\'t be</s>.'))),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['She told me open the window.','She told me to open the window.'],['He asked to me to help.','He asked me to help.'],['She told us don\'t talk.','She told us not to talk.']])),
   tryS(L('Übung','Exercise'),()=>[['“Sit down!” – He told me ___ down. (sit)','to sit'],['“Please help me.” – She asked him ___ her. (help)','to help'],['“Don\'t touch it!” – Mum told me ___ it. (touch)','not to touch'],['“Can you wait here?” – He asked us ___ there. (wait)','to wait'],['“Be quiet!” – The teacher told the pupils ___ quiet. (be)','to be']])
  ]}));
 /* ---- Fragen ---- */
 const WQ={wh:'In der indirekten Frage steht der Satz wie eine Aussage: Fragewort + Subjekt + Verb. Kein do / does / did, kein Fragezeichen, Zeit rutscht zurück.|In a reported question the word order is like a statement: question word + subject + verb. No do / does / did, no question mark, the tense moves back.',
  yn:'Ja/Nein-Fragen werden mit if oder whether weitergegeben. Danach Aussagesatz.|Yes/no questions are reported with if or whether. Then a statement word order.'};
 const iqB=[
  B("“Where do you live?” – She asked me where I ___.",['lived'],['do live','did live'],1,'wh'),
  B("“What is your name?” – He asked me what my name ___.",['was'],['is','did be'],1,'wh'),
  B("“How old are you?” – He asked me how old I ___.",['was'],['am','were'],1,'wh'),
  B("“Who is that man?” – She asked ___ that man was.",['who'],['what','if'],2,'wh'),
  B("“Where are you going?” – Mum asked me where I ___ going.",['was'],['am','did'],2,'wh'),
  B("“What time does the film start?” – He asked what time the film ___.",['started'],['did start','does start'],2,'wh'),
  B("“When does the bus leave?” – She asked when the bus ___.",['left'],['did leave','does leave'],2,'wh'),
  B("“Why did you leave?” – He asked me why I ___.",['had left','left'],['did leave','have left'],3,'wh'),
  B("“What are you doing?” – She asked me what I ___.",['was doing'],['am doing','did do'],3,'wh'),
  B("“Do you like pizza?” – She asked me ___ I liked pizza.",['if','whether'],['that','what'],1,'yn'),
  B("“Are you tired?” – He asked me ___ I was tired.",['if','whether'],['that','what'],1,'yn'),
  B("“Is it raining?” – She asked ___ it was raining.",['if','whether'],['that','what'],1,'yn'),
  B("“Can you swim?” – She asked me if I ___ swim.",['could'],['can','do'],2,'yn'),
  B("“Will you come?” – He asked if I ___ come.",['would'],['will','do'],3,'yn'),
  B("“Have you seen my bag?” – She asked me if I ___ seen her bag.",['had'],['have','did'],3,'yn'),
  B("“Did you see the film?” – She asked me if I ___ the film.",['had seen','saw'],['did see','have seen'],3,'yn')
 ];
 TOPICS.push(gen('iq',30,'❓','Indirekte Rede: Fragen','Reported questions','She asked me where I lived. · He asked if I was tired.',{
  lvDe:'C: Fragewörter mit be und present simple. B: dazu if und Modalverben. A: dazu present perfect, past simple und will.',lvEn:'C: question words with be and the present simple. B: plus if and modals. A: plus present perfect, past simple and will.',
  subs:()=>[{k:'wh',n:L('mit Fragewort','with question word')},{k:'yn',n:L('Ja/Nein: if / whether','Yes/no: if / whether')}],
  why:WQ,bank:iqB,
  err:[["She asked me where I lived.",["She asked me where did I live.","She asked me where I did live."],1],["He asked if I was tired.",["He asked was I tired.","He asked that I was tired."],1],["She asked me what time the film started.",["She asked me what time did the film start.","She asked me what time the film does start."],2],["He asked whether I could swim.",["He asked whether could I swim.","He asked whether I can swim."],2]],
  errWhy:WQ.wh,
  slides:()=>[
   slide(L('Fragen weitergeben','Reporting questions'),
    SL.tbl([L('Direkt','Direct'),L('Indirekt','Reported')],[['“Where <b>do you live</b>?”','She asked me where I <b>lived</b>.'],['“What <b>is</b> your name?”','He asked what my name <b>was</b>.'],['“<b>Do you like</b> pizza?”','She asked me <b>if</b> I <b>liked</b> pizza.']])),
   slide(L('Drei Veränderungen','Three changes'),
    SL.ul([L('<b>Wortstellung wie ein Aussagesatz</b>: Fragewort + Subjekt + Verb','<b>Statement word order</b>: question word + subject + verb'),L('<b>kein</b> do / does / did und <b>kein</b> Fragezeichen','<b>no</b> do / does / did and <b>no</b> question mark'),L('Die <b>Zeit rutscht zurück</b> (wie bei den Aussagen)','The <b>tense moves back</b> (as in statements)')])+SL.ex(['“Where <s>do</s> you live?” → She asked where I <b>lived</b>.'])),
   slide(L('Ja/Nein-Fragen: if oder whether','Yes/no questions: if or whether'),
    SL.p(L('Hat die Frage <b>kein Fragewort</b>, brauchst du <b>if</b> oder <b>whether</b>.','If the question has <b>no question word</b>, use <b>if</b> or <b>whether</b>.'))+SL.ex(['“Are you tired?” → He asked <b>if</b> I was tired.','“Can you swim?” → She asked <b>whether</b> I could swim.'])),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['She asked me where did I live.','She asked me where I lived.'],['He asked was I tired.','He asked if I was tired.'],['She asked me what time does the film start.','She asked me what time the film started.']])),
   tryS(L('Übung','Exercise'),()=>[['“Where do you live?” – He asked me where I ___.','lived'],['“Are you hungry?” – She asked me ___ I was hungry.','if / whether'],['“What is your name?” – He asked what my name ___.','was'],['“Can you help me?” – She asked if I ___ help her.','could'],['“Have you seen it?” – He asked if I ___ seen it.','had']])
  ]}));
})();
