/* Object pronouns + Verb + indirect / direct object */
TOPICS.push((()=>{
 const W={o:'Nach dem Verb steht das Objektpronomen: me, you, him, her, it, us, them.|After the verb use the object pronoun: me, you, him, her, it, us, them.',
  d:'give / send / show / tell: Person ohne to direkt nach dem Verb (give me the book) oder Sache + to + Person (give the book to me). Bei buy / make / cook: for.|give / send / show / tell: person directly after the verb (give me the book) or thing + to + person (give the book to me). With buy / make / cook use for.'};
 const bank=[
  BK('I like Anna. I like ___.',['her'],['she','hers'],1,'o'),
  BK('Tom is my friend. I often see ___.',['him'],['he','his'],1,'o'),
  BK('Look at the dogs! Look at ___.',['them'],['they','their'],1,'o'),
  BK('My sister and I are hungry. Can you make ___ lunch?',['us'],['we','our'],1,'o'),
  BK('Please help ___. I cannot find my key.',['me'],['I','my'],1,'o'),
  BK('This is a good book. Do you want to read ___?',['it'],['its','they'],1,'o'),
  BK('Can you give ___ the salt, please?',['me'],['I','my'],1,'o'),
  BK('We love our teacher. We always listen to ___.',['her','him'],['she','he'],2,'o'),
  BK('Tom gave the book ___ Anna.',['to'],['for','at'],2,'d'),
  BK('She made a cake ___ her brother.',['for'],['to','at'],2,'d'),
  BK('He sent a letter ___ me.',['to'],['for','at'],2,'d'),
  BK('Buy a ticket ___ them.',['for'],['to','at'],2,'d'),
  BK('Can you show the photo ___ us?',['to'],['for','at'],2,'d'),
  BK("I'll cook dinner ___ you.",['for'],['to','at'],2,'d'),
  BK('Mum told ___ a funny story. (me)',['me'],['to I','for I'],3,'d'),
  BK('Can you pass the water ___ him?',['to'],['for','at'],3,'d')
 ];
 return bankTopic({id:'ob',grp:'nomen',ord:30,ic:'🎯',de:'Objektpronomen',en:'Object pronouns',desc:'me, him, them · give me the book',
  fillInstr:()=>L('Setze das passende Wort ein.','Fill in the correct word.'),
  lvDe:'C: me, him, her, us, them. B: dazu give … to / buy … for. A: dazu schwierigere Sätze.',lvEn:'C: me, him, her, us, them. B: plus give … to / buy … for. A: plus harder sentences.',
  subs:()=>[{k:'o',n:L('Objektpronomen','Object pronouns')},{k:'d',n:L('give me … / give … to me','give me … / give … to me')}],why:W,bank,
  err:[['She gave me the book.',['She gave to me the book.','She gave the book me.'],1],['I will send you an email.',['I will send to you an email.','I will send an email you.'],1],['He showed them the way.',['He showed to them the way.','He showed the way them.'],2],['Can you tell me the answer?',['Can you tell to me the answer?','Can you tell the answer me?'],2],['She bought her brother a present.',['She bought for her brother a present.','She bought a present her brother.'],3],['I like him.',['I like he.','I like his.'],1]],errWhy:W.d,
  slides:()=>[
   slide(L('Subjekt und Objekt','Subject and object'),
    SL.p(L('Das <b>Subjekt</b> macht etwas (<i>I</i> like Anna). Das <b>Objekt</b> bekommt etwas ab (I like <i>her</i>). Für das Objekt gibt es eigene Pronomen.','The <b>subject</b> does something (<i>I</i> like Anna). The <b>object</b> receives it (I like <i>her</i>). Objects have their own pronouns.'))+SL.tbl([L('Subjekt','Subject'),'I','you','he','she','it','we','they'],[[L('Objekt','Object'),'<b>me</b>','<b>you</b>','<b>him</b>','<b>her</b>','<b>it</b>','<b>us</b>','<b>them</b>']])),
   slide(L('Wo stehen sie?','Where do they go?'),
    SL.p(L('Das Objektpronomen steht <b>nach dem Verb</b> und <b>nach einer Präposition</b>.','The object pronoun goes <b>after the verb</b> and <b>after a preposition</b>.'))+SL.ex(['Please help <b>me</b>.','We listen to <b>her</b>.','Look at <b>them</b>!','Come with <b>us</b>.'])),
   slide(L('give me the book','give me the book'),
    SL.p(L('Viele Verben haben zwei Objekte: <b>wer</b> bekommt etwas (Person) und <b>was</b> wird gegeben (Sache). Es gibt zwei Muster.','Many verbs take two objects: <b>who</b> receives something (person) and <b>what</b> is given (thing). There are two patterns.'))+SL.tbl([L('Muster','Pattern'),L('Beispiel','Example')],[['verb + <b>person</b> + thing','She gave <b>me</b> the book.'],['verb + thing + <b>to</b> + person','She gave the book <b>to me</b>.']])+SL.warn(L('Nicht: <s>She gave to me the book.</s> und nicht <s>She gave the book me.</s>','Not: <s>She gave to me the book.</s> and not <s>She gave the book me.</s>'))),
   slide(L('to oder for?','to or for?'),
    SL.tbl(['',L('Verben','Verbs'),L('Beispiel','Example')],[['<b>to</b>','give, send, show, tell, pass, lend','He sent a letter <b>to</b> me.'],['<b>for</b>','buy, make, cook, get, find','She made a cake <b>for</b> her brother.']])),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['I like he.','I like him.'],['Help I, please.','Help me, please.'],['She gave to me the book.','She gave me the book.'],['He made a cake to me.','He made a cake for me.']])),
   tryS(L('Übung: Pronomen und to / for','Exercise: pronouns and to / for'),()=>[['I like Anna. I like ___.','her'],['Look at the dogs! Look at ___.','them'],['Please help ___.','me'],['Tom gave the book ___ Anna.','to'],['She made a cake ___ her brother.','for'],["I'll cook dinner ___ you.",'for']])
  ]});
})());
