/* Aufgabenform «Umformen» (rewrite): ein Satz wird nach Vorgabe umgeschrieben.
   Eintrag: [Satz, Vorgabe, [richtige Antworten], Niveau 1–3]. Mehrere Antworten = mehrere richtige Schreibweisen (don't / do not usw.). */
(function(){
 const lv=()=>S.lvl==='A'?3:S.lvl==='B'?2:1;
 const I={
  q:['Mache daraus eine Frage.','Make a question.'],
  n:['Verneine den Satz.','Make the sentence negative.'],
  ps:['Schreibe den Satz im Past Simple.','Write the sentence in the Past Simple.'],
  pc:['Schreibe den Satz im Present Continuous.','Write the sentence in the Present Continuous.'],
  pas:['Schreibe den Satz im Passiv.','Write the sentence in the passive.'],
  rep:['Schreibe den Satz in der indirekten Rede.','Write the sentence in reported speech.'],
  cl:['Beginne den Satz mit «If».','Begin the sentence with «If».'],
  t2:['Schreibe den Satz als If-Satz Typ 2 (unreal).','Write the sentence as a type 2 if-sentence (unreal).'],
  cmp2:['Schreibe den Satz mit «No other …», die Bedeutung bleibt gleich.','Rewrite the sentence with «No other …». The meaning stays the same.'],
  cmp:['Schreibe den Satz mit dem gegenteiligen Vergleich, die Bedeutung bleibt gleich.','Rewrite the sentence with the opposite comparison. The meaning stays the same.']
 };
 const D={
  zbe:{w:['Bei «be» wird die Frage durch Umstellen gebildet (Is she …?), die Verneinung mit not. Past: am/is → was, are → were.','With «be» a question is made by swapping (Is she …?), the negative with not. Past: am/is → was, are → were.'],b:[
   ['She is a nurse.','q',['Is she a nurse?'],1],
   ['They are late.','n',['They are not late.','They aren\'t late.','They\'re not late.'],1],
   ['He was at home.','q',['Was he at home?'],1],
   ['We were in Rome.','n',['We were not in Rome.','We weren\'t in Rome.'],2],
   ['I am from Spain.','n',['I am not from Spain.','I\'m not from Spain.'],1],
   ['It is cold in the morning.','ps',['It was cold in the morning.'],2]]},
  zps:{w:['Present Simple: Frage mit do / does + Grundform, Verneinung mit don\'t / doesn\'t + Grundform. In der 3. Person verschwindet das -s.','Present Simple: questions with do / does + base form, negatives with don\'t / doesn\'t + base form. In the 3rd person the -s disappears.'],b:[
   ['She plays tennis.','q',['Does she play tennis?'],1],
   ['They live in Bern.','q',['Do they live in Bern?'],1],
   ['He likes pizza.','n',['He doesn\'t like pizza.','He does not like pizza.'],1],
   ['We watch TV in the evening.','n',['We don\'t watch TV in the evening.','We do not watch TV in the evening.'],2],
   ['My sister speaks French.','q',['Does my sister speak French?'],2],
   ['Tom goes to school by bike.','ps',['Tom went to school by bike.'],3]]},
  zpas:{w:['Past Simple: Frage mit did + Grundform, Verneinung mit didn\'t + Grundform. Das Verb steht dann nicht mehr in der Past-Form.','Past Simple: questions with did + base form, negatives with didn\'t + base form. The verb is then no longer in the past form.'],b:[
   ['She visited her aunt.','q',['Did she visit her aunt?'],1],
   ['They played football.','n',['They didn\'t play football.','They did not play football.'],1],
   ['He bought a new bike.','q',['Did he buy a new bike?'],2],
   ['We saw a film.','n',['We didn\'t see a film.','We did not see a film.'],2],
   ['She cooks dinner every day.','ps',['She cooked dinner every day.'],1]]},
  zpc:{w:['Present Continuous: am / is / are + Verb mit -ing. Frage durch Umstellen, Verneinung mit not.','Present Continuous: am / is / are + verb with -ing. Questions by swapping, negatives with not.'],b:[
   ['He is reading a book.','q',['Is he reading a book?'],1],
   ['They are playing outside.','n',['They are not playing outside.','They aren\'t playing outside.','They\'re not playing outside.'],1],
   ['She plays the piano.','pc',['She is playing the piano.','She\'s playing the piano.'],2],
   ['I eat lunch.','pc',['I am eating lunch.','I\'m eating lunch.'],2],
   ['We are watching TV.','n',['We are not watching TV.','We aren\'t watching TV.','We\'re not watching TV.'],2]]},
  zpf:{w:['Present Perfect: have / has + 3. Form. Frage durch Umstellen (Has she …?), Verneinung mit not (haven\'t / hasn\'t).','Present Perfect: have / has + past participle. Questions by swapping (Has she …?), negatives with not (haven\'t / hasn\'t).'],b:[
   ['She has finished her homework.','q',['Has she finished her homework?'],1],
   ['They have seen the film.','n',['They have not seen the film.','They haven\'t seen the film.'],1],
   ['He has lost his keys.','n',['He has not lost his keys.','He hasn\'t lost his keys.'],2],
   ['You have been to London.','q',['Have you been to London?'],2]]},
  zfut:{w:['will + Grundform: Frage durch Umstellen (Will it …?), Verneinung won\'t / will not. Bei going to wird «be» umgestellt oder verneint.','will + base form: questions by swapping (Will it …?), negatives won\'t / will not. With going to the verb «be» is swapped or negated.'],b:[
   ['It will rain tomorrow.','q',['Will it rain tomorrow?'],1],
   ['She will come to the party.','n',['She will not come to the party.','She won\'t come to the party.'],1],
   ['We are going to visit Rome.','q',['Are we going to visit Rome?'],2],
   ['They are going to win.','n',['They are not going to win.','They aren\'t going to win.','They\'re not going to win.'],2]]},
  pv:{w:['Passiv: Das Objekt des Aktivsatzes wird Subjekt. Present: am / is / are + 3. Form. Past: was / were + 3. Form. «by …» steht nur, wenn die handelnde Person wichtig ist.','Passive: the object of the active sentence becomes the subject. Present: am / is / are + past participle. Past: was / were + past participle. «by …» is only added if the person doing the action matters.'],b:[
   ['They clean the classroom every day.','pas',['The classroom is cleaned every day.'],1],
   ['Tom wrote this letter.','pas',['This letter was written by Tom.'],1],
   ['Someone stole my bike last night.','pas',['My bike was stolen last night.'],1],
   ['People speak German in Austria.','pas',['German is spoken in Austria.'],2],
   ['They build many houses in this area.','pas',['Many houses are built in this area.'],2],
   ['A famous artist painted this picture.','pas',['This picture was painted by a famous artist.'],2],
   ['The mechanic repaired the car yesterday.','pas',['The car was repaired by the mechanic yesterday.','The car was repaired yesterday by the mechanic.','The car was repaired yesterday.'],2],
   ['The children ate all the cake.','pas',['All the cake was eaten by the children.','All the cake was eaten.'],2],
   ['Do they sell stamps here?','pas',['Are stamps sold here?'],3],
   ['Did the teacher check the tests?','pas',['Were the tests checked by the teacher?','Were the tests checked?'],3],
   ['They don\'t allow dogs in the shop.','pas',['Dogs are not allowed in the shop.','Dogs aren\'t allowed in the shop.'],3],
   ['My parents didn\'t invite me.','pas',['I was not invited by my parents.','I wasn\'t invited by my parents.','I was not invited.','I wasn\'t invited.'],3]]},
  k:{w:['If-Satz Typ 1: If + Present Simple, will + Grundform. Steht der If-Teil vorn, folgt ein Komma. «unless» heisst «if … not».','Type 1 if-sentence: If + Present Simple, will + base form. If the if-part comes first, a comma follows. «unless» means «if … not».'],b:[
   ['I will help you if you ask me.','cl',['If you ask me, I will help you.','If you ask me, I\'ll help you.'],1],
   ['We will go to the park if the weather is nice.','cl',['If the weather is nice, we will go to the park.','If the weather is nice, we\'ll go to the park.'],1],
   ['She will be happy if she wins.','cl',['If she wins, she will be happy.','If she wins, she\'ll be happy.'],1],
   ['Study hard or you will fail the test.','cl',['If you don\'t study hard, you will fail the test.','If you do not study hard, you will fail the test.'],2],
   ['You will miss the bus unless you hurry.','cl',['If you don\'t hurry, you will miss the bus.','If you do not hurry, you will miss the bus.'],3]]},
  c2:{w:['If-Satz Typ 2: If + Past Simple, would + Grundform. Bei «be» ist were für alle Personen üblich, was ist in der Umgangssprache auch möglich.','Type 2 if-sentence: If + Past Simple, would + base form. With «be», were is usual for all persons; was is also possible in everyday speech.'],b:[
   ['I would travel the world if I had a lot of money.','cl',['If I had a lot of money, I would travel the world.','If I had a lot of money, I\'d travel the world.'],1],
   ['She would buy a dog if she had a garden.','cl',['If she had a garden, she would buy a dog.','If she had a garden, she\'d buy a dog.'],1],
   ['If it rains, we will stay at home.','t2',['If it rained, we would stay at home.','If it rained, we\'d stay at home.'],2],
   ['If I am rich, I will buy a boat.','t2',['If I were rich, I would buy a boat.','If I was rich, I would buy a boat.','If I were rich, I\'d buy a boat.','If I was rich, I\'d buy a boat.'],3],
   ['If he studies more, he will pass the exam.','t2',['If he studied more, he would pass the exam.','If he studied more, he\'d pass the exam.'],3]]},
  ir:{w:['Indirekte Rede: Das Verb rutscht eine Zeit zurück (am → was, play → played, have lost → had lost, will → would, can → could). Pronomen und Zeitangaben passen sich an (tomorrow → the next day, yesterday → the day before).','Reported speech: the verb moves one tense back (am → was, play → played, have lost → had lost, will → would, can → could). Pronouns and time words change (tomorrow → the next day, yesterday → the day before).'],b:[
   ['Tom said: “I am tired.”','rep',['Tom said he was tired.','Tom said that he was tired.'],1],
   ['Anna said: “I live in Bern.”','rep',['Anna said she lived in Bern.','Anna said that she lived in Bern.'],1],
   ['They said: “We like pizza.”','rep',['They said they liked pizza.','They said that they liked pizza.'],1],
   ['Max said: “I have lost my key.”','rep',['Max said he had lost his key.','Max said that he had lost his key.'],2],
   ['She said: “I am playing tennis.”','rep',['She said she was playing tennis.','She said that she was playing tennis.'],2],
   ['He said: “I will call Anna.”','rep',['He said he would call Anna.','He said that he would call Anna.'],2],
   ['Lisa said: “I can\'t come tomorrow.”','rep',['Lisa said she couldn\'t come the next day.','Lisa said she could not come the next day.','Lisa said that she couldn\'t come the next day.','Lisa said that she could not come the next day.','Lisa said she couldn\'t come the following day.','Lisa said she could not come the following day.','Lisa said that she couldn\'t come the following day.','Lisa said that she could not come the following day.'],3],
   ['Ben said: “I bought a new phone yesterday.”','rep',['Ben said he had bought a new phone the day before.','Ben said that he had bought a new phone the day before.','Ben said he had bought a new phone the previous day.','Ben said that he had bought a new phone the previous day.'],3]]},
  ia:{w:['Aufforderungen: told / asked + Person + (not) to + Grundform. Befehle mit told, höfliche Bitten (please) mit asked.','Requests and orders: told / asked + person + (not) to + base form. Orders use told, polite requests (please) use asked.'],b:[
   ['The teacher said to the class: “Open your books.”','rep',['The teacher told the class to open their books.'],1],
   ['Mum said to Tom: “Don\'t be late.”','rep',['Mum told Tom not to be late.'],1],
   ['Tom said to Mia: “Please close the window.”','rep',['Tom asked Mia to close the window.'],1],
   ['Sara said to Ben: “Please help me.”','rep',['Sara asked Ben to help her.'],2],
   ['The guard said to the visitors: “Don\'t touch the machine!”','rep',['The guard told the visitors not to touch the machine.'],2],
   ['Dad said to us: “Please don\'t make noise.”','rep',['Dad asked us not to make noise.'],3]]},
  iq:{w:['Indirekte Fragen: Es gibt keine Umstellung und kein do / does / did mehr. Ja/Nein-Fragen mit if oder whether, W-Fragen mit dem Fragewort. Das Verb rutscht eine Zeit zurück.','Reported questions: no swapping and no do / does / did any more. Yes/no questions use if or whether, wh-questions keep the question word. The verb moves one tense back.'],b:[
   ['Anna asked Tom: “Do you like football?”','rep',['Anna asked Tom if he liked football.','Anna asked Tom whether he liked football.'],1],
   ['Tom asked Mia: “Where do you live?”','rep',['Tom asked Mia where she lived.'],1],
   ['Ben asked Lena: “Are you hungry?”','rep',['Ben asked Lena if she was hungry.','Ben asked Lena whether she was hungry.'],1],
   ['Mia asked Tom: “Can you swim?”','rep',['Mia asked Tom if he could swim.','Mia asked Tom whether he could swim.'],2],
   ['The teacher asked Max: “What did you do yesterday?”','rep',['The teacher asked Max what he had done the day before.','The teacher asked Max what he had done the previous day.'],3],
   ['Lisa asked Paul: “Have you finished your homework?”','rep',['Lisa asked Paul if he had finished his homework.','Lisa asked Paul whether he had finished his homework.'],3]]},
  c:{w:['Vergleiche lassen sich umdrehen: A is taller than B = B is not as tall as A = B is shorter than A.','Comparisons can be turned around: A is taller than B = B is not as tall as A = B is shorter than A.'],b:[
   ['A car is faster than a bike.','cmp',['A bike is slower than a car.','A bike is not as fast as a car.','A bike isn\'t as fast as a car.'],1],
   ['Tom is taller than Max.','cmp',['Max is shorter than Tom.','Max is not as tall as Tom.','Max isn\'t as tall as Tom.'],1],
   ['This book is more interesting than that book.','cmp',['That book is less interesting than this book.','That book is not as interesting as this book.','That book isn\'t as interesting as this book.'],2],
   ['Anna is the tallest girl in the class.','cmp2',['No other girl in the class is taller than Anna.','No other girl in the class is as tall as Anna.'],3]]}
 };
 const RW=()=>({k:'rewrite',icon:'🔄',label:L('Umformen','Rewrite'),desc:L('den Satz nach Vorgabe umschreiben','rewrite the sentence as asked')});
 for(const id in D){
  const t=TOPICS.find(x=>x.id===id);if(!t||!t.gen||!t.types)continue;
  const d=D[id],old=t.types;
  t.types=()=>old().concat([RW()]);
  t.gen.rewrite=()=>{
   const p=d.b.filter(x=>x[3]<=lv()),b=rnd(p.length?p:d.b);
   return mkText(b[0],L(I[b[1]][0],I[b[1]][1]),b[2],d.w[LANG==='de'?0:1]);
  };
 }
 window.UMFORMEN_DATA=D;
})();
