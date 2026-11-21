/* ===== Thema 3: Vergleichsformen ===== */
TOPICS.push((()=>{
 const A=(a,c,s,g,lv)=>({a,c,s,g,lv}); // g: 1 kurz (-er), 2 lang (more), 3 unregelmässig
 const ADJ=[
  A('tall','taller','tallest',1,1),A('small','smaller','smallest',1,1),A('fast','faster','fastest',1,1),A('slow','slower','slowest',1,1),A('old','older','oldest',1,1),
  A('young','younger','youngest',1,1),A('cheap','cheaper','cheapest',1,1),A('long','longer','longest',1,1),A('high','higher','highest',1,1),A('cold','colder','coldest',1,1),
  A('warm','warmer','warmest',1,1),A('strong','stronger','strongest',1,1),A('big','bigger','biggest',1,1),A('hot','hotter','hottest',1,1),A('nice','nicer','nicest',1,2),
  A('easy','easier','easiest',1,2),A('happy','happier','happiest',1,2),A('heavy','heavier','heaviest',1,2),A('funny','funnier','funniest',1,2),
  A('good','better','best',3,1),A('bad','worse','worst',3,1),A('far','further','furthest',3,3),
  A('expensive','more expensive','most expensive',2,2),A('interesting','more interesting','most interesting',2,2),A('beautiful','more beautiful','most beautiful',2,2),
  A('dangerous','more dangerous','most dangerous',2,2),A('difficult','more difficult','most difficult',2,2),A('popular','more popular','most popular',2,2),A('boring','more boring','most boring',2,2)
 ];
 const AD=Object.fromEntries(ADJ.map(x=>[x.a,x]));
 const lvAdj=()=>ADJ.filter(x=>x.lv<=(S.lvl==='A'?3:S.lvl==='B'?2:1));
 const FACT=[['A giraffe','a horse','tall'],['A cheetah','a lion','fast'],['A car','a bike','expensive'],['The Rhine','the Aare','long'],['Mount Everest','the Matterhorn','high'],['Summer','winter','warm'],
  ['An elephant','a mouse','heavy'],['Zurich','Basel','big'],['A plane','a train','fast'],['Gold','silver','expensive'],['A mouse','a cat','small'],['A snail','a rabbit','slow'],['The Pacific','the Atlantic','big'],
  ['Antarctica','Switzerland','cold'],['A lion','a cat','strong'],['Bern','Zurich','small'],['A castle','a skyscraper','old'],['A shark','a goldfish','dangerous']];
 const SUP=[['Mount Everest','mountain in the world','high'],['The blue whale','animal in the world','big'],['The cheetah','land animal','fast'],['Russia','country in the world','big'],
  ['The Vatican','country in the world','small'],['Antarctica','continent','cold'],['Jupiter','planet in our solar system','big'],['Mercury','planet in our solar system','small'],
  ['The Dufourspitze','mountain in Switzerland','high'],['The giraffe','land animal','tall']];
 const N=['Tom','Anna','Max','Mia','Leo','Sara'];
 const two=()=>{const a=rnd(N);let b;do{b=rnd(N)}while(b===a);return [a,b]};
 // numerische Kontexte: gibt {ctx, x, y, adj} (x ist "mehr" bei adj)
 const NUM={
  tall:()=>{const [a,b]=two(),h=150+Math.floor(Math.random()*40);return {ctx:`${a} is 1.${h-100} m tall. ${b} is 1.${h-100-3-Math.floor(Math.random()*8)} m tall.`,x:a,y:b}},
  old:()=>{const [a,b]=two(),n=13+Math.floor(Math.random()*3);return {ctx:`${a} is ${n} years old. ${b} is ${n-1-Math.floor(Math.random()*2)} years old.`,x:a,y:b}},
  young:()=>{const [a,b]=two(),n=12+Math.floor(Math.random()*3);return {ctx:`${a} is ${n-1-Math.floor(Math.random()*2)} years old. ${b} is ${n} years old.`,x:a,y:b}},
  heavy:()=>{const k=5+Math.floor(Math.random()*5);return {ctx:`The red box weighs ${k+3} kg. The blue box weighs ${k} kg.`,x:'The red box',y:'the blue box'}},
  expensive:()=>{const k=20+Math.floor(Math.random()*5)*10;return {ctx:`The jacket costs CHF ${k+60}. The cap costs CHF ${k}.`,x:'The jacket',y:'the cap'}},
  cheap:()=>{const k=20+Math.floor(Math.random()*5)*10;return {ctx:`The cap costs CHF ${k}. The jacket costs CHF ${k+60}.`,x:'The cap',y:'the jacket'}},
  warm:()=>{const t=14+Math.floor(Math.random()*6);return {ctx:`On Monday it was ${t} °C. On Tuesday it was ${t+6} °C.`,x:'Tuesday',y:'Monday'}},
  cold:()=>{const t=14+Math.floor(Math.random()*6);return {ctx:`On Monday it was ${t} °C. On Tuesday it was ${t-8} °C.`,x:'Tuesday',y:'Monday'}},
  long:()=>{const k=2+Math.floor(Math.random()*4);return {ctx:`The red rope is ${k+3} m long. The blue rope is ${k} m long.`,x:'The red rope',y:'the blue rope'}},
  fast:()=>{const k=10+Math.floor(Math.random()*10);return {ctx:`A bike goes ${k} km/h. A car goes ${k+60} km/h.`,x:'A car',y:'a bike'}},
  good:()=>{const [a,b]=two();return {ctx:`${a} got a 5.5 in the test. ${b} got a 4.5.`,x:a+"'s mark",y:b+"'s"}},
  bad:()=>{const [a,b]=two();return {ctx:`${a} got a 3 in the test. ${b} got a 5.`,x:a+"'s mark",y:b+"'s"}},
  far:()=>({ctx:'Lucerne is 50 km from Zurich. Geneva is 280 km from Zurich.',x:'Geneva',y:'Lucerne',far:1})
 };
 const comp=(a)=>AD[a].c;
 const why={
  c:()=>L('<b>Comparative:</b> kurze Adjektive + -er (taller), lange Adjektive more + Adjektiv (more expensive). Danach steht <i>than</i>. Unregelmässig: good – better, bad – worse, far – further.','<b>Comparative:</b> short adjectives + -er (taller), long adjectives more + adjective (more expensive). <i>than</i> follows. Irregular: good – better, bad – worse, far – further.'),
  s:()=>L('<b>Superlative:</b> the + -est (the tallest) bzw. the most + Adjektiv. Danach in / of. Unregelmässig: the best, the worst, the furthest.','<b>Superlative:</b> the + -est (the tallest) or the most + adjective. in / of follows. Irregular: the best, the worst, the furthest.'),
  a:()=>L('<b>as … as:</b> gleich = as + Adjektiv + as (as tall as). Verneint: not as … as.','<b>as … as:</b> equal = as + adjective + as (as tall as). Negative: not as … as.')
 };
 function numItem(a,type){ // type 'c' | 's' | 'a'
  const g=NUM[a]();
  if(a==='far')return mkFill(g.ctx+' Geneva is ',' from Zurich than Lucerne.',['further','farther'],'(far)',why.c());
  if(type==='a'&&!['bad','good','far','cheap'].includes(a)){
   // gleich alt / gleich gross
   if(a==='tall'||a==='old'){const [x,y]=two();const v=a==='tall'?'1.65 m tall':'14 years old';return mkFill(`${x} is ${v}. ${y} is ${v}. ${x} is as `,` as ${y}.`,[a],'('+a+')',why.a())}
  }
  return mkFill(g.ctx+' '+cap(g.x)+(a==='good'||a==='bad'?' is ':' is '),' than '+g.y+(a==='good'||a==='bad'?'.':'.'),[comp(a)],'('+a+')',why.c());
 }
 const gen={
  fill(){
   const lv=S.lvl,mx=lv==='A'?3:lv==='B'?2:1,al=lvAdj();
   const modes=['c','c','f'];if(lv!=='C')modes.push('s');if(lv==='A')modes.push('a');
   const m=rnd(modes);
   if(m==='s'){const f=rnd(SUP.filter(x=>AD[x[2]].lv<=mx));return supFill(f)}
   if(m==='a')return numItem(rnd(['tall','old']),'a');
   if(m==='f'){const f=rnd(FACT.filter(x=>AD[x[2]].lv<=mx)),ad=AD[f[2]];return mkFill(f[0]+' is ',' than '+f[1]+'.',[ad.c],'('+ad.a+')',why.c())}
   return numItem(rnd(al.filter(x=>NUM[x.a])).a,'c');
  },
  choice(){
   const lv=S.lvl,mx=lv==='A'?3:lv==='B'?2:1;
   if(lv!=='C'&&Math.random()<.4){
    const s=rnd(SUP.filter(x=>AD[x[2]].lv<=mx)),a=AD[s[2]];
    const p=pickOpts(a.s,[a.s,...badSup(a)],2);
    return mkChoice(s[0]+' is the ___ '+s[1]+'.',p.opts,p.idx,L('Welche Form passt?','Which form fits?'),why.s());
   }
   const f=rnd(FACT.filter(x=>AD[x[2]].lv<=mx)),a=AD[f[2]];
   const p=pickOpts(a.c,[a.c,...badForms(a)],2);
   return mkChoice(f[0]+' is ___ than '+f[1]+'.',p.opts,p.idx,L('Welche Form passt?','Which form fits?'),why.c());
  },
  forms(){
   const a=rnd(lvAdj()),full=a.c+', the '+a.s;
   return {type:'text',src:esc(a.a),instr:L('Schreibe Comparative und Superlative, so: <i>tall → taller, the tallest</i>','Write the comparative and superlative, like this: <i>tall → taller, the tallest</i>'),answers:[full,a.c+' the '+a.s,a.c+', '+a.s,a.c+' '+a.s,...(a.a==='far'?['farther, the farthest']:[])],sol:full,why:why.c()};
  },
  errors(){
   const f=rnd(FACT.filter(x=>AD[x[2]].lv<=(S.lvl==='A'?3:S.lvl==='B'?2:1))),a=AD[f[2]];
   const ok=f[0]+' is '+a.c+' than '+f[1]+'.';
   const wr=badForms(a).map(x=>f[0]+' is '+x+' than '+f[1]+'.');
   wr.push(f[0]+' is '+a.c+' then '+f[1]+'.');wr.push(f[0]+' is '+a.c+' as '+f[1]+'.');
   return mkWords(ok,wr,L('Welcher Satz ist richtig?','Which sentence is correct?'),why.c());
  },
  order(){
   const f=rnd(FACT.filter(x=>AD[x[2]].lv<=(S.lvl==='A'?3:S.lvl==='B'?2:1))),a=AD[f[2]];
   const sentence=f[0]+' is '+a.c+' than '+f[1]+'.';
   return mkOrder(sentence,why.c());
  }
 };
 function badForms(a){
  if(a.g===1)return ['more '+a.a,'more '+a.c,a.a+'er'===a.c?'most '+a.a:a.a+'er'];
  if(a.g===2)return [a.a+'er','more '+a.a+'er','most '+a.a];
  return [a.a+'er','more '+a.a,'more '+a.c];
 }
 function supFill(f){
  const a=AD[f[2]],base=a.s.replace(/^most /,'');
  return mkFill(f[0]+' is the ',' '+f[1]+'.',[base],'('+a.a+')',why.s());
 }
 function badSup(a){
  if(a.g===2)return [a.a+'est','the most '+a.a+'est','more '+a.a];
  return ['most '+a.a,a.c,a.a+'est'===a.s?'more '+a.a:a.a+'est'];
 }
 return {data:{fact:FACT,sup:SUP},id:'c',grp:'adj',ic:'📏',ready:1,fillInstr:()=>L('Setze die richtige Form ein.','Fill in the correct form.'),
  name:()=>L('Vergleichsformen','Comparatives & superlatives'),desc:()=>'bigger, the biggest, more interesting',
  lvDesc:()=>L('C: kurze Adjektive und good / bad. B: zusätzlich lange Adjektive (more …) und Superlative. A: zusätzlich as … as und far.','C: short adjectives and good / bad. B: plus long adjectives (more …) and superlatives. A: plus as … as and far.'),
  subTitle:()=>L('Unterthemen','Sub-topics'),subs:()=>[],subDef:[],
  types:()=>[
   {k:'fill',icon:'✏️',label:L('Einsetzen','Fill in'),desc:L('die richtige Form schreiben','write the correct form')},
   {k:'choice',icon:'✔️',label:L('Auswählen','Choose'),desc:L('die richtige Form wählen','pick the correct form')},
   {k:'forms',icon:'📊',label:L('Formen bilden','Make the forms'),desc:'tall → taller, the tallest'},
   {k:'errors',icon:'🔍',label:L('Fehler finden','Spot the mistake'),desc:L('den richtigen Satz erkennen','find the correct sentence')},
   {k:'order',icon:'🔀',label:L('Satz ordnen','Word order'),desc:L('Wörter in die richtige Reihenfolge','put the words in order')}],
  typeDef:['fill','choice','forms','errors'],gen,
  rules:()=>[
   [L('Kurze Adjektive (1 Silbe)','Short adjectives (1 syllable)'),L('Comparative mit -er, Superlative mit the -est.','Comparative with -er, superlative with the -est.'),'small – smaller – the smallest. Tom is taller than Max.'],
   [L('Rechtschreibung','Spelling'),L('Bei Adjektiven auf -e wird nur -r / -st angehängt; nach kurzem Vokal wird der Konsonant verdoppelt; -y wird -i.','Adjectives ending in -e only add -r / -st; after a short vowel the consonant is doubled; -y becomes -i.'),'nice – nicer – the nicest · big – bigger – the biggest · happy – happier – the happiest'],
   [L('Lange Adjektive (3+ Silben, viele mit 2)','Long adjectives (3+ syllables, many with 2)'),L('more / the most + Adjektiv.','more / the most + adjective.'),'interesting – more interesting – the most interesting'],
   [L('Zwei Silben auf -y, -er, -le, -ow','Two syllables ending in -y, -er, -le, -ow'),L('Meist -er / -est.','Mostly -er / -est.'),'easy – easier, clever – cleverer'],
   [L('Unregelmässig','Irregular'),'','good – better – the best · bad – worse – the worst · far – further (farther) – the furthest (farthest) · little – less – the least · much / many – more – the most'],
   [L('than und the','than and the'),L('than steht beim Comparative, the beim Superlative.','than goes with the comparative, the with the superlative.'),'She is older than me. – He is the oldest in the class.'],
   [L('Gleichheit','Equality'),L('as … as; verneint: not as … as.','as … as; negative: not as … as.'),'He is as tall as me. – It isn\'t as expensive as that one.'],
   [L('Superlative mit in / of','Superlative with in / of'),'','the best in the world, the best of all'],
   [L('Typische Fehler','Typical mistakes'),'','<span class="err2">more bigger / the most biggest / more good / than → then / Tom is taller as Max</span>']]
 };
})());
