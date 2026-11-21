/* Open conditional: if / when */
TOPICS.push((()=>{
 const W={_:'If-Satz im Present simple, Hauptsatz mit will + Grundform. Im if- und when-Satz steht kein will.|If-clause in the present simple, main clause with will + base form. No will in the if- or when-clause.'};
 const WL=["will ","'ll "];
 const wl=(v)=>['will '+v,"'ll "+v];
 const B=(s,ok,bad,lv,h)=>BK(s,ok,bad,lv,'',h);
 const bank=[
  B('If it rains, we ___ at home.',wl('stay'),['would stay','stayed'],1,'(stay)'),
  B('If you ___ hard, you will pass the test.',['study'],['will study','studied'],1,'(study)'),
  B('If she ___ me, I will help her.',['asks'],['ask','will ask'],1,'(ask)'),
  B('We will go to the beach if the weather ___ nice.',['is'],['will be','was'],1,'(be)'),
  B("If you don't hurry, you ___ the bus.",wl('miss'),['would miss','missed'],1,'(miss)'),
  B('When I get home, I ___ you.',wl('call'),['would call','called'],1,'(call)'),
  B('I will call you when I ___ home.',['arrive'],['will arrive','arrived'],1,'(arrive)'),
  B('If he ___ late, we will start without him.',['is'],['will be','was'],2,'(be)'),
  B('She will be happy if you ___ her a present.',['give'],['will give','gave'],2,'(give)'),
  B('What will you do if you ___ the match?',['lose'],['will lose','lost'],2,'(lose)'),
  B('If we ___ the train, we will be late.',['miss'],['will miss','missed'],2,'(miss)'),
  B('If it ___ tomorrow, we will not play outside.',['snows'],['will snow','snowed'],2,'(snow)'),
  B('They will not come if it ___.',['rains'],['will rain','rained'],2,'(rain)'),
  B('If you ___ more, you will feel better.',['sleep'],['will sleep','slept'],2,'(sleep)'),
  B("I will help you if you ___ me.",['ask'],['will ask','asked'],2,'(ask)'),
  B('If you mix red and blue, you ___ purple.',['get'],['got','would get'],3,'(get)'),
  B('Water ___ if you heat it to 100 degrees.',['boils'],['boiled','will boiling'],3,'(boil)'),
  B('Tomorrow is my birthday. ___ I am 14, I will have a party.',['When'],['If','Unless'],3,'(if / when)'),
  B('Maybe it will rain. ___ it rains, we will stay at home.',['If'],['When','Because'],3,'(if / when)'),
  B('If I ___ enough money, I will buy a new bike.',['have'],['will have','had'],3,'(have)')
 ];
 return bankTopic({id:'k',grp:'verben',ord:40,ic:'🔀',de:'If-Sätze (open conditional)',en:'If-sentences (open conditional)',desc:'If it rains, we will stay at home.',
  fillInstr:()=>L('Setze die richtige Form des Verbs ein.','Fill in the correct form of the verb.'),
  fillDesc:()=>L('die richtige Verbform schreiben','write the correct verb form'),
  lvDe:'C: einfache if- und when-Sätze. B: mehr Verben und Fragen. A: dazu Naturgesetze (if + present, present) und if / when unterscheiden.',
  lvEn:'C: simple if- and when-sentences. B: more verbs and questions. A: plus general truths (if + present, present) and if vs when.',
  why:W,bank,
  err:[['If it rains, we will stay at home.',['If it will rain, we will stay at home.','If it rains, we stay will at home.'],1],['I will call you when I arrive.',['I will call you when I will arrive.','I call you when I will arrive.'],1],['If you study, you will pass the test.',['If you will study, you will pass the test.','If you studied, you will pass the test.'],2],['What will you do if you win?',['What will you do if you will win?','What do you will do if you win?'],2],['If we miss the bus, we will be late.',['If we will miss the bus, we will be late.','If we missed the bus, we will be late.'],3]],
  errWhy:W._,
  slides:()=>[
   slide(L('Die Idee','The idea'),
    SL.p(L('Ein <b>open conditional</b> spricht über etwas, das in der Zukunft wirklich passieren kann: <b>Wenn A passiert, dann passiert B.</b>','An <b>open conditional</b> talks about something that can really happen in the future: <b>if A happens, then B happens.</b>'))+SL.ex(['If it rains, we <b>will stay</b> at home.','When I get home, I <b>will call</b> you.'])+SL.p(L('Der Satz hat zwei Teile: den <b>if-Satz</b> (Bedingung) und den <b>Hauptsatz</b> (Folge).','The sentence has two parts: the <b>if-clause</b> (condition) and the <b>main clause</b> (result).')),
    L('Mit einem Beispiel aus der Klasse einsteigen: «Wenn ihr heute alle aufpasst, …».','Start with a class example: “If everyone pays attention today, …”.')),
   slide(L('Die Form','The form'),
    SL.tbl([L('if-Satz','if-clause'),L('Hauptsatz','Main clause')],[['If + <b>present simple</b>','<b>will</b> + base form'],['If it rains,','we will stay at home.'],['If you study,','you will pass the test.']])+SL.warn(L('Im if-Satz steht <b>kein will</b>: <s>If it will rain</s> → <b>If it rains</b>.','There is <b>no will</b> in the if-clause: <s>If it will rain</s> → <b>If it rains</b>.'))),
   slide(L('Reihenfolge und Komma','Word order and comma'),
    SL.p(L('Beide Teile können die Reihenfolge tauschen. Steht der if-Satz <b>vorne</b>, kommt ein <b>Komma</b>.','The two parts can swap places. When the if-clause comes <b>first</b>, use a <b>comma</b>.'))+SL.ex(['<b>If it rains,</b> we will stay at home.','We will stay at home <b>if it rains</b>.'])),
   slide('if / when',
    SL.tbl(['','Bedeutung / Meaning','Beispiel / Example'],[['<b>if</b>',L('vielleicht, nicht sicher','maybe, not sure'),'<b>If</b> it rains, we will stay at home.'],['<b>when</b>',L('sicher, das passiert','sure, it will happen'),'<b>When</b> I am 14, I will have a party.']])),
   slide(L('Allgemeine Wahrheiten','General truths'),
    SL.p(L('Für Dinge, die <b>immer</b> stimmen, steht in beiden Teilen das <b>present simple</b>.','For things that are <b>always</b> true, use the <b>present simple</b> in both parts.'))+SL.ex(['If you heat ice, it <b>melts</b>.','If you mix red and blue, you <b>get</b> purple.'])),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['If it will rain, we stay at home.','If it rains, we will stay at home.'],['When I will arrive, I call you.','When I arrive, I will call you.'],['If I would have time, I will help.','If I have time, I will help.']])),
   tryS(L('Übung: if-Sätze','Exercise: if-sentences'),()=>[['If it rains, we ___ at home. (stay)','will stay'],['If you ___ hard, you will pass the test. (study)','study'],['I will call you when I ___ home. (arrive)','arrive'],['If we miss the bus, we ___ late. (be)','will be'],['What will you do if you ___ the match? (lose)','lose']])
  ]});
})());
