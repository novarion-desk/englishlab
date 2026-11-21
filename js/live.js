/* Mini-Übung: eine Frage, antworten, «Nächste Frage» – für Theorie-Seite und Live-Folie */
function mqInit(root){
 (root||document).querySelectorAll('.mq[data-mq]').forEach(el=>{if(!el._m){el._m={n:0,ok:0,cur:null,ans:false};mqNew(el)}});
}
function mqNew(el){
 const m=el._m;if(!topic||!topic.gen)return;
 const kinds=['choice','fill','errors'].filter(k=>topic.gen[k]);
 const r=Math.random();const k=kinds.length>2?(r<.5?'choice':r<.8?'fill':'errors'):kinds[0];
 let it;try{it=topic.gen[k]()}catch(e){it=topic.gen.choice()}
 m.cur=it;m.ans=false;mqDraw(el);
}
function mqDraw(el){
 const m=el._m,it=m.cur;let body='';
 if(it.type==='fill'){
  const w=Math.max(8,it.answers[0].length+3);
  body=`<p class="instr">${it.instr} ${it.hint?`<span class="hint">${esc(it.hint)}</span>`:''}</p><div class="sentence">${esc(it.before)}<input class="tin" data-mqin style="width:${w}ch" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">${esc(it.after)}</div><div class="actions"><button class="primary" data-mqchk>${L('Prüfen','Check')}</button></div>`;
 }else{
  const short=!!it.stem;
  body=`<p class="instr">${it.instr||''}</p>${short?`<div class="sentence">${stemHtml(it.stem)}</div>`:''}<div class="opts" style="grid-template-columns:${short?'repeat(auto-fit,minmax(110px,1fr))':'1fr'}">${it.opts.map((o,i)=>`<button data-mqo="${i}" style="${short?'':'text-align:left'}">${esc(o)}</button>`).join('')}</div>`;
 }
 el.innerHTML=`<div class="mqtop"><span>${L('Niveau','Level')}</span><div class="seg mqlv">${['C','B','A'].map(l=>`<button data-mqlv="${l}" class="${S.lvl===l?'on':''}">${l}</button>`).join('')}</div><span class="mqsc">⭐ ${m.ok} / ${m.n}</span></div>${body}<div class="mqfb"></div>`;
 const inp=el.querySelector('[data-mqin]');
 if(inp){inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();m.ans?mqNew(el):mqCheck(el)}};if(!T.pres)setTimeout(()=>{try{inp.focus({preventScroll:true})}catch(x){}},0)}
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
