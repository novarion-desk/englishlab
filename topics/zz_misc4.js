/* Restliche Themen – Farbbausteine und Bildkarten */
(()=>{
 const {ip,rule,ico,ic,patch}=UI;
 const S=t=>'<div class="bper rv"><span>'+t+'</span></div>';
 const chip=(t,c)=>'<span class="bf" style="background:'+c+'">'+t+'</span>';
 const col=(l,c,b)=>'<div class="bcol" style="border-color:'+c+';background:#fff"><h3><span class="bf" style="background:'+c+'">'+l+'</span></h3>'+b+'</div>';
 const two=(a,b)=>'<div class="bcols" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)">'+a+b+'</div>';
 const frm=(...p)=>'<div class="swp"><div class="sent">'+p.map(x=>chip(x[0],x[1])).join(' ')+'</div></div>';
 const B='#2f5bea',G='#16a34a',O='#f97316',R='#dc2626',P='#7c3aed';
 const tip=t=>SL.tip(t),warn=t=>SL.warn(t);
 patch('dd',{
  'How sure are you?|Wie sicher bist du?':()=>rule('must',G,L('ca. 95 % ja','about 95 % yes'),'He has run 10 km. He <b>must</b> be tired.')
   +rule('might',O,L('ca. 50 %','about 50 %'),'Anna <b>might</b> be at home. (may · could)')
   +rule("can't",R,L('ca. 95 % nein','about 95 % no'),"He is five. He <b>can't</b> be a teacher.")
   +tip(L('Du hast Hinweise, aber du weisst es nicht sicher.','You have clues, but you are not sure.')),
  'Careful: prohibition or deduction?|Achtung: Verbot oder Vermutung?':()=>two(col("mustn't",R,ip(ico.key,L('Verbot','prohibition'))+S("You <b>mustn't</b> smoke here.")),col("can't",B,ip(ico.bulb,L('unmöglich (Vermutung)','impossible (deduction)'))+S("He <b>can't</b> be ten. He is 25.")))
   +warn(L("Das Gegenteil von <b>must</b> (Vermutung) ist <b>can't</b>, nicht mustn't.","The opposite of <b>must</b> (deduction) is <b>can't</b>, not mustn't.")),
  'Deductions about the past|Vermutung über die Vergangenheit':()=>frm(['must / can\'t / might',B],['have',O],[L('3. Form','past participle'),G])
   +rule('must have',G,'',"The ground is wet. It <b>must have</b> rained.")
   +rule("can't have",R,'',"He was with me all evening. He <b>can't have</b> taken your bike.")
   +rule('might have',O,'',"She <b>might have</b> missed the bus.")
 });
 patch('sh',{
  'How to form it|Bildung':()=>frm(['Subject',B],['should have',O],[L('3. Form','past participle'),G])
   +rule('+',G,L('Aussage','statement'),'You <b>should have</b> called me.')
   +rule('–',R,L('Verneinung','negative'),"He <b>shouldn't have</b> said that.")
   +rule('?',B,L('Frage','question'),'<b>Should</b> I <b>have</b> told her?'),
  "Don't mix up|Verwechsle nicht":()=>rule('should have',O,L('hätte tun sollen (hat es nicht getan)','should have done (did not do it)'),'You <b>should have</b> studied.')
   +rule('must have',G,L('hat es bestimmt getan','surely did it'),'He <b>must have</b> forgotten.')
   +rule('could have',B,L('hätte tun können','was able to, but did not'),'You <b>could have</b> asked me.')
   +warn(L('Nicht <s>should of</s>! Das klingt nur so.','Not <s>should of</s>! It only sounds like that.'))
 });
 patch('wp',{
  'see, hear, watch, feel + verb|see, hear, watch, feel + Verb':()=>frm(['see · hear · watch · feel',O],[L('Objekt','object'),B],['-ing',G])
   +'<div class="wcards">'+UI.card(ico.music,'hear','I heard her <b>singing</b>.')+UI.card(ico.ball,'watch','We watched the children <b>playing</b>.')+UI.card(ico.bus,'see','I saw him <b>crossing</b> the street.')+'</div>'
   +tip(L('Kein <b>to</b> nach diesen Verben!','No <b>to</b> after these verbs!')),
  'Extra: base form instead of -ing|Zusatz: Grundform statt -ing':()=>two(col('-ing',G,ip(ico.clock,L('Handlung läuft, ich sehe einen Teil','action in progress, I see part of it'))+S('I saw him <b>crossing</b> the street.')),col(L('Grundform','base form'),B,ip(ico.calendar,L('ganze Handlung, von Anfang bis Ende','whole action, start to end'))+S('I saw him <b>cross</b> the street.')))
 });
 patch('wl',{
  'want to and would like to|want to und would like to':()=>two(col('want to',O,S('I <b>want to</b> go home.')),col('would like to',G,S('I <b>would like to</b> order a pizza.')+S('<b>Would</b> you <b>like to</b> come with us?')))
   +tip(L('<b>would like</b> ist höflicher als want. Kurzform: I\'d like.','<b>would like</b> is more polite than want. Short form: I\'d like.')),
  'would rather|would rather':()=>frm(['Subject',B],['would rather',O],[L('Grundform ohne to','base form, no to'),G])
   +rule('+',G,'',"I'd rather stay at home.")
   +rule('–',R,'',"I'd rather <b>not</b> go. I'm tired.")
   +rule('?',B,'','Would you rather have tea or coffee?')
 });
 patch('lw',{
  'so and because|so und because':()=>two(col('because',B,ip(ico.cloud,L('Grund','reason'))+S('We stayed at home <b>because</b> it was raining.')),col('so',G,ip(ico.house,L('Folge','result'))+S('It was raining, <b>so</b> we stayed at home.')))
   +tip(L('Grund → because. Folge → so.','Reason → because. Result → so.')),
  'Sequence: first, then, finally|Reihenfolge: first, then, finally':()=>rule('First',B,L('zuerst','at the beginning'),'<b>First</b>, mix the flour and the eggs.')
   +rule('Then',O,L('dann','in the middle'),'<b>Then</b> add the milk.')
   +rule('Finally',G,L('am Schluss','at the end'),'<b>Finally</b>, bake the cake.')
 });
 patch('o',{
  'my or mine?|my oder mine?':()=>two(col('my',B,ip(ico.book,L('steht vor einem Nomen','before a noun'))+S('This is <b>my</b> book.')),col('mine',G,ip(ico.heart,L('steht allein','stands alone'))+S('The book is <b>mine</b>.')))
   +warn(L('Nicht: <s>the mine</s>, <s>mine book</s>.','Not: <s>the mine</s>, <s>mine book</s>.')),
  "its ≠ it's|its ≠ it's":()=>two(col('its',B,ip(ico.cat,L('sein / ihr (Tier, Ding)','his / her (animal, thing)'))+S('The dog wags <b>its</b> tail.')),col("it's",G,ip(ico.sun,L('it is / it has','it is / it has'))+S("<b>It's</b> cold today.")))
 });
 patch('ob',{
  'give me the book|give me the book':()=>two(col('verb + person + thing',B,S('She gave <b>me</b> the book.')),col('verb + thing + to + person',G,S('She gave the book <b>to me</b>.')))
   +warn(L('Nicht: <s>She gave to me the book.</s> und nicht <s>She gave the book me.</s>','Not: <s>She gave to me the book.</s> and not <s>She gave the book me.</s>')),
  'to or for?|to oder for?':()=>two(col('to',B,ip(ico.mail,'give · send · show · tell · pass · lend')+S('He sent a letter <b>to</b> me.')),col('for',G,ip(ico.pizza,'buy · make · cook · get · find')+S('She made a cake <b>for</b> her brother.')))
 });
 patch('ip',{
  'some- or any-?|some- oder any-?':()=>rule('some-',G,L('bejaht','positive'),'There is <b>some</b>one at the door.')
   +rule('any-',R,L('Verneinung','negative'),"I don't know <b>any</b>one here.")
   +rule('any-',B,L('Frage','question'),'Is there <b>any</b>thing in the box?')
   +rule('some-',O,L('Angebot / Bitte','offer / request'),'Would you like <b>some</b>thing to drink?'),
  'no-: already negative|no-: schon verneint':()=>SL.p(L('<b>nobody</b>, <b>nothing</b>, <b>nowhere</b>, <b>no one</b> sind schon verneint. Kein zweites <i>not</i>.','<b>nobody</b>, <b>nothing</b>, <b>nowhere</b>, <b>no one</b> are already negative. No second <i>not</i>.'))
   +two(col('✗',R,S('I didn\'t see <s>nothing</s>.')+S('<s>Nobody doesn\'t</s> know.')),col('✓',G,S("I didn't see <b>anything</b>. / I saw <b>nothing</b>.")+S('<b>Nobody</b> knows.')))
 });
 patch('n',{
  'some / any|some / any':()=>two(col('some',G,ip(ico.pizza,L('bejaht, Angebot, Bitte','positive, offer, request'))+S('I have <b>some</b> apples.')+S('Would you like <b>some</b> tea?')),col('any',R,ip(ico.cloud,L('Verneinung, Frage','negative, question'))+S("I don't have <b>any</b> money.")+S('Is there <b>any</b> milk?'))),
  'much / many / a lot of|much / many / a lot of':()=>rule('much',B,L('unzählbar (Frage, Verneinung)','uncountable (question, negative)'),"How <b>much</b> milk? · There isn't <b>much</b> time.")
   +rule('many',G,L('zählbar, Plural','countable, plural'),"How <b>many</b> apples? · There aren't <b>many</b> chairs.")
   +rule('a lot of',O,L('beides, vor allem bejaht','both, mostly positive'),'We have <b>a lot of</b> homework.'),
  'a few / a little / few / little|a few / a little / few / little':()=>two(col(L('positiv','positive'),G,ip(ico.heart,'a few · a little')+S('I have <b>a few</b> friends here, so I am not alone.')),col(L('negativ','negative'),R,ip(ico.cloud,'few · little')+S('I have <b>few</b> friends here. I feel lonely.')))
 });
 patch('rf',{
  'When do you use it?|Wann braucht man es?':()=>two(col(L('Reflexivpronomen','reflexive pronoun'),G,ip(ic.she,L('Handelnder = Betroffener','doer = receiver'))+S('He hurt <b>himself</b>.')+S('I cut <b>myself</b>.')),col(L('Objektpronomen','object pronoun'),B,ip(ic.he,L('eine andere Person','another person'))+S('He hurt <b>him</b>.'))),
  'each other = one another|each other = einander':()=>two(col('themselves',G,ip(ic.they,L('jeder sich selbst','each one themselves'))+S('They hurt <b>themselves</b>.')),col('each other',B,ip(ic.they,L('der eine den anderen','one another'))+S('They hurt <b>each other</b>.')))
 });
 patch('pa',{
  '-ed or -ing?|-ed oder -ing?':()=>two(col('-ed',B,ip(ic.he,L('Wie fühle ich mich?','How do I feel?'))+S('I am <b>bored</b>.')+S('We were <b>excited</b>.')),col('-ing',O,ip(ico.film,L('Was löst das Gefühl aus?','What causes the feeling?'))+S('The film is <b>boring</b>.')+S('The match was <b>exciting</b>.')))
   +warn(L('<i>I am boring</i> heisst «Ich bin langweilig»!','<i>I am boring</i> means you are a boring person!'))
 });
 patch('p',{
  'Time: at / on / in|Zeit: at / on / in':()=>rule('at',B,L('Uhrzeit, Zeitpunkt','clock time, point'),'<b>at</b> 8 o\'clock · <b>at</b> noon · <b>at</b> night')
   +rule('on',G,L('Tage und Datum','days and dates'),'<b>on</b> Monday · <b>on</b> 5 May')
   +rule('in',O,L('Monat, Jahr, Jahreszeit, Tageszeit','month, year, season, part of day'),'<b>in</b> May · <b>in</b> 2024 · <b>in</b> summer'),
  'Place: in / on / at|Ort: in / on / at':()=>rule('in',O,L('Raum, Stadt, Land','room, city, country'),'<b>in</b> the kitchen · <b>in</b> Zurich')
   +rule('on',G,L('Oberfläche, Stockwerk','surface, floor'),'<b>on</b> the table · <b>on</b> the first floor')
   +rule('at',B,L('Punkt, Ort','point, place'),'<b>at</b> the bus stop · <b>at</b> home')
 });
})();
