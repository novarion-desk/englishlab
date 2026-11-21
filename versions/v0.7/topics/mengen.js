/* ===== Thema 4: Mengenwörter ===== */
TOPICS.push((()=>{
 // [stem,ok[],bad[],lv,sub,hint,why de|en]
 const B=(s,ok,bad,lv,sb,h,w)=>({s,ok,bad,lv,sub:sb,h,w});
 const W={
  sa:'some: bejahte Sätze und Angebote / Bitten. any: Verneinung und Fragen. Bei Angeboten und Bitten steht some.|some: positive sentences, offers and requests. any: negatives and questions.',
  mm:'much: nur mit unzählbaren Nomen (in Frage und Verneinung). many: nur mit zählbaren Nomen im Plural. a lot of / lots of: mit beiden, vor allem in bejahten Sätzen.|much: uncountable nouns only (questions, negatives). many: plural countable nouns only. a lot of / lots of: both, mainly in positive sentences.',
  fl:'a few + zählbar, a little + unzählbar = ein paar / etwas (positiv). few / little ohne a = kaum, zu wenig (negativ).|a few + countable, a little + uncountable = some (positive). few / little without a = hardly any, not enough (negative).'
 };
 const CUR=[
  B('How ___ eggs do we need?',['many'],['much','a little'],1,'mm','(much / many)',W.mm),
  B('How ___ milk do we need?',['much'],['many','a few'],1,'mm','(much / many)',W.mm),
  B('How ___ students are in your class?',['many'],['much','a little'],1,'mm','(much / many)',W.mm),
  B('How ___ money do you have?',['much'],['many','a few'],1,'mm','(much / many)',W.mm),
  B("We don't have ___ time. Hurry up!",['much','a lot of'],['many','a few'],1,'mm','(much / many)',W.mm),
  B("There aren't ___ chairs in the room.",['many','a lot of'],['much','a little'],1,'mm','(much / many)',W.mm),
  B('She has ___ friends. She is very popular.',['a lot of','lots of','many'],['much','a little'],1,'mm','(much / many / a lot of)',W.mm),
  B('He drinks ___ water every day.',['a lot of','lots of'],['many','a few'],1,'mm','(much / many / a lot of)',W.mm),
  B('There is too ___ traffic in the city centre.',['much'],['many','few'],3,'mm','(much / many)',W.mm),
  B('There are too ___ people on the bus.',['many'],['much','little'],3,'mm','(much / many)',W.mm),
  B('It costs too ___ money. I cannot buy it.',['much'],['many','a few'],3,'mm','(much / many)',W.mm),
  B("Don't eat too ___ sweets.",['many'],['much','a little'],2,'mm','(much / many)',W.mm),
  B('I have ___ friends here, so I am never alone.',['a few'],['a little','much'],1,'fl','(a few / a little)',W.fl),
  B('Wait a moment. I need ___ more time.',['a little'],['a few','many'],1,'fl','(a few / a little)',W.fl),
  B("There is ___ milk left. Let's make one coffee.",['a little'],['a few','many'],1,'fl','(a few / a little)',W.fl),
  B('Can I have ___ more water, please?',['a little'],['a few','many'],1,'fl','(a few / a little)',W.fl),
  B('I know ___ words in French, so I can order food.',['a few'],['a little','much'],1,'fl','(a few / a little)',W.fl),
  B('Would you like ___ more sugar in your tea?',['a little'],['a few','many'],1,'fl','(a few / a little)',W.fl),
  B('He has ___ friends. He feels lonely.',['few'],['a few','a little'],2,'fl','(few / a few)',W.fl),
  B('We have ___ time. We will miss the bus.',['little'],['a little','a few'],2,'fl','(little / a little)',W.fl),
  B('Only ___ students came to the party, so it was quiet.',['a few','few'],['a little','much'],2,'fl','(a few / a little)',W.fl),
  B('There were ___ people at the concert. It was almost empty.',['few'],['a little','much'],3,'fl','(few / a few)',W.fl),
  B('I am hungry. I want ___ to eat.',['something'],['anything','any'],3,'sa','(something / anything)','something: bejahte Sätze, anything: Verneinung und Fragen.|something: positive sentences, anything: negatives and questions.'),
  B("I didn't see ___ in the dark.",['anything'],['something','some'],3,'sa','(something / anything)','something: bejahte Sätze, anything: Verneinung und Fragen.|something: positive sentences, anything: negatives and questions.'),
  B('Is there ___ in the box?',['anything'],['nothing','nobody'],3,'sa','(something / anything)','something: bejahte Sätze, anything: Verneinung und Fragen.|something: positive sentences, anything: negatives and questions.'),
  B('I need ___ advice about my homework.',['some'],['an','many'],2,'sa','(some / any)',W.sa)
 ];
 const CN=[['apples','in the bag'],['eggs','in the kitchen'],['tomatoes','in the kitchen'],['biscuits','in the kitchen'],['sandwiches','in the bag'],['bananas','in the bag'],['pencils','in my case'],['books','in my bag']];
 const UN=[['milk','in the fridge'],['bread','in the kitchen'],['cheese','in the fridge'],['rice','in the kitchen'],['sugar','in the kitchen'],['water','in the bottle'],['juice','in the fridge'],['paper','in my bag']];
 function genSA(){
  const c=Math.random()<.55,[n,pl]=rnd(c?CN:UN),be=c?'are':'is',bn=c?"aren't":"isn't";
  const k=rnd(['aff','neg','q','offer','req']),h='(some / any)';
  const noPl=c?['much','a little']:['many','a few'];
  if(k==='aff')return B(`There ${be} ___ ${n} ${pl}.`,['some'],['any',noPl[0]],1,'sa',h,W.sa);
  if(k==='neg')return B(`There ${bn} ___ ${n} ${pl}.`,['any'],['some',noPl[0]],1,'sa',h,W.sa);
  if(k==='q')return B(`${cap(be)} there ___ ${n} ${pl}?`,['any'],[noPl[0],noPl[1]],1,'sa',h,W.sa);
  if(k==='offer')return B(`Would you like ___ ${n}?`,['some'],[noPl[0],noPl[1]],1,'sa',h,W.sa);
  return B(`Can I have ___ ${n}, please?`,['some'],[noPl[0],noPl[1]],1,'sa',h,W.sa);
 }
 const lvl=()=>S.lvl==='A'?3:S.lvl==='B'?2:1;
 const pool=()=>{
  const s=sub('n'),on=k=>!s.length||s.includes(k);
  let p=CUR.filter(b=>b.lv<=lvl()&&on(b.sub));
  if(on('sa')){for(let i=0;i<8;i++)p.push(genSA())}
  return p.length?p:CUR.filter(b=>b.lv<=lvl());
 };
 const base=bankGens(pool,b=>W[b.sub].split('|')[LANG==='de'?0:1]);
 // Zählbar / unzählbar: Fehler finden
 const E=(ok,bad,lv,why)=>({ok,bad,lv,why});
 const CW=L('Zählbar (apple – apples) oder unzählbar (water)? Unzählbare Nomen haben keinen Plural und kein a/an: information, advice, homework, news, money, traffic, bread.','Countable (apple – apples) or uncountable (water)? Uncountable nouns have no plural and no a/an: information, advice, homework, news, money, traffic, bread.');
 const ERR=[
  E('I need some information about the trip.',['I need some informations about the trip.','I need an information about the trip.'],1),
  E('She gave me good advice.',['She gave me a good advice.','She gave me good advices.'],1),
  E('We have a lot of homework today.',['We have a lot of homeworks today.','We have many homeworks today.'],1),
  E('The news is good.',['The news are good.','The newses are good.'],2),
  E("I'd like some bread, please.",["I'd like some breads, please.","I'd like many bread, please."],1),
  E('There is a lot of traffic in town.',['There are a lot of traffics in town.','There is a lot of traffics in town.'],2),
  E('How much money do you have?',['How many money do you have?','How much moneys do you have?'],1),
  E('How many apples are there?',['How much apples are there?','How many apple are there?'],1),
  E('I have a few friends in Zurich.',['I have a few friend in Zurich.','I have a little friends in Zurich.'],1),
  E('Can I have a little sugar?',['Can I have a few sugar?','Can I have a little sugars?'],1),
  E("We don't have any eggs.",["We don't have some eggs.","We haven't no eggs."],1),
  E("There isn't much time.",["There isn't many time.","There aren't much time."],1),
  E('He gave me a lot of help.',['He gave me a lot of helps.','He gave me many help.'],2),
  E('We need some new furniture.',['We need some new furnitures.','We need a new furniture.'],3),
  E('She has a lot of luggage.',['She has a lot of luggages.','She has many luggage.'],3),
  E("I don't have much work today.",["I don't have many works today.","I don't have much works today."],2)
 ];
 const errPool=()=>{const l=ERR.filter(e=>e.lv<=lvl());return l.length?l:ERR};
 const gen={fill:base.fill,choice:base.choice,order:base.order,
  errors(){
   if(Math.random()<.55){const e=rnd(errPool());return mkWords(e.ok,e.bad,L('Welcher Satz ist richtig?','Which sentence is correct?'),CW)}
   return base.errors();
  }
 };
 return {data:{bank:CUR,err:ERR.map(e=>[e.ok,e.bad,e.lv])},id:'n',grp:'nomen',ic:'🥛',ready:1,
  name:()=>L('Mengenwörter','Quantifiers'),desc:()=>'some / any, much / many, a few / a little',
  fillInstr:()=>L('Setze das passende Mengenwort ein.','Fill in the correct quantifier.'),
  lvDesc:()=>L('C: einfache Sätze mit some / any, much / many, a few / a little. B: dazu few / little und too many / too much. A: dazu something / anything.','C: simple sentences with some / any, much / many, a few / a little. B: plus few / little and too many / too much. A: plus something / anything.'),
  subTitle:()=>L('Unterthemen','Sub-topics'),
  subs:()=>[{k:'sa',n:'some / any'},{k:'mm',n:'much / many'},{k:'fl',n:'(a) few / (a) little'}],subDef:['sa','mm','fl'],
  types:()=>[
   {k:'fill',icon:'✏️',label:L('Einsetzen','Fill in'),desc:L('das passende Mengenwort schreiben','write the right quantifier')},
   {k:'choice',icon:'✔️',label:L('Auswählen','Choose'),desc:L('das passende Wort wählen','pick the right word')},
   {k:'errors',icon:'🔍',label:L('Fehler finden','Spot the mistake'),desc:L('den richtigen Satz erkennen','find the correct sentence')},
   {k:'order',icon:'🔀',label:L('Satz ordnen','Word order'),desc:L('Wörter in die richtige Reihenfolge','put the words in order')}],
  typeDef:['fill','choice','errors'],gen,
  rules:()=>[
   [L('Zählbar und unzählbar','Countable and uncountable'),L('Zählbare Nomen haben einen Plural (apple – apples). Unzählbare haben keinen Plural und kein a / an: water, milk, bread, money, time, information, advice, homework, news, traffic.','Countable nouns have a plural (apple – apples). Uncountable nouns have no plural and no a / an: water, milk, bread, money, time, information, advice, homework, news, traffic.'),'an apple – some apples · some water (not: a water / waters)'],
   [L('some','some'),L('In bejahten Sätzen, bei Angeboten und Bitten.','In positive sentences, offers and requests.'),'I have some apples. – Would you like some tea? – Can I have some water?'],
   [L('any','any'),L('In Verneinungen und Fragen.','In negatives and questions.'),'I don\'t have any money. – Is there any milk?'],
   [L('something / anything','something / anything'),L('Gleiche Regel wie some / any.','Same rule as some / any.'),'I want something to eat. – I didn\'t see anything.'],
   [L('much','much'),L('Nur mit unzählbaren Nomen, meist in Frage und Verneinung.','Only with uncountable nouns, mostly in questions and negatives.'),'How much milk? – There isn\'t much time.'],
   [L('many','many'),L('Nur mit zählbaren Nomen im Plural.','Only with plural countable nouns.'),'How many apples? – There aren\'t many chairs.'],
   [L('a lot of / lots of','a lot of / lots of'),L('Mit zählbaren und unzählbaren Nomen, vor allem in bejahten Sätzen.','With countable and uncountable nouns, mainly in positive sentences.'),'We have a lot of homework. – She has lots of friends.'],
   [L('too much / too many','too much / too many'),L('Zu viel. too much + unzählbar, too many + zählbar.','Too much. too much + uncountable, too many + countable.'),'too much traffic · too many people'],
   [L('a few / a little','a few / a little'),L('Ein paar / etwas (positiv). a few + zählbar, a little + unzählbar.','Some (positive). a few + countable, a little + uncountable.'),'a few friends · a little time'],
   [L('few / little (ohne a)','few / little (without a)'),L('Kaum / zu wenig (negativ).','Hardly any / not enough (negative).'),'He has few friends. – We have little time.'],
   [L('Typische Fehler','Typical mistakes'),'','<span class="err2">informations / advices / a homework / many money / much friends / The news are…</span>']]
 };
})());
