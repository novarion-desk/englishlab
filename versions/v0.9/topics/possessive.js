/* Possessive: my / mine, 's / s' */
TOPICS.push((()=>{
 const W={a:'Possessivbegleiter (my, your …) stehen vor dem Nomen. Possessivpronomen (mine, yours …) stehen allein und ersetzen das Nomen.|Possessive adjectives (my, your …) go before a noun. Possessive pronouns (mine, yours …) stand alone and replace the noun.',
  p:'Besitz bei Personen: \'s (eine Person) oder s\' (mehrere Personen). Whose = wessen. Its (Besitz) ≠ it\'s (it is).|Ownership for people: \'s (one person) or s\' (more people). Whose = who owns. Its (ownership) ≠ it\'s (it is).'};
 const bank=[
  BK('Is this ___ pen? (you)',['your'],['yours','you'],1,'a'),
  BK('I have lost ___ keys.',['my'],['mine','me'],1,'a'),
  BK('She loves ___ dog.',['her'],['hers','she'],1,'a'),
  BK('Anna and Tom live with ___ grandparents.',['their'],['theirs','them'],1,'a'),
  BK('That is not your pen. It is ___.',['mine'],['my','me'],1,'a'),
  BK('The red bike is ___. (it belongs to me)',['mine'],['my','me'],1,'a'),
  BK('Is this your jacket? – No, it is not ___.',['mine'],['my','me'],1,'a'),
  BK("I forgot my pen. Can I use ___?",['yours'],['your','you'],2,'a'),
  BK('Our house is big, but ___ is bigger. (they)',['theirs'],['their','them'],2,'a'),
  BK('The dog is wagging ___ tail.',['its'],["it's",'their'],2,'p'),
  BK('Look at the cat! ___ eating its food.',["It's"],['Its','Is it'],2,'p'),
  BK('A friend of ___ told me. (I)',['mine'],['my','me'],3,'a'),
  BK('___ shoes are these? They are very big!',['Whose'],["Who's",'Who'],1,'p'),
  BK('Whose shoes are these? – They are ___. (Tom)',["Tom's"],['Toms','Tom'],1,'p'),
  BK('This is my ___ car. (my father)',["father's"],['fathers','father'],1,'p'),
  BK('The ___ room is very big. (the boys, many)',["boys'"],["boy's",'boys'],2,'p'),
  BK('These are my ___ books. (my two sisters)',["sisters'"],["sister's",'sisters'],2,'p'),
  BK('Whose is this bag? – It is ___. (the teacher)',["the teacher's"],['the teachers','teacher'],3,'p')
 ];
 return bankTopic({id:'o',grp:'nomen',ord:20,ic:'🏠',de:'Possessive: my, mine, \'s',en:'Possessives: my, mine, \'s',desc:"my book · It's mine. · Tom's bike",
  fillInstr:()=>L('Setze das passende Wort ein.','Fill in the correct word.'),
  lvDe:'C: my / your … und mine / yours …, Tom\'s. B: dazu s\' und its. A: dazu schwierigere Fälle.',lvEn:'C: my / your … and mine / yours …, Tom\'s. B: plus s\' and its. A: plus harder cases.',
  subs:()=>[{k:'a',n:L('my / mine','my / mine')},{k:'p',n:"'s / s' / whose"}],why:W,bank,
  err:[['This is my book.',['This is mine book.','This is me book.'],1],['The book is mine.',['The book is my.','The book is the mine.'],1],["That is Tom's bike.",["That is Toms bike.","That is Tom bike."],1],["These are the girls' bags.",["These are the girls bags.","These are the girl's bags."],2],["The dog wags its tail.",["The dog wags it's tail.","The dog wags his' tail."],3]],errWhy:W.a,
  slides:()=>[
   slide(L('Möglichkeiten, Besitz zu zeigen','Ways to show ownership'),
    SL.p(L('Im Englischen zeigt man Besitz mit <b>Possessivbegleitern</b> (my, your …), <b>Possessivpronomen</b> (mine, yours …) und mit <b>\'s</b>.','English shows ownership with <b>possessive adjectives</b> (my, your …), <b>possessive pronouns</b> (mine, yours …) and with <b>\'s</b>.'))+SL.ex(['This is <b>my</b> book.','The book is <b>mine</b>.',"That is <b>Tom's</b> bike."])),
   slide(L('my oder mine?','my or mine?'),
    SL.tbl([L('Person','Person'),L('+ Nomen','+ noun'),L('allein','alone')],[['I','my','mine'],['you','your','yours'],['he','his','his'],['she','her','hers'],['it','its','–'],['we','our','ours'],['they','their','theirs']])+SL.warn(L('<b>my</b> steht immer vor einem Nomen. <b>mine</b> steht allein: <i>This is my book. – The book is mine.</i> Nicht: <s>the mine</s>. Auch nicht <s>This is mine book</s>.','<b>my</b> always goes before a noun. <b>mine</b> stands alone: <i>This is my book. – The book is mine.</i> Not: <s>the mine</s>.'))),
   slide("whose?",
    SL.p(L('Mit <b>whose</b> fragt man nach dem Besitzer.','Ask about the owner with <b>whose</b>.'))+SL.ex(["<b>Whose</b> book is this? – It's mine.","<b>Whose</b> shoes are these? – They are Tom's."])+SL.err([["Who's bag is this?","Whose bag is this?"]])),
   slide("'s / s'",
    SL.tbl([L('Wann','When'),L('Form','Form'),L('Beispiel','Example')],[[L('eine Person','one person'),"+ <b>'s</b>","my <b>father's</b> car · <b>Tom's</b> bike"],[L('mehrere Personen (Plural auf -s)','several people (plural ending in -s)'),"+ <b>'</b>","the <b>boys'</b> room · my <b>sisters'</b> books"],[L('Plural ohne -s','plural without -s'),"+ <b>'s</b>","the <b>children's</b> toys"]])+SL.tip(L('Bei Dingen nimmt man oft <b>of</b>: <i>the door of the car</i>.','For things we often use <b>of</b>: <i>the door of the car</i>.'))),
   slide("its ≠ it's",
    SL.tbl(['',L('Bedeutung','Meaning'),L('Beispiel','Example')],[["<b>its</b>",L('sein / ihr (Besitz, Tier / Ding)','its (ownership)'),'The dog wags <b>its</b> tail.'],["<b>it's</b>",'it is / it has',"<b>It's</b> cold today."]])),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['This is mine book.','This is my book.'],['The book is my.','The book is mine.'],["Who's bag is this?","Whose bag is this?"],['The dog wags it\'s tail.','The dog wags its tail.'],["the boy's room (3 boys)","the boys' room"]])),
   tryS(L('Übung: Besitz','Exercise: ownership'),()=>[['Is this ___ pen? (you)','your'],['That is not your pen. It is ___.','mine'],['___ shoes are these?','Whose'],['This is my ___ car. (my father)',"father's"],['The dog is wagging ___ tail.','its'],['Our house is big, but ___ is bigger. (they)','theirs']])
  ]});
})());
