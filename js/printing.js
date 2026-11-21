/* ===== Drucken: Theorie (A4) und Unit-Test (nur Grammatik) ===== */
const UT={s:2,u:1,per:5,off:{},key:''};
const THK='el-tests';
const tHist=()=>{try{return JSON.parse(localStorage.getItem(THK))||{}}catch(e){return {}}};
const tSave=h=>{try{localStorage.setItem(THK,JSON.stringify(h))}catch(e){}};
const unitOf=(s,u)=>UNITS.find(x=>x.s===s&&x.u===u);
const utTopics=()=>[...new Set((unitOf(UT.s,UT.u)||{t:[]}).t)].map(id=>TOPICS.find(t=>t.id===id)).filter(t=>t&&hasEx(t));

/* --- Theorie drucken --- */
function openTheoryPrint(){
 screen='tprint';setHeader();
 app.innerHTML=`<div class="sheetbar"><button class="btn-link" id="tpBack">${L('‹ Zurück','‹ Back')}</button><button class="primary" id="tpPrint">${L('🖨 Drucken / PDF','🖨 Print / PDF')}</button></div>
 <div class="sheet tpr" style="--c:${grpOf(topic).c}"><h1>EnglishLab – ${L('Theorie','Theory')}: ${esc(topic.name())}</h1><p class="sub">${esc(topic.desc())}</p>
 <div class="theory2">${rulesHtml()}</div>
 <h3 class="tnotes">${L('Notizen','Notes')}</h3>${'<div class="wl"></div>'.repeat(5)}</div>`;
 app.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.id==='tpBack')return renderTheory();if(b.id==='tpPrint')return window.print()};
 window.scrollTo({top:0});
}

/* --- Unit-Test --- */
function renderUnitTest(s,u){
 const key=s+'-'+u;if(UT.key!==key){UT.key=key;UT.off={}}
 UT.s=s;UT.u=u;screen='utest';topic=null;setHeader();
 const x=unitOf(s,u),ts=utTopics(),hist=tHist()[s+'-'+u]||{};
 app.innerHTML=`<button class="btn-link" id="utBack">${L('‹ Zurück','‹ Back')}</button>
 <div class="hero"><h1>📝 ${L('Unit-Test','Unit test')}: ${stageName(s)} · ${unitName(x)}</h1><p>${L('Ein Arbeitsblatt mit Aufgaben zu den Grammatikthemen dieser Unit, dazu das Lösungsblatt. Ohne Vokabeln.','A worksheet with tasks on the grammar topics of this unit, plus an answer sheet. No vocabulary.')}</p></div>
 <div class="card"><h2>1 · ${L('Themen','Topics')}</h2><div class="chips">${ts.map(t=>`<button class="chip ${UT.off[t.id]?'':'on'}" data-ut="${t.id}">${t.ic} ${esc(t.name())}${hist[t.id]?`<span class="hist">${hist[t.id][0]} %</span>`:''}</button>`).join('')}</div></div>
 <div class="card"><h2>2 · ${L('Niveau','Level')}</h2><div class="seg">${[['C',L('C (einfach)','C (easy)')],['B','B'],['A',L('A (anspruchsvoll)','A (demanding)')]].map(([k,l])=>`<button data-ulv="${k}" class="${S.lvl===k?'on':''}">${l}</button>`).join('')}</div></div>
 <div class="card"><h2>3 · ${L('Aufgaben pro Thema','Tasks per topic')}</h2><div class="seg">${[3,5,8,10].map(n=>`<button data-uper="${n}" class="${UT.per===n?'on':''}">${n}</button>`).join('')}</div></div>
 <button class="primary" id="utDigi">${L('▶️ Test am Bildschirm lösen','▶️ Take the test on screen')}</button>
 <button class="secondary" id="utMake" style="margin-top:10px">${L('🖨 Arbeitsblatt zum Drucken','🖨 Printable worksheet')}</button><p class="err" id="utErr"></p>
 ${Object.keys(hist).length?`<p class="muted" style="margin-top:12px">${L('Die Prozentzahl bei den Themen ist dein letztes Testergebnis.','The percentage on each topic is your last test result.')}</p>`:''}`;
 app.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.id==='utBack')return renderHome();
  if(b.dataset.ut){UT.off[b.dataset.ut]=!UT.off[b.dataset.ut];return renderUnitTest(s,u)}
  if(b.dataset.ulv){S.lvl=b.dataset.ulv;return renderUnitTest(s,u)}
  if(b.dataset.uper){UT.per=+b.dataset.uper;return renderUnitTest(s,u)}
  if(b.id==='utDigi'){if(!ts.some(t=>!UT.off[t.id])){document.getElementById('utErr').textContent=L('Wähle mindestens ein Thema.','Choose at least one topic.');return}startDigital();return}
  if(b.id==='utMake'){if(!ts.some(t=>!UT.off[t.id])){document.getElementById('utErr').textContent=L('Wähle mindestens ein Thema.','Choose at least one topic.');return}UT.secs=buildUnitItems();renderUnitSheet()}};
 window.scrollTo({top:0});
}
function buildUnitItems(){
 const secs=[];
 utTopics().filter(t=>!UT.off[t.id]).forEach(t=>{topic=t;seenG.clear();secs.push({t,name:t.name(),ic:t.ic,its:build(UT.per)})});
 topic=null;seenG.clear();return secs;
}
function renderUnitSheet(){
 screen='usheet';topic=null;setHeader();
 const x=unitOf(UT.s,UT.u),total=UT.secs.reduce((a,s)=>a+s.its.length,0),title='EnglishLab – '+L('Unit-Test','Unit test')+': '+stageName(UT.s)+' · '+unitName(x);
 let n=0;
 const body=UT.secs.map(sc=>`<h2 class="tsec">${sc.ic} ${esc(sc.name)}</h2>`+sc.its.map(it=>sheetTask(it,++n)).join('')).join('');
 let m=0;
 const sol=UT.secs.map(sc=>`<h2 class="tsec">${sc.ic} ${esc(sc.name)}</h2><div class="sol-list">${sc.its.map(it=>`<div><b>${++m}.</b> ${esc(it.sol)}</div>`).join('')}</div>`).join('');
 app.innerHTML=`<div class="sheetbar"><button class="btn-link" id="usBack">${L('‹ Zurück','‹ Back')}</button><button class="secondary" id="usMix">${L('🔀 Neu mischen','🔀 Shuffle again')}</button><button class="primary" id="usPrint">${L('🖨 Drucken / PDF','🖨 Print / PDF')}</button></div>
 <div class="sheet"><h1>${esc(title)}</h1><p class="sub">${L('Niveau','Level')} ${S.lvl} · ${total} ${L('Aufgaben','tasks')}</p>
 <div class="meta"><span>${L('Name:','Name:')}</span><span>${L('Datum:','Date:')}</span><span class="pts">${L('Punkte:','Points:')} &nbsp;&nbsp;&nbsp;/ ${total}</span></div>${body}</div>
 <div class="sheet sol"><h1>${L('Lösungen','Answers')}</h1><p class="sub">${esc(title)}</p>${sol}</div>`;
 app.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.id==='usBack')return renderUnitTest(UT.s,UT.u);
  if(b.id==='usMix'){UT.secs=buildUnitItems();renderUnitSheet();window.scrollTo({top:0});return}
  if(b.id==='usPrint')return window.print()};
 window.scrollTo({top:0});
}

/* --- Test am Bildschirm --- */
function startDigital(){
 const secs=buildUnitItems();
 items=[];secs.forEach(sc=>sc.its.forEach(it=>{it.tid=sc.t.id;it.tname=sc.name;it.tic=sc.ic;items.push(it)}));
 UT.tsecs=secs.map(sc=>({id:sc.t.id,name:sc.name,ic:sc.ic}));
 testMode=true;infinite=false;idx=0;score=0;results=[];renderTask();
}
function renderTestResult(){
 screen='tresult';topic=null;setHeader();
 const total=results.length,pts=results.filter(r=>r.ok).length;
 const per=UT.tsecs.map(sc=>{const rs=results.filter(r=>r.it.tid===sc.id),ok=rs.filter(r=>r.ok).length;return {...sc,n:rs.length,ok,pct:rs.length?Math.round(ok/rs.length*100):0}});
 const hist=tHist(),key=UT.s+'-'+UT.u;hist[key]=hist[key]||{};per.forEach(p=>{hist[key][p.id]=[p.pct,Date.now()]});tSave(hist);
 const lvl=p=>p>=80?['hi',L('sitzt','solid')]:p>=60?['mid',L('fast','almost')]:['low',L('üben','practise')];
 const col=p=>p>=80?'var(--ok)':p>=60?'#d99a2b':'var(--bad)';
 const weak=per.filter(p=>p.pct<80).sort((a,b)=>a.pct-b.pct);
 const pct=total?Math.round(pts/total*100):0;
 app.innerHTML=`<div class="card"><div class="big"><span class="medal">${pct>=90?'🏆':pct>=70?'🎉':pct>=50?'👍':'💪'}</span>${pts} / ${total} ${L('Punkte','points')}<small>${pct} %</small></div></div>
 <div class="card"><h2>${L('Wo stehst du?','Where do you stand?')}</h2>${per.map(p=>{const l=lvl(p.pct);return `<div class="tr-row"><div><b>${p.ic} ${esc(p.name)}</b> <span class="muted">${p.ok} / ${p.n}</span></div><span class="tr-st ${l[0]}">${l[1]} · ${p.pct} %</span><div class="tr-bar"><i style="width:${p.pct}%;background:${col(p.pct)}"></i></div></div>`}).join('')}</div>
 <div class="card"><h2>${weak.length?L('Das solltest du üben','What to practise'):L('Stark!','Great!')}</h2>${weak.length?`<p class="muted" style="margin:0 0 6px">${L('Fang oben an, dort hast du am meisten verpasst.','Start at the top, that is where you lost most points.')}</p>`+weak.map(p=>`<div class="tr-todo"><b style="align-self:center">${p.ic} ${esc(p.name)}</b><button data-trt="${p.id}">📘 ${L('Theorie','Theory')}</button><button data-trp="${p.id}">✏️ ${L('Üben','Practise')}</button></div>`).join(''):`<p>${L('Alle Themen sitzen. Du kannst ein höheres Niveau probieren.','All topics are solid. Try a higher level.')}</p>`}</div>
 ${results.some(r=>!r.ok)?`<div class="card"><h2>${L('Deine Fehler','Your mistakes')}</h2>${per.map(p=>{const bad=results.filter(r=>!r.ok&&r.it.tid===p.id);return bad.length?`<details><summary><b>${p.ic} ${esc(p.name)}</b> (${bad.length})</summary>${bad.map(r=>`<div class="tr-err">${r.it.src?'<div>'+r.it.src+'</div>':''}${r.it.before!==undefined?'<div>'+esc(r.it.before)+' ___ '+esc(r.it.after)+'</div>':r.it.stem?'<div>'+esc(r.it.stem)+'</div>':''}<div><span class="a">${L('Deine Antwort:','Your answer:')} ${esc(r.val||'–')}</span></div><div class="c">${L('Richtig:','Correct:')} ${esc(r.it.sol)}</div><div class="muted">${r.it.why||''}</div></div>`).join('')}</details>`:''}).join('')}</div>`:''}
 ${weak.length?`<button class="primary" id="trWeak">🎯 ${L('Neuer Test nur mit den schwachen Themen','New test with the weak topics only')}</button>`:''}
 <button class="secondary" id="trAgain" style="margin-top:10px">${L('Neuer Test (gleiche Auswahl)','New test (same setup)')}</button>
 <button class="secondary" id="trBack" style="margin-top:10px">${L('‹ Zurück zur Unit','‹ Back to the unit')}</button>`;
 app.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.dataset.trt||b.dataset.trp){const id=b.dataset.trt||b.dataset.trp;testMode=false;topic=TOPICS.find(t=>t.id===id);return b.dataset.trt?renderTheory():renderPractice()}
  if(b.id==='trWeak'){const keep=new Set(weak.map(p=>p.id));utTopics().forEach(t=>{UT.off[t.id]=!keep.has(t.id)});return startDigital()}
  if(b.id==='trAgain')return startDigital();
  if(b.id==='trBack'){testMode=false;return renderUnitTest(UT.s,UT.u)}};
 window.scrollTo({top:0});
}
