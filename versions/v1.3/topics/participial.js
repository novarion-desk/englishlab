/* Participial adjectives -ed / -ing */
TOPICS.push((()=>{
 const W={_:'-ed beschreibt, wie sich jemand fühlt (I am bored). -ing beschreibt, was dieses Gefühl auslöst (The film is boring).|-ed describes how someone feels (I am bored). -ing describes what causes the feeling (The film is boring).'};
 const B=(s,ok,bad,lv,h)=>BK(s,ok,bad,lv,'',h);
 const bank=[
  B('The film was really ___.',['boring'],['bored','bore'],1,'(bore)'),
  B('I was ___ after the long walk.',['tired'],['tiring','tire'],1,'(tire)'),
  B('The match was ___!',['exciting'],['excited','excite'],1,'(excite)'),
  B('The lesson was so ___.',['interesting'],['interested','interest'],1,'(interest)'),
  B('She is ___ in art.',['interested'],['interesting','interest'],1,'(interest)'),
  B('We were ___ at the end of the film.',['bored'],['boring','bore'],1,'(bore)'),
  B('The roller coaster was ___.',['terrifying'],['terrified','terrify'],2,'(terrify)'),
  B('I was ___ at the exam result.',['surprised'],['surprising','surprise'],2,'(surprise)'),
  B('The news was ___.',['shocking'],['shocked','shock'],2,'(shock)'),
  B('My brother was ___ with me.',['annoyed'],['annoying','annoy'],2,'(annoy)'),
  B('It is ___ to wait for hours.',['annoying'],['annoyed','annoy'],2,'(annoy)'),
  B('I am ___ by this question.',['confused'],['confusing','confuse'],2,'(confuse)'),
  B('This question is ___.',['confusing'],['confused','confuse'],2,'(confuse)'),
  B('We were ___ by the dinosaur.',['fascinated'],['fascinating','fascinate'],3,'(fascinate)'),
  B('The long journey was ___.',['exhausting'],['exhausted','exhaust'],3,'(exhaust)'),
  B('After the long journey we were ___.',['exhausted'],['exhausting','exhaust'],3,'(exhaust)'),
  B('The result was ___. We expected more.',['disappointing'],['disappointed','disappoint'],3,'(disappoint)'),
  B('She was ___ when she forgot his name.',['embarrassed'],['embarrassing','embarrass'],3,'(embarrass)')
 ];
 return bankTopic({id:'pa',grp:'adj',ord:30,ic:'😴',de:'Adjektive auf -ed / -ing',en:'Adjectives ending in -ed / -ing',desc:'bored / boring · interested / interesting',
  fillInstr:()=>L('Bilde das Adjektiv aus dem Verb.','Make the adjective from the verb.'),
  fillDesc:()=>L('-ed oder -ing schreiben','write the -ed or -ing form'),
  lvDe:'C: bored / boring, tired, interested / interesting, excited / exciting. B: dazu surprised, annoyed, confused, terrifying. A: dazu fascinated, exhausted, disappointed.',lvEn:'C: bored / boring, tired, interested / interesting, excited / exciting. B: plus surprised, annoyed, confused, terrifying. A: plus fascinated, exhausted, disappointed.',
  why:W,bank,
  err:[['I am bored.',['I am boring.','I am bore.'],1],['The film is boring.',['The film is bored.','The film is bore.'],1],['She is interested in art.',['She is interesting in art.','She is interest in art.'],1],['The news was shocking.',['The news was shocked.','The news was shock.'],2],['I felt embarrassed.',['I felt embarrassing.','I felt embarrass.'],3]],errWhy:W._,
  slides:()=>[
   slide(L('Zwei Formen vom selben Verb','Two forms of the same verb'),
    SL.p(L('Viele Verben, die ein <b>Gefühl</b> ausdrücken, geben zwei Adjektive: eines auf <b>-ed</b>, eines auf <b>-ing</b>.','Many verbs about <b>feelings</b> give two adjectives: one ending in <b>-ed</b>, one in <b>-ing</b>.'))+SL.ex(['I am <b>bored</b>. The film is <b>boring</b>.','She is <b>interested</b> in art. Art is <b>interesting</b>.'])),
   slide(L('-ed oder -ing?','-ed or -ing?'),
    SL.tbl(['',L('Bedeutung','Meaning'),L('Beispiel','Example')],[['<b>-ed</b>',L('Wie <b>fühle</b> ich mich? (Person)','How do I <b>feel</b>? (person)'),'I am <b>bored</b>. · We were <b>excited</b>.'],['<b>-ing</b>',L('Was <b>löst</b> das Gefühl <b>aus</b>? (Sache, Person)','What <b>causes</b> the feeling? (thing, person)'),'The film is <b>boring</b>. · The match was <b>exciting</b>.']])+SL.tip(L('Eselsbrücke: <b>-ing</b> = macht etwas mit dir (das Spiel <b>macht</b> mich aufgeregt). <b>-ed</b> = du bekommst das Gefühl.','Memory trick: <b>-ing</b> = it does something to you. <b>-ed</b> = you get the feeling.'))),
   slide(L('Wichtige Paare','Important pairs'),
    SL.tbl(['-ed (Gefühl / feeling)','-ing (Auslöser / cause)'],[['bored','boring'],['interested','interesting'],['excited','exciting'],['tired','tiring'],['surprised','surprising'],['annoyed','annoying'],['confused','confusing'],['shocked','shocking'],['frightened / terrified','frightening / terrifying'],['fascinated','fascinating'],['exhausted','exhausting'],['disappointed','disappointing'],['embarrassed','embarrassing']])),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['I am boring. (= mir ist langweilig)','I am bored.'],['The film was bored.','The film was boring.'],['She is interesting in art.','She is interested in art.'],['I was very exciting.','I was very excited.']])+SL.warn(L('<i>I am boring</i> heisst «Ich bin langweilig»! Das ist etwas ganz anderes.','<i>I am boring</i> means “I am a boring person”! That is something quite different.'))),
   tryS(L('Übung','Exercise'),()=>[['The film was really ___. (bore)','boring'],['I was ___ after the long walk. (tire)','tired'],['She is ___ in art. (interest)','interested'],['The match was ___! (excite)','exciting'],['We were ___ by the dinosaur. (fascinate)','fascinated']])
  ]});
})());
