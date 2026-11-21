/* Reflexivpronomen */
TOPICS.push((()=>{
 const W={_:'myself, yourself, himself, herself, itself, ourselves, yourselves, themselves: Das Handelnde und das Betroffene sind dieselbe Person. Mit each other = einander.|myself, yourself, himself, herself, itself, ourselves, yourselves, themselves: the doer and the receiver are the same person. each other = one another.'};
 const B=(s,ok,bad,lv,sb,h)=>BK(s,ok,bad,lv,sb||'',h||'');
 const bank=[
  B("I cut ___ with a knife.",['myself'],['me','mine'],1),
  B("She looked at ___ in the mirror.",['herself'],['her','hers'],1),
  B("He hurt ___ at football.",['himself'],['him','his'],1),
  B("We enjoyed ___ at the party.",['ourselves'],['us','ours'],1),
  B("Be careful or you'll hurt ___.",['yourself'],['you','yours'],1,'','(one person)'),
  B("The children made the cake by ___.",['themselves'],['them','theirs'],2),
  B("The cat washed ___.",['itself'],['it','its'],2),
  B("Please help ___ to some cake, everybody!",['yourselves'],['you','yours'],2),
  B("I taught ___ to play the guitar.",['myself'],['me','mine'],2),
  B("My sister made this dress ___.",['herself'],['her','hers'],2),
  B("They blamed ___ for the mistake.",['themselves'],['them','their'],2),
  B("Tom and Anna looked at ___ and laughed.",['each other'],['themselves','them'],3,'','(one another)'),
  B("We write to ___ every week.",['each other'],['ourselves','us'],3,'','(one another)'),
  B("I enjoyed the film. – I enjoyed ___ at the cinema.",['myself'],['me','mine'],1),
  B("Did you do your homework ___, or did your mum help you?",['yourself'],['you','yours'],2),
  B("He is very proud of ___.",['himself'],['him','his'],2),
  B("The door opens by ___.",['itself'],['it','its'],3),
  B("Look at ___! You are all dirty!",['yourselves'],['you','yourself'],3,'','(more than one person)'),
  B("She sat down and told ___ to stay calm.",['herself'],['her','hers'],3),
  B("The two friends help ___ with their homework.",['each other'],['themselves','them'],3)
 ];
 return bankTopic({id:'rf',grp:'nomen',ord:60,ic:'🪞',de:'Reflexivpronomen',en:'Reflexive pronouns',desc:'myself · yourself · themselves · each other',
  fillInstr:()=>L('Setze das passende Reflexivpronomen ein.','Fill in the correct reflexive pronoun.'),
  fillDesc:()=>L('das richtige Pronomen schreiben','write the right pronoun'),
  lvDe:'C: myself, herself, himself, ourselves. B: dazu yourself / yourselves, themselves, itself und by myself. A: dazu each other.',lvEn:'C: myself, herself, himself, ourselves. B: plus yourself / yourselves, themselves, itself and by myself. A: plus each other.',
  why:W,bank,
  err:[["I cut myself with a knife.",["I cut me with a knife.","I cut mine with a knife."],1],["She looked at herself in the mirror.",["She looked at her in the mirror.","She looked at hers in the mirror."],1],["The children made it themselves.",["The children made it theirselves.","The children made it themself."],2],["We enjoyed ourselves.",["We enjoyed us.","We enjoyed ourself."],2]],
  errWhy:'Wenn Subjekt und Objekt dieselbe Person sind, braucht man das Reflexivpronomen: myself, himself … (Mehrzahl: -selves).|If subject and object are the same person, use a reflexive pronoun: myself, himself … (plural: -selves).',
  slides:()=>[
   slide(L('Die Formen','The forms'),
    SL.tbl([L('Subjekt','Subject'),L('Reflexivpronomen','Reflexive pronoun')],[['I','my<b>self</b>'],['you','your<b>self</b>'],['he / she / it','him<b>self</b> / her<b>self</b> / it<b>self</b>'],['we','our<b>selves</b>'],['you (pl.)','your<b>selves</b>'],['they','them<b>selves</b>']])+SL.tip(L('Einzahl: <b>-self</b>, Mehrzahl: <b>-selves</b>.','Singular: <b>-self</b>, plural: <b>-selves</b>.'))),
   slide(L('Wann braucht man es?','When do you use it?'),
    SL.p(L('Wenn der <b>Handelnde</b> und der <b>Betroffene</b> dieselbe Person sind:','When the <b>doer</b> and the <b>receiver</b> are the same person:'))+SL.ex(['I cut <b>myself</b>. <span class="muted">(ich → mich)</span>','She looked at <b>herself</b> in the mirror.','We enjoyed <b>ourselves</b>.'])+SL.tbl([L('Mit Reflexivpronomen','With reflexive'),L('Mit Objektpronomen','With object pronoun')],[['He hurt <b>himself</b>. (er → sich)','He hurt <b>him</b>. (er verletzte einen anderen)']])),
   slide(L('Wichtige Wendungen','Useful phrases'),
    SL.tbl([L('Wendung','Phrase'),L('Bedeutung','Meaning')],[['enjoy <b>yourself</b>',L('Spass haben','have a good time')],['help <b>yourself</b>',L('bedien dich','take what you want')],['by <b>myself</b>',L('allein, ohne Hilfe','alone, without help')],['teach <b>yourself</b>',L('sich etwas selbst beibringen','learn without a teacher')],['be proud of <b>yourself</b>',L('stolz auf sich sein','feel proud')]])),
   slide(L('each other = einander','each other = one another'),
    SL.p(L('<b>each other</b> heisst «einander»: zwei oder mehr Personen tun etwas füreinander.','<b>each other</b> means “one another”: two or more people do something to each other.'))+SL.ex(['Tom and Anna looked at <b>each other</b>.','We write to <b>each other</b> every week.'])+SL.warn(L('Vergleiche: <i>They hurt <b>themselves</b></i> (jeder sich selbst) – <i>They hurt <b>each other</b></i> (der eine den anderen).','Compare: <i>They hurt <b>themselves</b></i> (each one hurt himself) – <i>They hurt <b>each other</b></i> (one hurt the other).'))),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['I cut me.','I cut myself.'],['They made it theirselves.','They made it themselves.'],['We enjoyed ourself.','We enjoyed ourselves.'],['He feels himself good.','He feels good.']])+SL.tip(L('Nach <i>feel, wash, dress, relax</i> braucht Englisch oft <b>kein</b> Reflexivpronomen: <i>I feel good. He washed.</i>','After <i>feel, wash, dress, relax</i> English often needs <b>no</b> reflexive pronoun: <i>I feel good. He washed.</i>'))),
   tryS(L('Übung','Exercise'),()=>[['I hurt ___ yesterday.','myself'],['She made the cake ___.','herself'],['The children enjoyed ___ at the zoo.','themselves'],['We help ___ with the homework. (one another)','each other'],['Help ___, Anna and Tom!','yourselves']])
  ]});
})());
