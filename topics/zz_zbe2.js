/* Present simple: be – neu gestaltete Folien (Farbcode am / is / are, Bildkarten, Antippen-Übung, Ich-Karte) */
(()=>{
 const t=TOPICS.find(x=>x.id==='zbe');if(!t)return;
 const {SK,SKD,INK,BL,GR,OR,sv,ch,dog,bg,cardIc,kidCard}=ART;
 const ic={
  I:sv('-32 0 64 122',ch({top:BL,hair:'short',hc:'#5b3a1e',pose:'self'})),
  he:sv('-32 0 64 122',ch({top:GR,pants:'#475569',hair:'short',hc:'#2b1d12',pose:'stand'})),
  she:sv('-32 0 64 122',ch({top:GR,hair:'long',hc:'#8a4b1c',dress:true})),
  it:sv('-44 40 90 82',dog(0)),
  you:sv('-32 0 80 122',ch({x:-4,top:OR,pants:'#1e293b',hair:'curly',hc:'#2b1d12',pose:'point'})),
  we:sv('-56 0 112 122',ch({x:-22,top:BL,hair:'short',hc:'#5b3a1e',pose:'wave'})+ch({x:22,top:OR,hair:'pony',hc:'#8a4b1c',dress:true,pose:'wave'})),
  youpl:sv('-56 0 112 122',ch({x:-22,top:OR,hair:'curly',hc:'#2b1d12',pose:'wave'})+ch({x:22,top:'#fb923c',pants:'#475569',hair:'short',hc:'#8a4b1c',pose:'wave'})),
  they:sv('-78 0 156 122',ch({x:-40,top:OR,hair:'pony',hc:'#2b1d12',dress:true})+ch({x:0,top:'#fb923c',hair:'short',hc:'#8a4b1c'})+ch({x:40,top:OR,pants:'#1e293b',hair:'curly',hc:'#2b1d12'}))
 };
 const face=k=>{let s='<circle cx="24" cy="24" r="21" fill="#fde047"/><path d="M5 30 Q6 44 24 45 Q42 44 43 30 Q40 42 24 42 Q8 42 5 30Z" fill="#eab308" opacity=".5"/><circle cx="24" cy="24" r="21" fill="none" stroke="#eab308" stroke-width="2"/><circle cx="12" cy="29" r="3.6" fill="#fb7185" opacity=".45"/><circle cx="36" cy="29" r="3.6" fill="#fb7185" opacity=".45"/>';
  if(k==='happy')s+='<ellipse cx="17" cy="20" rx="2.8" ry="3.4" fill="'+INK+'"/><ellipse cx="31" cy="20" rx="2.8" ry="3.4" fill="'+INK+'"/><circle cx="18" cy="18.8" r="1" fill="#fff"/><circle cx="32" cy="18.8" r="1" fill="#fff"/><path d="M13 29 Q24 41 35 29Z" fill="#7f1d1d"/><path d="M17 33 Q24 38 31 33 Q24 36 17 33Z" fill="#fb7185"/>';
  if(k==='tired')s+='<path d="M12 21 Q17 25 22 21 M26 21 Q31 25 36 21" stroke="'+INK+'" stroke-width="2.6" fill="none" stroke-linecap="round"/><ellipse cx="24" cy="34" rx="4" ry="4.6" fill="#7f1d1d"/><text x="34" y="12" font-size="11" font-weight="800" fill="'+BL+'" font-family="system-ui,sans-serif">z</text>';
  if(k==='star')s+='<g fill="#ef4444"><path d="M16 14 l2.2 5 5.4 .5 -4.1 3.6 1.3 5.3 -4.8 -2.9 -4.8 2.9 1.3 -5.3 -4.1 -3.6 5.4 -.5z"/><path d="M33 14 l2.2 5 5.4 .5 -4.1 3.6 1.3 5.3 -4.8 -2.9 -4.8 2.9 1.3 -5.3 -4.1 -3.6 5.4 -.5z"/></g><path d="M13 31 Q24 44 35 31Z" fill="#7f1d1d"/>';
  return sv('0 0 48 48',s)};
 const hd=o=>sv('-26 -1 52 56',ch(o));
 const heads={happy:hd({hair:'pony',hc:'#8a4b1c',top:'#ec4899',dress:true}),tired:hd({hair:'short',hc:'#5b3a1e',top:'#0ea5e9',face:'sleep'}),star:hd({hair:'curly',hc:'#2b1d12',top:OR,face:'star'})};
 const mic=e=>'<g transform="translate('+(e[0]-1)+' '+(e[1]+2)+') rotate(-20) scale(1.25)"><rect x="-2.2" y="-16" width="4.4" height="16" rx="2" fill="#475569"/><ellipse cx="0" cy="-20" rx="6" ry="7" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/><rect x="-6" y="-22" width="12" height="4" fill="#e11d48"/></g>';
 const ico={
  name:kidCard('#fee2e2',{top:BL,hair:'short',hc:'#5b3a1e',pose:'stand',tag:'Tom'}),
  age:cardIc('#fce7f3','<ellipse cx="50" cy="76" rx="34" ry="5" fill="#000" opacity=".1"/><rect x="18" y="52" width="64" height="24" rx="5" fill="#f472b6"/><path d="M18 58 q8 9 16 0 q8 9 16 0 q8 9 16 0 q8 9 16 0 v-4 q0 -2 -2 -2 h-60 q-2 0 -2 2z" fill="#fff"/><rect x="30" y="34" width="40" height="19" rx="5" fill="#fbcfe8"/><path d="M30 40 q6 8 10 0 q5 8 10 0 q5 8 10 0 q4 8 10 0" fill="#fff"/><text x="50" y="72" text-anchor="middle" font-size="15" font-weight="800" fill="#fff" font-family="system-ui,sans-serif">14</text><g fill="#38bdf8"><rect x="38" y="20" width="4.5" height="15" rx="1"/><rect x="48" y="20" width="4.5" height="15" rx="1"/><rect x="58" y="20" width="4.5" height="15" rx="1"/></g><g fill="#fbbf24"><path d="M40 8 q4 5 0 10 q-4 -5 0 -10z"/><path d="M50 8 q4 5 0 10 q-4 -5 0 -10z"/><path d="M60 8 q4 5 0 10 q-4 -5 0 -10z"/></g>'),
  origin:cardIc('#dbeafe','<ellipse cx="46" cy="82" rx="22" ry="4" fill="#000" opacity=".1"/><path d="M24 70 Q46 92 68 70" stroke="#64748b" stroke-width="3.5" fill="none"/><rect x="38" y="80" width="16" height="4" rx="2" fill="#64748b"/><circle cx="46" cy="44" r="30" fill="#3b82f6"/><path d="M26 34 q8 -10 17 -4 q4 8 -6 12 q-8 0 -11 -8z M48 52 q10 -6 17 2 q-3 10 -13 12 q-6 -6 -4 -14z M46 20 q10 -3 14 4 q-8 5 -14 -4z" fill="#4ade80"/><ellipse cx="36" cy="30" rx="8" ry="14" fill="#fff" opacity=".2" transform="rotate(25 36 30)"/><path d="M16 44 h60 M46 14 Q60 44 46 74 M46 14 Q32 44 46 74" stroke="#fff" stroke-width="1" fill="none" opacity=".35"/><path d="M76 6 a10 10 0 0 1 10 10 c0 8 -10 18 -10 18 s-10 -10 -10 -18 a10 10 0 0 1 10 -10z" fill="#ef4444" stroke="#fff" stroke-width="2"/><path d="M74.5 11 h3 v3.5 h3.5 v3 h-3.5 v3.5 h-3 v-3.5 h-3.5 v-3 h3.5z" fill="#fff"/>'),
  job:kidCard('#fef3c7',{top:'#7c3aed',hair:'long',hc:'#2b1d12',dress:true,pose:'hold',item:mic}),
  feel:kidCard('#e0e7ff',{top:'#0ea5e9',hair:'short',hc:'#8a4b1c',face:'sleep'},'<g font-family="system-ui,sans-serif" font-weight="800" fill="#6366f1"><text x="22" y="14" font-size="16">z</text><text x="32" y="2" font-size="12">z</text></g>'),
  place:cardIc('#dcfce7','<ellipse cx="50" cy="84" rx="38" ry="4" fill="#000" opacity=".1"/><rect x="12" y="62" width="76" height="9" rx="3" fill="#b4793a"/><rect x="18" y="71" width="7" height="14" rx="2" fill="#8a5a24"/><rect x="75" y="71" width="7" height="14" rx="2" fill="#8a5a24"/><path d="M64 62 Q86 58 80 38" stroke="#9ca3af" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="50" cy="48" rx="19" ry="17" fill="#9ca3af"/><ellipse cx="50" cy="52" rx="10" ry="12" fill="#e5e7eb"/><rect x="38" y="58" width="8" height="6" rx="3" fill="#9ca3af"/><rect x="54" y="58" width="8" height="6" rx="3" fill="#9ca3af"/><circle cx="50" cy="28" r="14" fill="#9ca3af"/><path d="M38 20 l1 -13 l10 8z M62 20 l-1 -13 l-10 8z" fill="#9ca3af"/><path d="M40.5 17 l.5 -6 l5 4z M59.5 17 l-.5 -6 l-5 4z" fill="#fda4af"/><path d="M42 22 l4 3 M58 22 l-4 3 M50 15 v4" stroke="#6b7280" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="44" cy="28" rx="2.4" ry="3" fill="#14532d"/><ellipse cx="56" cy="28" rx="2.4" ry="3" fill="#14532d"/><path d="M48 33 l2 2 l2 -2z" fill="#f472b6"/><path d="M50 35 v2 M46 38 q4 3 4 -1 q0 4 4 1" stroke="'+INK+'" stroke-width="1.2" fill="none"/><path d="M36 33 l-9 -2 M36 36 l-9 2 M64 33 l9 -2 M64 36 l9 2" stroke="#6b7280" stroke-width="1" stroke-linecap="round"/>'),
  card:sv('0 0 36 28','<rect x="2" y="2" width="32" height="24" rx="4" fill="#fff" stroke="'+BL+'" stroke-width="2.5"/><circle cx="11" cy="12" r="4" fill="'+SK+'"/><path d="M5 23 q6 -9 12 0z" fill="'+BL+'"/><path d="M21 10 h10 M21 15 h10 M21 20 h7" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>'),
  ch:sv('0 0 30 22','<rect width="30" height="22" rx="3" fill="#dc2626"/><path d="M13 4h4v5h5v4h-5v5h-4v-5H8V9h5z" fill="#fff"/>')
 };
 const scene=sv('0 0 170 125',ch({x:34,s:.95,top:BL,hair:'short',hc:'#5b3a1e',pose:'wave'})+'<path d="M70 14 h90 a8 8 0 0 1 8 8 v34 a8 8 0 0 1 -8 8 h-70 l-18 16 l4 -16 h-4 a8 8 0 0 1 -8 -8 v-34 a8 8 0 0 1 8 -8z" fill="#fff" stroke="'+BL+'" stroke-width="2.5"/><text x="122" y="34" text-anchor="middle" font-size="13" font-weight="700" fill="'+INK+'" font-family="system-ui,sans-serif">Hi!</text><text x="122" y="54" text-anchor="middle" font-size="15" font-weight="800" fill="'+INK+'" font-family="system-ui,sans-serif">I <tspan fill="'+BL+'">am</tspan> Tom.</text>');
 const bf=(w,c)=>'<span class="bf '+c+'">'+w+'</span>';
 const am=w=>bf(w||'am','am'),is=w=>bf(w||'is','is'),are=w=>bf(w||'are','are');
 const per=(em,who,b,sh)=>'<div class="bper rv"><span class="ic">'+em+'</span><b>'+who+'</b>'+b+'<small>'+sh+'</small></div>';
 const card=(em,tt,ex)=>'<div class="wc rv"><div class="ic">'+em+'</div><b>'+tt+'</b><div class="exs">'+ex+'</div></div>';
 const nrow=(who,b,c,sh)=>'<div class="nrow rv"><span class="who">'+who+'</span>'+bf(b,c)+'<span class="not">not</span><i>→</i><b>'+sh+'</b></div>';
 const qa=(q,y,n)=>'<div class="qarow rv"><span class="qq">'+q+'</span><span class="bb y">'+y+'</span>'+(n?'<span class="bb n">'+n+'</span>':'')+'</div>';
 const er=(w,r)=>'<div class="errc rv"><div class="e1">✗ <s>'+w+'</s></div><div class="e2">✓ '+r+'</div></div>';
 const TAP=[['She ___ from Spain.','is'],['We ___ in the same class.','are'],['___ you tired?','Are'],['They ___ not here today.','are'],['I ___ 14 years old.','am'],['___ he your brother?','Is']];
 const tapHtml=()=>'<div class="sl-try tapx">'+TAP.map((q,i)=>{const cap=q[1][0]===q[1][0].toUpperCase();const o=['am','is','are'].map(x=>cap?x[0].toUpperCase()+x.slice(1):x);
  return '<div class="tapq" data-a="'+q[1]+'" data-q="'+q[0].replace(/"/g,'&quot;')+'"><span class="n">'+(i+1)+'</span><span class="qs">'+q[0].replace('___','<span class="gap">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>')+'</span><span class="tbs">'+o.map(x=>'<button type="button" class="tb '+x.toLowerCase()+'" data-t="'+x+'">'+x+'</button>').join('')+'</span><span class="tfb"></span></div>'}).join('')+'<div class="tapsc">⭐ <b>0</b> / '+TAP.length+'</div></div>';
 const slides=()=>[
  slide(L('Das Verb be','The verb be'),
   SL.p(L('<b>be</b> (sein) hat im Present simple <b>drei Formen</b>. Jede hat ihre Farbe, die du auf allen Folien wiedersiehst.','<b>be</b> has <b>three forms</b> in the present simple. Each has its own colour, the same on every slide.'))
   +'<div class="bcols"><div class="bcol am"><h3>'+am()+'</h3>'+per(ic.I,'I',am(),"I'm")+'<div class="bsc rv">'+scene+'</div></div><div class="bcol is"><h3>'+is()+'</h3>'+per(ic.he,'he',is(),"he's")+per(ic.she,'she',is(),"she's")+per(ic.it,'it',is(),"it's")+'</div><div class="bcol are"><h3>'+are()+'</h3>'+per(ic.you,'you',are(),"you're")+per(ic.we,'we',are(),"we're")+per(ic.youpl,'you (pl.)',are(),"you're")+per(ic.they,'they',are(),"they're")+'</div></div>',
   L('In der Präsentation erscheinen die Zeilen nacheinander per Tipp. Zum Einstieg: Alle stellen sich mit «I am …» vor.','In presentation mode the rows appear one by one when you tap. Warm-up: everyone introduces themselves with “I am …”.')),
  slide(L('Wann braucht man be?','When do we use be?'),
   '<div class="wcards">'+card(ico.name,L('Name','Name'),'I <b>am</b> Tom.')+card(ico.age,L('Alter','Age'),'She <b>is</b> 14.')+card(ico.origin,L('Herkunft','Origin'),'We <b>are</b> from Switzerland.')+card(ico.job,L('Beruf','Job'),'She <b>is</b> a reporter.')+card(ico.feel,L('Gefühl, Eigenschaft','Feeling, description'),'I <b>am</b> tired. He <b>is</b> tall.')+card(ico.place,L('Ort','Place'),'The cat <b>is</b> on the table.')+'</div>'
   +'<div class="cmp rv"><span class="cf">'+ico.ch+' «Ich habe Hunger.»</span><span class="cx">✗ <s>I have hunger.</s></span><span class="co">✓ I <b>am</b> hungry.</span></div>',
   L('Bei Hunger und Durst sagt Deutsch «haben», Englisch be: <i>I am hungry. I am thirsty.</i>','For hunger and thirst German says “haben”, English uses be: <i>I am hungry. I am thirsty.</i>')),
  slide(L('Verneinung','Negative'),
   SL.p(L('Man hängt <b>not</b> an. Im Gespräch nimmt man meist die Kurzform.','Add <b>not</b>. In speech we usually use the short form.'))
   +'<div class="negwrap"><div class="nrows">'+nrow('I','am','am',"I'm not")+nrow('you','are','are',"you aren't / you're not")+nrow('he / she / it','is','is',"he isn't / he's not")+nrow('we / they','are','are',"we aren't / we're not")+'</div><div class="negfig rv">'+sv('-34 0 68 122',ch({x:0,top:'#ef4444',hair:'curly',hc:'#2b1d12',pose:'both',face:'frown'}))+'</div></div>'
   +SL.warn(L('Für <b>I am not</b> gibt es keine Kurzform mit n\'t: nicht <s>I amn\'t</s>.','There is no n\'t form for <b>I am not</b>: not <s>I amn\'t</s>.'))),
  slide(L('Fragen und Kurzantworten','Questions and short answers'),
   '<div class="swp rv"><div class="sent">She '+is()+' English.</div><div class="swa">⇅</div><div class="sent">'+is('Is')+' she English?</div></div>'
   +'<div class="qas">'+qa('Am I late?','Yes, I am.',"No, I'm not.")+qa('Are you tired?','Yes, I am.',"No, I'm not.")+qa('Is she English?','Yes, she is.',"No, she isn't.")+qa('Are they here?','Yes, they are.',"No, they aren't.")+qa('Where is he from?','He is from Spain.','')+'</div>'
   +SL.tip(L('<b>be</b> springt vor das Subjekt. Kein do! Ja-Antwort: immer die <b>Vollform</b> (Yes, she <b>is</b>).','<b>be</b> jumps before the subject. No do! A “yes” answer always uses the <b>full form</b> (Yes, she <b>is</b>).'))),
  slide(L('Typische Fehler','Typical mistakes'),
   '<div class="negwrap"><div class="errs">'+er('I have hunger.','I am hungry.')+er('She are my friend.','She is my friend.')+er('Do you are tired?','Are you tired?')+er('He no is here.',"He isn't here.")+er('Yes, she is not.',"No, she isn't.")+'</div><div class="negfig rv">'+sv('-34 0 68 122',ch({x:0,top:'#f59e0b',hair:'pony',hc:'#8a4b1c',dress:true,pose:'self',face:'oops'}))+'<div class="oops">Oops!</div></div></div>'),
  {t:L('Übung: am, is, are','Exercise: am, is, are'),h:tapHtml(),note:L('Antippen: grün = richtig, rot = nochmals versuchen. Nach der Antwort gibt es «Frag Marty».','Tap: green = correct, red = try again. After answering there is “Ask Marty”.'),kind:'try'},
  slide(L('Meine Ich-Karte','My ID card'),
   '<div class="idc"><div class="idh">'+ico.card+' '+L('Meine Ich-Karte','My ID card')+'</div><div class="idl">My name '+is()+' <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></div><div class="idl">I '+am()+' <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u> years old.</div><div class="idl">I '+am()+' from <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>.</div><div class="idl">Today I '+am()+' <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u> <span class="fcs">'+heads.happy+heads.tired+heads.star+'</span></div></div>'
   +SL.tip(L('Partnerinterview: <i>Are you from …? Is your name …?</i> Antwort: <i>Yes, I am. / No, I\'m not.</i>','Partner interview: <i>Are you from …? Is your name …?</i> Answer: <i>Yes, I am. / No, I\'m not.</i>')),
   L('Aktivität: Jede Person füllt die Karte aus und fragt dann eine Partnerin oder einen Partner.','Activity: everyone fills in the card, then asks a partner.'))
 ];
 t.slides=slides;
 document.addEventListener('click',e=>{
  const b=e.target.closest('.tapx .tb');if(!b)return;
  const row=b.closest('.tapq'),root=row.closest('.tapx');if(row.classList.contains('done'))return;
  const ok=b.dataset.t===row.dataset.a,gap=row.querySelector('.gap');
  if(ok){row.classList.add('done');gap.textContent=b.dataset.t;gap.className='gap '+b.dataset.t.toLowerCase();row.querySelectorAll('.tb').forEach(x=>x.disabled=true);if(!row.classList.contains('miss')){row.classList.add('first')}
   const sc=root.querySelector('.tapsc b');sc.textContent=root.querySelectorAll('.tapq.first').length;
   const fb=row.querySelector('.tfb');fb.innerHTML='✅ <button type="button" class="btn-link" data-tki>💡 '+L('Frag Marty','Ask Marty')+'</button><div class="mqkibox"></div>';
   row._ctx={it:{type:'choice',instr:L('Setze am, is oder are ein.','Fill in am, is or are.'),stem:row.dataset.q,opts:['am','is','are'],sol:row.dataset.a,tname:t.name()},ok:row.classList.contains('first'),val:row._last||row.dataset.a};
  }else{row.classList.add('miss');row._last=b.dataset.t;b.classList.add('bad');b.disabled=true}
 });
 document.addEventListener('click',e=>{const k=e.target.closest('[data-tki]');if(!k)return;e.stopPropagation();const row=k.closest('.tapq');if(row&&row._ctx&&typeof askKI==='function')askKI(Object.assign({},row._ctx,{box:row.querySelector('.mqkibox'),btn:k}))},true);
})();
