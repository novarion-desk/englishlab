/* should have / shouldn't have */
TOPICS.push((()=>{
 const W={_:'should have + 3. Form: Man hätte etwas tun sollen (hat es aber nicht getan). shouldn\'t have + 3. Form: Man hätte etwas nicht tun sollen. ought to have ist dasselbe.|should have + past participle: you ought to have done something (but you didn\'t). shouldn\'t have + past participle: you ought not to have done something. ought to have means the same.'};
 const B=(s,ok,bad,lv,sb,h)=>BK(s,ok,bad,lv,sb||'',h||'');
 const bank=[
  B("You failed the test. You ___ studied more.",['should have','ought to have'],['should','should had'],1),
  B("It's raining and I'm wet. I ___ taken an umbrella.",['should have','ought to have'],['should','must have'],1),
  B("He is ill. He ___ eaten so much.",["shouldn't have","ought not to have"],['should have',"shouldn't"],2),
  B("I'm hungry. I ___ skipped breakfast.",["shouldn't have"],['should have','mustn\'t'],2),
  B("You should have ___ me earlier.",['called'],['call','calling'],2,'','(call)'),
  B("She should have ___ to bed earlier.",['gone'],['went','go'],2,'','(go)'),
  B("We should have ___ the bus.",['taken'],['took','take'],2,'','(take)'),
  B("I should have ___ my homework.",['done'],['did','do'],2,'','(do)'),
  B("They shouldn't have ___ so late.",['arrived'],['arrive','arriving'],2,'','(arrive)'),
  B("You ought to have ___ the truth.",['told'],['tell','telled'],3,'','(tell)'),
  B("He shouldn't have ___ my phone.",['taken'],['took','take'],3,'','(take)'),
  B("The test was easy. You ___ have worried so much.",["shouldn't",'needn\'t'],['should','must'],3),
  B("She ___ have listened to her mum.",['should','ought to'],["shouldn't",'can'],2),
  B("You ___ have told me earlier. Now it's too late.",['should','ought to'],["shouldn't",'can'],2),
  B("We ___ have left earlier. Now we are late.",['should','ought to'],["shouldn't",'can'],1),
  B("You ___ have said that. It was unkind.",["shouldn't",'ought not to'],['should','must'],2),
  B("I'm so sorry. I ___ have shouted at you.",["shouldn't"],['should','can'],3),
  B("You ___ have bought that car. It was too expensive.",["shouldn't"],['should','must'],3)
 ];
 return bankTopic({id:'sh',grp:'verben',ord:95,ic:'🤦',de:'should have / shouldn\'t have',en:'should have / shouldn\'t have',desc:'You should have asked. · I shouldn\'t have said that.',
  fillInstr:()=>L('Setze das passende Wort oder die richtige Verbform ein.','Fill in the correct word or verb form.'),
  fillDesc:()=>L('das passende Wort oder die 3. Form schreiben','write the right word or the past participle'),
  lvDe:'C: should have in einfachen Sätzen. B: dazu die 3. Form unregelmässiger Verben. A: dazu shouldn\'t have und ought to have.',lvEn:'C: should have in simple sentences. B: plus past participles of irregular verbs. A: plus shouldn\'t have and ought to have.',
  why:W,bank,
  err:[["You should have studied more.",["You should studied more.","You should has studied more."],1],["I should have taken an umbrella.",["I should have took an umbrella.","I should had taken an umbrella."],2],["He shouldn't have said that.",["He shouldn't had said that.","He don't should have said that."],2],["We should have left earlier.",["We should have leave earlier.","We should of left earlier."],2]],
  errWhy:'should / shouldn\'t + have + 3. Form. Nie should of: es heisst should have (gesprochen: should\'ve).|should / shouldn\'t + have + past participle. Never should of: it is should have (spoken: should\'ve).',
  slides:()=>[
   slide(L('Kritik und Bedauern über die Vergangenheit','Criticism and regret about the past'),
    SL.p(L('Mit <b>should have</b> sagst du: Das wäre besser gewesen, aber es ist nicht passiert.','With <b>should have</b> you say: that would have been better, but it did not happen.'))+SL.ex(['You failed the test. You <b>should have studied</b> more.','It\'s raining. I <b>should have taken</b> an umbrella.'])+SL.tip(L('<b>should</b> (jetzt / Zukunft): <i>You should study.</i> – <b>should have</b> (Vergangenheit): <i>You should have studied.</i>','<b>should</b> (now / future): <i>You should study.</i> – <b>should have</b> (past): <i>You should have studied.</i>'))),
   slide(L('Bildung','How to form it'),
    SL.fm([['a',L('Subjekt','Subject')],'+',['b','should have'],'+',['c',L('3. Form','past participle'),'done · gone · taken']])+SL.tbl([L('Satzart','Type'),L('Beispiel','Example')],[[L('positiv','positive'),'You <b>should have</b> called me.'],[L('negativ','negative'),'He <b>shouldn\'t have</b> said that.'],[L('gleich wie should have','same as should have'),'You <b>ought to have</b> called me.'],[L('Frage','question'),'<b>Should</b> I <b>have</b> told her?']])),
   slide(L('Verwechsle nicht','Don\'t mix up'),
    SL.tbl([L('Ausdruck','Expression'),L('Bedeutung','Meaning')],[['<b>should have</b> done',L('hätte tun sollen (hat es nicht getan)','should have done (but didn\'t)')],['<b>must have</b> done',L('hat es bestimmt getan (Vermutung)','certainly did it (deduction)')],['<b>could have</b> done',L('hätte tun können','was able to, but didn\'t')]])+SL.warn(L('Nicht <s>should of</s>! Das klingt nur so.','Not <s>should of</s>! It only sounds like that.'))),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['You should studied more.','You should have studied more.'],['I should have took an umbrella.','I should have taken an umbrella.'],['We should of left earlier.','We should have left earlier.']])),
   tryS(L('Übung','Exercise'),()=>[['You were late. You ___ ___ left earlier.','should have'],['I should have ___ my homework. (do)','done'],['He shouldn\'t have ___ my phone. (take)','taken'],['She ___ ___ listened to her mum. (ought)','ought to have'],['It was rude. You ___ ___ said that.',"shouldn't have"]])
  ]});
})());
