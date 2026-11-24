/* Past continuous – neu gestaltete Folien */
(()=>{
 const t=TOPICS.find(x=>x.id==='zpast');if(!t)return;
 const {bf,per,card,qa,er,rule,tapSlide,ico,ic,sv,ch}=UI;const {BL,GR,OR}=ART;
 const was=w=>bf(w||'was','am'),were=w=>bf(w||'were','are'),ing=w=>bf(w,'ing');
 const errFig=sv('-34 0 68 122',ch({x:0,top:'#f59e0b',hair:'pony',hc:'#8a4b1c',dress:true,face:'oops',pose:'stand'}));
 /* Zeitstrahl: lange Handlung (Balken) + kurze Handlung (Blitz) */
 const tl=(a,b,pos)=>{const x=60+pos*300;return '<div class="tl rv">'+sv('0 0 440 80','<rect x="20" y="30" width="400" height="22" rx="11" fill="#c7d2fe"/><rect x="20" y="30" width="'+(x-20)+'" height="22" rx="11" fill="#2f5bea"/><path d="M'+x+' 12 l8 16 -8 -2 10 24 -6 0 -2 18 -4 -22 -8 3z" fill="#ef4444"/><text x="30" y="46" font-size="13" font-weight="800" fill="#fff" font-family="system-ui,sans-serif">'+a+'</text><text x="'+(x+14)+'" y="24" font-size="13" font-weight="800" fill="#b91c1c" font-family="system-ui,sans-serif">'+b+'</text>')+'</div>'};
 const par=(a,b)=>'<div class="tl rv">'+sv('0 0 440 80','<rect x="20" y="10" width="400" height="22" rx="11" fill="#2f5bea"/><rect x="20" y="42" width="400" height="22" rx="11" fill="#f97316"/><text x="32" y="26" font-size="13" font-weight="800" fill="#fff" font-family="system-ui,sans-serif">'+a+'</text><text x="32" y="58" font-size="13" font-weight="800" fill="#fff" font-family="system-ui,sans-serif">'+b+'</text>')+'</div>';
 const slides=()=>[
  slide(L('Was lief gerade?','What was in progress?'),
   SL.p(L('Das <b>past continuous</b> beschreibt eine Handlung, die zu einem bestimmten Zeitpunkt in der Vergangenheit <b>gerade ablief</b>.','The <b>past continuous</b> describes an action that was <b>in progress</b> at a certain time in the past.'))
   +'<div class="wcards" style="grid-template-columns:repeat(2,minmax(0,1fr))">'+card(ico.cup,'8 o\'clock','At 8 o\'clock I <b>was having</b> breakfast.')+card(ico.clock,'6 pm','What <b>were</b> you <b>doing</b> at 6 pm?')+'</div>'),
  slide(L('Die Form','The form'),
   SL.p(L('Form: <b>was / were + Verb-ing</b>','Form: <b>was / were + verb-ing</b>'))
   +'<div class="bcols" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)"><div class="bcol am"><h3>'+was()+'</h3>'+per(ic.I,'I',was(),'')+per(ic.he,'he',was(),'')+per(ic.she,'she',was(),'')+per(ic.it,'it',was(),'')+'</div><div class="bcol are"><h3>'+were()+'</h3>'+per(ic.you,'you',were(),'')+per(ic.we,'we',were(),'')+per(ic.they,'they',were(),'')+'</div></div>'
   +'<div class="plus rv">+ '+ing('working')+'</div><div class="negl rv">'+L('Verneint','Negative')+': <b>wasn\'t</b> working · <b>weren\'t</b> working &nbsp;|&nbsp; '+L('Frage','Question')+': <b>Was</b> he working? · <b>Were</b> they working?</div>'),
  slide(L('Past continuous + past simple','Past continuous + past simple'),
   SL.p(L('Eine <b>lange Handlung</b> (continuous) wird von einer <b>kurzen Handlung</b> (simple) unterbrochen. <b>while</b> + continuous, <b>when</b> + simple.','A <b>long action</b> (continuous) is interrupted by a <b>short action</b> (simple). <b>while</b> + continuous, <b>when</b> + simple.'))
   +tl('I was walking home','it started to rain',.62)+tl('While she was sleeping','the phone rang',.7)+tl('We were playing football','he fell',.55)),
  slide(L('Zwei Handlungen gleichzeitig','Two actions at the same time'),
   par('I was cooking','my brother was watching TV')+'<div class="cmp rv"><span class="co">While I <b>was cooking</b>, my brother <b>was watching</b> TV.</span></div>'
   +SL.tip(L('Beide Handlungen laufen parallel: zweimal past continuous.','Both actions run in parallel: use the past continuous twice.'))),
  slide(L('Typische Fehler','Typical mistakes'),
   '<div class="negwrap"><div class="errs">'+er('I was watch TV.','I was watching TV.')+er('While I slept, the phone was ringing.','While I was sleeping, the phone rang.')+er('Were you sleeping at 8? – Yes, I did.','Yes, I was.')+'</div><div class="negfig rv">'+errFig+'<div class="oops">Oops!</div></div></div>'),
  tapSlide(L('Übung: Past continuous','Exercise: past continuous'),[["At 8 o'clock I ___ breakfast.",'was having',['had','was having']],['I ___ home when it started to rain.','was walking',['walked','was walking']],['While she ___, the phone rang.','was sleeping',['slept','was sleeping']],['What ___ you doing at 6 pm?','were',['were','did']],["They ___ football.","weren't playing",["didn't play","weren't playing"]]],L('Wähle die richtige Form.','Choose the correct form.'),t.name())
 ];
 t.slides=slides;
})();
