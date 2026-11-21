/* Linking words: so / because, although / however, Reihenfolge-Wörter, who / which */
TOPICS.push((()=>{
 const W={so:'because nennt den Grund (A, weil B). so nennt die Folge (A, deshalb B).|because gives the reason (A, because B). so gives the result (A, so B).',
  al:'although = obwohl (Nebensatz), however = trotzdem / aber (neuer Satz, mit Komma danach), but = aber, and = und.|although = even though (subordinate clause), however = but / still (new sentence, comma after it), but = but, and = and.',
  sq:'Reihenfolge: first, then / next, after that, finally.|Order: first, then / next, after that, finally.',
  rel:'who für Personen, which für Dinge, that für beides.|who for people, which for things, that for both.'};
 const B=(s,ok,bad,lv,sb,h)=>BK(s,ok,bad,lv,sb||'',h||'');
 const bank=[
  B("It was raining, ___ we stayed at home.",['so'],['because','although'],1,'so'),
  B("We stayed at home ___ it was raining.",['because'],['so','although'],1,'so'),
  B("I was tired, ___ I went to bed early.",['so'],['because','however'],1,'so'),
  B("He went to bed early ___ he was tired.",['because'],['so','however'],1,'so'),
  B("She didn't pass ___ she hadn't studied.",['because'],['so','although'],2,'so'),
  B("She hadn't studied, ___ she didn't pass.",['so'],['because','although'],2,'so'),
  B("I like tea ___ I don't like coffee.",['but'],['because','so'],1,'al'),
  B("She plays the piano ___ she sings.",['and'],['however','although'],1,'al'),
  B("___ it was cold, we went swimming.",['Although','Though'],['Because','So'],2,'al'),
  B("___ he was ill, he went to school.",['Although','Though'],['Because','So'],2,'al'),
  B("She is very rich. ___, she isn't happy.",['However'],['Although','Because'],2,'al'),
  B("The film was long. ___, it was great.",['However'],['Although','Because'],2,'al'),
  B("He studied hard. ___, he failed the test.",['However'],['Although','So'],3,'al'),
  B("___ she studied hard, she failed the test.",['Although'],['However','So'],3,'al'),
  B("First, I got up. ___ I had breakfast.",['Then','Next','After that'],['Because','Although'],1,'sq'),
  B("___, mix the flour and the eggs. Then add the milk.",['First','First of all'],['Finally','However'],1,'sq'),
  B("Add the milk. ___, bake the cake for 30 minutes.",['Finally','After that','Then','Next'],['However','Because'],2,'sq'),
  B("I had breakfast, brushed my teeth and, ___, left home.",['finally'],['however','because'],2,'sq'),
  B("She lives in a flat ___ is very small.",['which','that'],['who','whose'],2,'rel'),
  B("The boy ___ lives next door is my friend.",['who','that'],['which','whose'],1,'rel'),
  B("That's the teacher ___ taught me English.",['who','that'],['which','whose'],2,'rel'),
  B("I read a book ___ was about the Titanic.",['which','that'],['who','whose'],2,'rel')
 ];
 return bankTopic({id:'lw',grp:'verben',ord:120,ic:'🔗',de:'Verbindungswörter (linking words)',en:'Linking words',desc:'so · because · although · however · first, then, finally · who, which',
  fillInstr:()=>L('Setze das passende Verbindungswort ein.','Fill in the correct linking word.'),
  fillDesc:()=>L('das passende Wort schreiben','write the right word'),
  lvDe:'C: so, because, and, but, first / then. B: dazu although, however und who / which. A: dazu schwierigere Sätze.',lvEn:'C: so, because, and, but, first / then. B: plus although, however and who / which. A: plus harder sentences.',
  subs:()=>[{k:'so',n:'so / because'},{k:'al',n:'although / however / but'},{k:'sq',n:L('Reihenfolge','Sequence')},{k:'rel',n:'who / which'}],
  why:W,bank,
  err:[["It was raining, so we stayed at home.",["It was raining, because we stayed at home.","It was raining, however we stayed at home."],1],["Although it was cold, we went swimming.",["Although it was cold, but we went swimming.","Because it was cold, we went swimming."],2],["She is rich. However, she isn't happy.",["She is rich. Although, she isn't happy.","She is rich. Because, she isn't happy."],2],["The boy who lives next door is my friend.",["The boy which lives next door is my friend.","The boy whose lives next door is my friend."],1]],
  errWhy:'although = Nebensatz (ohne but). however = neuer Satz mit Komma. because = Grund, so = Folge.|although = subordinate clause (no but). however = new sentence with a comma. because = reason, so = result.',
  slides:()=>[
   slide(L('so und because','so and because'),
    SL.tbl([L('Wort','Word'),L('Bedeutung','Meaning'),L('Beispiel','Example')],[['<b>because</b>',L('weil (Grund)','because (reason)'),'We stayed at home <b>because</b> it was raining.'],['<b>so</b>',L('deshalb (Folge)','so (result)'),'It was raining, <b>so</b> we stayed at home.']])+SL.tip(L('Grund → <b>because</b>. Folge → <b>so</b>. Beide Sätze sagen dasselbe, nur in anderer Reihenfolge.','Reason → <b>because</b>. Result → <b>so</b>. Both sentences say the same, in a different order.'))),
   slide(L('although, however, but, and','although, however, but, and'),
    SL.tbl([L('Wort','Word'),L('Bedeutung','Meaning'),L('Beispiel','Example')],[['<b>and</b>',L('und','and'),'She plays the piano <b>and</b> she sings.'],['<b>but</b>',L('aber','but'),'I like tea <b>but</b> I don\'t like coffee.'],['<b>although</b>',L('obwohl','although'),'<b>Although</b> it was cold, we went swimming.'],['<b>however</b>',L('trotzdem, jedoch','however'),'She is rich. <b>However</b>, she isn\'t happy.']])+SL.warn(L('<b>although</b> und <b>but</b> nie zusammen: <s>Although it was cold, but we …</s>','Never <b>although</b> and <b>but</b> together: <s>Although it was cold, but we …</s>'))),
   slide(L('Reihenfolge: first, then, finally','Sequence: first, then, finally'),
    SL.ul([L('<b>First</b> / <b>First of all</b> – zuerst','<b>First</b> / <b>First of all</b>'),L('<b>Then</b> / <b>Next</b> / <b>After that</b> – dann','<b>Then</b> / <b>Next</b> / <b>After that</b>'),L('<b>Finally</b> / <b>Last</b> – am Schluss','<b>Finally</b> / <b>Last</b>')])+SL.ex(['<b>First</b>, mix the flour and the eggs. <b>Then</b> add the milk. <b>Finally</b>, bake the cake.'])+SL.tip(L('Gut für Rezepte, Anleitungen und Erzählungen.','Good for recipes, instructions and stories.'))),
   slide(L('who und which','who and which'),
    SL.tbl([L('Wort','Word'),L('für','for'),L('Beispiel','Example')],[['<b>who</b>',L('Personen','people'),'The boy <b>who</b> lives next door is my friend.'],['<b>which</b>',L('Dinge','things'),'She lives in a flat <b>which</b> is very small.'],['<b>that</b>',L('beides','both'),'The book <b>that</b> I read was great.']])),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['It was raining, because we stayed at home.','It was raining, so we stayed at home.'],['Although it was cold, but we swam.','Although it was cold, we swam.'],['She is rich. Although, she isn\'t happy.','She is rich. However, she isn\'t happy.']])),
   tryS(L('Übung','Exercise'),()=>[['I was tired, ___ I went to bed.','so'],['We stayed in ___ it was raining.','because'],['___ it was cold, we went swimming.','Although'],['She is rich. ___, she isn\'t happy.','However'],['The girl ___ lives here is my friend.','who / that']])
  ]});
})());
