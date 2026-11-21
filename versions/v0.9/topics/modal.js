/* ===== Thema 2: Modalverben ===== */
TOPICS.push((()=>{
 const SUBJ=[{t:'I',th:0,ans:'I',nq:1},{t:'you',th:0,ans:'I'},{t:'he',th:1,ans:'he'},{t:'she',th:1,ans:'she'},{t:'we',th:0,ans:'we',ns:1},{t:'they',th:0,ans:'they'},{t:'Tom',th:1,ans:'he'},{t:'Anna',th:1,ans:'she'},{t:'my brother',th:1,ans:'he'},{t:'my parents',th:0,ans:'they'}];
 const VP=['play the guitar','swim','help us','wear a uniform','do the homework','be quiet','finish the work','go home early','speak English','open the window','clean the room','see a doctor','wait here','call me','read the text'];
 // Szenarien: [Satz mit ___, Antwort, falsche Optionen, Niveau 1-3, Gruppe, Erklärung de|en]
 const SC=[
  ['Look! That dog ___ swim very well.','can',['must','should'],1,'can','can = Fähigkeit.|can = ability.'],
  ['She is only three, so she ___ read yet.',"can't",['must','should'],1,'can','can\'t = nicht können.|can\'t = not able to.'],
  ['He ___ speak three languages. He is amazing!','can',["mustn't",'should'],1,'can','can = Fähigkeit.|can = ability.'],
  ['___ I open the window, please? It is very hot in here.','Can',['Do','Am'],1,'can','Bitte um Erlaubnis: Can I …?|Asking for permission: Can I …?'],
  ['You ___ eat so much sugar. It is bad for your teeth.',"shouldn't",['can','must'],1,'should','shouldn\'t = Rat, etwas nicht zu tun.|shouldn\'t = advice not to do something.'],
  ['You look tired. You ___ go to bed early tonight.','should',["mustn't","don't have to"],1,'should','should = Rat.|should = advice.'],
  ['I have a bad cold. I ___ see a doctor.','should',["mustn't","don't have to"],1,'should','should = Rat.|should = advice.'],
  ['Smoking is forbidden here. You ___ smoke.',"mustn't",["don't have to",'can'],1,'must','mustn\'t = Verbot.|mustn\'t = prohibition.'],
  ['In the library you ___ talk loudly. It is not allowed.',"mustn't",["don't have to",'can'],1,'must','mustn\'t = Verbot.|mustn\'t = prohibition.'],
  ['At our school we ___ wear a uniform. It is the rule.','have to',["don't have to",'should'],1,'must','have to = Pflicht von aussen (Regel).|have to = obligation from outside (rule).'],
  ['Our teacher says we ___ do our homework every day.','have to',["mustn't",'can'],1,'must','have to = Pflicht von aussen.|have to = obligation from outside.'],
  ['Tomorrow is Sunday. We ___ get up early.',"don't have to",["mustn't",'have to'],1,'must','don\'t have to = nicht nötig (aber erlaubt).|don\'t have to = not necessary (but allowed).'],
  ['Do you ___ wear a helmet when you ride a bike?','have to',['must','can'],1,'must','Frage mit have to: Do you have to …? (Nicht: Do you must …?)|Question with have to: Do you have to …? (Not: Do you must …?)'],
  ['You ___ pay for the museum on Sundays. It is free.',"don't have to",["mustn't","shouldn't"],2,'must','don\'t have to = nicht nötig.|don\'t have to = not necessary.'],
  ['You ___ use your phone during the test. It is against the rules.',"mustn't",["don't have to",'can'],2,'must','mustn\'t = Verbot.|mustn\'t = prohibition.'],
  ['Yesterday I ___ get up at 5 o\'clock because of the flight.','had to',['must','should'],2,'must','Vergangenheit von must / have to: had to.|Past of must / have to: had to.'],
  ['Passengers ___ keep their seatbelts fastened. It is the law.','must',["don't have to",'can'],2,'must','must = starke Pflicht, Gesetz.|must = strong obligation, law.'],
  ['___ you help me with my homework, please?','Could',['Must','Are'],2,'can','Could = höfliche Bitte.|Could = polite request.'],
  ['When I was five, I ___ swim.','could',['can','should'],2,'can','could = Fähigkeit in der Vergangenheit.|could = ability in the past.'],
  ['Do we ___ bring a pen to the exam?','have to',['must','should'],2,'must','Frage mit have to: Do we have to …?|Question with have to: Do we have to …?'],
  ['She ___ come to the party if she does not want to. It is her choice.',"doesn't have to",["mustn't","can't"],2,'must','doesn\'t have to = nicht nötig.|doesn\'t have to = not necessary.'],
  ['I am sorry, you ___ park here. It is a private car park.',"can't",["don't have to",'should'],3,'can','can\'t = nicht erlaubt.|can\'t = not allowed.'],
  ['Last week we ___ stay at home because it was snowing.','had to',['must','should'],3,'must','Vergangenheit: had to.|Past: had to.'],
  ['___ I call you later? I am busy now.','Should',['Do','Am'],3,'should','Should I …? = Soll ich …?|Should I …? = Do you want me to …?']
 ];
 const gnd=r=>r.m==='have to'?(r.S.th?'has to':'have to'):r.m;
 const rec=(mods,noI,noWe)=>({m:rnd(mods),S:rnd(SUBJ.filter(s=>!(noI&&s.nq)&&!(noWe&&s.ns))),vp:rnd(VP)});
 const stmt=r=>cap(r.S.t)+' '+gnd(r)+' '+r.vp+'.';
 const ques=r=>r.m==='have to'?(r.S.th?'Does':'Do')+' '+r.S.t+' have to '+r.vp+'?':cap(r.m)+' '+r.S.t+' '+r.vp+'?';
 const negForms=r=>r.m==='can'?["can't",'cannot','can not']:r.m==='should'?["shouldn't",'should not']:r.m==='must'?["mustn't",'must not']:(r.S.th?["doesn't have to",'does not have to']:["don't have to",'do not have to']);
 const negSent=r=>negForms(r).map(f=>cap(r.S.t)+' '+f+' '+r.vp+'.');
 const mods=()=>{const s=sub('m');const all=s.length?s:['can','must','should'];let l=[];if(all.includes('can'))l.push('can');if(all.includes('must'))l.push('have to','must');if(all.includes('should'))l.push('should');return l};
 const qMods=()=>mods().filter(m=>m!=='must').length?mods().filter(m=>m!=='must'):['have to'];
 const lvOK=sc=>sc[3]<=(S.lvl==='A'?3:S.lvl==='B'?2:1);
 const scs=()=>{const s=sub('m');const l=SC.filter(x=>lvOK(x)&&(!s.length||s.includes(x[4])));return l.length?l:SC.filter(lvOK)};
 const whyS=sc=>sc[5].split('|')[LANG==='de'?0:1];
 const w={
  q:()=>L('<b>Frage:</b> can / should: Modalverb nach vorn (Can she swim?). have to: do / does + Subjekt + have to (Does she have to swim?).','<b>Question:</b> can / should: modal to the front (Can she swim?). have to: do / does + subject + have to (Does she have to swim?).'),
  n:()=>L('<b>Verneinung:</b> can\'t, shouldn\'t, mustn\'t = Verbot, don\'t / doesn\'t have to = nicht nötig. Nach dem Modalverb steht die Grundform.','<b>Negative:</b> can\'t, shouldn\'t, mustn\'t = prohibition, don\'t / doesn\'t have to = not necessary. The base form follows the modal.'),
  s:()=>L('<b>Kurzantwort:</b> Yes / No + Pronomen + Modalverb (can, should) bzw. do / does bei have to.','<b>Short answer:</b> Yes / No + pronoun + modal (can, should) or do / does with have to.')
 };
 const gen={
  fill(){const sc=rnd(scs());const all=[sc[1],...sc[2]];const o=sc[0].indexOf('___');
   const ALT={"mustn't":["can't",'must not','cannot'],"can't":['cannot','can not',"mustn't"],"shouldn't":['should not'],"don't have to":['do not have to'],"doesn't have to":['does not have to'],'must':['have to'],'have to':['must']};
   let ans=[sc[1],...(ALT[sc[1]]||[])];
   if(sc[1]==='have to'&&/\bDo (you|we)\b|^Do /.test(sc[0]))ans=['have to'];
   if(sc[1]==="can't")ans=[sc[1],'cannot','can not',...(/forbidden|park here/.test(sc[0])?["mustn't"]:[])];
   return mkFill(sc[0].slice(0,o),sc[0].slice(o+3),ans,all.slice().sort().join(' / '),whyS(sc))},
  choice(){const sc=rnd(scs());const pr=pickOpts(sc[1],[sc[1],...sc[2]],2);return mkChoice(sc[0],pr.opts,pr.idx,L('Welches Wort passt?','Which word fits?'),whyS(sc))},
  question(){const r=rec(qMods(),1);return mkText(stmt(r),L('Mach eine Frage aus dem Satz.','Make a question from the sentence.'),[ques(r)],w.q())},
  neg(){const r=rec(mods(),0);const ans=negSent(r);return mkText(stmt(r),L('Verneine den Satz.','Make the sentence negative.'),ans,w.n())},
  order(){const r=rec(qMods(),1);return mkOrder(ques(r),w.q())},
  short(){
   const r=rec(qMods(),1,1),yes=Math.random()<.5,hv=r.m==='have to';
   const pos=hv?(r.S.th?'does':'do'):r.m;
   let ans,alts=[];
   if(yes)ans='Yes, '+r.S.ans+' '+pos+'.';
   else if(hv){ans='No, '+r.S.ans+' '+pos+"n't.";alts=['No, '+r.S.ans+' '+pos+' not.']}
   else{const nf=negForms(r);ans='No, '+r.S.ans+' '+nf[0]+'.';alts=nf.slice(1).map(f=>'No, '+r.S.ans+' '+f+'.')}
   const it=mkText(ques(r),'',[ans,...alts],w.s());
   it.instr=L('Antworte mit einer Kurzantwort: ','Give a short answer: ')+'<b>'+(yes?'Yes':'No')+'</b>';return it;
  },
  errors(){
   const r=rec(['can','should','have to'],1,0),S0=cap(r.S.t),hv=r.m==='have to';
   const ok=stmt(r);
   const wr=hv?[S0+' '+(r.S.th?'have to':'has to')+' '+r.vp+'.',S0+' must to '+r.vp+'.',S0+' '+(r.S.th?'has':'have')+' '+r.vp+'.']
             :[S0+' '+r.m+'s '+r.vp+'.',S0+' '+r.m+' to '+r.vp+'.',S0+' does '+r.m+' '+r.vp+'.'];
   return mkWords(ok,wr,L('Welcher Satz ist richtig?','Which sentence is correct?'),L('Nach can / should steht die Grundform ohne to und ohne -s. Bei have to steht to.','After can / should comes the base form without to and without -s. have to keeps its to.'));
  }
 };
 return {data:{sc:SC},id:'m',grp:'verben',ic:'🔒',ready:1,fillInstr:()=>L('Setze das passende Modalverb ein.','Fill in the correct modal verb.'),
  name:()=>L('Modalverben','Modal verbs'),desc:()=>'can, must, should, have to',
  lvDesc:()=>L('C: can, should, must, have to im Present. B: mehr Situationen (nicht nötig / Verbot, Fragen). A: zusätzlich could und had to.','C: can, should, must, have to in the present. B: more situations (not necessary / prohibited, questions). A: plus could and had to.'),
  subTitle:()=>L('Unterthemen','Sub-topics'),
  subs:()=>[{k:'can',n:'can / could'},{k:'must',n:'must / have to'},{k:'should',n:'should'}],subDef:['can','must','should'],
  types:()=>[
   {k:'fill',icon:'✏️',label:L('Einsetzen','Fill in'),desc:L('das passende Modalverb schreiben','write the right modal')},
   {k:'choice',icon:'✔️',label:L('Auswählen','Choose'),desc:L('das passende Wort wählen','pick the right word')},
   {k:'question',icon:'❓',label:L('Frage bilden','Make a question'),desc:L('Aussage → Frage','statement → question')},
   {k:'neg',icon:'🚫',label:L('Verneinen','Make negative'),desc:L('Aussage → Verneinung','statement → negative')},
   {k:'order',icon:'🔀',label:L('Satz ordnen','Word order'),desc:L('Wörter in die richtige Reihenfolge','put the words in order')},
   {k:'short',icon:'💬',label:L('Kurzantwort','Short answer'),desc:'Yes, she can. / No, he doesn\'t.'},
   {k:'errors',icon:'🔍',label:L('Fehler finden','Spot the mistake'),desc:L('den richtigen Satz erkennen','find the correct sentence')}],
  typeDef:['fill','choice','question','neg'],gen,
  rules:()=>[
   [L('Form','Form'),L('Nach can, could, must, should, will, would steht die Grundform ohne to und ohne -s.','After can, could, must, should, will, would comes the base form without to and without -s.'),'She can swim. – He must go. (not: She cans / must to go)'],
   [L('Frage und Verneinung ohne do','Questions and negatives without do'),'','Can you help? – I can\'t swim. – Should we go? – You shouldn\'t worry.'],
   [L('can','can'),L('Fähigkeit und Erlaubnis. Verneint: can\'t / cannot.','Ability and permission. Negative: can\'t / cannot.'),'I can play the piano. – Can I open the window?'],
   [L('could','could'),L('Höfliche Bitte und Fähigkeit in der Vergangenheit.','Polite requests and ability in the past.'),'Could you help me? – I could swim when I was five.'],
   [L('must','must'),L('Starke Pflicht oder Notwendigkeit, oft vom Sprecher selbst.','Strong obligation or necessity, often from the speaker.'),'I must call my mum.'],
   [L('have to','have to'),L('Pflicht von aussen, Regel. Frage und Verneinung mit do. Vergangenheit: had to.','Obligation from outside, a rule. Questions and negatives with do. Past: had to.'),'We have to wear uniforms. – Do you have to…? – She doesn\'t have to…'],
   [L('mustn\'t ≠ don\'t have to','mustn\'t ≠ don\'t have to'),L('mustn\'t = Verbot. don\'t have to = nicht nötig, aber erlaubt.','mustn\'t = prohibition. don\'t have to = not necessary, but allowed.'),'You mustn\'t smoke here. – You don\'t have to come.'],
   [L('should / shouldn\'t','should / shouldn\'t'),L('Rat.','Advice.'),'You should see a doctor. – You shouldn\'t eat so much sugar.'],
   [L('Keine Vergangenheit von must','No past of must'),L('In der Vergangenheit steht had to.','In the past, use had to.'),'Yesterday I had to…'],
   [L('Typische Fehler','Typical mistakes'),'','<span class="err2">He cans / She must to go / Does he can…? / You don\'t must… / I have to not…</span>']]
 };
})());
