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
   Dort erstellen wir eine PDF-Datei und öffnen das Teilen-Menü (Drucken, In Dateien sichern, AirDrop …). */
function doPrint(){
 const ios=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
 const standalone=navigator.standalone===true||(window.matchMedia&&matchMedia('(display-mode: standalone)').matches);
 if(ios&&standalone)return makePdf();
 try{window.print()}catch(e){makePdf()}
}
const loadScript=src=>new Promise((ok,no)=>{const s=document.createElement('script');s.src=src;s.onload=ok;s.onerror=()=>no(new Error('load '+src));document.head.appendChild(s)});
let pdfBusy=false;
/* html2canvas kennt neue CSS-Farben (color-mix, color()) nicht: im Klon in einfache Farben umrechnen */
function fixColors(doc){
 const c2=document.createElement('canvas').getContext('2d'),win=doc.defaultView||window;
 const rgb=v=>{
  const m=/color\(srgb\s+([\d.e+-]+)\s+([\d.e+-]+)\s+([\d.e+-]+)(?:\s*\/\s*([\d.e+-]+%?))?\)/.exec(v);
  if(m){const q=x=>Math.max(0,Math.min(255,Math.round(parseFloat(x)*255)));let al=m[4]===undefined?1:(m[4].endsWith('%')?parseFloat(m[4])/100:parseFloat(m[4]));return 'rgba('+q(m[1])+','+q(m[2])+','+q(m[3])+','+al+')'}
  try{c2.fillStyle='#000';c2.fillStyle=v;const r=c2.fillStyle;return /color\(|color-mix|lab\(|lch\(|oklab|oklch/.test(r)?null:r}catch(e){return null}};
 const P=[['color','color'],['backgroundColor','background-color'],['borderTopColor','border-top-color'],['borderRightColor','border-right-color'],['borderBottomColor','border-bottom-color'],['borderLeftColor','border-left-color'],['outlineColor','outline-color'],['textDecorationColor','text-decoration-color']];
 const bad=/color\(|color-mix|lab\(|lch\(|oklab|oklch/;
 doc.querySelectorAll('*').forEach(el=>{
  let cs;try{cs=win.getComputedStyle(el)}catch(e){return}
  P.forEach(([j,k])=>{const v=cs[j];if(v&&bad.test(v)){const r=rgb(v);if(r)el.style.setProperty(k,r,'important')}});
  const bi=cs.backgroundImage;if(bi&&bad.test(bi))el.style.setProperty('background-image','none','important');
 });
}
async function makePdf(){
 if(pdfBusy)return;pdfBusy=true;
 const msg=document.createElement('div');msg.style.cssText='position:fixed;left:50%;top:18px;transform:translateX(-50%);z-index:99999;background:#1e1b4b;color:#fff;padding:12px 18px;border-radius:12px;font:600 15px system-ui,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.3)';
 msg.textContent=L('PDF wird erstellt …','Creating PDF …');document.body.appendChild(msg);
 const stage=document.createElement('div');
 try{
  if(!window.html2canvas)await loadScript('vendor/html2canvas.min.js');
  if(!window.jspdf)await loadScript('vendor/jspdf.umd.min.js');
  const root=document.getElementById('vpr')||document.getElementById('app');
  const clone=root.cloneNode(true);clone.querySelectorAll('.sheetbar,.vprbar,script').forEach(n=>n.remove());
  clone.removeAttribute('id');clone.classList.remove('vpr');
  stage.id='xpdfstage';stage.style.cssText='position:absolute;left:-10000px;top:0;width:794px;background:#fff';
  stage.appendChild(clone);document.body.appendChild(stage);
  const hasHand=!!stage.querySelector('.hosh');
  if(hasHand&&typeof cvScale==='function'){try{cvScale(stage)}catch(e){}}
  const css=document.createElement('style');css.textContent='.sheet{border:0!important;border-radius:0!important;box-shadow:none!important;margin:0!important;max-width:none!important;width:794px!important;padding:38px 42px!important;box-sizing:border-box;background:#fff}.sheet.sol{break-before:auto}#xpdfstage *{font-family:Helvetica,Arial,sans-serif!important;text-rendering:auto!important;font-kerning:none!important;letter-spacing:0.02px!important;font-feature-settings:normal!important;font-variant-ligatures:none!important}#xpdfstage .rsec h3{display:block!important}#xpdfstage .rsec h3 .rn{display:inline-flex!important;vertical-align:middle;margin-right:10px}';
  stage.appendChild(css);
  let blocks=[...stage.querySelectorAll('.sheet')];if(!blocks.length)blocks=[stage];
  const {jsPDF}=window.jspdf;const pdf=new jsPDF({unit:'pt',format:'a4',compress:true});
  const PW=pdf.internal.pageSize.getWidth(),PH=pdf.internal.pageSize.getHeight();
  let first=true;
  for(const b of blocks){
   const cv=await html2canvas(b,{scale:2,backgroundColor:'#fff',useCORS:true,logging:false,onclone:fixColors});
   const pxPerPage=Math.floor(cv.width*PH/PW);
   for(let y=0;y<cv.height;y+=pxPerPage){
    const h=Math.min(pxPerPage,cv.height-y);
    const part=document.createElement('canvas');part.width=cv.width;part.height=h;
    const g=part.getContext('2d');g.fillStyle='#fff';g.fillRect(0,0,part.width,h);g.drawImage(cv,0,y,cv.width,h,0,0,cv.width,h);
    if(!first)pdf.addPage();first=false;
    pdf.addImage(part.toDataURL('image/jpeg',0.92),'JPEG',0,0,PW,h*PW/cv.width);
   }
  }
  const blob=pdf.output('blob');
  const file=new File([blob],'EnglishLab.pdf',{type:'application/pdf'});
  msg.remove();
  if(navigator.canShare&&navigator.canShare({files:[file]})){
   try{await navigator.share({files:[file],title:'EnglishLab'})}catch(e){if(e&&e.name!=='AbortError')throw e}
  }else{
   const u=URL.createObjectURL(blob);const a=document.createElement('a');a.href=u;a.download='EnglishLab.pdf';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),60000);
  }
 }catch(e){
  console.error('PDFERR',e&&e.message,e&&e.stack);msg.remove();alert(L('Das PDF konnte nicht erstellt werden. Bitte nochmals versuchen.','The PDF could not be created. Please try again.'));
 }finally{stage.remove();pdfBusy=false}
}
