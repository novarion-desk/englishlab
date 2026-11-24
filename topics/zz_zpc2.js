/* Present continuous – neu gestaltete Folien (Muster «Present simple: be») */
(()=>{
 const t=TOPICS.find(x=>x.id==='zpc');if(!t)return;
 const {bf,per,card,nrow,qa,er,rule,tapSlide,ico,ic,sv,ch}=UI;const {BL,GR,OR,cardIc,bg}=ART;
 const am=w=>bf(w||'am','am'),is=w=>bf(w||'is','is'),are=w=>bf(w||'are','are'),ing=w=>bf(w,'ing');
 const two=(a,b)=>cardIc('#fff7e6','<g transform="translate(32 6) scale(.62)">'+ch(Object.assign({x:0,pose:'hold'},a))+'</g><g transform="translate(70 6) scale(.62)">'+ch(Object.assign({x:0,pose:'hold'},b))+'</g><path d="M46 44 H56" stroke="#f6c6a0" stroke-width="5" stroke-linecap="round"/>');
 const icHands=two({top:BL,hair:'short',hc:'#5b3a1e'},{top:'#ec4899',hair:'pony',hc:'#8a4b1c',dress:true});
 const icJacket=cardIc('#fff7e6','<g transform="translate(50 4) scale(.7)">'+ch({x:0,top:'#2563eb',hair:'short',hc:'#2b1d12',pose:'stand'})+'</g>');
 const icRain=ico.rain;
 const icFoot=cardIc('#fff7e6','<g transform="translate(36 6) scale(.62)">'+ch({x:0,top:OR,hair:'curly',hc:'#2b1d12',face:'oops'})+'</g><g transform="translate(70 10) scale(.62)">'+ch({x:0,top:GR,hair:'short',hc:'#5b3a1e',face:'frown'})+'</g>');
 const negFig=sv('-34 0 68 122',ch({x:0,top:'#ef4444',hair:'short',hc:'#2b1d12',face:'frown',pose:'stand'}));
 const errFig=sv('-34 0 68 122',ch({x:0,top:'#f59e0b',hair:'pony',hc:'#8a4b1c',dress:true,face:'oops',pose:'stand'}));
 const slides=()=>[
  slide(L('Was passiert gerade?','What is happening now?'),
   SL.p(L('Das <b>present continuous</b> beschreibt, was <b>jetzt gerade</b> passiert oder nur <b>vorübergehend</b> gilt.','The <b>present continuous</b> describes what is happening <b>right now</b> or is only <b>temporary</b>.'))
   +'<div class="wcards">'+card(icFoot,'Look!',"You're <b>standing</b> on my foot.")+card(icJacket,L('Gerade jetzt','Right now'),"He's <b>wearing</b> a blue jacket.")+card(icHands,L('Was tun sie?','What are they doing?'),'They are <b>holding</b> hands.')+'</div>'
   +'<div class="sigs"><span>now</span><span>at the moment</span><span>today</span><span>this week</span><span>Look!</span><span>Listen!</span></div>',
   L('Signalwörter zeigen: Es passiert jetzt oder nur für kurze Zeit.','Signal words show: it is happening now or only for a short time.')),
  slide(L('Die Form','The form'),
   SL.p(L('Form: <b>am / is / are + Verb-ing</b>. Die drei Farben kennst du schon von <i>be</i>.','Form: <b>am / is / are + verb-ing</b>. You already know the three colours from <i>be</i>.'))
   +'<div class="bcols"><div class="bcol am"><h3>'+am()+'</h3>'+per(ic.I,'I',am(),'')+'</div><div class="bcol is"><h3>'+is()+'</h3>'+per(ic.he,'he',is(),'')+per(ic.she,'she',is(),'')+per(ic.it,'it',is(),'')+'</div><div class="bcol are"><h3>'+are()+'</h3>'+per(ic.you,'you',are(),'')+per(ic.we,'we',are(),'')+per(ic.they,'they',are(),'')+'</div></div>'
   +'<div class="plus rv">+ '+ing('helping')+' '+ing('raining')+' '+ing('playing')+'</div><div class="negl rv">'+L('Verneinung','Negative')+': I'+"'"+'m <b>not</b> helping · he <b>isn'+"'"+'t</b> helping · you <b>aren'+"'"+'t</b> helping</div>',
   L('Verneinung: <b>not</b> nach am / is / are. Im Gespräch meist die Kurzform.','Negative: <b>not</b> after am / is / are. In speech we usually use the short form.')),
  slide(L('Schreibung der -ing-Form','Spelling the -ing form'),
   rule('-ing','#2f5bea',L('meistens einfach <b>-ing</b>','usually just <b>-ing</b>'),'hold – hold<b>ing</b> · play – play<b>ing</b> · carry – carry<b>ing</b>')
   +rule('–e','#16a34a',L('stummes -e fällt weg','silent -e is dropped'),'take – tak<b>ing</b> · leave – leav<b>ing</b> · make – mak<b>ing</b>')
   +rule('2×','#f97316',L('1 Silbe, kurzer Vokal + 1 Konsonant: Konsonant verdoppeln','1 syllable, short vowel + 1 consonant: double it'),'swim – swim<b>m</b>ing · run – run<b>n</b>ing · put – put<b>t</b>ing · shop – shop<b>p</b>ing')),
  slide(L('Fragen und Kurzantworten','Questions and short answers'),
   '<div class="swp rv"><div class="sent">He '+is()+' '+ing('helping')+'.</div><div class="swa">⇅</div><div class="sent">'+is('Is')+' he '+ing('helping')+'?</div></div>'
   +'<div class="qas">'+qa('Are you helping?','Yes, I am.',"No, I'm not.")+qa('Is he helping?','Yes, he is.',"No, he isn't.")+qa('Are they helping?','Yes, they are.',"No, they aren't.")+qa('What are they doing?','They are holding hands.','')+'</div>'
   +SL.tip(L('<b>am / is / are</b> springt vor das Subjekt. Kein do! Ja-Antwort: immer die <b>Vollform</b>.','<b>am / is / are</b> jumps before the subject. No do! A “yes” answer always uses the <b>full form</b>.'))),
  slide(L('Present simple oder continuous?','Present simple or continuous?'),
   '<div class="bcols" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)"><div class="bcol am"><h3>'+bf('Present simple','am')+'</h3>'+per(ico.clock,L('Gewohnheit','habit'),'','')+'<div class="bper rv"><span>She <b>plays</b> tennis on Saturdays.</span></div><div class="bper rv"><span>'+L('Zustand:','state:')+' I <b>know</b>, I <b>like</b>, I <b>want</b></span></div></div><div class="bcol is"><h3>'+bf('Present continuous','is')+'</h3>'+per(ico.sun,L('gerade jetzt','right now'),'','')+'<div class="bper rv"><span>She <b>is playing</b> tennis now.</span></div><div class="bper rv"><span>'+L('vorübergehend:','temporary:')+' I <b>am staying</b> with a friend this week.</span></div></div></div>'
   +SL.warn(L('Verben wie <i>know, like, love, want, need, understand</i> stehen <b>nicht</b> im continuous: <s>I am knowing</s>.','Verbs like <i>know, like, love, want, need, understand</i> are <b>not</b> used in the continuous: <s>I am knowing</s>.'))),
  slide(L('Typische Fehler','Typical mistakes'),
   '<div class="negwrap"><div class="errs">'+er('She is play now.','She is playing now.')+er('They are swiming.','They are swimming.')+er('I am wanting a drink.','I want a drink.')+er('He working now.','He is working now.')+'</div><div class="negfig rv">'+errFig+'<div class="oops">Oops!</div></div></div>'),
  tapSlide(L('Übung: Present continuous','Exercise: present continuous'),[['Look! The dog ___ in the lake.','is swimming',['swims','is swimming']],['They ___ holding hands.',"aren't",["aren't","don't"]],['___ he helping her?','Is',['Is','Does']],['I ___ a book at the moment.','am reading',['read','am reading']],['What ___ you doing?','are',['are','do']],['She ___ English. She is from London.','speaks',['speaks','is speaking']]],L('Wähle die richtige Form.','Choose the correct form.'),t.name())
 ];
 t.slides=slides;
})();
