/* Verben der Wahrnehmung + Objekt + Verb */
TOPICS.push((()=>{
 const W={_:'see / hear / watch / feel + Objekt + Grundform (whole action gesehen) oder + -ing (Handlung läuft, man sieht nur einen Teil).|see / hear / watch / feel + object + base form (the whole action) or + -ing (the action is in progress, you see only part of it).'};
 const B=(s,ok,bad,lv,sb,h)=>BK(s,ok,bad,lv,sb||'',h||'');
 const bank=[
  B("I saw him ___ the street.",['cross'],['to cross','crossed'],2,'','(cross – whole action)'),
  B("I heard her ___ in the garden.",['singing'],['to sing','sang'],1,'','(sing – in progress)'),
  B("We watched the children ___ football.",['play','playing'],['to play','played'],1,'','(play)'),
  B("She felt the rain ___ on her face.",['falling'],['to fall','fell'],2,'','(fall)'),
  B("I saw a boy ___ his bike.",['steal'],['to steal','stole'],3,'','(steal – whole action)'),
  B("Did you hear the phone ___?",['ring','ringing'],['to ring','rang'],1,'','(ring)'),
  B("I noticed a man ___ at the door.",['standing'],['to stand','stood'],2,'','(stand)'),
  B("He heard someone ___ his name.",['call','calling'],['to call','called'],1,'','(call)'),
  B("They watched the sun ___.",['set','setting'],['to set','sat'],2,'','(set)'),
  B("I can smell something ___.",['burning'],['to burn','burned'],2,'','(burn)'),
  B("She saw the dog ___ across the road.",['run','running'],['to run','ran'],1,'','(run)'),
  B("We listened to the band ___.",['play','playing'],['to play','played'],2,'','(play)'),
  B("I heard the glass ___.",['break'],['to break','broke'],3,'','(break – whole action, kurz)'),
  B("He saw her ___ the room and shut the door.",['leave'],['to leave','left'],3,'','(leave – whole action)'),
  B("Look! I can see the plane ___.",['landing'],['to land','landed'],2,'','(land)'),
  B("Nobody saw the thief ___ into the house.",['climb'],['to climb','climbed'],3,'','(climb)'),
  B("I watched her ___ the picture.",['paint','painting'],['to paint','painted'],1,'','(paint)'),
  B("Can you hear the birds ___?",['sing','singing'],['to sing','sang'],1,'','(sing)')
 ];
 return bankTopic({id:'wp',grp:'verben',ord:100,ic:'👀',de:'Verben der Wahrnehmung: see / hear + Verb',en:'Verbs of perception: see / hear + verb',desc:'I saw him run. · I heard her singing.',
  fillInstr:()=>L('Setze die richtige Verbform ein.','Fill in the correct verb form.'),
  fillDesc:()=>L('die richtige Verbform schreiben','write the correct verb form'),
  lvDe:'C: see / hear / watch + Objekt + -ing. B: dazu Grundform. A: whole action (Grundform) oder laufende Handlung (-ing).',lvEn:'C: see / hear / watch + object + -ing. B: plus the base form. A: whole action (base form) or action in progress (-ing).',
  why:W,bank,
  err:[["I saw him cross the street.",["I saw him to cross the street.","I saw him crossed the street."],2],["I heard her singing in the garden.",["I heard her to sing in the garden.","I heard her sang in the garden."],1],["We watched the children play football.",["We watched the children to play football.","We watched the children played football."],1],["She felt the rain falling on her face.",["She felt the rain to fall on her face.","She felt the rain fell on her face."],2]],
  errWhy:'Nach see / hear / watch / feel steht kein to: Objekt + Grundform oder Objekt + -ing.|After see / hear / watch / feel there is no to: object + base form or object + -ing.',
  slides:()=>[
   slide(L('see, hear, watch, feel + Verb','see, hear, watch, feel + verb'),
    SL.fm([['a','see / hear / watch / feel'],'+',['b',L('Objekt','object')],'+',['c',L('Verb','verb'),'-ing / '+L('Grundform','base form')]])+SL.ex(['I <b>saw him cross</b> the street.','I <b>heard her singing</b> in the garden.','We <b>watched the children play</b> football.'])+SL.tip(L('Merke: <b>kein</b> <s>to</s> nach diesen Verben!','Remember: <b>no</b> <s>to</s> after these verbs!'))),
   slide(L('Grundform oder -ing?','Base form or -ing?'),
    SL.tbl([L('Form','Form'),L('Bedeutung','Meaning'),L('Beispiel','Example')],[[L('Grundform','base form'),L('die <b>ganze</b> Handlung, von Anfang bis Ende','the <b>whole</b> action, from start to finish'),'I saw him <b>cross</b> the street. <span class="muted">(er ist hinübergegangen)</span>'],['-ing',L('die Handlung <b>läuft</b>, ich sehe einen Teil','the action is <b>in progress</b>, I see part of it'),'I saw him <b>crossing</b> the street. <span class="muted">(er war gerade dabei)</span>']])),
   slide(L('Verben der Wahrnehmung','Verbs of perception'),
    SL.tbl([L('Verb','Verb'),L('Bedeutung','Meaning'),L('Beispiel','Example')],[['see',L('sehen','see'),'I saw a dog run.'],['watch',L('beobachten, zuschauen','watch'),'We watched them play.'],['hear',L('hören','hear'),'I heard it fall.'],['listen to',L('zuhören','listen to'),'She listened to him talk.'],['feel',L('fühlen','feel'),'I felt the ground shake.'],['notice',L('bemerken','notice'),'I noticed him leave.']])),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['I saw him to cross the street.','I saw him cross the street.'],['I heard her to sing.','I heard her sing / singing.'],['We watched them played.','We watched them play.']])),
   tryS(L('Übung','Exercise'),()=>[['I heard the baby ___. (cry)','cry / crying'],['She saw him ___ the room. (leave)','leave'],['We watched the sun ___. (rise)','rise / rising'],['I can feel my heart ___. (beat)','beat / beating'],['He noticed a woman ___ at the window. (stand)','standing']])
  ]});
})());
