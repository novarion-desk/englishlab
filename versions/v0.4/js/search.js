/* Suche, Wörterbuch, KI – EnglishLab */
/* KI: Schlüssel nur lokal im Browser der Lehrperson. Für Schüler später: AI_PROXY auf einen eigenen Server-Zwischenschritt setzen (dann ist kein Schlüssel im Browser nötig). */
const AI_PROXY='';
const AI={
 ep:()=>AI_PROXY||'https://api.anthropic.com/v1/messages',
 key:()=>{try{return localStorage.getItem('el-ai-key')||''}catch(e){return ''}},
 model:()=>{try{return localStorage.getItem('el-ai-model')||'claude-haiku-5-5'}catch(e){return 'claude-haiku-5-5'}},
 set:(k,m)=>{try{k?localStorage.setItem('el-ai-key',k):localStorage.removeItem('el-ai-key');if(m)localStorage.setItem('el-ai-model',m)}catch(e){}},
 available:()=>!!AI_PROXY||(teacher()&&!!AI.key()),
 async ask(q,ctx){
  const sys='You help secondary-school students (levels A2–B1) with English grammar and vocabulary. Answer briefly and clearly in '+(LANG==='de'?'German':'English')+', with short English examples. No long lists. Be accurate; say so if unsure.';
  const h={'content-type':'application/json','anthropic-version':'2023-06-01'};
  if(!AI_PROXY){h['x-api-key']=AI.key();h['anthropic-dangerous-direct-browser-access']='true'}
  const r=await fetch(AI.ep(),{method:'POST',headers:h,body:JSON.stringify({model:AI.model(),max_tokens:700,system:sys,messages:[{role:'user',content:(ctx?ctx+'\n\n':'')+q}]})});
  const j=await r.json().catch(()=>({}));
  if(!r.ok)throw new Error((j.error&&j.error.message)||('HTTP '+r.status));
  return (j.content||[]).map(c=>c.text||'').join('').trim();
 }
};
const plain=h=>String(h).replace(/<br\s*\/?>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\s+/g,' ').trim();
const fold=s=>String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ß/g,'ss');
function hl(txt,terms){let o=esc(txt);terms.forEach(t=>{if(!t)return;const re=new RegExp('('+esc(t).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig');o=o.replace(re,'<mark>$1</mark>')});return o}
/* Index (neu aufgebaut bei jeder Suche, wegen DE/EN und Lehrerstatus) */
function buildIndex(){
 const D=[];
 TOPICS.forEach(t=>{
  const name=t.name();
  D.push({t,kind:'topic',text:name+' '+t.desc(),title:name});
  try{
   const rl=t.rules?t.rules().map(r=>plain(r.join(' '))):(t.slides?t.slides().filter(s=>s.kind!=='try').map(s=>plain(s.t+' '+s.h)):[]);
   rl.forEach(x=>D.push({t,kind:'rule',text:x,title:name}));
  }catch(e){}
  if(teacher()&&t.slides){try{t.slides().forEach((s,i)=>D.push({t,kind:'slide',i,text:plain(s.t+' '+s.h),title:name+' · '+plain(s.t)}))}catch(e){}}
  const d=t.data||{};
  const fillIt=b=>plain(b.s.replace('___',b.ok[0]));
  if(d.bank)d.bank.forEach(b=>{if(b&&b.s)D.push({t,kind:'ex',text:fillIt(b),title:name})});
  if(d.err)d.err.forEach(e=>{const c=Array.isArray(e)?e[0]:(e.ok||'');if(c)D.push({t,kind:'ex',text:plain(c),title:name})});
  if(d.sc)d.sc.forEach(b=>{if(b&&b[0])D.push({t,kind:'ex',text:plain(b[0].replace('___',b[1])),title:name})});
 });
 return D;
}
function snippet(text,terms){
 const f=fold(text);let p=-1;for(const t of terms){const i=f.indexOf(t);if(i>=0){p=i;break}}
 if(p<0)p=0;const a=Math.max(0,p-45),b=Math.min(text.length,p+90);
 return (a>0?'… ':'')+text.slice(a,b)+(b<text.length?' …':'');
}
function runSearch(q){
 const terms=fold(q).split(/\s+/).filter(Boolean);
 if(!terms.length)return null;
 const ok=x=>terms.every(t=>fold(x).includes(t));
 const D=buildIndex();
 const res={topic:[],rule:[],slide:[],ex:[],gl:[]};
 D.forEach(d=>{if(ok(d.text)||(d.kind==='topic'&&ok(d.title))){const arr=res[d.kind];const dup=d.kind!=='topic'&&arr.some(a=>a.t===d.t&&a.text===d.text);if(!dup)arr.push(d)}});
 GLOSS.forEach(g=>{if(ok(g[0]+' '+g[1]+' '+g[2]))res.gl.push(g)});
 res.terms=terms;
 return res;
}
const sbox={tab:'search',q:'',ai:''};
function openSearch(keep){
 modalMode='search';
 if(!keep&&!modal.classList.contains('hidden')&&0)return;
 const tab=sbox.tab;
 modalBody.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><h2 style="margin:0">🔍 ${L('Suche & Wörterbuch','Search & dictionary')}</h2><button class="btn-link" id="mClose">✕</button></div>
 <div class="stabs"><button class="${tab==='search'?'primary':'secondary'}" data-st="search">${L('Suche','Search')}</button><button class="${tab==='dict'?'primary':'secondary'}" data-st="dict">${L('Wörterbuch','Dictionary')}</button></div>
 <form class="sr" id="sform"><input id="sq" type="search" autocomplete="off" placeholder="${tab==='search'?L('Thema, Regel oder Beispiel suchen …','Search a topic, rule or example …'):L('Wort oder Begriff (EN oder DE) …','Word or term (EN or DE) …')}" value="${esc(sbox.q)}"><button class="primary" style="width:auto;padding:0 18px">${L('Los','Go')}</button></form>
 <div id="sres"></div>`;
 modal.classList.remove('hidden');
 const inp=document.getElementById('sq');
 const go=()=>{sbox.q=inp.value;drawSearch()};
 document.getElementById('sform').onsubmit=e=>{e.preventDefault();go()};
 inp.oninput=go;
 modalBody.onclick=e=>{
  const b=e.target.closest('button,a');if(!b)return;
  if(b.dataset.st){sbox.tab=b.dataset.st;sbox.ai='';return openSearch(true)}
  if(b.dataset.go){const [id,w,i]=b.dataset.go.split(':');closeModal();topic=TOPICS.find(t=>t.id===id);if(w==='slide'){T.cur=+i;T.mode='slides';return openSlides()}if(w==='ex'&&hasEx(topic))return renderPractice();if(w==='rule'||w==='topic')return renderTheory();return renderSetup()}
  if(b.id==='aiAsk')return askAI();
  if(b.id==='aiSave'){AI.set(document.getElementById('aiKey').value.trim(),document.getElementById('aiModel').value.trim());return drawSearch()}
  if(b.id==='aiDel'){AI.set('');return drawSearch()}
 };
 drawSearch();
 if(!keep)setTimeout(()=>inp.focus(),50);
}
function aiPanel(){
 if(!teacher())return '';
 const has=!!AI.key();
 return `<div class="card" style="margin-top:14px;background:#faf8ff;border-color:#d9ccff"><b>🤖 ${L('KI (nur Lehrperson)','AI (teacher only)')}</b>
 ${has?`<p class="muted" style="margin:6px 0">${L('Schlüssel gespeichert (nur in diesem Browser).','Key saved (this browser only).')} <button class="btn-link" id="aiDel">${L('Entfernen','Remove')}</button></p>
 <button class="primary" id="aiAsk">🤖 ${L('Frag die KI zu','Ask AI about')}: «${esc(sbox.q||'…')}»</button><div id="aiOut" class="aibox" ${sbox.ai?'':'hidden'}>${sbox.ai}</div>`
 :`<p class="muted" style="margin:6px 0">${L('API-Schlüssel hinterlegen, dann beantwortet die KI Fragen im Hintergrund. Der Schlüssel bleibt nur in diesem Browser.','Store an API key and the AI answers questions in the background. The key stays in this browser only.')}</p>
 <input id="aiKey" type="password" placeholder="sk-ant-…" autocomplete="off" style="width:100%;font:inherit;padding:9px;border:2px solid #dde;border-radius:10px;margin-bottom:6px">
 <input id="aiModel" type="text" value="${esc(AI.model())}" style="width:100%;font:inherit;padding:9px;border:2px solid #dde;border-radius:10px;margin-bottom:8px" aria-label="Modell">
 <button class="secondary" id="aiSave">${L('Speichern','Save')}</button>`}</div>`;
}
async function askAI(){
 const out=document.getElementById('aiOut'),q=sbox.q.trim();
 if(!q)return;out.hidden=false;out.textContent=L('Die KI denkt nach …','The AI is thinking …');
 try{
  const a=await AI.ask(q,topic?('Topic: '+topic.name()):'');
  sbox.ai=esc(a).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');out.innerHTML=sbox.ai;
 }catch(e){out.textContent=L('Die KI konnte nicht antworten: ','The AI could not answer: ')+e.message}
}
function drawSearch(){
 const box=document.getElementById('sres'),q=sbox.q.trim();
 if(!box)return;
 let h='';
 if(sbox.tab==='dict'){
  const r=q?runSearch(q):null;
  const g=r?r.gl:[];
  if(q){
   h+=g.length?g.slice(0,40).map(x=>`<div class="gl"><div><b>${hl(x[0],r.terms)}</b><small>${x[2]?esc(x[2]):''}</small></div><div style="text-align:right">${hl(x[1],r.terms)}</div></div>`).join(''):`<p class="muted">${L('Nichts im Glossar gefunden.','Nothing found in the glossary.')}</p>`;
   const eq=encodeURIComponent(q);
   h+=`<p style="margin-top:12px">${L('Mehr Wörter:','More words:')} <a href="https://www.dict.cc/?s=${eq}" target="_blank" rel="noopener">dict.cc ↗</a> · <a href="https://www.linguee.de/deutsch-englisch/search?query=${eq}" target="_blank" rel="noopener">Linguee ↗</a></p>`;
  }else h+=`<p class="muted">${L('Grammatikbegriffe und häufige Wörter aus den Übungen. Tippe ein Wort (Englisch oder Deutsch).','Grammar terms and common words from the exercises. Type a word (English or German).')}</p>`+GLOSS.slice(0,12).map(x=>`<div class="gl"><div><b>${esc(x[0])}</b><small>${esc(x[2]||'')}</small></div><div style="text-align:right">${esc(x[1])}</div></div>`).join('');
 }else{
  if(!q)h=`<p class="muted">${L('Suche in Themen, Regeln und Beispielsätzen.','Search topics, rules and example sentences.')}${teacher()?L(' Als Lehrperson auch in den Folien.',' As a teacher also in the slides.'):''}</p>`;
  else{
   const r=runSearch(q);
   const sec=(title,arr,fn)=>arr.length?`<h4>${title} (${arr.length})</h4>`+arr.slice(0,8).map(fn).join(''):'';
   h+=sec(L('Themen','Topics'),r.topic,d=>`<button class="sit" data-go="${d.t.id}:topic">${d.t.ic} <b>${hl(d.title,r.terms)}</b><small>${esc(d.t.desc())}</small></button>`);
   h+=sec(L('Regeln','Rules'),r.rule,d=>`<button class="sit" data-go="${d.t.id}:rule">📘 <b>${esc(d.title)}</b><small>${hl(snippet(d.text,r.terms),r.terms)}</small></button>`);
   h+=sec(L('Beispielsätze','Example sentences'),r.ex,d=>`<button class="sit" data-go="${d.t.id}:ex">${hl(d.text,r.terms)}<small>${esc(d.title)}</small></button>`);
   if(teacher())h+=sec(L('Folien','Slides'),r.slide,d=>`<button class="sit" data-go="${d.t.id}:slide:${d.i}">🎬 <b>${esc(d.title)}</b><small>${hl(snippet(d.text,r.terms),r.terms)}</small></button>`);
   h+=sec(L('Glossar','Glossary'),r.gl,g=>`<div class="gl"><div><b>${hl(g[0],r.terms)}</b></div><div style="text-align:right">${hl(g[1],r.terms)}</div></div>`);
   if(!h)h=`<p class="muted">${L('Nichts gefunden.','Nothing found.')}</p>`;
  }
 }
 box.innerHTML=`<div class="sres">${h}</div>`+(AI.available()||teacher()?aiPanel():'');
}
document.getElementById('searchBtn').onclick=()=>openSearch();
