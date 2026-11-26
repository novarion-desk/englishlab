/* Aufgabenform «Zuordnen» (match): 3 bis 4 Satzteile werden den passenden Gegenstücken zugeordnet.
   Eine Gruppe = ein Auftrag, in der Gruppe ist jede Zuordnung eindeutig. Eintrag: [Niveau 1–3, [[links, rechts], …]] */
(function(){
 const lv=()=>S.lvl==='A'?3:S.lvl==='B'?2:1;
 const ST_=['Ordne die Satzteile einander zu.','Match the sentence parts.'];
 const SQ=['Ordne jeder Aussage die passende Frage zu.','Match each statement with the right question.'];
 const AP=['Ordne jedem Aktivsatz den passenden Passivsatz zu.','Match each active sentence with the right passive sentence.'];
 const RS=['Ordne jedem Originalsatz die passende indirekte Rede zu.','Match each original sentence with the right reported speech.'];
 const D={
  zbe:{i:SQ,w:['Bei «be» wird die Frage durch Umstellen von Subjekt und Verb gebildet.','With «be» a question is made by swapping subject and verb.'],g:[
   [1,[['He is a doctor.','Is he a doctor?'],['They were at school.','Were they at school?'],['I am late.','Am I late?'],['She was ill.','Was she ill?']]],
   [1,[['You are tired.','Are you tired?'],['It was cold.','Was it cold?'],['We are in Bern.','Are we in Bern?'],['Tom is at home.','Is Tom at home?']]]]},
  zps:{i:SQ,w:['Present Simple: Fragen mit do / does + Grundform.','Present Simple: questions with do / does + base form.'],g:[
   [1,[['He plays football.','Does he play football?'],['They live here.','Do they live here?'],['She speaks Italian.','Does she speak Italian?'],['We like fish.','Do we like fish?']]],
   [2,[['My dad works in Zurich.','Does my dad work in Zurich?'],['The children eat lunch at school.','Do the children eat lunch at school?'],['Anna reads a lot.','Does Anna read a lot?'],['You know the answer.','Do you know the answer?']]]]},
  zpas:{i:SQ,w:['Past Simple: Fragen mit did + Grundform.','Past Simple: questions with did + base form.'],g:[
   [1,[['She called Tom.','Did she call Tom?'],['They won the game.','Did they win the game?'],['He lost his keys.','Did he lose his keys?'],['We saw a bear.','Did we see a bear?']]],
   [2,[['The train arrived late.','Did the train arrive late?'],['Lisa bought a new phone.','Did Lisa buy a new phone?'],['You finished the book.','Did you finish the book?'],['The boys broke the window.','Did the boys break the window?']]]]},
  zpc:{i:SQ,w:['Present Continuous: Frage durch Umstellen von am / is / are und Subjekt.','Present Continuous: questions by swapping am / is / are and the subject.'],g:[
   [1,[['He is sleeping.','Is he sleeping?'],['They are cooking.','Are they cooking?'],['I am waiting.','Am I waiting?'],['She is reading.','Is she reading?']]],
   [2,[['The dog is barking.','Is the dog barking?'],['We are learning English.','Are we learning English?'],['You are listening.','Are you listening?'],['Tom is wearing a hat.','Is Tom wearing a hat?']]]]},
  zpf:{i:SQ,w:['Present Perfect: Frage durch Umstellen von have / has und Subjekt.','Present Perfect: questions by swapping have / has and the subject.'],g:[
   [1,[['She has arrived.','Has she arrived?'],['They have eaten.','Have they eaten?'],['He has lost his phone.','Has he lost his phone?'],['We have seen it.','Have we seen it?']]],
   [2,[['Tom has cleaned his room.','Has Tom cleaned his room?'],['You have been to Rome.','Have you been to Rome?'],['The girls have won.','Have the girls won?'],['I have forgotten my keys.','Have I forgotten my keys?']]]]},
  zfut:{i:SQ,w:['Bei will wird die Frage durch Umstellen gebildet (Will it …?), bei going to wird «be» umgestellt.','With will a question is made by swapping (Will it …?), with going to the verb «be» is swapped.'],g:[
   [1,[['It will snow.','Will it snow?'],['They are going to leave.','Are they going to leave?'],['She will win.','Will she win?'],['We are going to start.','Are we going to start?']]],
   [2,[['The match will begin soon.','Will the match begin soon?'],['You are going to help me.','Are you going to help me?'],['Tom will come tomorrow.','Will Tom come tomorrow?'],['I am going to cook.','Am I going to cook?']]]]},
  k:{i:ST_,w:['If-Satz Typ 1: If + Present Simple, will + Grundform. Der Inhalt muss zusammenpassen.','Type 1 if-sentence: If + Present Simple, will + base form. The content has to fit together.'],g:[
   [1,[['If it rains,','we will stay at home.'],['If you study hard,','you will pass the test.'],['If I find your keys,','I will call you.'],['If the sun shines,','we will go to the beach.']]],
   [2,[['If you don\'t hurry,','you will miss the bus.'],['If she eats too much,','she will feel sick.'],['If we leave now,','we will arrive on time.'],['If he forgets his umbrella,','he will get wet.']]],
   [2,[['If Tom invites me,','I will go to his party.'],['If you press this button,','the machine will start.'],['If the shop is closed,','we will buy bread at the bakery.'],['If I have time tomorrow,','I will clean my room.']]],
   [3,[['Unless you hurry,','you will miss the train.'],['Unless it stops raining,','we won\'t play outside.'],['Unless she says sorry,','he won\'t speak to her again.'],['Unless you water the plants,','they will die.']]]]},
  c2:{i:ST_,w:['If-Satz Typ 2: If + Past Simple, would + Grundform. Der Inhalt muss zusammenpassen.','Type 2 if-sentence: If + Past Simple, would + base form. The content has to fit together.'],g:[
   [1,[['If I won the lottery,','I would buy a big house.'],['If I were a bird,','I would fly over the mountains.'],['If she had a dog,','she would walk it every day.'],['If we had a day off,','we would go swimming.']]],
   [2,[['If he knew the answer,','he would tell us.'],['If it were warmer,','we would eat outside.'],['If I were you,','I would say sorry.'],['If they had more money,','they would travel to Japan.']]],
   [3,[['If she didn\'t have homework,','she would watch a film.'],['If I could speak French,','I would live in Paris.'],['If the bus came earlier,','we wouldn\'t be late.'],['If you ate less sugar,','you would feel better.']]]]},
  pv:{i:AP,w:['Passiv: Das Objekt des Aktivsatzes wird Subjekt, dazu be + 3. Form.','Passive: the object of the active sentence becomes the subject, plus be + past participle.'],g:[
   [1,[['Someone stole my wallet.','My wallet was stolen.'],['They sell milk in the shop.','Milk is sold in the shop.'],['A dog bit the postman.','The postman was bitten by a dog.'],['People speak English here.','English is spoken here.']]],
   [2,[['They built the bridge in 1990.','The bridge was built in 1990.'],['The teacher corrects the tests.','The tests are corrected by the teacher.'],['Somebody broke the window.','The window was broken.'],['Our neighbours water the plants.','The plants are watered by our neighbours.']]]]},
  ir:{i:RS,w:['Indirekte Rede: Das Verb rutscht eine Zeit zurück, Pronomen passen sich an.','Reported speech: the verb moves one tense back and pronouns change.'],g:[
   [1,[['“I am hungry,” said Tom.','Tom said he was hungry.'],['“I like music,” said Anna.','Anna said she liked music.'],['“We live in Bern,” said the boys.','The boys said they lived in Bern.'],['“I can swim,” said Lisa.','Lisa said she could swim.']]],
   [2,[['“I have finished,” said Ben.','Ben said he had finished.'],['“I will call Sara,” said Paul.','Paul said he would call Sara.'],['“I am reading a book,” said Mia.','Mia said she was reading a book.'],['“We don\'t like fish,” said the children.','The children said they didn\'t like fish.']]]]},
  ia:{i:RS,w:['Aufforderungen: told / asked + Person + (not) to + Grundform.','Requests and orders: told / asked + person + (not) to + base form.'],g:[
   [1,[['“Open the window!” said the teacher to Tom.','The teacher told Tom to open the window.'],['“Don\'t run!” said Dad to Anna.','Dad told Anna not to run.'],['“Please help me,” said Mia to Ben.','Mia asked Ben to help her.'],['“Please don\'t shout,” said Tom to Max.','Tom asked Max not to shout.']]],
   [2,[['“Don\'t forget the keys,” said Mum to Tom.','Mum told Tom not to forget the keys.'],['“Be quiet!” said the teacher to the class.','The teacher told the class to be quiet.'],['“Please carry my bag,” said Anna to Ben.','Anna asked Ben to carry her bag.'],['“Please don\'t open the door,” said Lisa to Paul.','Lisa asked Paul not to open the door.']]]]},
  iq:{i:RS,w:['Indirekte Fragen: keine Umstellung, kein do / does / did. Ja/Nein-Fragen mit if oder whether, W-Fragen mit dem Fragewort.','Reported questions: no swapping, no do / does / did. Yes/no questions use if or whether, wh-questions keep the question word.'],g:[
   [1,[['“Do you like pizza?” Anna asked Tom.','Anna asked Tom if he liked pizza.'],['“Where do you live?” Tom asked Mia.','Tom asked Mia where she lived.'],['“Are you tired?” Ben asked Lena.','Ben asked Lena if she was tired.'],['“What is your name?” the boy asked the girl.','The boy asked the girl what her name was.']]],
   [2,[['“Can you swim?” Mia asked Tom.','Mia asked Tom if he could swim.'],['“Why are you crying?” Dad asked Sara.','Dad asked Sara why she was crying.'],['“Did you see the film?” Max asked Lisa.','Max asked Lisa if she had seen the film.'],['“When do you start?” Anna asked Ben.','Anna asked Ben when he started.']]]]},
  c:{i:['Ordne jedem Adjektiv die passende Steigerungsform zu.','Match each adjective with the right comparative or superlative.'],w:['Kurze Adjektive: -er / -est. Lange Adjektive: more / most. Unregelmässig: good – better – best, bad – worse – worst.','Short adjectives: -er / -est. Long adjectives: more / most. Irregular: good – better – best, bad – worse – worst.'],g:[
   [1,[['small','smaller'],['good','better'],['interesting','more interesting'],['funny','funnier']]],
   [2,[['big','the biggest'],['good','the best'],['expensive','the most expensive'],['happy','the happiest']]],
   [3,[['bad','worse'],['far','farther / further'],['difficult','more difficult'],['hot','hotter']]]]},
  r:{i:ST_,w:['who = Person, which = Sache, whose = Besitz, where = Ort.','who = person, which = thing, whose = possession, where = place.'],g:[
   [1,[['This is the girl who','lives next door.'],['This is the book which','I borrowed from the library.'],['This is the boy whose','bike was stolen.'],['This is the café where','we met last year.']]],
   [2,[['I know the woman who','teaches French.'],['That is the car which','my uncle bought.'],['He is the man whose','dog barks all night.'],['This is the town where','I was born.']]]]},
  t:{i:['Ordne jedem Satz das passende Frageanhängsel (Question Tag) zu.','Match each sentence with the right question tag.'],w:['Positiver Satz → verneinter Tag, verneinter Satz → positiver Tag. Das Hilfsverb wird wiederholt (bei Present und Past Simple do / does / did).','Positive sentence → negative tag, negative sentence → positive tag. The auxiliary is repeated (do / does / did for Present and Past Simple).'],g:[
   [1,[['You like pizza,','don\'t you?'],['She is tired,','isn\'t she?'],['They went home,','didn\'t they?'],['He can swim,','can\'t he?']]],
   [2,[['We aren\'t late,','are we?'],['She doesn\'t smoke,','does she?'],['They haven\'t called,','have they?'],['He won\'t come,','will he?']]]]},
  lw:{i:ST_,w:['but = Gegensatz, because = Grund, so = Folge, in case = Vorsorge.','but = contrast, because = reason, so = result, in case = precaution.'],g:[
   [1,[['I was tired,','but I kept working.'],['He stayed at home','because he was ill.'],['We took umbrellas','in case it rained.'],['She studied hard,','so she passed the exam.']]]]},
  rf:{i:ST_,w:['Reflexivpronomen: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves.','Reflexive pronouns: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves.'],g:[
   [1,[['I hurt','myself.'],['She looked at','herself in the mirror.'],['They enjoyed','themselves at the party.'],['He taught','himself to play the guitar.']]]]},
  p:{i:['Ordne jedem Verb die passende Präposition mit Ergänzung zu.','Match each verb with the right preposition and its complement.'],w:['Manche Verben verlangen eine feste Präposition, die man als Ganzes lernt.','Some verbs need a fixed preposition that you learn as a whole.'],g:[
   [1,[['listen','to music'],['wait','for the bus'],['laugh','at a joke'],['depend','on the weather']]],
   [2,[['believe','in ghosts'],['belong','to me'],['apologise','for being late'],['think','about the holiday']]]]}
 };
 const MT=()=>({k:'match',icon:'🔗',label:L('Zuordnen','Match'),desc:L('Satzteile einander zuordnen','match the sentence parts')});
 for(const id in D){
  const t=TOPICS.find(x=>x.id===id);if(!t||!t.gen||!t.types)continue;
  const d=D[id],old=t.types;
  t.types=()=>old().concat([MT()]);
  t.gen.match=()=>{
   const p=d.g.filter(x=>x[0]<=lv()),g=rnd(p.length?p:d.g);
   return mkMatch(g[1],L(d.i[0],d.i[1]),d.w[LANG==='de'?0:1]);
  };
 }
 window.ZUORDNEN_DATA=D;
})();
