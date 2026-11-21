/* Relative pronouns */
TOPICS.push((()=>{
 const W={_:'who / that für Personen, which / that für Dinge, whose = dessen / deren. Bei Zusatzinformation mit Komma nur who / which.|who / that for people, which / that for things, whose = of whom. With extra information in commas use only who / which.'};
 const B=(s,ok,bad,lv)=>BK(s,ok,bad,lv,'');
 const bank=[
  B('The girl ___ lives next door is my friend.',['who','that'],['which','what'],1),
  B('The book ___ I am reading is great.',['which','that'],['who','what'],1),
  B('A teacher is a person ___ works at a school.',['who','that'],['which','what'],1),
  B('This is the phone ___ I bought yesterday.',['which','that'],['who','what'],1),
  B('The man ___ is standing there is my uncle.',['who','that'],['which','what'],1),
  B('Do you know the boy ___ is wearing a blue jacket?',['who','that'],['which','what'],1),
  B('A kettle is a thing ___ heats water.',['which','that'],['who','what'],1),
  B('Zurich is a city ___ is very expensive.',['which','that'],['who','where'],2),
  B('The students ___ passed the test were happy.',['who','that'],['which','what'],2),
  B('The film ___ we saw last night was boring.',['which','that'],['who','what'],2),
  B('I like people ___ make me laugh.',['who','that'],['which','what'],2),
  B('She has a dog ___ is very big.',['which','that'],['who','what'],2),
  B('Anna, ___ is my best friend, lives in Bern.',['who'],['that','which'],3),
  B('My bike, ___ is red, is new.',['which'],['that','who'],3),
  B('The woman ___ car was stolen called the police.',['whose'],['who','which'],3),
  B('I have a friend ___ father is a pilot.',['whose'],['who','which'],3)
 ];
 return bankTopic({id:'r',grp:'nomen',ord:50,ic:'🔗',de:'Relativpronomen',en:'Relative pronouns',desc:'who · which · that · whose',
  fillInstr:()=>L('Setze das passende Relativpronomen ein.','Fill in the correct relative pronoun.'),
  lvDe:'C: who und which in einfachen Sätzen. B: dazu that. A: dazu Zusatzinformation mit Komma und whose.',lvEn:'C: who and which in simple sentences. B: plus that. A: plus extra information in commas and whose.',
  why:W,bank,
  err:[['This is the girl who lives here.',['This is the girl which lives here.','This is the girl what lives here.'],1],['I like the book that you gave me.',['I like the book who you gave me.','I like the book what you gave me.'],1],['A kettle is a thing which heats water.',['A kettle is a thing who heats water.','A kettle is a thing it heats water.'],2],['The woman whose car was stolen called the police.',['The woman who car was stolen called the police.','The woman which car was stolen called the police.'],3]],errWhy:W._,
  slides:()=>[
   slide(L('Was ist ein Relativsatz?','What is a relative clause?'),
    SL.p(L('Ein <b>Relativsatz</b> gibt mehr Information über ein Nomen. Er beginnt mit einem <b>Relativpronomen</b>.','A <b>relative clause</b> gives more information about a noun. It starts with a <b>relative pronoun</b>.'))+SL.ex(['The girl <b>who lives next door</b> is my friend.','The book <b>which I am reading</b> is great.'])),
   slide(L('who, which, that, whose','who, which, that, whose'),
    SL.tbl([L('Wort','Word'),L('für','for'),L('Beispiel','Example')],[['<b>who</b>',L('Personen','people'),'A teacher is a person <b>who</b> works at a school.'],['<b>which</b>',L('Dinge, Tiere','things, animals'),'This is the phone <b>which</b> I bought.'],['<b>that</b>',L('Personen und Dinge','people and things'),'The man <b>that</b> is standing there… / The film <b>that</b> we saw…'],['<b>whose</b>',L('Besitz (dessen, deren)','ownership'),'The woman <b>whose</b> car was stolen…']])+SL.warn(L('Nie <s>what</s>: <s>the book what I read</s>.','Never <s>what</s>: <s>the book what I read</s>.'))),
   slide(L('Mit oder ohne Komma','With or without commas'),
    SL.p(L('<b>Wichtige Information</b> (ohne sie fehlt etwas): kein Komma, <b>that</b> ist möglich.<br><b>Zusatzinformation</b> (nur nebenbei): Kommas, nur <b>who / which</b>.','<b>Essential information</b> (the sentence needs it): no commas, <b>that</b> is possible.<br><b>Extra information</b>: commas, only <b>who / which</b>.'))+SL.ex(['The girl <b>who lives next door</b> is my friend.','Anna, <b>who is my best friend</b>, lives in Bern.','My bike, <b>which is red</b>, is new.'])),
   slide(L('Das Pronomen weglassen','Leaving the pronoun out'),
    SL.p(L('Ist das Relativpronomen <b>Objekt</b> im Relativsatz, darf es wegfallen:','If the relative pronoun is the <b>object</b> in the clause, you can leave it out:'))+SL.ex(['The book (which) I am reading is great.','The film (that) we saw was boring.'])+SL.warn(L('Ist es <b>Subjekt</b>, muss es bleiben: <i>The girl who lives next door</i>.','If it is the <b>subject</b> it must stay: <i>The girl who lives next door</i>.'))),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['The book what I read is good.','The book which / that I read is good.'],['The girl which lives here is nice.','The girl who lives here is nice.'],['The woman who car was stolen…','The woman whose car was stolen…']])),
   tryS(L('Übung','Exercise'),()=>[['The girl ___ lives next door is my friend.','who / that'],['The book ___ I am reading is great.','which / that'],['Anna, ___ is my best friend, lives in Bern.','who'],['My bike, ___ is red, is new.','which'],['The woman ___ car was stolen called the police.','whose']])
  ]});
})());
