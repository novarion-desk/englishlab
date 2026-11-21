/* Question tags */
TOPICS.push((()=>{
 const W={_:'Positive Aussage → verneinter Tag (isn\'t it?). Verneinte Aussage → positiver Tag (is it?). Der Tag wiederholt das Hilfsverb; ohne Hilfsverb steht do / does / did.|Positive statement → negative tag (isn\'t it?). Negative statement → positive tag (is it?). The tag repeats the auxiliary; with no auxiliary use do / does / did.'};
 const B=(s,ok,bad,lv)=>BK(s,ok,bad,lv,'');
 const bank=[
  B('You are a student, ___?',["aren't you"],['are you',"don't you","isn't you"],1),
  B('He likes pizza, ___?',["doesn't he"],['does he',"don't he","isn't he"],1),
  B('They play football, ___?',["don't they"],['do they',"doesn't they","aren't they"],1),
  B('It is cold today, ___?',["isn't it"],['is it',"doesn't it","isn't he"],1),
  B('We can go now, ___?',["can't we"],['can we',"don't we","aren't we"],1),
  B('She is not late, ___?',['is she'],["isn't she",'does she',"doesn't she"],1),
  B("You don't know him, ___?",['do you'],["don't you",'are you',"aren't you"],1),
  B("He doesn't live here, ___?",['does he'],["doesn't he",'do he','is he'],1),
  B('Tom went to Bern, ___?',["didn't he"],['did he',"doesn't he","wasn't he"],2),
  B("You didn't call her, ___?",['did you'],["didn't you",'do you','were you'],2),
  B('They were at home, ___?',["weren't they"],['were they',"didn't they","wasn't they"],2),
  B('You will help me, ___?',["won't you"],['will you',"don't you","aren't you"],2),
  B("They won't come, ___?",['will they'],["won't they",'do they','would they'],2),
  B('We should leave, ___?',["shouldn't we"],['should we',"don't we","wouldn't we"],2),
  B('She has finished, ___?',["hasn't she"],['has she',"doesn't she","isn't she"],3),
  B('I am right, ___?',["aren't I"],["am I","amn't I","don't I"],3),
  B("Let's go, ___?",['shall we'],["don't we","aren't we","did we"],3),
  B('Open the door, ___?',['will you'],["do you","are you","is it"],3),
  B("There is a problem, ___?",["isn't there"],["isn't it","is there","doesn't there"],3)
 ];
 return bankTopic({id:'t',grp:'verben',ord:50,ic:'🪝',de:'Question tags',en:'Question tags',desc:"It's cold, isn't it? · You don't know him, do you?",
  fillInstr:()=>L('Ergänze den Frageanhang am Satzende.','Complete the question tag at the end.'),
  fillDesc:()=>L('den Frageanhang schreiben','write the tag'),
  lvDe:'C: be, can und einfache Verben im Present. B: dazu Past simple und will. A: dazu have, I am, Let\'s und Befehle.',
  lvEn:'C: be, can and simple present verbs. B: plus past simple and will. A: plus have, I am, Let\'s and commands.',
  why:W,bank,
  err:[["You are tired, aren't you?",["You are tired, are you?","You are tired, don't you?"],1],["He doesn't like fish, does he?",["He doesn't like fish, doesn't he?","He doesn't like fish, is he?"],1],["They went home, didn't they?",["They went home, did they?","They went home, weren't they?"],2],["She can swim, can't she?",["She can swim, can she?","She can swim, doesn't she?"],2],["I am late, aren't I?",["I am late, am I?","I am late, amn't I?"],3]],errWhy:W._,
  slides:()=>[
   slide(L('Die Idee','The idea'),
    SL.p(L('Ein <b>question tag</b> ist eine kurze Frage am Satzende. Man benutzt sie, wenn man etwas <b>bestätigen</b> lassen oder eine Antwort erwartet: «…, nicht wahr?»','A <b>question tag</b> is a short question at the end of a sentence. We use it to <b>check</b> something or to invite agreement: “…, isn’t it?”'))+SL.ex(["It's cold today, <b>isn't it</b>?","You don't know him, <b>do you</b>?"])),
   slide(L('Die Regel: Gegensätze','The rule: opposites'),
    SL.tbl([L('Aussage','Statement'),L('Tag','Tag'),L('Beispiel','Example')],[[L('positiv (+)','positive (+)'),L('negativ (−)','negative (−)'),"She <b>is</b> from Spain, <b>isn't she</b>?"],[L('negativ (−)','negative (−)'),L('positiv (+)','positive (+)'),"She <b>isn't</b> late, <b>is she</b>?"]])+SL.tip(L('Positiv → negativ, negativ → positiv. Der Tag ist immer verneint ODER positiv, nie beides gleich.','Positive → negative, negative → positive.'))),
   slide(L('Welches Hilfsverb?','Which auxiliary?'),
    SL.tbl([L('Im Satz','In the sentence'),L('Im Tag','In the tag')],[['am / is / are','isn\'t it? · aren\'t you?'],['can, will, should, must','can\'t we? · won\'t you? · shouldn\'t we?'],['Present simple','don\'t / doesn\'t: <i>They play, don\'t they?</i>'],['Past simple','didn\'t: <i>Tom went, didn\'t he?</i>'],['has / have + Partizip','hasn\'t / haven\'t: <i>She has finished, hasn\'t she?</i>']])+SL.p(L('Das Pronomen im Tag passt zum Subjekt: Tom → he, my parents → they, the book → it, there → there.','The pronoun in the tag matches the subject: Tom → he, my parents → they, the book → it, there → there.'))),
   slide(L('Sonderfälle','Special cases'),
    SL.tbl([L('Satz','Sentence'),L('Tag','Tag')],[['I am right,','<b>aren\'t I</b>?'],["Let's go,",'<b>shall we</b>?'],['Open the door,','<b>will you</b>?'],['There is a problem,','<b>isn\'t there</b>?']])),
   slide(L('Intonation','Intonation'),
    SL.p(L('<b>Stimme geht runter ↘</b>: Ich bin mir fast sicher und will nur zustimmen lassen. <b>Stimme geht hoch ↗</b>: Ich bin wirklich nicht sicher und frage.','<b>Voice goes down ↘</b>: I am nearly sure and want agreement. <b>Voice goes up ↗</b>: I am really not sure and I am asking.'))+SL.ex(["It's a nice day, isn't it? ↘","You haven't seen my keys, have you? ↗"]),
    L('Beide Varianten vorsprechen und nachsprechen lassen.','Say both versions and let students repeat them.')),
   slide(L('Typische Fehler','Typical mistakes'),SL.err([['You are tired, are you?',"You are tired, aren't you?"],["He likes pizza, isn't he?","He likes pizza, doesn't he?"],["She can swim, doesn't she?","She can swim, can't she?"],["I am late, am I?","I am late, aren't I?"]])),
   tryS(L('Übung: Frageanhänge','Exercise: tags'),()=>[['You are a student, ___?',"aren't you"],['He likes pizza, ___?',"doesn't he"],['She is not late, ___?','is she'],['Tom went to Bern, ___?',"didn't he"],['You will help me, ___?',"won't you"],["Let's go, ___?",'shall we']])
  ]});
})());
