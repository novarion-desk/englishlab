/* ===== Zustand ===== */
let testMode=false,topic=null,screen='home',items=[],idx=0,score=0,results=[],answered=false,infinite=false,built=[],sheetItems=[];
const T={user:null,demo:/[?&]demo\b/.test(location.search),cur:0,mode:'slides',pres:false,notes:true};
const teacher=()=>!!T.user||T.demo;
const hasEx=t=>!!t.gen;
function initTopics(){
 TOPICS.forEach(t=>{if(t.gen)ST[t.id]={types:t.typeDef.slice(),subs:(t.subDef||[]).slice()}});
}
const effTypes=()=>topic.types().filter(x=>ST[topic.id].types.includes(x.k)&&(!x.A||S.lvl==='A')).map(x=>x.k);
function typeSeq(n){const m=effTypes();let bag=[],seq=[];for(let i=0;i<n;i++){if(!bag.length)bag=shuffle(m);let j=0;if(m.length>1&&seq.length&&bag[0]===seq[seq.length-1])j=bag.findIndex(x=>x!==seq[seq.length-1])||0;if(j<0)j=0;seq.push(bag.splice(j,1)[0])}return seq}
/* «Frag Marty» (KI-Erklärung): für alle sichtbar; mit «#ki-aus» im Link auf dem Gerät abschaltbar */
const KI_URL='https://tc-ki-proxy.novarian-desk.workers.dev/ask';
try{if(/ki-test/.test(location.hash))localStorage.removeItem('el-ki');if(/ki-aus/.test(location.hash))localStorage.setItem('el-ki','0');}catch(e){}
const KI_ON=()=>{try{return localStorage.getItem('el-ki')!=='0'}catch(e){return true}};
function kiDevice(){try{let d=localStorage.getItem('el-dev');if(!d){d=(crypto.randomUUID?crypto.randomUUID():String(Math.random()).slice(2)+Date.now());localStorage.setItem('el-dev',d)}return d}catch(e){return 'x'}}
let kiBusy=false;
async function askKI(ctx){
 const r0=ctx||results[results.length-1],box=ctx?ctx.box:document.getElementById('kiBox'),btn=ctx?ctx.btn:document.getElementById('kiBtn');
 if(!r0||!box||kiBusy)return;
 const it=r0.it,st=v=>String(v==null?'':v).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
 const free=!['fill','choice','order'].includes(it.type);
 const task=[st(it.instr||''),it.src?st(it.src):'',it.before!=null?st(it.before)+' ____ '+st(it.after||''):'',it.stem?st(it.stem):'',it.words?'Wörter: '+it.words.map(st).join(' / '):'',it.opts?'Auswahl: '+it.opts.map(st).join(' / '):''].filter(Boolean).join(' – ');
 kiBusy=true;if(btn)btn.disabled=true;
 box.innerHTML='<div class="ki wait">'+L('Marty überlegt …','Marty is thinking …')+'</div>';
 try{
  const r=await fetch(KI_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({app:'englishlab',mode:(free&&!r0.ok)?'check':'explain',device:kiDevice(),topic:st(topic?topic.name():(it.tname||'')),task,right:st(it.sol),mine:r0.ok?'':st(r0.val)})});
  const j=await r.json().catch(()=>({}));
  if(!r.ok||!j.answer){box.innerHTML='<div class="ki err">'+esc(j.error||'Marty ist gerade nicht erreichbar.')+'</div>';if(btn)btn.disabled=(r.status===429)}
  else{box.innerHTML='<div class="ki"><b>💡 '+L('Marty erklärt','Marty explains')+'</b><div class="kit">'+esc(String(j.answer).replace(/\*\*|__|^#+\s*/gm,''))+'</div><div class="kin">'+L('Marty ist eine KI und kann sich irren. Gib nie Namen oder persönliche Daten ein.','Marty is an AI and can be wrong. Never enter names or personal data.')+(typeof j.remaining==='number'?' '+L('Noch '+j.remaining+' Fragen heute.',j.remaining+' questions left today.'):'')+'</div></div>';if(btn)btn.disabled=true}
 }catch(e){box.innerHTML='<div class="ki err">Keine Verbindung. Versuche es später.</div>';if(btn)btn.disabled=false}
 kiBusy=false;
}
const seenG=new Set();
function build(n){
 const out=[],seq=typeSeq(n),seen=new Set();
 for(const t of seq){let it,k=0;do{it=topic.gen[t]();k++}while((seen.has(it.sol)||seenG.has(it.sol))&&k<40);seen.add(it.sol);seenG.add(it.sol);it.kind=t;if(it.type==='fill'&&!it.instr)it.instr=topic.fillInstr?topic.fillInstr():L('Setze das passende Wort ein.','Fill in the correct word.');out.push(it)}
 return out;
}
const typeLabel=k=>{const t=topic.types().find(x=>x.k===k);return t?t.icon+' '+t.label:k};
const tcol=t=>grpOf(t).c;
function setTheme(t){document.documentElement.style.setProperty('--accent',t?tcol(t):'#4f46e5');document.documentElement.style.setProperty('--accent-bg',t?`color-mix(in srgb,${tcol(t)} 11%,#fff)`:'#eef2ff')}
function setHeader(){
 const rb=document.getElementById('rulesBtn');rb.style.display='none';rb.textContent='📘 '+L('Regeln','Rules');const vcl=document.getElementById('vocabLbl');if(vcl)vcl.textContent=L('Vokabeln','Vocabulary');const vl=document.getElementById('verbsLbl');if(vl)vl.textContent=L('Verben','Verbs');const dl=document.getElementById('dictLbl');if(dl)dl.textContent=L('Wörterbuch','Dictionary');const sl=document.getElementById('searchLbl');if(sl)sl.textContent=L('Suche','Search');
 document.querySelectorAll('#langSeg button').forEach(b=>b.classList.toggle('on',b.dataset.l===LANG));
 const lb=document.getElementById('loginBtn');lb.textContent=T.user?L('Lehrer ✓','Teacher ✓'):T.demo?'Demo':L('Lehrer','Teacher');lb.title=T.user?L('Abmelden','Log out'):'';
 document.body.classList.toggle('home',screen==='home');
 setTheme(screen==='home'?null:topic);
}
/* ===== Start ===== */
let homeY=0;
const FINE=(()=>{try{return matchMedia('(hover:hover) and (pointer:fine)').matches}catch(e){return true}})();
try{history.scrollRestoration='manual'}catch(e){}
function tabsBar(act){
 const tabs=[['theory','📘',L('Theorie','Theory')]];
 if(hasEx(topic))tabs.push(['prac','✏️',L('Üben','Practise')]);
 if(teacher()&&topic.slides)tabs.push(['slides','🎬',L('Folien','Slides')]);
 return `<div class="ttabs">${tabs.map(t=>`<button data-tab="${t[0]}" class="${t[0]===act?'on':''}">${t[1]} ${t[2]}</button>`).join('')}</div>`;
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-tab]');if(!b||!topic)return;e.stopPropagation();const k=b.dataset.tab;if(k===screen)return;if(k==='theory')renderTheory();else if(k==='prac')renderPractice();else if(k==='slides')openSlides()},true);
let homeJahr=2;try{if(localStorage.getItem('el-jahr')==='3')homeJahr=3}catch(e){}
let homeView='topics';try{if(localStorage.getItem('el-view')==='units')homeView='units'}catch(e){}
function setHH(){const h=document.querySelector('header');if(h)document.documentElement.style.setProperty('--hh',(h.offsetHeight+(window.innerWidth<=600?0:8))+'px')}
window.addEventListener('resize',setHH);
function renderHome(q,keep){
 testMode=false;screen='home';topic=null;setHeader();setHH();
 q=(q||'').trim().toLowerCase();
 const match=t=>!q||(t.name()+' '+t.desc()).toLowerCase().includes(q);
 const card=(t,stg)=>{const g=grpOf(t);const ss=stg?stagesOf(t.id):[];const tag=ss.length?`<i class="stg">${ss.length>1?L('Jahr 1/2 + 3','Year 1/2 + 3'):stageName(ss[0])}</i>`:'';return `<div class="tile${t.feat?' feat':''}" data-topic="${t.id}" style="--c:${g.c}">${tag}<span class="ic">${t.ic}</span><b>${t.name()}</b><small>${t.desc()}</small><span class="tags"><button class="tg th" data-go="theory">📘 ${L('Theorie','Theory')}</button><button class="tg pr" data-go="prac">✏️ ${L('Üben','Practise')}</button>${teacher()&&t.slides?`<button class="tg sl" data-go="slides">🎬 ${L('Folien','Slides')}</button>`:''}</span></div>`};
 let sec='',jump='';
 if(homeView==='units'){
  jump=[homeJahr].map(st=>`<div class="jrow">${UNITS.filter(x=>x.s===st).map(x=>`<button class="jb" data-jump="u-${st}-${x.u}">${x.u?x.u:'W'}</button>`).join('')}</div>`).join('');
  sec=[homeJahr].map(st=>{const us=UNITS.filter(x=>x.s===st).map(x=>{const ts=x.t.map(id=>TOPICS.find(t=>t.id===id)).filter(t=>t&&match(t));return ts.length?`<section class="unit" id="u-${st}-${x.u}"><h2 class="uh"><span>${unitName(x)}</span><button class="utbtn" data-utest="${st}-${x.u}">📝 ${L('Unit-Test','Unit test')}</button></h2><div class="tiles">${ts.map(t=>card(t,false)).join('')}</div></section>`:''}).join('');return us}).join('');
 }else{
  const gs=GROUPS.filter(g=>TOPICS.some(t=>t.grp===g.id&&match(t)));
  jump=`<div class="jrow">${gs.map(g=>`<button class="jb" data-jump="g-${g.id}" style="--c:${g.c}">${g.ic} ${g.n()}</button>`).join('')}</div>`;
  sec=GROUPS.map(g=>{const ts=TOPICS.filter(t=>t.grp===g.id&&match(t));return ts.length?`<section class="grp" id="g-${g.id}" style="--c:${g.c}"><h2><span class="dot">${g.ic}</span>${g.n()}</h2><div class="tiles">${ts.map(t=>card(t,true)).join('')}</div></section>`:''}).join('');
 }
 app.innerHTML=`<div class="hero"><h1>${L('Grammatik üben, nachlesen, verstehen','Practise, read and understand grammar')}</h1>
  <p>${L('Wähle ein Thema. Zu jedem Thema findest du die Regeln und Übungen auf deinem Niveau.','Pick a topic. Every topic has clear rules and exercises at your level.')}</p>
  <input class="search" id="q" type="search" placeholder="${L('Thema suchen …','Search a topic …')}" value="${esc(q)}" autocomplete="off">
  <button class="vocta" data-tprep="1"><span>📝</span><span><b>${L('Testvorbereitung','Test preparation')}</b><small>${L('Themen mischen, Punkte sammeln, Übungsprüfung drucken','Mix topics, collect points, print a practice test')}</small></span><span class="vgo">›</span></button>
  <button class="vocta" data-openvoc="1"><span>🃏</span><span><b>${L('Vokabeltrainer','Vocabulary trainer')}</b><small>${L('Wörter nach Units üben, mit Wiederholung','Practise words by unit, with spaced repetition')}</small></span><span class="vgo">›</span></button>
  <div class="seg viewseg"><button data-view="topics" class="${homeView==='topics'?'on':''}">${L('Themen','Topics')}</button><button data-view="units" class="${homeView==='units'?'on':''}">Units</button></div>${homeView==='units'?`<div class="seg viewseg jahr"><button data-jahr="2" class="${homeJahr===2?'on':''}">${stageName(2)}</button><button data-jahr="3" class="${homeJahr===3?'on':''}">${stageName(3)}</button></div>`:''}
  <div class="jump">${jump}</div></div>
  ${sec||`<p class="muted center">${L('Nichts gefunden.','Nothing found.')}</p>`}`;
 app.onclick=e=>{
  if(e.target.closest('[data-tprep]'))return renderTprep();
  const ut=e.target.closest('[data-utest]');if(ut){const [us,uu]=ut.dataset.utest.split('-').map(Number);homeY=window.scrollY;return renderUnitTest(us,uu)}
  const jy=e.target.closest('[data-jahr]');if(jy){const j=+jy.dataset.jahr;if(j===homeJahr)return;homeJahr=j;try{localStorage.setItem('el-jahr',String(j))}catch(_){}homeY=0;return renderHome(q)}
  const vb=e.target.closest('[data-view]');if(vb){if(vb.dataset.view===homeView)return;homeView=vb.dataset.view;try{localStorage.setItem('el-view',homeView)}catch(_){}homeY=0;return renderHome(q)}
  const jb=e.target.closest('[data-jump]');if(jb){const el=document.getElementById(jb.dataset.jump);if(el){const hh=(document.querySelector('header')||{}).offsetHeight||60;window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-hh-(el.classList.contains('unit')?44:20),behavior:'smooth'})}return}
  const t=e.target.closest('[data-topic]');if(!t)return;const g=e.target.closest('[data-go]');topic=TOPICS.find(x=>x.id===t.dataset.topic);
  homeY=window.scrollY;if(!g)return renderTheory();const k=g.dataset.go;if(k==='theory')return renderTheory();if(k==='prac')return renderPractice();if(k==='slides')return openSlides()};
 if(keep){const y=homeY;window.scrollTo(0,y);requestAnimationFrame(()=>window.scrollTo(0,y));setTimeout(()=>window.scrollTo(0,y),120)}else window.scrollTo(0,0);
 const qi=document.getElementById('q');qi.oninput=()=>{const v=qi.value;renderHome(v);const n=document.getElementById('q');n.focus();n.setSelectionRange(v.length,v.length)};
}
function openTopic(id){topic=TOPICS.find(t=>t.id===id);renderTheory()}
function hubHead(){
 const g=grpOf(topic);
 return `<button class="btn-link" id="homeBtn">‹ ${L('Themen','Topics')}</button>
 <div class="thead" style="--c:${g.c}"><span class="ic">${topic.ic}</span><div><h1>${topic.name()}</h1><p>${topic.desc()}</p></div></div>`;
}
function renderSetup(){renderHome(undefined,true)}
function renderTheory(){
 screen='theory';setHeader();
 const prac=hasEx(topic)?`<button class="primary" id="pracOpen" style="margin-top:14px">✏️ ${L('Jetzt üben →','Practise now →')}</button>`:`<a class="primary" style="display:block;text-align:center;text-decoration:none;margin-top:14px" href="${TENSE_URL}">${L('Zum Tense Trainer →','Go to the Tense Trainer →')}</a>`;
 app.innerHTML=`<button class="btn-link" id="homeBtn">‹ ${topic.name()}</button>
 <div class="thead" style="--c:${grpOf(topic).c}"><span class="ic">${topic.ic}</span><div><h1>${L('Theorie','Theory')}: ${topic.name()}</h1><p>${topic.desc()}</p></div></div>${tabsBar('theory')}
 <div class="theory2" style="--c:${grpOf(topic).c}">${rulesHtml()}</div><div class="rowbtn" style="margin-top:12px"><button class="secondary" id="thPrint">🖨 ${L('Theorie drucken (A4)','Print theory (A4)')}</button></div>${hasEx(topic)?`<div class="card mqcard"><h3>✏️ ${L('Kurz üben','Quick practice')}</h3><div class="mq" data-mq></div></div>`:''}${prac}`;
 mqInit(app);
 app.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.id==='homeBtn')return renderSetup();if(b.id==='thPrint')return openTheoryPrint();if(b.id==='pracOpen')return renderPractice()};
 window.scrollTo({top:0});
}
function renderPractice(){
 if(!hasEx(topic))return renderSetup();
 screen='prac';items=[];setHeader();
 const g=grpOf(topic);
 const head=`<button class="btn-link" id="homeBtn">‹ ${topic.name()}</button>
 <div class="thead" style="--c:${g.c}"><span class="ic">${topic.ic}</span><div><h1>${L('Üben','Practise')}: ${topic.name()}</h1><p>${topic.desc()}</p></div></div>${tabsBar('prac')}
 <div class="rowbtn"><button class="secondary" id="rulesOpen">📘 ${L('Regeln nachlesen','Read the rules')}</button></div>`;
 const st=ST[topic.id],subs=topic.subs(),C0=S.lvl==='C';
 const subOn=k=>st.subs.includes(k)&&!(topic.id==='q'&&C0&&k==='PaS');
 app.innerHTML=head+`
 <div class="card"><h2>${L('1 · Niveau','1 · Level')}</h2>
  <div class="opt-row"><div class="seg" id="lvlSeg">${[['C',L('C (einfach)','C (easy)')],['B','B'],['A',L('A (anspruchsvoll)','A (demanding)')]].map(([k,l])=>`<button data-lv="${k}" class="${S.lvl===k?'on':''}">${l}</button>`).join('')}</div></div>
  <p class="muted" style="margin:6px 0 0;font-size:.9em">${topic.lvDesc()}</p></div>
 ${subs.length?`<div class="card"><h2>2 · ${topic.subTitle()}</h2><div class="chips">${subs.map(s=>`<button class="chip ${subOn(s.k)?'on':''}" data-t="${s.k}" ${topic.id==='q'&&C0&&s.noC?'disabled style="opacity:.4"':''}>${s.n}</button>`).join('')}</div></div>`:''}
 <div class="card"><h2>${subs.length?3:2} · ${L('Übungsart','Exercise type')}</h2>
  <div class="modes">${topic.types().filter(t=>!t.A||S.lvl==='A').map(m=>`<button class="mode ${st.types.includes(m.k)?'on':''}" data-m="${m.k}"><b>${m.icon} ${m.label}</b><small>${m.desc}</small></button>`).join('')}</div></div>
 <div class="card"><h2>${subs.length?4:3} · ${L('Anzahl Aufgaben','Number of exercises')}</h2>
  <div class="seg">${[5,10,20,0].map(n=>`<button class="${S.count===n?'on':''}" data-n="${n}">${n||'∞'}</button>`).join('')}</div>
  <label class="cntown">${L('oder eigene Zahl:','or your own number:')} <input id="cntIn" type="number" inputmode="numeric" min="1" max="200" placeholder="z. B. 12" value="${[5,10,20,0].includes(S.count)?'':S.count}"></label></div>
 <button class="primary" id="start">${L("Los geht's →","Let's go →")}</button>
 <button class="secondary" id="sheetBtn" style="margin-top:10px">${L('🖨 Arbeitsblatt (Vorschau, PDF / Druck)','🖨 Worksheet (preview, PDF / print)')}</button>
 <p class="err" id="err"></p>`;
 app.onclick=e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.id==='homeBtn')return renderSetup();
  if(b.id==='rulesOpen')return openRules();
  if(b.dataset.lv){S.lvl=b.dataset.lv}
  else if(b.dataset.t){
   const k=b.dataset.t;if(b.disabled)return;
   const all=subs.map(s=>s.k);
   if(topic.id!=='q'&&all.length>2&&st.subs.length===all.length)st.subs=[k];
   else if(st.subs.includes(k)){st.subs=st.subs.length>1?st.subs.filter(x=>x!==k):all.slice()}else st.subs=all.filter(x=>x===k||st.subs.includes(x));
  }
  else if(b.dataset.m){const k=b.dataset.m,all=topic.types().map(t=>t.k);st.types=st.types.includes(k)?st.types.filter(x=>x!==k):all.filter(x=>x===k||st.types.includes(x))}
  else if(b.dataset.n!==undefined){S.count=+b.dataset.n}
  else if(b.id==='start')return start();
  else if(b.id==='sheetBtn')return openSheet();
  else return;
  renderPractice();
 };
}
function chk(){const err=document.getElementById('err');if(!effTypes().length){err.textContent=L('Wähle mindestens eine Übungsart.','Choose at least one exercise type.');return false}return true}
function start(){
 if(!chk())return;
 seenG.clear();infinite=S.count===0;items=build(infinite?10:S.count);idx=0;score=0;results=[];renderTask();
}
const stemHtml=s=>esc(s).replace('___','<span class="gap">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>');
function renderTask(){
 screen='task';const it=items[idx];answered=false;built=[];
 let body='';
 const instr=`<p class="instr">${it.instr||''}</p>`;
 if(it.type==='fill'){
  const w=Math.max(8,it.answers[0].length+3);
  body=`<p class="instr">${it.instr} ${it.hint?`<span class="hint">${esc(it.hint)}</span>`:''}</p>
   <div class="sentence">${esc(it.before)}<input class="tin" id="inp" style="width:${w}ch" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">${esc(it.after)}</div>`;
 }else if(it.type==='choice'){
  const short=!!it.stem;
  body=instr+(short?`<div class="sentence">${stemHtml(it.stem)}</div>`:'')+`<div class="opts" style="grid-template-columns:${short?'repeat(auto-fit,minmax(110px,1fr))':'1fr'}">${it.opts.map((o,i)=>`<button data-o="${i}" style="${short?'':'text-align:left;font-size:18px'}">${esc(o)}</button>`).join('')}</div>`;
 }else if(it.type==='order'){
  body=instr+`<div class="built" id="built"></div><div class="wb" id="wb">${it.words.map((w,i)=>`<button data-w="${i}">${esc(w)}</button>`).join('')}</div>
   <div><button class="btn-link" id="reset">${L('↺ Zurücksetzen','↺ Reset')}</button></div>`;
 }else{
  body=instr+`<div class="src">${it.src}</div><textarea class="full tin" id="inp" rows="2" placeholder="${L('Schreib den ganzen Satz …','Write the whole sentence …')}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></textarea>`;
 }
 const auto=(it.type==='choice')?'':`<button class="primary" id="go">${L('Prüfen','Check')}</button>`;
 app.innerHTML=`
 <div class="qtop"><button class="btn-link" id="quit">${infinite?L('✓ Fertig','✓ Done'):L('✕ Beenden','✕ Quit')}</button><span>${infinite?L('Aufgabe ','Exercise ')+(idx+1)+' · ∞':(idx+1)+' / '+items.length}</span><span>${testMode?(UT.timer?'⏱ <b id="clk">0:00</b>':''):'⭐ '+score}</span></div>
 ${infinite?'':`<div class="bar"><div style="width:${idx/items.length*100}%"></div></div>`}
 <div class="card"><div class="tag">${testMode?(it.tic||'')+' '+esc(it.tname||''):typeLabel(it.kind)}</div>${body}<div id="fb"></div><div class="actions">${auto}</div></div>`;
 app.onclick=e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.id==='quit'){
   if(infinite&&results.length)return renderResults();
   if(results.length&&!confirm(L('Runde wirklich beenden?\nDeine bisherigen Antworten gehen verloren.','Really quit this round?\nYour answers so far will be lost.')))return;
   if(testMode){testMode=false;clearInterval(UT.clk);return utBack()}
   return renderPractice();
  }
  if(b.dataset.o!==undefined&&!answered)return answerChoice(+b.dataset.o);
  if(b.dataset.w!==undefined&&!answered){built.push(it.words[+b.dataset.w]);b.disabled=true;drawBuilt();return}
  if(b.id==='reset'&&!answered){built=[];app.querySelectorAll('#wb button').forEach(x=>x.disabled=false);drawBuilt();return}
  if(b.id==='kiBtn')return askKI();
  if(b.id==='go')return answered?next():check();
 };
 const inp=document.getElementById('inp');if(inp){if(FINE)inp.focus();inp.onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();answered?next():check()}}}
}
function drawBuilt(){const el=document.getElementById('built');if(el)el.innerHTML=built.map(w=>`<button disabled>${esc(w)}</button>`).join('')}
function done(ok,val){
 const it=items[idx];answered=true;if(ok)score++;
 results.push({it,ok,val});
 const fb=document.getElementById('fb');
 if(testMode&&!UT.fb){fb.innerHTML='';const go0=document.getElementById('go');const last0=idx===items.length-1,lab0=last0?L('Auswertung','See results'):L('Weiter →','Next →');if(go0){go0.textContent=lab0}else{document.querySelector('.actions').innerHTML=`<button class="primary" id="go">${lab0}</button>`}const inp0=document.getElementById('inp');if(inp0)inp0.readOnly=true;return}
 const praise=rnd(L('Richtig!|Super!|Genau!|Stark!','Correct!|Great!|Well done!|Nice one!').split('|'));
 fb.innerHTML=ok?`<div class="fb ok"><div class="fbt">${praise}</div></div>`:`<div class="fb bad"><div class="fbt">${L('Nicht ganz.','Not quite.')}</div>${L('Richtig wäre:','Correct:')} <b>${esc(it.sol)}</b><div class="rule">${it.why}</div></div>`;
 if(KI_ON()){const fr=!['fill','choice','order'].includes(it.type);fb.insertAdjacentHTML('beforeend','<div class="kirow"><button class="btn-link" id="kiBtn">💡 '+((fr&&!ok)?L('Frag Marty: Ist mein Satz auch richtig?','Ask Marty: Is my sentence also right?'):L('Frag Marty','Ask Marty'))+'</button></div><div id="kiBox"></div>')}
 const go=document.getElementById('go');
 const last=!infinite&&idx===items.length-1;
 const lab=last?L('Ergebnis','Results'):L('Weiter →','Next →');
 if(go){go.textContent=lab}else{document.querySelector('.actions').innerHTML=`<button class="primary" id="go">${lab}</button>`}
 const inp=document.getElementById('inp');if(inp)inp.readOnly=true;
}
function check(){
 const it=items[idx];let val;
 if(it.type==='order'){val=built.join(' ');if(!built.length)return}
 else{const inp=document.getElementById('inp');val=inp.value;if(!val.trim()){inp.focus();return}}
 done(it.answers.some(a=>nrm(a)===nrm(val)),val);
}
function answerChoice(i){
 const it=items[idx];
 app.querySelectorAll('[data-o]').forEach((b,j)=>{b.disabled=true;if(testMode&&!UT.fb){if(j===i)b.classList.add('chosen')}else if(j===it.correct)b.classList.add('right');else if(j===i)b.classList.add('wrong')});
 done(i===it.correct,it.opts[i]);
}
function next(){idx++;if(!infinite&&idx>=items.length)return renderResults();if(infinite&&idx>=items.length)items.push(...build(5));renderTask()}
function renderResults(){
 if(testMode)return renderTestResult();
 screen='results';const n=results.length,pct=n?Math.round(score/n*100):0;
 const wrong=results.filter(r=>!r.ok);
 const medal=pct>=90?'🏆':pct>=70?'🎉':pct>=50?'👍':'💪';
 app.innerHTML=`<div class="card"><div class="big"><span class="medal">${medal}</span>${score} / ${n}<small>${pct} %</small></div></div>
 ${wrong.length?`<div class="card"><h2>${L('Zum Nachschauen','To review')}</h2><ul class="rl">${wrong.map(r=>`<li>${r.it.src?'<div class="src" style="font-size:17px">'+r.it.src+'</div>':''}${r.val?`<span class="err2">${esc(r.val)}</span><br>`:''}<b>${esc(r.it.sol)}</b></li>`).join('')}</ul></div>`:''}
 ${wrong.length?`<button class="primary" id="retryw">${L('🔁 Nur die Fehler nochmals üben ('+wrong.length+')','🔁 Practise only the mistakes ('+wrong.length+')')}</button>`:''}
 <button class="${wrong.length?'secondary':'primary'}" id="again" ${wrong.length?'style="margin-top:10px"':''}>${L('Nochmal','Again')}</button>
 <button class="secondary" id="setup" style="margin-top:10px">${L('‹ Einstellungen','‹ Settings')}</button>`;
 app.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.id==='retryw'){items=wrong.map(r=>r.it);infinite=false;idx=0;score=0;results=[];return renderTask()}if(b.id==='again')return start();if(b.id==='setup')return renderPractice()};
}
/* ===== Arbeitsblatt ===== */
function openSheet(){
 if(!chk())return;
 seenG.clear();sheetItems=build(S.count>0?S.count:20);renderSheet();
}
function sheetTask(it,n,p){
 const num=`<span class="n">${n}.</span>`+(p?`<span class="pt">${p} ${L('P.','pts')}</span>`:'');
 if(it.type==='fill')return `<div class="t"><div class="ins">${it.instr}${it.hint?' <span class="hint">'+esc(it.hint)+'</span>':''}</div>${num}${esc(it.before)}<span class="blank" style="width:${Math.max(9,it.answers[0].length+5)}ch"></span>${esc(it.after)}</div>`;
 if(it.type==='choice')return `<div class="t"><div class="ins">${it.instr}</div>${it.stem?`<div>${num}${esc(it.stem)}</div><div>${it.opts.map(o=>`<span class="opt"><span class="box"></span>${esc(o)}</span>`).join('')}</div>`:it.opts.map((o,i)=>`<div style="margin:2px 0">${i===0?num:'<span class="n" style="visibility:hidden">0.</span>'}<span class="box"></span>${esc(o)}</div>`).join('')}</div>`;
 if(it.type==='order')return `<div class="t"><div class="ins">${it.instr}</div>${num}<span class="wbx">${it.words.map(w=>`<span>${esc(w)}</span>`).join('')}</span><div class="wl"></div></div>`;
 return `<div class="t"><div class="ins">${it.instr}</div>${num}${it.src}<div class="wl"></div></div>`;
}
function subLine(){
 const st=ST[topic.id],s=topic.subs().filter(x=>st.subs.includes(x.k)&&!(topic.id==='q'&&S.lvl==='C'&&x.noC)).map(x=>x.n);
 return (s.length?s.join(', ')+' · ':'')+L('Niveau','Level')+' '+S.lvl;
}
function renderSheet(){
 screen='sheet';setHeader();
 const title='EnglishLab – '+topic.name();
 app.innerHTML=`
 <div class="sheetbar">
  <button class="btn-link" id="shBack">${L('‹ Zurück','‹ Back')}</button>
  <button class="secondary" id="shMix">${L('🔀 Neu mischen','🔀 Shuffle again')}</button>
  <button class="primary" id="shPrint">${L('🖨 Drucken / PDF','🖨 Print / PDF')}</button>
 </div>
 <div class="sheet"><h1>${esc(title)}</h1><p class="sub">${esc(subLine())}</p>
  <div class="meta"><span>${L('Name:','Name:')}</span><span>${L('Datum:','Date:')}</span></div>
  ${sheetItems.map((it,i)=>sheetTask(it,i+1)).join('')}</div>
 <div class="sheet sol"><h1>${L('Lösungen','Answers')}</h1><p class="sub">${esc(title)}</p>
  <div class="sol-list">${sheetItems.map((it,i)=>`<div><b>${i+1}.</b> ${esc(it.sol)}</div>`).join('')}</div></div>`;
 app.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.id==='shBack')return renderPractice();
  if(b.id==='shMix'){seenG.clear();sheetItems=build(sheetItems.length);renderSheet();window.scrollTo({top:0});return}
  if(b.id==='shPrint')return doPrint()};
 window.scrollTo({top:0});
}
/* ===== Regeln ===== */
function rulesHtml(){
 if(topic.rules)return topic.rules().map((r,i)=>`<section class="rsec"><h3><span class="rn">${i+1}</span>${r[0]}</h3><div class="rb">${r[1]||''}${r[2]?'<div class="rex">'+r[2]+'</div>':''}</div></section>`).join('');
 if(topic.slides)return topic.slides().filter(s=>s.kind!=='try').map((s,i)=>`<section class="rsec"><h3><span class="rn">${i+1}</span>${s.t}</h3><div class="rb">${s.h}</div></section>`).join('');
 return '';
}
let modalMode='rules';
function openRules(){
 modalMode='rules';
 modalBody.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><h2 style="margin:0">📘 ${L('Regeln','Rules')} – ${topic?topic.name():''}</h2><button class="btn-link" id="mClose">✕</button></div><div class="theory2" style="--c:${grpOf(topic).c}">${rulesHtml()}</div>`;
 modal.classList.remove('hidden');modal.scrollTop=0;
}
function closeModal(){modal.classList.add('hidden')}
modal.addEventListener('click',e=>{if(e.target===modal||e.target.id==='mClose')closeModal()});
/* ===== Folien (Lehrer) ===== */
const SCALE=[1,1.25,1.5];let scl=0;
function slidesList(){
 const v=topic.slides().slice();
 if(hasEx(topic))v.push({t:L('Live-Übung','Live practice'),h:'<div class="mq" data-mq></div>',note:L('Frage beantworten lassen, dann «Nächste Frage». Das Niveau A/B/C lässt sich in der Übung wechseln.','Let students answer, then “Next question”. The level A/B/C can be switched in the exercise.'),kind:'live'});
 return v;
}
function openSlides(){if(!teacher()||!topic||!topic.slides)return;T.cur=0;T.mode='slides';renderSlides()}
/* 16:9-Folie (wie PowerPoint): feste Fläche 1280×720, wird skaliert */
function cvHtml(s,i,n,thumb){
 const body=thumb&&(s.kind==='live'||s.kind==='try')?`<p class="sl-big" style="text-align:center;margin-top:60px">✏️ ${L('Übung','Exercise')}</p>`:s.h;
 return `<div class="cv" style="--c:${tcol(topic)}"><div class="cvh"><h2>${s.t}</h2></div><div class="cvb"><div class="cvin">${body}</div></div><div class="cvf"><span>EnglishLab · ${topic.name()}</span><span>${i+1} / ${n}</span></div></div>`;
}
function cvFit(cv){
 const b=cv.querySelector('.cvb'),pin=cv.querySelector('.cvin');if(!b||!pin)return;
 const fits=()=>b.scrollHeight<=b.clientHeight+1;
 if(cv.querySelector('.mq')){b.style.overflowY='auto';pin.style.zoom=Math.min(.9*SCALE[scl],1.4);return}
 b.style.overflowY='hidden';let lo=.4,hi=1.5*SCALE[scl];
 pin.style.zoom=hi;if(fits())return;
 pin.style.zoom=lo;if(!fits()){b.style.overflowY='auto';return}
 for(let i=0;i<12;i++){const m=(lo+hi)/2;pin.style.zoom=m;if(fits())lo=m;else hi=m}
 pin.style.zoom=lo;
}
function cvScale(root){
 (root||document).querySelectorAll('.cvw').forEach(w=>{
  const cv=w.querySelector('.cv');if(!cv)return;
  const k=w.clientWidth/1280;cv._k=k;cv.style.transform='scale('+k+')';
  w.style.height=(720*k)+'px';
  if(!w.classList.contains('thumb'))cvFit(cv);
 });
}
function renderSlides(){
 screen='slides';setHeader();
 const V=slidesList();if(T.cur>=V.length)T.cur=V.length-1;
 const s=V[T.cur];
 app.innerHTML=`${tabsBar('slides')}<div class="tbar"><button class="btn-link" id="slBack">‹ ${topic.name()}</button>
  <button class="primary sm" id="slPres">▶ ${L('Präsentieren','Present')}</button>
  <button class="secondary sm" id="slHo">🖨 ${L('Handout','Handout')}</button>
  <button class="secondary sm" id="slNotes">${L('Hinweise','Notes')}: ${T.notes?L('an','on'):L('aus','off')}</button>
  <span class="muted tinfo">${T.cur+1} / ${V.length}</span></div>
  <div class="ppt"><div class="film" id="film">${V.map((x,i)=>`<button class="th ${i===T.cur?'on':''} ${x.kind==='live'||x.kind==='try'?'ex':''}" data-go="${i}"><span class="thn">${i+1}</span><div class="cvw thumb">${cvHtml(x,i,V.length,true)}</div></button>`).join('')}</div>
  <div class="pmain" id="pmain"><div class="cvw stage" id="stage">${cvHtml(s,T.cur,V.length)}</div>
  ${T.notes&&s.note?`<div class="slnote"><b>${L('Hinweis für dich','Note for you')}:</b> ${s.note}</div>`:''}
  <div class="slnav"><button class="secondary" data-nav="-1" ${T.cur===0?'disabled':''}>‹ ${L('Zurück','Back')}</button><span class="muted">${L('Wische oder nutze die Pfeiltasten','Swipe or use the arrow keys')}</span><button class="secondary" data-nav="1" ${T.cur===V.length-1?'disabled':''}>${L('Weiter','Next')} ›</button></div></div></div>`;
 cvScale(app);mqInit(app);
 const on=document.querySelector('.th.on');if(on&&on.scrollIntoView)on.scrollIntoView({block:'nearest',inline:'nearest'});
 app.onclick=e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.id==='slBack')return renderSetup();
  if(b.id==='slPres')return presOn();
  if(b.id==='slHo')return openHandoutPrint();
  if(b.id==='slNotes'){T.notes=!T.notes;return renderSlides()}
  if(b.dataset.go!==undefined){T.cur=+b.dataset.go;return renderSlides()}
  if(b.dataset.nav){slGo(+b.dataset.nav)}
 };
 let sx=null,sy=null;const pm=document.getElementById('pmain');
 pm.ontouchstart=e=>{if(e.touches.length===1&&!e.target.closest('.mq,input,textarea')){sx=e.touches[0].clientX;sy=e.touches[0].clientY}else sx=null};
 pm.ontouchend=e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;sx=null;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)slGo(dx<0?1:-1)};
}
function slGo(d){const V=slidesList();const n=Math.max(0,Math.min(V.length-1,T.cur+d));if(n===T.cur)return;T.cur=n;renderSlides()}
/* Präsentieren */
const pres=document.getElementById('pres');
function presOn(){
 T.pres=true;
 try{const el=document.documentElement;if(el.requestFullscreen){const r=el.requestFullscreen();if(r&&r.catch)r.catch(()=>{})}}catch(e){}
 drawPres();
}
function presOff(){
 T.pres=false;pres.classList.add('hidden');
 try{if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen()}catch(e){}
 if(screen==='slides')renderSlides();
}
function drawPres(){
 if(!T.pres)return;
 const V=slidesList(),s=V[T.cur];
 pres.classList.remove('hidden');
 pres.innerHTML=`<div class="pst" id="pst"><div class="cvw pstage" id="pstage">${cvHtml(s,T.cur,V.length)}</div></div>
  ${T.notes&&s.note?`<div class="pnote"><b>${L('Hinweis für dich','Note for you')}:</b> ${s.note}</div>`:''}
  <div class="pbar"><button data-pg="-1" ${T.cur===0?'disabled':''}>‹</button><span>${T.cur+1} / ${V.length}</span><button data-pg="1" ${T.cur===V.length-1?'disabled':''}>›</button><i></i>
   <button data-pl>${LANG.toUpperCase()}</button><button data-pn>${L('Hinweise','Notes')}: ${T.notes?L('an','on'):L('aus','off')}</button><button data-ps>${L('Schrift','Size')}</button><button data-px>✕</button></div>
  <div class="pprog"><i style="width:${(T.cur+1)/V.length*100}%"></i></div>`;
 fitPres();mqInit(pres);
}
function fitPres(){
 const w=document.getElementById('pstage');if(!w)return;
 const W=window.innerWidth,H=window.innerHeight,k=Math.min(W/1280,H/720);
 w.style.width=(1280*k)+'px';
 cvScale(pres);
}
function pgo(d){const V=slidesList();T.cur=Math.max(0,Math.min(V.length-1,T.cur+d));drawPres()}
pres.addEventListener('click',e=>{
 const b=e.target.closest('button');
 if(b){
  if(b.dataset.pg)return pgo(+b.dataset.pg);
  if(b.dataset.px!==undefined)return presOff();
  if(b.dataset.pl!==undefined){LANG=LANG==='de'?'en':'de';try{localStorage.setItem('el-lang',LANG)}catch(x){}return drawPres()}
  if(b.dataset.pn!==undefined){T.notes=!T.notes;return drawPres()}
  if(b.dataset.ps!==undefined){scl=(scl+1)%SCALE.length;return drawPres()}
  if(b.dataset.rev!==undefined||b.dataset.revall!==undefined)return;
  return;
 }
 if(e.target.closest('.sl-q,.sl-try,.mq,input,textarea'))return;
 const sl=e.target.closest('#pst');if(!sl)return;
 const r=sl.getBoundingClientRect();pgo((e.clientX-r.left)<r.width*.25?-1:1);
});
let pX=null;
pres.addEventListener('touchstart',e=>{if(e.touches.length===1&&!e.target.closest('.mq,input,textarea'))pX=e.touches[0].clientX;else pX=null},{passive:true});
pres.addEventListener('touchend',e=>{if(pX===null)return;const dx=e.changedTouches[0].clientX-pX;pX=null;if(Math.abs(dx)>70)pgo(dx<0?1:-1)},{passive:true});
document.addEventListener('keydown',e=>{
 if(e.target&&/INPUT|TEXTAREA/.test(e.target.tagName))return;
 if(!T.pres&&screen==='slides'&&!document.getElementById('login').open&&modal.classList.contains('hidden')){if(e.key==='ArrowRight'){slGo(1)}else if(e.key==='ArrowLeft'){slGo(-1)}return}
 if(T.pres){
  if(e.key==='Escape'){presOff();return}
  if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();pgo(1)}
  else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();pgo(-1)}
  else if(e.key==='n'||e.key==='N'){T.notes=!T.notes;drawPres()}
 }
});
document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement&&T.pres)presOff()});
window.addEventListener('resize',()=>{if(T.pres)fitPres();else if(screen==='slides')cvScale(app)});
/* Lösungen aufdecken (Folien und Regeln) */
document.addEventListener('input',e=>{if(e.target.id!=='cntIn')return;const v=parseInt(e.target.value,10);if(v>=1){S.count=Math.min(200,v);document.querySelectorAll('[data-n]').forEach(x=>x.classList.toggle('on',+x.dataset.n===S.count))}});
document.addEventListener('click',e=>{
 const r=e.target.closest('[data-rev]');
 if(r){const a=r.parentElement.querySelector('.sl-a');a.hidden=!a.hidden;r.textContent=a.hidden?L('Lösung','Answer'):'✓';if(T.pres)setTimeout(fitPres,0);return}
 const ra=e.target.closest('[data-revall]');
 if(ra){const box=ra.closest('.sl-try');const hidden=[...box.querySelectorAll('.sl-a')].some(x=>x.hidden);box.querySelectorAll('.sl-a').forEach(x=>x.hidden=!hidden);box.querySelectorAll('.sl-rev').forEach(x=>x.textContent=hidden?'✓':L('Lösung','Answer'));if(T.pres)setTimeout(fitPres,0)}
});
/* ===== Anmeldung (Firebase, gleiches Konto wie Sek Planer / Grammatik Trainer) ===== */
const FBCFG={apiKey:"AIzaSyBHHhgjAvY0D0trm2IMxauhFp-ssw9ooz4",authDomain:"zufallsgenerator-209f3.firebaseapp.com",projectId:"zufallsgenerator-209f3",storageBucket:"zufallsgenerator-209f3.firebasestorage.app",messagingSenderId:"274439019701",appId:"1:274439019701:web:b90892c5745657e39972fc"};
let auth=null;
function initAuth(){
 if(T.demo)return;
 try{
  if(window.firebase){
   if(!firebase.apps.length)firebase.initializeApp(FBCFG);
   auth=firebase.auth();
   auth.onAuthStateChanged(u=>{T.user=u;if(u)closeLogin();if(!u&&screen==='slides'){screen='home'}redraw()});
  }
 }catch(e){auth=null}
}
const loginD=document.getElementById('login');
function openLogin(){try{loginD.showModal()}catch(e){loginD.setAttribute('open','')}}
function closeLogin(){try{loginD.close()}catch(e){loginD.removeAttribute('open')}}
document.getElementById('loginBtn').onclick=()=>{
 if(T.demo)return;
 if(T.user){if(confirm(L('Abmelden?','Log out?'))){try{auth.signOut()}catch(e){}T.user=null;if(screen==='slides')topic?renderSetup():renderHome();else redraw()}return}
 openLogin();
};
document.getElementById('lclose').onclick=closeLogin;
document.getElementById('lform').addEventListener('submit',async e=>{
 e.preventDefault();
 const err=document.getElementById('lerr'),btn=document.getElementById('lbtn');err.hidden=true;
 if(!auth){err.textContent=L('Die Anmeldung ist hier nicht verfügbar (keine Verbindung).','Login is not available (no connection).');err.hidden=false;return}
 btn.disabled=true;btn.textContent=L('Anmelden …','Logging in …');
 try{
  await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  await auth.signInWithEmailAndPassword(document.getElementById('lmail').value.trim(),document.getElementById('lpass').value);
 }catch(x){err.textContent=L('Anmeldung fehlgeschlagen. Bitte E-Mail und Passwort prüfen.','Login failed. Please check e-mail and password.');err.hidden=false}
 finally{btn.disabled=false;btn.textContent=L('Anmelden','Log in')}
});
/* ===== Kopfzeile ===== */
document.getElementById('rulesBtn').onclick=openRules;
document.getElementById('feedbackBtn').onclick=()=>openAppFeedback();
document.getElementById('langSeg').onclick=e=>{const b=e.target.closest('button');if(!b)return;LANG=b.dataset.l;try{localStorage.setItem('el-lang',LANG)}catch(err){}document.documentElement.lang=LANG;redraw()};
function redraw(){setHeader();
 if(screen==='home')renderHome();else if(screen==='setup')renderSetup();else if(screen==='prac')renderPractice();else if(screen==='theory')renderTheory();else if(screen==='sheet')renderSheet();else if(screen==='results')renderResults();else if(screen==='slides')renderSlides();
 if(!modal.classList.contains('hidden')){if(modalMode==='search')openSearch(true);else if(modalMode==='verbs')drawVerbs();else openRules()}if(T.pres)drawPres()}
document.getElementById('logoLink').onclick=e=>{e.preventDefault();if(T.pres)presOff();renderHome()};
const FS=[.9,1,1.12,1.25];let fsi=1;
try{const v=+localStorage.getItem('el-fs');if(v>=0&&v<FS.length)fsi=v}catch(e){}
function applyFs(){document.body.style.zoom=FS[fsi];document.getElementById('fsMinus').disabled=fsi===0;document.getElementById('fsPlus').disabled=fsi===FS.length-1&&window.innerWidth>600;try{localStorage.setItem('el-fs',fsi)}catch(e){}}
document.getElementById('fsMinus').onclick=()=>{if(fsi>0){fsi--;applyFs()}};
document.getElementById('fsPlus').onclick=()=>{if(fsi<FS.length-1){fsi++;applyFs()}else if(window.innerWidth<=600){fsi=0;applyFs()}};
applyFs();
function openAppFeedback(){var q=new URLSearchParams({app:'englishlab',version:APP_VERSION,geraet:(navigator.userAgent||'').slice(0,120)});window.open('https://tally.so/r/GeR9re?'+q.toString(),'_blank','noopener');}
/* ===== Start ===== */
const GORD=Object.fromEntries(GROUPS.map((g,i)=>[g.id,i]));
TOPICS.sort((a,b)=>(GORD[a.grp]-GORD[b.grp])||((a.ord||50)-(b.ord||50)));
initTopics();initAuth();
document.documentElement.lang=LANG;
renderHome();
