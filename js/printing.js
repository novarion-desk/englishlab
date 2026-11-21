/* ===== Drucken: Theorie (A4) und Unit-Test (nur Grammatik) ===== */
const UT={s:2,u:1,per:5,off:{},key:''};
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
 const x=unitOf(s,u),ts=utTopics();
 app.innerHTML=`<button class="btn-link" id="utBack">${L('‹ Zurück','‹ Back')}</button>
 <div class="hero"><h1>📝 ${L('Unit-Test','Unit test')}: ${stageName(s)} · ${unitName(x)}</h1><p>${L('Ein Arbeitsblatt mit Aufgaben zu den Grammatikthemen dieser Unit, dazu das Lösungsblatt. Ohne Vokabeln.','A worksheet with tasks on the grammar topics of this unit, plus an answer sheet. No vocabulary.')}</p></div>
 <div class="card"><h2>1 · ${L('Themen','Topics')}</h2><div class="chips">${ts.map(t=>`<button class="chip ${UT.off[t.id]?'':'on'}" data-ut="${t.id}">${t.ic} ${esc(t.name())}</button>`).join('')}</div></div>
 <div class="card"><h2>2 · ${L('Niveau','Level')}</h2><div class="seg">${[['C',L('C (einfach)','C (easy)')],['B','B'],['A',L('A (anspruchsvoll)','A (demanding)')]].map(([k,l])=>`<button data-ulv="${k}" class="${S.lvl===k?'on':''}">${l}</button>`).join('')}</div></div>
 <div class="card"><h2>3 · ${L('Aufgaben pro Thema','Tasks per topic')}</h2><div class="seg">${[3,5,8,10].map(n=>`<button data-uper="${n}" class="${UT.per===n?'on':''}">${n}</button>`).join('')}</div></div>
 <button class="primary" id="utMake">${L('🖨 Arbeitsblatt erstellen','🖨 Create worksheet')}</button><p class="err" id="utErr"></p>`;
 app.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.id==='utBack')return renderHome();
  if(b.dataset.ut){UT.off[b.dataset.ut]=!UT.off[b.dataset.ut];return renderUnitTest(s,u)}
  if(b.dataset.ulv){S.lvl=b.dataset.ulv;return renderUnitTest(s,u)}
  if(b.dataset.uper){UT.per=+b.dataset.uper;return renderUnitTest(s,u)}
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
