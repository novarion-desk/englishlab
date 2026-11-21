/* ===== Thema 1: Fragen & Verneinung ===== */
TOPICS.push((()=>{
 const SUBJ=[
  {t:'I',th:0,ans:'I',nq:1},{t:'you',th:0,ans:'I'},{t:'he',th:1,ans:'he'},{t:'she',th:1,ans:'she'},{t:'we',th:0,ans:'we',ns:1},{t:'they',th:0,ans:'they'},
  {t:'Tom',th:1,ans:'he',who:1},{t:'Anna',th:1,ans:'she',who:1},{t:'my brother',th:1,ans:'he',who:1},{t:'my sister',th:1,ans:'she',who:1},
  {t:'the teacher',th:1,ans:'he',who:1},{t:'my parents',th:0,ans:'they',who:1},{t:'our neighbours',th:0,ans:'they',who:1}
 ];
 const V=(i,s,p,objs)=>({i,s,p,objs:objs.map(o=>({k:o[0],o:o.slice(2)}))});
 const VERBS=[
  V('play','plays','played',['w:football','w:the guitar','w:computer games','w:tennis']),
  V('watch','watches','watched',['w:TV','w:a film','w:YouTube videos']),
  V('like','likes','liked',['w:pizza','w:pasta','w:this song']),
  V('eat','eats','ate',['w:breakfast','w:an apple','w:pizza']),
  V('read','reads','read',['w:a book','w:the news','w:comics']),
  V('drink','drinks','drank',['w:tea','w:milk','w:water']),
  V('buy','buys','bought',['w:a new phone','w:bread','w:a ticket']),
  V('see','sees','saw',['w:a film','w:your friends']),
  V('write','writes','wrote',['w:emails','w:a letter','w:a story']),
  V('make','makes','made',['w:lunch','w:a cake','w:a video']),
  V('have','has','had',['w:a dog','w:a bike','w:two brothers']),
  V('listen','listens','listened',['n:to music','n:to the radio','n:to podcasts']),
  V('live','lives','lived',['p:in Zurich','p:in a small town','p:near the station']),
  V('work','works','worked',['p:in a shop','p:in a hospital','p:at a bank']),
  V('study','studies','studied',['w:English','w:French','n:for the test']),
  V('go','goes','went',['p:to school','p:to the cinema','p:to the gym']),
  V('walk','walks','walked',['p:to school','p:in the park']),
  V('swim','swims','swam',['p:in the lake','p:in the pool']),
  V('meet','meets','met',['w:friends','w:my cousins']),
  V('call','calls','called',['w:a friend','w:the doctor','w:the dentist']),
  V('help','helps','helped',['w:a classmate','w:our neighbour']),
  V('cook','cooks','cooked',['w:dinner','w:pasta','w:a big meal']),
  V('sing','sings','sang',['w:a song','p:in the choir']),
  V('take','takes','took',['w:the bus','w:photos']),
  V('visit','visits','visited',['w:our grandparents','w:a museum'])
 ];
 const TM={PS:['every day','on Saturdays','every morning','at the weekend','after school'],PaS:['yesterday','last week','last night','two days ago','on Saturday']};
 const TNAME={PS:'Present Simple',PaS:'Past Simple'};
 const tenses=()=>S.lvl==='C'?['PS']:(sub('q').length?sub('q'):['PS']);
 function rec(noI,noWe){
  const v=rnd(VERBS),o=rnd(v.objs),t=rnd(tenses());
  const subj=rnd(SUBJ.filter(s=>!(noI&&s.nq)&&!(noWe&&s.ns)));
  return {v,o,t,S:subj,tm:(t==='PaS'||Math.random()<.5)?rnd(TM[t]):''};
 }
 const vf=r=>r.t==='PaS'?r.v.p:(r.S.th?r.v.s:r.v.i);
 const aux=r=>r.t==='PaS'?'did':(r.S.th?'does':'do');
 const tmS=r=>r.tm?' '+r.tm:'';
 const stmt=r=>cap(r.S.t)+' '+vf(r)+' '+r.o.o+tmS(r)+'.';
 const negB=(r,full)=>{const a=aux(r);return cap(r.S.t)+' '+(full?a+' not':a+"n't")+' '+r.v.i+' '+r.o.o+tmS(r)+'.'};
 const ques=r=>cap(aux(r))+' '+r.S.t+' '+r.v.i+' '+r.o.o+tmS(r)+'?';
 const why={
  q:()=>L('<b>Frage:</b> do / does / did + Subjekt + Verb in der Grundform. Am Verb steht kein -s und kein -ed.','<b>Question:</b> do / does / did + subject + base verb. No -s or -ed on the verb.'),
  n:()=>L('<b>Verneinung:</b> don\'t / doesn\'t / didn\'t + Verb in der Grundform. Am Verb steht kein -s und kein -ed.','<b>Negative:</b> don\'t / doesn\'t / didn\'t + base verb. No -s or -ed on the verb.'),
  s:()=>L('<b>Kurzantwort:</b> Yes / No + Pronomen + Hilfsverb (do, does, did). Das Verb wird nicht wiederholt.','<b>Short answer:</b> Yes / No + pronoun + auxiliary (do, does, did). The verb is not repeated.'),
  w:()=>L('<b>Fragewort:</b> Fragewort + do / does / did + Subjekt + Grundform. Fragt man nach dem Subjekt (who), steht kein do: <i>Who plays football?</i>','<b>Question word:</b> question word + do / does / did + subject + base verb. Asking for the subject (who) takes no do: <i>Who plays football?</i>')
 };
 const gen={
  fill(){
   const r=rec(1);
   if(Math.random()<.5){
    const a=aux(r),con=a==='does'?"doesn't":a==='do'?"don't":"didn't";
    return mkFill(cap(r.S.t)+' ',' '+r.v.i+' '+r.o.o+tmS(r)+'.',[con,a+' not'],L('verneint','negative'),why.n());
   }
   return mkFill('',' '+r.S.t+' '+r.v.i+' '+r.o.o+tmS(r)+'?',[cap(aux(r))],L('Frage','question'),why.q());
  },
  choice(){
   const neg=Math.random()<.5,r=rec(1),a=aux(r);let ok,w=[];
   if(!neg){
    ok=ques(r);
    w.push((a==='did'?'Does':(r.S.th?'Do':'Does'))+' '+r.S.t+' '+r.v.i+' '+r.o.o+tmS(r)+'?');
    w.push(cap(a)+' '+r.S.t+' '+(r.t==='PaS'?r.v.p:r.v.s)+' '+r.o.o+tmS(r)+'?');
    w.push(cap(r.S.t)+' '+vf(r)+' '+r.o.o+tmS(r)+'?');
   }else{
    ok=negB(r,false);
    w.push(cap(r.S.t)+' '+(a==='did'?"doesn't":(r.S.th?"don't":"doesn't"))+' '+r.v.i+' '+r.o.o+tmS(r)+'.');
    w.push(cap(r.S.t)+' '+a+"n't "+(r.t==='PaS'?r.v.p:r.v.s)+' '+r.o.o+tmS(r)+'.');
    w.push(cap(r.S.t)+' not '+vf(r)+' '+r.o.o+tmS(r)+'.');
   }
   return mkWords(ok,w,neg?L('Welcher Satz ist eine richtige Verneinung?','Which sentence is a correct negative?'):L('Welche Frage ist richtig?','Which question is correct?'),neg?why.n():why.q());
  },
  question(){const r=rec(1);return mkText(stmt(r),L('Mach eine Frage aus dem Satz (Ja/Nein-Frage).','Make a yes/no question from the sentence.'),[ques(r)],why.q())},
  neg(){const r=rec(0);return mkText(stmt(r),L('Verneine den Satz.','Make the sentence negative.'),[negB(r,false),negB(r,true)],why.n())},
  order(){const r=rec(1);return mkOrder(ques(r),why.q())},
  short(){
   const r=rec(1,1),yes=Math.random()<.5,a=aux(r);
   const ans=yes?'Yes, '+r.S.ans+' '+a+'.':'No, '+r.S.ans+' '+a+"n't.";
   const it=mkText(ques(r),L('Antworte mit einer Kurzantwort: ','Give a short answer: ')+(yes?'Yes':'No'),[ans,...(yes?[]:['No, '+r.S.ans+' '+a+' not.'])],why.s());
   it.instr=L('Antworte mit einer Kurzantwort: ','Give a short answer: ')+'<b>'+(yes?'Yes':'No')+'</b>';return it;
  },
  whq(){
   const kind=rnd(['w','p','who']);let r;
   for(let i=0;i<40;i++){r=rec(1);if(kind==='who'&&!r.S.who)continue;if(kind==='w'&&r.o.k!=='w')continue;if(kind==='p'&&r.o.k!=='p')continue;break}
   if(kind==='who'&&!r.S.who)r.S=rnd(SUBJ.filter(s=>s.who));
   if(kind==='w'&&r.o.k!=='w'){r.v=VERBS[0];r.o=r.v.objs[0]}
   if(kind==='p'&&r.o.k!=='p'){r.v=VERBS.find(v=>v.i==='live');r.o=r.v.objs[0]}
   let src,q,wh;
   if(kind==='who'){
    wh='Who';
    src='<mark class="t">'+esc(cap(r.S.t))+'</mark> '+esc(vf(r))+' '+esc(r.o.o)+esc(tmS(r))+'.';
    q='Who '+(r.t==='PaS'?r.v.p:r.v.s)+' '+r.o.o+tmS(r)+'?';
   }else{
    wh=kind==='w'?'What':'Where';
    src=esc(cap(r.S.t))+' '+esc(vf(r))+' <mark class="t">'+esc(r.o.o)+'</mark>'+esc(tmS(r))+'.';
    q=wh+' '+aux(r)+' '+r.S.t+' '+r.v.i+tmS(r)+'?';
   }
   return {type:'text',src,instr:L('Frage nach dem markierten Teil. Beginne mit <b>'+wh+'</b>.','Ask about the highlighted part. Start with <b>'+wh+'</b>.'),answers:[q],sol:q,why:why.w()};
  }
 };
 return {id:'q',grp:'verben',ic:'❓',ready:1,fillInstr:()=>L('Setze das passende Hilfsverb ein.','Fill in the correct auxiliary.'),
  name:()=>L('Fragen & Verneinung','Questions & negatives'),desc:()=>L('do / does / did, Wortstellung, Kurzantworten','do / does / did, word order, short answers'),
  lvDesc:()=>L('C: nur Present Simple. B: Present und Past Simple. A: zusätzlich Fragewörter (What, Where, Who).','C: Present Simple only. B: Present and Past Simple. A: plus question words (What, Where, Who).'),
  subTitle:()=>L('Zeitformen','Tenses'),
  subs:()=>[{k:'PS',n:'Present Simple'},{k:'PaS',n:'Past Simple',noC:1}],subDef:['PS','PaS'],
  types:()=>[
   {k:'fill',icon:'✏️',label:L('Einsetzen','Fill in'),desc:L('do / does / did einsetzen','fill in do / does / did')},
   {k:'choice',icon:'✔️',label:L('Auswählen','Choose'),desc:L('den richtigen Satz wählen','pick the correct sentence')},
   {k:'question',icon:'❓',label:L('Frage bilden','Make a question'),desc:L('Aussage → Frage','statement → question')},
   {k:'neg',icon:'🚫',label:L('Verneinen','Make negative'),desc:L('Aussage → Verneinung','statement → negative')},
   {k:'order',icon:'🔀',label:L('Satz ordnen','Word order'),desc:L('Wörter in die richtige Reihenfolge','put the words in order')},
   {k:'short',icon:'💬',label:L('Kurzantwort','Short answer'),desc:'Yes, he does. / No, he doesn\'t.'},
   {k:'whq',icon:'🔎',label:L('Fragewort (A)','Question word (A)'),desc:L('What / Where / Who fragen','ask with What / Where / Who'),A:1}],
  typeDef:['fill','choice','question','neg'],gen,
  rules:()=>[
   [L('Hilfsverb do / does / did','Auxiliary do / does / did'),L('Im Present Simple und Past Simple braucht jede Frage und Verneinung ein Hilfsverb. Danach steht das Verb in der Grundform.','In the Present Simple and Past Simple, every question and negative needs an auxiliary. The verb after it stays in the base form.'),'Does she like pizza? – She doesn\'t like pizza. – Did you see him? – I didn\'t see him.'],
   [L('does nur bei he / she / it','does only with he / she / it'),L('Nach does steht kein -s am Verb.','There is no -s on the verb after does.'),'He plays – Does he play? (not: Does he plays?)'],
   [L('Ausnahme: be, can, must, should, will','Exception: be, can, must, should, will'),L('Diese Verben brauchen kein do. Frage durch Umstellen, Verneinung mit not.','These verbs need no do. Questions by swapping, negatives with not.'),'Is she tired? – She isn\'t tired. – Can you swim?'],
   [L('Fragewort + Hilfsverb + Subjekt + Verb','Question word + auxiliary + subject + verb'),'','Where does he live? – What did you do? – Why are they late?'],
   [L('Fragen nach dem Subjekt (who / what)','Questions about the subject (who / what)'),L('Hier steht kein do.','There is no do here.'),'Who lives here? – What happened?'],
   [L('Present Continuous','Present Continuous'),L('Frage durch Umstellen von be, Verneinung mit not.','Questions by swapping be, negatives with not.'),'Are you listening? – He isn\'t working.'],
   [L('Kurzantworten','Short answers'),L('Sie wiederholen das Hilfsverb.','They repeat the auxiliary.'),'Yes, I do. – No, she doesn\'t. – Yes, he was.'],
   [L('Typische Fehler','Typical mistakes'),'','<span class="err2">Do he like…? / He doesn\'t likes… / Did you saw…? / You like pizza?</span>']]
 };
})());
