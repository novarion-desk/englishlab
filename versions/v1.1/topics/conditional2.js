/* Second conditional */
TOPICS.push((()=>{
 const W={if:'If-Teil: past simple (bei be: were für alle Personen). Hauptsatz: would + Grundform. Das Gedankenspiel ist unwahrscheinlich oder erfunden.|If-clause: past simple (with be: were for all persons). Main clause: would + base form. It is an imaginary or unlikely situation.',
  would:'Hauptsatz: would + Grundform. Der if-Teil steht im past simple.|Main clause: would + base form. The if-clause is in the past simple.'};
 const B=(s,ok,bad,lv,sb,h)=>BK(s,ok,bad,lv,sb||'',h||'');
 const bank=[
  B("If I ___ rich, I would buy a big house.",['were','was'],['am','would be'],1,'if'),
  B("If she ___ more time, she would learn French.",['had'],['has','would have'],1,'if'),
  B("If we won the match, we ___ very happy.",['would be'],['will be','were'],1,'would'),
  B("If I ___ you, I would talk to him.",['were','was'],['am','be'],1,'if'),
  B("If it ___ warmer, we would go swimming.",['were','was'],['is','would be'],2,'if'),
  B("If you ___ harder, you would pass the test.",['studied'],['study','would study'],2,'if','(study)'),
  B("If he ___ the lottery, he would quit his job.",['won'],['wins','would win'],2,'if','(win)'),
  B("If they ___ more money, they would buy a car.",['had'],['have','would have'],2,'if'),
  B("What would you do if you ___ a ghost?",['saw'],['see','would see'],2,'if','(see)'),
  B("If I lived in Spain, I ___ speak Spanish.",['would'],['will','did'],1,'would'),
  B("I ___ help you if I knew the answer.",['would'],['will','did'],1,'would'),
  B("If I could fly, I ___ visit you every day.",['would'],['will','did'],1,'would'),
  B("What ___ you do if you lost your phone?",['would'],['will','did'],2,'would'),
  B("She ___ be happy if she had a dog.",['would'],['will','does'],2,'would'),
  B("If I ___ a bird, I would fly to the sea.",['were','was'],['am','will be'],2,'if'),
  B("We wouldn't be late if we ___ the earlier bus.",['took'],['take','would take'],3,'if','(take)'),
  B("If you ___ the answer, would you tell me?",['knew'],['know','would know'],3,'if','(know)'),
  B("She wouldn't go out if it ___ raining.",['were','was'],['is','would be'],3,'if'),
  B("If I ___ you, I wouldn't do that.",['were','was'],['am','would be'],2,'if'),
  B("If we ___ a garden, we would grow vegetables.",['had'],['have','would have'],3,'if'),
  B("He would travel more if he ___ more free time.",['had'],['has','would have'],3,'if'),
  B("If you ___ me, would you help?",['asked'],['ask','would ask'],3,'if','(ask)')
 ];
 return bankTopic({id:'c2',grp:'verben',ord:41,ic:'💭',de:'If-Sätze (second conditional)',en:'If-sentences (second conditional)',desc:'If I were rich, I would travel the world.',
  fillInstr:()=>L('Setze das passende Wort oder die richtige Verbform ein.','Fill in the correct word or verb form.'),
  fillDesc:()=>L('das passende Wort oder die Verbform schreiben','write the right word or verb form'),
  lvDe:'C: einfache Sätze mit were / had und would. B: dazu mehr Verben im past simple. A: dazu Fragen und schwierigere Sätze.',lvEn:'C: simple sentences with were / had and would. B: plus more past simple verbs. A: plus questions and harder sentences.',
  subs:()=>[{k:'if',n:L('if-Teil (past simple)','if-clause (past simple)')},{k:'would',n:L('Hauptsatz (would)','main clause (would)')}],
  why:W,bank,
  err:[["If I were rich, I would buy a big house.",["If I am rich, I would buy a big house.","If I would be rich, I would buy a big house."],1],["If she had more time, she would learn French.",["If she would have more time, she would learn French.","If she has more time, she would learn French."],2],["If I were you, I would talk to him.",["If I would be you, I would talk to him.","If I am you, I would talk to him."],1],["What would you do if you saw a ghost?",["What would you do if you would see a ghost?","What will you do if you saw a ghost?"],2]],
  errWhy:W.if,
  slides:()=>[
   slide(L('Wann braucht man es?','When do you use it?'),
    SL.p(L('Für Dinge, die <b>unwahrscheinlich oder erfunden</b> sind. Du stellst dir etwas vor.','For things that are <b>unlikely or imaginary</b>. You are imagining something.'))+SL.tbl([L('First conditional (möglich)','First conditional (possible)'),L('Second conditional (Gedankenspiel)','Second conditional (imaginary)')],[['If it <b>rains</b>, we <b>will stay</b> at home.','If I <b>were</b> rich, I <b>would buy</b> a big house.']])),
   slide(L('Bildung','How to form it'),
    SL.fm([['a','If'],'+',['b',L('Subjekt','subject')],'+',['c','past simple']])+SL.fm([['d',L('Subjekt','subject')],'+',['b','would'],'+',['c',L('Grundform','base form')]])+SL.ex(['If I <b>had</b> a million francs, I <b>would travel</b> the world.','I <b>would help</b> you if I <b>knew</b> the answer.'])+SL.tip(L('Der <b>if-Teil</b> kann auch hinten stehen. Dann <b>kein Komma</b>.','The <b>if-clause</b> can also come second. Then <b>no comma</b>.'))),
   slide(L('If I were …','If I were …'),
    SL.p(L('Bei <b>be</b> sagt man im if-Teil für alle Personen <b>were</b> (in der Alltagssprache auch <i>was</i>).','With <b>be</b> use <b>were</b> in the if-clause for all persons (in everyday English <i>was</i> is also used).'))+SL.ex(['If I <b>were</b> you, I would talk to him.','If it <b>were</b> warmer, we would go swimming.'])+SL.tip(L('<b>If I were you …</b> ist die typische Redewendung für einen Rat.','<b>If I were you …</b> is the typical phrase for giving advice.'))),
   slide(L('Verneinung und Frage','Negatives and questions'),
    SL.tbl([L('Satzart','Type'),L('Beispiel','Example')],[[L('Verneinung','negative'),'If I <b>didn\'t</b> have homework, I <b>wouldn\'t</b> be here.'],[L('Frage','question'),'What <b>would</b> you do if you <b>saw</b> a ghost?'],[L('Ja/Nein-Frage','yes/no question'),'<b>Would</b> you help me if I <b>asked</b>?']])+SL.warn(L('Nie <i>would</i> im if-Teil: <s>If I would be rich</s>.','Never <i>would</i> in the if-clause: <s>If I would be rich</s>.'))),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['If I am rich, I would buy a house.','If I were rich, I would buy a house.'],['If I would have time, I would help.','If I had time, I would help.'],['If I will win, I would be happy.','If I won, I would be happy.']])),
   tryS(L('Übung','Exercise'),()=>[['If I ___ rich, I would buy a boat. (be)','were'],['If she ___ more time, she would learn French. (have)','had'],['We ___ happy if we won the game. (be)','would be'],['What ___ you do if you saw a ghost?','would'],['If I ___ you, I would ask the teacher. (be)','were']])
  ]});
})());
