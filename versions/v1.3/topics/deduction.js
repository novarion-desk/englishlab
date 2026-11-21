/* Schlussfolgerung: must / can't / could / may / might */
TOPICS.push((()=>{
 const W={_:'Sicher (fast) ja: must. Sicher (fast) nein: can\'t. Vielleicht: could / may / might. Danach steht die Grundform.|Almost certainly yes: must. Almost certainly no: can\'t. Maybe: could / may / might. Then use the base form.'};
 const B=(s,ok,bad,lv,sb,h)=>BK(s,ok,bad,lv,sb||'',h||'');
 const bank=[
  B("He has run ten kilometres. He ___ be tired.",['must'],["can't",'might'],1),
  B("She has won every game. She ___ be very good.",['must'],["can't",'may'],1),
  B("It's 35 degrees outside. It ___ be very hot.",['must'],["can't",'might'],1),
  B("He is only five. He ___ be a teacher.",["can't"],['must','might'],1),
  B("They have just had lunch. They ___ be hungry.",["can't"],['must','might'],1),
  B("That ___ be Tom's bag. He always has a red one, and this is blue.",["can't"],['must','might'],2),
  B("I don't know where Anna is. She ___ be at home.",['might','may','could'],["can't",'must'],1),
  B("Take an umbrella. It ___ rain later.",['might','may','could'],["can't",'must'],1),
  B("Ask Mia. She ___ know the answer.",['might','may','could'],["can't",'must'],2),
  B("The lights are on. Somebody ___ be at home.",['must'],["can't",'might'],2),
  B("The shop is closed. They ___ be open on Sundays.",["can't"],['must','may'],2),
  B("My phone isn't in my bag. I ___ have left it at school.",['might','may','could'],["can't",'must'],2),
  B("She never eats meat. She ___ be a vegetarian.",['must'],["can't",'might'],2),
  B("He was with me all evening. He ___ have taken your bike.",["can't"],['must','might'],3),
  B("The ground is wet. It ___ have rained.",['must'],["can't",'might'],3),
  B("I'm not sure. We ___ go to the beach on Saturday.",['might','may','could'],["can't",'must'],2),
  B("You ___ be hungry. You had a big breakfast.",["can't"],['must','might'],2),
  B("He is wearing a uniform. He ___ be a pilot.",['must','might','may'],["can't",'does'],2),
  B("She looks pale. She ___ be ill.",['might','may','could'],["can't",'does'],2),
  B("Listen! Someone is singing. It ___ be Lisa. She has a lovely voice.",['must'],["can't",'might'],3)
 ];
 return bankTopic({id:'dd',grp:'verben',ord:80,ic:'🕵️',de:'Vermutungen: must, can\'t, might',en:'Deductions: must, can\'t, might',desc:'He must be tired. · It can\'t be true. · She might come.',
  fillInstr:()=>L('Setze das passende Modalverb ein.','Fill in the correct modal verb.'),
  fillDesc:()=>L('das richtige Modalverb schreiben','write the right modal verb'),
  lvDe:'C: must (sicher) und can\'t (unmöglich). B: dazu might / may / could (vielleicht). A: dazu Vermutungen über die Vergangenheit (must have, can\'t have).',lvEn:'C: must (certain) and can\'t (impossible). B: plus might / may / could (maybe). A: plus guesses about the past (must have, can\'t have).',
  why:W,bank,
  err:[["He must be tired.",["He must to be tired.","He musts be tired."],1],["She can't be a teacher. She is only ten.",["She mustn't be a teacher. She is only ten.","She can't to be a teacher. She is only ten."],2],["It might rain tomorrow.",["It might to rain tomorrow.","It mights rain tomorrow."],1],["That must be Tom's bag.",["That must is Tom's bag.","That must being Tom's bag."],2]],
  errWhy:'Für «unmöglich» sagt man can\'t, nicht mustn\'t. mustn\'t = Verbot. Nach dem Modalverb steht die Grundform ohne to.|For “impossible” use can\'t, not mustn\'t. mustn\'t = prohibition. After a modal use the base form without to.',
  slides:()=>[
   slide(L('Wie sicher bist du?','How sure are you?'),
    SL.tbl([L('Sicherheit','Certainty'),L('Modalverb','Modal verb'),L('Beispiel','Example')],[['≈ 95 % '+L('ja','yes'),'<b>must</b>','He has run 10 km. He <b>must</b> be tired.'],['50 %','<b>might / may / could</b>','Anna <b>might</b> be at home.'],['≈ 95 % '+L('nein','no'),'<b>can\'t</b>','He is five. He <b>can\'t</b> be a teacher.']])+SL.tip(L('Du hast Hinweise (ein Grund), aber du weisst es nicht sicher.','You have clues (a reason), but you don\'t know for sure.'))),
   slide(L('Achtung: Verbot oder Vermutung?','Careful: prohibition or deduction?'),
    SL.cols(SL.p('<b>mustn\'t</b> = '+L('Verbot','prohibition'))+SL.ex(["You <b>mustn't</b> smoke here."]),SL.p('<b>can\'t</b> = '+L('unmöglich (Vermutung)','impossible (deduction)'))+SL.ex(["He <b>can't</b> be ten. He is 25."]))+SL.warn(L('Das Gegenteil von <i>must</i> (Vermutung) ist <b>can\'t</b>, nicht <s>mustn\'t</s>.','The opposite of <i>must</i> (deduction) is <b>can\'t</b>, not <s>mustn\'t</s>.'))),
   slide(L('Vermutung über die Vergangenheit','Deductions about the past'),
    SL.fm([['a',L('Subjekt','Subject')],'+',['b','must / can\'t / might'],'+',['c','have'],'+',['d',L('3. Form','past participle')]])+SL.ex(["The ground is wet. It <b>must have rained</b>.","He was with me all evening. He <b>can't have taken</b> your bike.","She <b>might have missed</b> the bus."])),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['He mustn\'t be a doctor. He is ten.','He can\'t be a doctor. He is ten.'],['She must to be tired.','She must be tired.'],['It mights rain.','It might rain.']])),
   tryS(L('Übung','Exercise'),()=>[['He has been awake for 30 hours. He ___ be tired.','must'],['She is only seven. She ___ be a doctor.',"can't"],['I\'m not sure, but I ___ go to the party.','might / may / could'],['The lights are off. They ___ be at home.',"can't"],['It ___ have rained. The street is wet.','must']])
  ]});
})());
