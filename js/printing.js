/* ===== Drucken: Theorie (A4) und Unit-Test (nur Grammatik) ===== */
const UT={s:2,u:1,per:5,off:{},key:'',free:false,sel:new Set(),total:20,custom:20,timer:false,fb:false};
const ptsOf=it=>(it.type==='order'||it.type==='text')?2:1;
const utBack=()=>UT.free?renderTprep():renderUnitTest(UT.s,UT.u);
const THK='el-tests';
const tHist=()=>{try{return JSON.parse(localStorage.getItem(THK))||{}}catch(e){return {}}};
const tSave=h=>{try{localStorage.setItem(THK,JSON.stringify(h))}catch(e){}};
const unitOf=(s,u)=>UNITS.find(x=>x.s===s&&x.u===u);
const utTopics=()=>UT.free?TOPICS.filter(t=>hasEx(t)&&UT.sel.has(t.id)):[...new Set((unitOf(UT.s,UT.u)||{t:[]}).t)].map(id=>TOPICS.find(t=>t.id===id)).filter(t=>t&&hasEx(t));

/* --- Theorie drucken --- */
function openTheoryPrint(){
 screen='tprint';setHeader();
 app.innerHTML=`<div class="sheetbar"><button class="btn-link" id="tpBack">${L('‹ Zurück','‹ Back')}</button><button class="primary" id="tpPrint">${L('🖨 Drucken','🖨 Print')}</button><button class="secondary" data-pdf="1">${L('📄 PDF speichern','📄 Save PDF')}</button></div>
 <div class="sheet tpr" style="--c:${grpOf(topic).c}"><h1>EnglishLab – ${L('Theorie','Theory')}: ${esc(topic.name())}</h1><p class="sub">${esc(topic.desc())}</p>
 <div class="theory2">${rulesHtml()}</div>
 <h3 class="tnotes">${L('Notizen','Notes')}</h3>${'<div class="wl"></div>'.repeat(5)}</div>`;
 app.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.id==='tpBack')return renderTheory();if(b.id==='tpPrint')return doPrint()};
 window.scrollTo({top:0});
}

/* --- Handout: Folien wählbar pro A4, Notizen: keine / rechts neben jeder Folie / am Schluss --- */
const HO={n:'6',notes:'none'};
function openHandoutPrint(){
 const V=slidesList().filter(x=>x.kind!=='live'&&x.kind!=='try');
 const right=HO.notes==='right',ns=right?['2','3','4']:['1','2','4','6'];
 if(!ns.includes(HO.n))HO.n=right?'3':'6';
 const per=+HO.n,pages=Math.ceil(V.length/per);
 const nopts=[['none',L('Keine','None')],['right',L('Rechts neben jeder Folie','Beside every slide')],['end',L('Am Schluss (½ Seite)','At the end (½ page)')]];
 screen='tprint';setHeader();
 const cells=g=>V.slice(g*per,g*per+per).map((x,j)=>`<div class="hocell"><div class="cvw">${cvHtml(x,g*per+j,V.length,false)}</div>${right?'<div class="hon"><div>'+'<i></i>'.repeat(16)+'</div></div>':''}</div>`).join('');
 const endBlock=`<div class="honb"><h3 class="honh">${L('Notizen','Notes')}</h3><div class="hol"><div>${'<i></i>'.repeat(12)}</div></div></div>`;
 const endPages='';
 app.innerHTML=`<div class="sheetbar"><button class="btn-link" id="hoBack">${L('‹ Zurück zu den Folien','‹ Back to slides')}</button></div>
 <div class="sheetbar"><button class="primary" id="hoPrint">${L('🖨 Drucken','🖨 Print')}</button><button class="secondary" id="hoPdf">${L('📄 PDF speichern','📄 Save PDF')}</button></div>
 <div class="sheetbar hopick"><b>${L('Folien pro A4','Slides per A4')}:</b><div class="seg">${ns.map(k=>`<button data-hon="${k}" class="${HO.n===k?'on':''}">${k}</button>`).join('')}</div></div>
 <div class="sheetbar hopick"><b>${L('Notizen','Notes')}:</b><div class="seg">${nopts.map(([k,l])=>`<button data-hono="${k}" class="${HO.notes===k?'on':''}">${l}</button>`).join('')}</div></div>
 <div class="sheet hosh">${Array.from({length:pages},(_,g)=>`<div class="hogrid hn${HO.n}${right?' hnr':''}">${cells(g)}</div>`).join('')}${endPages}</div>`;
 cvScale(app);
 /* Notizen am Schluss: halbe A4-Seite, auf der letzten Folienseite wenn Platz ist, sonst auf einer eigenen Seite */
 if(HO.notes==='end'){
  const mm=3.7795,gr=[...app.querySelectorAll('.hogrid')],last=gr[gr.length-1];
  const top=last.getBoundingClientRect().top,used=Math.max(...[...last.querySelectorAll('.hocell')].map(c=>c.getBoundingClientRect().bottom))-top;
  if(used/mm+130<=268)last.insertAdjacentHTML('beforeend',endBlock);
  else{last.insertAdjacentHTML('afterend','<div class="hogrid honotes hn'+HO.n+'">'+endBlock+'</div>')}
 }
 app.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.hon){HO.n=b.dataset.hon;return openHandoutPrint()}if(b.dataset.hono){HO.notes=b.dataset.hono;return openHandoutPrint()}if(b.id==='hoBack')return renderSlides();if(b.id==='hoPrint')return doPrint();if(b.id==='hoPdf')return makePdf(true)};
 window.scrollTo({top:0});
}

/* --- Unit-Test --- */
function renderUnitTest(s,u){
 UT.free=false;const key=s+'-'+u;if(UT.key!==key){UT.key=key;UT.off={}}
 UT.s=s;UT.u=u;screen='utest';topic=null;setHeader();
 const x=unitOf(s,u),ts=utTopics(),hist=tHist()[s+'-'+u]||{};
 app.innerHTML=`<button class="btn-link" id="utBack">${L('‹ Zurück','‹ Back')}</button>
 <div class="hero"><h1>📝 ${L('Unit-Test','Unit test')}: ${stageName(s)} · ${unitName(x)}</h1><p>${L('Ein Arbeitsblatt mit Aufgaben zu den Grammatikthemen dieser Unit, dazu das Lösungsblatt. Ohne Vokabeln.','A worksheet with tasks on the grammar topics of this unit, plus an answer sheet. No vocabulary.')}</p></div>
 <div class="card"><h2>1 · ${L('Themen','Topics')}</h2><div class="chips">${ts.map(t=>`<button class="chip ${UT.off[t.id]?'':'on'}" data-ut="${t.id}">${t.ic} ${esc(t.name())}${hist[t.id]?`<span class="hist">${hist[t.id][0]} %</span>`:''}</button>`).join('')}</div></div>
 <div class="card"><h2>2 · ${L('Niveau','Level')}</h2><div class="seg">${[['C',L('C (einfach)','C (easy)')],['B',L('B (mittel)','B (medium)')],['A',L('A (anspruchsvoll)','A (demanding)')]].map(([k,l])=>`<button data-ulv="${k}" class="${S.lvl===k?'on':''}">${l}</button>`).join('')}</div></div>
 <div class="card"><h2>3 · ${L('Aufgaben pro Thema','Tasks per topic')}</h2><div class="seg">${[3,5,8,10].map(n=>`<button data-uper="${n}" class="${UT.per===n?'on':''}">${n}</button>`).join('')}</div></div>
 <div class="card"><h2>4 · ${L('Rückmeldung am Bildschirm','Feedback on screen')}</h2><div class="seg">${[[0,L('Erst am Ende','At the end')],[1,L('Nach jeder Aufgabe','After each task')]].map(([k,l])=>`<button data-ufb="${k}" class="${(UT.fb?1:0)===k?'on':''}">${l}</button>`).join('')}</div><p class="muted" style="margin:6px 0 0;font-size:.9em">${UT.fb?L('Nach jeder Antwort siehst du sofort, ob sie stimmt, mit Erklärung und «Frag Marty».','After each answer you see at once whether it is right, with an explanation and «Ask Marty».'):L('Wie in einer echten Prüfung: Du siehst die Lösungen erst in der Auswertung.','Like a real test: you see the solutions only in the results.')}</p></div>
 <button class="primary" id="utDigi">${L('▶️ Test am Bildschirm lösen','▶️ Take the test on screen')}</button>
 <button class="secondary" id="utMake" style="margin-top:10px">${L('🖨 Arbeitsblatt zum Drucken','🖨 Printable worksheet')}</button><p class="err" id="utErr"></p>
 ${Object.keys(hist).length?`<p class="muted" style="margin-top:12px">${L('Die Prozentzahl bei den Themen ist dein letztes Testergebnis.','The percentage on each topic is your last test result.')}</p>`:''}`;
 app.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.id==='utBack')return renderHome();
  if(b.dataset.ut){UT.off[b.dataset.ut]=!UT.off[b.dataset.ut];return renderUnitTest(s,u)}
  if(b.dataset.ulv){S.lvl=b.dataset.ulv;return renderUnitTest(s,u)}
  if(b.dataset.uper){UT.per=+b.dataset.uper;return renderUnitTest(s,u)}
  if(b.dataset.ufb!==undefined){UT.fb=b.dataset.ufb==='1';return renderUnitTest(s,u)}
  if(b.id==='utDigi'){if(!ts.some(t=>!UT.off[t.id])){document.getElementById('utErr').textContent=L('Wähle mindestens ein Thema.','Choose at least one topic.');return}startDigital();return}
  if(b.id==='utMake'){if(!ts.some(t=>!UT.off[t.id])){document.getElementById('utErr').textContent=L('Wähle mindestens ein Thema.','Choose at least one topic.');return}UT.secs=buildUnitItems();renderUnitSheet()}};
 window.scrollTo({top:0});
}
function buildUnitItems(){
 const secs=[];
 const act=utTopics().filter(t=>UT.free||!UT.off[t.id]);
 const tot=UT.total==='custom'?Math.max(1,Math.min(60,parseInt(UT.custom,10)||20)):+UT.total;
 const cnt=act.map((t,i)=>UT.free?Math.floor(tot/act.length)+(i<tot%act.length?1:0):UT.per);
 act.forEach((t,i)=>{if(!cnt[i])return;topic=t;seenG.clear();secs.push({t,name:t.name(),ic:t.ic,its:build(cnt[i])})});
 topic=null;seenG.clear();return secs;
}
function renderUnitSheet(){
 screen='usheet';topic=null;setHeader();
 const x=unitOf(UT.s,UT.u),total=UT.secs.reduce((a,s)=>a+s.its.reduce((b,it)=>b+ptsOf(it),0),0),nt=UT.secs.reduce((a,s)=>a+s.its.length,0),title=UT.free?'EnglishLab – '+L('Übungsprüfung','Practice test')+': '+UT.secs.map(s=>s.name).slice(0,3).join(', ')+(UT.secs.length>3?' …':''):'EnglishLab – '+L('Unit-Test','Unit test')+': '+stageName(UT.s)+' · '+unitName(x);
 let n=0;
 const body=UT.secs.map(sc=>`<h2 class="tsec">${sc.ic} ${esc(sc.name)}</h2>`+sc.its.map(it=>sheetTask(it,++n,ptsOf(it))).join('')).join('');
 let m=0;
 const sol=UT.secs.map(sc=>`<h2 class="tsec">${sc.ic} ${esc(sc.name)}</h2><div class="sol-list">${sc.its.map(it=>`<div><b>${++m}.</b> ${esc(it.sol)} <span class="pt">${ptsOf(it)} ${L('P.','pts')}</span></div>`).join('')}</div>`).join('');
 app.innerHTML=`<div class="sheetbar"><button class="btn-link" id="usBack">${L('‹ Zurück','‹ Back')}</button><button class="secondary" id="usMix">${L('🔀 Neu mischen','🔀 Shuffle again')}</button><button class="primary" id="usPrint">${L('🖨 Drucken','🖨 Print')}</button><button class="secondary" data-pdf="1">${L('📄 PDF speichern','📄 Save PDF')}</button></div>
 <div class="sheet"><h1>${esc(title)}</h1><p class="sub">${L('Niveau','Level')} ${S.lvl} · ${nt} ${L('Aufgaben','tasks')} · ${total} ${L('Punkte','points')}</p>
 <div class="meta"><span>${L('Name:','Name:')}</span><span>${L('Datum:','Date:')}</span><span class="pts">${L('Punkte:','Points:')} &nbsp;&nbsp;&nbsp;/ ${total}</span></div>${body}</div>
 <div class="sheet sol"><h1>${L('Lösungen','Answers')}</h1><p class="sub">${esc(title)}</p>${sol}</div>`;
 app.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.id==='usBack')return utBack();
  if(b.id==='usMix'){UT.secs=buildUnitItems();renderUnitSheet();window.scrollTo({top:0});return}
  if(b.id==='usPrint')return doPrint()};
 window.scrollTo({top:0});
}

function startTimer(){clearInterval(UT.clk);if(!UT.timer)return;UT.clk=setInterval(()=>{const e=document.getElementById('clk');if(!e){if(screen!=='task')clearInterval(UT.clk);return}const s=Math.floor((Date.now()-UT.t0)/1000);e.textContent=Math.floor(s/60)+':'+String(s%60).padStart(2,'0')},500)}

/* --- Testvorbereitung: Themen frei mischen, Punkte, Blatt --- */
function tprepInfo(){
 const el=document.getElementById('tpInfo');if(!el)return;
 const n=UT.sel.size,tot=UT.total==='custom'?Math.max(1,Math.min(60,parseInt(UT.custom,10)||20)):+UT.total;
 el.textContent=n?L(`${n} Themen, ${tot} Aufgaben (Niveau ${S.lvl}). Punkte: Einsetzen und Auswählen 1, Satz ordnen und Umformen 2.`,`${n} topics, ${tot} tasks (level ${S.lvl}). Points: fill in and choose 1, word order and rewriting 2.`):L('Wähle mindestens ein Thema.','Choose at least one topic.');
 ['tpGo','tpSheet'].forEach(id=>{const b=document.getElementById(id);if(b)b.disabled=!n});
}
function renderTprep(){
 UT.free=true;screen='tprep';topic=null;testMode=false;setHeader();
 const ts=TOPICS.filter(hasEx);
 const grp=GROUPS.map(g=>({g,ts:ts.filter(t=>t.grp===g.id)})).filter(x=>x.ts.length);
 app.innerHTML=`<button class="btn-link" id="tpHome">${L('‹ Themen','‹ Topics')}</button>
 <div class="hero"><h1>📝 ${L('Testvorbereitung','Test preparation')}</h1><p>${L('Wähle die Themen deines Tests. Die Aufgaben werden gemischt und du sammelst Punkte. Danach siehst du, was du noch üben musst.','Pick the topics of your test. The tasks are mixed and you collect points. Then you see what to practise.')}</p></div>
 <div class="card"><h2>1 · ${L('Themen','Topics')}</h2>${grp.map(x=>`<div class="tlab">${x.g.ic} ${x.g.n()} <button class="btn-link" data-tg="${x.ts.map(t=>t.id).join(',')}">${L('alle/keine','all/none')}</button></div><div class="chips">${x.ts.map(t=>`<button class="chip ${UT.sel.has(t.id)?'on':''}" data-tp="${t.id}">${t.ic} ${esc(t.name())}</button>`).join('')}</div>`).join('')}</div>
 <div class="card"><h2>2 · ${L('Niveau','Level')}</h2><div class="seg">${[['C',L('C (einfach)','C (easy)')],['B',L('B (mittel)','B (medium)')],['A',L('A (anspruchsvoll)','A (demanding)')]].map(([k,l])=>`<button data-plv="${k}" class="${S.lvl===k?'on':''}">${l}</button>`).join('')}</div></div>
 <div class="card"><h2>3 · ${L('Anzahl Aufgaben','Number of tasks')}</h2><div class="seg">${['10','20','30','custom'].map(v=>`<button data-ptot="${v}" class="${String(UT.total)===v?'on':''}">${v==='custom'?L('eigene','custom'):v}</button>`).join('')}</div>
  <label class="cntown" id="tpCw" ${UT.total==='custom'?'':'hidden'}>${L('Anzahl:','Number:')} <input id="tpCust" type="number" inputmode="numeric" min="1" max="60" value="${UT.custom}"></label></div>
 <div class="card"><h2>4 · ${L('Weiteres','More')}</h2><div class="chips"><button class="chip ${UT.timer?'on':''}" data-ptimer="1">⏱ ${L('Stoppuhr anzeigen','Show stopwatch')}</button><button class="chip ${UT.fb?'on':''}" data-pfb="1">💡 ${L('Lösung nach jeder Aufgabe zeigen','Show the solution after each task')}</button></div></div>
 <p class="muted" id="tpInfo"></p>
 <button class="primary" id="tpGo">${L('▶️ Test starten','▶️ Start test')}</button>
 <button class="secondary" id="tpSheet" style="margin-top:10px">${L('🖨 Übungsprüfung zum Drucken (mit Lösungen)','🖨 Printable practice test (with answers)')}</button>`;
 tprepInfo();
 app.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.id==='tpHome')return renderHome();
  if(b.dataset.tp){const k=b.dataset.tp;UT.sel.has(k)?UT.sel.delete(k):UT.sel.add(k);b.classList.toggle('on',UT.sel.has(k));return tprepInfo()}
  if(b.dataset.tg){const ids=b.dataset.tg.split(',');const all=ids.every(k=>UT.sel.has(k));ids.forEach(k=>all?UT.sel.delete(k):UT.sel.add(k));app.querySelectorAll('[data-tp]').forEach(x=>x.classList.toggle('on',UT.sel.has(x.dataset.tp)));return tprepInfo()}
  if(b.dataset.plv){S.lvl=b.dataset.plv;app.querySelectorAll('[data-plv]').forEach(x=>x.classList.toggle('on',x.dataset.plv===S.lvl));return tprepInfo()}
  if(b.dataset.ptot){UT.total=b.dataset.ptot;app.querySelectorAll('[data-ptot]').forEach(x=>x.classList.toggle('on',x.dataset.ptot===UT.total));document.getElementById('tpCw').hidden=UT.total!=='custom';return tprepInfo()}
  if(b.dataset.ptimer){UT.timer=!UT.timer;b.classList.toggle('on',UT.timer);return}
  if(b.dataset.pfb){UT.fb=!UT.fb;b.classList.toggle('on',UT.fb);return}
  if(b.id==='tpGo'&&UT.sel.size)return startDigital();
  if(b.id==='tpSheet'&&UT.sel.size){UT.secs=buildUnitItems();return renderUnitSheet()}};
 const ci=document.getElementById('tpCust');if(ci)ci.oninput=()=>{UT.custom=ci.value;tprepInfo()};
 window.scrollTo({top:0});
}

/* --- Test am Bildschirm --- */
function startDigital(){
 const secs=buildUnitItems();
 items=[];secs.forEach(sc=>sc.its.forEach(it=>{it.tid=sc.t.id;it.tname=sc.name;it.tic=sc.ic;items.push(it)}));
 UT.tsecs=secs.map(sc=>({id:sc.t.id,name:sc.name,ic:sc.ic}));
 UT.t0=Date.now();startTimer();
 testMode=true;infinite=false;idx=0;score=0;results=[];renderTask();
}
function renderTestResult(){
 screen='tresult';topic=null;setHeader();
 clearInterval(UT.clk);const secs=Math.round((Date.now()-(UT.t0||Date.now()))/1000);
 const total=results.reduce((a,r)=>a+ptsOf(r.it),0),pts=results.reduce((a,r)=>a+(r.ok?ptsOf(r.it):0),0);
 const per=UT.tsecs.map(sc=>{const rs=results.filter(r=>r.it.tid===sc.id),n=rs.reduce((a,r)=>a+ptsOf(r.it),0),ok=rs.reduce((a,r)=>a+(r.ok?ptsOf(r.it):0),0);return {...sc,n,ok,pct:n?Math.round(ok/n*100):0}});
 if(!UT.free){const hist=tHist(),key=UT.s+'-'+UT.u;hist[key]=hist[key]||{};per.forEach(p=>{hist[key][p.id]=[p.pct,Date.now()]});tSave(hist);}
 const lvl=p=>p>=80?['hi',L('sitzt','solid')]:p>=60?['mid',L('fast','almost')]:['low',L('üben','practise')];
 const col=p=>p>=80?'var(--ok)':p>=60?'#d99a2b':'var(--bad)';
 const weak=per.filter(p=>p.pct<80).sort((a,b)=>a.pct-b.pct);
 const pct=total?Math.round(pts/total*100):0;
 app.innerHTML=`<div class="card"><div class="big"><span class="medal">${pct>=90?'🏆':pct>=70?'🎉':pct>=50?'👍':'💪'}</span>${pts} ${L('von','of')} ${total} ${L('Punkten','points')}<small>${pct} %${UT.timer?' · '+Math.floor(secs/60)+' min '+secs%60+' s':''}</small></div></div>
 <div class="card"><h2>${L('Wo stehst du?','Where do you stand?')}</h2>${per.map(p=>{const l=lvl(p.pct);return `<div class="tr-row"><div><b>${p.ic} ${esc(p.name)}</b> <span class="muted">${p.ok} ${L('von','of')} ${p.n} ${L('P.','pts')}</span></div><span class="tr-st ${l[0]}">${l[1]} · ${p.pct} %</span><div class="tr-bar"><i style="width:${p.pct}%;background:${col(p.pct)}"></i></div></div>`}).join('')}</div>
 <div class="card"><h2>${weak.length?L('Das solltest du üben','What to practise'):L('Stark!','Great!')}</h2>${weak.length?`<p class="muted" style="margin:0 0 6px">${L('Fang oben an, dort hast du am meisten verpasst.','Start at the top, that is where you lost most points.')}</p>`+weak.map(p=>`<div class="tr-todo"><b style="align-self:center">${p.ic} ${esc(p.name)}</b><button data-trt="${p.id}">📘 ${L('Theorie','Theory')}</button><button data-trp="${p.id}">✏️ ${L('Üben','Practise')}</button></div>`).join(''):`<p>${L('Alle Themen sitzen. Du kannst ein höheres Niveau probieren.','All topics are solid. Try a higher level.')}</p>`}</div>
 ${results.some(r=>!r.ok)?`<div class="card"><h2>${L('Deine Fehler','Your mistakes')}</h2>${per.map(p=>{const bad=results.filter(r=>!r.ok&&r.it.tid===p.id);return bad.length?`<details><summary><b>${p.ic} ${esc(p.name)}</b> (${bad.length})</summary>${bad.map(r=>`<div class="tr-err">${r.it.src?'<div>'+r.it.src+'</div>':''}${r.it.before!==undefined?'<div>'+esc(r.it.before)+' ___ '+esc(r.it.after)+'</div>':r.it.stem?'<div>'+esc(r.it.stem)+'</div>':''}<div><span class="a">${L('Deine Antwort:','Your answer:')} ${esc(r.val||'–')}</span></div><div class="c">${L('Richtig:','Correct:')} ${esc(r.it.sol)}</div><div class="muted">${r.it.why||''}</div></div>`).join('')}</details>`:''}).join('')}</div>`:''}
 ${results.some(r=>!r.ok)?`<button class="primary" id="trWrong">🔁 ${L('Nur die falschen nochmals üben','Practise only the wrong ones')} (${results.filter(r=>!r.ok).length})</button>`:''}
 ${weak.length?`<button class="secondary" style="margin-top:10px" id="trWeak">🎯 ${L('Neuer Test nur mit den schwachen Themen','New test with the weak topics only')}</button>`:''}
 <button class="secondary" id="trAgain" style="margin-top:10px">${L('Neuer Test (gleiche Auswahl)','New test (same setup)')}</button>
 <button class="secondary" id="trBack" style="margin-top:10px">${UT.free?L('‹ Zur Testvorbereitung','‹ Back to test preparation'):L('‹ Zurück zur Unit','‹ Back to the unit')}</button>`;
 app.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.dataset.trt||b.dataset.trp){const id=b.dataset.trt||b.dataset.trp;testMode=false;topic=TOPICS.find(t=>t.id===id);return b.dataset.trt?renderTheory():renderPractice()}
  if(b.id==='trWrong'){items=results.filter(r=>!r.ok).map(r=>r.it);UT.t0=Date.now();startTimer();testMode=true;infinite=false;idx=0;score=0;results=[];return renderTask()}
  if(b.id==='trWeak'){const keep=new Set(weak.map(p=>p.id));if(UT.free){UT.sel=keep}else utTopics().forEach(t=>{UT.off[t.id]=!keep.has(t.id)});return startDigital()}
  if(b.id==='trAgain')return startDigital();
  if(b.id==='trBack'){testMode=false;return utBack()}};
 window.scrollTo({top:0});
}
