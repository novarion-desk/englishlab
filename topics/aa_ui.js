/* Gemeinsame Bausteine für die neu gestalteten Theorie-Folien (Muster «Present simple: be») */
window.UI=(()=>{
 const {sv,ch,dog,INK,BL,GR,OR}=ART;
 const bf=(w,c)=>'<span class="bf '+(c||'am')+'">'+w+'</span>';
 const per=(em,who,b,sh)=>'<div class="bper rv"><span class="ic">'+em+'</span><b>'+who+'</b>'+b+(sh?'<small>'+sh+'</small>':'')+'</div>';
 const card=(em,tt,ex)=>'<div class="wc rv"><div class="ic">'+em+'</div><b>'+tt+'</b><div class="exs">'+ex+'</div></div>';
 const nrow=(who,b,c,rest,sh)=>'<div class="nrow rv"><span class="who">'+who+'</span>'+bf(b,c)+'<span class="not">not</span>'+(rest?'<span>'+rest+'</span>':'')+(sh?'<i>→</i><b>'+sh+'</b>':'')+'</div>';
 const qa=(q,y,n)=>'<div class="qarow rv"><span class="qq">'+q+'</span><span class="bb y">'+y+'</span>'+(n?'<span class="bb n">'+n+'</span>':'')+'</div>';
 const er=(w,r)=>'<div class="errc rv"><div class="e1">✗ <s>'+w+'</s></div><div class="e2">✓ '+r+'</div></div>';
 /* Regel-Kärtchen: grosses Abzeichen links, Beispiele rechts */
 const rule=(badge,col,title,ex)=>'<div class="rulec rv" style="--rc:'+col+'"><span class="rb2">'+badge+'</span><div><b>'+title+'</b><div class="rex">'+ex+'</div></div></div>';
 /* Antippen-Übung: items = [[Satz mit ___, Lösung, [Optionen]], …] */
 const tap=(items,instr,tname)=>{const cols=['am','is','are'];
  return '<div class="sl-try tapg" data-instr="'+instr.replace(/"/g,'&quot;')+'" data-tname="'+tname.replace(/"/g,'&quot;')+'">'+items.map((q,i)=>
   '<div class="tapq" data-a="'+q[1].replace(/"/g,'&quot;')+'" data-q="'+q[0].replace(/"/g,'&quot;')+'" data-o="'+q[2].join('|').replace(/"/g,'&quot;')+'"><span class="n">'+(i+1)+'</span><span class="qs">'+q[0].replace('___','<span class="gap">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>')+'</span><span class="tbs">'+q[2].map((x,k)=>'<button type="button" class="tb '+cols[k%3]+'" data-t="'+x.replace(/"/g,'&quot;')+'">'+x+'</button>').join('')+'</span><span class="tfb"></span></div>').join('')
   +'<div class="tapsc">⭐ <b>0</b> / '+items.length+'</div></div>'};
 const tapSlide=(title,items,instr,tname)=>({t:title,h:tap(items,instr,tname),note:L('Antippen: grün = richtig, rot = nochmals versuchen. Nach der Antwort gibt es «Frag Marty».','Tap: green = correct, red = try again. After answering there is “Ask Marty”.'),kind:'try'});
 document.addEventListener('click',e=>{
  const b=e.target.closest('.tapg .tb');if(!b)return;
  const row=b.closest('.tapq'),root=row.closest('.tapg');if(row.classList.contains('done'))return;
  const ok=b.dataset.t===row.dataset.a,gap=row.querySelector('.gap');
  if(ok){row.classList.add('done');gap.textContent=b.dataset.t;gap.className='gap '+[...b.classList].find(c=>['am','is','are'].includes(c));row.querySelectorAll('.tb').forEach(x=>x.disabled=true);if(!row.classList.contains('miss'))row.classList.add('first');
   root.querySelector('.tapsc b').textContent=root.querySelectorAll('.tapq.first').length;
   row.querySelector('.tfb').innerHTML='✅ <button type="button" class="btn-link" data-tkg>💡 '+L('Frag Marty','Ask Marty')+'</button><div class="mqkibox"></div>';
   row._ctx={it:{type:'choice',instr:root.dataset.instr,stem:row.dataset.q,opts:row.dataset.o.split('|'),sol:row.dataset.a,tname:root.dataset.tname},ok:row.classList.contains('first'),val:row._last||row.dataset.a};
  }else{row.classList.add('miss');row._last=b.dataset.t;b.classList.add('bad');b.disabled=true}
 });
 document.addEventListener('click',e=>{const k=e.target.closest('[data-tkg]');if(!k)return;e.stopPropagation();const row=k.closest('.tapq');if(row&&row._ctx&&typeof askKI==='function')askKI(Object.assign({},row._ctx,{box:row.querySelector('.mqkibox'),btn:k}))},true);
 /* kleine Symbole */
 const I=(inner,vb)=>sv(vb||'0 0 100 90',ART.bg('#fff7e6')+inner);
 const ico={
  clock:I('<circle cx="50" cy="46" r="27" fill="#fff" stroke="#334155" stroke-width="5"/><path d="M50 28 V46 L62 54" stroke="#334155" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="50" cy="46" r="3" fill="#ef4444"/>'),
  heart:I('<path d="M50 72 C22 52 22 26 40 26 C46 26 50 31 50 34 C50 31 54 26 60 26 C78 26 78 52 50 72Z" fill="#ef4444"/><path d="M36 34 q4 -5 9 -3" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".7"/>'),
  train:I('<rect x="24" y="22" width="52" height="40" rx="9" fill="#2563eb"/><rect x="31" y="28" width="16" height="14" rx="3" fill="#dbeafe"/><rect x="53" y="28" width="16" height="14" rx="3" fill="#dbeafe"/><rect x="24" y="48" width="52" height="5" fill="#1e3a8a"/><circle cx="36" cy="68" r="6" fill="#334155"/><circle cx="64" cy="68" r="6" fill="#334155"/><rect x="18" y="73" width="64" height="3" rx="1.5" fill="#94a3b8"/>'),
  ball:I('<circle cx="50" cy="46" r="26" fill="#fff" stroke="#334155" stroke-width="4"/><path d="M50 32 L61 40 L57 53 H43 L39 40Z" fill="#334155"/><path d="M50 32 V20 M61 40 L73 36 M57 53 L66 63 M43 53 L34 63 M39 40 L27 36" stroke="#334155" stroke-width="4" stroke-linecap="round"/>'),
  swim:I('<path d="M12 62 q9 -8 19 0 t19 0 t19 0 t19 0" stroke="#38bdf8" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M12 74 q9 -8 19 0 t19 0 t19 0 t19 0" stroke="#7dd3fc" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="46" cy="36" r="8" fill="#f6c6a0"/><path d="M32 52 Q46 38 66 46" stroke="#f6c6a0" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M36 28 Q46 20 56 28 Q46 26 36 28Z" fill="#2563eb"/>'),
  music:I('<path d="M40 64 V26 L68 20 V58" stroke="#334155" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="34" cy="64" rx="9" ry="7" fill="#7c3aed"/><ellipse cx="62" cy="58" rx="9" ry="7" fill="#7c3aed"/>'),
  book:I('<path d="M50 28 Q36 20 22 26 V66 Q36 60 50 68 Q64 60 78 66 V26 Q64 20 50 28Z" fill="#fff" stroke="#334155" stroke-width="4" stroke-linejoin="round"/><path d="M50 28 V68" stroke="#334155" stroke-width="3"/><path d="M29 36 q8 -2 14 2 M29 46 q8 -2 14 2 M57 38 q6 -4 14 -2 M57 48 q6 -4 14 -2" stroke="#94a3b8" stroke-width="2.5" fill="none" stroke-linecap="round"/>'),
  sun:I('<circle cx="50" cy="46" r="15" fill="#fbbf24"/><g stroke="#f59e0b" stroke-width="5" stroke-linecap="round"><path d="M50 18 V10 M50 82 V74 M22 46 H14 M86 46 H78 M30 26 L24 20 M76 72 L70 66 M70 26 L76 20 M24 72 L30 66"/></g>'),
  rain:I('<path d="M30 52 Q20 52 20 42 Q20 32 32 32 Q36 20 52 22 Q68 22 70 36 Q82 36 82 46 Q82 52 72 52Z" fill="#94a3b8"/><g stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round"><path d="M34 60 l-4 10 M50 60 l-4 10 M66 60 l-4 10"/></g>'),
  bus:I('<rect x="20" y="24" width="60" height="38" rx="8" fill="#f59e0b"/><rect x="26" y="30" width="14" height="12" rx="2" fill="#fef3c7"/><rect x="43" y="30" width="14" height="12" rx="2" fill="#fef3c7"/><rect x="60" y="30" width="14" height="12" rx="2" fill="#fef3c7"/><circle cx="34" cy="64" r="6" fill="#334155"/><circle cx="66" cy="64" r="6" fill="#334155"/>'),
  pizza:I('<path d="M50 18 L82 72 Q50 82 18 72Z" fill="#fbbf24" stroke="#d97706" stroke-width="3" stroke-linejoin="round"/><circle cx="46" cy="52" r="5" fill="#ef4444"/><circle cx="60" cy="62" r="5" fill="#ef4444"/><circle cx="44" cy="68" r="4" fill="#ef4444"/>'),
  pc:I('<rect x="22" y="22" width="56" height="36" rx="5" fill="#334155"/><rect x="27" y="27" width="46" height="26" rx="2" fill="#7dd3fc"/><rect x="40" y="58" width="20" height="6" fill="#64748b"/><rect x="30" y="64" width="40" height="5" rx="2.5" fill="#94a3b8"/>'),
  cat:I('<path d="M28 34 L34 18 L44 30Z M72 34 L66 18 L56 30Z" fill="#a8a29e"/><circle cx="50" cy="48" r="24" fill="#d6d3d1"/><ellipse cx="41" cy="46" rx="3" ry="4" fill="#1f2937"/><ellipse cx="59" cy="46" rx="3" ry="4" fill="#1f2937"/><path d="M47 54 L50 57 L53 54Z" fill="#f472b6"/><path d="M50 57 Q44 62 40 58 M50 57 Q56 62 60 58" stroke="#1f2937" stroke-width="2" fill="none"/><path d="M26 52 H38 M26 58 L38 56 M74 52 H62 M74 58 L62 56" stroke="#78716c" stroke-width="2"/>')
 };
 const ic={
  I:sv('-32 0 64 122',ch({top:BL,hair:'short',hc:'#5b3a1e',pose:'self'})),
  he:sv('-32 0 64 122',ch({top:GR,pants:'#475569',hair:'short',hc:'#2b1d12',pose:'stand'})),
  she:sv('-32 0 64 122',ch({top:GR,hair:'long',hc:'#8a4b1c',dress:true})),
  it:sv('-44 40 90 82',dog(0)),
  you:sv('-32 0 80 122',ch({x:-4,top:OR,pants:'#1e293b',hair:'curly',hc:'#2b1d12',pose:'point'})),
  we:sv('-56 0 112 122',ch({x:-22,top:BL,hair:'short',hc:'#5b3a1e',pose:'wave'})+ch({x:22,top:OR,hair:'pony',hc:'#8a4b1c',dress:true,pose:'wave'})),
  they:sv('-78 0 156 122',ch({x:-40,top:OR,hair:'pony',hc:'#2b1d12',dress:true})+ch({x:0,top:'#fb923c',hair:'short',hc:'#8a4b1c'})+ch({x:40,top:OR,pants:'#1e293b',hair:'curly',hc:'#2b1d12'}))
 };
 return {bf,per,card,nrow,qa,er,rule,tap,tapSlide,ico,ic,sv,ch,dog};
})();
