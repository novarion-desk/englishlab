/* Wünsche und Vorlieben: want to, would like to, would rather, prefer */
TOPICS.push((()=>{
 const W={_:'want to / would like to + Grundform mit to (would like ist höflicher). would rather + Grundform ohne to (I\'d rather stay). prefer: Tee to Kaffee, walking to cycling.|want to / would like to + base form with to (would like is more polite). would rather + base form without to (I\'d rather stay). prefer: tea to coffee, walking to cycling.'};
 const B=(s,ok,bad,lv,sb,h)=>BK(s,ok,bad,lv,sb||'',h||'');
 const bank=[
  B("I'd ___ a glass of water, please.",['like'],['want','would'],1,'wl'),
  B("___ you like a cup of tea?",['Would'],['Are','Is'],1,'wl'),
  B("I would like ___ to the cinema tonight.",['to go'],['go','going'],1,'wl','(go)'),
  B("Would you like ___ with us?",['to come'],['come','coming'],1,'wl','(come)'),
  B("What would you ___ to drink?",['like'],['want','likes'],1,'wl'),
  B("She'd like ___ a doctor when she grows up.",['to be'],['be','being'],2,'wl','(be)'),
  B("We'd like ___ a table for four, please.",['to book'],['book','booking'],2,'wl','(book)'),
  B("I ___ like to speak to the manager, please.",['would'],['will','am'],2,'wl'),
  B("He ___ like to play football with us.",["wouldn't"],["doesn't","isn't"],3,'wl'),
  B("I want ___ a new phone.",['to buy'],['buy','buying'],1,'pf','(buy)'),
  B("He wants ___ a pilot.",['to be'],['be','being'],1,'pf','(be)'),
  B("Do you ___ to come with us?",['want'],['wants','wanting'],1,'pf'),
  B("I ___ to go home now. I'm tired.",['want'],['wants','wanting'],1,'pf'),
  B("I prefer tea ___ coffee.",['to'],['than','from'],2,'pf'),
  B("She prefers ___ to cycling.",['walking'],['walk','to walk'],3,'pf','(walk)'),
  B("We ___ going by train to going by car.",['prefer'],['rather','would'],3,'pf'),
  B("Would you ___ tea or coffee?",['prefer'],['preferring','like to'],3,'pf'),
  B("I'd rather ___ at home tonight.",['stay'],['to stay','staying'],1,'wr','(stay)'),
  B("She would rather ___ tea than coffee.",['have','drink'],['to have','having'],2,'wr','(have)'),
  B("I'd rather ___ go to the party. I'm tired.",['not'],['no',"don't"],2,'wr'),
  B("Would you rather ___ pizza or pasta?",['have','eat'],['to have','having'],2,'wr','(have)'),
  B("We'd rather ___ than take the bus.",['walk'],['to walk','walking'],2,'wr','(walk)'),
  B("He'd rather ___ the film at home.",['watch'],['to watch','watching'],2,'wr','(watch)'),
  B("I'd ___ stay in than go out.",['rather'],['prefer','better'],2,'wr'),
  B("I'd rather ___ than wait here.",['leave'],['leaving','to leave'],3,'wr','(leave)'),
  B("They'd rather ___ a taxi than walk.",['take'],['to take','taking'],3,'wr','(take)')
 ];
 return bankTopic({id:'wl',grp:'verben',ord:112,ic:'💭',de:'Wünsche und Vorlieben: would like, would rather',en:'Wishes and preferences: would like, would rather',desc:'I\'d like to go · I\'d rather stay · I prefer tea to coffee',
  fillInstr:()=>L('Setze das passende Wort ein.','Fill in the correct word.'),
  fillDesc:()=>L('das passende Wort schreiben','write the right word'),
  lvDe:'C: want to, would like to. B: dazu would rather. A: dazu prefer und schwierigere Sätze.',lvEn:'C: want to, would like to. B: plus would rather. A: plus prefer and harder sentences.',
  subs:()=>[{k:'wl',n:'would like'},{k:'wr',n:'would rather'},{k:'pf',n:'want / prefer'}],
  why:W,bank,
  err:[["I'd like to go home.",["I'd like go home.","I'd like going home."],1],["I'd rather stay at home.",["I'd rather to stay at home.","I'd rather staying at home."],2],["I prefer tea to coffee.",["I prefer tea than coffee.","I prefer tea from coffee."],2],["Would you like to come?",["Do you would like to come?","Would you like come?"],1]],
  errWhy:'would like to + Grundform mit to. would rather + Grundform ohne to. prefer … to …, nicht than.|would like to + base form with to. would rather + base form without to. prefer … to …, not than.',
  slides:()=>[
   slide(L('want to und would like to','want to and would like to'),
    SL.fm([['a',L('Subjekt','Subject')],'+',['b','want to / would like to'],'+',['c',L('Grundform','base form')]])+SL.ex(['I <b>want to</b> go home.','I <b>would like to</b> order a pizza.','<b>Would</b> you <b>like to</b> come with us?'])+SL.tip(L('<b>would like</b> ist höflicher als <b>want</b>. Kurzform: <b>I\'d like</b>.','<b>would like</b> is more polite than <b>want</b>. Short form: <b>I\'d like</b>.'))),
   slide(L('Angebote und Einladungen','Offers and invitations'),
    SL.tbl([L('Frage','Question'),L('Antwort','Answer')],[['<b>Would you like</b> a cup of tea?','Yes, please. / No, thank you.'],['<b>Would you like to</b> come to the cinema?','Yes, I\'d love to. / Sorry, I can\'t.'],['What <b>would you like</b> to drink?','I\'d like an orange juice, please.']])),
   slide(L('would rather','would rather'),
    SL.fm([['a',L('Subjekt','Subject')],'+',['b','would rather'],'+',['c',L('Grundform','base form'),L('ohne to','no to')]])+SL.ex(['I\'d <b>rather stay</b> at home.','I\'d <b>rather not go</b>. I\'m tired.','<b>Would</b> you <b>rather have</b> tea or coffee?','I\'d <b>rather walk than take</b> the bus.'])+SL.warn(L('Nach <b>would rather</b> steht <b>kein to</b>. Verneinung: <b>would rather not</b>.','After <b>would rather</b> there is <b>no to</b>. Negative: <b>would rather not</b>.'))),
   slide(L('prefer','prefer'),
    SL.tbl([L('Muster','Pattern'),L('Beispiel','Example')],[['prefer + '+L('Nomen','noun')+' + to + '+L('Nomen','noun'),'I <b>prefer tea to coffee</b>.'],['prefer + -ing + to + -ing','She <b>prefers walking to cycling</b>.'],['prefer + to + '+L('Grundform','base form'),'I <b>prefer to walk</b>.'],['Would you prefer …?','<b>Would you prefer</b> tea or coffee?']])),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['I\'d like go home.','I\'d like to go home.'],['I\'d rather to stay.','I\'d rather stay.'],['I prefer tea than coffee.','I prefer tea to coffee.'],['Do you would like a tea?','Would you like a tea?']])),
   tryS(L('Übung','Exercise'),()=>[['I\'d ___ a glass of water, please.','like'],['Would you like ___ with us? (come)','to come'],['I\'d rather ___ at home. (stay)','stay'],['I prefer tea ___ coffee.','to'],['I\'d rather ___ go. I\'m tired.','not']])
  ]});
})());
