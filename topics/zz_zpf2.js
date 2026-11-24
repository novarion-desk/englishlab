/* Present perfect – neu gestaltete Folien */
(()=>{
 const t=TOPICS.find(x=>x.id==='zpf');if(!t)return;
 const {ip,bf,per,card,qa,er,rule,tapSlide,ico,ic,sv,ch}=UI;const {BL,GR,OR}=ART;
 const have=w=>bf(w||'have','am'),has=w=>bf(w||'has','is'),pp=w=>bf(w,'ing');
 const errFig=sv('-34 0 68 122',ch({x:0,top:'#f59e0b',hair:'pony',hc:'#8a4b1c',dress:true,face:'oops',pose:'stand'}));
 const parts=[['be','was / were','been'],['go','went','gone / been'],['see','saw','seen'],['do','did','done'],['eat','ate','eaten'],['write','wrote','written'],['take','took','taken'],['buy','bought','bought'],['make','made','made'],['have','had','had']];
 const svgT=(inner)=>'<div class="tl rv">'+sv('0 0 440 110',inner)+'</div>';
 const F='font-family="system-ui,sans-serif" font-weight="800"';
 const forSince=svgT('<line x1="30" y1="62" x2="410" y2="62" stroke="#94a3b8" stroke-width="5" stroke-linecap="round"/><path d="M410 62 l-10 -7 v14z" fill="#94a3b8"/><circle cx="90" cy="62" r="9" fill="#f97316"/><text x="90" y="92" text-anchor="middle" font-size="15" fill="#c2410c" '+F+'>2018</text><text x="365" y="92" text-anchor="middle" font-size="15" fill="#334155" '+F+'>now</text><path d="M96 34 H356" stroke="#2f5bea" stroke-width="5"/><path d="M96 26 V42 M356 26 V42" stroke="#2f5bea" stroke-width="5"/><text x="226" y="22" text-anchor="middle" font-size="16" fill="#2f5bea" '+F+'>for five years</text>');
 const slides=()=>[
  slide(L('Vergangenheit mit Bezug zu jetzt','The past with a link to now'),
   SL.p(L('Das <b>present perfect</b> verbindet die Vergangenheit mit der Gegenwart. Der genaue Zeitpunkt ist <b>nicht wichtig</b>.','The <b>present perfect</b> links the past with the present. The exact time is <b>not important</b>.'))
   +'<div class="wcards" style="grid-template-columns:repeat(2,minmax(0,1fr))">'+card(ico.film,L('Zeitpunkt egal','time doesn\'t matter'),'I <b>have seen</b> that film.')+card(ico.key,L('Folge jetzt','result now'),'She <b>has lost</b> her keys.<br><small>'+L('Sie hat sie jetzt nicht.','She hasn\'t got them now.')+'</small>')+'</div>'),
  slide(L('Die Form','The form'),
   '<div class="bcols" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)"><div class="bcol am"><h3>'+have()+'</h3>'+per(ic.I,'I',have(),'')+per(ic.you,'you',have(),'')+per(ic.we,'we',have(),'')+per(ic.they,'they',have(),'')+'</div><div class="bcol is"><h3>'+has()+'</h3>'+per(ic.he,'he',has(),'')+per(ic.she,'she',has(),'')+per(ic.it,'it',has(),'')+'</div></div>'
   +'<div class="plus rv">+ '+pp('worked')+' '+pp('seen')+' '+pp('been')+'</div>'
   +'<div class="negl rv">'+L('Verneint','Negative')+': <b>haven\'t / hasn\'t</b> worked &nbsp;|&nbsp; '+L('Frage','Question')+': <b>Have</b> you worked? · <b>Has</b> she worked? &nbsp;|&nbsp; Yes, I <b>have</b>. · No, she <b>hasn\'t</b>.</div>',
   L('Partizip: regelmässig Verb + -ed, unregelmässig z. B. seen, been, gone, done.','Participle: regular verb + -ed, irregular e.g. seen, been, gone, done.')),
  slide(L('Wichtige Partizipien','Important participles'),
   '<div class="irr" style="grid-template-columns:repeat(2,minmax(0,1fr))">'+parts.map(p=>'<div class="ip rv">'+p[0]+' <i>→</i> '+p[1]+' <i>→</i> <b>'+p[2]+'</b></div>').join('')+'</div>'),
  slide(L('Erfahrungen: ever / never','Experiences: ever / never'),
   '<div class="wcards">'+card(ico.plane,'ever','<b>Have</b> you <b>ever been</b> to London?<br>– Yes, I <b>have</b>.')+card(ico.sushi,'never','I <b>have never eaten</b> sushi.')+card(ico.globe,L('zweimal','twice'),'She <b>has been</b> to Italy twice.')+'</div>'
   +SL.tip(L('<b>ever</b> steht in Fragen, <b>never</b> in Aussagen (nie, bis jetzt).','<b>ever</b> goes in questions, <b>never</b> in statements (not once up to now).'))),
  slide(L('just, already, yet','just, already, yet'),
   rule('just','#2f5bea',L('gerade eben','a moment ago'),"I've <b>just</b> finished.")+rule('already','#16a34a',L('schon','already'),'She has <b>already</b> left.')+rule('yet','#f97316',L('schon / noch nicht (Frage, Verneinung, am Satzende)','yet (questions, negatives, at the end)'),"Have you finished <b>yet</b>? – I haven't finished <b>yet</b>.")),
  slide(L('for und since','for and since'),
   forSince+rule('for','#2f5bea',L('Zeitdauer: seit (fünf Jahren)','length of time'),'I have lived here <b>for</b> five years.')+rule('since','#f97316',L('Startpunkt: seit (2018)','starting point'),'I have lived here <b>since</b> 2018.')),
  slide(L('Past simple oder present perfect?','Past simple or present perfect?'),
   '<div class="bcols" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)"><div class="bcol am"><h3>'+bf('Past simple','am')+'</h3>'+ip(ico.calendar,L('Zeitpunkt genannt','time is given'))+'<div class="bper rv"><span>I <b>saw</b> that film <b>last week</b>.</span></div></div><div class="bcol is"><h3>'+bf('Present perfect','is')+'</h3>'+ip(ico.clock,L('Zeitpunkt egal / Bezug zu jetzt','time not important / link to now'))+'<div class="bper rv"><span>I <b>have seen</b> that film.</span></div></div></div>'
   +SL.warn(L('Mit <i>yesterday, last week, in 2020</i> steht immer das <b>past simple</b>: <s>I have seen him yesterday</s>.','With <i>yesterday, last week, in 2020</i> always use the <b>past simple</b>: <s>I have seen him yesterday</s>.'))),
  slide(L('Typische Fehler','Typical mistakes'),
   '<div class="negwrap"><div class="errs">'+er('I have seen him yesterday.','I saw him yesterday.')+er('She has went home.','She has gone home.')+er('I live here since 2018.','I have lived here since 2018.')+er('Did you ever been to Rome?','Have you ever been to Rome?')+'</div><div class="negfig rv">'+errFig+'<div class="oops">Oops!</div></div></div>'),
  tapSlide(L('Übung: Present perfect','Exercise: present perfect'),[['___ you ever been to London?','Have',['Have','Did']],['I have never ___ sushi.','eaten',['ate','eaten']],['She has already ___.','left',['left','leaved']],['I have lived here ___ five years.','for',['for','since']],['I have lived here ___ 2018.','since',['for','since']],['I ___ him last week.','saw',['saw','have seen']]],L('Wähle die richtige Form.','Choose the correct form.'),t.name())
 ];
 t.slides=slides;
})();
