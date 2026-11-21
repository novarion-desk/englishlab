/* ===== Vokabeltrainer: Jahr 1/2 (NI2) und Jahr 3 (NI3), nach Units, mit Spaced Repetition (Leitner) ===== */
(()=>{
const KEY='el-voc',KS='el-vocset';
const DAY=86400000,INTV=[0,0,1,3,7,21];            // Fach 1..5 -> Tage bis zur nächsten Wiederholung
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const rnd=a=>a[Math.floor(Math.random()*a.length)];
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const canSpeak=()=>'speechSynthesis' in window&&typeof SpeechSynthesisUtterance!=='undefined';
let W=null,loading=false,P={},SET={y:2,sel:{},dir:'both',type:'mix',count:10,mode:'smart',les:[]};
try{P=JSON.parse(localStorage.getItem(KEY))||{}}catch(e){P={}}
try{Object.assign(SET,JSON.parse(localStorage.getItem(KS))||{})}catch(e){}
if(!SET.sel||typeof SET.sel!=='object')SET.sel={};
const saveP=()=>{try{localStorage.setItem(KEY,JSON.stringify(P))}catch(e){}};
const saveS=()=>{try{localStorage.setItem(KS,JSON.stringify(SET))}catch(e){}};

/* ---------- Daten ---------- */
const cleanEn=s=>s.replace(/\([^)]*$/,'').replace(/\s+/g,' ').trim();
function ensureVoc(cb){
 if(W)return cb();
 if(loading)return;loading=true;
 const s=document.createElement('script');s.src='js/vocabdata.js';
 s.onload=()=>{W=VOC_DATA.map((r,i)=>({id:r[0]+'.'+r[1]+'.'+i,y:r[0],u:r[1],l:r[2],en:cleanEn(r[3]),p:r[4],de:r[5],ex:r[6]}));
  // stabile IDs: Jahr.Unit.Wort.Wortart (damit Fortschritt auch bei Datenänderungen hält)
  W.forEach(w=>{w.id=w.y+'.'+w.u+'.'+w.en.toLowerCase()+'.'+w.p});loading=false;window.VOCW=W;cb()};
 s.onerror=()=>{loading=false;const b=document.getElementById('vocBody');if(b)b.innerHTML='<p class="muted">'+L('Die Vokabeln konnten nicht geladen werden.','The vocabulary could not be loaded.')+'</p>'};
 document.head.appendChild(s);
}
const unitName=u=>u?('Unit '+u):'Welcome';
const yearName=y=>y===2?L('Jahr 1/2','Year 1/2'):L('Jahr 3','Year 3');
const lessonName=l=>({C:'Culture',X:'Extra',R:'Review','':'–'}[l]||('Lesson '+l));

/* ---------- Antworten prüfen ---------- */
const normEn=s=>s.toLowerCase().replace(/[’‘]/g,"'").replace(/[.!?;:,"]+/g,' ').replace(/\s+/g,' ').trim();
const normDe=s=>s.toLowerCase().replace(/ß/g,'ss').replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/[.!?;:"]+/g,' ').replace(/\s+/g,' ').trim();
function optional(arr){
 return arr.flatMap(v=>{const m=v.match(/\(([^)]*)\)/);if(!m)return [v];
  const inner=m[1].trim();
  if(!inner||/^=/.test(inner)||/\s/.test(inner)||inner.length>6)return optional([v.replace(m[0],' ')]);
  return optional([v.replace(m[0],inner),v.replace(m[0],' ')]);});
}
function slashAlt(v){
 const toks=v.split(' ');let out=[''];
 toks.forEach(t=>{const alts=t.includes('/')&&!/^\W/.test(t)?t.split('/'):[t];out=out.flatMap(o=>alts.map(a=>(o?o+' ':'')+a))});
 return out;
}
function acceptEn(w){
 let set=new Set();
 optional([w.en]).forEach(v=>slashAlt(v.replace(/\s+/g,' ').trim()).forEach(x=>{const n=normEn(x);if(n)set.add(n)}));
 return [...set];
}
function acceptDe(w){
 let d=w.de.replace(/^hier( ugs\.)?:\s*/i,'').replace(/^—\s*/,'');
 let set=new Set();
 d.split(/\s*[;,]\s*|\s+\/\s+/).forEach(part=>{
  optional([part]).forEach(v=>slashAlt(v.replace(/\s+/g,' ').trim()).forEach(x=>{const n=normDe(x);if(n)set.add(n)}))});
 return [...set];
}
function lev(a,b){const m=a.length,n=b.length;if(!m)return n;if(!n)return m;let p=[...Array(n+1).keys()];for(let i=1;i<=m;i++){const c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c}return p[n]}
function judge(input,acc,norm,isEn,pos){
 let x=norm(input);if(!x)return 'empty';
 if(isEn&&pos==='v'&&x.startsWith('to '))x=x.slice(3);
 if(acc.includes(x))return 'ok';
 if(x.length>=5&&acc.some(a=>a.length>=5&&lev(x,a)<=1))return 'near';
 return 'bad';
}
const shownDe=w=>w.de.replace(/^hier( ugs\.)?:\s*/i,'').replace(/^—\s*/,'');
const shownEn=w=>optional([w.en]).filter(Boolean)[0]&&w.en;

/* ---------- Lückensatz ---------- */
function cloze(w){
 const t0=w.en.replace(/\([^)]*\)/g,' ').replace(/\s+/g,' ').trim();
 if(!t0||/[\s\/]/.test(t0))return null;               // nur Einzelwörter
 const t=t0.toLowerCase();if(t.length<3)return null;
 const stem=t.length>6?t.slice(0,t.length-2):t.length>4?t.slice(0,t.length-1):t;
 const re=new RegExp("(^|[^A-Za-z'])("+stem.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+"[a-z]*)(?![A-Za-z])",'i');
 const m=re.exec(w.ex);if(!m)return null;
 const start=m.index+m[1].length,ans=m[2];
 if(ans.length<3||ans.length>t.length+4)return null;
 return {pre:w.ex.slice(0,start),post:w.ex.slice(start+ans.length),ans};
}
const hi=w=>{const c=cloze(w);return c?esc(c.pre)+'<b>'+esc(c.ans)+'</b>'+esc(c.post):esc(w.ex)};

/* ---------- Fortschritt ---------- */
const dirsOf=()=>SET.dir==='both'?['e','d']:[SET.dir];
const stOf=(w,d)=>P[w.id+'|'+d];
function setSel(y){const all=[...new Set(W.filter(w=>w.y===y).map(w=>w.u))].sort((a,b)=>a-b);let s=SET.sel[y];if(!Array.isArray(s)||!s.length)s=all.slice();SET.sel[y]=s.filter(u=>all.includes(u));if(!SET.sel[y].length)SET.sel[y]=all;return {all,sel:SET.sel[y]}}
function poolWords(){const {sel}=setSel(SET.y);let p=W.filter(w=>w.y===SET.y&&sel.includes(w.u));if(sel.length===1&&SET.les.length){const f=p.filter(w=>SET.les.includes(w.l));if(f.length)p=f}return p}
function unitStats(y,u){
 const ws=W.filter(w=>w.y===y&&w.u===u),ds=dirsOf(),now=Date.now();let learned=0,due=0,started=0;
 ws.forEach(w=>{let all=true,any=false;ds.forEach(d=>{const s=stOf(w,d);if(s){any=true;if(s[1]<=now)due++;if(s[0]<4)all=false}else all=false});if(all)learned++;if(any)started++});
 return {n:ws.length,learned,due,fresh:ws.length-started};
}
function learnWord(w,d,ok){
 const k=w.id+'|'+d,s=P[k],now=Date.now();let b=s?s[0]:0;
 b=ok?Math.min(5,b+1):1;
 P[k]=[b,now+(ok?INTV[b]:0)*DAY];
 saveP();
}

/* ---------- Auswahl der Wörter für eine Runde ---------- */
let recent=new Set();
function pick(n,exclude){
 const ds=dirsOf(),now=Date.now(),pool=poolWords();let pairs=[];
 const dpick=()=>ds.length===1?ds[0]:rnd(ds);
 if(SET.mode==='all'){
  pairs=shuf(pool).map(w=>({w,d:dpick()}));
 }else if(SET.mode==='hard'){
  pool.forEach(w=>ds.forEach(d=>{const s=stOf(w,d);if(s&&s[0]<=2)pairs.push({w,d,b:s[0]})}));pairs.sort((a,b)=>a.b-b.b||Math.random()-.5);
 }else{
  const due=[],fresh=[],later=[];
  pool.forEach(w=>{const used=new Set();
   ds.forEach(d=>{const s=stOf(w,d);if(s){if(s[1]<=now)due.push({w,d,b:s[0],t:s[1]});else later.push({w,d,b:s[0],t:s[1]})}});
   if(!ds.some(d=>stOf(w,d)))fresh.push({w,d:dpick()});});
  due.sort((a,b)=>a.b-b.b||a.t-b.t);
  pairs=due.concat(fresh).concat(later.sort((a,b)=>a.t-b.t));
 }
 const seen=new Set(exclude||[]),out=[];
 for(const p of pairs){if(seen.has(p.w.id))continue;seen.add(p.w.id);out.push(p);if(out.length>=n)break}
 return out;
}

/* ---------- Aufgaben bauen ---------- */
function distract(w,d,k){
 const same=(W.filter(x=>x.y===w.y&&x.id!==w.id&&x.p===w.p)),any=W.filter(x=>x.y===w.y&&x.id!==w.id);
 const txt=x=>d==='e'?shownDe(x):x.en;let pool=shuf(same).concat(shuf(any)),out=[],seen=new Set([txt(w).toLowerCase()]);
 for(const x of pool){const t=txt(x);if(t.length>38)continue;if(seen.has(t.toLowerCase()))continue;seen.add(t.toLowerCase());out.push(t);if(out.length>=k)break}
 return out;
}
function makeTask(p){
 const {w,d}=p;let k=SET.type;
 const spk=canSpeak();
 if(k==='mix'){const o=d==='d'?['choice','type','cloze','choice','type']:['choice','choice','type'];if(d==='d'&&spk)o.push('listen');k=rnd(o)}
 if(k==='cloze'&&!cloze(w))k=d==='d'?'type':'choice';
 if(k==='listen'&&!spk)k='type';
 const t={k,w,d};
 if(k==='cloze'||k==='listen')t.d='d';
 if(k==='choice'){const ans=t.d==='e'?shownDe(w):w.en;t.opts=shuf([ans].concat(distract(w,t.d,3)));t.ans=ans}
 return t;
}
function buildMatch(ps){
 const left=ps.map(p=>p.w),right=shuf(ps.map(p=>p.w));
 return {k:'match',ws:ps.map(p=>p.w),left,right,miss:{},done:{},sel:null};
}

/* ---------- Zustand der Runde ---------- */
let S={q:[],i:0,ok:0,tot:0,wrong:[],retry:new Set(),inf:false,cnt:0,answered:false,t0:0};
function startRun(){
 recent=new Set();
 const inf=SET.count===0,n=inf?10:SET.count;
 let ps=pick(n);
 if(!ps.length){drawHome(L('Für diese Auswahl gibt es nichts zu üben.','Nothing to practise for this selection.'));return}
 S={q:[],i:0,ok:0,tot:0,wrong:[],retry:new Set(),inf,cnt:n,answered:false,t0:Date.now(),seen:new Set()};
 fill(ps);drawTask();
}
function fill(ps){
 if(SET.type==='match'){for(let i=0;i<ps.length;i+=5){const g=ps.slice(i,i+5);if(g.length>=2)S.q.push(buildMatch(g));else S.q.push(makeTask(Object.assign({},g[0],{d:'e'})))}}
 else ps.forEach(p=>S.q.push(makeTask(p)));
 ps.forEach(p=>S.seen.add(p.w.id));
}
function more(){
 const ps=pick(10,[...S.seen].slice(-Math.max(0,poolWords().length-10)));
 if(!ps.length){S.seen=new Set();return false}
 fill(ps);return true;
}

/* ---------- Oberfläche ---------- */
const root=()=>document.getElementById('voc');
const body=()=>document.getElementById('vocBody');
function speak(t){if(!canSpeak())return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='en-GB';u.rate=.9;speechSynthesis.speak(u)}catch(e){}}
function ring(p,txt){const r=15,c=2*Math.PI*r;return `<svg class="vring" viewBox="0 0 40 40" width="46" height="46"><circle cx="20" cy="20" r="${r}" fill="none" stroke="#e4e1d8" stroke-width="5"/><circle cx="20" cy="20" r="${r}" fill="none" stroke="var(--ok)" stroke-width="5" stroke-linecap="round" stroke-dasharray="${(c*p).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 20 20)"/><text x="20" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#1d2433">${txt}</text></svg>`}

function drawHome(msg){
 const {all,sel}=setSel(SET.y),pool=poolWords();
 const ds=dirsOf(),now=Date.now();
 let due=0,fresh=0;pool.forEach(w=>{let any=false;ds.forEach(d=>{const s=stOf(w,d);if(s){any=true;if(s[1]<=now)due++}});if(!any)fresh++});
 const tiles=all.map(u=>{const s=unitStats(SET.y,u),on=sel.includes(u),pr=s.n?s.learned/s.n:0;
  return `<button class="vtile ${on?'on':''}" data-vu="${u}">${ring(pr,Math.round(pr*100)+'%')}<span class="vtn"><b>${unitName(u)}</b><small>${s.n} ${L('Wörter','words')}${s.due?' · '+s.due+' '+L('fällig','due'):''}</small></span></button>`}).join('');
 const lessons=sel.length===1?[...new Set(W.filter(w=>w.y===SET.y&&w.u===sel[0]).map(w=>w.l))]:[];
 const lchips=lessons.length>1?`<div class="card"><h2>${L('Lesson','Lesson')} <small class="muted">(${L('optional','optional')})</small></h2><div class="chips">${lessons.map(l=>`<button class="chip ${SET.les.includes(l)?'on':''}" data-vl="${l}">${lessonName(l)}</button>`).join('')}</div></div>`:'';
 const types=[['mix',L('🎲 Mix','🎲 Mix')],['cards',L('🃏 Karteikarten','🃏 Flashcards')],['choice',L('✔️ Auswählen','✔️ Choose')],['type',L('⌨️ Eintippen','⌨️ Type it')],['cloze',L('📝 Lückensatz','📝 Gap sentence')],['listen',L('🔊 Hören','🔊 Listen')],['match',L('🧩 Paare','🧩 Pairs')]].filter(t=>t[0]!=='listen'||canSpeak());
 const c=SET.count,custom=[5,10,20,0].includes(c)?'':c;
 body().innerHTML=`
 ${msg?`<div class="vmsg">${msg}</div>`:''}
 <div class="vrow"><div class="seg viewseg">${[2,3].map(y=>`<button data-vy="${y}" class="${SET.y===y?'on':''}">${yearName(y)}</button>`).join('')}</div></div>
 <div class="card"><h2>1 · ${L('Units wählen','Choose units')} ${sel.length===all.length?'':`<button class="vlink" data-vall="1">${L('alle auswählen','select all')}</button>`}</h2><div class="vtiles">${tiles}</div>
  <p class="muted" style="margin:10px 0 0">${pool.length} ${L('Wörter','words')} · ${due} ${L('fällig','due')} · ${fresh} ${L('neu','new')}</p></div>
 ${lchips}
 <div class="card"><h2>2 · ${L('Richtung','Direction')}</h2><div class="seg">${[['e','EN → DE'],['d','DE → EN'],['both',L('beides','both')]].map(([k,l])=>`<button data-vd="${k}" class="${SET.dir===k?'on':''}">${l}</button>`).join('')}</div></div>
 <div class="card"><h2>3 · ${L('Übungsart','Exercise type')}</h2><div class="chips">${types.map(([k,l])=>`<button class="chip ${SET.type===k?'on':''}" data-vt="${k}">${l}</button>`).join('')}</div></div>
 <div class="card"><h2>4 · ${L('Welche Wörter?','Which words?')}</h2><div class="seg">${[['smart',L('Lernen + Wiederholen','Learn + review')],['hard',L('Schwierige','Difficult')],['all',L('Alle (Zufall)','All (random)')]].map(([k,l])=>`<button data-vm="${k}" class="${SET.mode===k?'on':''}">${l}</button>`).join('')}</div>
  <p class="muted" style="margin:8px 0 0;font-size:.85em">${SET.mode==='smart'?L('Zuerst fällige Wörter, dann neue.','Due words first, then new ones.'):SET.mode==='hard'?L('Nur Wörter, die noch nicht sitzen (Fach 1–2).','Only words you still struggle with (box 1–2).'):L('Alle Wörter der Auswahl, gemischt.','All selected words, shuffled.')}</p></div>
 <div class="card"><h2>5 · ${L('Anzahl','Number')}</h2><div class="seg">${[5,10,20,0].map(n=>`<button data-vn="${n}" class="${SET.count===n?'on':''}">${n||'∞'}</button>`).join('')}</div>
  <label class="cntown">${L('oder eigene Zahl:','or your own number:')} <input id="vcnt" type="number" inputmode="numeric" min="1" max="200" placeholder="z. B. 12" value="${custom}"></label></div>
 <button class="primary" id="vgo">${L("Los geht's →","Let's go →")}</button>
 <button class="vsecond" id="vprintBtn">🖨 ${L('Drucken: Wortliste, Test, Karteikarten','Print: word list, test, flashcards')}</button>
 <p class="muted" style="text-align:center;margin-top:14px"><button class="vlink" id="vreset">${L('Fortschritt dieser Auswahl zurücksetzen','Reset progress for this selection')}</button></p>`;
}

function topbar(){
 const l=S.inf?`✔ ${S.ok}/${S.tot}`:`${Math.min(S.i+1,S.q.length)} / ${S.q.length}`;
 const pct=S.inf?0:Math.round(S.i/S.q.length*100);
 return `<div class="vtop"><button class="vlink" id="vend">✕ ${S.inf?L('Beenden','Finish'):L('Abbrechen','Cancel')}</button><span class="vcount">${l}</span></div><div class="vbar"><i style="width:${pct}%"></i></div>`;
}
const posTag=w=>w.p?`<span class="vpos">${esc(w.p)}</span>`:'';
const spkBtn=t=>canSpeak()?`<button class="vspk" data-vspk="${esc(t)}" aria-label="Vorlesen">🔊</button>`:'';

function drawTask(){
 if(S.i>=S.q.length){if(S.inf&&more()){}else return drawEnd()}
 const t=S.q[S.i];S.answered=false;
 let h=topbar();
 if(t.k==='cards'||SET.type==='cards'&&t.k!=='match'){t.k='cards';
  const front=t.d==='e'?`<div class="vword">${esc(t.w.en)} ${posTag(t.w)} ${spkBtn(t.w.en)}</div>`:`<div class="vword">${esc(shownDe(t.w))}</div>`;
  h+=`<div class="card vq"><p class="muted vq0">${L('Weisst du es?','Do you know it?')}</p>${front}<div id="vback" class="vhide"></div><div id="vact"><button class="primary" id="vflip">${L('Umdrehen','Flip')}</button></div></div>`;
 }else if(t.k==='choice'){
  const q=t.d==='e'?`<div class="vword">${esc(t.w.en)} ${posTag(t.w)} ${spkBtn(t.w.en)}</div>`:`<div class="vword">${esc(shownDe(t.w))}</div>`;
  h+=`<div class="card vq"><p class="muted vq0">${t.d==='e'?L('Was heisst das auf Deutsch?','What is this in German?'):L('Wie heisst das auf Englisch?','What is this in English?')}</p>${q}<div class="vopts">${t.opts.map((o,i)=>`<button class="vopt" data-vo="${i}">${esc(o)}</button>`).join('')}</div><div id="vfb"></div></div>`;
 }else if(t.k==='type'){
  const q=t.d==='e'?`<div class="vword">${esc(t.w.en)} ${posTag(t.w)} ${spkBtn(t.w.en)}</div>`:`<div class="vword">${esc(shownDe(t.w))}</div>`;
  h+=`<div class="card vq"><p class="muted vq0">${t.d==='e'?L('Tippe die deutsche Übersetzung.','Type the German translation.'):L('Tippe das englische Wort.','Type the English word.')}</p>${q}<input id="vin" class="vin" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="…"><div id="vact"><button class="primary" id="vchk">${L('Prüfen','Check')}</button></div><div id="vfb"></div></div>`;
 }else if(t.k==='cloze'){
  const c=cloze(t.w);
  h+=`<div class="card vq"><p class="muted vq0">${L('Welches Wort fehlt?','Which word is missing?')}</p><div class="vsent">${esc(c.pre)}<span class="vgap">${'_'.repeat(Math.max(4,c.ans.length))}</span>${esc(c.post)}</div><p class="muted">${esc(shownDe(t.w))} ${posTag(t.w)} · ${L('Anfangsbuchstabe','starts with')}: <b>${esc(c.ans[0])}</b></p><input id="vin" class="vin" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="…"><div id="vact"><button class="primary" id="vchk">${L('Prüfen','Check')}</button></div><div id="vfb"></div></div>`;
 }else if(t.k==='listen'){
  h+=`<div class="card vq"><p class="muted vq0">${L('Hör zu und schreibe das Wort.','Listen and write the word.')}</p><div class="vword"><button class="vspk big" data-vspk="${esc(t.w.en)}" aria-label="Vorlesen">🔊</button></div><p class="muted">${esc(shownDe(t.w))}</p><input id="vin" class="vin" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="…"><div id="vact"><button class="primary" id="vchk">${L('Prüfen','Check')}</button></div><div id="vfb"></div></div>`;
 }else if(t.k==='match'){
  h+=`<div class="card vq"><p class="muted vq0">${L('Tippe zuerst ein englisches Wort, dann die passende Übersetzung.','Tap an English word, then its translation.')}</p><div class="vmatch"><div>${t.left.map(w=>`<button class="vm" data-vml="${esc(w.id)}">${esc(w.en)}</button>`).join('')}</div><div>${t.right.map(w=>`<button class="vm" data-vmr="${esc(w.id)}">${esc(shownDe(w))}</button>`).join('')}</div></div><div id="vfb"></div></div>`;
 }
 body().innerHTML=h;
 if(t.k==='listen')setTimeout(()=>speak(t.w.en),250);
 root().scrollTop=0;
}

function feedback(t,res,extra){
 const w=t.w,fb=document.getElementById('vfb')||document.getElementById('vback');
 const cls=res==='ok'?'ok':res==='near'?'near':'bad';
 const head=res==='ok'?L('Richtig!','Correct!'):res==='near'?L('Fast richtig, achte auf die Schreibweise:','Almost, watch the spelling:'):L('Nicht ganz.','Not quite.');
 const ans=t.k==='cloze'?cloze(w).ans:t.d==='e'?shownDe(w):w.en;
 return `<div class="vfb ${cls}"><b>${head}</b> ${res==='ok'?'':`<div class="vans">${esc(ans)}</div>`}<div class="vex"><span class="muted">${esc(w.en)} ${posTag(w)} = ${esc(shownDe(w))}</span> ${spkBtn(w.en)}<br>${hi(w)}</div></div><button class="primary" id="vnext">${L('Weiter →','Next →')}</button>`;
}
function record(t,ok,key){
 S.tot++;
 const first=!S.retry.has(t.w.id);
 if(ok){if(first)S.ok++;}
 else{S.wrong.push(t.w);if(first){S.retry.add(t.w.id);const at=Math.min(S.q.length,S.i+4);S.q.splice(at,0,Object.assign({},t,{retry:true}))}}
 if(first)learnWord(t.w,t.k==='cloze'||t.k==='listen'?'d':t.d,ok);
 S.answered=true;
}
function answerChoice(i){
 if(S.answered)return;const t=S.q[S.i],ok=t.opts[i]===t.ans;
 document.querySelectorAll('.vopt').forEach((b,j)=>{b.disabled=true;if(t.opts[j]===t.ans)b.classList.add('ok');else if(j===i)b.classList.add('bad')});
 record(t,ok);document.getElementById('vfb').innerHTML=feedback(t,ok?'ok':'bad');
}
function answerType(){
 if(S.answered)return;const t=S.q[S.i],inp=document.getElementById('vin');if(!inp)return;
 let res;
 if(t.k==='cloze'){const c=cloze(t.w);res=judge(inp.value,[normEn(c.ans)],normEn,true,'')}
 else if(t.d==='e')res=judge(inp.value,acceptDe(t.w),normDe,false,'');
 else res=judge(inp.value,acceptEn(t.w),normEn,true,t.w.p);
 if(res==='empty'){inp.focus();return}
 inp.disabled=true;
 const ok=res==='ok'||res==='near';
 record(t,ok);
 document.getElementById('vact').innerHTML='';
 document.getElementById('vfb').innerHTML=feedback(t,res);
 inp.classList.add(ok?'ok':'bad');
}
function flip(){
 const t=S.q[S.i],bk=document.getElementById('vback');
 bk.classList.remove('vhide');
 bk.innerHTML=`<div class="vans">${t.d==='e'?esc(shownDe(t.w)):esc(t.w.en)+' '+posTag(t.w)+' '+spkBtn(t.w.en)}</div><div class="vex">${hi(t.w)}</div>`;
 document.getElementById('vact').innerHTML=`<div class="vgrid2"><button class="vno" id="vcno">❌ ${L('Nochmal','Again')}</button><button class="vyes" id="vcyes">✅ ${L('Gewusst','Knew it')}</button></div>`;
}
function answerCard(ok){
 if(S.answered)return;const t=S.q[S.i];
 if(t.retry){S.answered=true}else{S.tot++;if(ok)S.ok++;else{S.wrong.push(t.w);S.retry.add(t.w.id);S.q.splice(Math.min(S.q.length,S.i+4),0,Object.assign({},t,{retry:true}))}learnWord(t.w,t.d,ok);S.answered=true}
 next();
}
let pend=null;
function answerMatch(side,id){
 const t=S.q[S.i];if(S.answered)return;
 const sel=`[data-vm${side==='l'?'l':'r'}="${CSS.escape(id)}"]`;
 if(side==='l'){document.querySelectorAll('[data-vml]').forEach(b=>b.classList.remove('sel'));if(t.done[id])return;pend=id;document.querySelector(sel).classList.add('sel');return}
 if(!pend||t.done[id])return;
 const lb=document.querySelector(`[data-vml="${CSS.escape(pend)}"]`),rb=document.querySelector(sel);
 if(pend===id){t.done[id]=1;lb.classList.remove('sel');lb.classList.add('ok');rb.classList.add('ok');lb.disabled=rb.disabled=true;pend=null;
  if(Object.keys(t.done).length===t.ws.length){
   S.answered=true;
   t.ws.forEach(w=>{const ok=!t.miss[w.id];S.tot++;if(ok)S.ok++;else S.wrong.push(w);learnWord(w,'e',ok)});
   document.getElementById('vfb').innerHTML=`<div class="vfb ok"><b>${L('Alle Paare gefunden!','All pairs found!')}</b></div><button class="primary" id="vnext">${L('Weiter →','Next →')}</button>`}
 }else{t.miss[pend]=1;rb.classList.add('bad');setTimeout(()=>rb.classList.remove('bad'),500);lb.classList.remove('sel');pend=null}
}
function next(){S.i++;drawTask()}

function drawEnd(){
 const n=S.tot||1,pct=Math.round(S.ok/n*100),secs=Math.round((Date.now()-S.t0)/1000);
 const uw=[...new Map(S.wrong.map(w=>[w.id,w])).values()];
 body().innerHTML=`<div class="card vend"><div class="vbig">${pct>=80?'🎉':pct>=50?'👍':'💪'}</div><h2 style="text-align:center">${S.ok} / ${S.tot} ${L('auf Anhieb richtig','right first time')}</h2><p class="muted" style="text-align:center">${pct}% · ${Math.floor(secs/60)}:${String(secs%60).padStart(2,'0')} min</p>
 ${uw.length?`<h3>${L('Das üben wir nochmal','To practise again')}</h3><ul class="vwl">${uw.map(w=>`<li><b>${esc(w.en)}</b> ${posTag(w)} – ${esc(shownDe(w))}</li>`).join('')}</ul>`:`<p style="text-align:center">${L('Alles richtig. Stark!','All correct. Great!')}</p>`}
 </div><button class="primary" id="vagain">${L('Nochmal','Again')}</button>${uw.length?`<button class="vsecond" id="vwrong">${L('Nur die Fehler üben','Practise mistakes only')}</button>`:''}<button class="vsecond" id="vhome">${L('Zur Übersicht','Back to overview')}</button>`;
 S.mist=uw;root().scrollTop=0;
}

/* ---------- Öffnen / Schliessen ---------- */
function ensureRoot(){
 if(root())return;
 const d=document.createElement('div');d.id='voc';d.className='voc hidden';
 d.innerHTML=`<div class="vocin"><div class="vhead"><b>🃏 ${L('Vokabeln','Vocabulary')}</b><button class="vlink vx" id="vclose" aria-label="Schliessen">✕</button></div><div id="vocBody"><p class="muted">${L('Wird geladen …','Loading …')}</p></div></div>`;
 document.body.appendChild(d);
 d.addEventListener('click',onClick);
 d.addEventListener('input',e=>{if(e.target.id==='vcnt'){const v=parseInt(e.target.value,10);if(v>=1){SET.count=Math.min(200,v);saveS();d.querySelectorAll('[data-vn]').forEach(x=>x.classList.toggle('on',+x.dataset.vn===SET.count))}}});
 d.addEventListener('keydown',e=>{if(e.key==='Enter'){const n=document.getElementById('vnext'),c=document.getElementById('vchk');if(n){e.preventDefault();n.click()}else if(c&&!S.answered){e.preventDefault();answerType()}}});
}

/* ---------- Drucken ---------- */
const PR={kind:'list',dir:'e',n:20,seed:0};
const kindName=()=>({list:L('Wortliste','Word list'),test:L('Vokabeltest','Vocabulary test'),cards:L('Karteikarten','Flashcards')}[PR.kind]);
function selTitle(){const {all,sel}=setSel(SET.y);const u=sel.length===all.length?L('alle Units','all units'):sel.map(unitName).join(', ');return yearName(SET.y)+' · '+u}
function drawPrintSetup(){
 const pool=poolWords();
 body().innerHTML=`<button class="vlink" id="vprBack">${L('‹ Zurück','‹ Back')}</button>
 <div class="card"><h2>${L('Auswahl','Selection')}</h2><p style="margin:0">${esc(selTitle())} · <b>${pool.length}</b> ${L('Wörter','words')}<br><small class="muted">${L('Die Auswahl (Jahr, Units, Lesson) stellst du auf der Übersicht ein.','Set year, units and lesson on the overview.')}</small></p></div>
 <div class="card"><h2>${L('Was drucken?','What to print?')}</h2><div class="chips">${[['list',L('📄 Wortliste','📄 Word list')],['test',L('📝 Test mit Lösung','📝 Test with answers')],['cards',L('✂️ Karteikarten','✂️ Flashcards')]].map(([k,l])=>`<button class="chip ${PR.kind===k?'on':''}" data-pk="${k}">${l}</button>`).join('')}</div>
 <p class="muted" style="margin:8px 0 0;font-size:.85em">${PR.kind==='list'?L('Englisch, Deutsch und Beispielsatz, nach Unit und Lesson.','English, German and example, by unit and lesson.'):PR.kind==='test'?L('Zufällige Wörter, Lösungsblatt auf eigener Seite.','Random words, answer sheet on its own page.'):L('Zum Ausschneiden und Falten: Englisch links, Deutsch rechts.','To cut out and fold: English left, German right.')}</p></div>
 ${PR.kind==='test'?`<div class="card"><h2>${L('Richtung','Direction')}</h2><div class="seg">${[['e','EN → DE'],['d','DE → EN']].map(([k,l])=>`<button data-pd="${k}" class="${PR.dir===k?'on':''}">${l}</button>`).join('')}</div></div>
 <div class="card"><h2>${L('Anzahl Wörter','Number of words')}</h2><div class="seg">${[10,20,30,40].map(n=>`<button data-pn="${n}" class="${PR.n===n?'on':''}">${n}</button>`).join('')}</div></div>`:''}
 <button class="primary" id="vprGo">${L('Vorschau →','Preview →')}</button>`;
}
function prSheet(){
 const pool=poolWords();let h='';const title=esc(selTitle());
 const pos=w=>w.p?` <span class="pp">${esc(w.p)}</span>`:'';
 if(PR.kind==='list'){
  let cu=null,cl=null,rows='';
  const flush=()=>{if(rows){h+=`<table class="vt"><thead><tr><th>English</th><th>Deutsch</th><th>${L('Beispiel','Example')}</th></tr></thead><tbody>${rows}</tbody></table>`;rows=''}};
  pool.forEach(w=>{if(w.u!==cu){flush();cu=w.u;cl=null;h+=`<h2 class="tsec">${yearName(w.y)} · ${unitName(w.u)}</h2>`}
   if(w.l!==cl){flush();cl=w.l;h+=`<h3 class="vls">${lessonName(w.l)}</h3>`}
   rows+=`<tr><td><b>${esc(w.en)}</b>${pos(w)}</td><td>${esc(shownDe(w))}</td><td class="ex">${esc(w.ex)}</td></tr>`});
  flush();
  return `<div class="sheet vsheet"><h1>EnglishLab – ${L('Wortliste','Word list')}</h1><p class="sub">${title} · ${pool.length} ${L('Wörter','words')}</p>${h}</div>`;
 }
 if(PR.kind==='cards'){
  h=pool.map(w=>`<div class="vcard"><div class="vcf"><b>${esc(w.en)}</b>${pos(w)}</div><div class="vcb">${esc(shownDe(w))}<small>${esc(w.ex)}</small></div></div>`).join('');
  return `<div class="sheet vsheet"><h1>EnglishLab – ${L('Karteikarten','Flashcards')}</h1><p class="sub">${title} · ${L('ausschneiden, in der Mitte falten','cut out, fold in the middle')}</p><div class="vcards">${h}</div></div>`;
 }
 const n=Math.min(PR.n,pool.length),ws=shuf(pool).slice(0,n);
 PR.ws=PR.ws&&PR.seed===PR.lastSeed?PR.ws:ws;PR.lastSeed=PR.seed;const T=PR.ws.slice(0,n);
 const q=w=>PR.dir==='e'?`<b>${esc(w.en)}</b>${pos(w)}`:esc(shownDe(w));
 const a=w=>PR.dir==='e'?esc(shownDe(w)):`<b>${esc(w.en)}</b>`;
 return `<div class="sheet vsheet"><h1>EnglishLab – ${L('Vokabeltest','Vocabulary test')}</h1><p class="sub">${title} · ${PR.dir==='e'?'EN → DE':'DE → EN'}</p>
 <div class="meta"><span>${L('Name:','Name:')}</span><span>${L('Datum:','Date:')}</span><span class="pts">${L('Punkte:','Points:')} &nbsp;&nbsp;&nbsp;/ ${T.length}</span></div>
 <table class="vt vtest"><tbody>${T.map((w,i)=>`<tr><td class="no">${i+1}.</td><td class="q">${q(w)}</td><td class="bl"></td></tr>`).join('')}</tbody></table></div>
 <div class="sheet vsheet sol"><h1>${L('Lösungen','Answers')}</h1><p class="sub">${title}</p><table class="vt"><tbody>${T.map((w,i)=>`<tr><td class="no">${i+1}.</td><td>${q(w)}</td><td>${a(w)}</td></tr>`).join('')}</tbody></table></div>`;
}
function showPrint(){
 closeVprint();
 const d=document.createElement('div');d.id='vpr';d.className='vpr';
 d.innerHTML=`<div class="vprbar sheetbar"><button class="btn-link" id="vpBack">${L('‹ Zurück','‹ Back')}</button>${PR.kind==='test'?`<button class="secondary" id="vpMix">${L('🔀 Neu mischen','🔀 Shuffle again')}</button>`:''}<button class="primary" id="vpPrint">${L('🖨 Drucken / PDF','🖨 Print / PDF')}</button></div>${prSheet()}`;
 document.body.appendChild(d);document.body.classList.add('vpr-open');
 d.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
  if(b.id==='vpBack')return closeVprint();
  if(b.id==='vpMix'){PR.seed++;return showPrint()}
  if(b.id==='vpPrint')return window.print()});
 d.scrollTop=0;
}
function closeVprint(){const d=document.getElementById('vpr');if(d)d.remove();document.body.classList.remove('vpr-open')}
window.closeVprint=closeVprint;

let isOpen=false;
function openVoc(){
 ensureRoot();root().classList.remove('hidden');document.body.classList.add('voc-open');
 isOpen=true;
 ensureVoc(()=>drawHome());
}
function closeVoc(fromPop){
 closeVprint();
 if(!isOpen)return;isOpen=false;root().classList.add('hidden');document.body.classList.remove('voc-open');
 try{speechSynthesis.cancel()}catch(e){}
 if(typeof screen!=='undefined'&&screen==='home'&&typeof renderHome==='function'){try{renderHome()}catch(e){}}
}
window.openVoc=openVoc;window.closeVoc=closeVoc;

function onClick(e){
 const b=e.target.closest('button');if(!b)return;
 const dset=b.dataset;
 if(b.id==='vclose')return closeVoc();
 if(b.id==='vend')return S.inf&&S.tot?drawEnd():drawHome();
 if(dset.vspk!==undefined)return speak(dset.vspk);
 if(dset.vy){SET.y=+dset.vy;saveS();return drawHome()}
 if(dset.vu!==undefined){const {all,sel}=setSel(SET.y),u=+dset.vu;let n;
  if(sel.length===all.length&&all.length>2)n=[u];else n=sel.includes(u)?sel.filter(x=>x!==u):sel.concat(u);
  if(!n.length)n=all.slice();SET.sel[SET.y]=n.sort((a,b)=>a-b);SET.les=[];saveS();return drawHome()}
 if(dset.vall){const {all}=setSel(SET.y);SET.sel[SET.y]=all.slice();SET.les=[];saveS();return drawHome()}
 if(dset.vl!==undefined){const l=dset.vl;SET.les=SET.les.includes(l)?SET.les.filter(x=>x!==l):SET.les.concat(l);saveS();return drawHome()}
 if(dset.vd){SET.dir=dset.vd;saveS();return drawHome()}
 if(dset.vt){SET.type=dset.vt;saveS();return drawHome()}
 if(dset.vm){SET.mode=dset.vm;saveS();return drawHome()}
 if(dset.vn!==undefined){SET.count=+dset.vn;saveS();return drawHome()}
 if(b.id==='vgo'){saveS();return startRun()}
 if(b.id==='vprintBtn')return drawPrintSetup();
 if(b.id==='vprBack')return drawHome();
 if(dset.pk){PR.kind=dset.pk;return drawPrintSetup()}
 if(dset.pd){PR.dir=dset.pd;PR.seed++;return drawPrintSetup()}
 if(dset.pn){PR.n=+dset.pn;PR.seed++;return drawPrintSetup()}
 if(b.id==='vprGo'){PR.seed++;return showPrint()}
 if(b.id==='vreset'){if(confirm(L('Den Lernfortschritt für die gewählten Units zurücksetzen?','Reset progress for the selected units?'))){const ids=new Set(poolWords().map(w=>w.id));Object.keys(P).forEach(k=>{if(ids.has(k.split('|')[0]))delete P[k]});saveP();drawHome()}return}
 if(dset.vo!==undefined)return answerChoice(+dset.vo);
 if(b.id==='vchk')return answerType();
 if(b.id==='vflip')return flip();
 if(b.id==='vcyes')return answerCard(true);
 if(b.id==='vcno')return answerCard(false);
 if(b.id==='vnext')return next();
 if(dset.vml!==undefined)return answerMatch('l',dset.vml);
 if(dset.vmr!==undefined)return answerMatch('r',dset.vmr);
 if(b.id==='vagain')return startRun();
 if(b.id==='vhome')return drawHome();
 if(b.id==='vwrong'){const ps=S.mist.map(w=>({w,d:SET.dir==='both'?rnd(['e','d']):SET.dir}));S={q:[],i:0,ok:0,tot:0,wrong:[],retry:new Set(),inf:false,cnt:ps.length,answered:false,t0:Date.now(),seen:new Set()};fill(ps);return drawTask()}
}
const vb=document.getElementById('vocabBtn');if(vb)vb.onclick=openVoc;
document.addEventListener('click',e=>{const c=e.target.closest('[data-openvoc]');if(c){e.preventDefault();openVoc()}});
window.VOCAB={get S(){return S},judge,acceptEn,acceptDe,cloze,normEn,normDe,get W(){return W},get P(){return P},SET,ensureVoc,unitStats,unitName,yearName};
})();
