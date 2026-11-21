/* Übungen für die 7 Zeitformen (eigene Satzbanken, Niveau 1=C, 2=B, 3=A) */
(()=>{
 const B=(s,ok,bad,lv,h)=>BK(s,ok,bad,lv,'',h);
 const D={
 zbe:{W:'Present simple von be: I am · he / she / it is · you / we / they are. Verneinung: not, Frage: be vor das Subjekt.|Present simple of be: I am · he / she / it is · you / we / they are. Negative: not, question: be before the subject.',
  fi:()=>L('Setze die richtige Form von be ein.','Fill in the correct form of be.'),
  bank:[
  B('I ___ 13 years old.',['am'],['is','are'],1),B('She ___ my friend.',['is'],['am','are'],1),B('We ___ at home.',['are'],['is','am'],1),
  B('My brother ___ a teacher.',['is'],['are','am'],1),B('They ___ from Italy.',['are'],['is','am'],1),B('___ you hungry?',['Are'],['Is','Am'],1),
  B('He ___ not here.',['is'],['are','am'],1),B('It ___ a big dog.',['is'],['are','am'],1),B('You ___ very kind.',['are'],['is','am'],1),
  B('The books ___ on the table.',['are'],['is','am'],1),
  B('___ she your sister?',['Is'],['Are','Am'],2),B('I ___ not tired.',['am'],['is','are'],2),B('My parents ___ at work today.',['are'],['is','am'],2),
  B('Where ___ my keys?',['are'],['is','am'],2),B('___ Tom and Anna in the garden?',['Are'],['Is','Am'],2),B('The weather ___ nice today.',['is'],['are','am'],2),
  B('How old ___ you?',['are'],['is','am'],2),B('He ___ tired. (not)',["isn't",'is not'],["aren't",'not is'],2,'(not)'),
  B('Everyone ___ here.',['is'],['are','am'],3),B('Pizza and pasta ___ my favourite food.',['are'],['is','am'],3),B('___ your mother a doctor?',['Is'],['Are','Do'],3),
  B('Cats ___ allowed here. (not)',["aren't",'are not'],["isn't",'not are'],3,'(not)'),B('Who ___ that boy over there?',['is'],['are','am'],3),B('What ___ your hobbies?',['are'],['is','am'],3)],
  err:[['She is 14 years old.',['She has 14 years.','She is 14 years.'],1],['Are you tired?',['Do you are tired?','You are tired?'],1],["He isn't at home.",['He no is at home.',"He doesn't is at home."],2],['I am from Switzerland.',['I from Switzerland am.','I are from Switzerland.'],1],['Is she your friend?',['Does she your friend?','She is your friend?'],2],['We are not ready.',['We not are ready.','We do not ready.'],2]]},
 zps:{W:'Present simple: Grundform, bei he / she / it kommt -s dazu. Verneinung und Fragen mit do / does + Grundform.|Present simple: base form, add -s after he / she / it. Negatives and questions with do / does + base form.',
  fi:()=>L('Setze das Verb in der richtigen Form ein.','Fill in the verb in the correct form.'),
  bank:[
  B('She ___ horses. (love)',['loves'],['love','loving'],1,'(love)'),B('I ___ football every Saturday. (play)',['play'],['plays','playing'],1,'(play)'),
  B('He ___ to school by bus. (go)',['goes'],['go','gos'],1,'(go)'),B('They ___ in Zurich. (live)',['live'],['lives','living'],1,'(live)'),
  B('My mum ___ at eight. (work)',['works'],['work','working'],1,'(work)'),B('We ___ English on Mondays. (have)',['have'],['has','haves'],1,'(have)'),
  B('The dog ___ a lot. (sleep)',['sleeps'],['sleep','sleeping'],1,'(sleep)'),B('He ___ his teeth twice a day. (brush)',['brushes'],['brushs','brush'],1,'(brush)'),
  B('She ___ English very well. (speak)',['speaks'],['speak','speaking'],1,'(speak)'),B('It ___ a lot in April. (rain)',['rains'],['rain','raining'],1,'(rain)'),
  B('He ___ like fish. (not)',["doesn't",'does not'],["don't",'not'],2,'(not)'),B('I ___ like horror films. (not)',["don't",'do not'],["doesn't",'not'],2,'(not)'),
  B('___ she play tennis?',['Does'],['Do','Is'],2),B('___ you live near here?',['Do'],['Does','Are'],2),B('He ___ homework on Sundays. (do)',['does'],['do','dos'],2,'(do)'),
  B('My sister ___ her friends every day. (study / see)',['sees'],['see','seeing'],2,'(see)'),B('The shop ___ at nine. (open)',['opens'],['open','opening'],2,'(open)'),B('She ___ to music on the bus. (listen)',['listens'],['listen','listening'],2,'(listen)'),
  B('She ___ in the morning. (cry)',['cries'],['crys','cry'],3,'(cry)'),B('Tom never ___ late. (be)',['is'],['does','are'],3,'(be)'),B('He usually ___ coffee. (drink)',['drinks'],['drink','drinking'],3,'(drink)'),
  B('What time ___ the film start?',['does'],['do','is'],3),B('She ___ not ___ meat. (eat)',["does / eat","doesn't / eat"],['is / eat','do / eat'],3,'(eat)'),B('My dad ___ the car every week. (wash)',['washes'],['washs','wash'],3,'(wash)'),B('Why ___ birds fly south in winter?',['do'],['does','are'],3)],
  err:[['She likes pizza.',['She like pizza.','She do likes pizza.'],1],["He doesn't like fish.",["He doesn't likes fish.","He don't like fish."],1],['Does she play tennis?',['Do she play tennis?','Does she plays tennis?'],2],['I never eat meat.',['I eat never meat.','I am never eat meat.'],2],['My brother watches TV every day.',['My brother watchs TV every day.','My brother watch TV every day.'],2],['They do not live here.',['They not live here.','They does not live here.'],2]]},
 zpc:{W:'Present continuous: am / is / are + Verb-ing. Für Handlungen, die jetzt gerade passieren oder nur vorübergehend gelten.|Present continuous: am / is / are + verb-ing. For actions happening right now or only temporarily.',
  fi:()=>L('Bilde das present continuous.','Form the present continuous.'),
  bank:[
  B('Look! It ___ . (rain)',['is raining'],['rains','is rain'],1,'(rain)'),B('I ___ my homework now. (do)',['am doing'],['do','am do'],1,'(do)'),B('She ___ to music. (listen)',['is listening'],['listens','is listen'],1,'(listen)'),
  B('They ___ football at the moment. (play)',['are playing'],['play','is playing'],1,'(play)'),B('We ___ lunch. (eat)',['are eating'],['eat','is eating'],1,'(eat)'),B('He ___ a book. (read)',['is reading'],['reads','are reading'],1,'(read)'),
  B('The children ___ in the garden. (play)',['are playing'],['is playing','plays'],1,'(play)'),B('Be quiet! The baby ___ . (sleep)',['is sleeping'],['sleeps','are sleeping'],1,'(sleep)'),
  B('I ___ for the bus. (wait)',['am waiting'],['wait','is waiting'],1,'(wait)'),B('You ___ too fast. (talk)',['are talking'],['talk','is talking'],1,'(talk)'),
  B('He ___ a photo. (take)',['is taking'],['is takeing','takes'],2,'(take)'),B('She ___ a letter. (write)',['is writing'],['is writeing','writes'],2,'(write)'),B('They ___ on the sofa. (sit)',['are sitting'],['are siting','sit'],2,'(sit)'),
  B('The dog ___ in the park. (run)',['is running'],['is runing','runs'],2,'(run)'),B('He ___ playing. (not)',["isn't",'is not'],["doesn't",'not'],2,'(not)'),B('I ___ not sleeping. (be)',['am'],['is','are'],2,'(be)'),
  B('___ you working now?',['Are'],['Do','Is'],2),B('What ___ she ___ ? (do)',['is / doing'],['does / doing','is / do'],2,'(do)'),
  B('She ___ to Spain next week. (fly)',['is flying'],['flies','fly'],3,'(fly)'),B('I ___ at my aunt\'s this week. (stay)',['am staying'],['stay','is staying'],3,'(stay)'),
  B('He ___ a lot of mistakes at the moment. (make)',['is making'],['makes','is makeing'],3,'(make)'),B('Why ___ you ___ ? (smile)',['are / smiling'],['do / smiling','are / smile'],3,'(smile)'),
  B('We ___ the match. (not / watch)',["aren't watching",'are not watching'],["don't watching","aren't watch"],3,'(not / watch)'),B('The sun ___ . (shine)',['is shining'],['shines','is shineing'],3,'(shine)')],
  err:[['She is reading a book.',['She reading a book.','She is read a book.'],1],['They are playing outside.',['They playing outside.','They is playing outside.'],1],["I'm not sleeping.",["I don't sleeping.",'I not am sleeping.'],2],['Is he working now?',['Does he working now?','Is he work now?'],2],['We are running.',['We are runing.','We running are.'],2],['What are you doing?',['What you are doing?','What do you doing?'],2]]},
 zpf:{W:'Present perfect: have / has + Partizip (3. Form). Für Erfahrungen, Resultate und Dinge, die bis jetzt dauern.|Present perfect: have / has + past participle. For experiences, results and things that last up to now.',
  fi:()=>L('Bilde das present perfect.','Form the present perfect.'),
  bank:[
  B('I ___ never ___ sushi. (eat)',['have / eaten'],['has / eaten','have / ate'],1,'(eat)'),B('She ___ already ___ her homework. (do)',['has / done'],['have / done','has / did'],1,'(do)'),
  B('They ___ ___ to Rome. (be)',['have / been'],['has / been','have / was'],1,'(be)'),B('He ___ just ___ home. (come)',['has / come'],['have / come','has / came'],1,'(come)'),
  B('We ___ ___ this film before. (see)',['have / seen'],['has / seen','have / saw'],1,'(see)'),B('I ___ lost my keys. (lose)',['have'],['has','am'],1),
  B('She ___ ___ a letter. (write)',['has / written'],['has / wrote','have / written'],1,'(write)'),B('Have you ever ___ a horse? (ride)',['ridden'],['rode','riding'],2,'(ride)'),
  B('He ___ ___ his arm. (break)',['has / broken'],['has / broke','have / broken'],2,'(break)'),B('I ___ ___ my lunch yet. (not / have)',["haven't had",'have not had'],["didn't have","haven't have"],2,'(not / have)'),
  B('She ___ ___ in London for three years. (live)',['has lived'],['lives','have lived'],2,'(live)'),B('They ___ ___ each other since 2015. (know)',['have known'],['know','has known'],2,'(know)'),
  B('He ___ ___ here since Monday. (be)',['has been'],['is','have been'],2,'(be)'),B('I ___ ___ for two hours. (wait)',['have waited','have been waiting'],['wait','has waited'],3,'(wait)'),
  B('We ___ ___ the new teacher yet. (not / meet)',["haven't met",'have not met'],["didn't meet","hasn't met"],3,'(not / meet)'),B('She ___ ___ her phone. (just / find)',['has just found'],['have just found','just has found'],3,'(just / find)'),
  B('Has he ___ his room yet? (clean)',['cleaned'],['clean','cleans'],3,'(clean)'),B('It is the best book I ___ ever ___ . (read)',['have / read'],['has / read','did / read'],3,'(read)'),
  B('How long ___ you ___ English? (learn)',['have / learned','have / learnt'],['do / learn','did / learn'],3,'(learn)'),B('I have ___ the answer. (know)',['known'],['knew','know'],2,'(know)')],
  err:[['I have seen that film.',['I have saw that film.','I has seen that film.'],1],['She has never been to Paris.',['She has never be to Paris.','She never has been to Paris.'],2],['Have you finished?',['Did you finished?','Have you finish?'],1],['He has lived here for ten years.',['He lives here for ten years.','He has live here for ten years.'],2],["We haven't eaten yet.",["We didn't ate yet.","We haven't ate yet."],2],['They have just left.',['They have just leave.','They has just left.'],2]]},
 zpas:{W:'Past simple: Verb + -ed (regelmässig) oder 2. Form (unregelmässig). Verneinung und Fragen mit did / didn\'t + Grundform.|Past simple: verb + -ed (regular) or 2nd form (irregular). Negatives and questions with did / didn\'t + base form.',
  fi:()=>L('Setze das Verb in der Vergangenheit ein.','Put the verb into the past.'),
  bank:[
  B('I ___ football yesterday. (play)',['played'],['play','plaied'],1,'(play)'),B('She ___ to school by bus. (go)',['went'],['goed','gone'],1,'(go)'),B('We ___ a film last night. (watch)',['watched'],['watch','watching'],1,'(watch)'),
  B('He ___ a new bike. (buy)',['bought'],['buyed','buy'],1,'(buy)'),B('They ___ in Italy last summer. (be)',['were'],['was','are'],1,'(be)'),B('I ___ at home. (be)',['was'],['were','am'],1,'(be)'),
  B('She ___ her friend. (see)',['saw'],['seen','seed'],1,'(see)'),B('We ___ pizza for dinner. (have)',['had'],['haved','has'],1,'(have)'),B('He ___ the window. (open)',['opened'],['open','openned'],1,'(open)'),B('I ___ my keys. (lose)',['lost'],['losed','loose'],1,'(lose)'),
  B('He ___ not like the food. (do)',['did'],['does','do'],2,'(do)'),B('___ you see the match?',['Did'],['Do','Were'],2),B('She ___ her homework. (study)',['studied'],['studyed','studys'],2,'(study)'),
  B('The baby ___ all night. (cry)',['cried'],['cryed','crid'],2,'(cry)'),B('I ___ him a letter. (write)',['wrote'],['written','writed'],2,'(write)'),B('They ___ the bus. (stop)',['stopped'],['stoped','stopt'],2,'(stop)'),
  B('He ___ come to the party. (not)',["didn't",'did not'],["don't","wasn't"],2,'(not)'),B('What ___ you do last weekend?',['did'],['do','were'],2),
  B('We ___ the answer. (know)',['knew'],['known','knowed'],3,'(know)'),B('She ___ a beautiful song. (sing)',['sang'],['sung','singed'],3,'(sing)'),B('He ___ his leg in the game. (break)',['broke'],['broken','breaked'],3,'(break)'),
  B('I ___ a lot of water. (drink)',['drank'],['drunk','drinked'],3,'(drink)'),B('Did she ___ a car? (have)',['have'],['had','has'],3,'(have)'),B('We ___ ___ the exam. (not / pass)',["didn't pass",'did not pass'],["didn't passed","don't pass"],3,'(not / pass)')],
  err:[['I played tennis yesterday.',['I play tennis yesterday.','I plaied tennis yesterday.'],1],['She went home.',['She goed home.','She gone home.'],1],["He didn't know the answer.",["He didn't knew the answer.","He not knew the answer."],2],['Did you see him?',['Did you saw him?','Do you saw him?'],2],['We were happy.',['We was happy.','We are happy yesterday.'],1],['They bought a house.',['They buyed a house.','They bought a house yesterday ago.'],2]]},
 zpast:{W:'Past continuous: was / were + Verb-ing. Für Handlungen, die zu einem Zeitpunkt in der Vergangenheit gerade liefen, oft mit when / while.|Past continuous: was / were + verb-ing. For actions in progress at a time in the past, often with when / while.',
  fi:()=>L('Bilde das past continuous.','Form the past continuous.'),
  bank:[
  B('I ___ TV at eight. (watch)',['was watching'],['watched','were watching'],1,'(watch)'),B('They ___ football at five. (play)',['were playing'],['was playing','played'],1,'(play)'),B('She ___ a book. (read)',['was reading'],['were reading','read'],1,'(read)'),
  B('We ___ dinner. (have)',['were having'],['was having','had'],1,'(have)'),B('It ___ at noon. (rain)',['was raining'],['were raining','rained'],1,'(rain)'),B('He ___ in the garden. (work)',['was working'],['were working','worked'],1,'(work)'),
  B('What ___ you ___ at ten? (do)',['were / doing'],['was / doing','did / doing'],2,'(do)'),B('I ___ sleeping. (not)',["wasn't",'was not'],["weren't","didn't"],2,'(not)'),B('The kids ___ loudly. (not / talk)',["weren't talking",'were not talking'],["wasn't talking","didn't talking"],2,'(not / talk)'),
  B('When he called, I ___ . (cook)',['was cooking'],['cooked','were cooking'],2,'(cook)'),B('She ___ a shower when the phone rang. (take)',['was taking'],['took','was takeing'],2,'(take)'),B('___ it snowing?',['Was'],['Were','Did'],2),
  B('I ___ to school when I saw an accident. (walk)',['was walking'],['walked','were walking'],3,'(walk)'),B('While we ___ , it started to rain. (play)',['were playing'],['played','was playing'],3,'(play)'),
  B('He broke his arm while he ___ . (ski)',['was skiing'],['skied','were skiing'],3,'(ski)'),B('The phone rang while she ___ . (sleep)',['was sleeping'],['slept','were sleeping'],3,'(sleep)'),
  B('They ___ when the teacher came in. (not / listen)',["weren't listening",'were not listening'],["didn't listening","wasn't listening"],3,'(not / listen)'),B('What ___ he ___ when you saw him? (do)',['was / doing'],['did / doing','was / do'],3,'(do)')],
  err:[['I was reading a book.',['I were reading a book.','I was read a book.'],1],['They were playing outside.',['They was playing outside.','They playing outside.'],1],["She wasn't sleeping.",["She weren't sleeping.","She didn't sleeping."],2],['Were you working at six?',['Was you working at six?','Did you working at six?'],2],['While I was cooking, he called.',['While I cooked, he was calling.','While I was cook, he called.'],3],['It was raining.',['It was rain.','It were raining.'],1]]},
 zfut:{W:'will + Grundform: spontane Entscheidungen, Vorhersagen, Versprechen. going to + Grundform: Pläne und Vorhersagen mit Anzeichen.|will + base form: spontaneous decisions, predictions, promises. going to + base form: plans and predictions with evidence.',
  fi:()=>L('Setze die richtige Zukunftsform ein.','Fill in the correct future form.'),
  bank:[
  B('It is cold. I ___ close the window. (spontaneous)',['will',"'ll"],['am going','do'],1,'(will)'),B('I think it ___ rain tomorrow.',['will'],['is','does'],1),B('She ___ be 14 next week.',['will'],['is','does'],1),
  B('I ___ visit my aunt this weekend. I have bought the tickets.',['am going to'],['will going to','am go to'],1),B('Look at those clouds! It ___ rain.',['is going to'],['will going','is go to'],1),B('We ___ have a party on Saturday. (plan)',['are going to'],['will going to','are go to'],1),
  B('They ___ win the match, I am sure.',['will'],['are','does'],1),B('He ___ be a doctor. (plan)',['is going to'],['will going to','goes to'],1),
  B('I ___ help you with that bag.',['will',"'ll"],['am going','do'],2),B('She ___ come to the party. (not)',["won't",'will not'],["don't will","isn't will"],2,'(not)'),B('___ you help me, please?',['Will'],['Are','Do'],2),
  B('He ___ pass the test. (not / going)',["isn't going to",'is not going to'],["doesn't going to","won't going to"],2,'(not / going)'),B('What ___ you ___ tomorrow? (do, plan)',['are / going to do'],['will / going to do','do / going to do'],2),
  B('Careful! You ___ fall!',['are going to'],['will going to','are go to'],2),B('I promise I ___ tell anyone.',["won't",'will not'],["don't","am not going"],2),
  B('Next year I ___ start an apprenticeship. (plan)',['am going to'],['will going to','am go to'],3),B('Perhaps she ___ call you later.',['will'],['is going','does'],3),B('Will they ___ the new teacher tomorrow? (meet)',['meet'],['met','meeting'],3,'(meet)'),
  B('I think robots ___ do many jobs in the future.',['will'],['are','do'],3),B('We are late! The bus ___ leave without us.',['is going to','will'],['are going','does'],3)],
  err:[['I will help you.',['I will to help you.','I will helps you.'],1],['She is going to buy a bike.',['She is going buy a bike.','She goes to buy a bike.'],1],["It won't rain tomorrow.",["It don't will rain tomorrow.","It won't to rain tomorrow."],2],['Are you going to come?',['Do you going to come?','Are you going come?'],2],['We will not go.',['We not will go.','We will not to go.'],2],['They are going to win.',['They going to win.','They will going to win.'],2]]}
 };

 /* Unterthemen: Auswahl in Üben und Live-Übung. Zusatzsätze füllen die Unterthemen auf. */
 const EX={
  zbe:[B('We ___ late. (not)',["aren't",'are not'],["isn't",'not are'],2,'(not)'),B('___ they at school?',['Are'],['Is','Do'],1),B('Where ___ she from?',['is'],['are','am'],2),B('___ I late?',['Am'],['Is','Are'],2)],
  zps:[B('She ___ coffee. (not / drink)',["doesn't drink",'does not drink'],["don't drink",'not drinks'],2,'(not / drink)'),B('They ___ here. (not / live)',["don't live",'do not live'],["doesn't live",'not live'],2,'(not / live)'),B('___ your dad cook dinner?',['Does'],['Do','Is'],1),B('What time ___ you get up?',['do'],['does','are'],2)],
  zpc:[B('I ___ TV now. (not / watch)',['am not watching',"'m not watching"],['not watching','am not watch'],2,'(not / watch)'),B('The kids ___ . (not / sleep)',["aren't sleeping",'are not sleeping'],["isn't sleeping",'not sleeping'],2,'(not / sleep)'),B('___ he reading a book?',['Is'],['Does','Are'],1),B('Where ___ you going?',['are'],['do','is'],2)],
  zpas:[B('We ___ to music last night.',['listened'],['listen','listens'],1,'(listen)'),B('She ___ her room yesterday.',['cleaned'],['clean','cleans'],1,'(clean)'),B('He ___ at the door.',['knocked'],['knock','knocks'],2,'(knock)'),B('The plane ___ at six.',['landed'],['land','lands'],3,'(land)'),B('She ___ the car in front of the house.',['parked'],['park','parks'],3,'(park)'),
   B('I ___ a sandwich for lunch.',['ate'],['eat','eaten'],1,'(eat)'),B('He ___ the ball.',['threw'],['throw','thrown'],2,'(throw)'),B('She ___ me a present.',['gave'],['give','given'],3,'(give)'),
   B('We ___ the bus. (not / miss)',["didn't miss",'did not miss'],['not missed','did not missed'],2,'(not / miss)'),B('She ___ a word. (not / say)',["didn't say",'did not say'],['not said','did not said'],2,'(not / say)'),B('He ___ TV last night. (not / watch)',["didn't watch",'did not watch'],['not watched','did not watched'],2,'(not / watch)'),B('They ___ at home. (not / stay)',["didn't stay",'did not stay'],['not stayed','did not stayed'],3,'(not / stay)'),
   B('___ they win the game?',['Did'],['Do','Were'],2),B('Where ___ you go last Saturday?',['did'],['do','were'],2),B('___ he phone you yesterday?',['Did'],['Does','Was'],3),B('What time ___ the film end last night?',['did'],['does','was'],3)],
  zpast:[B('___ you sleeping at ten?',['Were'],['Was','Did'],1),B('___ she watching TV at nine?',['Was'],['Were','Did'],2),B('What ___ they doing at midnight?',['were'],['was','did'],3),
   B('We ___ playing at four. (not)',["weren't",'were not'],["wasn't",'not were'],1,'(not)'),B('He ___ sleeping at ten. (not)',["wasn't",'was not'],["weren't",'not was'],2,'(not)'),B('I ___ watching TV when you called. (not)',["wasn't",'was not'],["weren't",'did not'],3,'(not)')],
  zpf:[B('I have never ___ snow.',['seen'],['saw','see'],1,'(see)'),B('Have you ever ___ sushi?',['eaten'],['ate','eat'],1,'(eat)'),B('She has never ___ a horse.',['ridden'],['rode','ride'],2,'(ride)'),B('This is the best pizza I have ever ___ .',['eaten'],['ate','eat'],2,'(eat)'),B('___ you ever been to London?',['Have'],['Do','Are'],2),B('He has never ___ a lie.',['told'],['tell','tells'],3,'(tell)'),
   B('I have lived here ___ 2020.',['since'],['for','from'],1),B('She has been ill ___ three days.',['for'],['since','from'],1),B('We have known him ___ ten years.',['for'],['since','from'],2),B('He has played the guitar ___ he was ten.',['since'],['for','from'],2),B('They have been married ___ 2010.',['since'],['for','from'],3),B('I have not seen her ___ a long time.',['for'],['since','from'],3),
   B('I have ___ finished my homework.',['already','just'],['yet','ever'],1),B('Have you finished ___ ?',['yet'],['ever','never'],1),B('I have not eaten ___ .',['yet'],['already','just'],2),B('She has ___ left the room.',['just','already'],['yet','never'],2),B('Have they arrived ___ ?',['yet'],['just','never'],3),
   B('She has ___ to Italy. She is back now.',['been'],['gone','go'],1),B('He has ___ to Italy. He is not here.',['gone'],['been','go'],1),B('Have you ever ___ to Japan?',['been'],['gone','went'],2),B('Where is Tom? – He has ___ to the shop.',['gone'],['been','went'],2),B('We have ___ to the zoo three times.',['been'],['gone','went'],2),B('My parents have ___ on holiday. The house is empty.',['gone'],['been','went'],3),
   B('They ___ football yesterday.',['played'],['have played','plays'],1,'(play)'),B('I ___ him last week.',['saw'],['have seen','see'],2,'(see)'),B('She ___ to Paris in 2019.',['went'],['has gone','has been'],2,'(go)'),B('We ___ breakfast an hour ago.',['had'],['have had','has'],2,'(have)'),B('Mozart ___ many songs.',['wrote'],['has written','writes'],2,'(write)'),B('Yesterday I ___ a new phone.',['bought'],['have bought','buy'],3,'(buy)')],
  zfut:[B('We ___ to Rome on Friday. The tickets are booked.',['are flying'],['fly','flying'],1,'(fly)'),B('I ___ Anna at five. We have arranged it.',['am meeting'],['meet','meeting'],1,'(meet)'),B('What ___ tomorrow evening?',['are you doing'],['you doing','are you do'],1,'(do)'),B('She ___ her grandma on Sunday. It is arranged.',['is visiting'],['visit','visiting'],2,'(visit)'),B('They ___ a party next Saturday. The invitations are sent.',['are having'],['have','having'],2,'(have)'),B('He ___ to the dentist at ten tomorrow.',['is going'],['go','going'],2,'(go)'),B('I ___ to the party tonight. I have to work. (not / come)',["am not coming","'m not coming"],['not coming',"don't coming"],2,'(not / come)'),B('___ Tom coming to the cinema tonight?',['Is'],['Does','Are'],3),B('We ___ our new flat next month. It is all organised.',['are moving into'],['move into','moving into'],3,'(move into)'),
   B('___ I open the window?',['Shall'],['Are','Does'],1),B('It is hot. ___ we go swimming?',['Shall'],['Are','Does'],1),B('___ I carry your bag?',['Shall'],['Are','Does'],2),B('What ___ we have for dinner?',['shall'],['are','does'],2),B('Where ___ we meet after school?',['shall'],['are','does'],3),B('___ I make you a cup of tea?',['Shall'],['Are','Does'],3),
   B('If it ___ , I will take an umbrella.',['rains'],['will rain','rain'],1,'(rain)'),B('If it ___ tomorrow, we will stay at home.',['rains'],['will rain','rain'],2,'(rain)'),B('When I ___ home, I will call you.',['get'],['will get','getting'],2,'(get)'),B('She will help you if you ___ her.',['ask'],['will ask','asks'],2,'(ask)'),B('I will tell her as soon as she ___ .',['arrives'],['will arrive','arrive'],3,'(arrive)'),B('We will go out if the weather ___ nice.',['is'],['will be','be'],3,'(be)'),B('Call me before you ___ .',['leave'],['will leave','leaves'],3,'(leave)'),
   B('Do not worry. I ___ help you.',['will',"'ll"],['am','do'],1),B('I think she ___ like the present.',['will'],['is','does'],2),
   B('We ___ have a picnic on Sunday. We have bought the food.',['are going to'],['is going to','are going'],2),B('She ___ be a pilot when she grows up. (plan)',['is going to'],['are going to','is going'],1,'(plan)')]
 };
 const q_=b=>/\?\s*$/.test(b.s)||/^___ /.test(b.s)||/^(What|Where|Who|How|Why|When) ___ /.test(b.s);
 const neg_=b=>/\bnot\b|n't/.test(b.s)||/not/.test(b.h)||/n't|\bnot\b/.test(b.ok[0]);
 const T3=b=>q_(b)?'q':neg_(b)?'neg':'aff';
 const TAG={zbe:T3,zps:T3,zpc:T3,
  zpas:b=>q_(b)?'q':neg_(b)?'neg':(/^\w+ed$/.test(b.ok[0])?'reg':'irr'),
  zpast:b=>/\b(when|while)\b/i.test(b.s)?'whn':T3(b),
  zpf:b=>{const t=b.s+' '+b.ok[0];return /\b(been|gone)\b/.test(b.ok[0])&&!/\blived\b/.test(t)&&/\b(to|on holiday)\b/.test(b.s)?'bg':/\b(ever|never)\b/.test(t)?'en':/\b(for|since)\b|How long/.test(t)?'fs':/\b(just|already|yet)\b/.test(t)?'jay':/\b(yesterday|last|ago|in 20\d\d|Mozart)\b/i.test(b.s)?'vs':'form'},
  zfut:b=>{const t=b.s+' '+b.ok[0];if(/^(Is|Are)$/.test(b.ok[0])&&/ing\b/.test(b.s))return 'pc';return /\b[Ss]hall\b/.test(b.ok[0])?'shall':/going to/.test(t)?'gt':/\b(if|when|as soon as|before)\b/i.test(b.s)&&!/going to/.test(t)?'ifw':/^(am|is|are|'m|not|won)/.test(b.ok[0])&&/ing\b/.test(b.ok[0])||/\b(is|are) ___ /.test(b.s)&&!/\bwill\b/.test(t)?'pc':/(am|is|are) (not )?\w+ing/.test(b.ok[0])||/are you doing/.test(b.ok[0])?'pc':'will'}};
 const SUBS={
  zbe:()=>[{k:'aff',n:L('Aussagen','Statements')},{k:'neg',n:L('Verneinung','Negatives')},{k:'q',n:L('Fragen','Questions')}],
  zps:()=>[{k:'aff',n:L('Aussagen','Statements')},{k:'neg',n:L('Verneinung','Negatives')},{k:'q',n:L('Fragen','Questions')}],
  zpc:()=>[{k:'aff',n:L('Aussagen','Statements')},{k:'neg',n:L('Verneinung','Negatives')},{k:'q',n:L('Fragen','Questions')}],
  zpas:()=>[{k:'reg',n:L('regelmässig (-ed)','regular (-ed)')},{k:'irr',n:L('unregelmässig','irregular')},{k:'neg',n:L('Verneinung','Negatives')},{k:'q',n:L('Fragen','Questions')}],
  zpast:()=>[{k:'aff',n:L('Aussagen','Statements')},{k:'neg',n:L('Verneinung','Negatives')},{k:'q',n:L('Fragen','Questions')},{k:'whn',n:'when / while'}],
  zpf:()=>[{k:'form',n:L('Bildung','Form')},{k:'en',n:'ever / never'},{k:'fs',n:'for / since'},{k:'jay',n:'just / already / yet'},{k:'bg',n:'been / gone'},{k:'vs',n:L('vs. Past simple','vs. past simple')}],
  zfut:()=>[{k:'will',n:'will'},{k:'gt',n:'going to'},{k:'pc',n:'present continuous'},{k:'shall',n:'shall'},{k:'ifw',n:'if / when'}]};
 const fix=b=>{const n=(b.s.match(/___/g)||[]).length;if(n<2)return b;
  const m=b.s.match(/^(.*?)___(.*?)___(.*)$/);const A=m[1],X=m[2].trim(),C=m[3];
  const mg=a=>a.map(o=>{const q=o.split(' / ');return q.length===2?q[0]+' '+(X?X+' ':'')+q[1]:o});
  const pr=/^(you|he|she|they|it|we|I)$/.test(X);
  return Object.assign({},b,{h:(b.h||'')+(X&&!pr?' + '+X:''),s:(A+'___'+C).replace(/\s+/g,' ').replace(/ \?/,' ?'),ok:mg(b.ok),bad:mg(b.bad)})};
 const strip=b=>{const m=b.s.match(/\s*\(([^)]*)\)\s*$/);if(!m)return b;return Object.assign({},b,{s:b.s.slice(0,m.index),h:b.h||('('+m[1]+')')})};
 for(const id in D){D[id].bank=D[id].bank.concat(EX[id]||[]).map(strip).map(fix).map(b=>Object.assign({},b,{sub:TAG[id]?TAG[id](b):''}));
  const t=TOPICS.find(x=>x.id===id);if(!t)continue;const d=D[id];
  const b=bankTopic({id,grp:'zeiten',ord:t.ord,ic:t.ic,de:'',en:'',desc:'',fillInstr:d.fi,fillDesc:()=>L('das passende Wort schreiben','write the right word'),
   lvDe:'C: einfache Sätze. B: dazu Verneinung und Fragen. A: dazu schwierigere Fälle.',lvEn:'C: simple sentences. B: plus negatives and questions. A: plus harder cases.',why:{_:d.W},bank:d.bank,err:d.err,subs:SUBS[id],slides:t.slides});
  t._why=d.W;
  ['fillInstr','lvDesc','subTitle','subs','subDef','types','typeDef','gen','data'].forEach(k=>{t[k]=b[k]});
 }
})();
