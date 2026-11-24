/* Zukunft – neu gestaltete Folien */
(()=>{
 const t=TOPICS.find(x=>x.id==='zfut');if(!t)return;
 const {ip,bf,per,card,qa,er,rule,tapSlide,ico,ic,sv,ch}=UI;const {BL,GR,OR}=ART;
 const gt=w=>bf(w||'going to','is'),wl=w=>bf(w||'will','am'),pc=w=>bf(w||'present continuous','are');
 const errFig=sv('-34 0 68 122',ch({x:0,top:'#f59e0b',hair:'pony',hc:'#8a4b1c',dress:true,face:'oops',pose:'stand'}));
 const slides=()=>[
  slide(L('Drei Möglichkeiten','Three ways'),
   SL.p(L('Für die Zukunft gibt es im Englischen mehrere Formen. Welche man nimmt, hängt von der <b>Absicht</b> ab.','English has several future forms. The one you choose depends on the <b>meaning</b>.'))
   +'<div class="wcards">'+card(ico.cloud,gt(),L('Pläne, Absichten, Vorhersagen mit Anzeichen','plans, intentions, predictions with evidence'))+card(ico.bulb,wl(),L('spontane Entscheidungen, Versprechen, Vermutungen','spontaneous decisions, promises, guesses'))+card(ico.plane,pc(),L('feste Verabredungen','fixed arrangements'))+'</div>'),
  slide('be going to',
   SL.p(L('Form: <b>am / is / are + going to + Grundform</b>','Form: <b>am / is / are + going to + base form</b>'))
   +'<div class="wcards w4">'+card(ico.book,L('Plan','plan'),"I'm <b>going to study</b> English next year.")+card(ico.cloud,L('Anzeichen','evidence'),"Look at the clouds! It's <b>going to rain</b>.")+card(ico.clock,L('verneint','negative'),"We're <b>not going to stay</b> long.")+card(ic.you,L('Frage','question'),'<b>Are</b> you <b>going to come</b>?')+'</div>'),
  slide('will / won\'t',
   SL.p(L('Form: <b>will + Grundform</b> (für alle Personen gleich). Kurzform: <b>\'ll</b>. Verneint: <b>won\'t</b>.','Form: <b>will + base form</b> (same for all persons). Short: <b>\'ll</b>. Negative: <b>won\'t</b>.'))
   +'<div class="wcards">'+card(ico.bulb,L('spontan','spontaneous'),"The phone is ringing. – I<b>'ll answer</b> it.")+card(ico.heart,L('Versprechen','promise'),"I promise I <b>won't tell</b> anyone.")+card(ico.sun,L('Vermutung','guess'),'I think it <b>will be</b> sunny tomorrow.')+'</div>'
   +SL.p(L('Frage: <i>Will you help me? – Yes, I will. / No, I won\'t.</i>','Question: <i>Will you help me? – Yes, I will. / No, I won\'t.</i>'))),
  slide(L('Present continuous für die Zukunft','Present continuous for the future'),
   SL.p(L('Für <b>feste Verabredungen</b> mit Zeit und Ort, die schon organisiert sind.','For <b>fixed arrangements</b> with time and place that are already organised.'))
   +'<div class="wcards">'+card(ico.clock,'5 pm',"I'm <b>meeting</b> Anna at 5 pm.")+card(ico.plane,'Friday',"We're <b>flying</b> to Rome on Friday.")+card(ico.moon,'tomorrow evening','What are you <b>doing</b> tomorrow evening?')+'</div>'),
  slide(L('shall für Angebote','shall for offers'),
   SL.p(L('<b>Shall I …?</b> bietet Hilfe an. Mit <b>Shall we …?</b> macht man einen Vorschlag. Beides nur mit I und we.','<b>Shall I …?</b> offers help. <b>Shall we …?</b> makes a suggestion. Both only with I and we.'))
   +'<div class="bcols" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)"><div class="bcol am"><h3>'+wl('Shall I …?')+'</h3>'+ip(ic.I,L('Angebot','offer'))+'<div class="bper rv"><span>Shall I <b>read out</b> your horoscope?</span></div><div class="bper rv"><span>Shall I <b>carry</b> your bag?</span></div></div><div class="bcol is"><h3>'+gt('Shall we …?')+'</h3>'+ip(ic.we,L('Vorschlag','suggestion'))+'<div class="bper rv"><span>Shall we <b>go</b> swimming?</span></div></div></div>'
   +SL.tip(L('Ausserdem: <b>will</b> für Hoffnung und Vorhersage (I hope it won\'t rain) und für spontane Entscheidungen.','Also: <b>will</b> for hopes and predictions (I hope it won\'t rain) and spontaneous decisions.'))),
  slide(L('going to oder will?','going to or will?'),
   '<div class="bcols" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)"><div class="bcol is"><h3>'+gt()+'</h3>'+ip(ico.calendar,L('schon geplant','already planned'))+'<div class="bper rv"><span>I\'m <b>going to buy</b> a new phone.</span></div>'+ip(ico.cloud,L('Anzeichen sichtbar','visible evidence'))+'<div class="bper rv"><span>Watch out! You\'re <b>going to fall</b>.</span></div></div><div class="bcol am"><h3>'+wl()+'</h3>'+ip(ico.bulb,L('gerade entschieden','just decided'))+'<div class="bper rv"><span>Oh, it\'s cold. I<b>\'ll close</b> the window.</span></div>'+ip(ico.sun,L('nur Meinung: <i>I think, probably</i>','only an opinion: <i>I think, probably</i>'))+'<div class="bper rv"><span>I think you <b>will like</b> it.</span></div></div></div>'),
  slide(L('if / when / while: kein will','if / when / while: no will'),
   SL.p(L('Nach <b>if, when, while, before, after</b> steht das <b>present simple</b>, nicht will.','After <b>if, when, while, before, after</b> use the <b>present simple</b>, not will.'))
   +'<div class="negwrap"><div class="errs">'+er('When I will arrive, I will call you.','When I arrive, I will call you.')+'</div><div class="negfig rv">'+errFig+'</div></div>'),
  slide(L('Typische Fehler','Typical mistakes'),
   '<div class="negwrap"><div class="errs">'+er('I will to go.','I will go.')+er('She will goes.','She will go.')+er('I go to buy a phone. (Plan)',"I'm going to buy a phone.")+er('If it will rain, we stay.','If it rains, we will stay.')+'</div><div class="negfig rv">'+errFig+'<div class="oops">Oops!</div></div></div>'),
  tapSlide(L('Übung: Zukunft','Exercise: future'),[['Look at the clouds! It ___ rain.','is going to',['is going to','will']],['The phone is ringing. I ___ it.',"'ll answer",["'m going to answer","'ll answer"]],['Tomorrow at 5 pm I ___ Anna.','am meeting',['will meet','am meeting']],['We ___ stay long.',"aren't going to",["aren't going to","don't going to"]],['I promise I ___ tell anyone.',"won't",["won't","don't"]],['If it ___ tomorrow, we will stay home.','rains',['rains','will rain']]],L('Wähle die richtige Form.','Choose the correct form.'),t.name())
 ];
 t.slides=slides;
})();
