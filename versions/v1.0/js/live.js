/* Mini-Übung: eine Frage, antworten, «Nächste Frage» – für Theorie-Seite und Live-Folie */
function mqInit(root){
 (root||document).querySelectorAll('.mq[data-mq]').forEach(el=>{if(!el._m){el._m={n:0,ok:0,cur:null,ans:false};mqNew(el)}});
}
const MQK=['fill','choice','errors'];
function mqKinds(){let k=[];try{k=JSON.parse(localStorage.getItem('el-mqk')||'null')||[]}catch(e){}if(S.mqKinds)k=S.mqKinds;k=k.filter(x=>MQK.includes(x));return k.length?k:MQK.slice()}
function mqNew(el){
 const m=el._m;if(!topic||!topic.gen)return;
 const kinds=mqKinds().filter(k=>topic.gen[k]);const k=kinds.length?rnd(kinds):'choice';
 let it;try{it=topic.gen[k]()}catch(e){it=topic.gen.choice()}
 m.cur=it;m.ans=false;mqDraw(el);
}
function mqCfg(){
 const kinds=mqKinds(),st=ST[topic.id],subs=topic.subs?topic.subs():[];
 const lab={fill:L('Einsetzen','Fill in'),choice:L('Auswählen','Choose'),errors:L('Fehler finden','Spot the mistake')};
 const ic={fill:'✏️',choice:'✔️',errors:'🔍'};
 return `<div class="mqcfg"><div class="mqrow"><span>${L('Aufgabenart','Type')}</span>${MQK.filter(k=>topic.gen[k]).map(k=>`<button class="mchip ${kinds.includes(k)?'on':''}" data-mqk="${k}">${ic[k]} ${lab[k]}</button>`).join('')}</div>`
  +(subs.length>1?`<div class="mqrow"><span>${topic.subTitle?topic.subTitle():L('Thema','Topic')}</span>${subs.map(x=>`<button class="mchip ${st.subs.includes(x.k)?'on':''}" data-mqs="${x.k}">${x.n}</button>`).join('')}</div>`:'')+`</div>`;
}
function mqDraw(el){
 const m=el._m,it=m.cur;let body='';
 if(it.type==='fill'){
  const w=Math.max(8,it.answers[0].length+3);
  body=`<p class="instr">${it.instr||topic.fillInstr()} ${it.hint?`<span class="hint">${esc(it.hint)}</span>`:''}</p><div class="sentence">${esc(it.before)}<input class="tin" data-mqin style="width:${w}ch" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">${esc(it.after)}</div><div class="actions"><button class="primary" data-mqchk>${L('Prüfen','Check')}</button></div>`;
 }else{
  const short=!!it.stem;
  body=`<p class="instr">${it.instr||''}</p>${short?`<div class="sentence">${stemHtml(it.stem)}</div>`:''}<div class="opts" style="grid-template-columns:${short?'repeat(auto-fit,minmax(110px,1fr))':'1fr'}">${it.opts.map((o,i)=>`<button data-mqo="${i}" style="${short?'':'text-align:left'}">${esc(o)}</button>`).join('')}</div>`;
 }
 el.innerHTML=`${mqCfg()}<div class="mqtop"><span>${L('Niveau','Level')}</span><div class="seg mqlv">${['C','B','A'].map(l=>`<button data-mqlv="${l}" class="${S.lvl===l?'on':''}">${l}</button>`).join('')}</div><span class="mqsc">⭐ ${m.ok} / ${m.n}</span></div>${body}<div class="mqfb"></div>`;
 const inp=el.querySelector('[data-mqin]');
 if(inp){inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();m.ans?mqNew(el):mqCheck(el)}};if(!T.pres&&FINE)setTimeout(()=>{try{inp.focus({preventScroll:true})}catch(x){}},0)}
}
function mqDone(el,ok,val){
 const m=el._m,it=m.cur;m.ans=true;m.n++;if(ok)m.ok++;
 const praise=rnd(L('Richtig!|Super!|Genau!|Stark!','Correct!|Great!|Well done!|Nice one!').split('|'));
 el.querySelector('.mqfb').innerHTML=(ok?`<div class="fb ok"><div class="fbt">${praise}</div></div>`:`<div class="fb bad"><div class="fbt">${L('Nicht ganz.','Not quite.')}</div>${L('Richtig wäre:','Correct:')} <b>${esc(it.sol)}</b><div class="rule">${it.why||''}</div></div>`)+`<button class="primary mqnext" data-mqnext>${L('Nächste Frage ›','Next question ›')}</button>`;
 el.querySelector('.mqsc').textContent='⭐ '+m.ok+' / '+m.n;
 const inp=el.querySelector('[data-mqin]');if(inp)inp.readOnly=true;
 const c=el.querySelector('[data-mqchk]');if(c)c.parentElement.hidden=true;
 if(T.pres)setTimeout(()=>cvScale(pres),0);else if(screen==='slides')setTimeout(()=>cvScale(app),0);
}
function mqCheck(el){
 const m=el._m,it=m.cur,inp=el.querySelector('[data-mqin]');if(!inp||!inp.value.trim()){if(inp)inp.focus();return}
 mqDone(el,it.answers.some(a=>nrm(a)===nrm(inp.value)),inp.value);
}
document.addEventListener('click',e=>{
 const b=e.target.closest('.mq button');if(!b)return;
 const el=b.closest('.mq'),m=el._m;if(!m)return;
 e.stopPropagation();
 if(b.dataset.mqk){let k=mqKinds();const x=b.dataset.mqk;k=k.includes(x)?k.filter(y=>y!==x):k.concat(x);if(!k.length)return;S.mqKinds=k;try{localStorage.setItem('el-mqk',JSON.stringify(k))}catch(e){}return mqNew(el)}
 if(b.dataset.mqs){const st=ST[topic.id];let a=st.subs;const x=b.dataset.mqs;a=a.includes(x)?a.filter(y=>y!==x):a.concat(x);if(!a.length)return;st.subs=a;return mqNew(el)}
 if(b.dataset.mqlv){S.lvl=b.dataset.mqlv;return mqNew(el)}
 if(b.dataset.mqnext!==undefined)return mqNew(el);
 if(m.ans)return;
 if(b.dataset.mqo!==undefined){
  const i=+b.dataset.mqo,it=m.cur;
  el.querySelectorAll('[data-mqo]').forEach((x,j)=>{x.disabled=true;if(j===it.correct)x.classList.add('right');else if(j===i)x.classList.add('wrong')});
  return mqDone(el,i===it.correct,it.opts[i]);
 }
 if(b.dataset.mqchk!==undefined)return mqCheck(el);
},true);
