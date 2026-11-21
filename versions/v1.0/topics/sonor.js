/* so / nor + Hilfsverb */
TOPICS.push((()=>{
 const W={_:'So + Hilfsverb + Subjekt stimmt einem positiven Satz zu, nor / neither + Hilfsverb + Subjekt einem verneinten. Das Hilfsverb passt zur Zeit: be → am / is / are / was / were, Vollverb → do / does / did.|So + auxiliary + subject agrees with a positive sentence, nor / neither + auxiliary + subject with a negative one. The auxiliary matches the tense: be → am / is / are / was / were, full verb → do / does / did.'};
 const B=(s,ok,bad,lv)=>BK(s,ok,bad,lv,'');
 const bank=[
  B("I like pizza. – So ___ I.",['do'],['am','does'],1),
  B("She is tired. – So ___ I.",['am'],['do','is'],1),
  B("He plays football. – So ___ his brother.",['does'],['do','is'],1),
  B("We were late. – So ___ they.",['were'],['did','was'],1),
  B("I can swim. – So ___ my sister.",['can'],['does','is'],1),
  B("They went home. – So ___ we.",['did'],['do','were'],1),
  B("I have finished. – So ___ I.",['have'],['do','am'],2),
  B("Tom will come. – So ___ Anna.",['will'],['does','is'],2),
  B("My dad works in Zurich. – So ___ my mum.",['does'],['do','is'],2),
  B("She has a bike. – So ___ her brother.",['does'],['has','is'],3),
  B("I must go. – So ___ I.",['must'],['do','am'],2),
  B("You are right. – So ___ you.",['are'],['do','were'],1),
  B("She doesn't like fish. – Nor ___ I.",['do'],['does','am'],1),
  B("I'm not hungry. – Nor ___ I.",['am'],['do','is'],1),
  B("He didn't come. – Nor ___ his sister.",['did'],['does','was'],2),
  B("They can't swim. – Nor ___ we.",['can'],['do','are'],2),
  B("We haven't seen it. – Nor ___ they.",['have'],['do','are'],2),
  B("I wasn't there. – Nor ___ she.",['was'],['did','is'],2),
  B("He doesn't speak French. – Neither ___ I.",['do'],['does','am'],2),
  B("Our teacher isn't at school today. – Nor ___ the headmaster.",['is'],['does','are'],3),
  B("I won't tell anyone. – Neither ___ I.",['will'],['do','am'],3),
  B("My brother has never been to Rome. – Nor ___ I.",['have'],['do','has'],3)
 ];
 return bankTopic({noOrder:1,id:'sn',grp:'verben',ord:70,ic:'🤝',de:'Zustimmen: so / nor + Hilfsverb',en:'Agreeing: so / nor + auxiliary',desc:'So do I. · Nor can he. · Neither am I.',
  fillInstr:()=>L('Setze das passende Hilfsverb ein.','Fill in the correct auxiliary verb.'),
  fillDesc:()=>L('das richtige Hilfsverb schreiben','write the right auxiliary verb'),
  lvDe:'C: einfache Sätze im present und past simple. B: dazu have, will und Modalverben. A: dazu Verneinung mit nor / neither und have als Vollverb.',lvEn:'C: simple present and past sentences. B: plus have, will and modals. A: plus nor / neither and have as a full verb.',
  why:W,bank,
  err:[["I like pizza. – So do I.",["I like pizza. – So like I.","I like pizza. – So am I."],1],["She is tired. – So am I.",["She is tired. – So do I.","She is tired. – So I am."],1],["He didn't come. – Nor did his sister.",["He didn't come. – Nor didn't his sister.","He didn't come. – Nor his sister did."],2],["I can't swim. – Neither can my brother.",["I can't swim. – Neither can't my brother.","I can't swim. – Neither does my brother."],2]],
  errWhy:'Nach so / nor / neither steht zuerst das Hilfsverb, dann das Subjekt. Bei nor / neither keine zweite Verneinung.|After so / nor / neither the auxiliary comes first, then the subject. No second negative after nor / neither.',
  slides:()=>[
   slide(L('Zustimmen','Agreeing'),
    SL.tbl([L('Der erste Satz ist …','The first sentence is …'),L('Antwort','Answer'),L('Beispiel','Example')],[[L('positiv','positive'),'<b>So</b> + '+L('Hilfsverb','auxiliary')+' + '+L('Subjekt','subject'),'I like pizza. – <b>So do I.</b>'],[L('negativ','negative'),'<b>Nor / Neither</b> + '+L('Hilfsverb','auxiliary')+' + '+L('Subjekt','subject'),'I don\'t like fish. – <b>Nor do I.</b>']])+SL.tip(L('Gemeint ist: «ich auch» (<i>So do I</i>) und «ich auch nicht» (<i>Nor do I</i>).','It means “me too” (<i>So do I</i>) and “me neither” (<i>Nor do I</i>).'))),
   slide(L('Welches Hilfsverb?','Which auxiliary?'),
    SL.tbl([L('Erster Satz','First sentence'),L('Hilfsverb','Auxiliary'),L('Beispiel','Example')],[['<b>be</b>: I am / she is / we were','am · is · are · was · were','She is tired. – So <b>am</b> I.'],['present simple','do / does','I play. – So <b>do</b> we. · He plays. – So <b>does</b> she.'],['past simple','did','We went. – So <b>did</b> they.'],[L('have got / present perfect','have got / present perfect'),'have / has','I\'ve finished. – So <b>have</b> I.'],['can, will, must …',L('dasselbe Modalverb','the same modal verb'),'I can swim. – So <b>can</b> I.']])),
   slide(L('Nor oder neither?','Nor or neither?'),
    SL.p(L('<b>Nor</b> und <b>neither</b> sind gleich. Wichtig: danach folgt <b>keine</b> weitere Verneinung.','<b>Nor</b> and <b>neither</b> mean the same. Important: <b>no</b> second negative follows.'))+SL.ex(["She can't swim. – <b>Nor can I</b>. / <b>Neither can I</b>.","He didn't come. – <b>Nor did</b> his sister."])+SL.warn(L('Nicht: <s>Nor don\'t I</s>. Richtig: <b>Nor do I</b>.','Not: <s>Nor don\'t I</s>. Correct: <b>Nor do I</b>.'))),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['I like pizza. – So like I.','I like pizza. – So do I.'],['She is tired. – So do I.','She is tired. – So am I.'],['I can\'t swim. – Nor can\'t I.','I can\'t swim. – Nor can I.']])),
   tryS(L('Übung','Exercise'),()=>[['I like music. – So ___ I.','do'],['He is ten. – So ___ my sister.','is'],['We went to the cinema. – So ___ they.','did'],['I can\'t dance. – Nor ___ my brother.','can'],['She doesn\'t eat meat. – Neither ___ I.','do']])
  ]});
})());
