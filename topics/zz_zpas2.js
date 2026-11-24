/* Past simple – neu gestaltete Folien */
(()=>{
 const t=TOPICS.find(x=>x.id==='zpas');if(!t)return;
 const {bf,per,card,qa,er,rule,tapSlide,ico,ic,sv,ch}=UI;const {BL,GR,OR}=ART;
 const was=w=>bf(w||'was','am'),were=w=>bf(w||'were','are'),did=w=>bf(w||'did','is');
 const errFig=sv('-34 0 68 122',ch({x:0,top:'#f59e0b',hair:'pony',hc:'#8a4b1c',dress:true,face:'oops',pose:'stand'}));
 const tc=(lab,col,body)=>'<div class="tc rv" style="--tc:'+col+'"><em>'+lab+'</em>'+body+'</div>';
 const irr=[['be','was / were'],['go','went'],['have','had'],['do','did'],['see','saw'],['make','made'],['take','took'],['buy','bought'],['eat','ate'],['write','wrote'],['meet','met'],['read','read /red/']];
 const slides=()=>[
  slide(L('Was ist vorbei?','What is finished?'),
   SL.p(L('Das <b>past simple</b> beschreibt Dinge, die in der <b>Vergangenheit abgeschlossen</b> sind, meist mit einer Zeitangabe.','The <b>past simple</b> describes things that are <b>finished in the past</b>, usually with a time word.'))
   +'<div class="wcards">'+card(ico.ball,'yesterday','I <b>played</b> football yesterday.')+card(ico.moon,'last night',"We <b>didn't go</b> out last night.")+card(ico.film,L('Frage','Question'),'<b>Did</b> you <b>see</b> the film?')+'</div>'
   +'<div class="sigs"><span>yesterday</span><span>last week</span><span>two days ago</span><span>in 2020</span><span>when I was five</span></div>'),
  slide(L('Das Verb be: was / were','The verb be: was / were'),
   '<div class="bcols" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)"><div class="bcol am"><h3>'+was()+'</h3>'+per(ic.I,'I',was(),"wasn't")+per(ic.he,'he',was(),"wasn't")+per(ic.she,'she',was(),"wasn't")+per(ic.it,'it',was(),"wasn't")+'</div><div class="bcol are"><h3>'+were()+'</h3>'+per(ic.you,'you',were(),"weren't")+per(ic.we,'we',were(),"weren't")+per(ic.they,'they',were(),"weren't")+'</div></div>'
   +SL.p(L('Frage: <i>Was she asleep? – Were they tired?</i> Kurzantwort: <i>Yes, I was. / No, we weren\'t.</i>','Question: <i>Was she asleep? – Were they tired?</i> Short answer: <i>Yes, I was. / No, we weren\'t.</i>'))),
  slide(L('Regelmässige Verben: -ed','Regular verbs: -ed'),
   rule('-ed','#2f5bea',L('meistens <b>-ed</b>','usually <b>-ed</b>'),'start – start<b>ed</b> · destroy – destroy<b>ed</b>')
   +rule('-d','#16a34a',L('Verb auf -e: nur <b>-d</b>','verb ending in -e: just <b>-d</b>'),'escape – escape<b>d</b> · die – die<b>d</b>')
   +rule('-ied','#f97316',L('Konsonant + y: <b>-ied</b>','consonant + y: <b>-ied</b>'),'carry – carr<b>ied</b> · marry – marr<b>ied</b>')
   +rule('2×','#7c3aed',L('1 Silbe, kurzer Vokal + 1 Konsonant: verdoppeln','1 syllable, short vowel + 1 consonant: double'),'stop – stop<b>p</b>ed · plan – plan<b>n</b>ed')),
  slide(L('Unregelmässige Verben','Irregular verbs'),
   '<div class="irr">'+irr.map(p=>'<div class="ip rv">'+p[0]+' <i>→</i> <b>'+p[1]+'</b></div>').join('')+'</div>'
   +SL.tip(L('Diese Formen muss man auswendig lernen. Die Liste im Heft oder in der App hilft.','You have to learn these by heart.'))),
  slide(L('Verneinung, Fragen, Kurzantworten','Negative, questions, short answers'),
   '<div class="tri">'+tc('+','#16a34a','I started.<br>She went.')+tc('−','#dc2626',"I "+did("didn't")+" start.<br>She "+did("didn't")+" go.")+tc('?','#2f5bea',did('Did')+' you start?<br>'+did('Did')+' she go?')+'</div>'
   +'<div class="qas">'+qa('Did you start?','Yes, I did.',"No, I didn't.")+qa('Did she go?','Yes, she did.',"No, she didn't.")+'</div>'
   +SL.warn(L('Nach <b>did / didn\'t</b> steht die <b>Grundform</b>: <s>Did you went?</s> → <i>Did you go?</i>','After <b>did / didn\'t</b> use the <b>base form</b>: <s>Did you went?</s> → <i>Did you go?</i>'))),
  slide(L('Zeitangaben im Past simple','Time phrases with the past simple'),
   '<div class="rgrid">'+rule('last / yesterday','#2f5bea',L('Zeitpunkt in der Vergangenheit','a point in the past'),"I <b>saw</b> him <b>yesterday</b>. We <b>went</b> to Rome <b>last year</b>.")
   +rule('ago','#16a34a',L('Zeitspanne + ago','time span + ago'),'She <b>left</b> two hours <b>ago</b>.')
   +rule('in','#f97316',L('Jahr / Monat','year / month'),'He <b>was born in 2010</b>. It <b>happened in May</b>.')
   +rule('on','#7c3aed',L('Tag / Datum','day / date'),'We <b>arrived on Monday</b>. It <b>started on 5 May</b>.')
   +rule('at','#0d9488',L('Uhrzeit','time'),'The film <b>started at eight</b>.')
   +rule('when','#db2777',L('Wann?','When?'),'When <b>did</b> you <b>get</b> up?')+'</div>'
   +SL.tip(L('Mit einer Zeitangabe aus der Vergangenheit steht immer das <b>past simple</b>, nie das present perfect.','With a time phrase from the past always use the <b>past simple</b>, never the present perfect.'))),
  slide(L('Typische Fehler','Typical mistakes'),
   '<div class="negwrap"><div class="errs">'+er('Did you went to school?','Did you go to school?')+er("He didn't saw me.","He didn't see me.")+er('I goed home.','I went home.')+er('She was go to Bern.','She went to Bern.')+'</div><div class="negfig rv">'+errFig+'<div class="oops">Oops!</div></div></div>'),
  tapSlide(L('Übung: Past simple','Exercise: past simple'),[['Yesterday I ___ football.','played',['play','played']],['She ___ to Bern last week.','went',['goed','went']],["We ___ the film.","didn't see",["didn't see","didn't saw"]],['___ you have fun?','Did',['Did','Do']],['They ___ asleep.','were',['was','were']],['He ___ born in 2010.','was',['was','were']]],L('Wähle die richtige Form.','Choose the correct form.'),t.name())
 ];
 t.slides=slides;
})();
