/* ===== Thema 5: Präpositionen ===== */
TOPICS.push((()=>{
 const B=(s,ok,bad,lv,sb,w)=>({s,ok,bad,lv,sub:sb,h:'',w:w||''});
 const W={
  t:'Zeit: at + Uhrzeit / Zeitpunkt (at 8 o\'clock, at noon, at night), on + Tag und Datum (on Monday, on 5 May), in + Monat, Jahr, Jahreszeit, Tageszeit (in May, in 2024, in summer, in the morning).|Time: at + clock time (at 8 o\'clock, at noon, at night), on + days and dates (on Monday, on 5 May), in + months, years, seasons, parts of the day (in May, in 2024, in summer, in the morning).',
  t2:'for + Zeitdauer (for five years), since + Zeitpunkt (since 2018), ago = vor (two years ago), during + Ereignis / Zeitraum, until = bis.|for + length of time (for five years), since + starting point (since 2018), ago (two years ago), during + event / period, until.',
  p:'Ort: in + Raum, Stadt, Land (in the kitchen, in Zurich); on + Oberfläche, Stockwerk (on the table, on the wall); at + Punkt, Ort (at the bus stop, at home).|Place: in + space, town, country (in the kitchen, in Zurich); on + surface, floor (on the table, on the wall); at + point, location (at the bus stop, at home).',
  p2:'Lage: next to, between, behind, opposite, above / under, in front of.|Position: next to, between, behind, opposite, above / under, in front of.',
  m:'Bewegung: to = hin zu einem Ziel (go to school), into = hinein, out of = heraus, across = quer über, through = durch, along = entlang, up / down = hinauf / hinunter, past = vorbei an, round = um … herum, over = über.|Movement: to = towards a place (go to school), into, out of, across, through, along, up / down, past, round, over.',
  f:'Feste Verbindungen mit Präposition muss man lernen. Oft anders als im Deutschen: good at, interested in, afraid of, wait for, listen to.|Fixed phrases with prepositions have to be learned. Often different from German: good at, interested in, afraid of, wait for, listen to.'
 };
 const CUR=[
  // Zeit
  B('My lesson starts ___ 8 o\'clock.',['at'],['on','in'],1,'t',W.t),
  B('We have no school ___ Saturday.',['on'],['at','in'],1,'t',W.t),
  B('I was born ___ May.',['in'],['on','at'],1,'t',W.t),
  B('My birthday is ___ 12 June.',['on'],['in','at'],1,'t',W.t),
  B('We go skiing ___ winter.',['in'],['on','at'],1,'t',W.t),
  B('I get up ___ half past six.',['at'],['on','in'],1,'t',W.t),
  B('I do my homework ___ the afternoon.',['in'],['on','at'],1,'t',W.t),
  B('She was born ___ 2011.',['in'],['on','at'],1,'t',W.t),
  B('See you ___ Monday!',['on'],['in','at'],1,'t',W.t),
  B("Let's meet ___ the weekend.",['at','on'],['in','to'],2,'t',W.t),
  B('We often go to bed late ___ night.',['at'],['in','on'],2,'t',W.t),
  B('The film starts ___ Friday evening.',['on'],['in','at'],2,'t',W.t),
  B('We eat a big meal ___ Christmas Day.',['on'],['at','in'],2,'t',W.t),
  B('We have a test ___ the end of the week.',['at'],['on','in'],2,'t',W.t),
  B('I have lived here ___ five years.',['for'],['since','ago'],3,'t',W.t2),
  B('I have lived here ___ 2018.',['since'],['for','ago'],3,'t',W.t2),
  B('He moved to Bern two years ___.',['ago'],['before','since'],3,'t',W.t2),
  B("Don't use your phone ___ the lesson.",['during'],['for','at'],3,'t',W.t2),
  B("I'll wait ___ five o'clock.",['until'],['since','at'],3,'t',W.t2),
  // Ort
  B('The book is ___ the table.',['on'],['in','at'],1,'p',W.p),
  B('The milk is ___ the fridge.',['in'],['on','at'],1,'p',W.p),
  B('Tom is ___ home today.',['at'],['in','on'],1,'p',W.p),
  B('She lives ___ Zurich.',['in'],['at','on'],1,'p',W.p),
  B('He is waiting ___ the bus stop.',['at'],['in','on'],1,'p',W.p),
  B('The picture is ___ the wall.',['on'],['in','at'],1,'p',W.p),
  B('There is a bird ___ the tree.',['in'],['on','at'],1,'p',W.p),
  B('My room is ___ the first floor.',['on'],['in','at'],1,'p',W.p),
  B('The bank is ___ the post office and the shop.',['between'],['behind','among'],2,'p',W.p2),
  B('The cat is hiding ___ the sofa.',['behind','under'],['between','across'],2,'p',W.p2),
  B('The cinema is ___ the bank. I can see it from the bank window.',['opposite'],['between','into'],2,'p',W.p2),
  B('There is a lamp ___ the table.',['above','over'],['between','into'],2,'p',W.p2),
  B('Anna sits ___ me in class.',['next to'],['between','into'],2,'p',W.p2),
  // Bewegung
  B('I go ___ school by bike.',['to'],['at','in'],1,'m',W.m),
  B("Let's go ___ the cinema.",['to'],['in','at'],1,'m',W.m),
  B('We drive ___ Italy every summer.',['to'],['in','at'],1,'m',W.m),
  B('Welcome ___ Switzerland!',['to'],['in','at'],1,'m',W.m),
  B('She goes ___ work by train.',['to'],['at','in'],1,'m',W.m),
  B('She walked ___ the room and sat down.',['into'],['out of','at'],2,'m',W.m),
  B('The children ran ___ the street.',['across','along'],['at','out of'],2,'m',W.m),
  B('We walked ___ the forest.',['through'],['at','over'],2,'m',W.m),
  B('She took a book ___ her bag.',['out of','from'],['into','at'],2,'m',W.m),
  B('He put the keys ___ his pocket.',['into','in'],['out of','across'],2,'m',W.m),
  B('Walk ___ the river for ten minutes.',['along'],['at','into'],3,'m',W.m),
  B('I arrived ___ Zurich at noon.',['in'],['to','into'],3,'m','arrive in + Stadt / Land, arrive at + kleiner Ort|arrive in + city / country, arrive at + small place'),
  B('He arrived ___ the station late.',['at'],['to','into'],3,'m','arrive in + Stadt / Land, arrive at + kleiner Ort|arrive in + city / country, arrive at + small place'),
  B('Walk ___ the bridge to get to the other side.',['over','across'],['at','into'],3,'m',W.m),
  // feste Verbindungen
  B("I'm interested ___ music.",['in'],['on','at'],2,'f',W.f),
  B('She is good ___ maths.',['at'],['in','on'],2,'f',W.f),
  B('He is afraid ___ spiders.',['of'],['from','at'],2,'f',W.f),
  B('Please listen ___ me.',['to'],['at','for'],1,'f',W.f),
  B('We are waiting ___ the bus.',['for'],['to','at'],1,'f',W.f),
  B("I'm looking ___ my keys. Have you seen them?",['for'],['at','to'],2,'f',W.f),
  B('Look ___ the board, please.',['at'],['to','for'],1,'f',W.f),
  B('Thank you ___ your help.',['for'],['to','of'],1,'f',W.f),
  B('We talked ___ the problem.',['about'],['for','at'],1,'f',W.f),
  B("I'm worried ___ the test.",['about'],['of','for'],2,'f',W.f),
  B('He is proud ___ his sister.',['of'],['for','at'],2,'f',W.f),
  B('I agree ___ you.',['with'],['to','for'],2,'f',W.f),
  B('She is excited ___ the trip.',['about'],['to','of'],2,'f',W.f),
  B('Switzerland is famous ___ its chocolate.',['for'],['of','from'],2,'f',W.f),
  B('She is married ___ a doctor.',['to'],['with','from'],3,'f',W.f),
  B('This book is different ___ the film.',['from','to'],['with','of'],3,'f',W.f),
  B('She is angry ___ me.',['with','at'],['of','from'],3,'f',W.f),
  B('The film is similar ___ the book.',['to'],['with','of'],3,'f',W.f),
  B('Do you believe ___ ghosts?',['in'],['on','at'],3,'f',W.f),
  B('This depends ___ the weather.',['on'],['of','from'],3,'f',W.f),
  B("I'm looking forward ___ the holidays.",['to'],['for','at'],3,'f',W.f),
  B('He apologised ___ being late.',['for'],['about','at'],3,'f',W.f)
 ];
 const TA=['8 o\'clock','half past nine','noon','midnight','night'],TO=['Monday','Friday evening','my birthday','25 December','Sunday morning','Saturday'],TI=['the morning','May','2024','summer','the evening','March','the afternoon'];
 const FR=['We have a test ___ X.',"I'll call you ___ X.",'The party is ___ X.'];
 function genT(){
  const k=rnd(['at','on','in']),x=rnd(k==='at'?TA:k==='on'?TO:TI);
  const bad=['at','on','in'].filter(y=>y!==k);
  return B(rnd(FR).replace('X',x),[k],bad,1,'t',W.t);
 }
 const lvl=()=>S.lvl==='A'?3:S.lvl==='B'?2:1;
 const pool=()=>{
  const s=sub('p'),on=k=>!s.length||s.includes(k);
  const p=CUR.filter(b=>b.lv<=lvl()&&on(b.sub));
  if(on('t'))for(let i=0;i<6;i++)p.push(genT());
  return p.length?p:CUR.filter(b=>b.lv<=lvl());
 };
 const gen=bankGens(pool,b=>'');
 // Standardwarum je Unterthema
 const base=gen;
 return {data:{bank:CUR},id:'p',grp:'praep',ic:'📍',ready:1,
  name:()=>L('Präpositionen','Prepositions'),desc:()=>'in / on / at, to / into, interested in',
  fillInstr:()=>L('Setze die passende Präposition ein.','Fill in the correct preposition.'),
  lvDesc:()=>L('C: at / on / in bei Zeit und Ort, to bei Bewegung, einfache feste Verbindungen. B: dazu Lage (next to, between …), into / out of / across und mehr feste Verbindungen. A: dazu for / since / ago / during und schwierigere Verbindungen.','C: at / on / in for time and place, to for movement, simple fixed phrases. B: plus position (next to, between …), into / out of / across and more fixed phrases. A: plus for / since / ago / during and harder phrases.'),
  subTitle:()=>L('Unterthemen','Sub-topics'),
  subs:()=>[{k:'t',n:L('Zeit','Time')},{k:'p',n:L('Ort','Place')},{k:'m',n:L('Bewegung','Movement')},{k:'f',n:L('Feste Verbindungen','Fixed phrases')}],subDef:['t','p','m','f'],
  types:()=>[
   {k:'fill',icon:'✏️',label:L('Einsetzen','Fill in'),desc:L('die Präposition schreiben','write the preposition')},
   {k:'choice',icon:'✔️',label:L('Auswählen','Choose'),desc:L('die richtige Präposition wählen','pick the right preposition')},
   {k:'errors',icon:'🔍',label:L('Fehler finden','Spot the mistake'),desc:L('den richtigen Satz erkennen','find the correct sentence')},
   {k:'order',icon:'🔀',label:L('Satz ordnen','Word order'),desc:L('Wörter in die richtige Reihenfolge','put the words in order')}],
  typeDef:['fill','choice','errors'],gen:base,
  rules:()=>[
   [L('Zeit: at / on / in','Time: at / on / in'),'',L('at + Uhrzeit, Zeitpunkt: at 8 o\'clock, at noon, at night, at the weekend (BrE)<br>on + Tag, Datum: on Monday, on 5 May, on Friday evening<br>in + Monat, Jahr, Jahreszeit, Tageszeit: in May, in 2024, in summer, in the morning','at + clock time: at 8 o\'clock, at noon, at night, at the weekend (BrE)<br>on + days, dates: on Monday, on 5 May, on Friday evening<br>in + months, years, seasons, parts of the day: in May, in 2024, in summer, in the morning')],
   [L('for / since / ago / during / until','for / since / ago / during / until'),L('for = Dauer, since = seit einem Zeitpunkt, ago = vor, during = während eines Zeitraums, until = bis.','for = length, since = starting point, ago = back in time, during = within a period, until = up to.'),'for five years · since 2018 · two years ago · during the lesson · until Friday'],
   [L('Ort: in / on / at','Place: in / on / at'),'',L('in + Raum, Stadt, Land: in the kitchen, in Zurich, in Switzerland<br>on + Oberfläche, Stockwerk: on the table, on the wall, on the first floor<br>at + Punkt, Ort: at the bus stop, at the door, at home, at school','in + space, town, country: in the kitchen, in Zurich, in Switzerland<br>on + surface, floor: on the table, on the wall, on the first floor<br>at + point, location: at the bus stop, at the door, at home, at school')],
   [L('Lage','Position'),'','next to · between · behind · in front of · opposite · above / under'],
   [L('Bewegung','Movement'),L('to = zu einem Ziel hin, into = hinein, out of = heraus, across = quer über, through = durch, along = entlang, up / down = hinauf / hinunter, past = vorbei an, round = um … herum, over = über.','to = towards a goal, into, out of, across, through, along, up / down, past, round, over.'),'go to school · walk into the room · take a book out of the bag · walk along the river'],
   [L('Ankommen','Arriving'),'','arrive in + city / country · arrive at + station, airport, small place'],
   [L('Feste Verbindungen','Fixed phrases'),L('Muss man lernen, oft anders als im Deutschen.','To be learned, often different from German.'),'good at · interested in · afraid of · proud of · worried about · wait for · look for · listen to · look at · talk about · thank … for · agree with · depend on'],
   [L('Typische Fehler','Typical mistakes'),'','<span class="err2">I\'m interested on… / good in maths / I wait for to… / in Monday / at July / I go in school</span>']]
 };
})());
