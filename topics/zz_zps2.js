/* Present simple – neu gestaltete Folien (Muster «Present simple: be») */
(()=>{
 const t=TOPICS.find(x=>x.id==='zps');if(!t)return;
 const {bf,per,card,nrow,qa,er,rule,tapSlide,ico,ic,sv,ch}=UI;const {BL,GR,OR}=ART;
 const base=w=>bf(w,'am'),s3=w=>bf(w,'is');
 const bub=(inner,x,y)=>'<g transform="translate('+x+' '+y+')"><ellipse cx="0" cy="0" rx="34" ry="28" fill="#fff" stroke="#cbd5e1" stroke-width="2"/><path d="M-26 14 L-40 30 L-14 22Z" fill="#fff" stroke="#cbd5e1" stroke-width="2"/><path d="M-27 13 L-13 21" stroke="#fff" stroke-width="4"/>'+inner+'</g>';
 const negFig=sv('0 0 150 125',ch({x:40,top:'#ef4444',hair:'curly',hc:'#2b1d12',face:'frown',pose:'stand'})+bub('<g transform="translate(-24 -25) scale(.5)">'+ico.pizza.replace(/<svg[^>]*>|<\/svg>/g,'').replace(/<circle cx="50" cy="45" r="42"[^>]*\/>/,'')+'</g><path d="M-18 -16 L18 16 M18 -16 L-18 16" stroke="#dc2626" stroke-width="6" stroke-linecap="round"/>',104,38));
 const errFig=sv('-34 0 68 122',ch({x:0,top:'#f59e0b',hair:'pony',hc:'#8a4b1c',dress:true,face:'oops',pose:'stand'}));
 const slides=()=>[
  slide(L('Wofür braucht man es?','What is it for?'),
   SL.p(L('Das <b>present simple</b> beschreibt <b>Gewohnheiten, Routinen, Zustände und Fahrpläne</b>.','The <b>present simple</b> describes <b>habits, routines, states and timetables</b>.'))
   +'<div class="wcards w4">'+card(ico.swim,L('Gewohnheit','Habit'),'I <b>go</b> swimming on Saturdays.')+card(ico.heart,L('Zustand, Vorliebe','State, liking'),'She <b>loves</b> dogs.')+card(ico.train,L('Fahrplan','Timetable'),"The train <b>leaves</b> at 8 o'clock.")+card(ico.music,L('Vorlieben erfragen','Asking about tastes'),'What music <b>do</b> you <b>like</b>?')+'</div>'
   +'<div class="sigs"><span>every day</span><span>often</span><span>usually</span><span>sometimes</span><span>never</span><span>on Mondays</span></div>',
   L('Signalwörter zeigen oft: Es geht um etwas, das regelmässig passiert.','Signal words often show that something happens regularly.')),
  slide(L('Die Form (bejaht)','The form (positive)'),
   SL.p(L('Das Verb bleibt gleich. Nur bei <b>he / she / it</b> kommt ein <b>-s</b> dazu.','The verb stays the same. Only after <b>he / she / it</b> add <b>-s</b>.'))
   +'<div class="bcols" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)"><div class="bcol am"><h3>'+base('like')+'</h3>'+per(ic.I,'I',base('like'),'I like pizza.')+per(ic.you,'you',base('play'),'You play.')+per(ic.we,'we',base('live'),'We live here.')+per(ic.they,'they',base('play'),'They play football.')+'</div><div class="bcol is"><h3>'+s3('like<u>s</u>')+'</h3>'+per(ic.he,'he',s3('likes'),'He likes pizza.')+per(ic.she,'she',s3('plays'),'She plays tennis.')+per(ic.it,'it',s3('rains'),'It rains a lot.')+'</div></div>',
   L('In der Präsentation erscheinen die Zeilen nacheinander per Tipp. Merksatz: <i>he, she, it – das s muss mit.</i>','In presentation mode the rows appear one by one. Rule of thumb: <i>he, she, it – the s must fit.</i>')),
  slide(L('Schreibung: he / she / it','Spelling: he / she / it'),
   rule('-s','#16a34a',L('meistens nur <b>-s</b>','usually just <b>-s</b>'),'know – know<b>s</b> · live – live<b>s</b> · speak – speak<b>s</b>')
   +rule('-es','#2f5bea',L('nach o, ch, sh, ss, x, z','after o, ch, sh, ss, x, z'),'go – go<b>es</b> · teach – teach<b>es</b> · finish – finish<b>es</b> · relax – relax<b>es</b>')
   +rule('-ies','#f97316',L('Konsonant + y: y wird <b>ies</b>','consonant + y: y becomes <b>ies</b>'),'fly – fl<b>ies</b> · carry – carr<b>ies</b>')
   +rule('-s','#0d9488',L('Vokal + y: nur <b>-s</b>','vowel + y: just <b>-s</b>'),'buy – buy<b>s</b> · play – play<b>s</b>')
   +rule('has','#7c3aed',L('unregelmässig','irregular'),'have – <b>has</b>')),
  slide(L('Verneinung','Negative'),
   SL.p(L('Man braucht <b>do not / does not</b> (Kurzform: <b>don\'t / doesn\'t</b>) und danach die <b>Grundform</b>.','Use <b>do not / does not</b> (short: <b>don\'t / doesn\'t</b>) and then the <b>base form</b>.'))
   +'<div class="negwrap"><div class="nrows">'+nrow('I / you / we / they','do','am','',"don't")+nrow('he / she / it','does','is','',"doesn't")+'<div class="nex rv">I <b>don\'t like</b> fish.</div><div class="nex rv">She <b>doesn\'t speak</b> Chinese.</div></div><div class="negfig rv">'+negFig+'</div></div>'
   +SL.warn(L('Nach <b>doesn\'t</b> kein -s mehr: <s>She doesn\'t likes</s>.','No -s after <b>doesn\'t</b>: <s>She doesn\'t likes</s>.'))),
  slide(L('Fragen und Kurzantworten','Questions and short answers'),
   '<div class="swp rv"><div class="sent">She '+s3('plays')+' tennis.</div><div class="swa">⇅</div><div class="sent">'+s3('Does')+' she '+base('play')+' tennis?</div></div>'
   +'<div class="qas">'+qa('Do you like pizza?','Yes, I do.',"No, I don't.")+qa('Does he like pizza?','Yes, he does.',"No, he doesn't.")+qa('Does it rain a lot?','Yes, it does.',"No, it doesn't.")+qa('Where does she live?','She lives in Zurich.','')+qa('What music do you like?','I like pop.','')+'</div>'
   +SL.tip(L('<b>do / does</b> kommt an den Anfang, danach steht die <b>Grundform</b>. Ja-Antwort: <i>Yes, he <b>does</b>.</i> (Kein -s am Verb.)','<b>do / does</b> comes first, then the <b>base form</b>. “Yes” answer: <i>Yes, he <b>does</b>.</i> (No -s on the verb.)'))),
  slide(L('Typische Fehler','Typical mistakes'),
   '<div class="negwrap"><div class="errs">'+er('She like pizza.','She likes pizza.')+er("He doesn't likes fish.","He doesn't like fish.")+er('Do she play tennis?','Does she play tennis?')+er('I am go to school.','I go to school.')+'</div><div class="negfig rv">'+errFig+'<div class="oops">Oops!</div></div></div>'),
  tapSlide(L('Übung: do / does und -s','Exercise: do / does and -s'),[['Anna ___ dogs.','loves',['love','loves']],['Tom ___ cats at all.',"doesn't like",["don't like","doesn't like"]],['___ she speak Chinese?','Does',['Do','Does']],['Why ___ cats sleep so much?','do',['do','does']],['He ___ computer games.',"doesn't play",["don't play","doesn't play"]],['She ___ to the pool on Saturdays.','goes',['go','goes']]],L('Wähle die richtige Form.','Choose the correct form.'),t.name())
 ];
 t.slides=slides;
})();
