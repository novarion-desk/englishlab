/* ===== Zustand ===== */
let topic=null,screen='home',items=[],idx=0,score=0,results=[],answered=false,infinite=false,built=[],sheetItems=[];
const T={user:null,demo:/[?&]demo\b/.test(location.search),cur:0,mode:'slides',pres:false,notes:true};
const teacher=()=>!!T.user||T.demo;
const hasEx=t=>!!t.gen;
function initTopics(){
 TOPICS.forEach(t=>{if(t.gen)ST[t.id]={types:t.typeDef.slice(),subs:(t.subDef||[]).slice()}});
}
const effTypes=()=>topic.types().filter(x=>ST[topic.id].types.includes(x.k)&&(!x.A||S.lvl==='A')).map(x=>x.k);
function typeSeq(n){const m=effTypes();let bag=[],seq=[];for(let i=0;i<n;i++){if(!bag.length)bag=shuffle(m);let j=0;if(m.length>1&&seq.length&&bag[0]===seq[seq.length-1])j=bag.findIndex(x=>x!==seq[seq.length-1])||0;if(j<0)j=0;seq.push(bag.splice(j,1)[0])}return seq}
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
 const rb=document.getElementById('rulesBtn');rb.style.display=topic&&screen!=='slides'?'':'none';rb.textContent='📘 '+L('Regeln','Rules');
 document.querySelectorAll('#langSeg button').forEach(b=>b.classList.toggle('on',b.dataset.l===LANG));
 const lb=document.getElementById('loginBtn');lb.textContent=T.user?L('Lehrer ✓','Teacher ✓'):T.demo?'Demo':L('Lehrer','Teacher');lb.title=T.user?L('Abmelden','Log out'):'';
 document.body.classList.toggle('home',screen==='home');
 setTheme(screen==='home'?null:topic);
}
/* ===== Start ===== */
function renderHome(q){
 screen='home';topic=null;setHeader();
 q=(q||'').trim().toLowerCase();
 const match=t=>!q||(t.name()+' '+t.desc()).toLowerCase().includes(q);
 const card=t=>{const g=grpOf(t);return `<button class="tile" data-topic="${t.id}" style="--c:${g.c}"><span class="ic">${t.ic}</span><b>${t.name()}</b><small>${t.desc()}</small><span class="tags">${hasEx(t)?`<i>✏️ ${L('Üben','Practise')}</i>`:`<i>⏱️ Tense Trainer</i>`}<i>📘 ${L('Regeln','Rules')}</i>${teacher()&&t.slides?`<i class="tt">🎬 ${L('Folien','Slides')}</i>`:''}</span></button>`};
 const sec=GROUPS.map(g=>{const ts=TOPICS.filter(t=>t.grp===g.id&&match(t));return ts.length?`<section class="grp" style="--c:${g.c}"><h2><span class="dot">${g.ic}</span>${g.n()}</h2><div class="tiles">${ts.map(card).join('')}</div></section>`:''}).join('');
 app.innerHTML=`<div class="hero"><h1>${L('Grammatik üben, nachlesen, verstehen','Practise, read and understand grammar')}</h1>
  <p>${L('Wähle ein Thema. Zu jedem Thema findest du die Regeln und Übungen auf deinem Niveau.','Pick a topic. Every topic has clear rules and exercises at your level.')}</p>
  <input class="search" id="q" type="search" placeholder="${L('Thema suchen …','Search a topic …')}" value="${esc(q)}" autocomplete="off"></div>
  ${sec||`<p class="muted center">${L('Nichts gefunden.','Nothing found.')}</p>`}
  <section class="grp" style="--c:#475569"><div class="tiles"><a class="tile ext" href="${TENSE_URL}"><span class="ic">⏱️</span><b>Tense Trainer</b><small>${L('Zeitformen üben (eigene App)','Practise tenses (separate app)')}</small></a></div></section>`;
 app.onclick=e=>{const b=e.target.closest('[data-topic]');if(b)openTopic(b.dataset.topic)};
 const qi=document.getElementById('q');qi.oninput=()=>{const v=qi.value;renderHome(v);const n=document.getElementById('q');n.focus();n.setSelectionRange(v.length,v.length)};
}
function openTopic(id){topic=TOPICS.find(t=>t.id===id);renderSetup()}
function renderSetup(){
 screen='setup';items=[];setHeader();
 const g=grpOf(topic);
 const head=`<button class="btn-link" id="homeBtn">‹ ${L('Themen','Topics')}</button>
 <div class="thead" style="--c:${g.c}"><span class="ic">${topic.ic}</span><div><h1>${topic.name()}</h1><p>${topic.desc()}</p></div></div>
 <div class="rowbtn"><button class="secondary" id="rulesOpen">📘 ${L('Regeln nachlesen','Read the rules')}</button>${teacher()&&topic.slides?`<button class="secondary tbtn" id="slidesOpen">🎬 ${L('Folien','Slides')}</button>`:''}</div>`;
 if(!hasEx(topic)){
  app.innerHTML=head+`<div class="card"><h2>${L('Üben','Practise')}</h2><p style="margin:0 0 12px">${L('Dieses Thema übst du im Tense Trainer, mit allen Zeitformen und Aufgaben.','Practise this topic in the Tense Trainer, with all tenses and exercises.')}</p><a class="primary" style="text-align:center;text-decoration:none" href="${TENSE_URL}">${L('Zum Tense Trainer →','Go to the Tense Trainer →')}</a></div>`;
  app.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.id==='homeBtn')return renderHome();if(b.id==='rulesOpen')return openRules();if(b.id==='slidesOpen')return openSlides()};
  return;
 }
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
  <div class="seg">${[10,15,20,0].map(n=>`<button class="${S.count===n?'on':''}" data-n="${n}">${n||'∞'}</button>`).join('')}</div></div>
 <button class="primary" id="start">${L("Los geht's →","Let's go →")}</button>
 <button class="secondary" id="sheetBtn" style="margin-top:10px">${L('🖨 Arbeitsblatt (Vorschau, PDF / Druck)','🖨 Worksheet (preview, PDF / print)')}</button>
 <p class="err" id="err"></p>`;
 app.onclick=e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.id==='homeBtn')return renderHome();
  if(b.id==='rulesOpen')return openRules();
  if(b.id==='slidesOpen')return openSlides();
  if(b.dataset.lv){S.lvl=b.dataset.lv}
  else if(b.dataset.t){
   const k=b.dataset.t;if(b.disabled)return;
   const all=subs.map(s=>s.k);
   if(st.subs.includes(k)){if(st.subs.length>1)st.subs=st.subs.filter(x=>x!==k)}else st.subs=all.filter(x=>x===k||st.subs.includes(x));
  }
  else if(b.dataset.m){const k=b.dataset.m,all=topic.types().map(t=>t.k);st.types=st.types.includes(k)?st.types.filter(x=>x!==k):all.filter(x=>x===k||st.types.includes(x))}
  else if(b.dataset.n!==undefined){S.count=+b.dataset.n}
  else if(b.id==='start')return start();
  else if(b.id==='sheetBtn')return openSheet();
  else return;
  renderSetup();
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
 <div class="qtop"><button class="btn-link" id="quit">${infinite?L('✓ Fertig','✓ Done'):L('✕ Beenden','✕ Quit')}</button><span>${infinite?L('Aufgabe ','Exercise ')+(idx+1)+' · ∞':(idx+1)+' / '+items.length}</span><span>⭐ ${score}</span></div>
 ${infinite?'':`<div class="bar"><div style="width:${idx/items.length*100}%"></div></div>`}
 <div class="card"><div class="tag">${typeLabel(it.kind)}</div>${body}<div id="fb"></div><div class="actions">${auto}</div></div>`;
 app.onclick=e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.id==='quit'){
   if(infinite&&results.length)return renderResults();
   if(results.length&&!confirm(L('Runde wirklich beenden?\nDeine bisherigen Antworten gehen verloren.','Really quit this round?\nYour answers so far will be lost.')))return;
   return renderSetup();
  }
  if(b.dataset.o!==undefined&&!answered)return answerChoice(+b.dataset.o);
  if(b.dataset.w!==undefined&&!answered){built.push(it.words[+b.dataset.w]);b.disabled=true;drawBuilt();return}
  if(b.id==='reset'&&!answered){built=[];app.querySelectorAll('#wb button').forEach(x=>x.disabled=false);drawBuilt();return}
  if(b.id==='go')return answered?next():check();
 };
 const inp=document.getElementById('inp');if(inp){inp.focus();inp.onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();answered?next():check()}}}
}
function drawBuilt(){const el=document.getElementById('built');if(el)el.innerHTML=built.map(w=>`<button disabled>${esc(w)}</button>`).join('')}
function done(ok,val){
 const it=items[idx];answered=true;if(ok)score++;
 results.push({it,ok,val});
 const fb=document.getElementById('fb');
 const praise=rnd(L('Richtig!|Super!|Genau!|Stark!','Correct!|Great!|Well done!|Nice one!').split('|'));
 fb.innerHTML=ok?`<div class="fb ok"><div class="fbt">${praise}</div></div>`:`<div class="fb bad"><div class="fbt">${L('Nicht ganz.','Not quite.')}</div>${L('Richtig wäre:','Correct:')} <b>${esc(it.sol)}</b><div class="rule">${it.why}</div></div>`;
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
 app.querySelectorAll('[data-o]').forEach((b,j)=>{b.disabled=true;if(j===it.correct)b.classList.add('right');else if(j===i)b.classList.add('wrong')});
 done(i===it.correct,it.opts[i]);
}
function next(){idx++;if(!infinite&&idx>=items.length)return renderResults();if(infinite&&idx>=items.length)items.push(...build(5));renderTask()}
function renderResults(){
 screen='results';const n=results.length,pct=n?Math.round(score/n*100):0;
 const wrong=results.filter(r=>!r.ok);
 const medal=pct>=90?'🏆':pct>=70?'🎉':pct>=50?'👍':'💪';
 app.innerHTML=`<div class="card"><div class="big"><span class="medal">${medal}</span>${score} / ${n}<small>${pct} %</small></div></div>
 ${wrong.length?`<div class="card"><h2>${L('Zum Nachschauen','To review')}</h2><ul class="rl">${wrong.map(r=>`<li>${r.it.src?'<div class="src" style="font-size:17px">'+r.it.src+'</div>':''}${r.val?`<span class="err2">${esc(r.val)}</span><br>`:''}<b>${esc(r.it.sol)}</b></li>`).join('')}</ul></div>`:''}
 <button class="primary" id="again">${L('Nochmal','Again')}</button>
 <button class="secondary" id="setup" style="margin-top:10px">${L('‹ Einstellungen','‹ Settings')}</button>`;
 app.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.id==='again')return start();if(b.id==='setup')return renderSetup()};
}
/* ===== Arbeitsblatt ===== */
function openSheet(){
 if(!chk())return;
 seenG.clear();sheetItems=build(S.count>0?S.count:20);renderSheet();
}
function sheetTask(it,n){
 const num=`<span class="n">${n}.</span>`;
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
  if(b.id==='shBack')return renderSetup();
  if(b.id==='shMix'){seenG.clear();sheetItems=build(sheetItems.length);renderSheet();window.scrollTo({top:0});return}
  if(b.id==='shPrint')return window.print()};
 window.scrollTo({top:0});
}
/* ===== Regeln ===== */
function rulesHtml(){
 if(topic.rules)return `<ul class="rl">${topic.rules().map(r=>`<li><b>${r[0]}</b>${r[1]?'<br>'+r[1]:''}${r[2]?'<br><em>'+r[2]+'</em>':''}</li>`).join('')}</ul>`;
 if(topic.slides)return topic.slides().filter(s=>s.kind!=='try').map(s=>`<section class="rsec"><h3>${s.t}</h3>${s.h}</section>`).join('');
 return '';
}
function openRules(){
 modalBody.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><h2 style="margin:0">📘 ${L('Regeln','Rules')} – ${topic?topic.name():''}</h2><button class="btn-link" id="mClose">✕</button></div>${rulesHtml()}`;
 modal.classList.remove('hidden');modal.scrollTop=0;
}
function closeModal(){modal.classList.add('hidden')}
modal.addEventListener('click',e=>{if(e.target===modal||e.target.id==='mClose')closeModal()});
/* ===== Folien (Lehrer) ===== */
const SCALE=[1,1.25,1.5];let scl=0;
function slidesList(){return topic.slides()}
function openSlides(){if(!teacher()||!topic||!topic.slides)return;T.cur=0;T.mode='slides';renderSlides()}
function renderSlides(){
 screen='slides';setHeader();
 const V=slidesList();if(T.cur>=V.length)T.cur=V.length-1;
 const s=V[T.cur];
 const bar=`<div class="tbar"><button class="btn-link" id="slBack">‹ ${topic.name()}</button>
  <div class="seg"><button data-tm="slides" class="${T.mode==='slides'?'on':''}">${L('Folien','Slides')}</button><button data-tm="overview" class="${T.mode==='overview'?'on':''}">${L('Übersicht','Overview')}</button></div>
  ${T.mode==='slides'?`<button class="primary sm" id="slPres">▶ ${L('Präsentieren','Present')}</button>`:''}
  <button class="secondary sm" id="slNotes">${L('Hinweise','Notes')}: ${T.notes?L('an','on'):L('aus','off')}</button>
  <span class="muted tinfo">${V.length} ${L('Folien','slides')}</span></div>`;
 if(T.mode==='overview'){
  app.innerHTML=bar+`<div class="ovgrid">${V.map((x,i)=>`<button class="ov ${x.kind==='try'?'try':''}" data-go="${i}"><span>${i+1}</span><b>${x.t}</b>${x.kind==='try'?'<small>✏️ '+L('Übung','Exercise')+'</small>':''}</button>`).join('')}</div>`;
 }else{
  app.innerHTML=bar+`<div class="slide card"><h2 class="sltitle">${s.t}</h2><div class="slbody">${s.h}</div></div>
  ${T.notes&&s.note?`<div class="slnote"><b>${L('Hinweis für dich','Note for you')}:</b> ${s.note}</div>`:''}
  <div class="slnav"><button class="secondary" data-nav="-1" ${T.cur===0?'disabled':''}>‹</button><span>${T.cur+1} / ${V.length}</span><button class="secondary" data-nav="1" ${T.cur===V.length-1?'disabled':''}>›</button></div>`;
 }
 app.onclick=e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.id==='slBack')return renderSetup();
  if(b.dataset.tm){T.mode=b.dataset.tm;return renderSlides()}
  if(b.id==='slPres')return presOn();
  if(b.id==='slNotes'){T.notes=!T.notes;return renderSlides()}
  if(b.dataset.go!==undefined){T.cur=+b.dataset.go;T.mode='slides';return renderSlides()}
  if(b.dataset.nav){T.cur+= +b.dataset.nav;window.scrollTo({top:0});return renderSlides()}
 };
}
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
 pres.innerHTML=`<div class="pslide" id="pslide"><div class="pin" id="pin" style="--c:${tcol(topic)}"><h2>${s.t}</h2>${s.h}</div></div>
  ${T.notes&&s.note?`<div class="pnote"><b>${L('Hinweis für dich','Note for you')}:</b> ${s.note}</div>`:''}
  <div class="pbar"><button data-pg="-1" ${T.cur===0?'disabled':''}>‹</button><span>${T.cur+1} / ${V.length}</span><button data-pg="1" ${T.cur===V.length-1?'disabled':''}>›</button><i></i>
   <button data-pl>${LANG.toUpperCase()}</button><button data-pn>${L('Hinweise','Notes')}: ${T.notes?L('an','on'):L('aus','off')}</button><button data-ps>${L('Schrift','Size')}</button><button data-px>✕</button></div>
  <div class="pprog"><i style="width:${(T.cur+1)/V.length*100}%"></i></div>`;
 fitPres();
}
function fitPres(){
 const sl=document.getElementById('pslide'),pin=document.getElementById('pin');if(!sl||!pin)return;
 const cs=getComputedStyle(sl),avail=sl.clientHeight-parseFloat(cs.paddingTop)-parseFloat(cs.paddingBottom)-4;
 const set=f=>{pin.style.zoom=f.toFixed(3)};
 let lo=.6,hi=1.7*SCALE[scl];sl.style.overflowY='hidden';
 set(hi);if(pin.getBoundingClientRect().height<=avail)return;
 set(lo);if(pin.getBoundingClientRect().height>avail){sl.style.overflowY='auto';return}
 for(let i=0;i<12;i++){const m=(lo+hi)/2;set(m);if(pin.getBoundingClientRect().height<=avail)lo=m;else hi=m}
 set(lo);
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
 if(e.target.closest('.sl-q,.sl-try'))return;
 const sl=e.target.closest('#pslide');if(!sl)return;
 const r=sl.getBoundingClientRect();pgo((e.clientX-r.left)<r.width*.25?-1:1);
});
let pX=null;
pres.addEventListener('touchstart',e=>{if(e.touches.length===1)pX=e.touches[0].clientX},{passive:true});
pres.addEventListener('touchend',e=>{if(pX===null)return;const dx=e.changedTouches[0].clientX-pX;pX=null;if(Math.abs(dx)>70)pgo(dx<0?1:-1)},{passive:true});
document.addEventListener('keydown',e=>{
 if(T.pres){
  if(e.key==='Escape'){presOff();return}
  if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();pgo(1)}
  else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();pgo(-1)}
  else if(e.key==='n'||e.key==='N'){T.notes=!T.notes;drawPres()}
 }
});
document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement&&T.pres)presOff()});
window.addEventListener('resize',()=>{if(T.pres)fitPres()});
/* Lösungen aufdecken (Folien und Regeln) */
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
 if(screen==='home')renderHome();else if(screen==='setup')renderSetup();else if(screen==='sheet')renderSheet();else if(screen==='results')renderResults();else if(screen==='slides')renderSlides();
 if(!modal.classList.contains('hidden'))openRules();if(T.pres)drawPres()}
document.getElementById('logoLink').onclick=e=>{e.preventDefault();if(T.pres)presOff();renderHome()};
const FS=[.9,1,1.12,1.25];let fsi=1;
try{const v=+localStorage.getItem('el-fs');if(v>=0&&v<FS.length)fsi=v}catch(e){}
function applyFs(){document.body.style.zoom=FS[fsi];document.getElementById('fsMinus').disabled=fsi===0;document.getElementById('fsPlus').disabled=fsi===FS.length-1;try{localStorage.setItem('el-fs',fsi)}catch(e){}}
document.getElementById('fsMinus').onclick=()=>{if(fsi>0){fsi--;applyFs()}};
document.getElementById('fsPlus').onclick=()=>{if(fsi<FS.length-1){fsi++;applyFs()}};
applyFs();
function openAppFeedback(){var q=new URLSearchParams({app:'englishlab',version:APP_VERSION,geraet:(navigator.userAgent||'').slice(0,120)});window.open('https://tally.so/r/GeR9re?'+q.toString(),'_blank','noopener');}
/* ===== Start ===== */
const GORD=Object.fromEntries(GROUPS.map((g,i)=>[g.id,i]));
TOPICS.sort((a,b)=>(GORD[a.grp]-GORD[b.grp])||((a.ord||50)-(b.ord||50)));
initTopics();initAuth();
document.documentElement.lang=LANG;
renderHome();
