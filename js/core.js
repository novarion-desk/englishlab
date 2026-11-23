const APP_VERSION='1.5';
const TOPICS=[];
let LANG='en';try{if(localStorage.getItem('el-lang-v2')){const l=localStorage.getItem('el-lang');if(l==='de'||l==='en')LANG=l}else{localStorage.setItem('el-lang-v2','1');localStorage.setItem('el-lang','en')}}catch(e){}
const L=(de,en)=>LANG==='de'?de:en;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rnd=a=>a[Math.floor(Math.random()*a.length)];
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
const nrm=s=>String(s).toLowerCase().replace(/[’‘`´]/g,"'").replace(/[.,!?;:]/g,' ').replace(/\s+/g,' ').trim();
const app=document.getElementById('app'),modal=document.getElementById('modal'),modalBody=document.getElementById('modalBody');
const S={lvl:'A',count:10};
const ST={};
const sub=id=>(ST[id]&&ST[id].subs)||[];
const mkFill=(before,after,answers,hint,why)=>({type:'fill',before,after,answers,hint:hint||'',sol:(before+answers[0]+after).replace(/\s+/g,' ').trim(),why});
const mkChoice=(stem,opts,okIdx,instr,why)=>({type:'choice',stem,opts,correct:okIdx,instr,sol:stem?stem.replace('___',opts[okIdx]):opts[okIdx],why});
function pickOpts(ok,pool,n){const w=shuffle([...new Set(pool.filter(x=>x!==ok))]).slice(0,n);const opts=shuffle([ok,...w]);return {opts,idx:opts.indexOf(ok)}}
function mkWords(ok,wrongs,instr,why){const p=pickOpts(ok,[ok,...wrongs],2);return mkChoice('',p.opts,p.idx,instr,why)}
const mkText=(src,instr,answers,why)=>({type:'text',src:esc(src),instr,answers,sol:answers[0],why});
const mkOrder=(sentence,why)=>({type:'order',words:shuffle(sentence.split(' ')),instr:L('Bringe die Wörter in die richtige Reihenfolge.','Put the words in the correct order.'),answers:[sentence],sol:sentence,why});
const fillStem=(stem,w)=>stem.replace('___',w);
/* Bank-basierte Generatoren: Eintrag {s:Satz mit ___, ok:[..], bad:[..], lv:1-3, sub, h:Hinweis, w:'de|en'} */
function bankGens(pool,whyDefault,fillInstr){
 const wy=b=>b.w?b.w.split('|')[LANG==='de'?0:1]:whyDefault(b);
 return {
  fill(){const b=rnd(pool());const o=b.s.indexOf('___');return mkFill(b.s.slice(0,o),b.s.slice(o+3),b.ok,b.h||'',wy(b))},
  choice(){const b=rnd(pool());const p=pickOpts(b.ok[0],[b.ok[0],...b.bad],2);return mkChoice(b.s,p.opts,p.idx,L('Welches Wort passt?','Which word fits?'),wy(b))},
  errors(){const b=rnd(pool());return mkWords(fillStem(b.s,b.ok[0]),b.bad.map(x=>fillStem(b.s,x)),L('Welcher Satz ist richtig?','Which sentence is correct?'),wy(b))},
  order(){const b=rnd(pool());return mkOrder(fillStem(b.s,b.ok[0]),wy(b))}
 };
}
const TENSE_URL='https://novarion-desk.github.io/tensetrainer/';
const GROUPS=[
 {id:'zeiten',ic:'⏱️',c:'#2f5bea',n:()=>L('Zeiten','Tenses')},
 {id:'verben',ic:'🧩',c:'#7c3aed',n:()=>L('Verben & Satzbau','Verbs & sentences')},
 {id:'rede',ic:'💬',c:'#0891b2',n:()=>L('Indirekte Rede','Reported speech')},
 {id:'nomen',ic:'👤',c:'#e8590c',n:()=>L('Nomen & Pronomen','Nouns & pronouns')},
 {id:'adj',ic:'🎨',c:'#0ca678',n:()=>L('Adjektive & Adverbien','Adjectives & adverbs')},
 {id:'praep',ic:'📍',c:'#d6336c',n:()=>L('Präpositionen','Prepositions')}
];
const grpOf=t=>GROUPS.find(g=>g.id===t.grp)||GROUPS[0];
/* ===== Folien-Bausteine (zweisprachig über L) ===== */
const SL={
 tbl:(head,rows)=>'<div class="tw"><table><tr>'+head.map(h=>'<th>'+h+'</th>').join('')+'</tr>'+rows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('')+'</table></div>',
 ul:a=>'<ul class="sl-ul">'+a.map(x=>'<li>'+x+'</li>').join('')+'</ul>',
 ex:a=>'<div class="sl-ex">'+a.map(x=>'<div>'+x+'</div>').join('')+'</div>',
 tip:t=>'<div class="sl-tip">💡 '+t+'</div>',
 warn:t=>'<div class="sl-warn">⚠️ '+t+'</div>',
 big:t=>'<p class="sl-big">'+t+'</p>',
 p:t=>'<p>'+t+'</p>',
 err:a=>'<div class="sl-err">'+a.map(x=>'<div><span class="w">✗ '+x[0]+'</span><span class="r">✓ '+x[1]+'</span></div>').join('')+'</div>',
 cols:(a,b)=>'<div class="sl-cols"><div>'+a+'</div><div>'+b+'</div></div>',
 try:a=>'<div class="sl-try">'+a.map((x,i)=>'<div class="sl-q"><span class="n">'+(i+1)+'</span><span class="q">'+x[0].replace('___','<span class="gap">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>')+(x[2]?' <small class="hint">'+x[2]+'</small>':'')+'</span><button class="sl-rev" data-rev>'+L('Lösung','Answer')+'</button><span class="sl-a" hidden>'+x[1]+'</span></div>').join('')+'<button class="sl-all" data-revall>'+L('Alle Lösungen zeigen','Show all answers')+'</button></div>'
};
/* Folie: {id,t,h,note,kind}. kind 'try' = Übungsfolie (nicht in den Regeln) */
const slide=(t,h,note,kind)=>({t,h,note:note||'',kind:kind||'info'});
const tryS=(t,items,note)=>({t,h:SL.try(typeof items==='function'?items():items),note:note||'',kind:'try'});
/* ===== Themen aus Aufgaben-Bank (ohne eigenen Generator) ===== */
const BK=(s,ok,bad,lv,sb,h)=>({s,ok,bad,lv,sub:sb||'',h:h||'',w:''});
function bankTopic(o){
 const lvl=()=>S.lvl==='A'?3:S.lvl==='B'?2:1;
 const pool=()=>{
  const s=o.subs?sub(o.id):[];
  let p=o.bank.filter(b=>b.lv<=lvl()&&(!o.subs||!s.length||s.includes(b.sub)));
  if(p.length)return p;
  const q=o.bank.filter(b=>!o.subs||!s.length||s.includes(b.sub));
  return q.length?q:o.bank.filter(b=>b.lv<=lvl());
 };
 const whyOf=b=>{const w=o.why[b.sub||'_']||o.why._||'';return w.split('|')[LANG==='de'?0:1]};
 const base=bankGens(pool,whyOf);
 const gen={fill:base.fill,choice:base.choice,order:base.order,errors:base.errors};
 if(o.err){
  const ep=()=>{const l=o.err.filter(e=>e[2]<=lvl());return l.length?l:o.err};
  gen.errors=()=>{
   if(Math.random()<.5){const e=rnd(ep());return mkWords(e[0],e[1],L('Welcher Satz ist richtig?','Which sentence is correct?'),(o.errWhy?o.errWhy.split('|')[LANG==='de'?0:1]:whyOf({sub:''}))||'')}
   return base.errors();
  };
 }
 const mkTypes=()=>[
  {k:'fill',icon:'✏️',label:L('Einsetzen','Fill in'),desc:o.fillDesc?o.fillDesc():L('das passende Wort schreiben','write the right word')},
  {k:'choice',icon:'✔️',label:L('Auswählen','Choose'),desc:L('das passende Wort wählen','pick the right word')},
  {k:'errors',icon:'🔍',label:L('Fehler finden','Spot the mistake'),desc:L('den richtigen Satz erkennen','find the correct sentence')},
  {k:'order',icon:'🔀',label:L('Satz ordnen','Word order'),desc:L('Wörter in die richtige Reihenfolge','put the words in order')}].filter(t=>!(o.noOrder&&t.k==='order'));
 return {id:o.id,grp:o.grp,ord:o.ord,ic:o.ic,ready:1,
  name:()=>L(o.de,o.en),desc:()=>typeof o.desc==='function'?o.desc():o.desc,
  fillInstr:()=>o.fillInstr?o.fillInstr():L('Setze das passende Wort ein.','Fill in the correct word.'),
  lvDesc:()=>L(o.lvDe,o.lvEn),
  subTitle:()=>L('Unterthemen','Sub-topics'),
  subs:()=>o.subs?o.subs():[],subDef:o.subs?o.subs().map(x=>x.k):[],
  types:()=>mkTypes(),typeDef:['fill','choice','errors'],gen,slides:o.slides,rules:o.rules,data:{bank:o.bank,err:o.err}};
}
/* Zeitformen: nur Regeln und Folien, geübt wird im Tense Trainer */
const tenseTopic=o=>({id:o.id,grp:'zeiten',ord:o.ord,ic:o.ic,ready:1,name:()=>L(o.de,o.en),desc:()=>o.desc,slides:o.slides});

/* Drucken: Auf dem iPad passiert in einer App vom Home-Bildschirm bei window.print() nichts.
   Dort öffnen wir die Seite als eigenes Fenster mit «Drucken»-Knopf (Teilen → Drucken / PDF). */
function doPrint(){
 const ios=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
 const standalone=navigator.standalone===true||(window.matchMedia&&matchMedia('(display-mode: standalone)').matches);
 if(ios&&standalone)return openPrintWindow();
 try{window.print()}catch(e){openPrintWindow()}
}
function openPrintWindow(){
 const root=document.getElementById('vpr')||document.getElementById('app')||document.body;
 const c=root.cloneNode(true);c.querySelectorAll('.sheetbar,.vprbar,script').forEach(n=>n.remove());
 c.removeAttribute('id');c.classList.remove('vpr');c.style.cssText='position:static;overflow:visible;padding:0;background:#fff';
 const css=[...document.querySelectorAll('style')].map(s=>s.textContent).join('\n');
 const w=window.open('','_blank');
 if(!w){alert(L('Das Fenster wurde blockiert. Bitte Pop-ups erlauben und nochmals tippen.','The window was blocked. Please allow pop-ups and tap again.'));return}
 w.document.open();
 w.document.write('<!doctype html><html lang="'+LANG+'"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>EnglishLab</title><style>'+css+'\n.pbar{position:sticky;top:0;z-index:9;background:#eef2ff;border-bottom:1px solid #c7d2fe;padding:10px 12px;font:15px/1.4 system-ui,sans-serif;display:flex;gap:10px;align-items:center;flex-wrap:wrap}.pbar button{font:600 15px system-ui;padding:9px 14px;border-radius:10px;border:0;background:#4f46e5;color:#fff}@media print{.pbar{display:none!important}}</style></head><body><div class="pbar"><button onclick="window.print()">🖨 '+L('Drucken / PDF','Print / PDF')+'</button><span>'+L('Falls nichts passiert: im Browser auf Teilen tippen, dann «Drucken». Dort kannst du auch als PDF sichern.','If nothing happens: tap Share in the browser, then “Print”. You can also save as PDF there.')+'</span></div><div class="wrap">'+c.outerHTML+'</div></body></html>');
 w.document.close();
}
